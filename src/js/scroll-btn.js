const scrollBtn = document.querySelector('.scroll-btn');

function checkSize() {
  if (pageYOffset < 150 || window.innerWidth < 768) {
    scrollBtn.classList.add('visually-hidden');
  } else {
    scrollBtn.classList.remove('visually-hidden');
  }
}

checkSize();

window.addEventListener('scroll', () => {
    checkSize();
});

window.addEventListener('resize', () => {
  window.innerWidth < 768
    ? scrollBtn.classList.add('visually-hidden')
    : scrollBtn.classList.remove('visually-hidden');
});