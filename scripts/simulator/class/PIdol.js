import { Deck } from './Deck.js';
import { TurnType } from './TurnType.js';
import { PIdolStatus, _PStatus } from './PIdolStatus.js';
import { PItemManager } from './PItemManager.js';
import { SkillCard, SkillCardData } from '../data/skillCardData.js';
import { PIdolLog } from './PIdolLog.js';

class Action {
    constructor (parameter) {
        this.type = parameter.type;
        this.sourceType = parameter.source ?? '';
        this.source = parameter.source;
        this.target = parameter.target ?? null;
    }
    toString () {
        return `type: ${this.type}, source: ${this.source}, target: ${this.target}`;
    }
}

export class PIdol {

    #parameter;
    #hp;
    #maxHp;
    #block;
    #score;
    #plan;
    #turn;
    #extraTurn;
    #remainTurn;
    #status;
    #pItemsManager;
    #deck;
    #currentTurnType;
    #lastUsedCard;
    #log;
    #turnType;

    constructor ({ parameter, plan, pItemIds, skillCardIds }) {
        this.#parameter = {
            vocal : parameter.vocal,
            dance : parameter.dance,
            visual: parameter.visual,
        };
        this.#hp = this.#maxHp = parameter.hp;
        this.#block = 0;
        this.#score = 0;
        this.#plan = plan;
        this.#turn = 0;
        this.#extraTurn = 0;
        this.#remainTurn = null;
        this.#status = new PIdolStatus();
        this.#pItemsManager = new PItemManager(pItemIds);
        this.#deck = new Deck(skillCardIds);
        this.#log = new PIdolLog();
    }

    init (turnCount, critearia, turnTypes) {
        this.#turnType = new TurnType(turnCount, critearia, turnTypes);
        this.#remainTurn = turnCount;
    }

    /**
     * ターン開始時の行動
     */
    start () {
        const pItemActions = this.#getPItemAction('start_turn');
        const pStatusActions = this.#getPStatusAction('start_turn');
        const actualTransaction = this.#simulatedTransaction([...pItemActions, ...pStatusActions]);
        this.#executeTransaction(actualTransaction);
        this._drawSkillCard(3);
        this._updateHandSkillCards();
    }

    #getStatus () {

    }

    #checkCondition () {

    }

    #calcActualValue (effect, status) {
        if (effect.type == 'score') {
            const concentrationCoef = status.status.getValue('集中');
            const goodConditionCoef = status.status.has('好調') ? 1.5 : 1;
            const greatConditionCoef = status.status.had('絶好調') ? status.status.getValue('好調') * 0.1 : 0;
            const parameterRateIncreasedCoef = 1 + status.status.getValue('パラメータ上昇量増加');
            const parameterRateCoef = (()=>{
                if (!effect.delay) return this.#parameter[status.currentTurnType] / 100;
                if (status.remainTurn <= effect.delay) return 0;
                return this.#parameter[this.#turnType.getType(status.turn+effect.delay)] / 100;
            })();
            const optionCoef = { '集中': 1, 'score': 0 }
            for (const effectOption of effect.options ?? []) {
                switch (effectOption.type) {
                    case '集中'  : optionCoef['集中'] = effectOption.value; break;
                    case '好印象': optionCoef['score'] = (effectOption.value/100) * status.status.getValue('好印象'); break;
                    case 'block': optionCoef['score'] = (effectOption.value/100) * status.block; break;
                    case 'やる気': optionCoef['score'] = (effectOption.value/100) * status.status.getValue('やる気'); break;
                }
            }
            const baseScore = effect.value ?? 0;
            const adjustScore = baseScore + concentrationCoef * optionCoef['集中'] + optionCoef['score'];
            const actualValue = 
                Math.ceil(
                    Math.ceil(
                        adjustScore * (goodConditionCoef + greatConditionCoef)
                    ) * parameterRateCoef * parameterRateIncreasedCoef
                );
            return actualValue;
        }
        if (effect.type == 'block') {
            const optionCoef = { '使用したスキルカード数': 0 };
            for (const effectOption of effect.options ?? []) {
                switch (effectOption.type) {
                    case '使用したスキルカード数': optionCoef['使用したスキルカード数'] = effectOption.value * status.status.getValue('使用したスキルカード数'); break;
                }
            }
            const invalidCoef = status.status.has('元気増加無効') ? 0 : 1
            const actualValue = (effect.value + status.status.getValue('やる気') + optionCoef['使用したスキルカード数']) * invalidCoef;
            return actualValue;
        }
        if (effect.type == '体力消費' || effect.type == '体力直接消費') {
            const value = cost.value;
            const increaseHpConsumption = status.status.has('消費体力増加') ? 2.0 : 1.0;
            const decreaseHpConsumption = status.status.has('消費体力減少') ? 0.5 : 1.0;
            const reductionHpComsumption = status.status.getValue('消費体力軽減');
            const actualValue = Math.ceil(value * increaseHpConsumption * decreaseHpConsumption) - reductionHpComsumption;
            return Math.max(0, actualValue);
        }
        const baseValue = effect.value ?? 0;
        let optionalValue = 0;
        for (const option of effect.options ?? []) {
            switch (option.type) {
                case 'multiple': optionalValue = status.status.getValue(effect.type) * (option.value-1); break;
            }
            optionalValue = Math.floor(optionalValue);
        }
        actualValue = baseValue + optionalValue;
        return actualValue;
    }

    /**
     * アクションの一連の流れをシミュレートして結果のトランザクションを返します
     * @param {Array<Action>} transaction 
     * @returns {Array<Action>} シミュレート結果
     */
    #simulatedTransaction (transaction) {
        const actualTransaction = [];
        const status = this.#getStatus();
        for (const action of transaction) {
            actualTransaction.push(...this.#simulateAction(action, status));
        }
        return actualTransaction;
    }

    /**
     * アクションをシミュレートして結果のアクションを返します。statusを変更します。
     * @param {Action} action 
     * @param {PIdolStatus|_PStatus} status 
     * @returns {Array<Action>} シミュレート結果
     */
    #simulateAction (action, status) {
        if (action.type == 'use' || action.type == 'end') return [action];
        // ここにeffectのシミュレートを記述
        const { type, value, options, delay } = action.target;
        const actualValue = this.#calcActualValue(action.target, status);
        const executes = [];
        if (delay) {
            executes.push({ delay: delay, type: type, args: [value, actualValue] });
            return executes;
        }
        executes.push({ type: type, args: [value, actualValue] });
        if (type == '体力消費' || type == '体力直接消費') {
            const block = status.block, hp = status.hp;
            if (type == '体力直接消費') {
                status.hp = hp - actualValue;
            }
            else if (block < actualValue) {
                status.hp = hp - (actualValue - block);
                status.block = 0;
            } 
            else {
                status.hp = hp;
                status.block = block - actualValue;
            }
            if (action.sourceType == 'skillCard' && hp > status.hp) {
                for (const action of this.#getPItemAction('consume_hp')) {
                    executes.push(...this.#simulateAction(action, status));
                }
            }
        }
        else if (type == 'score') {
            const score = status.score;
            status.score = score + actualValue;
        } 
        else if (type == 'block') {
            const block = status.block;
            status.block = block + actualValue;
        }
        else if (type == '固定元気') {
            const block = status.block;
            status.block = block + actualValue;
        }
        else if (type == 'ブロック割合減少') {
            const block = status.block;
            const reduceBlock = Math.ceil(block * (actualValue / 100));
            status.block = block - reduceBlock;
        }
        else if (type == 'ドロー') {

        }
        else if (type == '手札強化') {

        }
        else if (type == 'ターン追加') {

        }
        else if (type == '手札入れ替え') {

        }
        else if (type == '生成') {

        }
        else { // ステータス系
            if (actualValue > 0) { // 増加
                if (status.status.has('低下状態無効') && status.status.getType(type) == 'debuff') {
                    status.status.reduce('低下状態無効', 1);
                } else {
                    const statusValue = status.status.getValue(type);
                    const availableFirstAdded = action.sourceType == 'skillCard';
                    status.status.add(type, actualValue, availableFirstAdded, options);
                    if (action.sourceType == 'skillCard') {
                        for (const action of this.#getPItemAction(`increased_status:${type}`)) {
                            executes.push(...this.#simulateAction(action, status));
                        }
                    }
                }
            } 
            else { // 消費
                status.status.reduce(type, actualValue);
            } 
        }
        return executes;
    }

    /**
     * トランザクションを実行します
     * @param {Array<Action>} transaction アクションの一連の流れ
     */
    #executeTransaction (transaction) {
        for (const action of transaction) {

        }
    }

    /**
     * 特定のアクティブタイミングを持った使用可能なPItemのactionを取得します。
     * @param {String} activateTiming タイミング 
     * @returns {Array<Action>} アクションリスト
     */
    #getPItemAction(activateTiming) {
        const actions = [];
        const targetPItemList = this.#pItemsManager.getPItemByActivateTiming(activateTiming);
        const activePItemList = targetPItemList.filter(
            pItem=>pItem.isAvailable() && this.#checkCondition(pItem.condition));
        for (const pItem of activePItemList) {
            actions.push(new Action({ type: 'use', sourceType: 'pItem', source: pItem }));
            for (const effect of pItem.effects) {
                actions.push(new Action({ type: 'effect', sourceType: 'pItem', source: pItem, target: effect }));
            }
            actions.push(new Action({ type: 'end' }));
        }
        return actions;
    }

    /**
     * 特定のアクティブタイミングを持った使用可能なPStatusのactionを取得します。
     * @param {String} activateTiming タイミング 
     * @returns {Array<Action>} アクションリスト
     */
    #getPStatusAction (activateTiming) {
        const actions = [];
        const targetPStatusList = this.#status.get_byActivateTiming(activateTiming);
        const activePStatusList = targetPStatusList.filter(pStatus=>this.#checkCondition(pStatus.activate_condition));
        for (const pStatus of activePStatusList) {
            for (let i = 0; i < pStatus.value; i++) {
                actions.push(new Action({ type: 'use', sourceType: 'pStatus', source: pStatus }));
                for (const effect of pStatus.activate_effects) {
                    actions.push(new Action({ type: 'effect', source: 'pStatus', source: pStatus, target: effect }));
                }
                actions.push(new Action({ type: 'end' }));
            }
        }
        return actions;
    }
}