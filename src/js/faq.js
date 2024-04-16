const accordionList = document.querySelectorAll(".accordion-faq");

accordionList.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
})