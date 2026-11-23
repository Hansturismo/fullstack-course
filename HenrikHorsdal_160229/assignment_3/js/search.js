// Initialize timer for debouncing search
let timer;
const searchDelay = 300;
function search(e) {
    if (e.type === "input") {
        console.log(`Delaying search by ${searchDelay}`);
        clearTimeout(timer);
        timer = setTimeout(function () {
            console.log(`Cleared timer with ID: ${timer}`);
            // console.log(searchInputDesktop.value);
            console.log(`Searching array with value: ${searchInputDesktop.value}`);
            // Stores the returned array after applying the searchTerm to filter(), which should be the matching results
            const searchResults = songs.filter(
                (song) =>
                    song.title.toLowerCase().includes(searchInputDesktop.value.toLowerCase()) ||
                    song.artist.toLowerCase().includes(searchInputDesktop.value.toLowerCase()) ||
                    song.genre.toLowerCase().includes(searchInputDesktop.value.toLowerCase()),
            );
            // If an array that is not empty is returned, it is rendered in the content area
            if (searchResults.length > 0) {
                // console.log(searchResults);
                renderSearchResults(searchResults);
                return;
            } else {
                showNoResults();
                return;
            }
        }, searchDelay);
    }
}

function searchMobile(e) {
    if (e.type === "input") {
        console.log(`Delaying search by ${searchDelay}`);
        clearTimeout(timer);
        timer = setTimeout(function () {
            console.log(`Cleared timer with ID: ${timer}`);
            console.log(`Searching array with value: ${searchInputMobile.value}`);
            // Stores the returned array after applying the searchTerm to filter(), which should be the matching results
            const searchResultsMobile = songs.filter(
                (song) =>
                    song.title.toLowerCase().includes(searchInputMobile.value.toLowerCase()) ||
                    song.artist.toLowerCase().includes(searchInputMobile.value.toLowerCase()) ||
                    song.genre.toLowerCase().includes(searchInputMobile.value.toLowerCase()),
            );
            // If a populated array is returned, it is rendered in the content area
            if (searchResultsMobile.length > 0) {
                // console.log(searchResults);
                renderSearchResults(searchResultsMobile);
                return;
            } else {
                showNoResults();
                return;
            }
        }, searchDelay);
    }
}



