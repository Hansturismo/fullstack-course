const resultsContainer = document.querySelector(".results-container");
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
        // appends the rest of the p to song as inner divs, to act as columns
        const title = document.createElement("p");
        title.textContent = array[i].title;
        const artist = document.createElement("p");
        artist.textContent = array[i].artist;
        const genre = document.createElement("p");
        genre.textContent = array[i].genre;
        const duration = document.createElement("p");
        const formattedDuration = numberToMinutesSeconds(array[i].duration);
        duration.textContent = formattedDuration;
        song.append(title, artist, genre, formattedDuration);
        song.classList.add("track");
        resultsContainer.append(song);
    }
}
function showNoResults() {
    clearRenderer();
    const noResultsElement = document.createElement("p");
    noResultsElement.classList.add("no-results");
    noResultsElement.textContent = "No results with that information or search was empty";
    resultsContainer.append(noResultsElement);
    return;
}

function clearRenderer() {
    const noResults = document.querySelector(".no-results");
    const renderedResults = document.querySelectorAll(".track");
    if (noResults) {
        console.log("Removing noResults message");
        noResults.remove();
    }
    if (!renderedResults.length == 0) {
        console.log(renderedResults);
        console.log("Removing rendered results");
        renderedResults.forEach((item) => {
            item.remove();
        });
    }
}
