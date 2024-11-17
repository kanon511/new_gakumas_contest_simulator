<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="5" lg="5" xl="5" xxl="5">
        <SimulatorInput @run-simulation="runSimulation" :waitingFinishedRun="waitingFinishedRun" />
        <div class="mt-2">
          运行次数：<input type="number" v-model.number="totalRuns" class="status-input" />
        </div>
        <div class="link-container mt-2">
          <v-btn target="_blank" href="https://katabami83.github.io/gakumas_contest_simulator/"> @katabami83 </v-btn>
          <v-btn target="_blank" href="https://gkcontest.ris.moe/"> @risりす </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="7" lg="7" xl="7" xxl="7">
        <SimulatorOutput :resultData="simulationResult" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SimulatorInput from '@/components/common/SimulatorInput.vue';
import SimulatorOutput from '@/components/common/SimulatorOutput.vue';
import { ref } from 'vue';
import { getData } from '@/store/store.js';

const simulationResult = ref(null);
const waitingFinishedRun = ref(false);

let totalRuns = ref(1000);

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

    const runsPerWorker = Math.ceil(totalRuns.value / numWorkers);
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
        if (!results.minLog || results.minLog.finalScore > result.minLog.finalScore) {
          results.minLog = result.minLog;
        }
        if (!results.maxLog || results.maxLog.finalScore < result.maxLog.finalScore) {
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
        console.log(`Worker error: ${error.message} in ${error.filename} at line ${error.lineno}`);
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
