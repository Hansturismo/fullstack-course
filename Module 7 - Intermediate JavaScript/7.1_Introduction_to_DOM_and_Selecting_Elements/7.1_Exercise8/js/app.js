const navbarButton = document.querySelector(".navbar__button--menu");
const navbarMenu = document.querySelector(".navbar__menu");

navbarButton.addEventListener("click", toggleNavBurgerMenu);

function toggleNavBurgerMenu() {
  if (navbarMenu.classList == "navbar__menu") {
    navbarMenu.classList.add("navbar__menu--active");
  } else navbarMenu.classList.remove("navbar__menu--active");
}
