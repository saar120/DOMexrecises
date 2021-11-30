"use strict";

// selectors

let text = document.querySelector("p");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");

// event listeners

plusBtn.addEventListener("click", incFontSize);
minusBtn.addEventListener("click", decFontSize);

// functions

function incFontSize() {
  let currentFontSize = parseInt(getComputedStyle(text).fontSize);
  if (currentFontSize + 10 > 100) {
    text.style.fontSize = `100px`;
    return;
  }
  text.style.fontSize = `${currentFontSize + 10}px`;
}
function decFontSize() {
  let currentFontSize = window.getComputedStyle(text, null).getPropertyValue("font-size");
  currentFontSize = parseInt(currentFontSize);
  if (currentFontSize - 10 < 6) {
    text.style.fontSize = `6px`;
    return;
  }
  text.style.fontSize = `${currentFontSize - 10}px`;
}
