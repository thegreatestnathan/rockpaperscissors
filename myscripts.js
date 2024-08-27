
function getComputerChoice () {
    random = Math.floor(Math.random() * 3);
    if (random == 0) {return "rock"};
    if (random  == 1) {return "scissors"};
    return "paper";
}

/*function getHumanChoice () {
    let choice = prompt("What do you pick?", "rock, paper, scissors");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "scissors" || choice === "paper") {return choice};
    return getHumanChoice ();
}*/

function playRound(humanChoice) {
    console.log("");
    /*    humanChoice = getHumanChoice(); */
    console.log("You chose " + humanChoice);
    computerChoice = getComputerChoice();
    console.log("The man behind your screen chose " + computerChoice);
    /* in case of ties */
    if (humanChoice === computerChoice) {
        message = `You and the computer both chose <b>${humanChoice}</b>! It's a tie :(`;
        announcement.innerHTML = message;     
    }
    /*in case of non-ties*/
    else {
        displayChoice = `You chose <b>${humanChoice}</b> whilst the computer chose <b>${computerChoice}</b>! `;
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            message = "You won this round!";
            humanScore++;
        } else {
            message = "Darn you suck";
            computerScore++;
        }
        console.log(humanScore + " - " +computerScore)
        announcement.innerHTML = displayChoice + message;}
    score.textContent = humanScore + " - " + computerScore + "!";
    if (humanScore == 5) {humanwin(humanScore, computerScore)}
    if (computerScore == 5) {computerwin(humanScore, computerScore)}}

let humanScore = 0;
let computerScore = 0;

/*const scissors = document.querySelector("scissors");
const rock = document.querySelector("rock");
const paper = document.querySelector("paper");*/

let buttons = document.querySelectorAll("#buttons button");

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log("button clicked");
        let playerChoice = event.target.id;
        console.log(playerChoice);
        playRound(playerChoice);
    });
});


const score = document.getElementById("score");
const announcement = document.getElementById("announcement")
const baby = document.getElementById("baby");

winner = document.getElementById("winner");
function humanwin(humanScore, computerScore) {
    let message = `Good job! You beat the machine <b>${humanScore} - ${computerScore}!</b>`;
    score.remove();
    announcement.remove();
    winner.innerHTML = message;
    buttons.forEach(button => button.remove());
    baby.src = 'images/win.jpg'
}

function computerwin(humanScore, computerScore) {
    let message = `Bruh!! The machine beat you <b>${humanScore} - ${computerScore}!</b>`;
    score.remove();
    announcement.remove();
    winner.innerHTML = message;
    buttons.forEach(button => button.remove());
    baby.src = 'images/loss.gif'
}