const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");

const boards = document.querySelectorAll(".board");
let modal = document.getElementById("taskModal");
const close = document.querySelector(".close");
const cancel = document.querySelector("#cancelTask");
const saveTask = document.querySelector("#saveTask");

window.addEventListener("load", () => {
    const formData = JSON.parse(localStorage.getItem('formEntries') || []);
    if (formData.length > 0) {
        formData.forEach((entry, index) => {
            const task = document.createElement("li");
            task.classList.add("item");
            task.setAttribute("draggable",true);
            task.innerText = entry.task + " - " + entry.priority;
            attachDragEvents(task);
            todoBoard.appendChild(task);
        })
    }
});

saveTask.addEventListener("click", () => {
    const taskName = document.querySelector("#taskName").value;
    const taskPriority = document.querySelector("#taskPriority").value;
    const taskDescription = document.querySelector("#taskDescription").value;

    const formData = {
        task : taskName,
        priority : taskPriority,
        description : taskDescription
    }
    
    let savedData = JSON.parse(localStorage.getItem('formEntries') || []);
    savedData.push(formData);
    localStorage.setItem('formEntries',JSON.stringify(savedData));

    const task = document.createElement("p");
    task.classList.add("item");
    task.setAttribute("draggable",true);
    task.innerText =  taskName + " - " + taskPriority;
    attachDragEvents(task);
    todoBoard.appendChild(task);

    hideModal();
    clearModalContent();
});

function clearModalContent(){
    document.querySelector("#taskName").value="";
    document.querySelector("#taskPriority").value="";
    document.querySelector("#taskDescription").value="";
}

cancel.addEventListener("click", hideModal);
close.addEventListener("click", hideModal);

function hideModal(){
    modal.style.display="none";
}

addTaskBtn.addEventListener('click', ()=>{
    modal.style.display="block";
})

function attachDragEvents(target){
    target.addEventListener("dragstart", () => {
        target.classList.add("flying");
    });
    target.addEventListener("dragend", () => {
        target.classList.remove("flying");
    });
}


boards.forEach((board)=>{
    board.addEventListener("dragover",()=>{
        const flyingElement = document.querySelector(".flying");
        console.log(flyingElement, " Upar se ud kar gaya");
        board.appendChild(flyingElement);
    });
});

const allItems = document.querySelectorAll(".item");

allItems.forEach((item)=>{
    attachDragEvents(item);
});

