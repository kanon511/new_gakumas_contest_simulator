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

    player.log.add('show', null, '手札');
    const handCards = player.deck.getHandCards();
    const actionMap = new Map();
    for (const action of allActions) {
      const handCardIndex = action.actions[0][1];
      if (
        actionMap.has(handCardIndex) &&
        actionMap.get(handCardIndex) > action.score
      ) {
        continue;
      }
      actionMap.set(handCardIndex, action.score);
    }
    for (let i = 0; i < handCards.length; i++) {
      const maxScore = actionMap.get(i);
      if (maxScore == void 0) {
        player.log.add('message', null, `×${handCards[i].name}(-)`);
      } else {
        player.log.add('message', null, `○${handCards[i].name}(${maxScore})`);
      }
    }
    player.log.add('end');

    if (isLog) {
      for (const action of allActions) {
        console.log(
          action.actions
            .map(([cardIndex]) => player.deck.cards[cardIndex]?.name ?? '休憩')
            .join(' => '),
          action.score
        );
      }
    }
    const action = bestActionPath.actions[0];
    const actionName = player.deck.cards[action[0]]?.name ?? '休憩';

    player.next(action[1]);

    if (isLog) {
      console.log(
        `Action: ${actionName}, Score: ${player.score}, HP: ${player.hp}\n`
      );
      console.log(player);
      console.log(player.status);
    }
  }
  const result = {
    finalScore: player.score,
    log: player.log.pull(),
  };
  // result.log.map((item) => console.log(item));
  return result;
}
