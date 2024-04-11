import { apiPost } from "./api";
import { openModal, closeModal } from "./modal-window";

const form = document.querySelector(".form-section");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const { email, phone } = event.target.elements;
 
    try {
        const response = await apiPost(email.value, phone.value);
        if (response) {
            console.log(response);
           openModal()
            form.reset();
        } 
    } catch (error) {
        console.error("Error submitting request:", error);
    }
}

