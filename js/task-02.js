const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("ul#ingredients");
const items = ingredients.map((item, idx) => {
  const elemOfList = document.createElement("li");
  elemOfList.classList.add("item");
  elemOfList.textContent = item;
  return elemOfList;
    
});

list.append(...items);
