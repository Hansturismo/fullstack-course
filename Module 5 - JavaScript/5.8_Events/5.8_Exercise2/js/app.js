let count = 0;

const increaseButton = document.querySelector(".increaseButton");
const decreaseButton = document.querySelector(".decreaseButton");

increaseButton.addEventListener("click", () => {
  count++;
  console.log(count);
});
decreaseButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    console.log(count);
  }
});
