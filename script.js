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

function getComputerChoice(){
    randomChoice = Math.floor(Math.random() * 3)

    console.log(choices[randomChoice])
    return choices[randomChoice]
}

function getHumanChoice(){
    let myChoice = prompt("Enter your choice:").toLowerCase()

    console.log(myChoice)
    return myChoice
}

compChoice = getComputerChoice()
humanChoice = getHumanChoice()

function playRound(humanSelection, computerSelection){
    if (humanSelection == computerSelection){
        alert("Tie!")
    }
    else if(humanSelection == "rock" && computerSelection == "scissors"){
        humanScore+=1
        alert("You get a point.")
    }
    else if(humanSelection == "rock" && computerSelection == "paper"){
        computerScore+=1
        alert("Computer gets a point.")
    }
    else if(humanSelection == "scissors" && computerSelection == "rock"){
        computerScore+=1
        alert("Computer gets a point.")
    }
    else if(humanSelection == "scissors" && computerSelection == "paper"){
        humanScore+=1
        alert("You get a point.")
    }
    else if(humanSelection == "paper" && computerSelection == "scissors"){
        computerScore+=1
        alert("Computer gets a point.")
    }
    else if(humanSelection == "paper" && computerSelection == "rock"){
        humanScore+=1
        alert("You get a point.")
    }
}

function playGame(){

}


playRound()