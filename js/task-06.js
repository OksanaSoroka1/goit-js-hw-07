const inputEl = document.querySelector('#validation-input');


const onInputChange = (event) => {
    let targetValueLength = event.currentTarget.value.length;
    let targetDataLength = Number(event.currentTarget.dataset.length);

    if (targetValueLength === targetDataLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    };
     
    
}


inputEl.addEventListener('blur', onInputChange);


