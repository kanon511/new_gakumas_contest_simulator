import { SkillCardData } from './simulator/data/skillCardData.js';
import { setSelectImageCard,isEvolveButtonPressed } from './scripts.js';

export const imgPath = 'https://katabami83.github.io/gakumas_file/images/';
export const addImgPath = 'https://kanon511.github.io/new_gakumas_contest_simulator/kanon.png';
let plan = ""
let category = "all"

function createButtons(nodes) {
    const container = document.getElementById('buttonContainer');
    container.innerHTML = '';

    const button = document.createElement('div');
    button.className = 'windowButton';
    button.dataset.type = "-1";
    button.dataset.plan = "free";
    button.dataset.evolve = "-1";
    button.onclick = () => {
        setSelectImageCard(-1);
        document.getElementById('modalOverlay').style.display = 'none';
    }

    const img = document.createElement('img');
    img.src = addImgPath;
    button.appendChild(img);

    container.appendChild(button);

    nodes.forEach(node => {
        if(node.id.toString()[0]=='1' || node.id.toString()[1]=='2'){
            return;
        }
        const button = document.createElement('div');
        button.className = 'windowButton';
        button.dataset.type = node.id.toString()[0];
        button.dataset.plan = node.plan;
        button.dataset.evolve = node.id.toString()[6];
        button.onclick = () => {
            setSelectImageCard(node.id);
            document.getElementById('modalOverlay').style.display = 'none';
        }

        const img = document.createElement('img');
        img.src = imgPath+"cards/card_"+node.id+".webp";
        button.appendChild(img);

        container.appendChild(button);
    });
}

export function filterButtons() {
    const buttons = document.querySelectorAll('.windowButton');
    buttons.forEach(button => {
        if ((category === 'all' || button.dataset.type === category) && (plan===button.dataset.plan || button.dataset.plan==='free') && (button.dataset.evolve=="-1" || button.dataset.evolve==(isEvolveButtonPressed?'1':'0'))) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
}

export function init(){
    document.querySelectorAll('.category-bar button').forEach((button, index) => {
        if(index<4){
            button.addEventListener('click', () => {
                document.querySelectorAll('.category-bar button').forEach((btn, i) => {
                    if(i<4)
                        btn.classList.remove('active')
                    });
                button.classList.add('active');
                category = button.dataset.category;
                filterButtons();
            });
        }
    });
    
    createButtons(SkillCardData.getAll());
    filterButtons("all")
}

export function setPlan(plan_name){
    plan = plan_name
    filterButtons("all")
}