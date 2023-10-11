const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    modalBox.classList.toggle("active");    // 클릭하면 .active 스타일을 토글한다.
});

open.addEventListener("click", () => {
    modalBox.classList.remove("active");    // 클릭하면 .active 스타일을 삭제한다.
});