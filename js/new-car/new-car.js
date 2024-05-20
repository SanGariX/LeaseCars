const menuBtn = document.querySelector(".open__header__btn");
const menu = document.querySelector(".header__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("header__list--active");
});
