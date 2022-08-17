function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("button.change-color");
const color = document.querySelector("span.color");
const body = document.querySelector("body")
button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
});
