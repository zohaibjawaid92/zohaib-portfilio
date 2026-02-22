(function () {
  'use strict';

  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const yearEl = document.getElementById('year');

  // Current year in footer
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Project category filters
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (projectFilterBtns.length && projectCards.length) {
    projectFilterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        projectFilterBtns.forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        projectCards.forEach(function (card) {
          var category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // Optional: subtle header background on scroll
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(12, 12, 15, 0.95)';
      } else {
        header.style.background = 'rgba(12, 12, 15, 0.85)';
      }
    });
  }

})();
