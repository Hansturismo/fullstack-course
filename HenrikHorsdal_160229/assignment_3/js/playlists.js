const createPlaylistButtonDesktop = document.querySelector("#createPlaylistButtonDesktop");
const createPlaylistButtonMobile = document.querySelector("#createPlaylistButtonMobile");
const newPlaylistForm = document.querySelector("#createPlaylistMobile");
const createPlaylistMobileView = document.querySelector("#createPlaylistMobile");
const createPlaylistForm = document.querySelector("#playlistCreationForm");
const playlistName = document.querySelector("#playlistName");

// Initialize a playlists array
const playlistArray = [];

// Closes the newPlaylistForm if the document is interacted with while it's visible.
function handlePointerDown(e) {
    if (!createPlaylistMobileView.contains(e.target) && !searchPromptButton.contains(e.target)) {
        if (e.target == createPlaylistButtonMobile) {
            return;
        } else {
            createPlaylistMobileView.classList.add("playlists--hide");
            document.removeEventListener("pointerdown", handlePointerDown);
            return;
        }
    }
}

function showNewPlaylistForm() {
    console.clear();
    document.addEventListener("pointerdown", handlePointerDown);
    createPlaylistMobileView.classList.toggle("playlists--hide");
    console.log(`Toggling newPlaylistView`);
}
// Shows the input to create a new playlist
createPlaylistButtonMobile.addEventListener("click", showNewPlaylistForm);

// Creates a playlist object
function createPlaylist(title) {
    let playlist = {
        id: crypto.randomUUID(),
        title: title,
        savedSongs: [],
    };
    playlistArray.push(playlist);
    console.log(playlistArray);
    renderPlaylists(playlistArray);
}

createPlaylistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const playlistName = createPlaylistForm.elements["playlistName"].value.trim();
    if (playlistName === "") {
        console.log(`The playlist name cannot be empty.`);
        return;
    } else if (playlistArray.some((playlist) => playlist.title === playlistName)) {
        console.log(`The playlist name should be unique.`);
        return;
    } else {
        createPlaylist(playlistName);
        createPlaylistMobileView.classList.toggle("playlists--hide");
    }
});

const savePlaylist = () => {
    localStorage.setItem("playlists", playlistArray);
};
