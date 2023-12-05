// 웹 요소 가져오기
const todoInput = document.querySelector('#todo-input');   // 사용자 입력
const addButton = document.querySelector('#add-button');   // 추가 버튼
const todoList = document.querySelector('#todo-list');    // 투두 리스트

// 이벤트 처리
addButton.addEventListener(`click`, addTodo);

// 함수
function addTodo(e) {
    e.preventDefault();

    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);    // 새로운 내용을 추가

    saveToLocal(todoInput.value);   // 로컬 스로리지에 저장

    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button');
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);
    todoInput.value = "";   // 입력 창 초기화
}

function saveToLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
  
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // 이벤트 처리
  document.addEventListener("DOMContentLoaded", getLocal);
  addButton.addEventListener('click', addTodo);
  todoList.addEventListener('click', manageTodo);

  function getLocal() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        tosos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
        // 스토리지에서 todos 값을 가져온다.
    }

    todos.forEach(function(todo) {  // todos 요소마다 반복
        const newDiv = document.createElement('div');
        newDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;   // 로컬 스토리지의 값을 표시
        newTodo.classList.add('todo-content');
        newDiv.appendChild(newTodo);

        const completeButton = document.createElement('button');
        completeButton.innerText = '완료';
        completeButton.classList.add('complete-button'); 
        newDiv.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';
        deleteButton.classList.add('delete-button');
        newDiv.appendChild(deleteButton);

        todoList.appendChild(newDiv);

        todoInput.value = "";
    });
  }

  function manageTodo(e) {
    const whichButton = e.target.classList[0];  // 클릭한 부분의 class명을 가져온다
    if (whichButton === 'conplete-button') {    // '완료' 버튼이면
        const todo = e.target.parentElement;
        todo.children[0].classList.toggle('completed');
        // 내용 부분에 .completed 클래스를 토글
    } else if(whichButton === 'delete-button') {    // '삭제' 버튼이면
        const todo = e.target.parentElement;    // '삭제' 버튼의 부모 요소를 todo에 할당
        removeLocal(todo);  // '삭제' 버튼의 부모 요소를 삭제
        todo.remove();
    }
  }

  function removeLocal(todo) {
    let todos;     // 로컬 스토리지에서 가져온 할 일들
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {  
      todos = JSON.parse(localStorage.getItem('todos'));
    }

    const index = todos.indexOf(todo.children[0].innerText);    // 삭제할 할 일의 인덱스
    // console.log(index); // 인덱스 확인하기
    todos.splice(index, 1); // index 번째 요소를 삭제
    localStorage.setItem('todos', JSON.stringify(todos));

    console.log(todo);
  }