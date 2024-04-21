/*let playRoundResut;
let playerScore = 0;
let computerScore = 0;

const playGame = () =>  {
    for (let i = 0; i < 5; i++) {
    let choice = Math.floor(Math.random() * 3) +1;

    function getComputerChoice() {
        if (choice === 1) return 'ROCK';
        if (choice === 2) return 'PAPER';
        return 'SCISSORS';
    }
    
    function playRound(playerSelection, computerSelection) {
        const win = (computerSelection === 'ROCK' && playerSelection === 'PAPER') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') ||
        (computerSelection === 'PAPER' && playerSelection === 'SCISSORS');
        if (computerSelection === playerSelection) return 'Tie!';
        if (win) {
            playerScore++;
            return 'You won!';
        }
        computerScore++;
        return 'You loose!'; 
    }

    const playerSelection = player.toUpperCase();
    const computerSelection = getComputerChoice();
    playRoundResult = playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    console.log(`Player pick: ${playerSelection}`);
    console.log(`Computer pick: ${computerSelection}`);
    }
}

playGame();

console.log(`Computer ${computerScore}`);
console.log(`Player ${playerScore}`);*/


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

