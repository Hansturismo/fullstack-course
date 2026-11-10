const listSongs = document.querySelector(".grid-container");

// Populates the grid-container with songs from passed array
function populateListWithSongs(songList) {
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

        // return duration;
    }
    for (let i = 0; i < songList.length; i++) {
        // creates a "main" div to act as rows
        const song = document.createElement("div");
        // appends the rest of the divs to song as inner divs, to act as columns
        const title = document.createElement("div");
        title.textContent = songList[i].title;
        const artist = document.createElement("div");
        artist.textContent = songList[i].artist;
        const genre = document.createElement("div");
        genre.textContent = songList[i].genre;
        const duration = document.createElement("div");
        const formattedDuration = numberToMinutesSeconds(songList[i].duration);
        duration.textContent = formattedDuration;
        song.append(title, artist, genre, formattedDuration);
        song.classList.add("track");
        listSongs.append(song);
    }
}

populateListWithSongs(songs);
