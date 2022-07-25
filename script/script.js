alert("Welcome to rock paper scissors");


let playerScore = 0;
let computerScore = 0;
let tie = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function game() {
    let computerSelection = getComputerChoice();
    let userChoice = prompt("Choose an option between rock, paper or scissors: ");
    let userLowerCase = userChoice.toLowerCase();     

    if (userLowerCase === computerSelection) {
        result = "Tie!";
        alert(result = "Tie!");
    }
    else if (userLowerCase === 'rock' && computerSelection === 'paper') {
        result = "Computer Wins!";
        alert(result = 'Computer Wins!');
    }
    else if (userLowerCase === 'rock' && computerSelection === 'scissors') {
        result = "Player Wins!";
        alert(result = 'Player Wins!');
    }
    else if (userLowerCase === 'scissors' && computerSelection === 'rock') {
        result = "Computer Wins!";
        alert(result = 'Computer Wins!');
    }
    else if (userLowerCase === 'scissors' && computerSelection === 'paper') {
        result = "Player Wins!";
        alert(result = 'Player Wins!');
    }
    else if (userLowerCase=== 'paper' && computerSelection === 'rock') {
        result = "Player Wins!";
        alert(result = 'Player Wins!');
    }
    else if (userLowerCase === 'paper' && computerSelection === 'scissors') {
        result = "Computer Wins!";
        alert(result = 'Computer Wins!');
    }
    

    if(result === 'Player Wins!') {
        playerScore = playerScore + 1;
        alert("Your score: " + playerScore + " Computer Score: " + computerScore + " Tie: " + tie);
    }
    else if (result === 'Computer Wins!') {
        computerScore = computerScore + 1;
        alert("Your score: " + playerScore + " Computer Score: " + computerScore + " Tie: " + tie);
    }
    else {
        tie = tie + 1;
        alert("Your score: " + playerScore + " Computer Score: " + computerScore + "Tie: " + tie);
    }
}


for (let i=0; i<5; i++) {
    game();
}
