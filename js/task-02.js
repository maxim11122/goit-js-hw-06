const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("ul#ingredients");
ignredients.map((item, idx) => {
    const elemOfList = document.createElement("li");
    elemOfList.textContent = item;
    elemOfList.classList.add("item");
    list.append(elemOfList);
});


