const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const sortByTitle = document.querySelector("#sortByTitle");
const sortByArtist = document.querySelector("#sortByArtist");
const sortByGenre = document.querySelector("#sortByGenre");

const searchPromptButton = document.querySelector("#searchPromptButton");

searchInput.addEventListener("keyup", search);
searchButton.addEventListener("click", search);
sortByGenre.addEventListener("click", sortResultsByGenre);
searchPromptButton.addEventListener("click", showSearchbarMobile);

renderSearchResults(songs);
