const counter = document.querySelector(".counter__sum");
const addButton = document.querySelector(".counter__button--increase");
addButton.addEventListener("click", (addToSum) => {
  counter.textContent++;
});
const decreaseButton = document.querySelector(".counter__button--decrease");
decreaseButton.addEventListener("click", (decreaseFromSum) => {
  if (counter.textContent > 0) {
    counter.textContent--;
  }
});
const resetButton = document.querySelector(".counter__button--reset");
resetButton.addEventListener("click", (resetCounter) => {
  counter.textContent = "0";
});
console.log(addButton, decreaseButton, resetButton);

console.log(counter.textContent);
