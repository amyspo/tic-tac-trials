const gameBoard = document.querySelector(".game-board");

let clickNumber = 0;

gameBoard.addEventListener("click", function (event) {
  event.target.innerText = getSymbol();
  clickNumber++;
  changeColors(event);
});

function getSymbol() {
  if (clickNumber % 2 === 0) {
    return "O";
  }
  return "X";
}

function changeColors(button) {
  if (clickNumber % 2 === 0) {
    button.target.classList.add("red-player");
  } else if (clickNumber % 2 !== 0) {
    button.target.classList.add("blue-player");
  }
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);

function reset() {
  const allButtons = document.querySelectorAll(".field");
  allButtons.forEach((child) => {
    if (child.classList.contains("red-player")) {
      child.classList.remove("red-player");
      child.innerText = "";
    } else if (child.classList.contains("blue-player")) {
      child.classList.remove("blue-player");
      child.innerText = "";
    }
  });
  clickNumber = 0;
}

function checkWin() {
  //TODO win or draw condition
  //TODO alert? changing colors?
}
