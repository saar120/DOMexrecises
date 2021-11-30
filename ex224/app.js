let gameOn = true;
const winBanner = document.querySelector(".win");
const playAgain = document.querySelector("button");

window.addEventListener("keyup", (e) => {
  if (gameOn) {
    if (e.code === "ArrowUp") {
      const red = document.querySelector("#player1-race .active");
      if (red.nextElementSibling.classList.contains("finish")) {
        move(red);
        win(red);
        gameOn = false;
        win();
        return;
      }
      move(red);
    } else if (e.code === "KeyW") {
      const yellow = document.querySelector("#player2-race .active");
      if (yellow.nextElementSibling.classList.contains("finish")) {
        move(yellow);
        win(yellow);
        gameOn = false;
        return;
      }
      move(yellow);
    }
  }
});

const move = (car) => {
  car.classList.remove("active");
  car.nextElementSibling.classList.toggle("active");
};

const win = (car) => {
  console.log(car);
  if (car.parentElement.id === "player1-race") {
    winBanner.firstChild.textContent = "Red car won!";
    winBanner.style.backgroundColor = "#FC1015";
    winBanner.classList.toggle("hide");
    return;
  }
  winBanner.firstChild.textContent = "Yellow car won!";
  winBanner.style.backgroundColor = "#FFC55B";
  winBanner.classList.toggle("hide");
};

playAgain.addEventListener("click", () => {
  location.reload();
});
