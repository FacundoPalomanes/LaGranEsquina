document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("#toggle-menu");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");
  const movePage = document.querySelector("#move-page");
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  const hideMenuResize = () => {
    mobileMenu.style.display = "none";
    movePage.classList.remove("shifted");
  };

  // Toggle dark mode
  document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  document
    .getElementById("dark-mode-toggle-mobile")
    .addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });

  // toggleButton.addEventListener("click", toggleMenu);
  window.addEventListener("resize", hideMenuResize);
  window.addEventListener("load", hideMenuResize);

  toggleButton.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "none" || mobileMenu.style.display === ""
        ? "flex"
        : "none";
    mobileMenu.classList.toggle("open"); // Alterna el estado visible del menú
    movePage.classList.toggle("shifted");
  });

  // Add click event to cards product
  prev.addEventListener("click", () => {
    console.log("prev");
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: -200, behavior: "smooth" });
  });
  next.addEventListener("click", () => {
    console.log("next");
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: 200, behavior: "smooth" });
  });
});
