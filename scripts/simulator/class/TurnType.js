import { deep_copy } from "../../util/utility.js";

/**
 * ターンごとのタイプ(vocal, dance, visual)を設定するクラス
 */
export class TurnType {

    /**
     * @type {Array<Stirng>} ターンごとのタイプ
     */
    turnTypes;
    #turnCount;

    /**
     * ターンタイプクラスのインスタンスを作成する
     * @constructor
     * @param {Number} turnCount ターン数
     * @param {Object<String, Number>} critearia 評価基準オブジェクト
     */
    constructor (turnCount, critearia, turnRank, firstTurn, turnTypes, autoId) {
        this.turnTypes = new Array(turnCount).fill('');
        const criteariaRank = this.#setCriteariaRank(turnRank);
        const typeCount = this.#setTurnCount(turnCount, criteariaRank, turnTypes);

        // ラスト3ターンを流行3位->流行2位->流行1位の順にする
        this.turnTypes[this.turnTypes.length-3] = criteariaRank[2];
        this.turnTypes[this.turnTypes.length-2] = criteariaRank[1];
        this.turnTypes[this.turnTypes.length-1] = criteariaRank[0];
        // 最初のターンを流行1位に固定する
        var firstTurnChance = 0;
        var randomNum = Math.random();
        var turnCountStart = 0;
        for(let i in firstTurn){
            firstTurnChance += firstTurn[i] * 0.01;
            if (randomNum <= firstTurnChance) {
                this.turnTypes[0] = i;
                typeCount[i] -= 1;
                turnCountStart += 1;
                break;
            }
        }
        // その分カウントを減らす
        typeCount[criteariaRank[0]] -= 1;
        typeCount[criteariaRank[1]] -= 1;
        typeCount[criteariaRank[2]] -= 1;

        const array = [typeCount[criteariaRank[0]], typeCount[ criteariaRank[1]], typeCount[criteariaRank[2]]];

        for (let i = turnCountStart; i < turnCount - 3; i++) {
            let chooseIdx;
            chooseIdx = this.#getNewRandomIndex(array);
            this.turnTypes[i] = criteariaRank[chooseIdx];
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
    #getNewRandomIndex (array) {
        if(Math.random()<0.7&&array[0]>0)
            return 0
        if(Math.random()<0.7&&array[1]>0)
            return 1
        if(array[2]>0)
            return 2
        if(array[1]>0)
            return 1
        return 0
    }

    /**
     * 流行の順位順の流行順位配列を返します
     * @param {Object} critearia 評価基準オブジェクト
     * @returns {Array<String>} 流行順位配列
     */
    #setCriteariaRank (turnRank) {
        let criteariaRank = [];
        for (let i = 1; 3 > criteariaRank.length; i++){
            if (i > 3) {
                console.error(turnRank,criteariaRank.length)
                throw new Error('赛季属性排名大于3，值：' + i);
            }

            for (let key in turnRank) {
                if (turnRank[key] == i) {
                    criteariaRank.push(key);
                }
            }
        }
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
        this.#turnCount = { 'vocal': turnTypes[0], 'dance': turnTypes[1], 'visual': turnTypes[2] };
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
        if (idx > this.turnTypes.length - 1) {
            return this.turnTypes[this.turnTypes.length-1];
        }
        return this.turnTypes[idx];
    }

    getCount (type) {
        return this.#turnCount[type];
    }

    /**
     * ターンタイプ配列を取得します
     * @returns {Array<String>}
     */
    getAllTypes () {
        return deep_copy(this.turnTypes);
    }
}