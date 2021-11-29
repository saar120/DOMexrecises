"use strict";

// selectors

const textArea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

// event listeners

submitBtn.addEventListener("click", canBeSubmited);

// functions

function canBeSubmited() {
  if (document.body.querySelector("h2") == null) {
    // if h2 has not been created yet - create it and then manipulate it - otherwise just manipulate it.
    const ok = document.createElement("h2");
    document.body.append(ok);
  }
  if (textArea.value.length >= 100) {
    document.querySelector("h2").textContent = "Your form has been submitted";
    return;
  }
  document.querySelector("h2").textContent = "Your form is shorter than 100 characters";
}
