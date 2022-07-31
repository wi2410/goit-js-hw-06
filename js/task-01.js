const navEl = document.querySelector('#categories')
const numberOfCategories = navEl.children.length;
console.log("Number of categories:", numberOfCategories);

const itemEl = document.querySelectorAll('.item')
// console.log(itemEl)

const tittleEl = itemEl.forEach(item => {
    const category =`Category: ${item.firstElementChild.textContent}` ;
    console.log(category)
    
    const elementsLenght = `Elements: ${item.lastElementChild.children.length}`;
    console.log(elementsLenght)
})


