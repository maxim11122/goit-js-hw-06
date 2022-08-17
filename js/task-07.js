const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");
input.addEventListener("input", (ev) => {
    text.style.fontSize = `${ev.currentTarget.value}px`;
});