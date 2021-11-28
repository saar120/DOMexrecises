"use strict";

const userCells = document.querySelectorAll("input");
userCells.forEach((cell, cellIndex) => {
  cell.addEventListener("input", () => {
    nextValue(cellIndex);
    validate();
  });

  cell.addEventListener("paste", (event) => {
    let clipboard = event.clipboardData.getData("text").split("");
    paste(clipboard, cellIndex);
  });

  cell.addEventListener("keydown", (event) => {
    deleteKey(event, cellIndex);
  });
});

console.log(userCells[0].value);

function nextValue(cellIndex) {
  if (cellIndex === userCells.length - 1) {
    return;
  }
  if (userCells[cellIndex].value) {
    userCells[cellIndex + 1].focus();
  }
}

function paste(clipboard, currentCell) {
  let numbersToFill = userCells.length - currentCell;
  if (clipboard.length < numbersToFill) {
    numbersToFill = clipboard.length;
  }
  for (let i = 0; i < numbersToFill; i++) {
    userCells[currentCell].value = clipboard[i];
    currentCell++;
  }
}

function validate() {
  userCells.forEach((input) => {
    input.style.outline = null;
  });
  const password = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < password.length; i++) {
    if (+userCells[i].value !== password[i]) {
      return false;
    }
  }
  userCells.forEach((input) => {
    input.style.outline = "1px solid green";
  });
}

function deleteKey(e, cellIndex) {
  if (cellIndex !== 0 && e.keyCode === 8 && userCells[cellIndex].value == "") {
    userCells[cellIndex - 1].focus();
  }
}
