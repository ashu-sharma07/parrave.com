/* ============================================================
   Parrave Ventures — Site interactions
   ============================================================ */

(function () {
  'use strict';

  // ---------- Year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Sticky nav state ----------
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 12) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile menu ----------
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');

  function closeMobile() {
    if (!nav) return;
    nav.classList.remove('is-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    if (navMobile) navMobile.setAttribute('aria-hidden', 'true');
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      if (navMobile) navMobile.setAttribute('aria-hidden', String(!isOpen));
    });
  }

  // Close mobile menu when clicking a link inside it
  if (navMobile) {
    navMobile.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') closeMobile();
    });
  }

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    // Fallback
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Contact form: role pills + prefill from CTA buttons ----------
  const pillButtons = document.querySelectorAll('.pill-btn[data-role]');
  const roleField = document.getElementById('roleField');
  const messageLabel = document.getElementById('messageLabel');
  const messageField = document.getElementById('message');

  const ROLE_COPY = {
    location: {
      label: 'Tell us about your location',
      placeholder: 'Footfall, type of institution, city, available space...',
    },
    brand: {
      label: 'What would you like to do?',
      placeholder: 'Coil rentals, ad campaigns, sampling, product launch...',
    },
    investor: {
      label: 'Tell us about your fund / thesis',
      placeholder: 'Stage, ticket size, sectors of interest...',
    },
    other: {
      label: 'How can we help?',
      placeholder: 'A short note about what you’re looking for...',
    },
  };

  function setRole(role) {
    if (!ROLE_COPY[role]) role = 'other';
    if (roleField) roleField.value = role;
    if (messageLabel) messageLabel.textContent = ROLE_COPY[role].label;
    if (messageField) messageField.placeholder = ROLE_COPY[role].placeholder;

    pillButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.role === role);
    });
  }

  pillButtons.forEach((btn) => {
    btn.addEventListener('click', () => setRole(btn.dataset.role));
  });

  // Any link with data-prefill jumps to contact and pre-selects the role
  document.querySelectorAll('[data-prefill]').forEach((link) => {
    link.addEventListener('click', () => {
      const role = link.getAttribute('data-prefill');
      setRole(role);
      // Slight delay so smooth-scroll lands cleanly after state change
      setTimeout(() => {
        const nameField = document.getElementById('name');
        if (nameField) nameField.focus({ preventScroll: true });
      }, 600);
    });
  });

  // ---------- Form submit ----------
  // The form supports two delivery modes:
  //
  // 1) Backend mode (recommended): set the form's `action` attribute in
  //    index.html to your Formspree / Web3Forms / Resend endpoint. The
  //    form will POST JSON via fetch and show a success message.
  //
  // 2) Mailto fallback: if no `action` is set (or it equals "#"), the
  //    handler opens the user's email client pre-filled to info@parrave.com.
  //
  // To switch to backend mode, change the <form> tag in index.html to:
  //   <form id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST" novalidate>
  // and that's it — no JS changes needed.

  const CONTACT_EMAIL = 'info@parrave.com';
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  function showSuccess(msg) {
    if (!formNote) return;
    formNote.hidden = false;
    formNote.textContent = msg || 'Thanks — we’ll be in touch within 48 hours.';
    formNote.classList.remove('is-error');
  }
  function showError(msg) {
    if (!formNote) return;
    formNote.hidden = false;
    formNote.textContent = msg;
    formNote.classList.add('is-error');
  }
  function lockForm(locked) {
    if (!form) return;
    form.querySelectorAll('input, textarea, button').forEach((el) => (el.disabled = locked));
  }

  function buildMailto(data) {
    const subject = `[Parrave website] ${data.role || 'general'} inquiry — ${data.name || ''}`.trim();
    const lines = [
      `Role: ${data.role || ''}`,
      `Name: ${data.name || ''}`,
      `Email: ${data.email || ''}`,
      `Company / Institution: ${data.org || ''}`,
      '',
      'Message:',
      data.message || '',
    ];
    const body = lines.join('\n');
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const action = (form.getAttribute('action') || '').trim();
      const hasBackend = action && action !== '#' && /^https?:\/\//.test(action);

      // ----- Mode 2: mailto fallback -----
      if (!hasBackend) {
        window.location.href = buildMailto(data);
        showSuccess('Opening your email app — please send the pre-filled message to complete your inquiry.');
        return;
      }

      // ----- Mode 1: real backend POST -----
      lockForm(true);
      showSuccess('Sending…');
      try {
        const res = await fetch(action, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Network response was not ok');
        showSuccess('Thanks — we’ll be in touch within 48 hours.');
      } catch (err) {
        console.warn('[Parrave] Form submit failed, falling back to mailto:', err);
        lockForm(false);
        window.location.href = buildMailto(data);
        showError('Couldn’t reach our server. We’ve opened your email app as a fallback.');
      }
    });
  }

  // ---------- Smooth-scroll offset for sticky header ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
      closeMobile();
    });
  });
})();
