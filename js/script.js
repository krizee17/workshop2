// Mobile Menu Toggle
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
  // Toggle the CSS class (controls visibility via CSS)
  navLinks.classList.toggle("open");

  // Update the button text/icon for accessibility
  const isExpanded = navLinks.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isExpanded);
  menuButton.innerHTML = isExpanded ? "✕" : "☰";
}

// Add the event handler
menuButton.addEventListener("click", toggleMenu);

// Close the menu when a link inside is clicked (for mobile UX)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      toggleMenu();
    }
  });
});

// Scroll Progress Indicator
const scrollProgress = document.getElementById("scroll-progress");

function updateScrollProgress() {
  // Calculate scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  // Update progress bar width
  scrollProgress.style.width = scrollPercentage + "%";
}

// Listen for scroll events
window.addEventListener("scroll", updateScrollProgress);

// Form Submission Handling
const contactForm = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");

if (contactForm && messageDiv) {
  contactForm.addEventListener("submit", function (event) {
    // Stop the browser from submitting the form and refreshing the page
    event.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const messageInput = document.getElementById("message").value.trim();

    if (nameInput === "" || emailInput === "" || messageInput === "") {
      messageDiv.textContent = "Please fill out all required fields.";
      messageDiv.style.color = "red";
      messageDiv.style.backgroundColor = "#ffe6e6";
      messageDiv.style.display = "block";
    } else {
      // Successful mock submission
      messageDiv.textContent =
        "Thank you for your message! I will be in touch shortly.";
      messageDiv.style.color = "green";
      messageDiv.style.backgroundColor = "#e6ffe6";
      messageDiv.style.display = "block";
      contactForm.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        messageDiv.style.display = "none";
      }, 5000);
    }
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
