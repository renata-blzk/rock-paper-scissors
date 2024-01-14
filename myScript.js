// Random Computer choice

let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let result = choices[(Math.floor(Math.random() *3))];
    console.log(result);
    return result;
}


//if (getComputerChoice() === 0) {
//    return "Rock";
//} else if (getComputerChoice() === 1) {
//    return "Paper";
//} else {
//    return "Scissors";
//}


//let input = Math.floor(Math.random() * 3);
//if (input === 0) {
//    console.log("Rock");
//} else if (input === 1) {
//    console.log("Papper");
//} else {
//    console.log("Scissors");
//}



// Player section

//let choice = prompt("Please choose Rock, Paper or Scissors:");

//const computerSelection = getComputerChoice();

//if (choice != null) {
//    alert(input);
//}