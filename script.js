const choices = ["rock", "paper", "scissors"];

const emojiMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

// Get references to HTML elements
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const drawCountSpan = document.getElementById("draw-count");
const resultDiv = document.getElementById("result");
const computerChoiceSpan = document.getElementById("computer-choice");
const buttons = document.querySelectorAll(".choice");

// Initialize scores
let userScore = 0;
let computerScore = 0;
let drawCount = 0;

// Function to get computer's random choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play one round
function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  // Show computer's choice with emoji
  computerChoiceSpan.textContent = `${emojiMap[computerChoice]} ${computerChoice}`;

  if (userChoice === computerChoice) {
    drawCount++;
    drawCountSpan.textContent = drawCount;
    resultDiv.textContent = `It's a draw! You both chose ${userChoice}.`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultDiv.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
  }
}

// Attach click event listeners to buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    playRound(userChoice);
  });
});
