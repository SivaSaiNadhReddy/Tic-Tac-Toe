let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resBtn");
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");
let winner = document.querySelector(".winner");
let count = 0;

const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let flag = true;

const resetGame = () => {
    flag = true;
    winner.classList.add("hide");
    count = 0;
    enable();
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(flag){
            box.innerText = "O";
            flag = false;
        }
        else{
            box.innerText = "X";
            flag = true;
        }
        box.disabled = true;
        count++;
        isWinner();
    });
});

const isWinner= () => {
    for(let i of arr){
        let a = boxes[i[0]].innerText;
        let b = boxes[i[1]].innerText;
        let c = boxes[i[2]].innerText;

        if(a != "" && b != "" && c != ""){
            if(a == b && b == c){
                winnerIs(a);
            }
        }
        if(count === 9){
            drawMatch();
        }
    }
};

const winnerIs = (a) => {
    msg.innerText = `Congratulations, Winner is Player ${a}`;
    winner.classList.remove("hide");
    disable();
};

const drawMatch = () => {
    msg.innerText = "Match Drawn";
    winner.classList.remove("hide");
    disable();
};

const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

newBtn.addEventListener("click", resetGame);
resBtn.addEventListener("click", resetGame);