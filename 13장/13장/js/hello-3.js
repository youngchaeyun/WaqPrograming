function whatsYourFavorite() {
    let fav = "Javascript";
    return new Promise((resolve, reject) => resolve(fav));  // resolve 일때 javascript를 변환
}

function displaySubject(subject) {
    return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));  // resolve 일때 whatsyourfavorite() 함수의 결과를 받아서 Hello와 함께 프로미스 변환
}

whatsYourFavorite()
.then(displaySubject)
.then(console.log);