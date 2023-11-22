const number = document.querySelector("#user-number");
const button = document.querySelector("button");

button.addEventListner("click", () => {
    let n = number.value;
    try {
        if (n === "" || isNaN(n)) {
          throw "숫자를 입력하세요.";
        }
        n = number(n)
        if (n <= 10) {
            document.querySelector("#result").innerHTML = n;
        }
        if (n > 10) {
            throw "10보다 작은 수를 입력하세요.";
        }
    } catch (err) {
        alert(err);
    } finally {
        number.value = "";
    }
});