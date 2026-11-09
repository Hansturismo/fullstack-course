const accordionMenu = document.querySelector(".accordion");
const accordionButton = document.querySelector(".accordion__toggle");

console.log(accordionMenu);
console.log(accordionButton);

accordionButton.addEventListener("click", toggleAccordion);

function toggleAccordion() {
  if (accordionMenu.classList == "accordion") {
    accordionMenu.classList.add("accordion--active");
  } else {
    accordionMenu.classList.remove("accordion--active");
  }
}
