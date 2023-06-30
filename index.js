
//hide the start button and show the game container
document.getElementById("start-btn").addEventListener("click", function () {
    document.getElementById("start-container").style.display = "none";
    setTimeout(function () {
        document.querySelector(".container").style.opacity = "1";
    }, 300)
});


//function to get computer choice
function getComputerChoice() {

    const choices = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

//function to play a round
function playRound(playerSelection, computerSelection) {

    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return 'Draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}}`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}


//global variables
let playerScore = 0;
let computerScore = 0;

// function to play the game
function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    console.log(result);

    if (result.startsWith('You win')) {
        playerScore++;
    } else if (result.startsWith('You lose')) {
        computerScore++;
    }

    // update the score
    document.querySelector('.human .image h3').textContent = "Score: " + playerScore;
    document.querySelector('.computer .image h3').textContent = "Score: " + computerScore;

    if (playerScore === 5 || computerScore === 5) {
        let winner = null;
        if (playerScore > computerScore) {
            winner = 'Player';
        } else if (playerScore < computerScore) {
            winner = 'Computer';
        } else {
            winner = 'Draw';
        }
        console.log(`The winner is ${winner}`);

        const resultText = document.getElementById('result-text');
        if (winner === 'Draw') {
            resultText.textContent = `It's a draw!`;
        } else {
            resultText.textContent = `${winner} wins!`;
        }

        if (winner === 'Player') {
            document.getElementById('win-sound').play();
        } else if (winner === 'Computer') {
            document.getElementById('lose-sound').play();
        }

        showResult();
    }
}

function showResult(){
    const gameContainer = document.querySelector('.container');
    const resultContainer = document.getElementById('result-container');
    gameContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

//add event listeners to the buttons
document.getElementById("rock").addEventListener("click", function () {
    playGame('rock');
});

document.getElementById("paper").addEventListener("click", function () {
    playGame('paper');
});

document.getElementById("scissors").addEventListener("click", function () {
    playGame('scissors');
});

document.getElementById('restart-btn').addEventListener('click', function () {
    location.reload();
});

