const textInput = document.querySelector("#validation-input");

const saveBtn = document.querySelector('#validation-input[data-length="6"]');

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number(saveBtn.dataset.length)) {
    return addClass("valid", "invalid");
  }
  return addClass("invalid", "valid");
});
function addClass() {
  textInput.classList.add(c1), textInput.classList.remove(c2);
}

// function addClass() {
//   textInput.classList.add(c1), textInput.classList.remove(c2);
// }
