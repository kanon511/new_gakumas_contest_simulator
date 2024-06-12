import { Deck } from './Deck.js';
import { PItemManager } from './PItemManager.js';

export class ContestPIdol {

    constructor ({ parameter, pItemIds, skillCardIds }) {
        this.parameter = {
            vocal : parameter.vocal,
            dance : parameter.dance,
            visual: parameter.visual,
        };
        this.hp = parameter.hp;
        this.maxHp = this.hp;
        this.block = 0;
        this.status = {
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
        this.deck.draw(number);
        const handCards = this.getDeck('handCards');
        this.calcHandCardsEffectActualValue(handCards);
        this.checkHandCardsAvailable(handCards);
    }

    checkHandCardsAvailable (handCards) {
        for (const handCard of handCards) {
            const conditionQuery = handCard.condition;

            let conditionFlag = conditionQuery == '' ? true : this.checkConditionQuery(conditionQuery);
            let costFlag = this.checkEnoughCost(handCard.cost);

            handCard.setAvailable(conditionFlag && costFlag);
        }
    }

    checkEnoughCost (cost) { 
        if (cost.type == 'normal') {
            return this.hp + this.block >= cost.value;
        }
        if (cost.type == 'direct') {
            return this.hp >= cost.value;
        }
        throw new Error('cost no type ga humei');
    }

    checkConditionQuery (query) {
        if (~query.indexOf('==')) {
            const [key, value] = query.split('==');
            return this.status[key] == value;
        } else if (~query.indexOf('!=')) {
            const [key, value] = query.split('!=');
            return this.status[key] != value;
        } else if (~query.indexOf('>=')) {
            const [key, value] = query.split('>=');
            return this.status[key] >= value;
        } else if (~query.indexOf('<=')) {
            const [key, value] = query.split('<=');
            return this.status[key] <= value;
        } else if (~query.indexOf('>')) {
            const [key, value] = query.split('>');
            return this.status[key] > value;
        } else if (~query.indexOf('<')) {
            const [key, value] = query.split('<');
            return this.status[key] < value;
        }
    }

    calcHandCardsEffectActualValue (handCards) {
        for (const handCard of handCards) {
            for (const effect of handCard.effects) {
                this.calcEffectActualValue(effect)
            }
        }
    }

    calcEffectActualValue (effect) {
        if (effect.type == 'score') {
            const concentrationCoef = this.status.concentration;
            const kouchoCoef = this.status.koucho > 0 ? 1.5 : 1;
            const zekkouchoCoef = 
                this.status.zekkoucho > 0 ? this.status.koucho * 0.1 : 0;
            const parameterCoef = 1;

            // optionはstatic class作って計算させよう
            const optionCoef = {
                concentration: 1,
                favorable: 0,
                block: 0,
            }

            if (effect.options) {
                for (const effectOption of effect.options) {
                    switch (effectOption.type) {
                        case 'concentration': 
                            optionCoef.concentration = effectOption.value;
                            break;
                        case 'favorable': 
                            optionCoef.favorable = (1 + effectOption.value/100) * this.status.favorable;
                            break;
                        case 'block':
                            optionCoef.block = (1 + effectOption.value/100) * this.block;
                            break;
                    }
                }
            }

            // console.log(`( ${effect.value} + ${concentrationCoef} ) * ( ${kouchoCoef} + ${zekkouchoCoef} )`);

            const baseScore = isNaN(effect.value) ? 0 : effect.value;
            const adjustScore = ( 
                baseScore 
                + concentrationCoef * optionCoef.concentration 
                + optionCoef.favorable
                + optionCoef.block
            );

            const actualValue = Math.floor(
                ( adjustScore )
                *( kouchoCoef + zekkouchoCoef)
                *parameterCoef
            );

            effect.actualValue = actualValue;

        } else if (effect.type == 'block') {
            effect.actualValue = effect.value + this.status.yaruki;
        } else {
            effect.actualValue = effect.value;
        }
    }

    finishTurn () {
        this.deck.discardAll();
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

    rest () {
        this.useEffect({type: 'heal', actualValue: 2});
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
                this.hp += actualValue;
                if (this.hp > this.maxHp) this.hp = this.maxHp;
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