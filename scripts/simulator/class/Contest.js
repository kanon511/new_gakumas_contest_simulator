// import { TurnType } from "./TurnType.js";

export class Contest {
    
    constructor (parameters) {
        const {
            pIdol,
            maxTurn,
            criteria,
            turnTypes,
        } = parameters;
        this.pIdol = pIdol;
        this.pIdol.init(maxTurn, criteria, turnTypes);
        this.isFinish = false;
    }

    startTurn () {
        this.pIdol.process_at('start_of_turn');
    }

    getHands () {
        return this.pIdol.getDeck('handCards');
    }

    finishTurn () {
        this.pIdol.process_at('end_of_turn');
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