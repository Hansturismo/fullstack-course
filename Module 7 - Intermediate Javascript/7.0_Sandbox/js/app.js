console.log(document.title);

// Select html elements by ID
const title = document.getElementById("title");
console.log(title);

// Select elements by class name
const listItems = document.getElementsByClassName("item");
console.log(listItems);

// Select elements by tag names
const listItemsWithTag = document.getElementsByTagName("ul");
console.log(listItemsWithTag);

// Select elements with querySelector
const titleWithQuery = document.querySelector("#title");
console.log(titleWithQuery);

const listItemsWithQuery = document.querySelectorAll(".item");
console.log(listItemsWithQuery);
