const buttonMenu = document.querySelector(".header__menu--mobile");
const menu = document.querySelector(".menu__mobile--disable");
const body = document.querySelector(".body");

buttonMenu.addEventListener("click", () => {
  menu.classList.toggle("menu__mobile--enable");
  body.classList.toggle("overflow");
});
