<template>
  <v-container class="sp-pa-0">
    <v-row>
      <v-col>
        <div>
          <table class="result-table">
            <tbody>
              <tr>
                <th>平均値</th>
                <th>中央値</th>
                <th>最頻値</th>
              </tr>
              <tr>
                <td id="result-score-mean">-</td>
                <td id="result-score-median">-</td>
                <td id="result-score-mode">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="custom-window">
          <v-card-item class="pa-0">
            <v-btn-toggle
              v-model="selectedBox"
              mandatory
              class="w-100 custom-btn-toggle"
            >
              <v-btn value="1" class="flex-grow-1">ヒストグラム</v-btn>
              <v-btn value="2" class="flex-grow-1">箱ひげ図(未完成)</v-btn>
            </v-btn-toggle>
          </v-card-item>

          <v-card-text class="custom-content pa-1">
            <div v-show="selectedBox === '1'">
              <canvas id="chart-histgram"></canvas>
            </div>
            <div v-show="selectedBox === '2'">
              <BoxPlot :data="boxPlotData" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="custom-window">
          <v-card-item class="pa-0">
            <v-btn-toggle
              v-model="selectedLog"
              mandatory
              class="w-100 custom-btn-toggle"
            >
              <v-btn value="1" class="flex-grow-1">最低値</v-btn>
              <v-btn value="2" class="flex-grow-1">ランダム</v-btn>
              <v-btn value="3" class="flex-grow-1">最大値</v-btn>
            </v-btn-toggle>
          </v-card-item>

          <v-card-text class="custom-content pa-1">
            <div
              id="contest-log-min"
              class="contest-log"
              v-show="selectedLog === '1'"
              v-html="loghtmls.min"
            ></div>
            <div
              id="contest-log-rnd"
              class="contest-log"
              v-show="selectedLog === '2'"
              v-html="loghtmls.rnd"
            ></div>
            <div
              id="contest-log-max"
              class="contest-log"
              v-show="selectedLog === '3'"
              v-html="loghtmls.max"
            ></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref, watch, defineProps } from "vue";
import Chart from "chart.js/auto";
import BoxPlot from "../common/BoxPlot.vue";

const props = defineProps({ resultData: { type: Object } });
const selectedBox = ref("1");
const selectedLog = ref("1");
const loghtmls = ref({
  min: "最小値のログが表示されます",
  rnd: "ランダムな回のログが表示されます",
  max: "最大値のログが表示されます",
});
let histgram;

function calculateBoxPlotValues(sortedArray) {
  const n = sortedArray.length;

  if (n === 0) {
    throw new Error("配列が空です");
  }

  const min = sortedArray[0];
  const max = sortedArray[n - 1];

  const getMedian = (arr) => {
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
  };

  const median = getMedian(sortedArray);

  const lowerHalf = sortedArray.slice(0, Math.floor(n / 2));
  const upperHalf = sortedArray.slice(Math.ceil(n / 2));

  const q1 = getMedian(lowerHalf);
  const q3 = getMedian(upperHalf);

  return { min, q1, median, q3, max };
}

const boxPlotData = ref([]);

function parseExecutionLog(executeLog) {
  let htmlString = "<div>";
  for (const log of executeLog) {
    if (log.type == "use") {
      if (log.sourceType == "skillCard") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-clone"></i>スキルカード「${log.source.name}」</div><div class="log-block-content">`;
      } else if (log.sourceType == "pItem") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-chess-rook"></i>Pアイテム「${log.source.name}」</div><div class="log-block-content">`;
      } else if (log.sourceType == "pDrink") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-wine-bottle"></i>Pドリンク「${log.source.name}」</div><div class="log-block-content">`;
      } else if (log.sourceType == "pStatus") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-forward"></i>ステータス効果「${log.source.name}」</div><div class="log-block-content">`;
      } else if (log.sourceType == "pDelay") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-link"></i>予約効果「${log.source.name}」</div><div class="log-block-content">`;
      }
      // else if (log.sourceType == 'pIdol') {
      //     htmlString += `<div><div><i class="fa-solid fa-person-rays"></i>${log.source.name}を使った</div>`;
      // }
      else if (log.sourceType == "pRest") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-bed"></i>${log.source.name}</div><div class="log-block-content">`;
      }
    } else if (log.type == "end") {
      htmlString += "</div></div>";
    } else if (log.type == "show") {
      htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-book-open"></i>${log.message}</div><div class="log-block-content">`;
    } else {
      htmlString += `<div>${log.message}</div>`;
    }
  }
  htmlString += "</div>";
  return htmlString;
}

function parseSimulationLog(simulationLog) {
  let text = "";
  for (const log of simulationLog.log) {
    const textElement = `
        <div>
            <div class="log-turn" data-turnType="${log.turnType}">
                <div>${log.turn}ターン目</div>
                <div class="log-turn-status">
                    <i class="fa-solid fa-star"></i>${log.status.score}
                    <i class="fa-solid fa-heart"></i>${log.status.hp}
                    <i class="fa-solid fa-shield-halved"></i>${log.status.block}
                </div>
            </div>
        </div>`;
    text += textElement;
    text += parseExecutionLog(log.executionLog);
  }
  return text;
}

watch(
  () => props.resultData,
  (resultData) => {
    const scoreList = resultData.scoreList;
    scoreList.sort((a, b) => a - b);

    const aryMax = function (a, b) {
      return Math.max(a, b);
    };
    const aryMin = function (a, b) {
      return Math.min(a, b);
    };

    const minscore = Math.floor(scoreList.reduce(aryMin) / 1000);
    const maxscore = Math.floor(scoreList.reduce(aryMax) / 1000);
    const count = Math.floor(maxscore - minscore) + 1;
    const data = new Array(count).fill(0);
    for (let i = 0; i < scoreList.length; i++) {
      const kaikyu = Math.floor(scoreList[i] / 1000) - minscore;
      data[kaikyu]++;
    }

    document.getElementById("result-score-mean").textContent = Math.floor(
      scoreList.reduce((pre, crt) => pre + crt, 0) / scoreList.length
    );
    document.getElementById("result-score-median").textContent =
      scoreList[Math.floor(scoreList.length / 2)];
    document.getElementById("result-score-mode").textContent =
      (minscore +
        data.reduce(
          (pre, crt, i) => (pre[0] < crt ? [crt, i] : pre),
          [-1, 0]
        )[1]) *
      1000;
    if (histgram) {
      histgram.data = {
        labels: new Array(count).fill(0).map((_, i) => (i + minscore) * 1000),
        datasets: [
          {
            label: `スコア(N=${scoreList.length})`,
            data: data,
          },
        ],
      };
      histgram.update();
    }
    boxPlotData.value.push(calculateBoxPlotValues(scoreList));
    if (boxPlotData.value.length > 6) {
      boxPlotData.value.shift();
    }

    // こっからログ
    const logs = {
      min: resultData.minLog,
      rnd: resultData.rndLog,
      max: resultData.maxLog,
    };
    const logKeys = ["min", "rnd", "max"];
    for (const key of logKeys) {
      loghtmls.value[key] = parseSimulationLog(logs[key]);
    }
  }
);

onMounted(() => {
  histgram = new Chart(document.getElementById("chart-histgram"), {
    type: "bar",
  });
});
</script>

<style scoped>
.result-table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
}
.result-table th {
  padding: 3px;
  background: #e9faf9;
  border: solid 1px #778ca3;
}
.result-table td {
  padding: 3px;
  border: solid 1px #778ca3;
}

.custom-window {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-btn-toggle {
  background-color: #f5f5f5;
}

.custom-btn-toggle .v-btn {
  background-color: transparent;
  color: #333;
  font-weight: 500;
  text-transform: none;
  letter-spacing: normal;
  height: 48px;
  border-radius: 0;
}

.custom-btn-toggle .v-btn--selected {
  background-color: #2196f3;
  color: white;
}

.custom-content {
  background-color: white;
  min-height: 200px; /* コンテンツの最小高さを設定 */
  padding: 16px;
}
</style>
<style>
.contest-log {
  font-size: 12px;
}

.contest-log i {
  vertical-align: 0px;
  margin-right: 5px;
}

.log-turn {
  /* border-top: solid 4px;
    border-bottom: solid 4px; */
  padding: 5px 5px;
  font-size: 1.1em;
  color: white;
  font-weight: bold;
  display: flex;
}

.log-turn[data-turnType="vocal"] {
  background: linear-gradient(to right, #f13584, #f461a1);
}
.log-turn[data-turnType="dance"] {
  background: linear-gradient(to right, #1d84ed, #4b9ef0);
}
.log-turn[data-turnType="visual"] {
  background: linear-gradient(to right, #f7b12f, #f8c25d);
}
.log-turn > :first-child {
  margin-right: auto;
}

.log-block {
  margin-bottom: 5px;
  /* padding: 3px; */
  border: solid 1px #ccc;
  border-radius: 5px;
}
.log-block-title {
  font-size: 1.1em;
  padding: 2px 5px;
  background-color: #eee;
}
.log-block-content {
  padding: 4px 8px;
}
.log-block .fa-book-open {
  color: #28a745;
}
.log-block .fa-chess-rook {
  color: #ff4136;
}
.log-block .fa-clone {
  color: #28a745;
}
.log-block .fa-forward {
  color: #007bff;
}
.log-block .fa-link {
  color: #007bff;
}
</style>
