import { deep_copy } from "../../../scripts/util/utility.js";

const statusList = [
    // センス
    {
        id: 10001,
        name: '好調',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 10002,
        name: '集中',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: false,
    },
    {
        id: 10003,
        name: '好印象',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 10004,
        name: 'やる気',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: false,
    },
    {
        id: 10005,
        name: '消費体力減少',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 10006,
        name: '消費体力削減',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: false,
    },
    {
        id: 10007,
        name: '消費体力追加',
        description: '',
        value: 0,
        type: 'debuff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: false,
    },
    {
        id: 100011,
        name: '絶好調',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 8,
        name: '消費体力増加',
        description: '',
        value: 0,
        type: 'debuff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 9,
        name: '元気増加無効',
        description: '',
        value: 0,
        type: 'debuff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: true,
    },
    {
        id: 10,
        name: '低下状態無効',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: false,
    },
    {
        id: 11,
        name: 'スキルカード使用数追加',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: true,//all
    },
    {
        id: 12,
        name: '次に使用するスキルカードの効果を発動',
        description: '',
        valueStack: [],
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: false,
    },

    {
        id: 14,
        name: '次に使用するアクティブスキルカードの効果を発動',
        description: '',
        valueStack: [],
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: true,
    },

    {
        id: 13,
        name: 'パラメータ上昇量増加',
        description: '',
        valueStack: [],
        type: 'buff',
        activate_timing: null,
        condition: null,
        is_reduce_turnend: true,
    },

    // {
    //     id: 100,
    //     name: '使用したスキルカード数',
    //     description: '',
    //     value: 0,
    //     type: 'buff',
    //     activate_timing: null,
    //     condition: null,
    //     is_reduce_turnend: false,
    // },

    {
        id: 501,
        name: 'アクティブスキルカード使用時固定元気+2',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
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
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'status', target: '集中', value: 1 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 503,
        name: 'メンタルスキルカード使用時好印象+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'before_use_card',
        condition: 'cardType==mental',
        effects: [
            { type: 'status', target: '好印象', value: 1 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 504,
        name: 'メンタルスキルカード使用時やる気+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'before_use_card',
        condition: 'cardType==mental',
        effects: [
            { type: 'status', target: 'やる気', value: 1 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 1001,
        name: 'ターン終了時、好印象+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'end_turn',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 1 }, 
        ],
        is_reduce_turnend: false,
    },

    {
        id: 1101,
        name: 'ターン終了時、集中が3以上の場合、集中+2',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'end_turn',
        condition: '集中>=3',
        effects: [
            { type: 'status', target: '集中', value: 2 }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 1102,
        name: 'ターン終了時、好印象が3以上の場合、好印象+3',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'end_turn',
        condition: '好印象>=3',
        effects: [
            { type: 'status', target: '好印象', value: 3 }, 
        ],
        is_reduce_turnend: false,
    },


    {
        id: 1103,
        name: 'アクティブスキルカード使用時、パラメータ+4',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
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
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
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
        activate_timing: 'before_use_card',
        condition: '',
        effects: [
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
        activate_timing: 'before_use_card',
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 50 }] }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 1108,
        name: '好印象効果のスキルカード使用後、好印象の30%分のパラメータ',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'after_use_card',
        condition: 'cardEffectInclude==好印象',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 30 }] }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 1110,
        name: '好印象効果のスキルカード使用後、好印象の50%分のパラメータ',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'after_use_card',
        condition: 'cardEffectInclude==好印象',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 50 }] }, 
        ],
        is_reduce_turnend: false,
    },
    {
        id: 1111,
        name: '元気効果のスキルカード使用後、好印象+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'after_use_card',
        condition: 'cardEffectInclude==block',
        effects: [
            { type: 'status', target: '好印象', value: 1 }, 
        ],
        is_reduce_turnend: false,
    },

    {
        id: 9999,
        name: '好印象効果',
        description: '',
        value: 1,
        type: 'buff',
        activate_timing: 'end_turn',
        condition: '好印象>0',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] }, 
        ],
        is_reduce_turnend: false,
    },


];

export class _PStatus {

    #status;
    #index_name_to_idx;

    constructor (status) {
        this.#status = status;
        this.#index_name_to_idx = {};
        for (let i = 0; i < this.#status.length; i++) {
            this.#index_name_to_idx[this.#status[i].name] = i;
        }
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

    has (name) {
        return this.getValue(name) > 0;
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

    reduce (name, value) {
        // valueStackはエラー発生するから注意！
        const status = this.#get(name);
        status.value -= value;
        if (status.value < 0) {
            status.value = 0;
        }
    }

    getByTiming (timing) {
        const result = this.#status.filter(item=>item.value>0 && item.activate_timing==timing);
        return result;
    }
}

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
        // this.#status[this.#index_name_to_idx['使用したスキルカード数']].value = 0;
    }

    #get (name) {
        if (!(name in this.#index_name_to_idx)) {
            throw new Error(`${name}は存在しないステータスです。`);
        }
        return this.#status[this.#index_name_to_idx[name]];
    }

    get (name) {
        return deep_copy(this.#get(name));
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

    has (name) {
        return this.getValue(name) > 0;
    }

    _deepcopy () {
        return deep_copy(this.#status);
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
    
    // addDelayEffect (name, turn, effect) {
    //     this.#delayEffectList.push({
    //         name: name,
    //         turn: turn,
    //         effect: effect,
    //     });
    // }

    addDelayEffect (name, turn, effect) {
        this.#delayEffectList.push({
            name: name,
            turn: turn,
            effect: effect,
        });
        // {
        //     id: 9999,
        //     name: '好印象効果',
        //     description: '',
        //     value: 1,
        //     type: 'buff',
        //     activate_timing: 'end_turn',
        //     condition: '',
        //     effects: [
        //         { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] }, 
        //     ],
        //     is_reduce_turnend: false,
        // },
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
        // valueStackは回数を減らします
        const status = this.#get(name);
        if (status.valueStack) {
            //for (let i = 0; i < status.valueStack.length; i++) {
                const item = status.valueStack[0];
                item.value--;
                if (item.value <= 0) {
                    status.valueStack.splice(0, 1);
                    // i--;
                }
            //}
        } else {
            status.value -= value;
            if (status.value < 0) {
                status.value = 0;
            }
        }
    }

    getByTiming (timing) {
        // const result = [];
        // for (const name of this.#names_activate_in_useCard) {
        //     const status = this.#get(name);
        //     if (status.value == 0) continue;
        //     result.push(status);
        // }
        const result = this.#status.filter(item=>item.value>0 && item.activate_timing==timing);
        return result;
    }

    getDelayEffects(turn) {
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
}