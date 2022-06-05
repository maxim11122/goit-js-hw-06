const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");
input.addEventListener("change", () => {
    text.style.fontSize = input.value+"px";
});