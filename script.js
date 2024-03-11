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
}
// SHOW getComputerSelection in console
// console.log("getComputerSelection: " + getComputerSelection());

// CREATE a function getUserSelection
function getUserSelection() {
// ASK User to choose "Rock" "Paper" or "Scissors"
    let userSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'").toLowerCase();
// CHECK that answer is valid and return "idiot" if not
    if (userSelection == "rock" || 
        userSelection == "paper" ||
        userSelection == "scissors") {
        return userSelection;
    }
        else {
            return "idiot";
    } ;
}
// SHOW getUserSelection
// console.log("getUserSelection: " + getUserSelection());


// CREATE a constant userSelection
const userSelection = getUserSelection();
console.log("user: " + userSelection);
// CREATE a constant computerSelection
const computerSelection = getComputerSelection();
console.log("computer: " + computerSelection);
// CREATE a function playRound with arguments userSelection and computerSelection
function playRound(userSelection, computerSelection) {
// Check for tie: if userSelection is the same as computerSelection
    if (userSelection == computerSelection) {
        return alert("Tie. You both selected: " + userSelection );
    }
//      Display "You Tied" and userSelection == computerSelection
// Check for win
    else if (userSelection == "rock" && computerSelection == "scissors"
        || userSelection == "paper" && computerSelection == "rock"
        || userSelection == "scissors" && computerSelection == "paper") {
            return alert("You won: " + userSelection + " beats " + computerSelection + "!!");
    }
//      Display "You Won" and UserSelection beats computerSelection
// Since user did not tie or win, Display "You Lost" and ComputerSelection beats UserSelection
    else return alert("You lost: "+ computerSelection + " beats " + userSelection + ".")
// 
}

console.log(playRound(userSelection, computerSelection));