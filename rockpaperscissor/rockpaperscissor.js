// the playRound loops until a winner of 5 rounds is determined
// if player wins, the player is awarded one point which is
// stored in the playerScore variable
// if computer wins, the player is awarded one point which is
// stored in the computerScore variable
console.log(game());

 function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        let playerScore = 0;
        if (playerWin) {
            ++playerScore;
            if (playerScore = 5) {
                return 'You DEFEATED the computer!';
            }
        }
        let computerScore = 0;
        if (computerWin) {
            ++computerScore;
            if (computerScore = 5) {
                return 'You have been DEFEATED by the computer!';
            }
        }
     }
}

// computer randomly chooses rock, paper, or scissor

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// user inputs a choice for the game rock, paper, scissor

//let playerSelection = prompt('Enter your choice.. Rock, Paper, Scissor:','');

// a round is played between the player and computer with a win or lose result returned */

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Enter your choice.. Rock, Paper, Scissor:','');
    computerSelection = getComputerChoice();
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    console.log(lowerCasePlayerSelection);
    console.log(computerSelection);
    let computerWin = (`You LOSE! ${computerSelection} beats ${playerSelection}`);
    let playerWin = (`You WIN! ${playerSelection} beats ${computerSelection}`)
    if (lowerCasePlayerSelection === 'rock' && computerSelection === 'paper') {
        return computerWin;
    }   else if (lowerCasePlayerSelection === 'rock' && computerSelection === 'scissor') {
        return playerWin;
    }   else if (lowerCasePlayerSelection === 'paper' && computerSelection === 'rock') {
        return playerWin;
    }   else if (lowerCasePlayerSelection === 'paper' && computerSelection === 'scissor') {
        return computerWin;
    }   else if (lowerCasePlayerSelection === 'scissor' && computerSelection === 'rock') {
        return computerWin;
    }   else if (lowerCasePlayerSelection === 'scissor' && computerSelection === 'paper') {
        return playerWin;
    }   else if (lowerCasePlayerSelection === computerSelection) {
        return 'Oh man a TIE! Try again stir fry!! :S';
    }   else alert('What the chocolate chip! That\'s not a choice for this game. Please try again friend. :)');
  }

//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
//console.log(computerSelection);