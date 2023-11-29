// promise 객체 만들기 (제작 코드)

let likePizza = false;
const pizza = new Promise ((resolve, reject) => {
    if (likePizza) 
        resolve('피자를 주문합니다.');
    else
        reject('피자를 주문하지 않습니다.');
});

// promise 객체 사용하기 (소비코드)
pizza
    .then(  // 성공했을 때 사용
        result => console.log(result)
    )
    .catch(    // 실패했을 때 사용
        err => console.log(err)
    )
    .finally(   // 무조건 사용
        () => console.log('완료')
    );