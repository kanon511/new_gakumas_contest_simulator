import { skillCardList } from "./SkillCardList.js";

export class SkillCard {
    
    constructor (skillCardId) {
        const skillCard = skillCardList.getSkillCardById(skillCardId);
        for (const propertyName in skillCard) {
            if (skillCard.hasOwnProperty(propertyName)) {
                this[propertyName] = skillCard[propertyName];
            }
        }
        this.available = false; 
    }
    
    get score () {
        return this.effects.reduce((p, v) => (v.type == 'score' ? v.actualValue : 0), 0)
    }

    get block () {
        return this.effects.reduce((p, v) => (v.type == 'block' ? v.actualValue : 0), 0)
    }

    setAvailable (available) {
        this.available = available;
    }

    setEffectActualValue () {
        
    }

    resetEffectActualValue () {
        
    }

}