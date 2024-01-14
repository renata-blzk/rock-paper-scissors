// Random Computer choice

const input = Math.floor(Math.random() * 3);
if (input === 0) {
    console.log("Rock");
} else if (input === 1) {
    console.log("Papper");
} else {
    console.log("Scissors");
}

function getComputerChoice() {
    console.log(input);
}


// Player section

let choice = prompt("Please choose Rock, Paper or Scissors:");

const computerSelection = getComputerChoice();

if (choice != null) {
    alert(input);
}