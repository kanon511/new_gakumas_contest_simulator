
export class Calculator {
    static calcActionEvaluation (action) {
        if (action.type == 'delay') {
            return 0;
        }
        if (action.type == 'use') {
            return 0;
        }
        if (action.type == 'end') {
            return 0;
        }
        if (action.delay) {
            return 0;
        }
        if (action.type == 'hp') {
            return 0;
        }
        if (action.type == 'block') {
            return 0;
        }
        if (action.type == 'score') {
            return action.args[0];
        }
        if (action.type == 'add_action') {
            return 0;
        }
        if (action.type == 'extra_turn') {
            return 0;
        }
        if (action.type == 'draw') {
            return 0;
        }
        if (action.type == 'upgrade') {
            return 0;
        }
        if (action.type == 'discard') {
            return 0;
        }
        if (action.type == 'generate') {
            return 0;
        }
        if (action.type == 'status') {
            const statusType = action.args[0];
            if (statusType == '集中') {
                return 0;
            }
            if (statusType == '好調') {
                return 0;
            }
            if (statusType == '絶好調') {
                return 0;
            }
            if (statusType == 'やる気') {
                return 0;
            }
            if (statusType == '好印象') {
                return 0;
            }
            if (statusType == '消費体力削減') {
                return 0;
            }
            if (statusType == '消費体力減少') {
                return 0;
            }
            if (statusType == '消費体力増加') {
                return 0;
            }
            if (statusType == '元気増加無効') {
                return 0;
            }
            if (statusType == '低下状態無効') {
                return 0;
            }
            if (statusType == 'スキルカード使用数追加') {
                return 0;
            }
            if (statusType == '次に使用するスキルカードの効果を発動') {
                return 15000;
            }
            if (statusType == '次に使用するアクティブスキルカードの効果を発動') {
                return 16000;
            }
            if (statusType == 'パラメータ上昇量増加') {
                return 0;
            }
            if (statusType == '使用したスキルカード数') {
                return 0;
            }
            if (statusType == 'アクティブスキルカード使用時固定元気+2') {
                return 0;
            }
            if (statusType == 'アクティブスキルカード使用時集中+1') {
                return 0;
            }
            if (statusType == 'メンタルスキルカード使用時好印象+1') {
                return 0;
            }
            if (statusType == 'メンタルスキルカード使用時やる気+1') {
                return 0;
            }
            if (statusType == 'ターン終了時、好印象+1') {
                return 0;
            }
            if (statusType == 'ターン終了時、集中が3以上の場合、集中+2') {
                return 0;
            }
            if (statusType == 'ターン終了時、好印象が3以上の場合、好印象+3') {
                return 0;
            }
            if (statusType == 'アクティブスキルカード使用時、パラメータ+4') {
                return 0;
            }
            if (statusType == 'アクティブスキルカード使用時、パラメータ+5') {
                return 0;
            }
            if (statusType == 'スキルカード使用時、好印象の30%分パラメータ') {
                return 0;
            }
            if (statusType == 'スキルカード使用時、好印象の50%分パラメータ') {
                return 0;
            }
            throw new Error(`次のステータスは定義されていません -> ${statusType}`);
        }
        throw new Error(`次のアクションタイプは定義されていません -> ${Object.entries(action).map(item=>`${item[0]}->${item[1]}`).join(', ')}`);
    }

    static calcActualValue (effect, status, parameter) {
        if (effect.type == 'score') {
            const concentrationCoef = status.pStatus.getValue('集中');
            const goodConditionCoef = status.pStatus.has('好調') ? 1.5 : 1;
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
                        case '好印象': optionCoef['score'] = (effectOption.value/100) * status.pStatus.getValue('好印象'); break;
                        case 'block': optionCoef['score'] = (effectOption.value/100) * status.block; break;
                        case 'やる気': optionCoef['score'] = (effectOption.value/100) * status.pStatus.getValue('やる気'); break;
                    }
                });
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
            if (effect.options) {
                effect.options.forEach(effectOption => {
                    switch (effectOption.type) {
                        case '使用したスキルカード数': optionCoef['使用したスキルカード数'] = effectOption.value * status.pStatus.getValue('使用したスキルカード数'); break;
                        case '割合減少': optionCoef['割合減少'] = -Math.ceil(status.block * effectOption.value / 100);
                    }
                });
            }
            let actualValue = (effect.value ?? 0 + status.pStatus.getValue('やる気') + optionCoef['使用したスキルカード数'] + optionCoef['割合減少']);
            if (status.pStatus.has('元気増加無効') && actualValue > 0) actualValue = 0;
            return actualValue;
        }
        if (effect.type == 'hp' || effect.type == 'direct_hp') {
            const value = effect.value;
            if (value < 0) {
                const increaseHpConsumption = status.pStatus.has('消費体力増加') ? 2.0 : 1.0;
                const decreaseHpConsumption = status.pStatus.has('消費体力減少') ? 0.5 : 1.0;
                const reductionHpComsumption = status.pStatus.getValue('消費体力削減');
                const actualValue = Math.floor(value * increaseHpConsumption * decreaseHpConsumption) + reductionHpComsumption;
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
                        case 'multiple': optionalValue = status.pStatus.getValue(effect.type) * (option.value-1); break;
                    }
                    optionalValue = Math.floor(optionalValue);
                });
            }
            const actualValue = baseValue + optionalValue;
            return actualValue;
        }
        return effect.value;
    }
    
}