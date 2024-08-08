
/**
 * IDの付け方
 * 0_0_0000_0
 * タイプ　　：シナリオ1, キャラ固有2, サポ固有3, コンテスト4
 * レアレティ：白1, 金2, 虹3
 * 固有番号　：4桁番号
 * 強化　　　：強化前0, 強化後1
 * 
 * 実装：8/2まで
 */

const pItemData = [
    /*
        Rアイドル固有
    */
    {
        id: 2101010,
        name: 'ばくおんライオン',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'score', value: 6 },
        ],
        limit: 1,
    },
    {
        id: 2101011,
        name: 'ばくおんライオン+',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'score', value: 11 },
        ],
        limit: 1,
    },
    {
        id: 2102010,
        name: '必携ステンレスボトル',
        activate_timing: 'start_turn',
        condition: '集中>=3',
        effects: [
            { type: 'status', target: '集中', value: 4 },
        ],
        limit: 1,
    },
    {
        id: 2102011,
        name: '必携ステンレスボトル+',
        activate_timing: 'start_turn',
        condition: '集中>=3',
        effects: [
            { type: 'status', target: '集中', value: 6 },
        ],
        limit: 1,
    },
    {
        id: 2103010,
        name: 'ちびども手作りメダル',
        activate_timing: 'end_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: 2,
    },
    {
        id: 2103011,
        name: 'ちびども手作りメダル+',
        activate_timing: 'end_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: 3,
    },
    {
        id: 2104010,
        name: '紳士風ハンカチーフ',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: '集中', value: 1 },
        ],
        limit: 2,
    },
    {
        id: 2104011,
        name: '紳士風ハンカチーフ+',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 2,
    },
    {
        id: 2105010,
        name: '緑のお揃いブレス',
        activate_timing: 'increased_status:好印象',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 3 },
        ],
        limit: 1,
    },
    {
        id: 2105011,
        name: '緑のお揃いブレス+',
        activate_timing: 'increased_status:好印象',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 5 },
        ],
        limit: 1,
    },
    {
        id: 2106010,
        name: '願いを叶えるお守り',
        activate_timing: 'increased_status:やる気',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 2 },
        ],
        limit: 1,
    },
    {
        id: 2106011,
        name: '願いを叶えるお守り+',
        activate_timing: 'increased_status:やる気',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 1,
    },
    {
        id: 2107010,
        name: 'ピンクのお揃いブレス',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '集中', value: 1 },
        ],
        limit: 2,
    },
    {
        id: 2107011,
        name: 'ピンクのお揃いブレス+',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '集中', value: 1 },
        ],
        limit: 3,
    },
    {
        id: 2108010,
        name: '超絶あんみんマスク',
        activate_timing: 'start_turn',
        condition: 'remain_turn==1',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 50 }] },
            { type: 'direct_hp', value: -1 },
        ],
        limit: null,
    },
    {
        id: 2108011,
        name: '超絶あんみんマスク+',
        activate_timing: 'start_turn',
        condition: 'remain_turn==1',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 70 }] },
            { type: 'direct_hp', value: -1 },
        ],
        limit: null,
    },
    {
        id: 2109010,
        name: 'いつものメイクポーチ',
        activate_timing: 'before_use_card',
        condition: 'cardType==active&hpPer>=50',
        effects: [
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 1,
    },
    {
        id: 2109011,
        name: 'いつものメイクポーチ+',
        activate_timing: 'before_use_card',
        condition: 'cardType==active&hpPer>=50',
        effects: [
            { type: 'status', target: '集中', value: 3 },
        ],
        limit: 1,
    },
    {
        id: 2110010,
        name: 'テクノドッグ',
        activate_timing: 'after_use_card',
        condition: 'やる気>=3',
        effects: [
            { type: 'status', target: 'やる気', value: 2 },
        ],
        limit: 1,
    },
    {
        id: 2110011,
        name: 'テクノドッグ+',
        activate_timing: 'after_use_card',
        condition: 'やる気>=3',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 1,
    },
    /*
        SRアイドル固有
    */
    {
        id: 2201010,
        name: '咲季の完全食レシピ',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'block', value: 9 },
        ],
        limit: 1,
    },
    {
        id: 2201011,
        name: '咲季の完全食レシピ+',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'block', value: 12 },
        ],
        limit: 1,
    },
    {
        id: 2202010,
        name: '私の「初」の楽譜',
        activate_timing: 'start_turn',
        condition: 'block==0',
        effects: [
            { type: 'direct_hp', value: -1 },
            { type: 'status', target: '集中', value: 3 },
        ],
        limit: 2,
    },
    {
        id: 2202011,
        name: '私の「初」の楽譜+',
        activate_timing: 'start_turn',
        condition: 'block==0',
        effects: [
            { type: 'direct_hp', value: -1 },
            { type: 'status', target: '集中', value: 4 },
        ],
        limit: 2,
    },
    {
        id: 2203010,
        name: 'お気にのスニーカー',
        activate_timing: 'end_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: '好印象', value: 4 },
        ],
        limit: 1,
    },
    {
        id: 2203011,
        name: 'お気にのスニーカー+',
        activate_timing: 'end_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: '好印象', value: 5 },
        ],
        limit: 1,
    },
    {
        id: 2204010,
        name: 'Dearリトルプリンス',
        activate_timing: 'increased_status:好調',
        condition: '',
        effects: [
            { type: 'status', target: '好調', value: 3 },
        ],
        limit: 1,
    },
    {
        id: 2204011,
        name: 'Dearリトルプリンス+',
        activate_timing: 'increased_status:好調',
        condition: '',
        effects: [
            { type: 'status', target: '好調', value: 4 },
        ],
        limit: 1,
    },
    {
        id: 2205010,
        name: '思い出ロボ',
        activate_timing: 'end_turn',
        condition: 'hpPer>=50',
        effects: [
            { type: 'status', target: '好印象', value: 3 },
        ],
        limit: 1,
    },
    {
        id: 2205011,
        name: '思い出ロボ+',
        activate_timing: 'end_turn',
        condition: 'hpPer>=50',
        effects: [
            { type: 'status', target: '好印象', value: 4 },
        ],
        limit: 1,
    },
    {
        id: 2206010,
        name: 'しょげないハンカチ',
        activate_timing: 'after_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 60 }] },
            { type: 'direct_hp', value: -2 },
        ],
        limit: 2,
    },
    {
        id: 2206011,
        name: 'しょげないハンカチ+',
        activate_timing: 'after_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 70 }] },
            { type: 'direct_hp', value: -2 },
        ],
        limit: 2,
    },
    {
        id: 2207010,
        name: '放課後のらくがき',
        activate_timing: 'increased_status:集中',
        condition: 'hpPer>=50',
        effects: [
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 2,
    },
    {
        id: 2207011,
        name: '放課後のらくがき+',
        activate_timing: 'increased_status:集中',
        condition: '',
        effects: [
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 2,
    },
    {
        id: 2208010,
        name: 'だれでもわかる入門書',
        activate_timing: 'start_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: 'やる気', value: 5 },
        ],
        limit: 1,
    },
    {
        id: 2208011,
        name: 'だれでもわかる入門書+',
        activate_timing: 'start_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: 'やる気', value: 6 },
        ],
        limit: 1,
    },
    {
        id: 2209010,
        name: 'きみへの差し入れ',
        activate_timing: 'start_turn',
        condition: '集中>=5',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 3,
    },
    {
        id: 2209011,
        name: 'きみへの差し入れ+',
        activate_timing: 'start_turn',
        condition: '集中>=5',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 4,
    },
    {
        id: 2210010,
        name: '柴犬ポシェット',
        activate_timing: 'start_turn',
        condition: 'turnMultiple==2', // 2ターンごと
        effects: [
            { type: 'block', value: 5 },
        ],
        limit: 2,
    },
    {
        id: 2210011,
        name: '柴犬ポシェット+',
        activate_timing: 'start_turn',
        condition: 'turnMultiple==2', // 2ターンごと
        effects: [
            { type: 'block', value: 5 },
        ],
        limit: 3,
    },
    /*
        SRサポ
    */
    {
        id: 3200010,
        name: '美鈴からの贈り物',
    },
    {
        id: 3200020,
        name: '打倒！墾田永年私財法',
    },
    {
        id: 3200030,
        name: '手作りのご褒美',
    },
    {
        id: 3200040,
        name: 'ふわふわでもこもこ',
    },
    {
        id: 3200050,
        name: 'お姉さま大百科',
    },
    {
        id: 3200060,
        name: '例のSSDの秘密',
    },
    {
        id: 3200070,
        name: '一緒にお昼寝ポプリ',
    },
    {
        id: 3200080,
        name: '私が見つけた逸材メモ',
    },
    {
        id: 3200090,
        name: '朝一の助け舟',
    },
    {
        id: 3200100,
        name: '誓いの花びら',
    },
    {
        id: 3200110,
        name: 'ダブルボトル',
    },
    {
        id: 3200120,
        name: '咲季オススメマット',
    },
    {
        id: 3200130,
        name: '可愛い隠しバスタオル',
    },
    {
        id: 3200140,
        name: 'ウチュウジンデアル',
    },
    /**
     * シナリオ
     */
    {
        id: 1300010,
        name: 'はつぼしブローチ',
    },
    {
        id: 1300020,
        name: 'はつぼしブレスレット',
    },
    {
        id: 1300030,
        name: 'はつぼし手帳',
        activate_timing: 'start_turn',
        condition: '集中>=5',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 1,
    },
    {
        id: 1300040,
        name: 'はつぼしTシャツ',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '好調', value: 2 },
        ],
        limit: 1,
    },
    {
        id: 1300050,
        name: 'はつぼしキーホルダー',
        activate_timing: 'start_turn',
        condition: '好印象>=3',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '好印象', value: 3 },
        ],
        limit: 1,
    },
    {
        id: 1300060,
        name: 'マスコット（非公認）',
        activate_timing: 'start_turn',
        condition: 'やる気>=5',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 1,
    },
    /**
     * SSRアイドル固有
     */
    {
        id: 2301010,
        name: '共に戦うタオル',
        activate_timing: 'after_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'status', target: '好調', value: 1 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
    },
    {
        id: 2301011,
        name: '共に戦うタオル+',
        activate_timing: 'after_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'status', target: '好調', value: 1 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'block', value: 5 },
        ],
        limit: 1,
    },
    {
        id: 2301020,
        name: '勝ちへのこだわり',
        activate_timing: 'consume_hp',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: 4,
    },
    {
        id: 2301021,
        name: '勝ちへのこだわり+',
        activate_timing: 'consume_hp',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: null,
    },
    {
        id: 2301030,
        name: '敗れ知らずのポイ',
        activate_timing: 'start_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'hp', value: 4 },
        ],
        limit: 2,
    },
    {
        id: 2301031,
        name: '敗れ知らずのポイ+',
        activate_timing: 'start_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'hp', value: 5 },
        ],
        limit: 2,
    },
    {
        id: 2302010,
        name: '自分を守るイヤホン',
        activate_timing: 'before_use_card',
        condition: '集中>=5',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '集中', value: 1 },
        ],
        limit: 1,
    },
    {
        id: 2302011,
        name: '自分を守るイヤホン+',
        activate_timing: 'before_use_card',
        condition: '集中>=5',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '集中', value: 3 },
        ],
        limit: 1,
    },
    {
        id: 2302020,
        name: 'これが、私',
        activate_timing: 'end_turn',
        condition: '好印象>=10',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
            { type: 'block', value: 3 },
        ],
        limit: 2,
    },
    {
        id: 2302021,
        name: 'これが、私+',
        activate_timing: 'end_turn',
        condition: '好印象>=10',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
            { type: 'block', value: 3 },
        ],
        limit: 3,
    },
    {
        id: 2303010,
        name: 'ピッグドリーム貯金箱',
        activate_timing: 'after_use_card',
        condition: '好印象>=6',
        effects: [
            { type: 'status', target: '好印象', value: 3 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
    },
    {
        id: 2303011,
        name: 'ピッグドリーム貯金箱+',
        activate_timing: 'after_use_card',
        condition: '好印象>=6',
        effects: [
            { type: 'status', target: '好印象', value: 5 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
    },
    {
        id: 2303020,
        name: '最高にハッピーの源',
        activate_timing: 'before_use_card',
        condition: 'cardId==4203020|cardId==4203021',
        effects: [
            { type: 'status', target: '好調', value: 3 },
            { type: '固定元気', value: 5 },
        ],
        limit: 1,
    },
    {
        id: 2303021,
        name: '最高にハッピーの源+',
        activate_timing: 'before_use_card',
        condition: 'cardId==4203020|cardId==4203021',
        effects: [
            { type: 'status', target: '好調', value: 3 },
            { type: '固定元気', value: 11 },
        ],
        limit: 1,
    },
    {
        id: 2304010,
        name: '内なる光の耳飾り',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: '集中', value: 2 },
            { type: 'block', value: 1 },
        ],
        limit: 2,
    },
    {
        id: 2304011,
        name: '内なる光の耳飾り+',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: '集中', value: 3 },
            { type: 'block', value: 1 },
        ],
        limit: 2,
    },
    {
        id: 2304020,
        name: '最後の夏の思い出',
        activate_timing: 'start_turn',
        condition: '集中>=3',
        effects: [
            { type: 'block', value: 10 },
        ],
        limit: 1,
    },
    {
        id: 2304021,
        name: '最後の夏の思い出+',
        activate_timing: 'start_turn',
        condition: '集中>=3',
        effects: [
            { type: 'block', value: 14 },
        ],
        limit: 1,
    },
    {
        id: 2305010,
        name: '夢へのライフログ',
        activate_timing: 'end_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: '好印象', value: null, options: [{ type: 'multiple', value: 1.5 }] },
            { type: 'score', value: null, options: [{ type: '好印象', value: 30 }] },
        ],
        limit: 1,
    },
    {
        id: 2305011,
        name: '夢へのライフログ+',
        activate_timing: 'end_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: '好印象', value: null, options: [{ type: 'multiple', value: 1.5 }] },
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
        ],
        limit: 1,
    },
    {
        id: 2305020,
        name: '瓶の中のきらめき',
        activate_timing: 'end_turn',
        condition: '好調>=6',
        effects: [
            { type: 'status', target: '好調', value: 2 },
        ],
        limit: 4,
    },
    {
        id: 2305021,
        name: '瓶の中のきらめき+',
        activate_timing: 'end_turn',
        condition: '好調>=3',
        effects: [
            { type: 'status', target: '好調', value: 2 },
        ],
        limit: 4,
    },
    {
        id: 2306010,
        name: 'ひみつ特訓カーデ',
        activate_timing: 'increased_status:やる気',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 2,
    },
    {
        id: 2306011,
        name: 'ひみつ特訓カーデ+',
        activate_timing: 'increased_status:やる気',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 3,
    },
    {
        id: 2307010,
        name: 'ゲーセンの戦利品',
        activate_timing: 'start_turn',
        condition: 'turn==1',
        effects: [
            { type: 'status', target: '集中', value: 3 },
        ],
        limit: 1,
    },
    {
        id: 2307011,
        name: 'ゲーセンの戦利品+',
        activate_timing: 'start_turn',
        condition: 'turn==1',
        effects: [
            { type: 'status', target: '集中', value: 4 },
        ],
        limit: 1,
    },
    {
        id: 2307020,
        name: 'カエル印の扇風機',
        activate_timing: 'after_use_card',
        condition: 'cardType==active&やる気>=12',
        effects: [
            { type: 'score', value: null, options: [{ type: 'やる気', value: 270 }] },
            { type: 'direct_hp', value: -2 },
        ],
        limit: 4,
    },
    {
        id: 2307021,
        name: 'カエル印の扇風機+',
        activate_timing: 'after_use_card',
        condition: 'cardType==active&やる気>=12',
        effects: [
            { type: 'score', value: null, options: [{ type: 'やる気', value: 340 }] },
            { type: 'direct_hp', value: -2 },
        ],
        limit: 4,
    },
    {
        id: 2308010,
        name: 'みちくさ研究ノート',
        activate_timing: 'start_turn',
        condition: 'remain_turn<=2',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 50 }] },
            { type: 'direct_hp', value: -1 },
        ],
        limit: null,
    },
    {
        id: 2308011,
        name: 'みちくさ研究ノート+',
        activate_timing: 'start_turn',
        condition: 'remain_turn<=2',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 65 }] },
            { type: 'direct_hp', value: -1 },
        ],
        limit: null,
    },
    { 
        id: 2308020,
        name: 'まだ見ぬ世界へ',
        activate_timing: 'start_turn',
        condition: 'hpPer<=50',
        effects: [
            { type: 'status', target: '集中', value: 5 },
            { type: 'status', target: '消費体力削減', value: 2 },
            { type: 'upgrade', value: null },
        ],
        limit: 1,
    },
    {
        id: 2308021,
        name: 'まだ見ぬ世界へ+',
        activate_timing: 'start_turn',
        condition: 'hpPer<=50',
        effects: [
            { type: 'status', target: '集中', value: 7 },
            { type: 'status', target: '消費体力削減', value: 3 },
            { type: 'upgrade', value: null },
        ],
        limit: 1,
    },
    {
        id: 2309010,
        name: '等身大のレディリップ',
        activate_timing: 'start_turn',
        condition: 'remain_turn<=2',
        effects: [
            { type: 'score', value: 5 },
        ],
        limit: 2,
    },
    {
        id: 2309011,
        name: '等身大のレディリップ',
        activate_timing: 'start_turn',
        condition: 'remain_turn<=3',
        effects: [
            { type: 'score', value: 5 },
        ],
        limit: 3,
    },
    {
        id: 2309020,
        name: 'きみと分け合う夏',
        activate_timing: 'start_turn',
        condition: '消費体力減少>0',
        effects: [
            { type: 'status', target: '絶好調', value: 1 },
            { type: 'draw', value: 1 },
        ],
        limit: 2,
    },
    {
        id: 2309021,
        name: 'きみと分け合う夏+',
        activate_timing: 'start_turn',
        condition: '消費体力減少>0',
        effects: [
            { type: 'status', target: '絶好調', value: 1 },
            { type: 'draw', value: 1 },
        ],
        limit: 3,
    },
    {
        id: 2310010,
        name: '転がり続ける元気の源',
        activate_timing: 'after_use_card',
        condition: 'cardType==mental&やる気>=5',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
    },
    {
        id: 2310011,
        name: '転がり続ける元気の源+',
        activate_timing: 'after_use_card',
        condition: 'cardType==mental&やる気>=5',
        effects: [
            { type: 'status', target: 'やる気', value: 5 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
    },
    /**
     * SSRサポ
     */
    {
        id: 3300010,
        name: '得体のしれないモノ',
        activate_timing: 'start_turn',
        condition: 'turnType==visual',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 1, options: [{ type: '上昇量', value: 50 }] },
        ],
        limit: 3,
    },
    {
        id: 3300020,
        name: '星のリトルプリンス',
        activate_timing: 'start_turn',
        condition: 'turnType==visual',
        effects: [
            { type: '固定元気', value: 2 },
        ],
        limit: null,
    },
    {
        id: 3300030,
        name: '悔しさの象徴',
        activate_timing: 'start_turn',
        condition: 'turnType==dance',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 1, options: [{ type: '上昇量', value: 50 }] },
        ],
        limit: 3,
    },
    {
        id: 3300040,
        name: '曇りをぬぐったタオル',
        activate_timing: 'before_use_card',
        condition: 'turnType==vocal&cardType==active',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 3,
    },
    {
        id: 3300050,
        name: 'スカウト遮り帽',
        activate_timing: 'start_turn',
        condition: 'turnType==vocal',
        effects: [
            { type: 'draw', value: 1 },
            { type: '固定元気', value: 2 },
        ],
        limit: 3,
    },
    {
        id: 3300060,
        name: '信頼の証',
    },
    {
        id: 3300070,
        name: '満開ペアヘアピン',
        activate_timing: 'before_use_card',
        condition: 'turnType==vocal&cardType==active',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 3,
    },
    {
        id: 3300080,
        name: '仲直りのきっかけ',
        activate_timing: 'start_turn',
        condition: 'turnType==visual',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
    },
    {
        id: 3300090,
        name: '夢にあふれた大荷物',
        activate_timing: 'start_turn',
        condition: 'turnType==dance',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
    },
    {
        id: 3300100,
        name: '天川ラーメン巡り',
        activate_timing: 'start_turn',
        condition: 'turnType==vocal',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
    },
    {
        id: 3300110,
        name: '虹かけるクロス',
        activate_timing: 'before_use_card',
        condition: 'turnType==dance&cardType==active',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 3,
    },
    {
        id: 3300120,
        name: '負けず嫌いの勲章',
        activate_timing: 'start_turn',
        condition: 'turnType==dance',
        effects: [
            { type: 'score', value: null, options: [{ type: 'やる気', value: 50 }] },
        ],
        limit: null,
    },
    {
        id: 3300130,
        name: 'オーバーパワーボール',
        activate_timing: 'start_turn',
        condition: 'turnType==vocal',
        effects: [
            { type: 'status', target: '集中', value: 4 },
            { type: 'direct_hp', value: 2 },
        ],
        limit: 1,
    },










    /**
     * コンテストのやつ
     * IDの付け方
     * 4_00_00_0_0
     * 4
     * 年
     * 月
     * 期
     * ステージ
     */
    {
        id: 4240511,
        name: '初星バッチ（赤）',
        activate_timing: 'start_turn',
        condition: 'turn==8',
        effects: [
            { type: 'score', value: 15 },
            { type: 'block', value: 15 },
        ],
        limit: 1,
    },
    {
        id: 4240512,
        name: '初星オブジェ（紫）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '好調', value: 3 },
            { type: 'status', target: 'パラメータ上昇量増加', value: 4, options: [{ type: '上昇量', value: 50 }] },
        ],
        limit: 1,
    },
    {
        id: 4240513,
        name: '初星ライト（オレンジ）',
        activate_timing: 'increased_status:好印象',
        condition: '好印象>=10',
        effects: [
            { type: 'status', target: '好印象', value: 4 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 50 }] },
        ],
        limit: null,
    },

    {
        id: 4240612,
        name: '初星オブジェ（紫）',
        activate_timing: 'after_use_card',
        condition: 'cardEffectInclude==絶好調&好調>=4',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: null,
    },
    {
        id: 4240613,
        name: '初星ライト（紫）',
        activate_timing: 'before_use_card',
        condition: 'usedCardCountMultiple==2',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 50 }] },
        ],
        limit: null,
    },

    {
        id: 4240621,
        name: '初星オブジェ（銀）',
        activate_timing: 'start_turn',
        condition: 'turn==8',
        effects: [
            { type: 'status', target: '集中', value: null, options: [{ type: 'multiple', value: 2 }] },
        ],
        limit: 1,
    },
    {
        id: 4240622,
        name: '初星ライト（オレンジ）',
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 170 }] },
        ],
        limit: 3,
    },
    {
        id: 4240623,
        name: '初星ライト（紫）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 4 },
        ],
        limit: 2,
    },

    {
        id: 4240711,
        name: '初星オブジェ（銀）',
        activate_timing: 'before_use_card',
        condition: 'cardEffectInclude==消費体力減少',
        effects: [
            { type: 'status', target: '集中', value: 3 },
            { type: 'status', target: '好調', value: 3 },
            { type: 'hp', value: -3 },
        ],
        limit: 3,
    },
    {
        id: 4240713,
        name: '初星ライト（紫）',
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 4,
    },

    {
        id: 4240722,
        name: '初星オブジェ（紫）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '集中', value: 5 },
            { type: 'status', target: '消費体力増加', value: 1 },
        ],
        limit: 2,
    },
    {
        id: 4240723,
        name: '初星ライト（オレンジ）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 4 },
            { type: 'status', target: '元気増加無効', value: 1 },
        ],
        limit: 6,
    },

    {
        id: 4240811,
        name: '初星バッチ（赤）',
        activate_timing: 'start_turn',
        condition: '消費体力減少>0',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 100, options: [{ type: '上昇量', value: 15 }] },
        ],
        limit: null,
    },
    {
        id: 4240812,
        name: '初星オブジェ（紫）',
        activate_timing: 'start_turn',
        condition: '好調>=6',
        effects: [
            { type: 'status', target: '好調', value: 6 },
            { type: 'status', target: '集中', value: 6 },
        ],
        limit: 1,
    },
    {
        id: 4240813,
        name: '初星ライト（紫）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 4 },
            { type: 'status', target: '好印象', value: 4 },
        ],
        limit: 1,
    },

];

export class PItem {

    // property
    #available = true;

    // method
    constructor (id) {
        const pItem = PItemData.getById(id);
        for (const propertyName in pItem) {
            if (pItem.hasOwnProperty(propertyName)) {
                this[propertyName] = pItem[propertyName];
            }
        }
    }

    /**
     * Pアイテムが利用可能か返します
     * @returns {Boolean}
     */
    isAvailable () {
        return this.#available;
    }

    /**
     * Pアイテムの使用後処理を行います
     */
    use () {
        if (this.limit == null) return;
        this.limit--;
        if (this.limit <= 0) {
            this.#available = false;
        } 
    }

}

export class PItemData {
    
    // property
    static #pItemData = pItemData;
    static #index = Object.fromEntries(this.#pItemData.map((item, i) => [item.id, i]));

    // method

    /**
     * IDと一致するPアイテムオブジェクトを返します
     * @param {Number} id - PアイテムのID 
     * @returns {Object} Pアイテムデータ
     */
    static getById (id) {
        if (!(id in this.#index)) {
            throw new Error('idと一致するPアイテムがありません。');
        }
        return this.#pItemData[this.#index[id]];
    }

    /**
     * Pアイテムリストを返します※非推奨
     * @returns {Array<Object>} Pアイテムリスト
     */
    static getAll () {
        return this.#pItemData;
    }

}