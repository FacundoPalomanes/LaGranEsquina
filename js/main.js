document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar__toggle-btn');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');

    const toggleMenu = () => {
        mobileMenu.style.display = mobileMenu.style.display === "none" || mobileMenu.style.display === "" ? "flex" : "none";
    }

    const hideMenuResize = () => {
        mobileMenu.style.display = "none";
    }

    toggleButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", hideMenuResize);
    window.addEventListener("load", hideMenuResize);
});