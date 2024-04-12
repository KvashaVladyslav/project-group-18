import { apiPost } from "./api";
import modalWindow from "./modal-window";

const form = document.querySelector(".form-section");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { email, comment } = event.target.elements;
    console.log(email.value);
    console.log(comment.value);

    try {
        const response = await apiPost(email.value, comment.value);
        console.log(response);
        if (response) {
            modalWindow.render(response.title, response.message);
            modalWindow.open();
            form.reset();
        }
    } catch (error) {
        console.error("Error submitting request:", error);
        form.reset();
    }
});

modalWindow.bindEvents();

