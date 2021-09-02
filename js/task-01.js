
const listEl = document.querySelector('#categories');
const listItemsEl = listEl.querySelectorAll('.item');

console.log(`В списке ${listItemsEl.length} категории.`);

listItemsEl.forEach(listItem => {
    console.log(`Категория: ${listItem.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${listItem.querySelectorAll('li').length}`);
})

