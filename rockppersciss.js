
function computerSelect(){
const computerSelection = ["rock", "paper", "scissors"]
return computerSelected = (computerSelection[Math.floor(Math.random()*computerSelection.length)]);}
function playerSelect(){
let playerSelected
console.log (playerSelected = document.getElementById("playerSelection").value);
}







function game(computerSelected, playerSelected) {
  let playerscore = 0
  let computerscore = 0
  for (let i = 0; i < 5; i++)
    if (computerSelected==playerSelected){
      console.log("DRAW!");
    }
    else if ((playerSelected == 'rock' && computerSelection == 'scissors') ||
    (playerSelected == 'scissors' && computerSelection == 'paper') ||
    (playerSelected == 'paper' && computerSelection == 'rock')){
      console.log("You Win!");
      playerscore +=1;
    }
    else ((playerSelected == 'scissors' && computerSelection == 'rock') ||
    (playerSelected == 'paper' && computerSelection == 'scissors') ||
    (playerSelected == 'rock' && computerSelection == 'paper'));{
      console.log("You Lose!");
      computerscore +=1;
    }
   

}

