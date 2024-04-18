import { apiGet } from "./api";
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const list_html_review = document.querySelector(".review-list");
apiGet().then(list_of_reviews => {
    const swiper = new Swiper('.reviews .swiper.reviews', {
        modules: [Navigation, Pagination, Keyboard, Mousewheel],
        navigation: {
            nextEl: '.reviews .swiper-btn-next',
            prevEl: '.reviews .swiper-btn-prev',
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true
        },
        mousewheel: {
            enabled: true,
            invert: true
        },
        pagination: true,
        speed: 1200,
        simulateTouch: true,
        updateOnWindowResize: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            1400: {
                slidesPerView: 4,
                slidesPerGroup: 1,
            }
        }
    });
    list_html_review.insertAdjacentHTML('beforeend', renderReviews(list_of_reviews));
    const nextBtn = document.querySelector('.reviews .swiper-btn-next');
const prevBtn = document.querySelector('.reviews .swiper-btn-prev');
  prevBtn.addEventListener("keypress", (event) => {
        const keyName = event.key;
    if (keyName === 'Enter') {
      prevImg();
    }
  });
  nextBtn.addEventListener("keypress", (event) => {
        const keyName = event.key;
    if (keyName === 'Enter') {
      nextImg();
    }
  });
function prevImg() {
  swiper.on("keyPress", (swiper, keyCode) => {
    switch (keyCode) {
      case 13:
        swiper.slidePrev();
        break;
    }
  });
};
function nextImg() {
  swiper.on("keyPress", (swiper, keyCode) => {
    switch (keyCode) {
      case 13:
        swiper.slideNext();
        break;
    }
  });
};
})
  function renderReview(review) {
        return `
            <li class="review-card swiper-slide">
                <img src="${review.avatar_url}" alt="avatar" class="img-avatar">
                <h3 class="author-name">${review.author}</h3>
                <p class="review-text">${review.review}</p>
            </li>
        `;
    }
    function renderReviews(reviews) {
        return reviews.map(review => renderReview(review)).join("");
    } 