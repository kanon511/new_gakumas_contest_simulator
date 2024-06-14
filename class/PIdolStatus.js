
export class PIdolStatus {

    #status;
    #reduceInTurnendKeys;
    #currentTurnFirstAdds;

    constructor () {
        this.#status = {
            '集中': 0,
            '好調': 0,
            '絶好調': 0,
            'やる気': 0,
            '好印象': 0,
        };
        this.#reduceInTurnendKeys = ['好調', '絶好調', '好印象'];
        this.#currentTurnFirstAdds = [];
    }

    reduceInTurnend ()  {
        for (const key of this.#reduceInTurnendKeys) {
            if (this.#status[key] <= 0) continue;
            if (this.#currentTurnFirstAdds.includes(key)) continue;
            this.#status[key]--;
        }
        this.#currentTurnFirstAdds = [];
    }

    get (type) {
        if (!(type in this.#status)) {
            throw new Error('存在しないステータスです。');
        }
        return this.#status[type];
    }

    getAll () {
        return this.#status;
    }

    add (type, value) {
        if (!(type in this.#status)) {
            throw new Error('存在しないステータスです。');
        }
        if (this.#status[type] == 0) {
            this.#currentTurnFirstAdds.push(type);
        }
        this.#status[type] += value;
    }

    reduce (type, value) {
        if (!(type in this.#status)) {
            throw new Error('存在しないステータスです。');
        }
        this.#status[type] -= value;
        if (this.#status[type] < 0) {
            this.#status[type] = 0;
        }
    }
}