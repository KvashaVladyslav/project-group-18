// document.addEventListener("DOMContentLoaded", function() {
//   // Функція анімації
//   function startMarquee() {
//     const marquee = document.querySelector('.covers-item');
//     marquee.style.animationPlayState = 'running';
//   }

//   function stopMarquee() {
//     const marquee = document.querySelector('.covers-item');
//     marquee.style.animationPlayState = 'paused';
//   }

//   let observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         startMarquee();
//       } else {
//         stopMarquee();
//       }
//     });
//   }, { threshold: 0.5 });

//   // Встановлення спостерігача
//   const coversSection = document.querySelector('.covers-section');
//   observer.observe(coversSection);
// });

/* JavaScript for viewport detection and animation triggering */
//  const section = document.querySelector('.covers-section'); // Replace with actual selector

//  const animationObserver = new IntersectionObserver(entries => {
//    entries.forEach(entry => {
//      if (entry.isIntersecting) {
//        section.classList.add('in-viewport'); // Add a class to trigger animation
//     } else {
//       section.classList.remove('in-viewport'); // Remove class to stop animation
//    }
//   });
// });

//  animationObserver.observe(section);

