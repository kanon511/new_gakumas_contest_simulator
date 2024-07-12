
export class AutoContest {
    
    constructor () {

    }

    getIndexByMax (array) { 
        array.reduce(
            (p, c, i) => c > p.value ? {value: c, index: i} : p, {value: -Infinity, index: 0}
        ).index
    }

    select (contest, skillCards, pIdol) {
        return 0;
        const valueList = [];
        for (const skillCard of skillCards) {
            valueList.push(this.calcSkillCardValue(contest, skillCards, pIdol));
        }
        const selectedIndex = this.getIndexByMax(valueList);
        return selectedIndex;
    }

    calcSkillCardValue (contest, skillCard, pIdol) {
        // 評価関数
    }

}