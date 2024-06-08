import { SkillCard } from "./SkillCard.js";

export class Deck {

    #index_drawPile       = [];
    #index_handCards      = [];
    #index_discardPile    = [];
    #index_exhaustedCards = [];

    constructor (skillCardIds) {
        this.skillCards = skillCardIds.map(id => new SkillCard(id));
        this.init();
    }

    shuffle (list) {
        for (let i = list.length; 1 < i; i--) {
            const n = Math.floor(Math.random() * i);
            [list[n], list[i - 1]] = [list[i - 1], list[n]];
        }
    }

    createRange (startNumber, endNumber) {
        const list = [];
        for (let i = startNumber; i < endNumber; i++) {
            list.push(i);
        }
        return list;
    }

    init () {
        this.#index_drawPile = this.createRange(0, this.skillCards.length);
        this.shuffle(this.#index_drawPile);
        this.#index_handCards = [];
        this.#index_discardPile = [];
        this.#index_exhaustedCards = [];
    }

    draw (number) {
        for (let i = 0; i < number; i++) {
            if (this.#index_drawPile.length == 0) {
                this.#index_drawPile = this.#index_discardPile;
                this.#index_discardPile = [];
                this.shuffle(this.#index_drawPile);
            }
            this.#index_handCards.push(this.#index_drawPile.shift());
        }
    }

    useCard (number) {
        const usedCard = this.getHandCardByNumber(number);
        if (usedCard.afterUse) {
            switch (usedCard.afterUse.type) {
                case 'exhaust': 
                    if (--usedCard.afterUse.value <= 0) {
                        this.exhaust(number);
                    }
                    break;
            }
        }
    }

    exhaust (number) {
        this.#index_exhaustedCards.push(...this.#index_handCards.splice(number, 1));
    }

    discard (number) {
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