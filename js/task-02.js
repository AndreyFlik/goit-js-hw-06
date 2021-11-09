const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const selector = document.querySelector("#ingredients");

const ingredientsIter = ingredients.map((itm) => {
  const listIng = document.createElement("li");
  listIng.classList.add("item");
  listIng.textContent = itm;
  return listIng;
});
// console.log(ingredientsIter);
selector.append(...ingredientsIter);
