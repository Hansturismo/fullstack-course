// Initialize shallow array to use for filtering and sorting
let displayedResults = [...songs];
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
            displayedResults = songs.filter(
                (song) =>
                    song.title.toLowerCase().includes(searchInputDesktop.value.toLowerCase()) ||
                    song.artist.toLowerCase().includes(searchInputDesktop.value.toLowerCase()) ||
                    song.genre.toLowerCase().includes(searchInputDesktop.value.toLowerCase()),
            );
            // If an array that is not empty is returned, it is rendered in the content area
            if (displayedResults.length > 0) {
                // console.log(displayedResults);
                renderSearchResults(displayedResults);
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
            const displayedResultsMobile = songs.filter(
                (song) =>
                    song.title.toLowerCase().includes(searchInputMobile.value.toLowerCase()) ||
                    song.artist.toLowerCase().includes(searchInputMobile.value.toLowerCase()) ||
                    song.genre.toLowerCase().includes(searchInputMobile.value.toLowerCase()),
            );
            // If a populated array is returned, it is rendered in the content area
            if (displayedResultsMobile.length > 0) {
                // console.log(displayedResults);
                renderSearchResults(displayedResultsMobile);
                return;
            } else {
                showNoResults();
                return;
            }
        }, searchDelay);
    }
}

// While creating the individual functions for sorting,
// i figured we can avoid hard coding 3 functions if we pass the sortProperty(.title, .artist etc)
// from the buttons themselves into this function.
// Standard sorting direction is descending, A-Z
let currentProperty;
let sortDirection = "descending";
function sorting(sortProperty) {
    // If the same sort button is pressed twice, swap the sort order
    if (currentProperty === sortProperty) {
        if (sortDirection === "ascending") {
            sortDirection = "descending";
        } else {
            sortDirection = "ascending";
        }
    } else {
        // If a new sort button is pressed, reset the property so we can default to A-Z for each sort category
        currentProperty = sortProperty;
        sortDirection = "ascending";
    }
    // depending on the direction, we return the comparison 
    if (sortDirection === "ascending") {
        displayedResults = [...displayedResults].sort((songA, songB) => {
            return songA[sortProperty].localeCompare(songB[sortProperty]);
        });
    } else {
        displayedResults = [...displayedResults].sort((songA, songB) => {
            return songB[sortProperty].localeCompare(songA[sortProperty]);
        });
    }
    console.log(`Sorting view by ${currentProperty + sortDirection}`);
    renderSearchResults(displayedResults);
}
