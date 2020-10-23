const container = document.querySelector(".container");
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getGames() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const games = data.results;
    console.log(games);
    container.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      console.log(games[i].name);
      console.log(games[i].rating);
      console.log(games[i].tags.length);
      if (i === 8) {
        break;
      }
      container.innerHTML += `<div class="games">Game: ${games[i].name}, 
      Rating: ${games[i].rating}, 
      Number of Tags: ${games[i].tags.length}.</div>`;
    }
  } catch (error) {
    console.log(error);
    container.innerHTML = errorMessage("An error occurred");
  }
}

getGames();
