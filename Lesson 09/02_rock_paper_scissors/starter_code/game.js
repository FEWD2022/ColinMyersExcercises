// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
  let computerChoiceInt = Math.ceil(Math.random() * 3);

  if (computerChoiceInt == 1) {
    return "rock";
  } else if (computerChoiceInt == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

computerChoice();
console.log(computerChoice());

/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.*/

let winner = "";

function compare(me, opponent) {
  if (me == opponent) {
    winner = "tie";
  } else if (me == "rock" && opponent == "paper") {
    // computer wins
    winner = "computer";
  } else if (me == "rock" && opponent == "scissors") {
    // I win
    winner = "me";
  } else if (me == "paper" && opponent == "rock") {
    //I win
    winner = "me";
  } else if (me == "paper" && opponent == "scissors") {
    //computer wins
    winner = "computer";
  } else if (me == "scissors" && opponent == "rock") {
    //computer wins
    winner = "computer";
  } else if (me == "scissors" && opponent == "paper") {
    //I win
    winner = "me";
  }
}

document.querySelector("#computerSelection").innerText = computerChoice();

if (winner == "me") {
  document.querySelector("#computerSelection").innerText = "You win!";
} else if (winner == "computer") {
  document.querySelector("#computerSelection").innerText = "You win!";
} else {
  document.querySelector("#computerSelection").innerText =
    "It's a tie, play again!";
}

document.querySelector("#rock").addEventListener("click", function (e) {
  e.preventDefault();
  let me = "rock";
  let computer = computerChoice();

  compare(me, computerChoice());
});

document.querySelector("#paper").addEventListener("click", function (e) {
  e.preventDefault();
  let me = "rock";
  let computer = computerChoice();

  compare(me, computerChoice());
});

document.querySelector("#scissors").addEventListener("click", function (e) {
  e.preventDefault();
  let me = "rock";
  let computer = computerChoice();

  compare(me, computerChoice());
});

// Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
