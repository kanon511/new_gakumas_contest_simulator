import { Contest } from './class/Contest.js';
import { ContestPIdol } from './class/ContestPIdol.js';
import { AutoContest } from './class/AutoContest.js';
import { BufReader } from "https://deno.land/std/io/mod.ts";

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
const hp     = 10;
const pItemIds = [0, 1, 2];
const skillCardIds = [
    1000010, 1000010, 1000020, 1000030, 1000040, 1000070, 1000070, 1000080, 1000080, 1000090, 1000090
];

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
        const inputNumber = Number(await scanf());
        endFlag = contest.useCard(inputNumber);
    }
    contest.finishTurn();
    if (contest.isFinish) break;
}




/**
 * ターン開始
 * PItem発動(ターン開始時)
 * ドロー
 * カード発動
 * PItem発動(カード発動時)
 * 
 */