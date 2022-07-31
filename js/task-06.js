



const input = document.querySelector('#validation-input');
const getDataLenght = input.getAttribute('data-length');

function onInputBlur(event) {
    if (event.target.value.length >= Number(getDataLenght)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
    
}

input.addEventListener('blur', onInputBlur)