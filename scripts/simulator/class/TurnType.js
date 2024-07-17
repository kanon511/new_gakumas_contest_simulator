import { deep_copy } from "../../util/utility.js";

/**
 * ターンごとのタイプ(vocal, dance, visual)を設定するクラス
 */
export class TurnType {

    /**
     * @type {Array<Stirng>} ターンごとのタイプ
     */
    #turnTypes;

    /**
     * ターンタイプクラスのインスタンスを作成する
     * @constructor
     * @param {Number} turnCount ターン数
     * @param {Object<String, Number>} critearia 評価基準オブジェクト
     */
    constructor (turnCount, critearia, turnTypes) {
        this.#turnTypes = new Array(turnCount).fill('');
        const criteariaRank = this.#setCriteariaRank(critearia);
        const typeCount = this.#setTurnCount(turnCount, criteariaRank, turnTypes);

        // ラスト3ターンを流行3位->流行2位->流行1位の順にする
        this.#turnTypes[this.#turnTypes.length-3] = criteariaRank[2];
        this.#turnTypes[this.#turnTypes.length-2] = criteariaRank[1];
        this.#turnTypes[this.#turnTypes.length-1] = criteariaRank[0];
        // 最初のターンを流行1位に固定する
        let turnCountStart = 0;
        const totalTurnCount = turnTypes.reduce((p,c)=>p+c, 0);
        if (totalTurnCount < 12) {
            this.#turnTypes[0] = criteariaRank[0];
            typeCount[criteariaRank[0]] -= 1;
            turnCountStart++;
        } else {
            if (Math.random() < 0.8) {
                this.#turnTypes[0] = criteariaRank[0];
                typeCount[criteariaRank[0]] -= 1;
                turnCountStart++;
            } else {
                this.#turnTypes[0] = criteariaRank[1];
                typeCount[criteariaRank[1]] -= 1;
                turnCountStart++;
            }
        }
        // その分カウントを減らす
        typeCount[criteariaRank[0]] -= 1;
        typeCount[criteariaRank[1]] -= 1;
        typeCount[criteariaRank[2]] -= 1;

        const array = [typeCount['vocal'], typeCount['dance'], typeCount['visual']];
        const typeIdx = ['vocal', 'dance', 'visual'];
        for (let i = turnCountStart; i < turnCount - 3; i++) {
            const chooseIdx = this.#getRandomIndex(array);
            this.#turnTypes[i] = typeIdx[chooseIdx];
            array[chooseIdx]--;
        }
    }

    /**
     * 数値配列から数値の比率を確率としてランダムなインデックスを返す
     * @param {Array<Number>} array 数値配列
     * @returns {Number} 入力配列のindex
     */
    #getRandomIndex (array) {
        const totalCount = array.reduce((pre, crt) => pre+crt, 0);
        const randomNumber = Math.floor(Math.random()*totalCount);
        for (let i = 0, currentNumber = 0; i < array.length; i++) {
            currentNumber += array[i];
            if (randomNumber < currentNumber) {
                return i;
            }
        }
    }

    /**
     * 流行の順位順の流行順位配列を返します
     * @param {Object} critearia 評価基準オブジェクト
     * @returns {Array<String>} 流行順位配列
     */
    #setCriteariaRank (critearia) {
        const entries = Object.entries(critearia).sort((a, b) => b[1] - a[1]);
        const criteariaRank = entries.map(item=>item[0]);
        return criteariaRank;
    }

    /**
     * 流行ごとのターン数を設定します
     * @param {Number} turnCount ターン数
     * @param {Array<String>} criteariaRank 流行順位配列
     * @returns {Object<String, Number>}
     */
    #setTurnCount (turnCount, criteariaRank, turnTypes) {
        // switch (turnCount) {
        //     case 8 : return { [criteariaRank[0]] : 4, [criteariaRank[1]] : 2, [criteariaRank[2]] : 2 };
        //     case 10: return { [criteariaRank[0]] : 5, [criteariaRank[1]] : 3, [criteariaRank[2]] : 2 };
        //     case 12: return { [criteariaRank[0]] : 5, [criteariaRank[1]] : 4, [criteariaRank[2]] : 3 };
        // }
        return { 'vocal': turnTypes[0], 'dance': turnTypes[1], 'visual': turnTypes[2] }
        // throw new Error(`${turnCount}は想定されていないターン数です`);
    }

    /**
     * ターンタイプを取得します
     * @param {Number} turn ターン
     * @returns {String} ターンタイプ
     */
    getType (turn) {
        const idx = turn-1;
        // 最大ターンを超過していたら最後の要素(流行1位)を返す
        if (idx > this.#turnTypes.length - 1) {
            return this.#turnTypes[this.#turnTypes.length-1];
        }
        return this.#turnTypes[idx];
    }

    /**
     * ターンタイプ配列を取得します
     * @returns {Array<String>}
     */
    getAllTypes () {
        return deep_copy(this.#turnTypes);
    }
}