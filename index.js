// ROCK - PAPER - SCISSOR GAME!

// const buttons = document.querySelectorAll("buttons");
// const rockBtn = document.getElementById("btn1");
// const paperBtn = document.getElementById("btn2");
// const scissorBtn = document.getElementById("btn3");

// let player = document.getElementById("player");
// let computer = document.getElementById("computer");

// const result = document.getElementById("result");

// const playerScore = document.getElementById("playerScore");
// const computerScore = document.getElementById("computerScore");

// // On selecting a option print something on player
// rockBtn.onclick = function() {
//     player.textContent = "Player: ";
//     player.textContent += rockBtn.value;
//     let computerValue = computerOption();
//     fight(rockBtn.value, computerValue);
// }
// paperBtn.onclick = function() {
//     player.textContent = "Player: ";
//     player.textContent += paperBtn.value;
//     let computerValue = computerOption();
//     fight(paperBtn.value, computerValue);
// }
// scissorBtn.onclick = function() {
//     player.textContent = "Player: ";
//     player.textContent += scissorBtn.value;
//     let computerValue = computerOption();
//     fight(scissorBtn.value, computerValue);
// }

// function computerOption() {
//     const randomOption = Math.floor(Math.random() * 3) + 1;
//     computer.textContent = "Computer: ";
//     if (randomOption == 1) {
//         computer.textContent += rockBtn.value;
//         return rockBtn.value;
//     } else if (randomOption == 2) {
//         computer.textContent += paperBtn.value;
//         return paperBtn.value;
//     } else if (randomOption == 3) {
//         computer.textContent += scissorBtn.value;
//         return scissorBtn.value;
//     }
// }

// function fight(playerValue, computerValue) {
//     let win = 0;
//     let loose = 0;
//     if (playerValue === "rock" && computerValue === "paper") {
//         result.textContent = "YOU Lose";
//         loose++;
//     } else if (playerValue === "rock" && computerValue === "scissor") {
//         result.textContent = "YOU Win";
//         win++;
//     } else if (playerValue === "rock" && computerValue === "rock") {
//         result.textContent = "It's a Tie";
//     }
//     playerScore.textContent += 
// }





// =============================== BROCODE ===================================

let choices = ["rock", "paper", "scissor"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const totalGames = document.getElementById("totalGames");

let player = 0;
let computer = 0;
let total = 0;

function playGame(playerChoice) {

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE.";
    } else {
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "paper" ? "YOU LOSE!" : "YOU WIN!";
                break;
            case "paper":
                result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                result = computerChoice === "rock" ? "YOU LOSE!" : "YOU WIN!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    score(result);
    resultDisplay.classList.remove("green", "red");
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("green");
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("red");
    }
}

function score(result) {
    resultDisplay.classList = "";
    if (result === "YOU WIN!") {
        player++;
    } else if (result === "YOU LOSE!") {
        computer++;
    }
    total++;
    playerScore.textContent = `Player Score: ${player}`;
    computerScore.textContent = `Computer Score: ${computer}`;
    totalGames.textContent = `Total Games: ${total}`;
}