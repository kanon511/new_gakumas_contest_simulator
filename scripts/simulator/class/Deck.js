import { SkillCard } from "../data/skillCardData.js";

/**
 * param1からparam2までの連番配列を返します。
 * @param {*} startNumber 開始番号
 * @param {*} endNumber 終了番号
 * @returns {Array[Number]} 連番配列
 */
function createRange (startNumber, endNumber) {
    const list = [];
    for (let i = startNumber; i < endNumber; i++) {
        list.push(i);
    }
    return list;
}

/**
 * スキルカードのデッキ
 */
export class Deck {

    // property

    #index_drawPile       = [];
    #index_handCards      = [];
    #index_discardPile    = [];
    #index_exhaustedCards = [];
    #flag_first_draw = true;
    #index_first_draw = [];

    // method

    /**
     * コンストラクタ
     * @param {Array[Number]} skillCardIds デッキに入れるスキルカードのID配列
     */
    constructor (skillCardIds) {
        this.skillCards = skillCardIds.map(id => new SkillCard(id));
        this.init();
    }

    /**
     * 配列の中身をランダムに入れ替えます。
     * @param {Array} list 
     */
    shuffle (list) {
        for (let i = list.length; 1 < i; i--) {
            const rnd = Math.floor(Math.random()*i);
            [list[rnd], list[i - 1]] = [list[i - 1], list[rnd]];
        }
    }

    /**
     * 初期化
     */
    init () {
        this.#index_drawPile = createRange(0, this.skillCards.length);

        // レッスン開始時手札に入るカードのインデックスリスト
        // this.#index_first_draw = this.#index_drawPile
        //     .filter(item=>this.skillCards[item].pre_effects
        //         ?.map(effects=>effects.type)
        //             .includes('レッスン開始時手札に入る'));
        
        this.shuffle(this.#index_drawPile);

        this.#index_first_draw = [];
        for (let i = 0; i < this.#index_drawPile.length; i++) {
            if (!('pre_effects' in this.skillCards[this.#index_drawPile[i]])) {
                continue;
            }
            if (
                this.skillCards[this.#index_drawPile[i]].pre_effects
                .map(effect=>effect.type)
                .includes('レッスン開始時手札に入る')
            ) {
                this.#index_first_draw.push(this.#index_drawPile[i]);
                this.#index_drawPile.splice(i, 1);
                i--;
            }
        }

        // this.#index_drawPile = [7, 3, 10, 5, 9, 18, 12, 10, 2, 16, 4, 13, 11, 15, 0, 17, 14, 6, 8, 19];
        this.#index_handCards = [];
        this.#index_discardPile = [];
        this.#index_exhaustedCards = [];
    }

    draw (number) {
        const handCardsCount = this.#index_handCards.length;
        if (this.#flag_first_draw) {
            // 最初のドローでレッスン開始時手札に入るを手札に入れる
            this.#flag_first_draw = false;
            for (let i = 0; i < this.#index_first_draw.length; i++) {
                if (i < 5) {
                    this.addHandCards(this.#index_first_draw[i]);
                } else {
                    this.#index_drawPile.unshift(this.#index_first_draw[i]);
                }
            }
            // this.#index_first_draw.forEach(item=>this.#index_drawPile.splice(this.#index_drawPile.indexOf(item), 1));
            number -= this.#index_handCards.length;
        }
        for (let i = 0; i < number; i++) {
            if (this.#index_drawPile.length == 0) {
                if (this.#index_discardPile.length == 0) break; // 山札と捨て札が両方0ならドローできない
                this.#index_drawPile = this.#index_discardPile;
                this.#index_discardPile = [];
                this.shuffle(this.#index_drawPile);
            }
            if (this.#index_handCards.length < 5) {
                this.addHandCards(this.#index_drawPile.shift());
            } else {
                this.#index_discardPile.push(this.#index_drawPile.shift());
            }
        }
        return { request: number, response: this.#index_handCards.length - handCardsCount }
    }

    addCardInDeck (cardId, position) {
        const card = new SkillCard(cardId);
        this.skillCards.push(card);
        const cardIdx = this.skillCards.length-1;
        switch (position) {
            case 'drawPile'       : this.#index_drawPile.push(cardIdx); break;
            case 'handCards'      : this.addHandCards(cardIdx); break;
            case 'discardPile'    : this.#index_discardPile.push(cardIdx); break;
            case 'exhaustedCards' : this.#index_exhaustedCards.push(cardIdx); break;
        }
    }

    addHandCards (card_index) {
        this.#index_handCards.push(card_index);
    }

    upgrade (type) {
        if (type == 'allhands') {
            for (const index of this.#index_handCards) {
                const targetCard = this.skillCards[index];
                if (Number(targetCard.id) % 10 == 0) { // 強化前なら
                    this.skillCards[index] = new SkillCard(Number(targetCard.id)+1);
                }
            }
        } else {
            for (let i = 0; i < type; i++) {
                const random = Math.floor(Math.random()*this.#index_handCards.length);
                const targetCard = this.skillCards[this.#index_handCards[random]];
                if (Number(targetCard.id) % 10 == 0) { // 強化前なら
                    this.skillCards[this.#index_handCards[random]] = new SkillCard(Number(targetCard.id)+1);
                }
            }
        }
    }

    useCard (number) {
        const usedCard = this.getHandCardByNumber(number);
        if (usedCard.limit > 0) {
            if (--usedCard.limit == 0) {
                this.exhaust(number);
            }
        } else {
            this.discard(number);
        }
    }

    exhaust (number) {
        this.resetCard(this.getHandCardByNumber(number));
        this.#index_handCards.splice(number, 1).forEach(card=>this.#index_exhaustedCards.push(card));
    }

    resetCard (card) {
        card.executions = null;
        card.evaluation = 0;
        card.scheduledExecutions = null;
    }

    discard (number) {
        if (this.#index_drawPile.length == 0) {
            this.#index_drawPile = this.#index_discardPile;
            this.#index_discardPile = [];
            this.shuffle(this.#index_drawPile);
        }
        this.resetCard(this.getHandCardByNumber(number));
        this.#index_discardPile.push(...this.#index_handCards.splice(number, 1));
    }

    discardAll() {
        while (this.#index_handCards.length) {
            this.discard(0);
        }
    }

    getHandCardByNumber (number) {
        return this.skillCards[this.#index_handCards[number]];
    } 

    getAllHandCards () {
        return this.handCards.map(idx => this.skillCards[idx]);
    }

    getAllHandCardCount () {
        return this.handCards.length;
    }

    get drawPile () {
        return this.#index_drawPile.map(idx => this.skillCards[idx]);
    }

    get handCards () {
        return this.#index_handCards.map(idx => this.skillCards[idx]);
    }

    get discardPile () {
        return this.#index_discardPile.map(idx => this.skillCards[idx]);
    }
    
    get exhaustedCards () {
        return this.#index_exhaustedCards.map(idx => this.skillCards[idx]);
    }

}