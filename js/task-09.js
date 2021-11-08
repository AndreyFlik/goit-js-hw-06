// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");

const handleClick = () => {
  return (body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
};

btn.addEventListener("click", handleClick);
