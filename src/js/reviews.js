import { apiGet } from "./api";

const list_html_review = document.querySelector(".review-list");
const list_of_reviews = await apiGet();
for (let i = 0; i < list_of_reviews.length; i++) {
    const card_of_review = `<li class="review-card">
                            <img src=${list_of_reviews[i].avatar_url} alt="avatar" class="img-avatar">
                            <h3 class="author-name"> ${list_of_reviews[i].author}</h3>
                            <p class="review-text">${list_of_reviews[i].review}</p>
                        </li>`;
    list_html_review.innerHTML += card_of_review;
}

