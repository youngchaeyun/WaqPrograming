// 리스트를 클릭하면 해당 리스트 삭제

// 리스트의 모든 항목을 가져온다.
const buttons = document.querySelectorAll("p > span");

for(let button of buttons) {
    button.addEventListner("click", function () {
        // 해당 항목을 클릭했을 때... 해당 항목이 삭제됨.
        // this.remove(this); // 나 자신 삭제
        // this는 이벤트가 발생한 노드를 가리킴

        // 부모 노드
        this.parentNode.remove();
    });
}