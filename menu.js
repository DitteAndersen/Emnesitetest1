const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("home")) {
    const header = document.querySelector("header");
    const hero = document.querySelector(".hero");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if (!document.body.classList.contains("home")) {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 60) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
});
