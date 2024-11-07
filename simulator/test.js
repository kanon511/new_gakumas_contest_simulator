import { run } from './run.js';

const data = {
  "turn": 6,
  "criteria": {
      "vocal": 30,
      "dance": 20,
      "visual": 50
  },
  "turnTypes": {
      "vocal": 2,
      "dance": 1,
      "visual": 3
  },
  "rank": [
      "visual",
      "vocal",
      "dance"
  ],
  "firstTurnFirstTypeProb": 1,
  "parameter": {
      "vocal": 1541,
      "dance": 861,
      "visual": 2502,
      "hp": 40
  },
  "plan": "sense",
  "trend": "好調",
  "pItemIds": [
      4241111,
      2306020,
      3300080,
      3300010
  ],
  "skillCardIds": [
      4206021,
      4300041,
      2021041,
      3021051,
      3021081,
      4021010,
      4206031,
      4300010,
      3020010,
      3021051,
      3011081,
      4020040,
      1010010,
      1010010,
      1011010,
      1011020,
      1021010,
      1021010,
      1021020,
      1021020
  ],
  "count": 2000
}

const start_time = performance.now();
for (let i = 0; i < 1; i++) {
  const start_time = performance.now();
  run(data, true);
  const end_time = performance.now();
  console.log(`time: ${end_time - start_time}`);
}
const end_time = performance.now();
console.log(`final_time: ${end_time - start_time}`);
