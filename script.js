let computer = document.getElementById("computer-choice");
let user = document.getElementById("user-choice");
let winner = document.getElementById("winner");

let computerS = document.getElementById("computer-score");
let playerS = document.getElementById("player-score");

let playerScore = 0;
let computerScore = 0;
computerS.innerHTML = computerScore;
playerS.innerHTML = playerScore;



let userChoice;

const choices = ["rock", "paper", "scissors"];

function test(userChoice) {
  const random = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[random];
  console.log(computerChoice)

  computer.innerHTML = computerChoice;
  user.innerHTML = userChoice;
  if (userChoice === computerChoice) {
    winner.innerHTML = "tie";
  }
    
  else if (userChoice === 'rock' && computerChoice === 'scissors') {
    winner.innerHTML = "You Won!";
    playerScore += 1;
    playerS.innerHTML = playerScore;
  }
    
  else if (userChoice === 'rock' && computerChoice === 'paper') {
    winner.innerHTML = "The Computer Won :(";
    computerScore += 1;
    computerS.innerHTML = computerScore;
  }
    
  else if (userChoice === 'scissors' && computerChoice === 'rock') {
    winner.innerHTML = "The Computer Won :(";
    computerScore += 1;
    computerS.innerHTML = computerScore;
  }

  else if (userChoice === 'scissors' && computerChoice === 'paper') {
    winner.innerHTML = "You Won!";
    playerScore += 1;
    playerS.innerHTML = playerScore;
  }

  else if (userChoice === 'paper' && computerChoice === 'scissors') {
    winner.innerHTML = "The Computer Won :(";
    computerScore += 1;
    computerS.innerHTML = computerScore;
  }

  else if (userChoice === 'paper' && computerChoice === 'rock') {
    winner.innerHTML = "You Won!";
    playerScore += 1;
    playerS.innerHTML = playerScore;
  }

}


document.getElementById('rock').onclick = () => {
  userChoice = "rock";
  test(userChoice);
};

document.getElementById('paper').onclick = () => {
  userChoice = "paper";
  test(userChoice);
};

document.getElementById('scissors').onclick = () => {
  userChoice = "scissors";
  test(userChoice);
};
