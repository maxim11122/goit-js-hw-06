let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("span#value");
decrement.addEventListener("click", () => {
    counterValue=counterValue-1;
    counter.textContent = counterValue;
});
  
increment.addEventListener("click", () => {
    counterValue=counterValue+1;
    counter.textContent = counterValue;
});
  