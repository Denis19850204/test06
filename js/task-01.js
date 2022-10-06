const listEl = document.querySelector('#categories');


const listElChildren = listEl.children.length
console.log('Number of categories:', listElChildren);

const itemEl = document.querySelectorAll('.item');
console.log(itemEl)
const itemElChildren = itemEl.forEach((item)=>console.log(item.children[0].textContent))
// console.log(itemElChildren)