const textInput = document.querySelector("#validation-input");

const saveBtn = document.querySelector('#validation-input[data-length="6"]');

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number(saveBtn.dataset.length)) {
    return (
      textInput.classList.add("valid"), textInput.classList.remove("invalid")
    );
  }
  return (
    textInput.classList.add("invalid"), textInput.classList.remove("valid")
  );
});

function addClass() {
  textInput.classList.add("valid");
  textInput.classList.remove("invalid");
}

// function dellClass() {

// }
