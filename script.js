const boxes = document.querySelectorAll(".square");
const status = document.getElementById("status");
const restart = document.getElementById("restart");

const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const closeBtn = document.getElementById("close-btn");


let playerX = true;
let gameRunning = true;

const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((square) => {
    square.addEventListener("click", () => {
        console.log("button is pressed");
        if (playerX === true) {
            square.innerText = "X";
            playerX = false;
            status.innerText = "Player 0's Turn"
        }
        else {
            square.innerText = "0";
            playerX = true;
            status.innerText = "Player X's Turn"
        }
        square.disabled = true;

        checkWinner();
        checkDraw();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner is player ", pos1Val);
                popupText.innerText = "Winner is Player " + pos1Val;
                popup.classList.remove("hide");
                status.innerText = "Game Over";
                disableBoxes();
                break;

            }

        }

    }
};

const checkDraw = () => {
    let allFilled = true;

    boxes.forEach((square) => {
        if (square.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled === true) {
        popupText.innerText = "Match Draw";
        popup.classList.remove("hide");
        status.innerText = "Game Draw";
        disableBoxes();
    }
};

const disableBoxes = () => {
    for (let square of boxes) {
        square.disabled = true;
    }
};

const enableBoxes = () => {
    for (let square of boxes) {
        square.disabled = false;
        square.innerText = "";
        status.innerText = "Player X's Turn";
    }
};

closeBtn.addEventListener('click', () => {
    popup.classList.add("hide");
    enableBoxes();
});