import { Contest } from './class/Contest.js';
import { ContestPIdol } from './class/ContestPIdol.js';
import { AutoContest } from './class/AutoContest.js';
import { BufReader } from "https://deno.land/std/io/mod.ts";
import { skillCardData } from './data/skillCardData.js';

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
const pItemIds = [0, 1, 2];
const skillCardIds = [
    4000100, 3000160, 3000320, 3000321, 3000161, 3000070, 3000071, 3000080, 3000081
];
// const skillCardIds = skillCardData.map(item=>item.id).filter(id=>id%10==1);

const contestPIdol = new ContestPIdol({
    parameter: {
        vocal: vocal,
        dance: dance,
        visual: visual,
        hp: hp,
    },
    pItemIds: pItemIds,
    skillCardIds: skillCardIds
});


const contest = new Contest({
    pIdol: contestPIdol,
    maxTurn: 12,
});

while (true) {
    contest.startTurn();
    for (let endFlag = false; !endFlag;) {
        contest.printHands();
        const inputNumber = Number(await scanf());
        endFlag = contest.useCard(inputNumber);
    }
    contest.finishTurn();
    if (contest.isFinish) break;
}