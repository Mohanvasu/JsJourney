const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");

const boards = document.querySelectorAll(".board");

addTaskBtn.addEventListener('click', () => {
    const input = prompt("Enter Task");
    if(!input) return;
    const task = document.createElement("p");
    task.classList.add("item");
    task.setAttribute("draggable",true);
    task.innerText = input;
    attachDragEvents(task);
    todoBoard.appendChild(task);
});

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

