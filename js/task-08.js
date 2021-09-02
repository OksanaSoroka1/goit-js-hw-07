const inputEl = document.querySelector('#controls input');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const parentDivEl = document.querySelector('#boxes');


const createBoxes = (amount) => {
    amount = Number(inputEl.value);

    const elementsArr = [];
    let totalValue = 30;
   
    for (let i = 0; i < amount; i += 1) {
        if (i > 0) {
            totalValue += 10;
        }

        const newDivEl = document.createElement('div');
        newDivEl.style.backgroundColor = `rgb(${Math.floor(Math.random() * 265)}, ${Math.floor(Math.random() * 265)}, ${Math.floor(Math.random() * 265)})`;
        newDivEl.style.width = `${totalValue}px`;
        newDivEl.style.height = `${totalValue}px`;
        elementsArr.push(newDivEl);
    }
     
   return parentDivEl.append(...elementsArr);
}

const destroyBoxes = () => {
 return  parentDivEl.querySelectorAll('div').forEach(element => element.remove());
}
 
const onRenderBtnClick = (event) => {
    createBoxes();
}
const onDestroyBtnClick = (event) => {
    destroyBoxes();
    inputEl.value = '';
 }

renderBtnEl.addEventListener('click', onRenderBtnClick);
destroyBtnEl.addEventListener('click', onDestroyBtnClick);