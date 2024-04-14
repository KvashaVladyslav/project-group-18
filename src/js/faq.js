

const btns = document.querySelectorAll('.close-btn');
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
  const closest = currentBtn.closest('.faq-item');
  if (closest.querySelector('.info')) {
    const sectionAnswer1 = closest.querySelector('.info');
    toggleList(currentBtn, sectionAnswer1);
  } else if (closest.querySelector('.info-2')) {
    const sectionAnswer2 = closest.querySelector('.info-2');
    toggleList(currentBtn, sectionAnswer2);
  } else if (closest.querySelector('.info-3')) {
    const sectionAnswer3 = closest.querySelector('.info-3');
    toggleList(currentBtn, sectionAnswer3);
  } else if (closest.querySelector('.info-4')) {
    const sectionAnswer4 = closest.querySelector('.info-4');
    toggleList(currentBtn, sectionAnswer4);
  } else if (closest.querySelector('.info-5')) {
    const sectionAnswer5 = closest.querySelector('.info-5');
    toggleList(currentBtn, sectionAnswer5);
  } else if (closest.querySelector('.info-6')) {
    const sectionAnswer6 = closest.querySelector('.info-6');
    toggleList(currentBtn, sectionAnswer6);
  }
}