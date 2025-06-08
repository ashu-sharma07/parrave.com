// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
);

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// Smooth scrolling for navigation links
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
      entry.target.classList.add("fade-in-up");
    }
  });
}, observerOptions);

// Observe elements for animations
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".feature-card, .service-card, .location-card, .testimonial-card, .stat-item",
  );
  animateElements.forEach((el) => observer.observe(el));
});

// Counter animation for statistics
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;

  counters.forEach((counter) => {
    const animate = () => {
      const value =
        +counter.getAttribute("data-target") ||
        +counter.innerText.replace(/[^\d]/g, "");
      const data = +counter.innerText.replace(/[^\d]/g, "") || 0;
      const time = value / speed;

      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        const originalText =
          counter.getAttribute("data-original") || counter.innerText;
        counter.innerText = originalText;
      }
    };

    // Store original text and set target
    const originalText = counter.innerText;
    counter.setAttribute("data-original", originalText);
    counter.setAttribute("data-target", value);
    counter.innerText = "0";
    animate();
  });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".stats");
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});

// Contact form handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      // Simulate form submission (replace with actual endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message
      showNotification(
        "Thank you! Your message has been sent successfully.",
        "success",
      );
      contactForm.reset();
    } catch (error) {
      // Show error message
      showNotification(
        "Sorry, there was an error sending your message. Please try again.",
        "error",
      );
    } finally {
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);

  // Close button functionality
  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => {
      notification.remove();
    });
}

// Add CSS for notifications dynamically
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease-out;
    }
    
    .notification-success {
        background: #10b981;
        color: white;
    }
    
    .notification-error {
        background: #ef4444;
        color: white;
    }
    
    .notification-info {
        background: #3b82f6;
        color: white;
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

// Add notification styles to head
const styleSheet = document.createElement("style");
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Lazy loading for images (if you add images later)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Parallax effect for hero section
function initParallax() {
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }
}

// Initialize all functions when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  lazyLoadImages();
  initParallax();

  // Add active state to current section in navigation
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  window.addEventListener("scroll", () => {
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
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

// Add CSS for active navigation state
const navStyles = `
    .nav-menu a.active {
        color: var(--primary-color);
        position: relative;
    }
    
    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--primary-color);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;

// Add navigation styles to head
const navStyleSheet = document.createElement("style");
navStyleSheet.textContent = navStyles;
document.head.appendChild(navStyleSheet);
