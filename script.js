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
    return "Jij wint!";
  } else {
    return "Computer wint!";
  }
}

function playGame(playerChoice) {
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

  while (ScrambleTime !== 0){
    setTimeout(() => {
      Scramble();
    }, 50);
    ScrambleTime = ScrambleTime - 1;
    console.log(ScrambleTime);
    document.getElementById("human").innerHTML = Scramble;
    document.getElementById("computer").innerHTML = Scramble;
  }

  const result = determineWinner(playerChoice, computerChoice);
  setTimeout(() => {
    document.getElementById("result").innerHTML = result;
    document.getElementById("human").innerHTML = playerChoice;
    document.getElementById("computer").innerHTML = computerChoice;
  }, 5000);

}