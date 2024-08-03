/**
 * IDの付け方
 * 00_00_00
 * 年_月_日
 * 
 * 実装：
 */
const contestData = [
    {
        id: 240516,
        name: '第１回（05月16日～）', 
        criteria: { 'vocal': 40, 'dance': 27, 'visual': 33 },
        stages: [
            {
                name: 'ステージ1',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240511],
                plan: 'free',
                turnTypes: [5, 3, 4],
            },
            {
                name: 'ステージ2',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240512],
                plan: 'sense',
                turnTypes: [4, 2, 2],
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240513],
                plan: 'logic',
                turnTypes: [4, 2, 2],
            },
        ],
    },
    {
        id: 240602,
        name: '第２回（06月02日～）', 
        criteria: { 'vocal': 33, 'dance': 40, 'visual': 27 },
        stages: [
            {
                name: 'ステージ1',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240511],
                plan: 'free',
                turnTypes: [4, 5, 3],
            },
            {
                name: 'ステージ2',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240612],
                plan: 'sense',
                turnTypes: [4, 5, 3],
            },
            {
                name: 'ステージ3',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240613],
                plan: 'logic',
                turnTypes: [3, 5, 2],
            },
        ],
    },
    {
        id: 240617,
        name: '第３回（06月17日～）', 
        criteria: { 'vocal': 27, 'dance': 33, 'visual': 40 },
        stages: [
            {
                name: 'ステージ1',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240621],
                plan: 'sense',
                turnTypes: [2, 3, 5],
            },
            {
                name: 'ステージ2',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240622],
                plan: 'logic',
                turnTypes: [2, 2, 4],
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240623],
                plan: 'logic',
                turnTypes: [2, 2, 4],
            },
        ],
    },
    {
        id: 240703,
        name: '第４回（07月03日～）', 
        criteria: { 'vocal': 15, 'dance': 45, 'visual': 40 },
        stages: [
            {
                name: 'ステージ1',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240711],
                plan: 'sense',
                turnTypes: [2, 5, 3],
            },
            {
                name: 'ステージ2',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240612],
                plan: 'sense',
                turnTypes: [2, 5, 3],
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240713],
                plan: 'logic',
                turnTypes: [2, 4, 2],
            },
        ],
    },
    {
        id: 240719,
        name: '第５回（07月19日～）', 
        criteria: { 'vocal': 35, 'dance': 30, 'visual': 35 },
        stages: [
            {
                name: 'ステージ1',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240711],
                plan: 'sense',
                turnTypes: [4, 3, 3],
            },
            {
                name: 'ステージ2',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240722],
                plan: 'sense',
                turnTypes: [5, 3, 4],
            },
            {
                name: 'ステージ3',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240723],
                plan: 'logic',
                turnTypes: [5, 3, 4],
            },
        ],
    },
    {
        id: 240804,
        name: '第６回（08月04日～）', 
        criteria: { 'vocal': 10, 'dance': 45, 'visual': 45 },
        stages: [
            {
                name: 'ステージ1',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240811],
                plan: 'free',
                turnTypes: [1, 4, 3],
            },
            {
                name: 'ステージ2',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240812],
                plan: 'sense',
                turnTypes: [2, 5, 3],
            },
            {
                name: 'ステージ3',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240813],
                plan: 'logic',
                turnTypes: [2, 6, 4],
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

    /**
     * コンテストオブジェクトを返します※非推奨
     * @returns {Array<Object>} コンテストオブジェクトリスト
     */
    static getAll () {
        return this.#contestData;
    }

}