<template></template>

<script setup>
// const logs = {
//   min: result.minLog,
//   rnd: result.rndLog,
//   max: result.maxLog,
// };
// const logKeys = ["min", "rnd", "max"];

// for (const key of logKeys) {
//   const container = document.getElementById(`contest-log-${key}`);
//   DOM_delete_allChildren(container);
//   container.appendChild(parseSimulationLog(logs[key]));
// }

// const scoreList = result.scoreList;
// scoreList.sort((a, b) => a - b);

// const aryMax = function (a, b) {
//   return Math.max(a, b);
// };
// const aryMin = function (a, b) {
//   return Math.min(a, b);
// };

// const minscore = Math.floor(scoreList.reduce(aryMin) / 1000);
// const maxscore = Math.floor(scoreList.reduce(aryMax) / 1000);
// const count = Math.floor(maxscore - minscore) + 1;
// const data = new Array(count).fill(0);
// for (let i = 0; i < scoreList.length; i++) {
//   const kaikyu = Math.floor(scoreList[i] / 1000) - minscore;
//   data[kaikyu]++;
// }

// document.getElementById("result-score-mean").textContent = Math.floor(
//   scoreList.reduce((pre, crt) => pre + crt, 0) / scoreList.length
// );
// document.getElementById("result-score-median").textContent =
//   scoreList[Math.floor(scoreList.length / 2)];
// document.getElementById("result-score-mode").textContent =
//   (minscore +
//     data.reduce(
//       (pre, crt, i) => (pre[0] < crt ? [crt, i] : pre),
//       [-1, 0]
//     )[1]) *
//   1000;

// chart.data = {
//   labels: new Array(count).fill(0).map((_, i) => (i + minscore) * 1000),
//   datasets: [
//     {
//       label: `スコア（N=${simulateCount}）`,
//       data: data,
//     },
//   ],
// };
// chart.update();
</script>

<style scoped></style>
