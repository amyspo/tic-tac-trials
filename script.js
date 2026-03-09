const gameBoard = document.querySelector(".game-board");

let clickNumber = 0;

let bluePlayerArray = [];
let redPlayerArray = [];

gameBoard.addEventListener("click", function (event) {
  if (event.target.innerText === "") {
    event.target.innerText = assignSymbol();
    clickNumber++;
    changeColors(event);
    getButtonNum(event);
    detectBugs();
    checkWin();
  }
});

function assignSymbol() {
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
  bluePlayerArray = [];
  redPlayerArray = [];
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  if (bluePlayerArray.length < 3) {
    //wait
  } else {
    for (let i = 0; i <= 7; i++) {
      if (
        bluePlayerArray.includes(winningCombos[i][0]) &&
        bluePlayerArray.includes(winningCombos[i][1]) &&
        bluePlayerArray.includes(winningCombos[i][2])
      ) {
        alert("blue won");
      }
      if (
        redPlayerArray.includes(winningCombos[i][0]) &&
        redPlayerArray.includes(winningCombos[i][1]) &&
        redPlayerArray.includes(winningCombos[i][2])
      ) {
        alert("red won");
      }
    }
  }
}

function getButtonNum(num) {
  if (clickNumber % 2 === 0) {
    redPlayerArray.push(parseInt(num.target.classList[0]));
  } else {
    bluePlayerArray.push(parseInt(num.target.classList[0]));
  }
}

function detectBugs() {
  console
    .log
    // "click number:",
    // clickNumber,
    // "blue player:",
    // bluePlayerArray,
    // "red player:",
    // redPlayerArray,
    ();
}
