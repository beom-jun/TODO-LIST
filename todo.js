//유저가 값을 입력
//+버튼을 누르면 할일이 추가
//del 버튼을 누르면 할일이 삭제
//check 버튼 누르면 할일이 끝나서 밑줄이 간다
//1. check 버튼을 클릭하면 true로
//2. true이면 끝난걸로 간주하고 밑줄 보여주기
//3. flase이면 안끝난걸로 간주하고 그대로

//진행 중 끝남 탭을 누르면 언더바가 이동
//끝남 탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만
//전체 탭을 누르면 다시 전체 아이템으로 돌아옴


let taskinput = document.getElementById("task-input")
let addbutton = document.getElementById("add-button")
let tasklist =[]
addbutton.addEventListener("click",addtask)


function addtask(){
     
    let task ={
        id:randomidgenerate(),
        taskcontent:taskinput.value, 
        iscomplet:false
    }
    tasklist.push(task)
    console.log(tasklist)
    render()
}

function render(){
    let resulthtml ='';
    for(let i = 0; i< tasklist.length;  i++){
        if(tasklist[i].iscomplet ==true){
            resulthtml+= `<div class="task" style="background-color: gary">
            <div class="task-done">${tasklist[i].taskcontent}</div>
            <div>
                <button onclick="togglecomplete('${tasklist[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
                <button onclick="deltask('${tasklist[i].id}')"><i class="fa-solid fa-eraser"></i></button>
            </div>
        </div>`
        }else{
            resulthtml += `<div class="task">
        <div>${tasklist[i].taskcontent}</div>
        <div>
            <button onclick="togglecomplete('${tasklist[i].id}')"><i class="fa-solid fa-user-check"></i></button>
            <button onclick="deltask('${tasklist[i].id}')"><i class="fa-solid fa-eraser"></i></button>

        </div>
    </div>`
        }

    
    }
    document.getElementById("task-board").innerHTML = resulthtml
}

function togglecomplete(id){
    console.log("id:",id)
    for(let i =0;i<tasklist.length;i++){
        if(tasklist[i].id ==id){
            tasklist[i].iscomplet= !tasklist[i].iscomplet;
            break;
        }
    }
    render();
    console.log(tasklist);
}


function deltask(id){
    for(let i=0; i<tasklist.length; i++){
        if(tasklist[i].id == id){
            tasklist.splice(i,1);
            break;
        }
    }
    render()
}

function randomidgenerate(){
    return Math.random().toString(36).substr(2, 16);
}
