import { Clone } from '../../utils/helpers.js';
import Condition from './Condition.js';

/**
 * 事前効果クラス
 */
export default class Growth extends Clone {
  /**
   * Create a pre effect.
   * @param {Object} growth
   */
  constructor(growth) {
    super(['condition']);
    this.trigger = growth.trigger;
    this.condition = new Condition(growth.condition);
    this.effects = growth.effects;
    this.limit = growth.limit;
  }

  setCardIndex(index) {
    this.cardIndex = index;
  }

  use() {
    if (this.limit > 0) {
      this.limit -= 1;
    }
    if (this.limit == 0) {
      return false;
    }
    return true;
  }
}
