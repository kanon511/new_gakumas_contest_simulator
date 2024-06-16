import { pIdolData } from '../data/pIdolData.js'

class PIdolList {
    constructor () {
        this.data = pIdolData;
        this.index = {};
        for (let i = 0; i < skillCardData.length; i++) {
            this.index[skillCardData[i].id] = i;
        }
    }
    getList () {
        return this.data;
    }
}

export const pIdolList = new PIdolList();