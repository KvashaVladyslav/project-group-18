document.addEventListener('DOMContentLoaded', event => {
  const startAnimation = () => {
    const items = document.querySelectorAll('.covers-item');
    items.forEach(item => {
      item.style.animationPlayState = 'running';
    });
  };

  const stopAnimation = () => {
    const items = document.querySelectorAll('.covers-item');
    items.forEach(item => {
      item.style.animationPlayState = 'paused';
    });
  };

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });
    },
    { threshold: 0.5 }
  );

  const coversSection = document.querySelector('.covers-section');
  observer.observe(coversSection);
});
