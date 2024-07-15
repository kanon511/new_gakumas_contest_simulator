import { Contest } from './class/Contest.js';
import { ContestPIdol } from './class/ContestPIdol.js';
import { AutoContest } from './class/AutoContest.js';
import { skillCardData } from './data/skillCardData.js';

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
        const pIdol = new ContestPIdol({ 
            parameter: data.parameter, 
            plan: data.plan,
            pItemIds: data.pItemIds,
            skillCardIds: data.skillCardIds,
        });
    
        const contest = new Contest({
            pIdol: pIdol,
            maxTurn: data.turn,
            criteria: data.criteria,
        });
    
        const autoContest = new AutoContest(data.autoId, contest);

        for (let breakout = 0; breakout < 100; breakout++) {
            contest.startTurn();
            let loopout = 0;
            for (let endFlag = false; !endFlag;) {
                endFlag = contest.useCard(autoContest.select());
                if (loopout > 100) {
                    alert('カード選択無限ループバグ');
                    throw 'test';
                }
                loopout++;
            }
            contest.finishTurn();
            if (contest.isFinish) break;
        }
        log = contest.log;
        if (!minLog || minLog.score > log.score) {
            minLog = log;
        }
        if (!maxLog || maxLog.score < log.score) {
            maxLog = log;
        }
        if (i == rndLogNumber) {
            rndLog = log;
        }
        scoreList.push(log.score);
    }
    return {
        scoreList: scoreList,
        minLog: minLog,
        maxLog: maxLog,
        rndLog: rndLog,
    };
};