export class PIdolLog {
    
    constructor () {
        this.log = [];
        this.currentTurnLog = null;
        this.currentTurn = 0;
    }

    getLog () {
        return this.log;
    }

    // addTextLog (text) {
    //     this.currentTurnLog.history.push(text);
    //     // console.log(text);
    // }

    addExecutionLog (executionLog) {
        this.currentTurnLog.executionLog.push(...executionLog);
    }

    nextTurn ({ score, hp, block, turnType }) {
        this.currentTurn++;
        this.currentTurnLog = {
            turn: this.currentTurn,
            turnType: turnType,
            executionLog: [],
            status: {
                score, hp, block, 
            }
        };
        this.log.push(this.currentTurnLog);
    }

}