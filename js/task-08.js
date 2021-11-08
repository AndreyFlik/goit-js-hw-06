const formEl = document.querySelector(".login-form");
// const inputEl = formEl.querySelectorAll("input");
// console.log(inputEl);

formEl.addEventListener("submit", onformEl);

function onformEl(event) {
  event.preventDefault();
  if (
    "" === event.currentTarget.elements.password.value ||
    event.currentTarget.elements.email.value === ""
  ) {
    return alert(`Ты что то забыл`);
  }
  const forEl = {
    mail: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };
  console.log(forEl);
  formEl.reset();
}
