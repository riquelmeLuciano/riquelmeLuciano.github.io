(function () {
  const yearEl = document.getElementById("year");
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("menu");
  const links = menu.querySelectorAll("a");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("is-open", !isOpen);
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
      });
    });
  }
})();
