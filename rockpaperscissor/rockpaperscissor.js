// the playRound loops until a best out of 5 winner is determined
// if player wins, the player is awarded one point which is
// stored in the playerScore variable
// if computer wins, the player is awarded one point which is
// stored in the computerScore variable
// after 5 rounds a winner is declared

// user inputs a choice for the game rock, paper, scissor
// a round is played between the player and computer with a win or lose result returned
// and a point added to the round winner's score

 function gameEnd() {
    if (playerScore === 5) {
        gameTextBox.textContent = ('You\'ve done it!!! Machine\'s drool, People rule!');
        gameResults.appendChild(gameTextBox);
        disableButton();
    } else if (computerScore === 5) {
        gameTextBox.textContent = ('You\'ve didn\'t done it!!! People drool, Machine\'s rule!');
        gameResults.appendChild(gameTextBox);
        disableButton();
    } else if (playerScore == 5 & computerScore == 5) {
        gameTextBox.textContent = ('Well this is embarrassing... It\'s a tie. :/')
        disableButton();
    }
}

// computer randomly chooses rock, paper, or scissor

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}



// round choices
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    playRound('scissor', getComputerChoice());
});

const choicesButton = document.querySelectorAll('#rock, #paper, #scissor');

function disableButton() {
    const choicesButton = document.querySelectorAll('#rock, #paper, #scissor');
    for (let i = 0; i < choicesButton.length; i++) {
        choicesButton[i].disabled = true;
    }
}

var res = document.querySelectorAll("#div,#par,#head");
for (var i = 0; i < res.length; i++){
 res[i].style.backgroundColor = '#DCDCDC'
}

// round conditions
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return (computerRoundWin(playerSelection, computerSelection));
    }   else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return (playerRoundWin(playerSelection, computerSelection));
    }   else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return (playerRoundWin(playerSelection, computerSelection));
    }   else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return (computerRoundWin(playerSelection, computerSelection));
    }   else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return (computerRoundWin(playerSelection, computerSelection));
    }   else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return (playerRoundWin(playerSelection, computerSelection));
    }   else if (playerSelection === computerSelection) {
        return (roundTie());
    }
  }

// round text responses
function playerRoundWin(playerSelection, computerSelection) {
    gameTextBox.textContent = (`You WIN! ${playerSelection} beats ${computerSelection}`);
    gameResults.appendChild(gameTextBox);
    playerScoreNum.textContent = ++playerScore;
    playerScoreBoard.appendChild(playerScoreNum);
    gameEnd();
}

function computerRoundWin(playerSelection, computerSelection) {
    gameTextBox.textContent = (`You LOSE! ${computerSelection} beats ${playerSelection}`);
    gameResults.appendChild(gameTextBox);
    computerScoreNum.textContent = ++computerScore;
    computerScoreBoard.appendChild(computerScoreNum);
    gameEnd();
}

function roundTie() {
    gameTextBox.textContent = ('Oh man a TIE! Try again stir fry!! :S');
    gameResults.appendChild(gameTextBox);
    gameEnd();
}

// round response box
const gameResults = document.querySelector('.gameResults');
const gameTextBox = document.createElement('div');
gameTextBox.classList.add('gameTextBox');

// scoreboard
let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.querySelector('#playerScore');
const playerScoreNum = document.createElement('div');
playerScoreNum.classList.add('score');
playerScoreNum.textContent = playerScore;
playerScoreBoard.appendChild(playerScoreNum);


const computerScoreBoard = document.querySelector('#computerScore');
const computerScoreNum = document.createElement('div');
computerScoreNum.classList.add('score');
computerScoreNum.textContent = computerScore;
computerScoreBoard.appendChild(computerScoreNum);
