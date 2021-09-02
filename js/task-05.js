const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInputChange = (event) => {

    if (event.currentTarget.value === '') {
     return  outputEl.textContent = 'незнакомец';
    } 
     return   outputEl.textContent = event.currentTarget.value;
        
}

inputEl.addEventListener('input', onInputChange);