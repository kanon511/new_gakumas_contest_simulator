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
        if (!(id in this.index)) {
            throw new Error('idと一致するskillCardがありません。');
        }
        return this.skillCardData[this.index[id]];
    }
    getList () {
        return this.skillCardData;
    }
    // static index = Object.fromEntries(skillCardData.map((item, i) => [item.id, i]));
    // static getList () {
    //     return skillCardData;
    // }
    // static getSkillCardById (id) {
    //     if (!(id in this.index)) {
    //         throw new Error('idと一致するskillCardがありません。');
    //     }
    //     return skillCardData[this.index[id]];
    // }
}

export const skillCardList = new SkillCardList();