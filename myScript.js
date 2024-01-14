const game = Math.floor(Math.random() * 3);
if (game === 0) {
    console.log("Rock");
} else if (game === 1) {
    console.log("Papper");
} else {
    console.log("Scissors");
}

function getComputerChoice() {
    return game;
}

getComputerChoice();