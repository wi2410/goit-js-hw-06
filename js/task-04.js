
let counterValue = 0;

const minusButton = document.querySelector('[data-action="decrement"]');
const plusButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

const minusClick = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
};

const plusClick = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

minusButton.addEventListener('click', minusClick)
plusButton.addEventListener('click', plusClick)