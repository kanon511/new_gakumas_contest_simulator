
export class Contest {
    
    constructor (parameters) {
        const {
            pIdol,
            maxTurn,
            vonus,
        } = parameters;
        this.pIdol = pIdol;
        this.maxTurn = maxTurn;
        this.turnTypes;
        this.typeRatio = {
            vocal : 40,
            dance : 33,
            visual: 27,
        };
        this.initTurnTypes();
        this.vonus = vonus;
        this.currentTurn = 0;
        this.score = 0;
        this.isFinish = false;
    }

    initTurnTypes () {
        this.turnTypes = Array(this.maxTurn).fill('');

        function objToRank(obj) {
            const entries = Object.entries(obj);
            entries.sort((a, b) => b[1] - a[1]);
            const objRank = {};
            for (let i = 0; i < entries.length; i++) {
                objRank[i] = entries[i][0];
            }
            return objRank;
        }

        const typeRank = objToRank(this.typeRatio);

        let typeCount = {
            vocal : 0,
            dance : 0,
            visual: 0,
        };

        switch (this.maxTurn) {
            case 8:
                typeCount[typeRank[0]] = 4;
                typeCount[typeRank[1]] = 2;
                typeCount[typeRank[2]] = 2;
                break;
            case 10:
                typeCount[typeRank[0]] = 5;
                typeCount[typeRank[1]] = 3;
                typeCount[typeRank[2]] = 2;
                break;
            case 12:
                typeCount[typeRank[0]] = 5;
                typeCount[typeRank[1]] = 4;
                typeCount[typeRank[2]] = 3;
                break;
        }
        
        console.log(this.turnTypes);



    }

    startTurn () {
        // ターン開始
        this.currentTurn++;
        this.turnType = 'vocal';
        console.log(`==========\n${this.currentTurn}ターン目\n==========`);
        this.processActionResults(
            this.pIdol.process_at('start_of_turn')
        );
        this.pIdol.draw(3);
        this.pIdol.updateHand();
    }

    printHands () {
        this.handCards = this.pIdol.getDeck('handCards');
        console.log(this.handCards.map(item=>`${item.available?'○':'×'}${item.name}(${item.score}|${item.block}|${-item.cost.actualValue})`));
    }

    finishTurn () {
        console.log(`ターンエンド`);
        this.processActionResults(
            this.pIdol.process_at('end_of_turn')
        );
        console.log(`山札`, this.pIdol.getDeck('drawPile').map(item=>item.name));
        console.log(`捨札`, this.pIdol.getDeck('discardPile').map(item=>item.name));
        console.log(`廃棄`, this.pIdol.getDeck('exhaustedCards').map(item=>item.name));
        console.log(
            `HP: ${this.pIdol.hp}, ブロック: ${this.pIdol.block}, スコア: ${this.score}`
        );
        // console.log(Object.keys(this.pIdol.status.getAll()).map(key=>`${key}: ${this.pIdol.status.getValue(key)}`).join(', '))
        this.checkFinishContest();
    }

    useCard (cardNumber) {
        // -1は休憩
        if (cardNumber == -1) {
            this.pIdol.rest();
            return true;
        }
        // -1以外の不正な値　もしくは　カードが使用不可
        if (
            cardNumber < -1 || 
            cardNumber >= this.handCards.length || 
            !this.handCards[cardNumber]?.available
        ) {
            return false;
        }
        // カードの使用
        this.processActionResults(
            this.pIdol.useCard(cardNumber)
        );
        return !this.pIdol.checkAdditionalAction();
    }

    processActionResults (actionResults) {
        for (const actionResult of actionResults) {
            this.processActionResult(actionResult);
        }
    }

    processActionResult (actionResult) {
        switch (actionResult.type) {
            case 'score':
                this.score += actionResult.value;
                break;
        }
    }

    checkFinishContest () {
        if (this.currentTurn >= this.maxTurn) {
            this.isFinish = true;
        }
    }

}