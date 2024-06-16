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
        this.block = 100;
        this.score = 0;
        this.turn = 0;
        this.status = new PIdolStatus();
        // this.pItemIds = pItemIds;
        this.skillCardIds = skillCardIds;
        // this.pItems = new PItemManager(pItemIds);
        this.deck = new Deck(skillCardIds);
        this.drawEffects = [];
        this.upgradeEffects = [];
        this.parameterEffects = [];
    }

    startTurn () {
        this.turn++;
        const actionResults = [];
        for (let i = 0; i < this.parameterEffects.length; i++) {
            const parameterEffect = this.parameterEffects[i];
            if (parameterEffect.turn == this.turn) {
                const effect = { type: 'score', value: parameterEffect.value };
                this.calcEffectActualValue(effect);
                actionResults.push(...this.useEffect(effect));
                this.parameterEffects.splice(i, 1);
                i--;
            }
        }
        return actionResults;
    }

    draw (number) {
        for (let i = 0; i < this.drawEffects.length; i++) {
            const drawEffect = this.drawEffects[i];
            if (drawEffect.turn == this.turn) {
                number += drawEffect.value;
                this.drawEffects.splice(i, 1);
                i--;
            }
        }
        this.deck.draw(number);
        for (let i = 0; i < this.upgradeEffects.length; i++) {
            const upgradeEffect = this.upgradeEffects[i];
            if (upgradeEffect.turn == this.turn) {
                this.deck.upgrade('allhands');
                this.upgradeEffects.splice(i, 1);
                i--;
            }
        }
    }

    updateHand () {
        const handCards = this.getDeck('handCards');
        this.calcHandCardsEffectActualValue(handCards);
        this.calcHandCardsActualCost(handCards);
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
        const evaluate = (key, value, sign) => {
            let targetValue = null;
            switch (key) {
                case 'hpPer':
                    targetValue = this.hp / this.maxHp * 100;
                    break;
                case 'score': //コンテストでの挙動不明
                    targetValue = this.score;
                    break;
                case 'block':
                    targetValue = this.block;
                    break;
                case 'turn':
                    targetValue = this.turn;
                    break;
                default: 
                    targetValue = this.status.get(key);
                    break;
            }
            switch (sign) {
                case '==':
                    return targetValue == value;
                case '!=':
                    return targetValue != value;
                case '>=':
                    return targetValue >= value;
                case '<=':
                    return targetValue <= value;
                case '>':
                    return targetValue > value;
                case '<':
                    return targetValue < value;
            }
        }
        let sign = '';
        if (~query.indexOf('==')) {
            sign = '==';
        } else if (~query.indexOf('!=')) {
            sign = '!=';
        } else if (~query.indexOf('>=')) {
            sign = '>=';
        } else if (~query.indexOf('<=')) {
            sign = '<=';
        } else if (~query.indexOf('>')) {
            sign = '>';
        } else if (~query.indexOf('<')) {
            sign = '<';
        } else {
            throw new Error(`予期しない記号が含まれます > ${query}`);
        }
        const [key, value] = query.split(sign);
        return evaluate(key, value, sign);
    }

    calcHandCardsActualCost (handCards) {
        for (const handCard of handCards) {
            this.calcHandCardActualCost(handCard.cost)
        }
    }

    calcHandCardActualCost (cost) {
        if (cost.type == 'normal' || cost.type == 'direct') {
            cost.actualValue  = 
                Math.ceil(cost.value 
                    * (this.status.get('消費体力減少') > 0 ? 0.5 : 1) 
                    * (this.status.get('消費体力増加') > 0 ? 2 : 1)
                ) 
                - this.status.get('消費体力軽減');
            if (cost.actualValue < 0) cost.actualValue = 0;
        } else {
            cost.actualValue = cost.value;
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
                            optionCoef['score'] = (effectOption.value/100) * this.status.get('好印象');
                            break;
                        case 'block':
                            optionCoef['score'] = (effectOption.value/100) * this.block;
                            break;
                        case 'やる気':
                            optionCoef['score'] = (effectOption.value/100) * this.status.get('やる気');
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

            const actualValue = 
                Math.ceil(Math.ceil(( adjustScore ) *( kouchoCoef + zekkouchoCoef))*parameterCoef);

            effect.actualValue = actualValue;

        } else if (effect.type == 'block') {

            const optionCoef = {
                '使用したスキルカード数': 0
            };

            if (effect.options) {
                for (const effectOption of effect.options) {
                    switch (effectOption.type) {
                        case '使用したスキルカード数': 
                            optionCoef['使用したスキルカード数'] = effectOption.value * this.status.get('使用したスキルカード数');
                            break;
                    }
                }
            }

            effect.actualValue = effect.value + this.status.get('やる気') + optionCoef['使用したスキルカード数'];

            if (this.status.get('元気増加無効') > 0) {
                effect.actualValue = 0;
            }

        } else {
            effect.actualValue = effect.value;
        }
    }

    finishTurn () {
        const actionResults = [];
        this.deck.discardAll();
        actionResults.push(...this.activateInFinishTurn());
        if (this.status.get('好印象') > 0) {
            actionResults.push(...this.useEffect({ type: 'score', actualValue: this.status.get('好印象') }));
        }
        this.status.reduceInTurnend();
        return actionResults;
    }

    activateInFinishTurn () {
        const actionResults = [];
        if (this.status.get('ターン終了時、好印象+1') > 0) {
            actionResults.push(...this.useEffect({ type: '好印象', actualValue: this.status.get('ターン終了時、好印象+1') }));
        }
        if (this.status.get('ターン終了時、集中が3以上の場合、集中+2') > 0) {
            if (this.status.get('集中') >= 3) {
                actionResults.push(...this.useEffect({ type: '集中', actualValue: this.status.get('ターン終了時、集中が3以上の場合、集中+2') * 2 }));
            }
        }
        if (this.status.get('ターン終了時、好印象が3以上の場合、好印象+3') > 0) {
            if (this.status.get('好印象') >= 3) {
                actionResults.push(...this.useEffect({ type: '好印象', actualValue: this.status.get('ターン終了時、好印象が3以上の場合、好印象+3') * 3 }));
            }
        }
        return actionResults;
    }

    checkEnoughCost (cost) { 
        switch (cost.type) {
            case 'normal':
                return this.hp + this.block >= cost.actualValue;
            case 'direct':
                return this.hp >= cost.actualValue;
            case '集中':
            case '好調':
            case '好印象':
            case 'やる気':
                return this.status.get(cost.type) >= cost.actualValue;
        }
        throw new Error(`コストのタイプ${cost.type}が不明です。`);
    }

    useCost (cost) {
        switch (cost.type) {
            case 'normal': 
                if (this.block < cost.actualValue) {
                    this.hp -= (cost.actualValue - this.block);
                    this.block = 0;
                } else {
                    this.block -= cost.actualValue;
                }
                break;
            case 'direct':
                this.hp -= cost.actualValue;
                break;
            case '集中':
            case '好調':
            case '好印象':
            case 'やる気':
                this.status.reduce(cost.type, cost.actualValue);
                break;
        }
    }

    rest () {
        this.useEffect({ type: '体力回復', actualValue: 2 });
    }

    activateAfterUseCard (usedCard) {
        const actionResults = [];
        if (this.status.get('アクティブスキルカード使用時固定元気+2') > 0 && usedCard.type == 'active') {
            actionResults.push(...this.useEffect({ type: 'block', actualValue: 2 * this.status.get('アクティブスキルカード使用時固定元気+2') }));
        }
        if (this.status.get('アクティブスキルカード使用時集中+1') > 0 && usedCard.type == 'active') {
            actionResults.push(...this.useEffect({ type: '集中', actualValue: this.status.get('アクティブスキルカード使用時集中+1') }));
        }
        if (this.status.get('メンタルスキルカード使用時好印象+1') > 0 && usedCard.type == 'mental') {
            actionResults.push(...this.useEffect({ type: '好印象', actualValue: this.status.get('メンタルスキルカード使用時好印象+1') }));
        }
        if (this.status.get('メンタルスキルカード使用時やる気+1') > 0 && usedCard.type == 'mental') {
            actionResults.push(...this.useEffect({ type: 'やる気', actualValue: this.status.get('メンタルスキルカード使用時やる気+1') }));
        }
        return actionResults;
    }

    useCard (cardNumber) {
        const usedCard = this.deck.getHandCardByNumber(cardNumber);
        console.log(`"${usedCard.name}"を使った`);
        const actionResults = [];
        this.useCost(usedCard.cost);
        actionResults.push(...this.activateAfterUseCard(usedCard));
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
        this.status.add('使用したスキルカード数', 1);
        return actionResults;
    }

    useEffect ({ type, actualValue }) {
        const effectResults = []
        switch (type) {
            case '体力回復': // 体力回復
                this.hp += actualValue;
                if (this.hp > this.maxHp) this.hp = this.maxHp;
                console.log(` 体力+${actualValue}`);
                break;
            case 'score': // スコア
                effectResults.push({ type: 'score', value: actualValue });
                this.score += actualValue;
                console.log(` スコア+${actualValue}`);
                break;
            case 'block': // ブロック
                this.block += actualValue;
                console.log(` ブロック+${actualValue}`);
                break;
            case 'ブロック割合減少':
                this.block = Math.floor(this.block * (1 - actualValue / 100));
                console.log(` ブロック+${actualValue}`);
                break;
            case 'ドロー':
                this.draw(actualValue);
                console.log(` ドロー+${actualValue}`);
                break;
            case '1ターン後ドロー':
                this.drawEffects.push({ turn: this.turn+1, value: actualValue });
                break;
            case '2ターン後ドロー':
                this.drawEffects.push({ turn: this.turn+2, value: actualValue });
                break;
            case '手札強化':
                this.deck.upgrade('allhands');
                break;
            case '1ターン後、手札強化':
                this.upgradeEffects.push({ turn: this.turn+1 });
                break;
            case '2ターン後、手札強化':
                this.upgradeEffects.push({ turn: this.turn+2 });
                break;
            case 'ターン追加':
                break;
            case '次に使用するスキルカードの効果を発動':
                break;
            case '手札入れ替え':
                break;
            case '生成':
                break;
            case '次のターン、パラメータ':
                this.parameterEffects.push({ turn: this.turn+1, value: actualValue });
                break;
            case '集中':
            case '好調':
            case '絶好調':
            case '好印象':
            case 'やる気':
            case '消費体力減少':
            case '消費体力軽減':
            case '低下状態無効':
            case 'ターン終了時、集中が3以上の場合、集中+2':
            case 'ターン終了時、好印象+1':
            case 'ターン終了時、好印象が3以上の場合、好印象+3':
            case 'スキルカード使用数追加':
                this.status.add(type, actualValue);
                console.log(` ${type}: +${actualValue}`);
                break;
            case '元気増加無効': 
            case '消費体力増加': // 本当はバフもデバフも同じ処理でいいようにしたい
                if (this.status.get('低下状態無効') > 0) {
                    this.status.reduce('低下状態無効', 1);
                    console.log(` ${type}: +${0}(低下状態無効: ${this.status.get('低下状態無効')+1}->${this.status.get('低下状態無効')})`);
                } else {
                    this.status.add(type, actualValue);
                    console.log(` ${type}: +${actualValue}`);
                }
                break;
            default: 
                this.status.add(type, actualValue);
                console.log(` ${type}: +${actualValue}`);
                break;
        }
        return effectResults;
    }

    getDeck (type) {
        return this.deck[type];
    }

    checkAdditionalAction () {
        if (this.status.get('スキルカード使用数追加') > 0) {
            this.status.reduce('スキルカード使用数追加', 1);
            this.updateHand();
            return true;
        }
        return false;
    }

}