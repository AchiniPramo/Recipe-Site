const burgerButton = document.querySelector(".burger-button");
const navMenu = document.querySelector(".nav-menu");

burgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
