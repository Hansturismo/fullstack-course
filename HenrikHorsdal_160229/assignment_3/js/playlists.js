// Initialize a playlists array
const playlistArray = [
    { id: 1, title: "test-playlist", songs: [] },
    { id: 2, title: "test-2" },
];

const createPlaylistMobileView = document.querySelector("#createPlaylistMobile");
const createPlaylistForm = document.querySelector("#playlistCreationForm");
const playlistName = document.querySelector("#playlistName")

createPlaylistForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const playlistTitle = playlistName.value.trim();
    if (playlistName === "") {
        errorText.textContent = "The playlist name cannot be empty.";
        return;
    }
})

// Creates a playlist object
function createPlaylist(title) {
    let playlist = {
        id: crypto.randomUUID(),
        title: null,
        entries: playlist.length,
        songs: [],
    };
    // playlists.push(playlist);
}

const savePlaylist = () => {
    localStorage.setItem("playlists", playlistArray);
};


sa