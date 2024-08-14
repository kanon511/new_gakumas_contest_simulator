import { dataset } from "./data/dataset.js";
import { PIdolData } from "../scripts/simulator/data/pIdolData.js";
import { ContestData } from "../scripts/simulator/data/contestData.js";
import { run } from "../scripts/simulator/run.js";

function test() {
  for (const item of dataset) {
    const vocal = Number(item["vocal%"]);
    const dance = Number(item["dance%"]);
    const visual = Number(item["visual%"]);
    const hp = Number(item["hp"]);

    const pIdol = PIdolData.getById(Number(item["p_idol_id"]));

    const pItemIds = Array.from(
      new Set(
        item["p_item_ids"]
          .split(":")
          .filter((v) => v)
          .map(Number)
      )
    );

    const cardIds_raw = item["card_ids"]
      .split("_")
      .map((str) => str.split(":"))
      .reduce((acc, deck) => {
        acc.push(...deck);
        return acc;
      }, [])
      .map(Number);

    const cardIds = cardIds_raw.filter((val) => val > 0);

    let default_skillCardIds = [];
    switch (pIdol.plan) {
      case "sense":
        default_skillCardIds = [
          1010010, 1010010, 1011010, 1011020, 1021010, 1021010, 1021020,
          1021020,
        ];
        break;
      case "logic":
        default_skillCardIds = [
          1012010, 1012020, 1020010, 1020010, 1022010, 1022010, 1022020,
          1022020,
        ];
        break;
    }
    cardIds.push(...default_skillCardIds);

    const [contestId, stageId] = item["contest_id"].split(":").map(Number);
    const contestDetail = ContestData.getById(contestId);
    const contestStage = contestDetail.stages[stageId];

    const simulateCount = 10000;

    const run_data = {
      turn: contestStage.turn,
      criteria: contestDetail.criteria,
      turnTypes: contestStage.turnTypes,
      parameter: {
        vocal: vocal,
        dance: dance,
        visual: visual,
        hp: hp,
      },
      plan: pIdol.plan,
      trend: pIdol.trend,
      pItemIds: pItemIds,

      skillCardIds: cardIds,
    };

    const scoreList = [];
    for (let i = 0; i < simulateCount; i++) {
      const result = run(run_data);
      scoreList.push(result.finalStatus.score);
    }
    const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
    const aryMax = (a, b) => {
      return Math.max(a, b);
    };
    const aryMin = (a, b) => {
      return Math.min(a, b);
    };
    const min = Math.floor(scoreList.reduce(aryMin));
    const max = Math.floor(scoreList.reduce(aryMax));
    const median = ((arr) => {
      const half = Math.floor(arr.length / 2);
      const sortedArray = arr.toSorted();
      if (sortedArray.length % 2) return sortedArray[half];
      return Math.floor((sortedArray[half - 1] + sortedArray[half]) / 2);
    })(scoreList);
    const mean = ((arr) => {
      return Math.floor(sum(arr) / arr.length);
    })(scoreList);

    const lPad = (num, targetLength) => {
      return num.toString().padStart(targetLength, " ");
    };
    console.log(`${lPad(item["id"], 5)}    min    max   mean median`);
    console.log(
      `*data ${lPad(item["min"], 6)} ${lPad(item["max"], 6)} ${lPad(
        item["mean"],
        6
      )} ${lPad(item["q2"], 6)}`
    );
    console.log(
      `*simu ${lPad(min, 6)} ${lPad(max, 6)} ${lPad(mean, 6)} ${lPad(
        median,
        6
      )}`
    );
    console.log(
      `*diff ${lPad(min - item["min"], 6)} ${lPad(max - item["max"], 6)} ${lPad(
        mean - item["mean"],
        6
      )} ${lPad(median - item["q2"], 6)}`
    );
  }
}

test();
