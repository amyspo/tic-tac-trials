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
  const horizontalWin1 = [0, 1, 2];
  const horizontalWin2 = [3, 4, 5];
  const horizontalWin3 = [6, 7, 8];

  if (bluePlayerArray.length >= 3) {
    bluePlayerArray.sort();
    redPlayerArray.sort();
    let firstRowCounter = 0;

    for (let i = 0; i <= 2; i++) {
      if (
        bluePlayerArray[i] === horizontalWin1[i] ||
        redPlayerArray[i] === horizontalWin1[i]
      ) {
        firstRowCounter++;
      }
    }
    if (firstRowCounter === 3) {
      alert("someone won!");
    }
  }

  if (bluePlayerArray.length >= 3) {
    bluePlayerArray.sort();
    redPlayerArray.sort();
    let secondRowCounter = 0;
    console.log("second if");

    for (let i = 0; i <= 2; i++) {
      if (
        bluePlayerArray[i] === horizontalWin2[i] ||
        redPlayerArray[i] === horizontalWin2[i]
      ) {
        secondRowCounter++;
        console.log(secondRowCounter);
      }
    }
    if (secondRowCounter === 3) {
      alert("someone won!");
    }
  }

  if (bluePlayerArray.length >= 3) {
    bluePlayerArray.sort();
    redPlayerArray.sort();
    let thirdRowCounter = 0;
    console.log("third if");
    console.log(redPlayerArray, bluePlayerArray);

    if (redPlayerArray.length > 3) {
      redPlayerArray.slice(1);
    }

    if (bluePlayerArray.length > 3) {
      bluePlayerArray.slice(1);
    }

    for (let i = 0; i <= 2; i++) {
      if (
        bluePlayerArray[i] === horizontalWin3[i] ||
        redPlayerArray[i] === horizontalWin3[i]
      ) {
        thirdRowCounter++;
        console.log(thirdRowCounter);
      }
    }
    if (thirdRowCounter === 3) {
      alert("someone won!");
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
