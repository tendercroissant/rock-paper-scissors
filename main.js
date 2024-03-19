const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");

// global variables
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

// utility functions
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

// write a function where both the player and computer chooses their move
function getReady(choice) {
  const moves = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random(3) * 3);

  playerChoice = choice;
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
function playGame(choice) {
  // prep the players
  getReady(choice);
  // compare moves and assign points
  console.log(
    `Player selected ${playerChoice}. Computer selected ${computerChoice}.`
  );
  pointAssignment(showdown(playerChoice, computerChoice));
  // returns one winner either the player or the computer
  console.log(
    `The player has a score of ${playerScore} and the computer has a score of ${computerScore}.`
  );
  console.log("==================================");
  if (computerScore === 5 || playerScore === 5) {
    console.log(`
      The final score is...\n
      Player Score: ${playerScore}\n
      Computer Score: ${computerScore}
    `);
    computerScore = 0;
    playerScore = 0;
  }
}

rockButton.addEventListener("click", () => {
  playGame("rock");
});

paperButton.addEventListener("click", () => {
  playGame("paper");
});

scissorButton.addEventListener("click", () => {
  playGame("scissor");
});
