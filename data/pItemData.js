export const pItemData = [
    {
        id: 0,
        name: '初星バッチ（赤）',
        condition: 'phase==startofturn&&turn==8',
        effects: [
            { type: 'score', value: 15 },
            { type: 'block', value: 15 },
        ],
        limit: 1,
    },
    {
        id: 1,
        name: '自分を守るイヤホン',
        condition: 'phase==useSkill&&concentration>=5',
        effects: [
            { type: 'skilladd', value: 1 },
            { type: 'concentration', value: 1 },
        ],
        limit: 1,
    },
    {
        id: 2,
        name: '天川ラーメン巡り',
        condition: 'phase==startofturn&&turnType==vocal',
        effects: [
            { type: 'skilladd', value: 1 },
        ],
        limit: 1,
    },
];