const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");

const boards = document.querySelectorAll(".board");
let modal = document.getElementById("taskModal");
const close = document.querySelector(".close");
const cancel = document.querySelector("#cancelTask");
let saveTask = document.querySelector("#saveTask");
const allItems = document.querySelectorAll(".item");

window.addEventListener("load", () => {
    const formData = JSON.parse(localStorage.getItem('formEntries') || []);
    if (formData.length > 0) {
        formData.forEach((entry) => {
            const task = document.createElement("li");
            task.classList.add("item");
            task.setAttribute("draggable",true);
            task.innerText = entry.task + " - " + entry.priority;
            const dltBtn = getDeleteButton();
            task.append(dltBtn);
            attachDragEvents(task);
            todoBoard.appendChild(task);
        })
    }
});


function getDeleteButton() {
    const dltBtn = document.createElement("button");
    dltBtn.className = "delete-btn";
    dltBtn.innerHTML = "&times;";
    dltBtn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        const formData = JSON.parse(localStorage.getItem('formEntries') || []);
        //delete from local storage
        formData.splice(formData.indexOf(e.target.parentElement.innerText), 1);
        localStorage.setItem('formEntries',JSON.stringify(formData));
        showDeleteConfirmation();
    })

    return dltBtn;
}

saveTask.addEventListener("click", () => {
    const taskName = document.querySelector("#taskName").value;
    const taskPriority = document.querySelector("#taskPriority").value;
    const taskDescription = document.querySelector("#taskDescription").value;

    if(taskName.value ==null || taskName.value === "" || (typeof taskName.value === "string")){
        saveTask.setAttribute("disabled",true);
    }

    const formData = {
        task : taskName,
        priority : taskPriority,
        description : taskDescription
    }

    let savedData = JSON.parse(localStorage.getItem('formEntries') || []);
    savedData.push(formData);
    localStorage.setItem('formEntries',JSON.stringify(savedData));
    const dltBtn = getDeleteButton();
    const task = document.createElement("li");
    task.classList.add("item");
    task.setAttribute("draggable",true);
    task.innerText =  taskName + " - " + taskPriority;
    attachDragEvents(task);
    task.append(dltBtn);
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



allItems.forEach((item)=>{
    attachDragEvents(item);
});


function showDeleteConfirmation() {
    //notification bar
    const notification = document.createElement("div");
    notification.className = "delete-notification";
    notification.textContent = "Item successfully deleted!";
    
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.padding = "10px 20px";
    notification.style.backgroundColor = "#4CAF50";
    notification.style.color = "white";
    notification.style.borderRadius = "4px";
    notification.style.zIndex = "1000";
    
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.height = "4px";
    progressBar.style.width = "100%";
    progressBar.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    progressBar.style.position = "absolute";
    progressBar.style.bottom = "0";
    progressBar.style.left = "0";
    progressBar.style.transition = "width 3s linear";
    
    //addding the progress bar to the notification
    notification.appendChild(progressBar);
    
    //adding the notification to the document
    document.body.appendChild(notification);
    
    //start the progress bar animation
    setTimeout(() => {
        progressBar.style.width = "0";
    }, 50);
    
    //remove the notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transition = "opacity 0.5s ease";
        
        //remove from DOM after fade out
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}
