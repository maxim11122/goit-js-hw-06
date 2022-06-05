function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("button.change-color");
const color = document.querySelector("span.color");
button.addEventListener("click", () => {
  color.style.background = getRandomHexColor();
});
