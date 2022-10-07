const listEl = document.querySelector('#categories');


const listElChildren = listEl.children.length
console.log('Number of categories:', listElChildren);

const itemEl = document.querySelectorAll('.item');

const itemElChildren = itemEl.forEach((item) => {
  console.log('Category:',item.children[0].textContent,'\n','Elements:', item.children[1].children.length)
})
