import { data as card_data } from './cards.js';
import { data as status_data } from './status.js';
import { data as p_item_data } from './pItem.js';
import { data as contest_data } from './contest.js';
import { data as p_idol_data } from './pIdol.js';
import { deep_copy } from '../../utils/helpers.js';

export default class DataLoader {
  static cardMap = new Map();
  static status_map = new Map();
  static p_item_map = new Map();
  static contest_map = new Map();
  static p_idol_map = new Map();
  static p_idol_characterId_map = new Map();

  static initialize(user_custom_data = {}) {
    this.cardMap = this.convert_to_map(card_data, 'id');
    this.p_item_map = this.convert_to_map(p_item_data, 'id');
    this.status_map = this.convert_to_map(status_data, 'name');
    this.contest_map = this.convert_to_map(contest_data, 'id');
    this.p_idol_map = this.convert_to_map(p_idol_data, 'id');
    p_idol_data.forEach((data) => {
      if (!this.p_idol_characterId_map.has(data.character_id)) {
        this.p_idol_characterId_map.set(data.character_id, new Set());
      }
      this.p_idol_characterId_map.get(data.character_id).add(data);
    });

    if (user_custom_data.cards) {
      this.add_custom_data(this.cardMap, user_custom_data.cards, 'id');
    }
    if (user_custom_data.p_items) {
      this.add_custom_data(this.p_item_map, user_custom_data.p_items, 'id');
    }
    if (user_custom_data.status) {
      this.add_custom_data(this.status_map, user_custom_data.status, 'name');
    }
    if (user_custom_data.contest) {
      this.add_custom_data(this.contest_map, user_custom_data.contest, 'id');
    }
  }

  static convert_to_map(data_array, key_field) {
    const map = new Map();
    data_array.forEach((item) => {
      map.set(item[key_field], item);
    });
    return map;
  }

  static add_custom_data(map, custom_data_array, key_field) {
    custom_data_array.forEach((item) => {
      if (!map.has(item[key_field])) {
        map.set(item[key_field], item);
      }
    });
  }

  static getCardById(card_id) {
    return deep_copy(this.cardMap.get(card_id));
  }

  static getPItemById(p_item_id) {
    return deep_copy(this.p_item_map.get(p_item_id));
  }

  static getStatusByName(status_name) {
    return deep_copy(this.status_map.get(status_name));
  }

  static get_contest_by_id(contest_id) {
    return deep_copy(this.contest_map.get(contest_id));
  }

  static get_contest_stage_by_id(contest_id, stage_id) {
    return deep_copy(this.contest_map.get(contest_id)?.[stage_id]);
  }
}
