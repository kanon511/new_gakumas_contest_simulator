import { Contest } from './scripts/simulator/class/Contest.js';
import { PIdol } from './scripts/simulator/class/PIdol.js';
import { AutoContest } from './scripts/simulator/class/AutoContest.js';
import { BufReader } from "https://deno.land/std/io/mod.ts";
import { skillCardData } from './scripts/simulator/data/skillCardData.js';
import { TurnType } from './scripts/simulator/class/TurnType.js';

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
const pItemIds = [
    4240623, // 開始時やる気
    4240722, // 開始時集中、消費体力増加
    2301010, // 使用時アクティブなら、好調、スキルカード使用数追加
    2301021, // 勝へのこだわり
    2306010, // ひみつ特訓カーデ

];
const skillCardIds = [
    1021010, 1021020, 4020040, 1022020, 2011010, 2011020, 2011070, 4011030, 4300010, 4300011
];

// const skillCardIds = skillCardData.map(item=>item.id).filter(id=>id%10==1);

const contestPIdol = new PIdol({
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
    turnTypes: [4, 2, 2],
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