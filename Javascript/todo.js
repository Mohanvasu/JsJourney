const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList =  document.getElementById("todo-list");
const dltAll = document.getElementById("dlt-all");

addBtn.addEventListener('click',(event)=>{
    const inputValue = todoInput.value;
    console.log(`User entered, ${inputValue}`);
    const li = document.createElement("li");

    li.innerText=inputValue;

    const delBtn = document.createElement("button");
    delBtn.innerHTML=" X";
    delBtn.addEventListener('click',()=>{
        li.remove();
    })

    li.append(delBtn);
    todoList.appendChild(li);
    todoInput.value="";
});

dltAll.addEventListener('click',()=>{
    todoList.innerHTML="";
})


