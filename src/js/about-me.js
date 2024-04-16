import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import icons from "../img/icons.svg"

new Accordion('.about-me-title-container', {
  duration: 1000,
});

const btns = document.querySelectorAll('.about-me-button-slider-down');
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
function handleClick(event) {
  const currentBtn = event.currentTarget;
  const closest = currentBtn.closest('.about-me-item');
  if (closest.querySelector('.about-me-paragraph-container')) {
    const aboutMeParagraphContainer = closest.querySelector(
      '.about-me-paragraph-container'
    );
    toggleList(currentBtn, aboutMeParagraphContainer);
  } else if (closest.querySelector('.about-me-paragraph-container')) {
    const roleList = closest.querySelector('.about-me-paragraph-container');
    toggleList(currentBtn, roleList);
  } else if (closest.querySelector('.about-me-paragraph-container')) {
    const educationList = closest.querySelector('.about-me-paragraph-container');
    toggleList(currentBtn, educationList);
  }
}
