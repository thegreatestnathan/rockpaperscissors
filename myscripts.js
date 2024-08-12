
function getComputerChoice () {
    random = Math.floor(Math.random() * 3);
    if (random == 0) {return "rock"};
    if (random  == 1) {return "scissors"};
    return "paper";
}

function getHumanChoice () {
    let choice = prompt("What do you pick?", "rock, paper, scissors");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "scissors" || choice === "paper") {return choice};
    return getHumanChoice ();
}

function playRound() {
    console.log("");
    humanChoice = getHumanChoice();
    console.log("You chose " + humanChoice);
    computerChoice = getComputerChoice();
    console.log("The man behind your screen chose " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("You both picked the same! It's a tie :(");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You won this round!");
        humanScore++;
    } else {
        console.log("Darn you suck");
        computerScore++;
    }
    console.log(humanScore + " - " +computerScore)

}
let humanScore = 0;
let computerScore = 0;


function playGame() {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore == computerScore) {console.log("It's a tie!")}
    if (humanScore > computerScore) {console.log("You won!!!")}
    if (humanScore < computerScore) {console.log("no comments...")}
}

playGame();