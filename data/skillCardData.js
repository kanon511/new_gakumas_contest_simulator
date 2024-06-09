export const skillCardData = [
    {
        id: 0,
        name: 'アピールの基本',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
        ],
        afterUse: null,
    },
    {
        id: 1,
        name: 'ポーズの基本',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
            { type: 'block', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 2,
        name: '挑戦',
        type: 'active',
        cost: { type: 'normal', value: 7 },
        condition: 'koucho>0',
        effects: [
            { type: 'score', value: 25 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3,
        name: '試行錯誤',
        type: 'active',
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: 'score', value: 8 },
            { type: 'score', value: 8 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4,
        name: '可愛い仕草',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'favorable', value: 2 },
            { type: 'score', value: null, options: [{ type: 'favorable', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 5,
        name: '気分転換',
        type: 'active',
        cost: { type: 'direct', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 6,
        name: '表現の基本',
        type: 'mental',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 7,
        name: '振る舞いの基本',
        type: 'mental',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'goodCondition', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 8,
        name: '表情の基本',
        type: 'mental',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'concentration', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 9,
        name: '目線の基本',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'favorable', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 10,
        name: '意識の基本',
        type: 'mental',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'motivation', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 11,
        name: '眠気',
        type: 'trouble',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 9999,
        name: 'template',
        type: 'active',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
        ],
        afterUse: null
    },
    
];