/**
 * IDの付け方
 * 0_00_00
 * レアリティ：R1, SR2, SSR3
 * キャラ　　：咲季01, 手毬02, ことね03, 麻央04, リーリヤ05, 千奈06, 清夏07, 広08, 莉波09, 佑芽10
 * 固有番号　：2桁番号
 * 
 * 実装：7/22まで
 */

const pIdolData = [
    {
        id: 10101,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 101,
        name: '花海咲季',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 2201010,
        unique_pItem_id: 2101010,
    },
    {
        id: 10102,
        rarity: 'R',
        episode_name: '初声',
        character_id: 101,
        name: '花海咲季',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 2201020,
        unique_pItem_id: 2101020,
    },
    {
        id: 20101,
        rarity: 'SR',
        episode_name: 'わたしが一番！',
        character_id: 101,
        name: '花海咲季',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 3201010,
        unique_pItem_id: 2201010,
    },
    {
        id: 30101,
        rarity: 'SSR',
        episode_name: 'Fighting My Way',
        character_id: 101,
        name: '花海咲季',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 4201010,
        unique_pItem_id: 2301010,
    },
    {
        id: 30102,
        rarity: 'SSR',
        episode_name: 'Boom Boom Pow',
        character_id: 101,
        name: '花海咲季',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 4201020,
        unique_pItem_id: 2301020,
    },
    {
        id: 30103,
        rarity: 'SSR',
        episode_name: '冠菊',
        character_id: 101,
        name: '花海咲季',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 4201030,
        unique_pItem_id: 2301030,
    },
    {
        id: 30104,
        rarity: 'SSR',
        episode_name: '古今东西',
        character_id: 101,
        name: '花海咲季',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 4201040,
        unique_pItem_id: 2301040,
    },
    {
        id: 10201,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 102,
        name: '月村手毬',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 2202010,
        unique_pItem_id: 2102010,
    },
    {
        id: 10202,
        rarity: 'R',
        episode_name: '初声',
        character_id: 102,
        name: '月村手毬',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 2202020,
        unique_pItem_id: 2102020,
    },
    {
        id: 20201,
        rarity: 'SR',
        episode_name: '一匹狼',
        character_id: 102,
        name: '月村手毬',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 3202010,
        unique_pItem_id: 2202010,
    },
    {
        id: 30201,
        rarity: 'SSR',
        episode_name: 'Luna say maybe',
        character_id: 102,
        name: '月村手毬',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 4202010,
        unique_pItem_id: 2302010,
    },
    {
        id: 30202,
        rarity: 'SSR',
        episode_name: 'アイヴイ',
        character_id: 102,
        name: '月村手毬',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 4202020,
        unique_pItem_id: 2302020,
    },
    {
        id: 30203,
        rarity: 'SSR',
        episode_name: '仮装狂騒曲',
        character_id: 102,
        name: '月村手毬',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 4202030,
        unique_pItem_id: 2302030,
    },
    {
        id: 10301,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 103,
        name: '藤田ことね',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 2203010,
        unique_pItem_id: 2103010,
    },
    {
        id: 10302,
        rarity: 'R',
        episode_name: '初声',
        character_id: 103,
        name: '藤田ことね',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 2203020,
        unique_pItem_id: 2103020,
    },
    {
        id: 20301,
        rarity: 'SR',
        episode_name: 'カワイイ♡はじめました',
        character_id: 103,
        name: '藤田ことね',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 3203010,
        unique_pItem_id: 2203010,
    },
    {
        id: 30301,
        rarity: 'SSR',
        episode_name: '世界一可愛い私',
        character_id: 103,
        name: '藤田ことね',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 4203010,
        unique_pItem_id: 2303010,
    },
    {
        id: 30302,
        rarity: 'SSR',
        episode_name: 'Yellow Big Bang!',
        character_id: 103,
        name: '藤田ことね',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 4203020,
        unique_pItem_id: 2303020,
    },
    {
        id: 30303,
        rarity: 'SSR',
        episode_name: '冠菊',
        character_id: 103,
        name: '藤田ことね',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 4203030,
        unique_pItem_id: 2303030,
    },
    {
        id: 10401,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 104,
        name: '有村麻央',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 2204010,
        unique_pItem_id: 2104010,
    },
    {
        id: 20401,
        rarity: 'SR',
        episode_name: 'はじまりはカッコよく',
        character_id: 104,
        name: '有村麻央',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 3204010,
        unique_pItem_id: 2204010,
    },
    {
        id: 30401,
        rarity: 'SSR',
        episode_name: 'Fluorite',
        character_id: 104,
        name: '有村麻央',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 4204010,
        unique_pItem_id: 2304010,
    },
    {
        id: 30402,
        rarity: 'SSR',
        episode_name: 'キミとセミブルー',
        character_id: 104,
        name: '有村麻央',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 4204020,
        unique_pItem_id: 2304020,
    },
    {
        id: 30403,
        rarity: 'SSR',
        episode_name: 'Feel Jewel Dream',
        character_id: 104,
        name: '有村麻央',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 4204030,
        unique_pItem_id: 2304030,
    },
    {
        id: 10501,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 105,
        name: '葛城リーリヤ',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 2205010,
        unique_pItem_id: 2105010,
    },
    {
        id: 10502,
        rarity: 'R',
        episode_name: '初心',
        character_id: 105,
        name: '葛城リーリヤ',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 2205020,
        unique_pItem_id: 2105020,
    },
    {
        id: 20501,
        rarity: 'SR',
        episode_name: '一つ踏み出した先に',
        character_id: 105,
        name: '葛城リーリヤ',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 3205010,
        unique_pItem_id: 2205010,
    },
    {
        id: 30501,
        rarity: 'SSR',
        episode_name: '白線',
        character_id: 105,
        name: '葛城リーリヤ',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 4205010,
        unique_pItem_id: 2305010,
    },
    {
        id: 30502,
        rarity: 'SSR',
        episode_name: '冠菊',
        character_id: 105,
        name: '葛城リーリヤ',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 4205020,
        unique_pItem_id: 2305020,
    },
    {
        id: 10601,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 106,
        name: '倉本千奈',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 2206010,
        unique_pItem_id: 2106010,
    },
    {
        id: 10602,
        rarity: 'R',
        episode_name: '初心',
        character_id: 106,
        name: '倉本千奈',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 2206020,
        unique_pItem_id: 2106020,
    },
    {
        id: 20601,
        rarity: 'SR',
        episode_name: '胸を張って一歩ずつ',
        character_id: 106,
        name: '倉本千奈',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 3206010,
        unique_pItem_id: 2206010,
    },
    {
        id: 30601,
        rarity: 'SSR',
        episode_name: 'Wonder Scale',
        character_id: 106,
        name: '倉本千奈',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 4206010,
        unique_pItem_id: 2306010,
    },
    {
        id: 30602,
        rarity: 'SSR',
        episode_name: '日々、発見的ステップ！',
        character_id: 106,
        name: '倉本千奈',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 4206020,
        unique_pItem_id: 2306020,
    },
    {
        id: 30603,
        rarity: 'SSR',
        episode_name: 'ようこそ初星温泉',
        character_id: 106,
        name: '倉本千奈',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 4206030,
        unique_pItem_id: 2306030,
    },
    {
        id: 30604,
        rarity: 'SSR',
        episode_name: '仮装狂騒曲',
        character_id: 106,
        name: '倉本千奈',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 4206040,
        unique_pItem_id: 2306040,
    },
    {
        id: 10701,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 107,
        name: '紫雲清夏',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 2207010,
        unique_pItem_id: 2107010,
    },
    {
        id: 20701,
        rarity: 'SR',
        episode_name: '夢へのリスタート',
        character_id: 107,
        name: '紫雲清夏',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 3207010,
        unique_pItem_id: 2207010,
    },
    {
        id: 30701,
        rarity: 'SSR',
        episode_name: 'Tame-Lie-One-Step',
        character_id: 107,
        name: '紫雲清夏',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 4207010,
        unique_pItem_id: 2307010,
    },
    {
        id: 30702,
        rarity: 'SSR',
        episode_name: 'キミとセミブルー',
        character_id: 107,
        name: '紫雲清夏',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 4207020,
        unique_pItem_id: 2307020,
    },
    {
        id: 10801,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 108,
        name: '篠澤広',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 2208010,
        unique_pItem_id: 2108010,
    },
    {
        id: 20801,
        rarity: 'SR',
        episode_name: '一番向いてないこと',
        character_id: 108,
        name: '篠澤広',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 3208010,
        unique_pItem_id: 2208010,
    },
    {
        id: 30801,
        rarity: 'SSR',
        episode_name: '光景',
        character_id: 108,
        name: '篠澤広',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 4208010,
        unique_pItem_id: 2308010,
    },
    {
        id: 30802,
        rarity: 'SSR',
        episode_name: 'コントラスト',
        character_id: 108,
        name: '篠澤広',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 4208020, 
        unique_pItem_id: 2308020, 
    },
    {
        id: 30803,
        rarity: 'SSR',
        episode_name: '仮装狂騒曲',
        character_id: 108,
        name: '篠澤広',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 4208030, 
        unique_pItem_id: 2308030, 
    },
    {
        id: 10901,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 109,
        name: '姫崎莉波',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 2209010,
        unique_pItem_id: 2109010,
    },
    {
        id: 10902,
        rarity: 'R',
        episode_name: '初心',
        character_id: 109,
        name: '姫崎莉波',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 2209020,
        unique_pItem_id: 2109020,
    },
    {
        id: 20901,
        rarity: 'SR',
        episode_name: '『私らしさ』のはじまり',
        character_id: 109,
        name: '姫崎莉波',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 3209010,
        unique_pItem_id: 2209010,
    },
    {
        id: 30901,
        rarity: 'SSR',
        episode_name: 'clumsy trick',
        character_id: 109,
        name: '姫崎莉波',
        plan: 'sense',
        trend: '集中',
        unique_skillCard_id: 4209010,
        unique_pItem_id: 2309010,
    },
    {
        id: 30902,
        rarity: 'SSR',
        episode_name: 'キミとセミブルー',
        character_id: 109,
        name: '姫崎莉波',
        plan: 'sense',
        trend: '好調',
        unique_skillCard_id: 4209020,
        unique_pItem_id: 2309020,
    },
    {
        id: 30903,
        rarity: 'SSR',
        episode_name: 'ようこそ初星温泉',
        character_id: 109,
        name: '姫崎莉波',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 4209030,
        unique_pItem_id: 2309030,
    },
    {
        id: 30904,
        rarity: 'SSR',
        episode_name: 'L.U.V',
        character_id: 109,
        name: '姫崎莉波',
        plan: 'logic',
        trend: '好印象',
        unique_skillCard_id: 4209040,
        unique_pItem_id: 2309040,
    },
    {
        id: 11001,
        rarity: 'R',
        episode_name: '学園生活',
        character_id: 110,
        name: '花海佑芽',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 2210010,
        unique_pItem_id: 2110010,
    },
    {
        id: 21001,
        rarity: 'SR',
        episode_name: 'アイドル、はじめっ！',
        character_id: 110,
        name: '花海佑芽',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 3210010,
        unique_pItem_id: 2210010,
    },
    {
        id: 31001,
        rarity: 'SSR',
        episode_name: 'The Rolling Riceball',
        character_id: 110,
        name: '花海佑芽',
        plan: 'logic',
        trend: 'やる気',
        unique_skillCard_id: 4210010,
        unique_pItem_id: 2310010,
    },
];

export class PIdolData {
    
    // property
    static #pIdolData = pIdolData;
    static #index = Object.fromEntries(this.#pIdolData.map((item, i) => [item.id, i]));
    static #index_character_id = (()=>{
        const result = {};
        for (let i = 0; i < pIdolData.length; i++) {
            if (!(pIdolData[i].character_id in result)) {
                result[pIdolData[i].character_id] = [];
            }
            result[pIdolData[i].character_id].push(pIdolData[i].id);
        }
        return result;
    })();

    // method

    static getAll () {
        return this.#pIdolData;
    }

    static getById (id) {
        return this.#pIdolData[this.#index[id]];
    }

    static getByCharacterId (character_id) {
        return this.#index_character_id[character_id].map(id=>this.getById(id));
    }

}