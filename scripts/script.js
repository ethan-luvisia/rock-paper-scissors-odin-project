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

function getPlayerChoice() {
    prompt("What is your choice (Rock, Paper, Scissors)?", )

}

getComputerChoice() = computerResult
getPlayerChoice() = playerResult

function compareChoice () {
    if (computerResult === "Rock");
        if (playerResult === "Scissors")
            alert("You Lose!");
        else if (playerResult === "Paper")
            alert("You Win!");
        else (playerResult === "Paper")
            alert("You Tied!")
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