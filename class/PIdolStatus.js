import { deep_copy } from "../util/utility.js";

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
        name: '消費体力軽減',
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
        activate_condition: null, //'cardType==active'
        is_reduce_turnend: false,
    },
    {
        id: 502,
        name: 'アクティブスキルカード使用時集中+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: null, //'cardType==active'
        is_reduce_turnend: false,
    },
    {
        id: 503,
        name: 'メンタルスキルカード使用時好印象+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: null, //'cardType==mental'
        is_reduce_turnend: false,
    },
    {
        id: 504,
        name: 'メンタルスキルカード使用時やる気+1',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'usecard',
        activate_condition: null, //'cardType==mental'
        is_reduce_turnend: false,
    },


    {
        id: 701,
        name: 'Nターン後ドロー',
        description: '',
        value: null,
        delayEffectStack: [],
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: false,
    },

    {
        id: 703,
        name: 'Nターン後、手札強化',
        description: '',
        value: null,
        delayEffectStack: [],
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
        is_reduce_turnend: false,
    },

    {
        id: 801,
        name: 'Nターン後、パラメータ',
        description: '',
        value: null,
        delayEffectStack: [],
        type: 'buff',
        activate_timing: null,
        activate_condition: null,
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
        is_reduce_turnend: false,
    },
    {
        id: 1102,
        name: 'ターン終了時、好印象が3以上の場合、好印象+3',
        description: '',
        value: 0,
        type: 'buff',
        activate_timing: 'turnend',
        activate_condition: '集中>=3',
        is_reduce_turnend: false,
    },


];

export class PIdolStatus {

    #status;
    #index_name_to_idx;
    #reduceInTurnendKeys;
    #currentTurnFirstAdds;
    #debuffKeys;

    constructor () {
        // 違法増築の繰り返しなので
        // 多分ステータスの効果自体をDataで定義して使った方がいい
        // this.#status = {
        //     '集中': 0,
        //     '好調': 0,
        //     '絶好調': 0,
        //     'やる気': 0,
        //     '好印象': 0,
        //     '消費体力減少': 0, 
        //     '消費体力軽減': 0,
        //     '消費体力増加': 0,
        //     '元気増加無効': 0,
        //     '低下状態無効': 0,
        //     '使用したスキルカード数': 0,
        //     'スキルカード使用数追加': 0,
        //     'ターン終了時、好印象+1': 0,

        //     'アクティブスキルカード使用時固定元気+2': 0,
        //     'アクティブスキルカード使用時集中+1': 0,
        //     'メンタルスキルカード使用時好印象+1': 0,
        //     'メンタルスキルカード使用時やる気+1': 0,
        //     'ターン終了時、集中が3以上の場合、集中+2': 0,
        //     'ターン終了時、好印象が3以上の場合、好印象+3': 0, 
        //     '次に使用するスキルカードの効果を発動': 0,
        // };

        this.#status = deep_copy(statusList);
        
        this.#index_name_to_idx = {};
        for (let i = 0; i < this.#status.length; i++) {
            this.#index_name_to_idx[this.#status[i].name] = i;
        }

        this.#reduceInTurnendKeys = this.#status.filter(item=>item.is_reduce_turnend).map(item=>item.name);
        //['好調', '絶好調', '好印象', '消費体力減少', '消費体力増加', '元気増加無効'];
    }

    reduceInTurnend ()  {
        for (const key of this.#reduceInTurnendKeys) {
            if (this.#status[this.#index_name_to_idx[key]].value <= 0) continue;
            if (this.#status[this.#index_name_to_idx[key]].firstAdded) {
                this.#status[this.#index_name_to_idx[key]].firstAdded = false;
                continue;
            }
            this.reduce(key, 1);
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
        return status.value;
    }

    getDelayEffectStack (name) {
        const status = this.#get(name);
        return status.delayEffectStack;
    }

    getAll () {
        console.log(Object.fromEntries(this.#status.map(item => [item.name, item.value])));
        return Object.fromEntries(this.#status.map(item => [item.name, item.value]))
    }

    add (name, value) {
        const status = this.#get(name);
        if (status.value == 0) {
            status.firstAdded = true;
        }
        status.value += value;
    }

    addDelayEffectStack (name, value, turn) {
        const status = this.#get(name);
        status.delayEffectStack.push({ 'turn': turn, 'value': value });
    }

    reduce (name, value) {
        const status = this.#get(name);
        status.value -= value;
        if (status.value < 0) {
            status.value = 0;
        }
    }
}