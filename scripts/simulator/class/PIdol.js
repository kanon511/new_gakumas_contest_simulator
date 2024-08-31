import { Deck } from './Deck.js';
import { TurnType } from './TurnType.js';
import { PIdolStatus, _PStatus } from './PIdolStatus.js';
import { PItemManager } from './PItemManager.js';
import { SkillCard, SkillCardData } from '../data/skillCardData.js';
import { PIdolLog } from './PIdolLog.js';
import { ConditionChecker } from './ConditionChecker.js';
import { Calculator } from './Calculator.js';
import { deep_copy } from '../../../scripts/util/utility.js';

export class PIdol {

    #parameter;
    #status;
    #pItemsManager;
    #deck;
    #isAdditional;
    #endExecutions;
    #log;
    #turnType;
    #trendEvaluationVonusCoef;
    #autoId;

    constructor ({ parameter, plan, trend, pItemIds, skillCardIds, autoId}) {

        this.#parameter = {
            vocal : parameter.vocal,
            dance : parameter.dance,
            visual: parameter.visual,
            max   : Math.max(parameter.vocal, parameter.dance, parameter.visual),
            avg   : 0,
        };

        this.#status = {
            hp: parameter.hp,
            maxHp: parameter.hp,
            block: 0,
            score: 0,
            plan: plan,
            trend: trend,
            turn: 0,
            currentTurnType: null,
            extraTurn: 0,
            remainTurn: null,
            turnCount: 0,
            lastUsedCard: null,
            usedCardCount: 0,
            pStatus: new PIdolStatus(),
            handCount: null,
            turnType: null,
        };

        this.#pItemsManager = new PItemManager(pItemIds);
        this.#deck = new Deck(skillCardIds);
        this.#log = new PIdolLog();

        this.#trendEvaluationVonusCoef = {}
        this.#trendEvaluationVonusCoef[trend] = 1.5;

        this.#autoId = autoId;
    }

    init (turnCount, critearia, turnTypes) {
        this.#turnType = new TurnType(turnCount, critearia, turnTypes, this.#autoId);
        this.#status.turnType = this.#turnType;
        this.#status.remainTurn = turnCount;
        this.#status.turnCount = turnCount;
        this.#parameter.avg = 
            Math.floor(['vocal', 'dance', 'visual'].reduce((acc, curr)=>{
                return acc + this.#turnType.getCount(curr) * this.#parameter[curr];
            }, 0) / turnCount);
    }

    getResult () {
        return {
            log: this.#log.getLog(),
            finalStatus: { score: this.#status.score, hp: this.#status.hp, block: this.#status.block },
        };
    }

    /**
     * ターン開始時の行動
     */
    start () {
        this.#status.turn++;
        this.#status.currentTurnType = this.#turnType.getType(this.#status.turn);
        this.#log.nextTurn({ score: this.#status.score, hp: this.#status.hp, block: this.#status.block, turnType: this.#status.currentTurnType });
        const defaultActions = [
            { type: 'effect', sourceType: 'pIdol', target: { type: 'draw', value: 3 } },
        ];
        const pItemActions = this.#getPItemAction('start_turn', this.#status);
        const pStatusActions = this.#getPStatusAction('start_turn', this.#status);
        const pDelayActions = this.#getPDelayAction(this.#status);
        //
        const actions = [];
        defaultActions.forEach(action=>actions.push(action));
        pItemActions.forEach(action=>actions.push(action));
        pStatusActions.forEach(action=>actions.push(action));
        pDelayActions.forEach(action=>actions.push(action));
        // const actions = defaultActions.concat(pItemActions, pStatusActions, pDelayActions);
        //
        const executions = this.#simulateActions(actions);
        this.#executeActions(executions);
        this.#updateHandSkillCards();
    }

    

    useCard (cardNumber) {
        const usedCard = this.#deck.getHandCardByNumber(cardNumber);
        this.#status.lastUsedCard = usedCard;
        const executions = usedCard.executions;
        this.#endExecutions = usedCard.scheduledExecutions;
        this.#deck.useCard(cardNumber);
        this.#status.handCount--;
        this.#executeActions(executions);
        if (this.#status.pStatus.has('スキルカード使用数追加')) {
            this.#executeActions(this.#simulateActions([
                { type: 'effect', sourceType: 'pIdol', target: { type: 'status', target: 'スキルカード使用数追加', value: -1 } },
                { type: 'effect', sourceType: 'pIdol', target: { type: 'extra_action', value: 1 } },
            ]));
            return true;
        } else {
            return false;
        }
    }

    rest () {
        const status = this.#getStatus();
        const source = { name: '休憩' };
        const executions = this.#simulateActions([
            { type: 'use', sourceType: 'pRest', source: source },
            { type: 'effect', sourceType: 'pRest', target: { type: 'hp', value: 2 } },
            { type: 'end' },
        ], status);

        const scheduledActions = [];
        this.#getPItemAction('end_turn', status).forEach(action=>scheduledActions.push(action));
        this.#getPStatusAction('end_turn', status).forEach(action=>scheduledActions.push(action));

        this.#executeActions(executions);
        
        this.#endExecutions = this.#simulateActions(scheduledActions, status);
    }

    discardAll () {
        this.#deck.discardAll();
        this.#status.handCount = this.getDeck('handCards').length;
    }

    end () {
        if (this.#endExecutions) {
            this.#executeActions(this.#endExecutions);
            this.#endExecutions = null;
        }
        this.#status.pStatus.reduceInTurnend();
        this.discardAll();
        this.#status.remainTurn--;
    }

    checkAdditionalAction () {
        if (this.#isAdditional) {
            this.#isAdditional = false;
            this.#updateHandSkillCards();
            return true;
        }
        return false;
    }

    checkFinished () {
        if (this.#status.remainTurn == 0) return true;
        return false;
    }

    #updateHandSkillCards ()  {
        const handCards = this.getDeck('handCards');
        this.#log.addExecutionLog([{ type: 'show', sourceType: 'handCard', message: '手札' }]);
        handCards.forEach((handCard) => {
            this.#setSkillCardAvailale(handCard);
            if (handCard.isAvailable()) {
                this.#setSkillCardActions(handCard);
            }
            this.#log.addExecutionLog([{ type: 'card', message: `${handCard.isAvailable()?'○':'×'}${handCard.name}(${handCard.evaluation??0})` }]);
        });
        this.#log.addExecutionLog([{ type: 'end' }]);
    }

    #getSkillCardActions (skillCard) {
        const skillCardActions = [];
        skillCard.effects.forEach(effect => { 
            if (ConditionChecker.check(effect.condition, this.#status)) {
                skillCardActions.push({ type: 'effect', sourceType: 'skillCard', name: skillCard.name, target: effect });
            }
        });
        const twiceActivateKeys = [
            { name: '次に使用するアクティブスキルカードの効果を発動', condition: 'cardType==active' },
            { name: '次に使用するスキルカードの効果を発動', condition: '' },
        ];
        for (let i = 0; i < twiceActivateKeys.length; i++) {
            const item = twiceActivateKeys[i];
            if (
                this.#status.pStatus.has(item.name) && 
                ConditionChecker.check(item.condition, this.#status)
            ) {
                const twiceActions = [];
                twiceActions.push({ type: 'effect', sourceType: 'pIdol', target: { type: 'status', target: item.name, value: -1 } });
                twiceActions.push({ type: 'use', sourceType: 'pStatus', source: this.#status.pStatus.get(item.name) });
                skillCardActions.forEach(action=>twiceActions.push(action));
                twiceActions.push({ type: 'end' });
                twiceActions.forEach(action=>skillCardActions.push(action));
                break;
            }
        };
        return skillCardActions;
    }

    #setSkillCardActions (skillCard) {
        this.#status.lastUsedCard = skillCard;
        const actions = [];
        actions.push({ type: 'use', sourceType: 'skillCard', source: skillCard });
        actions.push({ type: 'effect', sourceType: 'skillCard', name: skillCard.name, target: skillCard.cost });
        this.#getPItemAction('before_use_card', this.#status).forEach(action=>actions.push(action));
        this.#getPStatusAction('before_use_card', this.#status).forEach(action=>actions.push(action));
        this.#getSkillCardActions(skillCard).forEach(action=>actions.push(action));

        const status = this.#getStatus();
        const executions = this.#simulateActions(actions, status);

        const afterActions = [];
        this.#getPItemAction('after_use_card', status).forEach(action=>afterActions.push(action));
        this.#getPStatusAction('after_use_card', status).forEach(action=>afterActions.push(action));
        afterActions.push({ type: 'end' });
        const afterExecution = this.#simulateActions(afterActions, status);

        const totalExecution = executions.concat(afterExecution);

        const evaluation = this.#evaluateExecutions(totalExecution);

        if (isNaN(evaluation)) {
            throw new Error(`evaluation is NaN: ${skillCard.name}`);
        }

        skillCard.executions = totalExecution;
        skillCard.evaluation = evaluation;

        // // ターンエンド時の処理
        const scheduledActions = [];
        this.#getPItemAction('end_turn', status).forEach(action=>scheduledActions.push(action));
        this.#getPStatusAction('end_turn', status).forEach(action=>scheduledActions.push(action));
        const scheduledExecutions = this.#simulateActions(scheduledActions, status);
        const scheduledEvaluation = this.#evaluateExecutions(scheduledExecutions);
        skillCard.scheduledExecutions = scheduledExecutions;

        skillCard.evaluation = evaluation + scheduledEvaluation;
    }

    #evaluateExecutions (executions) {
        return Math.floor(executions.reduce((acc, curr) => {
            let evaluation = Calculator.calcActionEvaluation(curr, this.#status, this.#parameter, this.#trendEvaluationVonusCoef, this.#autoId, this.#turnType.getType(this.#status.turn));
            return acc + evaluation;
        }, 0));
    }

    #getStatus () {
        const status = {
            hp: this.#status.hp,
            maxHp: this.#status.maxHp,
            block: this.#status.block,
            score: this.#status.score,
            plan: this.#status.plan,
            turn: this.#status.turn,
            currentTurnType: this.#status.currentTurnType,
            extraTurn: this.#status.extraTurn,
            remainTurn: this.#status.remainTurn,
            turnCount: this.#status.turnCount,
            lastUsedCard: this.#status.lastUsedCard,
            usedCardCount: this.#status.usedCardCount,
            pStatus: new _PStatus(this.#status.pStatus._deepcopy()),
            handCount: this.getDeck('handCards').length,
            turnType: this.#status.turnType,
        };
        return status;
    }

    #drawSkillCard (number) {
        const result = this.#deck.draw(number);
        this.#status.handCount = this.getDeck('handCards').length;
        return result;
    }

    getDeck (type) {
        return this.#deck[type];
    }

    #setSkillCardAvailale (skillCard) {
        skillCard.setAvailable(
            ConditionChecker.check(skillCard.condition, this.#status) && 
            this.#checkSkillCardCost(skillCard.cost)
        );
    }

    #checkSkillCardCost (cost) {
        const actualValue = Calculator.calcActualValue(cost, this.#status, this.#parameter);
        if (cost.type == 'hp') return this.#status.hp + this.#status.block >= -actualValue;
        if (cost.type == 'direct_hp') return this.#status.hp >= -actualValue;
        return this.#status.pStatus.getValue(cost.target) >= -actualValue;
    }

    #simulateActions (actions, _status) {
        const status = _status ?? this.#getStatus();
        const executions = [];
        actions.forEach(action => {
            this.#simulateAction(action, status)
                .forEach(execution=>executions.push(execution));
        });
        return executions;
    }

    #simulateAction (action, status) {
        if (action.type == 'use' || action.type == 'end') {
            const executes = [action];
            if (action.type == 'use' && action.sourceType == 'skillCard') {
                status.usedCardCount++;
                executes.push({ type: 'used_card_count', args: [1] });
            }
            return executes;
        }
        const { type, target, value, options, delay, condition } = action.target;
        const actualValue = Calculator.calcActualValue(action.target, status, this.#parameter);
        if (!ConditionChecker.check(condition, this.#status)) return [];
        //
        const executes = [];
        if (delay) {
            executes.push({ type: 'delay', args: [actualValue, action.name, status.turn+delay, {
                type: type, target: target, value: value, options: options,
            }] });
            return executes;
        }
        if (type == 'score') {
            const score = status.score;
            status.score = score + actualValue;
            executes.push({ type: 'score', args: [actualValue] });
            return executes;
        }
        if (type == 'hp' || type == 'direct_hp' || type == 'fixed_direct_hp') {
            if (actualValue > 0) { 
                // 回復
                const hp = status.hp;
                status.hp = Math.min(status.maxHp, hp+actualValue);
                executes.push({ type: 'hp', args: [status.hp-hp] });
            } 
            else if (actualValue < 0) { 
                // 消費
                const block = status.block, hp = status.hp;
                if (type == 'direct_hp' || type == 'fixed_direct_hp') {
                    status.hp = hp + actualValue;
                }
                else if (block < -actualValue) {
                    status.hp = hp + (block + actualValue);
                    status.block = 0;
                } 
                else {
                    status.hp = hp;
                    status.block = block + actualValue;
                }
                if (status.block < block) {
                    executes.push({ type: 'block', args: [status.block-block] });
                }
                status.hp = Math.max(status.hp, 0);
                if (status.hp < hp) {
                    executes.push({ type: 'hp', args: [status.hp-hp] });
                    if (action.sourceType == 'skillCard') {
                        this.#simulateActions(this.#getPItemAction('consume_hp', status), status)
                            .forEach(execution=>executes.push(execution));
                    }
                }
            } else {
                executes.push({ type: 'hp', args: [0] });
            }
            return executes;
        }
        if (type == 'block' || type == '固定元気') {
            const block = status.block;
            status.block = block + actualValue;
            executes.push({ type: 'block', args: [actualValue] });
            return executes;
        }
        if (type == 'draw') {
            executes.push({ type: 'draw', args: [actualValue] });
            return executes;
        }
        if (type == 'upgrade') {
            executes.push({ type: 'upgrade', args: [value] });
            return executes;
        }
        if (type == 'extra_action') {
            executes.push({ type: 'add_action', args: [actualValue] });
            return executes;
        }
        if (type == 'extra_turn') {
            executes.push({ type: 'extra_turn', args: [actualValue] });
            return executes;
        }
        if (type == 'discard') {
            executes.push({ type: 'discard', args: [value] });
            return executes;
        }
        if (type == 'generate') {
            executes.push({ type: 'generate', args: [value] });
            return executes;
        }
        if (type == 'status'){ // ステータス系
            if (actualValue > 0) { // 増加
                if (status.pStatus.has('低下状態無効') && status.pStatus.getType(target) == 'debuff') {
                    status.pStatus.reduce('低下状態無効', 1);
                    executes.push({ type: 'status', args: [-1, '低下状態無効'] });
                } else {
                    const availableFirstAdded = action.sourceType == 'skillCard';
                    status.pStatus.add(target, actualValue, availableFirstAdded, options);
                    executes.push({ type: 'status', args: [actualValue, target, availableFirstAdded, options] });
                    if (action.sourceType == 'skillCard') {
                        this.#simulateActions(this.#getPItemAction(`increased_status:${target}`, status), status)
                            .forEach(execution=>executes.push(execution));
                    }
                }
            } 
            else { // 消費
                status.pStatus.reduce(target, -actualValue);
                executes.push({ type: 'status', args: [actualValue, target] });
            }
            return executes;
        }
        throw new Error(`${type}は存在しません -> ${JSON.stringify(action)}`);
    }

    #executeActions (actions) {
        const executeLog = [];
        actions.forEach(action=>{
            if (action.type == 'use' || action.type == 'end') {
                executeLog.push(action);
                if (action.sourceType == 'pItem') {
                    action.source.use();
                }
            } else {
                executeLog.push({ type: 'effect', message: this.#executeAction(action) });
            }
        });
        this.#log.addExecutionLog(executeLog);
    }

    #executeAction ({ type, args }) {
        if (type == 'status') {
            const statusType = args[1];
            const statusValue = this.#status.pStatus.getValue(statusType);
            if (args[0] > 0) {
                this.#status.pStatus.add(statusType, args[0], args[2], args[3]);
            } else {
                this.#status.pStatus.reduce(statusType, -args[0]);
            }
            const afterStatusValue = this.#status.pStatus.getValue(statusType);
            return `${statusType}：${statusValue}→${afterStatusValue}(${afterStatusValue-statusValue})`;
        }
        if (type == 'hp') {
            const hp = this.#status.hp;
            this.#status.hp += args[0];
            return `HP：${hp}→${this.#status.hp}(${this.#status.hp-hp})`;
        }
        if (type == 'score') {
            const score = this.#status.score;
            this.#status.score += args[0];
            return `スコア：${score}→${this.#status.score}(${args[0]})`;
        }
        if (type == 'block') {
            const block = this.#status.block;
            this.#status.block += args[0];
            return `元気：${block}→${this.#status.block}(${this.#status.block-block})`;
        }
        if (type == 'add_action') {
            this.#isAdditional = true;
            return `追加行動`;
        }
        if (type == 'draw') {
            if (this.#status.handCount >= 5) {
                return `カードが引けなかった`;
            }
            const result = this.#drawSkillCard(args[0]);
            if (result.response < result.request) {
                return `${result.response}枚カードを引いた(${result.request-result.response}枚捨て札に送られた)`;
            }
            return `${result.response}枚カードを引いた`;
        }
        if (type == 'delay') {
            this.#status.pStatus.addDelayEffect(args[1], args[2], args[3]);
            return `予約効果登録：${args[1]}(${args[2]}ターン目)`;
        }
        if (type == 'upgrade') {
            this.#deck.upgrade('allhands');
            return `手札を強化した`;
        }
        if (type == 'discard') {
            this.discardAll();
            return `手札を捨てた`;
        }
        if (type == 'used_card_count') {
            this.#status.usedCardCount++;
            return ``;
        }
        if (type == 'generate') {
            let name;
            if (args[0] == 'ランダムな強化済みスキルカード') {
                const targetCards = SkillCardData.getAll().filter(item=>
                    (item.plan=='free'||item.plan==this.#status.plan) && // プラン指定
                    item.id % 10 == 1 && // 強化カード
                    item.id > 2000000 && // 基本カード削除
                    String(item.id)[1] != '2' &&// キャラ固有削除)
                    String(item.id)[1] != '3' // サポ固有削除)
                );
                const targetCard = targetCards[Math.floor(Math.random()*targetCards.length)];
                this.#deck.addCardInDeck(targetCard.id, 'handCards');
                name = targetCard.name;
            }
            return `${name}を手札に加えた`;
        }
        if (type == 'extra_turn') {
            const extraTurn = this.#status.extraTurn;
            this.#status.extraTurn += args[0];
            this.#status.remainTurn += args[0];
            return `追加ターン：${extraTurn}→${this.#status.extraTurn}(${this.#status.extraTurn-extraTurn})`;
        }
        throw new Error(`次のアクションタイプは定義されていません -> ${type}`);
    }

    /**
     * 特定のタイミングで発火するPアイテムのActionを取得する
     * @param {*} activateTiming 
     * @param {*} status 
     * @returns {Array<Object>}
     */
    #getPItemAction (activateTiming, status) {
        const pItemList = this.#pItemsManager.getByTiming(activateTiming)
            .filter(pItem=>ConditionChecker.check(pItem.condition, status));
        const actions = [];
        pItemList.forEach(pItem=>{
            actions.push({ type: 'use', sourceType: 'pItem', source: pItem });
            pItem.effects.forEach(effect=>
                actions.push({ type: 'effect', sourceType: 'pItem', target: effect }));
            actions.push({ type: 'end' });
        });
        return actions;
    }

    /**
     * 特定のタイミングで発火するPステータスのActionを取得する
     * @param {*} activateTiming 
     * @param {*} status 
     * @returns {Array<Object>}
     */
    #getPStatusAction (activateTiming, status) {
        // const pStatusList = this.#status.pStatus.getByTiming(activateTiming)
        const pStatusList = status.pStatus.getByTiming(activateTiming)
            .filter(pStatus=>ConditionChecker.check(pStatus.condition, status));
        const actions = [];
        pStatusList.forEach(pStatus=>{
            for (let i = 0; i < pStatus.value; i++) {
                actions.push({ type: 'use', sourceType: 'pStatus', source: pStatus });
                pStatus.effects.forEach(effect=>
                    actions.push({ type: 'effect', sourceType: 'pStatus', target: effect }));
                actions.push({ type: 'end' });
            }
        });
        return actions;
    }

    /**
     * 予約効果のActionを取得する
     * @param {*} status 
     * @returns {Array<Object>}
     */
    #getPDelayAction (status) {
        const delayEffectList = this.#status.pStatus.getDelayEffects(status.turn);
        const actions = [];
        delayEffectList.forEach(delayEffect=>{
            actions.push({ type: 'use', sourceType: 'pDelay', source: delayEffect });
            actions.push({ type: 'effect', sourceType: 'pDelay', target: delayEffect.effect});
            actions.push({ type: 'end' });
        });
        return actions;
    }
}