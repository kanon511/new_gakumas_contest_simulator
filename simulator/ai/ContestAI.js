import { EvaluationCalculator } from '../game/calculator/EvaluationCalculator.js';

export default class ContestAI {
  constructor() {
    this.player;
  }

  setPlayer(player) {
    this.player = player;
  }

  simulate(depth) {
    return this.searchAllActions(
      this.player,
      this.player.turnManager.currentTurn + depth,
      []
    );
  }

  evaluate(player) {
    return EvaluationCalculator.calcEvaluation(player);
  }

  searchAllActions(player, depth, actionHistory) {
    if (depth === player.turnManager.currentTurn || player.isGameOver) {
      var s = this.evaluate(player)
      // console.log(player.turnManager.currentTurn);
      // player.status.print();
      // console.log(JSON.stringify(actionHistory));
      // console.log(s);
      // console.log("-----------------------------------------------------");
      return [
        {
          actions: actionHistory,
          score: s,
        },
      ];
    }

    let results = [];

    for (const action of player.getActions()) {
      const nextPlayer = player.clone();
      const cardIndex =
        action.index == -1 ? -1 : nextPlayer.deck.handCardIndexes[action.index];
      nextPlayer.next(action.index);

      const newHistory = [
        ...actionHistory,
        [cardIndex, action.index, player.turnManager.currentTurn],
      ];
      const futureResults = this.searchAllActions(
        nextPlayer,
        depth,
        newHistory
      );
      results = results.concat(futureResults);
    }

    return results;
  }
}
