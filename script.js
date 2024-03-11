// Create function getComputerSelection
function getComputerSelection() {
// Create a variable randomNumber between 0 - 2
    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
// Set getComputerSelection to "Rock" (0), "Paper" (1) or "Scissors"(2)
    if (randomNumber == 0) {
        return "Rock";
    }
        else if (randomNumber == 1) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
// SHOW getComputerSelection in console
            console.log(getComputerSelection());
    }

