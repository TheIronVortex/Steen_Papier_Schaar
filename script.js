var FunMode = document.getElementById("Fun");
var colors = ["lightred", "orange", "yellow", "green", "violet", "pink", "cyan", "teal", "gold"];
var i = 1;
var playerScore = 0;
var computerScore = 0;

window.setInterval(function(){
  if (FunMode.checked == true) {
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i === colors.length){
      i=0;
    }
  }
  else {
    document.body.style.backgroundColor = "white";
  }
},150);

function ComputerChoice() {
  const choices = ["Steen", "Papier", "Schaar"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function Scramble(){
  const ScrambleOptions = ["Steen","Papier","Schaar"];
  const RandomScramble = Math.floor(Math.random() * ScrambleOptions.length);
  return ScrambleOptions[RandomScramble];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Gelijk Spel!";
  } else if (
    (playerChoice === "Steen" && computerChoice === "Schaar") ||
    (playerChoice === "Papier" && computerChoice === "Steen") ||
    (playerChoice === "Schaar" && computerChoice === "Papier")
  ) {
    playerScore++ ;
    return "Jij wint!";
    
  } else {
    computerScore++ ;
    return "Computer wint!";
  }
}

function reset() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("human").innerHTML = "";
  document.getElementById("computer").innerHTML = "";
}

function playGame(playerChoice) {
  reset();
  var difficulty = document.getElementById("Diff");
  var computerChoice;

  if (difficulty.checked === true){
    if (playerChoice === "Steen") {
      computerChoice = "Papier"
    } else if (playerChoice === "Papier") {
      computerChoice = "Schaar"
    } else {
      computerChoice = "Steen"
    } 
  } else { 
    computerChoice = ComputerChoice();  
  }

  const result = determineWinner(playerChoice, computerChoice);
  setTimeout(() => {
    document.getElementById("result").innerHTML = result;
    document.getElementById("human").innerHTML = "<img style='height:200px;width:170px;' src=" + playerChoice + ".png>" + playerChoice;
    document.getElementById("computer").innerHTML = "<img style='height:200px;width:170px;' src=" + computerChoice + ".png>" + computerChoice;
    document.getElementById("SpelerScore").innerHTML = playerScore;
    document.getElementById("PCScore").innerHTML = computerScore;
  }, 100);

}

function ResetAll(){
  playerScore= 0;
  computerScore= 0;
  document.getElementById("SpelerScore").innerHTML = playerScore;
  document.getElementById("PCScore").innerHTML = computerScore;  
  reset();
}