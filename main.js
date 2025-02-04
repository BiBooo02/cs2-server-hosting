document.addEventListener("DOMContentLoaded", () => {
  // Feature Card Animation
  const cards = document.querySelectorAll(".feature-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((card) => observer.observe(card));

  // Pricing Card Animation
  const pricingCards = document.querySelectorAll(".pricing-card");
  function handleScroll() {
    pricingCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardPosition < windowHeight - 50) {
        card.classList.add("show");
      }
    });
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run on load in case already in view

  // FAQ Toggle
  document.querySelectorAll(".faq-question").forEach((item) => {
    item.addEventListener("click", () => {
      const faqItem = item.parentElement;
      faqItem.classList.toggle("active");
    });
  });
});

// Mobile Menu Toggle
function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.toggle("active");
}
