document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("#toggle-menu");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  const hideMenuResize = () => {
    mobileMenu.style.display = "none";
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
    if (mobileMenu.classList.contains("d-none")) {
      mobileMenu.classList.remove("d-none");
      mobileMenu.classList.add("d-flex");
    } else {
      mobileMenu.classList.remove("d-flex");
      mobileMenu.classList.add("d-none");
    }
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

  // Welcome Message
  setTimeout(function () {
    const welcomeToastElement = document.getElementById("welcomeLiveToast");
    const welcomeToast = new bootstrap.Toast(welcomeToastElement, {
      autohide: false,
    });
    welcomeToast.show();
  }, 4000);

  // Navbar scroll
  let lastScrollTop = 0;
  const navbar = document.querySelector(".container-navbar");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop === 0) {
      navbar.style.top = "0";
    } else if (scrollTop > lastScrollTop) {
      navbar.style.top = "-100px";
    } else {
      navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });

  const isMobile = window.innerWidth <= 600;
  const carouselInner = document.getElementById("carouselInner");

  if (isMobile) {
    // Creamos el nuevo item para mobile
    const mobileItem = document.createElement("div");
    mobileItem.className = "carousel-item active";
    mobileItem.setAttribute("data-bs-interval", "10000");

    const mobileImg = document.createElement("img");
    mobileImg.src = "./assets/carrousel/image-mobile.png";
    mobileImg.className = "d-block w-100";
    mobileImg.alt = "Banner Mobile";

    mobileItem.appendChild(mobileImg);

    // Quitamos el active del primer item actual
    const firstItem = carouselInner.querySelector(".carousel-item.active");
    firstItem.classList.remove("active");

    // Insertamos el nuevo item al principio
    carouselInner.insertBefore(mobileItem, firstItem);
  }
});
