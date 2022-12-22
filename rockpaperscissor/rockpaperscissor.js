// score boards

let playerScore = 0;
let computerScore = 0;

// the playRound loops until a best out of 5 winner is determined
// if player wins, the player is awarded one point which is
// stored in the playerScore variable
// if computer wins, the player is awarded one point which is
// stored in the computerScore variable
// after 5 rounds a winner is declared


 function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
     }

    if (playerScore > computerScore) {
        return console.log('Game Over... You WIN!!!');
    }   else if (playerScore < computerScore) {
        return console.log('Game Over... You LOSE.');
    }   else {
        return console.log('Game Over... It\'s a TIE lol');
    }
}

// computer randomly chooses rock, paper, or scissor

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// user inputs a choice for the game rock, paper, scissor
// a round is played between the player and computer with a win or lose result returned
// and a point added to the round winner's score

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return (computerRoundWin(playerSelection, computerSelection) + ++computerScore);
    }   else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return (playerRoundWin(playerSelection, computerSelection) + ++playerScore);
    }   else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return (playerRoundWin(playerSelection, computerSelection) + ++playerScore);
    }   else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return (computerRoundWin(playerSelection, computerSelection) + ++computerScore);
    }   else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return (computerRoundWin(playerSelection, computerSelection) + ++computerScore);
    }   else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return (playerRoundWin(playerSelection, computerSelection) + ++playerScore);
    }   else if (playerSelection === computerSelection) {
        return (roundTie());
    }
  }

function playerRoundWin(playerSelection, computerSelection) {
    console.log(`You WIN! ${playerSelection} beats ${computerSelection}`);
}

function computerRoundWin(playerSelection, computerSelection) {
    console.log(`You LOSE! ${computerSelection} beats ${playerSelection}`);
}

function roundTie() {
    console.log('Oh man a TIE! Try again stir fry!! :S');
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

const scissor = document.querySelector('#scissor');
paper.addEventListener('click', () => {
    playRound('scissor', getComputerChoice());
});

