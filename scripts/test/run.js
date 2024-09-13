import { Contest } from '../simulator/class/Contest.js';
import { PIdol } from '../simulator/class/PIdol.js';
import { AutoContest } from '../simulator/class/AutoContest.js';
import { SkillCard, SkillCardData } from '../simulator/data/skillCardData.js';

function DOM_text_to_elememt (text) {
    const temporaryDiv = document.createElement('div');
    temporaryDiv.innerHTML = text;
    return temporaryDiv.firstElementChild;
}

function DOM_delete_allChildren (parent) {
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function parseExecutionLog(executeLog) {
    let htmlString = '<div>';
    for (const log of executeLog) {
        if (log.type == 'use') {
            if (log.sourceType == 'skillCard') {
                htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-clone"></i>スキルカード「${log.source.name}」</div><div class="log-block-content">`;
            }
            else if (log.sourceType == 'pItem') {
                htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-chess-rook"></i>Pアイテム「${log.source.name}」</div><div class="log-block-content">`;
            }
            else if (log.sourceType == 'pDrink') {
                htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-wine-bottle"></i>Pドリンク「${log.source.name}」</div><div class="log-block-content">`;
            }
            else if (log.sourceType == 'pStatus') {
                htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-forward"></i>ステータス効果「${log.source.name}」</div><div class="log-block-content">`;
            }
            else if (log.sourceType == 'pDelay') {
                htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-link"></i>予約効果「${log.source.name}」</div><div class="log-block-content">`;
            }
            // else if (log.sourceType == 'pIdol') {
            //     htmlString += `<div><div><i class="fa-solid fa-person-rays"></i>${log.source.name}を使った</div>`;
            // }
            else if (log.sourceType == 'pRest') {
                htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-bed"></i>${log.source.name}</div><div class="log-block-content">`;
            }
        }
        else if (log.type == 'end') {
            htmlString += '</div></div>';
        }
        else if (log.type == 'show') {
            htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-book-open"></i>${log.message}</div><div class="log-block-content">`;
        }
        else {
            htmlString += `<div>${log.message}</div>`;
        }
    }
    htmlString += '</div>';
    return DOM_text_to_elememt(htmlString);
}

function parseSimulationLog(simulationLog) {
    const container = document.createElement('div');
    for (let log = simulationLog.log.length - 1; log >= 0; log--) {
        const textElement = `
        <div>
            <div class="log-turn" data-turnType="${simulationLog.log[log].turnType}">
                <div>${simulationLog.log[log].turn}ターン目　</div>
                <div class="log-turn-status">
                　
                    <i class="fa-solid fa-star"></i>${simulationLog.log[log].status.score}
                    <i class="fa-solid fa-heart"></i>${simulationLog.log[log].status.hp}
                    <i class="fa-solid fa-shield-halved"></i>${simulationLog.log[log].status.block}
                </div>
            </div>
        </div>`;
        container.appendChild(DOM_text_to_elememt(textElement));
        container.appendChild(parseExecutionLog(simulationLog.log[log].executionLog));
    }
    return container;
}

export const run = (data,container) => {
    let handSkillCardIds = []

    const pIdol = new PIdol({ 
        parameter: data.parameter, 
        plan: data.plan,
        trend: data.trend,
        pItemIds: data.pItemIds,
        skillCardIds: data.skillCardIds,
        autoId: data.autoId
    });

    const contest = new Contest({
        pIdol: pIdol,
        maxTurn: data.turn,
        criteria: data.criteria,
        turnTypes: data.turnTypes,
    });

    const autoContest = new AutoContest(contest);

    const element_section_button = document.getElementById('section-button');
    element_section_button.addEventListener('click', () => {
        const element_section_option = document.getElementById('use_card_list');
        const element_selected_hand_card_text = document.getElementById('selected-hand-card-text');
        if (element_section_option.value != '-1'){
            handSkillCardIds.push(element_section_option.value);
            element_selected_hand_card_text.appendChild(DOM_text_to_elememt(`<div>${SkillCardData.getById(element_section_option.value).name}</div>`))
        }
        element_section_option.value = '-1';
    });

    let kanon = 0
    const element_use_button = document.getElementById('use-button');
    const element_turn_color = document.getElementById('turn-color');
    function addEvent() {
        pIdol.turnType.turnTypes[kanon]=element_turn_color.value
        kanon++
        pIdol.deck.index_first_draw = []
        pIdol.deck.skillCards = handSkillCardIds.map(id => new SkillCard(id));
        pIdol.deck.index_drawPile = []
        for (let i = 0; i < handSkillCardIds.length; i++) {
            pIdol.deck.index_drawPile.push(i)
        }
        handSkillCardIds = []
        DOM_delete_allChildren(document.getElementById('selected-hand-card-text'));
        contest.startTurn();
        let loopout = 0;
        for (let endFlag = false; !endFlag;) {
            endFlag = contest.useCard(autoContest.select());
            if (loopout > 100) {
                throw new Error('カード選択無限ループバグ | '+`${contest.getHands().map(item=>item.name+':'+item.evaluation).join(', ')} + ${autoContest.select()}`);
            }
            loopout++;
        }
        contest.finishTurn();
        DOM_delete_allChildren(container);
        container.appendChild(parseSimulationLog(contest.getResult()))
        if (contest.checkkFinishContest()) element_use_button.removeEventListener('click', addEvent);
    }
    element_use_button.addEventListener('click', addEvent);

    return contest.getResult();

};