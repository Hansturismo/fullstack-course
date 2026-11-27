const resultsContainer = document.querySelector(".content__results-container");
const playlistView = document.querySelector(".playlist-view");
const playlistViewTitle = document.querySelector(".playlist-view__title h2");
const playlistViewTracksContainer = document.querySelector(".playlist-view__tracks");
const closePlaylistView = document.querySelector(".playlist-view__title button");
const playlistSelector = document.querySelector(".playlist-selector");
const playlistSelectorList = document.querySelector(".playlist-selector__list");
const closePlaylistSelector = document.querySelector(".playlist-selector__controls button");
let selectedSong;

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

function renderSearchResults(array) {
    clearRenderer();
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
        const addToPlaylist = document.createElement("button");
        addToPlaylist.classList.add("track__button--add-to-playlist");
        addToPlaylist.title = "Add to playlist...";
        addToPlaylist.textContent = " + ";
        addToPlaylist.addEventListener("click", () => {
            selectedSong = array[i];
            console.log("Selected song:", selectedSong.title);
            if (playlistSelector.classList.contains("playlist-selector--hide")) {
                playlistSelector.classList.remove("playlist-selector--hide");
                playlistSelector.inert = false;
            } else {
                playlistSelector.classList.add("playlist-selector--hide");
                playlistSelector.inert = true;
            }
            renderPlaylistSelector(playlistArray);
        });
        // Append the details to the song(div) element
        song.append(title, artist, genre, duration, addToPlaylist);
        song.classList.add("track");
        // Appends the song(div) element to the resultsContainer element
        resultsContainer.append(song);
    }
}

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
        console.log("Rendering results in results-container");
        renderedResults.forEach((item) => {
            item.remove();
        });
    }
    console.log(renderedResults);
}

function showSearchbarMobile() {
    const searchPromptMenu = document.querySelector("#searchMenuMobile");
    document.addEventListener("pointerdown", (e) => {
        if (!searchPromptMenu.contains(e.target) && !searchPromptButtonMobile.contains(e.target)) {
            if (e.target == searchPromptButtonMobile) {
                return;
            } else if (e.target == createPlaylistButtonMobile) {
            } else {
            }
        } else {
            return;
        }
    });
    if (!playlistsMobile.classList.contains("playlists--hide-mobile")) {
        if (!createPlaylistMobileView.classList.contains("playlists--hide-mobile")) {
            createPlaylistMobileView.classList.add("playlists--hide-mobile");
            createPlaylistMobileView.inert = true;
            console.log(`Hiding new playlist form. inert = ${createPlaylistMobileView.inert}`);
        }
        playlistsMobile.classList.add("playlists--hide-mobile");
        playlistsMobile.inert = true;
        // Toggles the class that hides the searchbar
        searchPromptMenu.classList.remove("searchbar--hide");
        searchPromptMenu.inert = false;
        console.log(`Closing playlists and opening searchbar `);
        console.log(searchPromptMenu.inert);
    } else {
        // Toggles the class that hides the searchbar
        searchPromptMenu.classList.toggle("searchbar--hide");
        searchPromptMenu.inert = !searchPromptMenu.inert;
        console.log(searchPromptMenu.inert);
        console.log(`Toggling searchbar. inert = ${searchPromptMenu.inert}`);
    }
}

function showPlaylistsMobile() {
    if (!playlistsMobile.classList.contains("playlists--hide-mobile")) {
        playlistsMobile.classList.add("playlists--hide-mobile");
        playlistsMobile.inert = true;
    } else {
        playlistsMobile.classList.remove("playlists--hide-mobile");
        playlistsMobile.inert = false;
        console.log(`Toggling playlists view inert = ${playlistsMobile.inert}`);
    }
}

const playlistContainer = document.querySelectorAll(".playlists__list");

function renderPlaylists(array) {
    clearPlaylists();
    if (array.length == 0) {
        playlistContainer.forEach((playlistNode) => {
            playlistNode.append(showNoPlaylistsMessage());
        });
    } else {
        const noPlaylists = document.querySelector(".playlists__no-results");
        if (noPlaylists) {
            noPlaylists.remove();
        }
        playlistContainer.forEach((playlistNode) => {
            for (let i = 0; i < array.length; i++) {
                const playlist = document.createElement("div");
                playlist.classList.add("playlists__item");
                const title = document.createElement("button");
                title.textContent = array[i].title;
                title.type = "button";
                title.addEventListener("click", () => {
                    console.log(array[i]);
                    showSelectedPlaylist(array[i]);
                });
                playlist.append(title);
                playlistNode.append(playlist);
            }
        });
    }
}

function showNoPlaylistsMessage() {
    const noPlaylists = document.createElement("p");
    noPlaylists.classList.add("playlists__no-results");
    noPlaylists.textContent = "No playlists have been created";
    return noPlaylists;
}

function clearPlaylists() {
    const playlistItem = document.querySelectorAll(".playlists__item");
    const noPlaylistsMsg = document.querySelectorAll(".playlists__no-results");
    playlistItem.forEach((item) => {
        item.remove();
    });
    noPlaylistsMsg.forEach((item) => {
        item.remove();
    });
}

function showSelectedPlaylist(playlist) {
    playlistView.classList.remove("playlist-view--hide");
    playlistView.inert = false;
    playlistViewTitle.textContent = playlist.title;
    // reset tracklist
    playlistViewTracksContainer.innerHTML = "";
    const playlistSongs = playlist.savedSongs
        .map((songId) => {
            return songs.find((song) => song.id === songId);
        })
        .filter((song) => song !== undefined);

    for (let i = 0; i < playlistSongs.length; i++) {
        const currentSong = playlistSongs[i];
        // more or less copy pasted the results rendering logic with some changes
        const song = document.createElement("div");
        song.classList.add("track");
        const title = document.createElement("p");
        title.classList.add("track__title");
        title.textContent = currentSong.title;
        const artist = document.createElement("p");
        artist.classList.add("track__artist");
        artist.textContent = currentSong.artist;
        const genre = document.createElement("p");
        genre.classList.add("track__genre");
        genre.textContent = currentSong.genre;
        const duration = document.createElement("p");
        duration.classList.add("track__duration");
        duration.textContent = numberToMinutesSeconds(currentSong.duration);

        const removeFromPlaylist = document.createElement("button");
        removeFromPlaylist.classList.add("track__button--remove-from-playlist");
        removeFromPlaylist.title = "Remove from playlist";
        removeFromPlaylist.textContent = "-";

        removeFromPlaylist.addEventListener("click", () => {
            // This create a new savedSongs array containing every ID
            // except the song ID of the clicked button
            playlist.savedSongs = playlist.savedSongs.filter((songId) => {
                return songId !== currentSong.id;
            });
            // save it again
            localStorage.setItem("createdPlaylists", JSON.stringify(playlistArray));

            // rerender the currently opened playlist
            showSelectedPlaylist(playlist);
        });

        song.append(title, artist, genre, duration, removeFromPlaylist);

        playlistViewTracksContainer.append(song);
    }
}
// Close the displayed playlist
closePlaylistView.addEventListener("click", () => {
    playlistView.classList.add("playlist-view--hide");
    playlistView.inert = true;
});

// Close the view that appear when adding a song to a playlist
closePlaylistSelector.addEventListener("click", () => {
    playlistSelector.classList.add("playlist-selector--hide");
});

function renderPlaylistSelector(array) {
    // Hard clearing to avoid render duplication
    playlistSelectorList.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        const playlist = document.createElement("div");
        playlist.classList.add("playlist-selector__item");
        // Creates buttons which are rendered in the playlists list
        const title = document.createElement("button");
        title.textContent = array[i].title;
        title.type = "button";

        title.addEventListener("click", () => {
            console.log("Selected playlist:", array[i]);
            if (!selectedSong) {
                return;
            }
            if (!array[i].savedSongs.includes(selectedSong.id)) {
                array[i].savedSongs.push(selectedSong.id);
                // saves the song object to the playlist object
                localStorage.setItem("createdPlaylists", JSON.stringify(playlistArray));
            }
            console.log(array[i]);
            playlistSelector.classList.add("playlist-selector--hide");
            playlistSelector.inert = true;
        });
        playlist.append(title);
        playlistSelectorList.append(playlist);
    }
}
