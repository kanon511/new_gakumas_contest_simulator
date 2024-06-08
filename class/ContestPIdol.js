import { Deck } from './Deck.js';
import { PItemManager } from './PItemManager.js';

export class ContestPIdol {

    constructor ({ status, pItemIds, skillCardIds }) {
        this.status = {
            vocal : status.vocal,
            dance : status.dance,
            visual: status.visual,
        };
        this.hp = status.hp;
        this.block = 0;
        this.condition = {
            concentration: 0,
            koucho: 0,
            zekkoucho: 0,
            yaruki: 0,
        };
        // this.pItemIds = pItemIds;
        this.skillCardIds = skillCardIds;

        // this.pItems = new PItemManager(pItemIds);
        this.deck = new Deck(skillCardIds);
    }

    draw (number) {
        this.deck.draw(3);
        const handCards = this.getDeck('handCards');
        for (const handCard of handCards) {
            for (const effect of handCard.effects) {
                if (effect.type == 'score') {
                    const concentrationCoef = this.condition.concentration;
                    const kouchoCoef = this.condition.koucho > 0 ? 1.5 : 1;
                    const zekkouchoCoef = 
                        this.condition.zekkoucho > 0 ? this.condition.koucho * 0.1 : 0;
                    const statusCoef = 1;

                    // console.log(`( ${effect.value} + ${concentrationCoef} ) * ( ${kouchoCoef} + ${zekkouchoCoef} )`);
                    const actualValue = Math.floor(
                        ( effect.value + concentrationCoef )
                        *( kouchoCoef + zekkouchoCoef)
                        *statusCoef
                    );
    
                    effect.actualValue = actualValue;
        
                } else if (effect.type == 'block') {
                    effect.actualValue = effect.value + this.condition.yaruki;
                } else {
                    effect.actualValue = effect.value;
                }
            }
        }
    }

    finishTurn () {
        this.deck.discardAll();
    }

    checkCondition(query) {
        return true;
    }

    useCost (cost) {
        switch (cost.type) {
            case 'normal': 
                if (this.block < cost.value) {
                    this.hp -= (cost.value - this.block);
                    this.block = 0;
                } else {
                    this.block -= cost.value;
                }
                break;
            case 'direct':
                this.hp -= cost.value;
                break;
        }
    }

    useCard (cardNumber) {
        const usedCard = this.deck.getHandCardByNumber(cardNumber);
        console.log(`"${usedCard.name}"を使った`);
        this.useCost(usedCard.cost);
        const actionResults = [];
        for (const effect of usedCard.effects) {
            const effectResults = this.useEffect(effect);
            actionResults.push(...effectResults);
        }
        this.deck.useCard(cardNumber);
        return actionResults;
    }

    useEffect ({type, actualValue}) {
        const effectResults = []
        switch (type) {
            case 'heal': // 体力回復
                break;
            case 'score': // スコア
                effectResults.push({ type: 'score', value: actualValue });
                console.log(` スコア+${actualValue}`);
                break;
            case 'block': // ブロック
                this.block += actualValue;
                console.log(` ブロック+${actualValue}`);
                break;
        }
        return effectResults;
    }

    getDeck (type) {
        return this.deck[type];
    }

}