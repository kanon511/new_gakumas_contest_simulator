import DataLoader from '../data/DataLoader.js';
import { Clone, createRange, RandomGenerator } from '../../utils/helpers.js';
import Card from './Card.js';
import Player from './Player.js';
import Condition from './Condition.js';

/**
 * カード管理クラス
 */
export default class Deck extends Clone {
  /**
   * Create a deck.
   * @param {Array<Number>} cardIdList - デッキに入れるカードIDリスト
   * @param {RandomGenerator} random - 乱数器
   */
  constructor(cardIdList, random) {
    super(['random']);
    /** デッキ内全カード @type {Array<Card>} */
    this.cards = cardIdList.map((id) => new Card(id));
    /** 山札のインデックス @type {Array<Number>} */
    this.drawPileIndexes = [];
    /** 手札のインデックス @type {Array<Number>} */
    this.handCardIndexes = [];
    /** 捨札のインデックス @type {Array<Number>} */
    this.discardPileIndexes = [];
    /** 廃棄札のインデックス @type {Array<Number>} */
    this.exhaustedPileIndexes = [];
    /** 乱数器 @type {RandomGenerator} */
    this.random = random;
    this.growthEffectMap = new Map();
  }

  setRandom(random) {
    this.random = random;
  }

  /**
   * Shuffle a array.
   * @param {Array<any>} array - シャッフルされる配列
   */
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(this.random.next() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  triggerEvents(trigger, player, log) {
    const targets = this.growthEffectMap.get(trigger);
    if (!targets) {
      return [];
    }
    const remains = [];
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      if (!target.condition || target.condition.check(player)) {
        const targetCard = this.cards[target.cardIndex];
        log.add('use', 'grow', targetCard.name);
        target.effects.forEach((effect) => {
          if (effect.type == 'score') {
            targetCard.effects.forEach((cardEffect, index) => {
              if (cardEffect.type == 'score') {
                log.add(
                  'effect',
                  null,
                  `スコア：${targetCard.effects[index].value}→${
                    targetCard.effects[index].value + effect.value
                  }(${effect.value})`
                );
                targetCard.effects[index].value += effect.value;
              }
            });
          } else if (effect.type == 'cost') {
            log.add(
              'effect',
              null,
              `コスト：${targetCard.cost.value}→${
                targetCard.cost.value - effect.value
              }(${-effect.value})`
            );
            targetCard.cost.value -= effect.value;
          }
        });
        log.add('end');
        if (target.use()) {
          remains.push(target);
        }
      } else {
        remains.push(target);
      }
    }
    this.growthEffectMap.set(trigger, remains);
  }

  /**
   * Init a deck and apply pre-effect to player.
   * @param {Player} player - プレイヤー
   */
  init(player) {
    const initCardIndexes = createRange(0, this.cards.length);
    this.shuffle(initCardIndexes);
    const drawPileIndexes = [];
    const topDrawPileIndexes = [];

    // preeffects
    for (let i = 0; i < initCardIndexes.length; i += 1) {
      const growths = this.cards[initCardIndexes[i]]['growths'];
      if (growths) {
        growths.forEach((growth) => {
          const trigger = growth.trigger;
          if (!this.growthEffectMap.has(trigger)) {
            this.growthEffectMap.set(trigger, []);
          }
          growth.setCardIndex([initCardIndexes[i]]);
          this.growthEffectMap.get(trigger).push(growth);
        });
      }
      // 「レッスン開始時手札に入る」カードを手札に入れる
      // 6枚目以降はデッキトップに置く
      const pre_effects = this.cards[initCardIndexes[i]]['preEffects'];
      if (!pre_effects) {
        drawPileIndexes.push(initCardIndexes[i]);
        continue;
      }
      if (pre_effects.map((effect) => effect.type).includes('レッスン開始時手札に入る')) {
        if (this.handCardIndexes.length < 5) {
          this.handCardIndexes.push(initCardIndexes[i]);
        } else {
          topDrawPileIndexes.push(initCardIndexes[i]);
        }
      }
    }
    this.drawPileIndexes = drawPileIndexes.concat(topDrawPileIndexes);
    this.drawCards(3 - this.handCardIndexes.length);
  }

  /**
   * Move a card from draw pile to hand.
   */
  drawCard() {
    // 山札が0なら捨て札をシャッフルして山札にする
    if (this.drawPileIndexes.length == 0) {
      if (this.discardPileIndexes.length == 0) {
        return;
      } // 山札と捨て札が両方0ならドローできない
      this.drawPileIndexes = this.discardPileIndexes;
      this.discardPileIndexes = [];
      this.shuffle(this.drawPileIndexes);
    }
    // 手札が5枚未満ならドロー
    // 5枚以上なら捨て札に置く
    const cardIndex = this.drawPileIndexes.pop();
    if (typeof cardIndex === 'undefined') {
      return;
    }
    if (this.handCardIndexes.length < 5) {
      this.handCardIndexes.push(cardIndex);
    } else {
      this.discardPileIndexes.push(cardIndex);
    }
  }

  /**
   * Move cards from draw pile to hand.
   * @param {Number} count - 引く枚数
   */
  drawCards(count) {
    if (this.handCardIndexes.length >= 5) {
      return;
    }
    for (let i = 0; i < count; i++) {
      this.drawCard();
    }
  }

  /**
   * Add a card into the deck.
   * @param {Number} cardId - 追加するカードのID
   * @param {String} place - 追加する場所
   */
  addCard(cardId, place) {
    const additionalCard = new Card(cardId);
    this.cards.push(additionalCard);
    const additionalCardIndex = this.cards.length - 1;
    switch (place) {
      case 'draw':
        this.drawPileIndexes.push(additionalCardIndex);
        break;
      case 'hand':
        this.handCardIndexes.push(additionalCardIndex);
        break;
      case 'discard':
        this.discardPileIndexes.push(additionalCardIndex);
        break;
      case 'exhausted':
        this.exhaustedPileIndexes.push(additionalCardIndex);
        break;
    }
  }

  /**
   * 手札を強化する
   * @param {Number} index - カードのインデックス
   */
  upgradeHandCard(index) {
    const targetCard = this.cards[index];
    if (
      Number(targetCard.id) % 10 == 0 && // 未強化カード
      DataLoader.cardMap.has(Number(targetCard.id) + 1) // 強化が存在する
    ) {
      this.cards[index] = new Card(Number(targetCard.id) + 1);
    }
  }

  getCanUpgradeHandCards() {
    return this.handCardIndexes.filter((index) => {
      const card = this.cards[index];
      return Number(card.id) % 10 == 0 && DataLoader.cardMap.has(Number(card.id) + 1);
    });
  }

  upgradeRandomHandCards(count) {
    const canUpgradeHandCards = this.getCanUpgradeHandCards();
    this.shuffle(canUpgradeHandCards);
    const loop = Math.min(canUpgradeHandCards.length, count);
    for (let i = 0; i < loop; i++) {
      this.upgradeHandCard(canUpgradeHandCards[i]);
    }
  }

  /**
   * 全ての手札を強化する
   */
  upgradeAllHandCards() {
    this.handCardIndexes.forEach((index) => this.upgradeHandCard(index));
  }

  /**
   * 手札のカードを使用する
   * @param {Number} handIndex - 手札の番号
   */
  playHandCard(handIndex) {
    const targetCard = this.cards[this.handCardIndexes[handIndex]];
    if (targetCard.limit > 0) {
      targetCard.limit -= 1;
      if (targetCard.limit == 0) {
        this.exhaustedHandCard(handIndex);
        return;
      }
    }
    this.discardHandCard(handIndex);
  }

  /**
   * 手札の番号からカードを取得する
   * @param {Number} handIndex - 手札の番号
   * @return {Card} カード
   */
  getHandCard(handIndex) {
    return this.cards[this.handCardIndexes[handIndex]];
  }

  /**
   * 手札のカードを取得する
   * @return {Array<Card>} 手札のカード配列
   */
  getHandCards() {
    return this.handCardIndexes.map((index) => this.cards[index]);
  }

  /**
   * 手札から廃棄札にカードを移動する
   * @param {Number} handIndex - 手札の番号
   */
  exhaustedHandCard(handIndex) {
    this.exhaustedPileIndexes.push(this.handCardIndexes.splice(handIndex, 1)[0]);
  }

  /**
   * 手札から捨札にカードを移動する
   * @param {Number} handIndex - 手札の番号
   */
  discardHandCard(handIndex) {
    this.discardPileIndexes.push(this.handCardIndexes.splice(handIndex, 1)[0]);
  }

  /**
   * 全ての手札を捨札に移動する
   */
  discardAllHandCards() {
    this.handCardIndexes.forEach((index) => this.discardPileIndexes.push(index));
    this.handCardIndexes = [];
  }

  /**
   * プリント
   */
  print() {
    const name_list = [
      'drawPileIndexes',
      'handCardIndexes',
      'discardPileIndexes',
      'exhaustedPileIndexes',
    ];
    try {
      for (const name of name_list) {
        const cards = this[name].map((index) => this.cards[index]);
        console.log(`${name.padEnd(18, ' ')}: ${cards.map((card) => card.name).join(', ')}`);
      }
    } catch (e) {
      console.log('deck error', e);
      for (const name of name_list) {
        console.log(this[name]);
      }
    }
  }
}
