import { PIdolData } from './simulator/data/pIdolData.js';
import { SkillCardData } from './simulator/data/skillCardData.js';
import { ContestData } from './simulator/data/contestData.js';
import { PItemData } from './simulator/data/pItemData.js';
import { run } from './simulator/run.js';

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

function DOM_set_contest (parent) {
    const fragment = document.createDocumentFragment();
    ContestData.getAll().forEach(item=>{
        const option = document.createElement('option');
        option.innerHTML = `${item.name} [Vo${item.criteria['vocal']} Da${item.criteria['dance']} Vi${item.criteria['visual']}]`;
        option.value = item.id;
        fragment.appendChild(option);
    });
    DOM_delete_allChildren(parent);
    parent.appendChild(fragment);
}

function DOM_set_characterCards (parent, number, type) {
    const textElement_card = `
    <div class="character-cards">
        <div class="card-container-item">
            <input type="checkbox" id="checkbox" class="checkbox">
            <label for="checkbox" class="checkbox-label"></label>
            <select class="select-box">
                <option value="-1">-</option>
            </select>
        </div>
    </div>`;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < number; i++) {
        const element = DOM_text_to_elememt(textElement_card);
        element.querySelector('input#checkbox').id = `checkbox_${type}_${i}`;
        element.querySelector('label').htmlFor = `checkbox_${type}_${i}`;
        fragment.appendChild(element);
    }
    DOM_delete_allChildren(parent);
    parent.appendChild(fragment);
    return Array.from(parent.children).map(element=>element.querySelector('select'));
}

function DOM_set_character (parent, pIdolList) {
    const fragment = document.createDocumentFragment();
    pIdolList.forEach(item=>{
        const option = document.createElement('option');
        option.innerHTML = `${item.rarity} [${item.epidode_name}] ${item.name}`
        option.value = item.id;
        fragment.appendChild(option);
    });
    DOM_delete_allChildren(parent);
    parent.appendChild(fragment);
}

function DOM_set_select_options (select, item_list, isBlank) {
    const fragment = document.createDocumentFragment();
    if (isBlank) {
        const option = document.createElement('option');
        option.innerHTML = '-';
        option.value = '-1';
        fragment.appendChild(option);
    }
    item_list.forEach(item=>{
        const option = document.createElement('option');
        option.innerHTML = item.name;
        option.value = item.id;
        fragment.appendChild(option);
    });
    DOM_delete_allChildren(select);
    select.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {

    // カードセレクトを挿入
    const element_main_card_box = document.getElementById('main-character-cards-box');
    const element_sub_card_box  = document.getElementById('sub-character-card-box');
    
    const element_main_cards = DOM_set_characterCards(element_main_card_box, 6, 'main');
    const element_sub_cards  = DOM_set_characterCards(element_sub_card_box, 6, 'sub');

    const element_pItem_box  = document.getElementById('main-character-pItem-box');
    const element_pItems = DOM_set_characterCards(element_pItem_box, 4, 'pItem');

    function DOM_change_color_by_card_rarity (e) {
        const id = String(e.target.value);
        const rarity = Number(id[0]);
        e.target.parentNode.dataset.rarity = rarity;
    }

    Array.from(document.querySelectorAll('.character-cards select')).forEach(element=>{
        element.addEventListener('change', DOM_change_color_by_card_rarity);
    });

    function DOM_set_select_contest_pItem (id) {
        const element_select = element_pItems[0];
        const [contestId, stageId] = String(id).split(':'); 
        const pItemId = ContestData.getById(contestId).stages[stageId].stagePItemIds[0];
        const item = PItemData.getById(pItemId);
        DOM_set_select_options(element_select, [item], false);
    }

    function DOM_set_select_unique_pItem (id) {
        const element_select = element_pItems[1];
        const pItemId = PIdolData.getById(id).unique_pIted_id;
        const item = PItemData.getById(pItemId);
        DOM_set_select_options(element_select, [item], false);
    }

    function DOM_set_select_normal_pItem () {
        const element_selects = element_pItems.slice(2);
        const list = PItemData.getAll().filter(item=>
            String(item.id)[0] == '3' && // サポートのPアイテム
            item.id % 10 == 0 && // 未強化
            item.effects
        );
        element_selects.forEach(element=>DOM_set_select_options(element, list, true));
    }
    DOM_set_select_normal_pItem();

    function DOM_set_uniqueSkillCard (type, id) {
        const element_select = (type == 'main') ? element_main_cards[0] : element_sub_cards[0];
        const uniqueSkill = SkillCardData.getById(id);
        DOM_set_select_options(element_select, [uniqueSkill], false);
    }

    function DOM_set_otherSkillCards (plan) {
        const elements = element_main_cards.slice(1).concat(element_sub_cards.slice(1));
        const skillCards = SkillCardData.getAll().filter(item=>
            (item.plan=='free'||item.plan==plan) && // プラン指定
            item.id % 10 == 0 && // 未強化指定
            item.id>2000000 && // 基本カード削除
            String(item.id)[1] != '2' // キャラ固有削除
        );
        elements.forEach(element=>DOM_set_select_options(element, skillCards, true));
    }

    let current_stage_plan = "";
    let current_main_plan = "";

    // キャラが選択されたらカードセレクトに項目挿入
    const element_main_character_select = document.getElementById('main-character');
    const element_sub_character_select  = document.getElementById('sub-character');

    element_main_character_select.addEventListener('change', (e) => {
        const id = Number(e.target.value);
        const pIdol = PIdolData.getById(id);
        DOM_delete_allChildren(element_sub_character_select);
        if (!pIdol) {
            element_sub_character_select.disabled = true;
            return;
        }
        element_sub_character_select.disabled = false;
        const dPIdols = PIdolData.getByCharacterId(pIdol.character_id).filter(idol=>idol.plan==pIdol.plan);
        DOM_set_character(element_sub_character_select, dPIdols);
        DOM_set_uniqueSkillCard('main', pIdol.unique_skillCard_id);

        // プランが変わったらカード選択を更新
        if (current_main_plan != pIdol.plan) {
            current_main_plan = pIdol.plan;
            DOM_set_otherSkillCards(current_main_plan);
        }

        DOM_set_select_unique_pItem(id);

        element_sub_character_select.dispatchEvent(new Event('change'));
    }, false);

    element_sub_character_select.addEventListener('change', (e) => {
        const id = Number(e.target.value);
        const pIdol = PIdolData.getById(id);
        DOM_set_uniqueSkillCard('sub', pIdol.unique_skillCard_id);
    }, false);

    // コンテスト一覧
    const element_contest_select = document.getElementById('contest-select');
    const element_contest_stage_select = document.getElementById('contest-stage-select');
    DOM_set_contest(element_contest_select);

    // コンテストの種類を入力したときのイベント
    element_contest_select.addEventListener('change', (e) => {
        const id = Number(e.target.value);
        const contestDetail = ContestData.getById(id);

        const fragment = document.createDocumentFragment();
        contestDetail.stages.forEach((item, i)=>{
            const option = document.createElement('option');
            const translate_plan = { 'free': 'フリー', 'sense': 'センス', 'logic': 'ロジック' };
            option.innerHTML = `${item.name}(${item.turn}T/${translate_plan[item.plan]})`;
            option.value = `${id}:${i}`;
            fragment.appendChild(option);
        });
        DOM_delete_allChildren(element_contest_stage_select);
        element_contest_stage_select.appendChild(fragment);
    });

    // コンテストのステージを入力したときのイベント
    element_contest_stage_select.addEventListener('change', (e) => {
        const [id, idx] = e.target.value.split(':').map(value=>Number(value));
        const plan = ContestData.getById(id).stages[idx].plan;
        if (current_stage_plan != plan) {
            current_stage_plan = plan;
            // メインキャラクター設定
            DOM_set_character(element_main_character_select, PIdolData.getAll().filter(idol=>(plan=='free') ? true : plan==idol.plan));
            element_sub_character_select.disabled = true;
            element_main_character_select.dispatchEvent(new Event('change'));
        }
        DOM_set_select_contest_pItem(e.target.value);
    });

    element_contest_select.dispatchEvent(new Event('change'));
    element_contest_stage_select.dispatchEvent(new Event('change'));

    // 実行
    let run_flag = false;
    const element_run_button = document.getElementById('run-button');
    element_run_button.addEventListener('click', () => {
        if (run_flag) {
            alert('実行中です。');
            return;
        }
        run_flag = true;
        const vocal  = Number(document.getElementById('status-vocal').value);
        const dance  = Number(document.getElementById('status-dance').value);
        const visual = Number(document.getElementById('status-visual').value);
        const hp     = Number(document.getElementById('status-hp').value);
        // Pアイテム
        const pItemIds_tmp = element_pItems.map(element=>Number(element.value)).filter(id=>id!=-1);
        if (element_pItems[1].parentNode.getElementsByClassName('checkbox')[0].checked) {
            pItemIds_tmp[1]+=1;
        }
        const pItemIds = Array.from(new Set(pItemIds_tmp));

        // カード
        const main_cards_id = element_main_cards.map(element=>Number(element.value)+(element.parentNode.getElementsByClassName('checkbox')[0].checked ? 1 : 0));
        const sub_cards_id = element_sub_cards.map(element=>Number(element.value)+(element.parentNode.getElementsByClassName('checkbox')[0].checked ? 1 : 0));
        const skillCardIds = main_cards_id.concat(sub_cards_id).filter(id=>id&&id!='-1');
        // 重複を削除する機構がないため、仮削除
        if (element_main_cards[0].value == element_sub_cards[0].value) {
            let delete_number = skillCardIds.lastIndexOf(Number(element_main_cards[0].value));
            if (delete_number == -1) {
                delete_number = skillCardIds.lastIndexOf(Number(element_main_cards[0].value)+1);
            }
            skillCardIds.splice(delete_number, 1);
        }

        // デフォルトデッキ
        const main_character_id = element_main_character_select.value;
        const pIdol = PIdolData.getById(main_character_id);
        let default_skillCardIds = [];
        switch (pIdol.plan) {
            case 'sense':
                default_skillCardIds = [1010010, 1010010, 1011010, 1011020, 1021010, 1021010, 1021020, 1021020];
                break;
            case 'logic':
                default_skillCardIds = [1012010, 1012020, 1020010, 1020010, 1022010, 1022010, 1022020, 1022020];
                break;
        }

        skillCardIds.push(...default_skillCardIds);

        // コンテスト
        const [contestId, stageId] = element_contest_stage_select.value.split(':');
        const contestDetail = ContestData.getById(contestId);
        const contestStage  = contestDetail.stages[stageId];

        const autoId = document.getElementById('contest-auto').value;

        const run_data = {
            turn: contestStage.turn,
            criteria: contestDetail.criteria,
            parameter: {
                vocal : vocal,
                dance : dance,
                visual: visual,
                hp: hp,
            },
            plan: current_main_plan,
            pItemIds: pItemIds,

            skillCardIds: skillCardIds, 
            autoId: autoId,
        };
        const result = run(run_data);
        document.getElementById('contest-score').textContent = `スコア：${result.score}`;
        document.getElementById('contest-log').innerHTML = result.text.replaceAll('\n', '<br>');
        run_flag = false;
    }, false);

}, false);