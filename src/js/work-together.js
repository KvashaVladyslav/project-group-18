import { apiPost, apiGet } from "./api";
import { openModal, closeModal } from "./modal-window";

const form = document.querySelector(".form-section");

form.addEventListener("submit", handleSubmitForm);

let formSubmitted = false;

async function handleSubmitForm(event) {
    event.preventDefault(); 
    

    if (formSubmitted) {
        return; 
    }

    formSubmitted = true;

    const { email, number } = event.target.elements; 
    console.log(email.value)
    console.log(number.value)
   

    try {
        const response = await apiPost(email.value, number.value); 
        if (response) {
            openModal(); 
            form.reset(); 
        } 
    } catch (error) {
        console.error("Error submitting request:", error);
         form.reset(); 
    }
}

