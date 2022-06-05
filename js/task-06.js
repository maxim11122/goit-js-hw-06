const input = document.querySelector("input#validation-input");
input.addEventListener("blur", () => {
    if(input.value.length==input.getAttribute("data-length")){
        input.classList.add("valid");
    }else{
        input.classList.add("invalid");
    }
});

input.addEventListener("focus", () => {
        input.classList.remove("valid");
        input.classList.remove("invalid");
});