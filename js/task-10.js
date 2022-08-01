function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector('#boxes');
const numberEl = document.querySelector("#controls input");
const minValue = numberEl.getAttribute('min')
const maxValue = numberEl.getAttribute('max')
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");


function createBoxes(amount) {
  const elements = []
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
      const boxEl = document.createElement('div')
      boxEl.classList.add('block');
      boxEl.style.width = width + 'px';
      boxEl.style.height = height + 'px';
      boxEl.style.backgroundColor = getRandomHexColor();
      elements.push(boxEl);
      width += 10;
      height += 10;
  }
  container.append(...elements)
};

btnCreate.addEventListener('click', () => {
  const amount = parseInt(numberEl.value,10);
  if (maxValue >= amount >= minValue){
    createBoxes(amount);
  }
});

function destroyBoxes() {
  container.replaceChildren();
};
function inputClear() {
  numberEl.value = '';
};

btnDestroy.addEventListener('click', destroyBoxes);
btnDestroy.addEventListener('click', inputClear);