import { skillCardData } from '../data/skillCardData.js'

class SkillCardList {
    constructor () {
        this.skillCardData = skillCardData;
        this.index = {};
        for (let i = 0; i < skillCardData.length; i++) {
            this.index[skillCardData[i].id] = i;
        }
    }
    getSkillCardById (id) {
        return this.skillCardData[this.index[id]];
    }
}

export const skillCardList = new SkillCardList();