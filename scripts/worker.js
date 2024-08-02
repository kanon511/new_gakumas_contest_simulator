import { run } from "./simulator/run.js";

self.onmessage = function(e) {
    const runs = e.data.runs;
    const data = e.data.data;

    let scoreList = [];
    let minLog;
    let maxLog;
    let rndLog;
    const rndLogNumber = Math.floor(Math.random()*runs);

    for (let i = 0; i < runs; i++) {
        const result = run(data);
        scoreList.push(result.finalStatus.score);
        if (!minLog || minLog.finalStatus.score > result.finalStatus.score) {
            minLog = result;
        }
        if (!maxLog || maxLog.finalStatus.score < result.finalStatus.score) {
            maxLog = result;
        }
        if (i == rndLogNumber) {
            rndLog = result;
        }
    }

    self.postMessage({
        scoreList: scoreList,
        minLog: minLog,
        maxLog: maxLog,
        rndLog: rndLog,
    });
};