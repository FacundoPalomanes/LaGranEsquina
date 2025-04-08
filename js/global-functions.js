export function header_movement() {
  const navbar = document.querySelector(".container-navbar");
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop === 0) {
      navbar.style.top = "4%";
    } else if (scrollTop > lastScrollTop) {
      navbar.style.top = "-100px";
    } else {
      navbar.style.top = "0%";
    }

    lastScrollTop = scrollTop;
  });
}

export function hideMenuResize() {
  const mobileMenu = document.querySelector(".navbar__mobile-menu");
  if (mobileMenu.classList.contains("d-flex")) {
    mobileMenu.classList.remove("d-flex");
    mobileMenu.classList.add("d-none");
  }
}

export function toggleMenu() {
  const toggleButton = document.querySelector("#toggle-menu");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");
  toggleButton.addEventListener("click", () => {
    if (mobileMenu.classList.contains("d-none")) {
      mobileMenu.classList.remove("d-none");
      mobileMenu.classList.add("d-flex");
    } else {
      mobileMenu.classList.remove("d-flex");
      mobileMenu.classList.add("d-none");
    }
  });
}

export function scrollLeft({ buttonId, scrollerContainerId }) {
  const btn = document.getElementById(buttonId);
  btn.addEventListener("click", () => {
    const container = document.getElementById(scrollerContainerId);
    container.scrollBy({ left: -200, behavior: "smooth" });
  });
}

export function scrollRight({ buttonId, scrollerContainerId }) {
  const btn = document.getElementById(buttonId);
  btn.addEventListener("click", () => {
    const container = document.getElementById(scrollerContainerId);
    container.scrollBy({ left: 200, behavior: "smooth" });
  });
}

export function darkMode() {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const toggleBtnMobile = document.getElementById("dark-mode-toggle-mobile");

  if (!toggleBtn || !toggleBtnMobile) return;

  const isDark = localStorage.getItem("darkMode") === "true";
  
  if (isDark) {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
    toggleBtnMobile.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    toggleBtn.textContent = "🌙";
    toggleBtnMobile.textContent = "🌙";
  }

  // Toggle al hacer click
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isNowDark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isNowDark ? "☀️" : "🌙";
    toggleBtnMobile.textContent = isNowDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isNowDark);
  });

  toggleBtnMobile.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isNowDark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isNowDark ? "☀️" : "🌙";
    toggleBtnMobile.textContent = isNowDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isNowDark);
  });
}
