const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");

const boards = document.querySelectorAll(".board");
let modal = document.getElementById("taskModal");
const close = document.querySelector(".close");
const cancel = document.querySelector("#cancelTask");
const saveTask = document.querySelector("#saveTask");

console.log(saveTask);

saveTask.addEventListener("click", () => {
    const taskName = document.querySelector("#taskName").value;
    const taskPriority = document.querySelector("#taskPriority").value;
    const taskDescription = document.querySelector("#taskDescription").value;
    

    const task = document.createElement("p");
    task.classList.add("item");
    task.setAttribute("draggable",true);
    task.textContent =  taskName;
    attachDragEvents(task);
    todoBoard.appendChild(task);

    hideModal();
    clearModalContnent();
});

function clearModalContnent(){
    document.querySelector("#taskName").value="";
    document.querySelector("#taskDescription").value=""
}

cancel.addEventListener("click", hideModal);
close.addEventListener("click", hideModal);

function hideModal(){
    modal.style.display="none";
}

// addTaskBtn.addEventListener('click', () => {
//     const input = prompt("Enter Task");
//     if(!input) return;
//     const task = document.createElement("p");
//     task.classList.add("item");
//     task.setAttribute("draggable",true);
//     task.innerText = input;
//     attachDragEvents(task);
//     todoBoard.appendChild(task);
// });

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

