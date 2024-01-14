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

//let playerSelection = prompt("Please choose Rock, Paper or Scissors:");
//let computerSelection = getComputerChoice();

const playerSelection = prompt("Please choose Rock, Paper or Scissors:");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function playRound(playerSelection, computerSelection) {
     if (playerSelection != null) {
     alert(computerSelection);
     return(playerSelection); }
}

playRound();


//if (playerSelection == "rock" && computerSelection == "rcok") {
//    console.log("it's a draw!");
//}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));



//const computerSelection = getComputerChoice();

//if (choice != null) {
//    alert(input);
//}