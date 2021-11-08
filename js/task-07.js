const lineInput = document.querySelector('#font-size-control[type="range"]');
// const elemInput = lineInput.getAttribute("min");
// console.log(Number(elemInput));
const textStile = document.querySelector("#text");
// textStile.style.fontSize = "24px";
lineInput.addEventListener(
  "input",
  (e) => (textStile.style.fontSize += e.currentTarget.value)
);
