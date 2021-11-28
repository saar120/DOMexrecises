"use strict";

console.log("hello");

const userInputField = document.querySelectorAll("input");
userInputField.forEach((input, index) => {
  input.addEventListener("paste", (event) => {
    let clipboard = event.clipboardData.getData("text").split("");
    paste(clipboard, index);
  });
  input.addEventListener("input", () => {
    nextValue(index);
    validate();
  });
});

console.log(userInputField[0].value);

function nextValue(index) {
  let maxLength = userInputField[index].getAttribute("maxlength");
  let inputLen = userInputField[index].value.length;
  if (index === userInputField.length - 1) {
    return;
  } else {
    let next = userInputField[index].nextElementSibling;
    if (+inputLen === +maxLength) {
      next.focus();
    }
  }
}

function paste(clipboard, currentCell) {
  const numbersToFill = clipboard.length - currentCell - 1;
  for (let i = 0; i <= numbersToFill; i++) {
    userInputField[currentCell].value = clipboard[i];
    currentCell++;
  }
}

function validate() {
  userInputField.forEach((input) => {
    input.style.outline = null;
  });
  const password = [1, 2, 3, 4, 5, 6];
  if (
    +userInputField[0].value === password[0] &&
    +userInputField[1].value === password[1] &&
    +userInputField[2].value === password[2] &&
    +userInputField[3].value === password[3] &&
    +userInputField[4].value === password[4] &&
    +userInputField[5].value === password[5]
  ) {
    userInputField.forEach((input) => {
      input.style.outline = "1px solid green";
    });
  }
}
