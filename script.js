/* =====================================================
   Munna Yadav, Portfolio Script (plain JavaScript)

   1. LINKS: put your real project and certificate links here
   2. Footer year
   3. Mobile menu
   4. Header shadow when scrolling
   5. Highlight the current section in the menu
   ===================================================== */

(function () {
  "use strict";

  /* -----------------------------------------------
     1. YOUR LINKS (edit this part)
     Paste the full address between the quotes.
     Example:
       bankProject: "https://github.com/your-username/bank-management-system",
     While a value is empty (""), the button on the page
     stays greyed out and says "coming soon".
     ----------------------------------------------- */
  var LINKS = {
    bankProject: "",
    healthProject: "",
    pythonCertificate: "",
    hackathonCertificate: ""
  };

  /* Turn each pending button into a working link once its address is filled in */
  document.querySelectorAll("[data-link]").forEach(function (button) {
    var url = (LINKS[button.dataset.link] || "").trim();
    if (!url) {
      return; // no link yet: leave the button as "coming soon"
    }

    button.href = url;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.classList.remove("is-pending");
    button.removeAttribute("aria-disabled");
    button.removeAttribute("role");

    var label = button.querySelector(".btn-label");
    if (label) {
      label.textContent = button.dataset.labelReady;
    }
  });

  /* -----------------------------------------------
     2. FOOTER YEAR (updates itself every year)
     ----------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* -----------------------------------------------
     3. MOBILE MENU
     ----------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  var desktopQuery = window.matchMedia("(min-width: 880px)");

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close the menu after choosing a link
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenu(false);
      }
    });

    // Close with the Escape key and return focus to the menu button
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });

    // Close when clicking anywhere outside the menu
    document.addEventListener("click", function (event) {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen && !menu.contains(event.target) && !toggle.contains(event.target)) {
        setMenu(false);
      }
    });

    // Reset when the window grows to desktop size
    var onViewportChange = function (event) {
      if (event.matches) {
        setMenu(false);
      }
    };
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", onViewportChange);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(onViewportChange); // very old browsers
    }
  }

  /* -----------------------------------------------
     4. HEADER BORDER WHEN SCROLLING
     ----------------------------------------------- */
  var header = document.getElementById("site-header");

  function updateHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* -----------------------------------------------
     5. HIGHLIGHT THE CURRENT SECTION IN THE MENU
     A section can use data-nav="education" to light up
     another section's link (used by Certifications).
     ----------------------------------------------- */
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = document.querySelectorAll("main section[id]");

  function setActive(id) {
    navLinks.forEach(function (link) {
      var isCurrent = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", isCurrent);
      if (isCurrent) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.nav || entry.target.id);
          }
        });
      },
      // Treat a section as "current" when it crosses the middle of the screen
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
