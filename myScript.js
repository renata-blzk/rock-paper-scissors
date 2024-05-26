let playerCount = 0;
let computerCount = 0;
let playerSelection;
let computerSelection;
let gameInProgress = true;

const rock = document.querySelector("#btn1");
const paper = document.querySelector("#btn2");
const scissors = document.querySelector("#btn3");

//get computer choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) +1;
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
        playerCount++;
        return 'You won!';
    }
    computerCount++;
    return 'You loose!'; 
}

function handlePlayerSelection(selection) {
    if (gameInProgress) {
        playerSelection = selection;
        game();
        highlight(selection);
        overlay();
    }
}

function highlight(selection) {
    rock.classList.remove('highlight');
    paper.classList.remove('highlight');
    scissors.classList.remove('highlight');
    if (selection == 'ROCK') rock.classList.add('highlight');
    if (selection == 'PAPER') paper.classList.add('highlight');
    if (selection == 'SCISSORS') scissors.classList.add('highlight');
}

rock.addEventListener("click", () => handlePlayerSelection('ROCK'));
paper.addEventListener("click", () => handlePlayerSelection('PAPER'));
scissors.addEventListener("click", () => handlePlayerSelection('SCISSORS'));

function game() {
    computerSelection = getComputerChoice();

    //div that displays who won
    let result =  document.getElementById('details');
    
    //button that displays computer's choice
    let computerChoice = document.querySelector('.btn-computer');
    computerChoice.textContent = computerSelection;

    result.textContent - playRound(playerSelection, computerSelection);

    let humanScore = document.querySelector('.human');
    //if (humanScore) {
        humanScore.textContent = playerCount;
    //}

    let computerScore = document.querySelector('.computer');
    if (computerScore) {
        computerScore.textContent = computerCount;   
    }
}

function overlay() {
    if (playerCount === 5) {
        let finalResult = document.getElementById('details');
        finalResult.textContent = playerCount === 5 ? 'You Won' : 'You Lost';

        playAgain();
        gameInProgress = false;
    }
}

function playAgain() {
    let btnNew = document.createElement('button');
    btnNew.textContent = 'Play Again';
    let appendBtn = document.getElementById('details');
    btnNew.style.backgroundColor = 'silver';
    appendBtn.appendChild(btnNew);

    btnNew.addEventListener('click', () => {
        playerCount = 0;
        computerCount = 0;
        finalResult = undefined;
        let humanScore = document.querySelector('.human');
        humanScore.textContent = playerCount;
        let computerScore = document.querySelector('.computer');
        if (computerScore) {
            computerScore.textContent = computerCount;
        }
        appendBtn.removeChild(btnNew);
        gameInProgress = true;
    });
}