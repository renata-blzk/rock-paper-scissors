// Random Computer choice

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let result = choices[(Math.floor(Math.random() *3))];
    //console.log(result);
    return result;
}


function playRound(playerSelection, computerSelection) {
    //playerSelection = prompt("Please choose Rock, Paper or Scissors:");
    //console.log(playerSelection);
    //computerSelection = getComputerChoice();
    //alert(computerSelection);
    //console.log(playRound(playerSelection, computerSelection));
    //return (playerSelection, computerSelection);
    
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
        }
    }



    //console.log(playRound(playerSelection, computerSelection));
     //if (playerSelection != null) {
     //alert(computerSelection);
     //return(playerSelection); }

//playRound();

//if (playerSelection == "rock" && computerSelection == "rock") {
//    console.log("it's a draw!");
//}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Please choose Rock, Paper or Scissors:");
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

//const computerSelection = getComputerChoice();

//if (choice != null) {
//    alert(input);
//