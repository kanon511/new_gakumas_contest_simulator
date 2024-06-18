import { pIdolData } from '../data/pIdolData.js'

class PIdolList {
    constructor () {
        this.data = pIdolData;
        this.index = {};
        this.index_character_id = {};
        for (let i = 0; i < pIdolData.length; i++) {
            this.index[pIdolData[i].id] = i;
            if (!(pIdolData[i].character_id in this.index_character_id)) {
                this.index_character_id[pIdolData[i].character_id] = [];
            }
            this.index_character_id[pIdolData[i].character_id].push(pIdolData[i].id);
        }
    }

    getList () {
        return this.data;
    }

    getById (id) {
        return this.data[this.index[id]];
    }

    getByCharacterId (character_id) {
        return this.index_character_id[character_id].map(id=>this.getById(id));
    }
}

export const pIdolList = new PIdolList();