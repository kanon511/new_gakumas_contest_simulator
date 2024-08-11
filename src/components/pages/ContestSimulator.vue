<template>
  <v-container class="sp-pa-0">
    <v-row>
      <v-col cols="12" lg="5" xl="5">
        <div style="text-align: center;"><a href="https://katabami83.github.io/old/gakumas_contest_simulator/">動かない場合はこちら</a></div>
        <SimulatorInput
          @run-simulation="runSimulation"
          :waitingFinishedRun="waitingFinishedRun"
        />
      </v-col>
      <v-col cols="12" lg="7" xl="7">
        <SimulatorOutput :resultData="simulationResult" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SimulatorInput from "../modules/input/SimulatorInput.vue";
import SimulatorOutput from "../modules/output/SimulatorOutput.vue";
import { ref } from "vue";
import { PIdolData } from "/scripts/simulator/data/pIdolData";
import { ContestData } from "/scripts/simulator/data/contestData";
const simulationResult = ref(null);
const waitingFinishedRun = ref(false);

const runSimulation = async () => {
  if (waitingFinishedRun.value) {
    return;
  }
  waitingFinishedRun.value = true;
  const result = await simulate();
  waitingFinishedRun.value = false;
  if (result) {
    simulationResult.value = result;
  }
};

const simulate = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [vocal, dance, visual, hp] = urlParams
    .get("status")
    .split(":")
    .map(Number);
  const pIdolId_raw = urlParams.get("p_idol");
  if (!pIdolId_raw) {
    alert(`Pアイドルを選択してください`);
    return;
  }
  const pIdolId = Number(pIdolId_raw.split(":")[0]);
  if (Number.isNaN(pIdolId) || pIdolId <= 0) {
    alert(`Pアイドルを選択してください`);
    return;
  }
  const pIdol = PIdolData.getById(pIdolId);
  const pItemIds_raw = urlParams
    .get("p_item_ids")
    .split(":")
    .filter((v) => v)
    .map(Number);
  const pItemIds = Array.from(new Set(pItemIds_raw));

  const cardIds_raw = urlParams
    .get("cards")
    .split("_")
    .map((str) => str.split(":"))
    .reduce((acc, deck) => {
      acc.push(...deck);
      return acc;
    }, [])
    .map(Number);

  if (
    cardIds_raw[0] == cardIds_raw[6] ||
    cardIds_raw[0] + 1 == cardIds_raw[6] ||
    cardIds_raw[0] == cardIds_raw[6] + 1 ||
    cardIds_raw[0] + 1 == cardIds_raw[6] + 1
  ) {
    cardIds_raw[0] = Math.max(cardIds_raw[0], cardIds_raw[6]);
    cardIds_raw[6] = 0;
  }
  const cardIds = cardIds_raw.filter((val) => val > 0);

  let default_skillCardIds = [];
  switch (pIdol.plan) {
    case "sense":
      default_skillCardIds = [
        1010010, 1010010, 1011010, 1011020, 1021010, 1021010, 1021020, 1021020,
      ];
      break;
    case "logic":
      default_skillCardIds = [
        1012010, 1012020, 1020010, 1020010, 1022010, 1022010, 1022020, 1022020,
      ];
      break;
  }
  cardIds.push(...default_skillCardIds);

  const [contestId, stageId] = urlParams.get("contest_stage").split(":");
  const contestDetail = ContestData.getById(contestId);
  const contestStage = contestDetail.stages[stageId];

  const simulateCount = 2000;

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
    count: simulateCount,
  };

  console.log(run_data);

  console.time("run");
  const result = await runWebWorker(run_data);
  console.timeEnd("run");
  return result;
};

async function runWebWorker(data) {
  return new Promise((resolve) => {
    let numWorkers = 1;
    if (navigator.hardwareConcurrency) {
      numWorkers = Math.min(navigator.hardwareConcurrency, 8);
    }
    const totalRuns = 2000;
    const runsPerWorker = Math.ceil(totalRuns / numWorkers);
    const rndLogNumber = Math.floor(Math.random() * numWorkers);

    // let completedRuns = 0;
    let completedWorkers = 0;
    let results = {
      scoreList: [],
      minLog: null,
      maxLog: null,
      rndLog: null,
    };

    for (let i = 0; i < numWorkers; i++) {
      const worker = new Worker("/scripts/worker.js", { type: "module" });
      worker.postMessage({ runs: runsPerWorker, data: data });

      worker.onmessage = (e) => {
        completedWorkers;
        const result = e.data;

        results.scoreList = results.scoreList.concat(result.scoreList);
        if (
          !results.minLog ||
          results.minLog.finalStatus.score > result.minLog.finalStatus.score
        ) {
          results.minLog = result.minLog;
        }
        if (
          !results.maxLog ||
          results.maxLog.finalStatus.score < result.maxLog.finalStatus.score
        ) {
          results.maxLog = result.maxLog;
        }
        if (completedWorkers == rndLogNumber) {
          results.rndLog = result.rndLog;
        }
        if (++completedWorkers == numWorkers) {
          resolve(results);
        }

        worker.terminate();
      };

      worker.onerror = (error) => {
        console.log(
          `Worker error: ${error.message} in ${error.filename} at line ${error.lineno}`
        );
        worker.terminate();
      };
    }
  });
}
</script>

<style scoped>
@media (max-width: 960px) {
  /* スマホ画面でのスタイル */
  .sp-pa-0 {
    padding: 0; /* スマホではpaddingを0に */
  }
}
</style>
