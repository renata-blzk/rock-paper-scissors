// Random Computer choice

let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let result = choices[(Math.floor(Math.random() *3))];
    console.log(result);
    return result;
}


//let input = Math.floor(Math.random() * 3);
//if (input === 0) {
//    console.log("Rock");
//} else if (input === 1) {
//    console.log("Papper");
//} else {
//    console.log("Scissors");
//}



// Player section

let playerSelection = prompt("Please choose Rock, Paper or Scissors:");
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection != null) {
     alert(computerSelection);
    }
}



//const computerSelection = getComputerChoice();

//if (choice != null) {
//    alert(input);
//}