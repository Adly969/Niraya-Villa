const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const bookingForm = document.querySelector("[data-booking-form]");

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener(
    "error",
    () => {
      image.closest(".about__image, .villa-card, .gallery-item")?.classList.add("is-image-missing");
    },
    { once: true }
  );
});

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 80);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    navMenu.classList.toggle("is-open", !isOpen);
    header.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      navMenu.classList.remove("is-open");
      header.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(bookingForm);
    const message = [
      "Hello Niraya, I would like to check availability.",
      `Check-in: ${formData.get("checkin") || "-"}`,
      `Check-out: ${formData.get("checkout") || "-"}`,
      `Guests: ${formData.get("guests") || "-"}`,
      `Villa type: ${formData.get("villaType") || "-"}`
    ].join("\n");

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}

if (window.lucide) {
  window.lucide.createIcons();
}
