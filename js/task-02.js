const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientHtml = [];

ingredients.map((ingredient) => {
  const liEl = document.createElement("li");

  liEl.classList.add("item");
  liEl.textContent = ingredient;

  ingredientHtml.push(liEl);
});

ingredientsEl.append(...ingredientHtml);
