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

// Modal Element & Actions
const bookingModal = document.getElementById("bookingModal");
const modalLoading = document.getElementById("modalStateLoading");
const modalSuccess = document.getElementById("modalStateSuccess");
const modalError = document.getElementById("modalStateError");

const openModal = () => {
  bookingModal.classList.add("is-active");
  bookingModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  bookingModal.classList.remove("is-active");
  bookingModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

if (bookingModal) {
  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && bookingModal.classList.contains("is-active")) {
      closeModal();
    }
  });
}

const villaPrices = {
  "Garden Pool Villa": 1250000,
  "Family Tropical Villa": 2100000,
  "Royal East Bali Villa": 3500000
};

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = new FormData(bookingForm);
    const checkinVal = formData.get("checkin");
    const checkoutVal = formData.get("checkout");
    const guests = formData.get("guests");
    const villaType = formData.get("villaType");

    const checkinDate = new Date(checkinVal);
    const checkoutDate = new Date(checkoutVal);

    // Initial show: Loading State
    modalLoading.style.display = "flex";
    modalSuccess.style.display = "none";
    modalError.style.display = "none";
    openModal();

    // Check date validity
    const today = new Date();
    today.setHours(0,0,0,0);

    setTimeout(() => {
      modalLoading.style.display = "none";

      if (isNaN(checkinDate.getTime()) || isNaN(checkoutDate.getTime())) {
        modalError.style.display = "flex";
        document.getElementById("modalErrorMessage").textContent = "Please select valid check-in and check-out dates.";
        return;
      }

      if (checkinDate < today) {
        modalError.style.display = "flex";
        document.getElementById("modalErrorMessage").textContent = "Check-in date cannot be in the past.";
        return;
      }

      if (checkoutDate <= checkinDate) {
        modalError.style.display = "flex";
        document.getElementById("modalErrorMessage").textContent = "Check-out date must be after check-in date.";
        return;
      }

      // Calculate nights
      const diffTime = Math.abs(checkoutDate - checkinDate);
      const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      // Calculate total price
      const pricePerNight = villaPrices[villaType] || 0;
      const totalPrice = pricePerNight * nights;

      // Format date strings
      const formatDate = (date) => {
        return date.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      };

      const formatPrice = (price) => {
        return "IDR " + price.toLocaleString("id-ID");
      };

      // Populate elements
      document.getElementById("summaryVilla").textContent = villaType;
      document.getElementById("summaryDates").textContent = `${formatDate(checkinDate)} - ${formatDate(checkoutDate)}`;
      document.getElementById("summaryNights").textContent = `${nights} night${nights > 1 ? "s" : ""}`;
      document.getElementById("summaryGuests").textContent = `${guests} guest${guests > 1 ? "s" : ""}`;
      document.getElementById("summaryTotal").textContent = formatPrice(totalPrice);

      // Setup WA Confirmation Button Link
      const message = [
        `Hello Niraya, I would like to book a stay:`,
        `- Villa: ${villaType}`,
        `- Check-in: ${formatDate(checkinDate)}`,
        `- Check-out: ${formatDate(checkoutDate)}`,
        `- Duration: ${nights} night${nights > 1 ? "s" : ""}`,
        `- Guests: ${guests} guest${guests > 1 ? "s" : ""}`,
        `- Total: ${formatPrice(totalPrice)}`
      ].join("\n");

      document.getElementById("confirmBookingBtn").href = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;

      modalSuccess.style.display = "flex";
    }, 1200); // 1.2 second beautiful simulation delay
  });
}

if (window.lucide) {
  window.lucide.createIcons();
}
