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
let underline =document.getElementById("under-line")

let taskinput = document.getElementById("task-input")
let addbutton = document.getElementById("add-button")
let tasklist =[]
let tabs = document.querySelectorAll(".task-tabs div")
let mode= 'my'
let filterlist =[]
let nothing = false
addbutton.addEventListener("click",addtask)

taskinput.addEventListener("focus",function(){taskinput.value=''})

for(let i=1;i<tabs.length;i++){
    tabs[i].addEventListener("click",function(event)
    {filter(event)} )
}

function addtask(){
     
    let task ={
        id:randomidgenerate(),
        taskcontent:taskinput.value, 
        iscomplet:false
    }
    tasklist.push(task)
    
    render()
}

function render(){
    let list =[]
    if(mode==="my"){
        list =tasklist;
    }else if(mode==="ongoing" || mode ==="done"){
        list = filterlist;
    }
    
       
    let resulthtml ='';
    for(let i = 0; i< list.length;  i++){
        if(list[i].iscomplet ==true){
            resulthtml+= `<div class="task" style="background-color: gary">
            <div class="task-done">${list[i].taskcontent}</div>
            <div>
                <button onclick="togglecomplete('${list[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
                <button onclick="deltask('${list[i].id}')"><i class="fa-solid fa-eraser"></i></button>
            </div>
        </div>`
        }else{
            resulthtml += `<div class="task">
        <div>${list[i].taskcontent}</div>
        <div>
            <button onclick="togglecomplete('${list[i].id}')"><i class="fa-solid fa-user-check"></i></button>
            <button onclick="deltask('${list[i].id}')"><i class="fa-solid fa-eraser"></i></button>

        </div>
    </div>`

        }
        
    }
    document.getElementById("task-board").innerHTML = resulthtml
}

function togglecomplete(id){
    
    for(let i =0;i<tasklist.length;i++){
        if(tasklist[i].id ==id){
            tasklist[i].iscomplet= !tasklist[i].iscomplet;
            break;
        }
    }
    filter();
    console.log(tasklist)
}


function deltask(id){
    for(let i=0; i<tasklist.length; i++){
        if(tasklist[i].id == id){
            tasklist.splice(i,1)

            filterlist = filterlist.filter(task => task.id !== id);
            break;
        }
    }
    
    filter();
    console.log(tasklist)
}

function randomidgenerate(){
    return Math.random().toString(36).substr(2, 16);
}

function filter(event){
    if(event){
    mode = event.target.id
    }
    if(event)
    {   
        underline.style.left = event.target.offsetLeft+"px"
        underline.style.width=event.target.offsetWidth+"px"
        underline.style.top=event.target.offsetTop + (event.target.offsetHeight -4)+"px"
    }


    filterlist =[]
    if(mode ==="ongoing"){
       
        for(let i=0; i<tasklist.length; i++){
            if(tasklist[i].iscomplet === false){
                filterlist.push(tasklist[i])
            }
        }
        
    }else if(mode ==="done"){
        
        for(let i=0; i<tasklist.length; i++){
            if(tasklist[i].iscomplet ==true ){
                filterlist.push(tasklist[i])
            }  
        }

    }
    render();
}

//input란에 값이 비었으면 버튼 블락
function buttondisabled(){
   
    if(document.getElementById("task-input").value==="" || document.getElementById("task-input").value===" " || document.getElementById("task-input").value==="  ") { 
           document.getElementById('add-button').disabled = true; 
       } else { 
           document.getElementById('add-button').disabled = false;
       }
   }

   if(taskinput.value=''){
        nothing =true
   }if(nothing=true){
    addbutton.disabled = true
   }
   

  //enter 누르면 input 작성 값 출력
  taskinput.addEventListener("keypress", (e)=>{
    if (e.key == "Enter") {
        e.preventDefault();
        addbutton.click()
        taskinput.value = "";
    }
}
)
