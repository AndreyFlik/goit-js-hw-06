const lineInput = document.querySelector('#font-size-control[type="range"]');
const textStile = document.querySelector("#text");
lineInput.addEventListener("input", (e) => {
  const elemSize = e.currentTarget.value;
  const size = (textStile.style.fontSize = `${elemSize}px`);
  return size;
});
