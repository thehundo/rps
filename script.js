// Create function getComputerSelection
function getComputerSelection() {
// Create a variable randomNumber between 0 - 2
    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
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
console.log("getComputerSelection: " + getComputerSelection());

// CREATE a function getUserSelection
function getUserSelection() {
// ASK User to choose "Rock" "Paper" or "Scissors"
    let userSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'").toLowerCase();
// CHECK that answer is valid and return "invalid response" if not
    if (userSelection == "rock" || 
        userSelection == "paper" ||
        userSelection == "scissors") {
        return userSelection;
    }
        else {
            return "idiot";
    } ;
// Convert answer to Capitalized (how?)

// Return capitalized answer to getUserSelection function

}
// SHOW getUserSelection
console.log("getUserSelection: " + getUserSelection());