import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';

import icons from "../img/icons.svg"

new Accordion('.about-me-title-container', {
  duration: 1000,
});

const btns = document.querySelectorAll('.about-me-item');
  btns.forEach(btn => btn.addEventListener('click', handleClick));
  function toggleList(button, list) {
    const svgElement = button.querySelector('use');
    const isHidden = list.classList.contains('visually-hidden');
    list.classList.toggle('visually-hidden');
    svgElement.setAttribute(
      'href',
      isHidden
        ? `${icons}#icon-arrow-up`
        : `${icons}#icon-arrow-down`,
    );
  }
  function handleClick() {
    const currentBtn = event.currentTarget;
    const closest = currentBtn.closest('.about-me-item');
    const aboutMeParagraphContainer = closest.querySelector('.about-me-paragraph-container');
    if (aboutMeParagraphContainer) {
      aboutMeParagraphContainer.classList.toggle("active");
      toggleList(currentBtn, aboutMeParagraphContainer);
    }
}

const swiperElem = document.querySelector(".skills-section .swiper")
const swiperBtn = document.querySelector(".skills-btn-arrow-right")
const swiperBySection = new Swiper(swiperElem, {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  spaceBetween: 0,
  navigation: {
    nextEl: swiperBtn,
  },
  slidesPerView: 2,
  initialSlide: 1,
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  mousewheel: {
    enabled: true,
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  loop: true,
  allowTouchMove: true,
  followFinger: true,
  simulateTouch: true,
});