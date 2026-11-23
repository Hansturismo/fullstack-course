const resultsContainer = document.querySelector(".content__results-container");
function renderSearchResults(array) {
    clearRenderer();
    // takes the number from duration value and formats it into minutes and seconds
    function numberToMinutesSeconds(number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.round(number % 60);
        // When formatting the number, seconds less than 10 will end up as a single digit.
        // This just concatenates a 0 in front of the remaining second, so it looks.. good?
        if (seconds < 10) {
            return `${minutes}:${"0" + seconds}`;
        } else {
            return `${minutes}:${seconds}`;
        }
    }
    for (let i = 0; i < array.length; i++) {
        // creates a "main" div to act as rows
        const song = document.createElement("div");
        // create paragraph elements to hold the object details
        const title = document.createElement("p");
        title.classList.add("track__title");
        title.textContent = array[i].title;
        const artist = document.createElement("p");
        artist.classList.add("track__artist");
        artist.textContent = array[i].artist;
        const genre = document.createElement("p");
        genre.classList.add("track__genre");
        genre.textContent = array[i].genre;
        const duration = document.createElement("p");
        duration.classList.add("track__duration");
        duration.textContent = numberToMinutesSeconds(array[i].duration);
        // Append the details to the song(div) element
        song.append(title, artist, genre, duration);
        song.classList.add("track");
        // Appends the song(div) element to the resultsContainer element
        resultsContainer.append(song);
    }
}

// function sortResultsByGenre() {
//     console.log(`Sorted results by genre`);
// }

function showNoResults() {
    clearRenderer();
    const noResultsElement = document.createElement("p");
    noResultsElement.classList.add("content__no-results");
    noResultsElement.textContent = "No results";
    resultsContainer.append(noResultsElement);
    return;
}

function clearRenderer() {
    const noResults = document.querySelector(".content__no-results");
    const renderedResults = document.querySelectorAll(".track");
    if (noResults) {
        console.log("Removing noResults message");
        noResults.remove();
    }
    if (renderedResults.length > 0) {
        console.log(renderedResults);
        console.log("Rendering results in results-container");
        renderedResults.forEach((item) => {
            item.remove();
        });
    }
}

function showSearchbarMobile() {
    const searchPromptMenu = document.querySelector("#searchMenuMobile");
    document.addEventListener("pointerdown", (e) => {
        if (!searchPromptMenu.contains(e.target) && !searchPromptButton.contains(e.target)) {
            if (e.target == searchPromptButton) {
                return;
            } else {
                searchPromptMenu.classList.add("searchbar--hide");
            }
        } else {
            return;
        }
    });
    if (!playlistsMobile.classList.contains("playlists--hide")) {
        playlistsMobile.classList.toggle("playlists--hide");
        console.log(`Closing playlists and opening searchbar`);
        console.log(searchPromptMenu);
        // Toggles the class that hides the searchbar
        searchPromptMenu.classList.toggle("searchbar--hide");
    } else {
        console.log(`Opening searchbar`);
        console.log(searchPromptMenu);
        // Toggles the class that hides the searchbar
        searchPromptMenu.classList.toggle("searchbar--hide");
    }
}

function showPlaylistsMobile() {
    console.log(`Opening playlists`);
    playlistsMobile.classList.toggle("playlists--hide");
}
const playlistList = document.querySelectorAll(".playlists-list");
function renderPlaylists(array) {
    if (array.length == 0) {
        playlistList.forEach((playlistNode) => {
            const playlist = document.createElement("p");
            playlist.textContent = "No playlists to show";
            playlistNode.append(playlist);
        });
    } else {
        playlistList.forEach((playlistNode) => {
            for (let i = 0; i < array.length; i++) {
                const playlist = document.createElement("div");
                const title = document.createElement("h3");
                title.textContent = array[i].title;
                playlist.append(title);
                playlistNode.append(playlist)
            }
        });
    }
}
