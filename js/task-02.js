const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const list = document.querySelector("#ingredients");
// const listItem = [];
// ingredients.forEach((ingredient) => {
//   const newItem = document.createElement("li");
//   newItem.classList.add("item");
//   newItem.textContent = ingredient;
//   listItem.push(newItem);
// })
// list.append(...listItem);

const list = document.querySelector("#ingredients");

const listItem = ingredients.map((ingredient) => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = ingredient;
  // console.log(newItem)
  // console.log(newItem.textContent)
  return newItem;
});

list.append(...listItem);

