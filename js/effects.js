/* ═══════════════════════════════════════════════════════
   ElecPro Effects Engine v1.0
   3D Hero · Particles · Cursor · Tilt · Ripple · Transitions
   ═══════════════════════════════════════════════════════ */
;(function() {
  'use strict';

  // ── CONFIG ──
  const FX = {
    hero3d:     true,
    particles:  true,
    cursor:     true,
    tilt:       true,
    ripple:     true,
    magnetic:   true,
    counters:   true,
    heroText:   true,
    transitions: true,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isMobile: window.innerWidth <= 900
  };

  // Skip heavy effects if reduced motion
  if (FX.reducedMotion) {
    FX.hero3d = false;
    FX.particles = false;
    FX.cursor = false;
    FX.heroText = false;
  }

  // ══════════════════════════════════════════
  // 3D HERO BACKGROUND (Three.js)
  // ══════════════════════════════════════════
  let heroScene = null;

  class HeroGrid {
    constructor(canvas) {
      if (!window.THREE) return;
      this.canvas = canvas;
      this.mouse = { x: 0, y: 0 };
      this.targetMouse = { x: 0, y: 0 };
      this.clock = new THREE.Clock();
      this.pulses = [];
      this.active = true;
      this.init();
    }

    init() {
      const T = THREE;
      const W = this.canvas.clientWidth || window.innerWidth;
      const H = this.canvas.clientHeight || 600;

      // Scene
      this.scene = new T.Scene();
      this.scene.fog = new T.FogExp2(0x0b0f1a, 0.018);

      // Camera
      this.camera = new T.PerspectiveCamera(55, W / H, 0.1, 200);
      this.camera.position.set(0, 0, 45);

      // Renderer
      this.renderer = new T.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(W, H);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setClearColor(0x000000, 0);

      this.createNodes();
      this.createConnections();
      this.createPulses();
      this.animate();

      // Mouse tracking
      window.addEventListener('mousemove', (e) => {
        this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      });

      window.addEventListener('resize', () => this.onResize());
    }

    createNodes() {
      const T = THREE;
      const positions = [];
      const colors = [];
      const sizes = [];
      this.nodePositions = [];

      const count = FX.isMobile ? 120 : 300;
      const spread = FX.isMobile ? 40 : 60;

      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * spread;
        const y = (Math.random() - 0.5) * spread * 0.6;
        const z = (Math.random() - 0.5) * 30;

        positions.push(x, y, z);
        this.nodePositions.push({ x, y, z, ox: x, oy: y, oz: z });

        // Color: amber or blue
        const isAccent = Math.random() > 0.6;
        colors.push(
          isAccent ? 0.96 : 0.29,
          isAccent ? 0.65 : 0.56,
          isAccent ? 0.14 : 0.85
        );
        sizes.push(Math.random() * 2 + 0.8);
      }

      const geo = new T.BufferGeometry();
      geo.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
      geo.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
      geo.setAttribute('size', new T.Float32BufferAttribute(sizes, 1));

      // Custom shader for glow points
      const mat = new T.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uPixelRatio: { value: this.renderer.getPixelRatio() }
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float uTime;
          uniform float uPixelRatio;
          void main() {
            vColor = color;
            vec3 pos = position;
            pos.y += sin(uTime * 0.5 + position.x * 0.3) * 0.3;
            pos.x += cos(uTime * 0.3 + position.z * 0.2) * 0.2;
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * uPixelRatio * (30.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float glow = 1.0 - smoothstep(0.0, 0.5, d);
            glow = pow(glow, 1.5);
            gl_FragColor = vec4(vColor, glow * 0.7);
          }
        `,
        transparent: true,
        blending: T.AdditiveBlending,
        depthWrite: false
      });

      this.nodeSystem = new T.Points(geo, mat);
      this.scene.add(this.nodeSystem);
    }

    createConnections() {
      const T = THREE;
      const positions = [];
      const colors = [];
      this.connectionPairs = [];

      const maxDist = FX.isMobile ? 8 : 7;
      const nodes = this.nodePositions;

      for (let i = 0; i < nodes.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < nodes.length && connections < 3; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDist) {
            positions.push(
              nodes[i].x, nodes[i].y, nodes[i].z,
              nodes[j].x, nodes[j].y, nodes[j].z
            );
            const a = 0.06 + Math.random() * 0.06;
            colors.push(0.96, 0.65, 0.14, 0.29, 0.56, 0.85);
            this.connectionPairs.push({ from: i, to: j, dist });
            connections++;
          }
        }
      }

      const geo = new T.BufferGeometry();
      geo.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
      geo.setAttribute('color', new T.Float32BufferAttribute(colors, 3));

      const mat = new T.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.08,
        blending: T.AdditiveBlending,
        depthWrite: false
      });

      this.lineSystem = new T.LineSegments(geo, mat);
      this.scene.add(this.lineSystem);
    }

    createPulses() {
      const T = THREE;
      const count = FX.isMobile ? 5 : 12;

      for (let i = 0; i < count; i++) {
        const geo = new T.SphereGeometry(0.12, 8, 8);
        const mat = new T.MeshBasicMaterial({
          color: Math.random() > 0.5 ? 0xf5a623 : 0x4a90d9,
          transparent: true,
          opacity: 0.8,
          blending: T.AdditiveBlending
        });
        const mesh = new T.Mesh(geo, mat);
        mesh.visible = false;

        // Glow sprite
        const spriteMat = new T.SpriteMaterial({
          color: mat.color,
          transparent: true,
          opacity: 0.3,
          blending: T.AdditiveBlending
        });
        const sprite = new T.Sprite(spriteMat);
        sprite.scale.set(2, 2, 1);
        mesh.add(sprite);

        this.scene.add(mesh);

        this.pulses.push({
          mesh,
          connection: null,
          progress: 0,
          speed: 0.005 + Math.random() * 0.01,
          delay: Math.random() * 200
        });
      }
    }

    updatePulses(frame) {
      const nodes = this.nodePositions;
      const conns = this.connectionPairs;
      if (!conns.length) return;

      this.pulses.forEach(p => {
        if (frame < p.delay) return;

        if (!p.connection || p.progress >= 1) {
          p.connection = conns[Math.floor(Math.random() * conns.length)];
          p.progress = 0;
          p.mesh.visible = true;
        }

        p.progress += p.speed;
        const from = nodes[p.connection.from];
        const to = nodes[p.connection.to];

        p.mesh.position.set(
          from.x + (to.x - from.x) * p.progress,
          from.y + (to.y - from.y) * p.progress,
          from.z + (to.z - from.z) * p.progress
        );

        // Fade at edges
        const fade = Math.sin(p.progress * Math.PI);
        p.mesh.material.opacity = fade * 0.9;
      });
    }

    animate() {
      if (!this.active) return;
      requestAnimationFrame(() => this.animate());

      const time = this.clock.getElapsedTime();
      const frame = Math.floor(time * 60);

      // Mouse damping
      this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
      this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

      // Camera parallax
      this.camera.position.x = this.mouse.x * 3;
      this.camera.position.y = this.mouse.y * 2;
      this.camera.lookAt(0, 0, 0);

      // Slow rotation
      this.nodeSystem.rotation.y = time * 0.02;
      this.lineSystem.rotation.y = time * 0.02;

      // Update node shader
      this.nodeSystem.material.uniforms.uTime.value = time;

      // Update pulses
      this.updatePulses(frame);

      this.renderer.render(this.scene, this.camera);
    }

    onResize() {
      const W = this.canvas.clientWidth || window.innerWidth;
      const H = this.canvas.clientHeight || 600;
      this.camera.aspect = W / H;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(W, H);
    }

    destroy() {
      this.active = false;
      this.renderer.dispose();
      this.scene.clear();
    }
  }

  // ══════════════════════════════════════════
  // CANVAS 2D PARTICLE SYSTEM
  // ══════════════════════════════════════════
  let particleSystem = null;

  class ElectricParticles {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.active = true;
      this.resize();
      this.init();
      this.animate();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.w = this.canvas.clientWidth || window.innerWidth;
      this.h = this.canvas.clientHeight || 600;
      this.canvas.width = this.w * Math.min(window.devicePixelRatio, 2);
      this.canvas.height = this.h * Math.min(window.devicePixelRatio, 2);
      this.ctx.scale(Math.min(window.devicePixelRatio, 2), Math.min(window.devicePixelRatio, 2));
    }

    init() {
      const count = FX.isMobile ? 30 : 60;
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
          color: Math.random() > 0.5 ? '245,166,35' : '74,144,217',
          pulse: Math.random() * Math.PI * 2
        });
      }
    }

    animate() {
      if (!this.active) return;
      requestAnimationFrame(() => this.animate());

      this.ctx.clearRect(0, 0, this.w, this.h);

      // Update and draw particles
      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        // Wrap around
        if (p.x < 0) p.x = this.w;
        if (p.x > this.w) p.x = 0;
        if (p.y < 0) p.y = this.h;
        if (p.y > this.h) p.y = 0;

        const alpha = p.alpha * (0.6 + Math.sin(p.pulse) * 0.4);

        // Glow
        this.ctx.beginPath();
        const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `rgba(${p.color},${alpha})`);
        gradient.addColorStop(1, `rgba(${p.color},0)`);
        this.ctx.fillStyle = gradient;
        this.ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        this.ctx.fill();

        // Core
        this.ctx.beginPath();
        this.ctx.fillStyle = `rgba(${p.color},${alpha * 1.5})`;
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      });

      // Draw connections between close particles
      const maxDist = 100;
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.08;
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(245,166,35,${alpha})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
            this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
            this.ctx.stroke();
          }
        }
      }
    }

    destroy() {
      this.active = false;
    }
  }

  // ══════════════════════════════════════════
  // ANIMATED COUNTERS
  // ══════════════════════════════════════════
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-val');
    counters.forEach(el => {
      const target = parseInt(el.textContent);
      if (isNaN(target) || el.dataset.counted) return;
      el.dataset.counted = 'true';

      const duration = 1500;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
    });
  }

  // ══════════════════════════════════════════
  // HERO TEXT ANIMATION
  // ══════════════════════════════════════════
  function animateHeroText() {
    const h1 = document.querySelector('.hero-h1');
    if (!h1 || h1.dataset.animated) return;
    h1.dataset.animated = 'true';

    const html = h1.innerHTML;
    // Wrap each character in a span, preserving HTML tags like <em>
    let charIndex = 0;
    let newHtml = '';
    let inTag = false;

    for (let i = 0; i < html.length; i++) {
      const char = html[i];
      if (char === '<') { inTag = true; newHtml += char; continue; }
      if (char === '>') { inTag = false; newHtml += char; continue; }
      if (inTag) { newHtml += char; continue; }
      if (char === ' ') { newHtml += ' '; charIndex++; continue; }

      const delay = charIndex * 0.04;
      newHtml += `<span class="char" style="animation-delay:${delay}s">${char}</span>`;
      charIndex++;
    }

    h1.innerHTML = newHtml;
  }

  // ══════════════════════════════════════════
  // CUSTOM CURSOR
  // ══════════════════════════════════════════
  function initCursor() {
    if (FX.isMobile || !FX.cursor) return;

    const cursor = document.getElementById('custom-cursor');
    const glow = document.getElementById('cursor-glow');
    if (!cursor || !glow) return;

    let cx = 0, cy = 0;
    let gcx = 0, gcy = 0;

    document.addEventListener('mousemove', (e) => {
      cx = e.clientX;
      cy = e.clientY;
      cursor.classList.add('visible');
      glow.classList.add('visible');
    });

    document.addEventListener('mouseleave', () => {
      cursor.classList.remove('visible');
      glow.classList.remove('visible');
    });

    // Hover detection for interactive elements
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .card, .sc, .sp, .path-card, .topic-row, .nav-item, .nav-sub, input, select')) {
        cursor.classList.add('hovering');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .card, .sc, .sp, .path-card, .topic-row, .nav-item, .nav-sub, input, select')) {
        cursor.classList.remove('hovering');
      }
    });

    // Smooth follow
    function updateCursor() {
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';

      gcx += (cx - gcx) * 0.12;
      gcy += (cy - gcy) * 0.12;
      glow.style.left = gcx + 'px';
      glow.style.top = gcy + 'px';

      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);
  }

  // ══════════════════════════════════════════
  // PAGE TRANSITIONS
  // ══════════════════════════════════════════
  function initTransitions() {
    if (!FX.transitions) return;

    const originalNavigate = window.navigateTo;
    if (!originalNavigate) return;

    window.navigateTo = function(page, extra, push) {
      const main = document.getElementById('main');
      if (!main || !window.gsap || page === window.__currentPage) {
        originalNavigate(page, extra, push);
        return;
      }

      window.__currentPage = page;

      gsap.to(main, {
        opacity: 0,
        y: 8,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          originalNavigate(page, extra, push);

          // Re-init effects for new page
          requestAnimationFrame(() => {
            initTiltForPage();
            initMagneticForPage();
            initCardMouseTrack();

            // Trigger scroll reveals
            if (window.ElecAnims) window.ElecAnims.initPage();

            // Page-specific inits
            if (page === 'home') {
              initHeroScene();
              if (FX.heroText) animateHeroText();
              if (FX.counters) {
                setTimeout(animateCounters, 300);
              }
            } else {
              destroyHeroScene();
            }
          });

          gsap.fromTo(main,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
          );
        }
      });
    };
  }

  // ══════════════════════════════════════════
  // CARD 3D TILT (vanilla-tilt.js)
  // ══════════════════════════════════════════
  async function initTiltForPage() {
    if (!FX.tilt || FX.isMobile) return;

    if (!window.VanillaTilt) {
      if (window.loadScript) {
        try {
          await window.loadScript('js/vanilla-tilt.min.js');
        } catch (e) { return; }
      } else return;
    }

    // Destroy existing tilt instances
    document.querySelectorAll('[data-tilt-init]').forEach(el => {
      if (el.vanillaTilt) el.vanillaTilt.destroy();
      el.removeAttribute('data-tilt-init');
    });

    // Init tilt on cards
    const targets = document.querySelectorAll('.card, .sc, .sp, .path-card, .stat-card');
    targets.forEach(el => {
      VanillaTilt.init(el, {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.03,
        perspective: 1200,
        gyroscope: false
      });
      el.setAttribute('data-tilt-init', 'true');
    });
  }

  // ══════════════════════════════════════════
  // CARD MOUSE TRACKING (for radial glow)
  // ══════════════════════════════════════════
  function initCardMouseTrack() {
    if (FX.isMobile) return;
    document.querySelectorAll('.card').forEach(card => {
      if (card.dataset.mouseTrack) return;
      card.dataset.mouseTrack = 'true';
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
      });
    });
  }

  // ══════════════════════════════════════════
  // RIPPLE EFFECT
  // ══════════════════════════════════════════
  function initRipple() {
    if (!FX.ripple) return;

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn');
      if (!btn) return;

      const existing = btn.querySelector('.ripple-effect');
      if (existing) existing.remove();

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      btn.appendChild(ripple);

      ripple.addEventListener('animationend', () => ripple.remove());
    });
  }

  // ══════════════════════════════════════════
  // MAGNETIC BUTTONS
  // ══════════════════════════════════════════
  function initMagneticForPage() {
    if (!FX.magnetic || FX.isMobile) return;

    document.querySelectorAll('.btn-primary').forEach(btn => {
      if (btn.dataset.magnetic) return;
      btn.dataset.magnetic = 'true';
      btn.classList.add('magnetic');

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ══════════════════════════════════════════
  // HERO SCENE LIFECYCLE
  // ══════════════════════════════════════════
  async function initHeroScene() {
    if (!FX.hero3d) {
      initParticleCanvas();
      return;
    }

    if (!window.THREE) {
      // Lazy load Three.js for Hero
      try {
        if (window.loadScript) {
          await window.loadScript('js/three.min.js');
        } else {
          initParticleCanvas();
          return;
        }
      } catch (e) {
        console.warn('Hero 3D: Three.js load failed, falling back to 2D particles.');
        initParticleCanvas();
        return;
      }
    }

    const canvas = document.getElementById('hero-canvas');
    if (!canvas || heroScene) {
      initParticleCanvas();
      return;
    }

    heroScene = new HeroGrid(canvas);
    initParticleCanvas();
  }

  function initParticleCanvas() {
    if (!FX.particles) return;
    const canvas = document.getElementById('particle-canvas');
    if (!canvas || particleSystem) return;
    particleSystem = new ElectricParticles(canvas);
  }

  function destroyHeroScene() {
    if (heroScene) {
      heroScene.destroy();
      heroScene = null;
    }
    if (particleSystem) {
      particleSystem.destroy();
      particleSystem = null;
    }
  }

  // ══════════════════════════════════════════
  // MASTER INIT
  // ══════════════════════════════════════════
  function init() {
    // Cursor (always on)
    initCursor();

    // Ripple (event delegation — once)
    initRipple();

    // Page transitions (wraps navigateTo — once)
    initTransitions();

    // Initial page setup
    requestAnimationFrame(() => {
      // If on home page, init hero
      if (document.getElementById('page-home')?.classList.contains('active')) {
        initHeroScene();
        if (FX.heroText) animateHeroText();
        if (FX.counters) setTimeout(animateCounters, 400);
      }

      initTiltForPage();
      initMagneticForPage();
      initCardMouseTrack();
    });
  }

  // ── EXPOSE ──
  window.ElecFX = {
    init,
    initHero: initHeroScene,
    destroyHero: destroyHeroScene,
    initTilt: initTiltForPage,
    initMagnetic: initMagneticForPage,
    initCardMouse: initCardMouseTrack,
    animateCounters,
    animateHeroText
  };

  // Auto-init after DOM + scripts
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 100));
  } else {
    setTimeout(init, 100);
  }

})();
