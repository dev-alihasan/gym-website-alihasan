const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
navToggle &&
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  }),
  navClose &&
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
const navLink = document.querySelectorAll(".nav__link"),
  linkAction = () => {
    let e = document.getElementById("nav-menu");
    e.classList.remove("show-menu");
  };
navLink.forEach((e) => e.addEventListener("click", linkAction));
const scrollHeader = () => {
  let e = document.getElementById("header");
  this.scrollY >= 50
    ? e.classList.add("bg-header")
    : e.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
const sections = document.querySelectorAll("section[id]"),
  scrollActive = () => {
    let e = window.pageYOffset;
    sections.forEach((l) => {
      let s = l.offsetHeight,
        t = l.offsetTop - 58,
        o = l.getAttribute("id"),
        n = document.querySelector(".nav__menu a[href*=" + o + "]");
      e > t && e <= t + s
        ? n.classList.add("active-link")
        : n.classList.remove("active-link");
    });
  };
window.addEventListener("scroll", scrollActive);
const scrollUp = () => {
  let e = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? e.classList.add("show-scroll")
    : e.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(".home__data, .footer__container, .footer__group"),
  sr.reveal(".home__img", { delay: 700, origin: "bottom" }),
  sr.reveal(".gallery-wrap", { delay: 700, origin: "bottom" }),
  sr.reveal(".button__flex", { delay: 700, origin: "bottom" }),
  sr.reveal(".logos__img, .services__card, .gallery__card", { interval: 100 }),
  sr.reveal(".offer-goals__img", { origin: "left" }),
  sr.reveal(".section__titles", { origin: "left" }),
  sr.reveal(".contact-us__description", { origin: "left" }),
  sr.reveal(".offer-goals__content, .contact-us__img", { origin: "right" });
