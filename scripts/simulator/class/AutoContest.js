import { Contest } from "./Contest.js";

/**
 * Contestを経由して手札から最も評価値の高いカードを選択するクラス。
 */
export class AutoContest {

    // property

    #contest;

    // method

    /**
     * コンストラクタ
     * @param {Contest} contest 
     */
    constructor (contest) {
        this.#contest = contest;
    }

    /**
     * 手札から使用可能で最も評価値(card.evaluation)の高い手札のインデックスを返します。
     * 使用可能なカードがない場合は-1を返します。
     * @returns {Number} 手札のインデックス
     */
    select () {
        const handCards = this.#contest.getHands();
        const availableIndex = handCards.map((item,i)=>[item, i]).filter(item=>item[0].isAvailable()).map(item=>item[1]);
        if (availableIndex.length == 0) return -1;
        const availableIndexValue = availableIndex.map(idx=>handCards[idx]).map(card=>card.evaluation);
        const maxValue = Math.max(...availableIndexValue);
        return availableIndex[availableIndexValue.indexOf(maxValue)];
    }

}