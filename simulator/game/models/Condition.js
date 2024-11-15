import Player from './Player.js';

/** 分割記号 @param {Array<String>} signs */
const signs = ['==', '!=', '>=', '<=', '>', '<'];

/**
 * コンディション要素クラス
 */
class ConditionItem {
  /**
   * Create a condition item.
   * @param {String} query - 条件文字列
   */
  constructor(query) {
    if (!query) {
      this.key = '';
      return;
    }
    const sign = signs.find((sign) => ~query.indexOf(sign)) ?? -1;
    if (sign == -1) {
      throw new Error(`予期する記号が含まれません > ${query}`);
    }
    const [key, value] = query.split(sign);
    /** 条件プロパティ @type {String} */
    this.key = key;
    /** 条件値 @type {String} */
    this.value = value;
    /** 条件記号 @type {String} */
    this.sign = sign;
  }

  /**
   * 条件チェック
   * @param {Player} player
   */
  check(player) {
    if (this.key == '') {
      return true;
    }
    let target_value = this.getValueOfKey(this.key, this.value, player);
    switch (this.sign) {
      case '==':
        return target_value == this.value;
      case '!=':
        return target_value != this.value;
      case '>=':
        return target_value >= this.value;
      case '<=':
        return target_value <= this.value;
      case '>':
        return target_value > this.value;
      case '<':
        return target_value < this.value;
    }
  }

  /**
   * 条件比較のためplayerからkeyのvalueを取得する
   * @param {String} key
   * @param {String} value
   * @param {Player} player
   */
  getValueOfKey(key, value, player) {
    switch (key) {
      case 'hp_per':
        return (player.hp / player.maxHp) * 100;
      case 'score':
        return player.score;
      case 'genki':
        return player.genki;
      case 'dual_cast':
        return player.dualCast;
      case 'turn':
        return player.turnManager.currentTurn;
      case 'turn_type':
        return player.turnManager.currentTurnType;
      case 'turn_multiple_of':
        return player.turnManager.currentTurn % Number(value) == 0 ? value : -1;
      case 'card_id':
        return player.lastPlayCard?.id;
      case 'card_type':
        return player.lastPlayCard?.type;
      case 'card_contains_effect':
        const [type, target] = value.split(':');
        return player.lastPlayCard?.effects.some((effect) => {
          return (
            (effect.target == type || effect.type == type) &&
            (!target || player.status.getValue(type) == Number(target))
          );
        })
          ? value
          : -1;
      case 'card_play_count_multiple_of':
        return player.cardPlayCount % Number(value) == 0 ? value : -1;
      case 'current_turn_card_play_count_multiple_of':
        return player.currentTurnCardPlayCount % Number(value) == 0 ? value : -1;
      case 'remain_turn':
        return player.turnManager.remainTurn;
      default:
        return player.status.getValue(key);
    }
  }
}

/**
 * 条件クラス
 */
export default class Condition {
  /**
   * Create a condition.
   * @param {String} query
   */
  constructor(query) {
    /** 条件木 @type {Array} */
    this.conditionTree = query.split('|').map((orQuery) => {
      return orQuery.split('&').map((andQuery) => {
        return new ConditionItem(andQuery);
      });
    });
  }

  /**
   * 条件チェック
   * @param {Player} player
   */
  check(player) {
    return this.conditionTree
      .map((orConditionTree) => {
        return orConditionTree
          .map((conditionItem) => {
            return conditionItem.check(player);
          })
          .every((value) => value);
      })
      .some((value) => value);
  }
}
