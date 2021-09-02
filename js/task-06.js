const inputEl = document.querySelector('#validation-input');


const onInputChange = (event) => {
    let targetValueLength = event.currentTarget.value.length;
    let targetDataLength = Number(event.currentTarget.dataset.length);

    if (targetValueLength === targetDataLength) {
        return event.currentTarget.classList.add('valid');
    }       
    return event.currentTarget.classList.add('invalid');
    
}


inputEl.addEventListener('blur', onInputChange);


