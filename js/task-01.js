const catSum = categories.querySelectorAll(`.item`);
console.log(`Number of categories: ${catSum.length}`);

const arrayEl = [...catSum];

const tittleName = arrayEl.map((tittle) => {
  const nameH1 = tittle.firstElementChild.textContent;
  console.log(`Category: ${nameH1}`);
  const nameEL = tittle.querySelectorAll(`li`);
  console.log(`Elements: ${nameEL.length}`);
});
