"use strict";

// variables and consts

const formData = {};
const form = document.querySelector("form.main");
const inputs = document.querySelectorAll("input");
const comfirmSubmit = document.querySelector(".comfrim-btn");
// event listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  generateData();
  console.log(formData);
});

// functions

// const submitted = (e) => {
//   for (let input of inputs) {
//     formData[input.name] = e.target[input.name].value;
//   }
// };

const generateData = () => {
  let text;
  for (let input of inputs) {
    formData[input.name] = input.value;
  }
  let announce = "";
  for (let key of Object.keys(formData)) {
    announce += key + ": " + formData[key] + "\n";
  }
  if (confirm(announce)) {
    text = "succsesful send";
    disableInput();
  } else {
    text = "nothing";
  }
  document.querySelector(".confirm").innerHTML = text;
};

const disableInput = () => {
  for (let input of inputs) {
    input.disabled = true;
  }
};
