import DataLoader from '../data/DataLoader.js';
import { Clone } from '../../utils/helpers.js';
import Condition from './Condition.js';
import Effect from './Effect.js';

/**
 * Pアイテム
 */
export default class PItem extends Clone {
  /**
   * Create a pItem.
   * @param {Number} id - PアイテムID
   */
  constructor(id) {
    super(['condition', 'effects']);
    const pItem = DataLoader.getPItemById(id);
    /** ID @type {Number} */
    this.id = pItem.id;
    /** 名前 @type {String} */
    this.name = pItem.name;
    /** 使用タイミング @type {String} */
    this.trigger = pItem.trigger;
    /** 使用条件 @type {Condition} */
    if (pItem.condition) {
      this.condition = new Condition(pItem.condition);
    }
    /** 使用時効果 @type {Array<Effect>} */
    this.effects = pItem.effects?.map((effect) => new Effect(effect)) ?? [];
    /** 使用回数制限 @type {Number} */
    this.limit = pItem.limit;
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
