// 1. 브라우저 열면 팝업 열기
// 팝업창 오픈
 window.open("notice.html", "", "width=400 height=300");

 // 2. 버튼을 클릭하면 팝업 열기
 // 버튼 요소 가져오기
 const btn = document.querySelector("button");

 // 버튼을 누르면
 btn.onclick = openPopup;