const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
// console.dir(spanEl)

inputEl.addEventListener('input', changeFontSize)

function changeFontSize(event) {
    spanEl.style.fontSize = event.target.value+'px';
}
