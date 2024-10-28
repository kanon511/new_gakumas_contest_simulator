/**
 * IDの付け方
 * 1_xxx_x_x
 * 1_期数_场地_轮数
 * 
 * 実装：
 */
const contestData = [
    {
        id: 1,
        name: '第1期公会战', 
        stages: [
            {
                name: 'A场',
                criteria: { 'vocal': 15, 'dance': 35, 'visual': 50 },
                rank: {'vocal': 3, 'dance': 2, 'visual': 1},
                turn: 10,
                stageEffectsPItemIds: [5000111, 5000112],
                stagePItemIds: [4241022],
                plan: 'sense',
                turnTypes: [2, 3, 5],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
            {
                name: 'B场',
                criteria: { 'vocal': 35, 'dance': 30, 'visual': 35 },
                rank: {'vocal': 1, 'dance': 3, 'visual': 2},
                turn: 12,
                stageEffectsPItemIds: [5000121, 5000122],
                stagePItemIds: [4240722],
                plan: 'sense',
                turnTypes: [5, 3, 4],
                firstTurn: {'vocal': 0, 'dance': 80, 'visual': 20},
            },
            {
                name: 'C场',
                criteria: { 'vocal': 10, 'dance': 45, 'visual': 45 },
                rank: {'vocal': 3, 'dance': 1, 'visual': 2},
                turn: 10,
                stageEffectsPItemIds: [5000131, 5000132],
                stagePItemIds: [4240812],
                plan: 'sense',
                turnTypes: [2, 5, 3],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
            {
                name: 'D场',
                criteria: { 'vocal': 35, 'dance': 30, 'visual': 35 },
                rank: {'vocal': 1, 'dance': 3, 'visual': 2},
                turn: 12,
                stageEffectsPItemIds: [5000141, 5000142],
                stagePItemIds: [4240723],
                plan: 'logic',
                turnTypes: [5, 3, 4],
                firstTurn: {'vocal': 0, 'dance': 80, 'visual': 20},
            },
            {
                name: 'E场',
                criteria: { 'vocal': 10, 'dance': 45, 'visual': 45 },
                rank: {'vocal': 3, 'dance': 1, 'visual': 2},
                turn: 12,
                stageEffectsPItemIds: [5000151, 5000152],
                stagePItemIds: [4240813],
                plan: 'logic',
                turnTypes: [2, 6, 4],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
        ],
    },
]; 

export class ContestData {
    
    // property
    static #contestData = contestData;
    static #index = Object.fromEntries(this.#contestData.map((item, i) => [item.id, i]));

    // method

    /**
     * IDと一致するコンテストオブジェクトを返します
     * @param {Number} id - コンテストID 
     * @returns {Object} コンテストオブジェクト
     */
    static getById (id) {
        if (!(id in this.#index)) {
            throw new Error('idと一致するコンテストがありません。');
        }
        return this.#contestData[this.#index[id]];
    }

    static has (id) {
        return id in this.#index;
    }

    /**
     * コンテストオブジェクトを返します※非推奨
     * @returns {Array<Object>} コンテストオブジェクトリスト
     */
    static getAll () {
        return this.#contestData;
    }

}