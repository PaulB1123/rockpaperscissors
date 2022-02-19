"use strict";

let user_choice;
let computer_choice;

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelectorAll("#buttons button").forEach((elm) => {
    elm.addEventListener("click", getUserSelection);
  });
  document.querySelector("#player1").addEventListener("animationend", handAnimationEnded);
}

function getUserSelection() {
  reset();
  if (this.classList.contains("rock")) {
    console.log("click", "rock");
    user_choice = "rock";
  } else if (this.classList.contains("paper")) {
    console.log("click", "paper");
    user_choice = "paper";
  } else if (this.classList.contains("scissors")) {
    console.log("click", "scissors");
    user_choice = "scissors";
  }
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  const computer_choice_arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computer_choice = computer_choice_arr[randomNum];
  showAnimations();
}

function showAnimations() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
}

function handAnimationEnded() {
  console.log("Hands animation Ended");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  if (user_choice === "rock") {
    document.querySelector("#player1").classList.add("rock");
  } else if (user_choice === "paper") {
    document.querySelector("#player1").classList.add("paper");
  } else {
    document.querySelector("#player1").classList.add("scissors");
  }

  if (computer_choice === "rock") {
    document.querySelector("#player2").classList.add("rock");
  } else if (user_choice === "paper") {
    document.querySelector("#player2").classList.add("paper");
  } else {
    document.querySelector("#player2").classList.add("scissors");
  }
  determineWinner();
}

function determineWinner() {
  console.log("************");
  console.log("user_choice: ", user_choice);
  console.log("computer_choice: ", computer_choice);
  let winner;
  if (user_choice === "rock") {
    if (computer_choice === "rock") {
      console.log("Play again");
      winner = "none";
    } else if (computer_choice === "paper") {
      console.log("Computer wins");
      winner = "computer";
    } else {
      console.log("Player wins");
      winner = "user";
    }
  } else if (user_choice === "paper") {
    if (computer_choice === "rock") {
      console.log("Player wins");
      winner = "user";
    } else if (computer_choice === "paper") {
      console.log("Play again");
      winner = "none";
    } else {
      console.log("Computer wins");
      winner = "computer";
    }
  } else if (user_choice === "scissors") {
    if (computer_choice === "rock") {
      console.log("Computer wins");
      winner = "computer";
    } else if (computer_choice === "paper") {
      console.log("Player wins");
      winner = "user";
    } else {
      console.log("Play again");
      winner = "none";
    }
  }
  console.log("winner is: ", winner);
  if (winner === "user") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (winner === "computer") {
    document.querySelector("#lose").classList.remove("hidden");
  } else {
    document.querySelector("#draw").classList.remove("hidden");
  }
}

function reset() {
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.remove("scissors");

  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("scissors");

  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}
