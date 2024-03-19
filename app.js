let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO=true;

const winPattrens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
turnO = true;
enabledBoxes()
msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
if(turnO){
box.innerText="O";
turnO = false;
}
else{
box.innerText="X";
turnO = true;
}
box.disabled = true;
checkWinnere();
});
});

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner)=>{
msg.innerText= `Congratualations, Winner is ${winner}`;
msgContainer.classList.remove("hide"); 
disabledBoxes();
}
const checkWinnere = ()=>{
    for(let pattren of winPattrens){
    let pos1Val = boxes[pattren[0]].innerText;
    let pos2Val = boxes[pattren[1]].innerText;
    let pos3Val = boxes[pattren[2]].innerText;
    
    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
        }
    }
};

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);