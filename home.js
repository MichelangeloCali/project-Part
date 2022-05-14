const buttonMenu = document.querySelector(".header__menu--mobile");
const buttonMenuLink = document.querySelector(".menu__mobile--items");
const menu = document.querySelector(".menu__mobile--disable");
const body = document.querySelector(".body");

buttonMenu.addEventListener("click", () => {
  menu.classList.toggle("menu__mobile--enable");
  body.classList.toggle("overflow");
});

buttonMenuLink.addEventListener("click", () => {
  menu.classList.remove("menu__mobile--enable");
  body.classList.remove("overflow");
});

// animação do scroll.
class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.5;
    this.activeClass = "ativo";

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relação ao topo do site.
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  }

  // Verifica a distancia de cada objeto em relação ao scroll do site.
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.activeClass);
      } else if (item.element.classList.contains(this.activeClass)) {
        item.element.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
}

const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

// SCROLL SUAVE
class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault(); // previne o evento padrão.
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href); // Seleciona no Body o elemento que possua o ID do href.
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
