
let move = ["rock", "paper", "scissors"];

function getComputerChoice(move) {

    return move[Math.floor(Math.random() * move.length)];
}

let playerSelection = prompt("Your Move");

let computerSelection = getComputerChoice(move);

//Function to return the computer's choice
function playRound(playerSelection, computerSelection) {
    return (playerSelection + computerSelection);
}
 
//If Else statements declaring the outcome of the round
if (playerSelection.toLowerCase() == computerSelection) {
    console.log(`It's a Tie!!`)
}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    console.log("Paper beats rock... You Lose!")
}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
    console.log("Rock beats Scissors... YOU WIN!!")
}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
    console.log("Scissors beats Paper... YOU WIN!!")
}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
    console.log("Rock beats Scissors... You Lose!")
}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
    console.log("Scissors beat Paper... You Lose")
}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    console.log("Paper beats Rock... YOU WIN!!")
}