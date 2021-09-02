const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');

const valueEl = document.querySelector('#value');

let counterValue = 0;

const increment = (event) => {
    counterValue += 1;
  return  valueEl.textContent = `${counterValue}`;
   
}
const decrement = (event) => {
    counterValue -= 1;
  return  valueEl.textContent = `${counterValue}`;
    
}


buttonDecrementEl.addEventListener('click', decrement);
buttonIncrementEl.addEventListener('click', increment);
