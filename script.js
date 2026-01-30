choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3)

    console.log("Computer: " + choices[randomChoice])
    return choices[randomChoice]
}

let hScore = 0
let cScore = 0

humanScore = document.getElementById("h-score")
computerScore = document.getElementById("c-score")

function checkWin(){
    if (hScore >= 5){
        Swal.fire("You Win!")
    }
    else if (cScore >= 5){
        Swal.fire("Computer Wins!")
    }
}


function compareInput(compChoice, humanChoice) {
    if (compChoice == humanChoice) {
        Swal.fire("Tie!")
    }
    else if (compChoice == "rock" && humanChoice == "paper") {
        Swal.fire("You get a point!")
        hScore += 1
        humanScore.innerHTML = " " + hScore
    }
    else if (compChoice == "rock" && humanChoice == "scissors") {
        Swal.fire("Computer gets a point!")
        cScore += 1
        computerScore.innerHTML = " " + cScore
    }
    else if (compChoice == "paper" && humanChoice == "rock") {
        Swal.fire("Computer gets a point!")
        cScore += 1
        computerScore.innerHTML = " " + cScore
    }
    else if (compChoice == "paper" && humanChoice == "scissors") {
        Swal.fire("You get a point!")
        hScore += 1
        humanScore.innerHTML = " " + hScore
    }
    else if (compChoice == "scissors" && humanChoice == "paper") {
        Swal.fire("Computer gets a point!")
        cScore += 1
        computerScore.innerHTML = " " + cScore
    }
    else if (compChoice == "scissors" && humanChoice == "rock") {
        Swal.fire("You get a point!")
        hScore += 1
        humanScore.innerHTML = " " + hScore
    }
}

function confirmInput(option) {
    Swal.fire({
        title: "Confirm option?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("You have chosen " + option, "", "success");
            compareInput(getComputerChoice(), option);
        } else if (result.isDenied) {
            Swal.fire("Please choose an option", "", "info");
        }
    });
}

let currentValue = ""

document.getElementById("btn-rock").onclick = function () {
    confirmInput("rock");
};

document.getElementById("btn-paper").onclick = function () {
    confirmInput("paper");
};

document.getElementById("btn-scissors").onclick = function () {
    confirmInput("scissors");
};


checkWin()




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