const inputEl = document.querySelector("#validation-input");


inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  const numberOfSymbol = Number(inputEl.attributes[2].value);
  const result = e.currentTarget.value.length;

  if (result >= numberOfSymbol) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else if (result < numberOfSymbol) {
    inputEl.classList.add("invalid");
  }
}
