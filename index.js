
let move = ["Rock", "Paper", "Scissors"];

function getComputerChoice(move) {

    return move[Math.floor(Math.random() * move.length)];
}
//Working so far..

let playerSelection = "Rock";
let computerSelection = getComputerChoice(move);

function playRound(playerSelection, computerSelection) {
    return (playerSelection + computerSelection);
}
console.log(playRound(playerSelection, computerSelection));

