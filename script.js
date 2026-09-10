(function () {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (!menuBtn || !navLinks) return;

    const icon = menuBtn.querySelector("i");

    function openMenu() {
        navLinks.classList.add("show-menu");
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.setAttribute("aria-label", "Close Menu");

        if (icon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }
    }

    function closeMenu() {
        navLinks.classList.remove("show-menu");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open Menu");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    }

    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        if (navLinks.classList.contains("show-menu")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
})();