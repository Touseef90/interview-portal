// Toggle Answer
function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const isActive = element.classList.contains("active");

  // Close all other answers
  document.querySelectorAll(".question").forEach((q) => {
    if (q !== element) {
      q.classList.remove("active");
      q.nextElementSibling.classList.remove("show");
    }
  });

  if (isActive) {
    element.classList.remove("active");
    answer.classList.remove("show");
  } else {
    element.classList.add("active");
    answer.classList.add("show");
  }
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const toggleBtn = document.querySelector(".theme-toggle");
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  // Save preference
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// Back to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/Hide Back to Top button
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 400) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

// Load saved dark mode preference
window.onload = () => {
  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  if (savedDarkMode) {
    document.body.classList.add("dark");
    document.querySelector(".theme-toggle").textContent = "☀️";
  }
};
