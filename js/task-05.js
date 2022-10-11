const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(e) {
  spanEl.textContent = e.currentTarget.value;

  if (e.currentTarget.value === "") {
    spanEl.textContent = "Anonymous";
  }
}
