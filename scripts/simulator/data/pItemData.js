
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
        description: '',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'score', value: 6 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2101011,
        name: 'ばくおんライオン+',
        description: '',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'score', value: 11 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2101020,
        name: '初声の証・咲季',
        description: '',
        activate_timing: 'consume_hp',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2101021,
        name: '初声の証・咲季+',
        description: '',
        activate_timing: 'consume_hp',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: 3,
        plan: 'logic',
    },
    {
        id: 2102010,
        name: '必携ステンレスボトル',
        description: '',
        activate_timing: 'start_turn',
        condition: '集中>=3',
        effects: [
            { type: 'status', target: '集中', value: 4 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2102011,
        name: '必携ステンレスボトル+',
        description: '',
        activate_timing: 'start_turn',
        condition: '集中>=3',
        effects: [
            { type: 'status', target: '集中', value: 6 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2102020,
        name: '初声の証・手毬',
        description: '',
        activate_timing: 'end_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2102021,
        name: '初声の証・手毬+',
        description: '',
        activate_timing: 'end_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
        ],
        limit: 3,
        plan: 'logic',
    },
    {
        id: 2103010,
        name: 'ちびども手作りメダル',
        description: '',
        activate_timing: 'end_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2103011,
        name: 'ちびども手作りメダル+',
        description: '',
        activate_timing: 'end_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: 3,
        plan: 'logic',
    },
    {
        id: 2103020,
        name: '初声の証・ことね',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardId==2203020|cardId==2203021',
        effects: [
            { type: 'status', target: '好調', value: 2 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2103021,
        name: '初声の証・ことね+',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardId==2203020|cardId==2203021',
        effects: [
            { type: 'status', target: '好調', value: 2 },
            { type: '固定元気', value: 5 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2104010,
        name: '紳士風ハンカチーフ',
        description: '',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: '集中', value: 1 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2104011,
        name: '紳士風ハンカチーフ+',
        description: '',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2105010,
        name: '緑のお揃いブレス',
        description: '',
        activate_timing: 'increased_status:好印象',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 3 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2105011,
        name: '緑のお揃いブレス+',
        description: '',
        activate_timing: 'increased_status:好印象',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 5 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2105020,
        name: '初心の証・リーリヤ',
        description: '',
        activate_timing: 'end_turn',
        condition: '好調>=6',
        effects: [
            { type: 'status', target: '好調', value: 2 },
            { type: 'fixed_direct_hp', value: -1 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2105021,
        name: '初心の証・リーリヤ+',
        description: '',
        activate_timing: 'end_turn',
        condition: '好調>=6',
        effects: [
            { type: 'status', target: '好調', value: 2 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2106010,
        name: '願いを叶えるお守り',
        description: '',
        activate_timing: 'increased_status:やる気',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 2 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2106011,
        name: '願いを叶えるお守り+',
        description: '',
        activate_timing: 'increased_status:やる気',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2106020,
        name: '初心の証・千奈',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn==1',
        effects: [
            { type: 'score', value: 2, options: [{ type: '使用したスキルカード数', value: 1 }] },
            { type: 'fixed_direct_hp', value: -1 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2106021,
        name: '初心の証・千奈+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn==1',
        effects: [
            { type: 'score', value: 6, options: [{ type: '使用したスキルカード数', value: 1 }] },
            { type: 'fixed_direct_hp', value: -1 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2107010,
        name: 'ピンクのお揃いブレス',
        description: '',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '集中', value: 1 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2107011,
        name: 'ピンクのお揃いブレス+',
        description: '',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '集中', value: 1 },
        ],
        limit: 3,
        plan: 'sense',
    },
    {
        id: 2108010,
        name: '超絶あんみんマスク',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn==1',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 50 }] },
            { type: 'fixed_direct_hp', value: -1 },
        ],
        limit: null,
        plan: 'logic',
    },
    {
        id: 2108011,
        name: '超絶あんみんマスク+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn==1',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 70 }] },
            { type: 'fixed_direct_hp', value: -1 },
        ],
        limit: null,
        plan: 'logic',
    },
    {
        id: 2109010,
        name: 'いつものメイクポーチ',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardType==active&hpPer>=50',
        effects: [
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2109011,
        name: 'いつものメイクポーチ+',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardType==active&hpPer>=50',
        effects: [
            { type: 'status', target: '集中', value: 3 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2109020,
        name: '初声の証・莉波',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'usedCardCountMultiple==3',
        effects: [
            { type: 'status', target: 'やる気', value: 2 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2109021,
        name: '初声の証・莉波+',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'usedCardCountMultiple==3',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2110010,
        name: 'テクノドッグ',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'やる気>=3',
        effects: [
            { type: 'status', target: 'やる気', value: 2 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2110011,
        name: 'テクノドッグ+',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'やる気>=3',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 1,
        plan: 'logic',
    },
    /*
        SRアイドル固有
    */
    {
        id: 2201010,
        name: '咲季の完全食レシピ',
        description: '',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'block', value: 9 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2201011,
        name: '咲季の完全食レシピ+',
        description: '',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'block', value: 12 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2202010,
        name: '私の「初」の楽譜',
        description: '',
        activate_timing: 'start_turn',
        condition: 'block==0',
        effects: [
            { type: 'fixed_direct_hp', value: -1 }, // 違うかも
            { type: 'status', target: '集中', value: 3 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2202011,
        name: '私の「初」の楽譜+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'block==0',
        effects: [
            { type: 'fixed_direct_hp', value: -1 },
            { type: 'status', target: '集中', value: 4 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2203010,
        name: 'お気にのスニーカー',
        description: '',
        activate_timing: 'end_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: '好印象', value: 4 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2203011,
        name: 'お気にのスニーカー+',
        description: '',
        activate_timing: 'end_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: '好印象', value: 5 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2204010,
        name: 'Dearリトルプリンス',
        description: '',
        activate_timing: 'increased_status:好調',
        condition: '',
        effects: [
            { type: 'status', target: '好調', value: 3 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2204011,
        name: 'Dearリトルプリンス+',
        description: '',
        activate_timing: 'increased_status:好調',
        condition: '',
        effects: [
            { type: 'status', target: '好調', value: 4 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2205010,
        name: '思い出ロボ',
        description: '',
        activate_timing: 'end_turn',
        condition: 'hpPer>=50',
        effects: [
            { type: 'status', target: '好印象', value: 3 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2205011,
        name: '思い出ロボ+',
        description: '',
        activate_timing: 'end_turn',
        condition: 'hpPer>=50',
        effects: [
            { type: 'status', target: '好印象', value: 4 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2206010,
        name: 'しょげないハンカチ',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 60 }] },
            { type: 'fixed_direct_hp', value: -2 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2206011,
        name: 'しょげないハンカチ+',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 70 }] },
            { type: 'fixed_direct_hp', value: -2 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2207010,
        name: '放課後のらくがき',
        description: '',
        activate_timing: 'increased_status:集中',
        condition: 'hpPer>=50',
        effects: [
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2207011,
        name: '放課後のらくがき+',
        description: '',
        activate_timing: 'increased_status:集中',
        condition: '',
        effects: [
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2208010,
        name: 'だれでもわかる入門書',
        description: '',
        activate_timing: 'start_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: 'やる気', value: 5 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2208011,
        name: 'だれでもわかる入門書+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: 'やる気', value: 6 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2209010,
        name: 'きみへの差し入れ',
        description: '',
        activate_timing: 'start_turn',
        condition: '集中>=5',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 3,
        plan: 'sense',
    },
    {
        id: 2209011,
        name: 'きみへの差し入れ+',
        description: '',
        activate_timing: 'start_turn',
        condition: '集中>=5',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 4,
        plan: 'sense',
    },
    {
        id: 2210010,
        name: '柴犬ポシェット',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnMultiple==2', // 2ターンごと
        effects: [
            { type: 'block', value: 5 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2210011,
        name: '柴犬ポシェット+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnMultiple==2', // 2ターンごと
        effects: [
            { type: 'block', value: 5 },
        ],
        limit: 3,
        plan: 'logic',
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
    {
        id: 3200150,
        name: 'ハンターの戦利品',
    },
    {
        id: 3200151,
        name: '',
    },
    {
        id: 3200160,
        name: 'きっかけの帯',
    },
    {
        id: 3200170,
        name: '大きくてつやつや',
    },
    {
        id: 3200180,
        name: '優しさミルクシュガー',
    },
    {
        id: 3200190,
        name: 'お嬢様の恩返し',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==dance&好印象>=6',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 80 }] },
        ],
        limit: 2,
        plan: 'logic',
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
        description: '',
        activate_timing: 'start_turn',
        condition: '集中>=5',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 1300040,
        name: 'はつぼしTシャツ',
        description: '',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '好調', value: 2 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 1300050,
        name: 'はつぼしキーホルダー',
        description: '',
        activate_timing: 'start_turn',
        condition: '好印象>=3',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '好印象', value: 3 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 1300060,
        name: 'マスコット（非公認）',
        description: '',
        activate_timing: 'start_turn',
        condition: 'やる気>=5',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 1,
        plan: 'logic',
    },
    /**
     * SSRアイドル固有
     */
    {
        id: 2301010,
        name: '共に戦うタオル',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'status', target: '好調', value: 1 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2301011,
        name: '共に戦うタオル+',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'status', target: '好調', value: 1 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'block', value: 5 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2301020,
        name: '勝ちへのこだわり',
        description: '',
        activate_timing: 'consume_hp',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: 4,
        plan: 'logic',
    },
    {
        id: 2301021,
        name: '勝ちへのこだわり+',
        description: '',
        activate_timing: 'consume_hp',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
        ],
        limit: null,
        plan: 'logic',
    },
    {
        id: 2301030,
        name: '敗れ知らずのポイ',
        description: '',
        activate_timing: 'start_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'hp', value: 4 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2301031,
        name: '敗れ知らずのポイ+',
        description: '',
        activate_timing: 'start_turn',
        condition: '好印象>=6',
        effects: [
            { type: 'hp', value: 5 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2302010,
        name: '自分を守るイヤホン',
        description: '',
        activate_timing: 'before_use_card',
        condition: '集中>=5',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '集中', value: 1 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2302011,
        name: '自分を守るイヤホン+',
        description: '',
        activate_timing: 'before_use_card',
        condition: '集中>=5',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '集中', value: 3 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2302020,
        name: 'これが、私',
        description: '',
        activate_timing: 'end_turn',
        condition: '好印象>=10',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
            { type: 'block', value: 3 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2302021,
        name: 'これが、私+',
        description: '',
        activate_timing: 'end_turn',
        condition: '好印象>=10',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
            { type: 'block', value: 3 },
        ],
        limit: 3,
        plan: 'logic',
    },
    {
        id: 2302030,
        name: 'ぶきっちょコウモリ+',
        description: '',
        activate_timing: 'start_turn',
        condition: '好印象>=3&turnMultiple==3',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 90 }] },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 160 }] },
            { type: 'status', target: '好印象', value: -2 },
        ],
        limit: 3,
        plan: 'logic',
    },
    {
        id: 2302031,
        name: 'ぶきっちょコウモリ+',
        description: '',
        activate_timing: 'start_turn',
        condition: '好印象>=3&turnMultiple==3',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 100 }] },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 230 }] },
            { type: 'status', target: '好印象', value: -2 },
        ],
        limit: 3,
        plan: 'logic',
    },
    {
        id: 2303010,
        name: 'ピッグドリーム貯金箱',
        description: '',
        activate_timing: 'after_use_card',
        condition: '好印象>=6',
        effects: [
            { type: 'status', target: '好印象', value: 3 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2303011,
        name: 'ピッグドリーム貯金箱+',
        description: '',
        activate_timing: 'after_use_card',
        condition: '好印象>=6',
        effects: [
            { type: 'status', target: '好印象', value: 5 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2303020,
        name: '最高にハッピーの源',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardId==4203020|cardId==4203021',
        effects: [
            { type: 'status', target: '好調', value: 3 },
            { type: '固定元気', value: 5 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2303021,
        name: '最高にハッピーの源+',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardId==4203020|cardId==4203021',
        effects: [
            { type: 'status', target: '好調', value: 3 },
            { type: '固定元気', value: 11 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2303030,
        name: 'ぱちぱち線香花火',
        description: '',
        activate_timing: 'start_turn',
        condition: '好印象>=6&turnMultiple==3',
        effects: [
            { type: 'block', value: null, options: [{type: '好印象', value: 100}] },
            { type: 'status', target: 'やる気', value: 2 },
            { type: 'fixed_direct_hp', value: -1 },
        ],
        limit: 4,
        plan: 'logic',
    },
    {
        id: 2303031,
        name: 'ぱちぱち線香花火+',
        description: '',
        activate_timing: 'start_turn',
        condition: '好印象>=6&turnMultiple==3',
        effects: [
            { type: 'block', value: null, options: [{type: '好印象', value: 100}] },
            { type: 'status', target: 'やる気', value: 3 },
            { type: 'fixed_direct_hp', value: -1 },
        ],
        limit: null,
        plan: 'logic',
    },
    {
        id: 2304010,
        name: '内なる光の耳飾り',
        description: '',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: '集中', value: 2 },
            { type: 'block', value: 1 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2304011,
        name: '内なる光の耳飾り+',
        description: '',
        activate_timing: 'start_turn',
        condition: '好調>0',
        effects: [
            { type: 'status', target: '集中', value: 3 },
            { type: 'block', value: 1 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2304020,
        name: '最後の夏の思い出',
        description: '',
        activate_timing: 'start_turn',
        condition: '集中>=3',
        effects: [
            { type: 'block', value: 10 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2304021,
        name: '最後の夏の思い出+',
        description: '',
        activate_timing: 'start_turn',
        condition: '集中>=3',
        effects: [
            { type: 'block', value: 14 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2304030,
        name: 'スタイリッシュモ一ド',
        description: '',
        activate_timing: 'start_turn',
        condition: 'やる気>=3',
        effects: [
            { type: 'status', target: '好印象', value: 3 },
            { type: 'status', target: 'やる気', value: -1 },
        ],
        limit: 3,
        plan: 'logic',
    },
    {
        id: 2304031,
        name: 'スタイリッシュモ一ド+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'やる気>=3',
        effects: [
            { type: 'status', target: '好印象', value: 3 },
            { type: 'status', target: 'やる気', value: -1 },
        ],
        limit: 4,
        plan: 'logic',
    },
    {
        id: 2305010,
        name: '夢へのライフログ',
        description: '',
        activate_timing: 'end_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: '好印象', value: null, options: [{ type: 'multiple', value: 1.5 }] },
            { type: 'score', value: null, options: [{ type: '好印象', value: 30 }] },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2305011,
        name: '夢へのライフログ+',
        description: '',
        activate_timing: 'end_turn',
        condition: 'block>=7',
        effects: [
            { type: 'status', target: '好印象', value: null, options: [{ type: 'multiple', value: 1.5 }] },
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2305020,
        name: '瓶の中のきらめき',
        description: '',
        activate_timing: 'end_turn',
        condition: '好調>=6',
        effects: [
            { type: 'status', target: '好調', value: 2 },
        ],
        limit: 4,
        plan: 'sense',
    },
    {
        id: 2305021,
        name: '瓶の中のきらめき+',
        description: '',
        activate_timing: 'end_turn',
        condition: '好調>=3',
        effects: [
            { type: 'status', target: '好調', value: 2 },
        ],
        limit: 4,
        plan: 'sense',
    },
    {
        id: 2306010,
        name: 'ひみつ特訓カーデ',
        description: '',
        activate_timing: 'increased_status:やる気',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2306011,
        name: 'ひみつ特訓カーデ+',
        description: '',
        activate_timing: 'increased_status:やる気',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 3,
        plan: 'logic',
    },
    {
        id: 2306020,
        name: 'ときめきのいっぱい',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn==1',
        effects: [
            { type: 'score', value: 3, options: [{ type: '使用したスキルカード数', value: 3 }] },
            { type: 'fixed_direct_hp', value: -2 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2306021,
        name: 'ときめきのいっぱい+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn==1',
        effects: [
            { type: 'score', value: 5, options: [{ type: '使用したスキルカード数', value: 3 }] },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2306030,
        name: '温泉の後のお楽しみ',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'usedCardCountMultiple==4',
        effects: [
            { type: 'status', target: '集中', value: null, options: [{ type: 'multiple', value: 1.3 }] },
            { type: '固定元気', value: 2 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2306031,
        name: '温泉の後のお楽しみ+',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'usedCardCountMultiple==4',
        effects: [
            { type: 'status', target: '集中', value: null, options: [{ type: 'multiple', value: 1.3 }] },
            { type: '固定元気', value: 7 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2306040,
        name: 'う～ら〜め〜し～や〜',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
            { type: '固定元気', value: 5 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2306041,
        name: 'う～ら〜め〜し～や〜+',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
            { type: '固定元気', value: 7 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2307010,
        name: 'ゲーセンの戦利品',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turn==1',
        effects: [
            { type: 'status', target: '集中', value: 3 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2307011,
        name: 'ゲーセンの戦利品+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turn==1',
        effects: [
            { type: 'status', target: '集中', value: 4 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2307020,
        name: 'カエル印の扇風機',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'cardType==active&やる気>=12',
        effects: [
            { type: 'score', value: null, options: [{ type: 'やる気', value: 270 }] },
            { type: 'fixed_direct_hp', value: -2 },
        ],
        limit: 4,
        plan: 'logic',
    },
    {
        id: 2307021,
        name: 'カエル印の扇風機+',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'cardType==active&やる気>=12',
        effects: [
            { type: 'score', value: null, options: [{ type: 'やる気', value: 340 }] },
            { type: 'fixed_direct_hp', value: -2 },
        ],
        limit: 4,
        plan: 'logic',
    },
    {
        id: 2308010,
        name: 'みちくさ研究ノート',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn<=2',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 50 }] },
            { type: 'fixed_direct_hp', value: -1 },
        ],
        limit: null,
        plan: 'logic',
    },
    {
        id: 2308011,
        name: 'みちくさ研究ノート+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn<=2',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 65 }] },
            { type: 'fixed_direct_hp', value: -1 },
        ],
        limit: null,
        plan: 'logic',
    },
    { 
        id: 2308020,
        name: 'まだ見ぬ世界へ',
        description: '',
        activate_timing: 'start_turn',
        condition: 'hpPer<=50',
        effects: [
            { type: 'status', target: '集中', value: 5 },
            { type: 'status', target: '消費体力削減', value: 2 },
            { type: 'upgrade', value: null },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2308021,
        name: 'まだ見ぬ世界へ+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'hpPer<=50',
        effects: [
            { type: 'status', target: '集中', value: 7 },
            { type: 'status', target: '消費体力削減', value: 3 },
            { type: 'upgrade', value: null },
        ],
        limit: 1,
        plan: 'sense',
    },
    { 
        id: 2308030,
        name: '一堆日本字+',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'hpPer<=50',
        effects: [
            { type: 'score', value: null, options: [{ type: '消费体力数', value: 220 }] },
            { type: 'hp', value: 6 },
            { type: 'status', target: '元気増加無効', value: 2 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2308031,
        name: '一堆日本字+',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'hpPer<=50',
        effects: [
            { type: 'status', target: '集中', value: 7 },
            { type: 'status', target: '元気増加無効', value: 3 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 2309010,
        name: '等身大のレディリップ',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn<=2',
        effects: [
            { type: 'score', value: 5 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2309011,
        name: '等身大のレディリップ+',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn<=3',
        effects: [
            { type: 'score', value: 5 },
        ],
        limit: 3,
        plan: 'sense',
    },
    {
        id: 2309020,
        name: 'きみと分け合う夏',
        description: '',
        activate_timing: 'start_turn',
        condition: '消費体力減少>0',
        effects: [
            { type: 'status', target: '絶好調', value: 1 },
            { type: 'draw', value: 1 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 2309021,
        name: 'きみと分け合う夏+',
        description: '',
        activate_timing: 'start_turn',
        condition: '消費体力減少>0',
        effects: [
            { type: 'status', target: '絶好調', value: 1 },
            { type: 'draw', value: 1 },
        ],
        limit: 3,
        plan: 'sense',
    },
    {
        id: 2309030,
        name: 'ぱたぱたうちわ',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'usedCardCountMultiple==3',
        effects: [
            { type: 'block', value: 1 },
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2309031,
        name: 'ぱたぱたうちわ+',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'usedCardCountMultiple==3',
        effects: [
            { type: 'block', value: 2 },
            { type: 'status', target: 'やる気', value: 4 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 2310010,
        name: '転がり続ける元気の源',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'cardType==mental&やる気>=5',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 2310011,
        name: '転がり続ける元気の源+',
        description: '',
        activate_timing: 'after_use_card',
        condition: 'cardType==mental&やる気>=5',
        effects: [
            { type: 'status', target: 'やる気', value: 5 },
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
        plan: 'logic',
    },
    /**
     * SSRサポ
     */
    {
        id: 3300010,
        name: '得体のしれないモノ',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==visual',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 1, options: [{ type: '上昇量', value: 50 }] },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 3300020,
        name: '星のリトルプリンス',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==visual',
        effects: [
            { type: '固定元気', value: 2 },
        ],
        limit: null,
        plan: 'free',
    },
    {
        id: 3300030,
        name: '悔しさの象徴',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==dance',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 1, options: [{ type: '上昇量', value: 50 }] },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 3300040,
        name: '曇りをぬぐったタオル',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'turnType==vocal&cardType==active',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 3300050,
        name: 'スカウト遮り帽',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==vocal',
        effects: [
            { type: 'draw', value: 1 },
            { type: '固定元気', value: 2 },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 3300060,
        name: '信頼の証',
    },
    {
        id: 3300070,
        name: '満開ペアヘアピン',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'turnType==vocal&cardType==active',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 3300080,
        name: '仲直りのきっかけ',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==visual',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
        plan: 'free',
    },
    {
        id: 3300090,
        name: '夢にあふれた大荷物',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==dance',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
        plan: 'free',
    },
    {
        id: 3300100,
        name: '天川ラーメン巡り',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==vocal',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: 1,
        plan: 'free',
    },
    {
        id: 3300110,
        name: '虹かけるクロス',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'turnType==dance&cardType==active',
        effects: [
            { type: 'hp', value: 2 },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 3300120,
        name: '負けず嫌いの勲章',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==dance',
        effects: [
            { type: 'score', value: null, options: [{ type: 'やる気', value: 50 }] },
        ],
        limit: null,
        plan: 'logic',
    },
    {
        id: 3300130,
        name: 'オーバーパワーボール',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==vocal',
        effects: [
            { type: 'status', target: '集中', value: 4 },
            { type: 'fixed_direct_hp', value: -2 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 3300140,
        name: '873シューター',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==dance',
        effects: [
            { type: 'status', target: '好印象', value: 2 },
            { type: 'hp', value: 1 },
        ],
        limit: 2,
        plan: 'logic',
    },
    {
        id: 3300150,
        name: 'ほっこりまんぷく',
    },
    {
        id: 3300160,
        name: 'とろけた時間',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==vocal',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 1, options: [{ type: '上昇量', value: 50 }] },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 3300170,
        name: 'みんなの教科書',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==vocal&hpPer<=50',
        effects: [
            { type: 'hp', value: 4 },
        ],
        limit: 1,
    },
    {
        id: 3300190,
        name: 'いじっぱりバルーン',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnType==dance&好印象>=3',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 2,
        plan: 'logic',
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
        description: '8ターン開始時、スコア+15、元気+15（1回）',
        activate_timing: 'start_turn',
        condition: 'turn==8',
        effects: [
            { type: 'score', value: 15 },
            { type: 'block', value: 15 },
        ],
        limit: 1,
        plan: 'free',
    },
    {
        id: 4240512,
        name: '初星オブジェ（紫）',
        description: 'ターン開始時、好調3ターン、スコア上昇量増加50%（4ターン）（1回）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '好調', value: 3 },
            { type: 'status', target: 'パラメータ上昇量増加', value: 4, options: [{ type: '上昇量', value: 50 }] },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 4240513,
        name: '初星ライト（オレンジ）',
        description: '好印象が増加後、好印象が10以上の場合、好印象+4、好印象の50%分スコア上昇',
        activate_timing: 'increased_status:好印象',
        condition: '好印象>=10',
        effects: [
            { type: 'status', target: '好印象', value: 4 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 50 }] },
        ],
        limit: null,
        plan: 'logic',
    },

    {
        id: 4240612,
        name: '初星オブジェ（紫）',
        description: '絶好調効果のスキルカード使用後、好調が4ターン以上の場合、スキルカード使用数追加+1',
        activate_timing: 'after_use_card',
        condition: 'cardEffectInclude==絶好調&好調>=4',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
        ],
        limit: null,
        plan: 'sense',
    },
    {
        id: 4240613,
        name: '初星ライト（紫）',
        description: 'スキルカードを2枚使用する度、元気の50%分スコア上昇',
        activate_timing: 'after_use_card',
        condition: 'usedCardCountMultiple==2',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 50 }] },
        ],
        limit: null,
        plan: 'logic',
    },

    {
        id: 4240621,
        name: '初星オブジェ（銀）',
        description: '8ターン開始時、集中2倍（1回）',
        activate_timing: 'start_turn',
        condition: 'turn==8',
        effects: [
            { type: 'status', target: '集中', value: null, options: [{ type: 'multiple', value: 2 }] },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 4240622,
        name: '初星ライト（オレンジ）',
        description: 'アクティブスキルカード使用時、好印象の170%分スコア上昇（3回）',
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 170 }] },
        ],
        limit: 3,
        plan: 'logic',
    },
    {
        id: 4240623,
        name: '初星ライト（紫）',
        description: 'ターン開始時，やる気+4（2回）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 4 },
        ],
        limit: 2,
        plan: 'logic',
    },

    {
        id: 4240711,
        name: '初星オブジェ（銀）',
        description: '消費体力減少効果のスキルカード使用時、集中+3、好調3ターン、体力消費3（3回）',
        activate_timing: 'before_use_card',
        condition: 'cardEffectInclude==消費体力減少',
        effects: [
            { type: 'status', target: '集中', value: 3 },
            { type: 'status', target: '好調', value: 3 },
            { type: 'hp', value: -3 },
        ],
        limit: 3,
        plan: 'sense',
    },
    {
        id: 4240713,
        name: '初星ライト（紫）',
        description: 'アクティブスキルカード使用時、やる気+3（4回）',
        activate_timing: 'before_use_card',
        condition: 'cardType==active',
        effects: [
            { type: 'status', target: 'やる気', value: 3 },
        ],
        limit: 4,
        plan: 'logic',
    },

    {
        id: 4240722,
        name: '初星オブジェ（紫）',
        description: 'ターン開始時、集中+5、消費体力増加1ターン（2回）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '集中', value: 5 },
            { type: 'status', target: '消費体力増加', value: 1 },
        ],
        limit: 2,
        plan: 'sense',
    },
    {
        id: 4240723,
        name: '初星ライト（オレンジ）',
        description: 'ターン開始時、好印象+4、元気増加無効1ターン（6回）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 4 },
            { type: 'status', target: '元気増加無効', value: 1 },
        ],
        limit: 6,
        plan: 'logic',
    },

    {
        id: 4240811,
        name: '初星バッチ（赤）',
        description: 'ターン開始時、消費体力減少状態の場合、スコア上昇量増加15%',
        activate_timing: 'start_turn',
        condition: '消費体力減少>0',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 100, options: [{ type: '上昇量', value: 15 }] },
        ],
        limit: null,
        plan: 'free',
    },
    {
        id: 4240812,
        name: '初星オブジェ（紫）',
        description: 'ターン開始時、好調が6ターン以上の場合、好調6ターン、集中+6（1回）',
        activate_timing: 'start_turn',
        condition: '好調>=6',
        effects: [
            { type: 'status', target: '好調', value: 6 },
            { type: 'status', target: '集中', value: 6 },
        ],
        limit: 1,
        plan: 'sense',
    },
    {
        id: 4240813,
        name: '初星ライト（紫）',
        description: 'ターン開始時、やる気+4、好印象+4（1回）',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 4 },
            { type: 'status', target: '好印象', value: 4 },
        ],
        limit: 1,
        plan: 'logic',
    },

    {
        id: 4240821,
        name: '初星バッチ（赤）',
        description: '',
        activate_timing: 'start_turn',
        condition: 'remain_turn<=4',
        effects: [
            { type: 'status', target: 'スキルカード使用数追加', value: 1 },
            { type: 'status', target: '消費体力追加', value: 1 },
        ],
        limit: 4,
        plan: 'free',
    },
    {
        id: 4240822,
        name: '初星オブジェ（紫）',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turn==11',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 2, options: [{ type: '上昇量', value: 50 }]  },
            { type: 'status', target: '好調', value: 2 },
        ],
        limit: 1,
        plan: 'sense',
    },

    {
        id: 4240911,
        name: '初星バッチ（赤）',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'usedCardTurnCountMultiple==2',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 5, options: [{ type: '上昇量', value: 30 }]  },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 4240912,
        name: '初星オブジェ（紫）',
        description: '',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '集中', value: 2 },
        ],
        limit: 4,
        plan: 'sense',
    },
    {
        id: 4240913,
        name: '初星ライト（紫）',
        description: '',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: 'やる気', value: 6 },
            { type: 'status', target: '消費体力増加', value: 1 },
        ],
        limit: 2,
        plan: 'logic',
    },

    {
        id: 4240921,
        name: '初星バッチ（赤）',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardEffectInclude==消費体力減少',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 6, options: [{ type: '上昇量', value: 30 }]  },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 4240922,
        name: '初星オブジェ（紫）',
        description: '',
        activate_timing: 'start_turn',
        condition: '',
        effects: [
            { type: 'status', target: '好印象', value: 6 },
            { type: 'block', value: 5 },
        ],
        limit: 1,
        plan: 'logic',
    },
    {
        id: 4240923,
        name: '初星ライト（紫）',
        description: '',
        activate_timing: 'end_turn',
        condition: '好印象>=8',
        effects: [
            { type: 'status', target: 'やる気', value: 5 },
        ],
        limit: 3,
        plan: 'logic',
    },

    {
        id: 4241011,
        name: '初星バッチ（赤）',
        description: '',
        activate_timing: 'start_turn',
        condition: 'turnMultiple==3&hpPer>=50',
        effects: [
            { type: 'status', target: 'パラメータ上昇量増加', value: 4, options: [{ type: '上昇量', value: 70 }]  },
        ],
        limit: 3,
        plan: 'free',
    },
    {
        id: 4241012,
        name: '初星オブジェ（紫）',
        description: '',
        activate_timing: 'before_use_card',
        condition: 'cardType==mental',
        effects: [
            { type: 'status', target: '絶好調', value: 2 },
            { type: 'hp', value: 3 },
            { type: 'status', target: '消費体力増加', value: 1 },
        ],
        limit: null,
        plan: 'sense',
    },
    {
        id: 4241013,
        name: '初星ライト（紫）',
        description: '',
        activate_timing: 'end_turn',
        condition: '好印象>=8',
        effects: [
            { type: 'status', target: 'やる気', value: 5 },
        ],
        limit: 3,
        plan: 'logic',
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