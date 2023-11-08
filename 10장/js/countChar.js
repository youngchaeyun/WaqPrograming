function counting(str, ch) {
    let count = 0;

    // 문자열 안의 문자를 하나씩 체크한다.
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch)  // i번재 요소가 ch인지 체크
            count += 1;
    }
    return count;
}

const string = prompt("문자열을 입력하세요.");
const letter = prompt("어떤 문자를 체크하겠습니까?");

const result = counting(string, letter);
document.write(`"${string}"에는 "${letter}"가 <span style="color:red">${result}개</span> 있습니다.`);