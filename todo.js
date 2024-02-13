//유저가 값을 입력
//+버튼을 누르면 할일이 추가
//del 버튼을 누르면 할일이 삭제
//check 버튼 누르면 할일이 끝나서 밑줄이 간다
//진행 중 끝남 탭을 누르면 언더바가 이동
//끝남 탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만
//전체 탭을 누르면 다시 전체 아이템으로 돌아옴


let taskinput = document.getElementById("task-input")
let addbutton = document.getElementById("add-button")
let tasklist =[]
addbutton.addEventListener("click",addtask)


function addtask(){
    let taskcontent = taskinput.value 
    tasklist.push(taskcontent)
    console.log(tasklist)
    render()
}

function render(){
    let resulthtml ='';
    for(let i = 0; i< tasklist.length;  i++){
        resulthtml += `<div class="task">
        <div>${tasklist[i]}</div>
        <div>
            <button>check</button>
            <button>del</button>
        </div>
    </div>  `

    document.getElementById("task-board").innerHTML = resulthtml
    }

}