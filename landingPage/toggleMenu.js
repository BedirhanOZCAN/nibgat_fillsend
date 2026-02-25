const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar-contact-and-navigation-container");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".navbar-navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});