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
        cost: { type: '好調', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '好調', value: 2 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3000090,
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
        id: 3000100,
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
        id: 3000110,
        name: 'ハートの合図',
        type: 'active',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 130 }] },
            { type: 'block', value: null, options: [{ type: '割合減少', value: 50 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000120,
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
        id: 3000130,
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
        id: 3000140,
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
        id: 3000150,
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
        id: 3000160,
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
        id: 3000170,
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
        id: 3000180,
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
        id: 3000190,
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
        id: 3000200,
        name: '静かな意志',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        // レッスン開始時手札に入る
        effects: [
            { type: '集中', value: 3 },
            { type: '好調', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000210,
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
        id: 3000220,
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
        id: 3000230,
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
        id: 3000240,
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
        id: 3000250,
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
        id: 3000260,
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
        id: 3000270,
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
        id: 3000280,
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
        id: 3000290,
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
        id: 3000300,
        name: '本番前夜',
        type: 'mental',
        cost: { type: 'normal', value: 3 },
        condition: '',
        // レッスン開始時手札に入る
        effects: [
            { type: '好印象', value: 4 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000310,
        name: 'ひなたぼっこ',
        type: 'mental',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: '元気', value: 11 },
            { type: 'やる気', value: 5 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000320,
        name: 'イメトレ',
        type: 'mental',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '元気', value: 7 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000330,
        name: 'やる気は満点',
        type: 'mental',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: '元気', value: 1 },
            { type: '好印象', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3000340,
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
        id: 3200010,
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
        id: 3200020,
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
        id: 3200030,
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
        id: 3200040,
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
        id: 3200050,
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
        id: 3200060,
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
        id: 3200070,
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
        id: 3200080,
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
        id: 3200090,
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
        id: 3200100,
        name: '打倒お姉ちゃん',
        type: 'active',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: 'score', value: null, options: [{ type: '元気', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300010,
        name: 'お姉ちゃんだもの！',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        condition: 'レッスンCLEAR割合<=100',
        effects: [
            { type: 'score', value: 6 },
            { type: 'block', value: 6 },
            { type: '次ターンドロー', value: 1 },
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
            { type: '次ターンドロー', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300030,
        name: 'ご指導ご鞭撻',
        type: 'active',
        cost: { type: 'normal', value: 5 },
        condition: 'hp割合>=50',
        effects: [
            { type: 'score', value: 4 },
            { type: 'block', value: 5 },
            { type: '次ターン手札強化', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300040,
        name: 'ストレッチ談義',
        type: 'active',
        cost: { type: 'normal', value: 3 },
        condition: 'ターン>=3',
        effects: [
            { type: 'score', value: 3 },
            { type: '体力消費減少', value: 2 },
            { type: '次ターン手札強化', value: 1 },
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
            { type: '次ターンドロー', value: 1 },
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
            { type: '次ターンドロー', value: 1, condition: 'hp割合>=50' },
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