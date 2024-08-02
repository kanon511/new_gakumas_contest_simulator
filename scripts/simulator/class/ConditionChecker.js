
export class ConditionChecker {
    static check (query, status) {
        if (!query) return true;
        const result = query.split('|').map((orQuery) => {
            return orQuery.split('&').map((andQuery) => {
                return this.#evaluateSplitCondition(andQuery, status);
            }).every(value => value)
        }).some(value => value);
        return result;
    }

    static #evaluateSplitCondition (query, status) {
        const signList = ['==', '!=', '>=', '<=', '>', '<'];
        const sign = signList.find(sign=>~query.indexOf(sign));
        if (sign == '') {
            throw new Error(`予期する記号が含まれません > ${query}`);
        }
        const [key, value] = query.split(sign);
        return this.#compareSplitCondition(key, value, sign, status);
    }

    static #compareSplitCondition (key, value, sign, status) {
        let targetValue = null;
        if (key == 'hpPer') {
            targetValue = status.hp / status.maxHp * 100;
        } else
        if (key == 'score') {
            targetValue = status.score;
        } else
        if (key == 'block') {
            targetValue = status.block;
        } else 
        if (key == 'turn') {
            targetValue = status.turn;
        } else 
        if (key == 'turnType') {
            targetValue = status.currentTurnType;
        } else 
        if (key == 'turnMultiple') {
            targetValue = status.turn % Number(value) == 0 ? value : -1;
        } else 
        if (key == 'cardType') {
            targetValue = status.lastUsedCard?.type;
        } else 
        if (key == 'cardId') {
            targetValue = status.lastUsedCard?.id;
        } else 
        if (key == 'cardEffectInclude') {
            targetValue = status.lastUsedCard?.effects.some(effect=>effect.target==value) ? value : -1;
        } else 
        if (key == 'usedCardCountMultiple') {
            targetValue = status.usedCardCount % Number(value) == 0 ? value : -1;
        } else 
        if (key == 'remain_turn') {
            targetValue = status.remainTurn;
        } else {
            targetValue = status.pStatus.getValue(key);
        }
        switch (sign) {
            case '==': return targetValue == value;
            case '!=': return targetValue != value;
            case '>=': return targetValue >= value;
            case '<=': return targetValue <= value;
            case '>' : return targetValue >  value;
            case '<' : return targetValue <  value;
        }
    }

}