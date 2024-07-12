import { Contest } from './class/Contest.js';
import { ContestPIdol } from './class/ContestPIdol.js';
import { AutoContest } from './class/AutoContest.js';
import { skillCardData } from './data/skillCardData.js';

export const run = (data) => {
    console.log('run');
    console.log(data);

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


    for (let breakout = 0; breakout < 100; breakout++) {
        contest.startTurn();
        for (let endFlag = false; !endFlag;) {
            // contest.printHands();
            const hands = contest.getHands();
            const availableIndex = hands.map((item,i)=>[item, i]).filter(item=>item[0].isAvailable()).map(item=>item[1]);
            const inputNumber = 
                availableIndex.length == 0 ? -1 : availableIndex[Math.floor(Math.random()*availableIndex.length)];
            endFlag = contest.useCard(inputNumber);
        }
        contest.finishTurn();
        if (contest.isFinish) break;
    }
    return contest.log;
};