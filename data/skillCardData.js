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
        plan: 'free',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
        ],
        afterUse: null,
    },
    {
        id: 1000011,
        name: 'アピールの基本+',
        type: 'active',
        plan: 'free', 
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 14 },
        ],
        afterUse: null,
    },
    {
        id: 1000020,
        name: 'ポーズの基本',
        type: 'active',
        plan: 'free', 
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
            { type: 'block', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 1000021,
        name: 'ポーズの基本+',
        type: 'active',
        plan: 'free', 
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: 'block', value: 4 },
        ],
        afterUse: null,
    },
    {
        id: 1000030,
        name: '挑戦',
        type: 'active',
        plan: 'sense', 
        cost: { type: 'normal', value: 7 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 25 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000031,
        name: '挑戦+',
        type: 'active',
        plan: 'sense', 
        cost: { type: 'normal', value: 7 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 37 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000040,
        name: '試行錯誤',
        type: 'active',
        plan: 'sense', 
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: 'score', value: 8 },
            { type: 'score', value: 8 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000041,
        name: '試行錯誤+',
        type: 'active',
        plan: 'sense', 
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
            { type: 'score', value: 10 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000050,
        name: '可愛い仕草',
        type: 'active',
        plan: 'logic', 
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 2 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000051,
        name: '可愛い仕草+',
        type: 'active',
        plan: 'logic', 
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 120 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000060,
        name: '気分転換',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000061,
        name: '気分転換+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 110 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1000070,
        name: '表現の基本',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 1000071,
        name: '表現の基本+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 7 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 1000080,
        name: '振る舞いの基本',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好調', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1000081,
        name: '振る舞いの基本+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好調', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 1000090,
        name: '表情の基本',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '集中', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1000091,
        name: '表情の基本+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '集中', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 1000100,
        name: '目線の基本',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好印象', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1000101,
        name: '目線の基本+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '好印象', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 1000110,
        name: '意識の基本',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'やる気', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1000111,
        name: '意識の基本+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 1100120,
        name: '眠気',
        type: 'trouble',
        plan: 'free',
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
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '好調', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 2000131,
        name: '軽い足取り+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
            { type: '好調', value: 3 },
        ],
        afterUse: null,
    },
    {
        id: 2000140,
        name: '愛嬌',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 13 },
        ],
        afterUse: null
    },
    {
        id: 2000141,
        name: '愛嬌+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 21 },
        ],
        afterUse: null
    },
    {
        id: 2000150,
        name: '準備運動',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '集中', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 2000151,
        name: '準備運動+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
            { type: '集中', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000160,
        name: 'ファンサ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
        ],
        afterUse: null
    },
    {
        id: 2000161,
        name: 'ファンサ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: 16 },
        ],
        afterUse: null
    },
    {
        id: 2000170,
        name: '勢い任せ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '集中', value: 3, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2000171,
        name: '勢い任せ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
            { type: '集中', value: 4, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2000180,
        name: 'ハイタッチ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 17, options: [{ type: '集中', value: 1.5 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000181,
        name: 'ハイタッチ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 23, options: [{ type: '集中', value: 2 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000190,
        name: 'トークタイム',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 27 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000191,
        name: 'トークタイム+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 38 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000190,
        name: '今日もおはよう',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 7 },
            { type: '好印象', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000191,
        name: '今日もおはよう+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
            { type: '好印象', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2000200,
        name: 'ゆるふわおしゃべり',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 3 },
            { type: 'score', value: null, options: [{ type: 'block', value: 60 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000201,
        name: 'ゆるふわおしゃべり+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 4 },
            { type: 'score', value: null, options: [{ type: 'block', value: 80 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000210,
        name: 'もう少しだけ',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000211,
        name: 'もう少しだけ+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 15 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2000220,
        name: '手拍子',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 150 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000221,
        name: '手拍子+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 200 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000230,
        name: '元気な挨拶',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 110 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000231,
        name: '元気な挨拶+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 120 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000240,
        name: '気合十分',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '消費体力減少', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 2000241,
        name: '気合十分+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '消費体力減少', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000250,
        name: 'ファーストステップ',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '消費体力軽減', value: 1, condition: 'hpPer>=50' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000251,
        name: 'ファーストステップ+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '消費体力軽減', value: 1, condition: 'hpPer>=50' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000260,
        name: 'バランス感覚',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '集中', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000261,
        name: 'バランス感覚+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '集中', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2000270,
        name: '楽観的',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好調', value: 3 },
            { type: '集中', value: 1, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2000271,
        name: '楽観的+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好調', value: 4 },
            { type: '集中', value: 1, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2000280,
        name: '深呼吸',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '集中', value: 2 },
            { type: '好調', value: 3, condition: '集中>=3' },
        ],
        afterUse: null
    },
    {
        id: 2000281,
        name: '深呼吸+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '集中', value: 3 },
            { type: '好調', value: 3, condition: '集中>=3' },
        ],
        afterUse: null
    },
    {
        id: 2000290,
        name: 'リスタート',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '好印象', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000291,
        name: 'リスタート+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '好印象', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2000300,
        name: 'えいえいおー',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2000301,
        name: 'えいえいおー+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2000310,
        name: 'リズミカル',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000311,
        name: 'リズミカル+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 8 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2000320,
        name: '思い出し笑い',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 },
            { type: 'やる気', value: 2, condition: '好印象>=3' },
        ],
        afterUse: null
    },
    {
        id: 2000321,
        name: '思い出し笑い+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好印象', value: 4 },
            { type: 'やる気', value: 3, condition: '好印象>=3' },
        ],
        afterUse: null
    },
    {
        id: 2000330,
        name: 'パステル気分',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 5 },
            { type: '好印象', value: 3, condition: 'やる気>=3' },
        ],
        afterUse: null
    },
    {
        id: 2000331,
        name: 'パステル気分+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 7 },
            { type: '好印象', value: 4, condition: 'やる気>=3' },
        ],
        afterUse: null
    },
    {
        id: 2000330,
        name: '励まし',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 3 },
            { type: '好印象', value: 4, condition: 'やる気>=6' },
        ],
        afterUse: null
    },
    {
        id: 2000331,
        name: '励まし+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 4 },
            { type: '好印象', value: 5, condition: 'やる気>=6' },
        ],
        afterUse: null
    },
    {
        id: 2201010,
        name: '新進気鋭',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 17 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2201011,
        name: '新進気鋭+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 25 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2202010,
        name: '意地っ張り',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 7 },
            { type: '集中', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2202011,
        name: '意地っ張り+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 7 },
            { type: '集中', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2203010,
        name: 'アルバイター',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
            { type: '好印象', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2203011,
        name: 'アルバイター+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '好印象', value: 6 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2204010,
        name: 'リトル・プリンス',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 8 },
            { type: 'score', value: 3, condition: '好調>0' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2204011,
        name: 'リトル・プリンス+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 13 },
            { type: 'score', value: 5, condition: '好調>0' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2205010,
        name: '内気系少女',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 1 },
            { type: 'ターン終了時好印象', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2205011,
        name: '内気系少女+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好印象', value: 2 },
            { type: 'ターン終了時好印象', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2206010,
        name: '元気いっぱい',
        type: 'active',
        plan: 'logic',
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
        id: 2206011,
        name: '元気いっぱい+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'score', value: null, options: [{ type: 'block', value: 70 }] },
            { type: 'やる気', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2207010,
        name: 'フレンドリー',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
            { type: 'score', value: 10, condition: '集中>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2207011,
        name: 'フレンドリー+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 12 },
            { type: 'score', value: 12 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2208010,
        name: '超高学歴アイドル',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'block', value: 3, condition: 'やる気>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2208011,
        name: '超高学歴アイドル+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 4 },
            { type: 'block', value: 5, condition: 'やる気>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2209010,
        name: '包容力',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
            { type: 'block', value: 1 },
            { type: '体力回復', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2209011,
        name: '包容力+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 3 },
            { type: 'block', value: 4 },
            { type: '体力回復', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2210010,
        name: '未完の大器',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2, options: [{ type: '使用したスキルカード数', value: 3 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2210011,
        name: '未完の大器+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 4, options: [{ type: '使用したスキルカード数', value: 4 }] },
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
        id: 3000060,
        name: '祝福',
        type: 'active',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 26 },
            { type: '好調', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000070,
        name: 'スタートダッシュ',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 30 },
            { type: 'block', value: 10 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 3000080,
        name: 'スタンドプレー',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 12 },
            { type: 'block', value: 7 },
            { type: '集中', value: 5 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 3000090,
        name: 'シュプレヒコール',
        type: 'active',
        cost: { type: '集中', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '好調', value: 2 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3000100,
        name: 'ラブリーウインク',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 4 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 60 }] },
        ],
        afterUse: null,
    },
    {
        id: 3000110,
        name: 'ありがとうの言葉',
        type: 'active',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 9 },
            { type: 'score', value: null, options: [{ type: 'block', value: 40 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000120,
        name: 'ハートの合図',
        type: 'active',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 130 }] },
            { type: 'ブロック割合減少', value: 50 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000130,
        name: 'キラメキ',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 5 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 200 }] },
            { type: '体力消費増加', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000140,
        name: 'みんな大好き',
        type: 'active',
        cost: { type: 'やる気', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 90 }] },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3000150,
        name: 'アイドル宣言',
        type: 'mental',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 },
            { type: 'ドロー', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000160,
        name: 'ハイテンション',
        type: 'mental',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 11 },
            { type: '元気増加無効', value: 2 },
            { type: '消費体力減少', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000170,
        name: '眼力',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
            { type: '集中', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000180,
        name: '大声援',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
            { type: '好調', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000190,
        name: '演出計画',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '絶好調', value: 3 },
            { type: 'アクティブスキルカード使用時固定元気+2', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000200,
        name: '願いの力',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '集中', value: 2 },
            { type: 'アクティブスキルカード使用時集中+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000210,
        name: '静かな意志',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '集中', value: 3 },
            { type: '好調', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000220,
        name: '始まりの合図',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好調', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000230,
        name: '意地',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '集中', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000240,
        name: '存在感',
        type: 'mental',
        cost: { type: '好調', value: 2 },
        condition: '',
        effects: [
            { type: '集中', value: 4 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3000250,
        name: '成功への道筋',
        type: 'mental',
        cost: { type: '好調', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '集中', value: 7 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000260,
        name: 'あふれる思い出',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: null,
    },
    {
        id: 3000270,
        name: 'ふれあい',
        type: 'mental',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '好印象', value: 4 },
        ],
        afterUse: null,
    },
    {
        id: 3000280,
        name: '幸せな時間',
        type: 'mental',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 6 },
        ],
        afterUse: null,
    },
    {
        id: 3000290,
        name: 'ファンシーチャーム',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 },
            { type: 'メンタルスキルカード使用時好印象+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000300,
        name: 'ワクワクが止まらない',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'やる気', value: 3 },
            { type: 'メンタルスキルカード使用時やる気+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000310,
        name: '本番前夜',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '好印象', value: 4 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000320,
        name: 'ひなたぼっこ',
        type: 'mental',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 11 },
            { type: 'やる気', value: 5 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000330,
        name: 'イメトレ',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 7 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000340,
        name: 'やる気は満点',
        type: 'mental',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好印象', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000350,
        name: 'ゆめみごこち',
        type: 'mental',
        cost: { type: '好印象', value: 2 },
        condition: '',
        effects: [
            { type: 'やる気', value: 4 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3201010,
        name: '一番は譲らない',
        type: 'active',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 18 },
            { type: '好調', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3202010,
        name: 'ローン・ウルフ',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 12 },
            { type: 'score', value: 12, condition: '集中>=3' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3203010,
        name: 'Colorful Cute!',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好印象', value: 6 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3204010,
        name: 'らしさ',
        type: 'active',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 4 },
            { type: '集中', value: 3, condition: '好調>0' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3205010,
        name: '純白の妖精',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 2 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 120 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3206010,
        name: 'いっしょけんめい',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'やる気', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3207010,
        name: '勇気の一歩',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 17, options: [{ type: '集中', value: 2 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3208010,
        name: '苦しいのが好き',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 250 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3209010,
        name: '寄り添う気持ち',
        type: 'mental',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'block', value: 10 },
            { type: '集中', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3210010,
        name: '打倒お姉ちゃん',
        type: 'active',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: 'score', value: null, options: [{ type: 'block', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300010,
        name: 'お姉ちゃんだもの！',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        // condition: 'レッスンCLEAR割合<=100',
        condition: 'score<=1000', // コンテストではこうらしい
        effects: [
            { type: 'score', value: 6 },
            { type: 'block', value: 6 },
            { type: '1ターン後ドロー', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300020,
        name: 'おアツイ視線',
        type: 'mental',
        cost: { type: 'normal', value: 0 },
        condition: 'block==0',
        effects: [
            { type: 'block', value: 5 },
            { type: '消費体力減少', value: 2 },
            { type: '1ターン後ドロー', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300030,
        name: 'ご指導ご鞭撻',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: 'hpPer>=50',
        effects: [
            { type: 'score', value: 4 },
            { type: 'block', value: 5 },
            { type: '1ターン後、手札強化', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300040,
        name: 'ストレッチ談義',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        condition: 'turn>=3',
        effects: [
            { type: 'score', value: 3 },
            { type: '体力消費減少', value: 2 },
            { type: '1ターン後、手札強化', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300050,
        name: '全力サポート',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 },
            { type: '1ターン後ドロー', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300060,
        name: 'キメ顔で自撮り',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好調', value: 3 },
            { type: '集中', value: 2 },
            { type: '1ターン後ドロー', value: 1, condition: 'hpPer>=50' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300070,
        name: 'なに聴いてるの？',
        type: 'active',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '体力回復', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000010,
        name: 'コール＆レスポンス',
        type: 'active',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 15 },
            { type: 'score', value: 15, condition: '集中>=3' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000020,
        name: 'バズワード',
        type: 'active',
        cost: { type: 'normal', value: 7 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 38 },
        ],
        afterUse: null,
    },
    {
        id: 4000030,
        name: '成就',
        type: 'active',
        cost: { type: 'normal', value: 10 },
        condition: '',
        effects: [
            { type: '好調', value: 4 },
            { type: '次のターン、パラメータ', value: 32 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000040,
        name: '魅惑のパフォーマンス',
        type: 'active',
        cost: { type: 'normal', value: 8 },
        condition: '好調>0',
        effects: [
            { type: '絶好調', value: 2 },
            { type: '次のターン、パラメータ', value: 38 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000050,
        name: '２００％スマイル',
        type: 'active',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000060,
        name: '開花',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'やる気', value: 6 },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000070,
        name: '届いて！',
        type: 'active',
        cost: { type: 'direct', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 160 }] },
            { type: 'ブロック割合減少', value: 100 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000080,
        name: 'テレビ出演',
        type: 'mental',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '消費体力減少', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000090,
        name: '叶えたい夢',
        type: 'mental',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 8 },
            { type: '消費体力軽減', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000100,
        name: 'アイドル魂',
        type: 'mental',
        cost: { type: 'normal', value: 2 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: 'block', value: 6 },
            { type: '低下状態無効', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000110,
        name: '仕切り直し',
        type: 'mental',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '手札入れ替え', value: null },
            { type: '消費体力減少', value: 4 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000120,
        name: '国民的アイドル',
        type: 'mental',
        cost: { type: '好調', value: 1 },
        condition: '',
        effects: [
            { type: '次に使用するスキルカードの効果を発動', value: 1 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000130,
        name: '魅惑の視線',
        type: 'mental',
        cost: { type: '集中', value: 3 },
        condition: '',
        effects: [
            { type: '絶好調', value: 4 },
            { type: '消費体力減少', value: 2 },
            { type: 'スキルカード使用数追加', value: 1 },

        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000140,
        name: '鳴り止まない拍手',
        type: 'mental',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '集中', value: 4 },
            { type: '好調', value: 2 },
            { type: '消費体力減少', value: 2 },

        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000150,
        name: '天真爛漫',
        type: 'mental',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '集中', value: 1 },
            { type: 'ターン終了時、集中が3以上の場合、集中+2', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000160,
        name: '私がスター',
        type: 'mental',
        cost: { type: '好印象', value: 2 },
        condition: '',
        effects: [
            { type: 'ターン追加', value: 1 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000170,
        name: '星屑センセーション',
        type: 'mental',
        cost: { type: 'やる気', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000180,
        name: 'ノートの端の決意',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 },
            { type: 'やる気', value: 3 },
            { type: '消費体力減少', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000190,
        name: '手書きのメッセージ',
        type: 'mental',
        cost: { type: '好印象', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 9 }, 
            { type: 'block', value: 9 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000200,
        name: 'トキメキ',
        type: 'mental',
        cost: { type: 'normal', value: 8 },
        condition: '',
        effects: [
            { type: '好印象', value: 8 }, 
            { type: 'やる気', value: 5 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4000210,
        name: '虹色ドリーマー',
        type: 'mental',
        cost: { type: 'normal', value: 9 },
        condition: '',
        effects: [
            { type: '好印象', value: 1 }, 
            { type: 'ターン終了時、好印象が3以上の場合、好印象+3', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4201010,
        name: '絶対に負けない',
        type: 'active',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 34 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4202010,
        name: 'それぞれの道',
        type: 'active',
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: 'score', value: 14 }, 
            { type: '集中', value: 5 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4202020,
        name: '絡まる想い',
        type: 'active',
        cost: { type: 'normal', value: 8 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '好印象', value: 8 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4203010,
        name: 'よそ見はダメ♪',
        type: 'mental',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'block', value: 2 }, 
            { type: '好印象', value: 7 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4203020, 
        name: 'アドレナリン全開',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好調', value: 3 }, 
            { type: '絶好調', value: 4 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4204010,
        name: '盛装の華形',
        type: 'active',
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: 'score', value: 12 }, 
            { type: 'score', value: 14, condition: '好調>0' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4205010, 
        name: 'もう怖くないから',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 }, 
            { type: 'ターン終了時、好印象+1', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4206010, 
        name: 'お嬢様の晴れ舞台',
        type: 'mental',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 2 }, 
            { type: 'score', value: null, options: [{ type: 'block', value: 100 }] }, 
            { type: 'やる気', value: 2 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4207010,
        name: 'ワンモアステップ',
        type: 'active',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 7 }, 
            { type: 'score', value: 7 }, 
            { type: 'score', value: 7, condition: '集中>=6' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4208010, 
        name: '本気の趣味',
        type: 'mental',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 5 }, 
            { type: 'block', value: 4, condition: 'やる気>=3' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4209010,
        name: '距離感',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '集中', value: 4 }, 
            { type: '体力回復', value: 4 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4210010, 
        name: 'おっきなおにぎり',
        type: 'mental',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2, options: [{ type: '使用したスキルカード数', value: 5 }] }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    // {
    //     id: 4300010, 
    //     name: '花萌ゆ季節',
    //     type: 'mental',
    //     cost: { type: 'normal', value: 4 },
    //     condition: '',
    //     effects: [
    //         { type: '生成', value: 'ランダムな強化済みスキルカード' }, 
    //         { type: 'スキルカード使用数追加', value: 1 }, 
    //         { type: '次のターンドロー', value: 1 }, 
    //     ],
    //     afterUse: { type: 'exhaust', value: 1 },
    // },
    {
        id: 4300020, 
        name: '陽だまりの生徒会室',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '体力回復', value: 3 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300030, 
        name: '心のアルバム',
        type: 'active',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 3 }, 
            { type: '1ターン後ドロー', value: 1 }, 
            { type: '2ターン後ドロー', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300040, 
        name: 'ティーパーティ',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 }, 
            { type: '手札強化', value: null }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300050, 
        name: '光のステージ',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '消費体力軽減', value: 1 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300060, 
        name: '新生徒会爆誕！',
        type: 'mental',
        cost: { type: 'normal', value: 5 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '消費体力減少', value: 2 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300070, 
        name: '薄れゆく壁',
        type: 'mental',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'block', value: 3 }, 
            { type: '1ターン後、手札強化', value: null }, 
            { type: '2ターン後、手札強化', value: null }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300080, 
        name: 'みずたまりスキップ',
        type: 'mental',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 3 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300090, 
        name: '喧嘩するほど仲がいい',
        type: 'mental',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '集中', value: 3 }, 
            { type: '好調', value: 2 }, 
            { type: '1ターン後、手札強化', value: null }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300100, 
        name: 'ダメダメクッキング',
        type: 'mental',
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: '好印象', value: 4 }, 
            { type: 'やる気', value: 3 }, 
            { type: '1ターン後、手札強化', value: null }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },    
];