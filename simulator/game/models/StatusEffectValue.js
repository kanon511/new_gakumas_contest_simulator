import { Clone } from '../../utils/helpers.js';

export default class StatusEffectValue extends Clone {
  constructor(turn = -1, limit = -1, value = 1, isSkipDecay = false) {
    super();
    this.turn = turn;
    this.limit = limit;
    this.value = value;
    this.isSkipDecay = isSkipDecay;
  }

  decay() {
    if (this.isSkipDecay) {
      this.isSkipDecay = false;
      return true;
    }
    if (this.turn > 0) {
      this.turn -= 1;
    }
    if (this.turn == 0) {
      return false;
    }
    return true;
  }

  use() {
    if (this.limit > 0) {
      this.limit -= 1;
    }
    if (this.limit == 0) {
      return false;
    }
    return true;
  }
}
