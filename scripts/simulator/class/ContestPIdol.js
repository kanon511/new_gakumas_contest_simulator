import { Deck } from './Deck.js';
import { PIdolStatus } from './PIdolStatus.js';
import { PItemManager } from './PItemManager.js';
import { SkillCardData } from '../data/skillCardData.js';

class PIdolLog {
    
    constructor () {
        this.log = [];
        this.currentTurnLog = null;
        this.currentTurn = 0;
    }

    getLog () {
        return this.log;
    }

    addTextLog (text) {
        this.currentTurnLog.history.push(text);
        // console.log(text);
    }

    nextTurn ({ score, hp, block, turnType }) {
        this.currentTurn++;
        this.currentTurnLog = {
            turn: this.currentTurn,
            turnType: turnType,
            history: [],
            status: {
                score, hp, block, 
            }
        };
        this.log.push(this.currentTurnLog);
    }

}

export class ContestPIdol {

    constructor ({ parameter, plan, pItemIds, skillCardIds }) {
        this.parameter = {
            vocal : parameter.vocal,
            dance : parameter.dance,
            visual: parameter.visual,
        };
        this.hp = parameter.hp;
        this.maxHp = this.hp;
        this.block = 0;
        this.score = 0;
        this.plan = plan;
        this.turn = 0;
        this.extraTurn = 0;
        this.remain_turn = null;
        this.status = new PIdolStatus();
        this.pItemIds = pItemIds;
        this.skillCardIds = skillCardIds;
        this.turnTypes = null;
        this.pItemsManager = new PItemManager(pItemIds);
        this.deck = new Deck(skillCardIds);
        this.turnType = null;
        this.lastUsedCard = null;
        this.log = new PIdolLog();
    }

    use_pItem (activateTiming) {
        const activatePItemList = this.pItemsManager.getPItemByActivateTiming(activateTiming);
        for (const pItem of activatePItemList) {
            if (!pItem.isAvailable()) continue;
            if (!this.checkCondition(pItem.condition)) continue;
            this.log.addTextLog(`Pアイテム[${pItem.name}]発動`);
            pItem.use();
            for (const effect of pItem.effects) {
                this.useEffect('pItem', effect, { pItemNoHook: true });
            }
        }
    }

    // 
    process_at (timing, turnType) {
        if (timing == 'start_of_turn') {
            this.turn++;
            this.turnType = turnType;
            this.log.nextTurn({ score: this.score, hp: this.hp, block: this.block, turnType: turnType });
            // Pアイテムターン開始時発動
            this.use_pItem('start_of_turn');
            this.draw(3);
             // 予約効果発動
            for (const delayEffect of  this.status.getDelayEffectByTurn(this.turn)) {
                this.log.addTextLog(`予約効果[${delayEffect.name}]発動`);
                this.useEffect('reservation', delayEffect.effect);
            }
            this.updateHand();
        }
        else if (timing == 'end_of_turn') {
            this.deck.discardAll();
            // Pアイテムターン終了時発動
            this.use_pItem('end_of_turn');
            // ステータス効果ターン終了時発動
            for (const status of this.status.get_byActivateTiming('turnend')) {
                if (!this.checkCondition(status.activate_condition)) continue;
                for (let i = 0; i < status.value; i++) {
                    this.log.addTextLog(`ステータス効果[${status.name}]発動`);
                    for (const effect of status.activate_effects) {
                        this.useEffect('status', effect);
                    }
                }
            }

            if (this.status.getValue('好印象') > 0) {
                this.log.addTextLog(`ステータス効果[好印象]発動`);
                this.useEffect('status', { type: 'score', value: this.status.getValue('好印象') });
            }
            this.status.reduceInTurnend();
            this.remain_turn--;
        }
    }

    draw (number) {
        this.log.addTextLog(`${number}枚ドローした`);
        this.deck.draw(number);
    }

    updateHand () {
        const handCards = this.getDeck('handCards');
        this.calcHandCardsEffectActualValue(handCards);
        this.calcHandCardsActualCost(handCards);
        this.checkHandCardsAvailable(handCards);
        this.log.addTextLog('手札：'+handCards.map(item=>`${item.isAvailable()?'○':'×'}${item.name}(${item.score}|${item.block}|${-item.cost.actualValue})`).join(' | '));
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
                    targetValue = this.turnType;
                    break;
                case 'turnMultiple': // nターンごと。無理やりなので修正してね
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
                case 'cardId':
                    targetValue = this.lastUsedCard?.id;
                    break;
                case 'cardEffectInclude':
                    targetValue = 
                        this.lastUsedCard.effects.some(effect=>effect.type==value) ? 
                        value : -1;
                    break;
                case 'usedCardCountMultiple':
                    targetValue = 
                        this.status.getValue('使用したスキルカード数') % Number(value) == 0 ? 
                        value : -1;
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
            const statusCoef = 1 + this.status.getValue('パラメータ上昇量増加') / 100;
            const parameterCoef = this.parameter[this.turnType] / 100;

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
                Math.ceil(Math.ceil(( adjustScore ) *( kouchoCoef + zekkouchoCoef)) * statusCoef * parameterCoef);

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
            const baseValue = effect.value ?? 0;
            let optionalValue = 0;
            if (effect.options) {
                for (const option of effect.options) {
                    switch (option.type) {
                        case 'multiple':
                            optionalValue = this.status.getValue(effect.type) * (option.value-1);
                            break;
                    }
                }
                optionalValue = Math.floor(optionalValue);
            }
            effect.actualValue = baseValue + optionalValue;
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
                this.useEffect('cost', { type: '体力消費', value: cost.actualValue });
                break;
            case 'direct':
                this.useEffect('cost', { type: '体力直接消費', value: cost.actualValue });
                break;
            default: 
                const statusValue = this.status.getValue(cost.type);
                this.status.reduce(cost.type, cost.actualValue);
                this.log.addTextLog(`${cost.type}：${statusValue}->${statusValue-cost.actualValue} (-${cost.actualValue})`);
                break;
        }
    }

    rest () {
        this.useEffect('rest', { type: '体力回復', value: 2 });
    }

    activate_at_useCard (usedCard) {
        const status_list = this.status.get_byActivateTiming('usecard');
        for (const status of status_list) {
            if (!this.checkCondition(status.activate_condition)) continue;
            for (let i = 0; i < status.value; i++) {
                this.log.addTextLog(`ステータス効果[${status.name}]発動`);
                for (const effect of status.activate_effects) {
                    this.useEffect('status', effect);
                }
            }
        }
    }

    useCard (cardNumber) {
        const usedCard = this.deck.getHandCardByNumber(cardNumber);
        this.lastUsedCard = usedCard;
        this.log.addTextLog(`カード[${usedCard.name}]を使った`);
        this.useCost(usedCard.cost);
        this.status.add('使用したスキルカード数', 1);
        this.use_pItem('use_card');
        this.activate_at_useCard(usedCard);
        this.deck.useCard(cardNumber);
        // effect条件判定
        for (const effect of usedCard.effects) {
            effect.isActive = this.checkCondition(effect.condition);
        }
        // effect効果
        if (this.status.getValue('次に使用するスキルカードの効果を発動') > 0) {
            for (const effect of usedCard.effects) {
                if (!effect.isActive) continue;
                this.useEffect('card', effect);
            }
            this.status.reduce('次に使用するスキルカードの効果を発動', 1);
        }
        // effect効果
        if (usedCard.type == 'active' && this.status.getValue('次に使用するアクティブスキルカードの効果を発動') > 0) {
            for (const effect of usedCard.effects) {
                if (!effect.isActive) continue;
                this.useEffect('card', effect);
            }
            this.status.reduce('次に使用するアクティブスキルカードの効果を発動', 1);
        }
        for (const effect of usedCard.effects) {
            if (!effect.isActive) continue;
            this.useEffect('card', effect);
        }
    }

    useEffect (name, effect) {
        
        // 予約効果を登録
        if (effect.delay) {
            this.log.addTextLog(`予約効果登録：${this.lastUsedCard.name} ${effect.delay}ターン後`);
            this.status.addDelayEffect(this.lastUsedCard.name, this.turn+effect.delay, {
                type: effect.type,
                value: effect.value,
                options: effect.options,
            });
            return;
        }

        this.calcEffectActualValue(effect);
        const { type, actualValue, options } = effect;

        if (type == '体力回復') {
            const hp = this.hp;
            this.hp += actualValue;
            if (this.hp > this.maxHp) this.hp = this.maxHp;
            this.log.addTextLog(`体力：${hp}->${this.hp} (+${actualValue})`);
        } 
        else if (type == '体力消費') {
            const block = this.block;
            const hp = this.hp;
            let reduceFlag = false;
            if (this.block < actualValue) {
                this.hp -= (actualValue - block);
                this.block = 0;
                reduceFlag = true;
            } else {
                this.block -= actualValue;
            }
            this.log.addTextLog(`体力：${hp}->${this.hp} (${this.hp-hp}) 元気：${block}->${this.block} (${this.block-block})`);
            if (reduceFlag && name == 'card') {
                this.use_pItem('consume_hp');
            }
        }
        else if (type == '体力直接消費') {
            const hp = this.hp;
            this.hp -= actualValue;
            this.log.addTextLog(`体力：${hp}->${this.hp} (${this.hp-hp})`);
            if (actualValue > 0 && name == 'card') {
                this.use_pItem('consume_hp');
            }
        }
        else if (type == 'score') {
            const score = this.score;
            this.score += actualValue;
            this.log.addTextLog(`スコア：${score}->${this.score} (+${actualValue})`);
        }
        else if (type == 'block') {
            const block = this.block;
            this.block += actualValue;
            this.log.addTextLog(`元気：${block}->${this.block} (+${actualValue})`);
        }
        else if (type == '固定元気') {
            const block = this.block;
            this.block += actualValue;
            this.log.addTextLog(`元気(固定)：${block}->${this.block} (+${actualValue})`);
        }
        else if (type == 'ブロック割合減少') {
            const block = this.block;
            const reduceBlock = Math.ceil(this.block * (actualValue / 100));
            this.block -= reduceBlock;
            this.log.addTextLog(`元気：${block}->${this.block} (-${reduceBlock})`);
        }
        else if (type == 'ドロー') {
            this.draw(actualValue);
        }
        else if (type == '手札強化') {
            this.deck.upgrade('allhands');
            this.log.addTextLog(`手札強化を強化した`);
        }
        else if (type == 'ターン追加') {
            const extraTurn = this.extraTurn;
            this.remain_turn++;
            this.extraTurn++;
            this.log.addTextLog(`追加ターン：${extraTurn}->${this.extraTurn} (+1)`);
        }
        else if (type == '手札入れ替え') {
            this.log.addTextLog(`手札を入れ替え`);
            const count = this.deck.getAllHandCardCount();
            this.deck.discardAll();
            this.log.addTextLog(`手札を全て捨てた`);
            this.draw(count);
        }
        else if (type == '生成') {
            if (actualValue == 'ランダムな強化済みスキルカード') {
                const targetCards = SkillCardData.getAll().filter(item=>
                    (item.plan=='free'||item.plan==this.plan) && // プラン指定
                    item.id % 10 == 1 && // 強化カード
                    item.id > 2000000 && // 基本カード削除
                    String(item.id)[1] != '2' &&// キャラ固有削除)
                    String(item.id)[1] != '3' // サポ固有削除)
                );
                const targetCard = targetCards[Math.floor(Math.random()*targetCards.length)];
                this.deck.addCardInDeck(targetCard.id, 'handCards');
                this.updateHand();
                this.log.addTextLog(`生成：${targetCard.name}を手札に加えた`);
            }
        }
        else { // その他の通常バフ・デバフ
            if (this.status.getValue('低下状態無効') > 0 && this.status.getType == 'debuff') {
                this.status.reduce('低下状態無効', 1);
                const mukou = this.status.getValue('低下状態無効');
                this.log.addTextLog(`${type}：+0 (低下状態無効：${mukou+1}->${mukou})`);
            } else {
                const statusValue = this.status.getValue(type);
                const availableFirstAdded = name == 'card' || name == 'pDrink';
                this.status.add(type, actualValue, availableFirstAdded, options);
                this.log.addTextLog(`${type}：${statusValue}->${statusValue+actualValue} (+${actualValue})`);
                if (name == 'card') {
                    this.use_pItem(`increased_status:${type}`);
                }
            }
        }
        
    }

    getDeck (type) {
        return this.deck[type];
    }

    checkAdditionalAction () {
        const addtionalAction = this.status.getValue('スキルカード使用数追加');
        if (addtionalAction > 0) {
            this.status.reduce('スキルカード使用数追加', 1);
            this.log.addTextLog(`スキルカード使用数追加：${addtionalAction}->${addtionalAction-1} (-1)`);
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