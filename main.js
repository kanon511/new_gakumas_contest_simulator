import { Contest } from './scripts/simulator/class/Contest.js';
import { ContestPIdol } from './scripts/simulator/class/ContestPIdol.js';
import { AutoContest } from './scripts/simulator/class/AutoContest.js';
import { BufReader } from "https://deno.land/std/io/mod.ts";
import { skillCardData } from './scripts/simulator/data/skillCardData.js';

const encoder = new TextEncoder();

async function print(str) {
    const bytes = encoder.encode(str);
    await Deno.stdout.write(bytes);
}

async function scanf() {
    const reader = new BufReader(Deno.stdin);
    print('>');
    const { line } = await reader.readLine();
    const input = new TextDecoder().decode(line);
    return input;
}

const vocal  = 1738;
const dance  = 1502;
const visual = 464;
const hp     = 200;
const plan   = 'logic';
const pItemIds = [2101010, 2102010, 2103010, 2306010, 2108010, 2210010];
const skillCardIds = [
    1021010, 1021020, 1022010, 1022020, 2011010, 2011020, 2011030, 2011040, 2011050, 2011060, 2011070, 4202020
];

// const skillCardIds = skillCardData.map(item=>item.id).filter(id=>id%10==1);

const contestPIdol = new ContestPIdol({
    parameter: {
        vocal: vocal,
        dance: dance,
        visual: visual,
        hp: hp,
    },
    plan: plan,
    pItemIds: pItemIds,
    skillCardIds: skillCardIds,
});


const contest = new Contest({
    pIdol: contestPIdol,
    maxTurn: 8,
    criteria: {
        vocal : 40,
        dance : 33,
        visual: 27,
    },
});

while (true) {
    contest.startTurn();
    for (let endFlag = false; !endFlag;) {
        // contest.printHands();
        const inputNumber = Number(await scanf());
        endFlag = contest.useCard(inputNumber);
    }
    contest.finishTurn();
    if (contest.isFinish) break;
}