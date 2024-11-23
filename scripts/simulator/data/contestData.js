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
        name: '第1期コンテスト', 
        period: '2024/05/16 - 05/31',
        criteria: { 'vocal': 40, 'dance': 27, 'visual': 33 },
        rank: {'vocal': 1, 'dance': 3, 'visual': 2},
        stages: [
            {
                name: 'ステージ1',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240511],
                plan: 'free',
                turnTypes: [5, 3, 4],
                firstTurn: {'vocal': 100, 'dance': 0, 'visual': 0},
            },
            {
                name: 'ステージ2',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240512],
                plan: 'sense',
                turnTypes: [4, 2, 2],
                firstTurn: {'vocal': 100, 'dance': 0, 'visual': 0},
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240513],
                plan: 'logic',
                turnTypes: [4, 2, 2],
                firstTurn: {'vocal': 100, 'dance': 0, 'visual': 0},
            },
        ],
    },
    {
        id: 240602,
        name: '第2期コンテスト', 
        period: '2024/06/02 - 06/16',
        criteria: { 'vocal': 33, 'dance': 40, 'visual': 27 },
        rank: {'vocal': 2, 'dance': 1, 'visual': 3},
        stages: [
            {
                name: 'ステージ1',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240511],
                plan: 'free',
                turnTypes: [4, 5, 3],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
            {
                name: 'ステージ2',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240612],
                plan: 'sense',
                turnTypes: [4, 5, 3],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
            {
                name: 'ステージ3',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240613],
                plan: 'logic',
                turnTypes: [3, 5, 2],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
        ],
    },
    {
        id: 240617,
        name: '第3期コンテスト', 
        period: '2024/06/17 - 07/01',
        criteria: { 'vocal': 27, 'dance': 33, 'visual': 40 },
        rank: {'vocal': 3, 'dance': 2, 'visual': 1},
        stages: [
            {
                name: 'ステージ1',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240621],
                plan: 'sense',
                turnTypes: [2, 3, 5],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
            {
                name: 'ステージ2',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240622],
                plan: 'logic',
                turnTypes: [2, 2, 4],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240623],
                plan: 'logic',
                turnTypes: [2, 2, 4],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
        ],
    },
    {
        id: 240703,
        name: '第4期コンテスト', 
        period: '2024/07/03 - 07/18',
        criteria: { 'vocal': 15, 'dance': 45, 'visual': 40 },
        rank: {'vocal': 3, 'dance': 1, 'visual': 2},
        stages: [
            {
                name: 'ステージ1',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240711],
                plan: 'sense',
                turnTypes: [2, 5, 3],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
            {
                name: 'ステージ2',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240612],
                plan: 'sense',
                turnTypes: [2, 5, 3],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240713],
                plan: 'logic',
                turnTypes: [2, 4, 2],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
        ],
    },
    {
        id: 240719,
        name: '第5期コンテスト', 
        period: '2024/07/19 - 08/03',
        criteria: { 'vocal': 35, 'dance': 30, 'visual': 35 },
        rank: {'vocal': 1, 'dance': 3, 'visual': 2},
        stages: [
            {
                name: 'ステージ1',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240711],
                plan: 'sense',
                turnTypes: [4, 3, 3],
                firstTurn: {'vocal': 0, 'dance': 80, 'visual': 20},
            },
            {
                name: 'ステージ2',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240722],
                plan: 'sense',
                turnTypes: [5, 3, 4],
                firstTurn: {'vocal': 0, 'dance': 80, 'visual': 20},
            },
            {
                name: 'ステージ3',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240723],
                plan: 'logic',
                turnTypes: [5, 3, 4],
                firstTurn: {'vocal': 0, 'dance': 80, 'visual': 20},
            },
        ],
    },
    {
        id: 240804,
        name: '第6期コンテスト', 
        period: '2024/08/04 - 08/20',
        criteria: { 'vocal': 10, 'dance': 45, 'visual': 45 },
        rank: {'vocal': 3, 'dance': 1, 'visual': 2},
        stages: [
            {
                name: 'ステージ1',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240811],
                plan: 'free',
                turnTypes: [1, 4, 3],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
            {
                name: 'ステージ2',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4240812],
                plan: 'sense',
                turnTypes: [2, 5, 3],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
            {
                name: 'ステージ3',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240813],
                plan: 'logic',
                turnTypes: [2, 6, 4],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
        ],
    },
    {
        id: 240822,
        name: '第7期コンテスト', 
        period: '2024/08/22 - ----',
        criteria: { 'vocal': 15, 'dance': 50, 'visual': 35 },
        rank: {'vocal': 3, 'dance': 1, 'visual': 2},
        stages: [
            {
                name: 'ステージ1',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240821],
                plan: 'free',
                turnTypes: [2, 6, 4],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
            {
                name: 'ステージ2',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240822],
                plan: 'sense',
                turnTypes: [2, 6, 4],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
            {
                name: 'ステージ3',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240813],
                plan: 'logic',
                turnTypes: [2, 6, 4],
                firstTurn: {'vocal': 0, 'dance': 100, 'visual': 0},
            },
        ],
    },
    {
        id: 240906,
        name: '第8期コンテスト', 
        period: '2024/08/22 - ----',
        criteria: { 'vocal': 15, 'dance': 40, 'visual': 45 },
        rank: {'vocal': 3, 'dance': 2, 'visual': 1},
        stages: [
            {
                name: 'ステージ1',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240911],
                plan: 'free',
                turnTypes: [2, 2, 4],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
            {
                name: 'ステージ2',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240912],
                plan: 'sense',
                turnTypes: [2, 4, 6],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240913],
                plan: 'logic',
                turnTypes: [2, 2, 4],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
        ],
    },
    {
        id: 240923,
        name: '第9期コンテスト', 
        period: '2024/08/22 - ----',
        criteria: { 'vocal': 40, 'dance': 30, 'visual': 30 },
        rank: {'vocal': 1, 'dance': 2, 'visual': 2},
        stages: [
            {
                name: 'ステージ1',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240921],
                plan: 'free',
                turnTypes: [5, 3, 4],
                firstTurn: {'vocal': 85, 'dance': 15, 'visual': 0},
            },
            {
                name: 'ステージ2',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240922],
                plan: 'logic',
                turnTypes: [5, 3, 4],
                firstTurn: {'vocal': 85, 'dance': 15, 'visual': 0},
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4240923],
                plan: 'logic',
                turnTypes: [3, 3, 2],
                firstTurn: {'vocal': 82, 'dance': 18, 'visual': 0},
            },
        ],
    },
    {
        id: 241008,
        name: '第10期コンテスト', 
        period: '2024/08/22 - ----',
        criteria: { 'vocal': 50, 'dance': 40, 'visual': 10 },
        rank: {'vocal': 1, 'dance': 2, 'visual': 3},
        stages: [
            {
                name: 'ステージ1',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4241011],
                plan: 'free',
                turnTypes: [5, 3, 2],
                firstTurn: {'vocal': 100, 'dance': 0, 'visual': 0},
            },
            {
                name: 'ステージ2',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4241012],
                plan: 'sense',
                turnTypes: [6, 4, 2],
                firstTurn: {'vocal': 100, 'dance': 0, 'visual': 0},
            },
            {
                name: 'ステージ3',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4241013],
                plan: 'logic',
                turnTypes: [4, 3, 1],
                firstTurn: {'vocal': 100, 'dance': 0, 'visual': 0},
            },
        ],
    },
    {
        id: 241023,
        name: '第11期コンテスト', 
        period: '2024/08/22 - ----',
        criteria: { 'vocal': 15, 'dance': 35, 'visual': 50 },
        rank: {'vocal': 3, 'dance': 2, 'visual': 1},
        stages: [
            {
                name: 'ステージ1',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4241021],
                plan: 'free',
                turnTypes: [2, 3, 5],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
            {
                name: 'ステージ2',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4241022],
                plan: 'sense',
                turnTypes: [2, 3, 5],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
            {
                name: 'ステージ3',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4240813],
                plan: 'logic',
                turnTypes: [2, 4, 6],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
        ],
    },
    {
        id: 241108,
        name: '第12期コンテスト', 
        period: '2024/08/22 - ----',
        criteria: { 'vocal': 35, 'dance': 15, 'visual': 50 },
        rank: {'vocal': 2, 'dance': 3, 'visual': 1},
        stages: [
            {
                name: 'ステージ1',
                turn: 6,
                stageEffects: [],
                stagePItemIds: [4241111],
                plan: 'free',
                turnTypes: [2, 1, 3],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
            {
                name: 'ステージ2',
                turn: 8,
                stageEffects: [],
                stagePItemIds: [4241112],
                plan: 'free',
                turnTypes: [2, 2, 4],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
            {
                name: 'ステージ3',
                turn: 10,
                stageEffects: [],
                stagePItemIds: [4241022],
                plan: 'sense',
                turnTypes: [3, 2, 5],
                firstTurn: {'vocal': 0, 'dance': 0, 'visual': 100},
            },
        ],
    },
    {
        id: 241124,
        name: '第13期', 
        period: '2024/11/24 - ----',
        criteria: { 'vocal': 35, 'dance': 35, 'visual': 30 },
        rank: {'vocal': 1, 'dance': 2, 'visual': 3},
        stages: [
            {
                name: 'ステージ1',
                turn: 6,
                stageEffects: [],
                stagePItemIds: [4241111],
                plan: 'free',
                turnTypes: [3, 2, 1],
                firstTurn: {'vocal': 100, 'dance': 0, 'visual': 0},
            },
            {
                name: 'ステージ2',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4241122],
                plan: 'sense',
                turnTypes: [5, 4, 3],
                firstTurn: {'vocal': 88, 'dance': 12, 'visual': 0},
            },
            {
                name: 'ステージ3',
                turn: 12,
                stageEffects: [],
                stagePItemIds: [4241123],
                plan: 'logic',
                turnTypes: [5, 4, 3],
                firstTurn: {'vocal': 88, 'dance': 12, 'visual': 0},
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