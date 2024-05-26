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

playGame();

console.log(`Computer ${computerScore}`);
console.log(`Player ${playerScore}`);*/


/*const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    
  });
});*/


//get computer choice
let choice = Math.floor(Math.random() * 3) +1;
function getComputerChoice() {
    if (choice === 1) return 'ROCK';
    if (choice === 2) return 'PAPER';
    return 'SCISSORS';
}

//check who won the game
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

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let gameInProgress = true;

const rock = document.querySelector("#btn1");
const paper = document.querySelector("#btn2");
const scissors = document.querySelector("#btn3");


rock.addEventListener("click", () => {
    if (gameInProgress) {
        playerSelection = "ROCK";
        game();
        //highlight the option clicked by user
        rock.classList.add('highlight');
        overlay();
    }
});

paper.addEventListener("click", () => {
    if (gameInProgress) {
        playerSelection = "PAPER";
        game();
        paper.classList.add('highlight');
        overlay();
    }
});

scissors.addEventListener("click", () => {
    if (gameInProgress) {
        playerSelection = "SCISSORS";
        game();
        rock.classList.add('highlight');
        overlay();
    }
});

document.addEventListener('mouseup', (e) => {
    rock.classList.remove('highlight');
    paper.classList.remove('highlight');
    scissors.classList.remove('highlight');
});

function game() {
    computerSeletion = getComputerChoice();

    //div that displays who won
    let result =  document.getElementById('details');
    
    //button that displays computer's choice
    let computerChoice = document.querySelector('.btn-computer');

    computerChoice.textContent = computerSelection.toUpperCase();
    result.textContent = playRound (playerSelection, computerSelection).toUpperCase();


    
}

