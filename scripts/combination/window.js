import { SkillCardData } from '../simulator/data/skillCardData.js';

export const imgPath = 'https://katabami83.github.io/gakumas_file/images/';

// 每个容器对应的图片URL和对应值
let imageUrls = [
    [],[],[],[],[],[]
];

function openImageSelector(containerIndex) {
    populateImageSelector(containerIndex); // 打开前填充图片选项
    document.getElementById(`imageSelector-${containerIndex}`).style.display = 'block';
    document.getElementById('overlay').style.display = 'block'; // 显示背景遮罩
}

function closeImageSelector(containerIndex) {
    document.getElementById(`imageSelector-${containerIndex}`).style.display = 'none';
    const options = document.querySelectorAll(`#imageSelectorContainer-${containerIndex} .image-option`);
    options.forEach(option => {
        option.classList.remove('selected');
    });
}

function populateImageSelector(containerIndex) {
    const cardImagePath = imgPath+"cards/card_";

    const container = document.getElementById(`imageSelectorContainer-${containerIndex}`);
    container.innerHTML = ''; // 清空容器内容

    // 动态创建图片选项
    imageUrls[containerIndex].forEach(item => {
        const option = document.createElement('div');
        option.className = 'image-option';
        option.onclick = () => selectAndAddImage(containerIndex, item); // 直接选择并添加的函数
        option.innerHTML = `<img src="${cardImagePath+item+".webp"}" alt="${item}">`;
        container.appendChild(option);
    });
}

function closeAllImageSelectors() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    document.getElementById('overlay').style.display = 'none'; // 隐藏背景遮罩
}

export function selectAndAddImage(containerIndex, item) {
    const cardImagePath = imgPath+"cards/card_";

    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.innerHTML = `
        <img src="${cardImagePath+item+".webp"}" alt="${item}">
        <button class="remove-btn" onclick="removeImage(this)"></button>
    `;
    newItem.setAttribute('data-value', item); // 将值附加到元素上
    document.getElementById(`container-${containerIndex}`).appendChild(newItem);

    // 关闭悬浮窗
    closeImageSelector(containerIndex);
    closeAllImageSelectors();
}

export function getSelectedValues(containerIndex) {
    const container = document.getElementById(`container-${containerIndex}`);
    const selectedValues = Array.from(container.children).map(item => item.getAttribute('data-value'));
    return selectedValues.filter(item => item !== null);
}

export function setPlan(plan){
    let allImageIds = SkillCardData.getAll()
    imageUrls = [
        [],[],[],[],[],[]
    ];
    for(let i of allImageIds){
        if((i.plan == plan || i.plan == "free") && i.id[0]!= "0"){
            if(i.card_cost){
                if(i.card_cost<50){
                    imageUrls[0].push(i.id);
                }
                else if(i.card_cost<90){
                    imageUrls[1].push(i.id);
                }
                else if(i.card_cost<120){
                    imageUrls[2].push(i.id);
                }
                else if(i.card_cost<160){
                    imageUrls[3].push(i.id);
                }
                else if(i.card_cost<250){
                    imageUrls[4].push(i.id);
                }
                imageUrls[5].push(i.id);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    for(let i=0;i<6;i++){
        document.getElementById(`kanon-item-${i}`).onclick = () => openImageSelector(i);
    }
});