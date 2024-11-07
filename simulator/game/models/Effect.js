import { Clone } from '../../utils/helpers.js';
import Condition from './Condition.js';
import EffectOption from './EffectOption.js';

/**
 * 効果クラス
 */
export default class Effect extends Clone {
  /**
   * Create a effect.
   * @param {Object} effect
   */
  constructor(effect) {
    super(['condition', 'options']);
    /** タイプ @type {String} */
    this.type = effect.type;
    if (effect.target) {
      /** 参照対象 @type {String} */
      this.target = effect.target;
    }
    /** 値 @type {Number} */
    this.value = effect.value;

    if (effect.condition) {
      /** 条件 @type {Condition} */
      this.condition = new Condition(effect.condition);
    }
    if (effect.delay) {
      /** 予約ターン @type {Number} */
      this.delay = effect.delay;
    }
    if (effect.options) {
      /** 特殊オプション @type {Array<EffectOption>} */
      this.options = effect.options?.map((effectOption) => new EffectOption(effectOption));
    }
  }
}
