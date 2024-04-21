let playRoundResut;
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

    //let player = prompt('Please select your choice', '');
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
console.log(`Player ${playerScore}`);