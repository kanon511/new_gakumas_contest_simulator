import Effect from '../models/Effect.js';
import Player from '../models/Player.js';

/**
 * Effectの実際の効果を計算するクラス
 */
export default class EffectCalculator {
  /**
   *
   * @param {Effect} effect
   * @param {Player} player
   * @return {Number}
   */
  static calcValue(effect, player) {
    let base_value = effect.value;

    // option
    if (effect.options) {
      effect.options.forEach((option) => {
        if (option.type == 'increase_by_factor' || option.type == 'increase_by_factor-1') {
          let add_value_coef = 0;
          if (option.target in player) {
            add_value_coef = player[option.target];
          } else {
            add_value_coef = player.status.getValue(option.target);
          }
          if (option.type == 'increase_by_factor') {
            base_value += Math.ceil(add_value_coef * option.value);
          } else {
            base_value += Math.ceil(add_value_coef * (option.value - 1));
          }
        } else if (option.type == 'increase_by_percentage') {
          let add_value_coef = 0;
          if (option.target in player) {
            add_value_coef = player[option.target];
          } else {
            add_value_coef = player.status.getValue(option.target);
          }
          base_value += Math.ceil((add_value_coef * option.value) / 100);
        }
      });
    }

    if (effect.type == 'score') {
      const concentration_coef = player.status.getValue('集中');
      const goodcondition_coef = player.status.has('好調') ? 1.5 : 1;
      const badcondition_coef = player.status.has('不調') ? 0.67 : 1;
      const greatcondition_coef = player.status.has('絶好調')
        ? player.status.getValue('好調') * 0.1
        : 0;
      const guideline_parameter_rate_increased_coef = (() => {
        switch (player.status.getValue('指針')) {
          case 0:
          case 1:
            return 0;
          case 2:
            return -50;
          case 3:
            return 100;
          case 4:
            return 200;
        }
      })();
      const parameter_rate_increased_coef =
        1 +
        (player.status.getValue('パラメータ上昇量増加') + guideline_parameter_rate_increased_coef) /
          100;

      const adjust_value = Math.ceil(
        Math.ceil((base_value + concentration_coef) * (goodcondition_coef + greatcondition_coef)) *
          badcondition_coef *
          parameter_rate_increased_coef
      );
      return adjust_value;
    }
    if (effect.type == 'genki') {
      if (base_value >= 0) {
        if (player.status.has('元気増加無効')) {
          return 0;
        }
        return base_value + player.status.getValue('やる気');
      }
      return base_value;
    }
    if (effect.type == 'hp' || effect.type == 'direct_hp') {
      if (base_value <= 0) {
        const increase_hp_consumption = player.status.has('消費体力増加') ? 2.0 : 1.0;
        const decrease_hp_consumption = player.status.has('消費体力減少') ? 0.5 : 1.0;
        const reduction_hp_comsumption = player.status.getValue('消費体力削減');
        const addition_hp_comsumption = player.status.getValue('消費体力追加');
        const guideline_hp_comsumption = (() => {
          switch (player.status.getValue('指針')) {
            case 0:
            case 1:
              return 0;
            case 2:
              return -50;
            case 3:
              return 100;
            case 4:
              return 0;
          }
        })();
        const adjust_value =
          Math.floor(
            base_value *
              increase_hp_consumption *
              decrease_hp_consumption *
              (1 + guideline_hp_comsumption / 100)
          ) +
          reduction_hp_comsumption -
          addition_hp_comsumption;
        return Math.min(0, adjust_value);
      }
      return base_value;
    }
    return base_value;
  }
}
