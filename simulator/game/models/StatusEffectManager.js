import DataLoader from '../data/DataLoader.js';
import { Clone, deep_copy } from '../../utils/helpers.js';
import ActiveStatusEffect from './ActiveStatusEffect.js';
import PassiveStatusEffect from './PassiveStatusEffect.js';
import StatusEffectValue from './StatusEffectValue.js';
import Player from './Player.js';

/**
 * バフ/デバフ管理クラス
 */
export default class StatusEffectManager extends Clone {
  /**
   * Create a status effect manager.
   */
  constructor() {
    super();
    /** 基本バフ/デバフの名前マップ @type {Map<String, PassiveStatusEffect>} */
    this.passiveStatusEffectMap = new Map();
    /** 特殊バフ/デバフや予約効果のトリガーマップ @type {Map<String, Array<ActiveStatusEffect>>} */
    this.activeStatusEffectMap = new Map();
  }

  getType(name) {
    return DataLoader.getStatusByName(name).type;
  }

  getValue(name) {
    const statusEffect = this.passiveStatusEffectMap.get(name);
    if (!statusEffect) {
      return 0;
    }
    if (statusEffect.valueType == 'list') {
      return statusEffect.valueList.reduce(
        (prev, crnt) => prev + crnt.value,
        0
      );
    } else {
      return statusEffect.value;
    }
  }

  has(name) {
    return this.passiveStatusEffectMap.has(name);
  }

  parseOptions(options) {
    const results = {
      turn: -1,
      limit: -1,
      isTemporary: 0,
    };
    options?.forEach((option) => {
      if (option.type == 'status_option') {
        results[option.target] = option.value;
      }
    });
    return results;
  }

  load(name) {
    const status = DataLoader.getStatusByName(name);
    if (status) {
      if ('effects' in status) {
        const statusEffect = new ActiveStatusEffect(status);
        this.registerActive(status.trigger, statusEffect);
        return statusEffect;
      } else {
        const statusEffect = new PassiveStatusEffect(status);
        this.registerPassive(name, statusEffect);
        return statusEffect;
      }
    }
    throw new Error(
      `PStatus::load(): ステータス効果"${name}"のデータがありません`
    );
  }

  add(key, value, options, phase) {
    /** ステータス @type {ActiveStatusEffect|PassiveStatusEffect|undefined} */
    let statusEffect = this.passiveStatusEffectMap.get(key);
    if (!statusEffect) {
      statusEffect = this.load(key);
    }
    const { turn, limit, isTemporary } = this.parseOptions(options);
    const isSkipDecay = phase != 0 && !isTemporary;
    if (statusEffect instanceof PassiveStatusEffect) {
      if (statusEffect.valueType == 'list') {
        for (let i = 0; i < statusEffect.valueList.length; i++) {
          if (statusEffect.valueList[i].turn == turn) {
            statusEffect.valueList[i].value += value;
            return;
          }
        }
        const statusEffectValue = new StatusEffectValue(
          turn,
          limit,
          value,
          isSkipDecay
        );
        statusEffect.valueList.push(statusEffectValue);
      } else {
        if (statusEffect.value == 0) {
          statusEffect.isSkipDecay = isSkipDecay;
        }
        statusEffect.value += value;
      }
    } else if (statusEffect instanceof ActiveStatusEffect) {
      statusEffect.value = new StatusEffectValue(
        turn,
        limit,
        value,
        isSkipDecay
      );
      // console.log('effectssssss', statusEffect.value);
    }
  }

  reduce(key, value) {
    const statusEffect = this.passiveStatusEffectMap.get(key);
    if (!statusEffect) {
      console.log(`status::reduce: no ${key}, ${value}`);
      return;
    }
    if (statusEffect.valueType == 'list') {
      throw new Error(
        'status::reduce: valueType == list no reduce ha kyokasareteimasen'
      );
    }
    statusEffect.value -= value;
    if (statusEffect.value <= 0) {
      this.passiveStatusEffectMap.delete(key);
    }
  }

  addDelayEffect(name, triggerTurn, _effect) {
    const trigger = 'start_turn';
    const effect = deep_copy(_effect);
    delete effect.delay;
    delete effect.condition;
    const statusEffect = new ActiveStatusEffect({
      id: -1,
      name: name,
      type: 'buff',
      isDecay: false,
      trigger: trigger,
      condition: `turn==${triggerTurn}`,
      effects: [effect],
    });
    statusEffect.value = new StatusEffectValue(-1, 1, 1);
    this.registerActive(trigger, statusEffect);
  }

  decay() {
    // passive
    for (const [key, status] of this.passiveStatusEffectMap.entries()) {
      if (!status.isDecay) {
        continue;
      }
      if (status.valueType == 'list') {
        for (let i = status.valueList.length - 1; 0 <= i; i--) {
          const value = status.valueList[i];
          if (!value.decay()) {
            status.valueList.splice(i, 1);
          }
        }
        if (status.valueList.length == 0) {
          this.passiveStatusEffectMap.delete(key);
        }
      } else {
        if (status.isSkipDecay) {
          status.isSkipDecay = false;
          continue;
        }
        if (status.decayType == 'all') {
          this.reduce(key, this.getValue(key));
        } else {
          this.reduce(key, 1);
        }
      }
    }
    // active
    for (const activeStatusEffects of this.activeStatusEffectMap.values()) {
      for (let i = activeStatusEffects.length - 1; 0 <= i; i--) {
        const value = activeStatusEffects[i].value;
        if (!value?.decay()) {
          activeStatusEffects.splice(i, 1);
        }
      }
    }
  }

  /**
   * 基本ステータスをMapに登録します。
   * @param {String} name
   * @param {PassiveStatusEffect} statusEffect
   */
  registerPassive(name, statusEffect) {
    this.passiveStatusEffectMap.set(name, statusEffect);
  }

  /**
   * 特殊ステータスをMapに登録します。
   * @param {String} trigger
   * @param {ActiveStatusEffect} statusEffect
   */
  registerActive(trigger, statusEffect) {
    if (!this.activeStatusEffectMap.has(trigger)) {
      this.activeStatusEffectMap.set(trigger, []);
    }
    // @ts-ignore
    this.activeStatusEffectMap.get(trigger).push(statusEffect);
  }

  /**
   * 現在のプレイヤー条件で使用可能なPアイテムを返します。
   * @param {String} trigger
   * @param {Player} player
   * @return {Array<ActiveStatusEffect>}
   */
  getEvents(trigger, player) {
    const targetStatus = this.activeStatusEffectMap.get(trigger);
    if (!targetStatus) {
      return [];
    }
    const results = [];
    const remains = [];
    for (let i = 0; i < targetStatus.length; i++) {
      const status = targetStatus[i];
      if (!status.condition || status.condition.check(player)) {
        results.push(status);
        if (status.use()) {
          remains.push(status);
        }
      } else {
        remains.push(status);
      }
    }
    this.activeStatusEffectMap.set(trigger, remains);
    return results;
  }

  print() {
    for (const [key, status] of this.passiveStatusEffectMap.entries()) {
      console.log(key, status.value, status.valueList);
    }
    for (const activeStatusEffects of this.activeStatusEffectMap.values()) {
      for (let i = 0; i < activeStatusEffects.length; i++) {
        const statusEffect = activeStatusEffects[i];
        console.log(
          statusEffect.name,
          statusEffect,
          statusEffect.condition.conditionTree
        );
      }
    }
  }
}
