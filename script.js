function ComputerChoice() {
  const choices = ["Steen", "Papier", "Schaar"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
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
  const computerChoice = ComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  
  document.getElementById("result").innerHTML = result;
  document.getElementById("human").innerHTML = playerChoice;
  document.getElementById("computer").innerHTML = computerChoice;
}