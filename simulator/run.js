import Player from './game/models/Player.js';
import ContestAI from './ai/ContestAI.js';

import DataLoader from './game/data/DataLoader.js';
import { deep_copy } from './utils/helpers.js';

DataLoader.initialize();

export function run(data, isLog) {
  const input = {
    cardIds: data.skillCardIds,
    pItemIds: data.pItemIds,
    stageData: {
      turnCount: data.turn,
      criteria: data.criteria,
      turnTypeCounts: deep_copy(data.turnTypes),
      turnTypeRanks: data.rank,
      firstTurnFirstTypeProb: data.firstTurnFirstTypeProb,
    },
    playerData: {
      vocal: data.parameter.vocal,
      dance: data.parameter.dance,
      visual: data.parameter.visual,
      hp: data.parameter.hp,
      plan: data.plan,
      trend: data.trend,
    },
  };
  const player = new Player(input);
  player.init();

  const ai = new ContestAI();

  while (!player.isGameOver) {
    if (isLog) {
      console.log(
        player.deck
          .getHandCards()
          .map((card) => card.name)
          .join(', ')
      );
    }
    ai.setPlayer(player);

    const allActions = ai.simulate(3);
    const bestActionPath = allActions.reduce(
      (best, current) => (current.score > best.score ? current : best),
      allActions[0]
    );

    const actionMap = new Map();
    for (const action of allActions) {
      const cardIndex = action.actions[0][0];
      if (actionMap.has(cardIndex) && actionMap.get(cardIndex) > action.score) {
        continue;
      }
      actionMap.set(cardIndex, action.score);
    }

    if (isLog) {
      console.log(actionMap);
      // for (const action of allActions) {
      //   console.log(
      //     action.actions
      //       .map(([cardIndex]) => player.deck.cards[cardIndex]?.name ?? '休憩')
      //       .join(' => '),
      //     action.score
      //   );
      // }
    }

    const currentTurn = player.turnManager.currentTurn;

    for (let actionIndex = 0; actionIndex < bestActionPath.actions.length; actionIndex++) {
      const action = bestActionPath.actions[actionIndex];
      if (action[2] != currentTurn) {
        break;
      }

      player.log.add('show', null, '手札');

      for (const cardInfo of player.getHandCardInfo()) {
        if (cardInfo.available) {
          const score = actionMap.get(cardInfo.cardIndex);
          player.log.add('message', null, `○${cardInfo.card.name}(${score ?? '-'})`);
        } else {
          player.log.add('message', null, `×${cardInfo.card.name}(-)`);
        }
      }

      if (actionIndex + 1 < bestActionPath.actions.length) {
        actionMap.set(
          bestActionPath.actions[actionIndex + 1][0],
          actionMap.get(bestActionPath.actions[actionIndex][0])
        );
      }
      player.log.add('end');

      // const action = bestActionPath.actions[0];
      const actionName = player.deck.cards[action[0]]?.name ?? '休憩';

      player.next(action[1]);

      if (isLog) {
        console.log(`Action: ${actionName}, Score: ${player.score}, HP: ${player.hp}\n`);
        // console.log(player);
        // console.log(player.status);
      }
    }
  }
  const result = {
    finalScore: player.score,
    log: player.log.pull(),
  };
  // result.log.map((item) => console.log(item));
  return result;
}
