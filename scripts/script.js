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

computerResult = getComputerChoice();


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

let victor = document.getElementById("victor");
let runGame = document.getElementById("run-game");
runGame.addEventListener("click" , function compareChoice () {
    if (computerResult === "Rock") {
        if (playerResult === "Scissors")
            victor.textContent = "Computer, you lost...";
        else if (playerResult === "Paper")
            victor.textContent = "Player, you won!";
        else if (playerResult === "Rock")
            victor.textContent = "No one, it's a tie!"
    }
    else if (computerResult === "Paper") {
        if (playerResult === "Rock")
            victor.textContent = "Computer, you lost...";
        else if (playerResult === "Scissors")
            victor.textContent = "Player, you won!";
        else if (playerResult === "Paper")
            victor.textContent = "No one, it's a tie!"
    else if (computerResult === "Scissors") {
        if (playerResult === "Paper")
            victor.textContent = "Computer, you lost...";
        else if (playerResult === "Rock")
            victor.textContent = "Player, you won!";
        else if (playerResult === "Scissors")
            victor.textContent = "No one, it's a tie!";
        }
    }
});

/*
Rock Paper Scissors Pseudocode

prompt("Rock Paper Scissors! Make your choice.","")

getComputerChoice() {
    randomly pick between three strings (Rock, Paper Scissors)
    return result

    if Computer = Rock

}
*/