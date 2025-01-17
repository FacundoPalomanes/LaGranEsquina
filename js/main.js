document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar__toggle-btn');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');
    const movePage = document.querySelector('#move-page');

    const toggleMenu = () => {
        mobileMenu.style.display = mobileMenu.style.display === "none" || mobileMenu.style.display === "" ? "flex" : "none";
        mobileMenu.classList.toggle('open');
    };

    const hideMenuResize = () => {
        mobileMenu.style.display = "none";
        movePage.classList.remove('shifted');
    }

    toggleButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", hideMenuResize);
    window.addEventListener("load", hideMenuResize);

  
    toggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open'); // Alterna el estado visible del menú
      movePage.classList.toggle('shifted'); // Mueve el carrusel hacia abajo
    });
});