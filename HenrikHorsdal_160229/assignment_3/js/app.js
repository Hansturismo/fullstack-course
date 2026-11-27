const searchInputDesktop = document.querySelector("#searchInputDesktop");
const searchInputMobile = document.querySelector("#searchInputMobile");

// Sorting buttons
const sortByTitleButton = document.querySelector("#sortByTitle");
const sortByArtistButton = document.querySelector("#sortByArtist");
const sortByGenreButton = document.querySelector("#sortByGenre");

// Search input on desktop
searchInputDesktop.addEventListener("input", search);

// Mobile buttons
const playlistsMobileButton = document.querySelector("#openPlaylistsButton");
const searchPromptButtonMobile = document.querySelector("#openSearchPromptButton");
// Opens the searchbar on mobile
searchPromptButtonMobile.addEventListener("click", showSearchbarMobile);
searchInputMobile.addEventListener("input", searchMobile);
// Opens the playlists on mobile
const playlistsMobile = document.querySelector("#playlistsMobile");
playlistsMobileButton.addEventListener("click", showPlaylistsMobile);
// Create playlist on mobile

// Sorting
sortByTitleButton.addEventListener("click", () => {
    sorting("title");
    // console.log(displayedResults);
})
sortByArtistButton.addEventListener("click", () => {

    sorting("artist")
    // console.log(displayedResults);
})
sortByGenreButton.addEventListener("click", () => {
    sorting("genre")
    // console.log(displayedResults);
})

renderSearchResults(songs);

renderPlaylists(playlistArray);
