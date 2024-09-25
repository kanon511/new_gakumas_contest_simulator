import { PIdolData } from './simulator/data/pIdolData.js';
import { SkillCardData } from './simulator/data/skillCardData.js';
import { ContestData } from './simulator/data/contestData.js';
import { PItemData } from './simulator/data/pItemData.js';
import { onTest } from './setting.js';
import { init,setPlan,imgPath,filterButtons,addImgPath } from './window.js';

export let setSelectImageCard = null;
export let isEvolveButtonPressed = false; // 初始状态为未按下

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

function DOM_set_characterImageCards (parent, number, text) {
    const textElement_card = `
    <button class="imgButton">
        <img></img>
    </button>`;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < number; i++) {
        const element = DOM_text_to_elememt(textElement_card);
        fragment.appendChild(element);
        element.addEventListener('click', () => {
            document.getElementById('modalOverlay').style.display = 'flex';
            setSelectImageCard = (id) => {
                if(id==-1){
                    text[i].value = -1;
                    text[i].parentNode.getElementsByClassName("checkbox")[0].checked = false;
                    text[i].dispatchEvent(new Event("change"));
                    return;
                }
                text[i].value = 2 * Math.floor(id / 2);
                text[i].parentNode.getElementsByClassName("checkbox")[0].checked = id % 2 > 0;
                text[i].dispatchEvent(new Event("change"));
            }
        })
    }
    DOM_delete_allChildren(parent);
    parent.appendChild(fragment);
    return Array.from(parent.children).map(element=>element.querySelector('img'));
}

function DOM_set_character (parent, pIdolList) {
    const fragment = document.createDocumentFragment();
    pIdolList.forEach(item=>{
        const option = document.createElement('option');
        option.innerHTML = `${item.rarity} [${item.episode_name}] ${item.name}`
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
    item_list.forEach((item, i)=>{
        const option = document.createElement('option');
        option.innerHTML = item.name;
        option.value = item.id;
        fragment.appendChild(option);
    });
    DOM_delete_allChildren(select);
    select.appendChild(fragment);
}

function parseExecutionLog (executionLog) {
    const container = document.createElement('div');
    executionLog.forEach(entry => {
        const element = document.createElement('div');
        if (entry.type === 'effect') {
            element.textContent = entry.message;
        } else if (entry.type === 'use') {
            const nameElement = document.createElement('div');
            nameElement.textContent = `${entry.name}を使った`;
            element.appendChild(nameElement);
            const listContainer = document.createElement('div');
            listContainer.className = 'list';
            listContainer.appendChild(parseExecutionLog(entry.list));
            element.appendChild(listContainer);
        }
        container.appendChild(element);
    });
    return container;
}

let iserror = false;
window.addEventListener('error', (event) => {
    if (!iserror) {
        iserror = true;
        alert(event.message);
        setTimeout(() => iserror=false, 500);
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // カードセレクトを挿入
    const element_main_card_box = document.getElementById('main-character-cards-box');
    const element_sub_card_box  = document.getElementById('sub-character-card-box');
    
    const element_main_cards = DOM_set_characterCards(element_main_card_box, 6, 'main');
    const element_sub_cards  = DOM_set_characterCards(element_sub_card_box, 6, 'sub');

    const element_main_card_box_image = document.getElementById('main-character-cards-box-image');
    const element_sub_card_box_image  = document.getElementById('sub-character-cards-box-image');
    
    const element_main_cards_image = DOM_set_characterImageCards(element_main_card_box_image, 6, element_main_cards);
    const element_sub_cards_image  = DOM_set_characterImageCards(element_sub_card_box_image, 6, element_sub_cards);

    const element_pItem_box  = document.getElementById('main-character-pItem-box');
    const element_pItems = DOM_set_characterCards(element_pItem_box, 4, 'pItem');



    const element_card_selects = Array.from(document.querySelectorAll('#card-box-container .character-cards select'));
    const element_card_select_checkboxs = Array.from(document.querySelectorAll('#card-box-container .character-cards .checkbox'));

    element_card_selects.forEach(element=>{
        element.addEventListener('change', (e)=>{
            const id = String(e.target.value);
            const rarity = Number(id[0]);
            e.target.parentNode.dataset.rarity = rarity;
        });
    });

    [].concat(element_card_selects, element_card_select_checkboxs).forEach(element=>{
        element.addEventListener('change', (e)=>{
            const elems = Array.from(e.target.parentNode.parentNode.parentNode.children);
            const totalCost = elems.reduce((acc, crt) => {
                const cardId = Number(crt.getElementsByClassName('select-box')[0].value)+(crt.getElementsByClassName('checkbox')[0].checked ? 1 : 0);
                const cost = ((cardId < 1 || String(cardId)[1] == '2') ? 0 : (SkillCardData.getById(cardId).card_cost ?? 0));
                return acc + cost;
            }, 0);
            e.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('cost-display')[0].textContent = totalCost;

            const main_cards_id = element_main_cards.map(element=>Number(element.value)+(element.parentNode.getElementsByClassName('checkbox')[0].checked && element.value % 10 == 0 ? 1 : 0));
            const sub_cards_id = element_sub_cards.map(element=>Number(element.value)+(element.parentNode.getElementsByClassName('checkbox')[0].checked && element.value % 10 == 0 ? 1 : 0));
            main_cards_id.forEach((item,index)=>{
                if(item==-1){
                    element_main_cards_image[index].src=addImgPath;
                    return;
                }
                element_main_cards_image[index].src=imgPath+"cards/card_"+item+".webp"
            })
            sub_cards_id.forEach((item,index)=>{
                if(item==-1){
                    element_sub_cards_image[index].src=addImgPath;
                    return;
                }
                element_sub_cards_image[index].src=imgPath+"cards/card_"+item+".webp"
            })
        })
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
        const pItemId = PIdolData.getById(id).unique_pItem_id;
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
        element_select.dispatchEvent(new Event('change'));
    }

    function DOM_set_otherSkillCards (plan) {
        const elements = element_main_cards.slice(1).concat(element_sub_cards.slice(1));
        const skillCards = SkillCardData.getAll().filter(item=>
            (item.plan=='free'||item.plan==plan) && // プラン指定
            item.id % 10 == 0 && // 未強化指定
            item.id>2000000 && // 基本カード削除
            String(item.id)[1] != '2' // キャラ固有削除
        );
        elements.forEach(element=>{
            DOM_set_select_options(element, skillCards, true);
            element.dispatchEvent(new Event('change'));
        });
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
            setPlan(pIdol.plan);
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
    element_contest_select.options[element_contest_select.options.length-1].selected = true;

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
        element_contest_stage_select.dispatchEvent(new Event('change'));
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

    function loadOptionsFromSearchParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const contestStage = urlParams.get("contest_stage");
        const pIdol = urlParams.get("p_idol");
        const status = urlParams.get("status");
        const pItems = urlParams.get("p_items");
        const cards = urlParams.get("cards");

        if (contestStage) {
            const contestId = contestStage.split(":")[0];
            element_contest_select.value = contestId;
            element_contest_select.dispatchEvent(new Event("change"));
            element_contest_stage_select.value = contestStage;
            element_contest_stage_select.dispatchEvent(new Event("change"));
        }
        if (pIdol) {
            const [mainIdolId, subIdolId] = pIdol.split(":");
            element_main_character_select.value = mainIdolId;
            element_main_character_select.dispatchEvent(new Event("change"));
            element_sub_character_select.value = subIdolId;
            element_sub_character_select.dispatchEvent(new Event("change"));
        }
        if (status) {
            const [vocal, dance, visual, hp] = status.split(":");
            document.getElementById("status-vocal").value = vocal;
            document.getElementById("status-dance").value = dance;
            document.getElementById("status-visual").value = visual;
            document.getElementById("status-hp").value = hp;
        }
        if (pItems) {
            const itemIds = pItems.split(":");
            element_pItems.slice(1).forEach((elem, idx) => {
                elem.value = 2 * Math.floor(itemIds[idx] / 2);
                elem.parentNode.getElementsByClassName("checkbox")[0].checked =
                    itemIds[idx] % 2 > 0;
                elem.dispatchEvent(new Event("change"));
            });
        }
        if (cards) {
            const cardIds = cards.split("_").map((cardGroup) => cardGroup.split(":"));
            element_main_cards.forEach((elem, idx) => {
                elem.value = 2 * Math.floor(cardIds[0][idx] / 2);
                elem.parentNode.getElementsByClassName("checkbox")[0].checked =
                    cardIds[0][idx] % 2 > 0;
                elem.dispatchEvent(new Event("change"));
            });
            element_sub_cards.forEach((elem, idx) => {
                elem.value = 2 * Math.floor(cardIds[1][idx] / 2);
                elem.parentNode.getElementsByClassName("checkbox")[0].checked =
                    cardIds[1][idx] % 2 > 0;
                elem.dispatchEvent(new Event("change"));
            });
        }
    }

    function saveOptiostoSearchParams() {
        let str='https://kanon511.github.io/new_gakumas_contest_simulator?'
        +`contest_stage=${element_contest_stage_select.value}&`
        +`p_idol=${element_main_character_select.value}:${element_sub_character_select.value}&`
        +`status=${document.getElementById("status-vocal").value}:${document.getElementById("status-dance").value}:${document.getElementById("status-visual").value}:${document.getElementById("status-hp").value}&`
        +`p_items=${(()=>{
            let j=''
            element_pItems.slice(1).forEach((elem, idx) => {
                let i=Number(elem.value)
                if(elem.parentNode.getElementsByClassName("checkbox")[0].checked){
                    i+=1
                }
                if(elem==-1){
                    i=-1
                }
                j+=i
                if(idx!=element_main_cards.length-1){
                    j+=':'
                }
            })
            return j
        })()}&`
        +`cards=${(()=>{
            let j=''
            element_main_cards.forEach((elem, idx) => {
                let i=Number(elem.value)
                if(elem.parentNode.getElementsByClassName("checkbox")[0].checked){
                    i+=1
                }
                if(elem==-1){
                    i=-1
                }
                j+=i
                if(idx!=element_main_cards.length-1){
                    j+=':'
                }
            })
            return j
        })()}_${(()=>{
            let j=''
            element_sub_cards.forEach((elem, idx) => {
                let i=Number(elem.value)
                if(elem.parentNode.getElementsByClassName("checkbox")[0].checked){
                    i+=1
                }
                if(elem==-1){
                    i=-1
                }
                j+=i
                if(idx!=element_sub_cards.length-1){
                    j+=':'
                }
            })
            return j
        })()}`
        if(navigator.clipboard){
            navigator.clipboard.writeText(str);
            alert("已复制链接至剪切板中")
        }else{
            alert("复制链接失败")
        }
    }

    element_contest_select.dispatchEvent(new Event('change'));


    loadOptionsFromSearchParams();


    // グラフの準備
    const canvas = document.getElementById('chart');
    const chart = new Chart(canvas, {
        type: "bar",
    });

    // ログボタン
    const element_contest_result_buttons = document.querySelectorAll('.result-log-button>input[name="result-log-button"]');
    const element_contest_result_logs = document.querySelectorAll('#contest-log>div');
    element_contest_result_buttons.forEach((radio, i) => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                element_contest_result_logs.forEach((log, j) => {
                    if (i == j) {
                        log.classList.remove('hide');
                    } else {
                        log.classList.add('hide');
                    }
                });
            }
        });
    });
    element_contest_result_buttons[0].click();

        
    // 弹窗设置
    document.getElementById('modalOverlay').addEventListener('click', function(event) {
        if (event.target === this) {
            this.style.display = 'none';
        }
    });
    const toggleButton = document.getElementById('windowEvolveButton');
    toggleButton.addEventListener('click', () => {
        if (isEvolveButtonPressed) {
            toggleButton.className = '';
            isEvolveButtonPressed = false;
            filterButtons();
        } else {
            toggleButton.className = 'active';
            isEvolveButtonPressed = true;
            filterButtons();
        }
    });

    // document.getElementById('modalOverlayItem').addEventListener('click', function(event) {
    //     if (event.target === this) {
    //         this.style.display = 'none';
    //     }
    // });
    // const toggleButtonItem = document.getElementById('windowEvolveButtonItem');
    // toggleButtonItem.addEventListener('click', () => {
    //     if (isEvolveButtonPressed) {
    //         toggleButtonItem.className = '';
    //         isEvolveButtonPressed = false;
    //         filterButtons();
    //     } else {
    //         toggleButtonItem.className = 'active';
    //         isEvolveButtonPressed = true;
    //         filterButtons();
    //     }
    // });

    init();

    // 実行
    let run_flag = false;
    const element_run_button = document.getElementById('run-button');
    element_run_button.addEventListener('click', async() => {
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
        const pItemIds_tmp = element_pItems.map(element=>Number(element.value)).filter(id=>id&&id!=-1);
        if (
            element_pItems[1].parentNode.getElementsByClassName('checkbox')[0].checked && 
            pItemIds_tmp[1] % 10 == 0
        ) {
            pItemIds_tmp[1]+=1;
        }
        const pItemIds = Array.from(new Set(pItemIds_tmp));

        // カード
        const main_cards_id = element_main_cards.map(element=>Number(element.value)+(element.parentNode.getElementsByClassName('checkbox')[0].checked && element.value % 10 == 0 ? 1 : 0));
        const sub_cards_id = element_sub_cards.map(element=>Number(element.value)+(element.parentNode.getElementsByClassName('checkbox')[0].checked && element.value % 10 == 0 ? 1 : 0));
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

        const simulateCount = Number(document.getElementById('run-count').value);

        const autoId = document.getElementById('contest-auto').value;

        const run_data = {
            turn: contestStage.turn,
            criteria: contestDetail.criteria,
            turnRank: contestDetail.rank,
            firstTurn: contestStage.firstTurn,
            turnTypes: contestStage.turnTypes,
            parameter: {
                vocal : vocal,
                dance : dance,
                visual: visual,
                hp: hp,
            },
            plan: current_main_plan,
            trend: pIdol.trend,
            pItemIds: pItemIds,

            skillCardIds: skillCardIds, 
            autoId: autoId,

            //count: simulateCount,
        };
        
        console.time('run');
        const  result = await runWebWorker(run_data);
        console.timeEnd('run');

        // const logs = {
        //     min: result.minLog,
        //     rnd: result.rndLog,
        //     max: result.maxLog,
        // };
        // const logKeys = ['min', 'rnd', 'max'];
        // for (const key of logKeys) {
        //     const container =  document.getElementById(`contest-log-${key}`);
        //     DOM_delete_allChildren(container);
        //     container.appendChild(parseSimulationLog(logs[key]));
        // }

        const logs = {
            min: result.minLog,
            rnd: result.rndLog,
            max: result.maxLog,
        };
        const logKeys = ['min', 'rnd', 'max'];

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
            for (const log of simulationLog.log) {
                const textElement = `
                <div>
                    <div class="log-turn" data-turnType="${log.turnType}">
                        <div>${log.turn}ターン目　</div>
                        <div class="log-turn-status">
                        　
                            <i class="fa-solid fa-star"></i>${log.status.score}
                            <i class="fa-solid fa-heart"></i>${log.status.hp}
                            <i class="fa-solid fa-shield-halved"></i>${log.status.block}
                        </div>
                    </div>
                </div>`;
                container.appendChild(DOM_text_to_elememt(textElement));
                container.appendChild(parseExecutionLog(log.executionLog));
            }
            return container;
        }

        for (const key of logKeys) {
            const container =  document.getElementById(`contest-log-${key}`);
            DOM_delete_allChildren(container);
            container.appendChild(parseSimulationLog(logs[key]));
        }

        // result.rndLog.log.forEach(log=>log.executionLog.forEach(log=>{
        //     if (log.type == 'use') {
        //         console.log(`${log.source.name}を使った`);
        //     }
        //     else if (log.type == 'end') {
        //         console.log('</>');
        //     }
        //     else {
        //         console.log(log.message)
        //     }
        // }));



        const scoreList = result.scoreList;
        scoreList.sort((a, b) => a - b);

        const aryMax = function (a, b) {return Math.max(a, b);}
        const aryMin = function (a, b) {return Math.min(a, b);}
        
        const minscore = Math.floor(scoreList.reduce(aryMin)/1000);
        const maxscore = Math.floor(scoreList.reduce(aryMax)/1000);
        const count = Math.floor((maxscore - minscore))+1;
        const data = new Array(count).fill(0);
        for (let i = 0; i < scoreList.length; i++) {
            const kaikyu = Math.floor(scoreList[i]/1000) - minscore;
            data[kaikyu]++;
        }

        document.getElementById('result-score-mean').textContent = Math.floor(scoreList.reduce((pre, crt)=>pre+crt, 0)/scoreList.length);
        document.getElementById('result-score-median').textContent = scoreList[Math.floor(scoreList.length/2)];
        document.getElementById('result-score-mode').textContent = (minscore + data.reduce((pre, crt, i)=>pre[0]<crt?[crt, i]:pre, [-1, 0])[1])*1000;

        chart.data = {
            labels:  new Array(count).fill(0).map((_,i)=>(i+minscore)*1000),
            datasets: [
                {
                    label: `スコア（N=${simulateCount}）`,
                    data: data
                }
            ]
        };
        chart.update();
        
        run_flag = false;
    }, false);

    const element_save_button = document.getElementById('save-button');
    element_save_button.addEventListener('click', saveOptiostoSearchParams)
}, false);

async function runWebWorker(data) {
    return new Promise((resolve)=>{
        let numWorkers = 1;

        let totalRuns = 1;

        if(!onTest){
            if (navigator.hardwareConcurrency) {
                numWorkers = Math.min(navigator.hardwareConcurrency, 8);
            }
            totalRuns = Number(document.getElementById('run-count').value);;
        }

        const runsPerWorker = Math.ceil(totalRuns / numWorkers);
        const rndLogNumber = Math.floor(Math.random()*numWorkers);

        // let completedRuns = 0;
        let completedWorkers = 0;
        let results = {
            scoreList: [],
            minLog: null,
            maxLog: null,
            rndLog: null,
        };

        for (let i = 0; i < numWorkers; i++) {
            const worker = new Worker('./scripts/worker.js', { type: 'module' });
            worker.postMessage({ runs: runsPerWorker, data: data });
            
            worker.onmessage = (e) => {
                completedWorkers;
                const result = e.data;

                results.scoreList = results.scoreList.concat(result.scoreList);
                if (!results.minLog || results.minLog.finalStatus.score > result.minLog.finalStatus.score) {
                    results.minLog = result.minLog;
                }
                if (!results.maxLog || results.maxLog.finalStatus.score < result.maxLog.finalStatus.score) {
                    results.maxLog = result.maxLog;
                }
                if (completedWorkers == rndLogNumber) {
                    results.rndLog = result.rndLog;
                }
                if (++completedWorkers == numWorkers) {
                    resolve(results);
                }
                
                worker.terminate();
            };

            worker.onerror = (error) => {
                console.log(`Worker error: ${error.message} in ${error.filename} at line ${error.lineno}`);
                worker.terminate();
            };
        }
    });
}