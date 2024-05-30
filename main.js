import "./style.scss";
import gsap from "gsap";
import "@splidejs/splide/css";
import Splide from "@splidejs/splide";

const ease = "elastic.out(1,0.85)";
const duration = 1.5;

const descriptions = document.querySelectorAll(".description");
const backgrounds = document.querySelectorAll(".background");
const titles = document.querySelectorAll(".title");
const dots = document.querySelectorAll(".dot");

var splide1 = new Splide("#splide1", {
  type: "loop",
  perMove: 3,
  perPage: 3,
  pagination: false,
  fixedHeight: "210px",
  gap: "20px",
  drag: false,
});

splide1.mount();

const arrowNext = document.querySelector(".splide__arrow--next");
const arrowPrev = document.querySelector(".splide__arrow--prev");

let current = 0;

arrowNext.addEventListener("click", () => {
  current++;
  if (current > descriptions.length - 1) current = 0;
  update();
});

arrowPrev.addEventListener("click", () => {
  current--;
  if (current < 0) current = descriptions.length - 1;
  update();
});

function update() {
  descriptions.forEach((title, index) => {
    gsap.to(title, {
      duration: duration,
      ease: ease,
      y: `${current * -244}px`,
    });
  });
  backgrounds.forEach((background, index) => {
    gsap.to(background, {
      duration: 0.5,
      y: `${current * -100}%`,
    });
  });
  titles.forEach((title, index) => {
    if (index === current) {
      gsap.to(title, {
        duration: duration,
        ease: ease,
        opacity: 1,
      });
    } else {
      gsap.to(title, {
        duration: duration,
        ease: ease,
        opacity: 0.3,
      });
    }
  });
  dots.forEach((dot, index) => {
    if (index === current) {
      gsap.to(dot, {
        duration: duration,
        ease: ease,
        scale: 1,
      });
    } else {
      gsap.to(dot, {
        duration: duration,
        scale: 0,
        ease: ease,
      });
    }
  });
}
