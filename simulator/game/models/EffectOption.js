import { Clone } from '../../utils/helpers.js';

/**
 * 効果オプションクラス
 */
export default class EffectOption {
  /**
   * Create a effect option.
   * @param {Object} effectOption
   */
  constructor(effectOption) {
    /** タイプ @type {String} */
    this.type = effectOption.type;
    /** 参照対象 @type {String} */
    this.target = effectOption.target;
    /** 値 @type {Number} */
    this.value = effectOption.value;
  }
}
