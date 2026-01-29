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



/*

For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

Add a div for displaying results and change all of your console.logs into DOM methods.
'
Display the running score, and announce a winner of the game once one player reaches 5 points.

Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the rps-ui branch with git status before continuing.

Checkout the branch we want to merge INTO i.e. main with the command git checkout main.

Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.

If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!

Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!

Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push origin --delete rps-ui. Congrats, we’re all done with our cleanup!

*/