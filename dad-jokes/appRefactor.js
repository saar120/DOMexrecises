const jokeTitleHolder = document.querySelector(".joke-title");
const jokeHolder = document.querySelector(".joke-holder");
const getJokeBtn = document.querySelector(".joke-btn");

const getJoke = async () => {
  try {
    const response = await fetch("https://api.jokes.one/jod");
    const data = await response.json();
    jokeHolder.innerHTML = data.contents.jokes[0].joke.text;
    jokeTitleHolder.innerHTML = data.contents.jokes[0].joke.title;
  } catch (e) {
    throw new Error("this is not good");
  }
};

getJokeBtn.addEventListener("click", getJoke);
