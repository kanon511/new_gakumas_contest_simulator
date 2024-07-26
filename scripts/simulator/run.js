import { Contest } from './class/Contest.js';
import { PIdol } from './class/PIdol.js';
import { AutoContest } from './class/AutoContest.js';

export const run = (data) => {
    console.log('run');
    let log;
    let scoreList = [];
    let minLog;
    let maxLog;
    let rndLog;
    const count = 1000;
    const rndLogNumber = Math.floor(Math.random()*count);
    for (let i = 0; i < count; i++) {
        const pIdol = new PIdol({ 
            parameter: data.parameter, 
            plan: data.plan,
            pItemIds: data.pItemIds,
            skillCardIds: data.skillCardIds,
        });
    
        const contest = new Contest({
            pIdol: pIdol,
            maxTurn: data.turn,
            criteria: data.criteria,
            turnTypes: data.turnTypes,
        });
    
        const autoContest = new AutoContest(contest);

        for (let breakout = 0; breakout < 100; breakout++) {
            contest.startTurn();
            let loopout = 0;
            for (let endFlag = false; !endFlag;) {
                endFlag = contest.useCard(autoContest.select());
                if (loopout > 100) {
                    throw new Error('カード選択無限ループバグ');
                }
                loopout++;
            }
            contest.finishTurn();
            if (contest.checkkFinishContest()) break;
        }

        const simulationLog = contest.getResult();

        scoreList.push(simulationLog.finalStatus.score);
 
        if (!minLog || minLog.finalStatus.score > simulationLog.finalStatus.score) {
            minLog = simulationLog;
        }
        if (!maxLog || maxLog.finalStatus.score < simulationLog.finalStatus.score) {
            maxLog = simulationLog;
        }
        if (i == rndLogNumber) {
            rndLog = simulationLog;
        }
    }
    return {
        scoreList: scoreList,
        minLog: minLog,
        maxLog: maxLog,
        rndLog: rndLog,
    };
};