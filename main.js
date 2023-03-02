/* navbar logic */

const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
let lastScroll = 0;
window.addEventListener("scroll", (e) => {
  const currentScroll = window.scrollY;
  if (currentScroll <= 0) {
    navbar.classList.remove("navbar-hide");
    navbar.classList.add("navbar-visible");
    return;
  }
  if (currentScroll > lastScroll && !navbar.classList.contains("navbar-hide")) {
    navbar.classList.remove("navbar-visible");
    navbar.classList.add("navbar-hide");
  } else if (
    currentScroll < lastScroll &&
    navbar.classList.contains("navbar-hide")
  ) {
    navbar.classList.remove("navbar-hide");
    navbar.classList.add("navbar-visible");
    console.log("navbar visible");
  }
  lastScroll = currentScroll;
});

/* ------------ */

/* carrousel logic */
const arrowLeft = document.querySelector("#carrousel-left");
const arrowRight = document.querySelector("#carrousel-right");
const carrouselContainer = document.querySelector(".carrousel");
const carrouselCard = document.querySelector(".carrousel-card");

arrowLeft.addEventListener("click", () => {
  const cardWidth = carrouselCard.clientWidth;
  carrouselContainer.scrollLeft -= cardWidth;
});
arrowRight.addEventListener("click", () => {
  const cardWidth = carrouselCard.clientWidth;
  carrouselContainer.scrollLeft += cardWidth;
});

/* ----------------*/
