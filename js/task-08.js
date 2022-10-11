const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

const dataForm = {};

function onFormSubmit(e) {
  e.preventDefault();
  const email = formEl.elements.email;
  const password = formEl.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    dataForm.email = email.value;
    dataForm.password = password.value;
    console.log(dataForm);
    e.currentTarget.reset();
  }
}
