import Player from '../game/models/Player.js';
import ContestAI from './ContestAI.js';

/**
 * AIを返します。
 * @param {String} name
 * @param {Player} player
 * @return {ContestAI}
 */
export default function getAI(name, player) {
  switch (name) {
    default:
      return new ContestAI(player);
  }
}
