const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");
const resultText = document.getElementById("result");


const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");


let playerScore = 0;
let computerScore = 0;

const icons = {
    rock: "fa-hand-back-fist",
    paper: "fa-hand",
    scissors: "fa-hand-scissors"
};

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    // Reset hands to fist before shaking
    playerHand.innerHTML = `<i class="fa-regular fa-hand-back-fist rotate-90"></i>`;
    computerHand.innerHTML = `<i class="fa-regular fa-hand-back-fist rotate-270"></i>`;

    // Add shaking animation
    playerHand.classList.add("shake-left");
    computerHand.classList.add("shake-right");

    resultText.innerText = "Playing...";

    setTimeout(() => {
        // Stop animation
        playerHand.classList.remove("shake-left");
        computerHand.classList.remove("shake-right");



        let playerRotationClass = "rotate-90";
        if (playerChoice === "scissors") {
            playerRotationClass = "scale-x-[-1]"; // 
        }


        let computerRotationClass = "rotate-270";
        if (computerChoice === "scissors") {
            computerRotationClass = "scale-y-[-1]";
        }


        playerHand.innerHTML = `<i class="fa-regular ${playerRotationClass} ${icons[playerChoice]}"></i>`;
        computerHand.innerHTML = `<i class="fa-regular ${computerRotationClass} ${icons[computerChoice]}"></i>`;

        // Result Logic & Score Update
        if (playerChoice === computerChoice) {
            resultText.innerText = "Draw!! 🤝";
        }
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            resultText.innerText = "You Win 🎉";
            playerScore++;
            playerScoreText.innerText = playerScore;
        }
        else {
            resultText.innerText = "Computer Wins 😢";
            computerScore++;
            computerScoreText.innerText = computerScore;
        }
    }, 2000);
}


function restartGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreText.innerText = "0";
    computerScoreText.innerText = "0";

    playerHand.innerHTML = `<i class="fa-regular fa-hand-back-fist rotate-90"></i>`;
    computerHand.innerHTML = `<i class="fa-regular fa-hand-back-fist rotate-270"></i>`;
    resultText.innerText = "Let's Play!! ";
}