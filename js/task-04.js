const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const spanEl = document.querySelector("#value");

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);

let counterValue = 0;

function onIncrementBtnClick(e) {
  counterValue += 1;
  spanEl.textContent = counterValue;
}

function onDecrementBtnClick(e) {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}
