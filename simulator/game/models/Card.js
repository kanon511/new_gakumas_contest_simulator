import DataLoader from '../data/DataLoader.js';
import { Clone } from '../../utils/helpers.js';
import Condition from './Condition.js';
import Effect from './Effect.js';
import PreEffect from './PreEffect.js';
import Growth from './Growth.js';

/**
 * カード
 */
export default class Card extends Clone {
  /**
   * Create a card.
   * @param {Number} id - カードID
   */
  constructor(id) {
    super(['condition', 'preEffects', 'growths']);
    const card = DataLoader.getCardById(id);
    /** ID @type {Number} */
    this.id = card.id;
    /** 名前 @type {String} */
    this.name = card.name;
    /** タイプ(アクティブ/メンタル) @type {String} */
    this.type = card.type;
    /** 使用コスト @type {Effect} */
    this.cost = new Effect(card.cost);
    if (card.condition) {
      /** 使用条件 @type {Condition} */
      this.condition = new Condition(card.condition);
    }
    if (card.pre_effects) {
      /** 事前効果 @type {Array<PreEffect>|undefined} */
      this.preEffects = card.pre_effects?.map((preEffect) => new PreEffect(preEffect));
    }
    if (card.growths) {
      /** 事前効果 @type {Array<Growth>|undefined} */
      this.growths = card.growths?.map((growth) => new Growth(growth));
    }
    /** 使用時効果 @type {Array<Effect>} */
    this.effects = card.effects.map((effect) => new Effect(effect));
    /** 使用回数制限 @type {Number} */
    this.limit = card.limit;
  }
}
