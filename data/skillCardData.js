/**
 * IDの付け方
 * 0_0_0000_0
 * レアレティ：基本(トラブル含む)1, 白2, 金3, 虹4
 * タイプ　　：一般スキル0, トラブル1, キャラ固有2, サポ固有3
 * 固有番号　：4桁番号
 * 強化　　　：強化前0, 強化後1
 */

export const skillCardData = [
    {
        id: 1000010,
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
        id: 1000020,
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
        id: 1000030,
        name: '挑戦',
        type: 'active',
        cost: { type: 'normal', value: 7 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 25 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000040,
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
        id: 1000050,
        name: '可愛い仕草',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 2 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000060,
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
        id: 1000070,
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
        id: 1000080,
        name: '振る舞いの基本',
        type: 'mental',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好調', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1000090,
        name: '表情の基本',
        type: 'mental',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '集中', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1000100,
        name: '目線の基本',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好印象', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1000110,
        name: '意識の基本',
        type: 'mental',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'やる気', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1100120,
        name: '眠気',
        type: 'trouble',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000130,
        name: '軽い足取り',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '好調', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000140,
        name: '愛嬌',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 13 },
        ],
        afterUse: null
    },
    {
        id: 2000150,
        name: '準備運動',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '集中', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 2000160,
        name: 'ファンサ',
        type: 'active',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
        ],
        afterUse: null
    },
    {
        id: 2000170,
        name: '勢い任せ',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '集中', value: 3, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2000180,
        name: 'ハイタッチ',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 17, options: [{ type: '集中', value: 1.5 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000190,
        name: 'トークタイム',
        type: 'active',
        cost: { type: 'normal', value: 6 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 27 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000190,
        name: '今日もおはよう',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 7 },
            { type: '好印象', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000200,
        name: 'ゆるふわおしゃべり',
        type: 'active',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 60 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000210,
        name: 'もう少しだけ',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000220,
        name: '手拍子',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 150 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000230,
        name: '元気な挨拶',
        type: 'active',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 110 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000240,
        name: '気合十分',
        type: 'mental',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '消費体力減少', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 2000250,
        name: 'ファーストステップ',
        type: 'mental',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '消費体力軽減', value: 1, condition: 'hpPer>=50' },
        ],
        afterUse: null
    },
    {
        id: 2000260,
        name: 'バランス感覚',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '集中', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000270,
        name: '楽観的',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好調', value: 3 },
            { type: '集中', value: 1, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2000280,
        name: '深呼吸',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '集中', value: 2 },
            { type: '好調', value: 3, condition: '集中>=3' },
        ],
        afterUse: null
    },
    {
        id: 2000290,
        name: 'リスタート',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '好印象', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000300,
        name: 'えいえいおー',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000310,
        name: 'リズミカル',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000320,
        name: '思い出し笑い',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 },
            { type: 'やる気', value: 2, condition: '好印象>=3' },
        ],
        afterUse: null
    },
    {
        id: 2000330,
        name: 'パステル気分',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 5 },
            { type: '好印象', value: 3, condition: 'やる気>=3' },
        ],
        afterUse: null
    },
    {
        id: 2000330,
        name: '励まし',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'やる気', value: 3 },
            { type: '好印象', value: 4, condition: 'やる気>=6' },
        ],
        afterUse: null
    },
    {
        id: 2200010,
        name: '新進気鋭',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 17 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2200020,
        name: '意地っ張り',
        type: 'active',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 7 },
            { type: '集中', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2200030,
        name: 'リトル・プリンス',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 8 },
            { type: 'score', value: 3, condition: '好調>0' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2200040,
        name: '包容力',
        type: 'active',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
            { type: 'block', value: 1 },
            { type: 'heal', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2200050,
        name: 'フレンドリー',
        type: 'active',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
            { type: 'score', value: 10, condition: '集中>6' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2200060,
        name: 'アルバイター',
        type: 'active',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
            { type: '好印象', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2200070,
        name: '超高学歴アイドル',
        type: 'mental',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'block', value: 3, condition: 'やる気>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2200080,
        name: '内気系少女',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 1 },
            { type: 'ターン終了時好印象', value: 1},
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2200090,
        name: '元気いっぱい',
        type: 'active',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'score', value: null, options: [{ type: 'block', value: 50 }] },
            { type: 'やる気', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2200100,
        name: '未完の大器',
        type: 'mental',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2, options: [{ type: '使用したスキルカード数', value: 3 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 3000010,
        name: '前途洋々',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 8 },
            { type: 'block', value: 7 },
        ],
        afterUse: null,
    },
    {
        id: 3000020,
        name: '決めポーズ',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 18 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000030,
        name: 'アドリブ',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 5 },
            { type: '好調', value: 3 },
        ],
        afterUse: null,
    },
    {
        id: 3000040,
        name: '情熱ターン',
        type: 'active',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 11 },
            { type: '集中', value: 3 },
        ],
        afterUse: null,
    },
    {
        id: 3000050,
        name: '飛躍',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 13 },
            { type: 'score', value: 15, condition: '集中>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 2000120,
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