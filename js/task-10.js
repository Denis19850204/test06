const divEl = document.querySelector('#controls');


const input = divEl.firstElementChild;
const createBtn = divEl.children[1];
const destroyBtn = divEl.lastElementChild;

createBtn.addEventListener('click', onClickCreateBtn);

function onClickCreateBtn(e) {
  console.log (createBoxes())
}

function createBoxes(amount) {
  return amount = input.value;
  
}







function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
