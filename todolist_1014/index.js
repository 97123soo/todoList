let toDo = [];   //할일 저장 배열
const toDo_KEY = "todo";

//const inputText = document.getElementById('textInput').value;
//const inputView = document.createElement('div');

//로컬스토리지 저장
function save(){
    localStorage.setItem(toDo_KEY, JSON.stringify(toDo));
}


const saveTodo = localStorage.getItem(toDo_KEY);

// if(saveTodo !== null){ // 비어있지 않으면
//     const parsedTodo = JSON.parse(saveTodo);  //배열형태 값 추가
//     toDo = parsedTodo;  
//     parsedTodo.forEach(paintTodo); 
// }

function toDoSubmit(ev){
    ev.preventDefault();
    const newTodo = inputText.value;
    inputText.value="";
    toDo.push(newTodo);
    paintTodo(newTodo); //input값 보냄
    save();
}


function todoListAdd(ev){
    //입력할값
    const inputText = document.getElementById('textInput').value;


    //아무것도 입력 안했을때 추가안되게 하기
    if(inputText.trim() == ""){
        return;
    }

    //json 정보저장
    // toDo_input.push({
    //     title : inputText, 
    //     date : new Date()
    // })
    // save();
    const inputView = document.createElement('div');

    if(!ev.keyCode || ev.keyCode === 13){

        inputView.innerText = inputText;

        
        //취소선
        inputView.onclick = function inputLine(){
            if(inputView.classList.contains('done')){
                inputView.classList.remove('done');
            } else{
                inputView.className += 'done';
            }
        }


        //제거 버튼 생성
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "-";
        
        inputView.appendChild(deleteBtn);

        document.getElementById('todoListView').appendChild(inputView);


        //입력창 비워줌
        document.getElementById('textInput').value='';

        deleteBtn.onclick= function deleteClick(){
            this.parentNode.remove();

        }

    }

}
