/* ============================================================
   site.js — あなたのまちの映画祭 / Your Town Film Festival
   Shared front-end behavior (reused across Phase-1 pages):
   - header scroll state
   - scroll-reveal (reduced-motion / no-IO safe)
   - mobile nav overlay
   - program horizontal scroller arrows
   ============================================================ */
(function () {
  'use strict';

  /* ---- Header scroll state ---- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Scroll-reveal ----
     Fail-safe: if the user prefers reduced motion, or IntersectionObserver
     is unavailable, we never add the `pre` class, so content stays fully
     visible. (Matches the prototype's no-JS / reduced-motion behavior.) */
  var reveals = document.querySelectorAll('[data-reveal]');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    reveals.forEach(function (el) { el.classList.add('pre'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var d = e.target.getAttribute('data-delay');
          if (d) e.target.style.animationDelay = d;
          e.target.classList.remove('pre');
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Mobile nav overlay ---- */
  var mnav = document.getElementById('mNav');
  var burger = document.querySelector('[data-burger]');
  function openMenu() { if (mnav) mnav.classList.add('is-open'); }
  function closeMenu() { if (mnav) mnav.classList.remove('is-open'); }
  function toggleMenu() { if (mnav) mnav.classList.toggle('is-open'); }
  if (burger) burger.addEventListener('click', toggleMenu);
  if (mnav) {
    mnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }
  // Logo also closes the menu when it's open.
  var logoLink = document.querySelector('[data-logo]');
  if (logoLink) logoLink.addEventListener('click', closeMenu);

  /* ---- Program horizontal scroller ----
     Step = one card width + gap, measured from the DOM so it stays
     correct as the editorial card width is fluid (min(82vw,420px)). */
  var scroller = document.getElementById('pgmScroll');
  function stepSize() {
    if (!scroller) return 440;
    var card = scroller.querySelector('.filmcard');
    if (!card) return 440;
    var gap = parseFloat(getComputedStyle(scroller).columnGap) || 28;
    return card.getBoundingClientRect().width + gap;
  }
  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!scroller) return;
      var dir = btn.getAttribute('data-scroll') === 'prev' ? -1 : 1;
      scroller.scrollBy({ left: dir * stepSize(), behavior: 'smooth' });
    });
  });
})();
