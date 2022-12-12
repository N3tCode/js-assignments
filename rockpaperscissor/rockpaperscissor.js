/* computer randomly chooses rock, paper, or scissor */

function getComputerChoice(randomChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    return randomChoice = choices[Math.floor(Math.random() * choices.length)];
}

let randomChoice;

/* user inputs a choice for the game rock, paper, scissor */

function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    console.log(lowerCasePlayerSelection)
    if (lowerCasePlayerSelection === 'rock' && computerSelection === 'paper')
        return 'You LOSE! Paper beats Rock :(';
        else if (lowerCasePlayerSelection === 'rock' && computerSelection === 'scissor')
        return 'You WIN! Rock beats Scissor :)';
        else if (lowerCasePlayerSelection === 'paper' && computerSelection === 'rock')
        return 'You WIN! Paper beats Rock :)';
        else if (lowerCasePlayerSelection === 'paper' && computerSelection === 'scissor')
        return 'You LOSE! Scissor beats Paper :(';
        else if (lowerCasePlayerSelection === 'scissor' && computerSelection === 'rock')
        return 'You LOSE! Rock beats Scissor :(';
        else if (lowerCasePlayerSelection === 'scissor' && computerSelection === 'paper')
        return 'You WIN! Scissor beats Paper :)';
        else if (lowerCasePlayerSelection === computerSelection)
        return 'Oh man a TIE! Try again stir fry!! :S';
  }
   
  const playerSelection = 'SCISSOR';
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(computerSelection);

/* a score is given to each player after each round */
/* after 5 rounds a winner is declared */