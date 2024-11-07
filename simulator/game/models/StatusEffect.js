import { Clone } from '../../utils/helpers.js';

/**
 * バフ/デバフ
 */
export default class StatusEffect extends Clone {
  /**
   * Create a status effect.
   * @param {Object<String, any>} statusEffect
   */
  constructor(statusEffect, refProps) {
    super(refProps);
    /** ステータスID @type {Number} */
    this.id = statusEffect.id;
    /** ステータス名 @type {String} */
    this.name = statusEffect.name;
    /** ステータスタイプ(buff/debuff) @type {String} */
    this.type = statusEffect.type;
    /** 自然減少するかどうか @type {Boolean} */
    this.isDecay = statusEffect.isDecay;
    if (statusEffect.decayType) {
      /** 自然減少タイプ @type {String} */
      this.decayType = statusEffect.decayType;
    }
  }
}
