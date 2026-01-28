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
let runFiveTimes = 5

function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3)

    console.log(choices[randomChoice])
    return choices[randomChoice]
}

function getHumanChoice() {
    let myChoice = prompt("Enter your choice:").toLowerCase()

    console.log(myChoice)
    return myChoice
}

compChoice = getComputerChoice()
humanChoice = getHumanChoice()

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

function decideWinner(){
    let score;

    if (humanScore == computerScore) {
        score = "The score is tied!"
    }
    else {
        score = (humanScore > computerScore) ? `You win! Score: ${humanScore}` : `Computer wins! Score: ${computerScore}`
    }

    alert(score)
}

function playGame() {
    // while (runFiveTimes <= 4){
    //     playRound(humanChoice, compChoice)
    //     runFiveTimes+=1
    // }

    while (runFiveTimes > 0) {
        alert("!")
        playRound()
        runFiveTimes-=1
    }

    decideWinner()
}

playGame()