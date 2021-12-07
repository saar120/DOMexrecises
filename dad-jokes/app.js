const jokeTitleHolder = document.querySelector(".joke-title");
const jokeHolder = document.querySelector(".joke-holder");
const getJokeBtn = document.querySelector(".joke-btn");

const getJoke = () => {
  fetch("https://api.jokes.one/jod")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      jokeHolder.innerHTML = data.contents.jokes[0].joke.text;
      jokeTitleHolder.innerHTML = data.contents.jokes[0].joke.title;
    })
    .catch((error) => console.log("error"));
};

getJokeBtn.addEventListener("click", getJoke);
