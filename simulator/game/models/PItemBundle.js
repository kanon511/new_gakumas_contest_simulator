import { Clone } from '../../utils/helpers.js';
import PItem from './PItem.js';
import Player from './Player.js';

/**
 * Pアイテム管理クラス
 */
export default class PItemBundle extends Clone {
  /**
   * Create a p item bundle.
   * @param {Array<Number>} pItemIdList - デッキに入れるPアイテムのIDリスト
   */
  constructor(pItemIdList) {
    super();
    /** 全Pアイテム @type {Array<PItem>} */
    this.pItems = pItemIdList.map((pItemId) => new PItem(pItemId));
    /** 全Pアイテム @type {Map<String, Array<PItem>>} */
    this.pItemMap = new Map();

    for (let i = 0; i < this.pItems.length; i++) {
      this.register(this.pItems[i].trigger, this.pItems[i]);
    }
  }

  /**
   * PアイテムをMapに登録します。
   * @param {String} trigger
   * @param {PItem} pItem
   */
  register(trigger, pItem) {
    if (!this.pItemMap.has(trigger)) {
      this.pItemMap.set(trigger, []);
    }
    // @ts-ignore
    this.pItemMap.get(trigger).push(pItem);
  }

  /**
   * 現在のプレイヤー条件で使用可能なPアイテムを返します。
   * @param {String} trigger
   * @param {Player} player
   * @return {Array<PItem>}
   */
  getEvents(trigger, player) {
    const targetPItems = this.pItemMap.get(trigger);
    if (!targetPItems) {
      return [];
    }
    const results = [];
    const remains = [];
    for (let i = 0; i < targetPItems.length; i++) {
      const pItem = targetPItems[i];
      if (!pItem.condition || pItem.condition.check(player)) {
        results.push(pItem);
        if (pItem.use()) {
          remains.push(pItem);
        }
      } else {
        remains.push(pItem);
      }
    }
    this.pItemMap.set(trigger, remains);
    return results;
  }
}
