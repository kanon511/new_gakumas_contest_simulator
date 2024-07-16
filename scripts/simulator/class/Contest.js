import { TurnType } from "./TurnType.js";

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