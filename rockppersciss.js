var playerScore = 0
var computerScore = 0

document.getElementById("submitButton").onclick = function (computerSelected, playerSelected) {
  function computerSelect(){
    let computerSelection = ["rock", "paper", "scissors"]
    return computerSelected = computerSelection[Math.floor(Math.random()*computerSelection.length)];
    }
  computerSelect ();
  function playerSelect(){
    return playerSelected = (document.getElementById("playerSelection").value);
    }
  playerSelect ();

  if (computerSelected==playerSelected){
    console.log("DRAW!");
  }

  else if ((playerSelected == 'rock' && computerSelected == 'scissors') ||
  (playerSelected == 'scissors' && computerSelected == 'paper') ||
  (playerSelected == 'paper' && computerSelected == 'rock')){
    console.log("You Win!")
    playerScore++;
    console.log(computerScore);
    console.log(playerScore);
  }

  else if ((playerSelected == 'scissors' && computerSelected == 'rock') ||
  (playerSelected == 'paper' && computerSelected == 'scissors') ||
  (playerSelected == 'rock' && computerSelected == 'paper')){
    console.log("You Lose!")
    computerScore++
    console.log(computerScore);
    console.log(playerScore);
  }

  else (console.log("That's not an answer!!"));


  if (computerScore==5){
    console.log("Computer Wins!!!")
    computerScore = 0;
    playerScore = 0;
  }
  else if (playerScore==5){
    console.log("Player Wins!!!")
    computerScore = 0;
    playerScore = 0;
  }
}




