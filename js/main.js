document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar__toggle-btn');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');

    const toggleMenu = () => {
        mobileMenu.style.display = mobileMenu.style.display === "none" || mobileMenu.style.display === "" ? "flex" : "none";
    }

    const hideMenuResize = () => {
        mobileMenu.style.display = "none";
        carousel.classList.remove('shifted');
    }

    toggleButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", hideMenuResize);
    window.addEventListener("load", hideMenuResize);

    const carousel = document.querySelector('#carouselExampleInterval');
  
    toggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open'); // Alterna el estado visible del menú
      carousel.classList.toggle('shifted'); // Mueve el carrusel hacia abajo
    });
});