// 버튼 클릭하면 배경색 바꾸기
const button1 = document.querySelector("#btn1");
// 아이디가 btn1 요소 가져오기
btn1.onclick = () => {
    btn1.sytle.backgroundColor = "blue";
}

// 배경 바꾸는 함수 따로 정의하기
function changeBackground() {
    document.body.style.backgroundColor = "red";
    document.styleSheets.color = "white";
}

const button2 = document.querySelector("#btn2");
button2.onclick = changeBackground;

// 두가지 이벤트 처리하기
// onclick = alert('두가지 이벤트 처리')는 실행되지 않는다.
// on이벤트 프로퍼터는 하나만 사용이 가능하기 때문이다.
// 사용한 onclick 이 적용되어 배경색만 바뀐다.
// 하나의 이벤트에 여러 함수를 연결하려면 addEventListener()를 사용한다.
const button3 = document.querySelector("#btn3");

function changeBackground() {
    document.body.style.backgroundColor = "yellow";
    document.styleSheets.color = "white";
}

// 이벤트 리스너 사용
const button4 = document.querySelector("#btn4");

button4.addEventListener("click", () => {
    document.body.style.backgroundColor = "pink";
});

function changeBackground() {
    document.body.style.backgroundColor = "yellow";
}
const button5 = document.querySelector("#btn5");
document.body.style=""; // 기존 스타일 삭제
document.body.classList.toggle("convert");

// 텍스트 필드에 입력한 글자수 알아보기
const button6 = document.querySelector("#btn6");

button4.addEventListener("click", () => {
    const word = document.querySelector("#word").value;  // 텍스트 상자의 내용
    const result = document.querySelector("#result");

    let const = word.length;

    result.innerText = `$(count)`;  // 결과 표시
});