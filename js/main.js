const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw Error(`There is no ${selector} class. Double-check your HMTL`)
}
const openToggleBtn = getElement(".mobile-menu-open");
const closeToggleBtn = getElement(".mobile-menu-close");
const navLinks = getElement(".nav-links");

openToggleBtn.addEventListener("click",() => {
    openToggleBtn.classList.toggle("hide")
    closeToggleBtn.classList.toggle("show")
    navLinks.classList.toggle("show-links")
})

closeToggleBtn.addEventListener("click",() => {
    navLinks.classList.toggle("show-links")
    closeToggleBtn.classList.toggle("show")
    openToggleBtn.classList.toggle("hide")
})