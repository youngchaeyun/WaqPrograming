// p 요소 만들기
let newP = document.createElement("p");

let textNode = document.createTextNode("안녕하세요.");

let basicNode = document.querySelectorAll("p")[2];

newP.appendChild(textNode);

document.body.appendChild(newP);