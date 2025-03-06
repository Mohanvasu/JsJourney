const createBtn = document.querySelector("#createBtn");
const resetBtn = document.querySelector("#resetBtn");
let container = document.querySelector(".btnContainer");

createBtn.onclick = function(){
    const hexColor = document.getElementById("input").value;
    console.log(hexColor);

    let newBtn = document.createElement("button");
    newBtn.className="tempBtn";
    newBtn.innerText = hexColor;
    
    document.querySelector(".btnContainer").append(newBtn);
    newBtn.onclick = function(){
        changeBackground(hexColor);
    }
}

resetBtn.onclick = function(){
    document.body.style.backgroundColor="#FFFFFF";
    let tempButtons = document.querySelectorAll(".tempBtn");
    for(let button of tempButtons){
        button.remove();
    }

}

const changeBackground = function(hexColor){
    document.body.style.backgroundColor = hexColor;
}

