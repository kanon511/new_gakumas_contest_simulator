import { Clone } from '../../utils/helpers.js';

/**
 * 事前効果クラス
 */
export default class PreEffect extends Clone {
  /**
   * Create a pre effect.
   * @param {Object} preEffect
   */
  constructor(preEffect) {
    super();
    /** タイプ @type {String} */
    this.type = preEffect.type;
    /** 参照対象 @type {String} */
    this.target = preEffect.target;
    /** 値 @type {Number} */
    this.value = preEffect.value;
  }
}
