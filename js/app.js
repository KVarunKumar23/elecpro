/* ═══════════════════════════════════════════════════
   ElecPro — app.js
   Router · State · Render Engine · Search · Theme
   ═══════════════════════════════════════════════════ */

// ── STATE ──
const STATE = {
  std: 'IS',
  theme: 'dark',
  page: 'home',
  module: 'learn',
  sidebarOpen: true,
  topicId: null,
  searchQuery: ''
};
window.STATE = STATE;

// ── DYNAMIC ASSET LOADER ──
const LOADED_SCRIPTS = new Set();
const PENDING_SCRIPTS = new Map();

async function loadScript(src) {
  if (LOADED_SCRIPTS.has(src)) return Promise.resolve();
  if (PENDING_SCRIPTS.has(src)) return PENDING_SCRIPTS.get(src);

  const p = new Promise((resolve, reject) => {
    // Double check DOM
    if (document.querySelector(`script[src="${src}"]`)) {
      LOADED_SCRIPTS.add(src);
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.onload = () => { 
      LOADED_SCRIPTS.add(src); 
      PENDING_SCRIPTS.delete(src);
      resolve(); 
    };
    s.onerror = (err) => { 
      PENDING_SCRIPTS.delete(src);
      console.error(`Failed to load script: ${src}`, err); 
      reject(err); 
    };
    document.body.appendChild(s);
  });

  PENDING_SCRIPTS.set(src, p);
  return p;
}
window.loadScript = loadScript;

// All topics combined
let ALL_TOPICS = [];

function getTopicSectors(t) {
  if (!t) return [];
  const s = t.sectors ? [...t.sectors] : [];
  if (t.green && !s.includes('grn')) s.push('grn');
  return s;
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  ALL_TOPICS = [
    ...(window.TOPICS_L1 || []),
    ...(window.TOPICS_L2 || []),
    ...(window.TOPICS_L3 || []),
    ...(window.TOPICS_L4 || [])
  ];

  // Restore theme preference
  const savedTheme = localStorage.getItem('elecpro-theme') || 'dark';
  setTheme(savedTheme, false);

  // Restore standard preference
  const savedStd = localStorage.getItem('elecpro-std') || 'IS';
  setStd(savedStd, false);

  buildSidebar();
  initSearch();
  initKeyboardNav();

  // Initial route
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
      navigateTo(e.state.page, e.state.extra, false);
    } else {
      navigateTo('home', null, false);
    }
  });

  // Initial route
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    if (hash.startsWith('topic:')) navigateTo('topic', hash.split(':')[1], false);
    else navigateTo(hash, null, false);
  } else {
    // Check local storage for last topic, else home
    const lastTopic = localStorage.getItem('lastTopic');
    if (lastTopic) {
      // Optional: Ask user or just resume. For true UX we could go home and show sticky resume, or simply:
      navigateTo('home', null, false); 
    } else {
      navigateTo('home', null, false);
    }
  }
});

// Advanced topics are now statically loaded in index.html for filesystem compatibility.

function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('search-drop')?.classList.remove('open');
      // Close sidebar on mobile with proper scroll-lock cleanup
      if (STATE.sidebarOpen && window.innerWidth <= 900) {
        closeSidebar();
      }
    }
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      document.getElementById('search-input')?.focus();
    }
    if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && STATE.page === 'topic' && STATE.topicId && document.activeElement.tagName !== 'INPUT') {
      const idx = ALL_TOPICS.findIndex(t => t.id === STATE.topicId);
      if (idx !== -1) {
        const next = e.key === 'ArrowRight' ? ALL_TOPICS[idx + 1] : ALL_TOPICS[idx - 1];
        if (next) navigateTo('topic', next.id);
      }
    }
  });
}

// ── THEME ──
function setTheme(t, save = true) {
  STATE.theme = t;
  document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : '');
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = t === 'light' ? '🌙' : '☀️';
  if (save) localStorage.setItem('elecpro-theme', t);
}
function toggleTheme() {
  setTheme(STATE.theme === 'dark' ? 'light' : 'dark');
}

// ── STANDARD SWITCHER ──
function setStd(s, save = true) {
  STATE.std = s;
  document.body.setAttribute('data-std', s);
  document.querySelectorAll('.std-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.std === s));
  // Update terminology in topbar/pills
  document.querySelectorAll('[data-std-name]').forEach(el =>
    el.textContent = STANDARDS[s].name);
  document.querySelectorAll('[data-term-earth]').forEach(el =>
    el.textContent = STANDARDS[s].terms.earth);
  if (save) localStorage.setItem('elecpro-std', s);
  
  // Re-render active page if it is term-sensitive
  if (STATE.page === 'topic' && STATE.topicId) {
    renderTopic(STATE.topicId);
  } else if (STATE.page === 'calc') {
    if (typeof renderCalcPageFull === 'function') renderCalcPageFull();
  } else if (STATE.page === 'practice') {
    if (typeof renderPractice === 'function') renderPractice();
  } else if (STATE.page === 'quiz') {
    if (typeof renderQuiz === 'function') renderQuiz();
  }
}

// ── SIDEBAR TOGGLE ──
function toggleSidebar() {
  STATE.sidebarOpen = !STATE.sidebarOpen;
  document.getElementById('sidebar').classList.toggle('collapsed', !STATE.sidebarOpen);
  document.getElementById('main').classList.toggle('expanded', !STATE.sidebarOpen);

  if (window.innerWidth <= 900) {
    document.getElementById('sidebar').classList.toggle('mob-open', STATE.sidebarOpen);
    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) overlay.classList.toggle('active', STATE.sidebarOpen);
    document.body.classList.toggle('scroll-lock', STATE.sidebarOpen);
  }
}

function closeSidebar() {
  if (!STATE.sidebarOpen) return;
  STATE.sidebarOpen = false;
  document.getElementById('sidebar').classList.add('collapsed');
  document.getElementById('sidebar').classList.remove('mob-open');
  document.getElementById('main').classList.add('expanded');
  const overlay = document.getElementById('sidebar-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.classList.remove('scroll-lock');
}

// ── MODULE TABS ──
function setModule(mod) {
  STATE.module = mod;
  document.querySelectorAll('.mod-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.mod === mod));
  navigateTo(mod);
}

// ── NAVIGATION ──
function navigateTo(page, extra = null, push = true) {
  STATE.page = page;
  
  // Show Loading state
  const loader = document.getElementById('loader');
  if (loader) loader.classList.remove('hidden');

  // URL State Management
  if (push) {
    const hash = page === 'topic' && extra ? `topic:${extra}` : page;
    window.history.pushState({page, extra}, "", "#" + hash);
  }

  // Remove sticky calc globally before re-rendering
  const existingCalcBtn = document.getElementById('sticky-calc-btn-global');
  if (existingCalcBtn) existingCalcBtn.remove();

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Mark active nav item
  document.querySelectorAll('.nav-item').forEach(n =>
    n.classList.toggle('active', n.dataset.page === page));

  // Sync mobile bottom nav active state
  const mobNavMap = { home:'home', learn:'learn', topic:'learn', quiz:'quiz', calc:'calc', practice:'more', ref:'more', projects:'more', mistakes:'more' };
  const mobActive = mobNavMap[page] || 'home';
  document.querySelectorAll('.mob-nav-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.page === mobActive));

  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // Render page content
  try {
    const renders = {
      home:     renderHome,
      learn:    () => renderLearn(extra),
      topic:    () => renderTopic(extra),
      calc:     renderCalc,
      quiz:     renderQuiz,
      practice: renderPractice,
      ref:      renderRef,
      projects: renderProjects,
      mistakes: renderMistakes,
    };
    if (renders[page]) renders[page]();
  } catch (err) {
    console.error('Render error:', err);
    showError('Something went wrong while loading this page. Try refreshing or navigating to another section.', err.message);
  }
  window.scrollTo(0, 0);

  if (window.innerWidth <= 900 && STATE.sidebarOpen) toggleSidebar();
  if (loader) setTimeout(() => loader.classList.add('hidden'), 200);
}

// ── SIDEBAR ──
function buildSidebar() {
  const el = document.getElementById('sidebar-nav');
  const levels = [
    { num:1, label:'Level 1 — Fundamentals', topics: window.TOPICS_L1 || [], color:'var(--l1)' },
    { num:2, label:'Level 2 — Core Design',  topics: window.TOPICS_L2 || [], color:'var(--l2)' },
    { num:3, label:'Level 3 — Equipment Sizing', topics: window.TOPICS_L3 || [], color:'var(--l3)' },
    { num:4, label:'Level 4 — Advanced',     topics: window.TOPICS_L4 || [], color:'var(--l4)' },
  ];

  el.innerHTML = `
    <div class="nav-sect">
      <div class="nav-sect-lbl" onclick="toggleNavSect(this)">
        <span>Main</span><span class="lbl-line"></span><span class="lbl-chev">▾</span>
      </div>
      <div class="nav-sect-items" style="max-height:999px">
        <div class="nav-item" data-page="home" onclick="navigateTo('home')">
          <span class="nav-ico">🏠</span> Dashboard
        </div>
      </div>
    </div>

    <div class="nav-sect">
      <div class="nav-sect-lbl" onclick="toggleNavSect(this)">
        <span>Modules</span><span class="lbl-line"></span><span class="lbl-chev">▾</span>
      </div>
      <div class="nav-sect-items" style="max-height:999px">
        <div class="nav-item" data-page="learn" onclick="navigateTo('learn')">
          <span class="nav-ico">📚</span> Learn <span class="nav-bdg">${ALL_TOPICS.length}</span>
        </div>
        <div class="nav-item" data-page="calc" onclick="navigateTo('calc')">
          <span class="nav-ico">🧮</span> Calculate <span class="nav-bdg">14</span>
        </div>
        <div class="nav-item" data-page="quiz" onclick="navigateTo('quiz')">
          <span class="nav-ico">❓</span> Quiz <span class="nav-bdg">${(window.QUIZ_BANK||[]).length}</span>
        </div>
        <div class="nav-item" data-page="practice" onclick="navigateTo('practice')">
          <span class="nav-ico">⚡</span> Practice Mode
        </div>
        <div class="nav-item" data-page="ref" onclick="navigateTo('ref')">
          <span class="nav-ico">📋</span> Reference Tables
        </div>
      </div>
    </div>

    ${levels.map(lv => `
    <div class="nav-sect">
      <div class="nav-sect-lbl" onclick="toggleNavSect(this)">
        <span style="color:${lv.color}">L${lv.num}</span>
        <span style="font-size:.58rem;opacity:.7;margin-left:4px">${lv.label.split('—')[1].trim()}</span>
        <span class="lbl-line"></span><span class="lbl-chev">▾</span>
      </div>
      <div class="nav-sect-items" style="max-height:999px">
        ${lv.topics.map(t => `
          <div class="nav-sub" data-topicid="${t.id}" onclick="navigateTo('topic','${t.id}')">
            <span style="opacity:.7">${t.icon}</span> ${t.title}
          </div>`).join('')}
      </div>
    </div>`).join('')}

    <div class="nav-sect">
      <div class="nav-sect-lbl" onclick="toggleNavSect(this)">
        <span>Special Modes</span><span class="lbl-line"></span><span class="lbl-chev">▾</span>
      </div>
      <div class="nav-sect-items" style="max-height:999px">
        <div class="nav-item" data-page="projects" onclick="navigateTo('projects')">
          <span class="nav-ico">🧠</span> Design Thinking
        </div>
        <div class="nav-item" data-page="mistakes" onclick="navigateTo('mistakes')">
          <span class="nav-ico">⚠️</span> Mistakes Database
        </div>
      </div>
    </div>
  `;
}

function toggleNavSect(el) {
  const sect = el.closest('.nav-sect');
  const items = sect.querySelector('.nav-sect-items');
  const isOpen = !sect.classList.contains('closed');
  if (isOpen) {
    items.style.maxHeight = items.scrollHeight + 'px';
    requestAnimationFrame(() => {
      items.style.maxHeight = '0px';
      sect.classList.add('closed');
    });
  } else {
    items.style.maxHeight = '0px';
    sect.classList.remove('closed');
    requestAnimationFrame(() => {
      items.style.maxHeight = items.scrollHeight + 300 + 'px';
    });
  }
}

// ── HOME PAGE ──
function renderHome() {
  const el = document.getElementById('home-content');
  const std = STANDARDS[STATE.std];

  el.innerHTML = `
    <div class="home-hero">
      <div class="eyebrow">Electrical Engineering Learning Portal</div>
      <h1 class="hero-h1">Design. <em>Calculate.</em> Master.</h1>
      <p class="hero-p">
        A comprehensive portal covering ${ALL_TOPICS.length} topics across 4 levels — from Ohm's Law to Arc Flash Analysis.
        Aligned to ${std.name}, NEC, and IEC standards. Works fully offline.
      </p>
      <div class="hero-actions">
        <button class="btn btn-primary" onclick="navigateTo('learn')">Browse Library</button>
        <button class="btn btn-outline" onclick="navigateTo('calc')">Open Calculators</button>
      </div>
    </div>

    <!-- ENTRY POINT -->
    <div class="start-card" onclick="navigateTo('topic', window.TOPICS_L1 ? window.TOPICS_L1[0].id : null)" style="cursor:pointer" tabindex="0" role="button">
      <h2>Start Learning Electrical Design</h2>
      <p>Beginner → Intermediate → Advanced → Projects</p>
      <button class="btn btn-primary" onclick="event.stopPropagation(); navigateTo('topic', window.TOPICS_L1 ? window.TOPICS_L1[0].id : null)">Start Here</button>
    </div>

    <div class="stats-row">
      <div class="stat-card"><div class="stat-val">${ALL_TOPICS.length}</div><div class="stat-label">Topics</div></div>
      <div class="stat-card"><div class="stat-val">14</div><div class="stat-label">Calculators</div></div>
      <div class="stat-card"><div class="stat-val">${(window.QUIZ_BANK||[]).length}</div><div class="stat-label">Quiz Questions</div></div>
      <div class="stat-card"><div class="stat-val">3</div><div class="stat-label">Standards</div></div>
      <div class="stat-card"><div class="stat-val">7</div><div class="stat-label">Sectors</div></div>
      <div class="stat-card"><div class="stat-val">7</div><div class="stat-label">Projects</div></div>
    </div>

    <div class="slabel">Guided Learning Paths</div>
    <div class="path-grid">
      ${LEARNING_PATHS.map(lp => `
        <div class="path-card" onclick="navigateTo('learn')">
          <div class="path-icon">${lp.icon}</div>
          <div>
            <div class="path-title">${lp.title}</div>
            <div class="path-desc">${lp.desc}</div>
            <div class="path-meta">Starts at Level ${lp.startLevel} · ${lp.estimatedTime}</div>
          </div>
        </div>`).join('')}
    </div>

    <div class="slabel">Sector Tracks</div>
    <div class="sector-grid">
      ${Object.values(SECTORS).map(s => sectorCard(s)).join('')}
    </div>

    <div class="slabel">Special Features</div>
    <div class="special-grid">
      ${SPECIAL_MODES.map(m => `
        <div class="sp" onclick="navigateTo('${m.page}')">
          <div class="sp-icon">${m.icon}</div>
          <div class="sp-title">${m.title}</div>
          <div class="sp-desc">${m.desc}</div>
        </div>`).join('')}
    </div>
  `;
}

function sectorCard(s) {
  const allTopics = [
    ...(window.TOPICS_L1 || []),
    ...(window.TOPICS_L2 || []),
    ...(window.TOPICS_L3 || []),
    ...(window.TOPICS_L4 || [])
  ];

  const sTopics = allTopics.filter(t => getTopicSectors(t).includes(s.id));
  const tCount = sTopics.length > 0 ? sTopics.length : (s.topicCount || 0);
  const displayNames = sTopics.length > 0 ? sTopics.map(t => t.title) : (s.path || []);

  const steps = displayNames.slice(0, 5).map(p => {
    const escP = p.replace(/'/g, "\\'");
    return `<span class="step" data-term="${p.replace(/"/g, '&quot;')}" onclick="event.stopPropagation();navigateTo('learn','${escP}')">${p}</span>`;
  }).join('');
  
  const more = displayNames.length > 5 ? `<span class="step" onclick="event.stopPropagation();navigateTo('learn','${s.id}')">+${displayNames.length - 5} more</span>` : '';
  
  return `
    <div class="sc ${s.id}" onclick="navigateTo('learn','${s.id}')">
      <div class="sc-head">
        <div class="sc-icon">${s.icon}</div>
        <div>
          <div class="sc-name">${s.name}</div>
          <div class="sc-std">${s.std}</div>
        </div>
      </div>
      <div class="sc-body">
        <div class="sc-path">${steps}${more}</div>
      </div>
      <div class="sc-foot">
        <span class="sc-count">${tCount} topics</span>
        <button class="sc-cta" onclick="event.stopPropagation();navigateTo('learn','${s.id}')">Start →</button>
      </div>
    </div>`;
}

// ── LEARN PAGE ──
function renderLearn(filter = null) {
  const el = document.getElementById('learn-content');
  
  let levels = [
    { num:1, label:'Fundamentals', color:'var(--l1)', topics: window.TOPICS_L1 || [] },
    { num:2, label:'Core Design',  color:'var(--l2)', topics: window.TOPICS_L2 || [] },
    { num:3, label:'Equipment Sizing', color:'var(--l3)', topics: window.TOPICS_L3 || [] },
    { num:4, label:'Advanced Systems', color:'var(--l4)', topics: window.TOPICS_L4 || [] },
  ];

  let filterLabel = '';
  if (filter) {
    // Check if filter is a sector ID
    const sector = window.SECTORS?.[filter];
    if (sector) {
      filterLabel = `Sector: ${sector.name}`;
      levels = levels.map(lv => ({
        ...lv,
        topics: lv.topics.filter(t => getTopicSectors(t).includes(filter))
      }));
    } else {
      // Treat as keyword search
      filterLabel = `Search: "${filter}"`;
      const q = filter.toLowerCase();
      levels = levels.map(lv => ({
        ...lv,
        topics: lv.topics.filter(t =>
          t.title.toLowerCase().includes(q) ||
          (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q)))
        )
      }));
    }
  }

  const hasResults = levels.some(lv => lv.topics.length > 0);

  el.innerHTML = `
    <div class="page-hdr">
      <div class="ph-left">
        <div class="eyebrow">Module</div>
        <h1 class="page-title">Learn — <em>${filter ? 'Filtered' : 'All Topics'}</em></h1>
        <p class="page-desc">Select any topic to study. Each has a Beginner and Advanced page, worked examples, calculator, and quiz aligned to <span data-std-name>${STANDARDS[STATE.std].name}</span>.</p>
        
        ${filter ? `
          <div style="margin-top:16px; display:flex; align-items:center; gap:12px;">
            <div style="padding:6px 12px; background:var(--bg3); border:1px solid var(--accent); border-radius:100px; font-size:0.8rem; color:var(--accent); font-weight:600;">
              🔍 ${filterLabel}
            </div>
            <button class="btn btn-sm btn-outline" onclick="navigateTo('learn')">Clear Filter</button>
          </div>
        ` : ''}
      </div>
      <span class="std-pill" data-std-name>${STANDARDS[STATE.std].name}</span>
    </div>

    ${!hasResults ? `
      <div style="padding:60px; text-align:center; color:var(--text3);">
        <div style="font-size:3rem; margin-bottom:16px;">🔍</div>
        <h3>No topics found for this filter</h3>
        <button class="btn btn-primary mt-16" onclick="navigateTo('learn')">View All Topics</button>
      </div>
    ` : levels.map(lv => lv.topics.length > 0 ? `
      <div class="mb-24">
        <div class="slabel">
          <span class="tag l${lv.num}" style="font-size:.7rem;padding:3px 8px">Level ${lv.num}</span>
          ${lv.label} — ${lv.topics.length} topics
        </div>
        <div class="topic-list">
          ${lv.topics.map(t => topicRow(t)).join('')}
        </div>
      </div>
    ` : '').join('')}
  `;
}

function topicRow(t) {
  const sectorTags = getTopicSectors(t).slice(0, 3).map(s =>
    `<span class="tag ${s}">${s.toUpperCase()}</span>`).join('');
  const greenTag = t.green ? `<span class="tag grn">🌿 Green</span>` : '';
  return `
    <div class="topic-row" onclick="navigateTo('topic','${t.id}')">
      <span class="tr-icon">${t.icon}</span>
      <span class="tr-title">${t.title}</span>
      <div class="tr-tags">${sectorTags}${greenTag}</div>
    </div>`;
}

function showError(msg) {
  return `<div style="padding:40px;text-align:center;color:var(--red)"><div style="font-size:3rem;margin-bottom:10px">⚠️</div><h2 style="font-family:var(--font-head);margin-bottom:10px">Error</h2><p>${msg}</p><button class="btn btn-outline mt-16" onclick="navigateTo('home')">Go Home</button></div>`;
}

// ── TOPIC PAGE DATA BINDING ──
function renderTopic(id) {
  const el = document.getElementById('topic-content');
  if (!id) { el.innerHTML = showError("Topic ID is missing"); return; }
  
  STATE.topicId = id;
  // Save user state explicitly
  localStorage.setItem("lastTopic", id);

  const t = ALL_TOPICS.find(x => x.id === id);
  if (!t) { el.innerHTML = showError("Topic not found. It may be part of an advanced module not yet loaded."); return; }

  // Mark active in sidebar
  document.querySelectorAll('.nav-sub').forEach(node =>
    node.classList.toggle('active', node.dataset.topicid === id));

  const std = STANDARDS[STATE.std];
  const levelColors = { 1:'var(--l1)', 2:'var(--l2)', 3:'var(--l3)', 4:'var(--l4)' };

  // Generate sticky calculator button if applicable
  if (t.calculator) {
    const btn = document.createElement('button');
    btn.id = 'sticky-calc-btn-global';
    btn.className = 'sticky-calc-btn show';
    btn.innerHTML = '🧮 Open Calculator';
    btn.onclick = () => navigateTo('calc');
    btn.setAttribute('aria-label', `Open calculator for ${t.title}`);
    document.body.appendChild(btn);
  }

  el.innerHTML = `
    <div class="page-hdr">
      <div class="ph-left">
        <div class="eyebrow">
          <span class="tag l${t.level}">Level ${t.level}</span>
          Learn › ${t.title}
        </div>
        <h1 class="page-title">${t.icon} <em>${t.title}</em></h1>
        <p class="page-desc">${t.desc}</p>
        
        <!-- QUICK ACTION BAR -->
        <div class="quick-actions">
          <span style="opacity:.6">Jump to:</span>
          <button onclick="document.getElementById('view-theory')?.scrollIntoView({behavior:'smooth', block:'start'})">Concept</button>
          <button onclick="document.getElementById('ex-sec')?.scrollIntoView({behavior:'smooth', block:'center'})">Example</button>
          ${t.calculator ? `<button onclick="navigateTo('calc')">Calculator</button>` : ''}
          <button onclick="document.getElementById('pz-sec')?.scrollIntoView({behavior:'smooth', block:'center'})">Quiz</button>
        </div>
      </div>
      <span class="std-pill">${std.name}</span>
    </div>

    <!-- Difficulty tabs -->
    <div class="diff-tabs" style="display:flex;gap:8px;margin-bottom:20px">
      <button id="tab-beg" class="btn btn-primary btn-sm" onclick="setDiffTab('beg')">Beginner</button>
      <button id="tab-adv" class="btn btn-outline btn-sm" onclick="setDiffTab('adv')">Advanced</button>
      <span style="flex:1"></span>
      <span style="font-family:var(--font-mono);font-size:.7rem;color:var(--text3);align-self:center">
        ${getTopicSectors(t).map(s => `<span class="tag ${s}" style="margin:2px">${window.SECTORS[s]?.name || s}</span>`).join('')}
        ${t.green ? '<span class="tag grn" style="margin:2px">🌿 Green</span>' : ''}
      </span>
    </div>

    <div id="diff-beg">
      ${topicContentPlaceholder(t, 'beginner', std)}
    </div>
    <div id="diff-adv" class="hidden">
      ${topicContentPlaceholder(t, 'advanced', std)}
    </div>
  `;
}

function setDiffTab(tab) {
  document.getElementById('diff-beg').classList.toggle('hidden', tab !== 'beg');
  document.getElementById('diff-adv').classList.toggle('hidden', tab !== 'adv');
  document.getElementById('tab-beg').className = `btn btn-sm ${tab === 'beg' ? 'btn-primary' : 'btn-outline'}`;
  document.getElementById('tab-adv').className = `btn btn-sm ${tab === 'adv' ? 'btn-primary' : 'btn-outline'}`;
}

function topicContentPlaceholder(t, mode, std) {
  const isAdv = mode === 'advanced';
  const data  = isAdv ? t.advanced : t.beginner;
  const SECS  = window.SECTORS      || {};
  const SVGS  = window.SVG_DIAGRAMS || {};
  const QB    = window.QUIZ_BANK    || [];
  const sKey  = STATE.std;

  if (!data) return `
    <div style="background:var(--bg2);border:1px dashed var(--border);border-radius:var(--radius-lg);padding:32px;text-align:center;color:var(--text3);font-family:var(--font-mono);font-size:.82rem">
      Advanced engineering content for this topic is currently being compiled. Please check back soon.
    </div>`;

  // ── Formula block ──
  const formulaHtml = data.formula?.[sKey] ? `
    <div style="background:var(--bg3);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:var(--radius);padding:14px 16px;margin:14px 0">
      <div style="font-family:var(--font-mono);font-size:.61rem;color:var(--text3);letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px">Formula — ${std.name}</div>
      <pre style="font-family:var(--font-mono);font-size:.84rem;color:var(--accent2);line-height:1.7;white-space:pre-wrap;margin:0">${data.formula[sKey]}</pre>
    </div>` : '';

  // ── Example ──
  const exHtml = data.example?.steps?.length ? `
    <div id="ex-sec" style="background:rgba(39,174,96,.04);border:1px solid rgba(39,174,96,.2);border-radius:var(--radius);padding:16px;margin:14px 0">
      <div style="font-family:var(--font-mono);font-size:.61rem;color:var(--green);letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px">
        Worked Example
        ${data.example.sector && data.example.sector !== 'all' ? `<span class="tag ${data.example.sector}" style="margin-left:8px">${window.SECTORS[data.example.sector]?.name || data.example.sector}</span>` : ''}
      </div>
      <p style="font-size:.83rem;color:var(--text2);margin-bottom:10px"><strong>Given:</strong> ${data.example.given}</p>
      ${data.example.steps.map((s,i) => `
        <div style="font-size:.83rem;color:var(--text2);padding:4px 0 4px 12px;border-left:2px solid rgba(39,174,96,.3);margin:4px 0">
          <strong>Step ${i+1}:</strong> ${s}
        </div>`).join('')}
      <div style="font-family:var(--font-mono);font-size:.86rem;color:var(--green);margin-top:10px;padding:8px 12px;background:rgba(39,174,96,.06);border-radius:4px">
        ✓ ${data.example.result}
      </div>
    </div>` : '';

  // ── Callouts ──
  function callout(color, icon, label, items) {
    if (!items?.length) return '';
    return `
      <div style="background:${color}0d;border:1px solid ${color}30;border-radius:var(--radius);padding:14px;margin:10px 0">
        <div style="font-family:var(--font-mono);font-size:.61rem;color:${color};letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px">${icon} ${label}</div>
        ${items.map(item => `<div style="font-size:.82rem;color:var(--text2);padding:3px 0 3px 10px;border-left:2px solid ${color}40;margin:3px 0">${item}</div>`).join('')}
      </div>`;
  }

  const calloutsHtml =
    callout('#f5a623','💡','Rule of Thumb', data.rot) +
    callout('#e74c3c','⚠️','Common Mistakes', data.mistakes) +
    callout('#4a90d9','🧠','Interview Questions', data.interviewQs) +
    callout('#27ae60','🏗️','Site Reality Tips', data.siteTips);

  // ── Why this matters ──
  const whyHtml = data.whyMatters?.length ? `
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px" class="why-matters-row">
      ${data.whyMatters.map(w => `
        <div class="why-card" style="flex:1;min-width:160px;background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);padding:10px 12px;display:flex;align-items:flex-start;gap:8px">
          <span style="font-size:1.1rem">${w.icon}</span>
          <span style="font-size:.79rem;color:var(--text2);line-height:1.45">${w.text}</span>
        </div>`).join('')}
    </div>` : '';

  // ── Theory text ──
  let currentWrapClass = '';
  const theoryHtml = data.theory ? data.theory.split('\n\n').map(para => {
    if (!para.trim()) return '';
    
    if (para.startsWith('[NEC]')) { currentWrapClass = 'show-nec'; para = para.substring(5).trim(); }
    else if (para.startsWith('[IS]')) { currentWrapClass = 'show-is'; para = para.substring(4).trim(); }
    else if (para.startsWith('[IEC]')) { currentWrapClass = 'show-iec'; para = para.substring(5).trim(); }
    else if (para.startsWith('[ALL]')) { currentWrapClass = ''; para = para.substring(5).trim(); }

    let wrapClass = currentWrapClass;

    if (para.includes('\n')) {
      const lines = para.split('\n');
      const title = lines[0];
      const rest  = lines.slice(1).join('\n');
      if (title === title.toUpperCase() && title.length < 60 && !title.includes('=')) {
        return `<div class="${wrapClass}"><h3 style="font-family:var(--font-head);font-size:.95rem;font-weight:600;color:var(--text);margin:14px 0 6px;letter-spacing:.03em">${title}</h3><p style="font-size:.85rem;color:var(--text2);line-height:1.7;white-space:pre-wrap;margin:0 0 8px">${rest}</p></div>`;
      }
      return `<p class="${wrapClass}" style="font-size:.85rem;color:var(--text2);line-height:1.7;white-space:pre-wrap;margin:0 0 10px">${para}</p>`;
    }
    return `<p class="${wrapClass}" style="font-size:.85rem;color:var(--text2);line-height:1.7;margin:0 0 10px">${para}</p>`;
  }).join('') : `<div style="color:var(--text3);font-family:var(--font-mono);font-size:.82rem">Theory content is under active development.</div>`;

  // ── Sector note ──
  const sectorNote = t.sectorNotes?.[STATE.std === 'NEC' ? 'com' : 'ind'] || '';

  // ── Standards for this level ──
  const stdRefs = (t.standards?.[sKey] || []);

  // ── Quiz questions for this topic ──
  const topicQuiz = (window.QUIZ_BANK || []).filter(q => q.topicId === t.id);

  let finalHtml = `
    <div class="topic-2col" style="display:grid;grid-template-columns:1fr 280px;gap:20px;align-items:start">

      <!-- Main content -->
      <div>
        <div style="background:rgba(74, 144, 226, 0.1); border-left:4px solid var(--accent); padding:12px 16px; margin-bottom:16px; border-radius:4px; font-size:0.85rem; color:var(--text2);">
          <strong>Note on Standards:</strong> Core electrical engineering theory is universal. The formula blocks, standard checklists, and interactive calculators have been localized dynamically for <strong>${std.name}</strong>.
        </div>
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;margin-bottom:16px">
          <!-- Theory | Diagram | Cheat Sheet tabs -->
          <div class="topic-view-tabs" style="display:flex;border-bottom:1px solid var(--border);background:var(--bg3);flex-wrap:wrap">
            <button onclick="setViewTab('theory','${mode}')" id="vtab-theory-${mode === 'advanced' ? 'adv' : 'beg'}"
              style="font-family:var(--font-head);font-size:.88rem;font-weight:600;padding:10px 18px;border:none;background:var(--bg2);color:var(--accent);cursor:pointer;border-bottom:2px solid var(--accent)">
              Theory
            </button>
            ${data.diagram ? `
            <button onclick="setViewTab('diagram','${mode}')" id="vtab-diagram-${mode === 'advanced' ? 'adv' : 'beg'}"
              style="font-family:var(--font-head);font-size:.88rem;font-weight:600;padding:10px 18px;border:none;background:transparent;color:var(--text2);cursor:pointer;border-bottom:2px solid transparent">
              Diagram
            </button>` : ''}
            ${(data.rot || data.mistakes || data.interviewQs || data.siteTips || data.table || data.selection) ? `
            <button onclick="setViewTab('cheatsheet','${mode}')" id="vtab-cheatsheet-${mode === 'advanced' ? 'adv' : 'beg'}"
              style="font-family:var(--font-head);font-size:.88rem;font-weight:600;padding:10px 18px;border:none;background:transparent;color:var(--text2);cursor:pointer;border-bottom:2px solid transparent">
              📋 Cheat Sheet
            </button>` : ''}
          </div>

          <!-- THEORY VIEW -->
          <div id="view-theory-${mode === 'advanced' ? 'adv' : 'beg'}" style="padding:22px">
            <p style="font-size:.88rem;color:var(--text2);line-height:1.65;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border)">${data.intro || ''}</p>
            ${whyHtml}
            ${theoryHtml}
            ${formulaHtml}
            ${exHtml}
            ${calloutsHtml}
          </div>

          <!-- DIAGRAM VIEW -->
          <div id="view-diagram-${mode === 'advanced' ? 'adv' : 'beg'}" class="hidden" style="padding:22px">
            ${renderDiagram(t, isAdv)}
          </div>

          <!-- CHEAT SHEET VIEW -->
          <div id="view-cheatsheet-${mode === 'advanced' ? 'adv' : 'beg'}" class="hidden" style="padding:22px">
            ${renderCheatSheet(data, STATE.std)}
          </div>
        </div>

        <!-- Sector differences panel -->
        ${Object.keys(t.sectorNotes || {}).some(k => t.sectorNotes[k]) ? `
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden">
          <div style="padding:12px 16px;background:var(--bg3);border-bottom:1px solid var(--border);font-family:var(--font-head);font-weight:600;font-size:.9rem;color:var(--text)">
            🏭 How this differs by sector
          </div>
          <div class="sector-diff-grid" style="padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
            ${Object.entries(t.sectorNotes).filter(([,v])=>v).map(([k,v]) => `
              <div style="padding:10px 12px;background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius)">
                <div style="font-family:var(--font-mono);font-size:.65rem;margin-bottom:4px">
                  <span class="tag ${k}">${window.SECTORS[k]?.name || k}</span>
                </div>
                <div style="font-size:.78rem;color:var(--text2);line-height:1.5">${v}</div>
              </div>`).join('')}
          </div>
        </div>` : ''}
      </div>

      <!-- Right sidebar -->
      <div class="topic-sidebar" style="display:flex;flex-direction:column;gap:14px">

        <!-- Standards -->
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:16px">
          <div class="slabel" style="margin-bottom:10px">Standard References</div>
          <div style="margin-bottom:8px">
            <span class="std-pill">${std.name}</span>
          </div>
          ${stdRefs.map(ref => `
            <div style="margin-bottom:10px;padding:8px 10px;background:var(--bg3);border-radius:var(--radius);border:1px solid var(--border)">
              <div style="font-family:var(--font-mono);font-size:.72rem;color:var(--accent);margin-bottom:2px">${ref.clause}</div>
              <div style="font-size:.78rem;color:var(--text);font-weight:500;margin-bottom:2px">${ref.title}</div>
              ${ref.note ? `<div style="font-size:.72rem;color:var(--text3)">${ref.note}</div>` : ''}
            </div>`).join('') || `<div style="font-size:.78rem;color:var(--text3);font-family:var(--font-mono)">No clauses for this standard</div>`}
        </div>

        <!-- Sectors -->
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:16px">
          <div class="slabel" style="margin-bottom:10px">Applies to</div>
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            ${getTopicSectors(t).map(s => `<span class="tag ${s}">${window.SECTORS[s]?.name || s}</span>`).join('')}
            ${t.green ? '<span class="tag grn">🌿 Green</span>' : ''}
          </div>
        </div>

        <!-- Quick quiz -->
        ${topicQuiz.length ? `
        <div id="pz-sec" style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden">
          <div style="padding:12px 16px;background:var(--bg3);border-bottom:1px solid var(--border);font-family:var(--font-head);font-weight:600;font-size:.88rem;color:var(--text)">
            Quick Quiz — ${topicQuiz.length} question${topicQuiz.length>1?'s':''}
          </div>
          <div style="padding:14px">
            ${renderInlineQuiz(topicQuiz[0], 0)}
          </div>
        </div>` : ''}

        ${t.calculator ? `<button class="btn btn-primary" style="width:100%;margin-top:4px" onclick="navigateTo('calc')">Open Calculator →</button>` : ''}
        <button class="btn btn-outline" style="width:100%" onclick="navigateTo('quiz')">Full Quiz →</button>
      </div>
    </div>`;

  // Apply Standard-specific Unit Localisation
  finalHtml = finalHtml.replace(/\[\[(.*?)\|(.*?)\]\]/g, (match, metric, imperial) => {
    return STATE.std === 'NEC' ? imperial : metric;
  });

  return finalHtml;
}

const SUPPORTED_3D_SCENES = [
  'ohms-law-beg', 'ohms-law-adv', '3ph-star-delta', 'power-triangle', 
  'breaker-selection-diagram', 'transformer-sld', 'mdb-sld', 'sld-basic', 
  'ac-dc-comparison', 'voltage-drop-diagram', 'ac-dc-waveform', 
  '3ph-phasor', 'pf-phasor', 'vd-adv-diagram', 'pf-correction-diagram', 
  'pf-detuned-diagram', 'transformer-adv-sld', 'mdb-adv-sld', 
  'breaker-coord-diagram', 'sld-advanced', 'short-circuit-sld', 
  'short-circuit-adv-sld', 'dc-redundancy-sld', 'dc-redundancy-adv-sld', 
  'dg-sld', 'dg-adv-sld', 'ups-sld', 'ups-adv-sld', 'cable-sizing-diagram'
];

function renderDiagram(t, isAdv) {
  const svgId = isAdv ? t.advanced?.diagram?.svgId : t.beginner?.diagram?.svgId;
  const svg = (window.SVG_DIAGRAMS || {})[svgId];
  const has3D = (window.ElecScenes && window.ElecScenes.hasScene) 
                ? window.ElecScenes.hasScene(svgId) 
                : (svgId && SUPPORTED_3D_SCENES.includes(svgId));

  let html = '';

  // 3D interactive container (lazy-initialized on tab click)
  if (has3D) {
    const containerSuffix = isAdv ? 'adv' : 'beg';
    html += `
      <div id="scene3d-container-${containerSuffix}" class="scene3d-container" data-scene-id="${svgId}"
        style="width:100%;min-height:300px;border-radius:var(--radius);overflow:visible;margin-bottom:16px;background:linear-gradient(135deg, rgba(11,15,26,0.95), rgba(26,36,64,0.9));border:1px solid rgba(245,166,35,0.15);position:relative">
        <div style="display:flex;align-items:center;justify-content:center;height:320px;color:var(--text3);font-family:var(--font-mono);font-size:.82rem">
          <div style="text-align:center">
            <div style="font-size:2rem;margin-bottom:8px">🔄</div>
            Loading 3D visualization...
          </div>
        </div>
      </div>`;
  }

  // Static SVG diagram
  if (svg) {
    html += has3D ? `<details style="margin-top:4px"><summary style="font-family:var(--font-mono);font-size:.72rem;color:var(--text3);cursor:pointer;padding:4px 0">📊 Show 2D Schematic</summary><div style="margin-top:8px">${svg}</div></details>` : svg;
  } else if (!has3D) {
    html += `
      <div style="background:var(--bg3);border:1px dashed var(--border);border-radius:var(--radius);padding:40px;text-align:center;color:var(--text3);font-family:var(--font-mono);font-size:.82rem">
        ${isAdv ? '📐 Detailed SLD / Wiring Diagram currently under development' : '📊 Technical schematic illustrating core concepts is being prepared'}
      </div>`;
  }

  return html;
}

// ── INLINE QUIZ (single question on topic page) ──
function renderInlineQuiz(q, idx) {
  const qId = 'iq_' + idx;
  return `
    <div id="${qId}">
      <p style="font-size:.83rem;color:var(--text);line-height:1.55;margin-bottom:10px">${q.question}</p>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${q.options.map((opt, i) => `
          <button onclick="checkInlineAnswer('${qId}',${i},${q.answer},'${q.explanation.replace(/'/g,"\\'")}')"
            style="text-align:left;padding:8px 10px;background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);font-size:.8rem;color:var(--text2);cursor:pointer;transition:all .15s"
            id="${qId}_opt${i}">
            <span style="font-family:var(--font-mono);font-size:.72rem;margin-right:6px">${String.fromCharCode(65+i)}.</span>${opt}
          </button>`).join('')}
      </div>
      <div id="${qId}_exp" style="display:none;margin-top:10px;padding:10px;background:var(--warning-bg);border:1px solid var(--warning-text);border-left-width:3px;border-radius:var(--radius);font-size:.78rem;color:var(--text2);line-height:1.5"></div>
    </div>`;
}

function checkInlineAnswer(qId, chosen, correct, explanation) {
  const opts = document.querySelectorAll(`#${qId} button`);
  opts.forEach((btn, i) => {
    btn.style.pointerEvents = 'none';
    if (i === correct) { btn.style.borderColor = 'var(--green)'; btn.style.background = 'rgba(39,174,96,.08)'; btn.style.color = 'var(--text)'; }
    else if (i === chosen && chosen !== correct) { btn.style.borderColor = 'var(--red)'; btn.style.background = 'rgba(231,76,60,.08)'; }
    else { btn.style.opacity = '.5'; }
  });
  const exp = document.getElementById(qId + '_exp');
  exp.style.display = 'block';
  exp.innerHTML = `<strong style="color:${chosen===correct?'var(--green)':'var(--red)'}">${chosen===correct?'✓ Correct!':'✗ Incorrect.'}</strong> ${explanation}`;
}
window.checkInlineAnswer = checkInlineAnswer;

async function setViewTab(tab, mode) {
  // Determine suffix: if mode not provided, detect which difficulty is visible
  let suffix;
  if (mode === 'beginner' || mode === 'beg') {
    suffix = 'beg';
  } else if (mode === 'advanced' || mode === 'adv') {
    suffix = 'adv';
  } else {
    // Auto-detect: whichever diff container is visible
    const begEl = document.getElementById('diff-beg');
    const advEl = document.getElementById('diff-adv');
    if (advEl && !advEl.classList.contains('hidden')) {
      suffix = 'adv';
    } else {
      suffix = 'beg';
    }
  }

  // Toggle view panels for the active difficulty
  ['theory','diagram','cheatsheet'].forEach(t => {
    const panel = document.getElementById('view-' + t + '-' + suffix);
    if (panel) panel.classList.toggle('hidden', tab !== t);
    const btn = document.getElementById('vtab-' + t + '-' + suffix);
    if (!btn) return;
    const active = tab === t;
    btn.style.cssText = `font-family:var(--font-head);font-size:.88rem;font-weight:600;padding:10px 18px;border:none;cursor:pointer;border-bottom:2px solid ${active?'var(--accent)':'transparent'};background:${active?'var(--bg2)':'transparent'};color:${active?'var(--accent)':'var(--text2)'}`;
  });

  // Initialize 3D scene when Diagram tab is activated
  if (tab === 'diagram') {
    const container = document.getElementById('scene3d-container-' + suffix);
    if (container && !container.querySelector('canvas')) {
      const sceneId = container.dataset.sceneId;
      if (sceneId) {
        // LAZY LOAD: Load Three.js then three-scenes.js if needed
        const loadingIndicator = container.querySelector('div');
        if (loadingIndicator) loadingIndicator.style.opacity = '1';

        try {
          if (!window.THREE) {
            await loadScript('js/three.min.js');
          }
          if (!window.ElecScenes) {
            await loadScript('js/three-scenes.js?v=3.2');
          }

          if (window.ElecScenes) {
            container.innerHTML = '';
            requestAnimationFrame(() => window.ElecScenes.createScene(container, sceneId));
          }
        } catch (err) {
          container.innerHTML = `<div style="padding:40px;text-align:center;color:var(--text3);font-family:var(--font-mono);font-size:.75rem">
            ⚠️ Failed to load 3D engine.<br/>Check your internet connection or use 2D schematic.
          </div>`;
        }
      }
    }
  } else if (tab !== 'diagram' && window.ElecScenes) {
    // Destroy 3D scene when switching away to free GPU resources
    window.ElecScenes.destroyScene();
  }
}

function renderCheatSheet(data, std) {
  if (!data || (!data.rot && !data.mistakes && !data.interviewQs && !data.siteTips && !data.table && !data.selection)) {
    return `<div style="text-align:center;padding:32px;color:var(--text3);font-family:var(--font-mono);font-size:.82rem">
      No cheat sheet data available for this topic yet.
    </div>`;
  }
  const stdCode = (typeof std === 'string') ? std : (std?.code || 'IS');
  const stdObj = window.STANDARDS?.[stdCode] || {};

  // -- Resolve table: prefer stdCode, fallback to 'all'
  const tbl = data.table?.[stdCode] || data.table?.['all'] || null;

  // -- Build reference table HTML
  let tableHtml = '';
  if (tbl) {
    const rows = tbl.data.map(row =>
      `<tr>${row.map((cell,ci) => `<td style="padding:8px 10px;border-bottom:1px solid var(--border);font-size:.78rem;color:${ci===0?'var(--text)':'var(--text2)'};font-weight:${ci===0?'500':'400'}">${cell}</td>`).join('')}</tr>`
    ).join('');
    const heads = tbl.columns.map(h => `<th style="padding:8px 10px;text-align:left;font-family:var(--font-mono);font-size:.65rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;border-bottom:2px solid var(--border);background:var(--bg3)">${h}</th>`).join('');
    tableHtml = `
      <div style="margin-bottom:20px">
        <div style="font-family:var(--font-head);font-weight:700;font-size:.92rem;color:var(--text);margin-bottom:4px">${tbl.title}</div>
        <div style="font-size:.75rem;color:var(--text3);margin-bottom:12px">${tbl.desc}</div>
        <div style="overflow-x:auto;border:1px solid var(--border);border-radius:var(--radius)">
          <table style="width:100%;border-collapse:collapse;min-width:480px">
            <thead><tr>${heads}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div style="font-family:var(--font-mono);font-size:.62rem;color:var(--text3);margin-top:6px">Standard: ${stdObj.name || stdCode} — for reference only. Verify against current edition of standards.</div>
      </div>`;
  }

  // -- Helper for generating sub-sections
  function buildSection(icon, title, items, isRed = false) {
    if (!items || !items.length) return '';
    const color = isRed ? 'var(--red)' : 'var(--accent)';
    const itemList = items.map((item, i) =>
      `<div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)${i===items.length-1?';border-bottom:none':''}">
        <span style="font-family:var(--font-mono);font-size:.7rem;color:${color};font-weight:700;min-width:22px">${i+1}.</span>
        <span style="font-size:.8rem;color:var(--text2);line-height:1.55">${item}</span>
      </div>`
    ).join('');
    return `
      <div style="margin-bottom:20px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span style="font-size:1rem">${icon}</span>
          <span style="font-family:var(--font-head);font-weight:700;font-size:.92rem;color:var(--text)">${title}</span>
        </div>
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);padding:4px 14px 4px">
          ${itemList}
        </div>
      </div>`;
  }

  let sectionsHtml = tableHtml;
  sectionsHtml += buildSection('📋', 'Selection Process', data.selection);
  sectionsHtml += buildSection('💡', 'Rules of Thumb', data.rot);
  sectionsHtml += buildSection('⚠️', 'Common Mistakes', data.mistakes, true);
  sectionsHtml += buildSection('👷', 'Site & Commissioning Tips', data.siteTips);
  sectionsHtml += buildSection('🎤', 'Interview Questions', data.interviewQs);

  return sectionsHtml || `<div style="text-align:center;padding:32px;color:var(--text3);font-family:var(--font-mono);font-size:.82rem">No cheat sheet data for this topic yet.</div>`;
}

// ── MODULE CONTENT RENDERS ──
function renderCalc() {
  if (window.renderCalcPageFull) { window.renderCalcPageFull(); return; }
  document.getElementById('calc-content').innerHTML = `
    <div class="page-hdr"><div class="ph-left"><div class="eyebrow">Module</div>
    <h1 class="page-title">Calculate</h1></div></div>
    <div style="padding:24px;color:var(--text3);font-family:var(--font-mono)">Loading calculators...</div>`;
}

function renderQuiz() {
  const QB = window.QUIZ_BANK || [];
  const totalQ = QB.length;

  // Build level options from the data
  const levels = [...new Set(QB.map(q => q.level))].sort();
  const types = [...new Set(QB.map(q => q.type))];

  document.getElementById('quiz-content').innerHTML = `
    <div class="page-hdr">
      <div class="ph-left">
        <div class="eyebrow">Module</div>
        <h1 class="page-title">Quiz</h1>
        <p class="page-desc">MCQ, True/False, Scenario-based questions. Full explanations with why wrong answers are wrong. <strong>${totalQ} questions loaded.</strong></p>
      </div>
    </div>

    <!-- Filters -->
    <div class="quiz-filters" style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px;align-items:center;">
      <label style="font-size:.85rem;color:var(--text2);font-weight:600;">Filter:</label>
      <select id="quiz-filter-level" onchange="applyQuizFilters()" style="padding:6px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg2);color:var(--text);font-size:.85rem;">
        <option value="all">All Levels</option>
        ${levels.map(l => `<option value="${l}">Level ${l}</option>`).join('')}
      </select>
      <select id="quiz-filter-type" onchange="applyQuizFilters()" style="padding:6px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg2);color:var(--text);font-size:.85rem;">
        <option value="all">All Types</option>
        ${types.map(t => `<option value="${t}">${t.toUpperCase()}</option>`).join('')}
      </select>
      <select id="quiz-filter-std" onchange="applyQuizFilters()" style="padding:6px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg2);color:var(--text);font-size:.85rem;">
        <option value="all">All Standards</option>
        <option value="IS" ${STATE.std==='IS'?'selected':''}>🇮🇳 IS / NBC (India)</option>
        <option value="NEC" ${STATE.std==='NEC'?'selected':''}>🇺🇸 NEC (USA)</option>
        <option value="IEC" ${STATE.std==='IEC'?'selected':''}>🌐 IEC (International)</option>
      </select>
      <button class="btn btn-sm btn-outline" onclick="shuffleQuiz()">🔀 Shuffle</button>
      <span id="quiz-count-label" style="margin-left:auto;font-size:.8rem;color:var(--text3);font-family:var(--font-mono);"></span>
    </div>

    <!-- Score tracker -->
    <div id="quiz-score-bar" style="display:flex;gap:16px;margin-bottom:16px;padding:12px 16px;background:var(--bg2);border:1px solid var(--border);border-radius:8px;font-size:.85rem;">
      <span style="color:var(--text2);">Score:</span>
      <span id="quiz-correct" style="color:var(--green);font-weight:700;">0</span> correct
      <span style="color:var(--text3);">|</span>
      <span id="quiz-wrong" style="color:var(--red);font-weight:700;">0</span> wrong
      <span style="color:var(--text3);">|</span>
      <span id="quiz-remaining" style="color:var(--text2);">0</span> remaining
      <button class="btn btn-sm btn-outline" style="margin-left:auto;" onclick="resetQuizScore()">Reset</button>
    </div>

    <!-- Questions container -->
    <div id="quiz-questions-list" style="max-width:800px;"></div>

    <!-- Pagination -->
    <div id="quiz-pagination" style="display:flex;justify-content:center;gap:10px;margin-top:24px;"></div>
  `;

  window._quizScore = { correct: 0, wrong: 0 };
  window._quizPage = 0;
  window._quizPerPage = 10;
  applyQuizFilters();
}

window.applyQuizFilters = function() {
  const QB = window.QUIZ_BANK || [];
  const levelVal = document.getElementById('quiz-filter-level')?.value || 'all';
  const typeVal = document.getElementById('quiz-filter-type')?.value || 'all';
  const stdVal = document.getElementById('quiz-filter-std')?.value || 'all';

  let filtered = QB.slice();
  if (levelVal !== 'all') filtered = filtered.filter(q => String(q.level) === levelVal);
  if (typeVal !== 'all') filtered = filtered.filter(q => q.type === typeVal);
  if (stdVal !== 'all') {
    filtered = filtered.filter(q => {
      // Support both array and string std formats
      const qStd = q.std;
      if (Array.isArray(qStd)) return qStd.includes(stdVal);
      if (typeof qStd === 'string') return qStd === stdVal;
      return true; // no std field = show for all
    });
  }

  window._quizFiltered = filtered;
  window._quizPage = 0;
  document.getElementById('quiz-count-label').textContent = `${filtered.length} of ${QB.length} questions`;
  document.getElementById('quiz-remaining').textContent = filtered.length;
  renderQuizPage();
};

window.shuffleQuiz = function() {
  if (!window._quizFiltered) return;
  for (let i = window._quizFiltered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [window._quizFiltered[i], window._quizFiltered[j]] = [window._quizFiltered[j], window._quizFiltered[i]];
  }
  window._quizPage = 0;
  renderQuizPage();
};

window.resetQuizScore = function() {
  window._quizScore = { correct: 0, wrong: 0 };
  document.getElementById('quiz-correct').textContent = '0';
  document.getElementById('quiz-wrong').textContent = '0';
  applyQuizFilters();
};

window.renderQuizPage = function() {
  const list = window._quizFiltered || [];
  const perPage = window._quizPerPage || 10;
  const page = window._quizPage || 0;
  const start = page * perPage;
  const pageItems = list.slice(start, start + perPage);

  const container = document.getElementById('quiz-questions-list');
  if (!container) return;

  if (pageItems.length === 0) {
    container.innerHTML = '<div style="padding:32px;text-align:center;color:var(--text3);">No questions match the selected filters.</div>';
    document.getElementById('quiz-pagination').innerHTML = '';
    return;
  }

  container.innerHTML = pageItems.map((q, idx) => {
    const globalIdx = start + idx;
    const qId = 'qz_' + globalIdx;
    const levelLabel = q.level === 'beginner' || q.level == 1 ? 'L1' : q.level === 'advanced' ? 'ADV' : 'L' + q.level;
    const typeLabel = (q.type || 'mcq').toUpperCase();
    const topicLabel = q.topicId || '';

    return `
      <div id="${qId}" style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:18px;margin-bottom:14px;">
        <div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap;">
          <span style="font-size:.7rem;padding:2px 8px;border-radius:4px;background:var(--bg3);border:1px solid var(--border);color:var(--text3);font-family:var(--font-mono);">${levelLabel}</span>
          <span style="font-size:.7rem;padding:2px 8px;border-radius:4px;background:var(--bg3);border:1px solid var(--border);color:var(--accent);font-family:var(--font-mono);">${typeLabel}</span>
          <span style="font-size:.7rem;padding:2px 8px;border-radius:4px;background:var(--bg3);border:1px solid var(--border);color:var(--text3);font-family:var(--font-mono);">${topicLabel}</span>
          <span style="margin-left:auto;font-size:.72rem;color:var(--text3);font-family:var(--font-mono);">Q${globalIdx + 1}</span>
        </div>
        <p style="font-size:.92rem;color:var(--text);line-height:1.6;margin-bottom:12px;">${q.question}</p>
        <div style="display:flex;flex-direction:column;gap:6px;">
          ${q.options.map((opt, i) => `
            <button onclick="answerQuizQ('${qId}',${i},${q.answer})" id="${qId}_o${i}"
              style="text-align:left;padding:10px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;font-size:.85rem;color:var(--text2);cursor:pointer;transition:all .15s;">
              <span style="font-family:var(--font-mono);font-size:.75rem;margin-right:8px;color:var(--text3);">${String.fromCharCode(65 + i)}.</span>${opt}
            </button>`).join('')}
        </div>
        <div id="${qId}_fb" style="display:none;margin-top:12px;padding:12px;border-radius:6px;font-size:.83rem;line-height:1.6;"></div>
      </div>`;
  }).join('');

  // Pagination
  const totalPages = Math.ceil(list.length / perPage);
  const pagDiv = document.getElementById('quiz-pagination');
  if (totalPages <= 1) { pagDiv.innerHTML = ''; return; }

  let pagHtml = '';
  if (page > 0) pagHtml += `<button class="btn btn-sm btn-outline" onclick="window._quizPage=${page-1};renderQuizPage();">← Prev</button>`;
  pagHtml += `<span style="font-size:.85rem;color:var(--text2);padding:6px 12px;">Page ${page + 1} of ${totalPages}</span>`;
  if (page < totalPages - 1) pagHtml += `<button class="btn btn-sm btn-outline" onclick="window._quizPage=${page+1};renderQuizPage();">Next →</button>`;
  pagDiv.innerHTML = pagHtml;
};

window.answerQuizQ = function(qId, chosen, correct) {
  const q = (window._quizFiltered || []).find((_, i) => 'qz_' + ((window._quizPage || 0) * (window._quizPerPage || 10) + i) === qId);
  const btns = document.querySelectorAll('#' + qId + ' button[id^="' + qId + '_o"]');
  btns.forEach((btn, i) => {
    btn.style.pointerEvents = 'none';
    if (i === correct) {
      btn.style.borderColor = 'var(--green)';
      btn.style.background = 'rgba(39,174,96,.12)';
      btn.style.color = 'var(--text)';
      btn.style.fontWeight = '600';
    } else if (i === chosen && chosen !== correct) {
      btn.style.borderColor = 'var(--red)';
      btn.style.background = 'rgba(231,76,60,.1)';
    } else {
      btn.style.opacity = '.45';
    }
  });

  // Update score
  if (chosen === correct) {
    window._quizScore.correct++;
  } else {
    window._quizScore.wrong++;
  }
  document.getElementById('quiz-correct').textContent = window._quizScore.correct;
  document.getElementById('quiz-wrong').textContent = window._quizScore.wrong;

  // Show feedback
  const fb = document.getElementById(qId + '_fb');
  fb.style.display = 'block';

  // Find the actual question object to get explanation
  const globalIdx = parseInt(qId.replace('qz_', ''));
  const qObj = (window._quizFiltered || [])[globalIdx];
  const explanation = qObj?.explanation || 'No explanation available.';
  const whyWrong = qObj?.whyWrong || {};

  if (chosen === correct) {
    fb.style.background = 'rgba(39,174,96,.08)';
    fb.style.border = '1px solid rgba(39,174,96,.25)';
    fb.innerHTML = `<strong style="color:var(--green);">✅ Correct!</strong> ${explanation}`;
  } else {
    const wrongReason = whyWrong[String(chosen)] || '';
    fb.style.background = 'rgba(231,76,60,.06)';
    fb.style.border = '1px solid rgba(231,76,60,.2)';
    fb.innerHTML = `<strong style="color:var(--red);">❌ Incorrect.</strong> ${explanation}${wrongReason ? '<br/><span style="color:var(--text3);font-size:.8rem;margin-top:4px;display:inline-block;">→ ' + wrongReason + '</span>' : ''}`;
  }
};

function renderPractice() {
  document.getElementById('practice-content').innerHTML = `
    <div class="page-hdr">
      <div class="ph-left">
        <div class="eyebrow">Special Mode</div>
        <h1 class="page-title">⚡ Practice Mode</h1>
        <p class="page-desc">Challenge Mode — randomised engineering scenarios based on the active standards.</p>
      </div>
    </div>
    <div id="practice-container" style="max-width:800px; margin:auto;">
    </div>`;
    
  generatePracticeChallenge();
}

// Simple challenge generator for Practice Mode
window.currentChallenge = null;

window.generatePracticeChallenge = function() {
  const challenges = [
    {
      calc: "Voltage Drop",
      generate: () => {
        const I = Math.floor(Math.random() * 80) + 20; // 20 to 100A
        const L = Math.floor(Math.random() * 100) + 50; // 50 to 150m
        const V = Math.random() > 0.5 ? 415 : 480; 
        const mvAm = V === 415 ? 1.5 : 1.2; // roughly simulate mV/A/m
        const answer = ((mvAm * I * L) / 1000).toFixed(2);
        return {
          question: `Calculate the 3-phase Voltage Drop for a load drawing ${I}A over a distance of ${L} meters using a cable with a drop factor of ${mvAm} mV/A/m.`,
          answer: parseFloat(answer),
          unit: "V",
          solution: `VD = (mV/A/m × I × L) / 1000<br/>VD = (${mvAm} × ${I} × ${L}) / 1000 = ${answer} V`
        };
      }
    },
    {
      calc: "Motor Full Load Amps",
      generate: () => {
        const kW = [11, 15, 22, 30, 45, 55][Math.floor(Math.random()*6)];
        const V = 415;
        const eff = 0.90;
        const pf = 0.85;
        const answer = ((kW * 1000) / (1.732 * V * eff * pf)).toFixed(1);
        return {
          question: `Calculate the Full Load Current (FLC) for a ${kW} kW 3-phase motor running at ${V}V. Assume efficiency = ${eff*100}% and Power Factor = ${pf}.`,
          answer: parseFloat(answer),
          unit: "A",
          solution: `FLC = kW × 1000 / (√3 × V × η × pf)<br/>FLC = ${kW}000 / (1.732 × ${V} × ${eff} × ${pf}) = ${answer} A`
        };
      }
    },
    {
      calc: "Transformer Short Circuit",
      generate: () => {
        const kVA = [500, 1000, 1500, 2000][Math.floor(Math.random()*4)];
        const Z = 4.5; // percent
        const V = 415;
        const I_fl = ((kVA * 1000) / (1.732 * V));
        const answer = (I_fl / (Z / 100)).toFixed(0);
        return {
          question: `Calculate the secondary bolted Short Circuit Current (Isc) for a ${kVA} kVA transformer at ${V}V with ${Z}% impedance. (Ignore upstream grid impedance).`,
          answer: parseFloat(answer),
          unit: "A",
          solution: `1. Calculate Full Load Current (IFL): ${kVA}000 / (1.732 × ${V}) = ${I_fl.toFixed(0)} A<br/>2. Short Circuit Current: IFL / (%Z / 100) = ${I_fl.toFixed(0)} / 0.045 = ${answer} A`
        };
      }
    }
  ];

  const type = challenges[Math.floor(Math.random() * challenges.length)];
  window.currentChallenge = type.generate();
  
  document.getElementById('practice-container').innerHTML = `
    <div style="background:var(--bg3); border-left:4px solid var(--primary); padding:24px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
      <div style="font-family:var(--font-mono); color:var(--primary); font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:8px;">Challenge: ${type.calc}</div>
      <h3 style="margin-top:0; color:var(--text); font-size:1.2rem; line-height:1.5;">${window.currentChallenge.question}</h3>
      
      <div class="practice-input-row" style="margin-top:20px; display:flex; gap:10px; align-items:center;">
        <input type="number" id="practice-input" placeholder="Enter your answer" class="input" style="width:200px;" step="any">
        <span style="color:var(--text2); font-weight:600;">${window.currentChallenge.unit}</span>
        <button class="btn btn-primary" onclick="checkPracticeAnswer()">Submit Answer</button>
      </div>

      <div id="practice-result" style="margin-top:20px; display:none;"></div>
      
      <div style="margin-top:30px; text-align:right;">
         <button class="btn btn-outline btn-sm" onclick="generatePracticeChallenge()">Skip / Next Challenge</button>
      </div>
    </div>
  `;
}

window.checkPracticeAnswer = function() {
  const input = document.getElementById('practice-input').value;
  if(!input) return;
  const userVal = parseFloat(input);
  const correctVal = window.currentChallenge.answer;
  
  // Allow 3% error margin
  const error = Math.abs(userVal - correctVal) / correctVal;
  const isCorrect = error <= 0.03;
  
  const resDiv = document.getElementById('practice-result');
  resDiv.style.display = 'block';
  
  if(isCorrect) {
    resDiv.innerHTML = `
      <div style="background:var(--success-bg); color:var(--success-text); padding:16px; border-radius:6px; border:1px solid var(--success-text); border-left-width:4px;">
        <strong>✅ Correct!</strong> Excellent engineering. 
        <div style="margin-top:12px; font-family:var(--font-mono); font-size:0.85rem; padding:10px; background:var(--bg2); border:1px solid var(--border); border-radius:4px;">
          ${window.currentChallenge.solution}
        </div>
      </div>
    `;
  } else {
    resDiv.innerHTML = `
      <div style="background:var(--error-bg); color:var(--error-text); padding:16px; border-radius:6px; border:1px solid var(--error-text); border-left-width:4px;">
        <strong>❌ Incorrect.</strong> Your variation from the expected answer is too high.
        <div style="margin-top:12px; font-family:var(--font-mono); font-size:0.85rem; padding:10px; background:var(--bg2); border:1px solid var(--border); border-radius:4px;">
          <strong>Step-by-step Solution:</strong><br/>
          ${window.currentChallenge.solution}
        </div>
      </div>
    `;
  }
}


const PROJECTS_DB = [
    { 
      id:'p1', icon:'🏠', name:'2BHK Residential House', sector:'Residential', 
      steps:'Load calc → Cable sizing → DB schedule → Earthing',
      details: [
        { title: "Step 1: Connected Load Calculation", text: "A typical 2BHK has: Lighting (500W), Fans (300W), Kitchen Appliances (2000W), 2x ACs (3000W), Geyser (2000W). Total Connected Load = 7.8 kW. Apply diversity factor of 0.6 -> Maximum Demand = 4.68 kW." },
        { title: "Step 2: Incoming Service Cable", text: "At 230V, 4.68kW = 20.3A. An IS standard 4 mm² Cu cable is rated for ~27A in conduit, but 6 mm² is recommended for future proofing. Select 2 Core 6 sq.mm Copper XLPE." },
        { title: "Step 3: Distribution Board", text: "Incoming: 40A DP MCB + 40A 30mA RCCB. Outgoing: 10A for lighting circuits, 16A/20A for ACs and Geysers. Ensure separate RCBOs for wet areas." },
        { title: "Step 4: Earthing", text: "For residential TN-S system, maximum Earth Fault Loop Impedance (Zs) must allow 40A MCB (Type B) to trip in 0.4s. Required Zs < 1.09 ohms." }
      ]
    },
    { 
      id:'p2', icon:'🏭', name:'Industrial Factory (MCC + Motors)', sector:'Industrial', 
      steps:'Load calc → Transformer → Switchgear → Cable → SC calculation',
      details: [
        { title: "Step 1: Motor Load Calculation", text: "Factory has 10 motors (15kW each) and 5 motors (30kW each). Total = 300kW. Assuming 0.85 PF and 90% efficiency, Apparent Power = 392 kVA. Applying 0.8 diversity = 313 kVA." },
        { title: "Step 2: Transformer Selection", text: "Calculated MD is 313 kVA. Adding 20% future growth = 376 kVA. Select standard next size: 500 kVA, 11/0.415kV, vector group Dyn11." },
        { title: "Step 3: Short Circuit Analysis", text: "500 kVA Transformer with 4.5% impedance (Z%). Isc = FLC / 0.045 = (500*1000/(1.732*415)) / 0.045 = 695A / 0.045 = 15.4 kA. Motor fault contribution adds ~3kA. Total Isc = 18.4 kA." },
        { title: "Step 4: Main Switchgear", text: "LV Main Panel (PCC) must be rated for minimum 25 kA fault current. Main incoming ACB rated for 800A (to match transformer FLC)." }
      ]
    },
    { 
      id:'p3', icon:'🖥️', name:'Data Centre (Tier III)', sector:'Data Centre', 
      steps:'IT load → UPS (2N) → DG (N+1) → Earthing',
      details: [
        { title: "Step 1: Critical IT Load", text: "100 racks at 5kW/rack = 500 kW pure IT load. Assuming PUE 1.5, total facility power = 750 kW (includes cooling, lights, losses)." },
        { title: "Step 2: UPS Sizing (2N Topology)", text: "System A and System B must each carry the full 500kW load. 500kW / 0.95 PF = 526 kVA. Select 600 kVA UPS for A path, and 600 kVA UPS for B path." },
        { title: "Step 3: Generator Sizing", text: "Total load 750 kW (937 kVA at 0.8 PF). Step load block (UPS charging + Chillers starting) requires oversized alternator. Select 1250 kVA Data Centre Continuous rating standby generator." }
      ]
    }
];

function renderProjects() {
  const stdName = window.STANDARDS?.[STATE.std]?.name || STATE.std;
  document.getElementById('projects-content').innerHTML = `
    <div class="page-hdr">
      <div class="ph-left">
        <div class="eyebrow">Special Mode</div>
        <h1 class="page-title">🧠 Design Thinking</h1>
        <p class="page-desc">Guided multi-step real-world projects. Select a project to walk through the entire electrical design workflow.</p>
      </div>
      <span class="std-pill">${stdName}</span>
    </div>
    <div id="project-view-container">
      <div class="card-grid">
        ${(window.PROJECT_WORKFLOWS || []).map(p => `
          <div class="card c-acc" style="cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'" onclick="openProject('${p.id}')">
            <div class="card-icon">${p.cover}</div>
            <div class="card-title">${p.title}</div>
            <div class="card-desc">${p.description}</div>
            <div class="card-meta">
              <span style="font-family:var(--font-mono);font-size:.68rem;color:var(--text3)">${p.steps.length} Steps</span>
              <span class="btn btn-sm btn-primary" style="margin-left:auto;font-family:var(--font-head);font-size:.78rem;font-weight:600;">Start Guide →</span>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

window.openProject = function(id) {
  const p = (window.PROJECT_WORKFLOWS || []).find(x => x.id === id);
  if(!p) return;
  
  const stepsHtml = p.steps.map((d, i) => `
    <div style="background:var(--bg3); border-left:3px solid var(--accent); padding:20px; border-radius:6px; margin-bottom:16px;">
      <h3 style="margin-top:0; color:var(--text); font-size:1.1rem; font-weight:600;">Step ${d.stepNum}: ${d.title}</h3>
      <p style="margin-bottom:15px; color:var(--text2); line-height:1.6;">${d.desc}</p>
      ${d.actionBtn ? `<button class="btn btn-sm btn-outline" onclick="${d.actionFn}">${d.actionBtn}</button>` : ''}
    </div>
  `).join('');

  document.getElementById('project-view-container').innerHTML = `
    <div style="margin-bottom:24px;">
      <button class="btn btn-outline" onclick="renderProjects()" style="margin-bottom:16px;">← Back to Projects</button>
      <h2 style="font-size:1.8rem; margin:0 0 8px 0; color:var(--text);">${p.cover} ${p.title}</h2>
      <p style="color:var(--text3); font-family:var(--font-mono); font-size:0.85rem; margin:0;">TOTAL STEPS: ${p.steps.length}</p>
    </div>
    <div style="max-width:800px;">
      ${stepsHtml}
      <div style="margin-top:30px; text-align:center; padding:20px; border-top:1px solid var(--border);">
        <h4 style="margin:0 0 10px 0; color:var(--text);">Workflow Complete</h4>
        <button class="btn btn-primary" onclick="renderProjects()">Explore Another Project</button>
      </div>
    </div>
  `;
}


function renderMistakes() {
  const stdName = window.STANDARDS?.[STATE.std]?.name || STATE.std;
  const db = window.MISTAKE_DB || [];

  const cardsHtml = db.map(m => `
    <div class="card mistake-card" style="background:var(--bg3); border-left:4px solid var(--red); padding:20px; margin-bottom:16px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
      <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
        <span style="font-size:0.75rem; color:var(--text3); font-family:var(--font-mono); font-weight:bold; letter-spacing:0.05em;">${m.category.toUpperCase()}</span>
        <span style="font-size:0.75rem; color:var(--red); font-family:var(--font-mono); font-weight:bold;">${m.severity.toUpperCase()}</span>
      </div>
      <h3 style="margin-top:0; margin-bottom:12px; color:var(--text); font-size:1.25rem;">${m.title}</h3>
      <div class="mistake-inner" style="display:flex; gap:20px; border-top:1px solid var(--border); padding-top:16px;">
        <div style="flex:1;">
          <h4 style="margin:0 0 8px 0; color:var(--red); font-size:0.9rem;">The Pitfall ❌</h4>
          <div style="color:var(--text2); font-size:0.95rem; line-height:1.5;">${m.pitfall}</div>
        </div>
        <div style="flex:1; background:var(--bg2); padding:16px; border-radius:6px; border-left:2px solid var(--accent)">
          <h4 style="margin:0 0 8px 0; color:var(--accent); font-size:0.9rem;">The Remedy ✅</h4>
          <div style="color:var(--text2); font-size:0.95rem; line-height:1.5;">${m.remedy}</div>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('mistakes-content').innerHTML = `
    <div class="page-hdr">
      <div class="ph-left">
        <div class="eyebrow">Real World Engineering</div>
        <h1 class="page-title">⚠️ Mistakes Database</h1>
        <p class="page-desc">Common design faults and regulatory violations. Adapting references dynamically for ${stdName}.</p>
      </div>
      <span class="std-pill">${stdName}</span>
    </div>
    <div style="margin-top:20px; max-width:960px;">
      ${cardsHtml || '<div style="color:var(--text3)">No mistakes documented yet.</div>'}
    </div>`;
}

function renderRef() {
  const std = STATE.std;
  const stdName = window.STANDARDS?.[std]?.name || std;

  // Aggregate all tables embedded in topic data
  const collectedTables = [];
  const seenTitles = new Set();

  ALL_TOPICS.forEach(t => {
    ['beginner', 'advanced'].forEach(mode => {
      const data = t[mode];
      if (!data || !data.table) return;
      const tbl = data.table[std] || data.table['all'];
      if (!tbl || seenTitles.has(tbl.title)) return;
      seenTitles.add(tbl.title);
      collectedTables.push({ topic: t.title, icon: t.icon, isUniversal: !!data.table['all'], ...tbl });
    });
  });

  let tableHtml = '';
  if (collectedTables.length === 0) {
    tableHtml = `<div style="padding:40px;text-align:center;color:var(--text3);font-family:var(--font-mono);font-size:.85rem">
      No reference tables have been populated yet. Tables will appear here automatically as they are added to individual topics.
    </div>`;
  } else {
    collectedTables.forEach(tbl => {
      const headerRow = `<tr>${tbl.columns.map(c => `<th style="text-align:left; padding:10px; border-bottom:2px solid var(--border); color:var(--text); font-family:var(--font-head);">${c}</th>`).join('')}</tr>`;
      const dataRows = tbl.data.map(row => `<tr>${row.map((cell, i) => `<td style="padding:10px; border-bottom:1px solid var(--border); color:${i===0?'var(--text)':'var(--text2)'}; font-weight:${i===0?'600':'normal'};">${cell}</td>`).join('')}</tr>`).join('');

      tableHtml += `
        <div style="background:var(--bg2); border:1px solid var(--border); border-radius:8px; margin-bottom:24px; overflow:hidden;">
          <div style="background:var(--bg3); padding:16px; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
            <div>
              <h3 style="margin:0 0 4px 0; color:var(--text); font-size:1.1rem;">${tbl.icon || '📊'} ${tbl.title}</h3>
              <p style="margin:0; color:var(--text3); font-size:0.85rem;">${tbl.desc} <span style="font-family:var(--font-mono);font-size:.72rem;opacity:.6">— from ${tbl.topic}</span></p>
            </div>
            <div style="padding:4px 8px; border-radius:4px; font-size:0.75rem; font-family:var(--font-mono); background:var(--bg); border:1px solid var(--border); color:var(--text3);">
               ${tbl.isUniversal ? 'UNIVERSAL' : stdName}
            </div>
          </div>
          <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
              <thead>${headerRow}</thead>
              <tbody>${dataRows}</tbody>
            </table>
          </div>
        </div>
      `;
    });
  }

  document.getElementById('ref-content').innerHTML = `
    <div class="page-hdr">
      <div class="ph-left">
        <div class="eyebrow">Module</div>
        <h1 class="page-title">Reference Tables</h1>
        <p class="page-desc">Engineering lookup tables aggregated from all topics. Data adapts based on the selected standard.</p>
      </div>
      <span class="std-pill">${stdName}</span>
    </div>
    <div style="max-width:1000px;">
      ${tableHtml}
    </div>`;
}

// ── SEARCH ──
function initSearch() {
  const input = document.getElementById('search-input');
  const drop  = document.getElementById('search-drop');
  if (!input || !drop) return;

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const q = input.value.trim().toLowerCase();
      if (!q) { drop.classList.remove('open'); return; }
      const results = searchTopics(q);
      renderSearchResults(results, q, drop);
      drop.classList.add('open');
    }, 300);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) drop.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) drop.classList.remove('open');
  });
}

function quickSearch(q) {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.value = q;
  input.focus();
  // Trigger input event to fire the debounced search logic
  input.dispatchEvent(new Event('input', { bubbles: true }));
  // Scroll to top to ensure search is visible
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function searchTopics(q) {
  q = q.toLowerCase();
  return ALL_TOPICS.filter(t => {
    const matchesBasic = t.title.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q))) ||
      (t.id || '').replace(/-/g,' ').includes(q);
    
    // Check sectors
    let matchesSector = false;
    const tSects = getTopicSectors(t);
    if (tSects.length > 0) {
      matchesSector = tSects.some(sId => {
        const s = window.SECTORS?.[sId];
        return sId.toLowerCase() === q || (s && s.name.toLowerCase() === q);
      });
    }
    
    return matchesBasic || matchesSector;
  }).slice(0, 6);
}

function getIntentSuggestions(q) {
  return INTENT_MAP.filter(item =>
    item.phrases.some(p => q.includes(p) || p.includes(q))
  ).slice(0, 3);
}

function renderSearchResults(results, q, drop) {
  const intents = getIntentSuggestions(q);
  const levelLabel = { 1:'L1', 2:'L2', 3:'L3', 4:'L4' };

  drop.innerHTML = `
    ${results.length ? results.map(t => `
      <div class="s-item" onclick="navigateTo('topic','${t.id}');document.getElementById('search-drop').classList.remove('open');document.getElementById('search-input').value=''">
        <span class="s-icon">${t.icon}</span>
        <div>
          <div class="s-title">${t.title}</div>
          <div class="s-meta">${levelLabel[t.level]} · ${getTopicSectors(t).map(s=>window.SECTORS[s]?.name||s).join(', ')}</div>
        </div>
      </div>`).join('') : `<div class="s-item"><span class="s-icon">🔍</span><div class="s-title" style="color:var(--text3)">No topics found for "${q}"</div></div>`}

    ${intents.length ? `
      <div class="intent-sec">
        <div class="intent-lbl">Did you mean?</div>
        ${intents.map(i => `
          <span class="intent-chip" onclick="navigateTo('topic','${i.topicId}');document.getElementById('search-drop').classList.remove('open');document.getElementById('search-input').value=''">
            → ${i.label}
          </span>`).join('')}
      </div>` : ''}
  `;
}

// ── ERROR FALLBACK UI ──
function showError(msg, detail) {
  // Try to show error in the active page container
  const activePage = document.querySelector('.page.active');
  if (activePage) {
    const container = activePage.querySelector('div') || activePage;
    container.innerHTML = `
      <div style="max-width:600px;margin:60px auto;padding:32px;background:var(--bg2);border:1px solid var(--red);border-radius:12px;text-align:center;">
        <div style="font-size:2.5rem;margin-bottom:16px;">⚠️</div>
        <h2 style="color:var(--red);font-family:var(--font-head);margin-bottom:12px;">Something went wrong</h2>
        <p style="color:var(--text2);font-size:.9rem;margin-bottom:16px;">${msg}</p>
        ${detail ? `<pre style="background:var(--bg3);padding:12px;border-radius:6px;font-family:var(--font-mono);font-size:.75rem;color:var(--text3);text-align:left;overflow-x:auto;margin-bottom:16px;">${detail}</pre>` : ''}
        <div style="display:flex;gap:10px;justify-content:center;">
          <button class="btn btn-primary" onclick="navigateTo('home')">Go Home</button>
          <button class="btn btn-outline" onclick="location.reload()">Reload</button>
        </div>
      </div>`;
  }
}

// Global error handlers — prevent blank screen on uncaught errors
window.onerror = function(msg, src, line, col, err) {
  console.error('Global error:', msg, src, line, col, err);
  
  // Suppress known non-fatal library bugs (e.g., VanillaTilt getBoundingClientRect on destroyed elements)
  const errStr = String(msg) + (err ? String(err.stack) : '');
  if (errStr.includes('vanilla-tilt') || (src && src.includes('vanilla-tilt'))) {
    console.warn('Suppressed non-fatal VanillaTilt edge-case error.');
    return true; 
  }

  let detail = `${msg} (line ${line})`;
  if (err && err.stack) {
    detail = err.stack;
  } else if (src) {
    detail += `\nSource: ${src}:${line}:${col}`;
  }
  showError('An unexpected error occurred.', detail);
  return true; // Suppress default browser error
};

window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled rejection:', e.reason);
  showError('An async operation failed.', e.reason?.message || String(e.reason));
});

// ── EXPOSE ALL GLOBALS ──
window.navigateTo    = navigateTo;
window.setStd        = setStd;
window.setModule     = setModule;
window.toggleTheme   = toggleTheme;
window.toggleSidebar = toggleSidebar;
window.closeSidebar  = closeSidebar;
window.toggleNavSect = toggleNavSect;
window.setDiffTab    = setDiffTab;
window.setViewTab    = setViewTab;
window.renderTopic   = renderTopic;
window.showError     = showError;
window.quickSearch   = quickSearch;
