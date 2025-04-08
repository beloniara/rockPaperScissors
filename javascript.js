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

//the game itself.  Game is a race to 5.  Whoever scores 5 in Rock Paper Scissors will win.  The Odin Project only requires to have the game do 5 rounds.  I just wanted the game to be a race to 5.  
//playGame() function is called if the scores are less than 4.  game will stop once someone scores 5.

function playGame(){
  function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        console.log("Player wins this round!")
        humanScore = humanScore + 1;
        return humanScore
    } else if (humanChoice === computerChoice){
        console.log("It's a Draw!")
        return humanScore , computerScore;
    } else {
        console.log("Computer wins this round!")
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

if (humanScore <= 4 && computerScore <=4){
    playGame();
} else if (humanScore === 5){
    console.log("Player Win!")
} else if (computerScore === 5){
    console.log("Player Lose!")
  }
}
playGame();

//below this comment is the actual solution to have the game terminate after 5 rounds.  replace the code starting from the last if statement until the last else if statement

// if (humanScore + computerScore <=4){
//     playGame();
//  }



