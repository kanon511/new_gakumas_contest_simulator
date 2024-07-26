import { Deck } from './Deck.js';
import { TurnType } from './TurnType.js';
import { PIdolStatus, _PStatus } from './PIdolStatus.js';
import { PItemManager } from './PItemManager.js';
import { SkillCard, SkillCardData } from '../data/_skillCardData.js';
import { PIdolLog } from './PIdolLog.js';
import { ConditionChecker } from './ConditionChecker.js';
import { Calculator } from './Calculator.js';

// class Action {
//     constructor (parameter) {
//         this.type = parameter.type;
//         this.sourceType = parameter.sourceType ?? '';
//         this.source = parameter.source;
//         this.target = parameter.target ?? null;
//     }
//     toString () {
//         return `type: ${this.type}, source: ${this.sourceType}, target: ${this.target}`;
//     }
// }

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
    #addtionalAction;
    #currentTurnType;
    #lastUsedCard;
    #endTransaction;
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

    getLog () {
        return {
            log: this.#log.getLog(),
            finalStatus: { score: this.#score, hp: this.#hp, block: this.#block },
        };
    }

    /**
     * ターン開始時の行動
     */
    start () {
        this.#turn++;
        this.#currentTurnType = this.#turnType.getType(this.#turn);
        this.#log.nextTurn({ score: this.#score, hp: this.#hp, block: this.#block, turnType: this.#currentTurnType });
        // console.log(`---${this.#turn}ターン(${this.#currentTurnType})---`);
        const pIdolActions = [
            { type: 'effect', sourceType: 'pIdol', target: { type: 'ドロー', value: 3 } },
        ];
        const pItemActions = this.#getPItemAction('start_turn');
        const pStatusActions = this.#getPStatusAction('start_turn');
        const pDelayActions = this.#getPDelayAction();
        const actualTransaction = this.#simulatedTransaction([...pIdolActions, ...pItemActions, ...pStatusActions, ...pDelayActions]);
        const log = this.#executeTransaction(actualTransaction);
        this.#updateHandSkillCards();
    }

    useCard (cardNumber) {
        const usedCard = this.#deck.getHandCardByNumber(cardNumber);
        this.#lastUsedCard = usedCard;
        const transaction = usedCard.transaction;
        const predictTransaction = usedCard.predictTransaction;
        this.#deck.useCard(cardNumber);
        const log = this.#executeTransaction(transaction);
        if (this.#status.has('スキルカード使用数追加')) {
            this.#executeTransaction(this.#simulatedTransaction([
                { type: 'effect', sourceType: 'pIdol', target: { type: 'スキルカード使用数追加', value: -1 } },
                { type: 'effect', sourceType: 'pIdol', target: { type: '追加行動', value: 1 } },
            ]));
            return true;
        } else {
            this.#endTransaction = predictTransaction;
            return false;
        }
    }

    rest () {
        const source = { name: '休憩' };
        const actualTransaction = this.#simulatedTransaction([
            { type: 'use', sourceType: 'rest', source: source },
            { type: 'effect', sourceType: 'rest', source: source, target: { type: '体力回復', value: 2 } },
            { type: 'end' },
        ]);
        const log = this.#executeTransaction(actualTransaction);
    }

    end () {
        this.#deck.discardAll();
        this.#status.reduceInTurnend();
        if (this.#endTransaction) {
            const log = this.#executeTransaction(this.#endTransaction);
            this.#endTransaction = null;
        }
        this.#remainTurn--;
        // console.log('---');
        // console.log(this.#log.currentTurnLog.executionLog);
    }

    checkAdditionalAction () {
        if (this.#addtionalAction) {
            this.#addtionalAction = false;
            this.#updateHandSkillCards();
            return true;
        }
        return false;
    }

    checkFinished () {
        if (this.#remainTurn == 0) return true;
        return false;
    }

    #updateHandSkillCards ()  {
        const handCards = this.getDeck('handCards');
        for (const handCard of handCards) {
            this.#setSkillCardAvailale(handCard);
            if (handCard.isAvailable()) {
                this.#setSkillCardTransaction(handCard);
                // this.printActions(handCard.transaction);
                // this.printActions(handCard.predictTransaction);
            }
            // console.log(`${handCard.isAvailable()?'○':'×'} ${handCard.name} (${handCard.evaluation ?? 0})`);
        }
    }

    #setSkillCardTransaction (skillCard) {
        this.#lastUsedCard = skillCard;
        const transaction = [];
        transaction.push({ type: 'use', sourceType: 'skillCard', source: skillCard });
        transaction.push({ type: 'effect', sourceType: 'skillCard', source: skillCard, target: skillCard.cost });
        transaction.push(...this.#getPItemAction('use_card'));
        transaction.push(...this.#getPStatusAction('use_card'));
        for (const effect of skillCard.effects) {
            transaction.push({ type: 'effect', sourceType: 'skillCard', source: skillCard, target: effect });
        }
        transaction.push({ type: 'end' });

        const status = this.#getStatus();
        const actualTransaction = this.#simulatedTransaction(transaction, status);
        const evaluation = this.#evaluateTransaction(actualTransaction);
        skillCard.transaction = actualTransaction;
        skillCard.evaluation = evaluation;

        // ターンエンド時の処理
        const predictTransaction = [];
        predictTransaction.push(...this.#getPItemAction('end_turn'));
        predictTransaction.push(...this.#getPStatusAction('end_turn'));
        const actualPredictTransaction = this.#simulatedTransaction(predictTransaction, status);
        skillCard.predictTransaction = actualPredictTransaction;
    }

    #getStatus () {
        const pStatus = new _PStatus(this.#status._deepcopy());
        const status = {
            hp: this.#hp,
            maxHp: this.#maxHp,
            score: this.#score,
            block: this.#block,
            turn: this.#turn,
            turnType: this.#turnType,
            currentTurnType: this.#currentTurnType,
            card: this.#lastUsedCard,
            status: pStatus,
            handCount: this.getDeck('handCards').length,
        };
        return status;
    }

    #drawSkillCard (number) {
        this.#deck.draw(number);
    }

    getDeck (type) {
        return this.#deck[type];
    }

    #setSkillCardAvailale (skillCard) {
        const condition = skillCard.condition;
        const flag_condition = ConditionChecker.check(condition, this.#getStatus());
        const flag_cost = this.#checkSkillCardCost(skillCard.cost);
        skillCard.setAvailable(flag_condition && flag_cost);
    }

    #checkSkillCardCost (cost) {
        const actualValue = this.#calcActualValue(cost, this.#getStatus());
        if (cost.type == 'hp') return this.#hp + this.#block >= -actualValue;
        if (cost.type == 'direct_hp') return this.#hp >= -actualValue;
        return this.#status.getValue(cost.type) >= -actualValue;
    }

    #calcActualValue (effect, status) {
        if (effect.type == 'score') {
            const concentrationCoef = status.status.getValue('集中');
            const goodConditionCoef = status.status.has('好調') ? 1.5 : 1;
            const greatConditionCoef = status.status.has('絶好調') ? status.status.getValue('好調') * 0.1 : 0;
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
            // console.log(`base=${baseScore}, 集中=${concentrationCoef * optionCoef['集中']}, addition=${optionCoef['score']}, 好調=${goodConditionCoef}, 絶好調=${greatConditionCoef}, 上昇量=${parameterRateIncreasedCoef}, 倍率=${parameterRateCoef} => ${actualValue}`)
            return actualValue;
        }
        if (effect.type == 'block') {
            const optionCoef = { '使用したスキルカード数': 0, '割合減少': 0 };
            for (const effectOption of effect.options ?? []) {
                switch (effectOption.type) {
                    case '使用したスキルカード数': optionCoef['使用したスキルカード数'] = effectOption.value * status.status.getValue('使用したスキルカード数'); break;
                    case '割合減少': optionCoef['割合減少'] = -Math.ceil(status.block * effectOption.value / 100);
                }
            }
            let actualValue = (effect.value ?? 0 + status.status.getValue('やる気') + optionCoef['使用したスキルカード数'] + optionCoef['割合減少']);
            if (status.status.has('元気増加無効') && actualValue > 0) actualValue = 0;
            return actualValue;
        }
        if (effect.type == 'hp' || effect.type == 'direct_hp') {
            const value = effect.value;
            if (value < 0) {
                const increaseHpConsumption = status.status.has('消費体力増加') ? 2.0 : 1.0;
                const decreaseHpConsumption = status.status.has('消費体力減少') ? 0.5 : 1.0;
                const reductionHpComsumption = status.status.getValue('消費体力削減');
                const actualValue = Math.ceil(value * increaseHpConsumption * decreaseHpConsumption) - reductionHpComsumption;
                return Math.max(0, actualValue);
            }
            return value;
        }
        if (effect.type == 'ドロー') {
            let actualValue = effect.value;
            for (const effectOption of effect.options ?? []) {
                switch (effectOption.type) {
                    case '手札枚数': actualValue = status.handCount-1;
                }
            }
        }
        const baseValue = effect.value ?? 0;
        let optionalValue = 0;
        for (const option of effect.options ?? []) {
            switch (option.type) {
                case 'multiple': optionalValue = status.status.getValue(effect.type) * (option.value-1); break;
            }
            optionalValue = Math.floor(optionalValue);
        }
        const actualValue = baseValue + optionalValue;
        return actualValue;
    }

    /**
     * アクションの一連の流れをシミュレートして結果のトランザクションを返します
     * @param {Array<Action>} transaction 
     * @returns {Array<Action>} シミュレート結果
     */
    #simulatedTransaction (transaction, _status) {
        const actualTransaction = [];
        const status = _status ?? this.#getStatus();
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
        const { type, value, options, delay, condition } = action.target;
        const actualValue = this.#calcActualValue(action.target, status);
        const executes = [];
        if (!ConditionChecker.check(condition, this.#getStatus())) return executes;

        if (delay) {
            executes.push({ delay: delay, type: type, args: [value, actualValue, options, action.source] });
            return executes;
        }
        if (type == 'hp') {
            const hp = status.hp;
            status.hp = Math.min(status.maxHp, hp+actualValue);
            executes.push({ type: 'hp', command: 'add', args: [status.hp-hp] });
        }
        else if (type == '体力消費' || type == '体力直接消費') {
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
            if (status.block < block) {
                executes.push({ type: 'block', command: 'reduce', args: [status.block-block] });
            }
            // if (hp < status.hp) {
            executes.push({ type: 'hp', command: 'reduce', args: [status.hp-hp] });
            // }
            if (action.sourceType == 'skillCard' && hp > status.hp) {
                for (const action of this.#getPItemAction('consume_hp')) {
                    executes.push(...this.#simulateAction(action, status));
                }
            }
        }
        else if (type == 'score') {
            const score = status.score;
            status.score = score + actualValue;
            executes.push({ type: 'score', command: 'add', args: [actualValue] });
        } 
        else if (type == 'block' || type == '固定元気') {
            const block = status.block;
            status.block = block + actualValue;
            executes.push({ type: 'block', command: 'add', args: [actualValue] });
        }
        else if (type == 'ブロック割合減少') {
            const block = status.block;
            const reduceBlock = Math.ceil(block * (actualValue / 100));
            status.block = block - reduceBlock;
            executes.push({ type: 'block', command: 'reduce', args: [-reduceBlock] });
        }
        else if (type == 'ドロー') {
            executes.push({ type: 'draw', command: '', args: [value] });
        }
        else if (type == '手札強化') {
            executes.push({ type: 'upgrage', command: '', args: [value] });
        }
        else if (type == '追加行動') {
            executes.push({ type: 'add_action', command: 'add', args: [actualValue] });
        }
        else if (type == 'ターン追加') {
            executes.push({ type: 'extra_turn', command: 'add', args: [actualValue] });
        }
        else if (type == '手札入れ替え') {
            executes.push({ type: 'discard', command: '', args: [value] });
            executes.push({ type: 'draw', command: '', args: [this.#deck.getAllHandCardCount()-1] });
        }
        else if (type == '生成') {
            executes.push({ type: 'generate', command: '', args: [value] });
        }
        else { // ステータス系
            if (actualValue > 0) { // 増加
                if (status.status.has('低下状態無効') && status.status.getType(type) == 'debuff') {
                    status.status.reduce('低下状態無効', 1);
                    executes.push({ type: 'status:低下状態無効', command: 'reduce', args: [1] });
                } else {
                    const statusValue = status.status.getValue(type);
                    const availableFirstAdded = action.sourceType == 'skillCard';
                    status.status.add(type, actualValue, availableFirstAdded, options);
                    executes.push({ type: `status:${type}`, command: 'add', args: [actualValue, availableFirstAdded, options] });
                    if (action.sourceType == 'skillCard') {
                        for (const action of this.#getPItemAction(`increased_status:${type}`)) {
                            executes.push(...this.#simulateAction(action, status));
                        }
                    }
                }
            } 
            else { // 消費
                status.status.reduce(type, -actualValue);
                executes.push({ type: `status:${type}`, command: 'reduce', args: [-actualValue] });
            } 
        }
        return executes;
    }

    /**
     * トランザクションを実行します
     * @param {Array<Action>} transaction アクションの一連の流れ
     */
    #executeTransaction (transaction) {
        const executionLog = [];
        let currentPointer = executionLog;
        const pointerStack = [];
        for (const action of transaction) {
            const message = this.#executeAction(action);
            if (action.type == 'use') {
                const obj = { 
                    type: 'use', 
                    sourceType: action.sourceType, 
                    name: action.source.name,
                    list: [], 
                }; 
                currentPointer.push(obj);
                pointerStack.push(currentPointer);
                currentPointer = obj.list;
            } 
            else if (action.type == 'end') {
                const pop = pointerStack.pop();
                currentPointer = pop;
            } 
            else {
                currentPointer.push({
                    type: 'effect',
                    message: message,
                });
            }
        }
        this.#log.addExecutionLog(executionLog);
        return executionLog;
    }

    #executeAction (action) {
        if (action.type == 'use') {
            if (action.sourceType == 'pItem') {
                action.source.use();
            }
            return '';
        }
        if (action.type == 'end') {
            return '';
        }
        if (action.delay) {
            this.#status.addDelayEffect(action.args[3].name, this.#turn + action.delay, 
                { type: action.type, value: action.args[0], options: action.args[2] }
            );
            return `予約効果登録：${action.args[3].name}(${action.delay}ターン後)`;
        }
        else if (action.type == 'hp') {
            const hp = this.#hp;
            this.#hp += action.args[0];
            return `HP：${hp}→${this.#hp}(${this.#hp-hp})`;
        }
        else if (action.type == 'block') {
            const block = this.#block;
            this.#block += action.args[0];
            return `元気：${block}→${this.#block}(${this.#block-block})`;
        }
        else if (action.type == 'score') {
            const score = this.#score;
            this.#score += action.args[0];
            return `スコア：${score}→${this.#score}(${this.#score-score})`;
        }
        else if (action.type == 'add_action') {
            this.#addtionalAction = true;
            return `追加行動`;
        }
        else if (action.type == 'extra_turn') {
            const extraTurn = this.#extraTurn;
            this.#extraTurn += action.args[0];
            this.#remainTurn += action.args[0];
            return `追加ターン：${extraTurn}→${this.#extraTurn}(${this.#extraTurn-extraTurn})`;
        }
        else if (action.type == 'draw') {
            this.#drawSkillCard(action.args[0]);
            return `${action.args[0]}枚カードを引いた`;
        }
        else if (action.type == 'upgrade') {
            this.#deck.upgrade('allhands');
            return `手札を強化した`;
        }
        else if (action.type == 'discard') {
            this.#deck.discardAll();
            // console.log(`discard -> `);
            return `手札を捨てた`;
        }
        else if (action.type == 'generate') {
            let name;
            if (action.args[0] == 'ランダムな強化済みスキルカード') {
                const targetCards = SkillCardData.getAll().filter(item=>
                    (item.plan=='free'||item.plan==this.#plan) && // プラン指定
                    item.id % 10 == 1 && // 強化カード
                    item.id > 2000000 && // 基本カード削除
                    String(item.id)[1] != '2' &&// キャラ固有削除)
                    String(item.id)[1] != '3' // サポ固有削除)
                );
                const targetCard = targetCards[Math.floor(Math.random()*targetCards.length)];
                this.#deck.addCardInDeck(targetCard.id, 'handCards');
                name = targetCard.name;
                // console.log(`generate -> ${targetCard.name}を手札に加えた`);
            }
            return `${name}を手札に加えた`;
        }
        else if (action.type.indexOf('status:') == 0) {
            const statusType = action.type.split(':')[1];
            const statusValue = this.#status.getValue(statusType);
            if (action.command == 'add') {
                this.#status.add(statusType, action.args[0], action.args[1], action.args[2]);
            } else {
                this.#status.reduce(statusType, action.args[0]);
            }
            const afterStatusValue = this.#status.getValue(statusType);
            // console.log(`${statusType} -> ${this.#status.getValue(statusType)}`);
            return `${statusType}：${statusValue}→${afterStatusValue}(${afterStatusValue-statusValue})`;
        }
        else {
            throw new Error(`次のアクションタイプは定義されていません -> ${action.type}`);
        }
    }

    #evaluateTransaction (transaction) {
        let totalEvaluation = 0;
        for (const action of transaction) {
            totalEvaluation += Calculator.calcActionEvaluation(action);
        }
        return totalEvaluation;
    }

    /**
     * 特定のアクティブタイミングを持った使用可能なPItemのactionを取得します。
     * @param {String} activateTiming タイミング 
     * @returns {Array<Action>} アクションリスト
     */
    #getPItemAction (activateTiming) {
        const actions = [];
        const targetPItemList = this.#pItemsManager.getPItemByActivateTiming(activateTiming);
        const activePItemList = targetPItemList.filter(
            pItem=>pItem.isAvailable() && ConditionChecker.check(pItem.condition, this.#getStatus()));
        for (const pItem of activePItemList) {
            actions.push({ type: 'use', sourceType: 'pItem', source: pItem });
            for (const effect of pItem.effects) {
                actions.push({ type: 'effect', sourceType: 'pItem', source: pItem, target: effect });
            }
            actions.push({ type: 'end' });
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
        const activePStatusList = targetPStatusList.filter(pStatus=>ConditionChecker.check(pStatus.activate_condition, this.#getStatus()));
        for (const pStatus of activePStatusList) {
            for (let i = 0; i < pStatus.value; i++) {
                actions.push({ type: 'use', sourceType: 'pStatus', source: pStatus });
                for (const effect of pStatus.activate_effects) {
                    actions.push({ type: 'effect', sourceType: 'pStatus', source: pStatus, target: effect });
                }
                actions.push({ type: 'end' });
            }
        }
        return actions;
    }

    #getPDelayAction () {
        const actions = [];
        const delayEffectList = this.#status.getDelayEffects(this.#turn);
        for (const delayEffect of delayEffectList) {
            actions.push({ type: 'use', sourceType: 'pDelayEffect', source: delayEffect });
            // for (const effect of delayEffect.activate_effects) {
            actions.push({ type: 'effect', sourceType: 'pDelayEffect', source: delayEffect, target: delayEffect.effect });
            // }
            actions.push({ type: 'end' });
        }
        return actions;
    }
}