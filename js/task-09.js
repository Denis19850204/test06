const spanEl = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const body = document.body;

btn.addEventListener("click", onClickBtn);

function onClickBtn(e) {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
  body.style.backgroundColor = spanEl.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
