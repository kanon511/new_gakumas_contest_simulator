import { SkillCard } from "../data/skillCardData.js";

/**
 * コンテスト会場クラス
 */
export class Contest {
    
    // property

    #pIdol;

    // method

    /**
     * コンストラクタ
     * @param {Object} parameters pIdol, maxTurn, criteria, turnTypeを設定します。
     */
    constructor (parameters) {
        const {
            pIdol,
            maxTurn,
            criteria,
            turnTypes,
        } = parameters;
        this.#pIdol = pIdol;
        this.#pIdol.init(maxTurn, criteria, turnTypes);
    }

    /**
     * ターンを開始します
     */
    startTurn () {
        this.#pIdol.start();
    }

    /**
     * 指定された手札のスキルカードを使用するか休憩します。
     * @param {Number} cardNumber 使うカード番号または-1
     * @returns {Boolean} 行動終了するかどうか（または不正な行動でないか）
     */
    useCard (cardNumber) {
        // -1は休憩
        if (cardNumber == -1) {
            this.#pIdol.rest();
            return true;
        }
        // -1以外の不正な値　もしくは　カードが使用不可
        const hands = this.getHands();
        if (
            cardNumber < 0 || 
            cardNumber >= hands.length || 
            !hands[cardNumber]?.isAvailable()
        ) {
            return false;
        }
        this.#pIdol.useCard(cardNumber);
        return !this.#pIdol.checkAdditionalAction();
    }

    /**
     * ターンを終了します
     */
    finishTurn () {
        this.#pIdol.end();
    }

    /**
     * 手札にあるスキルカードの配列を返します。
     * @returns {Array[SkillCard]} 手札のスキルカード
     */
    getHands () {
        return this.#pIdol.getDeck('handCards');
    }

    /**
     * ターンが残っているかを返します。
     * @returns {Boolean} 
     */
    checkkFinishContest () {
        return this.#pIdol.checkFinished();
    }

    /**
     * 結果を取得します。
     * @returns {Object}
     */
    getResult () {
        return this.#pIdol.getResult();
    }

}