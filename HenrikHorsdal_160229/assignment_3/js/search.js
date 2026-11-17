function search(e) {
    // If events of type click and Enter while in input field, search.
    if (e.type === "click" || (e.type === "keyup" && e.key === "Enter")) {
        // Show no results msg if search is empty.
        if (searchInput.value == "") {
            showNoResults();
            return;
        }
        console.log(searchInput.value);
        console.log(`Searching array`);
        // Stores the returned array after applying the searchTerm to filter(), which should be the matching results
        const searchResults = songs.filter(
            (song) =>
                song.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                song.artist.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                song.genre.toLowerCase().includes(searchInput.value.toLowerCase()),
        );
        if (!searchResults.length == 0) {
            console.log(searchResults);
            renderSearchResults(searchResults);
            return;
        } else {
            showNoResults();
            return;
        }
    }
}
