import Condition from './Condition.js';
import Effect from './Effect.js';
import StatusEffect from './StatusEffect.js';
import StatusEffectValue from './StatusEffectValue.js';

/**
 * 通常バフ/デバフ
 */
export default class ActiveStatusEffect extends StatusEffect {
  /**
   * Create a active status effect.
   * @param {Object<String, any>} activeStatusEffect
   */
  constructor(activeStatusEffect) {
    super(activeStatusEffect, ['condition', 'effects']);
    /** 値 @type {StatusEffectValue|null} */
    this.value = null;
    /** 発動タイミング @type {String} */
    this.trigger = activeStatusEffect.trigger;
    if (activeStatusEffect.condition) {
      /** 発動条件 @type {Condition} */
      this.condition = new Condition(activeStatusEffect.condition);
    }
    /** 効果 @type {Array<Effect>} */
    this.effects = activeStatusEffect.effects.map((effect) => new Effect(effect));
  }

  use() {
    return this.value?.use();
  }
}
