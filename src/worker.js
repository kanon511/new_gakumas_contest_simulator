import { run } from '/simulator/run.js';

self.onmessage = function (e) {
  const runs = e.data.runs;
  const data = e.data.data;

  let scoreList = [];
  let minLog;
  let maxLog;
  let rndLog;
  const rndLogNumber = Math.floor(Math.random() * runs);
  const start_time = performance.now();

  for (let i = 0; i < runs; i++) {
    const result = run(data, false);
    scoreList.push(result.finalScore);
    if (!minLog || minLog.finalScore > result.finalScore) {
      minLog = result;
    }
    if (!maxLog || maxLog.finalScore < result.finalScore) {
      maxLog = result;
    }
    if (i == rndLogNumber) {
      rndLog = result;
    }
    const rap_time = performance.now();
    // console.log(`rap_time > ${rap_time - start_time}`);
    if (rap_time - start_time > 20000) {
      console.log(`forced quit > ${rap_time - start_time}`);
      rndLog = result;
      break;
    }
  }

  self.postMessage({
    scoreList: scoreList,
    minLog: minLog,
    maxLog: maxLog,
    rndLog: rndLog,
  });
};
