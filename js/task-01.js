const catSum = categories.querySelectorAll(`.item`);
console.log(`Number of categories: ${catSum.length}`);

const arrayEl = [...catSum];

const tittleName = arrayEl.map(
  (tittle) => tittle.firstElementChild.textContent
);
console.log(`Category: ${tittleName}`);
console.log(`tittleName`);
