import { apiGet } from "./api";
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const list_html_review = document.querySelector(".review-list");
apiGet().then(list_of_reviews => {
    const swiper_for_review = new Swiper('.swiper-for-review', {
        modules: [Navigation, Pagination, Keyboard],
        navigation: {
            nextEl: '.swiper-btn-next-review',
            prevEl: '.swiper-btn-prev-review',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
    });
    list_html_review.insertAdjacentHTML('beforeend', renderReviews(list_of_reviews));
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