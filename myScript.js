// Random Computer choice

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let result = choices[(Math.floor(Math.random() *3))];
    return result;
}

// PlayRound function

function playRound(playerSelection, computerSelection) {    
    if (playerSelection === computerSelection) {
         return ("The result is a tie!");
        } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
            return ("You win! Rock beats scissors.");
        } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
            return ("You loose! Paper beats rock.");        
        } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
            return ("You win! Paper beats rock.");
        } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
            return ("You loose! Scissors beats paper.");
        } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
           return ("You loose! Rock beats scissors.");
        } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
            return ("You win! Scissors beats paper.");
        } else {
            return (playerSelection = prompt("Please choose Rock, Paper or Scissors:").toLowerCase());
        }
    }

const computerSelection = getComputerChoice();
const playerSelection = prompt("Please choose Rock, Paper or Scissors:").toLowerCase();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// Game function - best of 5

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        //let playerScore = 0;
        //let computerScore = 0;
    } 

    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
    }

    if (playerScore > computerScore) {
        return ("You win! Computer Score is ${computerScore). Your Score is ${playerScore}");
    } else if (playerScore < computerScore) {
        return ("You loose! Computer Score is ${computerScore}. Your Score is ${playerScore");
    } else {
        return ("It's a tie.");
    }

    console.log(game());
}

game();




