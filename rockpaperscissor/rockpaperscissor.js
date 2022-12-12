/* user inputs a choice for the game rock, paper, scissor */
/* computer randomly chooses rock, paper, or scissor */

let randomChoice;

function getComputerChoice(randomChoice) {
    const choices = ['Rock', 'Paper', 'Scissor'];
    return randomChoice = choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice(randomChoice));

/* a score is given to each player after each round */
/* after 5 rounds a winner is declared */