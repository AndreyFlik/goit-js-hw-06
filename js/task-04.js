let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const changeValue = document.querySelector("#value");

const handleClickMin = () => {
  return (changeValue.textContent = counterValue -= 1);
};

const handleClickPlus = () => {
  return (changeValue.textContent = counterValue += 1);
};

decrementBtn.addEventListener("click", handleClickMin);
incrementBtn.addEventListener("click", handleClickPlus);
