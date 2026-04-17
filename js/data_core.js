/* ═══════════════════════════════════════════
   ElecPro — data_core.js
   Standards, Sectors, Search Intent Map
   ═══════════════════════════════════════════ */

const STANDARDS = {
  IS: {
    code: 'IS', name: 'IS / NBC / CEA', country: 'India',
    terms: { earth: 'Earthing', panel: 'Distribution Board (DB)', ground: 'Earth', switchboard: 'Main Distribution Board (MDB)' },
    symbols: 'IEC',
    refs: { cable:'IS 3961 / IS 694', load:'NBC 2016 Part 8', protection:'IS 13947', earthing:'IS 3043', lighting:'NBC 2016 / SP 72', dg:'IS 10000', transformer:'IS 2026', motor:'IS 325 / IS 12615', solar:'CEA Regulations 2019', shortcircuit:'IS 13234', lightning:'IS/IEC 62305', busbar:'IS 5082', ev:'IS 17017', conduit:'IS 1554' }
  },
  NEC: {
    code: 'NEC', name: 'NEC / NFPA / IEEE', country: 'USA',
    terms: { earth: 'Grounding', panel: 'Panelboard', ground: 'Ground', switchboard: 'Switchboard' },
    symbols: 'ANSI',
    refs: { cable:'NEC Art. 310', load:'NEC Art. 220', protection:'NEC Art. 240', earthing:'NEC Art. 250', lighting:'ASHRAE 90.1', dg:'NFPA 110', transformer:'NEC Art. 450', motor:'NEC Art. 430', solar:'NEC Art. 690', shortcircuit:'IEEE 141 / IEEE 1584', lightning:'NFPA 780', busbar:'NEC Art. 366', ev:'NEC Art. 625', conduit:'NEC Ch. 9' }
  },
  IEC: {
    code: 'IEC', name: 'IEC (International)', country: 'International',
    terms: { earth: 'Earthing', panel: 'Distribution Board', ground: 'Earth', switchboard: 'Main Switchboard' },
    symbols: 'IEC',
    refs: { cable:'IEC 60364-5-52', load:'IEC 60364-1', protection:'IEC 60898', earthing:'IEC 60364-5-54', lighting:'EN 12464', dg:'IEC 60034', transformer:'IEC 60076', motor:'IEC 60034', solar:'IEC 61730 / IEC 62548', shortcircuit:'IEC 60909', lightning:'IEC 62305', busbar:'IEC 61439', ev:'IEC 61851', conduit:'IEC 61386' }
  }
};

const SECTORS = {
  res: {
    id:'res', name:'Residential', icon:'🏠', color:'var(--res)',
    std:'IS 732 / NEC Art.210–230 / IEC 60364-7',
    topicCount: 10,
    path:['Load Calculation','Cable Sizing','Voltage Drop','Earthing','Circuit Protection','Lighting Design','Panel Schedule','EV Charging','Solar PV','How to Read Codes']
  },
  com: {
    id:'com', name:'Commercial', icon:'🏢', color:'var(--com)',
    std:'NBC 2016 / NEC Art.220 / IEC 60364',
    topicCount: 14,
    path:['Load Calculation','Max Demand & Tariff','Panel Schedule','Transformer Sizing','DG Sizing','UPS Sizing','Lighting Design','PF Correction','Switchgear & Panels','Lightning Protection','EV Charging','Energy Efficiency']
  },
  dc: {
    id:'dc', name:'Data Centre', icon:'🖥️', color:'var(--dc)',
    std:'TIA-942 / ASHRAE / Uptime Tier / IEC 62040',
    topicCount: 11,
    path:['Load Calculation','UPS Sizing','DG Sizing','Cable Sizing','Busbar Sizing','Switchgear','Short Circuit','DC Redundancy (Tier I–IV)','PF & Harmonics','Energy Monitoring']
  },
  ind: {
    id:'ind', name:'Industrial', icon:'🏭', color:'var(--ind)',
    std:'IS 325 / NEC Art.430 / IEC 60034 / IEEE 1584',
    topicCount: 13,
    path:['Load Calculation','Cable Sizing','Transformer Sizing','Motor Starting','HVAC Loads','Busbar Sizing','Switchgear','Short Circuit','Relay Coordination','Arc Flash','PF Correction','ETAP Intro']
  },
  og: {
    id:'og', name:'Oil & Gas', icon:'🔥', color:'var(--og)',
    std:'IEC 60079 / IS 5572 / NFPA 70 Art.500 / IEEE 1584',
    topicCount: 9,
    path:['Electrical Safety','Hazardous Area Classification','Ex Equipment Selection','Cable Sizing','Earthing','Motor Starting','Relay Coordination','Lightning Protection','Arc Flash']
  },
  hc: {
    id:'hc', name:'Healthcare', icon:'🏥', color:'var(--hc)',
    std:'IS 1646 / NFPA 99 / IEC 60364-7-710 / HTM 06-01',
    topicCount: 9,
    path:['Load Calculation','Essential Power (DG+UPS)','Lighting Design','Earthing (IT system)','Cable Sizing','Circuit Protection','HVAC Loads','CT/PT Basics','Troubleshooting']
  },
  grn: {
    id:'grn', name:'Green Design', icon:'🌿', color:'var(--grn)',
    std:'CEA 2019 / NEC Art.625 & 690 / IEC 61851 / ECBC / LEED',
    topicCount: 6,
    path:['Solar Optimization','Battery Storage','EV Charging','Energy Monitoring','Smart Load Management','Energy Efficiency & Green Buildings']
  }
};

const LEARNING_PATHS = [
  {
    id:'student', icon:'🎓', title:'Student / Fresh Graduate',
    desc:'Start from the very basics. Build a complete foundation from Ohm\'s Law to Advanced systems.',
    startLevel:1, estimatedTime:'6–8 months',
    firstTopic:'ohms-law'
  },
  {
    id:'site', icon:'🔧', title:'Site / Field Engineer',
    desc:'Skip the basics. Focus on practical design tools, protection, and troubleshooting.',
    startLevel:2, estimatedTime:'2–3 months',
    firstTopic:'load-calculation'
  },
  {
    id:'design', icon:'📐', title:'Design / Consulting Engineer',
    desc:'Jump straight into equipment sizing, advanced analysis, and standard-specific calculations.',
    startLevel:3, estimatedTime:'2–4 months',
    firstTopic:'transformer-sizing'
  }
];

const SPECIAL_MODES = [
  { id:'design-thinking', icon:'🧠', title:'Design Thinking', desc:'Solve a complete real-world project step by step', page:'projects' },
  { id:'practice', icon:'⚡', title:'Practice Mode', desc:'Challenge Mode — randomised calculations to test your skills', page:'practice' },
  { id:'mistakes-db', icon:'⚠️', title:'Mistakes Database', desc:'Top 50 mistakes engineers make — searchable', page:'mistakes' },
  { id:'site-reality', icon:'🏗️', title:'Site Reality', desc:'Good vs bad practices with visual comparisons', page:'site-reality' }
];

const INTENT_MAP = [
  // ── Load & Demand ──
  { phrases:['design a house','residential wiring','2bhk','3bhk','home electrical','flat wiring'], sector:'res', topicId:'load-calculation', label:'Design residential electrical system' },
  { phrases:['calculate load','load calculation','maximum demand','total load','connected load','md calculation'], topicId:'load-calculation', label:'Calculate electrical load' },
  { phrases:['demand factor','diversity factor','simultaneity','load diversity'], topicId:'demand-diversity', label:'Understand demand and diversity factors' },
  { phrases:['tariff','electricity bill','energy charge','demand charge','tod tariff','time of day'], topicId:'tariff-billing', label:'Understand electricity tariff structure' },
  // ── Cable & Conduit ──
  { phrases:['cable size','cable sizing','select cable','what size cable','cable for motor','cable ampacity','cable rating'], topicId:'cable-sizing', label:'Size a cable for my load' },
  { phrases:['voltage drop','vd calculation','cable length limit','vd percentage','volt drop'], topicId:'voltage-drop', label:'Calculate voltage drop' },
  { phrases:['conduit size','conduit fill','cable in conduit','raceway','trunking','how many cables'], topicId:'conduit-fill', label:'Calculate conduit fill percentage' },
  { phrases:['cable tray','tray sizing','cable tray fill','ladder tray','perforated tray'], topicId:'cable-tray', label:'Size a cable tray system' },
  { phrases:['cable drum','pull tension','cable pulling','sidewall bearing','cable installation'], topicId:'cable-pull-tension', label:'Calculate cable pull tension' },
  // ── Earthing & Protection ──
  { phrases:['earthing','grounding','earth electrode','earth resistance','earth pit','earth rod'], topicId:'earthing', label:'Design earthing system' },
  { phrases:['grounding system','tn-s','tn-c-s','tt system','it system','earthing type','neutral earthing'], topicId:'grounding-systems', label:'Understand grounding system types' },
  { phrases:['circuit protection','mcb','mccb','acb','breaker selection','overcurrent','overload'], topicId:'protection', label:'Select circuit protection devices' },
  { phrases:['breaker coordination','selectivity','discrimination','cascade','backup protection','breaker sizing'], topicId:'breaker-selection', label:'Design breaker coordination' },
  { phrases:['rcd','rccb','elcb','residual current','earth leakage','30ma','ground fault'], topicId:'protection', label:'Select RCD/RCCB protection' },
  { phrases:['spd','surge protection','surge arrester','lightning arrester','transient voltage','type 1 spd','type 2 spd'], topicId:'spd-selection', label:'Select surge protection device' },
  // ── Equipment Sizing ──
  { phrases:['size transformer','transformer for office','transformer kva','distribution transformer','transformer sizing','select transformer'], topicId:'transformer-sizing', label:'Size a distribution transformer' },
  { phrases:['dg sizing','generator sizing','diesel generator','standby generator','genset','backup power','dg set'], topicId:'dg-sizing', label:'Size a diesel generator' },
  { phrases:['ups sizing','ups battery','ups for server','uninterruptible','battery backup','ups capacity'], topicId:'ups-sizing', label:'Size a UPS system' },
  { phrases:['battery storage','bess','energy storage','lithium ion','li-ion battery','peak shaving battery'], topicId:'battery-storage', label:'Design battery energy storage' },
  { phrases:['capacitor bank','apfc','automatic power factor','capacitor sizing','reactive compensation','detuned filter'], topicId:'capacitor-bank', label:'Design a capacitor bank' },
  // ── Lighting ──
  { phrases:['lighting design','lumen method','how many fixtures','lux calculation','illumination','light fitting','led layout'], topicId:'lighting', label:'Design lighting layout' },
  { phrases:['lpd','lighting power density','energy efficient lighting','led retrofit','dialux'], topicId:'lighting', label:'Calculate lighting power density' },
  // ── Motor & VFD ──
  { phrases:['motor','motor starting','dol','star delta','vfd','soft starter','motor protection','motor sizing'], topicId:'motor-starting', label:'Select motor starting method' },
  { phrases:['vfd selection','variable frequency drive','inverter','motor speed control','affinity law'], topicId:'motor-starting', label:'Size a VFD for motor' },
  // ── HVAC ──
  { phrases:['hvac load','hvac electrical','chiller','ahu','air conditioning','cooling load','tr calculation','hvac sizing'], topicId:'hvac-loads', label:'Calculate HVAC electrical load' },
  // ── Switchgear & Panels ──
  { phrases:['switchgear','mdb','panel design','panel schedule','distribution board','smdb','db design'], topicId:'switchgear-panels', label:'Design switchgear and panels' },
  { phrases:['busbar','busbar sizing','bus duct','busbar trunking','rising main'], topicId:'busbar-sizing', label:'Size a busbar system' },
  { phrases:['ct','pt','current transformer','potential transformer','instrument transformer','metering ct','ct ratio'], topicId:'ct-pt-substation', label:'Select CT/PT for metering' },
  // ── Power Quality ──
  { phrases:['power factor','pf correction','capacitor bank','kvar','leading pf','lagging pf','pf penalty'], topicId:'pf-correction', label:'Design power factor correction' },
  { phrases:['harmonics','thd','total harmonic distortion','harmonic filter','non-linear load','ieee 519'], topicId:'power-quality', label:'Analyze power quality and harmonics' },
  // ── Short Circuit & Protection Coordination ──
  { phrases:['short circuit','fault current','isc','fault level','breaking capacity','making capacity'], topicId:'short-circuit', label:'Calculate short circuit current' },
  { phrases:['relay coordination','overcurrent relay','idmt','tcc curve','relay setting','protection coordination'], topicId:'relay-coordination', label:'Design relay coordination' },
  { phrases:['coordination study','tcc','time current curve','selectivity study','grading margin'], topicId:'coordination-study', label:'Perform coordination study' },
  { phrases:['arc flash','incident energy','flash hazard','ppe category','nfpa 70e','ieee 1584','arc flash label'], topicId:'arc-flash', label:'Perform arc flash analysis' },
  // ── Sector-Specific ──
  { phrases:['data centre','data center','server room','tier iii','tier 3','tier 4','uptime institute'], sector:'dc', topicId:'ups-sizing', label:'Design Data Centre power system' },
  { phrases:['hospital','healthcare','essential power','medical it','operating theatre','ot electrical','isolated power'], sector:'hc', topicId:'ups-sizing', label:'Design hospital essential power' },
  { phrases:['hazardous area','zone 1','zone 2','atex','oil gas','ex equipment','flameproof','intrinsic safety'], sector:'og', topicId:'hazardous-area', label:'Classify hazardous area for O&G' },
  { phrases:['dc redundancy','tier topology','2n redundancy','n+1','sts','static transfer switch'], topicId:'dc-redundancy', label:'Design DC power redundancy' },
  // ── Renewables & Green ──
  { phrases:['solar','pv system','rooftop solar','solar panel','net metering','solar inverter','string sizing'], topicId:'solar-pv', label:'Size a solar PV system' },
  { phrases:['ev charging','electric vehicle','charger','evse','level 2 charger','dc fast','ocpp'], topicId:'ev-charging', label:'Size EV charging infrastructure' },
  { phrases:['green building','ecbc','leed','igbc','energy efficiency','net zero','green certification'], topicId:'energy-efficiency', label:'Design green building electrical' },
  { phrases:['energy monitoring','sub metering','energy audit','pue','eui','smart meter','energy dashboard'], topicId:'energy-monitoring', label:'Design energy monitoring system' },
  { phrases:['smart load','demand response','load shedding','bems','building automation','openADR','iot'], topicId:'smart-load-mgmt', label:'Design smart load management' },
  // ── Lightning ──
  { phrases:['lightning protection','lightning rod','rolling sphere','lps','lightning conductor','surge protection'], topicId:'lightning-protection', label:'Design lightning protection' },
  // ── Fire Alarm ──
  { phrases:['fire alarm','smoke detector','fire detection','fire alarm system','nfpa 72','is 2189','manual call point'], topicId:'fire-alarm', label:'Design fire alarm electrical system' },
  // ── Simulation & Codes ──
  { phrases:['etap','simulation','power system study','skm','digsilent','load flow','relay setting software'], topicId:'etap-simulation', label:'Use ETAP for power system studies' },
  { phrases:['how to read code','nec structure','is standard','iec standard','code navigation','code book'], topicId:'how-to-read-codes', label:'Learn how to read electrical codes' },
  // ── Troubleshooting ──
  { phrases:['troubleshooting','fault diagnosis','motor trip','breaker trip','power problem','no power','flicker','phase imbalance'], topicId:'troubleshooting', label:'Troubleshoot electrical faults' },
  { phrases:['insulation test','megger','ir test','polarization index','cable fault','earth fault location'], topicId:'troubleshooting', label:'Perform insulation testing' },
  // ── Fundamentals ──
  { phrases:['ohms law','voltage current resistance','basic electrical','v=ir','electrical basics'], topicId:'ohms-law', label:'Learn Ohm\'s Law fundamentals' },
  { phrases:['three phase','3 phase','single phase','star connection','delta connection','phase voltage','line voltage'], topicId:'three-phase', label:'Understand three-phase power' },
  { phrases:['power factor','kw kva kvar','real power','apparent power','reactive power','power triangle'], topicId:'power-factor', label:'Understand power factor' },
  { phrases:['electrical safety','loto','lockout tagout','ppe','arc flash safety','working clearance','touch voltage'], topicId:'electrical-safety', label:'Learn electrical safety practices' },
  { phrases:['per unit','pu system','base value','fault calculation method','percentage impedance'], topicId:'per-unit', label:'Learn per-unit system' },
  { phrases:['sld','single line diagram','one line diagram','schematic','drawing symbols'], topicId:'sld-reading', label:'Read single line diagrams' },
];

window.STANDARDS    = STANDARDS;
window.SECTORS      = SECTORS;
window.LEARNING_PATHS = LEARNING_PATHS;
window.SPECIAL_MODES  = SPECIAL_MODES;
window.INTENT_MAP   = INTENT_MAP;
