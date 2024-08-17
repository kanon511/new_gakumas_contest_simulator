/**
 * 応援トラブル(仮)
 */
const data = [
    {
        id: -1,
        schedule: [
            {
                turn: 1,
                condition: 'hpPer>50',
                effects: [
                    { type: 'status', target: '好印象', value: 1000 }
                ],
            },
        ],
    },
];

class SupportTrouble {
    
    #scheduleMap = new Map();

    constructor (data) {
        data.schedule.forEach(item => this.#scheduleMap.set(item.turn, item));
    }

    getByTurn (turn) {
        return this.#scheduleMap.get(turn);
    }

}

export class SupportTroubleData {

    // property
    static #data = data;
    static #index = Object.fromEntries(this.#data.map((item, i) => [item.id, i]));

    // method
    static getById (id) {
        if (!(id in this.#index)) {
            throw new Error(`${id}の応援/トラブルは未実装です。`);
        }
        return new SupportTrouble(this.#data[this.#index[id]]);
    }

}