// Mobile Navigation Toggle
const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-pill").forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileToggle) {
      mobileToggle.classList.remove("active");
    }
    navMenu.classList.remove("active");
  });
});

// Modern navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".modern-navbar");
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
      navbar.style.boxShadow = "0 2px 30px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.9)";
      navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    }
  }
});

// Smooth scrolling for anchor links
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

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".feature-card, .location-card, .services-content, .floating-card",
  );

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Add staggered animation for floating cards
  const floatingCards = document.querySelectorAll(".floating-card");
  floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
  });
});

// Form submission handling (for contact forms)
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    alert("Thank you for your message! We will get back to you soon.");
    form.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

// Active navigation link highlighting
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-pill");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (
      link.getAttribute("href") === `#${current}` ||
      (current === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// Add scroll event listener for active nav link
window.addEventListener("scroll", updateActiveNavLink);

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }
});

// Hero animations on load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Parrave Ventures website loaded successfully!");

  // Add loading animation to page
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.3s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);

  // Animate hero stats on scroll
  const heroStats = document.querySelectorAll(".stat-number");
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.textContent);
        animateCounter(target, 0, targetValue, 2000);
        statsObserver.unobserve(target);
      }
    });
  });

  heroStats.forEach((stat) => {
    statsObserver.observe(stat);
  });
});

// Counter animation function
function animateCounter(element, start, end, duration) {
  const startTime = Date.now();
  const originalText = element.textContent;

  const timer = setInterval(() => {
    const now = Date.now();
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const current = Math.floor(start + (end - start) * progress);
    element.textContent = current + originalText.replace(/\d+/, "");

    if (progress === 1) {
      clearInterval(timer);
    }
  }, 16);
}

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
  updateActiveNavLink();
}, 10);

// FAQ Accordion functionality with keyboard support
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      toggleFAQ(item, question);
    });

    // Keyboard support
    question.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFAQ(item, question);
      }
    });
  });

  function toggleFAQ(item, question) {
    const isActive = item.classList.contains("active");

    // Close all FAQ items
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      const btn = faq.querySelector(".faq-question");
      if (btn) {
        btn.setAttribute("aria-expanded", "false");
      }
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add("active");
      question.setAttribute("aria-expanded", "true");
    }
  }
});

// Animated counter for statistics
document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stats-counter .stat-number");

  const animateValue = (element, start, end, duration, suffix = "") => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value.toLocaleString() + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const targetValue = parseInt(
            element.getAttribute("data-target") || element.textContent
          );
          const text = element.textContent;
          const suffix = text.includes("+")
            ? "+"
            : text.includes("%")
            ? "%"
            : "";

          animateValue(element, 0, targetValue, 2000, suffix);
          statsObserver.unobserve(element);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat);
  });
});

// Scroll reveal animations for new sections
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".benefit-item, .process-step, .tech-feature, .category-card, .testimonial-card"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 100);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    revealObserver.observe(el);
  });
});
