/**
 * パラメータ用クラス
 */
export default class Parameter {
  /**
   * Create a parameter
   * @param {Number} vocal - vocal%
   * @param {Number} dance - dance%
   * @param {Number} visual - visual%
   */
  constructor(vocal, dance, visual) {
    /** ボーカル @type {Number} */
    this.vocal = vocal;
    /** ダンス @type {Number} */
    this.dance = dance;
    /** ビジュアル @type {Number} */
    this.visual = visual;
    /** 平均パラメータ @type {Number} */
    this.average = Math.ceil((vocal + dance + visual) / 3);
  }

  get(key) {
    return this[key];
  }

  /**
   * ターンタイプの倍率を小数値で返します
   * @param {String} key - ターンタイプ
   * @return {Number}
   */
  getScale(key) {
    return this[key] / 100;
  }
}
