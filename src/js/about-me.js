import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.about-me-title-container');

const btns = document.querySelectorAll('.about-me-button-slider-down');
btns.forEach(btn => btn.addEventListener('click', handleClick));
function toggleList(button, list) {
  const svgElement = button.querySelector('use');
  const isHidden = list.classList.contains('visually-hidden');
  list.classList.toggle('visually-hidden');
  svgElement.setAttribute(
    'href',
    isHidden
      ? '/img/icons.svg#icon-arrow-up'
      : '/img/icons.svg#icon-arrow-down'
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
  } else if (closest.querySelector('.role-list')) {
    const roleList = closest.querySelector('.role-list');
    toggleList(currentBtn, roleList);
  } else if (closest.querySelector('.education-list')) {
    const educationList = closest.querySelector('.education-list');
    toggleList(currentBtn, educationList);
  }
}
const list = document.querySelector('.skills-list');
const arrow = document.querySelector('.skills-btn-arrow-right');
let currentItem = list.firstElementChild;
arrow.addEventListener('click', () => {
  let nextItem = currentItem.nextElementSibling;
  if (nextItem) {
    currentItem.classList.remove('red');
    nextItem.classList.add('red');
    currentItem = nextItem;
  }
  if (nextItem === null) {
    currentItem.classList.remove('red');
    currentItem = list.firstElementChild;
    currentItem.classList.add('red');
  }
});
