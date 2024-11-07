import StatusEffect from './StatusEffect.js';
import StatusEffectValue from './StatusEffectValue.js';

/**
 * 通常バフ/デバフ
 */
export default class PassiveStatusEffect extends StatusEffect {
  /**
   * Create a passive status effect.
   * @param {Object<String, any>} passiveStatusEffect
   */
  constructor(passiveStatusEffect) {
    super(passiveStatusEffect, []);
    /** 値のタイプ @type {String} */
    this.valueType = passiveStatusEffect.valueType;
    if (this.valueType == 'number') {
      /** 値 @type {Number} */
      this.value = 0;
    } else if (this.valueType == 'list') {
      /** 値配列 @type {Array<StatusEffectValue>} */
      this.valueList = [];
    }

    /** 自然現象免除 @type {Boolean} */
    this.isSkipDecay = true;
  }
}
