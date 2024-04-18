const mobileWindow = document.querySelector(".modal-phone-window")
const burgerIcon = document.querySelector(".open-mobile-menu-btn")
const closeBtn = document.querySelector(".svg-close")
const menu = document.querySelector(".header-nav-menu-link")
const menuList = document.querySelector(".menu-list")
const orderButton = document.querySelector(".open-mobile-order-btn-modal")
orderButton.addEventListener("click", () => {
    mobileWinsowHide()
})
const linksModal = document.querySelectorAll(".link")
linksModal.forEach(link => link.addEventListener("click", () => {
    mobileWinsowHide()
}))
menu.addEventListener("click", () => {
    if (menuList.classList.contains("visually-hidden")) {
       openMenu()
    } else {
       closeMenu()
    }
});
burgerIcon.addEventListener("click", () => {
    mobileWinsowShow()
})
closeBtn.addEventListener("click", () => {
    mobileWinsowHide()
})
function openMenu() {
     menuList.classList.add("active");
        menuList.classList.remove("visually-hidden");
}
function closeMenu() {
      menuList.classList.add("visually-hidden");
         menuList.classList.remove("active");
}
function mobileWinsowShow() {
    mobileWindow.classList.remove("hidden")
document.body.style.overflow = 'hidden';
}
function mobileWinsowHide() {
     mobileWindow.classList.add("hidden")
document.body.style.overflow = 'auto';
}