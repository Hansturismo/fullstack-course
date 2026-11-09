const selectBackgroundDiv = document.querySelector(".theme--light");
const selectThemeButton = document.querySelector(".theme--light button");

selectThemeButton.addEventListener("click", changeTheme);

function changeTheme() {
  selectBackgroundDiv.getAttribute("class");
  if (selectBackgroundDiv.getAttribute("class") == "theme--light") {
    selectBackgroundDiv.setAttribute("class", "theme--dark");
    selectThemeButton.textContent = "☀️";
    console.log(`Applied: ${selectBackgroundDiv.getAttribute("class")}`);
    console.log(selectThemeButton);
  } else {
    selectBackgroundDiv.setAttribute("class", "theme--light");
    selectThemeButton.textContent = "🌙";
    console.log(`Applied: ${selectBackgroundDiv.getAttribute("class")}`);
    console.log(selectThemeButton);
  }
}
