<template>
  <v-container class="sp-pa-0">
    <v-row>
      <v-col cols="12" sm="6" md="5" lg="5" xl="5" xxl="5">
        <SimulatorInput
          @run-simulation="runSimulation"
          :waitingFinishedRun="waitingFinishedRun"
        />
        <div class="link-container mt-2">
          <v-btn target="_blank" href="https://wikiwiki.jp/gakumas/%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E6%9B%B4%E6%96%B0%E5%B1%A5%E6%AD%B4">
            更新履歴
          </v-btn>
          <v-btn target="_blank" href="https://gkcontest.ris.moe/">
            @risりす
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="7" lg="7" xl="7" xxl="7">
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
import { SkillCardData } from "/scripts/simulator/data/skillCardData";
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

  const getAvailableCardIds = (cardIds) => {
    const cardMap = SkillCardData.getAll().reduce((map, item) => {
      map.set(item.id, item);
      return map;
    }, new Map());
    const result = [];
    const seen = new Map();
    cardIds.forEach((id, index) => {
      const baseId = Math.floor(id/10);
      // 該当するカードがない（空欄）
      if (!cardMap.has(id)) {
        return;
      }
      // 重複が許可されている
      if (cardMap.get(id)['allow_duplicate']) { 
        result.push(id);
        return;
      }
      // 重複が許可されていない
      const rank = id % 10;
      if (!seen.has(baseId)) { // 初めての種類のカードなら登録してtrue
        result.push(id);
        seen.set(baseId, { index: result.length-1, rank });
      } else { // 記録済みの種類のカードならrank(強化)を比べて大きい方(>)をtrue、(<=)をfalse
        const seenItem = seen.get(baseId);
        if (rank > seenItem.rank) {
          result[seenItem.index] = id;
          seen.set(baseId, { index: seenItem.index, rank });
        }
      }
    });
    return result;
  }
  const cardIds = getAvailableCardIds(cardIds_raw);
  // console.log(cardIds.map(id=>SkillCardData.getById(id).name));

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

  // console.log(run_data);

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
      const worker = new Worker(new URL('/src/worker.js', import.meta.url), {
        type: 'module',
      });
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
@media (max-width: 1280px) {
  .sp-pa-0 {
    padding: 0;
  }
}

.link-container > *:not(:first-child) {
  margin-left: 5px;
}

</style>
