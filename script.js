/* ============================================================
   script.js — Navigation, scroll behaviour, Pretext layout
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Nav: add .scrolled class after user scrolls down
     ---------------------------------------------------------- */
  var nav = document.querySelector('.site-nav');

  function updateNav() {
    if (window.scrollY > 24) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  if (nav) {
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ----------------------------------------------------------
     Smooth scroll for same-page anchor links
     (CSS scroll-behavior handles modern browsers, this
     catches older ones and allows scroll offset for nav)
     ---------------------------------------------------------- */
  var NAV_HEIGHT = 80;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ----------------------------------------------------------
     Fade-in on scroll (Intersection Observer)
     ---------------------------------------------------------- */
  function initFadeIn() {
    if (!window.IntersectionObserver) return;

    var style = document.createElement('style');
    style.textContent = [
      '.fade-in-ready { opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease; }',
      '.fade-in-ready.visible { opacity: 1; transform: none; }',
      '@media (prefers-reduced-motion: reduce) { .fade-in-ready { opacity: 1; transform: none; transition: none; } }'
    ].join('\n');
    document.head.appendChild(style);

    var candidates = document.querySelectorAll(
      '.step-card, .custom-card, .safety-card, .post-card, .example-label-card, .final-cta-inner'
    );

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    candidates.forEach(function (el, i) {
      el.classList.add('fade-in-ready');
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     Boot
     ---------------------------------------------------------- */
  function init() {
    initFadeIn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
