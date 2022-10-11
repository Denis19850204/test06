const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChange);

textEl.style.fontSize = Number(inputEl.value) + "px";

function onInputChange(e) {
  textEl.style.fontSize = Number(inputEl.value) + "px";
}
