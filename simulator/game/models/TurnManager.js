import { Clone, RandomGenerator, deep_copy } from '../../utils/helpers.js';

/**
 * ターン管理クラス
 */
export default class TurnManager extends Clone {
  /**
   *
   * @param {Object} stageData - ステージ設定のデータ
   * @param {Number} stageData.turnCount - ターン数
   * @param {Object} stageData.criteria - 審査基準
   * @param {Object} stageData.turnTypeCounts - 各属性のターン数
   * @param {Array} stageData.turnTypeRanks - 属性順位
   * @param {Number} stageData.firstTurnFirstTypeProb - 1ターン目が1位属性の確率
   * @param {RandomGenerator} random - 確率器
   */
  constructor(
    { turnCount, criteria, turnTypeCounts, turnTypeRanks, firstTurnFirstTypeProb },
    random,
  ) {
    super(['random']);
    /** 初期ターン数 @type {Number} */
    this.turnCount = turnCount;
    /** 残りターン数 @type {Number} */
    this.remainTurn = turnCount;
    /** 現在ターン @type {Number} */
    this.currentTurn = 0;
    /** エクストラターン @type {Number} */
    this.extraTurn = 0;

    /** 現在ターンタイプ(vocal/dance/visual) @type {String} */
    this.currentTurnType = '';
    /** 乱数器 @type {RandomGenerator} */
    this.random = random;
    /** ターンタイプ配列(vocal/dance/visual) @type {Array<String>} */
    this.turnTypeList = this.setTurnTypeList(
      turnCount,
      deep_copy(turnTypeCounts),
      turnTypeRanks,
      firstTurnFirstTypeProb,
    );
  }

  setRandom(random) {
    this.random = random;
  }

  /**
   * Shuffle a array.
   * @param {Array<any>} array - シャッフルされる配列
   */
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(this.random.next() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  setFirstTurnProb(turnCount, turnTypeCount, turnTypeRank) {
    if (
      turnCount < 12 ||
      turnTypeCount[turnTypeRank[0]] >=
        turnTypeCount[turnTypeRank[1]] + turnTypeCount[turnTypeRank[2]]
    ) {
      return 1;
    } else {
      return 0.8;
    }
  }

  setTurnTypeList(
    turnCount,
    turnTypeCounts,
    turnTypeRanks,
    firstTurnFirstTypeProb = this.setFirstTurnProb(turnCount, turnTypeCounts, turnTypeRanks),
  ) {
    const results = new Array(turnCount).fill('');
    for (let i = 0; i < 3; i++) {
      results[turnCount - 1 - i] = turnTypeRanks[i];
      turnTypeCounts[turnTypeRanks[i]] -= 1;
    }

    if (this.random.next() < firstTurnFirstTypeProb) {
      results[0] = turnTypeRanks[0];
      turnTypeCounts[turnTypeRanks[0]] -= 1;
    } else {
      results[0] = turnTypeRanks[1];
      turnTypeCounts[turnTypeRanks[1]] -= 1;
    }

    const randomTurnType = [
      new Array(turnTypeCounts[turnTypeRanks[0]]).fill(turnTypeRanks[0]),
      new Array(turnTypeCounts[turnTypeRanks[1]]).fill(turnTypeRanks[1]),
      new Array(turnTypeCounts[turnTypeRanks[2]]).fill(turnTypeRanks[2]),
    ].flat();
    this.shuffle(randomTurnType);

    for (let i = 0; i < randomTurnType.length; i++) {
      results[i + 1] = randomTurnType[i];
    }
    return results;
  }

  setTurnTypeCount(criteria, turnTypeRank) {
    throw new Error('未実装');
  }

  getTurnType() {
    if (this.currentTurn > this.turnTypeList.length) {
      return this.turnTypeList[this.turnTypeList.length - 1];
    }
    return this.turnTypeList[this.currentTurn - 1];
  }

  startTurn() {
    this.currentTurn += 1;
    this.currentTurnType = this.getTurnType();
  }

  addExtraTurn(value) {
    this.extraTurn += value;
    this.remainTurn += value;
  }

  endTurn() {
    this.remainTurn -= 1;
  }

  getRemainTurn() {
    return this.remainTurn;
  }
}
