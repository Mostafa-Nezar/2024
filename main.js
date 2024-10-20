let btn = document.querySelector(".add")
let input = document.querySelector("input")
let tasks = document.querySelector(".tasks")
let content=[]
returnstored()
btn.addEventListener('click', () => {
    if (input.value !== "") {
        main(input.value);
        input.value = "";
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (input.value !== "") {
            main(input.value);
            input.value = "";
        }
    }
});

function main(textcontent) {
    let field = {
        id:Date.now(),
        text:textcontent,
        done:false,
    }
    content.push(field)
    createfeild(content)
    storefields()
    
}

function createfeild(content) {
    tasks.innerHTML=""
    content.forEach((field)=>{
        let div = document.createElement("div")
        div.className="task"
        div.innerHTML=field.text
        div.setAttribute("data-id",field.id)
        if (field.done) {
            div.className="task done"
        }
        let del = document.createElement("span")
        del.innerHTML="delete"
        del.className="delete"
        div.appendChild(del)
        tasks.appendChild(div)

    });
}

function storefields() {
    localStorage.setItem("tasks",JSON.stringify(content))
}
function returnstored(){
    if (localStorage.getItem("tasks")) {
        content=JSON.parse(localStorage.getItem("tasks"))
        createfeild(content)
    }
}
tasks.addEventListener("click",(e)=>{
    if (e.target.classList.contains("delete")) {
        removefield(e.target.parentElement.getAttribute("data-id"))
        e.target.parentElement.remove()
    }
    if (e.target.classList.contains("task")) {
        toggledone(e.target.getAttribute("data-id"))
        e.target.classList.toggle("done")
    }
})

function removefield(taskid) {
    content=content.filter((field)=>field.id != taskid)
    storefields(content)
}

function toggledone(fieldid) {
    for (let i = 0; i < content.length; i++) {
        if (content[i].id == fieldid) {
            if (content[i].done==false) {
                content[i].done=true
            }else{
                content[i].done=false
            }
        }
    }
    storefields(content)
}
document.querySelector(".delall").onclick = () =>{tasks.innerHTML="";localStorage.clear()}