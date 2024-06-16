
export class PIdolStatus {

    #status;
    #reduceInTurnendKeys;
    #currentTurnFirstAdds;
    #debuffKeys;

    constructor () {
        // 違法増築の繰り返しなので
        // 多分ステータスの効果自体をDataで定義して使った方がいい
        this.#status = {
            '集中': 0,
            '好調': 0,
            '絶好調': 0,
            'やる気': 0,
            '好印象': 0,
            '消費体力減少': 0, 
            '消費体力軽減': 0,
            '消費体力増加': 0,
            '元気増加無効': 0,
            '低下状態無効': 0,
            'アクティブスキルカード使用時固定元気+2': 0,
            'アクティブスキルカード使用時集中+1': 0,
            'メンタルスキルカード使用時好印象+1': 0,
            'メンタルスキルカード使用時やる気+1': 0,
            'ターン終了時、好印象+1': 0,
            'ターン終了時、集中が3以上の場合、集中+2': 0,
            'ターン終了時、好印象が3以上の場合、好印象+3': 0, 
            '使用したスキルカード数': 0,
            'スキルカード使用数追加': 0,
        };
        this.#reduceInTurnendKeys = ['好調', '絶好調', '好印象', '消費体力減少', '消費体力増加', '元気増加無効'];
        this.#debuffKeys = ['消費体力増加', '元気増加無効'];
        this.#currentTurnFirstAdds = [];
    }

    reduceInTurnend ()  {
        for (const key of this.#reduceInTurnendKeys) {
            if (this.#status[key] <= 0) continue;
            if (this.#currentTurnFirstAdds.includes(key)) continue;
            this.#status[key]--;
        }
        this.#status['使用したスキルカード数'] = 0;
        this.#currentTurnFirstAdds = [];
    }

    get (type) {
        if (!(type in this.#status)) {
            throw new Error(`${type}は存在しないステータスです。`);
        }
        return this.#status[type];
    }

    getAll () {
        return this.#status;
    }

    add (type, value) {
        if (!(type in this.#status)) {
            throw new Error(`${type}は存在しないステータスです。`);
        }
        if (this.#status[type] == 0) {
            this.#currentTurnFirstAdds.push(type);
        }
        this.#status[type] += value;
    }

    reduce (type, value) {
        if (!(type in this.#status)) {
            throw new Error(`${type}は存在しないステータスです。`);
        }
        this.#status[type] -= value;
        if (this.#status[type] < 0) {
            this.#status[type] = 0;
        }
    }
}