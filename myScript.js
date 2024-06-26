const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;
let playBtn;

// add functions to buttons
choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    updateScores();
    //playAgain();
    checkGameEnd();

}));

// create random computer choice
function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {

    if (player == computer) {
        return "Draw!";
    } else if (computer == "ROCK") {
        if (player == "PAPER") {
            playerScore++;
            return "You Win!";
        } else {
            computerScore++;
            return "You Loose!";
        }
    } else if (computer == "PAPER") {
        if (player == "SCISSORS") {
            playerScore++;
            return "You Win!";
        } else {
            computerScore++;
            return "You Loose!";
        }
    } else if (computer == "SCISSORS") {
        if (player == "ROCK") {
            playerScore++;
            return "You Win!";
        } else {
            computerScore++;
            return "You Loose!";
        }
    }
}

function updateScores() {
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

function checkGameEnd() {
    if (playerScore === 5 || computerScore === 5) {
        choiceBtns.forEach (button => button.disabled = true);

        playBtn = document.createElement("button");
        playBtn.textContent = `Play Again`;
        document.body.appendChild(playBtn);

        playBtn.addEventListener ("click", () => {
            playerScore = 0;
            computerScore = 0;
            playerText.textContent = `Player:`;
            computerText.textContent = `Computer:`;
            resultText.textContent = "Result: ";
            updateScores();
            choiceBtns.forEach (button => button.disabled = false);
            playBtn.remove();
            playBtn.null;
        });
    }
}







////////////////////////////////////
// ///// Previous attempts ///// //
///////////////////////////////////

/*let playerCount = 0;
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
}*/

/*let game = {};
    game.players = [0, 0];
    game.calcWhoWins = function (p1, p2) {
        if (p1 == p2) {
            return -1;
        } else if (p1 == 'rock' && p2 == 'scissors') {
            return 0;
        } else if (p1 == 'paper' && p2 == 'rock') {
            return 0;
        } else if (p1 == 'scissors' &&  p2 == 'paper') {
            return 0;
        } else {
            return 1;
        }
    }

    game.options = ['rock', 'paper', 'scissors'];
    game.randomOption = function() {
        let randomIndex = Math.floor(Math.random() * 3);
        return this.options[randomIndex]
    }

    game.play = function (p1) {
        if (!p1) { return false }
        if (this.options.indexOf < 0) { return false }

        let p2 = this.randomOption();
        let winner = this.calcWhoWins(p1, p2);
        if (this.players[winner]) {
            this.players[winner]++
        }
        this.display(p1, p2, winner)
    }

    game.display = function(p1, p2, winner) {
        let p1Score = document.querySelector('#p1Score');
        let p2Score = document.querySelector('#p2Score');
        let historyTable = document.querySelector('#history');
        let historyTbody = document.querySelector('tbody');

        let result = winner == -1
        ? 'Draw'
        : `Player ${winner + 1} Wins!`;

        if (p1Score) {
            p1Score.innerText = this.players[0]
        }
        if (p2Score) {
            p2Score.innerText = this.players[1]
        }
        if (history){
            historyTbody.innerHTML += `<tr>
                <td>${p1}</td><td>${result}</td><td>${p2}</td>
            </tr>`;
        }
    }

    game.init =function() {
        let rock = document.querySelector('#rock');
            rock.addEventListener('click', () => {
                game.play('rock')
            });
        let paper = document.querySelector('#paper');
            paper.addEventListener('click', () => {
                game.play('paper')
            });
        let scissors = document.querySelector('#scissors');
            scissors.addEventListener('click', () => {
                game.play('scissors')
            })
    }

    document.addEventListener("DOMContentLoaded", (event) => {
        game.init()
    });*/

/*function playAgain() {
    if (playerScore === 5 || computerScore === 5) {
        const playBtn = document.createElement("button");
        playBtn.textContent = `Play Again`;
        document.body.appendChild(playBtn);
    
        playBtn.addEventListener ("click", () => {
            playerScore = 0;
            computerScore = 0;
            document.querySelector("#playerScore").innerHTML = playerScore;
            document.querySelector("#computerScore").innerHTML = computerScore;
        }); 
    }
    

}*/
