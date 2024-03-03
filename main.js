// global variables
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

// utility functions
function cleanData(string) {
  let normalizedPlayerInput = string.toLowerCase();
  return normalizedPlayerInput;
}

function pointAssignment(result) {
  if (result === false) {
    computerScore++;
  } else if (result === true) {
    playerScore++;
  } else {
    computerScore += 0;
    playerScore += 0;
  }
}

function determineWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "The player wins the game!";
  } else if (computerScore > playerScore) {
    return "The computer wins the game!";
  } else {
    return "It's a draw.";
  }
}

// write a function where both the player and computer chooses their move
function getReady() {
  const moves = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random(3) * 3);

  playerChoice = cleanData(prompt());
  computerChoice = moves[randomNumber];
}

// write a function where it compares moves and assigns points
function showdown(playerChoice, computerChoice) {
  // check if both the playerChoice and computerChoice are the same and do not add any points
  if (playerChoice === computerChoice) {
    return null;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "rock")
  ) {
    return false;
  } else {
    return true;
  }
}

// play the actual game
function playGame() {
  let round = 1;
  // play through 5 rounds
  while (round <= 5) {
    console.log(`Round ${round}!`);
    // prep the players
    getReady();
    // compare moves and assign points
    console.log(
      `Player selected ${playerChoice}. Computer selected ${computerChoice}.`
    );
    pointAssignment(showdown(playerChoice, computerChoice));
    round += 1;
  }
  // returns one winner either the player or the computer
  console.log(
    `The player has a score of ${playerScore} and the computer has a score of ${computerScore}.`
  );
  console.log(determineWinner(playerScore, computerScore));
}

playGame();
