let isOnline = true;

const button = document.querySelector(".statusButton");

button.onclick = function () {
  if (isOnline == true) {
    isOnline = false;
    console.log("Offline");
  } else if (isOnline == false) {
    isOnline = true;
    console.log("Online");
  }
};
