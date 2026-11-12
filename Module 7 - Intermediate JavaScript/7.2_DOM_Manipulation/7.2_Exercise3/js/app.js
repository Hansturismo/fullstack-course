// Logs the content of textarea and how long the string is after a small delay to avoid overlogging.
let timer;
function logContentToConsoleDelayed() {
    clearTimeout(timer);
    timer = setTimeout(function () {
        // console.clear();
        const textArea = document.getElementById("textArea");
        return console.log(`Value: ${textArea.value}\nLength: ${textArea.value.length}`);
    }, 800);
}


// Overly complicated way to display a "max char reached" msg instead of just showing/hiding an element LOL
function displayErrorOnMaxCharLength() {
    const textArea = document.querySelector("#textArea");
    const errorMessageContainer = document.querySelector("#errorMessageContainer");
    if (errorMessageContainer.querySelector("#errorMessage") === null && textArea.value.length >= 200) {
        const itemToAdd = document.createElement("p");
        itemToAdd.setAttribute("id", "errorMessage");
        itemToAdd.textContent = "You've reached the maximum allowed amount of characters!";
        errorMessageContainer.append(itemToAdd);
    }
    if (errorMessageContainer.querySelector("#errorMessage") !== null && textArea.value.length < 200) {
        const itemToRemove = errorMessageContainer.querySelector("#errorMessage");
        itemToRemove.remove();
    }
}
textArea.addEventListener("input", logContentToConsoleDelayed);
textArea.addEventListener("input", displayErrorOnMaxCharLength);
