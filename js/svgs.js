/* ═══════════════════════════════════════════
   ElecPro — svgs.js
   SVG Diagrams for Level 1 topics
   All diagrams use CSS variables for dark/light
   ═══════════════════════════════════════════ */

const SVG_DIAGRAMS = {

  // ── OHM'S LAW — Beginner: Simple circuit ──
  'ohms-law-beg': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <style>
        .od { stroke:var(--accent);stroke-width:2;fill:none }
        .ow { fill:var(--bg3);stroke:var(--border);stroke-width:1.5 }
        .ot { fill:var(--text);font-size:12px }
        .os { fill:var(--text2);font-size:10px }
        .oa { fill:var(--accent);font-size:11px;font-weight:600 }
        .ow2 { stroke:var(--text2);stroke-width:1.5;fill:none }
      </style>
      <!-- Battery -->
      <rect x="30" y="110" width="60" height="60" rx="6" class="ow"/>
      <text x="60" y="138" text-anchor="middle" class="ot">⚡</text>
      <text x="60" y="154" text-anchor="middle" class="os">Source</text>
      <text x="60" y="166" text-anchor="middle" class="oa">230V</text>
      <!-- Top wire -->
      <line x1="90" y1="120" x2="240" y2="120" class="od"/>
      <!-- Resistor (rectangle) -->
      <rect x="240" y="100" width="80" height="40" rx="4" class="ow"/>
      <text x="280" y="118" text-anchor="middle" class="ot">R</text>
      <text x="280" y="132" text-anchor="middle" class="oa">46 Ω</text>
      <!-- Top wire right -->
      <line x1="320" y1="120" x2="460" y2="120" class="od"/>
      <!-- Right vertical -->
      <line x1="460" y1="120" x2="460" y2="200" class="od"/>
      <!-- Bottom wire -->
      <line x1="460" y1="200" x2="90" y2="200" class="od"/>
      <!-- Bottom left -->
      <line x1="90" y1="200" x2="90" y2="170" class="od"/>
      <!-- Arrow showing current direction -->
      <polygon points="195,112 215,120 195,128" fill="var(--accent)" opacity=".7"/>
      <text x="200" y="108" text-anchor="middle" class="os" style="fill:var(--accent)">I = 5A</text>
      <!-- V label -->
      <text x="160" y="170" text-anchor="middle" class="ot" style="fill:var(--accent)">V = 230V</text>
      <!-- Formula box -->
      <rect x="160" y="220" width="220" height="48" rx="6" style="fill:var(--bg3);stroke:var(--accent);stroke-width:1.5"/>
      <text x="270" y="238" text-anchor="middle" class="oa">I = V / R</text>
      <text x="270" y="254" text-anchor="middle" class="os" style="fill:var(--text2)">= 230 / 46 = 5A</text>
      <!-- Power -->
      <text x="420" y="165" text-anchor="middle" class="os" style="fill:var(--green)">P = V × I</text>
      <text x="420" y="180" text-anchor="middle" class="oa" style="fill:var(--green)">= 1150W</text>
    </svg>`,

  // ── THREE PHASE — Star vs Delta comparison ──
  '3ph-star-delta': `
    <svg width="100%" viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <style>
        .ph { stroke-width:2.5;fill:none }
        .pt { font-size:11px }
        .pb { font-size:10px;fill:var(--text2) }
        .pa { font-size:12px;font-weight:600 }
        .pbox { fill:var(--bg2);stroke:var(--border);stroke-width:1.2;rx:6 }
      </style>
      <!-- STAR section -->
      <text x="130" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">STAR (Y)</text>
      <!-- Neutral point -->
      <circle cx="130" cy="160" r="6" style="fill:var(--accent)"/>
      <text x="130" y="175" text-anchor="middle" style="font-size:10px;fill:var(--text2)">Neutral (N)</text>
      <!-- Phase R -->
      <line x1="130" y1="154" x2="80" y2="80" class="ph" style="stroke:var(--red)"/>
      <circle cx="78" cy="78" r="12" style="fill:rgba(231,76,60,.15);stroke:var(--red);stroke-width:1.5;fill-opacity:.2"/>
      <text x="78" y="82" text-anchor="middle" style="font-size:10px;font-weight:600;fill:var(--red)">R</text>
      <!-- Phase Y -->
      <line x1="130" y1="160" x2="185" y2="80" class="ph" style="stroke:var(--amber)"/>
      <circle cx="187" cy="78" r="12" style="fill:rgba(243,156,18,.15);stroke:var(--amber);stroke-width:1.5"/>
      <text x="187" y="82" text-anchor="middle" style="font-size:10px;font-weight:600;fill:var(--amber)">Y</text>
      <!-- Phase B -->
      <line x1="130" y1="160" x2="130" y2="240" class="ph" style="stroke:var(--blue)"/>
      <circle cx="130" cy="252" r="12" style="fill:rgba(74,144,217,.15);stroke:var(--blue);stroke-width:1.5"/>
      <text x="130" y="256" text-anchor="middle" style="font-size:10px;font-weight:600;fill:var(--blue)">B</text>
      <!-- Star annotations -->
      <text x="40" y="125" class="pb">VP = 240V</text>
      <text x="40" y="138" class="pb" style="fill:var(--accent)">VL = √3 × VP</text>
      <text x="40" y="151" class="pb" style="fill:var(--accent)">= 415V</text>
      <!-- DELTA section -->
      <text x="400" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">DELTA (Δ)</text>
      <!-- Triangle vertices -->
      <circle cx="400" cy="70" r="12" style="fill:rgba(231,76,60,.15);stroke:var(--red);stroke-width:1.5"/>
      <text x="400" y="74" text-anchor="middle" style="font-size:10px;font-weight:600;fill:var(--red)">R</text>
      <circle cx="330" cy="200" r="12" style="fill:rgba(243,156,18,.15);stroke:var(--amber);stroke-width:1.5"/>
      <text x="330" y="204" text-anchor="middle" style="font-size:10px;font-weight:600;fill:var(--amber)">Y</text>
      <circle cx="470" cy="200" r="12" style="fill:rgba(74,144,217,.15);stroke:var(--blue);stroke-width:1.5"/>
      <text x="470" y="204" text-anchor="middle" style="font-size:10px;font-weight:600;fill:var(--blue)">B</text>
      <!-- Delta lines -->
      <line x1="400" y1="82" x2="340" y2="190" class="ph" style="stroke:var(--red)"/>
      <line x1="342" y1="200" x2="458" y2="200" class="ph" style="stroke:var(--amber)"/>
      <line x1="460" y1="190" x2="408" y2="82" class="ph" style="stroke:var(--blue)"/>
      <!-- Delta annotations -->
      <text x="478" y="130" class="pb">VL = VP</text>
      <text x="478" y="143" class="pb" style="fill:var(--accent)">= 415V</text>
      <text x="478" y="156" class="pb">IL = √3 × IP</text>
      <!-- No neutral label -->
      <text x="400" y="235" text-anchor="middle" class="pb">No neutral point</text>
      <!-- Divider -->
      <line x1="270" y1="20" x2="270" y2="270" style="stroke:var(--border);stroke-width:1;stroke-dasharray:4,4"/>
    </svg>`,

  // ── POWER TRIANGLE ──
  'power-triangle': `
    <svg width="100%" viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- Triangle -->
      <polygon points="80,220 360,220 360,80" style="fill:rgba(74,144,217,.06);stroke:var(--blue);stroke-width:1.5"/>
      <!-- Hypotenuse = kVA -->
      <line x1="80" y1="220" x2="360" y2="80" style="stroke:var(--accent);stroke-width:3"/>
      <text x="195" y="140" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:700;transform:rotate(-22deg);transform-origin:195px 140px">kVA (Apparent)</text>
      <!-- Base = kW -->
      <line x1="80" y1="220" x2="360" y2="220" style="stroke:var(--green);stroke-width:3"/>
      <text x="220" y="238" text-anchor="middle" style="fill:var(--green);font-size:12px;font-weight:600">kW (Real Power)</text>
      <!-- Height = kVAr -->
      <line x1="360" y1="220" x2="360" y2="80" style="stroke:var(--red);stroke-width:3;stroke-dasharray:6,4"/>
      <text x="395" y="155" text-anchor="start" style="fill:var(--red);font-size:12px;font-weight:600">kVAr</text>
      <text x="395" y="170" text-anchor="start" style="fill:var(--red);font-size:12px">(Reactive)</text>
      <!-- Angle phi -->
      <path d="M 130,220 A 50,50 0 0,1 117,178" style="stroke:var(--purple);stroke-width:2;fill:none"/>
      <text x="148" y="205" style="fill:var(--purple);font-size:12px">φ</text>
      <!-- Right angle mark -->
      <rect x="348" y="208" width="12" height="12" style="fill:none;stroke:var(--text2);stroke-width:1"/>
      <!-- PF formula -->
      <rect x="30" y="30" width="200" height="44" rx="6" style="fill:var(--bg3);stroke:var(--accent);stroke-width:1.5"/>
      <text x="130" y="50" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">PF = kW / kVA = cos φ</text>
      <text x="130" y="66" text-anchor="middle" style="fill:var(--text2);font-size:10px">kVA = √(kW² + kVAr²)</text>
      <!-- Example values -->
      <text x="420" y="60" text-anchor="middle" style="fill:var(--text2);font-size:10px">Example:</text>
      <text x="420" y="76" text-anchor="middle" style="fill:var(--green);font-size:11px;font-weight:600">80 kW</text>
      <text x="420" y="92" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:600">60 kVAr</text>
      <text x="420" y="108" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:600">100 kVA</text>
      <text x="420" y="124" text-anchor="middle" style="fill:var(--purple);font-size:11px">PF = 0.8</text>
    </svg>`,

  // ── AC vs DC COMPARISON ──
  'ac-dc-comparison': `
    <svg width="100%" viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- AC Section -->
      <text x="130" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">AC — Alternating Current</text>
      <rect x="20" y="35" width="220" height="160" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1.2"/>
      <!-- Sine wave -->
      <path d="M 30,115 C 52,115 52,55 75,55 C 97,55 97,175 120,175 C 142,175 142,55 165,55 C 187,55 187,175 210,175 C 232,175 232,115 230,115"
        style="stroke:var(--blue);stroke-width:2.5;fill:none"/>
      <line x1="30" y1="115" x2="230" y2="115" style="stroke:var(--border2);stroke-width:1;stroke-dasharray:3,3"/>
      <text x="130" y="204" text-anchor="middle" style="fill:var(--blue);font-size:11px">Reverses direction at 50Hz</text>
      <!-- AC labels -->
      <text x="78" y="50" style="fill:var(--text2);font-size:9px">+325V peak</text>
      <text x="78" y="185" style="fill:var(--text2);font-size:9px">-325V peak</text>
      <text x="195" y="110" style="fill:var(--text2);font-size:9px">230V rms</text>
      <!-- DC Section -->
      <text x="410" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">DC — Direct Current</text>
      <rect x="300" y="35" width="220" height="160" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1.2"/>
      <!-- DC flat line -->
      <line x1="310" y1="80" x2="510" y2="80" style="stroke:var(--amber);stroke-width:3"/>
      <line x1="310" y1="80" x2="310" y2="150" style="stroke:var(--amber);stroke-width:1.5;stroke-dasharray:4,3"/>
      <line x1="510" y1="80" x2="510" y2="150" style="stroke:var(--amber);stroke-width:1.5;stroke-dasharray:4,3"/>
      <line x1="310" y1="150" x2="510" y2="150" style="stroke:var(--border2);stroke-width:1;stroke-dasharray:3,3"/>
      <text x="410" y="100" text-anchor="middle" style="fill:var(--amber);font-size:12px;font-weight:600">192V DC (constant)</text>
      <text x="410" y="204" text-anchor="middle" style="fill:var(--amber);font-size:11px">Always same direction</text>
      <!-- Divider -->
      <line x1="270" y1="15" x2="270" y2="245" style="stroke:var(--border);stroke-width:1;stroke-dasharray:4,4"/>
      <!-- Applications labels -->
      <text x="130" y="230" text-anchor="middle" style="fill:var(--text3);font-size:10px">Motors, lighting, grid</text>
      <text x="410" y="230" text-anchor="middle" style="fill:var(--text3);font-size:10px">Batteries, solar, electronics</text>
    </svg>`,

  // ── UNITS TABLE ──
  'units-table': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Mono',monospace">
      <rect x="10" y="10" width="520" height="260" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1.2"/>
      <!-- Header -->
      <rect x="10" y="10" width="520" height="32" rx="8" style="fill:var(--accent);stroke:none"/>
      <text x="80" y="31" text-anchor="middle" style="fill:#000;font-size:11px;font-weight:700">Quantity</text>
      <text x="200" y="31" text-anchor="middle" style="fill:#000;font-size:11px;font-weight:700">Unit</text>
      <text x="310" y="31" text-anchor="middle" style="fill:#000;font-size:11px;font-weight:700">Symbol</text>
      <text x="440" y="31" text-anchor="middle" style="fill:#000;font-size:11px;font-weight:700">Common prefix</text>
      <!-- Rows -->
      <line x1="10" y1="42" x2="530" y2="42" style="stroke:var(--border);stroke-width:.8"/>
      ${[
        ['Voltage','Volt','V','kV, mV'],
        ['Current','Ampere','A','mA, kA'],
        ['Resistance','Ohm','Ω','mΩ, kΩ, MΩ'],
        ['Power','Watt','W','kW, MW'],
        ['Energy','Kilowatt-hour','kWh','MWh'],
        ['Apparent power','Volt-ampere','VA','kVA, MVA'],
        ['Reactive power','Volt-amp reactive','VAr','kVAr, MVAr'],
      ].map((row, i) => {
        const y = 42 + (i+1)*32;
        const bg = i%2 === 1 ? `<rect x="10" y="${y-20}" width="520" height="32" style="fill:var(--bg3);opacity:.5"/>` : '';
        return `${bg}
          <text x="80" y="${y}" text-anchor="middle" style="fill:var(--text);font-size:10px">${row[0]}</text>
          <text x="200" y="${y}" text-anchor="middle" style="fill:var(--text2);font-size:10px">${row[1]}</text>
          <text x="310" y="${y}" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:700">${row[2]}</text>
          <text x="440" y="${y}" text-anchor="middle" style="fill:var(--text2);font-size:10px">${row[3]}</text>`;
      }).join('')}
      <!-- Column dividers -->
      <line x1="140" y1="10" x2="140" y2="270" style="stroke:var(--border);stroke-width:.8"/>
      <line x1="260" y1="10" x2="260" y2="270" style="stroke:var(--border);stroke-width:.8"/>
      <line x1="370" y1="10" x2="370" y2="270" style="stroke:var(--border);stroke-width:.8"/>
    </svg>`,

  // ── SYMBOLS IEC ──
  'symbols-iec': `
    <svg width="100%" viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="20" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Common IEC 60617 Electrical Symbols</text>
      ${[
        {x:60,  y:60,  label:'Circuit Breaker',   sym:'cb'},
        {x:200, y:60,  label:'Fuse',              sym:'fuse'},
        {x:340, y:60,  label:'Transformer',       sym:'tx'},
        {x:460, y:60,  label:'Motor',             sym:'motor'},
        {x:60,  y:160, label:'Contactor',         sym:'contactor'},
        {x:200, y:160, label:'Ammeter',           sym:'ammeter'},
        {x:340, y:160, label:'Earth (PE)',        sym:'earth'},
        {x:460, y:160, label:'RCD / RCCB',        sym:'rcd'},
        {x:60,  y:260, label:'Isolator',          sym:'isolator'},
        {x:200, y:260, label:'Generator',         sym:'gen'},
        {x:340, y:260, label:'Battery',           sym:'battery'},
        {x:460, y:260, label:'Busbar',            sym:'busbar'},
      ].map(({x,y,label,sym}) => {
        const syms = {
          cb:`<rect x="${x-20}" y="${y-18}" width="40" height="36" rx="4" style="fill:var(--bg3);stroke:var(--text2);stroke-width:1.5"/><line x1="${x}" y1="${y-28}" x2="${x}" y2="${y-18}" style="stroke:var(--text2);stroke-width:1.5"/><line x1="${x-15}" y1="${y+4}" x2="${x+15}" y2="${y-16}" style="stroke:var(--accent);stroke-width:1.5"/><line x1="${x}" y1="${y+18}" x2="${x}" y2="${y+28}" style="stroke:var(--text2);stroke-width:1.5"/>`,
          fuse:`<line x1="${x}" y1="${y-28}" x2="${x}" y2="${y-14}" style="stroke:var(--text2);stroke-width:1.5"/><rect x="${x-14}" y="${y-14}" width="28" height="28" rx="2" style="fill:var(--bg3);stroke:var(--text2);stroke-width:1.5"/><line x1="${x}" y1="${y+14}" x2="${x}" y2="${y+28}" style="stroke:var(--text2);stroke-width:1.5"/>`,
          tx:`<circle cx="${x-10}" cy="${y}" r="16" style="fill:none;stroke:var(--blue);stroke-width:2"/><circle cx="${x+10}" cy="${y}" r="16" style="fill:none;stroke:var(--blue);stroke-width:2"/><line x1="${x-28}" y1="${y}" x2="${x-26}" y2="${y}" style="stroke:var(--text2);stroke-width:1.5"/><line x1="${x+26}" y1="${y}" x2="${x+28}" y2="${y}" style="stroke:var(--text2);stroke-width:1.5"/>`,
          motor:`<circle cx="${x}" cy="${y}" r="20" style="fill:var(--bg3);stroke:var(--green);stroke-width:2"/><text x="${x}" y="${y+5}" text-anchor="middle" style="fill:var(--green);font-size:14px;font-weight:700">M</text>`,
          contactor:`<rect x="${x-18}" y="${y-14}" width="36" height="28" rx="3" style="fill:var(--bg3);stroke:var(--text2);stroke-width:1.5"/><line x1="${x-10}" y1="${y}" x2="${x+10}" y2="${y}" style="stroke:var(--accent);stroke-width:2"/><text x="${x}" y="${y+5}" text-anchor="middle" style="fill:var(--text2);font-size:8px">K</text>`,
          ammeter:`<circle cx="${x}" cy="${y}" r="18" style="fill:var(--bg3);stroke:var(--text2);stroke-width:1.5"/><text x="${x}" y="${y+5}" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">A</text>`,
          earth:`<line x1="${x}" y1="${y-20}" x2="${x}" y2="${y}" style="stroke:var(--text2);stroke-width:1.5"/><line x1="${x-18}" y1="${y}" x2="${x+18}" y2="${y}" style="stroke:var(--text2);stroke-width:2"/><line x1="${x-12}" y1="${y+7}" x2="${x+12}" y2="${y+7}" style="stroke:var(--text2);stroke-width:2"/><line x1="${x-6}" y1="${y+14}" x2="${x+6}" y2="${y+14}" style="stroke:var(--text2);stroke-width:2"/>`,
          rcd:`<rect x="${x-18}" y="${y-18}" width="36" height="36" rx="4" style="fill:var(--bg3);stroke:var(--teal);stroke-width:1.5"/><line x1="${x-10}" y1="${y}" x2="${x+10}" y2="${y}" style="stroke:var(--teal);stroke-width:2"/><line x1="${x}" y1="${y+18}" x2="${x}" y2="${y+26}" style="stroke:var(--teal);stroke-width:1.5;stroke-dasharray:3,2"/>`,
          isolator:`<line x1="${x}" y1="${y-22}" x2="${x}" y2="${y-8}" style="stroke:var(--text2);stroke-width:1.5"/><line x1="${x}" y1="${y-8}" x2="${x+16}" y2="${y-20}" style="stroke:var(--text2);stroke-width:1.5"/><line x1="${x}" y1="${y+8}" x2="${x}" y2="${y+22}" style="stroke:var(--text2);stroke-width:1.5"/>`,
          gen:`<circle cx="${x}" cy="${y}" r="20" style="fill:var(--bg3);stroke:var(--purple);stroke-width:2"/><text x="${x}" y="${y+5}" text-anchor="middle" style="fill:var(--purple);font-size:12px;font-weight:700">G</text>`,
          battery:`<line x1="${x}" y1="${y-22}" x2="${x}" y2="${y-6}" style="stroke:var(--text2);stroke-width:1.5"/><line x1="${x-14}" y1="${y-6}" x2="${x+14}" y2="${y-6}" style="stroke:var(--text2);stroke-width:3"/><line x1="${x-8}" y1="${y+2}" x2="${x+8}" y2="${y+2}" style="stroke:var(--text2);stroke-width:1.5"/><line x1="${x-14}" y1="${y+8}" x2="${x+14}" y2="${y+8}" style="stroke:var(--text2);stroke-width:3"/><line x1="${x-8}" y1="${y+16}" x2="${x+8}" y2="${y+16}" style="stroke:var(--text2);stroke-width:1.5"/><line x1="${x}" y1="${y+16}" x2="${x}" y2="${y+22}" style="stroke:var(--text2);stroke-width:1.5"/>`,
          busbar:`<rect x="${x-28}" y="${y-5}" width="56" height="10" rx="2" style="fill:var(--surface);stroke:var(--text2);stroke-width:2"/>`,
        };
        return `${syms[sym]||''}<text x="${x}" y="${y+44}" text-anchor="middle" style="fill:var(--text2);font-size:9.5px">${label}</text>`;
      }).join('')}
    </svg>`,

  // ── TOUCH VOLTAGE DIAGRAM ──
  'touch-step-voltage': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- Ground -->
      <rect x="0" y="200" width="540" height="80" style="fill:rgba(39,174,96,.08);stroke:none"/>
      <text x="270" y="255" text-anchor="middle" style="fill:var(--text3);font-size:10px">Earth / Ground surface</text>
      <!-- Faulty equipment -->
      <rect x="60" y="80" width="100" height="120" rx="6" style="fill:rgba(231,76,60,.1);stroke:var(--red);stroke-width:2"/>
      <text x="110" y="135" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:600">Faulty</text>
      <text x="110" y="150" text-anchor="middle" style="fill:var(--red);font-size:11px">Equipment</text>
      <text x="110" y="170" text-anchor="middle" style="fill:var(--red);font-size:10px">V = 110V</text>
      <!-- Earth connection -->
      <line x1="110" y1="200" x2="110" y2="225" style="stroke:var(--red);stroke-width:2;stroke-dasharray:5,3"/>
      <!-- Person touching -->
      <!-- Body -->
      <circle cx="220" cy="100" r="15" style="fill:var(--surface);stroke:var(--text2);stroke-width:1.5"/>
      <line x1="220" y1="115" x2="220" y2="175" style="stroke:var(--text2);stroke-width:2"/>
      <line x1="220" y1="130" x2="195" y2="115" style="stroke:var(--text2);stroke-width:2"/>
      <line x1="195" y1="115" x2="162" y2="135" style="stroke:var(--text2);stroke-width:2"/>
      <line x1="220" y1="175" x2="205" y2="200" style="stroke:var(--text2);stroke-width:2"/>
      <line x1="220" y1="175" x2="235" y2="200" style="stroke:var(--text2);stroke-width:2"/>
      <!-- Touch current path -->
      <path d="M 162,135 C 140,120 130,100 110,100" style="stroke:var(--red);stroke-width:2;stroke-dasharray:6,3;fill:none"/>
      <polygon points="112,88 110,100 122,96" style="fill:var(--red)"/>
      <!-- Touch voltage label -->
      <rect x="270" y="80" width="180" height="80" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <text x="360" y="102" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">Touch Voltage Hazard</text>
      <text x="360" y="120" text-anchor="middle" style="fill:var(--red);font-size:11px">Hand to equipment: 110V</text>
      <text x="360" y="136" text-anchor="middle" style="fill:var(--text2);font-size:10px">Feet to earth: 0V</text>
      <text x="360" y="152" text-anchor="middle" style="fill:var(--text2);font-size:10px">Touch voltage = 110V</text>
      <!-- RCD protection label -->
      <rect x="320" y="180" width="200" height="40" rx="4" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:1.2"/>
      <text x="420" y="198" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:600">30mA RCD disconnects in &lt; 40ms</text>
      <text x="420" y="213" text-anchor="middle" style="fill:var(--green);font-size:10px">Limits exposure to safe energy</text>
    </svg>`,

  // ── LEARNING PATHS ──
  'learning-paths': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      ${[
        {x:90, color:'var(--l1)', title:'Student', icon:'🎓', levels:['L1','L2','L3','L4'], time:'6-8 months'},
        {x:270, color:'var(--l2)', title:'Site Engineer', icon:'🔧', levels:['L2','L3'], time:'2-3 months'},
        {x:450, color:'var(--l3)', title:'Design Engineer', icon:'📐', levels:['L3','L4'], time:'2-4 months'},
      ].map(({x,color,title,icon,levels,time}) => `
        <rect x="${x-70}" y="30" width="140" height="220" rx="8" style="fill:var(--bg2);stroke:${color};stroke-width:1.5"/>
        <rect x="${x-70}" y="30" width="140" height="42" rx="8" style="fill:${color};opacity:.15;stroke:none"/>
        <rect x="${x-70}" y="56" width="140" height="16" style="fill:${color};opacity:.15;stroke:none"/>
        <text x="${x}" y="52" text-anchor="middle" style="fill:${color};font-size:13px;font-weight:700;font-family:'Rajdhani',sans-serif">${icon} ${title}</text>
        <text x="${x}" y="82" text-anchor="middle" style="fill:var(--text3);font-size:9px;font-family:'IBM Plex Mono',monospace">Start here</text>
        ${levels.map((l,i) => `
          <rect x="${x-50}" y="${102+i*44}" width="100" height="34" rx="5" style="fill:var(--bg3);stroke:${color};stroke-width:1;opacity:${1-i*.2}"/>
          <text x="${x}" y="${124+i*44}" text-anchor="middle" style="fill:${color};font-size:12px;font-weight:700;font-family:'IBM Plex Mono',monospace">${l}</text>
        `).join('')}
        <text x="${x}" y="${108+levels.length*44+16}" text-anchor="middle" style="fill:var(--text3);font-size:9px;font-family:'IBM Plex Mono',monospace">${time}</text>
      `).join('')}
      <!-- Arrows between levels within each path -->
      ${[90,270,450].map(x => `
        <line x1="${x}" y1="136" x2="${x}" y2="146" style="stroke:var(--border2);stroke-width:1.5"/>
        <polygon points="${x-4},146 ${x},154 ${x+4},146" style="fill:var(--border2)"/>
      `).join('')}
    </svg>`,

  // ── OHM'S LAW — Advanced: Impedance Triangle ──
  'ohms-law-adv': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <polygon points="100,200 400,200 400,80" style="fill:rgba(74,144,217,.05);stroke:none"/>
      <!-- Hypotenuse: Impedance Z -->
      <line x1="100" y1="200" x2="400" y2="80" style="stroke:var(--accent);stroke-width:3.5"/>
      <text x="215" y="130" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-weight:700;transform:rotate(-22deg);transform-origin:215px 130px">Impedance Z = √(R² + X²)</text>
      <!-- Base: Resistance R -->
      <line x1="100" y1="200" x2="400" y2="200" style="stroke:var(--text);stroke-width:3"/>
      <text x="250" y="220" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Resistance (R)</text>
      <!-- Height: Reactance X -->
      <line x1="400" y1="200" x2="400" y2="80" style="stroke:var(--blue);stroke-width:3;stroke-dasharray:5,3"/>
      <text x="415" y="145" text-anchor="start" style="fill:var(--blue);font-size:12px;font-weight:600">Reactance (X)</text>
      <!-- Angle phi -->
      <path d="M 160,200 A 60,60 0 0,1 155,178" style="stroke:var(--purple);stroke-width:2;fill:none"/>
      <text x="175" y="195" style="fill:var(--purple);font-size:13px">φ</text>
      <!-- Right angle -->
      <path d="M 385,200 L 385,185 L 400,185" style="fill:none;stroke:var(--text3);stroke-width:1"/>
      <!-- Phase/Vector Label -->
      <text x="50" y="50" style="fill:var(--accent);font-size:14px;font-weight:700;font-family:'Rajdhani',sans-serif">Impedance Vector Analysis</text>
    </svg>`,

  // ── AC vs DC — Detailed Waveform ──
  'ac-dc-waveform': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <rect x="20" y="20" width="500" height="240" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1.2"/>
      <!-- Grid Lines -->
      <line x1="40" y1="140" x2="500" y2="140" style="stroke:var(--border2);stroke-width:.8"/>
      <line x1="40" y1="20" x2="40" y2="260" style="stroke:var(--border2);stroke-width:.8"/>
      <!-- AC Wave -->
      <path d="M 40,140 C 90,140 90,40 140,40 C 190,40 190,240 240,240 C 290,240 290,40 340,40 C 390,40 390,240 440,240 C 490,240 490,140 500,140"
        style="stroke:var(--blue);stroke-width:3;fill:none;stroke-linecap:round"/>
      <!-- Peak vs RMS -->
      <line x1="40" y1="40" x2="500" y2="40" style="stroke:var(--red);stroke-width:1;stroke-dasharray:4,3;opacity:.6"/>
      <text x="45" y="32" style="fill:var(--red);font-size:10px">Vpeak = 325V</text>
      <line x1="40" y1="70" x2="500" y2="70" style="stroke:var(--green);stroke-width:1.5;stroke-dasharray:8,4"/>
      <text x="45" y="65" style="fill:var(--green);font-size:10px;font-weight:600">Vrms = 230V</text>
      <!-- Time / Period -->
      <path d="M 140,60 L 340,60" style="stroke:var(--text3);stroke-width:1;marker-start:url(#arrow-start);marker-end:url(#arrow-end)"/>
      <text x="240" y="52" text-anchor="middle" style="fill:var(--text3);font-size:10px">1 Cycle = 20ms (50Hz)</text>
    </svg>`,

  // ── 3-PHASE — Phasor Diagram ──
  '3ph-phasor': `
    <svg width="100%" viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <circle cx="270" cy="150" r="100" style="fill:none;stroke:var(--border2);stroke-width:1;stroke-dasharray:3,3"/>
      <!-- Axes -->
      <line x1="150" y1="150" x2="390" y2="150" style="stroke:var(--border);stroke-width:.8;opacity:.5"/>
      <line x1="270" y1="40" x2="270" y2="260" style="stroke:var(--border);stroke-width:.8;opacity:.5"/>
      <!-- Phasor R -->
      <line x1="270" y1="150" x2="370" y2="150" style="stroke:var(--red);stroke-width:3.5"/>
      <polygon points="365,145 375,150 365,155" style="fill:var(--red)"/>
      <text x="382" y="155" style="fill:var(--red);font-size:14px;font-weight:700">R (0°)</text>
      <!-- Phasor Y -->
      <line x1="270" y1="150" x2="220" y2="236.6" style="stroke:var(--amber);stroke-width:3.5"/>
      <polygon points="228,233 220,236.6 215,228" style="fill:var(--amber)"/>
      <text x="200" y="255" text-anchor="middle" style="fill:var(--amber);font-size:14px;font-weight:700">Y (-120°)</text>
      <!-- Phasor B -->
      <line x1="270" y1="150" x2="220" y2="63.4" style="stroke:var(--blue);stroke-width:3.5"/>
      <polygon points="215,72 220,63.4 228,67" style="fill:var(--blue)"/>
      <text x="200" y="55" text-anchor="middle" style="fill:var(--blue);font-size:14px;font-weight:700">B (-240°)</text>
      <!-- Arc arrows -->
      <path d="M 330,150 A 60,60 0 0,1 240,202" style="fill:none;stroke:var(--text3);stroke-width:1.2;stroke-dasharray:4,3"/>
      <text x="285" y="195" text-anchor="middle" style="fill:var(--text3);font-size:11px">120°</text>
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">3-Phase Balanced Phasor Network</text>
    </svg>`,

  // ── POWER FACTOR — Vector Addition (P, Q, S) ──
  'pf-phasor': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- P vector (kW) -->
      <line x1="80" y1="200" x2="330" y2="200" style="stroke:var(--green);stroke-width:4"/>
      <polygon points="325,194 335,200 325,206" style="fill:var(--green)"/>
      <text x="205" y="218" text-anchor="middle" style="fill:var(--green);font-size:12px;font-weight:700">Real Power (kW)</text>
      <!-- Q vector (kVAr) -->
      <line x1="80" y1="200" x2="80" y2="80" style="stroke:var(--red);stroke-width:4;stroke-dasharray:6,2"/>
      <polygon points="74,85 80,75 86,85" style="fill:var(--red)"/>
      <text x="65" y="130" text-anchor="middle" style="fill:var(--red);font-size:12px;font-weight:700;transform:rotate(-90deg);transform-origin:65px 130px">Reactive Power (kVAr)</text>
      <!-- S vector (kVA) -->
      <line x1="80" y1="200" x2="330" y2="80" style="stroke:var(--accent);stroke-width:4"/>
      <polygon points="322,86 333,78 328,91" style="fill:var(--accent)"/>
      <text x="210" y="125" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:700;transform:rotate(-25deg);transform-origin:210px 125px">Apparent Power (kVA)</text>
      <!-- Quadrant Label -->
      <text x="270" y="30" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Vector Addition: S = √(P² + Q²)</text>
    </svg>`,

  // ── UNITS — AWG vs Metric Comparison ──
  'units-conversions': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Core Area Comparison: NEC vs IS/IEC</text>
      <!-- Metric (6mm2) -->
      <circle cx="150" cy="120" r="30" style="fill:rgba(74,144,217,.15);stroke:var(--blue);stroke-width:2"/>
      <text x="150" y="125" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">6 mm²</text>
      <text x="150" y="165" text-anchor="middle" style="fill:var(--text2);font-size:10px">(IS/IEC Standard)</text>
      <!-- NEC (#10 AWG) -->
      <circle cx="390" cy="120" r="28" style="fill:rgba(231,76,60,.15);stroke:var(--red);stroke-width:2"/>
      <text x="390" y="125" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:700">#10 AWG</text>
      <text x="390" y="110" text-anchor="middle" style="fill:var(--red);font-size:8px;opacity:.7">5.26 mm²</text>
      <text x="390" y="165" text-anchor="middle" style="fill:var(--text2);font-size:10px">(NEC Standard)</text>
      <!-- Equivalency info -->
      <rect x="140" y="200" width="260" height="48" rx="6" style="fill:var(--bg3);stroke:var(--border);stroke-width:1"/>
      <text x="270" y="220" text-anchor="middle" style="fill:var(--text);font-size:11px">Approximate Equivalents:</text>
      <text x="270" y="235" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:700;font-family:'IBM Plex Mono',monospace">#12 ≈ 3.3mm² | #10 ≈ 5.3mm² | #8 ≈ 8.4mm²</text>
    </svg>`,

  // ── SYMBOLS COMPARISON — IEC vs ANSI ──
  'symbols-iec-vs-ansi': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Graphical Standard Variance: IEC vs ANSI</text>
      <!-- Columns -->
      <text x="135" y="55" text-anchor="middle" style="fill:var(--text3);font-size:11px;font-weight:700">IEC (India/Global)</text>
      <text x="405" y="55" text-anchor="middle" style="fill:var(--text3);font-size:11px;font-weight:700">ANSI/IEEE (USA)</text>
      <line x1="270" y1="40" x2="270" y2="260" style="stroke:var(--border);stroke-width:1;stroke-dasharray:4,4"/>
      <!-- Transformer -->
      <text x="270" y="100" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:600">TRANSFORMER</text>
      <!-- IEC TX -->
      <circle cx="125" cy="110" r="14" style="fill:none;stroke:var(--text);stroke-width:1.5"/>
      <circle cx="145" cy="110" r="14" style="fill:none;stroke:var(--text);stroke-width:1.5"/>
      <!-- ANSI TX -->
      <path d="M 380,100 Q 385,90 390,100 Q 395,90 400,100 Q 405,90 410,100 Q 415,90 420,100" style="fill:none;stroke:var(--text);stroke-width:1.5"/>
      <path d="M 380,120 Q 385,110 390,120 Q 395,110 400,120 Q 405,110 410,120 Q 415,110 420,120" style="fill:none;stroke:var(--text);stroke-width:1.5"/>
      <!-- Switch / Breaker -->
      <text x="270" y="180" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:600">CIRCUIT BREAKER</text>
      <!-- IEC CB -->
      <rect x="115" y="190" width="40" height="30" rx="3" style="fill:none;stroke:var(--text);stroke-width:1.5"/>
      <line x1="120" y1="215" x2="150" y2="195" style="stroke:var(--text);stroke-width:1.5"/>
      <!-- ANSI CB -->
      <rect x="385" y="190" width="40" height="30" rx="3" style="fill:none;stroke:var(--text);stroke-width:1.5"/>
      <line x1="395" y1="205" x2="415" y2="205" style="stroke:var(--text);stroke-width:2"/>
    </svg>`,

  // ── SLD BASIC — Power Flow ──
  'sld-basic': `
    <svg width="100%" viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- Utility Source -->
      <circle cx="270" cy="40" r="20" style="fill:var(--bg3);stroke:var(--accent);stroke-width:2"/>
      <text x="270" y="45" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-weight:700">U</text>
      <text x="300" y="42" style="fill:var(--text3);font-size:10px">Utility Grid (11kV)</text>
      <!-- Downward path -->
      <line x1="270" y1="60" x2="270" y2="90" style="stroke:var(--text2);stroke-width:2"/>
      <!-- Major Protection -->
      <rect x="250" y="90" width="40" height="36" rx="4" style="fill:none;stroke:var(--text2);stroke-width:2"/>
      <line x1="255" y1="118" x2="285" y2="98" style="stroke:var(--accent);stroke-width:2"/>
      <text x="300" y="112" style="fill:var(--text2);font-size:11px;font-weight:600">HT Circuit Breaker</text>
      <!-- Trafo -->
      <line x1="270" y1="126" x2="270" y2="150" style="stroke:var(--text2);stroke-width:2"/>
      <circle cx="262" cy="165" r="15" style="fill:none;stroke:var(--blue);stroke-width:2"/>
      <circle cx="278" cy="165" r="15" style="fill:none;stroke:var(--blue);stroke-width:2"/>
      <text x="300" y="170" style="fill:var(--blue);font-size:11px;font-weight:600">Distribution Trafo (415V)</text>
      <!-- Busbar -->
      <line x1="270" y1="180" x2="270" y2="210" style="stroke:var(--text2);stroke-width:2"/>
      <rect x="80" y="210" width="380" height="12" rx="4" style="fill:var(--bg3);stroke:var(--border);stroke-width:2"/>
      <text x="270" y="240" text-anchor="middle" style="fill:var(--text2);font-size:12px;font-weight:700">Main LV Busbar (Common Supply)</text>
    </svg>`,

  // ── NEC STRUCTURE ──
  'nec-structure': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Structural Map of the NEC (NFPA 70)</text>
      <!-- Hierarchical Boxes -->
      <rect x="40" y="45" width="460" height="210" rx="8" style="fill:rgba(74,144,217,.03);stroke:var(--border);stroke-width:1"/>
      <!-- General Rules -->
      <rect x="60" y="65" width="130" height="80" rx="6" style="fill:var(--bg3);stroke:var(--blue);stroke-width:2"/>
      <text x="125" y="100" text-anchor="middle" style="fill:var(--blue);font-size:12px;font-weight:700">Chap 1-4</text>
      <text x="125" y="120" text-anchor="middle" style="fill:var(--text2);font-size:10px">General Rules</text>
      <!-- Special Applications -->
      <rect x="205" y="65" width="130" height="80" rx="6" style="fill:var(--bg3);stroke:var(--amber);stroke-width:2"/>
      <text x="270" y="100" text-anchor="middle" style="fill:var(--amber);font-size:12px;font-weight:700">Chap 5-7</text>
      <text x="270" y="120" text-anchor="middle" style="fill:var(--text2);font-size:10px">Special Cond.</text>
      <!-- Independent systems -->
      <rect x="350" y="65" width="130" height="80" rx="6" style="fill:var(--bg3);stroke:var(--green);stroke-width:2"/>
      <text x="415" y="100" text-anchor="middle" style="fill:var(--green);font-size:12px;font-weight:700">Chap 8</text>
      <text x="415" y="120" text-anchor="middle" style="fill:var(--text2);font-size:10px">Communications</text>
      <!-- Foundation -->
      <rect x="60" y="165" width="420" height="70" rx="6" style="fill:rgba(155,89,182,.1);stroke:var(--purple);stroke-width:2"/>
      <text x="270" y="195" text-anchor="middle" style="fill:var(--purple);font-size:13px;font-weight:700">Chapter 9 — Tables & Calculations</text>
      <text x="270" y="215" text-anchor="middle" style="fill:var(--text3);font-size:11px">The mathematical backbone for all sizing</text>
    </svg>`,

  // ── PER UNIT DIAGRAM ──
  'per-unit-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- Flow -->
      <rect x="50" y="110" width="100" height="60" rx="6" style="fill:var(--bg3);stroke:var(--text);stroke-width:1.5"/>
      <text x="100" y="145" text-anchor="middle" style="fill:var(--text);font-size:12px">Actual (Ω)</text>
      <line x1="150" y1="140" x2="220" y2="140" style="stroke:var(--text3);stroke-width:2;marker-end:url(#arrow-end)"/>
      <rect x="220" y="110" width="100" height="60" rx="6" style="fill:rgba(74,144,217,.1);stroke:var(--accent);stroke-width:2.5"/>
      <text x="270" y="145" text-anchor="middle" style="fill:var(--accent);font-size:15px;font-weight:700">PU</text>
      <line x1="320" y1="140" x2="390" y2="140" style="stroke:var(--text3);stroke-width:2;marker-end:url(#arrow-end)"/>
      <rect x="390" y="110" width="100" height="60" rx="6" style="fill:var(--bg3);stroke:var(--text);stroke-width:1.5"/>
      <text x="440" y="145" text-anchor="middle" style="fill:var(--text);font-size:12px">Actual (kA)</text>
      <!-- Base divider -->
      <line x1="210" y1="190" x2="330" y2="190" style="stroke:var(--accent);stroke-width:2"/>
      <text x="270" y="215" text-anchor="middle" style="fill:var(--text2);font-size:13px;font-style:italic">Divided by Base Value</text>
      <text x="50" y="50" style="fill:var(--text);font-size:14px;font-weight:700;font-family:'Rajdhani',sans-serif">Per Unit Normalization Logic</text>
    </svg>`,

  // ── SYMMETRICAL COMPONENTS PHASOR ──
  'symm-components': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- Positive Sequence -->
      <g transform="translate(100, 140) scale(0.6)">
        <line x1="0" y1="0" x2="100" y2="0" style="stroke:var(--green);stroke-width:4"/>
        <line x1="0" y1="0" x2="-50" y2="86.6" style="stroke:var(--green);stroke-width:4;opacity:.6"/>
        <line x1="0" y1="0" x2="-50" y2="-86.6" style="stroke:var(--green);stroke-width:4;opacity:.6"/>
        <text x="0" y="110" text-anchor="middle" style="fill:var(--green);font-size:20px;font-weight:700">Positive (+)</text>
      </g>
      <!-- Negative Sequence -->
      <g transform="translate(270, 140) scale(0.6)">
        <line x1="0" y1="0" x2="100" y2="0" style="stroke:var(--red);stroke-width:4"/>
        <line x1="0" y1="0" x2="-50" y2="-86.6" style="stroke:var(--red);stroke-width:4;opacity:.6"/>
        <line x1="0" y1="0" x2="-50" y2="86.6" style="stroke:var(--red);stroke-width:4;opacity:.6"/>
        <text x="0" y="110" text-anchor="middle" style="fill:var(--red);font-size:20px;font-weight:700">Negative (-)</text>
      </g>
      <!-- Zero Sequence -->
      <g transform="translate(440, 140) scale(0.6)">
        <line x1="0" y1="0" x2="80" y2="0" style="stroke:var(--blue);stroke-width:6"/>
        <line x1="0" y1="15" x2="80" y2="15" style="stroke:var(--blue);stroke-width:6"/>
        <line x1="0" y1="-15" x2="80" y2="-15" style="stroke:var(--blue);stroke-width:6"/>
        <text x="0" y="110" text-anchor="middle" style="fill:var(--blue);font-size:20px;font-weight:700">Zero (0)</text>
      </g>
    </svg>`,

  // ── ARC FLASH ZONES — Safety Distances ──
  'arc-flash-zones': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- Arc Source -->
      <rect x="40" y="100" width="60" height="80" rx="4" style="fill:var(--bg3);stroke:var(--text);stroke-width:2"/>
      <text x="70" y="145" text-anchor="middle" style="fill:var(--red);font-size:20px">⚡</text>
      <!-- Nested Boundaries -->
      <circle cx="70" cy="140" r="180" style="fill:rgba(231,76,60,.03);stroke:var(--red);stroke-width:1;stroke-dasharray:8,4"/>
      <text x="210" y="50" style="fill:var(--red);font-size:10px;font-weight:600">Flash Protection Boundary</text>
      <circle cx="70" cy="140" r="110" style="fill:rgba(243,156,18,.05);stroke:var(--amber);stroke-width:1.5;stroke-dasharray:4,4"/>
      <text x="140" y="90" style="fill:var(--amber);font-size:10px;font-weight:600">Restricted Approach</text>
      <circle cx="70" cy="140" r="60" style="fill:rgba(231,76,60,.1);stroke:var(--red);stroke-width:2"/>
      <text x="110" y="145" style="fill:var(--red);font-size:9px;font-weight:700">Prohibited Space</text>
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Electrical Safety: Approach Boundaries</text>
    </svg>`,

  // ── SLD ADVANCED — Complex Layout ──
  'sld-advanced': `
    <svg width="100%" viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- Main Bus -->
      <rect x="50" y="140" width="440" height="8" rx="4" style="fill:var(--bg3);stroke:var(--border);stroke-width:1.5"/>
      <!-- Utility Path -->
      <circle cx="150" cy="40" r="16" style="fill:none;stroke:var(--accent);stroke-width:2"/>
      <text x="150" y="44" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:700">U</text>
      <line x1="150" y1="56" x2="150" y2="90" style="stroke:var(--text);stroke-width:1.5"/>
      <rect x="135" y="90" width="30" height="26" style="fill:none;stroke:var(--text);stroke-width:1.5"/>
      <line x1="150" y1="116" x2="150" y2="140" style="stroke:var(--text);stroke-width:1.5"/>
      <!-- Generator Path -->
      <circle cx="390" cy="40" r="16" style="fill:none;stroke:var(--purple);stroke-width:2"/>
      <text x="390" y="44" text-anchor="middle" style="fill:var(--purple);font-size:10px;font-weight:700">G</text>
      <line x1="390" y1="56" x2="390" y2="90" style="stroke:var(--text);stroke-width:1.5"/>
      <rect x="375" y="90" width="30" height="26" style="fill:none;stroke:var(--text);stroke-width:1.5"/>
      <line x1="390" y1="116" x2="390" y2="140" style="stroke:var(--text);stroke-width:1.5"/>
      <!-- Tie Breaker -->
      <rect x="255" y="131" width="30" height="26" style="fill:var(--bg2);stroke:var(--red);stroke-width:1.5"/>
      <text x="270" y="125" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">TIE</text>
      <!-- Feeders -->
      <line x1="100" y1="148" x2="100" y2="180" style="stroke:var(--text);stroke-width:1.5"/>
      <circle cx="100" cy="190" r="10" style="fill:none;stroke:var(--green);stroke-width:1.5"/><text x="100" y="193" text-anchor="middle" style="fill:var(--green);font-size:8px">M</text>
      <line x1="440" y1="148" x2="440" y2="180" style="stroke:var(--text);stroke-width:1.5"/>
      <rect x="425" y="180" width="30" height="20" style="fill:none;stroke:var(--blue);stroke-width:1.5"/><text x="440" y="193" text-anchor="middle" style="fill:var(--blue);font-size:8px">DB</text>
    </svg>`,

  // ── CODE COMPARISON — IS vs NEC vs IEC ──
  'code-comparison-is-nec-iec': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Regional Standard Scope Comparison</text>
      <!-- Venn-style or overlapping blocks -->
      <rect x="50" y="60" width="200" height="180" rx="10" style="fill:rgba(74,144,217,.04);stroke:var(--blue);stroke-width:1.5"/>
      <text x="150" y="85" text-anchor="middle" style="fill:var(--blue);font-size:12px;font-weight:700">IEC / IS Standards</text>
      <text x="150" y="110" text-anchor="middle" style="fill:var(--text2);font-size:10px">Framework & Fundamentals</text>
      <text x="150" y="130" text-anchor="middle" style="fill:var(--text3);font-size:9px;font-family:'IBM Plex Mono',monospace">• IEC 60364 (Safety)<br/>• IS 732 (Wiring)<br/>• IS 3043 (Earthing)</text>
      
      <rect x="290" y="60" width="200" height="180" rx="10" style="fill:rgba(231,76,60,.04);stroke:var(--red);stroke-width:1.5"/>
      <text x="390" y="85" text-anchor="middle" style="fill:var(--red);font-size:12px;font-weight:700">NEC (USA/North Am.)</text>
      <text x="390" y="110" text-anchor="middle" style="fill:var(--text2);font-size:10px">Rule-based Enforcement</text>
      <text x="390" y="130" text-anchor="middle" style="fill:var(--text3);font-size:9px;font-family:'IBM Plex Mono',monospace">• NFPA 70 (Core)<br/>• Arc Flash (70E)<br/>• Maintenance (70B)</text>
      
      <!-- Overlap arrow -->
      <path d="M 230,150 Q 270,170 310,150" style="fill:none;stroke:var(--accent);stroke-width:2;marker-end:url(#arrow-end)"/>
      <text x="270" y="150" text-anchor="middle" style="fill:var(--accent);font-size:9px">Harmonization</text>
    </svg>`,

  // ── PER UNIT SYSTEM ADVANCED — Calculation Flow ──
  'per-unit-system-adv': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">The Fault Calculation Pipeline</text>
      <!-- Sequential blocks -->
      <g transform="translate(40, 80)">
         <rect x="0" y="0" width="100" height="40" rx="4" style="fill:var(--bg3);stroke:var(--border);stroke-width:1"/>
         <text x="50" y="25" text-anchor="middle" style="fill:var(--text2);font-size:9px">Pick System Base<br/>(e.g. 100MVA)</text>
         <line x1="100" y1="20" x2="130" y2="20" style="stroke:var(--accent);stroke-width:1.5;marker-end:url(#arrow-end)"/>
         
         <rect x="130" y="0" width="100" height="40" rx="4" style="fill:var(--bg3);stroke:var(--border);stroke-width:1"/>
         <text x="180" y="25" text-anchor="middle" style="fill:var(--text2);font-size:9px">Convert all Z<br/>to PU on Base</text>
         <line x1="230" y1="20" x2="260" y2="20" style="stroke:var(--accent);stroke-width:1.5;marker-end:url(#arrow-end)"/>
         
         <rect x="260" y="0" width="100" height="40" rx="4" style="fill:var(--bg3);stroke:var(--border);stroke-width:1"/>
         <text x="310" y="25" text-anchor="middle" style="fill:var(--text2);font-size:9px">Sum Series Zpu<br/>to Fault Point</text>
         <line x1="360" y1="20" x2="390" y2="20" style="stroke:var(--accent);stroke-width:1.5;marker-end:url(#arrow-end)"/>

         <rect x="390" y="0" width="100" height="40" rx="4" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:1.5"/>
         <text x="440" y="25" text-anchor="middle" style="fill:var(--green);font-size:9px;font-weight:700">If = Ibase / Zpu</text>
      </g>
      <!-- Base formula -->
      <rect x="150" y="160" width="240" height="80" rx="8" style="fill:var(--bg3);stroke:var(--accent);stroke-width:1.5"/>
      <text x="270" y="185" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">Change of Base Formula</text>
      <text x="270" y="215" text-anchor="middle" style="fill:var(--text2);font-size:11px;font-family:'IBM Plex Mono',monospace">Zpu,new = Zpu,old × (Vold/Vnew)² × (Snew/Sold)</text>
    </svg>`,

  // ── SYMMETRICAL COMPONENTS FAULT NETWORK ──
  'symm-comp-fault': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Sequence Networks for L-G Fault</text>
      <!-- Series connection of sequence networks -->
      <rect x="60" y="60" width="80" height="40" rx="4" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:2"/>
      <text x="100" y="85" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">Z(1)</text>
      <line x1="140" y1="80" x2="200" y2="80" style="stroke:var(--text);stroke-width:2"/>
      
      <rect x="200" y="60" width="80" height="40" rx="4" style="fill:rgba(231,76,60,.1);stroke:var(--red);stroke-width:2"/>
      <text x="240" y="85" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">Z(2)</text>
      <line x1="280" y1="80" x2="340" y2="80" style="stroke:var(--text);stroke-width:2"/>
      
      <rect x="340" y="60" width="140" height="40" rx="4" style="fill:rgba(52,152,219,.1);stroke:var(--blue);stroke-width:2"/>
      <text x="410" y="85" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">Z(0) + 3 × Rn</text>
      
      <!-- Connection closing the loop -->
      <path d="M 480,80 L 510,80 L 510,140 L 30,140 L 30,80 L 60,80" style="fill:none;stroke:var(--text);stroke-width:2"/>
      <text x="270" y="160" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">I_fault = 3 × E / (Z1 + Z2 + Z0 + 3Rn)</text>
      <text x="270" y="180" text-anchor="middle" style="fill:var(--text3);font-size:10px">Single Phase-to-Ground Fault Model</text>
    </svg>`,

  // ── LOAD CALCULATION — Beginner: Breakdown ──
  'load-calc-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Typical Load Component Breakdown</text>
      <!-- Horizontal Bar Chart -->
      ${[
        {label:'Lighting', val:15, color:'var(--amber)'},
        {label:'HVAC', val:45, color:'var(--blue)'},
        {label:'Small Power', val:20, color:'var(--green)'},
        {label:'Critical / UPS', val:10, color:'var(--red)'},
        {label:'Other', val:10, color:'var(--text3)'},
      ].map((d, i) => `
        <rect x="120" y="${60+i*40}" width="${d.val*3}" height="24" rx="4" style="fill:${d.color};opacity:.8"/>
        <text x="110" y="${77+i*40}" text-anchor="end" style="fill:var(--text2);font-size:10px;font-weight:600">${d.label}</text>
        <text x="${125+d.val*3}" y="${77+i*40}" style="fill:var(--text3);font-size:10px">${d.val}%</text>
      `).join('')}
      <line x1="120" y1="50" x2="120" y2="250" style="stroke:var(--border);stroke-width:1"/>
      <text x="270" y="265" text-anchor="middle" style="fill:var(--text3);font-size:9px">Total Connected Load = Σ (Individual Loads)</text>
    </svg>`,

  // ── LOAD PROFILE — Advanced: Daily Curve ──
  'load-profile-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <rect x="40" y="40" width="460" height="200" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- X/Y Axes -->
      <line x1="60" y1="220" x2="480" y2="220" style="stroke:var(--text3);stroke-width:1.5"/>
      <line x1="60" y1="60" x2="60" y2="220" style="stroke:var(--text3);stroke-width:1.5"/>
      <!-- Curve Path -->
      <path d="M 60,200 C 100,200 120,180 150,120 C 180,60 220,60 260,100 C 300,160 340,160 380,100 C 420,40 450,40 480,180" 
        style="fill:none;stroke:var(--accent);stroke-width:3;stroke-linecap:round"/>
      <!-- Labels -->
      <text x="270" y="245" text-anchor="middle" style="fill:var(--text3);font-size:9px">Time of Day (00:00 - 24:00)</text>
      <text x="50" y="140" text-anchor="middle" style="fill:var(--text3);font-size:9px;transform:rotate(-90deg);transform-origin:50px 140px">Demand (kW)</text>
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Commercial Facility: Typical Demand Profile</text>
      <!-- Peak Marker -->
      <circle cx="210" cy="72" r="5" style="fill:var(--red)"/>
      <text x="210" y="60" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">MD (Peak)</text>
    </svg>`,

  // ── TARIFF & BILLING — Beginner: Structure ──
  'tariff-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <rect x="50" y="60" width="440" height="180" rx="10" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Components -->
      <g transform="translate(80, 90)">
        <rect x="0" y="0" width="100" height="60" rx="6" style="fill:rgba(74,144,217,.1);stroke:var(--blue);stroke-width:1.5"/>
        <text x="50" y="25" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">Fixed</text>
        <text x="50" y="40" text-anchor="middle" style="fill:var(--text2);font-size:9px">Demand Charge</text>
      </g>
      <text x="200" y="125" text-anchor="middle" style="fill:var(--text3);font-size:18px">+</text>
      <g transform="translate(220, 90)">
        <rect x="0" y="0" width="100" height="60" rx="6" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:1.5"/>
        <text x="50" y="25" text-anchor="middle" style="fill:var(--green);font-size:11px;font-weight:700">Variable</text>
        <text x="50" y="40" text-anchor="middle" style="fill:var(--text2);font-size:9px">Energy Charge</text>
      </g>
      <text x="340" y="125" text-anchor="middle" style="fill:var(--text3);font-size:18px">+</text>
      <g transform="translate(360, 90)">
        <rect x="0" y="0" width="100" height="60" rx="6" style="fill:rgba(231,76,60,.1);stroke:var(--red);stroke-width:1.5"/>
        <text x="50" y="25" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:700">Adjustments</text>
        <text x="50" y="40" text-anchor="middle" style="fill:var(--text2);font-size:9px">PF Penalty/Tax</text>
      </g>
      <rect x="80" y="175" width="380" height="35" rx="6" style="fill:var(--bg3);stroke:var(--accent);stroke-width:2"/>
      <text x="270" y="198" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:700">TOTAL MONTHLY BILL</text>
    </svg>`,

  // ── DEMAND MANAGEMENT — Advanced: Peak Shaving ──
  'demand-management-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Peak Shaving Strategy</text>
      <!-- Base Curve -->
      <rect x="40" y="40" width="460" height="200" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <path d="M 60,220 C 140,220 180,60 270,60 C 360,60 400,220 480,220" style="fill:rgba(231,76,60,.1);stroke:var(--red);stroke-width:2;stroke-dasharray:4,3"/>
      <!-- Shaved Curve -->
      <path d="M 60,220 C 140,220 180,120 270,120 C 360,120 400,220 480,220" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:3"/>
      <!-- Threshold Line -->
      <line x1="40" y1="120" x2="500" y2="120" style="stroke:var(--accent);stroke-width:1.5;stroke-dasharray:8,4"/>
      <text x="450" y="115" text-anchor="middle" style="fill:var(--accent);font-size:9px;font-weight:700">Limit</text>
      <!-- Arrows -->
      <path d="M 270,70 L 270,110" style="stroke:var(--green);stroke-width:2;marker-end:url(#arrow-end)"/>
      <text x="270" y="100" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700;background:var(--bg2)">PEAK SHAVED</text>
    </svg>`,

  // ── CABLE SIZING — Beginner: Factors ──
  'cable-sizing-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Cable Selection Considerations</text>
      <!-- Central Cable Icon -->
      <rect x="230" y="80" width="80" height="120" rx="10" style="fill:var(--bg3);stroke:var(--text);stroke-width:2"/>
      <circle cx="270" cy="110" r="8" style="fill:var(--accent)"/>
      <circle cx="255" cy="135" r="8" style="fill:var(--red)"/>
      <circle cx="285" cy="135" r="8" style="fill:var(--blue)"/>
      <!-- Factor Bubbles -->
      <g transform="translate(80, 80)">
        <circle cx="0" cy="0" r="40" style="fill:rgba(74,144,217,.1);stroke:var(--blue);stroke-width:1.5"/>
        <text x="0" y="0" text-anchor="middle" style="fill:var(--blue);font-size:9px;font-weight:700">Ampacity</text>
      </g>
      <g transform="translate(80, 180)">
        <circle cx="0" cy="0" r="40" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:1.5"/>
        <text x="0" y="0" text-anchor="middle" style="fill:var(--green);font-size:9px;font-weight:700">Volt Drop</text>
      </g>
      <g transform="translate(460, 80)">
        <circle cx="0" cy="0" r="40" style="fill:rgba(231,76,60,.1);stroke:var(--red);stroke-width:1.5"/>
        <text x="0" y="0" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">Short Circuit</text>
      </g>
      <g transform="translate(460, 180)">
        <circle cx="0" cy="0" r="40" style="fill:rgba(243,156,18,.1);stroke:var(--amber);stroke-width:1.5"/>
        <text x="0" y="0" text-anchor="middle" style="fill:var(--amber);font-size:9px;font-weight:700">Installation</text>
      </g>
    </svg>`,

  // ── CABLE ADVANCED — Derating Factors ──
  'cable-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Derating Logic Calculation</text>
      <!-- Flow Diagram -->
      <rect x="50" y="100" width="100" height="50" rx="4" style="fill:var(--bg3);stroke:var(--text);stroke-width:1.5"/>
      <text x="100" y="130" text-anchor="middle" style="fill:var(--text);font-size:11px">Base Rating (Ib)</text>
      <text x="175" y="130" text-anchor="middle" style="fill:var(--text3);font-size:14px">×</text>
      <rect x="200" y="100" width="140" height="50" rx="4" style="fill:rgba(155,89,182,.1);stroke:var(--purple);stroke-width:1.5"/>
      <text x="270" y="122" text-anchor="middle" style="fill:var(--purple);font-size:9px;font-weight:700">Derating Factors (K)</text>
      <text x="270" y="138" text-anchor="middle" style="fill:var(--text2);font-size:8px">Temp, Grouping, Burial</text>
      <text x="365" y="130" text-anchor="middle" style="fill:var(--text3);font-size:14px">=</text>
      <rect x="390" y="100" width="100" height="50" rx="4" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:2"/>
      <text x="440" y="130" text-anchor="middle" style="fill:var(--green);font-size:11px;font-weight:700">Actual (Iz)</text>
      <!-- Formula note -->
      <text x="270" y="200" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-family:'IBM Plex Mono',monospace">Iz = Ib × K1 × K2 × K3</text>
    </svg>`,

  // ── VOLTAGE DROP — Beginner: Circuit Model ──
  'voltage-drop-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Voltage Drop Visualization</text>
      <!-- Source -->
      <rect x="40" y="100" width="60" height="60" rx="6" style="fill:var(--bg3);stroke:var(--border);stroke-width:1.5"/>
      <text x="70" y="135" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">230V</text>
      <!-- Cable Impedance -->
      <line x1="100" y1="115" x2="400" y2="115" style="stroke:var(--red);stroke-width:4"/>
      <text x="250" y="105" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">Cable resistance causes loss</text>
      <line x1="100" y1="145" x2="400" y2="145" style="stroke:var(--text2);stroke-width:2"/>
      <!-- Load -->
      <rect x="400" y="100" width="100" height="60" rx="6" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:2"/>
      <text x="450" y="135" text-anchor="middle" style="fill:var(--green);font-size:12px;font-weight:700">222V</text>
      <!-- VD label -->
      <rect x="220" y="170" width="100" height="40" rx="4" style="fill:var(--bg3);stroke:var(--red);stroke-width:1.5"/>
      <text x="270" y="195" text-anchor="middle" style="fill:var(--red);font-size:12px;font-weight:700">ΔV = 8V (3.5%)</text>
    </svg>`,

  // ── VOLTAGE DROP ADVANCED — Phasor Impact ──
  'vd-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Vector Voltage Drop (Phasor Model)</text>
      <!-- Phasor diagram -->
      <line x1="100" y1="200" x2="450" y2="200" style="stroke:var(--text3);stroke-width:1;stroke-dasharray:4,3"/>
      <!-- Vs -->
      <line x1="100" y1="200" x2="430" y2="70" style="stroke:var(--accent);stroke-width:3.5"/>
      <text x="260" y="125" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700;transform:rotate(-22deg);transform-origin:260px 125px">Vs (Source)</text>
      <!-- Vr -->
      <line x1="100" y1="200" x2="380" y2="120" style="stroke:var(--green);stroke-width:3.5"/>
      <text x="240" y="165" text-anchor="middle" style="fill:var(--green);font-size:12px;font-weight:700;transform:rotate(-16deg);transform-origin:240px 165px">Vr (Receiving)</text>
      <!-- Drop segment -->
      <line x1="380" y1="120" x2="430" y2="70" style="stroke:var(--red);stroke-width:3"/>
      <text x="430" y="105" text-anchor="start" style="fill:var(--red);font-size:11px;font-weight:700">ΔV = I(R cosφ + X sinφ)</text>
    </svg>`,

  // ── EARTHING SYSTEMS — Beginner: Comparison ──
  'earthing-systems-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Earthing Configuration Types (TN vs TT)</text>
      <!-- TN-S -->
      <g transform="translate(50, 60)">
        <rect x="0" y="0" width="200" height="180" rx="8" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1"/>
        <text x="100" y="25" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">TN-S (Separate)</text>
        <line x1="20" y1="50" x2="180" y2="50" style="stroke:var(--red);stroke-width:1.5"/><text x="185" y="53" style="fill:var(--red);font-size:8px">L</text>
        <line x1="20" y1="70" x2="180" y2="70" style="stroke:var(--blue);stroke-width:1.5"/><text x="185" y="73" style="fill:var(--blue);font-size:8px">N</text>
        <line x1="20" y1="90" x2="180" y2="90" style="stroke:var(--green);stroke-width:1.5"/><text x="185" y="93" style="fill:var(--green);font-size:8px">PE</text>
        <text x="100" y="140" text-anchor="middle" style="fill:var(--text3);font-size:9px">Continuous link to utility earth</text>
      </g>
      <!-- TT -->
      <g transform="translate(290, 60)">
        <rect x="0" y="0" width="200" height="180" rx="8" style="fill:var(--bg2);stroke:var(--amber);stroke-width:1"/>
        <text x="100" y="25" text-anchor="middle" style="fill:var(--amber);font-size:11px;font-weight:700">TT (Local Earth)</text>
        <line x1="20" y1="50" x2="180" y2="50" style="stroke:var(--red);stroke-width:1.5"/>
        <line x1="20" y1="70" x2="180" y2="70" style="stroke:var(--blue);stroke-width:1.5"/>
        <line x1="60" y1="120" x2="60" y2="150" style="stroke:var(--green);stroke-width:2"/>
        <rect x="50" y="150" width="20" height="4" style="fill:var(--green)"/>
        <text x="100" y="140" text-anchor="middle" style="fill:var(--text3);font-size:9px">Customer uses own earth pit</text>
      </g>
    </svg>`,

  // ── EARTHING ADVANCED — Loop Impedance ──
  'earthing-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Earth Fault Loop Impedance (Zs)</text>
      <!-- Loop flow -->
      <path d="M 100,100 L 400,100 L 400,180 L 100,180 Z" style="fill:none;stroke:var(--accent);stroke-width:2.5;stroke-dasharray:6,3"/>
      <text x="100" y="130" text-anchor="middle" style="fill:var(--text3);font-size:10px;transform:rotate(-90deg);transform-origin:100px 130px">Utility Earth</text>
      <text x="250" y="90" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">Phase Conductor (L)</text>
      <text x="250" y="195" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">Circuit CPC (Protective Earth)</text>
      <rect x="380" y="130" width="40" height="30" rx="4" style="fill:var(--bg3);stroke:var(--red);stroke-width:2"/>
      <text x="430" y="150" text-anchor="start" style="fill:var(--red);font-size:10px;font-weight:700">FAULT!</text>
      <!-- Formula -->
      <rect x="180" y="220" width="180" height="40" rx="6" style="fill:var(--bg3);stroke:var(--accent);stroke-width:1.5"/>
      <text x="270" y="245" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:700">Zs = Ze + (R1 + R2)</text>
    </svg>`,

  // ── PROTECTION TYPES — Beginner: Device Comparison ──
  'protection-types-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Comparison of LV Protective Devices</text>
      <!-- MCB -->
      <g transform="translate(60, 60)">
        <rect x="0" y="0" width="130" height="150" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
        <text x="65" y="25" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">MCB</text>
        <text x="65" y="50" text-anchor="middle" style="fill:var(--text3);font-size:9px">Up to 125A</text>
        <text x="65" y="100" text-anchor="middle" style="fill:var(--text2);font-size:9px">Residential / Comm<br/>Thermal-Magnetic</text>
      </g>
      <!-- MCCB -->
      <g transform="translate(205, 60)">
        <rect x="0" y="0" width="130" height="150" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
        <text x="65" y="25" text-anchor="middle" style="fill:var(--amber);font-size:11px;font-weight:700">MCCB</text>
        <text x="65" y="50" text-anchor="middle" style="fill:var(--text3);font-size:9px">Up to 1600A</text>
        <text x="65" y="100" text-anchor="middle" style="fill:var(--text2);font-size:9px">Industrial / Feeder<br/>Adjustable Trip</text>
      </g>
      <!-- ACB -->
      <g transform="translate(350, 60)">
        <rect x="0" y="0" width="130" height="150" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
        <text x="65" y="25" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:700">ACB</text>
        <text x="65" y="50" text-anchor="middle" style="fill:var(--text3);font-size:9px">Up to 6300A</text>
        <text x="65" y="100" text-anchor="middle" style="fill:var(--text2);font-size:9px">Incomer / Primary<br/>Electronic Trip Unit</text>
      </g>
    </svg>`,

  // ── PROTECTION COORDINATION — Advanced: Curve Shifting ──
  'protection-coord-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Selectivity & Discrimination</text>
      <rect x="60" y="60" width="420" height="180" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Log-Log Chart Style -->
      <!-- Upstream Curve -->
      <path d="M 120,80 Q 140,180 350,185" style="fill:none;stroke:var(--red);stroke-width:3;opacity:.8"/>
      <text x="140" y="85" style="fill:var(--red);font-size:9px;font-weight:700">Upstream (Main)</text>
      <!-- Downstream Curve -->
      <path d="M 80,100 Q 100,200 250,205" style="fill:none;stroke:var(--blue);stroke-width:3;opacity:.8"/>
      <text x="80" y="95" style="fill:var(--blue);font-size:9px;font-weight:700">Downstream (Branch)</text>
      <!-- Gap marker -->
      <path d="M 230,190 L 330,195" style="stroke:var(--green);stroke-width:2;marker-start:url(#arrow-start);marker-end:url(#arrow-end)"/>
      <text x="280" y="210" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">DISCRIMINATION MARGIN</text>
    </svg>`,

  // ── PF CORRECTION — Beginner: Capacitor Goal ──
  'pf-correction-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Power Factor Correction (PFC) Logic</text>
      <!-- Inductive load -->
      <rect x="100" y="100" width="80" height="100" rx="6" style="fill:var(--bg3);stroke:var(--red);stroke-width:2"/>
      <text x="140" y="145" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">Inductive Load<br/>(Motor)</text>
      <text x="140" y="175" text-anchor="middle" style="fill:var(--red);font-size:9px">Consumes kVAr</text>
      <!-- Capacitor bank -->
      <line x1="180" y1="150" x2="360" y2="150" style="stroke:var(--text3);stroke-width:1.5"/>
      <rect x="360" y="100" width="80" height="100" rx="6" style="fill:rgba(74,144,217,.1);stroke:var(--blue);stroke-width:2.5"/>
      <text x="400" y="145" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">PFC Bank<br/>(Capacitors)</text>
      <text x="400" y="175" text-anchor="middle" style="fill:var(--blue);font-size:9px">Supplies kVAr</text>
      <!-- Net result -->
      <path d="M 270,140 Q 270,80 270,50" style="stroke:var(--green);stroke-width:2;marker-end:url(#arrow-end)"/>
      <text x="270" y="70" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">REDUCED UTILITY DEMAND</text>
    </svg>`,

  // ── PF DETUNED — Advanced: Reactor protection ──
  'pf-detuned-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Detuned PFC (Anti-Resonance)</text>
      <!-- L-C Circuit -->
      <g transform="translate(170, 80)">
         <rect x="0" y="0" width="200" height="150" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
         <!-- Reactor -->
         <path d="M 100,30 L 100,60" style="stroke:var(--text2);stroke-width:2"/>
         <circle cx="100" cy="75" r="15" style="fill:rgba(243,156,18,.1);stroke:var(--amber);stroke-width:2"/>
         <text x="130" y="80" style="fill:var(--amber);font-size:10px;font-weight:700">Detuning Reactor (L)</text>
         <!-- Capacitor -->
         <line x1="100" y1="90" x2="100" y2="110" style="stroke:var(--text2);stroke-width:2"/>
         <line x1="80" y1="110" x2="120" y2="110" style="stroke:var(--blue);stroke-width:3"/>
         <line x1="80" y1="118" x2="120" y2="118" style="stroke:var(--blue);stroke-width:3"/>
         <line x1="100" y1="118" x2="100" y2="135" style="stroke:var(--text2);stroke-width:2"/>
         <text x="130" y="125" style="fill:var(--blue);font-size:10px;font-weight:700">Capacitor (C)</text>
      </g>
      <text x="270" y="250" text-anchor="middle" style="fill:var(--text3);font-size:9px">Shifts resonance frequency away from 5th/7th Harmonics</text>
    </svg>`,

  // ── PANEL SCHEDULES — Beginner: Balance ──
  'panel-schedule-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Phase Balance & Loading</text>
      <!-- Grid table -->
      <rect x="60" y="50" width="420" height="180" rx="4" style="fill:var(--bg2);stroke:var(--border);stroke-width:1.5"/>
      <line x1="60" y1="90" x2="480" y2="90" style="stroke:var(--border);stroke-width:1.5"/>
      <line x1="200" y1="50" x2="200" y2="230" style="stroke:var(--border);stroke-width:1.5"/>
      <!-- Titles -->
      <text x="130" y="75" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:700">Circuit No.</text>
      <text x="340" y="75" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:700">Loading (A)</text>
      <!-- Row data -->
      ${['Phase Red','Phase Yellow','Phase Blue'].map((ph, i) => `
         <text x="130" y="${120+i*40}" text-anchor="middle" style="fill:var(--text2);font-size:11px">${ph}</text>
         <rect x="220" y="${105+i*40}" width="${180 + (i===1?20:-10)}" height="20" rx="3" style="fill:var(--accent);opacity:.7"/>
      `).join('')}
      <text x="270" y="250" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">Ideal Balance: Difference &lt; 10%</text>
    </svg>`,

  // ── PANEL HARMONICS — Advanced: Neutral loading ──
  'panel-harmonic-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Harmonic Neutral Overloading</text>
      <!-- 3-Phase Sources -->
      <line x1="50" y1="80" x2="350" y2="80" style="stroke:var(--red);stroke-width:2"/><text x="45" y="83" text-anchor="end" style="fill:var(--red);font-size:9px">L1</text>
      <line x1="50" y1="110" x2="350" y2="110" style="stroke:var(--amber);stroke-width:2"/><text x="45" y="113" text-anchor="end" style="fill:var(--amber);font-size:9px">L2</text>
      <line x1="50" y1="140" x2="350" y2="140" style="stroke:var(--blue);stroke-width:2"/><text x="45" y="143" text-anchor="end" style="fill:var(--blue);font-size:9px">L3</text>
      <!-- Loads -->
      <rect x="350" y="70" width="40" height="80" rx="4" style="fill:var(--bg3);stroke:var(--text);stroke-width:1"/>
      <!-- Neutral return -->
      <line x1="390" y1="110" x2="450" y2="110" style="stroke:var(--text2);stroke-width:4"/>
      <text x="450" y="100" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:700">HOT NEUTRAL!</text>
      <text x="50" y="220" text-anchor="start" style="fill:var(--text3);font-size:9px">Non-linear loads (VFDs, UPS) cause 3rd Harmonics.<br/>Unlike fundamental, these sum up in Neutral instead of cancelling.</text>
    </svg>`,

  // ── DEMAND FACTORS — Beginner: Relationship ──
  'demand-factor-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Demand Factor Visualization</text>
      <!-- Connected Load -->
      <rect x="50" y="100" width="440" height="40" rx="4" style="fill:rgba(74,144,217,.1);stroke:var(--blue);stroke-width:1"/>
      <text x="60" y="125" style="fill:var(--blue);font-size:11px;font-weight:700">CONNECTED LOAD (100%)</text>
      <!-- Maximum Demand -->
      <rect x="50" y="160" width="260" height="40" rx="4" style="fill:rgba(39,174,96,.2);stroke:var(--green);stroke-width:2"/>
      <text x="60" y="185" style="fill:var(--green);font-size:11px;font-weight:700">MAXIMUM DEMAND (60%)</text>
      <!-- Brackets -->
      <path d="M 50,210 L 50,220 L 310,220 L 310,210" style="fill:none;stroke:var(--accent);stroke-width:1.5"/>
      <text x="180" y="240" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:700">DEMAND FACTOR = 0.60</text>
    </svg>`,

  // ── DEMAND FACTOR TABLE — Advanced: Standard Values ──
  'demand-factor-table-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <rect x="50" y="50" width="440" height="180" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1.5"/>
      <line x1="50" y1="90" x2="490" y2="90" style="stroke:var(--border);stroke-width:1.5"/>
      <!-- Header -->
      <text x="150" y="75" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:700">Load Category</text>
      <text x="400" y="75" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:700">Factor (Typical)</text>
      <!-- Rows -->
      ${[
        {l:'General Lighting', f:'100% first 3kVA'},
        {l:'HVAC Systems', f:'100% (No diversity)'},
        {l:'Receptacles', f:'50% after first 10k'},
        {l:'Kitchen Equip.', f:'65% to 80%'},
      ].map((r,i) => `
         <text x="150" y="${120+i*30}" text-anchor="middle" style="fill:var(--text2);font-size:10px">${r.l}</text>
         <text x="400" y="${120+i*30}" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:700">${r.f}</text>
      `).join('')}
      <text x="270" y="250" text-anchor="middle" style="fill:var(--text3);font-size:9px">Reference: NEC Table 220.42 / IS 732 Annex</text>
    </svg>`,

  // ── LOAD PROFILE CHART — Beginner: Weekly ──
  'load-profile-chart': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Weekly Load Variation</text>
      <!-- 7 Bars for days -->
      ${['M','T','W','T','F','S','S'].map((day, i) => {
         const h = i >= 5 ? 40 : 120 + Math.random()*40;
         return `
          <rect x="${80+i*55}" y="${220-h}" width="30" height="${h}" rx="3" style="fill:${i>=5?'var(--text3)':'var(--blue)'};opacity:.7"/>
          <text x="${95+i*55}" y="240" text-anchor="middle" style="fill:var(--text2);font-size:11px">${day}</text>`;
      }).join('')}
      <line x1="60" y1="220" x2="480" y2="220" style="stroke:var(--border);stroke-width:1"/>
    </svg>`,

  // ── DIVERSITY — Advanced: Submains vs Main ──
  'diversity-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Diversity between Distribution Boards</text>
      <!-- Main board -->
      <rect x="220" y="50" width="100" height="40" rx="4" style="fill:var(--bg3);stroke:var(--accent);stroke-width:2"/>
      <text x="270" y="75" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:700">Main MDB</text>
      <!-- Links -->
      <line x1="270" y1="90" x2="100" y2="160" style="stroke:var(--text3);stroke-width:1.5"/>
      <line x1="270" y1="90" x2="270" y2="160" style="stroke:var(--text3);stroke-width:1.5"/>
      <line x1="270" y1="90" x2="440" y2="160" style="stroke:var(--text3);stroke-width:1.5"/>
      <!-- Sub-boards -->
      <rect x="50" y="160" width="100" height="30" rx="3" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1"/><text x="100" y="180" text-anchor="middle" style="fill:var(--blue);font-size:9px">DB-1 (100A)</text>
      <rect x="220" y="160" width="100" height="30" rx="3" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1"/><text x="270" y="180" text-anchor="middle" style="fill:var(--blue);font-size:9px">DB-2 (100A)</text>
      <rect x="390" y="160" width="100" height="30" rx="3" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1"/><text x="440" y="180" text-anchor="middle" style="fill:var(--blue);font-size:9px">DB-3 (100A)</text>
      <!-- Diversity Logic -->
      <rect x="150" y="210" width="240" height="40" rx="20" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:1.5"/>
      <text x="270" y="235" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">Main Incomer = (100+100+100) × 0.7 = 210A</text>
    </svg>`,

  // ── CODE NAVIGATION — Beginner ──
  'code-navigation-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <rect x="60" y="60" width="420" height="180" rx="10" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">How to Search Engineering Codes</text>
      <!-- Search steps -->
      <g transform="translate(100, 100)">
        <circle cx="0" cy="0" r="15" style="fill:var(--blue)"/><text x="0" y="5" text-anchor="middle" style="fill:white;font-size:10px">1</text>
        <text x="25" y="5" style="fill:var(--text2);font-size:11px">Identify Occupancy (Res/Ind)</text>
      </g>
      <g transform="translate(100, 140)">
        <circle cx="0" cy="0" r="15" style="fill:var(--blue)"/><text x="0" y="5" text-anchor="middle" style="fill:white;font-size:10px">2</text>
        <text x="25" y="5" style="fill:var(--text2);font-size:11px">Locate General Rules (Chap 1-4)</text>
      </g>
      <g transform="translate(100, 180)">
        <circle cx="0" cy="0" r="15" style="fill:var(--blue)"/><text x="0" y="5" text-anchor="middle" style="fill:white;font-size:10px">3</text>
        <text x="25" y="5" style="fill:var(--text2);font-size:11px">Apply Special Modifiers (Chap 5-7)</text>
      </g>
    </svg>`,

  // ── CODE HIERARCHY — Advanced ──
  'code-hierarchy-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <rect x="120" y="40" width="300" height="40" rx="4" style="fill:var(--red);opacity:.8"/><text x="270" y="65" text-anchor="middle" style="fill:white;font-weight:700">FEDERAL / STATE LAW</text>
      <path d="M 270,80 L 270,100" style="stroke:var(--text3);stroke-width:2;marker-end:url(#arrow-end)"/>
      <rect x="120" y="100" width="300" height="40" rx="4" style="fill:var(--amber);opacity:.8"/><text x="270" y="125" text-anchor="middle" style="fill:white;font-weight:700">TECHNICAL CODES (NEC/NBC)</text>
      <path d="M 270,140 L 270,160" style="stroke:var(--text3);stroke-width:2;marker-end:url(#arrow-end)"/>
      <rect x="120" y="160" width="300" height="40" rx="4" style="fill:var(--blue);opacity:.8"/><text x="270" y="185" text-anchor="middle" style="fill:white;font-weight:700">LISTED STANDARDS (UL/IS)</text>
      <path d="M 270,200 L 270,220" style="stroke:var(--text3);stroke-width:2;marker-end:url(#arrow-end)"/>
      <rect x="120" y="220" width="300" height="40" rx="4" style="fill:var(--green);opacity:.8"/><text x="270" y="245" text-anchor="middle" style="fill:white;font-weight:700">PROJECT SPECIFICATIONS</text>
    </svg>`,

  // ── CONDUIT FILL — Beginner ──
  'conduit-fill-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- Raceway circle -->
      <circle cx="270" cy="140" r="90" style="fill:var(--bg2);stroke:var(--text3);stroke-width:4"/>
      <!-- Wires inside -->
      <circle cx="240" cy="120" r="15" style="fill:var(--red);opacity:.8"/>
      <circle cx="270" cy="120" r="15" style="fill:var(--amber);opacity:.8"/>
      <circle cx="300" cy="120" r="15" style="fill:var(--blue);opacity:.8"/>
      <circle cx="255" cy="150" r="15" style="fill:var(--text2);opacity:.8"/>
      <circle cx="285" cy="150" r="15" style="fill:var(--green);opacity:.8"/>
      <!-- Label -->
      <text x="270" y="250" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">40% Max Fill Rule (Typical)</text>
      <text x="270" y="40" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Raceway Cross-Section Analysis</text>
    </svg>`,

  // ── CONDUIT TRAY — Advanced: Spacing ──
  'conduit-tray-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <rect x="50" y="160" width="440" height="15" rx="3" style="fill:var(--text3)"/>
      ${[0,1,2,3,4].map(i => `
         <circle cx="${100+i*85}" cy="140" r="20" style="fill:var(--accent);opacity:.8"/>
         <path d="M ${90+i*85},170 L ${110+i*85},170" style="stroke:var(--text);stroke-width:1"/>
      `).join('')}
      <text x="270" y="210" text-anchor="middle" style="fill:var(--blue);font-size:12px;font-weight:700">TREFOIL FORMATION (1-PH Spacing)</text>
      <text x="270" y="40" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Cable Tray Layout: Thermal Spacing</text>
    </svg>`,

  // ── TRANSFORMER — Beginner: Components ──
  'transformer-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Power Transformer Substation</text>
      <!-- Transformer Body -->
      <rect x="170" y="60" width="200" height="120" rx="8" style="fill:var(--bg2);stroke:var(--blue);stroke-width:2"/>
      <circle cx="255" cy="120" r="30" style="fill:none;stroke:var(--blue);stroke-width:2"/>
      <circle cx="285" cy="120" r="30" style="fill:none;stroke:var(--blue);stroke-width:2"/>
      <!-- Bushings -->
      <line x1="200" y1="60" x2="200" y2="40" style="stroke:var(--red);stroke-width:3"/><text x="200" y="35" text-anchor="middle" style="fill:var(--red);font-size:9px">HV (11kV)</text>
      <line x1="340" y1="180" x2="340" y2="200" style="stroke:var(--blue);stroke-width:3"/><text x="340" y="215" text-anchor="middle" style="fill:var(--blue);font-size:9px">LV (415V)</text>
      <!-- Conservator -->
      <rect x="300" y="45" width="60" height="20" rx="4" style="fill:var(--bg3);stroke:var(--text3);stroke-width:1.5"/>
      <text x="370" y="58" style="fill:var(--text3);font-size:8px">Conservator Tank</text>
    </svg>`,

  // ── TRANSFORMER ADVANCED — Vector Group ──
  'transformer-adv-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Vector Group Analysis: Dyn11</text>
      <!-- Primary Delta -->
      <g transform="translate(100, 100) scale(1.2)">
        <polygon points="0,0 40,0 20,-35" style="fill:none;stroke:var(--red);stroke-width:2"/>
        <text x="20" y="15" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">Delta (D)</text>
      </g>
      <!-- Secondary Star -->
      <g transform="translate(350, 100) scale(1.2)">
        <line x1="20" y1="-35" x2="20" y2="0" style="stroke:var(--blue);stroke-width:2"/>
        <line x1="20" y1="0" x2="-10" y2="20" style="stroke:var(--blue);stroke-width:2"/>
        <line x1="20" y1="0" x2="50" y2="20" style="stroke:var(--blue);stroke-width:2"/>
        <circle cx="20" cy="0" r="3" style="fill:var(--accent)"/>
        <text x="20" y="32" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">Star-Neutral (yn)</text>
      </g>
      <!-- Phase Shift -->
      <path d="M 210,100 L 330,100" style="stroke:var(--text3);stroke-width:1.5;stroke-dasharray:4,4;marker-end:url(#arrow-end)"/>
      <text x="270" y="90" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:700">30° Leading Shift (11 o'clock)</text>
    </svg>`,

  // ── DIESEL GENERATOR — Beginner: Layout ──
  'dg-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Standby Generator (DG) System</text>
      <!-- Acoustic Enclosure -->
      <rect x="60" y="60" width="420" height="160" rx="10" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Engine -->
      <rect x="100" y="100" width="140" height="80" rx="4" style="fill:var(--bg3);stroke:var(--text2);stroke-width:2"/>
      <text x="170" y="145" text-anchor="middle" style="fill:var(--text2);font-size:11px;font-weight:700">Internal Combustion<br/>Engine</text>
      <!-- Alternator -->
      <circle cx="360" cy="140" r="45" style="fill:var(--bg3);stroke:var(--purple);stroke-width:2.5"/>
      <text x="360" y="145" text-anchor="middle" style="fill:var(--purple);font-size:12px;font-weight:700">ALTERNATOR</text>
      <!-- Coupler -->
      <line x1="240" y1="140" x2="315" y2="140" style="stroke:var(--text3);stroke-width:8;stroke-linecap:round"/>
      <text x="277" y="125" text-anchor="middle" style="fill:var(--text3);font-size:8px">Shaft Coupling</text>
    </svg>`,

  // ── DG ADVANCED — Sync & Control ──
  'dg-adv-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Parallel Operation & AMF Sync</text>
      <!-- Utility Bus -->
      <line x1="40" y1="150" x2="500" y2="150" style="stroke:var(--blue);stroke-width:4"/>
      <text x="70" y="145" style="fill:var(--blue);font-size:9px;font-weight:700">MAINS BUS</text>
      <!-- Generator Feed -->
      <circle cx="270" cy="220" r="25" style="fill:none;stroke:var(--purple);stroke-width:2"/>
      <text x="270" y="224" text-anchor="middle" style="fill:var(--purple);font-size:10px;font-weight:700">GEN</text>
      <line x1="270" y1="195" x2="270" y2="150" style="stroke:var(--text);stroke-width:2"/>
      <!-- Sync Device -->
      <rect x="250" y="160" width="40" height="30" rx="3" style="fill:var(--bg2);stroke:var(--red);stroke-width:1"/>
      <text x="270" y="178" text-anchor="middle" style="fill:var(--red);font-size:8px;font-weight:700">SYNC</text>
      <text x="350" y="180" text-anchor="start" style="fill:var(--text3);font-size:9px">Matches: Voltage, Frequency,<br/>and Phase Sequence before closing.</text>
    </svg>`,

  // ── UPS — Beginner: Flow ──
  'ups-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Double Conversion Online UPS Flow</text>
      <!-- Conversion Stages -->
      <g transform="translate(40, 100)">
        <rect x="0" y="0" width="80" height="60" rx="4" style="fill:var(--bg3);stroke:var(--blue);stroke-width:1.5"/>
        <text x="40" y="32" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">Rectifier</text>
        <text x="40" y="45" text-anchor="middle" style="fill:var(--text2);font-size:8px">AC to DC</text>
        
        <path d="M 80,30 L 130,30" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>
        
        <rect x="130" y="0" width="80" height="60" rx="4" style="fill:var(--bg3);stroke:var(--amber);stroke-width:1.5"/>
        <text x="170" y="32" text-anchor="middle" style="fill:var(--amber);font-size:10px;font-weight:700">Battery</text>
        <text x="170" y="45" text-anchor="middle" style="fill:var(--text2);font-size:8px">Energy Storage</text>
        
        <path d="M 210,30 L 260,30" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>

        <rect x="260" y="0" width="80" height="60" rx="4" style="fill:var(--bg3);stroke:var(--green);stroke-width:1.5"/>
        <text x="300" y="32" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">Inverter</text>
        <text x="300" y="45" text-anchor="middle" style="fill:var(--text2);font-size:8px">DC to AC (Clean)</text>
        
        <path d="M 340,30 L 400,30" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>
        
        <rect x="400" y="0" width="60" height="60" style="fill:var(--bg3);stroke:var(--accent);stroke-width:2"/><text x="430" y="35" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:700">LOAD</text>
      </g>
    </svg>`,

  // ── UPS ADVANCED — Redundancy ──
  'ups-adv-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">High Availability: 2N Redundancy</text>
      <!-- System A -->
      <rect x="60" y="60" width="120" height="60" rx="6" style="fill:var(--bg2);stroke:var(--blue);stroke-width:2"/>
      <text x="120" y="95" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">UPS System A</text>
      <line x1="120" y1="120" x2="240" y2="180" style="stroke:var(--blue);stroke-width:2"/>
      <!-- System B -->
      <rect x="360" y="60" width="120" height="60" rx="6" style="fill:var(--bg2);stroke:var(--amber);stroke-width:2"/>
      <text x="420" y="95" text-anchor="middle" style="fill:var(--amber);font-size:11px;font-weight:700">UPS System B</text>
      <line x1="420" y1="120" x2="300" y2="180" style="stroke:var(--amber);stroke-width:2"/>
      <!-- Critical Load -->
      <rect x="220" y="180" width="100" height="60" rx="6" style="fill:var(--bg3);stroke:var(--red);stroke-width:2.5"/>
      <text x="270" y="210" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:700">Dual-Corded<br/>IT LOAD</text>
      <text x="270" y="260" text-anchor="middle" style="fill:var(--text3);font-size:9px">Loss of any one path results in zero downtime.</text>
    </svg>`,

  // ── LIGHTING — Beginner: Concepts ──
  'lighting-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Lighting Engineering: Lux vs Lumens</text>
      <!-- Source -->
      <circle cx="100" cy="100" r="30" style="fill:rgba(243,156,18,.1);stroke:var(--amber);stroke-width:2"/>
      <text x="100" y="105" text-anchor="middle" style="fill:var(--amber);font-size:20px">💡</text>
      <text x="100" y="150" text-anchor="middle" style="fill:var(--amber);font-size:10px;font-weight:700">Lumens (Luminous Flux)</text>
      <!-- Surface -->
      <line x1="300" y1="200" x2="500" y2="200" style="stroke:var(--text);stroke-width:4"/>
      <text x="400" y="220" text-anchor="middle" style="fill:var(--text2);font-size:10px;font-weight:700">Lux (Illuminance on Surface)</text>
      <!-- Rays -->
      <line x1="130" y1="110" x2="320" y2="190" style="stroke:var(--border);stroke-width:1;stroke-dasharray:4,2"/>
      <line x1="130" y1="120" x2="400" y2="190" style="stroke:var(--border);stroke-width:1;stroke-dasharray:4,2"/>
      <line x1="130" y1="130" x2="480" y2="190" style="stroke:var(--border);stroke-width:1;stroke-dasharray:4,2"/>
      <!-- Formula -->
      <rect x="300" y="80" width="180" height="40" rx="6" style="fill:var(--bg3);stroke:var(--accent);stroke-width:1.5"/>
      <text x="390" y="105" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:700">Lux = Lumens / Area (m²)</text>
    </svg>`,

  // ── LIGHTING ADVANCED — DALI Control ──
  'lighting-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">DALI Addressable Lighting Network</text>
      <!-- Bus -->
      <line x1="60" y1="100" x2="480" y2="100" style="stroke:var(--purple);stroke-width:3"/>
      <text x="490" y="105" style="fill:var(--purple);font-size:9px;font-weight:700">DALI BUS</text>
      <!-- Controllers -->
      <rect x="60" y="130" width="60" height="40" rx="4" style="fill:var(--bg3);stroke:var(--text);stroke-width:1"/><text x="90" y="155" text-anchor="middle" style="fill:var(--text2);font-size:8px">Sensor</text>
      <line x1="90" y1="130" x2="90" y2="100" style="stroke:var(--text3);stroke-width:1"/>
      <!-- Fixtures -->
      ${[0,1,2].map(i => `
        <rect x="${180+i*110}" y="130" width="80" height="40" rx="4" style="fill:var(--bg2);stroke:var(--amber);stroke-width:1.5"/>
        <text x="${220+i*110}" y="155" text-anchor="middle" style="fill:var(--amber);font-size:8px;font-weight:700">Fixture ADDR: ${i+1}</text>
        <line x1="${220+i*110}" y1="130" x2="${220+i*110}" y2="100" style="stroke:var(--text3);stroke-width:1"/>
      `).join('')}
    </svg>`,

  // ── MOTOR STARTING — Beginner: DOL vs Star-Delta ──
  'motor-starting-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Direct-On-Line (DOL) vs Star-Delta</text>
      <!-- DOL -->
      <g transform="translate(60, 60)">
        <rect x="0" y="0" width="180" height="180" rx="8" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1"/>
        <text x="90" y="25" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">DOL Starter</text>
        <rect x="70" y="50" width="40" height="30" style="fill:var(--bg3);stroke:var(--text);stroke-width:1"/><text x="90" y="68" text-anchor="middle" style="fill:var(--text2);font-size:8px">MCCB</text>
        <rect x="70" y="90" width="40" height="30" style="fill:var(--bg3);stroke:var(--text);stroke-width:1"/><text x="90" y="108" text-anchor="middle" style="fill:var(--text2);font-size:8px">Contactor</text>
        <circle cx="90" cy="150" r="20" style="fill:none;stroke:var(--green);stroke-width:2"/><text x="90" y="153" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">M</text>
        <text x="90" y="210" text-anchor="middle" style="fill:var(--red);font-size:9px">High Inrush (6-8x In)</text>
      </g>
      <!-- Star Delta -->
      <g transform="translate(300, 60)">
        <rect x="0" y="0" width="180" height="180" rx="8" style="fill:var(--bg2);stroke:var(--amber);stroke-width:1"/>
        <text x="90" y="25" text-anchor="middle" style="fill:var(--amber);font-size:11px;font-weight:700">Star-Delta</text>
        <rect x="75" y="50" width="30" height="20" style="fill:var(--bg3);stroke:var(--text);stroke-width:1.5"/>
        <line x1="90" y1="70" x2="60" y2="100" style="stroke:var(--text3);stroke-width:1"/>
        <line x1="90" y1="70" x2="120" y2="100" style="stroke:var(--text3);stroke-width:1"/>
        <text x="90" y="210" text-anchor="middle" style="fill:var(--green);font-size:9px">Reduced Inrush (2-3x In)</text>
      </g>
    </svg>`,

  // ── MOTOR ADVANCED — VFD Control ──
  'motor-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Variable Frequency Drive (VFD) Topology</text>
      <!-- Rectifier -->
      <rect x="40" y="100" width="80" height="60" rx="4" style="fill:var(--bg3);stroke:var(--blue);stroke-width:2"/>
      <text x="80" y="135" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">Rectifier</text>
      <!-- DC Bus -->
      <line x1="120" y1="120" x2="220" y2="120" style="stroke:var(--text3);stroke-width:2"/>
      <line x1="120" y1="140" x2="220" y2="140" style="stroke:var(--text3);stroke-width:2"/>
      <rect x="150" y="110" width="40" height="40" style="fill:rgba(155,89,182,.1);stroke:var(--purple);stroke-width:1"/>
      <text x="170" y="165" text-anchor="middle" style="fill:var(--purple);font-size:8px">Capacitor Filter</text>
      <!-- Inverter -->
      <rect x="220" y="100" width="100" height="60" rx="4" style="fill:var(--bg3);stroke:var(--red);stroke-width:2"/>
      <text x="270" y="135" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">PWM Inverter</text>
      <!-- Motor -->
      <circle cx="450" cy="130" r="30" style="fill:none;stroke:var(--green);stroke-width:3"/>
      <text x="450" y="135" text-anchor="middle" style="fill:var(--green);font-size:12px;font-weight:700">VFD MOTOR</text>
      <text x="270" y="220" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:700">Speed Control (f/V) + Soft Start</text>
    </svg>`,

  // ── HVAC — Beginner: Power Dist ──
  'hvac-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">HVAC Power Distribution Hierarchy</text>
      <!-- Main Chiller -->
      <rect x="180" y="50" width="180" height="80" rx="6" style="fill:var(--bg3);stroke:var(--blue);stroke-width:2.5"/>
      <text x="270" y="85" text-anchor="middle" style="fill:var(--blue);font-size:12px;font-weight:700">CHILLER PLANT (Primary Load)</text>
      <!-- AHUs -->
      <line x1="270" y1="130" x2="100" y2="180" style="stroke:var(--text3);stroke-width:1.5"/>
      <line x1="270" y1="130" x2="440" y2="180" style="stroke:var(--text3);stroke-width:1.5"/>
      <rect x="50" y="180" width="100" height="40" rx="4" style="fill:var(--bg2);stroke:var(--teal);stroke-width:1"/><text x="100" y="205" text-anchor="middle" style="fill:var(--teal);font-size:9px">AHU-1 (Fans)</text>
      <rect x="390" y="180" width="100" height="40" rx="4" style="fill:var(--bg2);stroke:var(--teal);stroke-width:1"/><text x="440" y="205" text-anchor="middle" style="fill:var(--teal);font-size:9px">AHU-2 (Fans)</text>
    </svg>`,

  // ── HVAC ADVANCED — Control logic ──
  'hvac-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">BMS Integration & Control</text>
      <!-- Controller -->
      <rect x="220" y="60" width="100" height="60" rx="4" style="fill:var(--bg2);stroke:var(--purple);stroke-width:2"/>
      <text x="270" y="95" text-anchor="middle" style="fill:var(--purple);font-size:11px;font-weight:700">DDC / PLC Controller</text>
      <!-- I/O Links -->
      <path d="M 220,90 L 100,160" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>
      <path d="M 320,90 L 440,160" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>
      <text x="100" y="185" text-anchor="middle" style="fill:var(--text2);font-size:9px">Temp/CO2 Sensors</text>
      <text x="440" y="185" text-anchor="middle" style="fill:var(--text2);font-size:9px">VFD Fan Speed</text>
      <text x="270" y="230" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:700">Demand-Controlled Ventilation (DCV)</text>
    </svg>`,

  // ── MDB — Beginner: Components ──
  'mdb-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Main Distribution Board (MDB)</text>
      <!-- Panel frame -->
      <rect x="60" y="60" width="420" height="180" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1.5"/>
      <!-- Internal sections -->
      <rect x="80" y="80" width="120" height="140" rx="4" style="fill:rgba(231,76,60,.1);stroke:var(--red);stroke-width:1.5"/>
      <text x="140" y="100" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">INCOMER (ACB)</text>
      <rect x="210" y="80" width="250" height="140" rx="4" style="fill:rgba(74,144,217,.1);stroke:var(--blue);stroke-width:1.5"/>
      <text x="335" y="100" text-anchor="middle" style="fill:var(--blue);font-size:9px;font-weight:700">OUTGOING FEEDERS (MCCBs)</text>
    </svg>`,

  // ── MDB ADVANCED — Internal Separation ──
  'mdb-adv-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Switchgear Forms of Separation</text>
      <!-- Form 4 Example -->
      <rect x="150" y="60" width="240" height="160" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Individual compartments -->
      ${[0,1].map(i => `
        <rect x="${170+i*110}" y="80" width="90" height="120" rx="4" style="fill:var(--bg3);stroke:var(--text);stroke-width:1"/>
        <text x="${215+i*110}" y="100" text-anchor="middle" style="fill:var(--text2);font-size:8px">Cell ${i+1}</text>
      `).join('')}
      <text x="270" y="245" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:700">Form 4b: Individual units + Busbars separated</text>
    </svg>`,

  // ── BUSBARS — Beginner: Short Circuit ──
  'busbar-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <!-- 3nd Busbar View -->
      <g transform="translate(120, 80)">
         <rect x="0" y="0" width="300" height="20" rx="3" style="fill:var(--red)"/>
         <rect x="0" y="30" width="300" height="20" rx="3" style="fill:var(--amber)"/>
         <rect x="0" y="60" width="300" height="20" rx="3" style="fill:var(--blue)"/>
         <!-- Stress arrow -->
         <path d="M 50,20 L 50,30" style="stroke:var(--red);stroke-width:3;marker-start:url(#arrow-start);marker-end:url(#arrow-end)"/>
         <text x="60" y="27" style="fill:var(--red);font-size:9px;font-weight:700">Electrodynamic Force (kA)</text>
      </g>
      <text x="270" y="210" text-anchor="middle" style="fill:var(--text3);font-size:10px">Support spacing must withstand Short Circuit forces.</text>
    </svg>`,

  // ── BUSBARS ADVANCED — Temperature Rise ──
  'busbar-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Skin Effect & Proximity Factors</text>
      <!-- Current density gradient -->
      <rect x="150" y="80" width="30" height="150" rx="2" style="fill:url(#heatGrad);stroke:var(--border)"/>
      <rect x="250" y="80" width="30" height="150" rx="2" style="fill:url(#heatGrad);stroke:var(--border)"/>
      <rect x="350" y="80" width="30" height="150" rx="2" style="fill:url(#heatGrad);stroke:var(--border)"/>
      <defs>
        <linearGradient id="heatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:var(--red);stop-opacity:.8" />
          <stop offset="50%" style="stop-color:var(--blue);stop-opacity:.4" />
          <stop offset="100%" style="stop-color:var(--red);stop-opacity:.8" />
        </linearGradient>
      </defs>
      <text x="270" y="250" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">Current migrates to outer edges at high frequencies.</text>
    </svg>`,

  // ── CABLE TRAY — Beginner: Layout ──
  'cable-tray-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Cable Management Systems</text>
      <!-- Ladder Tray -->
      <g transform="translate(60, 60)">
        <rect x="0" y="0" width="200" height="150" rx="4" style="fill:var(--bg2);stroke:var(--text3);stroke-width:1"/>
        ${[20, 50, 80, 110].map(y => `<rect x="10" y="${y}" width="180" height="10" style="fill:var(--bg3);stroke:var(--text3);stroke-width:1"/>`).join('')}
        <text x="100" y="170" text-anchor="middle" style="fill:var(--text2);font-size:10px;font-weight:700">LADDER TRAY (Power Cables)</text>
      </g>
      <!-- Perforated Tray -->
      <g transform="translate(290, 60)">
        <rect x="0" y="0" width="200" height="150" rx="4" style="fill:var(--bg2);stroke:var(--text3);stroke-width:1"/>
        ${[20, 40, 60, 80, 100, 120].map(y => 
          [20, 50, 80, 110, 140, 170].map(x => `<circle cx="${x}" cy="${y}" r="3" style="fill:var(--bg1)"/>`).join('')
        ).join('')}
        <text x="100" y="170" text-anchor="middle" style="fill:var(--text2);font-size:10px;font-weight:700">PERFORATED (Control/Data)</text>
      </g>
    </svg>`,

  // ── CABLE TRAY ADVANCED — Thermal Derating ──
  'cable-tray-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Airflow & Thermal Management</text>
      <!-- Airflow arrows -->
      <path d="M 50,220 Q 50,180 80,180" style="stroke:var(--blue);stroke-width:2;marker-end:url(#arrow-end)"/>
      <path d="M 150,220 Q 150,180 180,180" style="stroke:var(--blue);stroke-width:2;marker-end:url(#arrow-end)"/>
      <!-- Tray with cables -->
      <rect x="40" y="160" width="460" height="10" rx="2" style="fill:var(--text3)"/>
      <circle cx="100" cy="140" r="15" style="fill:var(--accent);opacity:.8"/>
      <circle cx="200" cy="140" r="15" style="fill:var(--accent);opacity:.8"/>
      <circle cx="300" cy="140" r="15" style="fill:var(--accent);opacity:.8"/>
      <!-- Label -->
      <text x="270" y="100" text-anchor="middle" style="fill:var(--text2);font-size:13px;font-weight:700">Space = 1 × Cable Diameter (De)</text>
      <text x="270" y="125" text-anchor="middle" style="fill:var(--accent);font-size:10px">Ensures 100% current capacity (No derating)</text>
    </svg>`,

  // ── BREAKER SELECTION — Beginner: Curves ──
  'breaker-selection-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">MCB Trip Curves (B, C, D Types)</text>
      <rect x="60" y="60" width="420" height="180" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Curves -->
      <path d="M 80,80 Q 80,200 120,200" style="fill:none;stroke:var(--green);stroke-width:3"/>
      <text x="100" y="100" style="fill:var(--green);font-size:9px;font-weight:700">B: 3-5x In</text>
      
      <path d="M 140,80 Q 140,200 220,200" style="fill:none;stroke:var(--blue);stroke-width:3"/>
      <text x="160" y="100" style="fill:var(--blue);font-size:9px;font-weight:700">C: 5-10x In</text>
      
      <path d="M 240,80 Q 240,200 380,200" style="fill:none;stroke:var(--red);stroke-width:3"/>
      <text x="260" y="100" style="fill:var(--red);font-size:9px;font-weight:700">D: 10-20x In</text>
      
      <text x="270" y="250" text-anchor="middle" style="fill:var(--text3);font-size:9px">X-Axis: Multiplier of Current (In) | Y-Axis: Time (s)</text>
    </svg>`,

  // ── BREAKER COORDINATION — Advanced: Cascading ──
  'breaker-coord-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Upstream Cascading (Series Rating)</text>
      <!-- Main Breaker -->
      <rect x="220" y="60" width="100" height="50" rx="4" style="fill:rgba(231,76,60,.1);stroke:var(--red);stroke-width:2"/>
      <text x="270" y="85" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">Main (50kA SC)</text>
      <line x1="270" y1="110" x2="270" y2="160" style="stroke:var(--text3);stroke-width:2"/>
      <!-- Branch Breaker -->
      <rect x="220" y="160" width="100" height="40" rx="4" style="fill:rgba(74,144,217,.1);stroke:var(--blue);stroke-width:2"/>
      <text x="270" y="180" text-anchor="middle" style="fill:var(--blue);font-size:9px;font-weight:700">Branch (10kA SC)</text>
      <text x="270" y="240" text-anchor="middle" style="fill:var(--green);font-size:11px;font-weight:700">Combined Series Rating: 50kA OK!</text>
    </svg>`,

  // ── EV CHARGING — Beginner: Levels ──
  'ev-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">EV Charging Infrastructure Levels</text>
      <!-- Level 2 AC -->
      <g transform="translate(60, 80)">
         <rect x="0" y="0" width="140" height="120" rx="10" style="fill:var(--bg2);stroke:var(--blue);stroke-width:2"/>
         <text x="70" y="30" text-anchor="middle" style="fill:var(--blue);font-size:12px;font-weight:700">AC Level 2</text>
         <text x="70" y="60" text-anchor="middle" style="fill:var(--text2);font-size:10px">7-22 kW</text>
         <text x="70" y="100" text-anchor="middle" style="fill:var(--text3);font-size:8px">Wallbox / Home</text>
      </g>
      <!-- DC Fast -->
      <g transform="translate(340, 80)">
         <rect x="0" y="0" width="140" height="120" rx="10" style="fill:var(--bg3);stroke:var(--orange);stroke-width:2.5"/>
         <text x="70" y="30" text-anchor="middle" style="fill:var(--orange);font-size:12px;font-weight:700">DC Fast (L3)</text>
         <text x="70" y="60" text-anchor="middle" style="fill:var(--text2);font-size:10px">50-350 kW</text>
         <text x="70" y="100" text-anchor="middle" style="fill:var(--text3);font-size:8px">Highway Station</text>
      </g>
      <path d="M 210,140 L 330,140" style="stroke:var(--text3);stroke-width:2;marker-end:url(#arrow-end)"/>
    </svg>`,

  // ── EV ADVANCED — Load Balancing ──
  'ev-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Dynamic Load Management (DLM)</text>
      <!-- Grid limit -->
      <line x1="50" y1="100" x2="490" y2="100" style="stroke:var(--red);stroke-width:2;stroke-dasharray:5,5"/>
      <text x="450" y="90" style="fill:var(--red);font-size:9px;font-weight:700">GRID LIMIT</text>
      <!-- Load bars -->
      <rect x="80" y="110" width="100" height="120" rx="4" style="fill:var(--blue);opacity:.6"/>
      <text x="130" y="130" text-anchor="middle" style="fill:white;font-size:9px">Building Load</text>
      <!-- Shared EV load -->
      <rect x="250" y="150" width="200" height="80" rx="4" style="fill:var(--green);opacity:.8"/>
      <text x="350" y="175" text-anchor="middle" style="fill:white;font-size:10px;font-weight:700">EV CHARGERS (Auto-Throttled)</text>
      <text x="270" y="250" text-anchor="middle" style="fill:var(--text3);font-size:9px">DLM prevents main fuse blow by reducing EV power during peak hours.</text>
    </svg>`,

  // ── CT/PT — Beginner: Measurement ──
  'ct-pt-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Instrument Transformers (CT & PT)</text>
      <!-- CT -->
      <rect x="80" y="60" width="160" height="140" rx="8" style="fill:var(--bg2);stroke:var(--accent);stroke-width:2"/>
      <circle cx="160" cy="110" r="30" style="fill:none;stroke:var(--accent);stroke-width:5"/>
      <line x1="120" y1="110" x2="200" y2="110" style="stroke:var(--text);stroke-width:10"/>
      <text x="160" y="170" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:700">CURRENT (CT)</text>
      <text x="160" y="185" text-anchor="middle" style="fill:var(--text3);font-size:9px">1000:5 Ratio</text>
      <!-- PT -->
      <rect x="300" y="60" width="160" height="140" rx="8" style="fill:var(--bg2);stroke:var(--purple);stroke-width:2"/>
      <circle cx="370" cy="100" r="20" style="fill:none;stroke:var(--purple);stroke-width:2"/>
      <circle cx="390" cy="100" r="20" style="fill:none;stroke:var(--purple);stroke-width:2"/>
      <text x="380" y="170" text-anchor="middle" style="fill:var(--purple);font-size:11px;font-weight:700">POTENTIAL (PT)</text>
      <text x="380" y="185" text-anchor="middle" style="fill:var(--text3);font-size:9px">11kV : 110V</text>
    </svg>`,

  // ── CT/PT ADVANCED — Polarity & Knee Point ──
  'ct-pt-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">CT Saturation Curve (Knee Point)</text>
      <rect x="80" y="60" width="380" height="180" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <path d="M 100,220 L 300,80 Q 450,70 450,65" style="fill:none;stroke:var(--red);stroke-width:3"/>
      <!-- Knee point circle -->
      <circle cx="300" cy="80" r="8" style="fill:none;stroke:var(--accent);stroke-width:2;stroke-dasharray:3,2"/>
      <text x="315" y="75" text-anchor="start" style="fill:var(--accent);font-size:10px;font-weight:700">KNEE POINT (Saturation)</text>
      <text x="270" y="255" text-anchor="middle" style="fill:var(--text3);font-size:9px">Protection CTs must not saturate below max fault current.</text>
    </svg>`,

  // ── BESS — Beginner: Layout ──
  'bess-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Battery Energy Storage System (BESS)</text>
      <!-- Enclosure -->
      <rect x="60" y="60" width="420" height="150" rx="10" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Batteries -->
      <g transform="translate(80, 80)">
        ${[0, 1, 2].map(i => `<rect x="${i*50}" y="0" width="40" height="100" rx="3" style="fill:var(--green);opacity:0.8"/>`).join('')}
        <text x="70" y="120" text-anchor="middle" style="fill:var(--text2);font-size:9px">Battery Racks</text>
      </g>
      <!-- PCS (Inverter) -->
      <g transform="translate(300, 80)">
        <rect x="0" y="0" width="140" height="100" rx="4" style="fill:var(--bg3);stroke:var(--blue);stroke-width:2"/>
        <text x="70" y="45" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">Power Conversion</text>
        <text x="70" y="60" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">System (PCS)</text>
      </g>
    </svg>`,

  // ── BESS ADVANCED — Grid Support ──
  'bess-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Grid Services: Frequency Regulation</text>
      <!-- Sine waves for frequency -->
      <path d="M 60,140 Q 90,80 120,140 Q 150,200 180,140" style="fill:none;stroke:var(--red);stroke-width:2"/><text x="120" y="220" text-anchor="middle" style="fill:var(--red);font-size:9px">Grid Drop</text>
      <path d="M 360,140 Q 390,110 420,140 Q 450,170 480,140" style="fill:none;stroke:var(--green);stroke-width:3"/><text x="420" y="220" text-anchor="middle" style="fill:var(--green);font-size:9px">BESS Stabilized</text>
      <!-- BESS Action -->
      <path d="M 220,140 L 320,140" style="stroke:var(--accent);stroke-width:4;marker-end:url(#arrow-end)"/>
      <text x="270" y="130" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:700">Rapid Response (ms)</text>
    </svg>`,

  // ── ENERGY MONITORING — Beginner: Metering ──
  'energy-monitoring-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Smart Metering Topology</text>
      <!-- Main Meter -->
      <rect x="230" y="60" width="80" height="80" rx="4" style="fill:var(--bg3);stroke:var(--accent);stroke-width:2.5"/>
      <text x="270" y="105" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-weight:700">0421.5</text>
      <text x="270" y="125" text-anchor="middle" style="fill:var(--accent);font-size:9px;font-weight:700">kWh</text>
      <!-- Sub-meters -->
      <line x1="270" y1="140" x2="100" y2="190" style="stroke:var(--text3);stroke-width:1.5"/>
      <line x1="270" y1="140" x2="440" y2="190" style="stroke:var(--text3);stroke-width:1.5"/>
      <rect x="50" y="190" width="100" height="40" rx="4" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1"/><text x="100" y="215" text-anchor="middle" style="fill:var(--blue);font-size:9px">Floor 1 Meter</text>
      <rect x="390" y="190" width="100" height="40" rx="4" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1"/><text x="440" y="215" text-anchor="middle" style="fill:var(--blue);font-size:9px">HVAC Meter</text>
    </svg>`,

  // ── ENERGY MONITORING ADVANCED — Data Analysis ──
  'energy-monitoring-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Cloud Analytics & Benchmarking</text>
      <!-- Dashboard view -->
      <rect x="60" y="60" width="420" height="150" rx="10" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Pie chart -->
      <circle cx="150" cy="135" r="40" style="fill:none;stroke:var(--blue);stroke-width:20;stroke-dasharray:60,100"/>
      <circle cx="150" cy="135" r="40" style="fill:none;stroke:var(--orange);stroke-width:20;stroke-dasharray:100,60;stroke-dashoffset:-60"/>
      <text x="150" y="195" text-anchor="middle" style="fill:var(--text3);font-size:9px">Load Distribution</text>
      <!-- KPI -->
      <rect x="270" y="100" width="150" height="70" rx="6" style="fill:var(--bg3);stroke:var(--green);stroke-width:1.5"/>
      <text x="345" y="130" text-anchor="middle" style="fill:var(--green);font-size:16px;font-weight:700">EPI: 85.2</text>
      <text x="345" y="150" text-anchor="middle" style="fill:var(--text3);font-size:9px">kWh/m²/year</text>
    </svg>`,

  // ── TROUBLESHOOTING — Beginner: Process ──
  'troubleshooting-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Systematic Fault Isolation</text>
      <!-- Process steps -->
      <g transform="translate(60, 80)">
        <rect x="0" y="0" width="120" height="40" rx="5" style="fill:var(--bg3);stroke:var(--text);stroke-width:1"/><text x="60" y="25" text-anchor="middle" style="fill:var(--text2);font-size:9px">1. IDENTIFY SYMTPOM</text>
        <path d="M 120,20 L 150,20" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>
        
        <rect x="150" y="0" width="120" height="40" rx="5" style="fill:var(--bg3);stroke:var(--text);stroke-width:1"/><text x="210" y="25" text-anchor="middle" style="fill:var(--text2);font-size:9px">2. ANALYZE SLD</text>
        <path d="M 270,20 L 300,20" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>
        
        <rect x="300" y="0" width="120" height="40" rx="5" style="fill:var(--bg3);stroke:var(--text);stroke-width:1"/><text x="360" y="25" text-anchor="middle" style="fill:var(--text2);font-size:9px">3. ISOLATE CIRCUIT</text>
      </g>
      <rect x="180" y="160" width="180" height="60" rx="30" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:2"/>
      <text x="270" y="195" text-anchor="middle" style="fill:var(--green);font-size:12px;font-weight:700">ROOT CAUSE FOUND</text>
    </svg>`,

  // ── TROUBLESHOOTING ADVANCED — Analysis ──
  'troubleshooting-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Forensic Electrical Analysis</text>
      <!-- Transient waveform -->
      <rect x="60" y="60" width="420" height="150" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <path d="M 80,135 L 200,135 L 210,60 L 220,200 L 230,135 L 450,135" style="fill:none;stroke:var(--red);stroke-width:2"/>
      <text x="215" y="50" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">VOLTAGE SPIKE (Transient)</text>
      <text x="270" y="240" text-anchor="middle" style="fill:var(--text3);font-size:9px">Advanced loggers identify sub-cycle disturbances leading to equipment failure.</text>
    </svg>`,

  // ── SHORT CIRCUIT — Beginner: Fault Types ──
  'short-circuit-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Short Circuit Fault Types</text>
      <!-- Horizontal Bus -->
      <line x1="100" y1="80" x2="440" y2="80" style="stroke:var(--text);stroke-width:4"/>
      <!-- L-L-L Fault -->
      <g transform="translate(100, 100)">
        <circle cx="0" cy="0" r="15" style="fill:var(--red);opacity:0.2;stroke:var(--red);stroke-width:1.5"/>
        <text x="0" y="35" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">3-PH (Bolted)</text>
      </g>
      <!-- L-L Fault -->
      <g transform="translate(270, 100)">
        <path d="M -10,-5 L 10,5 M -10,5 L 10,-5" style="stroke:var(--amber);stroke-width:3"/>
        <text x="0" y="35" text-anchor="middle" style="fill:var(--amber);font-size:9px;font-weight:700">L-L (Line-Line)</text>
      </g>
      <!-- L-G Fault -->
      <g transform="translate(440, 100)">
        <line x1="0" y1="0" x2="0" y2="30" style="stroke:var(--green);stroke-width:2.5"/>
        <rect x="-10" y="30" width="20" height="4" style="fill:var(--green)"/>
        <text x="0" y="55" text-anchor="middle" style="fill:var(--green);font-size:9px;font-weight:700">L-G (Ground)</text>
      </g>
    </svg>`,

  // ── SHORT CIRCUIT ADVANCED — Contribution ──
  'short-circuit-adv-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Motor Contribution to Fault</text>
      <!-- Main Feed -->
      <line x1="270" y1="40" x2="270" y2="120" style="stroke:var(--red);stroke-width:5"/>
      <path d="M 270,120 L 270,150" style="stroke:var(--red);stroke-width:2;stroke-dasharray:4,4"/>
      <!-- Motor Return -->
      <circle cx="150" cy="200" r="20" style="fill:none;stroke:var(--blue);stroke-width:2"/>
      <text x="150" y="203" text-anchor="middle" style="fill:var(--blue);font-size:9px;font-weight:700">M</text>
      <path d="M 150,180 Q 150,135 270,135" style="stroke:var(--blue);stroke-width:2.5;marker-end:url(#arrow-end)"/>
      <text x="150" y="160" text-anchor="middle" style="fill:var(--blue);font-size:9px;font-weight:700">Sub-Transient Infeed</text>
      <!-- Fault Point -->
      <path d="M 260,115 L 280,125 M 260,125 L 280,115" style="stroke:var(--red);stroke-width:3"/>
    </svg>`,

  // ── RELAY COORDINATION — Beginner: Logic ──
  'relay-coord-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Protection Relay Logic Chain</text>
      <!-- Components -->
      <g transform="translate(50, 100)">
        <rect x="0" y="0" width="80" height="60" rx="4" style="fill:var(--bg3);stroke:var(--accent);stroke-width:2"/>
        <text x="40" y="35" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:700">CT / PT</text>
        <path d="M 80,30 L 130,30" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>
        
        <rect x="130" y="0" width="120" height="60" rx="4" style="fill:var(--bg3);stroke:var(--purple);stroke-width:2"/>
        <text x="190" y="32" text-anchor="middle" style="fill:var(--purple);font-size:11px;font-weight:700">NUMERICAL</text>
        <text x="190" y="45" text-anchor="middle" style="fill:var(--purple);font-size:9px">RELAY (IED)</text>
        <path d="M 250,30 L 300,30" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>

        <rect x="300" y="0" width="100" height="60" rx="4" style="fill:var(--bg3);stroke:var(--red);stroke-width:2"/>
        <text x="350" y="35" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:700">CB TRIP</text>
      </g>
    </svg>`,

  // ── RELAY ADVANCED — Differential ──
  'relay-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Differential Protection (87L)</text>
      <!-- Zone -->
      <rect x="150" y="80" width="240" height="120" rx="10" style="fill:none;stroke:var(--red);stroke-width:2;stroke-dasharray:8,4"/>
      <text x="270" y="145" text-anchor="middle" style="fill:var(--red);font-size:12px;font-weight:700">PROTECTED ZONE</text>
      <!-- CTs -->
      <circle cx="150" cy="140" r="15" style="fill:none;stroke:var(--accent);stroke-width:3"/>
      <circle cx="390" cy="140" r="15" style="fill:none;stroke:var(--accent);stroke-width:3"/>
      <!-- I1 / I2 -->
      <line x1="80" y1="140" x2="135" y2="140" style="stroke:var(--text);stroke-width:3;marker-end:url(#arrow-end)"/><text x="100" y="130" style="fill:var(--text2);font-size:9px">I in</text>
      <line x1="405" y1="140" x2="480" y2="140" style="stroke:var(--text);stroke-width:3;marker-end:url(#arrow-end)"/><text x="440" y="130" style="fill:var(--text2);font-size:9px">I out</text>
      <!-- Comparison -->
      <text x="270" y="240" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:700">Trip if: |I in - I out| &gt; Setpoint</text>
    </svg>`,

  // ── TCC DIAGRAM — Beginner ──
  'tcc-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Time-Current Characteristic (TCC)</text>
      <!-- Log-Log Grid -->
      <rect x="60" y="60" width="420" height="180" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Instantaneous -->
      <path d="M 300,60 L 300,240" style="stroke:var(--red);stroke-width:2;stroke-dasharray:4,4"/>
      <text x="310" y="75" style="fill:var(--red);font-size:9px">Instantaneous (L-L-L Fault)</text>
      <!-- Inverse Time Curve -->
      <path d="M 80,80 Q 150,200 440,220" style="fill:none;stroke:var(--blue);stroke-width:3"/>
      <text x="120" y="90" style="fill:var(--blue);font-size:9px;font-weight:700">IDMT Characteristic</text>
      <text x="270" y="255" text-anchor="middle" style="fill:var(--text3);font-size:9px">IEEE / IEC Standard Curves</text>
    </svg>`,

  // ── ARC FLASH TCC — Advanced ──
  'arc-flash-tcc-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Arcing Current vs Bolted Fault</text>
      <rect x="60" y="60" width="420" height="180" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Bolted fault line -->
      <line x1="380" y1="60" x2="380" y2="240" style="stroke:var(--red);stroke-width:2"/>
      <text x="385" y="80" style="fill:var(--red);font-size:9px;font-weight:700">Bolted (Ibf)</text>
      <!-- Arcing current line -->
      <line x1="180" y1="60" x2="180" y2="240" style="stroke:var(--amber);stroke-width:2"/>
      <text x="185" y="80" style="fill:var(--amber);font-size:9px;font-weight:700">Arcing (Ia)</text>
      <text x="50" y="235" text-anchor="start" style="fill:var(--text3);font-size:9px">Arcing current is 40-70% lower because of Arc Impedance.<br/>This makes it harder for breakers to trip fast!</text>
    </svg>`,

  // ── HAZARDOUS AREA — Beginner ──
  'hazardous-area-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Hazardous Zone Core Concepts</text>
      <!-- Zones -->
      <circle cx="270" cy="150" r="100" style="fill:rgba(231,76,60,.1);stroke:var(--red);stroke-width:2"/>
      <text x="270" y="70" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">Zone 0 (Continuous Gas)</text>
      
      <circle cx="270" cy="150" r="60" style="fill:rgba(243,156,18,.1);stroke:var(--amber);stroke-width:2"/>
      <text x="270" y="110" text-anchor="middle" style="fill:var(--amber);font-size:10px;font-weight:700">Zone 1 (Likely)</text>
      
      <circle cx="270" cy="150" r="30" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:2"/>
      <text x="270" y="145" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">Safe</text>
    </svg>`,

  // ── HAZARDOUS ADVANCED — Explosion Proof ──
  'hazardous-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Enclosure Protection Types (Ex)</text>
      <!-- Ex-d -->
      <g transform="translate(80, 80)">
         <rect x="0" y="0" width="140" height="120" rx="6" style="fill:var(--bg3);stroke:var(--text);stroke-width:4"/>
         <text x="70" y="30" text-anchor="middle" style="fill:var(--text2);font-size:11px;font-weight:700">Flameproof (Ex-d)</text>
         <text x="70" y="60" text-anchor="middle" style="fill:var(--text3);font-size:9px">Contains internal<br/>explosion pressure.</text>
      </g>
      <!-- Ex-i -->
      <g transform="translate(320, 80)">
         <rect x="0" y="0" width="140" height="120" rx="6" style="fill:rgba(52,152,219,.1);stroke:var(--blue);stroke-width:2"/>
         <text x="70" y="30" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">Intrinsic Safety (Ex-i)</text>
         <text x="70" y="60" text-anchor="middle" style="fill:var(--blue);font-size:9px">Limits energy below<br/>ignition threshold.</text>
      </g>
    </svg>`,

  // ── DATA CENTER REDUNDANCY — Beginner: N+1 ──
  'dc-redundancy-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">N+1 Redundancy Concept</text>
      <!-- Required units -->
      ${[0, 1].map(i => `
        <rect x="${100+i*120}" y="80" width="100" height="100" rx="6" style="fill:var(--bg3);stroke:var(--blue);stroke-width:2"/>
        <text x="${150+i*120}" y="135" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">Unit ${i+1} (N)</text>
      `).join('')}
      <!-- Extra unit -->
      <rect x="340" y="80" width="100" height="100" rx="6" style="fill:rgba(39,174,96,.1);stroke:var(--green);stroke-width:2.5"/>
      <text x="390" y="135" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:700">Spare (+1)</text>
      <text x="270" y="220" text-anchor="middle" style="fill:var(--text3);font-size:9px">System remains operational if any ONE unit fails.</text>
    </svg>`,

  // ── DC REDUNDANCY ADVANCED — Tier IV ──
  'dc-redundancy-adv-sld': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Tier IV: Fault Tolerant (2(N+1))</text>
      <!-- Feed A -->
      <rect x="60" y="60" width="180" height="100" rx="6" style="fill:rgba(74,144,217,.05);stroke:var(--blue);stroke-width:1"/>
      <text x="150" y="115" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">Path A (UPS+DG)</text>
      <!-- Feed B -->
      <rect x="300" y="60" width="180" height="100" rx="6" style="fill:rgba(231,76,60,.05);stroke:var(--red);stroke-width:1"/>
      <text x="390" y="115" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">Path B (UPS+DG)</text>
      <!-- Critical Load -->
      <rect x="220" y="190" width="100" height="50" rx="4" style="fill:var(--bg3);stroke:var(--accent);stroke-width:2"/>
      <text x="270" y="215" text-anchor="middle" style="fill:var(--accent);font-size:11px;font-weight:700">Dual-Powered Server</text>
      <path d="M 150,160 L 220,200" style="stroke:var(--blue);stroke-width:1.5"/>
      <path d="M 390,160 L 320,200" style="stroke:var(--red);stroke-width:1.5"/>
    </svg>`,

  // ── SOLAR PV — Beginner: Components ──
  'solar-pv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Grid-Tie PV System Flow</text>
      <g transform="translate(40, 80)">
         <!-- Solar Panels -->
         <rect x="0" y="20" width="80" height="60" rx="4" style="fill:var(--blue);stroke:var(--text);stroke-width:1"/>
         ${[10, 30, 50, 70].map(x => `<line x1="${x}" y1="20" x2="${x}" y2="80" style="stroke:white;stroke-width:1;opacity:.4"/>`).join('')}
         <text x="40" y="100" text-anchor="middle" style="fill:var(--blue);font-size:9px;font-weight:700">PV ARRAY (DC)</text>
         
         <line x1="80" y1="50" x2="150" y2="50" style="stroke:var(--text3);stroke-width:2;marker-end:url(#arrow-end)"/>
         
         <!-- Inverter -->
         <rect x="150" y="20" width="80" height="60" rx="4" style="fill:var(--bg3);stroke:var(--orange);stroke-width:2"/>
         <text x="190" y="55" text-anchor="middle" style="fill:var(--orange);font-size:10px;font-weight:700">INVERTER</text>
         
         <line x1="230" y1="50" x2="300" y2="50" style="stroke:var(--text3);stroke-width:2;marker-end:url(#arrow-end)"/>

         <!-- Net Meter -->
         <circle cx="340" cy="50" r="30" style="fill:none;stroke:var(--accent);stroke-width:2"/>
         <text x="340" y="55" text-anchor="middle" style="fill:var(--accent);font-size:9px;font-weight:700">NET METER</text>
      </g>
    </svg>`,

  // ── SOLAR ADVANCED — Performance Ratio ──
  'solar-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Solar Performance Ratio (PR)</text>
      <rect x="60" y="60" width="420" height="150" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Theoretical vs Actual -->
      <rect x="120" y="180" width="300" height="20" rx="3" style="fill:var(--blue);opacity:.2"/>
      <text x="110" y="195" text-anchor="end" style="fill:var(--blue);font-size:9px">Expected</text>
      
      <rect x="120" y="180" width="230" height="20" rx="3" style="fill:var(--blue)"/>
      <text x="360" y="195" style="fill:var(--blue);font-size:11px;font-weight:700">Actual: 77% PR</text>
      
      <!-- Loss icons -->
      <text x="150" y="100" text-anchor="middle" style="fill:var(--red);font-size:18px">🌡️</text><text x="150" y="120" text-anchor="middle" style="fill:var(--red);font-size:8px">Temp Loss</text>
      <text x="270" y="100" text-anchor="middle" style="fill:var(--amber);font-size:18px">☁️</text><text x="270" y="120" text-anchor="middle" style="fill:var(--amber);font-size:8px">Soiling</text>
      <text x="390" y="100" text-anchor="middle" style="fill:var(--purple);font-size:18px">➰</text><text x="390" y="120" text-anchor="middle" style="fill:var(--purple);font-size:8px">Inv Efficiency</text>
    </svg>`,

  // ── LIGHTNING PROTECTION — Beginner: Zones ──
  'lightning-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Lightning Protection System (LPS)</text>
      <!-- House outline -->
      <path d="M 200,220 L 200,120 L 270,70 L 340,120 L 340,220 Z" style="fill:var(--bg3);stroke:var(--text);stroke-width:2"/>
      <!-- Air terminal (pole) -->
      <line x1="270" y1="70" x2="270" y2="30" style="stroke:var(--accent);stroke-width:3"/>
      <circle cx="270" cy="30" r="4" style="fill:var(--accent)"/>
      <!-- Down conductor -->
      <path d="M 273,30 L 350,30 L 350,230" style="fill:none;stroke:var(--accent);stroke-width:1.5;stroke-dasharray:4,2"/>
      <!-- Earth pit -->
      <circle cx="350" cy="240" r="10" style="fill:none;stroke:var(--green);stroke-width:2"/>
      <text x="350" y="265" text-anchor="middle" style="fill:var(--green);font-size:9px">Earth Termination</text>
    </svg>`,

  // ── LIGHTNING ADVANCED — Rolling Sphere ──
  'lightning-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Rolling Sphere Method (IEC 62305)</text>
      <!-- Mast -->
      <line x1="150" y1="220" x2="150" y2="80" style="stroke:var(--text);stroke-width:4"/>
      <!-- Sphere circle -->
      <circle cx="300" cy="120" r="100" style="fill:rgba(74,144,217,.1);stroke:var(--blue);stroke-width:1.5;stroke-dasharray:10,5"/>
      <text x="300" y="110" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">Rolling Sphere (R=45m)</text>
      <!-- Safe zone arc -->
      <path d="M 150,80 Q 220,130 300,140" style="fill:none;stroke:var(--green);stroke-width:3"/>
      <text x="200" y="200" text-anchor="middle" style="fill:var(--green);font-size:11px;font-weight:700;font-family:'Rajdhani',sans-serif">PROTECTED VOLUME</text>
    </svg>`,

  // ── ARC FLASH — Beginner: Boundaries ──
  'arc-flash-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Arc Flash Safety Boundaries</text>
      <!-- Concentric circles -->
      <circle cx="270" cy="150" r="90" style="fill:rgba(231,76,60,.05);stroke:var(--red);stroke-width:1.5"/>
      <text x="270" y="75" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">Arc Flash Boundary</text>
      
      <circle cx="270" cy="150" r="60" style="fill:rgba(211,84,0,.1);stroke:var(--orange);stroke-width:1.5"/>
      <text x="270" y="105" text-anchor="middle" style="fill:var(--orange);font-size:9px;font-weight:700">Limited Approach</text>
      
      <circle cx="270" cy="150" r="30" style="fill:rgba(192,57,43,.2);stroke:var(--red);stroke-width:2"/>
      <text x="270" y="155" text-anchor="middle" style="fill:var(--red);font-size:8px;font-weight:800">RESTRICTED</text>
    </svg>`,

  // ── ARC FLASH ADVANCED — Energy Reduction ──
  'arc-flash-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Incident Energy Mitigation (ARMS)</text>
      <!-- Breaker with ARMS -->
      <rect x="180" y="80" width="180" height="120" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <rect x="200" y="100" width="140" height="40" rx="4" style="fill:rgba(39,174,96,.2);stroke:var(--green);stroke-width:2"/>
      <text x="270" y="125" text-anchor="middle" style="fill:var(--green);font-size:11px;font-weight:700">ARMS / Maintenance Mode: ON</text>
      <!-- Result text -->
      <path d="M 270,140 L 270,170" style="stroke:var(--text3);stroke-width:1.5;marker-end:url(#arrow-end)"/>
      <text x="270" y="190" text-anchor="middle" style="fill:var(--accent);font-size:10px">Reduces Trip Time → Reduces Cal/cm²</text>
      <text x="270" y="235" text-anchor="middle" style="fill:var(--text3);font-size:9px">NEC 240.87 Requirement for Breakers &ge; 1200A</text>
    </svg>`,

  // ── HARMONICS — Beginner: Distortion ──
  'harmonics-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">THD (Total Harmonic Distortion)</text>
      <!-- Clean wave -->
      <path d="M 60,140 Q 110,40 160,140 Q 210,240 260,140" style="fill:none;stroke:var(--green);stroke-width:2;opacity:0.3"/>
      <text x="160" y="230" text-anchor="middle" style="fill:var(--green);font-size:9px">Fundamental (50/60Hz)</text>
      <!-- Distorted wave -->
      <path d="M 60,140 C 90,60 110,60 130,140 C 150,220 170,220 210,140" style="fill:none;stroke:var(--red);stroke-width:2.5"/>
      <text x="130" y="60" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">DISTORTED WAVEFORM</text>
      <text x="270" y="255" text-anchor="middle" style="fill:var(--text3);font-size:9px">Sum of all harmonic components vs Fundamental.</text>
    </svg>`,

  // ── HARMONICS ADVANCED — Mitigation ──
  'harmonics-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Active Harmonic Filter (AHF)</text>
      <!-- Bus -->
      <line x1="50" y1="100" x2="490" y2="100" style="stroke:var(--text);stroke-width:4"/>
      <!-- Harmonic Load -->
      <rect x="100" y="140" width="80" height="60" rx="4" style="fill:var(--bg3);stroke:var(--red);stroke-width:2"/>
      <text x="140" y="175" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">Non-Linear<br/>Load</text>
      <!-- AHF Injection -->
      <rect x="360" y="140" width="80" height="60" rx="4" style="fill:rgba(52,152,219,.1);stroke:var(--blue);stroke-width:2"/>
      <text x="400" y="175" text-anchor="middle" style="fill:var(--blue);font-size:9px;font-weight:700">AHF Unit</text>
      <path d="M 400,140 L 400,105" style="stroke:var(--blue);stroke-width:2;marker-end:url(#arrow-end)"/>
      <text x="400" y="125" text-anchor="start" style="fill:var(--blue);font-size:8px">Counter-Current Injection</text>
    </svg>`,

  // ── GREEN BUILDING — Beginner ──
  'green-building-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">LEED / IGBC Energy Categories</text>
      <!-- Categories -->
      ${[
        {l:'Optimization', v:70, color:'var(--green)'},
        {l:'Renewables', v:50, color:'var(--blue)'},
        {l:'Monitoring', v:30, color:'var(--purple)'},
      ].map((c, i) => `
        <rect x="150" y="${70+i*50}" width="${c.v*3}" height="30" rx="15" style="fill:${c.color};opacity:0.8"/>
        <text x="140" y="${90+i*50}" text-anchor="end" style="fill:var(--text2);font-size:10px;font-weight:700">${c.l}</text>
      `).join('')}
    </svg>`,

  // ── GREEN ADVANCED — Microgrid ──
  'green-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Net Zero Microgrid Management</text>
      <!-- Center Controller -->
      <circle cx="270" cy="140" r="40" style="fill:var(--bg3);stroke:var(--accent);stroke-width:3"/>
      <text x="270" y="145" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">EMS</text>
      <!-- Nodes -->
      <g transform="translate(150, 80)">
         <circle cx="0" cy="0" r="25" style="fill:var(--bg2);stroke:var(--orange);stroke-width:2"/><text x="0" y="5" text-anchor="middle" style="fill:var(--orange);font-size:8px">Solar</text>
         <line x1="18" y1="18" x2="85" y2="35" style="stroke:var(--text3);stroke-width:1"/>
      </g>
      <g transform="translate(390, 80)">
         <circle cx="0" cy="0" r="25" style="fill:var(--bg2);stroke:var(--blue);stroke-width:2"/><text x="0" y="5" text-anchor="middle" style="fill:var(--blue);font-size:8px">Grid</text>
         <line x1="-18" y1="18" x2="-85" y2="35" style="stroke:var(--text3);stroke-width:1"/>
      </g>
      <g transform="translate(270, 220)">
         <circle cx="0" cy="0" r="25" style="fill:var(--bg2);stroke:var(--green);stroke-width:2"/><text x="0" y="5" text-anchor="middle" style="fill:var(--green);font-size:8px">BESS</text>
         <line x1="0" y1="-25" x2="0" y2="-40" style="stroke:var(--text3);stroke-width:1"/>
      </g>
    </svg>`,

  // ── ETAP — Beginner: Interface ──
  'etap-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <rect x="60" y="60" width="420" height="180" rx="4" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- Toolbar -->
      <rect x="60" y="60" width="420" height="30" style="fill:var(--bg3);stroke:var(--border);stroke-width:1"/>
      <text x="75" y="80" style="fill:var(--text2);font-size:10px">File  Edit  View  Project  Analysis</text>
      <!-- Workspace -->
      <circle cx="150" cy="140" r="20" style="fill:none;stroke:var(--red);stroke-width:2"/><text x="150" y="175" text-anchor="middle" style="fill:var(--text3);font-size:8px">Transformer</text>
      <line x1="150" y1="140" x2="300" y2="140" style="stroke:var(--text);stroke-width:1"/>
      <rect x="300" y="130" width="40" height="20" style="fill:none;stroke:var(--blue);stroke-width:1.5"/><text x="320" y="165" text-anchor="middle" style="fill:var(--text3);font-size:8px">LV Bus</text>
      <text x="270" y="255" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:700">Digital Twin Modeling Interface</text>
    </svg>`,

  // ── ETAP ADVANCED — Star Protection ──
  'etap-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Star: Auto-Coordination Results</text>
      <rect x="60" y="60" width="420" height="180" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <!-- TCC results -->
      <path d="M 120,80 Q 120,200 400,210" style="fill:none;stroke:var(--blue);stroke-width:2"/>
      <path d="M 100,100 Q 100,220 380,230" style="fill:none;stroke:var(--red);stroke-width:2"/>
      <!-- Violation flag -->
      <rect x="220" y="130" width="100" height="25" rx="4" style="fill:var(--red);opacity:0.2"/>
      <text x="270" y="147" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">SELECTIVITY ERROR!</text>
    </svg>`,

  // ── SMART LOAD — Beginner ──
  'smart-load-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Internet of Things (IoT) Electrical Node</text>
      <rect x="180" y="80" width="180" height="120" rx="8" style="fill:var(--bg3);stroke:var(--accent);stroke-width:2"/>
      <text x="270" y="115" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">SMART CIRCUIT</text>
      <!-- WiFi icon -->
      <path d="M 250,140 Q 270,120 290,140" style="fill:none;stroke:var(--text2);stroke-width:2"/>
      <path d="M 240,150 Q 270,120 300,150" style="fill:none;stroke:var(--text2);stroke-width:2"/>
      <text x="270" y="175" text-anchor="middle" style="fill:var(--green);font-size:9px">Status: Connected</text>
    </svg>`,

  // ── SMART LOAD ADVANCED — VPP ──
  'smart-load-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Virtual Power Plant (VPP) Orchestration</text>
      <!-- Aggregator -->
      <rect x="200" y="60" width="140" height="40" rx="20" style="fill:var(--bg3);stroke:var(--purple);stroke-width:2"/>
      <text x="270" y="85" text-anchor="middle" style="fill:var(--purple);font-size:11px;font-weight:700">VPP AGGREGATOR</text>
      <!-- Distributed Resources -->
      ${[0, 1, 2].map(i => `
         <rect x="${70+i*150}" y="160" width="100" height="50" rx="4" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1"/>
         <text x="${120+i*150}" y="190" text-anchor="middle" style="fill:var(--blue);font-size:9px">DER Unit ${i+1}</text>
         <line x1="${120+i*150}" y1="160" x2="270" y2="100" style="stroke:var(--text3);stroke-width:1;stroke-dasharray:4,4"/>
      `).join('')}
    </svg>`,

  // ── LEARNING PATHS — Advanced ──
  'learning-paths-adv': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="25" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">The Competency Spiral</text>
      <!-- Spiral concept -->
      <path d="M 270,140 m -20,0 a 20,20 0 1,0 40,0 a 40,40 0 1,0 -80,0 a 60,60 0 1,0 120,0 a 80,80 0 1,0 -160,0" style="fill:none;stroke:var(--accent);stroke-width:2;opacity:0.4"/>
      <!-- Milestones -->
      <circle cx="270" cy="140" r="5" style="fill:var(--accent)"/>
      <text x="280" y="145" style="fill:var(--text2);font-size:9px">Start</text>
      
      <circle cx="350" cy="140" r="5" style="fill:var(--blue)"/>
      <text x="360" y="145" style="fill:var(--blue);font-size:9px">L2: Component Mastery</text>
      
      <circle cx="270" cy="220" r="5" style="fill:var(--purple)"/>
      <text x="270" y="235" text-anchor="middle" style="fill:var(--purple);font-size:9px">L3: System Design</text>
      
      <circle cx="110" cy="140" r="5" style="fill:var(--red)"/>
      <text x="100" y="145" text-anchor="end" style="fill:var(--red);font-size:9px">L4: Expert Analysis</text>
      
      <text x="270" y="265" text-anchor="middle" style="fill:var(--text3);font-size:9px">Learning is iterative — revisit foundations as you encounter complex systems.</text>
    </svg>`,

  // ── GROUNDING TYPES — Beginner ──
  'grounding-types-diagram': `
    <svg width="100%" viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Earthing System Types — TN-S / TN-C-S / TT / IT</text>
      ${['TN-S','TN-C-S','TT','IT'].map((t,i)=>{const x=30+i*130,c=['var(--green)','var(--blue)','var(--amber)','var(--red)'][i];return`
        <rect x="${x}" y="45" width="120" height="210" rx="8" style="fill:var(--bg2);stroke:${c};stroke-width:2"/>
        <text x="${x+60}" y="68" text-anchor="middle" style="fill:${c};font-size:13px;font-weight:700">${t}</text>
        <line x1="${x+30}" y1="85" x2="${x+30}" y2="150" style="stroke:var(--red);stroke-width:2"/>
        <line x1="${x+60}" y1="85" x2="${x+60}" y2="150" style="stroke:var(--blue);stroke-width:2"/>
        <line x1="${x+90}" y1="85" x2="${x+90}" y2="150" style="stroke:var(--text2);stroke-width:1.5"/>
        <text x="${x+30}" y="82" text-anchor="middle" style="fill:var(--red);font-size:8px">L</text>
        <text x="${x+60}" y="82" text-anchor="middle" style="fill:var(--blue);font-size:8px">N</text>
        <text x="${x+90}" y="82" text-anchor="middle" style="fill:var(--text2);font-size:8px">PE</text>
        <line x1="${x+10}" y1="230" x2="${x+110}" y2="230" style="stroke:${c};stroke-width:2"/>
        <text x="${x+60}" y="248" text-anchor="middle" style="fill:var(--text3);font-size:8px">${['Sep N & PE','PEN splits','Own electrode','Isolated'][i]}</text>
      `}).join('')}
      <text x="270" y="290" text-anchor="middle" style="fill:var(--text3);font-size:9px">IEC 60364-1 Cl.312.2 / IS 732 / NEC 250</text>
    </svg>`,

  // ── GROUNDING TYPES — Advanced ──
  'grounding-types-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Fault Loop Analysis per Earthing System</text>
      <rect x="30" y="40" width="230" height="110" rx="8" style="fill:var(--bg2);stroke:var(--green);stroke-width:1.5"/>
      <text x="145" y="60" text-anchor="middle" style="fill:var(--green);font-size:11px;font-weight:700">TN-S: High Fault Current Path</text>
      <text x="145" y="80" text-anchor="middle" style="fill:var(--text2);font-size:9px">L → Fault → PE → Star → L</text>
      <text x="145" y="98" text-anchor="middle" style="fill:var(--text2);font-size:9px">Zs = Ze + R1 + R2</text>
      <text x="145" y="116" text-anchor="middle" style="fill:var(--accent);font-size:9px;font-weight:600">If = 230/0.35 = 657A → MCB trips <0.1s</text>
      <text x="145" y="138" text-anchor="middle" style="fill:var(--green);font-size:8px">✓ RCD optional (but recommended)</text>
      <rect x="280" y="40" width="230" height="110" rx="8" style="fill:var(--bg2);stroke:var(--amber);stroke-width:1.5"/>
      <text x="395" y="60" text-anchor="middle" style="fill:var(--amber);font-size:11px;font-weight:700">TT: Low Fault Current Path</text>
      <text x="395" y="80" text-anchor="middle" style="fill:var(--text2);font-size:9px">L → Fault → PE → Soil → Utility</text>
      <text x="395" y="98" text-anchor="middle" style="fill:var(--text2);font-size:9px">Ra × IΔn ≤ 50V</text>
      <text x="395" y="116" text-anchor="middle" style="fill:var(--accent);font-size:9px;font-weight:600">If = 230/200 = 1.15A → MCB won't trip!</text>
      <text x="395" y="138" text-anchor="middle" style="fill:var(--red);font-size:8px;font-weight:700">⚠ RCD MANDATORY on ALL circuits</text>
      <rect x="30" y="170" width="230" height="110" rx="8" style="fill:var(--bg2);stroke:var(--red);stroke-width:1.5"/>
      <text x="145" y="190" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:700">IT: First Fault — No Trip</text>
      <text x="145" y="210" text-anchor="middle" style="fill:var(--text2);font-size:9px">Isolated neutral → negligible current</text>
      <text x="145" y="228" text-anchor="middle" style="fill:var(--text2);font-size:9px">IMD alarms at Riso < 50kΩ</text>
      <text x="145" y="248" text-anchor="middle" style="fill:var(--accent);font-size:9px;font-weight:600">System continues — repair planned</text>
      <text x="145" y="268" text-anchor="middle" style="fill:var(--red);font-size:8px">⚠ 2nd fault = full L-L current</text>
      <rect x="280" y="170" width="230" height="110" rx="8" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1.5"/>
      <text x="395" y="190" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">TN-C-S (PME): Split Point</text>
      <text x="395" y="210" text-anchor="middle" style="fill:var(--text2);font-size:9px">PEN conductor from utility</text>
      <text x="395" y="228" text-anchor="middle" style="fill:var(--text2);font-size:9px">Splits to N + PE at service entry</text>
      <text x="395" y="248" text-anchor="middle" style="fill:var(--accent);font-size:9px;font-weight:600">Main bonding mandatory at split</text>
      <text x="395" y="268" text-anchor="middle" style="fill:var(--red);font-size:8px">⚠ PEN break = metalwork at line V</text>
    </svg>`,

  // ── SPD — Beginner: Cascade ──
  'spd-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">SPD Cascade Protection — Type 1 → 2 → 3</text>
      <defs><marker id="spd-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" style="fill:var(--accent)"/></marker></defs>
      ${[{t:'Type 1',sub:'Iimp 12.5kA',sub2:'10/350μs',x:60,c:'var(--red)'},{t:'Type 2',sub:'In 20kA',sub2:'8/20μs',x:220,c:'var(--amber)'},{t:'Type 3',sub:'In 5kA',sub2:'1.2/50μs',x:380,c:'var(--green)'}].map(s=>`
        <rect x="${s.x}" y="60" width="100" height="80" rx="8" style="fill:var(--bg2);stroke:${s.c};stroke-width:2"/>
        <text x="${s.x+50}" y="85" text-anchor="middle" style="fill:${s.c};font-size:12px;font-weight:700">${s.t}</text>
        <text x="${s.x+50}" y="105" text-anchor="middle" style="fill:var(--text2);font-size:9px">${s.sub}</text>
        <text x="${s.x+50}" y="120" text-anchor="middle" style="fill:var(--text3);font-size:8px">${s.sub2}</text>
      `).join('')}
      <line x1="160" y1="100" x2="218" y2="100" style="stroke:var(--accent);stroke-width:2;marker-end:url(#spd-arr)"/>
      <line x1="320" y1="100" x2="378" y2="100" style="stroke:var(--accent);stroke-width:2;marker-end:url(#spd-arr)"/>
      <text x="190" y="92" text-anchor="middle" style="fill:var(--text3);font-size:8px">≥10m</text>
      <text x="350" y="92" text-anchor="middle" style="fill:var(--text3);font-size:8px">≥10m</text>
      <text x="110" y="160" text-anchor="middle" style="fill:var(--text3);font-size:8px">Main Panel</text>
      <text x="270" y="160" text-anchor="middle" style="fill:var(--text3);font-size:8px">Sub-DB</text>
      <text x="430" y="160" text-anchor="middle" style="fill:var(--text3);font-size:8px">Equipment</text>
      <rect x="60" y="180" width="420" height="50" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <text x="270" y="200" text-anchor="middle" style="fill:var(--text);font-size:10px;font-weight:600">Key Parameters</text>
      <text x="270" y="218" text-anchor="middle" style="fill:var(--text2);font-size:9px">Uc ≥ 1.1×Uo (253V) | Up = clamping voltage | Isccr ≥ fault level</text>
      <text x="270" y="260" text-anchor="middle" style="fill:var(--text3);font-size:9px">IEC 61643-11 / IS 16313 / NEC Art. 285</text>
    </svg>`,

  // ── SPD — Advanced: MOV vs GDT ──
  'spd-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">SPD Technology — MOV vs GDT vs Combined</text>
      ${[{t:'MOV',items:['Fast: <25ns','Voltage clamping','Degrades over time','Type 2/3 typical'],x:30,c:'var(--blue)'},{t:'GDT',items:['Slow: ~100ns','High surge capacity','Follow-on current risk','Type 1 typical'],x:200,c:'var(--amber)'},{t:'Combined',items:['Best of both','GDT + MOV series','Fast + high capacity','Premium SPDs'],x:370,c:'var(--green)'}].map(s=>`
        <rect x="${s.x}" y="45" width="150" height="140" rx="8" style="fill:var(--bg2);stroke:${s.c};stroke-width:2"/>
        <text x="${s.x+75}" y="68" text-anchor="middle" style="fill:${s.c};font-size:13px;font-weight:700">${s.t}</text>
        ${s.items.map((item,j)=>`<text x="${s.x+75}" y="${90+j*20}" text-anchor="middle" style="fill:var(--text2);font-size:9px">${item}</text>`).join('')}
      `).join('')}
      <rect x="30" y="200" width="490" height="55" rx="6" style="fill:var(--bg2);stroke:var(--red);stroke-width:1"/>
      <text x="270" y="218" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:600">⚠ Critical Installation Rules</text>
      <text x="270" y="235" text-anchor="middle" style="fill:var(--text2);font-size:9px">Lead length < 30cm | Backup fuse per manufacturer | Check Isccr ≥ fault level | Monitor status LED</text>
      <text x="270" y="270" text-anchor="middle" style="fill:var(--text3);font-size:9px">IEC 61643-12 coordination | IEC 62305-4 LPZ concept</text>
    </svg>`,

  // ── FIRE ALARM — Beginner ──
  'fire-alarm-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Fire Alarm System — Architecture</text>
      <rect x="200" y="40" width="140" height="50" rx="8" style="fill:var(--bg2);stroke:var(--red);stroke-width:2"/>
      <text x="270" y="60" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:700">FACP</text>
      <text x="270" y="78" text-anchor="middle" style="fill:var(--text3);font-size:8px">Fire Alarm Control Panel</text>
      ${[{t:'SLC Loop',sub:'Detectors',y:120,c:'var(--amber)'},{t:'NAC',sub:'Sounders/Strobes',y:170,c:'var(--blue)'},{t:'Battery',sub:'24h+30min',y:220,c:'var(--green)'}].map(s=>`
        <rect x="50" y="${s.y}" width="120" height="35" rx="6" style="fill:var(--bg2);stroke:${s.c};stroke-width:1.5"/>
        <text x="110" y="${s.y+15}" text-anchor="middle" style="fill:${s.c};font-size:10px;font-weight:700">${s.t}</text>
        <text x="110" y="${s.y+28}" text-anchor="middle" style="fill:var(--text3);font-size:8px">${s.sub}</text>
        <line x1="170" y1="${s.y+17}" x2="200" y2="65" style="stroke:var(--border);stroke-width:1;stroke-dasharray:4"/>
      `).join('')}
      ${[{t:'BMS',sub:'Monitoring',y:120},{t:'Elevator',sub:'Recall',y:170},{t:'HVAC',sub:'Shutdown',y:220}].map(s=>`
        <rect x="370" y="${s.y}" width="120" height="35" rx="6" style="fill:var(--bg2);stroke:var(--text2);stroke-width:1.5"/>
        <text x="430" y="${s.y+15}" text-anchor="middle" style="fill:var(--text);font-size:10px;font-weight:600">${s.t}</text>
        <text x="430" y="${s.y+28}" text-anchor="middle" style="fill:var(--text3);font-size:8px">${s.sub}</text>
        <line x1="340" y1="65" x2="370" y2="${s.y+17}" style="stroke:var(--border);stroke-width:1;stroke-dasharray:4"/>
      `).join('')}
      <text x="270" y="272" text-anchor="middle" style="fill:var(--text3);font-size:9px">IS 2189 / NFPA 72 / EN 54 — FR-LSH cable mandatory</text>
    </svg>`,

  // ── FIRE ALARM — Advanced ──
  'fire-alarm-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Class A vs Class B SLC Wiring</text>
      <rect x="30" y="45" width="230" height="190" rx="8" style="fill:var(--bg2);stroke:var(--amber);stroke-width:1.5"/>
      <text x="145" y="68" text-anchor="middle" style="fill:var(--amber);font-size:12px;font-weight:700">Class B (Style 4)</text>
      <text x="145" y="88" text-anchor="middle" style="fill:var(--text2);font-size:9px">Single path — no redundancy</text>
      <line x1="60" y1="110" x2="230" y2="110" style="stroke:var(--red);stroke-width:2"/>
      <line x1="60" y1="125" x2="230" y2="125" style="stroke:var(--blue);stroke-width:2"/>
      ${[0,1,2,3].map(i=>`<circle cx="${90+i*45}" cy="117" r="6" style="fill:var(--bg2);stroke:var(--text);stroke-width:1.5"/>`).join('')}
      <line x1="150" y1="110" x2="150" y2="125" style="stroke:var(--red);stroke-width:3"/>
      <text x="150" y="150" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">✕ BREAK</text>
      <text x="145" y="175" text-anchor="middle" style="fill:var(--text2);font-size:9px">Devices after break = LOST</text>
      <text x="145" y="195" text-anchor="middle" style="fill:var(--red);font-size:9px">50% coverage loss possible</text>
      <rect x="280" y="45" width="230" height="190" rx="8" style="fill:var(--bg2);stroke:var(--green);stroke-width:1.5"/>
      <text x="395" y="68" text-anchor="middle" style="fill:var(--green);font-size:12px;font-weight:700">Class A (Style 6)</text>
      <text x="395" y="88" text-anchor="middle" style="fill:var(--text2);font-size:9px">Redundant return path</text>
      <line x1="310" y1="110" x2="480" y2="110" style="stroke:var(--red);stroke-width:2"/>
      <line x1="310" y1="125" x2="480" y2="125" style="stroke:var(--blue);stroke-width:2"/>
      <path d="M 480,110 Q 490,117 480,125" style="fill:none;stroke:var(--green);stroke-width:2"/>
      ${[0,1,2,3].map(i=>`<circle cx="${340+i*45}" cy="117" r="6" style="fill:var(--bg2);stroke:var(--text);stroke-width:1.5"/>`).join('')}
      <line x1="400" y1="110" x2="400" y2="125" style="stroke:var(--red);stroke-width:3"/>
      <text x="400" y="150" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">✕ BREAK</text>
      <text x="395" y="175" text-anchor="middle" style="fill:var(--text2);font-size:9px">Signal reroutes via return path</text>
      <text x="395" y="195" text-anchor="middle" style="fill:var(--green);font-size:9px;font-weight:700">✓ 100% coverage maintained</text>
      <text x="270" y="260" text-anchor="middle" style="fill:var(--text3);font-size:9px">Class A mandatory: hospitals, high-rise (>15m), assembly occupancy</text>
    </svg>`,

  // ── METERING CT — Beginner ──
  'metering-ct-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Revenue Metering CT — Accuracy Classes</text>
      <rect x="30" y="45" width="480" height="80" rx="8" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <text x="270" y="65" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">CT Accuracy at Different Load Levels</text>
      ${[{cl:'Cl.0.2S',range:'5-120%',use:'Smart/Revenue',c:'var(--green)'},{cl:'Cl.0.5S',range:'5-120%',use:'Revenue',c:'var(--blue)'},{cl:'Cl.0.5',range:'25-100%',use:'General',c:'var(--amber)'},{cl:'Cl.1',range:'25-100%',use:'Sub-meter',c:'var(--red)'}].map((r,i)=>`
        <rect x="${40+i*120}" y="75" width="110" height="40" rx="4" style="fill:var(--bg);stroke:${r.c};stroke-width:1.5"/>
        <text x="${95+i*120}" y="92" text-anchor="middle" style="fill:${r.c};font-size:10px;font-weight:700">${r.cl}</text>
        <text x="${95+i*120}" y="108" text-anchor="middle" style="fill:var(--text3);font-size:8px">${r.range} | ${r.use}</text>
      `).join('')}
      <rect x="30" y="140" width="480" height="70" rx="8" style="fill:var(--bg2);stroke:var(--accent);stroke-width:1"/>
      <text x="270" y="160" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:600">Burden Calculation</text>
      <text x="270" y="178" text-anchor="middle" style="fill:var(--text2);font-size:9px">Total VA = Meter VA + Cable VA + Connection VA</text>
      <text x="270" y="196" text-anchor="middle" style="fill:var(--text2);font-size:9px">Cable VA = I²sec × 2L × ρ / A — Must not exceed CT rated burden</text>
      <rect x="30" y="220" width="480" height="35" rx="6" style="fill:var(--bg2);stroke:var(--red);stroke-width:1"/>
      <text x="270" y="242" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:600">⚠ 'S' suffix = extended range (5-120%). Without 'S' = poor accuracy at light loads (nights/weekends)</text>
      <text x="270" y="272" text-anchor="middle" style="fill:var(--text3);font-size:9px">IEC 61869-2 / IS 2705 / IEEE C57.13</text>
    </svg>`,

  // ── METERING CT — Advanced ──
  'metering-ct-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Metering CT vs Protection CT — Key Differences</text>
      <rect x="30" y="45" width="230" height="180" rx="8" style="fill:var(--bg2);stroke:var(--green);stroke-width:2"/>
      <text x="145" y="68" text-anchor="middle" style="fill:var(--green);font-size:12px;font-weight:700">Metering CT</text>
      ${['Cl.0.2S / Cl.0.5S','Accurate at NORMAL current','ISF ≤ 5 (limits fault output)','Saturates during faults','Protects connected meter','Revenue billing accuracy'].map((t,i)=>`
        <text x="145" y="${90+i*20}" text-anchor="middle" style="fill:var(--text2);font-size:9px">${t}</text>
      `).join('')}
      <rect x="280" y="45" width="230" height="180" rx="8" style="fill:var(--bg2);stroke:var(--red);stroke-width:2"/>
      <text x="395" y="68" text-anchor="middle" style="fill:var(--red);font-size:12px;font-weight:700">Protection CT</text>
      ${['5P20 / 10P10','Accurate at FAULT current','ALF 20 (accurate to 20×In)','Must NOT saturate at fault','Feeds relay for tripping','Speed of operation critical'].map((t,i)=>`
        <text x="395" y="${90+i*20}" text-anchor="middle" style="fill:var(--text2);font-size:9px">${t}</text>
      `).join('')}
      <rect x="30" y="235" width="480" height="30" rx="6" style="fill:var(--bg2);stroke:var(--amber);stroke-width:1"/>
      <text x="270" y="255" text-anchor="middle" style="fill:var(--amber);font-size:9px;font-weight:600">⚠ NEVER use protection CT for metering or metering CT for protection — opposite design goals</text>
    </svg>`,

  // ── CABLE PULL — Beginner ──
  'cable-pull-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Cable Pull Tension — Straight + Bend</text>
      <line x1="50" y1="100" x2="300" y2="100" style="stroke:var(--text2);stroke-width:12;stroke-linecap:round;opacity:.3"/>
      <path d="M 300,100 Q 350,100 350,150" style="fill:none;stroke:var(--text2);stroke-width:12;stroke-linecap:round;opacity:.3"/>
      <line x1="350" y1="150" x2="350" y2="230" style="stroke:var(--text2);stroke-width:12;stroke-linecap:round;opacity:.3"/>
      <text x="175" y="85" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:600">Straight: T = W × L × μ</text>
      <text x="390" y="130" text-anchor="start" style="fill:var(--amber);font-size:10px;font-weight:600">Bend: T_out = T_in × e^(μθ)</text>
      <text x="390" y="200" text-anchor="start" style="fill:var(--red);font-size:10px;font-weight:600">SWP = T / R ≤ 200 kg/m</text>
      <circle cx="325" cy="125" r="20" style="fill:none;stroke:var(--amber);stroke-width:1.5;stroke-dasharray:4"/>
      <text x="325" y="130" text-anchor="middle" style="fill:var(--amber);font-size:8px">90°</text>
      <rect x="50" y="240" width="440" height="30" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <text x="270" y="260" text-anchor="middle" style="fill:var(--text2);font-size:9px">μ: 0.35 (lubricated) | 0.50 (dry PVC) | Min bend: 12×OD (armoured)</text>
    </svg>`,

  // ── CABLE PULL — Advanced ──
  'cable-pull-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Jamming Ratio & Vertical Pull Forces</text>
      <rect x="30" y="45" width="230" height="130" rx="8" style="fill:var(--bg2);stroke:var(--red);stroke-width:1.5"/>
      <text x="145" y="65" text-anchor="middle" style="fill:var(--red);font-size:11px;font-weight:700">Jamming Ratio (D/d)</text>
      <text x="145" y="85" text-anchor="middle" style="fill:var(--text2);font-size:9px">D = conduit ID, d = cable OD</text>
      <rect x="50" y="100" width="60" height="25" rx="4" style="fill:rgba(39,174,96,.15);stroke:var(--green);stroke-width:1"/>
      <text x="80" y="117" text-anchor="middle" style="fill:var(--green);font-size:9px;font-weight:700">&lt;2.8 Safe</text>
      <rect x="115" y="100" width="60" height="25" rx="4" style="fill:rgba(231,76,60,.15);stroke:var(--red);stroke-width:1"/>
      <text x="145" y="117" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:700">2.8-3.2 JAM</text>
      <rect x="180" y="100" width="60" height="25" rx="4" style="fill:rgba(39,174,96,.15);stroke:var(--green);stroke-width:1"/>
      <text x="210" y="117" text-anchor="middle" style="fill:var(--green);font-size:9px;font-weight:700">&gt;3.2 Safe</text>
      <text x="145" y="155" text-anchor="middle" style="fill:var(--text3);font-size:8px">Avoid ratio 2.8-3.2 → wedge formation</text>
      <rect x="280" y="45" width="230" height="130" rx="8" style="fill:var(--bg2);stroke:var(--blue);stroke-width:1.5"/>
      <text x="395" y="65" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">Vertical Pull Forces</text>
      <text x="395" y="88" text-anchor="middle" style="fill:var(--text2);font-size:9px">Upward: T = W×L×(μcosθ + sinθ)</text>
      <text x="395" y="108" text-anchor="middle" style="fill:var(--text2);font-size:9px">Downward: T = W×L×(μcosθ − sinθ)</text>
      <text x="395" y="130" text-anchor="middle" style="fill:var(--accent);font-size:9px;font-weight:600">Vertical riser: gravity adds W×H directly</text>
      <text x="395" y="155" text-anchor="middle" style="fill:var(--text3);font-size:8px">Max pull speed: 5 m/min for power cables</text>
      <rect x="30" y="190" width="480" height="60" rx="6" style="fill:var(--bg2);stroke:var(--amber);stroke-width:1"/>
      <text x="270" y="210" text-anchor="middle" style="fill:var(--amber);font-size:10px;font-weight:600">Thermal Expansion in Trays</text>
      <text x="270" y="228" text-anchor="middle" style="fill:var(--text2);font-size:9px">ΔL = α × L × ΔT | XLPE α = 23×10⁻⁶/°C | 100m, 60°C rise = 138mm expansion</text>
      <text x="270" y="242" text-anchor="middle" style="fill:var(--text3);font-size:8px">Snake cable in tray: 350mm offset per 10m straight run</text>
    </svg>`,

  // ── HV EARTHING — Beginner ──
  'hv-earthing-diagram': `
    <svg width="100%" viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">HV Neutral Earthing Methods</text>
      ${[{t:'Solid',sub:'If: 10-40kA',note:'Fast trip, high arc flash',c:'var(--red)',x:30},{t:'LRG',sub:'If: 100-1000A',note:'Balanced: detectable, limited',c:'var(--amber)',x:160},{t:'HRG',sub:'If: 1-10A',note:'Alarm only, no arc flash',c:'var(--green)',x:290},{t:'Petersen',sub:'If: ~0A',note:'Arc self-extinguishes',c:'var(--blue)',x:420}].map(s=>`
        <rect x="${s.x}" y="45" width="120" height="120" rx="8" style="fill:var(--bg2);stroke:${s.c};stroke-width:2"/>
        <text x="${s.x+60}" y="70" text-anchor="middle" style="fill:${s.c};font-size:12px;font-weight:700">${s.t}</text>
        <text x="${s.x+60}" y="95" text-anchor="middle" style="fill:var(--text2);font-size:9px">${s.sub}</text>
        <text x="${s.x+60}" y="115" text-anchor="middle" style="fill:var(--text3);font-size:8px">${s.note}</text>
        <line x1="${s.x+60}" y1="130" x2="${s.x+60}" y2="150" style="stroke:${s.c};stroke-width:2"/>
        <line x1="${s.x+45}" y1="150" x2="${s.x+75}" y2="150" style="stroke:${s.c};stroke-width:2"/>
        <line x1="${s.x+48}" y1="155" x2="${s.x+72}" y2="155" style="stroke:${s.c};stroke-width:1.5"/>
        <line x1="${s.x+52}" y1="160" x2="${s.x+68}" y2="160" style="stroke:${s.c};stroke-width:1"/>
      `).join('')}
      <rect x="30" y="185" width="200" height="90" rx="6" style="fill:var(--bg2);stroke:var(--border);stroke-width:1"/>
      <text x="130" y="205" text-anchor="middle" style="fill:var(--text);font-size:10px;font-weight:600">Selection Guide</text>
      <text x="130" y="222" text-anchor="middle" style="fill:var(--text2);font-size:8px">≤1kV: Solid (always)</text>
      <text x="130" y="237" text-anchor="middle" style="fill:var(--text2);font-size:8px">3.3-11kV: LRG or HRG</text>
      <text x="130" y="252" text-anchor="middle" style="fill:var(--text2);font-size:8px">33kV+: Petersen or Solid</text>
      <text x="130" y="267" text-anchor="middle" style="fill:var(--text2);font-size:8px">Generators: HRG or Reactance</text>
      <rect x="250" y="185" width="260" height="90" rx="6" style="fill:var(--bg2);stroke:var(--accent);stroke-width:1"/>
      <text x="380" y="205" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:600">HRG Sizing Formula</text>
      <text x="380" y="225" text-anchor="middle" style="fill:var(--text2);font-size:9px">R = Vln / Idesired</text>
      <text x="380" y="243" text-anchor="middle" style="fill:var(--text2);font-size:9px">11kV, 10A: R = 6350/10 = 635Ω</text>
      <text x="380" y="261" text-anchor="middle" style="fill:var(--text3);font-size:8px">IS 3043 / IEEE 142 / IEC 61936-1</text>
    </svg>`,

  // ── HV EARTHING — Advanced ──
  'hv-earthing-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Generator Neutral Earthing via Grounding Transformer</text>
      <rect x="60" y="50" width="100" height="60" rx="8" style="fill:var(--bg2);stroke:var(--blue);stroke-width:2"/>
      <text x="110" y="75" text-anchor="middle" style="fill:var(--blue);font-size:11px;font-weight:700">Generator</text>
      <text x="110" y="92" text-anchor="middle" style="fill:var(--text3);font-size:8px">11kV, 5MW</text>
      <line x1="160" y1="80" x2="200" y2="80" style="stroke:var(--text2);stroke-width:2"/>
      <text x="180" y="72" text-anchor="middle" style="fill:var(--text3);font-size:8px">Neutral</text>
      <rect x="200" y="55" width="80" height="50" rx="6" style="fill:var(--bg2);stroke:var(--amber);stroke-width:2"/>
      <text x="240" y="75" text-anchor="middle" style="fill:var(--amber);font-size:10px;font-weight:700">NGT</text>
      <text x="240" y="92" text-anchor="middle" style="fill:var(--text3);font-size:7px">11kV/240V</text>
      <line x1="280" y1="80" x2="320" y2="80" style="stroke:var(--text2);stroke-width:2"/>
      <rect x="320" y="60" width="80" height="40" rx="6" style="fill:var(--bg2);stroke:var(--red);stroke-width:2"/>
      <text x="360" y="78" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:700">R = 1Ω</text>
      <text x="360" y="92" text-anchor="middle" style="fill:var(--text3);font-size:7px">Secondary</text>
      <line x1="360" y1="100" x2="360" y2="120" style="stroke:var(--text2);stroke-width:2"/>
      <line x1="345" y1="120" x2="375" y2="120" style="stroke:var(--text2);stroke-width:2"/>
      <line x1="348" y1="125" x2="372" y2="125" style="stroke:var(--text2);stroke-width:1.5"/>
      <rect x="60" y="140" width="420" height="60" rx="6" style="fill:var(--bg2);stroke:var(--accent);stroke-width:1"/>
      <text x="270" y="158" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:600">Equivalent Resistance Referred to Primary</text>
      <text x="270" y="178" text-anchor="middle" style="fill:var(--text2);font-size:9px">R_eq = R_sec × (V_pri/V_sec)² = 1 × (11000/240)² / 3 ≈ 700Ω</text>
      <text x="270" y="192" text-anchor="middle" style="fill:var(--text2);font-size:9px">Ground fault: 6350/700 = 9.1A → no arc flash, system continues</text>
      <rect x="60" y="210" width="420" height="50" rx="6" style="fill:var(--bg2);stroke:var(--red);stroke-width:1"/>
      <text x="270" y="228" text-anchor="middle" style="fill:var(--red);font-size:10px;font-weight:600">⚠ Arc Flash Comparison</text>
      <text x="270" y="248" text-anchor="middle" style="fill:var(--text2);font-size:9px">Solid: 10-40kA (Cat 4 PPE) | LRG 400A: (Cat 2-3) | HRG 10A: Arc cannot sustain ✓</text>
    </svg>`,

  // ── CAPACITOR BANK — Beginner ──
  'capacitor-bank-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">APFC Panel — Automatic Capacitor Switching</text>
      <rect x="30" y="45" width="100" height="40" rx="6" style="fill:var(--bg2);stroke:var(--blue);stroke-width:2"/>
      <text x="80" y="70" text-anchor="middle" style="fill:var(--blue);font-size:10px;font-weight:700">APFC Controller</text>
      <rect x="30" y="100" width="100" height="30" rx="4" style="fill:var(--bg2);stroke:var(--text2);stroke-width:1"/>
      <text x="80" y="120" text-anchor="middle" style="fill:var(--text2);font-size:9px">CT Input</text>
      ${[1,2,3,4,5,6].map((n,i)=>`
        <rect x="${160+i*60}" y="45" width="50" height="100" rx="6" style="fill:var(--bg2);stroke:var(--green);stroke-width:1.5"/>
        <text x="${185+i*60}" y="68" text-anchor="middle" style="fill:var(--green);font-size:9px;font-weight:700">Step ${n}</text>
        <line x1="${185+i*60}" y1="80" x2="${185+i*60}" y2="95" style="stroke:var(--text2);stroke-width:2"/>
        <line x1="${175+i*60}" y1="95" x2="${195+i*60}" y2="95" style="stroke:var(--blue);stroke-width:2.5"/>
        <line x1="${175+i*60}" y1="102" x2="${195+i*60}" y2="102" style="stroke:var(--blue);stroke-width:2.5"/>
        <text x="${185+i*60}" y="135" text-anchor="middle" style="fill:var(--text3);font-size:7px">25kVAr</text>
      `).join('')}
      <rect x="30" y="160" width="480" height="50" rx="6" style="fill:var(--bg2);stroke:var(--accent);stroke-width:1"/>
      <text x="270" y="178" text-anchor="middle" style="fill:var(--accent);font-size:10px;font-weight:600">Sizing: Qc = P × (tanφ₁ − tanφ₂)</text>
      <text x="270" y="198" text-anchor="middle" style="fill:var(--text2);font-size:9px">500kW, PF 0.78→0.95: Qc = 500×(0.802−0.329) = 237 kVAr → 6×25 = 250 kVAr</text>
      <rect x="30" y="220" width="480" height="35" rx="6" style="fill:var(--bg2);stroke:var(--red);stroke-width:1"/>
      <text x="270" y="242" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:600">⚠ Always check resonance: fr = f×√(MVAsc/MVArcap) — if near 5th/7th: add detuned reactors</text>
      <text x="270" y="272" text-anchor="middle" style="fill:var(--text3);font-size:9px">IS 13585 / NEC Art. 460 / IEC 60831</text>
    </svg>`,

  // ── CAPACITOR BANK — Advanced: Harmonic Filters ──
  'capacitor-bank-adv-diagram': `
    <svg width="100%" viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="font-family:'IBM Plex Sans',sans-serif">
      <text x="270" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600;font-family:'Rajdhani',sans-serif">Passive Harmonic Filter Bank — 5th / 7th / 11th</text>
      ${[{h:'5th (250Hz)',kvar:'1800 kVAr',x:60,c:'var(--red)'},{h:'7th (350Hz)',kvar:'900 kVAr',x:220,c:'var(--amber)'},{h:'11th (550Hz)',kvar:'475 kVAr',x:380,c:'var(--blue)'}].map(s=>`
        <rect x="${s.x}" y="45" width="120" height="130" rx="8" style="fill:var(--bg2);stroke:${s.c};stroke-width:2"/>
        <text x="${s.x+60}" y="68" text-anchor="middle" style="fill:${s.c};font-size:11px;font-weight:700">${s.h}</text>
        <circle cx="${s.x+60}" cy="95" r="12" style="fill:none;stroke:${s.c};stroke-width:1.5"/>
        <text x="${s.x+60}" y="99" text-anchor="middle" style="fill:${s.c};font-size:8px">L</text>
        <line x1="${s.x+60}" y1="107" x2="${s.x+60}" y2="120" style="stroke:var(--text2);stroke-width:2"/>
        <line x1="${s.x+45}" y1="120" x2="${s.x+75}" y2="120" style="stroke:${s.c};stroke-width:2.5"/>
        <line x1="${s.x+45}" y1="127" x2="${s.x+75}" y2="127" style="stroke:${s.c};stroke-width:2.5"/>
        <text x="${s.x+60}" y="148" text-anchor="middle" style="fill:var(--text3);font-size:8px">C</text>
        <text x="${s.x+60}" y="165" text-anchor="middle" style="fill:var(--text2);font-size:9px">${s.kvar}</text>
      `).join('')}
      <rect x="60" y="185" width="420" height="40" rx="6" style="fill:var(--bg2);stroke:var(--green);stroke-width:1"/>
      <text x="270" y="202" text-anchor="middle" style="fill:var(--green);font-size:10px;font-weight:600">At tuned frequency: XL = XC → filter impedance ≈ 0</text>
      <text x="270" y="218" text-anchor="middle" style="fill:var(--text2);font-size:9px">Harmonics flow into filter instead of supply → THD: 22% → 5%</text>
      <rect x="60" y="235" width="420" height="30" rx="6" style="fill:var(--bg2);stroke:var(--red);stroke-width:1"/>
      <text x="270" y="255" text-anchor="middle" style="fill:var(--red);font-size:9px;font-weight:600">⚠ Detune slightly below target (247Hz not 250Hz) — prevents amplification from parameter drift</text>
    </svg>`,

};

window.SVG_DIAGRAMS = SVG_DIAGRAMS;
