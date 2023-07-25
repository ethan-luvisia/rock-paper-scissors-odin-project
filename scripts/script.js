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
        return playerResult = "Rock";
    });


let runGame = document.getElementById("run-game");
runGame.addEventListener("click" , function compareChoice () {
    if (computerResult === "Rock") {
        if (playerResult === "Scissors")
            alert("You Lose!");
        else if (playerResult === "Paper")
            alert("You Win!");
        else if (playerResult === "Paper")
            alert("You Tied!");
    }
    else if (computerResult === "Paper") {
        if (playerResult === "Rock")
            alert("You Lose!");
        else if (playerResult === "Scissors")
            alert("You Win");
        else if (playerResult === "Paper")
            alert("You Tied!");
    }
    else if (computerResult === "Scissors") {
        if (playerResult === "Paper")
            alert("You Lose!");
        else if (playerResult === "Rock")
            alert("You Win!");
        else if (playerResult === "Scissors")
            alert("You Tied!");
    }

});

compareChoice();

/*
Rock Paper Scissors Pseudocode

prompt("Rock Paper Scissors! Make your choice.","")

getComputerChoice() {
    randomly pick between three strings (Rock, Paper Scissors)
    return result

    if Computer = Rock

}
*/