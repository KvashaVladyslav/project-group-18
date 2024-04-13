const mobileWindow = document.querySelector(".modal-phone-window")
const burgerIcon = document.querySelector(".open-mobile-menu-btn")
const closeBtn = document.querySelector(".svg-close")

burgerIcon.addEventListener("click", () => {
    mobileWindow.classList.remove("hidden")
})

closeBtn.addEventListener("click", () => {
     mobileWindow.classList.add("hidden")
})