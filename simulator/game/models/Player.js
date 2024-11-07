import EffectCalculator from '../calculator/EffectCalculator.js';
import { Clone, RandomGenerator } from '../../utils/helpers.js';
import Card from './Card.js';
import Condition from './Condition.js';
import Deck from './Deck.js';
import Effect from './Effect.js';
import Parameter from './Parameter.js';
import PItemBundle from './PItemBundle.js';
import PlayerLog from './PlayerLog.js';
import StatusEffectManager from './StatusEffectManager.js';
import TurnManager from './TurnManager.js';
import DataLoader from '../data/DataLoader.js';
import ActiveStatusEffect from './ActiveStatusEffect.js';
import PItem from './PItem.js';

/**
 * プレイヤークラス
 */
export default class Player extends Clone {
  /**
   * Create a player.
   * @param {Object} data - ゲーム設定のデータ
   * @param {Object} data.playerData - playerに関するデータ
   * @param {Object} data.stageData - stageに関するデータ
   * @param {Array} data.cardIds - カードIDリスト
   * @param {Array} data.pItemIds - PアイテムIDリスト
   */
  constructor({ playerData, stageData, cardIds, pItemIds }) {
    super(['parameter', 'log']);
    /** 乱数器 @type {RandomGenerator} */
    this.random = new RandomGenerator(Date.now());
    /** パラメータ @type {Parameter} */
    this.parameter = new Parameter(
      playerData.vocal,
      playerData.dance,
      playerData.visual
    );
    /** デッキ @type {Deck} */
    this.deck = new Deck(cardIds, this.random);
    /** Pアイテム @type {PItemBundle} */
    this.pItemBundle = new PItemBundle(pItemIds);
    /** ステータス @type {StatusEffectManager} */
    this.status = new StatusEffectManager();
    /** ターン @type {TurnManager} */
    this.turnManager = new TurnManager(stageData, this.random);
    /** 体力 @type {Number} */
    this.hp = playerData.hp;
    /** 最大体力 @type {Number} */
    this.maxHp = playerData.hp;
    /** プラン @type {String} */
    this.plan = playerData.plan;
    /** おすすめ効果 @type {String} */
    this.trend = playerData.trend;
    /** 元気 @type {Number} */
    this.genki = 0;
    /** スコア @type {Number} */
    this.score = 0;
    /** ゲームが終わったかどうか @type {Boolean} */
    this.isGameOver = false;
    /** カード使用数 @type {Number} */
    this.cardPlayCount = 0;
    /** 現在ターンのカード使用数 @type {Number} */
    this.currentTurnCardPlayCount = 0;
    /** 残りの再行動数 @type {Number} */
    this.remainExtraAction = 0;
    /** 消費したHP @type {Number} */
    this.consumedHp = 0;
    /** 効果2回発動 @type {Number} */
    this.dualCast = 0;
    /** 最後に使用したカード @type {Card|null} */
    this.lastPlayCard = null;
    /** フェーズ @type {Number} */
    this.phase = 0;
    /** ログ @type {PlayerLog} */
    this.log = new PlayerLog();
  }

  clone() {
    const copy = super.clone();
    copy.deck.setRandom(copy.random);
    copy.turnManager.setRandom(copy.random);
    copy.log = new PlayerLog();
    return copy;
  }

  /**
   * 初期化
   */
  init() {
    this.deck.init(this);
    this.status.add('好印象効果', 1);
    this.triggerEvent('start_game');
    this.startTurn(false);
  }

  /**
   * ターン開始時の動き
   * @param {Boolean} isDraw - 開始時ドローをするかどうか
   */
  startTurn(isDraw) {
    this.phase = 0;
    this.turnManager.startTurn();
    this.log.add(
      'newTurn',
      null,
      [
        this.turnManager.currentTurn,
        this.turnManager.currentTurnType,
        this.score,
        this.hp,
        this.genki,
      ].join(':')
    );
    if (isDraw) {
      this.drawCards(3);
    }
    this.triggerEvent('start_turn');
    this.triggerEvent('start_turn_interval');
    this.phase = 1;
  }

  drawCards(count) {
    const preHandCards = this.deck.handCardIndexes.length;
    this.deck.drawCards(count);
    const postHandCards = this.deck.handCardIndexes.length;
    if (preHandCards < postHandCards) {
      this.log.add(
        'effect',
        null,
        `カードを${postHandCards - preHandCards}枚引いた`
      );
    } else {
      this.log.add('effect', null, `カードを引けなかった`);
    }
  }

  /**
   * ターン終了時の動き
   * @param {Boolean} isDiscard - 終了時捨てをするかどうか
   */
  endTurn(isDiscard) {
    this.triggerEvent('end_turn');
    this.triggerEvent('end_turn_goodImpression');
    if (isDiscard) {
      this.deck.discardAllHandCards();
    }
    this.status.decay();
    this.currentTurnCardPlayCount = 0;
    this.turnManager.endTurn();
  }

  /**
   * 休憩行動
   */
  rest() {
    this.log.add('use', 'rest');
    this.applyEffect(new Effect({ type: 'heal', value: 2 }), 'rest');
    this.log.add('end');
  }

  /**
   * Player processes next step.
   * @param {Number} selectedHandIndex
   */
  next(selectedHandIndex) {
    if (selectedHandIndex == -1) {
      this.rest();
    } else {
      this.playCard(selectedHandIndex);
      // 再行動可能ならそのまま終了
      const extraAction = this.status.getValue('スキルカード使用数追加');
      if (extraAction > 0) {
        this.status.reduce('スキルカード使用数追加', 1);
        this.log.add(
          'effect',
          null,
          `スキルカード使用数追加${extraAction}→${extraAction - 1}(-1)`
        );
        return;
      }
    }
    this.endTurn(true);
    // 残りターンが0なら終了フラグを立てる
    if (this.turnManager.getRemainTurn() == 0) {
      this.isGameOver = true;
      return;
    }
    this.startTurn(true);
  }

  /**
   * Check condition
   * @param {Condition|undefined} condition
   * @return {Boolean}
   */
  checkCondition(condition) {
    if (!condition) {
      return true;
    }
    return condition.check(this);
  }

  /**
   * コストが支払い可能かを判定します。
   * @param {Effect} cost
   * @return {Boolean}
   */
  checkCost(cost) {
    const value = EffectCalculator.calcValue(cost, this);
    if (cost.type == 'hp') return this.hp + this.genki >= -value;
    if (cost.type == 'direct_hp') return this.hp >= -value;
    return this.status.getValue(cost.target) >= -value;
  }

  getActions() {
    const handCards = this.deck.getHandCards();
    const actions = [];
    const actionSet = new Set();
    for (let i = 0; i < handCards.length; i++) {
      const card = handCards[i];
      if (actionSet.has(card.name)) {
        continue;
      }
      if (this.checkCondition(card.condition) && this.checkCost(card.cost)) {
        actions.push({
          action: card,
          index: i,
        });
        actionSet.add(card.name);
      }
    }
    if (actions.length == 0) {
      actions.push({
        action: { name: '休憩' },
        index: -1,
      });
    }
    return actions;
  }

  /**
   * Get available effects from effects.
   * @param {Array<Effect>} effects
   * @return {Array<Effect>}
   */
  getAvailableEffects(effects) {
    const results = [];
    for (let i = 0; i < effects.length; i++) {
      const effect = effects[i];
      if (this.checkCondition(effect.condition)) {
        results.push(effect);
      }
    }
    return results;
  }

  /**
   * カードの使用
   * @param {Number} selectedHandIndex - 手札の番号
   */
  playCard(selectedHandIndex) {
    const card = this.deck.getHandCard(selectedHandIndex);
    this.log.add('use', 'card', card.name);
    this.lastPlayCard = card;
    this.cardPlayCount += 1;
    this.currentTurnCardPlayCount += 1;
    // コスト消費
    this.applyEffect(card.cost, 'card');
    // カード効果条件判定
    const availableEffects = this.getAvailableEffects(card.effects);
    // カード使用する時効果
    this.triggerEvent('before_play_card');
    // カード使用
    this.deck.playHandCard(selectedHandIndex);
    // カードの効果
    availableEffects.forEach((effect) => this.applyEffect(effect, 'card'));
    // ワンモア効果
    if (this.dualCast > 0) {
      this.log.add('use', 'card', card.name);
      this.dualCast -= 1;
      availableEffects.forEach((effect) => this.applyEffect(effect, 'card'));
      this.log.add('end');
    }
    // カード使用後の効果
    this.triggerEvent('after_play_card');
    this.log.add('end');
  }

  /**
   * 行動にトリガーするイベントを起こす
   * @param {String} trigger - トリガータイミング
   */
  triggerEvent(trigger) {
    const pItemEvents = this.pItemBundle.getEvents(trigger, this);
    const statusEvents = this.status.getEvents(trigger, this);
    // Pアイテム実行
    for (let i = 0; i < pItemEvents.length; i++) {
      const event = pItemEvents[i];
      this.log.add('use', 'pItem', event.name);
      event.effects.forEach((effect) => this.applyEffect(effect, 'pItem'));
      this.log.add('end');
    }
    // ステータス効果実行
    for (let i = 0; i < statusEvents.length; i++) {
      const event = statusEvents[i];
      this.log.add('use', event.id == -1 ? 'delay' : 'status', event.name);
      event.effects.forEach((effect) => this.applyEffect(effect, 'status'));
      this.log.add('end');
    }
  }

  /**
   * EffectをPlayerに適用する
   * @param {Effect} effect
   * @param {String} sourceType
   * @returns
   */
  applyEffect(effect, sourceType) {
    const { type, target, options, delay, condition } = effect;

    if (delay) {
      this.status.addDelayEffect(
        '予約効果',
        this.turnManager.currentTurn + delay,
        effect
      );
      this.log.add('effect', null, `予約効果(${delay}ターン後)`);
      return;
    }

    const value = EffectCalculator.calcValue(effect, this);
    const isTriggerEvent = sourceType == 'card';

    // console.log(`applyEffect: ${type}, ${target}, ${value}`);

    if (type == 'score') {
      const score = this.score;
      this.score += Math.ceil(
        value * this.parameter.getScale(this.turnManager.currentTurnType)
      );
      this.log.add(
        'effect',
        null,
        `スコア：${score}→${this.score}(${this.score - score})`
      );
      if (Number.isNaN(this.score)) {
        console.log(
          this,
          effect,
          sourceType,
          value,
          this.parameter.get(this.turnManager.currentTurnType)
        );
        throw new Error('era-');
      }
      return;
    }
    if (type == 'heal') {
      const hp = this.hp;
      this.hp = Math.min(this.hp + value, this.maxHp);
      this.log.add('effect', null, `HP：${hp}→${this.hp}(${this.hp - hp})`);
      return;
    }
    if (type == 'hp' || type == 'direct_hp' || type == 'fixed_direct_hp') {
      const hp = this.hp;
      const genki = this.genki;
      if (type == 'direct_hp' || type == 'fixed_direct_hp') {
        this.hp += value;
      } else if (this.genki < -value) {
        this.hp += this.genki + value;
        this.genki = 0;
      } else {
        this.genki += value;
      }
      this.hp = Math.max(this.hp, 0);

      if (this.genki < genki) {
        this.log.add(
          'effect',
          null,
          `元気：${genki}→${this.genki}(${this.genki - genki})`
        );
      }
      if (this.hp < hp) {
        this.consumedHp += hp - this.hp;
        this.log.add('effect', null, `HP：${hp}→${this.hp}(${this.hp - hp})`);
      }
      if (isTriggerEvent && this.hp < hp) {
        // hp減少時
        this.triggerEvent('consume_hp');
      }
      return;
    }
    if (type == 'genki' || type == 'fixed_genki') {
      const genki = this.genki;
      this.genki += value;
      this.log.add(
        'effect',
        null,
        `元気：${genki}→${this.genki}(${this.genki - genki})`
      );
      return;
    }
    if (type == 'draw') {
      this.drawCards(value);
      return;
    }
    if (type == 'discard') {
      this.log.add('effect', null, `全ての手札を捨てた`);
      this.deck.discardAllHandCards();
      return;
    }
    if (type == 'exchange') {
      const handCard = this.deck.handCardIndexes.length;
      this.log.add('effect', null, `全ての手札を捨てた`);
      this.deck.discardAllHandCards();
      this.drawCards(handCard);
      return;
    }
    if (type == 'upgrade') {
      if (value == 0) {
        this.log.add('effect', null, `全ての手札を強化した`);
        this.deck.upgradeAllHandCards();
      } else {
        this.log.add('effect', null, `${value}枚の手札を強化した`);
        this.deck.upgradeRandomHandCards(value);
      }
      return;
    }
    if (type == 'generate') {
      if (target == 'ランダムな強化済みスキルカード') {
        const targetCardList = Array.from(DataLoader.cardMap.values()).filter(
          (item) =>
            (item.plan == 'free' || item.plan == this.plan) && // プラン指定
            item.id % 10 == 1 && // 強化カード
            item.id > 2000000 && // 基本カード削除
            String(item.id)[1] != '2' && // キャラ固有削除)
            String(item.id)[1] != '3' // サポ固有削除)
        );
        const targetCard =
          targetCardList[
            Math.floor(this.random.next() * targetCardList.length)
          ];
        this.deck.addCard(targetCard.id, 'hand');
        this.log.add('effect', null, `${targetCard.name}を手札に加えた`);
      }
      return;
    }
    if (type == 'extra_turn') {
      const extraTurn = this.turnManager.extraTurn;
      this.turnManager.addExtraTurn(value);
      this.log.add(
        'effect',
        null,
        `追加ターン：${extraTurn}→${extraTurn + value}(${value})`
      );
      return;
    }
    if (type == 'dual_cast') {
      this.dualCast += 1;
      this.log.add('effect', null, `次の効果をもう一回効果を発動`);
      return;
    }
    if (type == 'status') {
      if (value >= 0) {
        if (
          this.status.has('低下状態無効') &&
          this.status.getType(target) == 'debuff'
        ) {
          this.status.reduce('低下状態無効', 1);
          const _value = this.status.getValue('低下状態無効');
          this.log.add(
            'effect',
            null,
            `低下状態無効：${_value + 1}→${_value}(-1)`
          );
        } else {
          const _value = this.status.getValue(target);
          this.status.add(target, value, options, this.phase);
          this.log.add(
            'effect',
            null,
            `${target}：${_value}→${_value + value}(${value})`
          );
          if (isTriggerEvent) {
            // ステータスアップにフック
            this.triggerEvent(`increased_status:${target}`);
          }
        }
      } else {
        const _value = this.status.getValue(target);
        this.status.reduce(target, -value);
        this.log.add(
          'effect',
          null,
          `${target}：${_value}→${_value + value}(${value})`
        );
      }
      return;
    }
    throw new Error(`effect.type=${effect.type}は設定されていません`);
  }
}
