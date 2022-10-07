const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn)
const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn)
const spanEl = document.querySelector('#value');
console.log(spanEl)

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);

let counterValue = 0;

function onIncrementBtnClick(e) {
    
    console.log(e)
    
}

function onDecrementBtnClick(e) {
    console.log(e)
}

console.log(counterValue)