
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
    static calcActionEvaluation (action, status, parameter, trendVonusCoef) {
        let { type, args } = action;
        const unitValue = parameter['avg'] / 100;
        if (type == 'delay') {
            if (args[2]>status.remainTurn+status.turn) {
                return 0;
            }
            type = args[3].type;
            args = [args[0], args[1]];
        }
        if (type == 'use') {
            return 0;
        }
        if (type == 'end') {
            return 0;
        }
        if (type == 'hp') {
            if (args[0] < 0) {
                return unitValue * args[0] / (status.hp + status.block) * status.remainTurn * 9;
            }
            return unitValue * args[0] * Math.sqrt(status.remainTurn+5) * 0.75;
        }
        if (type == 'block') {
            if (args[0] < 0) {
                return unitValue * args[0] / (status.hp + status.block) * status.remainTurn * 9;
            }
            return unitValue * args[0] * Math.sqrt(status.remainTurn+5) * 0.75;
        }
        if (type == 'score') {
            return args[0];
        }
        if (type == 'add_action') {
            return 0;
        }
        if (type == 'extra_turn') {
            return 100000;
        }
        if (type == 'draw') {
            return 100;
        }
        if (type == 'upgrade') {
            return 100;
        }
        if (type == 'discard') {
            return 0;
        }
        if (type == 'generate') {
            return 100;
        }
        if (type == 'status') {
            const statusType = args[1];
            const coef = trendVonusCoef[statusType] ?? 1;
            if (statusType == '集中') {
                const value = status.turnType.getAllTypes()
                    .slice(status.turn+1)
                    .map(type=>parameter[type]/100*args[0])
                    .reduce((acc, crt)=>acc+crt, 0)
                    *status.remainTurn*0.75;
                const scale = 1 + status.pStatus.getValue('アクティブスキルカード使用時、パラメータ+4')+status.pStatus.getValue('アクティブスキルカード使用時、パラメータ+5');
                return coef*value*scale;
            }
            if (statusType == '好調') {
                let total = 0;
                const goodCondition = status.pStatus.getValue('好調');
                if (args[0] > 0) {
                    if (goodCondition == 0) {
                        total += unitValue * 100;
                    }
                    const remainNotGoodConditionTurn = status.remainTurn - goodCondition;
                    if (remainNotGoodConditionTurn > 0) {
                        total += unitValue * 20 * args[0];
                    }
                } else {
                    total += unitValue * 20 * args[0];
                }
                return coef*total;
            }
            if (statusType == '絶好調') {
                if (status.pStatus.getValue('好調') > 4) {
                    let activeTurn = Math.max(0, (status.remainTurn-1) - args[0]);
                    return coef*1300 * activeTurn * (1+(status.pStatus.getValue('好調'))*0.1);
                }
                return 0;
            }
            if (statusType == 'やる気') {
                return coef*status.turnType.getAllTypes()
                    .slice(Math.floor(status.turn*1.5))
                    .map(type=>parameter[type]/100*args[0])
                    .reduce((acc, curr)=>acc+curr, 0)
                    *status.remainTurn*0.4;
            }
            if (statusType == '好印象') {
                const goodImp = status.pStatus.getValue('好印象');
                return coef*(
                    this.calcGoodImpScore(goodImp+args[0], status.remainTurn)
                    -this.calcGoodImpScore(goodImp, status.remainTurn)
                )*parameter.avg/100;
            }
            if (statusType == '消費体力削減') {
                return 100 * args[0];
            }
            if (statusType == '消費体力減少') {
                const turn = Math.min(status.remainTurn, args[0]);
                return unitValue * 50 * turn * ((status.remainTurn / status.turnCount) ** 3);
            }
            if (statusType == '消費体力増加') {
                return -100 * args[0];
            }
            if (statusType == '元気増加無効') {
                return -100 * args[0];
            }
            if (statusType == '低下状態無効') {
                return 100 * args[0];
            }
            if (statusType == 'スキルカード使用数追加') {
                return unitValue * 250;
            }
            if (statusType == '次に使用するスキルカードの効果を発動') {
                return 2000;
            }
            if (statusType == '次に使用するアクティブスキルカードの効果を発動') {
                return 2000;
            }
            if (statusType == 'パラメータ上昇量増加') {
                return 1000;
            }
            if (statusType == '使用したスキルカード数') {
                return 0;
            }
            if (statusType == 'アクティブスキルカード使用時固定元気+2') {
                return 50 * status.remainTurn;
            }
            if (statusType == 'アクティブスキルカード使用時集中+1') {
                return 50 * status.remainTurn;
            }
            if (statusType == 'メンタルスキルカード使用時好印象+1') {
                return 50 * status.remainTurn;
            }
            if (statusType == 'メンタルスキルカード使用時やる気+1') {
                return 50 * status.remainTurn;
            }
            if (statusType == 'ターン終了時、好印象+1') {
                const goodImp = status.pStatus.getValue('好印象');
                return this.calcActionEvaluation({ type: 'status', args: [status.remainTurn*1, '好印象'] }, status, parameter, trendVonusCoef)
            }
            if (statusType == 'ターン終了時、集中が3以上の場合、集中+2') {
                return (status.turnType.getAllTypes()
                .slice(status.turn+1)
                .map(type=>parameter[type]/100*status.remainTurn*2)
                .reduce((acc, crt)=>acc+crt, 0)
                *status.remainTurn*0.83);
            }
            if (statusType == 'ターン終了時、好印象が3以上の場合、好印象+3') {
                const goodImp = status.pStatus.getValue('好印象');
                return this.calcActionEvaluation({ type: 'status', args: [status.remainTurn*3, '好印象'] }, status, parameter, trendVonusCoef)
            }
            if (statusType == 'アクティブスキルカード使用時、パラメータ+4') {
                return (status.turnType.getAllTypes()
                    .slice(status.turn+1)
                    .map((type)=>parameter[type]*4)
                    .reduce((pre, crt)=>pre+crt, 0));
            }
            if (statusType == 'アクティブスキルカード使用時、パラメータ+5') {
                return (status.turnType.getAllTypes()
                    .slice(status.turn+1)
                    .map((type)=>parameter[type]*5)
                    .reduce((pre, crt)=>pre+crt, 0));
            }
            if (statusType == 'スキルカード使用時、好印象の30%分パラメータ') {
                return (status.turnType.getAllTypes()
                    .slice(status.turn+1)
                    .map((type)=>parameter[type]*status.pStatus.getValue('好印象')*0.3)
                    .reduce((pre, crt)=>pre+crt, 0));
            }
            if (statusType == 'スキルカード使用時、好印象の50%分パラメータ') {
                return (status.turnType.getAllTypes()
                    .slice(status.turn+1)
                    .map((type)=>parameter[type]*status.pStatus.getValue('好印象')*0.5)
                    .reduce((pre, crt)=>pre+crt, 0));
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
                        case '好調' : optionCoef['score'] = (effectOption.value/100) * status.pStatus.getValue('好調'); break;
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
            let baseValue = effect.value ?? 0;
            const optionCoef = { '使用したスキルカード数': 0, '割合減少': 0 };
            if (effect.options) {
                effect.options.forEach(effectOption => {
                    switch (effectOption.type) {
                        case '使用したスキルカード数': optionCoef['使用したスキルカード数'] = effectOption.value * status.usedCardCount; break;
                        case '割合減少': baseValue = -Math.ceil(status.block * effectOption.value / 100);
                    }
                });
            }
            let actualValue;
            if (baseValue >= 0) {
                actualValue = baseValue + status.pStatus.getValue('やる気') + optionCoef['使用したスキルカード数'];
                if (status.pStatus.has('元気増加無効')) {
                    actualValue = 0;
                }
            } else {
                actualValue = baseValue + optionCoef['割合減少'];
            }
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
                        case 'multiple': optionalValue = status.pStatus.getValue(effect.target) * (effectOption.value-1); break;
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