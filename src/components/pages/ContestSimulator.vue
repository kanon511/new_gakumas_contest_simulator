<template>
  <v-container class="sp-pa-0">
    <v-row>
      <v-col cols="12" sm="6" md="5" lg="5" xl="5" xxl="5">
        <SimulatorInput
          @run-simulation="runSimulation"
          :waitingFinishedRun="waitingFinishedRun"
        />
        <div class="link-container mt-2">
          <v-btn
            target="_blank"
            href="https://wikiwiki.jp/gakumas/%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E6%9B%B4%E6%96%B0%E5%B1%A5%E6%AD%B4"
          >
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
import SimulatorInput from '../modules/input/SimulatorInput.vue';
import SimulatorOutput from '../modules/output/SimulatorOutput.vue';
import { ref } from 'vue';
import { getData } from '../store/store.js';

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
  const run_data = getData();
  // console.log(run_data);
  if (!run_data) {
    alert('アイドルを選択してください');
    return;
  }

  console.time('run');
  const result = await runWebWorker(run_data);
  console.timeEnd('run');
  return result;
};

async function runWebWorker(data) {
  return new Promise((resolve) => {
    let numWorkers = 1;
    if (navigator.hardwareConcurrency) {
      numWorkers = Math.min(navigator.hardwareConcurrency, 8);
    }
    const totalRuns = 1000;
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
          results.minLog.finalScore > result.minLog.finalScore
        ) {
          results.minLog = result.minLog;
        }
        if (
          !results.maxLog ||
          results.maxLog.finalScore < result.maxLog.finalScore
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
