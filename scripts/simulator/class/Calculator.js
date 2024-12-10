import { AutoEvaluationData } from "../data/ProduceExamAutoEvaluation.js";
export class Calculator {
    /**
     * 好印象と残りのターンから現在の好印象値で稼げるスコアを計算します。
     * @param {*} goodImp 
     * @param {*} remainTurn 
     * @returns 
     */
    static calcGoodImpScore (goodImp, remainTurn) {
        const goodImpActiveTurn = (goodImp > remainTurn) ? remainTurn : goodImp;
        return goodImpActiveTurn * goodImp - (goodImpActiveTurn * (goodImpActiveTurn-1) >> 1);
    }
    static calcActionEvaluation (action, status, parameter, trendVonusCoef, autoId, nowTurn) {
        if (autoId < 5){
            let { type, args } = action;
            if(!args){
                return 0;
            }
            const unitValue = parameter['avg'] / 100;

            if (type == 'status') {
                const statusType = args[1];
                if(statusType=='スキルカード使用数追加' && status.pStatus.has('スキルカード使用数追加')){
                    return 0;
                }
                return AutoEvaluationData.get(status.trend,statusType,status.remainTurn-status.extraTurn,args[0],parameter[nowTurn]/100,autoId)
            }

            if (type == 'delay') { //延迟效果
                if (args[2]>status.remainTurn+status.turn) {
                    return 0;
                }
                type = args[3].type;
                args = [args[0], args[1]];
            }

            return AutoEvaluationData.get(status.trend,type,status.remainTurn-status.extraTurn,args[0],parameter[nowTurn]/100,autoId)
        }else{
            let { type, args } = action;
            if(!args){
                return 0;
            }

            if (type == 'status') {
                const statusType = args[1];

                if (AutoEvaluationData.get_trigger_evaluation(status.trend,statusType,status.remainTurn,args[0],parameter,autoId) != 0)
                    console.log(AutoEvaluationData.get_trigger_evaluation(status.trend,statusType,status.remainTurn,args[0],parameter,autoId));

                return AutoEvaluationData.get_trigger_evaluation(status.trend,statusType,status.remainTurn,args[0],parameter,autoId)
            }

            if (AutoEvaluationData.get_trigger_evaluation(status.trend,type,status.remainTurn,args[0],parameter,autoId) != 0)
                console.log(AutoEvaluationData.get_trigger_evaluation(status.trend,type,status.remainTurn,args[0],parameter,autoId));

            return AutoEvaluationData.get_trigger_evaluation(status.trend,type,status.remainTurn,args[0],parameter,autoId);
        }
    }

    static calcActualValue (effect, status, parameter) {
        if (effect.type == 'score') {
            const concentrationCoef = status.pStatus.getValue('集中');
            const goodConditionCoef = status.pStatus.has('好調') ? 1.5 : 1;
            const badConditionCoef = status.pStatus.has('不調') ? 0.666 : 1;
            const greatConditionCoef = status.pStatus.has('絶好調') ? status.pStatus.getValue('好調') * 0.1 : 0;
            const parameterRateIncreasedCoef = 1 + status.pStatus.getValue('パラメータ上昇量増加')/100;
            const parameterRateCoef = (()=>{
                if (!effect.delay) return parameter[status.currentTurnType] / 100;
                if (status.remainTurn <= effect.delay) return 0;
                return parameter[status.turnType.getType(status.turn+effect.delay)] / 100;
            })();
            const optionCoef = { '集中': 1, 'score': 0 }
            if (effect.options) {
                effect.options.forEach(effectOption => {
                    switch (effectOption.type) {
                        case '集中'  : optionCoef['集中'] = effectOption.value; break;
                        case '使用したスキルカード数': optionCoef['score'] = effectOption.value * status.usedCardCount; break;
                        case '好印象': optionCoef['score'] = (effectOption.value/100) * status.pStatus.getValue('好印象'); break;
                        case 'block': optionCoef['score'] = (effectOption.value/100) * status.block; break;
                        case 'やる気': optionCoef['score'] = (effectOption.value/100) * status.pStatus.getValue('やる気'); break;
                        case '好調' : optionCoef['score'] = (effectOption.value/100) * status.pStatus.getValue('好調'); break;
                        case 'consumedHp' : optionCoef['score'] = (effectOption.value/100) * status.consumedHp; break;
                    }
                });
            }
            const baseScore = effect.value ?? 0;
            const adjustScore = baseScore + concentrationCoef * optionCoef['集中'] + optionCoef['score'];
            const actualValue = 
                Math.ceil(
                    Math.ceil(
                        adjustScore * (goodConditionCoef + greatConditionCoef)
                    ) * parameterRateCoef * parameterRateIncreasedCoef * badConditionCoef
                );
            // console.log(`base=${baseScore}, 集中=${concentrationCoef * optionCoef['集中']}, addition=${optionCoef['score']}, 好調=${goodConditionCoef}, 絶好調=${greatConditionCoef}, 上昇量=${parameterRateIncreasedCoef}, 倍率=${parameterRateCoef} => ${actualValue}`)
            return actualValue;
        }
        if (effect.type == 'block') {
            let baseValue = effect.value ?? 0;
            const optionCoef = { 'block': 0, '割合減少': 0, 'やる気': 1 };
            if (effect.options) {
                effect.options.forEach(effectOption => {
                    switch (effectOption.type) {
                        case '使用したスキルカード数': optionCoef['block'] = effectOption.value * (status.usedCardCount-1); break;
                        case '好印象': optionCoef['block'] = (effectOption.value/100) * status.pStatus.getValue('好印象'); break;
                        case 'やる気'  : optionCoef['やる気'] = effectOption.value; break;
                        case '割合減少': baseValue = -Math.ceil(status.block * effectOption.value / 100);
                        case 'consumedHp' : optionCoef['block'] = (effectOption.value/100) * status.consumedHp; break;
                    }
                });
            }
            let actualValue;
            if (baseValue >= 0) {
                actualValue = Math.ceil(baseValue + status.pStatus.getValue('やる気') * optionCoef['やる気'] + optionCoef['block']);
                if (status.pStatus.has('元気増加無効')) {
                    actualValue = 0;
                }
            } else {
                actualValue = baseValue + optionCoef['割合減少'];// <- これいらなくね
            }
            return actualValue;
        }
        if (effect.type == 'hp' || effect.type == 'direct_hp') {
            let value = effect.value ?? 0;
            if (effect.options) {
                effect.options.forEach(effectOption => {
                    switch (effectOption.type) {
                        case 'hpPer': value += status.maxHp * effectOption.value / 100; break;
                    }
                });
            }
            value = Math.ceil(value);
            if (value <= 0) {
                const increaseHpConsumption = status.pStatus.has('消費体力増加') ? 2.0 : 1.0;
                const decreaseHpConsumption = status.pStatus.has('消費体力減少') ? 0.5 : 1.0;
                const reductionHpComsumption = status.pStatus.getValue('消費体力削減');
                const increaseHpComsumption = status.pStatus.getValue('消費体力追加');
                const actualValue = Math.ceil(value * increaseHpConsumption * decreaseHpConsumption) + reductionHpComsumption - increaseHpComsumption;
                return Math.min(0, actualValue);
            }
            return value;
        }
        if (effect.type == 'draw') {
            let actualValue = effect.value;
            if (effect.options) {
                effect.options.forEach(effectOption => {
                    switch (effectOption.type) {
                        case '手札枚数': actualValue = status.handCount-1;
                    }
                });
            }
            return actualValue;
        }
        if (effect.type == 'status') {
            const baseValue = effect.value ?? 0;
            let optionalValue = 0;
            if (effect.options) {
                effect.options.forEach(effectOption => {
                    switch (effectOption.type) {
                        case 'multiple': optionalValue = status.pStatus.getValue(effect.target) * (effectOption.value-1); break;
                        case 'block': optionalValue = (effectOption.value/100) * status.block; break;
                        case '好調' : optionalValue = (effectOption.value/100) * status.pStatus.getValue('好調'); break;
                    }
                    optionalValue = Math.ceil(optionalValue);
                });
            }
            const actualValue = baseValue + optionalValue;
            return actualValue;
        }
        return effect.value;
    }
    
}