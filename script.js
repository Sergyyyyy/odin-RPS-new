/* -- PSUEDOCODE --

getComputerChoice()
    - return a string (rock, paper, scissors)
    - use math.floor(math.random() * 3)

getHumanChoice()
    - prompt and get the value of the prompt
    - return prompt value to console
    - case-insensitive

playRound()
    - take parameters (humanChoice, computerChoice)
    - log results
    - increment scores

playGame()
    - run playRound() 5x with for loop
    display score after running

Global Scope
    - choice array
    - initialize humanScore and computerScore with the value of 0.

- Assume that every input is correct.

*/

choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0
let attempts = 4

function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3)

    console.log("Computer: " + choices[randomChoice])
    return choices[randomChoice]
}

function getHumanChoice() {
    let myChoice = prompt("Enter your choice:").toLowerCase()

    console.log("You: " + myChoice)
    return myChoice
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        alert("Tie!")
    }
    else if (humanSelection == "rock" && computerSelection == "scissors") {
        humanScore += 1
        alert("You get a point.")
    }
    else if (humanSelection == "rock" && computerSelection == "paper") {
        computerScore += 1
        alert("Computer gets a point.")
    }
    else if (humanSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1
        alert("Computer gets a point.")
    }
    else if (humanSelection == "scissors" && computerSelection == "paper") {
        humanScore += 1
        alert("You get a point.")
    }
    else if (humanSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1
        alert("Computer gets a point.")
    }
    else if (humanSelection == "paper" && computerSelection == "rock") {
        humanScore += 1
        alert("You get a point.")
    }
}

function decideWinner() {
    let score;

    if (humanScore == computerScore) {
        score = "The score is tied!"
    }
    else {
        score = (humanScore > computerScore) ? `You win! Score: ${humanScore}` : `Computer wins! Score: ${computerScore}`
    }

    console.log("\n" + score)
    alert(score)
}

function playGame() {

    for (let i = 0; i <= attempts; i++) {
        compChoice = getComputerChoice()
        humanChoice = getHumanChoice()
        playRound(humanChoice, compChoice)
    }

    decideWinner()
}

playGame()