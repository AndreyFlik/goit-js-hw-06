const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
// console.log(output.textContent)

const handleInput = (event) => {
  //   console.log(event.currentTarget.value);
  if (event.currentTarget.value !== "") {
    return (output.textContent = event.currentTarget.value);
  }
  return output.textContent;
};

textInput.addEventListener("input", handleInput);
