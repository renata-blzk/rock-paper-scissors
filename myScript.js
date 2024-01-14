// Random Computer choice


function getComputerChoice() {
    return (Math.floor(Math.random() *3));
}

if (getComputerChoice() === 0) {
    alert("Rock");
} else if (getComputerChoice() === 1) {
    alert("Paper");
} else {
    alert("Scissors");
}

getComputerChoice();

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