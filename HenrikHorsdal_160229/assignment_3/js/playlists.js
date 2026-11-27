const createPlaylistButtonDesktop = document.querySelector("#createPlaylistButtonDesktop");
const createPlaylistButtonMobile = document.querySelector("#createPlaylistButtonMobile");
const createPlaylistDesktopView = document.querySelector("#createPlaylistDesktop");
const createPlaylistMobileView = document.querySelector("#createPlaylistMobile");

const createPlaylistFormDesktop = document.querySelector("#playlistCreationFormDesktop");
const createPlaylistFormMobile = document.querySelector("#playlistCreationFormMobile");
const playlistName = document.querySelector("#playlistName");

// Initialize a playlists array
const playlistArray = JSON.parse(localStorage.getItem("createdPlaylists")) || [];

// Closes the newPlaylistForm if the document is interacted with while it's visible.
function handlePointerDownMobile(e) {
    if (!createPlaylistMobileView.contains(e.target) && !searchPromptButtonMobile.contains(e.target)) {
        console.log(e.target);
        if (e.target == createPlaylistButtonMobile) {
            return;
        } else if (e.target == searchPromptButtonMobile) {
            return;
        } else {
            document.removeEventListener("pointerdown", handlePointerDownMobile);
            createPlaylistMobileView.classList.add("playlists--hide-mobile");
            createPlaylistMobileView.inert = true;
            console.log(`Tapped outside of createPlaylistMobileView, hiding view. ${createPlaylistMobileView.inert} `);
            return;
        }
    }
}
function handlePointerDownDesktop(e) {
    if (!createPlaylistFormDesktop.contains(e.target)) {
        if (e.target == createPlaylistButtonDesktop) {
            return;
        } else {
            document.removeEventListener("pointerdown", handlePointerDownDesktop);
            createPlaylistDesktopView.classList.add("playlists--hide-desktop");
            createPlaylistDesktopView.inert = true;
            return;
        }
    }
}

function showNewPlaylistFormMobile() {
    document.addEventListener("pointerdown", handlePointerDownMobile);
    createPlaylistMobileView.classList.remove("playlists--hide-mobile");
    createPlaylistMobileView.inert = false;
    console.log(`Toggling new playlist form mobile inert = ${createPlaylistMobileView.inert}`);
}

function showNewPlaylistFormDesktop() {
    document.addEventListener("pointerdown", handlePointerDownDesktop);
    createPlaylistDesktopView.classList.remove("playlists--hide-desktop");
    createPlaylistDesktopView.inert = false;
    console.log(`Toggling new playlist form desktop inert = ${createPlaylistDesktopView.inert}`);
}

// Creates a playlist object
function createPlaylist(title) {
    let playlist = {
        id: crypto.randomUUID(),
        title: title,
        savedSongs: [],
    };
    playlistArray.push(playlist);
    console.log(playlistArray);
    clearPlaylists();
    localStorage.setItem("createdPlaylists", JSON.stringify(playlistArray));
    renderPlaylists(playlistArray);
}

// Toggles the new playlist form on desktop
createPlaylistButtonDesktop.addEventListener("click", showNewPlaylistFormDesktop);
// Form handler in desktop view
createPlaylistFormDesktop.addEventListener("submit", (e) => {
    e.preventDefault();
    const playlistName = createPlaylistFormDesktop.elements["playlistName"].value.trim();
    const errorExists = document.querySelector(".playlists__creation--error");
    if (playlistName === "") {
        console.log(`The playlist name cannot be empty.`);
        if (errorExists) {
            return;
        }
        const error = document.createElement("p");
        error.textContent = "The playlist name cannot be empty.";
        error.classList.add("playlists__creation--error");
        createPlaylistFormDesktop.append(error);
        return;
    } else if (playlistArray.some((playlist) => playlist.title === playlistName)) {
        console.log(`The playlist name should be unique.`);
        if (errorExists) {
            return;
        }
        const error = document.createElement("p");
        error.textContent = "The playlist name should be unique";
        error.classList.add("playlists__creation--error");
        createPlaylistFormDesktop.append(error);
        return;
    } else {
        createPlaylist(playlistName);
        if (!createPlaylistDesktopView.classList.contains("playlists--hide-desktop")) {
            createPlaylistDesktopView.classList.toggle("playlists--hide-desktop");
            createPlaylistDesktopView.inert = !createPlaylistDesktopView.inert;
        }
        if (!createPlaylistMobileView.classList.contains("playlists--hide-mobile")) {
            createPlaylistMobileView.classList.toggle("playlists--hide-mobile");
            createPlaylistMobileView.inert = !createPlaylistMobileView.inert;
        }
        createPlaylistFormDesktop.reset();
    }
});

// Toggles the new playlist form in mobile view
createPlaylistButtonMobile.addEventListener("click", showNewPlaylistFormMobile);
// Form handler in mobile view
createPlaylistFormMobile.addEventListener("submit", (e) => {
    e.preventDefault();
    const playlistName = createPlaylistFormMobile.elements["playlistName"].value.trim();
    const errorExists = document.querySelector(".playlists__creation--error");
    if (playlistName === "") {
        console.log(`The playlist name cannot be empty.`);
        if (errorExists) {
            return;
        }
        const error = document.createElement("p");
        error.textContent = "The playlist name cannot be empty.";
        error.classList.add("playlists__creation--error");
        createPlaylistFormMobile.append(error);
        return;
    } else if (playlistArray.some((playlist) => playlist.title === playlistName)) {
        console.log(`The playlist name should be unique.`);
        if (errorExists) {
            return;
        }
        const error = document.createElement("p");
        error.textContent = "The playlist name should be unique";
        error.classList.add("playlists__creation--error");
        createPlaylistFormMobile.append(error);
        return;
    } else {
        createPlaylist(playlistName);
        if (!createPlaylistDesktopView.classList.contains("playlists--hide-desktop")) {
            createPlaylistDesktopView.classList.toggle("playlists--hide-desktop");
        }
        if (!createPlaylistMobileView.classList.contains("playlists--hide-mobile")) {
            createPlaylistMobileView.classList.toggle("playlists--hide-mobile");
        }
        createPlaylistFormMobile.reset();
    }
});
