
class TurnType {

    constructor (turnNumber, critearia) {
        this.types = Array(turnNumber).fill('');
        const rank = this.objToRank(critearia);
        const typeCount = this.setTurnCount(turnNumber, rank);

        this.types[this.types.length-1] = rank[0];
        this.types[this.types.length-2] = rank[1];
        this.types[this.types.length-3] = rank[2];

        this.types[0] = rank[0];

        typeCount[rank[0]] -= 2;
        typeCount[rank[1]] -= 1;
        typeCount[rank[2]] -= 1;

        const array = [typeCount['vocal'], typeCount['dance'], typeCount['visual']];

        const typeIdx = { 0: 'vocal', 1: 'dance', 2: 'visual' };
        for (let i = 1; i < turnNumber - 3; i++) {
            const choose_idx = this.pick_random_from_array(array);
            this.types[i] = typeIdx[choose_idx];
            array[choose_idx]--;
        }
    }

    array_to_prob (array) {
        const total_number = array.reduce((p, c) => p+c, 0);
        return array.map(v=>v/total_number);
    }

    pick_random_from_array (array) {
        const array_prob = this.array_to_prob(array);
        const random_value = Math.random();
        let idx = array.length-1;
        let current_prob = 0;
        for (let i = 0; i < array.length; i++) {
            current_prob += array_prob[i];
            if (random_value < current_prob) {
                idx = i;
                break;
            }
        }
        return idx;
    }

    objToRank (obj) {
        const entries = Object.entries(obj);
        entries.sort((a, b) => b[1] - a[1]);
        const objRank = {};
        for (let i = 0; i < entries.length; i++) {
            objRank[i] = entries[i][0];
        }
        return objRank;
    }

    setTurnCount (turnNumber, rank) {
        const typeCount = { vocal : 0, dance : 0, visual: 0 };
        switch (turnNumber) {
            case 8:
                typeCount[rank[0]] = 4;
                typeCount[rank[1]] = 2;
                typeCount[rank[2]] = 2;
                break;
            case 10:
                typeCount[rank[0]] = 5;
                typeCount[rank[1]] = 3;
                typeCount[rank[2]] = 2;
                break;
            case 12:
                typeCount[rank[0]] = 5;
                typeCount[rank[1]] = 4;
                typeCount[rank[2]] = 3;
                break;
        }
        return typeCount;
    }

    getType (turn) {
        const idx = turn-1;
        if (idx > this.types.length - 1) return this.types[this.types.length-1];
        return this.types[idx];
    }

    getAllTypes () {
        return this.types;
    }
}

export class Contest {
    
    constructor (parameters) {
        const {
            pIdol,
            maxTurn,
            criteria
        } = parameters;
        this.pIdol = pIdol;
        this.pIdol.remain_turn = maxTurn;
        this.maxTurn = maxTurn;

        this.turnType = new TurnType(maxTurn, criteria);
        this.pIdol.turnTypes = this.turnType.getAllTypes();
        this.currentTurn = 0;
        this.isFinish = false;
    }

    startTurn () {
        // ターン開始
        this.currentTurn++;
        this.currentType = this.turnType.getType(this.currentTurn);
        // console.log(`==========\n${this.currentTurn}ターン目[${this.currentType}]\n==========`);
        this.pIdol.process_at('start_of_turn', this.currentType);
    }

    printHands () {
        // console.log(this.handCards.map(item=>`${item.available?'○':'×'}${item.name}(${item.score}|${item.block}|${-item.cost.actualValue})`));
    }

    getHands () {
        return this.pIdol.getDeck('handCards');
    }

    finishTurn () {
        // console.log(`ターンエンド`);
        this.pIdol.process_at('end_of_turn');
        // console.log(`山札`, this.pIdol.getDeck('drawPile').map(item=>item.name));
        // console.log(`捨札`, this.pIdol.getDeck('discardPile').map(item=>item.name));
        // console.log(`廃棄`, this.pIdol.getDeck('exhaustedCards').map(item=>item.name));
        // console.log(
        //     `HP: ${this.pIdol.hp}, ブロック: ${this.pIdol.block}, スコア: ${this.pIdol.score}`
        // );
        // console.log(Object.keys(this.pIdol.status.getAll()).map(key=>`${key}: ${this.pIdol.status.getValue(key)}`).join(', '))
        this.checkFinishContest();
    }

    useCard (cardNumber) {
        // -1は休憩
        if (cardNumber == -1) {
            this.pIdol.rest();
            return true;
        }
        console.log(cardNumber, )
        // -1以外の不正な値　もしくは　カードが使用不可
        if (
            cardNumber < -1 || 
            cardNumber >= this.getHands().length || 
            !this.getHands()[cardNumber]?.isAvailable()
        ) {
            return false;
        }
        this.pIdol.useCard(cardNumber);
        return !this.pIdol.checkAdditionalAction();
    }

    create_log () {
        const log = this.pIdol.log.getLog();
        let text = '';
        for (const turnLog of log) {
            const turn = turnLog.turn;
            text += `==========\n`
                  + `${turnLog.turn}ターン目[${turnLog.turnType}]\n`
                  + `スコア：${turnLog.status.score}, 体力：${turnLog.status.hp}, 元気：${turnLog.status.block}\n`
                  + `==========\n`;
            text += turnLog.history.join('\n') + '\n';
        }
        text += `==========\n`
              + `最終`
              + `スコア：${this.pIdol.score}, 体力：${this.pIdol.hp}, 元気：${this.pIdol.block}\n`
              + `==========`;
        this.log = {
            score: this.pIdol.score,
            text: text,
        };
    }

    checkFinishContest () {
        if (this.pIdol.checkFinished()) {
            this.isFinish = true;
            this.create_log();
        }
    }

}