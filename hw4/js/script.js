"use strick";
const URL = "https://ajax.test-danit.com/api/swapi/films";
const root = document.querySelector("#root");
const listCards = document.createElement("ul");

function getFilms() {
  return fetch(URL).then((response) => {
    return response.json();
  });
}

getFilms().then((data) => {
  renderCards(data);
  console.log(data);
});

function renderCards(data) {
  data.forEach(({ episodeId, name, openingCrawl, characters }) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h2>${name}</h2>
    <h3>Episode:  ${episodeId}</h3>
    <p>${openingCrawl}</p>  
    <h3>Actors:</h3>  
    `;
    listCards.append(li);

    const charactersList = characters.map((character) => {
      return fetch(character).then((res) => res.json());
    });
    // console.log(charactersList);
    Promise.all(charactersList).then((response) => {
      response.forEach(({ name }) => {
        li.innerHTML += `${name}<br>`;
      });
    });
  });
  root.append(listCards);
}
