// score boards

let playerScore = 0;
let computerScore = 0;

// the playRound loops until a best out of 5 winner is determined
// if player wins, the player is awarded one point which is
// stored in the playerScore variable
// if computer wins, the player is awarded one point which is
// stored in the computerScore variable
// after 5 rounds a winner is declared

game();

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
    playerSelection = prompt('Enter your choice.. Rock, Paper, Scissor:','').toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    let computerWin = (`You LOSE! ${computerSelection} beats ${playerSelection}`);
    let playerWin = (`You WIN! ${playerSelection} beats ${computerSelection}`);
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return (computerWin + ++computerScore);
    }   else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return (playerWin + ++playerScore);
    }   else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return (playerWin + ++playerScore);
    }   else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return (computerWin + ++computerScore);
    }   else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return (computerWin + ++computerScore);
    }   else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return (playerWin + ++playerScore);
    }   else if (playerSelection === computerSelection) {
        return 'Oh man a TIE! Try again stir fry!! :S';
    }   else alert('What the chocolate chip! That\'s not a choice for this game. Please try again friend. :)');
  }