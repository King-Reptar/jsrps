function getComputerChoice(move) {

    return move[Math.floor(Math.random() * move.length)];
}
let move = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(move));