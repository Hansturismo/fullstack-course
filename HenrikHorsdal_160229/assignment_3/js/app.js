const searchInputDesktop = document.querySelector("#searchInputDesktop");
const searchInputMobile = document.querySelector("#searchInputMobile");




// Sorting buttons
const sortByTitle = document.querySelector("#sortByTitle");
const sortByArtist = document.querySelector("#sortByArtist");
const sortByGenre = document.querySelector("#sortByGenre");

// Search input on desktop
searchInputDesktop.addEventListener("input", search);
// Create playlist on desktop
createPlaylistButtonDesktop.addEventListener("click", createPlaylist);

// Mobile buttons
const playlistsMobileButton = document.querySelector("#openPlaylistsButton");
const searchPromptButton = document.querySelector("#openSearchPromptButton");
// Opens the searchbar on mobile
searchPromptButton.addEventListener("click", showSearchbarMobile);
searchInputMobile.addEventListener("input", searchMobile);
// Opens the playlists on mobile
const playlistsMobile = document.querySelector("#playlistsMobile");
playlistsMobileButton.addEventListener("click", showPlaylistsMobile);
// Create playlist on mobile


// Sorting on desktop
// sortByTitle.addEventListener("click", sortResultsByTitle);
// sortByArtist.addEventListener("click", sortResultsByArtist);
// sortByGenre.addEventListener("click", sortResultsByGenre);

renderSearchResults(songs);

renderPlaylists(playlistArray);
