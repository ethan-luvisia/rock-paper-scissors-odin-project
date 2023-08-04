function getComputerChoice () { 
    var randomNumber = Math.floor(Math.random() * 3);


switch(randomNumber) {
    case 0: 
    return "Rock"
    break;
    case 1:
    return "Paper"
    break;
    case 2:
    return "Scissors"
    break;
    }
}



    let Rock = document.getElementById("rock");
    let Paper = document.getElementById("paper");
    let Scissors = document.getElementById("scissors");
    Rock.addEventListener("click", function() {
        return playerResult = "Rock";
    });
    Paper.addEventListener("click", function() {
        return playerResult = "Paper";
    });
    Scissors.addEventListener("click", function() {
        return playerResult = "Scissors";
    });

    // player/computer choices above, choice comparision below.

let victor = document.getElementById("victor");
let playerScore = 0;
document.getElementById("player-score").textContent = playerScore;
let computerScore = 0;
document.getElementById("computer-score").textContent = computerScore;
let runGame = document.getElementById("run-game");
runGame.addEventListener("click" , function compareChoice () {
computerResult = getComputerChoice();

    if (computerResult === "Rock") {
        if (playerResult === "Scissors") {
            victor.textContent = "Computer, you lost...";
            computerScore += 1;
        }
        else if (playerResult === "Paper") {
            victor.textContent = "Player, you won!";
            playerScore += 1;
        }
        else if (playerResult === "Rock") {
            victor.textContent = "No one, it's a tie!"
        }
    }
    else if (computerResult === "Paper") {
        if (playerResult === "Rock") {
            victor.textContent = "Computer, you lost...";
            computerScore += 1;
        }
        else if (playerResult === "Scissors") {
            victor.textContent = "Player, you won!";
            playerScore += 1;
        }
        else if (playerResult === "Paper") {
            victor.textContent = "No one, it's a tie!"
        }
    }
    else if (computerResult === "Scissors") {
        if (playerResult === "Paper") {
            victor.textContent = "Computer, you lost...";
            computerScore += 1;
            }
        else if (playerResult === "Rock") {
            victor.textContent = "Player, you won!";
            playerScore += 1;
            }   
        else if (playerResult === "Scissors") {
            victor.textContent = "No one, it's a tie!";
        }
    }
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("player-score").textContent = playerScore;

    if (computerScore == 5 || playerScore == 5) {
            gameOver();
    }
});

let newGameButtonGenerated = false;

let gameOver = function() {
    if (computerScore == 5) {
        document.getElementById("final-victor").textContent = "Final Victor: Computer!";
        if (!newGameButtonGenerated) {
        let newGameButton = document.createElement("button");
        newGameButton.classList.add("choice");
        newGameButton.classList.add("btn-before");
        newGameButton.classList.add("centering");
        newGameButton.textContent = "New Game";
        newGameButton.addEventListener("click", (event) => {
            window.location.reload();
        })
        let Results;
        Results = document.getElementById("final-results");
        Results.appendChild(newGameButton);
        newGameButtonGenerated = true;
    }
}

    else if (playerScore == 5) {
        document.getElementById("final-victor").textContent = "Final Victor: Player!";
        if (!newGameButtonGenerated) {
        let newGameButton = document.createElement("button");
        newGameButton.classList.add("choice");
        newGameButton.classList.add("btn-before");
        newGameButton.classList.add("centering");
        newGameButton.textContent = "New Game";
        newGameButton.addEventListener("click", (event) => {
            window.location.reload();
        })
        let Results;
        Results = document.getElementById("final-results");
        Results.appendChild(newGameButton);
        newGameButtonGenerated = true;
    }
}
}

/*
Rock Paper Scissors Pseudocode

prompt("Rock Paper Scissors! Make your choice.","")

getComputerChoice() {
    randomly pick between three strings (Rock, Paper Scissors)
    return result

    if Computer = Rock

}
*/