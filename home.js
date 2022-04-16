const buttonMenu = document.querySelector(".header__menu--mobile");
const buttonMenuLink = document.querySelector(".menu__mobile--items");
const menu = document.querySelector(".menu__mobile--disable");
const body = document.querySelector(".body");

buttonMenu.addEventListener("click", () => {
  menu.classList.toggle("menu__mobile--enable");
  body.classList.toggle("overflow");
});

//scroll suave para desktop:
// function scrollToSection(event) {
//   event.preventeDefault();
//   const href = event.currentTarget.getAttribute("href");
//   const section = document.querySelector(href);

//   section.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// }

// buttonMenuLink.forEach((link) => {
//   link.addEventListener("click", scrollToSection);
// });

buttonMenuLink.addEventListener("click", () => {
  menu.classList.remove("menu__mobile--enable");
  body.classList.remove("overflow");
});
