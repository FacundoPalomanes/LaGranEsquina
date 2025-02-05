document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("#toggle-menu");
    const mobileMenu = document.querySelector(".navbar__mobile-menu");
    const movePage = document.querySelector("#move-page");
  
    const hideMenuResize = () => {
      mobileMenu.style.display = "none";
      movePage.classList.remove("shifted");
    };
  
    // Toggle dark mode 
    document.getElementById('dark-mode-toggle').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    }); 
  
    document.getElementById('dark-mode-toggle-mobile').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    }); 
  
    window.addEventListener("resize", hideMenuResize);
    window.addEventListener("load", hideMenuResize);

    toggleButton.addEventListener("click", () => {
      mobileMenu.style.display = mobileMenu.style.display === "none" || mobileMenu.style.display === "" ? "flex" : "none";
      mobileMenu.classList.toggle("open");
      movePage.classList.toggle("shifted");
    });
});
