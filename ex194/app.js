const head = document.createElement("h2");
head.textContent = "How many smiley's you want to see?";
document.body.appendChild(head);
const mainDiv = document.createElement("div");
let numInput = document.createElement("input");
numInput.setAttribute("id", "smiley-input");
numInput.setAttribute("type", "number");
mainDiv.appendChild(numInput);
let smileyBtn = document.createElement("input");
smileyBtn.setAttribute("id", "smiley-button");
smileyBtn.setAttribute("type", "submit");
smileyBtn.value = "Show me the Smiley's";
mainDiv.appendChild(smileyBtn);
document.body.appendChild(mainDiv);
const smileyContainer = document.createElement("div");
smileyContainer.className = "smileys";
document.body.appendChild(smileyContainer);

let smileyButton = document.querySelector("#smiley-button");
const printSmiley = () => {
  let smileyCount = document.querySelector("#smiley-input").value;
  const emoji = document.querySelector(".smileys");
  emoji.innerHTML = "";
  if (smileyCount === NaN || smileyCount < 0 || smileyCount > 100) {
    let error = document.createElement("span");
    error.textContent = "Sorry wrong input";
    emoji.appendChild(error);
  } else {
    for (let i = 0; i < smileyCount; i++) {
      let newSmile = document.createElement("span");
      newSmile.textContent = "🤠";
      emoji.appendChild(newSmile);
    }
  }
};
smileyButton.addEventListener("click", printSmiley);

// <h2>How many Smiley's do you want to see?</h2>
// <div>
//   <input type="number" id="smiley-input" />
//   <input id="smiley-button" type="submit" value="Show me the Smiley's" />
// </div>
// <div class="smileys"></div>
