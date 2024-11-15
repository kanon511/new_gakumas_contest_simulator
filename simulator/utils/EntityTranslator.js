import DataLoader from '../game/data/DataLoader.js';

DataLoader.initialize();

export default class EntityTranslator {
  static signTranslation = {
    '==': '',
    '!=': '以外',
    '>=': '以上',
    '<=': '以下',
    '>': 'より多い',
    '<': 'より少ない',
  };
  static turnTypeTranslation = {
    vocal: 'ボーカル',
    dance: 'ダンス',
    visual: 'ビジュアル',
  };
  static cardTypeTranslation = {
    active: 'アクティブ',
    mental: 'メンタル',
    trouble: 'トラブル',
  };
  static cardPlanTranslation = {
    free: 'フリー',
    sense: 'センス',
    logic: 'ロジック',
    anomaly: 'アノマリー',
  };
  static guidelineTranslation = {
    0: '無',
    1: '無',
    2: '温存',
    3: '強気',
    4: '全力',
  };
  static effectTypeTranslation = {
    score: 'スコア',
    heal: '体力回復',
    hp: '体力消費',
    direct_hp: '体力直接消費',
    fixed_direct_hp: '固定体力直接消費',
    genki: '元気',
    fixed_genki: '固定元気',
    draw: 'ドロー',
    discard: '手札捨棄',
    exchange: '手札入れ替え',
    upgrade: '手札強化',
    generate: '生成',
    extra_turn: '追加ターン',
    cost: 'コスト',
  };

  static translateEffectType(type, target) {
    if (type == 'status') {
      return target;
    }
    return this.effectTypeTranslation[type];
  }

  static targetNameTranslation = {
    maxHp: '最大体力',
    genki: '元気',
    score: 'スコア',
    cardPlayCount: 'カード使用数',
    currentTurnCardPlayCount: 'このターンのカード使用数',
    consumedHp: '消費した体力',
  };

  static translateTargetName(target) {
    return this.targetNameTranslation[target] ?? target;
  }
  static translateGrowth(growth) {
    if (!growth) {
      return '';
    }
    const trigger = this.translateTrigger(growth.trigger);
    const condition = this.translateCondition(growth.condition);
    const effects = growth.effects?.map((effect) => this.translateEffect(effect)) ?? '';
    return `成長：${trigger}、${condition}なら、${effects.join('、')}`;
  }
  static translatePreEffect(preEffect) {
    if (!preEffect) {
      return '';
    }
    return preEffect.type;
  }

  static translate(entity) {
    if (!entity) {
      return;
    }
    const effect = entity.effects?.map((effect) => this.translateEffect(effect)) ?? '';
    return {
      plan: this.cardPlanTranslation[entity.plan],
      trigger: this.translateTrigger(entity?.trigger),
      condition: this.translateCondition(entity?.condition),
      effects: effect,
    };
  }
  static translateCard(card) {
    if (!card) {
      return;
    }
    const effects = card.effects?.map((effect) => this.translateEffect(effect)) ?? [];
    const preEffects = card.pre_effects?.map((effect) => this.translatePreEffect(effect)) ?? [];
    const growths = card.growths?.map((effect) => this.translateGrowth(effect)) ?? [];
    return {
      growths: growths,
      plan: this.cardPlanTranslation[card.plan],
      type: this.cardTypeTranslation[card.type],
      condition: this.translateCondition(card?.condition),
      cost: this.translateEffect(card.cost),
      preEffects: preEffects,
      effects: effects,
    };
  }
  /**
   * Entityの発動タイミングを日本語にします。
   * @param {String} trigger - Entityの発動タイミング
   * @return {String}
   */
  static translateTrigger(trigger) {
    switch (trigger) {
      case 'start_game':
        return 'ゲーム開始時';
      case 'start_turn':
        return 'ターン開始時';
      case 'start_turn_interval':
        return 'ターン開始時';
      case 'end_turn':
        return 'ターン終了時';
      case 'before_play_card':
        return 'カード使用時';
      case 'after_play_card':
        return 'カード使用後';
      case 'consume_hp':
        return '体力減少時';
      default:
        if (~trigger.indexOf('increased_status')) {
          return trigger.replace('increased_status:', '') + '増加後';
        }
        return trigger;
    }
  }
  /**
   * Entityの発動条件を日本語にします。
   * @param {String} condition - 発動条件
   * @return {String}
   */
  static translateCondition(condition) {
    if (!condition) {
      return '';
    }
    const signs = ['==', '!=', '>=', '<=', '>', '<'];
    const result = condition
      .split('|')
      .map((orSplitedCondition) => {
        return orSplitedCondition
          .split('&')
          .map((expression) => {
            const sign = signs.find((sign) => ~expression.indexOf(sign));
            const [key, value] = expression.split(sign);
            return this.translateConditionExpression(key, value, sign);
          })
          .join('、');
      })
      .join('または');
    return result;
  }
  static translateConditionExpressionEffect(key, value) {
    if (key == 'hp_per') {
      return `体力割合が${value}%`;
    }
    if (key == 'score') {
      return `スコアが${value}`;
    }
    if (key == 'genki') {
      return `元気が${value}`;
    }
    if (key == 'turn') {
      return `${value}ターン目`;
    }
    if (key == 'turn_type') {
      return `${this.turnTypeTranslation[value]}ターン`;
    }
    if (key == 'turn_multiple_of') {
      return `${value}ターン毎`;
    }
    if (key == 'card_id') {
      return DataLoader.getCardById(Number(value))?.name;
    }
    if (key == 'card_type') {
      return `${this.cardTypeTranslation[value]}カード`;
    }
    if (key == 'card_contains_effect') {
      const [type, target] = value.split(':');
      if (type == '指針' && target) {
        return `${this.guidelineTranslation[target]}効果のカード`;
      }
      return `${this.effectTypeTranslation[type] ?? type}効果のカード`;
    }
    if (key == 'card_play_count_multiple_of') {
      return `使用したカード数が${value}の倍数`;
    }
    if (key == 'current_turn_card_play_count_multiple_of') {
      return `ターン内に使用したカード数が${value}の倍数`;
    }
    if (key == 'remain_turn') {
      return `残り${value}ターン`;
    }
    if (key == '指針') {
      return `指針:${this.guidelineTranslation[value]}`;
    }
    return `${key}が${value}`;
  }
  static translateConditionExpression(key, value, sign) {
    const signText = this.signTranslation[sign];
    const effectText = this.translateConditionExpressionEffect(key, value);
    return `${effectText}${signText}`;
  }
  static translateEffectValue(value, options) {
    let result = value < 0 ? `${value}` : `+${value}`;
    if (options) {
      let optionTexts = [];
      options.forEach(({ type, target, value }) => {
        if (type != 'status_option') {
          return;
        }
        switch (target) {
          case 'turn':
            optionTexts.push(`${value}ターン`);
            break;
          case 'limit':
            optionTexts.push(`${value}回`);
            break;
        }
      });
      if (optionTexts.length > 0) {
        result += `(${optionTexts.join(',')})`;
      }
    }
    return result;
  }
  static translateEffectDelay(delay) {
    if (!delay || delay < 0) {
      return '';
    }
    return `${delay}ターン後、`;
  }
  static translateEffect({ type, target, value, condition, delay, options }) {
    const optionTexts = {
      increase_by_factor: '',
      'increase_by_factor-1': '',
      increase_by_percentage: '',
    };
    const conditionText = this.translateCondition(condition);
    const delayText = this.translateEffectDelay(delay);
    const effectType = this.translateEffectType(type, target);
    const valueText = this.translateEffectValue(value, options);
    if (options) {
      options.forEach(({ type, target, value }) => {
        if (type == 'increase_by_factor') {
          optionTexts[type] = `(${this.translateTargetName(target)}の${value}倍加算)`;
          return;
        }
        if (type == 'increase_by_factor-1') {
          optionTexts[type] = `(${this.translateTargetName(target)}${value}倍適用)`;
          return;
        }
        if (type == 'increase_by_percentage') {
          const postfix = value < 0 ? '減少' : '増加';
          optionTexts[type] = `${this.translateTargetName(target)}${Math.abs(
            value
          )}%分の${effectType}${postfix}`;
          return;
        }
      });
    }
    if (optionTexts['increase_by_percentage']) {
      return `${conditionText}${conditionText ? 'の場合、' : ''}${delayText}${
        optionTexts['increase_by_percentage']
      }${optionTexts['increase_by_factor']}${optionTexts['increase_by_factor-1']}`;
    }
    return `${conditionText}${
      conditionText ? 'の場合、' : ''
    }${delayText}${effectType}${valueText}${optionTexts['increase_by_factor']}${
      optionTexts['increase_by_factor-1']
    }`;
  }
}
