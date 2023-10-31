const result = document.querySelector("#result");
const firstDay = new Date("1996-01-11");
const today = new Date();

let passedTime = today.getTime() - firstDay.getTime();
let passedDay = Math.round(passedTime / (time/(1000.60*60*24)))
result.innerText = passedDay;