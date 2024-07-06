import { Deck } from './Deck.js';
import { PIdolStatus } from './PIdolStatus.js';
import { PItemManager } from './PItemManager.js';
import { skillCardList } from "./SkillCardList.js";

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
        this.plan = 'logic';
        this.turn = 0;
        this.remain_turn = null;
        this.status = new PIdolStatus();
        this.pItemIds = pItemIds;
        this.skillCardIds = skillCardIds;
        this.pItemsManager = new PItemManager(pItemIds);
        this.deck = new Deck(skillCardIds);
        this.lastUsedCard = null;
    }

    use_pItem (activateTiming) {
        const activatePItemList = this.pItemsManager.getPItemByActivateTiming(activateTiming);
        // console.log(activateTiming, activatePItemList.map(item=>item.name).join(', '));
        for (const pItem of activatePItemList) {
            if (!pItem.isAvalable()) continue;
            if (!this.checkCondition(pItem.condition)) continue;
            pItem.use();
            for (const effect of pItem.effects) {
                this.useEffect(effect, { pItemNoHook: true });
            }
        }
    }

    // 
    process_at (timing) {
        if (timing == 'start_of_turn') {
            this.turn++;
            // Pアイテムターン開始時発動
            this.use_pItem('start_of_turn');
            // Nターン後、パラメータの処理
            const score_delayEffectStack = this.status.getDelayEffectStack('Nターン後、パラメータ');
            for (let i = 0; i < score_delayEffectStack.length; i++) {
                const parameterEffect = score_delayEffectStack[i];
                if (parameterEffect.turn == this.turn) {
                    this.useEffect({ type: 'score', value: parameterEffect.value });
                    score_delayEffectStack.splice(i, 1);
                    i--;
                }
            }
        }
        else if (timing == 'end_of_turn') {
            this.deck.discardAll();
            // Pアイテムターン終了時発動
            this.use_pItem('end_of_turn');
            // ステータス効果ターン終了時発動
            for (const status of this.status.get_byActivateTiming('turnend')) {
                if (!this.checkCondition(status.activate_condition)) continue;
                for (let i = 0; i < status.value; i++) {
                    for (const effect of status.activate_effects) {
                        this.useEffect(effect);
                    }
                }
            }

            if (this.status.getValue('好印象') > 0) {
                this.useEffect({ type: 'score', value: this.status.getValue('好印象') });
            }
            this.status.reduceInTurnend();
            this.remain_turn--;
        }
    }

    draw (number) {
        const draw_delayEffectStack = this.status.getDelayEffectStack('Nターン後ドロー');
        for (let i = 0; i < draw_delayEffectStack.length; i++) {
            const drawEffect = draw_delayEffectStack[i];
            if (drawEffect.turn == this.turn) {
                number += drawEffect.value;
                draw_delayEffectStack.splice(i, 1);
                i--;
            }
        }
        this.deck.draw(number);
        const upgrade_delayEffectStack = this.status.getDelayEffectStack('Nターン後、手札強化');
        for (let i = 0; i < upgrade_delayEffectStack.length; i++) {
            const upgradeEffect = upgrade_delayEffectStack[i];
            if (upgradeEffect.turn == this.turn) {
                this.useEffect({ type: '手札強化' });
                upgrade_delayEffectStack.splice(i, 1);
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

            let conditionFlag = this.checkCondition(conditionQuery);
            let costFlag = this.checkCost(handCard.cost);

            handCard.setAvailable(conditionFlag && costFlag);
        }
    }

    checkCondition (query) {
        if (!query) {
            return true;
        }
        const result = query.split('|').map((orQuery) => {
            return orQuery.split('&').map((andQuery) => {
                return this.checkConditionUnit(andQuery);
            }).every(item=>item);
        }).some(item=>item);
        return result;
    }

    checkConditionUnit (query) {
        if (!query) {
            return true;
        }
        const evaluate = (key, value, sign) => {
            let targetValue = null;
            switch (key) {
                case 'hpPer':
                    targetValue = this.hp / this.maxHp * 100;
                    break;
                case 'score': 
                    targetValue = this.score;
                    break;
                case 'block':
                    targetValue = this.block;
                    break;
                case 'turn':
                    targetValue = this.turn;
                    break;
                case 'turnType':
                    /**mi */
                    break;
                case 'turnMultiple': // nターンごと無理やりなので修正してね
                    // turnMultiple==2
                    // turn % value == 0 => targetValue = value;
                    // turn % value != 0 => targetValue = -1;
                    if (this.turn % Number(value) == 0) {
                        targetValue = value;
                    } else {
                        targetValue = -1;
                    }
                    break;
                case 'cardType':
                    targetValue = this.lastUsedCard?.type;
                    break;
                case 'remain_turn':
                    targetValue = this.remain_turn;
                    break;
                default: 
                    targetValue = this.status.getValue(key);
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
                    * (this.status.getValue('消費体力減少') > 0 ? 0.5 : 1) 
                    * (this.status.getValue('消費体力増加') > 0 ? 2 : 1)
                ) 
                - this.status.getValue('消費体力軽減');
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
            const concentrationCoef = this.status.getValue('集中');
            const kouchoCoef = this.status.getValue('好調') > 0 ? 1.5 : 1;
            const zekkouchoCoef = 
                this.status.getValue('絶好調') > 0 ? this.status.getValue('好調') * 0.1 : 0;
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
                            optionCoef['score'] = (effectOption.value/100) * this.status.getValue('好印象');
                            break;
                        case 'block':
                            optionCoef['score'] = (effectOption.value/100) * this.block;
                            break;
                        case 'やる気':
                            optionCoef['score'] = (effectOption.value/100) * this.status.getValue('やる気');
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

            effect.actualValue = effect.value + this.status.getValue('やる気') + optionCoef['使用したスキルカード数'];

            if (this.status.getValue('元気増加無効') > 0) {
                effect.actualValue = 0;
            }

        } else {
            effect.actualValue = effect.value;
        }
    }

    checkCost (cost) { 
        switch (cost.type) {
            case 'normal':
                return this.hp + this.block >= cost.actualValue;
            case 'direct':
                return this.hp >= cost.actualValue;
            default: 
                return this.status.getValue(cost.type) >= cost.actualValue;
        }
    }

    useCost (cost) {
        switch (cost.type) {
            case 'normal': 
                const block = this.block;
                const hp = this.hp;
                if (this.block < cost.actualValue) {
                    this.hp -= (cost.actualValue - block);
                    this.block = 0;
                } else {
                    this.block -= cost.actualValue;
                    this.use_pItem('consume_hp');
                }
                console.log(` 体力消費: ${hp}->${this.hp}(元気: ${block}->${this.block})`);
                break;
            case 'direct':
                this.hp -= cost.actualValue;
                this.use_pItem('consume_hp');
                console.log(` 体力消費: ${this.hp+cost.actualValue}->${this.hp}`);
                break;
            default: 
                const statusValue = this.status.getValue(cost.type);
                this.status.reduce(cost.type, cost.actualValue);
                console.log(` ${cost.type}消費: ${statusValue}->${this.status.getValue(cost.type)}`);
                break;
        }
    }

    rest () {
        this.useEffect({ type: '体力回復', value: 2 });
    }

    activate_at_useCard (usedCard) {
        const status_list = this.status.get_byActivateTiming('usecard');
        for (const status of status_list) {
            if (!this.checkCondition(status.activate_condition)) continue;
            for (let i = 0; i < status.value; i++) {
                for (const effect of status.activate_effects) {
                    this.useEffect(effect);
                }
            }
        }
    }

    useCard (cardNumber) {
        const usedCard = this.deck.getHandCardByNumber(cardNumber);
        this.lastUsedCard = usedCard;
        console.log(`"${usedCard.name}"を使った`);
        this.status.add('使用したスキルカード数', 1);
        this.use_pItem('use_card');
        this.deck.useCard(cardNumber);
        this.useCost(usedCard.cost);
        this.activate_at_useCard(usedCard);
        // effect条件判定
        for (const effect of usedCard.effects) {
            effect.isActive = this.checkCondition(effect.condition);
        }
        // effect効果
        for (const effect of usedCard.effects) {
            if (!effect.isActive) continue;
            this.useEffect(effect);
        }
    }

    useEffect (effect, options) {
        this.calcEffectActualValue(effect);
        const {type, actualValue, n} = effect;
        switch (type) {
            case '体力回復':
                this.hp += actualValue;
                if (this.hp > this.maxHp) this.hp = this.maxHp;
                console.log(` 体力+${actualValue}`);
                break;
            case '体力直接消費':
                this.useCost({ type: 'direct', actualValue: actualValue });
                break;
            case 'score':
                this.score += actualValue;
                console.log(` スコア+${actualValue}`);
                break;
            case 'block':
                this.block += actualValue;
                console.log(` ブロック+${actualValue}`);
                break;
            case '固定元気':
                this.block += actualValue;
                console.log(` ブロック+${actualValue}`);
                break;
            case 'ブロック割合減少':
                const reduceBlock = Math.ceil(this.block * (actualValue / 100));
                this.block -= reduceBlock;
                console.log(` ブロック: ${this.block}(-${reduceBlock})`);
                break;
            case 'ドロー':
                this.draw(actualValue);
                console.log(` ドロー+${actualValue}`);
                break;
            case '手札強化':
                this.deck.upgrade('allhands');
                break;
            case 'ターン追加':

                break;
            case '手札入れ替え':
                const count = this.deck.getAllHandCardCount();
                this.deck.discardAll();
                this.draw(count);
                console.log('手札を入れ替えた');
                break;
            case '生成':
                if (actualValue == 'ランダムな強化済みスキルカード') {
                    const targetCards = skillCardList.getList().filter(item=>
                        (item.plan=='free'||item.plan==this.plan) && // プラン指定
                        item.id % 10 == 1 && // 強化カード
                        item.id > 2000000 && // 基本カード削除
                        String(item.id)[1] != '2' &&// キャラ固有削除)
                        String(item.id)[1] != '3' // サポ固有削除)
                    );
                    const targetCard = targetCards[Math.floor(Math.random()*targetCards.length)];
                    this.deck.addCardInDeck(targetCard.id, 'handCards');
                    this.updateHand();
                    console.log(` 生成: ${targetCard.name}を手札に加えた`);
                }
                break;
            case 'Nターン後、手札強化':
            case 'Nターン後ドロー':
            case 'Nターン後、パラメータ':
                this.status.addDelayEffectStack(type, actualValue, this.turn+n);
                console.log(` ${type.replace('N', n)}: +${actualValue}`);
                break;
            // その他の通常バフ・デバフ
            default: 
                if (this.status.getValue('低下状態無効') > 0 && this.status.getType == 'debuff') {
                    this.status.reduce('低下状態無効', 1);
                    const mukou = this.status.getValue('低下状態無効');
                    console.log(` ${type}: +${0}(低下状態無効: ${mukou+1}->${mukou})`);
                } else {
                    this.status.add(type, actualValue);
                    if (!options?.pItemNoHook) {
                        this.use_pItem(`increased_status:${type}`);
                    }
                    console.log(` ${type}: +${actualValue}`);
                    break;
                }
                
        }
    }

    getDeck (type) {
        return this.deck[type];
    }

    checkAdditionalAction () {
        if (this.status.getValue('スキルカード使用数追加') > 0) {
            this.status.reduce('スキルカード使用数追加', 1);
            this.updateHand();
            return true;
        }
        return false;
    }

    checkFinished () {
        if (this.remain_turn == 0) return true;
        return false;
    }

}