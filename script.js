// CREATE a variable userScore and set value to 0
let userWins = 0;
// CREATE a variable computerScore and set value to 0
let computerWins = 0;
// CREATE a variable for ties and set value to 0
let ties = 0;
// CREATE variables for HTML elements
const container = document.querySelector("#container");
const results = document.querySelector("#results");
const score = document.createElement("h4");
const roundChoice = document.createElement("p");
const roundResult = document.createElement("p");
const winLoss = document.createElement("h1");


//Show the score
function showScore() {
    score.textContent = "User: " + userWins + "    Computer: " + computerWins + "    Ties: " + ties;
    results.appendChild(roundChoice);
    results.appendChild(roundResult);
    results.appendChild(score);
    victoryCheck();
}

function victoryCheck() {
    if (userWins >= 5) winLoss.textContent = "VICTORY";
    else if (computerWins >= 5) winLoss.textContent = "YOU DIED";
    results.appendChild(winLoss);
}


let userInput = "";

container.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            userInput = target.id;
            playRound(userInput, getComputerSelection());
            showScore();
            break;
        case 'paper':
            userInput = target.id;
            playRound(userInput, getComputerSelection());
            showScore();
            break;
        case 'scissors':
            userInput = target.id;
            playRound(userInput, getComputerSelection());
            showScore();
            break;
    };
});

//playGame(5);
//declareWinner(userScore, computerScore);

// CREATE a function playGame
/* function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        playRound(getUserSelection(), getComputerSelection());
        console.log(`Round ${i+1}:   You: ${userScore}   Computer: ${computerScore}`);
    }
} */

// Declare the winner of the game
/* function declareWinner(userScore, computerScore) {
    if (userScore == computerScore) {
        return alert("You tied. It's like kissing your sister.");
    }
    else if (userScore > computerScore) {
        return alert("You won.");
    }
    else return alert("You lost.");
} */

// CREATE a function playRound with arguments userSelection and computerSelection
function playRound(userSelection, computerSelection) {
    // Show user and computer selections in console
    roundChoice.textContent = "User: " + userSelection + "   Computer: " + computerSelection;
// Check for tie: if userSelection is the same as computerSelection
    if (userSelection == computerSelection) {
//      Display "You Tied" and userSelection == computerSelection
        roundResult.textContent = "Tie. You both selected: " + userSelection;
        return ties += 1;
    }
// Check for win conditions
    else if (userSelection == "rock" && computerSelection == "scissors"
        || userSelection == "paper" && computerSelection == "rock"
        || userSelection == "scissors" && computerSelection == "paper") {
//      Display "You Won" and UserSelection beats computerSelection
        roundResult.textContent = "You won: " + userSelection + " beats " + computerSelection + "!!";
        return userWins += 1;
    }
// Since user did not tie or win, Display "You Lost" and ComputerSelection beats UserSelection
    else {
        roundResult.textContent = "You lost: "+ computerSelection + " beats " + userSelection + ".";
        return computerWins += 1;
    }
};

// Create function getComputerSelection
function getComputerSelection() {
    // Create a variable randomNumber between 0 - 2
        let randomNumber = Math.floor(Math.random()*3);
        // console.log(randomNumber);
    // Set getComputerSelection to "rock" (0), "paper" (1) or "scissors"(2)
        if (randomNumber == 0) {
            return "rock";
            }
            else if (randomNumber == 1) {
                return "paper";
            }
            else {
                return "scissors";
            }
};