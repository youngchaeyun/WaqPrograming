const images = document.querySelector("#container");


open.addEventListener("mouseover", () => {
    modalBox.classList.toggle("active");
});

open.addEventListener("mouseout", () => {
    modalBox.classList.remove("active");
});