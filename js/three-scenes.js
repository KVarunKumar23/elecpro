/* ═══════════════════════════════════════════════════
   ElecPro — three-scenes.js
   Phase 5: Interactive 3D Diagrams & Visualizations
   Requires Three.js loaded from CDN
   ═══════════════════════════════════════════════════ */
;(function() {
  'use strict';

  // ── SCENE REGISTRY ──
  // Maps topic svgIds to 3D scene builder functions
  const SCENE_REGISTRY = {};

  // ── SHARED UTILITIES ──
  const T = () => window.THREE;

  function createMaterial(color, opts = {}) {
    return new (T().MeshStandardMaterial)({
      color,
      roughness: opts.roughness ?? 0.4,
      metalness: opts.metalness ?? 0.6,
      transparent: opts.transparent ?? false,
      opacity: opts.opacity ?? 1,
      ...opts
    });
  }

  function createGlowMaterial(color, intensity = 0.6) {
    return new (T().MeshBasicMaterial)({
      color,
      transparent: true,
      opacity: intensity,
      blending: T().AdditiveBlending
    });
  }

  function addLighting(scene) {
    const amb = new (T().AmbientLight)(0xffffff, 0.4);
    scene.add(amb);

    const dir = new (T().DirectionalLight)(0xffffff, 0.8);
    dir.position.set(5, 8, 5);
    dir.castShadow = true;
    scene.add(dir);

    const fill = new (T().DirectionalLight)(0x4a90d9, 0.3);
    fill.position.set(-3, 2, -4);
    scene.add(fill);

    const rim = new (T().PointLight)(0xf5a623, 0.5, 20);
    rim.position.set(0, 5, -5);
    scene.add(rim);

    return { amb, dir, fill, rim };
  }

  function setupOrbitControls(camera, domElement) {
    // Simple manual orbit (no OrbitControls dependency)
    let isDragging = false;
    let prevX = 0, prevY = 0;
    let rotX = 0.3, rotY = -0.5;
    let targetRotX = rotX, targetRotY = rotY;

    domElement.addEventListener('mousedown', e => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      domElement.style.cursor = 'grabbing';
    });

    domElement.addEventListener('mousemove', e => {
      if (!isDragging) return;
      targetRotY += (e.clientX - prevX) * 0.008;
      targetRotX += (e.clientY - prevY) * 0.008;
      targetRotX = Math.max(-Math.PI/3, Math.min(Math.PI/3, targetRotX));
      prevX = e.clientX;
      prevY = e.clientY;
    });

    domElement.addEventListener('mouseup', () => {
      isDragging = false;
      domElement.style.cursor = 'grab';
    });

    domElement.addEventListener('mouseleave', () => {
      isDragging = false;
      domElement.style.cursor = 'grab';
    });

    domElement.style.cursor = 'grab';

    return {
      update(pivot) {
        rotX += (targetRotX - rotX) * 0.08;
        rotY += (targetRotY - rotY) * 0.08;
        pivot.rotation.x = rotX;
        pivot.rotation.y = rotY;
      },
      reset() {
        targetRotX = 0.3;
        targetRotY = -0.5;
      }
    };
  }

  // ── SCENE CLASS ──
  class InteractiveScene {
    constructor(container, sceneId) {
      if (!T()) return;
      this.container = container;
      this.sceneId = sceneId;
      this.active = true;
      this.animationCallbacks = [];
      this.labels = [];
      this.tooltip = null;
      this.init();
    }

    init() {
      const W = this.container.clientWidth;
      const H = Math.min(400, window.innerHeight * 0.45);
      // Don't fix container height - let it auto-size to include controls

      // Scene
      this.scene = new (T().Scene)();
      this.scene.fog = new (T().FogExp2)(0x0b0f1a, 0.015);

      // Camera
      this.camera = new (T().PerspectiveCamera)(50, W / H, 0.1, 100);
      this.camera.position.set(0, 3, 8);

      // Renderer
      const canvas = document.createElement('canvas');
      this.renderer = new (T().WebGLRenderer)({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(W, H);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = T().PCFSoftShadowMap;
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = H + 'px';
      this.container.appendChild(canvas);

      // Pivot for orbit
      this.pivot = new (T().Group)();
      this.scene.add(this.pivot);

      // Lights
      this.lights = addLighting(this.scene);

      // Orbit
      this.orbit = setupOrbitControls(this.camera, canvas);

      // Tooltips
      this.createTooltip();

      // Grid floor
      this.addGridFloor();

      // Resize
      this.resizeHandler = () => this.onResize();
      window.addEventListener('resize', this.resizeHandler);

      // Animate
      this.animate();
    }

    addGridFloor() {
      const grid = new (T().GridHelper)(10, 20, 0x1a2440, 0x1a2440);
      grid.position.y = -1;
      grid.material.transparent = true;
      grid.material.opacity = 0.15;
      this.scene.add(grid);
    }

    createTooltip() {
      const tip = document.createElement('div');
      tip.className = 'scene3d-tooltip';
      tip.style.cssText = `
        position:absolute; pointer-events:none; display:none;
        background:rgba(11,15,26,0.92); color:#f5a623;
        padding:6px 12px; border-radius:6px; font-size:0.78rem;
        font-family:var(--font-mono); border:1px solid rgba(245,166,35,0.3);
        z-index:10; backdrop-filter:blur(4px); white-space:nowrap;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      `;
      this.container.style.position = 'relative';
      this.container.appendChild(tip);
      this.tooltip = tip;
    }

    showTooltip(text, x, y) {
      this.tooltip.textContent = text;
      this.tooltip.style.display = 'block';
      this.tooltip.style.left = x + 'px';
      this.tooltip.style.top = (y - 35) + 'px';
    }

    hideTooltip() {
      this.tooltip.style.display = 'none';
    }

    onAnimate(fn) {
      this.animationCallbacks.push(fn);
    }

    highlightVariable(varName) {
      if (this.onHighlight) this.onHighlight(varName);
    }

    clearHighlights() {
      if (this.onHighlight) this.onHighlight(null);
    }

    animate() {
      if (!this.active) return;
      requestAnimationFrame(() => this.animate());

      const time = performance.now() * 0.001;

      // Update orbit
      this.orbit.update(this.pivot);

      // Run animation callbacks
      this.animationCallbacks.forEach(fn => fn(time));

      this.renderer.render(this.scene, this.camera);
    }

    onResize() {
      const W = this.container.clientWidth;
      const canvas = this.container.querySelector('canvas');
      const H = canvas ? parseInt(canvas.style.height) || 400 : 400;
      this.camera.aspect = W / H;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(W, H);
    }

    destroy() {
      this.active = false;
      window.removeEventListener('resize', this.resizeHandler);
      this.renderer.dispose();
      this.scene.clear();
      if (this.tooltip) this.tooltip.remove();
      // Remove canvas
      const canvas = this.container.querySelector('canvas');
      if (canvas) canvas.remove();
    }
  }

  // ══════════════════════════════════════════
  // SCENE BUILDERS
  // ══════════════════════════════════════════

  // ── 1. OHM'S LAW — Interactive Circuit ──
  SCENE_REGISTRY['ohms-law-beg'] = function(container) {
    const scene = new InteractiveScene(container, 'ohms-law-beg');
    if (!scene.renderer) return null;

    // State
    let voltage = 230, resistance = 46;
    let current = voltage / resistance;
    let electronPhase = 0;

    // --- Battery / Source ---
    const batteryGroup = new (T().Group)();
    const battBody = new (T().Mesh)(
      new (T().BoxGeometry)(0.6, 1.2, 0.6),
      createMaterial(0x2a2a3e)
    );
    batteryGroup.add(battBody);

    // Positive terminal
    const posTerminal = new (T().Mesh)(
      new (T().CylinderGeometry)(0.08, 0.08, 0.3, 16),
      createMaterial(0xe74c3c, { metalness: 0.8 })
    );
    posTerminal.position.y = 0.75;
    batteryGroup.add(posTerminal);

    // Negative terminal
    const negTerminal = new (T().Mesh)(
      new (T().CylinderGeometry)(0.08, 0.08, 0.2, 16),
      createMaterial(0x3498db, { metalness: 0.8 })
    );
    negTerminal.position.y = -0.75;
    batteryGroup.add(negTerminal);

    // Label: V
    const vLabel = new (T().Mesh)(
      new (T().PlaneGeometry)(0.4, 0.25),
      new (T().MeshBasicMaterial)({ color: 0xf5a623, transparent: true, opacity: 0.9 })
    );
    vLabel.position.set(0, 0, 0.31);
    batteryGroup.add(vLabel);

    batteryGroup.position.set(-3, 0.6, 0);
    scene.pivot.add(batteryGroup);

    // --- Resistor ---
    const resistorGroup = new (T().Group)();
    const resBody = new (T().Mesh)(
      new (T().CylinderGeometry)(0.25, 0.25, 1.4, 6),
      createMaterial(0x8b6914, { roughness: 0.7, metalness: 0.2 })
    );
    resBody.rotation.z = Math.PI / 2;
    resistorGroup.add(resBody);

    // Color bands
    const bandColors = [0xf5a623, 0x4a90d9, 0xe74c3c, 0xf1c40f];
    bandColors.forEach((c, i) => {
      const band = new (T().Mesh)(
        new (T().CylinderGeometry)(0.27, 0.27, 0.08, 6),
        createMaterial(c, { roughness: 0.3 })
      );
      band.rotation.z = Math.PI / 2;
      band.position.x = -0.45 + i * 0.3;
      resistorGroup.add(band);
    });

    resistorGroup.position.set(1.5, 2.2, 0);
    scene.pivot.add(resistorGroup);

    // --- Wires ---
    function createWire(points, colorHex = 0xf5a623) {
      const curve = new (T().CatmullRomCurve3)(points);
      const geo = new (T().TubeGeometry)(curve, 32, 0.04, 8, false);
      const mat = createMaterial(colorHex, { metalness: 0.8, roughness: 0.2, emissive: colorHex, emissiveIntensity: 0.15 });
      return new (T().Mesh)(geo, mat);
    }

    // Top wire: battery+ → resistor left
    const topWire = createWire([
      new (T().Vector3)(-3, 1.35, 0),
      new (T().Vector3)(-3, 2.2, 0),
      new (T().Vector3)(-1, 2.2, 0),
      new (T().Vector3)(0.8, 2.2, 0)
    ]);
    scene.pivot.add(topWire);

    // Right wire: resistor right → down
    const rightWire = createWire([
      new (T().Vector3)(2.2, 2.2, 0),
      new (T().Vector3)(3, 2.2, 0),
      new (T().Vector3)(3, 0, 0),
      new (T().Vector3)(3, -1, 0)
    ], 0x4a90d9);
    scene.pivot.add(rightWire);

    // Bottom wire: down → battery-
    const bottomWire = createWire([
      new (T().Vector3)(3, -1, 0),
      new (T().Vector3)(1, -1, 0),
      new (T().Vector3)(-3, -1, 0),
      new (T().Vector3)(-3, -0.15, 0)
    ], 0x4a90d9);
    scene.pivot.add(bottomWire);

    // --- Electrons (animated dots) ---
    const electrons = [];
    const electronCount = 12;
    const circuitPath = new (T().CatmullRomCurve3)([
      new (T().Vector3)(-3, 1.35, 0),
      new (T().Vector3)(-3, 2.2, 0),
      new (T().Vector3)(0.8, 2.2, 0),
      new (T().Vector3)(2.2, 2.2, 0),
      new (T().Vector3)(3, 2.2, 0),
      new (T().Vector3)(3, -1, 0),
      new (T().Vector3)(-3, -1, 0),
      new (T().Vector3)(-3, -0.15, 0)
    ], true);

    for (let i = 0; i < electronCount; i++) {
      const geo = new (T().SphereGeometry)(0.06, 8, 8);
      const mat = new (T().MeshBasicMaterial)({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.9
      });
      const electron = new (T().Mesh)(geo, mat);

      // Glow
      const glowGeo = new (T().SphereGeometry)(0.14, 8, 8);
      const glowMat = createGlowMaterial(0x00e5ff, 0.3);
      const glow = new (T().Mesh)(glowGeo, glowMat);
      electron.add(glow);

      scene.pivot.add(electron);
      electrons.push({ mesh: electron, offset: i / electronCount });
    }

    // --- Ammeter ---
    const ammeter = new (T().Group)();
    const ammBody = new (T().Mesh)(
      new (T().CylinderGeometry)(0.4, 0.4, 0.15, 32),
      createMaterial(0x1a2a3e, { roughness: 0.5, metalness: 0.3 })
    );
    ammBody.rotation.x = Math.PI / 2;
    ammeter.add(ammBody);

    const ammFace = new (T().Mesh)(
      new (T().CircleGeometry)(0.35, 32),
      new (T().MeshBasicMaterial)({ color: 0x0a1520 })
    );
    ammFace.position.z = 0.08;
    ammeter.add(ammFace);

    ammeter.position.set(3, 0.6, 0.3);
    scene.pivot.add(ammeter);

    // --- Interactive Controls UI ---
    const controls = document.createElement('div');
    controls.className = 'scene3d-controls';
    controls.innerHTML = `
      <div style="display:flex;gap:16px;padding:10px 14px;background:rgba(11,15,26,0.85);border:1px solid rgba(245,166,35,0.2);border-radius:8px;backdrop-filter:blur(4px);flex-wrap:wrap;align-items:center">
        <div style="display:flex;align-items:center;gap:8px">
          <label style="font-family:var(--font-mono);font-size:.72rem;color:var(--accent)">V</label>
          <input type="range" min="50" max="415" value="${voltage}" id="ctrl-voltage" style="width:100px;accent-color:#f5a623">
          <span id="val-voltage" style="font-family:var(--font-mono);font-size:.78rem;color:var(--text);min-width:42px">${voltage}V</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <label style="font-family:var(--font-mono);font-size:.72rem;color:var(--accent2)">R</label>
          <input type="range" min="5" max="200" value="${resistance}" id="ctrl-resistance" style="width:100px;accent-color:#4a90d9">
          <span id="val-resistance" style="font-family:var(--font-mono);font-size:.78rem;color:var(--text);min-width:42px">${resistance}Ω</span>
        </div>
        <div style="font-family:var(--font-mono);font-size:.82rem;color:var(--green);flex:1;text-align:right">
          I = <span id="val-current" style="color:var(--accent);font-weight:600">${current.toFixed(1)}</span>A
          &nbsp;|&nbsp;
          P = <span id="val-power" style="color:var(--accent);font-weight:600">${(voltage*current).toFixed(0)}</span>W
        </div>
      </div>
    `;
    container.appendChild(controls);

    // Controls event handlers
    const vSlider = controls.querySelector('#ctrl-voltage');
    const rSlider = controls.querySelector('#ctrl-resistance');
    const vDisplay = controls.querySelector('#val-voltage');
    const rDisplay = controls.querySelector('#val-resistance');
    const iDisplay = controls.querySelector('#val-current');
    const pDisplay = controls.querySelector('#val-power');

    function updateValues() {
      voltage = parseInt(vSlider.value);
      resistance = parseInt(rSlider.value);
      current = voltage / resistance;
      vDisplay.textContent = voltage + 'V';
      rDisplay.textContent = resistance + 'Ω';
      iDisplay.textContent = current.toFixed(1);
      pDisplay.textContent = (voltage * current).toFixed(0);
    }

    vSlider.addEventListener('input', updateValues);
    rSlider.addEventListener('input', updateValues);

    // --- Interactivity ---
    scene.onHighlight = (varName) => {
      // Reset scales
      batteryGroup.scale.set(1, 1, 1);
      resistorGroup.scale.set(1, 1, 1);
      ammeter.scale.set(1, 1, 1);

      if (varName === 'V') {
        batteryGroup.scale.set(1.2, 1.2, 1.2);
      } else if (varName === 'R') {
        resistorGroup.scale.set(1.2, 1.2, 1.2);
      } else if (varName === 'I') {
        ammeter.scale.set(1.2, 1.2, 1.2);
      }
    };

    // --- Animation ---
    scene.onAnimate((time) => {
      // Electron speed proportional to current
      const speed = Math.min(current / 50, 0.3);
      electronPhase += speed * 0.016;
      if (electronPhase > 1) electronPhase -= 1;

      electrons.forEach((e, i) => {
        const t = (e.offset + electronPhase) % 1;
        const pos = circuitPath.getPoint(t);
        e.mesh.position.copy(pos);
        // Pulse glow
        e.mesh.children[0].material.opacity = 0.2 + Math.sin(time * 4 + i) * 0.15;
      });

      // Resistor heat glow (based on power)
      const power = voltage * current;
      const heatIntensity = Math.min(power / 5000, 1);
      resBody.material.emissive = new (T().Color)(0xff4500);
      resBody.material.emissiveIntensity = heatIntensity * 0.3;

      // Battery terminal glow
      posTerminal.material.emissiveIntensity = 0.1 + Math.sin(time * 2) * 0.05;
    });

    return scene;
  };

  // ── 2. OHM'S LAW ADVANCED — Impedance 3D ──
  SCENE_REGISTRY['ohms-law-adv'] = function(container) {
    const scene = new InteractiveScene(container, 'ohms-law-adv');
    if (!scene.renderer) return null;

    // Impedance triangle in 3D
    let R = 10, X = 8;
    let Z = Math.sqrt(R*R + X*X);
    let phi = Math.atan2(X, R);

    // R axis (horizontal - red)
    const rGeo = new (T().CylinderGeometry)(0.05, 0.05, R * 0.3, 8);
    const rMesh = new (T().Mesh)(rGeo, createMaterial(0xe74c3c, { emissive: 0xe74c3c, emissiveIntensity: 0.2 }));
    rMesh.rotation.z = Math.PI / 2;
    rMesh.position.set(R * 0.15, 0, 0);
    scene.pivot.add(rMesh);

    // X axis (vertical - blue)
    const xGeo = new (T().CylinderGeometry)(0.05, 0.05, X * 0.3, 8);
    const xMesh = new (T().Mesh)(xGeo, createMaterial(0x3498db, { emissive: 0x3498db, emissiveIntensity: 0.2 }));
    xMesh.position.set(R * 0.3, X * 0.15, 0);
    scene.pivot.add(xMesh);

    // Z hypotenuse (amber)
    const zLen = Z * 0.3;
    const zGeo = new (T().CylinderGeometry)(0.06, 0.06, zLen, 8);
    const zMesh = new (T().Mesh)(zGeo, createMaterial(0xf5a623, { emissive: 0xf5a623, emissiveIntensity: 0.3 }));
    zMesh.rotation.z = -(Math.PI / 2 - phi);
    zMesh.position.set(R * 0.15, X * 0.15, 0);
    scene.pivot.add(zMesh);

    // Angle arc
    const arcGeo = new (T().RingGeometry)(0.5, 0.55, 32, 1, 0, phi);
    const arcMat = new (T().MeshBasicMaterial)({ color: 0x27ae60, transparent: true, opacity: 0.6, side: T().DoubleSide });
    const arc = new (T().Mesh)(arcGeo, arcMat);
    scene.pivot.add(arc);

    // Pulsing glow spheres at vertices
    const origin = new (T().Mesh)(
      new (T().SphereGeometry)(0.12, 16, 16),
      createGlowMaterial(0xf5a623, 0.8)
    );
    scene.pivot.add(origin);

    const rEnd = new (T().Mesh)(
      new (T().SphereGeometry)(0.1, 16, 16),
      createGlowMaterial(0xe74c3c, 0.8)
    );
    rEnd.position.set(R * 0.3, 0, 0);
    scene.pivot.add(rEnd);

    const zEnd = new (T().Mesh)(
      new (T().SphereGeometry)(0.1, 16, 16),
      createGlowMaterial(0x4a90d9, 0.8)
    );
    zEnd.position.set(R * 0.3, X * 0.3, 0);
    scene.pivot.add(zEnd);

    // Controls
    const controls = document.createElement('div');
    controls.className = 'scene3d-controls';
    controls.innerHTML = `
      <div style="display:flex;gap:16px;padding:10px 14px;background:rgba(11,15,26,0.85);border:1px solid rgba(245,166,35,0.2);border-radius:8px;backdrop-filter:blur(4px);flex-wrap:wrap;align-items:center">
        <div style="display:flex;align-items:center;gap:8px">
          <label style="font-family:var(--font-mono);font-size:.72rem;color:#e74c3c">R</label>
          <input type="range" min="1" max="20" value="${R}" id="ctrl-r-imp" style="width:80px;accent-color:#e74c3c">
          <span id="val-r-imp" style="font-family:var(--font-mono);font-size:.78rem;color:var(--text)">${R}Ω</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <label style="font-family:var(--font-mono);font-size:.72rem;color:#3498db">X<sub>L</sub></label>
          <input type="range" min="0" max="20" value="${X}" id="ctrl-x-imp" style="width:80px;accent-color:#3498db">
          <span id="val-x-imp" style="font-family:var(--font-mono);font-size:.78rem;color:var(--text)">${X}Ω</span>
        </div>
        <div style="font-family:var(--font-mono);font-size:.82rem;color:var(--accent);flex:1;text-align:right">
          |Z| = <span id="val-z-imp">${Z.toFixed(1)}</span>Ω
          &nbsp; φ = <span id="val-phi-imp">${(phi * 180 / Math.PI).toFixed(1)}</span>°
        </div>
      </div>
    `;
    container.appendChild(controls);

    return scene;
  };

  // ── 3. THREE-PHASE — Star/Delta Phasor ──
  SCENE_REGISTRY['3ph-star-delta'] = function(container) {
    const scene = new InteractiveScene(container, '3ph-star-delta');
    if (!scene.renderer) return null;

    scene.camera.position.set(0, 4, 7);

    // Phase colors
    const phColors = { R: 0xe74c3c, Y: 0xf1c40f, B: 0x3498db };

    // Build Star Connection
    const starGroup = new (T().Group)();
    starGroup.position.set(-2.5, 0, 0);

    // Center neutral point
    const neutral = new (T().Mesh)(
      new (T().SphereGeometry)(0.15, 16, 16),
      createMaterial(0xcccccc, { emissive: 0xcccccc, emissiveIntensity: 0.3 })
    );
    starGroup.add(neutral);

    // 3 phase arms from center
    const phaseAngles = [90, 210, 330]; // degrees
    const phaseNames = ['R', 'Y', 'B'];

    phaseAngles.forEach((ang, i) => {
      const rad = ang * Math.PI / 180;
      const len = 2;
      const endX = Math.cos(rad) * len;
      const endY = Math.sin(rad) * len;

      const points = [
        new (T().Vector3)(0, 0, 0),
        new (T().Vector3)(endX, endY, 0)
      ];
      const curve = new (T().LineCurve3)(points[0], points[1]);
      const tube = new (T().Mesh)(
        new (T().TubeGeometry)(curve, 8, 0.06, 8, false),
        createMaterial(phColors[phaseNames[i]], { emissive: phColors[phaseNames[i]], emissiveIntensity: 0.2 })
      );
      starGroup.add(tube);

      // Terminal sphere
      const terminal = new (T().Mesh)(
        new (T().SphereGeometry)(0.12, 16, 16),
        createGlowMaterial(phColors[phaseNames[i]], 0.9)
      );
      terminal.position.set(endX, endY, 0);
      starGroup.add(terminal);
    });

    scene.pivot.add(starGroup);

    // Build Delta Connection
    const deltaGroup = new (T().Group)();
    deltaGroup.position.set(2.5, 0, 0);

    const deltaVertices = [
      new (T().Vector3)(0, 2, 0),
      new (T().Vector3)(-1.73, -1, 0),
      new (T().Vector3)(1.73, -1, 0)
    ];

    for (let i = 0; i < 3; i++) {
      const from = deltaVertices[i];
      const to = deltaVertices[(i + 1) % 3];
      const curve = new (T().LineCurve3)(from, to);
      const tube = new (T().Mesh)(
        new (T().TubeGeometry)(curve, 8, 0.06, 8, false),
        createMaterial(phColors[phaseNames[i]], { emissive: phColors[phaseNames[i]], emissiveIntensity: 0.2 })
      );
      deltaGroup.add(tube);

      // Terminal sphere
      const terminal = new (T().Mesh)(
        new (T().SphereGeometry)(0.12, 16, 16),
        createGlowMaterial(phColors[phaseNames[i]], 0.9)
      );
      terminal.position.copy(from);
      deltaGroup.add(terminal);
    }

    scene.pivot.add(deltaGroup);

    // Animated current flow particles
    const particles = [];
    for (let g = 0; g < 2; g++) {
      const group = g === 0 ? starGroup : deltaGroup;
      for (let p = 0; p < 6; p++) {
        const particle = new (T().Mesh)(
          new (T().SphereGeometry)(0.05, 8, 8),
          createGlowMaterial(0x00e5ff, 0.8)
        );
        group.add(particle);
        particles.push({ mesh: particle, group: g, phase: Math.random() });
      }
    }

    // Labels
    const labelsDiv = document.createElement('div');
    labelsDiv.style.cssText = 'position:absolute;top:10px;left:0;right:0;display:flex;justify-content:space-around;pointer-events:none';
    labelsDiv.innerHTML = `
      <div style="font-family:var(--font-head);font-size:.85rem;color:var(--accent);text-align:center;opacity:0.9">
        ⭐ Star (Y)<br>
        <span style="font-size:.7rem;color:var(--text2)">V<sub>L</sub> = √3 × V<sub>P</sub></span>
      </div>
      <div style="font-family:var(--font-head);font-size:.85rem;color:var(--accent);text-align:center;opacity:0.9">
        🔺 Delta (Δ)<br>
        <span style="font-size:.7rem;color:var(--text2)">I<sub>L</sub> = √3 × I<sub>P</sub></span>
      </div>
    `;
    container.appendChild(labelsDiv);

    // Animate
    scene.onAnimate((time) => {
      // Gentle rotation for both groups
      starGroup.rotation.z = Math.sin(time * 0.3) * 0.05;
      deltaGroup.rotation.z = Math.sin(time * 0.3 + Math.PI) * 0.05;

      // Pulse terminals
      starGroup.children.forEach(child => {
        if (child.material && child.material.opacity !== undefined && child.material.blending) {
          child.material.opacity = 0.6 + Math.sin(time * 3) * 0.3;
        }
      });
    });

    return scene;
  };

  // ── 4. POWER FACTOR — Power Triangle 3D ──
  SCENE_REGISTRY['power-triangle'] = function(container) {
    const scene = new InteractiveScene(container, 'power-triangle');
    if (!scene.renderer) return null;

    scene.camera.position.set(0, 2, 8);

    let kW = 400, pf = 0.8;
    let kVA = kW / pf;
    let kVAr = Math.sqrt(kVA * kVA - kW * kW);
    let phi = Math.acos(pf);

    const scale = 0.005; // scale factor for display

    // P (Real power) - green horizontal
    const pGeo = new (T().CylinderGeometry)(0.08, 0.08, kW * scale, 8);
    const pMesh = new (T().Mesh)(pGeo, createMaterial(0x27ae60, { emissive: 0x27ae60, emissiveIntensity: 0.3 }));
    pMesh.rotation.z = Math.PI / 2;
    pMesh.position.set(kW * scale / 2, 0, 0);
    scene.pivot.add(pMesh);

    // Q (Reactive power) - red vertical
    const qGeo = new (T().CylinderGeometry)(0.08, 0.08, kVAr * scale, 8);
    const qMesh = new (T().Mesh)(qGeo, createMaterial(0xe74c3c, { emissive: 0xe74c3c, emissiveIntensity: 0.3 }));
    qMesh.position.set(kW * scale, kVAr * scale / 2, 0);
    scene.pivot.add(qMesh);

    // S (Apparent power) - amber hypotenuse
    const sLen = kVA * scale;
    const sGeo = new (T().CylinderGeometry)(0.1, 0.1, sLen, 8);
    const sMesh = new (T().Mesh)(sGeo, createMaterial(0xf5a623, { emissive: 0xf5a623, emissiveIntensity: 0.4 }));
    sMesh.rotation.z = -(Math.PI / 2 - phi);
    sMesh.position.set(kW * scale / 2, kVAr * scale / 2, 0);
    scene.pivot.add(sMesh);

    // Angle arc
    const arcGeo = new (T().RingGeometry)(0.6, 0.65, 32, 1, 0, phi);
    const arc = new (T().Mesh)(arcGeo, new (T().MeshBasicMaterial)({ color: 0xf1c40f, transparent: true, opacity: 0.5, side: T().DoubleSide }));
    scene.pivot.add(arc);

    // --- Interactivity ---
    scene.onHighlight = (varName) => {
      pMesh.scale.set(1, 1, 1);
      qMesh.scale.set(1, 1, 1);
      sMesh.scale.set(1, 1, 1);
      arc.scale.set(1, 1, 1);

      if (varName === 'P' || varName === 'kW') {
        pMesh.scale.set(1.4, 1.4, 1.4);
      } else if (varName === 'Q' || varName === 'kVAr') {
        qMesh.scale.set(1.4, 1.4, 1.4);
      } else if (varName === 'S' || varName === 'kVA') {
        sMesh.scale.set(1.4, 1.4, 1.4);
      } else if (varName === 'pf' || varName === 'cos\u03c6' || varName === '\u03c6' || varName === 'cosphi' || varName === 'phi') {
        arc.scale.set(1.5, 1.5, 1.5);
      }
    };

    // Vertex glow spheres
    [
      [0, 0, 0, 0xffffff],
      [kW * scale, 0, 0, 0x27ae60],
      [kW * scale, kVAr * scale, 0, 0xe74c3c]
    ].forEach(([x, y, z, c]) => {
      const sphere = new (T().Mesh)(
        new (T().SphereGeometry)(0.12, 16, 16),
        createGlowMaterial(c, 0.8)
      );
      sphere.position.set(x, y, z);
      scene.pivot.add(sphere);
    });

    // Controls
    const controls = document.createElement('div');
    controls.className = 'scene3d-controls';
    controls.innerHTML = `
      <div style="display:flex;gap:16px;padding:10px 14px;background:rgba(11,15,26,0.85);border:1px solid rgba(245,166,35,0.2);border-radius:8px;backdrop-filter:blur(4px);flex-wrap:wrap;align-items:center">
        <div style="display:flex;align-items:center;gap:8px">
          <label style="font-family:var(--font-mono);font-size:.72rem;color:#27ae60">kW</label>
          <input type="range" min="100" max="1000" value="${kW}" id="ctrl-kw" style="width:80px;accent-color:#27ae60">
          <span id="val-kw" style="font-family:var(--font-mono);font-size:.78rem;color:var(--text)">${kW}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <label style="font-family:var(--font-mono);font-size:.72rem;color:#f5a623">PF</label>
          <input type="range" min="50" max="100" value="${pf*100}" id="ctrl-pf" style="width:80px;accent-color:#f5a623">
          <span id="val-pf" style="font-family:var(--font-mono);font-size:.78rem;color:var(--text)">${pf.toFixed(2)}</span>
        </div>
        <div style="font-family:var(--font-mono);font-size:.78rem;flex:1;text-align:right">
          <span style="color:#27ae60">P=${kW}kW</span> &nbsp;
          <span style="color:#e74c3c">Q=<span id="val-kvar">${kVAr.toFixed(0)}</span>kVAr</span> &nbsp;
          <span style="color:#f5a623">S=<span id="val-kva">${kVA.toFixed(0)}</span>kVA</span>
        </div>
      </div>
    `;
    container.appendChild(controls);

    return scene;
  };

  // ── 5. AC/DC WAVEFORM VISUALIZATION ──
  SCENE_REGISTRY['ac-dc-comparison'] = function(container) {
    const scene = new InteractiveScene(container, 'ac-dc-comparison');
    if (!scene.renderer) return null;

    scene.camera.position.set(0, 2, 8);

    // AC waveform - draw as line
    const acPoints = [];
    const dcPoints = [];
    const resolution = 200;

    for (let i = 0; i <= resolution; i++) {
      const t = (i / resolution) * 4 * Math.PI;
      const x = (i / resolution) * 8 - 4;
      acPoints.push(new (T().Vector3)(x, Math.sin(t) * 1.5, 0));
      dcPoints.push(new (T().Vector3)(x, 1.2, 0));
    }

    // AC waveform mesh
    const acCurve = new (T().CatmullRomCurve3)(acPoints);
    const acTube = new (T().Mesh)(
      new (T().TubeGeometry)(acCurve, resolution, 0.04, 8, false),
      createMaterial(0xf5a623, { emissive: 0xf5a623, emissiveIntensity: 0.3 })
    );
    acTube.position.y = 1;
    scene.pivot.add(acTube);

    // DC line
    const dcCurve = new (T().CatmullRomCurve3)(dcPoints);
    const dcTube = new (T().Mesh)(
      new (T().TubeGeometry)(dcCurve, 32, 0.04, 8, false),
      createMaterial(0x4a90d9, { emissive: 0x4a90d9, emissiveIntensity: 0.3 })
    );
    dcTube.position.y = -1.5;
    scene.pivot.add(dcTube);

    // Zero axis lines
    for (let yy of [1, -1.5]) {
      const axisGeo = new (T().BufferGeometry)().setFromPoints([
        new (T().Vector3)(-4, yy, 0),
        new (T().Vector3)(4, yy, 0)
      ]);
      const axisMat = new (T().LineBasicMaterial)({ color: 0x333344, transparent: true, opacity: 0.4 });
      scene.pivot.add(new (T().Line)(axisGeo, axisMat));
    }

    // Moving marker on AC
    const marker = new (T().Mesh)(
      new (T().SphereGeometry)(0.12, 16, 16),
      createGlowMaterial(0xf5a623, 0.9)
    );
    marker.position.y = 1;
    scene.pivot.add(marker);

    // Labels
    const labelsDiv = document.createElement('div');
    labelsDiv.style.cssText = 'position:absolute;bottom:40px;left:0;right:0;display:flex;justify-content:center;gap:24px;pointer-events:none';
    labelsDiv.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:.78rem;color:#f5a623">〰️ AC — Alternating Current (230V rms)</div>
      <div style="font-family:var(--font-mono);font-size:.78rem;color:#4a90d9">― DC — Direct Current (steady)</div>
    `;
    // --- Interactivity ---
    scene.onHighlight = (varName) => {
      acTube.scale.set(1, 1, 1);
      dcTube.scale.set(1, 1, 1);
      marker.scale.set(1, 1, 1);

      if (varName === 'AC' || varName === 'Vrms' || varName === 'Vpeak' || varName === 'Hz') {
        acTube.scale.set(1.2, 1.2, 1.2);
        marker.scale.set(1.8, 1.8, 1.8);
      } else if (varName === 'DC') {
        dcTube.scale.set(1.4, 1.4, 1.4);
      }
    };

    container.appendChild(labelsDiv);

    scene.onAnimate((time) => {
      const markerT = (time * 0.3) % 1;
      const markerIdx = Math.floor(markerT * resolution);
      if (acPoints[markerIdx]) {
        marker.position.x = acPoints[markerIdx].x;
        marker.position.y = acPoints[markerIdx].y + 1;
      }
    });

    return scene;
  };

  // ── 6. MCB / BREAKER — Interactive Trip Animation ──
  SCENE_REGISTRY['breaker-selection-diagram'] = function(container) {
    const scene = new InteractiveScene(container, 'breaker-selection');
    if (!scene.renderer) return null;

    scene.camera.position.set(0, 2, 7);
    let tripped = false;

    // MCB Housing
    const housing = new (T().Mesh)(
      new (T().BoxGeometry)(1.2, 2.4, 0.8),
      createMaterial(0x2a2a3e, { roughness: 0.6 })
    );
    scene.pivot.add(housing);

    // Front face label area
    const label = new (T().Mesh)(
      new (T().PlaneGeometry)(0.8, 0.4),
      new (T().MeshBasicMaterial)({ color: 0x1a2a3e })
    );
    label.position.set(0, 0.6, 0.41);
    scene.pivot.add(label);

    // Toggle lever
    const leverPivot = new (T().Group)();
    leverPivot.position.set(0, 0, 0.4);
    const lever = new (T().Mesh)(
      new (T().BoxGeometry)(0.3, 0.8, 0.15),
      createMaterial(0xf5a623, { roughness: 0.3, metalness: 0.7 })
    );
    lever.position.y = 0.35;
    leverPivot.add(lever);
    scene.pivot.add(leverPivot);

    // Terminal connections (top + bottom)
    const termMat = createMaterial(0xcccccc, { metalness: 0.85 });
    const topTerm = new (T().Mesh)(new (T().CylinderGeometry)(0.12, 0.12, 0.3, 16), termMat);
    topTerm.position.set(0, 1.35, 0);
    scene.pivot.add(topTerm);
    const botTerm = new (T().Mesh)(new (T().CylinderGeometry)(0.12, 0.12, 0.3, 16), termMat);
    botTerm.position.set(0, -1.35, 0);
    scene.pivot.add(botTerm);

    // Internal mechanism (visible "cutaway")
    const bimetal = new (T().Mesh)(
      new (T().BoxGeometry)(0.08, 1.4, 0.15),
      createMaterial(0xe74c3c, { emissive: 0xe74c3c, emissiveIntensity: 0.1, transparent: true, opacity: 0.7 })
    );
    bimetal.position.set(-0.3, 0, 0.1);
    scene.pivot.add(bimetal);

    // Arc chamber slots
    for (let i = 0; i < 5; i++) {
      const slot = new (T().Mesh)(
        new (T().BoxGeometry)(0.4, 0.04, 0.3),
        createMaterial(0x444455, { roughness: 0.8 })
      );
      slot.position.set(0.25, -0.6 + i * 0.15, 0.15);
      scene.pivot.add(slot);
    }

    // Current flow particles
    const flowParticles = [];
    for (let i = 0; i < 8; i++) {
      const p = new (T().Mesh)(
        new (T().SphereGeometry)(0.04, 8, 8),
        createGlowMaterial(0x00e5ff, 0.8)
      );
      scene.pivot.add(p);
      flowParticles.push({ mesh: p, t: i / 8 });
    }

    // Trip button
    const controls = document.createElement('div');
    controls.className = 'scene3d-controls';
    controls.innerHTML = `
      <div style="display:flex;gap:12px;padding:10px 14px;background:rgba(11,15,26,0.85);border:1px solid rgba(245,166,35,0.2);border-radius:8px;backdrop-filter:blur(4px);align-items:center;flex-wrap:wrap">
        <button id="btn-trip" style="font-family:var(--font-mono);font-size:.78rem;padding:6px 16px;border:1px solid rgba(231,76,60,0.4);border-radius:6px;background:rgba(231,76,60,0.1);color:#e74c3c;cursor:pointer;transition:all .2s">⚡ Simulate Fault Trip</button>
        <button id="btn-reset" style="font-family:var(--font-mono);font-size:.78rem;padding:6px 16px;border:1px solid rgba(39,174,96,0.4);border-radius:6px;background:rgba(39,174,96,0.1);color:#27ae60;cursor:pointer;transition:all .2s">🔄 Reset</button>
        <span id="mcb-status" style="font-family:var(--font-mono);font-size:.82rem;color:var(--green);flex:1;text-align:right">Status: <strong>CLOSED</strong> — Current flowing</span>
      </div>
    `;
    container.appendChild(controls);

    controls.querySelector('#btn-trip').onclick = () => { tripped = true; };
    controls.querySelector('#btn-reset').onclick = () => { tripped = false; };

    // --- Interactivity ---
    scene.onHighlight = (varName) => {
      leverPivot.scale.set(1, 1, 1);
      bimetal.scale.set(1, 1, 1);
      flowParticles.forEach(p => p.mesh.scale.set(1, 1, 1));

      if (varName === 'I' || varName === 'Current' || varName === 'Load') {
        flowParticles.forEach(p => p.mesh.scale.set(2, 2, 2));
      } else if (varName === 'Trip' || varName === 'Magnetic' || varName === 'Thermal') {
        bimetal.scale.set(1.5, 1, 1.5);
        leverPivot.scale.set(1.2, 1.2, 1.2);
      }
    };

    let tripAnim = 0;
    scene.onAnimate((time) => {
      // Lever animation
      const targetAngle = tripped ? -0.6 : 0.3;
      leverPivot.rotation.x += (targetAngle - leverPivot.rotation.x) * 0.06;

      // Bimetal heat
      if (tripped) {
        tripAnim = Math.min(tripAnim + 0.02, 1);
        bimetal.material.emissiveIntensity = 0.5 + Math.sin(time * 10) * 0.3;
        bimetal.rotation.z = Math.sin(time * 5) * 0.05 * tripAnim;
      } else {
        tripAnim = Math.max(tripAnim - 0.02, 0);
        bimetal.material.emissiveIntensity = 0.1;
        bimetal.rotation.z = 0;
      }

      // Current flow
      flowParticles.forEach(p => {
        if (tripped) {
          p.mesh.visible = false;
          return;
        }
        p.mesh.visible = true;
        p.t = (p.t + 0.008) % 1;
        p.mesh.position.set(0, -1.35 + p.t * 2.7, 0.4);
        p.mesh.material.opacity = 0.5 + Math.sin(time * 5 + p.t * 10) * 0.3;
      });

      // Status text
      const statusEl = container.querySelector('#mcb-status');
      if (statusEl) {
        statusEl.innerHTML = tripped
          ? 'Status: <strong style="color:#e74c3c">TRIPPED</strong> — Fault cleared, arc extinguished'
          : 'Status: <strong style="color:#27ae60">CLOSED</strong> — Current flowing';
      }
    });

    return scene;
  };

  // ── 7. TRANSFORMER — Animated Magnetic Flux ──
  SCENE_REGISTRY['transformer-sld'] = function(container) {
    const scene = new InteractiveScene(container, 'transformer');
    if (!scene.renderer) return null;

    scene.camera.position.set(0, 3, 9);

    // Core (E-I laminations)
    const coreMat = createMaterial(0x4a4a5e, { roughness: 0.7, metalness: 0.4 });
    // Left leg
    const leftLeg = new (T().Mesh)(new (T().BoxGeometry)(0.4, 3, 0.8), coreMat);
    leftLeg.position.set(-1.5, 0, 0);
    scene.pivot.add(leftLeg);
    // Right leg
    const rightLeg = new (T().Mesh)(new (T().BoxGeometry)(0.4, 3, 0.8), coreMat);
    rightLeg.position.set(1.5, 0, 0);
    scene.pivot.add(rightLeg);
    // Top yoke
    const topYoke = new (T().Mesh)(new (T().BoxGeometry)(3.4, 0.4, 0.8), coreMat);
    topYoke.position.set(0, 1.5, 0);
    scene.pivot.add(topYoke);
    // Bottom yoke
    const botYoke = new (T().Mesh)(new (T().BoxGeometry)(3.4, 0.4, 0.8), coreMat);
    botYoke.position.set(0, -1.5, 0);
    scene.pivot.add(botYoke);

    const priCoils = [];
    // Primary winding (left, more turns)
    const priMat = createMaterial(0xe74c3c, { emissive: 0xe74c3c, emissiveIntensity: 0.15 });
    for (let i = 0; i < 8; i++) {
      const coil = new (T().Mesh)(
        new (T().TorusGeometry)(0.55, 0.06, 8, 16, Math.PI * 2),
        priMat
      );
      coil.position.set(-1.5, -1 + i * 0.28, 0);
      coil.rotation.y = Math.PI / 2;
      scene.pivot.add(coil);
      priCoils.push(coil);
    }

    const secCoils = [];
    // Secondary winding (right, fewer turns)
    const secMat = createMaterial(0x3498db, { emissive: 0x3498db, emissiveIntensity: 0.15 });
    for (let i = 0; i < 5; i++) {
      const coil = new (T().Mesh)(
        new (T().TorusGeometry)(0.55, 0.06, 8, 16, Math.PI * 2),
        secMat
      );
      coil.position.set(1.5, -0.6 + i * 0.35, 0);
      coil.rotation.y = Math.PI / 2;
      scene.pivot.add(coil);
      secCoils.push(coil);
    }

    // Flux lines (animated)
    const fluxLines = [];
    const fluxLineGroup = new (T().Group)();
    scene.pivot.add(fluxLineGroup);
    for (let f = 0; f < 6; f++) {
      const fluxPoints = [];
      const r = 0.15 + f * 0.05;
      for (let a = 0; a <= 64; a++) {
        const angle = (a / 64) * Math.PI * 2;
        fluxPoints.push(new (T().Vector3)(
          Math.cos(angle) * 1.2,
          Math.sin(angle) * 1.2,
          r - 0.2
        ));
      }
      const curve = new (T().CatmullRomCurve3)(fluxPoints, true);
      const tube = new (T().Mesh)(
        new (T().TubeGeometry)(curve, 64, 0.015, 4, true),
        createGlowMaterial(0xf5a623, 0.4)
      );
      fluxLineGroup.add(tube);
      fluxLines.push(tube);
    }
    
    // --- Interactivity ---
    scene.onHighlight = (varName) => {
      priCoils.forEach(c => c.scale.set(1, 1, 1));
      secCoils.forEach(c => c.scale.set(1, 1, 1));
      fluxLineGroup.scale.set(1, 1, 1);

      if (varName === 'Np' || varName === 'N1' || varName === 'Vp' || varName === 'V1' || varName === 'kVA' || varName === 'Primary') {
        priCoils.forEach(c => c.scale.set(1.3, 1.3, 1.3));
      } else if (varName === 'Ns' || varName === 'N2' || varName === 'Vs' || varName === 'V2' || varName === 'FLC' || varName === 'Secondary') {
        secCoils.forEach(c => c.scale.set(1.3, 1.3, 1.3));
      } else if (varName === '\u03a6' || varName === 'Phi' || varName === 'B' || varName === 'Z%' || varName === 'Flux') {
        fluxLineGroup.scale.set(1.2, 1.2, 1.2);
      }
    };

    // Flux flow particles
    const fluxParticles = [];
    for (let i = 0; i < 12; i++) {
      const p = new (T().Mesh)(
        new (T().SphereGeometry)(0.04, 8, 8),
        createGlowMaterial(0xf5a623, 0.9)
      );
      scene.pivot.add(p);
      fluxParticles.push({ mesh: p, angle: (i / 12) * Math.PI * 2 });
    }

    // Labels
    const labelsDiv = document.createElement('div');
    labelsDiv.style.cssText = 'position:absolute;top:8px;left:0;right:0;display:flex;justify-content:space-around;pointer-events:none';
    labelsDiv.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:.78rem;color:#e74c3c;text-align:center">Primary<br><span style="font-size:.68rem;color:var(--text3)">11kV — HV side</span></div>
      <div style="font-family:var(--font-mono);font-size:.72rem;color:#f5a623;text-align:center">Magnetic Flux \u03c6<br><span style="font-size:.65rem;color:var(--text3)">\u03a6 = V/(4.44·f·N·A)</span></div>
      <div style="font-family:var(--font-mono);font-size:.78rem;color:#3498db;text-align:center">Secondary<br><span style="font-size:.68rem;color:var(--text3)">415V — LV side</span></div>
    `;
    container.appendChild(labelsDiv);

    scene.onAnimate((time) => {
      // Animate flux particles around core
      fluxParticles.forEach((fp, i) => {
        fp.angle += 0.02;
        fp.mesh.position.set(
          Math.cos(fp.angle) * 1.2,
          Math.sin(fp.angle) * 1.2,
          0
        );
        fp.mesh.material.opacity = 0.5 + Math.sin(fp.angle * 2) * 0.4;
      });

      // Pulse flux lines
      fluxLines.forEach((fl, i) => {
        fl.material.opacity = 0.2 + Math.sin(time * 2 + i * 0.5) * 0.2;
      });

      // Pulsing windings
      priMat.emissiveIntensity = 0.1 + Math.sin(time * 3) * 0.08;
      secMat.emissiveIntensity = 0.1 + Math.cos(time * 3) * 0.08;
    });

    return scene;
  };

  // ── 8. DISTRIBUTION BOARD / MDB — Current Flow SLD ──
  SCENE_REGISTRY['mdb-sld'] = function(container) {
    const scene = new InteractiveScene(container, 'mdb-sld');
    if (!scene.renderer) return null;

    scene.camera.position.set(0, 2, 10);

    const busMat = createMaterial(0xf5a623, { metalness: 0.85, roughness: 0.15, emissive: 0xf5a623, emissiveIntensity: 0.1 });

    // Main incomer bus (horizontal)
    const mainBus = new (T().Mesh)(new (T().BoxGeometry)(6, 0.12, 0.08), busMat);
    mainBus.position.set(0, 2, 0);
    scene.pivot.add(mainBus);

    // Phase labels
    const phases = ['R', 'Y', 'B'];
    const phColors = [0xe74c3c, 0xf1c40f, 0x3498db];
    phases.forEach((ph, i) => {
      const bus = new (T().Mesh)(
        new (T().BoxGeometry)(6, 0.08, 0.06),
        createMaterial(phColors[i], { metalness: 0.8, emissive: phColors[i], emissiveIntensity: 0.1 })
      );
      bus.position.set(0, 1.7 - i * 0.15, 0);
      scene.pivot.add(bus);
    });

    // Main MCCB (incomer)
    const mainMCCB = new (T().Mesh)(
      new (T().BoxGeometry)(0.5, 0.6, 0.4),
      createMaterial(0x2a3a4e, { roughness: 0.5 })
    );
    mainMCCB.position.set(-2.5, 2.5, 0);
    scene.pivot.add(mainMCCB);

    // --- Interactivity ---
    scene.onHighlight = (varName) => {
      mainBus.scale.set(1, 1, 1);
      mainMCCB.scale.set(1, 1, 1);
      if (varName === 'Busbar' || varName === 'Bus' || varName === 'Phase') {
        mainBus.scale.set(1.1, 1.5, 1.2);
      } else if (varName === 'Incomer' || varName === 'MCCB') {
        mainMCCB.scale.set(1.3, 1.3, 1.3);
      }
    };

    // Feeder MCCBs (6 feeders)
    const feeders = [];
    for (let i = 0; i < 6; i++) {
      const x = -2.5 + i * 1;

      // Vertical bus drop
      const drop = new (T().Mesh)(
        new (T().BoxGeometry)(0.06, 1.5, 0.06),
        createMaterial(phColors[i % 3], { metalness: 0.7, emissive: phColors[i % 3], emissiveIntensity: 0.1 })
      );
      drop.position.set(x, 0.95, 0);
      scene.pivot.add(drop);

      // Feeder MCB
      const mcb = new (T().Mesh)(
        new (T().BoxGeometry)(0.35, 0.45, 0.3),
        createMaterial(0x2a2a3e, { roughness: 0.6 })
      );
      mcb.position.set(x, 0, 0);
      scene.pivot.add(mcb);

      // Lever on MCB
      const lever = new (T().Mesh)(
        new (T().BoxGeometry)(0.12, 0.25, 0.08),
        createMaterial(0xf5a623, { metalness: 0.7 })
      );
      lever.position.set(x, 0.15, 0.16);
      scene.pivot.add(lever);

      // Cable out
      const cable = new (T().Mesh)(
        new (T().CylinderGeometry)(0.03, 0.03, 1, 8),
        createMaterial(0x666677)
      );
      cable.position.set(x, -0.7, 0);
      scene.pivot.add(cable);

      feeders.push({ x, mcb, lever });
    }

    // Animated current flow
    const currentDots = [];
    for (let i = 0; i < 18; i++) {
      const dot = new (T().Mesh)(
        new (T().SphereGeometry)(0.04, 8, 8),
        createGlowMaterial(0x00e5ff, 0.8)
      );
      scene.pivot.add(dot);
      currentDots.push({
        mesh: dot,
        feeder: Math.floor(Math.random() * 6),
        t: Math.random()
      });
    }

    // Labels
    const labelsDiv = document.createElement('div');
    labelsDiv.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;pointer-events:none';
    labelsDiv.innerHTML = `
      <span style="font-family:var(--font-mono);font-size:.72rem;color:var(--text3)">
        Main Distribution Board — 6 Feeder MCBs — <span style="color:#e74c3c">R</span> <span style="color:#f1c40f">Y</span> <span style="color:#3498db">B</span> Phase Distribution
      </span>
    `;
    container.appendChild(labelsDiv);

    scene.onAnimate((time) => {
      currentDots.forEach(dot => {
        dot.t += 0.006;
        if (dot.t > 1) { dot.t = 0; dot.feeder = Math.floor(Math.random() * 6); }
        const fx = -2.5 + dot.feeder * 1;
        if (dot.t < 0.4) {
          // Along main bus
          dot.mesh.position.set(-3 + dot.t * 10, 2, 0.1);
        } else if (dot.t < 0.7) {
          // Down the drop
          const drop = (dot.t - 0.4) / 0.3;
          dot.mesh.position.set(fx, 2 - drop * 2, 0.1);
        } else {
          // Through MCB and cable
          const cable = (dot.t - 0.7) / 0.3;
          dot.mesh.position.set(fx, -cable * 1.2, 0.1);
        }
        dot.mesh.material.opacity = 0.5 + Math.sin(time * 4 + dot.t * 8) * 0.3;
      });
    });

    return scene;
  };

  // ── 9. ANIMATED SLD (Self-drawing with current flow) ──
  SCENE_REGISTRY['sld-basic'] = function(container) {
    const scene = new InteractiveScene(container, 'sld-basic');
    if (!scene.renderer) return null;

    scene.camera.position.set(0, 0, 10);

    // SLD components drawn as 3D wireframe
    const lineMat = createMaterial(0xf5a623, { emissive: 0xf5a623, emissiveIntensity: 0.2 });

    // Utility source (top)
    const source = new (T().Mesh)(
      new (T().CircleGeometry)(0.5, 32),
      createGlowMaterial(0xf5a623, 0.6)
    );
    source.position.set(0, 3.5, 0);
    scene.pivot.add(source);

    // Transformer symbol (two circles)
    const txPri = new (T().Mesh)(
      new (T().RingGeometry)(0.35, 0.4, 32),
      new (T().MeshBasicMaterial)({ color: 0xe74c3c, side: T().DoubleSide })
    );
    txPri.position.set(-0.2, 2, 0);
    scene.pivot.add(txPri);

    const txSec = new (T().Mesh)(
      new (T().RingGeometry)(0.35, 0.4, 32),
      new (T().MeshBasicMaterial)({ color: 0x3498db, side: T().DoubleSide })
    );
    txSec.position.set(0.2, 2, 0);
    scene.pivot.add(txSec);

    // Main CB
    const cbBody = new (T().Mesh)(
      new (T().BoxGeometry)(0.4, 0.3, 0.1),
      createMaterial(0x2a3a4e)
    );
    cbBody.position.set(0, 1, 0);
    scene.pivot.add(cbBody);

    // Bus bar
    const bus = new (T().Mesh)(
      new (T().BoxGeometry)(5, 0.08, 0.05),
      createMaterial(0xf5a623, { metalness: 0.8, emissive: 0xf5a623, emissiveIntensity: 0.15 })
    );
    bus.position.set(0, 0.3, 0);
    scene.pivot.add(bus);

    // Feeder branches
    const feederNames = ['DB-1\nLighting', 'DB-2\nPower', 'DB-3\nHVAC', 'DB-4\nSpare'];
    feederNames.forEach((name, i) => {
      const x = -1.5 + i * 1;

      // Vertical feeder
      const feeder = new (T().Mesh)(
        new (T().BoxGeometry)(0.04, 1.5, 0.04),
        createMaterial(0x4a90d9, { emissive: 0x4a90d9, emissiveIntensity: 0.1 })
      );
      feeder.position.set(x, -0.5, 0);
      scene.pivot.add(feeder);

      // Feeder CB
      const fcb = new (T().Mesh)(
        new (T().BoxGeometry)(0.25, 0.2, 0.08),
        createMaterial(0x2a2a3e)
      );
      fcb.position.set(x, -0.1, 0);
      scene.pivot.add(fcb);

      // Load symbol (box)
      const load = new (T().Mesh)(
        new (T().BoxGeometry)(0.5, 0.35, 0.1),
        createMaterial(0x1a2a3e, { emissive: 0x4a90d9, emissiveIntensity: 0.05 })
      );
      load.position.set(x, -1.5, 0);
      scene.pivot.add(load);
    });

    // Connecting lines (vertical from source to transformer to CB to bus)
    const verticals = [
      [0, 3, 0, 2.4],
      [0, 1.6, 0, 1.15],
      [0, 0.85, 0, 0.34]
    ];
    verticals.forEach(([x1, y1, x2, y2]) => {
      const line = new (T().Mesh)(
        new (T().BoxGeometry)(0.04, Math.abs(y1 - y2), 0.04),
        lineMat
      );
      line.position.set(x1, (y1 + y2) / 2, 0);
      scene.pivot.add(line);
    });

    // Current flow animation
    const sldDots = [];
    for (let i = 0; i < 16; i++) {
      const d = new (T().Mesh)(
        new (T().SphereGeometry)(0.04, 8, 8),
        createGlowMaterial(0x00e5ff, 0.8)
      );
      scene.pivot.add(d);
      sldDots.push({ mesh: d, path: Math.floor(Math.random() * 4), t: Math.random() });
    }

    scene.onAnimate((time) => {
      sldDots.forEach(dot => {
        dot.t += 0.005;
        if (dot.t > 1) { dot.t = 0; dot.path = Math.floor(Math.random() * 4); }
        const fx = -1.5 + dot.path * 1;
        if (dot.t < 0.3) {
          dot.mesh.position.set(0, 3.5 - dot.t * 8, 0.05);
        } else if (dot.t < 0.5) {
          const bt = (dot.t - 0.3) / 0.2;
          dot.mesh.position.set(bt * fx, 0.3, 0.05);
        } else {
          const ft = (dot.t - 0.5) / 0.5;
          dot.mesh.position.set(fx, 0.3 - ft * 2.1, 0.05);
        }
      });

      // Pulse source
      source.material.opacity = 0.4 + Math.sin(time * 2) * 0.2;
    });

    return scene;
  };

  // ── 10. VOLTAGE DROP — Cable Visualization ──
  SCENE_REGISTRY['voltage-drop-diagram'] = function(container) {
    const scene = new InteractiveScene(container, 'voltage-drop');
    if (!scene.renderer) return null;

    scene.camera.position.set(0, 1, 8);

    // Source end
    const srcPanel = new (T().Mesh)(
      new (T().BoxGeometry)(0.8, 1.5, 0.5),
      createMaterial(0x2a3a4e, { roughness: 0.5 })
    );
    srcPanel.position.set(-3.5, 0, 0);
    scene.pivot.add(srcPanel);

    // Load end
    const loadPanel = new (T().Mesh)(
      new (T().BoxGeometry)(0.6, 1, 0.4),
      createMaterial(0x1a2a3e)
    );
    loadPanel.position.set(3.5, 0, 0);
    scene.pivot.add(loadPanel);

    // Cable (copper conductor)
    const cablePoints = [];
    for (let i = 0; i <= 50; i++) {
      cablePoints.push(new (T().Vector3)(-3 + i * 0.12, 0.3, 0));
    }
    const cableCurve = new (T().CatmullRomCurve3)(cablePoints);
    const cable = new (T().Mesh)(
      new (T().TubeGeometry)(cableCurve, 50, 0.08, 8, false),
      createMaterial(0xb87333, { metalness: 0.7, roughness: 0.3 })
    );
    scene.pivot.add(cable);

    // Return conductor
    const retPoints = cablePoints.map(p => new (T().Vector3)(p.x, -0.3, 0));
    const retCurve = new (T().CatmullRomCurve3)(retPoints);
    const retCable = new (T().Mesh)(
      new (T().TubeGeometry)(retCurve, 50, 0.08, 8, false),
      createMaterial(0x3498db, { metalness: 0.5 })
    );
    scene.pivot.add(retCable);

    // Voltage gradient (color bar)
    for (let i = 0; i < 20; i++) {
      const ratio = i / 20;
      const voltColor = new (T().Color)().lerpColors(
        new (T().Color)(0x27ae60),
        new (T().Color)(0xe74c3c),
        ratio
      );
      const seg = new (T().Mesh)(
        new (T().BoxGeometry)(0.3, 0.08, 0.04),
        new (T().MeshBasicMaterial)({ color: voltColor, transparent: true, opacity: 0.7 })
      );
      seg.position.set(-3 + i * 0.32, 0.7, 0);
      scene.pivot.add(seg);
    }

    // Labels
    const labelsDiv = document.createElement('div');
    labelsDiv.style.cssText = 'position:absolute;top:10px;left:0;right:0;display:flex;justify-content:space-between;padding:0 20px;pointer-events:none';
    labelsDiv.innerHTML = `
      <span style="font-family:var(--font-mono);font-size:.75rem;color:#27ae60">Source: 415V</span>
      <span style="font-family:var(--font-mono);font-size:.7rem;color:var(--text3)">VD = I × Z × L — voltage drops along cable length</span>
      <span style="font-family:var(--font-mono);font-size:.75rem;color:#e74c3c">Load: 400V (3.6% drop)</span>
    `;
    container.appendChild(labelsDiv);

    // Current flow
    const vdDots = [];
    for (let i = 0; i < 10; i++) {
      const d = new (T().Mesh)(
        new (T().SphereGeometry)(0.04, 8, 8),
        createGlowMaterial(0x00e5ff, 0.8)
      );
      scene.pivot.add(d);
      vdDots.push({ mesh: d, t: i / 10 });
    }

    scene.onAnimate((time) => {
      vdDots.forEach(d => {
        d.t = (d.t + 0.004) % 1;
        if (d.t < 0.5) {
          const x = -3 + d.t * 12;
          d.mesh.position.set(x, 0.3, 0.1);
        } else {
          const x = 3 - (d.t - 0.5) * 12;
          d.mesh.position.set(x, -0.3, 0.1);
        }
      });
    });

    return scene;
  };

  // ══════════════════════════════════════════
  // INTERACTIVE FORMULA EXPLORER
  // ══════════════════════════════════════════
  function initFormulaExplorer() {
    // Find all formula blocks and add hover interactivity
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-formula-var]');
      if (!target) return;
      const varName = target.dataset.formulaVar;
      const container = target.closest('[data-formula-group]');
      if (!container) return;

      // Highlight all matching variables
      container.querySelectorAll(`[data-formula-var="${varName}"]`).forEach(el => {
        el.style.background = 'rgba(245, 166, 35, 0.2)';
        el.style.borderRadius = '3px';
        el.style.padding = '0 3px';
        el.style.color = '#f5a623';
        el.style.transition = 'all 0.2s';
      });

      // Phase 5: Highlight in 3D scene if active
      if (activeScene) activeScene.highlightVariable(varName);
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-formula-var]');
      if (!target) return;
      const container = target.closest('[data-formula-group]');
      if (!container) return;

      container.querySelectorAll(`[data-formula-var]`).forEach(el => {
        el.style.background = '';
        el.style.padding = '';
        el.style.color = '';
      });

      // Phase 5: Clear highlighting in 3D scene
      if (activeScene) activeScene.clearHighlights();
    });
  }

  // Auto-enhance formula blocks on page render
  function enhanceFormulas() {
    document.querySelectorAll('pre').forEach(pre => {
      if (pre.dataset.enhanced) return;
      const text = pre.textContent;
      // Detect formula blocks (contain = and common electrical variables)
      if (!text.includes('=') || text.length > 500) return;

      const formulaVars = {
        'V': 'Voltage (Volts)', 'I': 'Current (Amperes)', 'R': 'Resistance (Ohms)',
        'P': 'Power (Watts)', 'Z': 'Impedance (Ohms)', 'S': 'Apparent Power (kVA)',
        'Q': 'Reactive Power (kVAr)', 'PF': 'Power Factor', 'f': 'Frequency (Hz)',
        'cosφ': 'Power Factor angle', 'sinφ': 'Sine of PF angle',
        'XL': 'Inductive Reactance', 'XC': 'Capacitive Reactance',
        'Isc': 'Short Circuit Current', 'Vrms': 'RMS Voltage', 'Vpeak': 'Peak Voltage',
        'kVA': 'Apparent Power (kVA)', 'kW': 'Active Power (kW)', 'Z%': 'Impedance Percentage',
        'FLC': 'Full Load Current'
      };

      let html = pre.innerHTML;
      let hasVars = false;

      // Sort by length (longest first to avoid partial matches)
      const sortedVars = Object.keys(formulaVars).sort((a, b) => b.length - a.length);

      sortedVars.forEach(v => {
        // Match standalone variables using word boundary approach
        const escaped = v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp('(?:^|[^a-zA-Z])(' + escaped + ')(?=[^a-zA-Z_]|$)', 'g');
        if (regex.test(html)) {
          hasVars = true;
          regex.lastIndex = 0;
          html = html.replace(regex, (match, p1) => {
            return match.replace(p1, `<span data-formula-var="${v}" title="${formulaVars[v]}" style="cursor:help;text-decoration:underline;text-decoration-style:dotted;text-decoration-color:rgba(245,166,35,0.4)">${v}</span>`);
          });
        }
      });

      if (hasVars) {
        pre.innerHTML = html;
        pre.setAttribute('data-formula-group', '');
        pre.dataset.enhanced = 'true';
      }
    });
  }

  // ══════════════════════════════════════════
  // PHASE 6: PERFORMANCE & MOBILE OPTIMIZATION
  // ══════════════════════════════════════════

  const PERF = {
    isMobile: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768,
    isLowPower: navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 2 : false,
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    webglSupported: (() => {
      try {
        const c = document.createElement('canvas');
        return !!(c.getContext('webgl2') || c.getContext('webgl'));
      } catch(e) { return false; }
    })(),
    maxPixelRatio: 1.5 // cap for performance
  };

  // Mobile fallback: show a static CSS-powered visual instead of WebGL
  function renderMobileFallback(container, sceneId) {
    const fallbacks = {
      'ohms-law-beg': {
        title: '⚡ Ohm\'s Law Circuit',
        desc: 'V = I × R — Interactive 3D circuit',
        icon: '🔌'
      },
      'ohms-law-adv': {
        title: '📐 Impedance Triangle',
        desc: 'Z = √(R² + X²) — 3D impedance visualization',
        icon: '📊'
      },
      '3ph-star-delta': {
        title: '🔺 Star & Delta Connections',
        desc: 'VL = √3 × VP — 3D phase visualization',
        icon: '⭐'
      },
      'power-triangle': {
        title: '📐 Power Triangle',
        desc: 'S = √(P² + Q²) — Interactive P/Q/S triangle',
        icon: '⚡'
      },
      'breaker-selection-diagram': {
        title: '🔧 MCB Trip Mechanism',
        desc: 'Interactive circuit breaker with fault simulation',
        icon: '⚡'
      },
      'transformer-sld': {
        title: '🔄 Transformer Flux',
        desc: 'Animated magnetic flux through E-I core',
        icon: '🧲'
      },
      'mdb-sld': {
        title: '📋 Distribution Board',
        desc: '6-feeder MDB with current flow animation',
        icon: '🔌'
      }
    };

    const fb = fallbacks[sceneId] || { title: '3D Diagram', desc: 'Interactive visualization', icon: '📊' };

    container.innerHTML = `
      <div style="padding:32px;text-align:center;background:linear-gradient(135deg, rgba(11,15,26,0.95), rgba(26,36,64,0.9));border-radius:var(--radius);border:1px solid rgba(245,166,35,0.15)">
        <div style="font-size:3rem;margin-bottom:12px;filter:drop-shadow(0 0 10px rgba(245,166,35,0.3))">${fb.icon}</div>
        <div style="font-family:var(--font-head);font-size:1rem;color:var(--accent);margin-bottom:6px">${fb.title}</div>
        <div style="font-family:var(--font-mono);font-size:.78rem;color:var(--text3);margin-bottom:12px">${fb.desc}</div>
        <div style="font-size:.72rem;color:var(--text3);opacity:0.6">
          🖥️ View on desktop for full 3D interactive experience
        </div>
      </div>
    `;
  }

  // ══════════════════════════════════════════
  // SCENE ALIASES — map advanced-level svgIds & variants to existing scenes
  // ══════════════════════════════════════════
  const ALIASES = {
    // L1 advanced variants
    'ac-dc-waveform':         'ac-dc-comparison',
    '3ph-phasor':             '3ph-star-delta',
    'pf-phasor':              'power-triangle',
    // L2 advanced variants
    'vd-adv-diagram':         'voltage-drop-diagram',
    'pf-correction-diagram':  'power-triangle',
    'pf-detuned-diagram':     'power-triangle',
    // L3 advanced variants
    'transformer-adv-sld':    'transformer-sld',
    'mdb-adv-sld':            'mdb-sld',
    'breaker-coord-diagram':  'breaker-selection-diagram',
    // L1 SLD intro
    'sld-advanced':           'sld-basic',
    // L4 SLD variants
    'short-circuit-sld':      'sld-basic',
    'short-circuit-adv-sld':  'sld-basic',
    'dc-redundancy-sld':      'mdb-sld',
    'dc-redundancy-adv-sld':  'mdb-sld',
    // L3 SLD variants
    'dg-sld':                 'sld-basic',
    'dg-adv-sld':             'sld-basic',
    'ups-sld':                'sld-basic',
    'ups-adv-sld':            'sld-basic',
  };

  // Register aliases
  Object.entries(ALIASES).forEach(([alias, target]) => {
    if (SCENE_REGISTRY[target] && !SCENE_REGISTRY[alias]) {
      SCENE_REGISTRY[alias] = SCENE_REGISTRY[target];
    }
  });

  // ══════════════════════════════════════════
  // PUBLIC API
  // ══════════════════════════════════════════
  let activeScene = null;

  function hasScene(svgId) {
    return !!SCENE_REGISTRY[svgId];
  }

  function createScene(container, svgId) {
    destroyScene();

    // Phase 6: Skip 3D for reduced motion preference
    if (PERF.prefersReducedMotion) {
      renderMobileFallback(container, svgId);
      return null;
    }

    // Phase 6: Mobile or no WebGL → fallback
    if ((PERF.isMobile && PERF.isLowPower) || !PERF.webglSupported) {
      renderMobileFallback(container, svgId);
      return null;
    }

    if (!T() || !SCENE_REGISTRY[svgId]) {
      // Three.js not loaded yet — try once more after delay
      if (!T()) {
        setTimeout(() => {
          if (T() && SCENE_REGISTRY[svgId]) {
            activeScene = SCENE_REGISTRY[svgId](container);
          } else {
            renderMobileFallback(container, svgId);
          }
        }, 1000);
        return null;
      }
      return null;
    }

    activeScene = SCENE_REGISTRY[svgId](container);
    return activeScene;
  }

  function destroyScene() {
    if (activeScene) {
      activeScene.destroy();
      activeScene = null;
    }
  }

  // ── INIT formula explorer on page loads ──
  function initAll() {
    initFormulaExplorer();

    // Watch for page renders to enhance formulas
    const observer = new MutationObserver(() => {
      requestAnimationFrame(enhanceFormulas);
    });
    const main = document.getElementById('main');
    if (main) observer.observe(main, { childList: true, subtree: true });

    // Initial enhancement
    setTimeout(enhanceFormulas, 500);
  }

  // Run when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // ── EXPOSE ──
  window.ElecScenes = {
    hasScene,
    createScene,
    destroyScene,
    registry: SCENE_REGISTRY,
    perf: PERF,
    enhanceFormulas
  };

})();

