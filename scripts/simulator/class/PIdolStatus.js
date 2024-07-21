import { deep_copy } from "../../util/utility.js";

const statusList = [
    {
        id: 1,
        name: '集中',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: false,
    },
    {
        id: 2,
        name: '好調',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 3,
        name: '絶好調',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 4,
        name: 'やる気',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: false,
    },
    {
        id: 5,
        name: '好印象',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 6,
        name: '消費体力削減',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: false,
    },
    {
        id: 7,
        name: '消費体力減少',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 8,
        name: '消費体力増加',
        description: '',
        value: 0,
        type: 'debuff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 9,
        name: '元気増加無効',
        description: '',
        value: 0,
        type: 'debuff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 10,
        name: '低下状態無効',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: false,
    },
    {
        id: 11,
        name: 'スキルカード使用数追加',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: true,//all
    },
    {
        id: 12,
        name: '次に使用するスキルカードの効果を発動',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: false,
    },

    {
        id: 14,
        name: '次に使用するアクティブスキルカードの効果を発動',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: true,
    },

    {
        id: 13,
        name: 'パラメータ上昇量増加',
        description: '',
        valueStack: [],
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: true,
    },

    {
        id: 100,
        name: '使用したスキルカード数',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: false,
    },

    {
        id: 501,
        name: 'アクティブスキルカード使用時固定元気+2',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: 'cardType==active',
        activate_effects: [
            { type: '固定元気', value: 2 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 502,
        name: 'アクティブスキルカード使用時集中+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: 'cardType==active',
        activate_effects: [
            { type: '集中', value: 1 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 503,
        name: 'メンタルスキルカード使用時好印象+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: 'cardType==mental',
        activate_effects: [
            { type: '好印象', value: 1 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 504,
        name: 'メンタルスキルカード使用時やる気+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: 'cardType==mental',
        activate_effects: [
            { type: 'やる気', value: 1 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 1001,
        name: 'ターン終了時、好印象+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'turnend',
        activate_condition: null,
        activate_effects: [
            { type: '好印象', value: 1 }, 
        ],
        is_reduce_turnend: false,
    },

    {
        id: 1101,
        name: 'ターン終了時、集中が3以上の場合、集中+2',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'turnend',
        activate_condition: '集中>=3',
        activate_effects: [
            { type: '集中', value: 2 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 1102,
        name: 'ターン終了時、好印象が3以上の場合、好印象+3',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'turnend',
        activate_condition: '好印象>=3',
        activate_effects: [
            { type: '好印象', value: 3 }, 
        ],
        is_reduce_turnend: false,
    },


    {
        id: 1103,
        name: 'アクティブスキルカード使用時、パラメータ+4',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: 'cardType==active',
        activate_effects: [
            { type: 'score', value: 4 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 1104,
        name: 'アクティブスキルカード使用時、パラメータ+5',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: 'cardType==active',
        activate_effects: [
            { type: 'score', value: 5 }, 
        ],
        is_reduce_turnend: false,
    },

    {
        id: 1105,
        name: 'スキルカード使用時、好印象の30%分パラメータ',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: '',
        activate_effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 30 }] }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 1106,
        name: 'スキルカード使用時、好印象の50%分パラメータ',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: '',
        activate_effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 50 }] }, 
        ],
        is_reduce_turnend: false,
    },


];

export class PIdolStatus {

    #status;
    #index_name_to_idx;
    #reduceInTurnendKeys;

    #names_activate_in_useCard;
    #delayEffectList = [];

    constructor () {
        this.#status = deep_copy(statusList);
        
        this.#index_name_to_idx = {};
        for (let i = 0; i < this.#status.length; i++) {
            this.#index_name_to_idx[this.#status[i].name] = i;
        }

        this.#reduceInTurnendKeys = this.#status.filter(item=>item.is_reduce_turnend).map(item=>item.name);
        this.#names_activate_in_useCard = this.#status.filter(item=>item.activate_timing=='usecard').map(item=>item.name);
    }

    reduceInTurnend ()  {
        for (const key of this.#reduceInTurnendKeys) {
            const status = this.#get(key);
            if (status.valueStack) {
                for (let i = 0; i < status.valueStack.length; i++) {
                    const item = status.valueStack[i];
                    if (item.firstAdded) {
                        item.firstAdded = false;
                        continue;
                    }
                    item.turn--;
                    if (item.turn <= 0) {
                        status.valueStack.splice(i, 1);
                        i--;
                    }
                }
            }
            else {
                if (status.value <= 0) continue;
                if (status.firstAdded) {
                    status.firstAdded = false;
                    continue;
                }
                this.reduce(key, 1);
            }
        }
        this.#status[this.#index_name_to_idx['使用したスキルカード数']].value = 0;
    }

    #get (name) {
        if (!(name in this.#index_name_to_idx)) {
            throw new Error(`${name}は存在しないステータスです。`);
        }
        return this.#status[this.#index_name_to_idx[name]];
    }

    getType (name) {
        const status = this.#get(name);
        return status.type;
    }

    getValue (name) {
        const status = this.#get(name);
        if (status.valueStack) {
            return status.valueStack.reduce((pre, crt) => pre+crt.value, 0);
        }
        else {
            return status.value;
        }
    }


    getAll () {
        console.log(Object.fromEntries(this.#status.map(item => [item.name, item.value])));
        return Object.fromEntries(this.#status.map(item => [item.name, item.value]))
    }

    add (name, value, availableFirstAdded, options) { 
        const status = this.#get(name);
        if (status.valueStack) {
            const item = {
                value: options[0].value,
                turn: value
            };
            if (availableFirstAdded) {
                item.firstAdded = true;
            }
            status.valueStack.push(item);
        }
        else {
            if (status.value == 0 && availableFirstAdded) {
                status.firstAdded = true;
            }
            status.value += value;
        }
    }
    
    addDelayEffect (name, turn, effect) {
        this.#delayEffectList.push({
            name: name,
            turn: turn,
            effect: effect,
        });
    }

    getDelayEffectByTurn (turn) {
        const result = [];
        for (let i = 0; i < this.#delayEffectList.length; i++) {
            const delayEffect = this.#delayEffectList[i];
            if (delayEffect.turn == turn) {
                result.push(delayEffect);
                this.#delayEffectList.splice(i, 1);
                i--;
            }
        }
        return result;
    }

    reduce (name, value) {
        // valueStackはエラー発生するから注意！
        const status = this.#get(name);
        status.value -= value;
        if (status.value < 0) {
            status.value = 0;
        }
    }

    get_byActivateTiming (activate_timing) {
        // const result = [];
        // for (const name of this.#names_activate_in_useCard) {
        //     const status = this.#get(name);
        //     if (status.value == 0) continue;
        //     result.push(status);
        // }
        const result = this.#status.filter(item=>item.activate_timing==activate_timing);
        return result;
    }
}