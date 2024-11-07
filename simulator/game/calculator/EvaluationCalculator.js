import ActiveStatusEffect from '../models/ActiveStatusEffect.js';
import PassiveStatusEffect from '../models/PassiveStatusEffect.js';
import Player from '../models/Player.js';

export class EvaluationCalculator {
  static calc_good_impression_score(n, k) {
    if (n === 0) return 0;
    let steps = Math.min(k, n + 1);
    return (steps * (n + (n - (steps - 1)))) / 2;
  }

  /**
   *
   * @param {PassiveStatusEffect} status
   * @param {Player} player
   * @returns
   */
  static calcPassiveEvaluation(status, player) {
    switch (status.name) {
      case '集中':
      case 'やる気':
        return (
          player.turnManager.turnTypeList
            .slice(player.turnManager.currentTurn)
            .map(
              (turnType) => player.parameter.getScale(turnType) * status.value
            )
            .reduce((total, current) => total + current, 0) * 1.2
        );

      case '好調':
        return (
          (Math.log(
            Math.min(player.turnManager.remainTurn, status.value) + 0.01
          ) -
            Math.log(0.01)) *
          (15 + player.status.getValue('集中')) *
          player.parameter.getScale('average')
        );

      case '不調':
        return player.turnManager.turnTypeList
          .slice(
            player.turnManager.currentTurn,
            player.turnManager.currentTurn + status.value
          )
          .map(
            (turnType) =>
              player.parameter.getScale(turnType) *
              -(10 + player.status.getValue('集中'))
          )
          .reduce((total, current) => total + current, 0);

      case '絶好調':
        return (
          Math.min(player.turnManager.remainTurn, status.value) *
          Math.sqrt(player.status.getValue('好調')) *
          30 *
          player.parameter.getScale('average')
        );

      case '好印象':
        return (
          this.calc_good_impression_score(
            status.value,
            player.turnManager.remainTurn
          ) * player.parameter.getScale('average')
        );

      case 'パラメータ上昇量増加':
        return status.valueList
          .map(
            (item) =>
              ((Math.min(player.turnManager.remainTurn, item.turn) *
                item.value) /
                100) *
              10 *
              player.parameter.getScale('average')
          )
          .reduce((total, current) => total + current, 0);

      case '消費体力削減':
      case '消費体力減少':
      case '低下状態無効':
        return 100;

      case 'スキルカード使用数追加':
        return 1000;

      case '消費体力増加':
      case '元気増加無効':
      case '消費体力追加':
        return -100;

      default:
        console.log(`${status.name}がないよ`);
        return 0;
    }
  }

  /**
   *
   * @param {ActiveStatusEffect} status
   * @param {Player} player
   * @returns
   */
  static calcActiveEvaluation(status, player) {
    switch (status.name) {
      case '次に使用するスキルカードの効果を発動':
        return 500;
      case '次に使用するアクティブスキルカードの効果を発動':
        return 500;
      case 'アクティブスキルカード使用時固定元気+2':
        return 50 * player.turnManager.remainTurn;
      case 'アクティブスキルカード使用時、パラメータ+4':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map(
            (turnType) =>
              player.parameter.getScale(turnType) *
              (4 + player.status.getValue('集中'))
          )
          .reduce((total, current) => total + current, 0);
      case 'アクティブスキルカード使用時、パラメータ+5':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map(
            (turnType) =>
              player.parameter.getScale(turnType) *
              (5 + player.status.getValue('集中'))
          )
          .reduce((total, current) => total + current, 0);
      case 'ターン終了時スコア+4':
        return player.turnManager.turnTypeList
          .slice(
            player.turnManager.currentTurn,
            player.turnManager.currentTurn + (status.value?.turn ?? 0 + 1)
          )
          .map(
            (turnType) =>
              player.parameter.getScale(turnType) *
              (4 + player.status.getValue('集中'))
          )
          .reduce((total, current) => total + current, 0);
      case 'アクティブスキルカード使用時集中+1':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map((turnType, i) => player.parameter.getScale(turnType) * (i + 1))
          .reduce((total, current) => total + current, 0);
      case 'ターン終了時、集中が3以上の場合、集中+2':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map(
            (turnType, i) => player.parameter.getScale(turnType) * (i * 2 + 1)
          )
          .reduce((total, current) => total + current, 0);
      case 'メンタルスキルカード使用時好印象+1':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map((turnType, i) => player.parameter.getScale(turnType) * (i + 1))
          .reduce((total, current) => total + current, 0);
      case 'メンタルスキルカード使用時やる気+1':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map((turnType, i) => player.parameter.getScale(turnType) * (i + 1))
          .reduce((total, current) => total + current, 0);
      case 'ターン終了時、好印象+1':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map((turnType, i) => player.parameter.getScale(turnType) * (i + 1))
          .reduce((total, current) => total + current, 0);
      case 'ターン終了時、好印象が3以上の場合、好印象+3':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map(
            (turnType, i) => player.parameter.getScale(turnType) * (i * 3 + 1)
          )
          .reduce((total, current) => total + current, 0);
      case 'スキルカード使用時、好印象の30%分パラメータ':
      case '好印象効果のスキルカード使用後、好印象の30%分のパラメータ':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map(
            (turnType) =>
              player.parameter.getScale(turnType) *
              player.status.getValue('好印象') *
              0.3
          )
          .reduce((total, current) => total + current, 0);
      case 'スキルカード使用時、好印象の50%分パラメータ':
      case '好印象効果のスキルカード使用後、好印象の50%分のパラメータ':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map(
            (turnType) =>
              player.parameter.getScale(turnType) *
              player.status.getValue('好印象') *
              0.5
          )
          .reduce((total, current) => total + current, 0);
      case '元気効果のスキルカード使用後、好印象+1':
        return player.turnManager.turnTypeList
          .slice(player.turnManager.currentTurn)
          .map((turnType, i) => player.parameter.getScale(turnType) * (i + 1))
          .reduce((total, current) => total + current, 0);
      case '好印象効果':
        return 0;
      case '予約効果':
        return 0;
      default:
        console.log(`${status.name}がないよ`);
        return 0;
    }
  }

  static calcStatusEvaluation(statusMgr, player) {
    let total = 0;
    for (const [_, status] of statusMgr.passiveStatusEffectMap) {
      total += Math.ceil(this.calcPassiveEvaluation(status, player));
      if (isNaN(total)) {
        throw new Error(
          `${
            status.name
          }でエラー: ${total}, ${player.turnManager.turnTypeList.join(',')}, ${
            player.turnManager.currentTurn
          }, ${player.parameter.vocal}, ${player.parameter.dance}, ${
            player.parameter.visual
          }, ${status.value}`
        );
      }
    }
    for (const activeStatusEffects of statusMgr.activeStatusEffectMap.values()) {
      for (let i = activeStatusEffects.length - 1; 0 <= i; i--) {
        total += Math.ceil(
          this.calcActiveEvaluation(activeStatusEffects[i], player)
        );
        if (isNaN(total)) {
          throw new Error(`${activeStatusEffects[i].name}でエラー: ${total}`);
        }
      }
    }
    return total;
  }

  /**
   *
   * @param {Player} player
   * @returns
   */
  static calcEvaluation(player) {
    let total_evaluation = 0;
    let unitValue = player.parameter.getScale('average');
    const remainTurn = player.turnManager.remainTurn;
    // hp
    // genki
    // total_evaluation += unitValue * (player.maxHp - (player.hp + player.genki)) * remainTurn * 0.1;
    total_evaluation += Math.ceil(
      unitValue *
        2 *
        (1 -
          player.turnManager.currentTurn /
            (player.turnManager.turnCount + player.turnManager.extraTurn)) *
        (Math.log(((player.hp + player.genki) / player.maxHp) * 10 + 0.2) -
          Math.log(0.2))
    );

    // score
    total_evaluation +=
      player.score *
      (0.8 +
        (player.turnManager.currentTurn /
          (player.turnManager.turnCount + player.turnManager.extraTurn)) *
          0.2);
    // remain_turn
    total_evaluation += unitValue * remainTurn * remainTurn * 10;
    //status
    total_evaluation += this.calcStatusEvaluation(player.status, player);

    return Math.ceil(total_evaluation);
  }
}
