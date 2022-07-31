
const refs = {
        input: document.querySelector('#name-input'),
        nameUser: document.querySelector('#name-output'),
    }
    
    refs.input.addEventListener('input', onInputChange)
    
    function onInputChange(event) {
            refs.nameUser.textContent = event.currentTarget.value;
               if (refs.nameUser.textContent.length === 0) {
                    return refs.nameUser.textContent = 'Anonymous';
                }  
    }



// const input = document.querySelector('#name-input');
// const nameUser = document.querySelector('#name-output');

// input.addEventListener('input', onInputChange)

// function onInputChange(event) {
//     nameUser.textContent = event.currentTarget.value;
    
//     if (nameUser.textContent.length === 0) {
//         return nameUser.textContent = 'Anonymous';
//     }
// }
