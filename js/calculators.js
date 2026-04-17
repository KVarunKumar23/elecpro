/* ═══════════════════════════════════════════════════
   ElecPro — calculators.js
   All calculators: formula-first → inputs → result
   Standard-aware: reads window.STATE.std
   ═══════════════════════════════════════════════════ */

// ── HELPER ──
function getStd() { return (window.STATE && window.STATE.std) || 'IS'; }
function stdName() { return (window.STANDARDS && window.STANDARDS[getStd()]) ? window.STANDARDS[getStd()].name : getStd(); }

function calcResult(id, value, unit, note, steps, mistakes) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `
    <div style="font-family:var(--font-mono);font-size:.62rem;color:var(--text3);letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px">Result — ${stdName()}</div>
    <div style="margin-bottom:10px">
      <span style="font-family:'Rajdhani',sans-serif;font-size:2.4rem;font-weight:700;color:var(--accent)">${value}</span>
      <span style="font-family:var(--font-mono);font-size:1rem;color:var(--text2);margin-left:6px">${unit}</span>
    </div>
    ${note ? `<div style="font-size:.82rem;color:var(--text2);margin-bottom:10px">${note}</div>` : ''}
    ${steps.length ? `
      <div style="border-top:1px solid var(--border);padding-top:10px;margin-top:10px">
        <div style="font-family:var(--font-mono);font-size:.6rem;color:var(--text3);letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px">Step-by-step working</div>
        ${steps.map(s => `<div style="font-size:.8rem;color:var(--text2);padding:3px 0 3px 10px;border-left:2px solid var(--border);margin:3px 0;font-family:var(--font-mono)">${s}</div>`).join('')}
      </div>` : ''}
    ${mistakes ? `
      <div style="margin-top:12px;background:var(--warning-bg);border:1px solid var(--warning-text);border-left:3px solid var(--warning-text);border-radius:6px;padding:10px 12px">
        <div style="font-family:var(--font-mono);font-size:.6rem;color:var(--warning-text);letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px">⚠ Common mistakes</div>
        <div style="font-size:.79rem;color:var(--text2)">${mistakes}</div>
      </div>` : ''}
  `;
  el.style.display = 'block';
}

function calcError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `<div style="color:var(--red);font-family:var(--font-mono);font-size:.84rem;padding:10px">⚠ ${msg}</div>`;
  el.style.display = 'block';
}

function getVal(id, def) {
  const el = document.getElementById(id);
  return el ? (parseFloat(el.value) || def || 0) : (def || 0);
}

function getStr(id, def) {
  const el = document.getElementById(id);
  return el ? (el.value || def) : def;
}

// ══════════════════════════════════════════════
// 1. LOAD CALCULATOR
// ══════════════════════════════════════════════
function calcLoad() {
  const lightKW  = getVal('lc-light-kw', 0);
  const lightDF  = getVal('lc-light-df', 1.0);
  const powerKW  = getVal('lc-power-kw', 0);
  const powerDF  = getVal('lc-power-df', 0.5);
  const hvacKW   = getVal('lc-hvac-kw', 0);
  const hvacDF   = getVal('lc-hvac-df', 0.75);
  const motorKW  = getVal('lc-motor-kw', 0);
  const motorDF  = getVal('lc-motor-df', 0.7);
  const miscKW   = getVal('lc-misc-kw', 0);
  const miscDF   = getVal('lc-misc-df', 0.8);
  const pf       = getVal('lc-pf', 0.87);

  if ((lightKW + powerKW + hvacKW + motorKW + miscKW) === 0) {
    return calcError('lc-result', 'Enter at least one load category.');
  }

  const connectedKW = lightKW + powerKW + hvacKW + motorKW + miscKW;
  const mdLight  = lightKW  * lightDF;
  const mdPower  = powerKW  * powerDF;
  const mdHvac   = hvacKW   * hvacDF;
  const mdMotor  = motorKW  * motorDF;
  const mdMisc   = miscKW   * miscDF;
  const mdKW     = mdLight + mdPower + mdHvac + mdMotor + mdMisc;
  const mdKVA    = mdKW / pf;

  // Standard-specific notes
  const stdNotes = {
    IS: `NBC 2016 planning allowance: office 50W/m², hospital 60W/m². IE Rules: declared MD used for tariff billing.`,
    NEC: `NEC Art.220 demand factors applied. Lighting: NEC 220.42. Receptacles: NEC 220.44. Service sizing per NEC 230.`,
    IEC: `IEC 60364-1 simultaneity factor applied. Design current Ib = MD ÷ (√3 × V) for feeder sizing.`
  };

  calcResult('lc-result',
    mdKVA.toFixed(1), 'kVA',
    `Active power: ${mdKW.toFixed(1)} kW &nbsp;|&nbsp; Connected load: ${connectedKW.toFixed(1)} kW &nbsp;|&nbsp; PF: ${pf} &nbsp;|&nbsp; ${stdNotes[getStd()]}`,
    [
      `Lighting:  ${lightKW.toFixed(1)} kW × DF ${lightDF} = ${mdLight.toFixed(1)} kW`,
      `Power:     ${powerKW.toFixed(1)} kW × DF ${powerDF} = ${mdPower.toFixed(1)} kW`,
      `HVAC:      ${hvacKW.toFixed(1)} kW × DF ${hvacDF} = ${mdHvac.toFixed(1)} kW`,
      `Motors:    ${motorKW.toFixed(1)} kW × DF ${motorDF} = ${mdMotor.toFixed(1)} kW`,
      `Misc:      ${miscKW.toFixed(1)} kW × DF ${miscDF} = ${mdMisc.toFixed(1)} kW`,
      `MD (kW) = ${mdKW.toFixed(1)} kW`,
      `MD (kVA) = ${mdKW.toFixed(1)} ÷ ${pf} = ${mdKVA.toFixed(1)} kVA`,
    ],
    'Do not apply demand factor to lighting — use DF=1.0. Do not use kW directly to size transformers — always convert to kVA using PF.'
  );
}

// ══════════════════════════════════════════════
// 2. CABLE SIZING
// ══════════════════════════════════════════════
function calcCable() {
  const phases  = parseInt(getStr('cab-phases', '3'));
  const voltage = getVal('cab-voltage', 415);
  const current = getVal('cab-current', 0);
  const length  = getVal('cab-length', 0);
  const size    = parseFloat(getStr('cab-size', '10'));
  const insul   = getStr('cab-insul', 'xlpe');
  const ambTemp = getVal('cab-temp', 30);
  const grouped = parseInt(getStr('cab-group', '1'));

  if (!current || !length) return calcError('cab-result', 'Enter design current and cable length.');

  // Cable data (Cu, in free air, 30°C)
  const cableData = {
    1.5:  { pvc:17.5, xlpe:20,  r:12.10 },
    2.5:  { pvc:24,   xlpe:27,  r:7.41  },
    4:    { pvc:32,   xlpe:37,  r:4.61  },
    6:    { pvc:41,   xlpe:47,  r:3.08  },
    10:   { pvc:57,   xlpe:65,  r:1.83  },
    16:   { pvc:76,   xlpe:87,  r:1.15  },
    25:   { pvc:101,  xlpe:114, r:0.727 },
    35:   { pvc:125,  xlpe:141, r:0.524 },
    50:   { pvc:151,  xlpe:168, r:0.387 },
    70:   { pvc:192,  xlpe:213, r:0.268 },
    95:   { pvc:232,  xlpe:258, r:0.193 },
    120:  { pvc:269,  xlpe:294, r:0.153 },
    150:  { pvc:309,  xlpe:341, r:0.124 },
    185:  { pvc:353,  xlpe:387, r:0.099 },
    240:  { pvc:415,  xlpe:451, r:0.075 },
    300:  { pvc:472,  xlpe:514, r:0.060 },
  };

  // Temperature derating (PVC base 70°C, XLPE base 90°C)
  const tempDerating = {
    pvc: { 25:1.06, 30:1.00, 35:0.94, 40:0.87, 45:0.79, 50:0.71, 55:0.61, 60:0.50 },
    xlpe:{ 25:1.04, 30:1.00, 35:0.96, 40:0.91, 45:0.87, 50:0.82, 55:0.76, 60:0.71 }
  };

  // Grouping derating
  const groupDerating = { 1:1.00, 2:0.85, 3:0.79, 4:0.75, 5:0.73, 6:0.72 };

  const cInfo = cableData[size];
  if (!cInfo) return calcError('cab-result', 'Cable size not in database. Enter values manually.');

  const iz_base   = cInfo[insul];
  const r_km      = cInfo.r;
  const cf_temp   = tempDerating[insul][ambTemp] || 0.87;
  const cf_group  = groupDerating[Math.min(grouped, 6)] || 0.72;
  const iz_derated = iz_base * cf_temp * cf_group;

  // VD limits per standard
  const vdLimits = { IS:5, NEC:5, IEC:4 };
  const vdLimit  = vdLimits[getStd()];
  const factor   = phases === 3 ? Math.sqrt(3) : 2;
  const vd       = factor * current * length * (r_km / 1000);
  const vdPct    = (vd / voltage) * 100;

  const check1 = iz_derated >= current;
  const check2 = vdPct <= vdLimit;
  const overall = check1 && check2 ? '✓ PASS' : '✗ FAIL';
  const color   = (check1 && check2) ? 'var(--green)' : 'var(--red)';

  const stdRef = { IS:'IS 3961 / IS 694', NEC:'NEC Art.310 / Table 310.15(B)(16)', IEC:'IEC 60364-5-52' };

  calcResult('cab-result',
    overall, `${stdRef[getStd()]}`,
    `${size}mm² Cu ${insul.toUpperCase()} | Iz derated: ${iz_derated.toFixed(1)}A | VD: ${vd.toFixed(2)}V (${vdPct.toFixed(2)}%)`,
    [
      `Base Iz (${size}mm² Cu ${insul.toUpperCase()}, free air, 30°C): ${iz_base}A`,
      `Temperature derating (${ambTemp}°C): × ${cf_temp} = ${(iz_base * cf_temp).toFixed(1)}A`,
      `Grouping derating (${grouped} cables): × ${cf_group} = ${iz_derated.toFixed(1)}A`,
      `Check 1 — Current: ${iz_derated.toFixed(1)}A ${check1 ? '≥' : '<'} ${current}A ${check1 ? '✓' : '✗'}`,
      `VD = ${factor === 2 ? '2' : '√3'} × ${current} × ${length} × ${r_km}/1000 = ${vd.toFixed(2)}V`,
      `VD% = ${vd.toFixed(2)} / ${voltage} × 100 = ${vdPct.toFixed(2)}%`,
      `Check 2 — VD: ${vdPct.toFixed(2)}% ${check2 ? '≤' : '>'} ${vdLimit}% limit ${check2 ? '✓' : '✗'}`,
    ],
    `Always derate cable rating for temperature AND grouping — not just one. Using free-air ratings without derating is the most common cable sizing error.`
  );
}

// ══════════════════════════════════════════════
// 3. VOLTAGE DROP
// ══════════════════════════════════════════════
function calcVD() {
  const phases  = parseInt(getStr('vd-phases', '3'));
  const voltage = getVal('vd-voltage', 415);
  const current = getVal('vd-current', 0);
  const length  = getVal('vd-length', 0);
  const rKm     = getVal('vd-r', 1.83);
  const xKm     = getVal('vd-x', 0.08);
  const pf      = getVal('vd-pf', 0.87);
  const circType = getStr('vd-type', 'power');

  if (!current || !length) return calcError('vd-result', 'Enter current and length.');

  const sinPhi = Math.sqrt(1 - pf * pf);
  const factor = phases === 3 ? Math.sqrt(3) : 2;

  // Full formula with reactance
  const vdFull = factor * current * length * (rKm * pf + xKm * sinPhi) / 1000;
  // Simplified (R only)
  const vdSimple = factor * current * length * rKm / 1000;

  const vdPct = (vdFull / voltage) * 100;

  const limits = {
    IS:  { lighting: 3, power: 5 },
    NEC: { lighting: 3, power: 5 },
    IEC: { lighting: 3, power: 4 }
  };
  const limit = limits[getStd()][circType];
  const pass  = vdPct <= limit;
  const stdRef = { IS:'IS 732 Cl.6', NEC:'NEC 210.19(A) Inf.Note 4', IEC:'IEC 60364-5-52 Cl.525' };

  calcResult('vd-result',
    vdFull.toFixed(2), 'V',
    `${vdPct.toFixed(2)}% ${pass ? '✓ within' : '✗ exceeds'} ${limit}% limit (${circType}) | ${stdRef[getStd()]}`,
    [
      `Formula: ${factor === 2 ? '2' : '√3'} × I × L × (R·cosφ + X·sinφ) / 1000`,
      `cosφ = ${pf}, sinφ = ${sinPhi.toFixed(4)}`,
      `VD = ${factor.toFixed(3)} × ${current} × ${length} × (${rKm}×${pf} + ${xKm}×${sinPhi.toFixed(3)}) / 1000`,
      `VD = ${factor.toFixed(3)} × ${current} × ${length} × ${(rKm*pf + xKm*sinPhi).toFixed(4)} / 1000`,
      `VD = ${vdFull.toFixed(3)} V`,
      `VD% = ${vdFull.toFixed(3)} / ${voltage} × 100 = ${vdPct.toFixed(2)}%`,
      `Simplified (R only): ${vdSimple.toFixed(2)}V (${(vdSimple/voltage*100).toFixed(2)}%) — use for cables ≤ 16mm²`,
    ],
    `Use √3 (not 2) for 3-phase. Check VD% against LINE voltage (415V), not phase voltage (240V). Include feeder + branch VD in total check.`
  );
}

// ══════════════════════════════════════════════
// 4. EARTHING ELECTRODE RESISTANCE
// ══════════════════════════════════════════════
function calcEarthing() {
  const rho    = getVal('earth-rho', 100);
  const len    = getVal('earth-len', 3);
  const dia    = getVal('earth-dia', 0.025);
  const nElec  = parseInt(getVal('earth-n', 1));

  if (!rho || !len || !dia) return calcError('earth-result', 'Enter soil resistivity, length, and diameter.');

  const rSingle = (rho / (2 * Math.PI * len)) * (Math.log(4 * len / dia) - 1);
  const cf = nElec > 1 ? 0.75 : 1.0; // coupling factor
  const rParallel = rSingle / (nElec * cf);

  // Required resistance per standard
  const limits = { IS: 5, NEC: 25, IEC: 5 };
  const limit  = limits[getStd()];
  const pass   = rParallel <= limit;
  const needed = Math.ceil(rSingle / (limit / cf));
  const stdRef = { IS:'IS 3043 Cl.8.5', NEC:'NEC 250.56', IEC:'IEC 60364-5-54' };

  calcResult('earth-result',
    rParallel.toFixed(2), 'Ω',
    `Single electrode: ${rSingle.toFixed(2)} Ω | ${nElec} in parallel: ${rParallel.toFixed(2)} Ω | ${pass ? '✓ PASS' : '✗ FAIL'} (limit: ${limit}Ω) | ${stdRef[getStd()]}`,
    [
      `Formula: R = ρ/(2πL) × [ln(4L/d) - 1]`,
      `R = ${rho}/(2π×${len}) × [ln(4×${len}/${dia}) - 1]`,
      `R = ${(rho/(2*Math.PI*len)).toFixed(3)} × [ln(${(4*len/dia).toFixed(1)}) - 1]`,
      `R = ${(rho/(2*Math.PI*len)).toFixed(3)} × ${(Math.log(4*len/dia)-1).toFixed(3)}`,
      `R (single) = ${rSingle.toFixed(2)} Ω`,
      nElec > 1 ? `R (${nElec} parallel, coupling 0.75): ${rSingle.toFixed(2)} / (${nElec} × 0.75) = ${rParallel.toFixed(2)} Ω` : '',
      pass ? `✓ Meets ${getStd()} limit of ${limit}Ω` : `✗ Fails — need at least ${needed} electrodes to achieve ${limit}Ω`,
    ].filter(Boolean),
    `Test earth resistance after installation — calculation is an estimate. Actual soil varies with moisture, depth, and season. Measure with fall-of-potential method.`
  );
}

// ══════════════════════════════════════════════
// 5. POWER FACTOR CORRECTION
// ══════════════════════════════════════════════
function calcPFCorrection() {
  const kw      = getVal('pfc-kw', 0);
  const pfOld   = getVal('pfc-pf-old', 0.75);
  const pfTarget = getVal('pfc-pf-target', 0.95);

  if (!kw) return calcError('pfc-result', 'Enter active load (kW).');
  if (pfOld >= pfTarget) return calcError('pfc-result', 'Existing PF must be lower than target PF.');

  const tanPhi1  = Math.sqrt(1 - pfOld * pfOld) / pfOld;
  const tanPhi2  = Math.sqrt(1 - pfTarget * pfTarget) / pfTarget;
  const qc       = kw * (tanPhi1 - tanPhi2);
  const kvaOld   = kw / pfOld;
  const kvaNew   = kw / pfTarget;
  const kvaSaved = kvaOld - kvaNew;

  const stdRef = { IS:'IS 13585 / IE Rules Rule 47A', NEC:'IEEE 18 / NEC Art.460', IEC:'IEC 60831' };

  calcResult('pfc-result',
    qc.toFixed(1), 'kVAr',
    `Existing: ${kvaOld.toFixed(1)} kVA → After correction: ${kvaNew.toFixed(1)} kVA → Saved: ${kvaSaved.toFixed(1)} kVA | ${stdRef[getStd()]}`,
    [
      `Q_c = P × (tan φ₁ - tan φ₂)`,
      `tan φ₁ (PF=${pfOld}): √(1-${pfOld}²)/${pfOld} = ${tanPhi1.toFixed(4)}`,
      `tan φ₂ (PF=${pfTarget}): √(1-${pfTarget}²)/${pfTarget} = ${tanPhi2.toFixed(4)}`,
      `Q_c = ${kw} × (${tanPhi1.toFixed(4)} - ${tanPhi2.toFixed(4)}) = ${kw} × ${(tanPhi1-tanPhi2).toFixed(4)}`,
      `Q_c = ${qc.toFixed(1)} kVAr`,
      `kVA before: ${kw} / ${pfOld} = ${kvaOld.toFixed(1)} kVA`,
      `kVA after:  ${kw} / ${pfTarget} = ${kvaNew.toFixed(1)} kVA`,
      `kVA saving: ${kvaSaved.toFixed(1)} kVA`,
    ],
    `Do not over-correct (leading PF > 1.0) — causes generator instability. Specify APFC for variable loads, not a fixed capacitor bank.`
  );
}

// ══════════════════════════════════════════════
// 6. CONDUIT FILL
// ══════════════════════════════════════════════
function calcConduitFill() {
  const conduitID = getVal('cf-id', 32);
  const n1 = getVal('cf-n1', 0), d1 = getVal('cf-d1', 0);
  const n2 = getVal('cf-n2', 0), d2 = getVal('cf-d2', 0);
  const n3 = getVal('cf-n3', 0), d3 = getVal('cf-d3', 0);

  const conduitArea = Math.PI * conduitID * conduitID / 4;
  const totalCables = n1 + n2 + n3;

  if (totalCables === 0) return calcError('cf-result', 'Enter at least one cable group.');

  const cable1Area = n1 * Math.PI * d1 * d1 / 4;
  const cable2Area = n2 * Math.PI * d2 * d2 / 4;
  const cable3Area = n3 * Math.PI * d3 * d3 / 4;
  const totalCableArea = cable1Area + cable2Area + cable3Area;
  const fillPct = (totalCableArea / conduitArea) * 100;

  // Fill limit
  const limit = totalCables === 1 ? 53 : totalCables === 2 ? 31 : 40;
  const pass  = fillPct <= limit;
  const stdRef = { IS:'IS 9537 / IS 732', NEC:'NEC Ch.9 Table 1', IEC:'IEC 61386' };

  calcResult('cf-result',
    fillPct.toFixed(1), '%',
    `${pass ? '✓ Within' : '✗ Exceeds'} ${limit}% limit for ${totalCables} cable(s) | Conduit ${conduitID}mm ID | ${stdRef[getStd()]}`,
    [
      `Conduit area: π × ${conduitID}² / 4 = ${conduitArea.toFixed(1)} mm²`,
      n1 > 0 ? `Group 1: ${n1} × π×${d1}²/4 = ${cable1Area.toFixed(1)} mm²` : '',
      n2 > 0 ? `Group 2: ${n2} × π×${d2}²/4 = ${cable2Area.toFixed(1)} mm²` : '',
      n3 > 0 ? `Group 3: ${n3} × π×${d3}²/4 = ${cable3Area.toFixed(1)} mm²` : '',
      `Total cable area: ${totalCableArea.toFixed(1)} mm²`,
      `Fill % = ${totalCableArea.toFixed(1)} / ${conduitArea.toFixed(1)} × 100 = ${fillPct.toFixed(1)}%`,
      `Limit for ${totalCables} cable(s): ${limit}%`,
      pass ? `✓ PASS` : `✗ FAIL — upsize to ${Math.ceil(Math.sqrt(totalCableArea/limit*100/(Math.PI/4))/1)*1}mm+ ID conduit`,
    ].filter(Boolean),
    `Always leave spare conduit capacity (design to 70% of limit) for future cable additions and easier pulling. Oversizing conduit is cheap — retrofitting is expensive.`
  );
}


function calcCard(id, icon, title, stdRef, formulaHtml, inputsHtml, calcFn) {
  return `
    <div class="calc-card">
      <div class="calc-card-head">
        <span style="font-size:1.1rem">${icon}</span>
        <div class="calc-card-title">${title}</div>
        <span class="calc-std-tag">${stdRef}</span>
      </div>
      <div class="calc-card-body">
        ${formulaHtml}
        ${inputsHtml}
        <button class="calc-btn" onclick="${calcFn}">Calculate →</button>
        <div class="calc-result" id="${id}-result"></div>
      </div>
    </div>`;
}

function inputField(id, label, unit, defaultVal, step, min, max) {
  const stepAttr = step !== undefined ? `step="${step}"` : '';
  const minAttr  = min  !== undefined ? `min="${min}"` : '';
  const maxAttr  = max  !== undefined ? `max="${max}"` : '';
  return `
    <div class="form-group-calc">
      <label class="form-label-calc" for="${id}">${label} <span class="form-unit-calc">${unit}</span></label>
      <input class="form-input-calc" type="number" id="${id}" value="${defaultVal}" ${stepAttr} ${minAttr} ${maxAttr}>
    </div>`;
}

function selectField(id, label, unit, options, defaultVal) {
  const opts = Object.entries(options).map(([v,t]) =>
    `<option value="${v}" ${v==defaultVal?'selected':''}>${t}</option>`).join('');
  return `
    <div class="form-group-calc">
      <label class="form-label-calc" for="${id}">${label} ${unit ? `<span class="form-unit-calc">${unit}</span>`:''}</label>
      <select class="form-select-calc" id="${id}">${opts}</select>
    </div>`;
}

// ══════════════════════════════════════════════
// 7. SOLAR PV — STRING SIZING & YIELD
// ══════════════════════════════════════════════
function calcSolar() {
  const pArray   = getVal('sol-array', 100);
  const psh      = getVal('sol-psh', 5.2);
  const pr       = getVal('sol-pr', 0.80);
  const tariff   = getVal('sol-tariff', 8);
  const voc      = getVal('sol-voc', 49);
  const vmpp     = getVal('sol-vmpp', 41);
  const isc      = getVal('sol-isc', 10.2);
  const wp       = getVal('sol-wp', 400);
  const vdcMax   = getVal('sol-vdcmax', 900);
  const mpptMin  = getVal('sol-mpptmin', 300);
  const mpptMax  = getVal('sol-mpptmax', 800);

  if (!pArray || !psh || !voc || !vmpp) return calcError('sol-result', 'Enter all required values.');

  const nModules   = Math.round(pArray * 1000 / wp);
  const nSeries    = Math.min(Math.floor(mpptMax / vmpp), Math.floor(vdcMax / voc));
  const nStrings   = Math.ceil(nModules / nSeries);
  const totalMod   = nSeries * nStrings;
  const totalKWp   = totalMod * wp / 1000;
  const annualKWh  = totalKWp * pr * psh * 365;
  const annualVal  = annualKWh * tariff;
  const vOC_str    = voc * nSeries;
  const vMPP_str   = vmpp * nSeries;
  const stdRef = {IS:'CEA Regulations 2019', NEC:'NEC Art.690', IEC:'IEC 62548'};

  calcResult('sol-result',
    annualKWh.toFixed(0), 'kWh/year',
    `${totalKWp.toFixed(1)} kWp installed | ${nStrings} strings × ${nSeries} modules | Value: ₹${(annualVal/100000).toFixed(2)} lakhs/year | ${stdRef[getStd()]}`,
    [
      `Modules needed: ${pArray} kWp / ${wp}Wp = ${nModules} modules`,
      `Max modules in series (MPPT limit): ${mpptMax}V / ${vmpp}V = ${Math.floor(mpptMax/vmpp)}`,
      `Max modules in series (Voc limit):  ${vdcMax}V / ${voc}V = ${Math.floor(vdcMax/voc)}`,
      `Modules per string (limiting case): ${nSeries}`,
      `String Voc: ${nSeries} × ${voc}V = ${vOC_str}V ${vOC_str<=vdcMax?'✓':'✗ exceeds Vdc max!'}`,
      `String Vmpp: ${vMPP_str}V ${vMPP_str>=mpptMin&&vMPP_str<=mpptMax?'✓ within MPPT window':'✗ outside MPPT!'}`,
      `Strings: ⌈${nModules}/${nSeries}⌉ = ${nStrings} strings (${totalMod} modules = ${totalKWp.toFixed(1)} kWp)`,
      `Annual yield: ${totalKWp.toFixed(1)} × ${pr} × ${psh} × 365 = ${annualKWh.toFixed(0)} kWh/year`,
      `Annual value: ${annualKWh.toFixed(0)} × ₹${tariff}/unit = ₹${(annualVal/100000).toFixed(2)} lakhs/year`,
    ],
    `Always check Voc at minimum winter temperature — cold temperatures raise Voc above STC value. Voc_max = Voc_STC × (1 + |γ| × (Tmin−25°C)).`
  );
}

// ══════════════════════════════════════════════
// 8. BUSBAR SIZING
// ══════════════════════════════════════════════
function calcBusbar() {
  const current  = getVal('bus-current', 1000);
  const material = getStr('bus-material', 'cu');
  const mounting = getStr('bus-mounting', 'enclosed');
  const isc      = getVal('bus-isc', 25);
  const tClear   = getVal('bus-t', 0.3);
  const spacing  = getVal('bus-spacing', 50);
  const lSpan    = getVal('bus-span', 500);

  if (!current || !isc) return calcError('bus-result', 'Enter current and fault data.');

  const J = material === 'cu'
    ? (mounting === 'enclosed' ? 1.3 : 1.7)
    : (mounting === 'enclosed' ? 0.9 : 1.2);
  const k = material === 'cu' ? 135 : 87;

  const A_cont   = current / J;
  const A_sc     = isc * 1000 * Math.sqrt(tClear) / k;
  const A_design = Math.max(A_cont, A_sc);

  // Standard sizes (width × thickness mm)
  const sizes = [[25,3],[25,5],[30,5],[40,5],[50,5],[60,5],[60,6],[80,6],[100,6],[100,8],[100,10],[120,10],[150,10]];
  const selected = sizes.find(s => (s[0]*s[1]) >= A_design) || sizes[sizes.length-1];
  const A_sel    = selected[0] * selected[1];

  // SC force
  const iPeak = Math.sqrt(2) * 2.0 * isc * 1000;
  const F_per_m = 2e-7 * iPeak * iPeak / (spacing / 1000);
  const F_support = F_per_m * (lSpan / 1000);

  const stdRef = {IS:'IS 8084', NEC:'NEC Art.366 / IEEE 605', IEC:'IEC 61439 / IEC 60865'};

  calcResult('bus-result',
    `${selected[0]}×${selected[1]}mm`, `(${A_sel} mm²)`,
    `${material.toUpperCase()} busbar, ${mounting}. SC thermal: ${A_sc.toFixed(1)} mm² min. SC force: ${(F_support/9.81).toFixed(1)} kgf/support | ${stdRef[getStd()]}`,
    [
      `Current density J = ${J} A/mm² (${material.toUpperCase()}, ${mounting})`,
      `Area for continuous current: ${current} / ${J} = ${A_cont.toFixed(1)} mm²`,
      `SC thermal: ${isc}kA × √${tClear}s / ${k} = ${A_sc.toFixed(1)} mm² (k=${k} for ${material.toUpperCase()})`,
      `Design area: max(${A_cont.toFixed(1)}, ${A_sc.toFixed(1)}) = ${A_design.toFixed(1)} mm²`,
      `Selected: ${selected[0]}×${selected[1]}mm = ${A_sel} mm² ✓`,
      `SC force: Ip = √2 × 2.0 × ${isc}kA = ${(iPeak/1000).toFixed(1)} kA peak`,
      `F = 2×10⁻⁷ × ${(iPeak/1000).toFixed(1)}² × 10⁶ / ${spacing/1000}m = ${F_per_m.toFixed(0)} N/m`,
      `Force per support (${lSpan}mm span): ${F_per_m.toFixed(0)} × ${lSpan/1000} = ${F_support.toFixed(0)} N = ${(F_support/9.81).toFixed(1)} kgf`,
    ],
    `Verify support bracket rated > ${(F_support/9.81).toFixed(1)} kgf. Torque all busbar joints to manufacturer specification — undertorqued joints cause hot spots and arc flash.`
  );
}

// ══════════════════════════════════════════════
// 9. MOTOR FLC & STARTING
// ══════════════════════════════════════════════
function calcMotor() {
  const kw      = getVal('mot-kw', 37);
  const voltage = getVal('mot-v', 415);
  const pf      = getVal('mot-pf', 0.86);
  const eff     = getVal('mot-eff', 0.93);
  const method  = getStr('mot-method', 'sd');
  const inrush  = getVal('mot-inrush', 6.5);

  if (!kw || !voltage) return calcError('mot-result', 'Enter motor kW and voltage.');

  const flc     = kw * 1000 / (Math.sqrt(3) * voltage * pf * eff);
  const dolI    = inrush * flc;
  const sdI     = dolI / 3;
  const olrSet  = flc * 1.05;
  const transI  = method === 'dol' ? dolI : method === 'sd' ? sdI : flc * 2.5;
  const stdRef  = {IS:'IS 325 / IS 13947-4', NEC:'NEC Art.430 / Table 430.250', IEC:'IEC 60034 / IEC 60947-4'};

  const methodNames = {dol:'Direct-On-Line (DOL)', sd:'Star-Delta', ss:'Soft Starter', vfd:'VFD'};

  calcResult('mot-result',
    flc.toFixed(1), 'A (FLC)',
    `${kw}kW motor | Method: ${methodNames[method]} | Starting current: ${transI.toFixed(1)}A | OLR: ${olrSet.toFixed(1)}A | ${stdRef[getStd()]}`,
    [
      `FLC = ${kw}kW × 1000 / (√3 × ${voltage}V × ${pf} PF × ${eff} η)`,
      `FLC = ${(kw*1000).toFixed(0)} / ${(Math.sqrt(3)*voltage*pf*eff).toFixed(1)} = ${flc.toFixed(1)} A`,
      `DOL starting current: ${inrush}× FLC = ${dolI.toFixed(1)} A`,
      method === 'sd'  ? `Star-delta starting: ${dolI.toFixed(1)} / 3 = ${sdI.toFixed(1)} A (33% of DOL)` : '',
      method === 'ss'  ? `Soft starter: current limited to ~2.5× FLC = ${transI.toFixed(1)} A` : '',
      method === 'vfd' ? `VFD: starting current ≤ FLC = ${flc.toFixed(1)} A (full torque, no inrush)` : '',
      `OLR setting: ${flc.toFixed(1)} × 1.05 = ${olrSet.toFixed(1)} A`,
      `MCCB magnetic trip: must exceed ${transI.toFixed(1)} A (starting current)`,
      `Suggested MCCB magnetic: ≥ ${(transI*1.25).toFixed(0)} A (with 25% margin)`,
    ].filter(Boolean),
    method === 'sd'
      ? `Verify 33% starting torque is sufficient for the load. Centrifugal pumps/fans: adequate. Compressors or loaded conveyors: may stall — use soft starter or VFD.`
      : `OLR setting at 105% FLC. Adjust if motor runs persistently at higher load — protect motor, not just breaker.`
  );
}

// ══════════════════════════════════════════════
// 10. EV CHARGING DEMAND
// ══════════════════════════════════════════════
function calcEV() {
  const nL1     = getVal('ev-n1', 0);
  const nL2     = getVal('ev-n2', 20);
  const nDCFC   = getVal('ev-ndcfc', 4);
  const kwL1    = getVal('ev-kw1', 3.7);
  const kwL2    = getVal('ev-kw2', 7.4);
  const kwDCFC  = getVal('ev-kwdcfc', 50);
  const dfL1    = getVal('ev-df1', 0.4);
  const dfL2    = getVal('ev-df2', 0.45);
  const dfDCFC  = getVal('ev-dfdcfc', 0.80);
  const pf      = getVal('ev-pf', 0.97);

  if ((nL1 + nL2 + nDCFC) === 0) return calcError('ev-result', 'Enter at least one charger type.');

  const mdL1   = nL1   * kwL1   * dfL1;
  const mdL2   = nL2   * kwL2   * dfL2;
  const mdDCFC = nDCFC * kwDCFC * dfDCFC;
  const mdKW   = mdL1 + mdL2 + mdDCFC;
  const mdKVA  = mdKW / pf;
  const iInc   = mdKVA * 1000 / (Math.sqrt(3) * 415);
  const stdRef = {IS:'IS 17017 / CEA 2019', NEC:'NEC Art.625 (125% continuous)', IEC:'IEC 61851'};

  calcResult('ev-result',
    mdKVA.toFixed(1), 'kVA (Maximum Demand)',
    `${(nL1+nL2+nDCFC)} chargers | EV supply incomer: ${iInc.toFixed(0)}A at 415V 3-phase | ${stdRef[getStd()]}`,
    [
      nL1 > 0   ? `Level 1 (${nL1} × ${kwL1}kW × DF${dfL1}): ${mdL1.toFixed(1)} kW` : '',
      nL2 > 0   ? `Level 2 (${nL2} × ${kwL2}kW × DF${dfL2}): ${mdL2.toFixed(1)} kW` : '',
      nDCFC > 0 ? `DC Fast (${nDCFC} × ${kwDCFC}kW × DF${dfDCFC}): ${mdDCFC.toFixed(1)} kW` : '',
      `Total EV MD: ${mdKW.toFixed(1)} kW`,
      `MD (kVA) = ${mdKW.toFixed(1)} / ${pf} = ${mdKVA.toFixed(1)} kVA`,
      `Incomer current: ${mdKVA.toFixed(1)} × 1000 / (√3 × 415) = ${iInc.toFixed(0)}A`,
      `Select MCCB: ${Math.ceil(iInc/25)*25}A (next standard above ${iInc.toFixed(0)}A)`,
    ].filter(Boolean),
    `Install smart charging controller to limit total EV demand — can reduce MD by 30–50% and avoid supply upgrade. Specify OCPP 1.6+ compliance on all chargers.`
  );
}

// ══════════════════════════════════════════════
// 11. LIGHTING DESIGN — LUMEN METHOD
// ══════════════════════════════════════════════
function calcLighting() {
  const length  = getVal('lit-l', 10);
  const width   = getVal('lit-w', 8);
  const hCeil   = getVal('lit-hc', 3.0);
  const hWork   = getVal('lit-hw', 0.8);
  const lux     = getVal('lit-lux', 500);
  const lumens  = getVal('lit-lm', 4000);
  const watts   = getVal('lit-w2', 36);
  const mf      = getVal('lit-mf', 0.80);
  const uf      = getVal('lit-uf', 0.65);

  if (!length || !width || !lux || !lumens) return calcError('lit-result', 'Enter room dimensions, lux, and fixture data.');

  const area    = length * width;
  const hm      = hCeil - hWork;
  const k       = (length * width) / (hm * (length + width));
  const N       = Math.ceil((lux * area) / (lumens * uf * mf));
  const lpd     = (N * watts) / area;
  const achLux  = (N * lumens * uf * mf) / area;
  const lpdLims = {res:10, com:10, hc:12};
  const lpdLim  = lpdLims.com;
  const stdRef  = {IS:'NBC 2016 Part 8 / ECBC', NEC:'ASHRAE 90.1 Section 9', IEC:'EN 12464-1'};

  calcResult('lit-result',
    N.toString(), 'fixtures',
    `${length}m × ${width}m room | Room Index k = ${k.toFixed(2)} | Achieved: ${achLux.toFixed(0)} lux | LPD: ${lpd.toFixed(2)} W/m² ${lpd<=lpdLim?'✓':'✗ exceeds '+lpdLim+' W/m² limit'} | ${stdRef[getStd()]}`,
    [
      `Room area: ${length} × ${width} = ${area} m²`,
      `Mounting height: Hm = ${hCeil} − ${hWork} = ${hm.toFixed(1)} m`,
      `Room Index: k = (${length}×${width}) / [${hm.toFixed(1)}×(${length}+${width})] = ${k.toFixed(2)}`,
      `(UF from manufacturer table at k=${k.toFixed(2)}: user-entered ${uf})`,
      `N = (${lux} × ${area}) / (${lumens} × ${uf} × ${mf})`,
      `N = ${(lux*area).toFixed(0)} / ${(lumens*uf*mf).toFixed(1)} = ${(lux*area/(lumens*uf*mf)).toFixed(2)} → round up to ${N} fixtures`,
      `Achieved illuminance: (${N} × ${lumens} × ${uf} × ${mf}) / ${area} = ${achLux.toFixed(0)} lux`,
      `LPD = (${N} × ${watts}W) / ${area} m² = ${lpd.toFixed(2)} W/m²`,
      `NBC 2016 LPD limit (office): ${lpdLim} W/m² → ${lpd<=lpdLim?'✓ Compliant':'✗ Non-compliant — select lower wattage fixture'}`,
    ],
    `Verify uniformity ratio Emin/Eavg ≥ 0.60. Max fixture spacing ≤ 1.5 × mounting height (${(hm*1.5).toFixed(1)}m). Run DIALux simulation for final layout.`
  );
}

// ══════════════════════════════════════════════
// 12. TRANSFORMER SIZING (L3 calc)
// ══════════════════════════════════════════════
function calcTransformer() {
  const mdKVA   = getVal('tx-md', 420);
  const gf      = getVal('tx-gf', 1.20);
  const lf      = getVal('tx-lf', 0.78);
  const z       = getVal('tx-z', 5.0);

  if (!mdKVA) return calcError('tx-result', 'Enter maximum demand.');

  const reqKVA  = mdKVA * gf / lf;
  const sizes   = [100,160,200,250,315,400,500,630,800,1000,1250,1600,2000,2500];
  const sel     = sizes.find(s => s >= reqKVA) || sizes[sizes.length-1];
  const flc     = sel * 1000 / (Math.sqrt(3) * 415);
  const isc     = flc / (z / 100);
  const loading = mdKVA / sel * 100;
  const stdFault= [16,25,36,50,65,80,100].find(r => r*1000 >= isc) || 100;
  const stdRef  = {IS:'IS 2026 / IS 13947', NEC:'NEC Art.450 / ANSI C57', IEC:'IEC 60076-1'};

  calcResult('tx-result',
    `${sel} kVA`, 'transformer',
    `Loading: ${loading.toFixed(1)}% | Isc at LV: ${(isc/1000).toFixed(1)} kA | Switchboard rating: ≥${stdFault} kA | ${stdRef[getStd()]}`,
    [
      `Required kVA = MD × GF / LF = ${mdKVA} × ${gf} / ${lf} = ${reqKVA.toFixed(1)} kVA`,
      `Selected standard size: ${sel} kVA`,
      `Loading at MD: ${mdKVA}/${sel} = ${loading.toFixed(1)}% ${loading<=80?'✓ (≤80%)':'⚠ (>80% — consider next size)'}`,
      `FLC at 415V: ${sel},000 / (√3 × 415) = ${flc.toFixed(0)} A`,
      `Isc at LV bus: ${flc.toFixed(0)} / ${z/100} = ${isc.toFixed(0)} A = ${(isc/1000).toFixed(1)} kA`,
      `LV switchboard fault rating required: ≥ ${stdFault} kA (next standard above ${(isc/1000).toFixed(1)} kA)`,
    ],
    `Vector group: Dyn11 standard for distribution. Specify ONAN cooling for ≤1600 kVA, ONAF for larger or where space is limited. Consider K-factor rating if >30% of load is VFDs or UPS.`
  );
}

// ══════════════════════════════════════════════
// 13. DG SET SIZING
// ══════════════════════════════════════════════
function calcDG() {
  const essKW    = getVal('dg-kw', 280);
  const pf       = getVal('dg-pf', 0.85);
  const motorKW  = getVal('dg-mkw', 22);
  const startMeth= getStr('dg-meth', 'dol');
  const altitude = getVal('dg-alt', 500);
  const temp     = getVal('dg-temp', 40);
  const spare    = getVal('dg-spare', 1.20);

  if (!essKW) return calcError('dg-result', 'Enter essential load.');

  const essKVA    = essKW / pf;
  const transKVA  = startMeth === 'dol' ? 3 * motorKW / pf
                  : startMeth === 'sd'  ? 1 * motorKW / pf : 0.3 * motorKW / pf;
  const designKVA = essKVA + transKVA;
  const altDf     = altitude > 1000 ? 1 - (altitude - 1000) / 100 * 0.01 : 1;
  const tempDf    = temp > 40 ? 1 - (temp - 40) / 5.5 * 0.01 : 1;
  const combDf    = altDf * tempDf;
  const reqKVA    = designKVA / combDf * spare;
  const sizes     = [40,62.5,82.5,100,125,160,200,250,320,400,500,625,750,1000,1250,1500,2000];
  const sel       = sizes.find(s => s >= reqKVA) || sizes[sizes.length-1];
  const minLoad   = sel * pf * 0.30;
  const stdRef    = {IS:'IS 10000 (Class 10)', NEC:'NFPA 110', IEC:'IEC 60034-22'};
  const startNames = {dol:'DOL (3× motor kW/PF)',sd:'Star-delta (1× motor kW/PF)',ss:'Soft starter (~0.3×)'};

  calcResult('dg-result',
    `${sel} kVA`, 'DG set',
    `Essential: ${essKW}kW | Start method: ${startNames[startMeth]} | Derating: ${(combDf*100).toFixed(1)}% | Min loading: ${minLoad.toFixed(0)}kW | ${stdRef[getStd()]}`,
    [
      `Essential kVA = ${essKW} / ${pf} = ${essKVA.toFixed(1)} kVA`,
      `Motor start transient (${startNames[startMeth]}): ${transKVA.toFixed(1)} kVA`,
      `Design kVA (before derating): ${designKVA.toFixed(1)} kVA`,
      altitude > 1000 ? `Altitude derating (${altitude}m): × ${altDf.toFixed(3)}` : `Altitude: ≤1000m → no derating`,
      temp > 40       ? `Temperature derating (${temp}°C): × ${tempDf.toFixed(3)}` : `Temp: ≤40°C → no derating`,
      `Combined derating: ${combDf.toFixed(4)}`,
      `Required (derated) × spare: ${designKVA.toFixed(1)} / ${combDf.toFixed(4)} × ${spare} = ${reqKVA.toFixed(1)} kVA`,
      `Selected: ${sel} kVA`,
      `⚠ Minimum continuous loading: ${minLoad.toFixed(0)} kW (30% of rated to prevent wet stacking)`,
    ],
    `If essential loads are less than ${minLoad.toFixed(0)} kW at light load periods, install a load bank to maintain minimum loading and prevent wet stacking.`
  );
}


// ══════════════════════════════════════════════
// 14. UPS & BATTERY SIZING
// ══════════════════════════════════════════════
function calcUPS() {
  const loadKW  = getVal('ups-kw', 50);
  const pf      = getVal('ups-pf', 0.9);
  const eff     = getVal('ups-eff', 0.94);
  const future  = getVal('ups-future', 1.25);
  const vdc     = getVal('ups-vdc', 384);
  const backupM = getVal('ups-min', 30);

  if (!loadKW) return calcError('ups-result', 'Enter load in kW.');

  const designKVA = (loadKW / pf) * future;
  const sizes     = [10,20,40,60,80,100,120,160,200,250,300,400,500,600,800];
  const upsKVA    = sizes.find(s => s >= designKVA) || sizes[sizes.length-1];

  const battKW    = upsKVA * pf / eff;
  const numCells  = Math.round(vdc / 2);
  const cellW     = (battKW * 1000) / numCells;
  
  const ah        = (battKW * 1000 * (backupM/60)) / vdc;
  const stdRef    = {IS:'IEC 62040-1', NEC:'IEEE 485', IEC:'IEC 62040-3'};

  calcResult('ups-result',
    `${upsKVA} kVA`, 'UPS System',
    `Battery: ${ah.toFixed(0)} Ah string at ${vdc}V DC (${numCells} cells) | ${stdRef[getStd()]}`,
    [
      `Design kVA = (${loadKW}kW / ${pf} PF) × ${future} future growth = ${designKVA.toFixed(1)} kVA`,
      `Selected UPS rating: ${upsKVA} kVA`,
      `Battery inverter load (DC): ${upsKVA}kVA × ${pf} / ${eff} = ${battKW.toFixed(1)} kW`,
      `Number of 2V cells: ${vdc}V / 2V = ${numCells} cells`,
      `Power per cell: ${(battKW * 1000).toFixed(0)}W / ${numCells} = ${cellW.toFixed(1)} W/cell for ${backupM} mins`,
      `Approximate capacity at C10 rate: ${ah.toFixed(0)} Ah`
    ],
    `Always use manufacturer discharge tables (Watts per Cell) for accurate battery sizing instead of generic Ah formulas. Size room ventilation for hydrogen off-gassing if using VRLA/Flooded lead-acid.`
  );
}

// ══════════════════════════════════════════════
// 15. BATTERY STORAGE (BESS)
// ══════════════════════════════════════════════
function calcBatteryStorage() {
  const reqKWh = getVal('bess-kwh', 100);
  const dod    = getVal('bess-dod', 80); 
  const eff    = getVal('bess-eff', 95); 
  const vSystem = getVal('bess-v', 48); 

  if (!reqKWh) return calcError('bess-result', 'Enter required energy (kWh).');

  const designKWh = reqKWh / (dod/100) / (eff/100);
  const totalAh   = (designKWh * 1000) / vSystem;
  
  const stdRef = {IS:'IEC 62619', NEC:'NFPA 855 / UL 9540', IEC:'IEC 62619'};

  calcResult('bess-result',
    designKWh.toFixed(1), 'kWh capacity',
    `Capacity needed to deliver ${reqKWh} kWh | System: ${totalAh.toFixed(0)} Ah at ${vSystem}V DC | ${stdRef[getStd()]}`,
    [
      `Target energy delivery: ${reqKWh} kWh`,
      `Required base capacity (due to ${dod}% DoD): ${reqKWh} / ${(dod/100)} = ${(reqKWh/(dod/100)).toFixed(1)} kWh`,
      `Factoring inverter/system efficiency (${eff}%): ${(reqKWh/(dod/100)).toFixed(1)} / ${(eff/100)} = ${designKWh.toFixed(1)} kWh`,
      `Battery Bank Ah (${vSystem}V): (${designKWh.toFixed(1)} kWh × 1000) / ${vSystem}V = ${totalAh.toFixed(0)} Ah`
    ],
    `Do not discharge Lithium-ion beyond manufacturer DoD limits (typically 80-90%). Ensure battery management system (BMS) logic integrates with main switchboard.`
  );
}

// ══════════════════════════════════════════════
// 16. SHORT CIRCUIT CURRENT (Isc)
// ══════════════════════════════════════════════
function calcShortCircuit() {
  const txKVA = getVal('isc-kva', 1000);
  const secV  = getVal('isc-v', 415);
  const zPct  = getVal('isc-z', 5.0);
  const motorKVA = getVal('isc-mkva', 200);

  if (!txKVA) return calcError('isc-result', 'Enter transformer capacity.');

  const baseFLC = (txKVA * 1000) / (Math.sqrt(3) * secV);
  const iscTx   = baseFLC / (zPct / 100);
  
  const motorFLC= (motorKVA * 1000) / (Math.sqrt(3) * secV);
  const motorCont = motorFLC * 4;

  const totalIsc = iscTx + motorCont;
  const reqKa = [16,25,36,50,65,80,100].find(r => r*1000 >= totalIsc) || 120;
  
  const stdRef = {IS:'IS 13234', NEC:'IEEE 141', IEC:'IEC 60909'};

  calcResult('isc-result',
    (totalIsc/1000).toFixed(2), 'kA',
    `Transformer fault: ${(iscTx/1000).toFixed(2)} kA | Motor contribution: ${(motorCont/1000).toFixed(2)} kA | Min switchgear rating: ${reqKa} kA | ${stdRef[getStd()]}`,
    [
      `Transformer Secondary FLC = ${txKVA}kVA × 1000 / (√3 × ${secV}V) = ${baseFLC.toFixed(0)} A`,
      `Transformer Isc = FLC / (Z%) = ${baseFLC.toFixed(0)}A / ${zPct/100} = ${iscTx.toFixed(0)} A (${(iscTx/1000).toFixed(2)} kA)`,
      `Motor Sub-transient FLC = ${motorKVA}kVA × 1000 / (√3 × ${secV}V) = ${motorFLC.toFixed(0)} A`,
      `Motor Fault Contribution (~4× FLC) = ${motorCont.toFixed(0)} A (${(motorCont/1000).toFixed(2)} kA)`,
      `Total Fault Current at LV Bus = ${(totalIsc/1000).toFixed(2)} kA`
    ],
    `For precise calculations, always factor in primary utility fault level and LV cable attenuation. Using infinite bus assumption (as done here) is safe and conservative at the main bus.`
  );
}

// ── Update renderCalcPageFull

function renderCalcPageFull() {
  const std = getStd();
  const stdLabel = stdName();

  const calcPageHTML = `
    <div class="page-hdr">
      <div class="ph-left">
        <div class="eyebrow">Module</div>
        <h1 class="page-title">Calculate — <em>14 Tools</em></h1>
        <p class="page-desc">Formula shown first, then inputs, then step-by-step result. Standard: <strong>${stdLabel}</strong>.</p>
      </div>
      <span class="std-pill">${stdLabel}</span>
    </div>

    <div class="slabel">Level 2 — Core Design</div>
    ${calcCard('lc','⚡','Load Calculation — Maximum Demand',std==='IS'?'NBC 2016 Part 8':std==='NEC'?'NEC Art.220':'IEC 60364-1',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">MD(kVA) = Σ(Pi × DFi) / PF</div>`,`<div class="form-row-calc">${inputField('lc-light-kw','Lighting kW','kW',20)}${inputField('lc-light-df','Lighting DF','—',1.0,0.1,0,1)}</div><div class="form-row-calc">${inputField('lc-power-kw','Power sockets kW','kW',15)}${inputField('lc-power-df','Power DF','—',0.5,0.05,0,1)}</div><div class="form-row-calc">${inputField('lc-hvac-kw','HVAC kW','kW',50)}${inputField('lc-hvac-df','HVAC DF','—',0.75,0.05,0,1)}</div><div class="form-row-calc">${inputField('lc-motor-kw','Motors kW','kW',0)}${inputField('lc-motor-df','Motor DF','—',0.7,0.05,0,1)}</div><div class="form-row-calc">${inputField('lc-misc-kw','Misc kW','kW',5)}${inputField('lc-pf','Power factor','—',0.87,0.01,0.5,1)}</div>`,'calcLoad()')}

    ${calcCard('cab','🔗','Cable Sizing — Current & VD',std==='IS'?'IS 3961':std==='NEC'?'NEC Art.310':'IEC 60364-5-52',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">Check 1: Iz × CF ≥ Ib &nbsp;|&nbsp; Check 2: VD% ≤ ${std==='IEC'?'4':'5'}%</div>`,`<div class="form-row-calc">${selectField('cab-phases','System','',{'3':'3-phase','1':'1-phase'})}${inputField('cab-voltage','Voltage','V',415)}</div><div class="form-row-calc">${inputField('cab-current','Design current Ib','A',45)}${inputField('cab-length','Length','m',80)}</div><div class="form-row-calc">${selectField('cab-size','Size mm²','',{1.5:1.5,2.5:2.5,4:4,6:6,10:10,16:16,25:25,35:35,50:50,70:70,95:95,120:120,150:150,185:185,240:240,300:300},'10')}${selectField('cab-insul','Insulation','',{xlpe:'XLPE (90°C)',pvc:'PVC (70°C)'})}</div><div class="form-row-calc">${selectField('cab-temp','Ambient temp','°C',{25:25,30:30,35:35,40:40,45:45,50:50},'30')}${selectField('cab-group','Cables grouped','',{1:'1 (no grouping)',2:2,3:3,4:4,5:5,6:'6+'},'1')}</div>`,'calcCable()')}

    ${calcCard('vd','📉','Voltage Drop',std==='IS'?'IS 732 Cl.6':std==='NEC'?'NEC 210.19(A)':'IEC 60364-5-52',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">VD = √3 × I × L × (R·cosφ + X·sinφ) / 1000 (3-ph) &nbsp;|&nbsp; Limit: ${std==='IEC'?'4':'5'}%</div>`,`<div class="form-row-calc">${selectField('vd-phases','System','',{'3':'3-phase','1':'1-phase'})}${inputField('vd-voltage','Voltage','V',415)}</div><div class="form-row-calc">${inputField('vd-current','Current','A',45)}${inputField('vd-length','Length','m',80)}</div><div class="form-row-calc">${inputField('vd-r','Resistance R','Ω/km',1.83,0.001)}${inputField('vd-x','Reactance X','Ω/km',0.08,0.001)}</div><div class="form-row-calc">${inputField('vd-pf','Power factor','—',0.87,0.01,0.5,1)}${selectField('vd-type','Circuit type','',{power:'Power',lighting:'Lighting'})}</div>`,'calcVD()')}

    ${calcCard('earth','🌍','Earthing Electrode',std==='IS'?'IS 3043 Cl.8.5':std==='NEC'?'NEC 250.56':'IEC 60364-5-54',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">R = ρ/(2πL) × [ln(4L/d) − 1] &nbsp;|&nbsp; Limit: ${std==='NEC'?'25':'5'}Ω</div>`,`<div class="form-row-calc">${inputField('earth-rho','Soil resistivity ρ','Ω·m',100,1)}${inputField('earth-len','Electrode length L','m',3,0.5,0.5)}</div><div class="form-row-calc">${inputField('earth-dia','Diameter d','m',0.025,0.001,0.01)}${inputField('earth-n','No. of electrodes','—',1,1,1,50)}</div>`,'calcEarthing()')}

    ${calcCard('pfc','📊','Power Factor Correction',std==='IS'?'IS 13585':std==='NEC'?'IEEE 18':'IEC 60831',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">Q_c = P × (tan φ₁ − tan φ₂) [kVAr]</div>`,`<div class="form-row-calc">${inputField('pfc-kw','Active load P','kW',500)}${inputField('pfc-pf-old','Existing PF','—',0.75,0.01,0.3,0.99)}</div><div class="form-row-calc">${inputField('pfc-pf-target','Target PF','—',0.95,0.01,0.85,1.0)}</div>`,'calcPFCorrection()')}

    ${calcCard('cf','🔧','Conduit Fill',std==='IS'?'IS 9537':std==='NEC'?'NEC Ch.9 Table 1':'IEC 61386',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">Fill% = Σ(π×OD²/4) / (π×ID²/4) × 100 &nbsp;|&nbsp; Limit: 1 cable 53%, 2 cables 31%, 3+ 40%</div>`,`<div class="form-row-calc">${inputField('cf-id','Conduit internal dia','mm',32,1,10)}</div><div class="form-row-calc">${inputField('cf-n1','Group 1 count','',3,1,0)}${inputField('cf-d1','Group 1 OD','mm',18,0.5,1)}</div><div class="form-row-calc">${inputField('cf-n2','Group 2 count','',2,1,0)}${inputField('cf-d2','Group 2 OD','mm',15,0.5,1)}</div><div class="form-row-calc">${inputField('cf-n3','Group 3 count','',0,1,0)}${inputField('cf-d3','Group 3 OD','mm',12,0.5,1)}</div>`,'calcConduitFill()')}

    <div class="slabel">Level 3 — Equipment Sizing</div>

    ${calcCard('tx','🔌','Transformer Sizing',std==='IS'?'IS 2026':std==='NEC'?'NEC Art.450':'IEC 60076-1',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">T(kVA) = MD × GF / LF &nbsp;|&nbsp; Isc = FLC / Z%</div>`,`<div class="form-row-calc">${inputField('tx-md','Maximum Demand','kVA',420)}${inputField('tx-gf','Growth factor GF','—',1.20,0.01,1,2)}</div><div class="form-row-calc">${inputField('tx-lf','Loading factor LF','—',0.78,0.01,0.5,1)}${inputField('tx-z','Impedance Z%','%',5.0,0.5,1,10)}</div>`,'calcTransformer()')}

    ${calcCard('dg','🔋','DG Set Sizing',std==='IS'?'IS 10000 (Class 10)':std==='NEC'?'NFPA 110':'IEC 60034-22',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">G(kVA) = (EssKW/PF + Motor_start) / (alt_df × temp_df) × Spare</div>`,`<div class="form-row-calc">${inputField('dg-kw','Essential load','kW',280)}${inputField('dg-pf','Power factor','—',0.85,0.01,0.7,1)}</div><div class="form-row-calc">${inputField('dg-mkw','Largest motor','kW',22)}${selectField('dg-meth','Start method','',{dol:'DOL',sd:'Star-delta',ss:'Soft starter'})}</div><div class="form-row-calc">${inputField('dg-alt','Site altitude','m',500,100,0)}${inputField('dg-temp','Ambient temp','°C',40,1,10,60)}</div><div class="form-row-calc">${inputField('dg-spare','Spare factor','—',1.20,0.05,1,2)}</div>`,'calcDG()')}

    ${calcCard('lit','💡','Lighting Design — Lumen Method',std==='IS'?'NBC 2016 / ECBC':std==='NEC'?'ASHRAE 90.1':'EN 12464-1',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">N = (E × A) / (F × UF × MF) &nbsp;|&nbsp; k = (L × W) / [Hm × (L + W)]</div>`,`<div class="form-row-calc">${inputField('lit-l','Room length L','m',10)}${inputField('lit-w','Room width W','m',8)}</div><div class="form-row-calc">${inputField('lit-hc','Ceiling height','m',3.0,0.1)}${inputField('lit-hw','Working plane height','m',0.8,0.1)}</div><div class="form-row-calc">${inputField('lit-lux','Required illuminance E','lux',500,50)}${inputField('lit-lm','Fixture lumens F','lm',4000,100)}</div><div class="form-row-calc">${inputField('lit-w2','Fixture wattage','W',36,1)}${inputField('lit-uf','Utilisation factor UF','—',0.65,0.01,0.3,1)}</div><div class="form-row-calc">${inputField('lit-mf','Maintenance factor MF','—',0.80,0.01,0.5,1)}</div>`,'calcLighting()')}

    ${calcCard('mot','⚙️','Motor FLC & Starting',std==='IS'?'IS 325 / IS 13947-4':std==='NEC'?'NEC Art.430':'IEC 60034 / IEC 60947-4',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">FLC = P / (√3 × V × PF × η) &nbsp;|&nbsp; Star-delta Istart = DOL/3</div>`,`<div class="form-row-calc">${inputField('mot-kw','Motor power','kW',37)}${inputField('mot-v','Voltage','V',415)}</div><div class="form-row-calc">${inputField('mot-pf','Power factor','—',0.86,0.01,0.5,1)}${inputField('mot-eff','Efficiency η','—',0.93,0.01,0.5,1)}</div><div class="form-row-calc">${selectField('mot-method','Starting method','',{dol:'DOL',sd:'Star-Delta',ss:'Soft Starter',vfd:'VFD'})}${inputField('mot-inrush','DOL inrush factor','× FLC',6.5,0.5,3,10)}</div>`,'calcMotor()')}

    ${calcCard('ev','🚗','EV Charging Demand',std==='IS'?'IS 17017':std==='NEC'?'NEC Art.625':'IEC 61851',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">MD(kVA) = Σ(charger kW × DF) / PF</div>`,`<div class="form-row-calc">${inputField('ev-n2','Level 2 chargers (qty)','',20,1,0)}${inputField('ev-kw2','Level 2 kW each','kW',7.4,0.5)}</div><div class="form-row-calc">${inputField('ev-ndcfc','DC Fast Chargers (qty)','',4,1,0)}${inputField('ev-kwdcfc','DCFC kW each','kW',50,10)}</div><div class="form-row-calc">${inputField('ev-df2','Level 2 DF','—',0.45,0.05,0,1)}${inputField('ev-dfdcfc','DCFC DF','—',0.80,0.05,0,1)}</div><div class="form-row-calc">${inputField('ev-n1','Level 1 chargers','',0,1,0)}${inputField('ev-pf','Power factor','—',0.97,0.01)}</div>`,'calcEV()')}

    <div class="slabel">Level 4 — Advanced</div>

    ${calcCard('sol','☀️','Solar PV — String Sizing & Yield',std==='IS'?'CEA Regulations 2019':std==='NEC'?'NEC Art.690':'IEC 62548',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">Yield = Parray × PR × PSH × 365 &nbsp;|&nbsp; n_series = Vmpp_max / Vmpp_module</div>`,`<div class="form-row-calc">${inputField('sol-array','Array size','kWp',100)}${inputField('sol-wp','Module wattage','Wp',400)}</div><div class="form-row-calc">${inputField('sol-voc','Module Voc','V',49,0.5)}${inputField('sol-vmpp','Module Vmpp','V',41,0.5)}</div><div class="form-row-calc">${inputField('sol-vdcmax','Inverter DC Vmax','V',900)}${inputField('sol-mpptmin','MPPT Vmin','V',300)}</div><div class="form-row-calc">${inputField('sol-mpptmax','MPPT Vmax','V',800)}${inputField('sol-psh','Peak sun hours','h/day',5.2,0.1)}</div><div class="form-row-calc">${inputField('sol-pr','Performance ratio','—',0.80,0.01)}${inputField('sol-tariff','Tariff','₹/kWh',8,0.5)}</div>`,'calcSolar()')}

    ${calcCard('bus','🔩','Busbar Sizing',std==='IS'?'IS 8084':std==='NEC'?'IEEE 605':'IEC 60865 / IEC 61439',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">A = I/J &nbsp;|&nbsp; SC thermal: S ≥ Isc√t/k &nbsp;|&nbsp; Force: F = 2×10⁻⁷ × Ip² × L/d</div>`,`<div class="form-row-calc">${inputField('bus-current','Continuous current','A',1000)}${selectField('bus-material','Material','',{cu:'Copper',al:'Aluminium'})}</div><div class="form-row-calc">${selectField('bus-mounting','Installation','',{enclosed:'Enclosed (panel)',freeair:'Free air'})}${inputField('bus-isc','Fault current Isc','kA',25,1)}</div><div class="form-row-calc">${inputField('bus-t','Fault clearing time','s',0.3,0.05,0.02)}${inputField('bus-spacing','Conductor spacing','mm',50,5)}</div><div class="form-row-calc">${inputField('bus-span','Support span','mm',500,50)}</div>`,'calcBusbar()')}

    ${calcCard('ups','🔋','UPS & Battery Sizing',std==='IS'?'IEC 62040-1':std==='NEC'?'IEEE 485':'IEC 62040-3',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">UPS kVA = Load_kW / PF × Future &nbsp;|&nbsp; Ah = (kW × 1000 × hours) / Vdc</div>`,`<div class="form-row-calc">${inputField('ups-kw','Load','kW',50)}${inputField('ups-pf','Power factor','—',0.9,0.01)}</div><div class="form-row-calc">${inputField('ups-eff','UPS Efficiency','—',0.94,0.01)}${inputField('ups-future','Future growth','—',1.25,0.05)}</div><div class="form-row-calc">${inputField('ups-vdc','DC Bus Voltage','V',384,12)}${inputField('ups-min','Backup time','min',30,5)}</div>`,'calcUPS()')}

    ${calcCard('bess','⚡','Battery Storage Sizing',std==='IS'?'IEC 62619':std==='NEC'?'NFPA 855':'IEC 62619',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">Capacity = req_kWh / DoD / Eff</div>`,`<div class="form-row-calc">${inputField('bess-kwh','Required Energy','kWh',100)}${inputField('bess-dod','Depth of Discharge','%',80)}</div><div class="form-row-calc">${inputField('bess-eff','Efficiency','%',95)}${inputField('bess-v','System Voltage','V',48)}</div>`,'calcBatteryStorage()')}

    ${calcCard('isc','💥','Short Circuit Current (Isc)',std==='IS'?'IS 13234':std==='NEC'?'IEEE 141':'IEC 60909',`<div style="font-family:var(--font-mono);font-size:.78rem;color:var(--accent2);line-height:1.8;background:var(--bg3);border-left:3px solid var(--accent);padding:10px 14px;border-radius:4px;margin-bottom:14px">Isc = FLC / (Z%) + Motor_Contribution</div>`,`<div class="form-row-calc">${inputField('isc-kva','Transformer','kVA',1000)}${inputField('isc-v','LV Voltage','V',415)}</div><div class="form-row-calc">${inputField('isc-z','Impedance Z','%',5.0,0.5)}${inputField('isc-mkva','Connected Motors','kVA',200)}</div>`,'calcShortCircuit()')}

  `;

  const el = document.getElementById('calc-content');
  if (el) el.innerHTML = calcPageHTML;

  if (!document.getElementById('calc-style')) {
    const s = document.createElement('style');
    s.id = 'calc-style';
    s.textContent = `.calc-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);margin-bottom:16px;overflow:hidden}.calc-card-head{padding:13px 18px;background:var(--bg3);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px}.calc-card-title{font-family:'Rajdhani',sans-serif;font-size:1rem;font-weight:600;color:var(--text);letter-spacing:.03em}.calc-card-body{padding:18px}.calc-std-tag{font-family:var(--font-mono);font-size:.65rem;padding:3px 8px;border-radius:3px;background:rgba(245,166,35,.08);border:1px solid rgba(245,166,35,.25);color:var(--accent);margin-left:auto;white-space:nowrap}.form-row-calc{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:10px}.form-group-calc{display:flex;flex-direction:column;gap:5px}.form-label-calc{font-size:.77rem;color:var(--text2);font-family:var(--font-mono);display:flex;align-items:center;gap:6px}.form-unit-calc{font-size:.68rem;color:var(--text3)}.form-input-calc,.form-select-calc{background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);padding:8px 11px;font-family:var(--font-mono);font-size:.85rem;color:var(--text);outline:none;transition:border-color var(--trans);width:100%}.form-input-calc:focus,.form-select-calc:focus{border-color:var(--accent);background:var(--bg2)}.calc-btn{font-family:'Rajdhani',sans-serif;font-size:.95rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:9px 24px;background:var(--accent);color:#000;border:none;border-radius:var(--radius);cursor:pointer;transition:all var(--trans);margin-top:6px}.calc-btn:hover{background:var(--accent2);transform:translateY(-1px)}.calc-result{display:none;background:var(--bg3);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:var(--radius);padding:16px 18px;margin-top:14px}@media(max-width:600px){.form-row-calc{grid-template-columns:1fr}}`;
    document.head.appendChild(s);
  }
}

// expose
window.calcLoad          = calcLoad;
window.calcCable         = calcCable;
window.calcVD            = calcVD;
window.calcEarthing      = calcEarthing;
window.calcPFCorrection  = calcPFCorrection;
window.calcConduitFill   = calcConduitFill;
window.calcSolar         = calcSolar;
window.calcBusbar        = calcBusbar;
window.calcMotor         = calcMotor;
window.calcEV            = calcEV;
window.calcLighting      = calcLighting;
window.calcTransformer   = calcTransformer;
window.calcDG            = calcDG;

window.calcUPS           = calcUPS;
window.calcBatteryStorage= calcBatteryStorage;
window.calcShortCircuit  = calcShortCircuit;
window.renderCalcPageFull = renderCalcPageFull;

