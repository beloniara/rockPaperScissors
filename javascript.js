let humanScore = 0;
let computerScore = 0;

function getRandomNumber() {
    // gets a random number from 1-3
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    //use the function getRandomNumber to get a random number from 1-3 and put that value into a variable
    //depending on the variable's value, rock paper or scissors will be returned

    const randomNumber = getRandomNumber();

    if (randomNumber === 1){
        return "rock"
    } 
    
    else if (randomNumber === 2){
        return "paper"
    } 
    
    else {
        return "scissors"
    };
}

function getHumanChoice(){
    //get human choice using a prompt then save it into a variable
    //make sure that whatever the user inputs in the prompt, change it into lowercase

    const choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
}

//everything below here is just a preliminary implementation of the playRound function. will continue next time

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        humanScore = humanScore + 1;
        return humanScore
    } else if (humanChoice === computerChoice){
        humanScore = humanScore +1;
        computerScore = computerScore +1;
        return humanScore , computerScore;
    } else {
        computerScore = computerScore +1;
        return computerScore;
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Player Choice = " + humanSelection);
console.log("Computer Choice = " + computerSelection);
console.log("Player Score = " + humanScore);
console.log("Computer Score = " + computerScore);




