import { Deck } from './Deck.js';
import { PIdolStatus } from './PIdolStatus.js';
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
        this.status = new PIdolStatus();
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

            let conditionFlag = this.checkConditionQuery(conditionQuery);
            let costFlag = this.checkEnoughCost(handCard.cost);

            handCard.setAvailable(conditionFlag && costFlag);
        }
    }

    checkConditionQuery (query) {
        if (!query) {
            return true;
        }
        if (~query.indexOf('==')) {
            const [key, value] = query.split('==');
            return this.status.get(key) == value;
        } else if (~query.indexOf('!=')) {
            const [key, value] = query.split('!=');
            return this.status.get(key) != value;
        } else if (~query.indexOf('>=')) {
            const [key, value] = query.split('>=');
            return this.status.get(key) >= value;
        } else if (~query.indexOf('<=')) {
            const [key, value] = query.split('<=');
            return this.status.get(key) <= value;
        } else if (~query.indexOf('>')) {
            const [key, value] = query.split('>');
            return this.status.get(key) > value;
        } else if (~query.indexOf('<')) {
            const [key, value] = query.split('<');
            return this.status.get(key) < value;
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
            const concentrationCoef = this.status.get('集中');
            const kouchoCoef = this.status.get('好調') > 0 ? 1.5 : 1;
            const zekkouchoCoef = 
                this.status.get('絶好調') > 0 ? this.status.get('好調') * 0.1 : 0;
            const parameterCoef = 1;

            // optionはstatic class作って計算させよう
            const optionCoef = {
                '集中': 1,
                'score': 0,
            }

            if (effect.options) {
                for (const effectOption of effect.options) {
                    switch (effectOption.type) {
                        case '集中': 
                            optionCoef['集中'] = effectOption.value;
                            break;
                        case '好印象': 
                            optionCoef['score'] = (1 + effectOption.value/100) * this.status.get('好印象');
                            break;
                        case 'block':
                            optionCoef['score'] = (1 + effectOption.value/100) * this.block;
                            break;
                        case 'やる気':
                            optionCoef['score'] = (1 + effectOption.value/100) * this.status.get('やる気');
                            break;
                    }
                }
            }

            // console.log(`( ${effect.value} + ${concentrationCoef} ) * ( ${kouchoCoef} + ${zekkouchoCoef} )`);

            const baseScore = isNaN(effect.value) ? 0 : effect.value;
            const adjustScore = ( 
                baseScore 
                + concentrationCoef * optionCoef['集中'] 
                + optionCoef['score']
            );

            const actualValue = Math.floor(
                ( adjustScore )
                *( kouchoCoef + zekkouchoCoef)
                *parameterCoef
            );

            effect.actualValue = actualValue;

        } else if (effect.type == 'block') {
            effect.actualValue = effect.value + this.status.get('やる気');
        } else {
            effect.actualValue = effect.value;
        }
    }

    finishTurn () {
        const actionResults = [];
        this.deck.discardAll();
        if (this.status.get('好印象') > 0) {
            actionResults.push(...this.useEffect({ type: 'score', actualValue: this.status.get('好印象') }));
        }
        this.status.reduceInTurnend();
        return actionResults;
    }

    checkEnoughCost (cost) { 
        switch (cost.type) {
            case 'normal':
                return this.hp + this.block >= cost.value;
            case 'direct':
                return this.hp >= cost.value;
            case '集中':
            case '好調':
            case '好印象':
            case 'やる気':
                return this.status.get(cost.type) > 0;
        }
        throw new Error(`コストのタイプ${cost.type}が不明です。`);
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
            case '集中':
            case '好調':
            case '好印象':
            case 'やる気':
                this.status.reduce(cost.type, cost.value);
                break;
        }
    }

    rest () {
        this.useEffect({ type: 'heal', actualValue: 2 });
    }



    useCard (cardNumber) {
        const usedCard = this.deck.getHandCardByNumber(cardNumber);
        console.log(`"${usedCard.name}"を使った`);
        this.useCost(usedCard.cost);
        const actionResults = [];
        // effect条件判定
        for (const effect of usedCard.effects) {
            effect.isActive = this.checkConditionQuery(effect.condition);
        }
        // effect効果
        for (const effect of usedCard.effects) {
            if (!effect.isActive) continue;
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
            case '集中':
            case '好調':
            case '絶好調':
            case '好印象':
            case 'やる気':
                this.status.add(type, actualValue);
                console.log(` ${type}+${actualValue}`);
                break;
        }
        return effectResults;
    }

    getDeck (type) {
        return this.deck[type];
    }

}