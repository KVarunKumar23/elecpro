/* ═══════════════════════════════════════════════════
   ElecPro Scroll Animation Engine v1.0
   GSAP ScrollTrigger · Reveals · Stagger · Progress
   ═══════════════════════════════════════════════════ */
;(function() {
  'use strict';

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (REDUCED) return;

  // ══════════════════════════════════════════
  // SCROLL PROGRESS BAR
  // ══════════════════════════════════════════
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    function update() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      bar.style.transform = `scaleX(${progress})`;
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // ══════════════════════════════════════════
  // INTERSECTION OBSERVER REVEAL SYSTEM
  // ══════════════════════════════════════════
  let observer = null;

  function setupRevealObserver() {
    if (observer) observer.disconnect();

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseFloat(el.dataset.revealDelay) || 0;

          if (delay) {
            setTimeout(() => el.classList.add('revealed'), delay * 1000);
          } else {
            el.classList.add('revealed');
          }
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '50px 0px -20px 0px'
    });
  }

  // ══════════════════════════════════════════
  // GSAP SCROLLTRIGGER ENHANCEMENTS
  // Safe animation helper that won't leave elements invisible
  // ══════════════════════════════════════════

  function safeReveal(targets, fromVars, triggerEl) {
    if (!window.gsap || !window.ScrollTrigger) return;

    const elements = typeof targets === 'string' ? gsap.utils.toArray(targets) : 
      (targets instanceof NodeList ? Array.from(targets) : 
      (Array.isArray(targets) ? targets : [targets]));
    
    if (!elements.length) return;

    const trigger = triggerEl || elements[0];

    // Check if trigger is already in viewport — if so, animate immediately
    const rect = (trigger.getBoundingClientRect ? trigger : elements[0]).getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight + 100;

    if (isVisible) {
      // Already in view — just animate immediately
      gsap.fromTo(elements, 
        { ...fromVars, immediateRender: true },
        { 
          opacity: 1, x: 0, y: 0, scale: 1,
          duration: fromVars.duration || 0.5,
          stagger: fromVars.stagger || 0,
          delay: fromVars.delay || 0,
          ease: fromVars.ease || 'power2.out'
        }
      );
    } else {
      // Below viewport — use ScrollTrigger
      gsap.fromTo(elements,
        { ...fromVars },
        {
          opacity: 1, x: 0, y: 0, scale: 1,
          duration: fromVars.duration || 0.5,
          stagger: fromVars.stagger || 0,
          ease: fromVars.ease || 'power2.out',
          scrollTrigger: {
            trigger: trigger,
            start: 'top 95%',
            once: true
          }
        }
      );
    }
  }

  function initGSAPScrollAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return false;

    gsap.registerPlugin(ScrollTrigger);

    // Stat cards
    document.querySelectorAll('.stat-card').forEach((card, i) => {
      safeReveal(card, { y: 25, opacity: 0, duration: 0.45, delay: i * 0.06 });
    });

    // Sector cards
    document.querySelectorAll('.sector-grid').forEach(grid => {
      const cards = grid.querySelectorAll('.sc');
      safeReveal(cards, { y: 30, opacity: 0, duration: 0.45, stagger: 0.08 }, grid);
    });

    // Card grids
    document.querySelectorAll('.card-grid').forEach(grid => {
      const cards = grid.querySelectorAll('.card');
      safeReveal(cards, { y: 25, opacity: 0, scale: 0.97, duration: 0.4, stagger: 0.06 }, grid);
    });

    // Path grid
    document.querySelectorAll('.path-grid').forEach(grid => {
      const cards = grid.querySelectorAll('.path-card');
      safeReveal(cards, { x: -15, opacity: 0, duration: 0.4, stagger: 0.08 }, grid);
    });

    // Special grid
    document.querySelectorAll('.special-grid').forEach(grid => {
      const cards = grid.querySelectorAll('.sp');
      safeReveal(cards, { y: 15, opacity: 0, scale: 0.95, duration: 0.35, stagger: 0.06, ease: 'back.out(1.2)' }, grid);
    });

    // Section labels
    document.querySelectorAll('.slabel').forEach(label => {
      safeReveal(label, { x: -10, opacity: 0, duration: 0.35 });
    });

    // Topic rows
    document.querySelectorAll('.topic-list').forEach(list => {
      const rows = list.querySelectorAll('.topic-row');
      safeReveal(rows, { x: -10, opacity: 0, duration: 0.3, stagger: 0.04 }, list);
    });

    // Page headers
    document.querySelectorAll('.page-hdr').forEach(hdr => {
      safeReveal(hdr, { y: 15, opacity: 0, duration: 0.45 });
    });

    // Home hero — always immediate
    const hero = document.querySelector('.home-hero');
    if (hero) {
      gsap.from(hero, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    }

    // Start card
    const startCard = document.querySelector('.start-card');
    if (startCard) {
      safeReveal(startCard, { y: 20, opacity: 0, duration: 0.45, delay: 0.2 });
    }

    // Stats row
    const statsRow = document.querySelector('.stats-row');
    if (statsRow) {
      safeReveal(statsRow, { y: 20, opacity: 0, duration: 0.4 });
    }

    return true;
  }

  // ══════════════════════════════════════════
  // PAGE INIT — called after each navigation
  // ══════════════════════════════════════════
  function initPage() {
    // Clean up previous ScrollTrigger instances
    if (window.ScrollTrigger) {
      ScrollTrigger.getAll().forEach(st => st.kill());
    }

    // Setup reveal observer
    setupRevealObserver();

    // Short delay to let DOM settle after dynamic render
    setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => {
        observer.observe(el);
      });

      // Init stagger grids
      document.querySelectorAll('.stagger-grid:not(.revealed)').forEach(grid => {
        const gridObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              gridObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.05 });
        gridObserver.observe(grid);
      });

      // GSAP animations
      initGSAPScrollAnimations();

      // Refresh ScrollTrigger after all setup
      if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    }, 50);
  }

  // ══════════════════════════════════════════
  // MASTER INIT
  // ══════════════════════════════════════════
  function init() {
    initScrollProgress();
    initPage();
  }

  // ── EXPOSE ──
  window.ElecAnims = {
    init,
    initPage,
    initScrollProgress
  };

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 200));
  } else {
    setTimeout(init, 200);
  }

})();
