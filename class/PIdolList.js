import { pIdolData } from '../data/pIdolData.js'

class PIdolList {
    constructor () {
        this.data = pIdolData;
        this.index = {};
    }
    getList () {
        return this.data;
    }
}

export const pIdolList = new PIdolList();