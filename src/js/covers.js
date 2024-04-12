document.addEventListener("DOMContentLoaded", function() {
  // Функція анімації 
  function startMarquee() {
    const marquee = document.querySelector('.covers-item');
    marquee.style.animationPlayState = 'running';
  }

  function stopMarquee() {
    const marquee = document.querySelector('.covers-item');
    marquee.style.animationPlayState = 'paused';
  }


  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startMarquee();
      } else {
        stopMarquee();
      }
    });
  }, { threshold: 0.5 }); 

  // Встановлення спостерігача 
  const coversSection = document.querySelector('.covers-section');
  observer.observe(coversSection);
});

