// 구조 분해 할당하기
const fruits = ["사과", "복숭아"]
let apple = fruits[0]
let peach = fruits[1]

console.log("apple : ", apple)
console.log("peach : ", peach)

// 구조 분해 할당. 왼쪽에는 변수, 오른쪽에는 분해 할 값 저장
let [apple1, peach1] = ["사과", "복숭아"]

console.log("apple1 : ", apple1)
console.log("peach1 : ", peach1)

// 일부 값만 변수에 할당
let [spring, , fall] = ['봄', '여름', '가을', '겨울']

console.log("spring : ", spring)
console.log("fall : ", fall)

// 나머지 변수를 사용해 구조 분해 할당 하기
// 나머지 값을 묶어서 만든 변수를 나머지 변수라고 한다.
// 변수 앞에 ... 붙인다.
let [teacher, ...students] = ['김지연', '홍길동', '김길동', '박길동']
console.log("teacher : ", teacher)
console.log("students : ", students)

// 두 변수의 값 교환
let x = 10
let y = 20

console.log("x : ", x)
console.log("y : ", y)

// let temp = x
// x = y
// y = temp

// [x, y] = [y, x]
console.log("x : ", x)
console.log("y : ", y)

// 객체 구조 분해 할 때는 프로퍼티 이름이나 메서드 이름을 변수 이름으로 사용
// 객체는 순서가 없기 때문에 키 이름과 변수 이름이 같아야 한다.
const member = {
    name1 : '윤영채',
    age1 : 27
}
let {name1, age1} = member
console.log("name1 : ", name1)
console.log("age1 : ", age1)

// 객체 프로퍼티에 접근하지 않고 변수를 사용하여 프로그래밍 가능
let name2, age2 = {name2:'이순신', age2: 30}
console.log("name2 : ", name2)
console.log("age2 : ", age2)

// 새로운 변수 이름 사용하기
// name 키의 값을 새로운 변수 userName 에 할당하려면..
// name 프로퍼티 값을 userName 변수에 할당해야 한다.
const member2 = {
    name : '홍길동',
    age : 25
}
let {name:userName, age} = member2
console.log("userName : ", userName)

// 중첩된 객체 구조 분해
// 중첩된 객체는 객체 안에 객체가 있는 것
const student1 = {
    name : '윤영채',
    score : {
        history : 85,
        math : 94,
        eng : 100
    },
    friends : ['장민지', '박하은', '고윤정']
}

// students1 에 있는 값을 구조 분해하여 변수에 할당 할 수 있다.
let {
    name,   // student.name의 값
    score : {
        history, math, eng  // student.score.eng 값
    },
    friends : [f1, f2, f3]
} = student1

console.log("영어 점수 : ", eng)
console.log("2번째 친구 : ", f2)