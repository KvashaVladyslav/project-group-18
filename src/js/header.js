const mobileWindow = document.querySelector(".modal-phone-window")
const burgerIcon = document.querySelector(".open-mobile-menu-btn")
const closeBtn = document.querySelector(".svg-close")
const menu = document.querySelector(".header-nav-menu-link")
const menuList = document.querySelector(".menu-list")
const links = document.querySelectorAll(".link-modal")

links.forEach(link => link.addEventListener("click", () => {
    mobileWindow.classList.add("hidden")
}))


menu.addEventListener("click", () => {
    if (menuList.classList.contains("visually-hidden")) {
        menuList.classList.remove("visually-hidden");
    } else {
        menuList.classList.add("visually-hidden");
    }
});

burgerIcon.addEventListener("click", () => {
    showModal()
})

closeBtn.addEventListener("click", () => {
    hideModal()
})


function showModal() {
     mobileWindow.classList.remove("hidden")
}

function hideModal() {
     mobileWindow.classList.add("hidden")
}