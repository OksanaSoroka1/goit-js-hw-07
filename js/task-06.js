const inputEl = document.querySelector('#validation-input');

const changeClassList = (addedClassName, removedClassName) => {
       event.currentTarget.classList.add(addedClassName);
        event.currentTarget.classList.remove(removedClassName); 
    }
const onInputChange = (event) => {
    let targetValueLength = event.currentTarget.value.length;
    let targetDataLength = Number(event.currentTarget.dataset.length);

    if (targetValueLength === targetDataLength) {
        changeClassList('valid', 'invalid');
    } else {
        changeClassList('invalid', 'valid');
    };
        
}


inputEl.addEventListener('blur', onInputChange);


