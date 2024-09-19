import { Contest } from './class/Contest.js';
import { PIdol } from './class/PIdol.js';
import { AutoContest } from './class/AutoContest.js';

export const run = (data) => {

    const pIdol = new PIdol({ 
        parameter: data.parameter, 
        plan: data.plan,
        trend: data.trend,
        pItemIds: data.pItemIds,
        skillCardIds: data.skillCardIds,
        autoId: data.autoId
    });

    const contest = new Contest({
        pIdol: pIdol,
        maxTurn: data.turn,
        criteria: data.criteria,
        turnRank: data.turnRank,
        turnTypes: data.turnTypes,
    });

    const autoContest = new AutoContest(contest);

    for (let breakout = 0; breakout < 100; breakout++) {
        contest.startTurn();
        let loopout = 0;
        for (let endFlag = false; !endFlag;) {
            endFlag = contest.useCard(autoContest.select());
            if (loopout > 100) {
                throw new Error('カード選択無限ループバグ | '+`${contest.getHands().map(item=>item.name+':'+item.evaluation).join(', ')} + ${autoContest.select()}`);
            }
            loopout++;
        }
        contest.finishTurn();
        if (contest.checkkFinishContest()) break;
    }

    return contest.getResult();

};