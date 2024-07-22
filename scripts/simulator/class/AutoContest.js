
export class AutoContest {
    
    constructor (type, contest) {
        this.type = type;
        this.contest = contest;
    }

    getIndexByMax (array) { 
        array.reduce(
            (p, c, i) => c > p.value ? {value: c, index: i} : p, {value: -Infinity, index: 0}
        ).index
    }

    select () {
        const handCards = this.contest.getHands();
        const availableIndex = handCards.map((item,i)=>[item, i]).filter(item=>item[0].isAvailable()).map(item=>item[1]);
        if (availableIndex.length == 0) return -1;
        const availableIndexValue = availableIndex.map(idx=>handCards[idx]).map(card=>this.calcSkillCardValue(card));
        const maxValue = Math.max(...availableIndexValue);
        // if (handCards.some(card=>card.name=='成就+')){
        //     console.log(this.contest.pIdol.remain_turn, availableIndex.map((idx, i) => `${handCards[idx].name}: ${availableIndexValue[i]}`), availableIndexValue.indexOf(maxValue), handCards[availableIndex[availableIndexValue.indexOf(maxValue)]]);
        // }
        return availableIndex[availableIndexValue.indexOf(maxValue)];
    }



    calcSkillCardValue (card) {
        this.card = card;
        // 評価関数
        if (this.type == 1) {
            return Math.floor(Math.random()*100);
        }
        if (this.type == 0) {
            const effects = [];
            const activatePItemList = this.contest.pIdol.pItemsManager.getPItemByActivateTiming('use_card');
            for (const pItem of activatePItemList) {
                if (!pItem.isAvailable()) continue;
                if (!this.checkCondition(pItem.condition)) continue;
                for (const effect of pItem.effects) {
                    effects.push(effect);
                }
            }
            const status_list = this.contest.pIdol.status.get_byActivateTiming('usecard');
            for (const status of status_list) {
                if (!this.checkCondition(status.activate_condition)) continue;
                for (let i = 0; i < status.value; i++) {
                    for (const effect of status.activate_effects) {
                        effects.push(effect);
                    }
                }
            }
            effects.push(card.cost);
            // effect条件判定
            for (const effect of card.effects) {
                effect.isActive = this.checkCondition(effect.condition);
            }
            // effect効果
            if (this.contest.pIdol.status.getValue('次に使用するスキルカードの効果を発動') > 0) {
                for (const effect of card.effects) {
                    if (!effect.isActive) continue;
                    effects.push(effect);
                }
            }
            // effect効果
            if (card.type == 'active' && this.contest.pIdol.status.getValue('次に使用するアクティブスキルカードの効果を発動') > 0) {
                for (const effect of card.effects) {
                    if (!effect.isActive) continue;
                    effects.push(effect);
                }
            }
            for (const effect of card.effects) {
                if (!effect.isActive) continue;
                effects.push(effect);
            }
            return effects.reduce((pre, crt)=>pre+this.calcEffectValue(crt), 0);
        }
        
    }

    calcEffectValue (effect) {
        this.contest.pIdol.calcEffectActualValue(effect);
        const calckouinsyo = (val) => {
            let result = 0;
            for (let i = 0; i < this.contest.pIdol.remain_turn; i++) {
                const turn = i + this.contest.pIdol.turn;
                result += this.contest.pIdol.parameter[this.contest.pIdol.turnType.getType(turn)]/100*val;
                val--;
            }
            return result;
        };
        if (effect.type == 'score') {
            if (effect.delay && this.contest.pIdol.remain_turn <= effect.delay) {
                return 0;
            }
            return effect.actualValue;
        }
        if (effect.type == '体力消費') {
            return - effect.actualValue * 50;
        }
        if (effect.type == '体力直接消費') {
            return - effect.actualValue * 50;
        }
        if (effect.type == '体力回復') {
            return effect.actualValue * 100;
        }
        if (effect.type == 'block') {
            return effect.actualValue * 13 * this.contest.pIdol.remain_turn;
        }
        if (effect.type == '固定元気') {
            return effect.actualValue * 50;
        }
        if (effect.type == 'ブロック割合減少') {
            return - this.contest.pIdol.block * effect.actualValue/100 * 10;
        }
        if (effect.type == 'ドロー') {
            return 100;
        }
        if (effect.type == '手札強化') {
            return 100;
        }
        if (effect.type == 'ターン追加') {
            return 100000;
        }
        if (effect.type == '手札入れ替え') {
            return 1000;
        }
        if (effect.type == '生成') {
            return 1000;
        }
        if (effect.type == '集中') {
            return this.contest.pIdol.turnType.getAllTypes().slice(this.contest.pIdol.turn+1).map(type=>this.contest.pIdol.parameter[type]/100*effect.actualValue).reduce((pre, crt)=>pre+crt, 0)*this.contest.pIdol.remain_turn*0.83;
        }
        if (effect.type == '好調') {
            let value = 300 * effect.actualValue * (Math.floor(this.contest.pIdol.remain_turn / 2) - this.contest.pIdol.status.getValue('好調'));
            if (value < 0) value = 0;
            value += 50 * effect.actualValue
            return value;
        }
        if (effect.type == '絶好調') {
            let value = 0;
            if (this.contest.pIdol.status.getValue('好調') > 4) {
                let activeTurn = (this.contest.pIdol.remain_turn-1) - effect.actualValue;
                if (activeTurn < 0) activeTurn = 0;
                value += 1300 * activeTurn * (1+(this.contest.pIdol.status.getValue('好調')-1)*0.1);
            }
            return value;
        }
        if (effect.type == 'やる気') {
            return this.contest.pIdol.turnType.getAllTypes().slice(this.contest.pIdol.turn).map(type=>this.contest.pIdol.parameter[type]/100*effect.actualValue).reduce((pre, crt)=>pre+crt, 0)*this.contest.pIdol.remain_turn*this.contest.pIdol.remain_turn/10;
        }
        if (effect.type == '好印象') {
            return (calckouinsyo(this.contest.pIdol.status.getValue('好印象')+effect.actualValue) - calckouinsyo(this.contest.pIdol.status.getValue('好印象')))*3.5
        }
        if (effect.type == '消費体力削減') {
            return 100 * effect.actualValue;
        }
        if (effect.type == '消費体力減少') {
            return 100 * effect.actualValue;
        }
        if (effect.type == '消費体力増加') {
            return -50 * effect.actualValue;
        }
        if (effect.type == '元気増加無効') {
            return -50 * effect.actualValue;
        }
        if (effect.type == '低下状態無効') {
            return 100 * effect.actualValue;
        }
        if (effect.type == 'スキルカード使用数追加') {
            return 15000;
        }
        if (effect.type == '次に使用するスキルカードの効果を発動') {
            return 500;
        }
        if (effect.type == '次に使用するアクティブスキルカードの効果を発動') {
            return 500;
        }
        if (effect.type == 'パラメータ上昇量増加') {
            return 0;
        }
        if (effect.type == 'アクティブスキルカード使用時固定元気+2') {
            return 2500;
        }
        if (effect.type == 'アクティブスキルカード使用時集中+1') {
            return 2500;
        }
        if (effect.type == 'メンタルスキルカード使用時好印象+1') {
            return 2500;
        }
        if (effect.type == 'メンタルスキルカード使用時やる気+1') {
            return 2500;
        }
        if (effect.type == 'ターン終了時、好印象+1') {
            return calckouinsyo(this.contest.pIdol.status.getValue('好印象')+1*this.contest.pIdol.remain_turn);
        }
        if (effect.type == 'ターン終了時、集中が3以上の場合、集中+2') {
            return this.contest.pIdol.turnType.getAllTypes().slice(this.contest.pIdol.turn+1).map((type,i)=>this.contest.pIdol.parameter[type]*2*i).reduce((pre, crt)=>pre+crt, 0);
        }
        if (effect.type == 'ターン終了時、好印象が3以上の場合、好印象+3') {
            return calckouinsyo(this.contest.pIdol.status.getValue('好印象')+3*this.contest.pIdol.remain_turn);
        }
        if (effect.type == 'アクティブスキルカード使用時、パラメータ+4') {
            return this.contest.pIdol.turnType.getAllTypes().slice(this.contest.pIdol.turn+1).map((type)=>this.contest.pIdol.parameter[type]*4).reduce((pre, crt)=>pre+crt, 0);
        }
        if (effect.type == 'アクティブスキルカード使用時、パラメータ+5') {
            return this.contest.pIdol.turnType.getAllTypes().slice(this.contest.pIdol.turn+1).map((type)=>this.contest.pIdol.parameter[type]*5).reduce((pre, crt)=>pre+crt, 0);
        }   
        if (effect.type == 'スキルカード使用時、好印象の30%分パラメータ') {
            return this.contest.pIdol.turnType.getAllTypes().slice(this.contest.pIdol.turn+1).map((type,i)=>this.contest.pIdol.parameter[type]*this.contest.pIdol.status.getValue('好印象')*0.3).reduce((pre, crt)=>pre+crt, 0);
        }
        if (effect.type == 'スキルカード使用時、好印象の50%分パラメータ') {
            return this.contest.pIdol.turnType.getAllTypes().slice(this.contest.pIdol.turn+1).map((type,i)=>this.contest.pIdol.parameter[type]*this.contest.pIdol.status.getValue('好印象')*0.5).reduce((pre, crt)=>pre+crt, 0);
        }
        console.log(`${effect.type}の評価は定義されてないよ`);
        return 0;
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
                    targetValue = this.contest.pIdol.hp / this.contest.pIdol.maxHp * 100;
                    break;
                case 'score': 
                    targetValue = this.contest.pIdol.score;
                    break;
                case 'block':
                    targetValue = this.contest.pIdol.block;
                    break;
                case 'turn':
                    targetValue = this.contest.pIdol.turn;
                    break;
                case 'turnType':
                    targetValue = this.contest.pIdol.currentTurnType;
                    break;
                case 'turnMultiple':
                    if (this.contest.pIdol.turn % Number(value) == 0) {
                        targetValue = value;
                    } else {
                        targetValue = -1;
                    }
                    break;
                case 'cardType':
                    targetValue = this.card.type;
                    break;
                case 'cardId':
                    targetValue = this.card.id;
                    break;
                case 'cardEffectInclude':
                    targetValue = 
                        this.card.effects.some(effect=>effect.type==value) ? 
                        value : -1;
                    break;
                case 'usedCardCountMultiple':
                    targetValue = 
                        this.contest.pIdol.status.getValue('使用したスキルカード数') % Number(value) == 0 ? 
                        value : -1;
                    break;
                case 'remain_turn':
                    targetValue = this.contest.pIdol.remain_turn;
                    break;
                default: 
                    targetValue = this.contest.pIdol.status.getValue(key);
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

}