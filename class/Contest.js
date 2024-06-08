
export class Contest {
    
    constructor (parameters) {
        const {
            pIdol,
            maxTurn,
            vonus,
        } = parameters;
        this.pIdol = pIdol;
        this.maxTurn = maxTurn;
        this.vonus = vonus;
        this.currentTurn = 0;
        this.score = 0;
        this.isFinish = false;
    }

    startTurn () {
        // ターン開始
        this.currentTurn++;
        this.turnType = 'vocal';
        console.log(`==========\n${this.currentTurn}ターン目\n==========`);
        this.pIdol.draw(3);
        this.handCards = this.pIdol.getDeck('handCards');
        console.log(this.handCards.map(item=>`${item.name}(${item.score}|${item.block}|-${item.cost.value})`));
    }

    finishTurn () {
        console.log(`ターンエンド`);
        this.pIdol.finishTurn();
        console.log(`山札`, this.pIdol.getDeck('drawPile').map(item=>item.name));
        console.log(`捨札`, this.pIdol.getDeck('discardPile').map(item=>item.name));
        console.log(`廃棄`, this.pIdol.getDeck('exhaustedCards').map(item=>item.name));
        console.log(
            `HP: ${this.pIdol.hp}, ブロック: ${this.pIdol.block}, スコア: ${this.score}`
        );
        if (this.pIdol.hp <= 0) {
            this.isFinish = true;
        }
    }

    useCard (cardNumber) {
        this.processActionResults(
            this.pIdol.useCard(cardNumber)
        );
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

}