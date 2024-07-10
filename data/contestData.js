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
        name: '第１回（5月16日～）', 
        criteria: { 'vocal': 40, 'dance': 27, 'visual': 33 },
        stages: [
            {
                name: 'ステージ1',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240511],
                plan: 'free',
            },
            {
                name: 'ステージ2',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240512],
                plan: 'sense',
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240513],
                plan: 'logic',
            },
        ],
    },
    // {
    //     id: 240602,
    //     criteria: { 'vocal': 33, 'dance': 40, 'visual': 27 },
    //     stages: [
    //         {
    //             name: 'ステージ1',
    //             turn: 12,
    //             stageEffects: [],
    //             stagePItemIds: [],
    //             plan: '',
    //         },
    //         {
    //             name: 'ステージ2',
    //             turn: 12,
    //             stageEffects: [],
    //             stagePItemIds: [],
    //             plan: '',
    //         },
    //         {
    //             name: 'ステージ3',
    //             turn: 10,
    //             stageEffects: [],
    //             stagePItemIds: [],
    //             plan: '',
    //         },
    //     ],
    // },
    // {
    //     id: 240617,
    //     criteria: { 'vocal': 27, 'dance': 33, 'visual': 40 },
    //     stages: [
    //         {
    //             name: 'ステージ1',
    //             turn: 10,
    //             stageEffects: [],
    //             stagePItemIds: [],
    //             plan: '',
    //         },
    //         {
    //             name: 'ステージ2',
    //             turn: 8,
    //             stageEffects: [],
    //             stagePItemIds: [],
    //             plan: '',
    //         },
    //         {
    //             name: 'ステージ3',
    //             turn: 8,
    //             stageEffects: [],
    //             stagePItemIds: [],
    //             plan: '',
    //         },
    //     ],
    // },
    // {
    //     id: 240703,
    //     criteria: { 'vocal': 15, 'dance': 45, 'visual': 40 },
    //     stages: [
    //         {
    //             name: 'ステージ1',
    //             turn: 10,
    //             stageEffects: [],
    //             stagePItemIds: [],
    //             plan: '',
    //         },
    //         {
    //             name: 'ステージ2',
    //             turn: 10,
    //             stageEffects: [],
    //             stagePItemIds: [],
    //             plan: '',
    //         },
    //         {
    //             name: 'ステージ3',
    //             turn: 8,
    //             stageEffects: [],
    //             stagePItemIds: [],
    //             plan: '',
    //         },
    //     ],
    // },
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