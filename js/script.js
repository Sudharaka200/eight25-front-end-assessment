document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animation = element.getAttribute("data-animate");
          element.classList.add("animate__animated", animation);
          element.style.opacity = 1; // Make visible
          observer.unobserve(element); // Stop observing once animated
        }
      });
    },
    {
      threshold: 0.6, // Trigger when 20% of the element is visible
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
});