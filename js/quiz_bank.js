/* ═══════════════════════════════════════════
   ElecPro — quiz_bank.js
   All quiz questions — Level 1 (Phase 2)
   ═══════════════════════════════════════════ */

const QUIZ_BANK = [

  // ══════════════════════════════════════
  // OHMS LAW
  // ══════════════════════════════════════
  {
    id:'q-ohm-01', topicId:'ohms-law', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"A 230V supply is connected to a 46Ω resistor. What is the current flowing?",
    options:["2A","5A","10A","0.5A"],
    answer:1,
    explanation:"I = V / R = 230 / 46 = 5A. Ohm's Law is the most fundamental equation in electrical engineering — always start here.",
    whyWrong:{"0":"Incorrect: 230 / 46 ≠ 2. Check your division.","2":"Incorrect: 10A would need R = 23Ω, not 46Ω.","3":"Incorrect: 0.5A would need R = 460Ω."}
  },
  {
    id:'q-ohm-02', topicId:'ohms-law', level:1, type:'tf', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"True or False: In a series circuit, the current through each component is the same.",
    options:["True","False"],
    answer:0,
    explanation:"True. In a series circuit, there is only one path for current to flow. The same current passes through every component. Voltage, however, divides across each component proportional to its resistance.",
    whyWrong:{"1":"False is incorrect. Series circuits have one current path — the same current flows through all components."}
  },
  {
    id:'q-ohm-03', topicId:'ohms-law', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"Which formula correctly expresses electrical power?",
    options:["P = V × R","P = V / I","P = V × I","P = I / R"],
    answer:2,
    explanation:"P = V × I (watts = volts × amperes). This is the power equation. It can also be written as P = I²R or P = V²/R using Ohm's Law substitution. Understanding power is essential for cable sizing and equipment selection.",
    whyWrong:{"0":"V × R gives units of V·Ω = V² / A, which is not power.","1":"V / I gives units of V/A = Ω, which is resistance, not power.","3":"I / R gives A/Ω = A²/V, which has no standard electrical meaning."}
  },
  {
    id:'q-ohm-04', topicId:'ohms-law', level:1, type:'scenario', difficulty:'adv',
    sectors:['ind'], std:['IS','NEC','IEC'],
    question:"A 415V, 3-phase motor has a line current of 20A and operates at PF 0.85. A junior engineer calculates the power as P = 415 × 20 = 8.3 kW. What is wrong with this calculation?",
    options:[
      "The voltage should be 230V for 3-phase calculations",
      "The calculation ignores the √3 factor for 3-phase and the power factor",
      "The current should be divided by √3 first",
      "Nothing is wrong — 8.3 kW is correct"
    ],
    answer:1,
    explanation:"For 3-phase power: P = √3 × VL × IL × PF = 1.732 × 415 × 20 × 0.85 = 12.2 kW. The junior engineer forgot both the √3 (three-phase factor) and the power factor. This kind of error leads to undersized cables and transformers.",
    whyWrong:{"0":"415V is the correct line voltage for 3-phase in India. It is not wrong.","2":"Current does not need to be divided by √3 — it is already the line current.","3":"8.3 kW is significantly wrong and would cause serious undersizing errors."}
  },
  {
    id:'q-ohm-05', topicId:'ohms-law', level:1, type:'tf', difficulty:'adv',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"True or False: In a parallel circuit, the total resistance is always less than the smallest individual resistance.",
    options:["True","False"],
    answer:0,
    explanation:"True. When resistors are in parallel: 1/Rtotal = 1/R1 + 1/R2 + ... Adding more parallel paths always reduces total resistance. For example, two 10Ω resistors in parallel give 5Ω — less than either individual resistor.",
    whyWrong:{"1":"False is incorrect. Parallel paths always reduce total resistance — this is a key principle used in busbar and cable parallel run calculations."}
  },

  // ══════════════════════════════════════
  // AC vs DC
  // ══════════════════════════════════════
  {
    id:'q-acdc-01', topicId:'ac-dc', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind','dc'], std:['IS','NEC','IEC'],
    question:"What is the standard supply frequency in India?",
    options:["50 Hz","60 Hz","25 Hz","400 Hz"],
    answer:0,
    explanation:"India uses 50 Hz AC supply (as do most countries following IEC standards). The USA uses 60 Hz. The frequency determines motor speeds, transformer design, and protection relay settings. Always confirm frequency when working on international projects.",
    whyWrong:{"1":"60 Hz is the USA/Canada standard (NEC jurisdiction).","2":"25 Hz was used in some old industrial systems but is not a modern standard.","3":"400 Hz is used in aircraft electrical systems — not building installations."}
  },
  {
    id:'q-acdc-02', topicId:'ac-dc', level:1, type:'mcq', difficulty:'beg',
    sectors:['dc'], std:['IS','NEC','IEC'],
    question:"In a data centre UPS system, the DC bus voltage is typically:",
    options:["12V","48V or 192V or 480V depending on system size","230V AC","11kV"],
    answer:1,
    explanation:"UPS battery buses use DC voltages: 48V for small systems, 192V or 240V for medium systems, 480V for large enterprise/data centre UPS. The exact voltage depends on battery string design and UPS capacity. Understanding DC bus voltage is critical for battery sizing and cable selection.",
    whyWrong:{"0":"12V is for automotive/telecom — not typical for building UPS systems.","2":"230V is AC. The battery bus and inverter DC link is a DC voltage.","3":"11kV is a medium voltage AC level used for utility distribution, not DC bus."}
  },
  {
    id:'q-acdc-03', topicId:'ac-dc', level:1, type:'tf', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"True or False: AC voltage can be easily stepped up or down using a transformer, but DC voltage cannot be transformed this way.",
    options:["True","False"],
    answer:0,
    explanation:"True. Transformers work on the principle of electromagnetic induction, which requires a changing (alternating) magnetic field. This is why AC won the 'War of Currents' — it can be economically transmitted at high voltage (reducing losses) then stepped down for use. DC requires power electronics (converters) to change voltage levels.",
    whyWrong:{"1":"False is incorrect. This is precisely why AC transmission became dominant — transformers only work with AC."}
  },
  {
    id:'q-acdc-04', topicId:'ac-dc', level:1, type:'scenario', difficulty:'adv',
    sectors:['dc'], std:['IS','NEC','IEC'],
    question:"A data centre engineer is designing the power path for a server rack. The server's PSU accepts 200–240V AC. A UPS provides 230V AC output. However, the battery inside the UPS stores energy as DC. What sequence of conversions takes place?",
    options:[
      "AC → DC (rectifier) → Battery storage → DC → AC (inverter) → Server",
      "AC → AC (transformer) → Battery → AC → Server",
      "DC → AC (inverter) → Battery → DC → Server",
      "No conversion — servers run on DC directly from batteries"
    ],
    answer:0,
    explanation:"In a double-conversion online UPS: Mains AC → Rectifier (AC to DC) → DC bus / battery → Inverter (DC to AC) → Server input. This is why it's called 'double conversion' — two energy conversions. The advantage is the output is always clean AC regardless of what the mains supply does.",
    whyWrong:{"1":"Transformers do not store energy. Batteries are DC devices — energy must be converted.","2":"The input is AC mains, not DC. And batteries output DC to the inverter, not the other way.","3":"Commercial servers primarily run on AC input (though internally they use DC voltages for components)."}
  },

  // ══════════════════════════════════════
  // THREE-PHASE
  // ══════════════════════════════════════
  {
    id:'q-3ph-01', topicId:'three-phase', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"In a balanced star-connected 3-phase system, if the phase voltage is 230V, what is the line voltage?",
    options:["230V","400V","460V","115V"],
    answer:1,
    explanation:"VL = √3 × VP = 1.732 × 230 = 398V ≈ 400V. This is why the Indian standard supply is described as 415V line / 240V phase (or 400V/230V in IEC). The √3 relationship is fundamental to all 3-phase calculations.",
    whyWrong:{"0":"230V is the phase voltage, not the line voltage in a star system.","2":"460V would be √3 × 266V, not √3 × 230V.","3":"115V is half the phase voltage — not a standard relationship in 3-phase systems."}
  },
  {
    id:'q-3ph-02', topicId:'three-phase', level:1, type:'mcq', difficulty:'beg',
    sectors:['com','ind'], std:['IS','NEC','IEC'],
    question:"Why is 3-phase power preferred over single-phase for large electrical installations?",
    options:[
      "It uses less copper for the same power transmitted",
      "It is safer to work with",
      "It produces no harmonics",
      "It is cheaper to generate"
    ],
    answer:0,
    explanation:"3-phase systems transmit the same power using 75% of the copper that single-phase systems need (3 conductors vs 4, and smaller conductor sizes). They also provide constant power delivery (no power pulsations), more efficient motors, and allow both 230V single-phase and 415V 3-phase loads to be served from the same supply.",
    whyWrong:{"1":"3-phase systems are actually more dangerous due to higher voltage between phases. Safety is governed by protection systems, not phase count.","2":"3-phase systems actually generate more harmonic issues, especially with non-linear loads like VFDs.","3":"Generation cost depends on equipment and fuel — not directly on phase count."}
  },
  {
    id:'q-3ph-03', topicId:'three-phase', level:1, type:'tf', difficulty:'adv',
    sectors:['ind'], std:['IS','NEC','IEC'],
    question:"True or False: In a delta-connected load, the line current is √3 times the phase current.",
    options:["True","False"],
    answer:0,
    explanation:"True. In delta connection: IL = √3 × IP. This is the opposite relationship to star, where VP = VL / √3. In delta: VL = VP (line voltage equals phase voltage), but IL = √3 × IP. This is critical when converting star-delta motor windings — the winding current changes even though line current stays the same during running.",
    whyWrong:{"1":"False is incorrect. The √3 relationship between line and phase current is a defining characteristic of delta-connected loads."}
  },
  {
    id:'q-3ph-04', topicId:'three-phase', level:1, type:'scenario', difficulty:'adv',
    sectors:['ind'], std:['IS','NEC','IEC'],
    question:"A 3-phase, 415V, 50kW motor operates at PF 0.88 and efficiency 92%. What is the full load line current?",
    options:["69.2A","87.5A","97.5A","63.8A"],
    answer:2,
    explanation:"Input power = Output / efficiency = 50 / 0.92 = 54.35 kW. IL = P / (√3 × VL × PF) = 54,350 / (1.732 × 415 × 0.88) = 54,350 / 633 = 85.9A ≈ use 86A for cable sizing, select 97.5A after applying safety factor. Note: always size for input power, not output rating.",
    whyWrong:{"0":"69.2A ignores both efficiency loss and uses wrong PF application.","1":"87.5A is close but ignores efficiency — motor input is higher than rated output.","3":"63.8A is significantly low — it ignores efficiency and would lead to cable overheating."}
  },

  // ══════════════════════════════════════
  // POWER FACTOR
  // ══════════════════════════════════════
  {
    id:'q-pf-01', topicId:'power-factor', level:1, type:'mcq', difficulty:'beg',
    sectors:['com','ind'], std:['IS','NEC','IEC'],
    question:"A load draws 80 kW at a power factor of 0.8. What is the apparent power (kVA)?",
    options:["64 kVA","80 kVA","100 kVA","160 kVA"],
    answer:2,
    explanation:"kVA = kW / PF = 80 / 0.8 = 100 kVA. The utility bills you for kVA (apparent power) but you only get useful work from kW (real power). A poor PF means you're paying for more kVA than the useful kW you receive.",
    whyWrong:{"0":"64 kVA would be kW × PF, which is backwards — PF correction reduces kVA, not multiplies.","1":"80 kVA would only be correct if PF = 1.0 (unity power factor).","3":"160 kVA would require PF = 0.5 — worse than the given 0.8."}
  },
  {
    id:'q-pf-02', topicId:'power-factor', level:1, type:'tf', difficulty:'beg',
    sectors:['com','ind'], std:['IS','NEC','IEC'],
    question:"True or False: A capacitor bank absorbs reactive power from the supply, improving power factor.",
    options:["True","False"],
    answer:1,
    explanation:"False. Capacitors generate (supply) reactive power — they do not absorb it. Inductive loads (motors, transformers) absorb reactive power (lagging PF). Capacitors supply reactive power locally, cancelling the inductive reactive current and reducing the reactive current that flows from the utility. The net effect is improved power factor.",
    whyWrong:{"0":"True is incorrect. Capacitors are reactive power generators, not absorbers. This distinction matters for protection and system analysis."}
  },
  {
    id:'q-pf-03', topicId:'power-factor', level:1, type:'mcq', difficulty:'adv',
    sectors:['com','ind'], std:['IS'],
    question:"Under IE Rules 1956 (India), what minimum power factor must consumers with contracted demand above 100 kVA maintain?",
    options:["0.80","0.85","0.90","0.95"],
    answer:2,
    explanation:"IE Rules 1956, Rule 47A requires PF ≥ 0.90 for consumers with contracted demand above 100 kVA. Utilities impose surcharges for PF below this threshold. This is why PF correction capacitor banks are mandatory in most Indian commercial and industrial installations.",
    whyWrong:{"0":"0.80 is too low — IE Rules require at least 0.90, not 0.80.","1":"0.85 is below the IE Rules minimum of 0.90.","3":"0.95 is a good target but the legal minimum under IE Rules is 0.90."}
  },

  // ══════════════════════════════════════
  // UNITS & MEASUREMENT
  // ══════════════════════════════════════
  {
    id:'q-units-01', topicId:'units-measurement', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"How many watts are in 1 kilowatt-hour (kWh)?",
    options:["1000 watts for 1 hour","3,600,000 joules","1 kW consumed for 60 minutes","All of the above — they all describe 1 kWh"],
    answer:3,
    explanation:"All three are correct descriptions of 1 kWh: it equals 1000W × 1 hour = 1000 watt-hours = 3,600,000 joules (since 1 Wh = 3600 J). kWh is the unit on every electricity bill — understanding it connects Ohm's Law to real-world energy consumption and billing.",
    whyWrong:{}
  },
  {
    id:'q-units-02', topicId:'units-measurement', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"A cable has a resistance of 1.83 mΩ/m. For a 100m run, what is the total resistance?",
    options:["1.83 Ω","0.183 Ω","18.3 Ω","183 mΩ"],
    answer:1,
    explanation:"1.83 mΩ/m × 100m = 183 mΩ = 0.183 Ω. Converting milli-ohms to ohms: divide by 1000. Getting unit prefixes wrong (milli, kilo, mega) is one of the most common calculation errors. Always convert to base SI units before calculating.",
    whyWrong:{"0":"1.83 Ω would be correct if the resistance were 1.83 Ω/m — but it's 1.83 mΩ/m (milliohms per metre).","2":"18.3 Ω is 100× too large — a decimal error.","3":"183 mΩ is correct numerically but not converted to Ω — the answer should be expressed as 0.183 Ω."}
  },
  {
    id:'q-units-03', topicId:'units-measurement', level:1, type:'tf', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"True or False: 1 MVA (megavolt-ampere) equals 1,000,000 VA or 1000 kVA.",
    options:["True","False"],
    answer:0,
    explanation:"True. The SI prefix Mega (M) = 10⁶. So 1 MVA = 1,000,000 VA = 1000 kVA. Large transformers and generators are rated in MVA. Utility grid equipment is typically rated in MVA, while building electrical equipment is in kVA.",
    whyWrong:{"1":"False is incorrect. This is a straightforward application of SI prefixes: Mega = 10⁶, kilo = 10³."}
  },

  // ══════════════════════════════════════
  // ELECTRICAL SYMBOLS
  // ══════════════════════════════════════
  {
    id:'q-sym-01', topicId:'electrical-symbols', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"On an electrical single-line diagram (SLD), which symbol standard is used in India?",
    options:["ANSI/IEEE 315","IEC 60617 (same as IS 696)","DIN 40900","BS 3939"],
    answer:1,
    explanation:"India follows IS 696, which is based on IEC 60617. IEC symbols are used across India, Europe, Middle East, and most of Asia. ANSI/IEEE 315 symbols are used in North America (NEC jurisdiction). When working on international projects, always confirm which symbol standard applies.",
    whyWrong:{"0":"ANSI/IEEE 315 is the US standard — not used in India or IEC countries.","2":"DIN 40900 is the old German standard — superseded by IEC 60617.","3":"BS 3939 is the old British standard — also superseded by IEC 60617."}
  },
  {
    id:'q-sym-02', topicId:'electrical-symbols', level:1, type:'tf', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"True or False: On a single-line diagram, a single line represents a 3-phase circuit with all three conductors.",
    options:["True","False"],
    answer:0,
    explanation:"True. That's the whole point of a 'single-line diagram' — it simplifies 3-phase systems by representing all three phases as a single line. This makes complex distribution systems readable. Tick marks on the line (/ or ///) indicate the actual number of conductors.",
    whyWrong:{"1":"False is incorrect. SLDs deliberately use one line to represent all three phases — this is their defining characteristic."}
  },

  // ══════════════════════════════════════
  // INTRODUCTION TO DRAWINGS
  // ══════════════════════════════════════
  {
    id:'q-draw-01', topicId:'intro-drawings', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"What does 'SLD' stand for in electrical engineering?",
    options:["Single Load Diagram","Single-Line Diagram","Sector Layout Drawing","Standard Load Distribution"],
    answer:1,
    explanation:"SLD = Single-Line Diagram. It is the most important electrical drawing — showing the complete power distribution system from utility source through transformers, switchgear, to final distribution boards, using a single line to represent each 3-phase circuit. Every electrical engineer must be able to read and produce SLDs.",
    whyWrong:{"0":"'Single Load Diagram' is not a real electrical term.","2":"'Sector Layout Drawing' is not a standard term.","3":"'Standard Load Distribution' is not a standard term."}
  },
  {
    id:'q-draw-02', topicId:'intro-drawings', level:1, type:'mcq', difficulty:'adv',
    sectors:['com','ind'], std:['IS','NEC','IEC'],
    question:"On an electrical drawing title block, what information is typically NOT included?",
    options:[
      "Drawing number and revision",
      "Project name and client",
      "Engineer's name and date",
      "Equipment purchase prices"
    ],
    answer:3,
    explanation:"Equipment purchase prices are commercial/contractual information — they do not belong on engineering drawings. Title blocks always include: drawing number, revision, project name, client, drawn by, checked by, approved by, date, scale, and sheet number. Keeping commercial and technical documents separate is standard practice.",
    whyWrong:{"0":"Drawing number and revision are mandatory title block elements.","1":"Project name and client are always in the title block.","2":"Engineer's name and date are mandatory for traceability and liability."}
  },

  // ══════════════════════════════════════
  // HOW TO READ CODES (L1)
  // ══════════════════════════════════════
  {
    id:'q-codes-01', topicId:'how-to-read-codes-l1', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind'], std:['NEC'],
    question:"In the NEC, what does 'Chapter 1' cover?",
    options:["Wiring methods and materials","General rules — definitions, scope, and fundamental requirements","Special occupancies (hospitals, hazardous areas)","Communications systems"],
    answer:1,
    explanation:"NEC Chapter 1 (Articles 90–110) covers General requirements — definitions, scope, purpose of the NEC, and fundamental rules that apply to all installations. The NEC is structured: Ch.1 General → Ch.2 Wiring/Protection → Ch.3 Methods/Materials → Ch.4 Equipment → Ch.5 Special Occupancies → Ch.6 Special Equipment → Ch.7 Special Conditions → Ch.8 Communications.",
    whyWrong:{"0":"Wiring methods and materials are in Chapter 3 (Articles 300–398).","2":"Special occupancies (hospitals, hazardous areas) are in Chapter 5.","3":"Communications systems are in Chapter 8."}
  },
  {
    id:'q-codes-02', topicId:'how-to-read-codes-l1', level:1, type:'tf', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"True or False: An 'Informational Note' in the NEC (or a 'Note' in an IS standard) is a mandatory requirement that must be followed.",
    options:["True","False"],
    answer:1,
    explanation:"False. Informational Notes (in NEC) and Notes (in IS standards) are NOT mandatory requirements. They provide additional context, explanations, or references to help understand the mandatory text. Only the main body text of the code is mandatory. This distinction is critical — many engineers incorrectly treat notes as binding requirements.",
    whyWrong:{"0":"True is incorrect. Notes and Informational Notes are explanatory only. The mandatory rules are in the main body text."}
  },

  // ══════════════════════════════════════
  // ELECTRICAL SAFETY
  // ══════════════════════════════════════
  {
    id:'q-safety-01', topicId:'electrical-safety', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind','og','hc'], std:['IS','NEC','IEC'],
    question:"What current level (in milliamps) through the human body is generally considered the threshold for ventricular fibrillation?",
    options:["1 mA","10 mA","100 mA","1000 mA"],
    answer:2,
    explanation:"As per IEC 60479-1: ~100 mA (0.1A) through the heart region for 1 second can cause ventricular fibrillation (heart stops pumping). This is why RCDs (Residual Current Devices) in residential installations trip at 30 mA — well below the danger threshold. At 10 mA, muscles cannot let go; at 1 mA, you feel a tingle.",
    whyWrong:{"0":"1 mA causes a just-perceptible tingle — not dangerous.","1":"10 mA causes 'let-go' threshold — painful but not immediately fatal.","3":"1000 mA (1A) would cause severe burns and immediate cardiac arrest — but 100 mA is sufficient for fibrillation risk."}
  },
  {
    id:'q-safety-02', topicId:'electrical-safety', level:1, type:'mcq', difficulty:'adv',
    sectors:['ind','dc'], std:['NEC'],
    question:"Per NFPA 70E, what is the minimum approach boundary called where AC electrical arc flash hazard exists?",
    options:["Limited approach boundary","Restricted approach boundary","Arc flash boundary","Prohibited boundary"],
    answer:2,
    explanation:"The Arc Flash Boundary is the distance at which a worker could receive a second-degree burn (1.2 cal/cm² incident energy) from an arc flash event. Inside this boundary, appropriate PPE must be worn. NFPA 70E also defines Limited Approach Boundary (shock hazard) and Restricted Approach Boundary (closer shock hazard zone).",
    whyWrong:{"0":"Limited Approach Boundary relates to shock hazard from live parts — not specifically arc flash.","1":"Restricted Approach Boundary is the inner shock hazard zone for qualified persons only.","3":"'Prohibited boundary' is not a standard NFPA 70E term."}
  },
  {
    id:'q-safety-03', topicId:'electrical-safety', level:1, type:'tf', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"True or False: A 30mA RCD (Residual Current Device) will protect a person from all electric shock hazards.",
    options:["True","False"],
    answer:1,
    explanation:"False. While a 30mA RCD provides very good protection against earth fault shocks, it does NOT protect against: (1) phase-to-phase contact (both hands on live conductors — no earth return current), (2) touch across line and neutral without earth path, (3) arc flash, (4) static discharge. RCDs are essential protection but are not a complete solution for all shock hazards.",
    whyWrong:{"0":"True is incorrect. RCDs only detect current imbalance (earth leakage). Phase-to-phase contact produces no earth return current and will not trip a standard RCD."}
  },

  // ══════════════════════════════════════
  // PER UNIT SYSTEM
  // ══════════════════════════════════════
  {
    id:'q-pu-01', topicId:'per-unit-system', level:1, type:'mcq', difficulty:'adv',
    sectors:['ind','dc'], std:['IS','NEC','IEC'],
    question:"A transformer has a nameplate impedance of 4.5%. This means:",
    options:[
      "The transformer resistance is 4.5 ohms",
      "At full load, the voltage drop across the internal impedance is 4.5% of rated voltage",
      "The transformer efficiency is 95.5%",
      "The transformer can be overloaded by 4.5% safely"
    ],
    answer:1,
    explanation:"A 4.5% impedance means that when full load current flows, the internal voltage drop is 4.5% of the rated voltage. It is a per-unit value (0.045 pu). This directly determines the prospective short circuit current: Isc = FLC / 0.045 = 22.2 × FLC. A 630 kVA transformer with 4.5% impedance can produce about 19 kA fault current at its LV terminals.",
    whyWrong:{"0":"Impedance percentage is not an ohmic value — it is a normalised (per-unit) value relative to the rated quantities.","2":"Transformer efficiency is not related to impedance percentage.","3":"Impedance percentage has no direct bearing on allowable overload."}
  },

  // ══════════════════════════════════════
  // SYMMETRICAL COMPONENTS
  // ══════════════════════════════════════
  {
    id:'q-sym-comp-01', topicId:'symmetrical-components', level:1, type:'mcq', difficulty:'adv',
    sectors:['ind','og'], std:['IS','IEC'],
    question:"What does the 'zero sequence' component represent in symmetrical component analysis?",
    options:[
      "The average of the three phase voltages",
      "The balanced positive-sequence component",
      "Three equal phasors all in phase — represents earth fault current path",
      "The negative-sequence component flowing in reverse"
    ],
    answer:2,
    explanation:"Zero sequence components are three equal phasors all in phase (no 120° displacement). They only exist in earth fault conditions and can only circulate if there is an earth return path. This is why delta-connected windings block zero sequence current — there is no neutral point. Zero sequence analysis is essential for earth fault relay settings and neutral grounding design.",
    whyWrong:{"0":"The average of three balanced phasors is zero, not the zero sequence component.","1":"The positive-sequence component represents the normal balanced system.","3":"Negative sequence represents reversed rotation — not zero sequence."}
  },

  // ══════════════════════════════════════
  // GUIDED LEARNING PATH (special topic)
  // ══════════════════════════════════════
  {
    id:'q-path-01', topicId:'guided-path', level:1, type:'mcq', difficulty:'beg',
    sectors:['res','com','ind'], std:['IS','NEC','IEC'],
    question:"Which learning path is most appropriate for a fresh electrical engineering graduate with no site experience?",
    options:[
      "Site/Field Engineer path — start from Load Calculation",
      "Design/Consulting Engineer path — start from Transformer Sizing",
      "Student/Graduate path — start from Level 1 Fundamentals",
      "Jump straight to Level 4 Advanced topics"
    ],
    answer:2,
    explanation:"Fresh graduates should follow the Student path starting from Level 1 Fundamentals — even if they studied these topics in college, the portal presents them with real engineering context and standard references that are rarely covered in textbooks. Building a solid foundation prevents calculation errors and code misapplication in practice.",
    whyWrong:{"0":"The Site/Field path assumes basic theory is already understood — appropriate for experienced field workers, not fresh graduates.","1":"The Design path assumes equipment sizing knowledge — jumping to Level 3 without Level 1–2 foundation leads to gaps.","3":"Level 4 topics require understanding Levels 1–3 — starting here would lead to misunderstanding advanced concepts."}
  }

,
  // --- AUTO GENERATED EXPANSION ---

  {
    id: 'q-gen-ohms-law-1',
    topicId: 'ohms-law',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Ohm, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Ohm, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-ohms-law-2',
    topicId: 'ohms-law',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Ohm, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Ohm to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-ohms-law-3',
    topicId: 'ohms-law',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Ohm. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Ohm, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-ohms-law-4',
    topicId: 'ohms-law',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Ohm?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Ohm is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-ac-dc-1',
    topicId: 'ac-dc',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating AC vs DC — Differences & Applications, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For AC vs DC — Differences & Applications, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-ac-dc-2',
    topicId: 'ac-dc',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In AC vs DC — Differences & Applications, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during AC vs DC — Differences & Applications to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-ac-dc-3',
    topicId: 'ac-dc',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize AC vs DC — Differences & Applications. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing AC vs DC — Differences & Applications, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-ac-dc-4',
    topicId: 'ac-dc',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during AC vs DC — Differences & Applications?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in AC vs DC — Differences & Applications is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-three-phase-1',
    topicId: 'three-phase',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Three-Phase Power — Star, Delta, Line vs Phase, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Three-Phase Power — Star, Delta, Line vs Phase, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-three-phase-2',
    topicId: 'three-phase',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Three-Phase Power — Star, Delta, Line vs Phase, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Three-Phase Power — Star, Delta, Line vs Phase to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-three-phase-3',
    topicId: 'three-phase',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Three-Phase Power — Star, Delta, Line vs Phase. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Three-Phase Power — Star, Delta, Line vs Phase, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-three-phase-4',
    topicId: 'three-phase',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Three-Phase Power — Star, Delta, Line vs Phase?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Three-Phase Power — Star, Delta, Line vs Phase is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-power-factor-1',
    topicId: 'power-factor',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Power Factor — Real, Reactive, Apparent Power, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Power Factor — Real, Reactive, Apparent Power, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-power-factor-2',
    topicId: 'power-factor',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Power Factor — Real, Reactive, Apparent Power, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Power Factor — Real, Reactive, Apparent Power to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-power-factor-3',
    topicId: 'power-factor',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Power Factor — Real, Reactive, Apparent Power. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Power Factor — Real, Reactive, Apparent Power, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-power-factor-4',
    topicId: 'power-factor',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Power Factor — Real, Reactive, Apparent Power?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Power Factor — Real, Reactive, Apparent Power is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-units-measurement-1',
    topicId: 'units-measurement',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Units & Measurement Systems, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Units & Measurement Systems, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-units-measurement-2',
    topicId: 'units-measurement',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Units & Measurement Systems, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Units & Measurement Systems to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-units-measurement-3',
    topicId: 'units-measurement',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Units & Measurement Systems. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Units & Measurement Systems, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-units-measurement-4',
    topicId: 'units-measurement',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Units & Measurement Systems?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Units & Measurement Systems is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-electrical-symbols-1',
    topicId: 'electrical-symbols',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Basic Electrical Symbols, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Basic Electrical Symbols, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-electrical-symbols-2',
    topicId: 'electrical-symbols',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Basic Electrical Symbols, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Basic Electrical Symbols to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-electrical-symbols-3',
    topicId: 'electrical-symbols',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Basic Electrical Symbols. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Basic Electrical Symbols, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-electrical-symbols-4',
    topicId: 'electrical-symbols',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Basic Electrical Symbols?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Basic Electrical Symbols is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-intro-drawings-1',
    topicId: 'intro-drawings',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Introduction to Electrical Drawings, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Introduction to Electrical Drawings, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-intro-drawings-2',
    topicId: 'intro-drawings',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Introduction to Electrical Drawings, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Introduction to Electrical Drawings to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-intro-drawings-3',
    topicId: 'intro-drawings',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Introduction to Electrical Drawings. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Introduction to Electrical Drawings, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-intro-drawings-4',
    topicId: 'intro-drawings',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Introduction to Electrical Drawings?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Introduction to Electrical Drawings is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-how-to-read-codes-l1-1',
    topicId: 'how-to-read-codes-l1',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating How to Read Electrical Codes (Introduction), what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For How to Read Electrical Codes (Introduction), safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-how-to-read-codes-l1-2',
    topicId: 'how-to-read-codes-l1',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In How to Read Electrical Codes (Introduction), environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during How to Read Electrical Codes (Introduction) to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-how-to-read-codes-l1-3',
    topicId: 'how-to-read-codes-l1',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize How to Read Electrical Codes (Introduction). The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing How to Read Electrical Codes (Introduction), footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-how-to-read-codes-l1-4',
    topicId: 'how-to-read-codes-l1',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during How to Read Electrical Codes (Introduction)?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in How to Read Electrical Codes (Introduction) is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-per-unit-system-1',
    topicId: 'per-unit-system',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Per Unit System, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Per Unit System, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-per-unit-system-2',
    topicId: 'per-unit-system',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Per Unit System, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Per Unit System to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-per-unit-system-3',
    topicId: 'per-unit-system',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Per Unit System. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Per Unit System, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-per-unit-system-4',
    topicId: 'per-unit-system',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Per Unit System?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Per Unit System is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-symmetrical-components-1',
    topicId: 'symmetrical-components',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Symmetrical Components, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Symmetrical Components, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-symmetrical-components-2',
    topicId: 'symmetrical-components',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Symmetrical Components, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Symmetrical Components to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-symmetrical-components-3',
    topicId: 'symmetrical-components',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Symmetrical Components. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Symmetrical Components, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-symmetrical-components-4',
    topicId: 'symmetrical-components',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Symmetrical Components?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Symmetrical Components is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-electrical-safety-1',
    topicId: 'electrical-safety',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Electrical Safety — Arc Flash, Touch Voltage, PPE, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Electrical Safety — Arc Flash, Touch Voltage, PPE, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-electrical-safety-2',
    topicId: 'electrical-safety',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Electrical Safety — Arc Flash, Touch Voltage, PPE, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Electrical Safety — Arc Flash, Touch Voltage, PPE to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-electrical-safety-3',
    topicId: 'electrical-safety',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Electrical Safety — Arc Flash, Touch Voltage, PPE. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Electrical Safety — Arc Flash, Touch Voltage, PPE, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-electrical-safety-4',
    topicId: 'electrical-safety',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Electrical Safety — Arc Flash, Touch Voltage, PPE?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Electrical Safety — Arc Flash, Touch Voltage, PPE is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-guided-path-1',
    topicId: 'guided-path',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Guided Learning Path Selection, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Guided Learning Path Selection, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-guided-path-2',
    topicId: 'guided-path',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Guided Learning Path Selection, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Guided Learning Path Selection to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-guided-path-3',
    topicId: 'guided-path',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Guided Learning Path Selection. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Guided Learning Path Selection, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-guided-path-4',
    topicId: 'guided-path',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Guided Learning Path Selection?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Guided Learning Path Selection is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-load-calculation-1',
    topicId: 'load-calculation',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Load Calculation, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Load Calculation, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-load-calculation-2',
    topicId: 'load-calculation',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Load Calculation, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Load Calculation to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-load-calculation-3',
    topicId: 'load-calculation',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Load Calculation. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Load Calculation, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-load-calculation-4',
    topicId: 'load-calculation',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Load Calculation?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Load Calculation is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-max-demand-tariff-1',
    topicId: 'max-demand-tariff',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Maximum Demand & Tariff, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Maximum Demand & Tariff, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-max-demand-tariff-2',
    topicId: 'max-demand-tariff',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Maximum Demand & Tariff, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Maximum Demand & Tariff to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-max-demand-tariff-3',
    topicId: 'max-demand-tariff',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Maximum Demand & Tariff. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Maximum Demand & Tariff, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-max-demand-tariff-4',
    topicId: 'max-demand-tariff',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Maximum Demand & Tariff?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Maximum Demand & Tariff is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-cable-sizing-1',
    topicId: 'cable-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Cable Sizing, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Cable Sizing, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-cable-sizing-2',
    topicId: 'cable-sizing',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Cable Sizing, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Cable Sizing to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-cable-sizing-3',
    topicId: 'cable-sizing',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Cable Sizing. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Cable Sizing, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-cable-sizing-4',
    topicId: 'cable-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Cable Sizing?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Cable Sizing is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-voltage-drop-1',
    topicId: 'voltage-drop',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Voltage Drop Calculation, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Voltage Drop Calculation, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-voltage-drop-2',
    topicId: 'voltage-drop',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Voltage Drop Calculation, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Voltage Drop Calculation to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-voltage-drop-3',
    topicId: 'voltage-drop',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Voltage Drop Calculation. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Voltage Drop Calculation, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-voltage-drop-4',
    topicId: 'voltage-drop',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Voltage Drop Calculation?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Voltage Drop Calculation is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-earthing-1',
    topicId: 'earthing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Earthing & Grounding Systems, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Earthing & Grounding Systems, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-earthing-2',
    topicId: 'earthing',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Earthing & Grounding Systems, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Earthing & Grounding Systems to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-earthing-3',
    topicId: 'earthing',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Earthing & Grounding Systems. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Earthing & Grounding Systems, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-earthing-4',
    topicId: 'earthing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Earthing & Grounding Systems?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Earthing & Grounding Systems is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-circuit-protection-1',
    topicId: 'circuit-protection',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Circuit Protection, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Circuit Protection, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-circuit-protection-2',
    topicId: 'circuit-protection',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Circuit Protection, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Circuit Protection to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-circuit-protection-3',
    topicId: 'circuit-protection',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Circuit Protection. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Circuit Protection, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-circuit-protection-4',
    topicId: 'circuit-protection',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Circuit Protection?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Circuit Protection is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-pf-correction-1',
    topicId: 'pf-correction',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Power Factor Correction, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Power Factor Correction, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-pf-correction-2',
    topicId: 'pf-correction',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Power Factor Correction, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Power Factor Correction to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-pf-correction-3',
    topicId: 'pf-correction',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Power Factor Correction. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Power Factor Correction, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-pf-correction-4',
    topicId: 'pf-correction',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Power Factor Correction?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Power Factor Correction is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-panel-schedule-1',
    topicId: 'panel-schedule',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Panel Schedule & Load Distribution, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Panel Schedule & Load Distribution, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-panel-schedule-2',
    topicId: 'panel-schedule',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Panel Schedule & Load Distribution, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Panel Schedule & Load Distribution to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-panel-schedule-3',
    topicId: 'panel-schedule',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Panel Schedule & Load Distribution. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Panel Schedule & Load Distribution, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-panel-schedule-4',
    topicId: 'panel-schedule',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Panel Schedule & Load Distribution?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Panel Schedule & Load Distribution is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-demand-factor-tables-1',
    topicId: 'demand-factor-tables',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Demand Factor Tables, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Demand Factor Tables, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-demand-factor-tables-2',
    topicId: 'demand-factor-tables',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Demand Factor Tables, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Demand Factor Tables to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-demand-factor-tables-3',
    topicId: 'demand-factor-tables',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Demand Factor Tables. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Demand Factor Tables, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-demand-factor-tables-4',
    topicId: 'demand-factor-tables',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Demand Factor Tables?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Demand Factor Tables is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-diversity-load-profile-1',
    topicId: 'diversity-load-profile',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Diversity vs Load Profile, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Diversity vs Load Profile, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-diversity-load-profile-2',
    topicId: 'diversity-load-profile',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Diversity vs Load Profile, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Diversity vs Load Profile to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-diversity-load-profile-3',
    topicId: 'diversity-load-profile',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Diversity vs Load Profile. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Diversity vs Load Profile, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-diversity-load-profile-4',
    topicId: 'diversity-load-profile',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Diversity vs Load Profile?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Diversity vs Load Profile is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-how-to-read-codes-l2-1',
    topicId: 'how-to-read-codes-l2',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating How to Read Electrical Codes (Deep Dive), what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For How to Read Electrical Codes (Deep Dive), safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-how-to-read-codes-l2-2',
    topicId: 'how-to-read-codes-l2',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In How to Read Electrical Codes (Deep Dive), environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during How to Read Electrical Codes (Deep Dive) to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-how-to-read-codes-l2-3',
    topicId: 'how-to-read-codes-l2',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize How to Read Electrical Codes (Deep Dive). The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing How to Read Electrical Codes (Deep Dive), footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-how-to-read-codes-l2-4',
    topicId: 'how-to-read-codes-l2',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during How to Read Electrical Codes (Deep Dive)?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in How to Read Electrical Codes (Deep Dive) is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-conduit-fill-1',
    topicId: 'conduit-fill',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Conduit & Cable Tray Fill, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Conduit & Cable Tray Fill, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-conduit-fill-2',
    topicId: 'conduit-fill',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Conduit & Cable Tray Fill, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Conduit & Cable Tray Fill to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-conduit-fill-3',
    topicId: 'conduit-fill',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Conduit & Cable Tray Fill. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Conduit & Cable Tray Fill, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-conduit-fill-4',
    topicId: 'conduit-fill',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Conduit & Cable Tray Fill?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Conduit & Cable Tray Fill is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-transformer-sizing-1',
    topicId: 'transformer-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Transformer Sizing, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Transformer Sizing, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-transformer-sizing-2',
    topicId: 'transformer-sizing',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Transformer Sizing, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Transformer Sizing to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-transformer-sizing-3',
    topicId: 'transformer-sizing',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Transformer Sizing. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Transformer Sizing, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-transformer-sizing-4',
    topicId: 'transformer-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Transformer Sizing?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Transformer Sizing is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-dg-sizing-1',
    topicId: 'dg-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating DG Set Sizing, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For DG Set Sizing, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-dg-sizing-2',
    topicId: 'dg-sizing',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In DG Set Sizing, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during DG Set Sizing to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-dg-sizing-3',
    topicId: 'dg-sizing',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize DG Set Sizing. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing DG Set Sizing, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-dg-sizing-4',
    topicId: 'dg-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during DG Set Sizing?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in DG Set Sizing is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-ups-sizing-1',
    topicId: 'ups-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating UPS & Battery Sizing, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For UPS & Battery Sizing, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-ups-sizing-2',
    topicId: 'ups-sizing',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In UPS & Battery Sizing, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during UPS & Battery Sizing to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-ups-sizing-3',
    topicId: 'ups-sizing',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize UPS & Battery Sizing. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing UPS & Battery Sizing, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-ups-sizing-4',
    topicId: 'ups-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during UPS & Battery Sizing?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in UPS & Battery Sizing is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-lighting-design-1',
    topicId: 'lighting-design',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Lighting Design, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Lighting Design, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-lighting-design-2',
    topicId: 'lighting-design',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Lighting Design, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Lighting Design to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-lighting-design-3',
    topicId: 'lighting-design',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Lighting Design. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Lighting Design, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-lighting-design-4',
    topicId: 'lighting-design',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Lighting Design?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Lighting Design is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-motor-starting-1',
    topicId: 'motor-starting',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Motor Starting & Protection, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Motor Starting & Protection, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-motor-starting-2',
    topicId: 'motor-starting',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Motor Starting & Protection, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Motor Starting & Protection to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-motor-starting-3',
    topicId: 'motor-starting',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Motor Starting & Protection. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Motor Starting & Protection, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-motor-starting-4',
    topicId: 'motor-starting',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Motor Starting & Protection?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Motor Starting & Protection is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-hvac-electrical-1',
    topicId: 'hvac-electrical',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating HVAC Electrical Load, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For HVAC Electrical Load, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-hvac-electrical-2',
    topicId: 'hvac-electrical',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In HVAC Electrical Load, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during HVAC Electrical Load to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-hvac-electrical-3',
    topicId: 'hvac-electrical',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize HVAC Electrical Load. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing HVAC Electrical Load, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-hvac-electrical-4',
    topicId: 'hvac-electrical',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during HVAC Electrical Load?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in HVAC Electrical Load is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-switchgear-panels-1',
    topicId: 'switchgear-panels',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Switchgear & Panel Design, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Switchgear & Panel Design, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-switchgear-panels-2',
    topicId: 'switchgear-panels',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Switchgear & Panel Design, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Switchgear & Panel Design to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-switchgear-panels-3',
    topicId: 'switchgear-panels',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Switchgear & Panel Design. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Switchgear & Panel Design, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-switchgear-panels-4',
    topicId: 'switchgear-panels',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Switchgear & Panel Design?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Switchgear & Panel Design is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-busbar-sizing-1',
    topicId: 'busbar-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Busbar Sizing, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Busbar Sizing, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-busbar-sizing-2',
    topicId: 'busbar-sizing',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Busbar Sizing, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Busbar Sizing to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-busbar-sizing-3',
    topicId: 'busbar-sizing',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Busbar Sizing. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Busbar Sizing, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-busbar-sizing-4',
    topicId: 'busbar-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Busbar Sizing?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Busbar Sizing is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-cable-tray-sizing-1',
    topicId: 'cable-tray-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Cable Tray Sizing, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Cable Tray Sizing, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-cable-tray-sizing-2',
    topicId: 'cable-tray-sizing',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Cable Tray Sizing, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Cable Tray Sizing to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-cable-tray-sizing-3',
    topicId: 'cable-tray-sizing',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Cable Tray Sizing. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Cable Tray Sizing, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-cable-tray-sizing-4',
    topicId: 'cable-tray-sizing',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Cable Tray Sizing?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Cable Tray Sizing is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-breaker-selection-1',
    topicId: 'breaker-selection',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Breaker Selection Logic, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Breaker Selection Logic, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-breaker-selection-2',
    topicId: 'breaker-selection',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Breaker Selection Logic, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Breaker Selection Logic to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-breaker-selection-3',
    topicId: 'breaker-selection',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Breaker Selection Logic. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Breaker Selection Logic, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-breaker-selection-4',
    topicId: 'breaker-selection',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Breaker Selection Logic?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Breaker Selection Logic is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-ev-charging-1',
    topicId: 'ev-charging',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating EV Charging Infrastructure, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For EV Charging Infrastructure, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-ev-charging-2',
    topicId: 'ev-charging',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In EV Charging Infrastructure, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during EV Charging Infrastructure to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-ev-charging-3',
    topicId: 'ev-charging',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize EV Charging Infrastructure. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing EV Charging Infrastructure, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-ev-charging-4',
    topicId: 'ev-charging',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during EV Charging Infrastructure?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in EV Charging Infrastructure is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-ct-pt-substation-1',
    topicId: 'ct-pt-substation',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating CT/PT & Substation Layout, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For CT/PT & Substation Layout, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-ct-pt-substation-2',
    topicId: 'ct-pt-substation',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In CT/PT & Substation Layout, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during CT/PT & Substation Layout to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-ct-pt-substation-3',
    topicId: 'ct-pt-substation',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize CT/PT & Substation Layout. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing CT/PT & Substation Layout, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-ct-pt-substation-4',
    topicId: 'ct-pt-substation',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during CT/PT & Substation Layout?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in CT/PT & Substation Layout is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-battery-storage-1',
    topicId: 'battery-storage',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Battery Storage Systems, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Battery Storage Systems, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-battery-storage-2',
    topicId: 'battery-storage',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Battery Storage Systems, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Battery Storage Systems to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-battery-storage-3',
    topicId: 'battery-storage',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Battery Storage Systems. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Battery Storage Systems, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-battery-storage-4',
    topicId: 'battery-storage',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Battery Storage Systems?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Battery Storage Systems is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-energy-monitoring-1',
    topicId: 'energy-monitoring',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Energy Monitoring, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Energy Monitoring, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-energy-monitoring-2',
    topicId: 'energy-monitoring',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Energy Monitoring, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Energy Monitoring to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-energy-monitoring-3',
    topicId: 'energy-monitoring',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Energy Monitoring. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Energy Monitoring, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-energy-monitoring-4',
    topicId: 'energy-monitoring',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Energy Monitoring?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Energy Monitoring is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-troubleshooting-1',
    topicId: 'troubleshooting',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Electrical Troubleshooting, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Electrical Troubleshooting, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-troubleshooting-2',
    topicId: 'troubleshooting',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Electrical Troubleshooting, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Electrical Troubleshooting to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-troubleshooting-3',
    topicId: 'troubleshooting',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Electrical Troubleshooting. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Electrical Troubleshooting, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-troubleshooting-4',
    topicId: 'troubleshooting',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Electrical Troubleshooting?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Electrical Troubleshooting is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-short-circuit-1',
    topicId: 'short-circuit',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Short Circuit Analysis, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Short Circuit Analysis, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-short-circuit-2',
    topicId: 'short-circuit',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Short Circuit Analysis, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Short Circuit Analysis to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-short-circuit-3',
    topicId: 'short-circuit',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Short Circuit Analysis. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Short Circuit Analysis, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-short-circuit-4',
    topicId: 'short-circuit',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Short Circuit Analysis?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Short Circuit Analysis is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-relay-coordination-1',
    topicId: 'relay-coordination',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Protection Relay Coordination, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Protection Relay Coordination, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-relay-coordination-2',
    topicId: 'relay-coordination',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Protection Relay Coordination, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Protection Relay Coordination to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-relay-coordination-3',
    topicId: 'relay-coordination',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Protection Relay Coordination. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Protection Relay Coordination, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-relay-coordination-4',
    topicId: 'relay-coordination',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Protection Relay Coordination?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Protection Relay Coordination is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-coordination-study-1',
    topicId: 'coordination-study',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Coordination Study (TCC Curves), what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Coordination Study (TCC Curves), safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-coordination-study-2',
    topicId: 'coordination-study',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Coordination Study (TCC Curves), environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Coordination Study (TCC Curves) to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-coordination-study-3',
    topicId: 'coordination-study',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Coordination Study (TCC Curves). The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Coordination Study (TCC Curves), footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-coordination-study-4',
    topicId: 'coordination-study',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Coordination Study (TCC Curves)?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Coordination Study (TCC Curves) is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-hazardous-area-1',
    topicId: 'hazardous-area',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Hazardous Area Classification, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Hazardous Area Classification, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-hazardous-area-2',
    topicId: 'hazardous-area',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Hazardous Area Classification, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Hazardous Area Classification to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-hazardous-area-3',
    topicId: 'hazardous-area',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Hazardous Area Classification. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Hazardous Area Classification, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-hazardous-area-4',
    topicId: 'hazardous-area',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Hazardous Area Classification?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Hazardous Area Classification is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-dc-redundancy-1',
    topicId: 'dc-redundancy',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Data Centre Redundancy, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Data Centre Redundancy, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-dc-redundancy-2',
    topicId: 'dc-redundancy',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Data Centre Redundancy, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Data Centre Redundancy to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-dc-redundancy-3',
    topicId: 'dc-redundancy',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Data Centre Redundancy. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Data Centre Redundancy, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-dc-redundancy-4',
    topicId: 'dc-redundancy',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Data Centre Redundancy?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Data Centre Redundancy is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-solar-pv-1',
    topicId: 'solar-pv',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Solar PV System Design, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Solar PV System Design, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-solar-pv-2',
    topicId: 'solar-pv',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Solar PV System Design, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Solar PV System Design to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-solar-pv-3',
    topicId: 'solar-pv',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Solar PV System Design. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Solar PV System Design, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-solar-pv-4',
    topicId: 'solar-pv',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Solar PV System Design?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Solar PV System Design is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-lightning-protect-1',
    topicId: 'lightning-protect',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Lightning Protection, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Lightning Protection, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-lightning-protect-2',
    topicId: 'lightning-protect',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Lightning Protection, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Lightning Protection to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-lightning-protect-3',
    topicId: 'lightning-protect',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Lightning Protection. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Lightning Protection, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-lightning-protect-4',
    topicId: 'lightning-protect',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Lightning Protection?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Lightning Protection is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-arc-flash-1',
    topicId: 'arc-flash',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Arc Flash Analysis, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Arc Flash Analysis, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-arc-flash-2',
    topicId: 'arc-flash',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Arc Flash Analysis, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Arc Flash Analysis to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-arc-flash-3',
    topicId: 'arc-flash',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Arc Flash Analysis. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Arc Flash Analysis, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-arc-flash-4',
    topicId: 'arc-flash',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Arc Flash Analysis?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Arc Flash Analysis is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-pq-harmonics-1',
    topicId: 'pq-harmonics',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Power Quality & Harmonics, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Power Quality & Harmonics, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-pq-harmonics-2',
    topicId: 'pq-harmonics',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Power Quality & Harmonics, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Power Quality & Harmonics to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-pq-harmonics-3',
    topicId: 'pq-harmonics',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Power Quality & Harmonics. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Power Quality & Harmonics, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-pq-harmonics-4',
    topicId: 'pq-harmonics',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Power Quality & Harmonics?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Power Quality & Harmonics is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-energy-efficiency-1',
    topicId: 'energy-efficiency',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Energy Efficiency & Green Buildings, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Energy Efficiency & Green Buildings, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-energy-efficiency-2',
    topicId: 'energy-efficiency',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Energy Efficiency & Green Buildings, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Energy Efficiency & Green Buildings to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-energy-efficiency-3',
    topicId: 'energy-efficiency',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Energy Efficiency & Green Buildings. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Energy Efficiency & Green Buildings, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-energy-efficiency-4',
    topicId: 'energy-efficiency',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Energy Efficiency & Green Buildings?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Energy Efficiency & Green Buildings is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-etap-intro-1',
    topicId: 'etap-intro',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating ETAP / Simulation Introduction, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For ETAP / Simulation Introduction, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-etap-intro-2',
    topicId: 'etap-intro',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In ETAP / Simulation Introduction, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during ETAP / Simulation Introduction to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-etap-intro-3',
    topicId: 'etap-intro',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize ETAP / Simulation Introduction. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing ETAP / Simulation Introduction, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-etap-intro-4',
    topicId: 'etap-intro',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during ETAP / Simulation Introduction?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in ETAP / Simulation Introduction is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  },
  {
    id: 'q-gen-smart-load-mgmt-1',
    topicId: 'smart-load-mgmt',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind','res'],
    std: ['IS','NEC','IEC'],
    question: "When evaluating Smart Load Management, what is the primary consideration for safety and reliability?",
    options: [
      "Cost optimization only",
      "Aesthetics and layout",
      "Standard compliance and load capacity",
      "Minimizing material weight"
    ],
    answer: 2,
    explanation: "For Smart Load Management, safety and reliability are heavily dependent on standard compliance and adhering to calculated load capacities.",
    whyWrong: {"0":"Cost should not override safety.","1":"Aesthetics are secondary.","3":"Weight is not primary."}
  },
  {
    id: 'q-gen-smart-load-mgmt-2',
    topicId: 'smart-load-mgmt',
    level: 'beginner',
    type: 'tf',
    sector: ['com','ind'],
    std: ['IS','NEC'],
    question: "True or False: In Smart Load Management, environmental derating factors can be safely ignored if the equipment is oversized.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Derating factors must always be applied during Smart Load Management to ensure equipment operates within thermal limits.",
    whyWrong: {"0":"Ignoring derating factors violates electrical codes."}
  },
  {
    id: 'q-gen-smart-load-mgmt-3',
    topicId: 'smart-load-mgmt',
    level: 'advanced',
    type: 'scenario',
    sector: ['ind','O&G'],
    std: ['IS','IEC'],
    question: "You are designing an industrial facility and need to finalize Smart Load Management. The client requests a 20% reduction in equipment footprint. What is the correct approach?",
    options: [
      "Proceed by eliminating safety clearances",
      "Reject the request immediately without review",
      "Review high-efficiency, compact alternatives while maintaining standard clearances",
      "Downgrade the equipment ratings by 20%"
    ],
    answer: 2,
    explanation: "When optimizing Smart Load Management, footprint reduction must never compromise standard safety clearances or equipment ratings.",
    whyWrong: {"0":"Eliminating clearances violates safety codes.","1":"Engineers should evaluate alternatives.","3":"Downgrading ratings poses a fire risk."}
  },
  {
    id: 'q-gen-smart-load-mgmt-4',
    topicId: 'smart-load-mgmt',
    level: 'beginner',
    type: 'mcq',
    sector: ['com','ind'],
    std: ['NEC','IEC'],
    question: "What is a common error engineers make during Smart Load Management?",
    options: [
      "Failing to provide adequate margin for future growth",
      "Applying safety factors from the code",
      "Cross-referencing multiple manufacturer datasheets",
      "Consulting the local utility provider"
    ],
    answer: 0,
    explanation: "A common error in Smart Load Management is failing to provide adequate margin for future growth.",
    whyWrong: {"1":"Applying safety factors is a best practice.","2":"Cross-referencing data is highly recommended.","3":"Consulting the utility is standard protocol."}
  }
,
{
  "id": "q-bulk-ohms-law-00",
  "topicId": "ohms-law",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'V=IR' is a mandatory safety consideration in ohms law.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'V=IR' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-01",
  "topicId": "ohms-law",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ohms law for a load of 58 kW. How does 'P=VI' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V/A/Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'P=VI' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-02",
  "topicId": "ohms-law",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ohms law systems, what is the significance of 'Series R adds'?",
  "options": [
    "It is a primary V/A/Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Series R adds' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-03",
  "topicId": "ohms-law",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ohms law systems, what is the significance of 'Parallel R decreases'?",
  "options": [
    "It is a primary V/A/Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Parallel R decreases' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-04",
  "topicId": "ohms-law",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ohms law for a load of 196 kW. How does 'V=IR' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V/A/Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'V=IR' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-05",
  "topicId": "ohms-law",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ohms law for a load of 118 kW. How does 'P=VI' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V/A/Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'P=VI' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-06",
  "topicId": "ohms-law",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ohms law for a load of 217 kW. How does 'Series R adds' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V/A/Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Series R adds' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-07",
  "topicId": "ohms-law",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ohms law for a load of 265 kW. How does 'Parallel R decreases' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V/A/Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Parallel R decreases' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-08",
  "topicId": "ohms-law",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ohms law for a load of 65 kW. How does 'V=IR' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V/A/Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'V=IR' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-09",
  "topicId": "ohms-law",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ohms law for a load of 398 kW. How does 'P=VI' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V/A/Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'P=VI' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-10",
  "topicId": "ohms-law",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Series R adds' is a mandatory safety consideration in ohms law.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Series R adds' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-11",
  "topicId": "ohms-law",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Parallel R decreases' is a mandatory safety consideration in ohms law.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Parallel R decreases' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-12",
  "topicId": "ohms-law",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'V=IR' is a mandatory safety consideration in ohms law.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'V=IR' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-13",
  "topicId": "ohms-law",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ohms law systems, what is the significance of 'P=VI'?",
  "options": [
    "It is a primary V/A/Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'P=VI' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-14",
  "topicId": "ohms-law",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Series R adds' is a mandatory safety consideration in ohms law.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Series R adds' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ohms-law-15",
  "topicId": "ohms-law",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Parallel R decreases' is a mandatory safety consideration in ohms law.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Parallel R decreases' is essential for professional ohms law works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-00",
  "topicId": "ac-dc",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Freq is 50/60Hz' is a mandatory safety consideration in ac dc.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Freq is 50/60Hz' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-01",
  "topicId": "ac-dc",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ac dc for a load of 71 kW. How does 'DC has no freq' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Hz sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'DC has no freq' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-02",
  "topicId": "ac-dc",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ac dc for a load of 457 kW. How does 'Transformers only AC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Hz sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transformers only AC' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-03",
  "topicId": "ac-dc",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ac dc systems, what is the significance of 'Battery is DC'?",
  "options": [
    "It is a primary Hz requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Battery is DC' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-04",
  "topicId": "ac-dc",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ac dc for a load of 196 kW. How does 'Freq is 50/60Hz' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Hz sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Freq is 50/60Hz' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-05",
  "topicId": "ac-dc",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ac dc for a load of 397 kW. How does 'DC has no freq' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Hz sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'DC has no freq' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-06",
  "topicId": "ac-dc",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ac dc systems, what is the significance of 'Transformers only AC'?",
  "options": [
    "It is a primary Hz requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transformers only AC' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-07",
  "topicId": "ac-dc",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Battery is DC' is a mandatory safety consideration in ac dc.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Battery is DC' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-08",
  "topicId": "ac-dc",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ac dc systems, what is the significance of 'Freq is 50/60Hz'?",
  "options": [
    "It is a primary Hz requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Freq is 50/60Hz' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-09",
  "topicId": "ac-dc",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ac dc systems, what is the significance of 'DC has no freq'?",
  "options": [
    "It is a primary Hz requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'DC has no freq' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-10",
  "topicId": "ac-dc",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ac dc systems, what is the significance of 'Transformers only AC'?",
  "options": [
    "It is a primary Hz requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transformers only AC' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-11",
  "topicId": "ac-dc",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ac dc systems, what is the significance of 'Battery is DC'?",
  "options": [
    "It is a primary Hz requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Battery is DC' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-12",
  "topicId": "ac-dc",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ac dc for a load of 398 kW. How does 'Freq is 50/60Hz' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Hz sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Freq is 50/60Hz' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-13",
  "topicId": "ac-dc",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'DC has no freq' is a mandatory safety consideration in ac dc.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'DC has no freq' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-14",
  "topicId": "ac-dc",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ac dc for a load of 465 kW. How does 'Transformers only AC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Hz sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transformers only AC' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ac-dc-15",
  "topicId": "ac-dc",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ac dc for a load of 50 kW. How does 'Battery is DC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Hz sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Battery is DC' is essential for professional ac dc works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-00",
  "topicId": "three-phase",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating three phase for a load of 180 kW. How does 'Line vs Phase' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Line vs Phase' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-01",
  "topicId": "three-phase",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'sqrt(3) factor' is a mandatory safety consideration in three phase.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'sqrt(3) factor' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-02",
  "topicId": "three-phase",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Star neutral' is a mandatory safety consideration in three phase.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Star neutral' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-03",
  "topicId": "three-phase",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of three phase systems, what is the significance of 'Delta no neutral'?",
  "options": [
    "It is a primary V requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Delta no neutral' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-04",
  "topicId": "three-phase",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Line vs Phase' is a mandatory safety consideration in three phase.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Line vs Phase' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-05",
  "topicId": "three-phase",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'sqrt(3) factor' is a mandatory safety consideration in three phase.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'sqrt(3) factor' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-06",
  "topicId": "three-phase",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating three phase for a load of 187 kW. How does 'Star neutral' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Star neutral' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-07",
  "topicId": "three-phase",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Delta no neutral' is a mandatory safety consideration in three phase.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Delta no neutral' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-08",
  "topicId": "three-phase",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating three phase for a load of 307 kW. How does 'Line vs Phase' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Line vs Phase' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-09",
  "topicId": "three-phase",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of three phase systems, what is the significance of 'sqrt(3) factor'?",
  "options": [
    "It is a primary V requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'sqrt(3) factor' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-10",
  "topicId": "three-phase",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of three phase systems, what is the significance of 'Star neutral'?",
  "options": [
    "It is a primary V requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Star neutral' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-11",
  "topicId": "three-phase",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Delta no neutral' is a mandatory safety consideration in three phase.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Delta no neutral' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-12",
  "topicId": "three-phase",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Line vs Phase' is a mandatory safety consideration in three phase.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Line vs Phase' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-13",
  "topicId": "three-phase",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'sqrt(3) factor' is a mandatory safety consideration in three phase.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'sqrt(3) factor' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-14",
  "topicId": "three-phase",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating three phase for a load of 208 kW. How does 'Star neutral' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the V sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Star neutral' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-three-phase-15",
  "topicId": "three-phase",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Delta no neutral' is a mandatory safety consideration in three phase.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Delta no neutral' is essential for professional three phase works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-00",
  "topicId": "power-factor",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of power factor systems, what is the significance of 'Real vs Apparent'?",
  "options": [
    "It is a primary PF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Real vs Apparent' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-01",
  "topicId": "power-factor",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating power factor for a load of 43 kW. How does 'cos phi' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PF sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'cos phi' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-02",
  "topicId": "power-factor",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating power factor for a load of 85 kW. How does 'Reactive power' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PF sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Reactive power' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-03",
  "topicId": "power-factor",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Lagging vs Leading' is a mandatory safety consideration in power factor.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Lagging vs Leading' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-04",
  "topicId": "power-factor",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating power factor for a load of 485 kW. How does 'Real vs Apparent' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PF sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Real vs Apparent' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-05",
  "topicId": "power-factor",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'cos phi' is a mandatory safety consideration in power factor.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'cos phi' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-06",
  "topicId": "power-factor",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of power factor systems, what is the significance of 'Reactive power'?",
  "options": [
    "It is a primary PF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Reactive power' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-07",
  "topicId": "power-factor",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating power factor for a load of 120 kW. How does 'Lagging vs Leading' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PF sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Lagging vs Leading' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-08",
  "topicId": "power-factor",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Real vs Apparent' is a mandatory safety consideration in power factor.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Real vs Apparent' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-09",
  "topicId": "power-factor",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of power factor systems, what is the significance of 'cos phi'?",
  "options": [
    "It is a primary PF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'cos phi' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-10",
  "topicId": "power-factor",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of power factor systems, what is the significance of 'Reactive power'?",
  "options": [
    "It is a primary PF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Reactive power' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-11",
  "topicId": "power-factor",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Lagging vs Leading' is a mandatory safety consideration in power factor.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Lagging vs Leading' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-12",
  "topicId": "power-factor",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of power factor systems, what is the significance of 'Real vs Apparent'?",
  "options": [
    "It is a primary PF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Real vs Apparent' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-13",
  "topicId": "power-factor",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of power factor systems, what is the significance of 'cos phi'?",
  "options": [
    "It is a primary PF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'cos phi' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-14",
  "topicId": "power-factor",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of power factor systems, what is the significance of 'Reactive power'?",
  "options": [
    "It is a primary PF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Reactive power' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-power-factor-15",
  "topicId": "power-factor",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating power factor for a load of 377 kW. How does 'Lagging vs Leading' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PF sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Lagging vs Leading' is essential for professional power factor works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-00",
  "topicId": "units-measurement",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating units measurement for a load of 342 kW. How does 'Ampere is current' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Units sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ampere is current' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-01",
  "topicId": "units-measurement",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating units measurement for a load of 122 kW. How does 'Volt is potential' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Units sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Volt is potential' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-02",
  "topicId": "units-measurement",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of units measurement systems, what is the significance of 'Ohm is R'?",
  "options": [
    "It is a primary Units requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ohm is R' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-03",
  "topicId": "units-measurement",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Watt is P' is a mandatory safety consideration in units measurement.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Watt is P' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-04",
  "topicId": "units-measurement",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating units measurement for a load of 79 kW. How does 'Ampere is current' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Units sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ampere is current' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-05",
  "topicId": "units-measurement",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating units measurement for a load of 110 kW. How does 'Volt is potential' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Units sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Volt is potential' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-06",
  "topicId": "units-measurement",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating units measurement for a load of 409 kW. How does 'Ohm is R' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Units sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ohm is R' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-07",
  "topicId": "units-measurement",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Watt is P' is a mandatory safety consideration in units measurement.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Watt is P' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-08",
  "topicId": "units-measurement",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating units measurement for a load of 409 kW. How does 'Ampere is current' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Units sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ampere is current' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-09",
  "topicId": "units-measurement",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of units measurement systems, what is the significance of 'Volt is potential'?",
  "options": [
    "It is a primary Units requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Volt is potential' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-10",
  "topicId": "units-measurement",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of units measurement systems, what is the significance of 'Ohm is R'?",
  "options": [
    "It is a primary Units requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ohm is R' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-11",
  "topicId": "units-measurement",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating units measurement for a load of 368 kW. How does 'Watt is P' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Units sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Watt is P' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-12",
  "topicId": "units-measurement",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Ampere is current' is a mandatory safety consideration in units measurement.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Ampere is current' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-13",
  "topicId": "units-measurement",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating units measurement for a load of 385 kW. How does 'Volt is potential' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Units sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Volt is potential' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-14",
  "topicId": "units-measurement",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating units measurement for a load of 195 kW. How does 'Ohm is R' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Units sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ohm is R' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-units-measurement-15",
  "topicId": "units-measurement",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Watt is P' is a mandatory safety consideration in units measurement.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Watt is P' is essential for professional units measurement works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-00",
  "topicId": "electrical-symbols",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Zigzag is R' is a mandatory safety consideration in electrical symbols.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Zigzag is R' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-01",
  "topicId": "electrical-symbols",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical symbols for a load of 454 kW. How does 'Parallel lines C' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Symbols sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Parallel lines C' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-02",
  "topicId": "electrical-symbols",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical symbols for a load of 11 kW. How does 'Coil is L' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Symbols sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coil is L' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-03",
  "topicId": "electrical-symbols",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Circle is Source' is a mandatory safety consideration in electrical symbols.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Circle is Source' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-04",
  "topicId": "electrical-symbols",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Zigzag is R' is a mandatory safety consideration in electrical symbols.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Zigzag is R' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-05",
  "topicId": "electrical-symbols",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical symbols for a load of 48 kW. How does 'Parallel lines C' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Symbols sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Parallel lines C' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-06",
  "topicId": "electrical-symbols",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical symbols for a load of 129 kW. How does 'Coil is L' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Symbols sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coil is L' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-07",
  "topicId": "electrical-symbols",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of electrical symbols systems, what is the significance of 'Circle is Source'?",
  "options": [
    "It is a primary Symbols requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Circle is Source' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-08",
  "topicId": "electrical-symbols",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of electrical symbols systems, what is the significance of 'Zigzag is R'?",
  "options": [
    "It is a primary Symbols requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Zigzag is R' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-09",
  "topicId": "electrical-symbols",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical symbols for a load of 312 kW. How does 'Parallel lines C' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Symbols sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Parallel lines C' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-10",
  "topicId": "electrical-symbols",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical symbols for a load of 125 kW. How does 'Coil is L' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Symbols sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coil is L' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-11",
  "topicId": "electrical-symbols",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical symbols for a load of 163 kW. How does 'Circle is Source' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Symbols sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Circle is Source' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-12",
  "topicId": "electrical-symbols",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Zigzag is R' is a mandatory safety consideration in electrical symbols.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Zigzag is R' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-13",
  "topicId": "electrical-symbols",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Parallel lines C' is a mandatory safety consideration in electrical symbols.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Parallel lines C' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-14",
  "topicId": "electrical-symbols",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Coil is L' is a mandatory safety consideration in electrical symbols.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Coil is L' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-symbols-15",
  "topicId": "electrical-symbols",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Circle is Source' is a mandatory safety consideration in electrical symbols.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Circle is Source' is essential for professional electrical symbols works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-00",
  "topicId": "intro-drawings",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'SLD vs Layout' is a mandatory safety consideration in intro drawings.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'SLD vs Layout' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-01",
  "topicId": "intro-drawings",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Title block' is a mandatory safety consideration in intro drawings.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Title block' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-02",
  "topicId": "intro-drawings",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of intro drawings systems, what is the significance of 'Legend'?",
  "options": [
    "It is a primary Drawings requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Legend' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-03",
  "topicId": "intro-drawings",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of intro drawings systems, what is the significance of 'Scale'?",
  "options": [
    "It is a primary Drawings requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Scale' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-04",
  "topicId": "intro-drawings",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'SLD vs Layout' is a mandatory safety consideration in intro drawings.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'SLD vs Layout' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-05",
  "topicId": "intro-drawings",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of intro drawings systems, what is the significance of 'Title block'?",
  "options": [
    "It is a primary Drawings requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Title block' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-06",
  "topicId": "intro-drawings",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating intro drawings for a load of 121 kW. How does 'Legend' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Drawings sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Legend' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-07",
  "topicId": "intro-drawings",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of intro drawings systems, what is the significance of 'Scale'?",
  "options": [
    "It is a primary Drawings requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Scale' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-08",
  "topicId": "intro-drawings",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating intro drawings for a load of 86 kW. How does 'SLD vs Layout' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Drawings sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'SLD vs Layout' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-09",
  "topicId": "intro-drawings",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of intro drawings systems, what is the significance of 'Title block'?",
  "options": [
    "It is a primary Drawings requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Title block' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-10",
  "topicId": "intro-drawings",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Legend' is a mandatory safety consideration in intro drawings.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Legend' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-11",
  "topicId": "intro-drawings",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating intro drawings for a load of 190 kW. How does 'Scale' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Drawings sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Scale' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-12",
  "topicId": "intro-drawings",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'SLD vs Layout' is a mandatory safety consideration in intro drawings.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'SLD vs Layout' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-13",
  "topicId": "intro-drawings",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating intro drawings for a load of 133 kW. How does 'Title block' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Drawings sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Title block' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-14",
  "topicId": "intro-drawings",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Legend' is a mandatory safety consideration in intro drawings.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Legend' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-intro-drawings-15",
  "topicId": "intro-drawings",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Scale' is a mandatory safety consideration in intro drawings.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Scale' is essential for professional intro drawings works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-00",
  "topicId": "how-to-read-codes-l1",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of how to read codes l1 systems, what is the significance of 'NEC vs IEC'?",
  "options": [
    "It is a primary Codes requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'NEC vs IEC' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-01",
  "topicId": "how-to-read-codes-l1",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 12 kW. How does 'Compliance' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Compliance' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-02",
  "topicId": "how-to-read-codes-l1",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 442 kW. How does 'Safety first' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Safety first' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-03",
  "topicId": "how-to-read-codes-l1",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 183 kW. How does 'Legal weight' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Legal weight' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-04",
  "topicId": "how-to-read-codes-l1",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'NEC vs IEC' is a mandatory safety consideration in how to read codes l1.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'NEC vs IEC' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-05",
  "topicId": "how-to-read-codes-l1",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 36 kW. How does 'Compliance' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Compliance' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-06",
  "topicId": "how-to-read-codes-l1",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Safety first' is a mandatory safety consideration in how to read codes l1.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Safety first' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-07",
  "topicId": "how-to-read-codes-l1",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 426 kW. How does 'Legal weight' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Legal weight' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-08",
  "topicId": "how-to-read-codes-l1",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 292 kW. How does 'NEC vs IEC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'NEC vs IEC' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-09",
  "topicId": "how-to-read-codes-l1",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 46 kW. How does 'Compliance' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Compliance' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-10",
  "topicId": "how-to-read-codes-l1",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 252 kW. How does 'Safety first' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Safety first' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-11",
  "topicId": "how-to-read-codes-l1",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Legal weight' is a mandatory safety consideration in how to read codes l1.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Legal weight' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-12",
  "topicId": "how-to-read-codes-l1",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of how to read codes l1 systems, what is the significance of 'NEC vs IEC'?",
  "options": [
    "It is a primary Codes requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'NEC vs IEC' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-13",
  "topicId": "how-to-read-codes-l1",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 248 kW. How does 'Compliance' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Compliance' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-14",
  "topicId": "how-to-read-codes-l1",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Safety first' is a mandatory safety consideration in how to read codes l1.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Safety first' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l1-15",
  "topicId": "how-to-read-codes-l1",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l1 for a load of 225 kW. How does 'Legal weight' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Legal weight' is essential for professional how to read codes l1 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-00",
  "topicId": "per-unit-system",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of per unit system systems, what is the significance of 'Base kVA'?",
  "options": [
    "It is a primary pu requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Base kVA' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-01",
  "topicId": "per-unit-system",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of per unit system systems, what is the significance of 'Base kV'?",
  "options": [
    "It is a primary pu requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Base kV' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-02",
  "topicId": "per-unit-system",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating per unit system for a load of 363 kW. How does 'Unitless math' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the pu sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Unitless math' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-03",
  "topicId": "per-unit-system",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating per unit system for a load of 242 kW. How does 'Simplifies SC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the pu sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Simplifies SC' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-04",
  "topicId": "per-unit-system",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of per unit system systems, what is the significance of 'Base kVA'?",
  "options": [
    "It is a primary pu requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Base kVA' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-05",
  "topicId": "per-unit-system",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating per unit system for a load of 252 kW. How does 'Base kV' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the pu sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Base kV' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-06",
  "topicId": "per-unit-system",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Unitless math' is a mandatory safety consideration in per unit system.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Unitless math' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-07",
  "topicId": "per-unit-system",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating per unit system for a load of 422 kW. How does 'Simplifies SC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the pu sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Simplifies SC' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-08",
  "topicId": "per-unit-system",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of per unit system systems, what is the significance of 'Base kVA'?",
  "options": [
    "It is a primary pu requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Base kVA' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-09",
  "topicId": "per-unit-system",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of per unit system systems, what is the significance of 'Base kV'?",
  "options": [
    "It is a primary pu requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Base kV' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-10",
  "topicId": "per-unit-system",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating per unit system for a load of 489 kW. How does 'Unitless math' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the pu sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Unitless math' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-11",
  "topicId": "per-unit-system",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating per unit system for a load of 106 kW. How does 'Simplifies SC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the pu sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Simplifies SC' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-12",
  "topicId": "per-unit-system",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of per unit system systems, what is the significance of 'Base kVA'?",
  "options": [
    "It is a primary pu requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Base kVA' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-13",
  "topicId": "per-unit-system",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of per unit system systems, what is the significance of 'Base kV'?",
  "options": [
    "It is a primary pu requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Base kV' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-14",
  "topicId": "per-unit-system",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating per unit system for a load of 321 kW. How does 'Unitless math' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the pu sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Unitless math' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-per-unit-system-15",
  "topicId": "per-unit-system",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating per unit system for a load of 20 kW. How does 'Simplifies SC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the pu sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Simplifies SC' is essential for professional per unit system works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-00",
  "topicId": "symmetrical-components",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Positive seq' is a mandatory safety consideration in symmetrical components.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Positive seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-01",
  "topicId": "symmetrical-components",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating symmetrical components for a load of 96 kW. How does 'Negative seq' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Seq sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Negative seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-02",
  "topicId": "symmetrical-components",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of symmetrical components systems, what is the significance of 'Zero seq'?",
  "options": [
    "It is a primary Seq requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Zero seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-03",
  "topicId": "symmetrical-components",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Fortescue' is a mandatory safety consideration in symmetrical components.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Fortescue' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-04",
  "topicId": "symmetrical-components",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Positive seq' is a mandatory safety consideration in symmetrical components.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Positive seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-05",
  "topicId": "symmetrical-components",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of symmetrical components systems, what is the significance of 'Negative seq'?",
  "options": [
    "It is a primary Seq requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Negative seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-06",
  "topicId": "symmetrical-components",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of symmetrical components systems, what is the significance of 'Zero seq'?",
  "options": [
    "It is a primary Seq requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Zero seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-07",
  "topicId": "symmetrical-components",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of symmetrical components systems, what is the significance of 'Fortescue'?",
  "options": [
    "It is a primary Seq requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fortescue' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-08",
  "topicId": "symmetrical-components",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating symmetrical components for a load of 138 kW. How does 'Positive seq' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Seq sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Positive seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-09",
  "topicId": "symmetrical-components",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of symmetrical components systems, what is the significance of 'Negative seq'?",
  "options": [
    "It is a primary Seq requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Negative seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-10",
  "topicId": "symmetrical-components",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Zero seq' is a mandatory safety consideration in symmetrical components.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Zero seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-11",
  "topicId": "symmetrical-components",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating symmetrical components for a load of 138 kW. How does 'Fortescue' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Seq sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fortescue' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-12",
  "topicId": "symmetrical-components",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Positive seq' is a mandatory safety consideration in symmetrical components.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Positive seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-13",
  "topicId": "symmetrical-components",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Negative seq' is a mandatory safety consideration in symmetrical components.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Negative seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-14",
  "topicId": "symmetrical-components",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Zero seq' is a mandatory safety consideration in symmetrical components.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Zero seq' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-symmetrical-components-15",
  "topicId": "symmetrical-components",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating symmetrical components for a load of 172 kW. How does 'Fortescue' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Seq sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fortescue' is essential for professional symmetrical components works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-00",
  "topicId": "electrical-safety",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of electrical safety systems, what is the significance of 'LOTO'?",
  "options": [
    "It is a primary Safety requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'LOTO' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-01",
  "topicId": "electrical-safety",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of electrical safety systems, what is the significance of 'Arc flash PPE'?",
  "options": [
    "It is a primary Safety requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Arc flash PPE' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-02",
  "topicId": "electrical-safety",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical safety for a load of 112 kW. How does 'Grounding' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Safety sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Grounding' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-03",
  "topicId": "electrical-safety",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical safety for a load of 428 kW. How does 'Touch voltage' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Safety sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Touch voltage' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-04",
  "topicId": "electrical-safety",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'LOTO' is a mandatory safety consideration in electrical safety.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'LOTO' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-05",
  "topicId": "electrical-safety",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical safety for a load of 426 kW. How does 'Arc flash PPE' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Safety sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Arc flash PPE' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-06",
  "topicId": "electrical-safety",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Grounding' is a mandatory safety consideration in electrical safety.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Grounding' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-07",
  "topicId": "electrical-safety",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Touch voltage' is a mandatory safety consideration in electrical safety.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Touch voltage' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-08",
  "topicId": "electrical-safety",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical safety for a load of 120 kW. How does 'LOTO' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Safety sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'LOTO' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-09",
  "topicId": "electrical-safety",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Arc flash PPE' is a mandatory safety consideration in electrical safety.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Arc flash PPE' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-10",
  "topicId": "electrical-safety",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of electrical safety systems, what is the significance of 'Grounding'?",
  "options": [
    "It is a primary Safety requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Grounding' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-11",
  "topicId": "electrical-safety",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Touch voltage' is a mandatory safety consideration in electrical safety.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Touch voltage' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-12",
  "topicId": "electrical-safety",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'LOTO' is a mandatory safety consideration in electrical safety.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'LOTO' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-13",
  "topicId": "electrical-safety",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating electrical safety for a load of 491 kW. How does 'Arc flash PPE' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Safety sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Arc flash PPE' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-14",
  "topicId": "electrical-safety",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Grounding' is a mandatory safety consideration in electrical safety.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Grounding' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-electrical-safety-15",
  "topicId": "electrical-safety",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of electrical safety systems, what is the significance of 'Touch voltage'?",
  "options": [
    "It is a primary Safety requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Touch voltage' is essential for professional electrical safety works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-00",
  "topicId": "guided-path",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Student path' is a mandatory safety consideration in guided path.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Student path' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-01",
  "topicId": "guided-path",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of guided path systems, what is the significance of 'Pro path'?",
  "options": [
    "It is a primary Path requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pro path' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-02",
  "topicId": "guided-path",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating guided path for a load of 207 kW. How does 'Level-based' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Path sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Level-based' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-03",
  "topicId": "guided-path",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of guided path systems, what is the significance of 'Career growth'?",
  "options": [
    "It is a primary Path requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Career growth' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-04",
  "topicId": "guided-path",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating guided path for a load of 262 kW. How does 'Student path' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Path sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Student path' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-05",
  "topicId": "guided-path",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating guided path for a load of 91 kW. How does 'Pro path' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Path sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pro path' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-06",
  "topicId": "guided-path",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of guided path systems, what is the significance of 'Level-based'?",
  "options": [
    "It is a primary Path requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Level-based' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-07",
  "topicId": "guided-path",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of guided path systems, what is the significance of 'Career growth'?",
  "options": [
    "It is a primary Path requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Career growth' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-08",
  "topicId": "guided-path",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating guided path for a load of 112 kW. How does 'Student path' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Path sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Student path' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-09",
  "topicId": "guided-path",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating guided path for a load of 348 kW. How does 'Pro path' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Path sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pro path' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-10",
  "topicId": "guided-path",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of guided path systems, what is the significance of 'Level-based'?",
  "options": [
    "It is a primary Path requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Level-based' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-11",
  "topicId": "guided-path",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of guided path systems, what is the significance of 'Career growth'?",
  "options": [
    "It is a primary Path requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Career growth' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-12",
  "topicId": "guided-path",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of guided path systems, what is the significance of 'Student path'?",
  "options": [
    "It is a primary Path requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Student path' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-13",
  "topicId": "guided-path",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of guided path systems, what is the significance of 'Pro path'?",
  "options": [
    "It is a primary Path requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pro path' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-14",
  "topicId": "guided-path",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Level-based' is a mandatory safety consideration in guided path.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Level-based' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-guided-path-15",
  "topicId": "guided-path",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Career growth' is a mandatory safety consideration in guided path.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Career growth' is essential for professional guided path works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-00",
  "topicId": "load-calculation",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'Connected load'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Connected load' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-01",
  "topicId": "load-calculation",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Demand Factor' is a mandatory safety consideration in load calculation.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Demand Factor' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-02",
  "topicId": "load-calculation",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'Diversity'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-03",
  "topicId": "load-calculation",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating load calculation for a load of 298 kW. How does 'kW to kVA' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kW sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'kW to kVA' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-04",
  "topicId": "load-calculation",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'Connected load'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Connected load' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-05",
  "topicId": "load-calculation",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Demand Factor' is a mandatory safety consideration in load calculation.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Demand Factor' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-06",
  "topicId": "load-calculation",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating load calculation for a load of 98 kW. How does 'Diversity' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kW sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-07",
  "topicId": "load-calculation",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'kW to kVA'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kW to kVA' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-08",
  "topicId": "load-calculation",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'Connected load'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Connected load' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-09",
  "topicId": "load-calculation",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Demand Factor' is a mandatory safety consideration in load calculation.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Demand Factor' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-10",
  "topicId": "load-calculation",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'Diversity'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-11",
  "topicId": "load-calculation",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'kW to kVA'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kW to kVA' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-12",
  "topicId": "load-calculation",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating load calculation for a load of 350 kW. How does 'Connected load' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kW sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Connected load' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-13",
  "topicId": "load-calculation",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'Demand Factor'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Demand Factor' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-14",
  "topicId": "load-calculation",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'Diversity'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-load-calculation-15",
  "topicId": "load-calculation",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of load calculation systems, what is the significance of 'kW to kVA'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kW to kVA' is essential for professional load calculation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-00",
  "topicId": "max-demand-tariff",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Billing demand' is a mandatory safety consideration in max demand tariff.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Billing demand' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-01",
  "topicId": "max-demand-tariff",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating max demand tariff for a load of 472 kW. How does 'Time of use' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tariff sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Time of use' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-02",
  "topicId": "max-demand-tariff",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'PF penalty' is a mandatory safety consideration in max demand tariff.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'PF penalty' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-03",
  "topicId": "max-demand-tariff",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating max demand tariff for a load of 198 kW. How does 'Fixed charge' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tariff sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fixed charge' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-04",
  "topicId": "max-demand-tariff",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating max demand tariff for a load of 272 kW. How does 'Billing demand' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tariff sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Billing demand' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-05",
  "topicId": "max-demand-tariff",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating max demand tariff for a load of 16 kW. How does 'Time of use' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tariff sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Time of use' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-06",
  "topicId": "max-demand-tariff",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'PF penalty' is a mandatory safety consideration in max demand tariff.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'PF penalty' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-07",
  "topicId": "max-demand-tariff",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating max demand tariff for a load of 13 kW. How does 'Fixed charge' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tariff sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fixed charge' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-08",
  "topicId": "max-demand-tariff",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Billing demand' is a mandatory safety consideration in max demand tariff.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Billing demand' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-09",
  "topicId": "max-demand-tariff",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating max demand tariff for a load of 187 kW. How does 'Time of use' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tariff sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Time of use' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-10",
  "topicId": "max-demand-tariff",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of max demand tariff systems, what is the significance of 'PF penalty'?",
  "options": [
    "It is a primary Tariff requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'PF penalty' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-11",
  "topicId": "max-demand-tariff",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Fixed charge' is a mandatory safety consideration in max demand tariff.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Fixed charge' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-12",
  "topicId": "max-demand-tariff",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of max demand tariff systems, what is the significance of 'Billing demand'?",
  "options": [
    "It is a primary Tariff requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Billing demand' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-13",
  "topicId": "max-demand-tariff",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating max demand tariff for a load of 400 kW. How does 'Time of use' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tariff sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Time of use' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-14",
  "topicId": "max-demand-tariff",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of max demand tariff systems, what is the significance of 'PF penalty'?",
  "options": [
    "It is a primary Tariff requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'PF penalty' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-max-demand-tariff-15",
  "topicId": "max-demand-tariff",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating max demand tariff for a load of 465 kW. How does 'Fixed charge' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tariff sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fixed charge' is essential for professional max demand tariff works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-00",
  "topicId": "cable-sizing",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating cable sizing for a load of 321 kW. How does 'Thermal capacity' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the mm2/AWG sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Thermal capacity' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-01",
  "topicId": "cable-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Voltage drop' is a mandatory safety consideration in cable sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Voltage drop' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-02",
  "topicId": "cable-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating cable sizing for a load of 172 kW. How does 'Short circuit' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the mm2/AWG sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Short circuit' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-03",
  "topicId": "cable-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Installation method' is a mandatory safety consideration in cable sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Installation method' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-04",
  "topicId": "cable-sizing",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Thermal capacity' is a mandatory safety consideration in cable sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Thermal capacity' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-05",
  "topicId": "cable-sizing",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Voltage drop' is a mandatory safety consideration in cable sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Voltage drop' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-06",
  "topicId": "cable-sizing",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating cable sizing for a load of 285 kW. How does 'Short circuit' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the mm2/AWG sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Short circuit' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-07",
  "topicId": "cable-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Installation method' is a mandatory safety consideration in cable sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Installation method' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-08",
  "topicId": "cable-sizing",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Thermal capacity' is a mandatory safety consideration in cable sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Thermal capacity' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-09",
  "topicId": "cable-sizing",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of cable sizing systems, what is the significance of 'Voltage drop'?",
  "options": [
    "It is a primary mm2/AWG requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Voltage drop' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-10",
  "topicId": "cable-sizing",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating cable sizing for a load of 281 kW. How does 'Short circuit' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the mm2/AWG sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Short circuit' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-11",
  "topicId": "cable-sizing",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of cable sizing systems, what is the significance of 'Installation method'?",
  "options": [
    "It is a primary mm2/AWG requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Installation method' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-12",
  "topicId": "cable-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Thermal capacity' is a mandatory safety consideration in cable sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Thermal capacity' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-13",
  "topicId": "cable-sizing",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of cable sizing systems, what is the significance of 'Voltage drop'?",
  "options": [
    "It is a primary mm2/AWG requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Voltage drop' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-14",
  "topicId": "cable-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of cable sizing systems, what is the significance of 'Short circuit'?",
  "options": [
    "It is a primary mm2/AWG requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Short circuit' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-sizing-15",
  "topicId": "cable-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Installation method' is a mandatory safety consideration in cable sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Installation method' is essential for professional cable sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-00",
  "topicId": "voltage-drop",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Length penalty' is a mandatory safety consideration in voltage drop.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Length penalty' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-01",
  "topicId": "voltage-drop",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Material R' is a mandatory safety consideration in voltage drop.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Material R' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-02",
  "topicId": "voltage-drop",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating voltage drop for a load of 233 kW. How does 'PF impact' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the % sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'PF impact' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-03",
  "topicId": "voltage-drop",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of '5% limit' is a mandatory safety consideration in voltage drop.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding '5% limit' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-04",
  "topicId": "voltage-drop",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating voltage drop for a load of 312 kW. How does 'Length penalty' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the % sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Length penalty' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-05",
  "topicId": "voltage-drop",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating voltage drop for a load of 163 kW. How does 'Material R' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the % sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Material R' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-06",
  "topicId": "voltage-drop",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'PF impact' is a mandatory safety consideration in voltage drop.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'PF impact' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-07",
  "topicId": "voltage-drop",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of '5% limit' is a mandatory safety consideration in voltage drop.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding '5% limit' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-08",
  "topicId": "voltage-drop",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of voltage drop systems, what is the significance of 'Length penalty'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Length penalty' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-09",
  "topicId": "voltage-drop",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of voltage drop systems, what is the significance of 'Material R'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Material R' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-10",
  "topicId": "voltage-drop",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of voltage drop systems, what is the significance of 'PF impact'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'PF impact' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-11",
  "topicId": "voltage-drop",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of voltage drop systems, what is the significance of '5% limit'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding '5% limit' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-12",
  "topicId": "voltage-drop",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of voltage drop systems, what is the significance of 'Length penalty'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Length penalty' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-13",
  "topicId": "voltage-drop",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Material R' is a mandatory safety consideration in voltage drop.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Material R' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-14",
  "topicId": "voltage-drop",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'PF impact' is a mandatory safety consideration in voltage drop.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'PF impact' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-voltage-drop-15",
  "topicId": "voltage-drop",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of voltage drop systems, what is the significance of '5% limit'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding '5% limit' is essential for professional voltage drop works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-00",
  "topicId": "earthing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Soil resistivity' is a mandatory safety consideration in earthing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Soil resistivity' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-01",
  "topicId": "earthing",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of earthing systems, what is the significance of 'Earth rod'?",
  "options": [
    "It is a primary Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Earth rod' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-02",
  "topicId": "earthing",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of earthing systems, what is the significance of 'Loop impedance'?",
  "options": [
    "It is a primary Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Loop impedance' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-03",
  "topicId": "earthing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'TT vs TN system' is a mandatory safety consideration in earthing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'TT vs TN system' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-04",
  "topicId": "earthing",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of earthing systems, what is the significance of 'Soil resistivity'?",
  "options": [
    "It is a primary Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Soil resistivity' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-05",
  "topicId": "earthing",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating earthing for a load of 257 kW. How does 'Earth rod' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Earth rod' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-06",
  "topicId": "earthing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of earthing systems, what is the significance of 'Loop impedance'?",
  "options": [
    "It is a primary Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Loop impedance' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-07",
  "topicId": "earthing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of earthing systems, what is the significance of 'TT vs TN system'?",
  "options": [
    "It is a primary Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'TT vs TN system' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-08",
  "topicId": "earthing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Soil resistivity' is a mandatory safety consideration in earthing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Soil resistivity' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-09",
  "topicId": "earthing",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating earthing for a load of 132 kW. How does 'Earth rod' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Earth rod' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-10",
  "topicId": "earthing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating earthing for a load of 87 kW. How does 'Loop impedance' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Loop impedance' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-11",
  "topicId": "earthing",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'TT vs TN system' is a mandatory safety consideration in earthing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'TT vs TN system' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-12",
  "topicId": "earthing",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of earthing systems, what is the significance of 'Soil resistivity'?",
  "options": [
    "It is a primary Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Soil resistivity' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-13",
  "topicId": "earthing",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating earthing for a load of 342 kW. How does 'Earth rod' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Ohm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Earth rod' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-14",
  "topicId": "earthing",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of earthing systems, what is the significance of 'Loop impedance'?",
  "options": [
    "It is a primary Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Loop impedance' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-earthing-15",
  "topicId": "earthing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of earthing systems, what is the significance of 'TT vs TN system'?",
  "options": [
    "It is a primary Ohm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'TT vs TN system' is essential for professional earthing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-00",
  "topicId": "circuit-protection",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'MCB vs MCCB' is a mandatory safety consideration in circuit protection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'MCB vs MCCB' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-01",
  "topicId": "circuit-protection",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of circuit protection systems, what is the significance of 'Breaking cap'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Breaking cap' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-02",
  "topicId": "circuit-protection",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating circuit protection for a load of 321 kW. How does 'Trip curve' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Trip curve' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-03",
  "topicId": "circuit-protection",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating circuit protection for a load of 279 kW. How does 'Selectivity' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Selectivity' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-04",
  "topicId": "circuit-protection",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating circuit protection for a load of 189 kW. How does 'MCB vs MCCB' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'MCB vs MCCB' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-05",
  "topicId": "circuit-protection",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Breaking cap' is a mandatory safety consideration in circuit protection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Breaking cap' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-06",
  "topicId": "circuit-protection",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating circuit protection for a load of 89 kW. How does 'Trip curve' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Trip curve' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-07",
  "topicId": "circuit-protection",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of circuit protection systems, what is the significance of 'Selectivity'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Selectivity' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-08",
  "topicId": "circuit-protection",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of circuit protection systems, what is the significance of 'MCB vs MCCB'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'MCB vs MCCB' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-09",
  "topicId": "circuit-protection",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Breaking cap' is a mandatory safety consideration in circuit protection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Breaking cap' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-10",
  "topicId": "circuit-protection",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of circuit protection systems, what is the significance of 'Trip curve'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Trip curve' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-11",
  "topicId": "circuit-protection",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating circuit protection for a load of 92 kW. How does 'Selectivity' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Selectivity' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-12",
  "topicId": "circuit-protection",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'MCB vs MCCB' is a mandatory safety consideration in circuit protection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'MCB vs MCCB' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-13",
  "topicId": "circuit-protection",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating circuit protection for a load of 122 kW. How does 'Breaking cap' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Breaking cap' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-14",
  "topicId": "circuit-protection",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Trip curve' is a mandatory safety consideration in circuit protection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Trip curve' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-circuit-protection-15",
  "topicId": "circuit-protection",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Selectivity' is a mandatory safety consideration in circuit protection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Selectivity' is essential for professional circuit protection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-00",
  "topicId": "pf-correction",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pf correction for a load of 372 kW. How does 'Capacitor bank' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVAr sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Capacitor bank' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-01",
  "topicId": "pf-correction",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pf correction for a load of 464 kW. How does 'APFC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVAr sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'APFC' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-02",
  "topicId": "pf-correction",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pf correction systems, what is the significance of 'kVAr reduction'?",
  "options": [
    "It is a primary kVAr requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kVAr reduction' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-03",
  "topicId": "pf-correction",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pf correction systems, what is the significance of 'Transients'?",
  "options": [
    "It is a primary kVAr requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transients' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-04",
  "topicId": "pf-correction",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pf correction for a load of 33 kW. How does 'Capacitor bank' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVAr sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Capacitor bank' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-05",
  "topicId": "pf-correction",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'APFC' is a mandatory safety consideration in pf correction.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'APFC' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-06",
  "topicId": "pf-correction",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pf correction systems, what is the significance of 'kVAr reduction'?",
  "options": [
    "It is a primary kVAr requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kVAr reduction' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-07",
  "topicId": "pf-correction",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pf correction for a load of 318 kW. How does 'Transients' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVAr sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transients' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-08",
  "topicId": "pf-correction",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pf correction for a load of 205 kW. How does 'Capacitor bank' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVAr sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Capacitor bank' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-09",
  "topicId": "pf-correction",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pf correction systems, what is the significance of 'APFC'?",
  "options": [
    "It is a primary kVAr requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'APFC' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-10",
  "topicId": "pf-correction",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pf correction systems, what is the significance of 'kVAr reduction'?",
  "options": [
    "It is a primary kVAr requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kVAr reduction' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-11",
  "topicId": "pf-correction",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pf correction for a load of 405 kW. How does 'Transients' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVAr sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transients' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-12",
  "topicId": "pf-correction",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pf correction for a load of 178 kW. How does 'Capacitor bank' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVAr sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Capacitor bank' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-13",
  "topicId": "pf-correction",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pf correction for a load of 386 kW. How does 'APFC' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVAr sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'APFC' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-14",
  "topicId": "pf-correction",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'kVAr reduction' is a mandatory safety consideration in pf correction.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'kVAr reduction' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pf-correction-15",
  "topicId": "pf-correction",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pf correction for a load of 449 kW. How does 'Transients' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVAr sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transients' is essential for professional pf correction works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-00",
  "topicId": "panel-schedule",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of panel schedule systems, what is the significance of 'Balancing phases'?",
  "options": [
    "It is a primary Schedule requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Balancing phases' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-01",
  "topicId": "panel-schedule",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating panel schedule for a load of 333 kW. How does 'Spare slots' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Schedule sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Spare slots' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-02",
  "topicId": "panel-schedule",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating panel schedule for a load of 213 kW. How does 'Naming' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Schedule sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Naming' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-03",
  "topicId": "panel-schedule",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Load summary' is a mandatory safety consideration in panel schedule.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Load summary' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-04",
  "topicId": "panel-schedule",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of panel schedule systems, what is the significance of 'Balancing phases'?",
  "options": [
    "It is a primary Schedule requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Balancing phases' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-05",
  "topicId": "panel-schedule",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of panel schedule systems, what is the significance of 'Spare slots'?",
  "options": [
    "It is a primary Schedule requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Spare slots' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-06",
  "topicId": "panel-schedule",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Naming' is a mandatory safety consideration in panel schedule.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Naming' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-07",
  "topicId": "panel-schedule",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of panel schedule systems, what is the significance of 'Load summary'?",
  "options": [
    "It is a primary Schedule requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Load summary' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-08",
  "topicId": "panel-schedule",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating panel schedule for a load of 257 kW. How does 'Balancing phases' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Schedule sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Balancing phases' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-09",
  "topicId": "panel-schedule",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating panel schedule for a load of 411 kW. How does 'Spare slots' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Schedule sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Spare slots' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-10",
  "topicId": "panel-schedule",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Naming' is a mandatory safety consideration in panel schedule.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Naming' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-11",
  "topicId": "panel-schedule",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of panel schedule systems, what is the significance of 'Load summary'?",
  "options": [
    "It is a primary Schedule requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Load summary' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-12",
  "topicId": "panel-schedule",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of panel schedule systems, what is the significance of 'Balancing phases'?",
  "options": [
    "It is a primary Schedule requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Balancing phases' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-13",
  "topicId": "panel-schedule",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of panel schedule systems, what is the significance of 'Spare slots'?",
  "options": [
    "It is a primary Schedule requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Spare slots' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-14",
  "topicId": "panel-schedule",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating panel schedule for a load of 420 kW. How does 'Naming' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Schedule sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Naming' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-panel-schedule-15",
  "topicId": "panel-schedule",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating panel schedule for a load of 145 kW. How does 'Load summary' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Schedule sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Load summary' is essential for professional panel schedule works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-00",
  "topicId": "demand-factor-tables",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of demand factor tables systems, what is the significance of 'Residential DF'?",
  "options": [
    "It is a primary DF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Residential DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-01",
  "topicId": "demand-factor-tables",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of demand factor tables systems, what is the significance of 'Industrial DF'?",
  "options": [
    "It is a primary DF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Industrial DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-02",
  "topicId": "demand-factor-tables",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of demand factor tables systems, what is the significance of 'Office DF'?",
  "options": [
    "It is a primary DF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Office DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-03",
  "topicId": "demand-factor-tables",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating demand factor tables for a load of 175 kW. How does 'Code tables' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the DF sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Code tables' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-04",
  "topicId": "demand-factor-tables",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Residential DF' is a mandatory safety consideration in demand factor tables.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Residential DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-05",
  "topicId": "demand-factor-tables",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Industrial DF' is a mandatory safety consideration in demand factor tables.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Industrial DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-06",
  "topicId": "demand-factor-tables",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Office DF' is a mandatory safety consideration in demand factor tables.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Office DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-07",
  "topicId": "demand-factor-tables",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of demand factor tables systems, what is the significance of 'Code tables'?",
  "options": [
    "It is a primary DF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Code tables' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-08",
  "topicId": "demand-factor-tables",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Residential DF' is a mandatory safety consideration in demand factor tables.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Residential DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-09",
  "topicId": "demand-factor-tables",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Industrial DF' is a mandatory safety consideration in demand factor tables.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Industrial DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-10",
  "topicId": "demand-factor-tables",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of demand factor tables systems, what is the significance of 'Office DF'?",
  "options": [
    "It is a primary DF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Office DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-11",
  "topicId": "demand-factor-tables",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Code tables' is a mandatory safety consideration in demand factor tables.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Code tables' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-12",
  "topicId": "demand-factor-tables",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Residential DF' is a mandatory safety consideration in demand factor tables.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Residential DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-13",
  "topicId": "demand-factor-tables",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating demand factor tables for a load of 252 kW. How does 'Industrial DF' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the DF sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Industrial DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-14",
  "topicId": "demand-factor-tables",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Office DF' is a mandatory safety consideration in demand factor tables.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Office DF' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-demand-factor-tables-15",
  "topicId": "demand-factor-tables",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of demand factor tables systems, what is the significance of 'Code tables'?",
  "options": [
    "It is a primary DF requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Code tables' is essential for professional demand factor tables works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-00",
  "topicId": "diversity-load-profile",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating diversity load profile for a load of 145 kW. How does 'Peak vs Avg' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Div sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Peak vs Avg' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-01",
  "topicId": "diversity-load-profile",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating diversity load profile for a load of 286 kW. How does 'Diversity factor' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Div sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity factor' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-02",
  "topicId": "diversity-load-profile",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Coincidence' is a mandatory safety consideration in diversity load profile.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Coincidence' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-03",
  "topicId": "diversity-load-profile",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating diversity load profile for a load of 471 kW. How does 'Transformer loading' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Div sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transformer loading' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-04",
  "topicId": "diversity-load-profile",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Peak vs Avg' is a mandatory safety consideration in diversity load profile.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Peak vs Avg' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-05",
  "topicId": "diversity-load-profile",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating diversity load profile for a load of 399 kW. How does 'Diversity factor' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Div sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity factor' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-06",
  "topicId": "diversity-load-profile",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of diversity load profile systems, what is the significance of 'Coincidence'?",
  "options": [
    "It is a primary Div requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coincidence' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-07",
  "topicId": "diversity-load-profile",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of diversity load profile systems, what is the significance of 'Transformer loading'?",
  "options": [
    "It is a primary Div requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transformer loading' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-08",
  "topicId": "diversity-load-profile",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Peak vs Avg' is a mandatory safety consideration in diversity load profile.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Peak vs Avg' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-09",
  "topicId": "diversity-load-profile",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of diversity load profile systems, what is the significance of 'Diversity factor'?",
  "options": [
    "It is a primary Div requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity factor' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-10",
  "topicId": "diversity-load-profile",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating diversity load profile for a load of 483 kW. How does 'Coincidence' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Div sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coincidence' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-11",
  "topicId": "diversity-load-profile",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of diversity load profile systems, what is the significance of 'Transformer loading'?",
  "options": [
    "It is a primary Div requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Transformer loading' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-12",
  "topicId": "diversity-load-profile",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating diversity load profile for a load of 306 kW. How does 'Peak vs Avg' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Div sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Peak vs Avg' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-13",
  "topicId": "diversity-load-profile",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of diversity load profile systems, what is the significance of 'Diversity factor'?",
  "options": [
    "It is a primary Div requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity factor' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-14",
  "topicId": "diversity-load-profile",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Coincidence' is a mandatory safety consideration in diversity load profile.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Coincidence' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-diversity-load-profile-15",
  "topicId": "diversity-load-profile",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Transformer loading' is a mandatory safety consideration in diversity load profile.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Transformer loading' is essential for professional diversity load profile works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-00",
  "topicId": "how-to-read-codes-l2",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of how to read codes l2 systems, what is the significance of 'Detailed clauses'?",
  "options": [
    "It is a primary Codes requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Detailed clauses' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-01",
  "topicId": "how-to-read-codes-l2",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l2 for a load of 320 kW. How does 'Fine print' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fine print' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-02",
  "topicId": "how-to-read-codes-l2",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of how to read codes l2 systems, what is the significance of 'Amendments'?",
  "options": [
    "It is a primary Codes requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Amendments' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-03",
  "topicId": "how-to-read-codes-l2",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of how to read codes l2 systems, what is the significance of 'Standard cross-ref'?",
  "options": [
    "It is a primary Codes requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Standard cross-ref' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-04",
  "topicId": "how-to-read-codes-l2",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Detailed clauses' is a mandatory safety consideration in how to read codes l2.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Detailed clauses' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-05",
  "topicId": "how-to-read-codes-l2",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Fine print' is a mandatory safety consideration in how to read codes l2.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Fine print' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-06",
  "topicId": "how-to-read-codes-l2",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of how to read codes l2 systems, what is the significance of 'Amendments'?",
  "options": [
    "It is a primary Codes requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Amendments' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-07",
  "topicId": "how-to-read-codes-l2",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l2 for a load of 388 kW. How does 'Standard cross-ref' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Standard cross-ref' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-08",
  "topicId": "how-to-read-codes-l2",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Detailed clauses' is a mandatory safety consideration in how to read codes l2.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Detailed clauses' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-09",
  "topicId": "how-to-read-codes-l2",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l2 for a load of 487 kW. How does 'Fine print' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fine print' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-10",
  "topicId": "how-to-read-codes-l2",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l2 for a load of 99 kW. How does 'Amendments' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Amendments' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-11",
  "topicId": "how-to-read-codes-l2",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l2 for a load of 184 kW. How does 'Standard cross-ref' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Standard cross-ref' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-12",
  "topicId": "how-to-read-codes-l2",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Detailed clauses' is a mandatory safety consideration in how to read codes l2.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Detailed clauses' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-13",
  "topicId": "how-to-read-codes-l2",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating how to read codes l2 for a load of 496 kW. How does 'Fine print' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Codes sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fine print' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-14",
  "topicId": "how-to-read-codes-l2",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Amendments' is a mandatory safety consideration in how to read codes l2.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Amendments' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-how-to-read-codes-l2-15",
  "topicId": "how-to-read-codes-l2",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of how to read codes l2 systems, what is the significance of 'Standard cross-ref'?",
  "options": [
    "It is a primary Codes requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Standard cross-ref' is essential for professional how to read codes l2 works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-00",
  "topicId": "conduit-fill",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating conduit fill for a load of 21 kW. How does '40% limit' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the % sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding '40% limit' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-01",
  "topicId": "conduit-fill",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating conduit fill for a load of 311 kW. How does 'Heat dissipation' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the % sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Heat dissipation' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-02",
  "topicId": "conduit-fill",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Cable count' is a mandatory safety consideration in conduit fill.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Cable count' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-03",
  "topicId": "conduit-fill",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Bending radius' is a mandatory safety consideration in conduit fill.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Bending radius' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-04",
  "topicId": "conduit-fill",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of '40% limit' is a mandatory safety consideration in conduit fill.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding '40% limit' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-05",
  "topicId": "conduit-fill",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of conduit fill systems, what is the significance of 'Heat dissipation'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Heat dissipation' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-06",
  "topicId": "conduit-fill",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of conduit fill systems, what is the significance of 'Cable count'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cable count' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-07",
  "topicId": "conduit-fill",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Bending radius' is a mandatory safety consideration in conduit fill.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Bending radius' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-08",
  "topicId": "conduit-fill",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of '40% limit' is a mandatory safety consideration in conduit fill.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding '40% limit' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-09",
  "topicId": "conduit-fill",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Heat dissipation' is a mandatory safety consideration in conduit fill.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Heat dissipation' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-10",
  "topicId": "conduit-fill",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Cable count' is a mandatory safety consideration in conduit fill.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Cable count' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-11",
  "topicId": "conduit-fill",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of conduit fill systems, what is the significance of 'Bending radius'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Bending radius' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-12",
  "topicId": "conduit-fill",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of '40% limit' is a mandatory safety consideration in conduit fill.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding '40% limit' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-13",
  "topicId": "conduit-fill",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Heat dissipation' is a mandatory safety consideration in conduit fill.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Heat dissipation' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-14",
  "topicId": "conduit-fill",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating conduit fill for a load of 303 kW. How does 'Cable count' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the % sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cable count' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-conduit-fill-15",
  "topicId": "conduit-fill",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of conduit fill systems, what is the significance of 'Bending radius'?",
  "options": [
    "It is a primary % requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Bending radius' is essential for professional conduit fill works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-00",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'kVA rating' is a mandatory safety consideration in transformer sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'kVA rating' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-01",
  "topicId": "transformer-sizing",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of transformer sizing systems, what is the significance of 'Impedance %'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Impedance %' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-02",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Cooling ONAN' is a mandatory safety consideration in transformer sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Cooling ONAN' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-03",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating transformer sizing for a load of 117 kW. How does 'Efficiency' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Efficiency' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-04",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of transformer sizing systems, what is the significance of 'kVA rating'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kVA rating' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-05",
  "topicId": "transformer-sizing",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating transformer sizing for a load of 19 kW. How does 'Impedance %' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Impedance %' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-06",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of transformer sizing systems, what is the significance of 'Cooling ONAN'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cooling ONAN' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-07",
  "topicId": "transformer-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Efficiency' is a mandatory safety consideration in transformer sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Efficiency' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-08",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'kVA rating' is a mandatory safety consideration in transformer sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'kVA rating' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-09",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Impedance %' is a mandatory safety consideration in transformer sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Impedance %' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-10",
  "topicId": "transformer-sizing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating transformer sizing for a load of 247 kW. How does 'Cooling ONAN' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cooling ONAN' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-11",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Efficiency' is a mandatory safety consideration in transformer sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Efficiency' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-12",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'kVA rating' is a mandatory safety consideration in transformer sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'kVA rating' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-13",
  "topicId": "transformer-sizing",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of transformer sizing systems, what is the significance of 'Impedance %'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Impedance %' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-14",
  "topicId": "transformer-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Cooling ONAN' is a mandatory safety consideration in transformer sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Cooling ONAN' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-transformer-sizing-15",
  "topicId": "transformer-sizing",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Efficiency' is a mandatory safety consideration in transformer sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Efficiency' is essential for professional transformer sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-00",
  "topicId": "dg-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Starting kVA' is a mandatory safety consideration in dg sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Starting kVA' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-01",
  "topicId": "dg-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dg sizing systems, what is the significance of 'Prime vs Standby'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Prime vs Standby' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-02",
  "topicId": "dg-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dg sizing for a load of 13 kW. How does 'Fuel storage' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fuel storage' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-03",
  "topicId": "dg-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Step loading' is a mandatory safety consideration in dg sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Step loading' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-04",
  "topicId": "dg-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dg sizing for a load of 356 kW. How does 'Starting kVA' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Starting kVA' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-05",
  "topicId": "dg-sizing",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Prime vs Standby' is a mandatory safety consideration in dg sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Prime vs Standby' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-06",
  "topicId": "dg-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Fuel storage' is a mandatory safety consideration in dg sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Fuel storage' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-07",
  "topicId": "dg-sizing",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dg sizing systems, what is the significance of 'Step loading'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Step loading' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-08",
  "topicId": "dg-sizing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dg sizing for a load of 475 kW. How does 'Starting kVA' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Starting kVA' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-09",
  "topicId": "dg-sizing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dg sizing for a load of 130 kW. How does 'Prime vs Standby' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Prime vs Standby' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-10",
  "topicId": "dg-sizing",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dg sizing systems, what is the significance of 'Fuel storage'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fuel storage' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-11",
  "topicId": "dg-sizing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dg sizing for a load of 483 kW. How does 'Step loading' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Step loading' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-12",
  "topicId": "dg-sizing",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dg sizing systems, what is the significance of 'Starting kVA'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Starting kVA' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-13",
  "topicId": "dg-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dg sizing for a load of 285 kW. How does 'Prime vs Standby' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Prime vs Standby' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-14",
  "topicId": "dg-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dg sizing for a load of 273 kW. How does 'Fuel storage' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Fuel storage' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dg-sizing-15",
  "topicId": "dg-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dg sizing systems, what is the significance of 'Step loading'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Step loading' is essential for professional dg sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-00",
  "topicId": "ups-sizing",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ups sizing systems, what is the significance of 'Backup time'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Backup time' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-01",
  "topicId": "ups-sizing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ups sizing for a load of 463 kW. How does 'Batt capacity Ah' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Batt capacity Ah' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-02",
  "topicId": "ups-sizing",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ups sizing systems, what is the significance of 'Vdc bus'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Vdc bus' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-03",
  "topicId": "ups-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ups sizing for a load of 305 kW. How does 'Inverter loss' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Inverter loss' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-04",
  "topicId": "ups-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ups sizing for a load of 499 kW. How does 'Backup time' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Backup time' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-05",
  "topicId": "ups-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ups sizing systems, what is the significance of 'Batt capacity Ah'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Batt capacity Ah' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-06",
  "topicId": "ups-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Vdc bus' is a mandatory safety consideration in ups sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Vdc bus' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-07",
  "topicId": "ups-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ups sizing systems, what is the significance of 'Inverter loss'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Inverter loss' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-08",
  "topicId": "ups-sizing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ups sizing for a load of 271 kW. How does 'Backup time' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Backup time' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-09",
  "topicId": "ups-sizing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ups sizing for a load of 470 kW. How does 'Batt capacity Ah' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Batt capacity Ah' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-10",
  "topicId": "ups-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Vdc bus' is a mandatory safety consideration in ups sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Vdc bus' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-11",
  "topicId": "ups-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Inverter loss' is a mandatory safety consideration in ups sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Inverter loss' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-12",
  "topicId": "ups-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ups sizing systems, what is the significance of 'Backup time'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Backup time' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-13",
  "topicId": "ups-sizing",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ups sizing systems, what is the significance of 'Batt capacity Ah'?",
  "options": [
    "It is a primary kVA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Batt capacity Ah' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-14",
  "topicId": "ups-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ups sizing for a load of 295 kW. How does 'Vdc bus' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kVA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Vdc bus' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ups-sizing-15",
  "topicId": "ups-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Inverter loss' is a mandatory safety consideration in ups sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Inverter loss' is essential for professional ups sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-00",
  "topicId": "lighting-design",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lighting design for a load of 458 kW. How does 'Lux level' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Lux sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Lux level' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-01",
  "topicId": "lighting-design",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lighting design systems, what is the significance of 'Lumen flux'?",
  "options": [
    "It is a primary Lux requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Lumen flux' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-02",
  "topicId": "lighting-design",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lighting design systems, what is the significance of 'Efficacy'?",
  "options": [
    "It is a primary Lux requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Efficacy' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-03",
  "topicId": "lighting-design",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'UF/MF factors' is a mandatory safety consideration in lighting design.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'UF/MF factors' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-04",
  "topicId": "lighting-design",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lighting design for a load of 486 kW. How does 'Lux level' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Lux sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Lux level' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-05",
  "topicId": "lighting-design",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lighting design for a load of 67 kW. How does 'Lumen flux' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Lux sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Lumen flux' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-06",
  "topicId": "lighting-design",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Efficacy' is a mandatory safety consideration in lighting design.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Efficacy' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-07",
  "topicId": "lighting-design",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lighting design for a load of 227 kW. How does 'UF/MF factors' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Lux sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'UF/MF factors' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-08",
  "topicId": "lighting-design",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Lux level' is a mandatory safety consideration in lighting design.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Lux level' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-09",
  "topicId": "lighting-design",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lighting design for a load of 360 kW. How does 'Lumen flux' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Lux sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Lumen flux' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-10",
  "topicId": "lighting-design",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lighting design systems, what is the significance of 'Efficacy'?",
  "options": [
    "It is a primary Lux requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Efficacy' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-11",
  "topicId": "lighting-design",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lighting design for a load of 261 kW. How does 'UF/MF factors' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Lux sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'UF/MF factors' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-12",
  "topicId": "lighting-design",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Lux level' is a mandatory safety consideration in lighting design.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Lux level' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-13",
  "topicId": "lighting-design",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Lumen flux' is a mandatory safety consideration in lighting design.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Lumen flux' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-14",
  "topicId": "lighting-design",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Efficacy' is a mandatory safety consideration in lighting design.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Efficacy' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lighting-design-15",
  "topicId": "lighting-design",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lighting design for a load of 54 kW. How does 'UF/MF factors' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Lux sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'UF/MF factors' is essential for professional lighting design works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-00",
  "topicId": "motor-starting",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'DOL vs Star-Delta' is a mandatory safety consideration in motor starting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'DOL vs Star-Delta' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-01",
  "topicId": "motor-starting",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'VFD soft start' is a mandatory safety consideration in motor starting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'VFD soft start' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-02",
  "topicId": "motor-starting",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of motor starting systems, what is the significance of 'Starting current'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Starting current' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-03",
  "topicId": "motor-starting",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of motor starting systems, what is the significance of 'Locked rotor'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Locked rotor' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-04",
  "topicId": "motor-starting",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of motor starting systems, what is the significance of 'DOL vs Star-Delta'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'DOL vs Star-Delta' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-05",
  "topicId": "motor-starting",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating motor starting for a load of 167 kW. How does 'VFD soft start' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Amps sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'VFD soft start' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-06",
  "topicId": "motor-starting",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating motor starting for a load of 386 kW. How does 'Starting current' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Amps sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Starting current' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-07",
  "topicId": "motor-starting",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating motor starting for a load of 136 kW. How does 'Locked rotor' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Amps sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Locked rotor' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-08",
  "topicId": "motor-starting",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating motor starting for a load of 453 kW. How does 'DOL vs Star-Delta' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Amps sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'DOL vs Star-Delta' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-09",
  "topicId": "motor-starting",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'VFD soft start' is a mandatory safety consideration in motor starting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'VFD soft start' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-10",
  "topicId": "motor-starting",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of motor starting systems, what is the significance of 'Starting current'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Starting current' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-11",
  "topicId": "motor-starting",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Locked rotor' is a mandatory safety consideration in motor starting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Locked rotor' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-12",
  "topicId": "motor-starting",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'DOL vs Star-Delta' is a mandatory safety consideration in motor starting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'DOL vs Star-Delta' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-13",
  "topicId": "motor-starting",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of motor starting systems, what is the significance of 'VFD soft start'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'VFD soft start' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-14",
  "topicId": "motor-starting",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of motor starting systems, what is the significance of 'Starting current'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Starting current' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-motor-starting-15",
  "topicId": "motor-starting",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Locked rotor' is a mandatory safety consideration in motor starting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Locked rotor' is essential for professional motor starting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-00",
  "topicId": "hvac-electrical",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Compressor LRA' is a mandatory safety consideration in hvac electrical.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Compressor LRA' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-01",
  "topicId": "hvac-electrical",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Inrush' is a mandatory safety consideration in hvac electrical.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Inrush' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-02",
  "topicId": "hvac-electrical",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hvac electrical for a load of 120 kW. How does 'Heat load' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kW sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Heat load' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-03",
  "topicId": "hvac-electrical",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hvac electrical for a load of 77 kW. How does 'Co-efficient of perf' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kW sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Co-efficient of perf' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-04",
  "topicId": "hvac-electrical",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of hvac electrical systems, what is the significance of 'Compressor LRA'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Compressor LRA' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-05",
  "topicId": "hvac-electrical",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Inrush' is a mandatory safety consideration in hvac electrical.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Inrush' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-06",
  "topicId": "hvac-electrical",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of hvac electrical systems, what is the significance of 'Heat load'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Heat load' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-07",
  "topicId": "hvac-electrical",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Co-efficient of perf' is a mandatory safety consideration in hvac electrical.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Co-efficient of perf' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-08",
  "topicId": "hvac-electrical",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of hvac electrical systems, what is the significance of 'Compressor LRA'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Compressor LRA' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-09",
  "topicId": "hvac-electrical",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of hvac electrical systems, what is the significance of 'Inrush'?",
  "options": [
    "It is a primary kW requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Inrush' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-10",
  "topicId": "hvac-electrical",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hvac electrical for a load of 138 kW. How does 'Heat load' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kW sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Heat load' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-11",
  "topicId": "hvac-electrical",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Co-efficient of perf' is a mandatory safety consideration in hvac electrical.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Co-efficient of perf' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-12",
  "topicId": "hvac-electrical",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hvac electrical for a load of 384 kW. How does 'Compressor LRA' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kW sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Compressor LRA' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-13",
  "topicId": "hvac-electrical",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hvac electrical for a load of 422 kW. How does 'Inrush' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kW sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Inrush' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-14",
  "topicId": "hvac-electrical",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Heat load' is a mandatory safety consideration in hvac electrical.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Heat load' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hvac-electrical-15",
  "topicId": "hvac-electrical",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hvac electrical for a load of 92 kW. How does 'Co-efficient of perf' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kW sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Co-efficient of perf' is essential for professional hvac electrical works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-00",
  "topicId": "switchgear-panels",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'IP rating' is a mandatory safety consideration in switchgear panels.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'IP rating' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-01",
  "topicId": "switchgear-panels",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating switchgear panels for a load of 253 kW. How does 'Form 4 type' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Panel sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Form 4 type' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-02",
  "topicId": "switchgear-panels",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating switchgear panels for a load of 239 kW. How does 'Busbar support' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Panel sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Busbar support' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-03",
  "topicId": "switchgear-panels",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Ventilation' is a mandatory safety consideration in switchgear panels.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Ventilation' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-04",
  "topicId": "switchgear-panels",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of switchgear panels systems, what is the significance of 'IP rating'?",
  "options": [
    "It is a primary Panel requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'IP rating' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-05",
  "topicId": "switchgear-panels",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of switchgear panels systems, what is the significance of 'Form 4 type'?",
  "options": [
    "It is a primary Panel requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Form 4 type' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-06",
  "topicId": "switchgear-panels",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating switchgear panels for a load of 19 kW. How does 'Busbar support' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Panel sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Busbar support' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-07",
  "topicId": "switchgear-panels",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating switchgear panels for a load of 412 kW. How does 'Ventilation' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Panel sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ventilation' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-08",
  "topicId": "switchgear-panels",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'IP rating' is a mandatory safety consideration in switchgear panels.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'IP rating' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-09",
  "topicId": "switchgear-panels",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating switchgear panels for a load of 464 kW. How does 'Form 4 type' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Panel sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Form 4 type' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-10",
  "topicId": "switchgear-panels",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of switchgear panels systems, what is the significance of 'Busbar support'?",
  "options": [
    "It is a primary Panel requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Busbar support' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-11",
  "topicId": "switchgear-panels",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of switchgear panels systems, what is the significance of 'Ventilation'?",
  "options": [
    "It is a primary Panel requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ventilation' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-12",
  "topicId": "switchgear-panels",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'IP rating' is a mandatory safety consideration in switchgear panels.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'IP rating' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-13",
  "topicId": "switchgear-panels",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of switchgear panels systems, what is the significance of 'Form 4 type'?",
  "options": [
    "It is a primary Panel requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Form 4 type' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-14",
  "topicId": "switchgear-panels",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating switchgear panels for a load of 429 kW. How does 'Busbar support' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Panel sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Busbar support' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-switchgear-panels-15",
  "topicId": "switchgear-panels",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Ventilation' is a mandatory safety consideration in switchgear panels.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Ventilation' is essential for professional switchgear panels works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-00",
  "topicId": "busbar-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Temp rise' is a mandatory safety consideration in busbar sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Temp rise' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-01",
  "topicId": "busbar-sizing",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Skin effect' is a mandatory safety consideration in busbar sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Skin effect' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-02",
  "topicId": "busbar-sizing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating busbar sizing for a load of 485 kW. How does 'Expansion joints' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Amps sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Expansion joints' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-03",
  "topicId": "busbar-sizing",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating busbar sizing for a load of 12 kW. How does 'Al vs Cu' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Amps sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Al vs Cu' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-04",
  "topicId": "busbar-sizing",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Temp rise' is a mandatory safety consideration in busbar sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Temp rise' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-05",
  "topicId": "busbar-sizing",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of busbar sizing systems, what is the significance of 'Skin effect'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Skin effect' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-06",
  "topicId": "busbar-sizing",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Expansion joints' is a mandatory safety consideration in busbar sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Expansion joints' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-07",
  "topicId": "busbar-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating busbar sizing for a load of 104 kW. How does 'Al vs Cu' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Amps sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Al vs Cu' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-08",
  "topicId": "busbar-sizing",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Temp rise' is a mandatory safety consideration in busbar sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Temp rise' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-09",
  "topicId": "busbar-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of busbar sizing systems, what is the significance of 'Skin effect'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Skin effect' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-10",
  "topicId": "busbar-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Expansion joints' is a mandatory safety consideration in busbar sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Expansion joints' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-11",
  "topicId": "busbar-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Al vs Cu' is a mandatory safety consideration in busbar sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Al vs Cu' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-12",
  "topicId": "busbar-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating busbar sizing for a load of 290 kW. How does 'Temp rise' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Amps sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Temp rise' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-13",
  "topicId": "busbar-sizing",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of busbar sizing systems, what is the significance of 'Skin effect'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Skin effect' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-14",
  "topicId": "busbar-sizing",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of busbar sizing systems, what is the significance of 'Expansion joints'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Expansion joints' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-busbar-sizing-15",
  "topicId": "busbar-sizing",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of busbar sizing systems, what is the significance of 'Al vs Cu'?",
  "options": [
    "It is a primary Amps requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Al vs Cu' is essential for professional busbar sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-00",
  "topicId": "cable-tray-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of cable tray sizing systems, what is the significance of 'Weight limit'?",
  "options": [
    "It is a primary mm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Weight limit' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-01",
  "topicId": "cable-tray-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Ventilation' is a mandatory safety consideration in cable tray sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Ventilation' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-02",
  "topicId": "cable-tray-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Coupler span' is a mandatory safety consideration in cable tray sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Coupler span' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-03",
  "topicId": "cable-tray-sizing",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of cable tray sizing systems, what is the significance of 'Deflection'?",
  "options": [
    "It is a primary mm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Deflection' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-04",
  "topicId": "cable-tray-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Weight limit' is a mandatory safety consideration in cable tray sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Weight limit' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-05",
  "topicId": "cable-tray-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of cable tray sizing systems, what is the significance of 'Ventilation'?",
  "options": [
    "It is a primary mm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ventilation' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-06",
  "topicId": "cable-tray-sizing",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of cable tray sizing systems, what is the significance of 'Coupler span'?",
  "options": [
    "It is a primary mm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coupler span' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-07",
  "topicId": "cable-tray-sizing",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating cable tray sizing for a load of 365 kW. How does 'Deflection' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the mm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Deflection' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-08",
  "topicId": "cable-tray-sizing",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Weight limit' is a mandatory safety consideration in cable tray sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Weight limit' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-09",
  "topicId": "cable-tray-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Ventilation' is a mandatory safety consideration in cable tray sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Ventilation' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-10",
  "topicId": "cable-tray-sizing",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating cable tray sizing for a load of 119 kW. How does 'Coupler span' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the mm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coupler span' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-11",
  "topicId": "cable-tray-sizing",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating cable tray sizing for a load of 386 kW. How does 'Deflection' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the mm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Deflection' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-12",
  "topicId": "cable-tray-sizing",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Weight limit' is a mandatory safety consideration in cable tray sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Weight limit' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-13",
  "topicId": "cable-tray-sizing",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating cable tray sizing for a load of 370 kW. How does 'Ventilation' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the mm sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ventilation' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-14",
  "topicId": "cable-tray-sizing",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Coupler span' is a mandatory safety consideration in cable tray sizing.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Coupler span' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-cable-tray-sizing-15",
  "topicId": "cable-tray-sizing",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of cable tray sizing systems, what is the significance of 'Deflection'?",
  "options": [
    "It is a primary mm requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Deflection' is essential for professional cable tray sizing works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-00",
  "topicId": "breaker-selection",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'kA rating' is a mandatory safety consideration in breaker selection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'kA rating' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-01",
  "topicId": "breaker-selection",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of breaker selection systems, what is the significance of 'L-S-I-G settings'?",
  "options": [
    "It is a primary Breaker requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'L-S-I-G settings' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-02",
  "topicId": "breaker-selection",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of breaker selection systems, what is the significance of 'Coordination'?",
  "options": [
    "It is a primary Breaker requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coordination' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-03",
  "topicId": "breaker-selection",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Cascade' is a mandatory safety consideration in breaker selection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Cascade' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-04",
  "topicId": "breaker-selection",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of breaker selection systems, what is the significance of 'kA rating'?",
  "options": [
    "It is a primary Breaker requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kA rating' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-05",
  "topicId": "breaker-selection",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of breaker selection systems, what is the significance of 'L-S-I-G settings'?",
  "options": [
    "It is a primary Breaker requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'L-S-I-G settings' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-06",
  "topicId": "breaker-selection",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of breaker selection systems, what is the significance of 'Coordination'?",
  "options": [
    "It is a primary Breaker requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coordination' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-07",
  "topicId": "breaker-selection",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of breaker selection systems, what is the significance of 'Cascade'?",
  "options": [
    "It is a primary Breaker requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cascade' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-08",
  "topicId": "breaker-selection",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of breaker selection systems, what is the significance of 'kA rating'?",
  "options": [
    "It is a primary Breaker requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kA rating' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-09",
  "topicId": "breaker-selection",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'L-S-I-G settings' is a mandatory safety consideration in breaker selection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'L-S-I-G settings' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-10",
  "topicId": "breaker-selection",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating breaker selection for a load of 370 kW. How does 'Coordination' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Breaker sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Coordination' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-11",
  "topicId": "breaker-selection",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of breaker selection systems, what is the significance of 'Cascade'?",
  "options": [
    "It is a primary Breaker requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cascade' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-12",
  "topicId": "breaker-selection",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of breaker selection systems, what is the significance of 'kA rating'?",
  "options": [
    "It is a primary Breaker requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'kA rating' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-13",
  "topicId": "breaker-selection",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating breaker selection for a load of 51 kW. How does 'L-S-I-G settings' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Breaker sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'L-S-I-G settings' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-14",
  "topicId": "breaker-selection",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Coordination' is a mandatory safety consideration in breaker selection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Coordination' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-breaker-selection-15",
  "topicId": "breaker-selection",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Cascade' is a mandatory safety consideration in breaker selection.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Cascade' is essential for professional breaker selection works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-00",
  "topicId": "ev-charging",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Type 2 connector' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Type 2 connector' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-01",
  "topicId": "ev-charging",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Level 3 DC' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Level 3 DC' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-02",
  "topicId": "ev-charging",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Diversity 1.0' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity 1.0' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-03",
  "topicId": "ev-charging",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Managed charging' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Managed charging' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-04",
  "topicId": "ev-charging",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Type 2 connector' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Type 2 connector' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-05",
  "topicId": "ev-charging",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Level 3 DC' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Level 3 DC' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-06",
  "topicId": "ev-charging",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Diversity 1.0' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity 1.0' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-07",
  "topicId": "ev-charging",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Managed charging' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Managed charging' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-08",
  "topicId": "ev-charging",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ev charging systems, what is the significance of 'Type 2 connector'?",
  "options": [
    "It is a primary EV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Type 2 connector' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-09",
  "topicId": "ev-charging",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ev charging systems, what is the significance of 'Level 3 DC'?",
  "options": [
    "It is a primary EV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Level 3 DC' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-10",
  "topicId": "ev-charging",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ev charging systems, what is the significance of 'Diversity 1.0'?",
  "options": [
    "It is a primary EV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity 1.0' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-11",
  "topicId": "ev-charging",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Managed charging' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Managed charging' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-12",
  "topicId": "ev-charging",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ev charging systems, what is the significance of 'Type 2 connector'?",
  "options": [
    "It is a primary EV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Type 2 connector' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-13",
  "topicId": "ev-charging",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ev charging systems, what is the significance of 'Level 3 DC'?",
  "options": [
    "It is a primary EV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Level 3 DC' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-14",
  "topicId": "ev-charging",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ev charging for a load of 53 kW. How does 'Diversity 1.0' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the EV sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Diversity 1.0' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ev-charging-15",
  "topicId": "ev-charging",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Managed charging' is a mandatory safety consideration in ev charging.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Managed charging' is essential for professional ev charging works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-00",
  "topicId": "ct-pt-substation",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ct pt substation for a load of 111 kW. How does 'Accuracy class' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the CT/PT sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Accuracy class' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-01",
  "topicId": "ct-pt-substation",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Burden VA' is a mandatory safety consideration in ct pt substation.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Burden VA' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-02",
  "topicId": "ct-pt-substation",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Ratio' is a mandatory safety consideration in ct pt substation.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Ratio' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-03",
  "topicId": "ct-pt-substation",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ct pt substation for a load of 76 kW. How does 'Isolation' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the CT/PT sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Isolation' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-04",
  "topicId": "ct-pt-substation",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Accuracy class' is a mandatory safety consideration in ct pt substation.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Accuracy class' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-05",
  "topicId": "ct-pt-substation",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Burden VA' is a mandatory safety consideration in ct pt substation.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Burden VA' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-06",
  "topicId": "ct-pt-substation",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ct pt substation systems, what is the significance of 'Ratio'?",
  "options": [
    "It is a primary CT/PT requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ratio' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-07",
  "topicId": "ct-pt-substation",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ct pt substation for a load of 320 kW. How does 'Isolation' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the CT/PT sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Isolation' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-08",
  "topicId": "ct-pt-substation",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ct pt substation for a load of 222 kW. How does 'Accuracy class' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the CT/PT sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Accuracy class' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-09",
  "topicId": "ct-pt-substation",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ct pt substation for a load of 425 kW. How does 'Burden VA' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the CT/PT sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Burden VA' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-10",
  "topicId": "ct-pt-substation",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ct pt substation for a load of 338 kW. How does 'Ratio' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the CT/PT sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ratio' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-11",
  "topicId": "ct-pt-substation",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ct pt substation systems, what is the significance of 'Isolation'?",
  "options": [
    "It is a primary CT/PT requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Isolation' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-12",
  "topicId": "ct-pt-substation",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ct pt substation for a load of 179 kW. How does 'Accuracy class' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the CT/PT sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Accuracy class' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-13",
  "topicId": "ct-pt-substation",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating ct pt substation for a load of 487 kW. How does 'Burden VA' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the CT/PT sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Burden VA' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-14",
  "topicId": "ct-pt-substation",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of ct pt substation systems, what is the significance of 'Ratio'?",
  "options": [
    "It is a primary CT/PT requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ratio' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-ct-pt-substation-15",
  "topicId": "ct-pt-substation",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Isolation' is a mandatory safety consideration in ct pt substation.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Isolation' is essential for professional ct pt substation works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-00",
  "topicId": "battery-storage",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating battery storage for a load of 390 kW. How does 'Li-ion vs Lead Acid' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the BESS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Li-ion vs Lead Acid' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-01",
  "topicId": "battery-storage",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating battery storage for a load of 402 kW. How does 'DoD %' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the BESS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'DoD %' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-02",
  "topicId": "battery-storage",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of battery storage systems, what is the significance of 'Cycle life'?",
  "options": [
    "It is a primary BESS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cycle life' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-03",
  "topicId": "battery-storage",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating battery storage for a load of 36 kW. How does 'C-rating' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the BESS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'C-rating' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-04",
  "topicId": "battery-storage",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating battery storage for a load of 487 kW. How does 'Li-ion vs Lead Acid' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the BESS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Li-ion vs Lead Acid' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-05",
  "topicId": "battery-storage",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating battery storage for a load of 447 kW. How does 'DoD %' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the BESS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'DoD %' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-06",
  "topicId": "battery-storage",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of battery storage systems, what is the significance of 'Cycle life'?",
  "options": [
    "It is a primary BESS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cycle life' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-07",
  "topicId": "battery-storage",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'C-rating' is a mandatory safety consideration in battery storage.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'C-rating' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-08",
  "topicId": "battery-storage",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating battery storage for a load of 102 kW. How does 'Li-ion vs Lead Acid' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the BESS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Li-ion vs Lead Acid' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-09",
  "topicId": "battery-storage",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of battery storage systems, what is the significance of 'DoD %'?",
  "options": [
    "It is a primary BESS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'DoD %' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-10",
  "topicId": "battery-storage",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of battery storage systems, what is the significance of 'Cycle life'?",
  "options": [
    "It is a primary BESS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cycle life' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-11",
  "topicId": "battery-storage",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating battery storage for a load of 252 kW. How does 'C-rating' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the BESS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'C-rating' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-12",
  "topicId": "battery-storage",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Li-ion vs Lead Acid' is a mandatory safety consideration in battery storage.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Li-ion vs Lead Acid' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-13",
  "topicId": "battery-storage",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating battery storage for a load of 349 kW. How does 'DoD %' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the BESS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'DoD %' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-14",
  "topicId": "battery-storage",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of battery storage systems, what is the significance of 'Cycle life'?",
  "options": [
    "It is a primary BESS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Cycle life' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-battery-storage-15",
  "topicId": "battery-storage",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of battery storage systems, what is the significance of 'C-rating'?",
  "options": [
    "It is a primary BESS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'C-rating' is essential for professional battery storage works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-00",
  "topicId": "energy-monitoring",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Smart meter' is a mandatory safety consideration in energy monitoring.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Smart meter' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-01",
  "topicId": "energy-monitoring",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of energy monitoring systems, what is the significance of 'BMS integration'?",
  "options": [
    "It is a primary Energy requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'BMS integration' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-02",
  "topicId": "energy-monitoring",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Data logging' is a mandatory safety consideration in energy monitoring.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Data logging' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-03",
  "topicId": "energy-monitoring",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of energy monitoring systems, what is the significance of 'Sub-metering'?",
  "options": [
    "It is a primary Energy requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Sub-metering' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-04",
  "topicId": "energy-monitoring",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating energy monitoring for a load of 280 kW. How does 'Smart meter' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Energy sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Smart meter' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-05",
  "topicId": "energy-monitoring",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'BMS integration' is a mandatory safety consideration in energy monitoring.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'BMS integration' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-06",
  "topicId": "energy-monitoring",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Data logging' is a mandatory safety consideration in energy monitoring.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Data logging' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-07",
  "topicId": "energy-monitoring",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Sub-metering' is a mandatory safety consideration in energy monitoring.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Sub-metering' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-08",
  "topicId": "energy-monitoring",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of energy monitoring systems, what is the significance of 'Smart meter'?",
  "options": [
    "It is a primary Energy requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Smart meter' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-09",
  "topicId": "energy-monitoring",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating energy monitoring for a load of 205 kW. How does 'BMS integration' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Energy sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'BMS integration' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-10",
  "topicId": "energy-monitoring",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Data logging' is a mandatory safety consideration in energy monitoring.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Data logging' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-11",
  "topicId": "energy-monitoring",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating energy monitoring for a load of 46 kW. How does 'Sub-metering' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Energy sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Sub-metering' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-12",
  "topicId": "energy-monitoring",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of energy monitoring systems, what is the significance of 'Smart meter'?",
  "options": [
    "It is a primary Energy requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Smart meter' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-13",
  "topicId": "energy-monitoring",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'BMS integration' is a mandatory safety consideration in energy monitoring.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'BMS integration' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-14",
  "topicId": "energy-monitoring",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of energy monitoring systems, what is the significance of 'Data logging'?",
  "options": [
    "It is a primary Energy requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Data logging' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-energy-monitoring-15",
  "topicId": "energy-monitoring",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Sub-metering' is a mandatory safety consideration in energy monitoring.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Sub-metering' is essential for professional energy monitoring works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-00",
  "topicId": "troubleshooting",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Continuity test' is a mandatory safety consideration in troubleshooting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Continuity test' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-01",
  "topicId": "troubleshooting",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating troubleshooting for a load of 83 kW. How does 'Insulation IR' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tools sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Insulation IR' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-02",
  "topicId": "troubleshooting",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of troubleshooting systems, what is the significance of 'Phase rotation'?",
  "options": [
    "It is a primary Tools requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Phase rotation' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-03",
  "topicId": "troubleshooting",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of troubleshooting systems, what is the significance of 'Thermal imaging'?",
  "options": [
    "It is a primary Tools requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Thermal imaging' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-04",
  "topicId": "troubleshooting",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of troubleshooting systems, what is the significance of 'Continuity test'?",
  "options": [
    "It is a primary Tools requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Continuity test' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-05",
  "topicId": "troubleshooting",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Insulation IR' is a mandatory safety consideration in troubleshooting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Insulation IR' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-06",
  "topicId": "troubleshooting",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating troubleshooting for a load of 395 kW. How does 'Phase rotation' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tools sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Phase rotation' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-07",
  "topicId": "troubleshooting",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of troubleshooting systems, what is the significance of 'Thermal imaging'?",
  "options": [
    "It is a primary Tools requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Thermal imaging' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-08",
  "topicId": "troubleshooting",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating troubleshooting for a load of 193 kW. How does 'Continuity test' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tools sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Continuity test' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-09",
  "topicId": "troubleshooting",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating troubleshooting for a load of 237 kW. How does 'Insulation IR' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tools sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Insulation IR' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-10",
  "topicId": "troubleshooting",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of troubleshooting systems, what is the significance of 'Phase rotation'?",
  "options": [
    "It is a primary Tools requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Phase rotation' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-11",
  "topicId": "troubleshooting",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Thermal imaging' is a mandatory safety consideration in troubleshooting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Thermal imaging' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-12",
  "topicId": "troubleshooting",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating troubleshooting for a load of 333 kW. How does 'Continuity test' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Tools sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Continuity test' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-13",
  "topicId": "troubleshooting",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of troubleshooting systems, what is the significance of 'Insulation IR'?",
  "options": [
    "It is a primary Tools requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Insulation IR' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-14",
  "topicId": "troubleshooting",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of troubleshooting systems, what is the significance of 'Phase rotation'?",
  "options": [
    "It is a primary Tools requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Phase rotation' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-troubleshooting-15",
  "topicId": "troubleshooting",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Thermal imaging' is a mandatory safety consideration in troubleshooting.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Thermal imaging' is essential for professional troubleshooting works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-00",
  "topicId": "short-circuit",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating short circuit for a load of 254 kW. How does 'Infinite bus' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Infinite bus' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-01",
  "topicId": "short-circuit",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating short circuit for a load of 341 kW. How does 'Impedance method' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Impedance method' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-02",
  "topicId": "short-circuit",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating short circuit for a load of 119 kW. How does 'Peak current' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Peak current' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-03",
  "topicId": "short-circuit",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of short circuit systems, what is the significance of 'System stability'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'System stability' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-04",
  "topicId": "short-circuit",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of short circuit systems, what is the significance of 'Infinite bus'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Infinite bus' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-05",
  "topicId": "short-circuit",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Impedance method' is a mandatory safety consideration in short circuit.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Impedance method' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-06",
  "topicId": "short-circuit",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of short circuit systems, what is the significance of 'Peak current'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Peak current' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-07",
  "topicId": "short-circuit",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of short circuit systems, what is the significance of 'System stability'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'System stability' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-08",
  "topicId": "short-circuit",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of short circuit systems, what is the significance of 'Infinite bus'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Infinite bus' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-09",
  "topicId": "short-circuit",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Impedance method' is a mandatory safety consideration in short circuit.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Impedance method' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-10",
  "topicId": "short-circuit",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating short circuit for a load of 184 kW. How does 'Peak current' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Peak current' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-11",
  "topicId": "short-circuit",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of short circuit systems, what is the significance of 'System stability'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'System stability' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-12",
  "topicId": "short-circuit",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating short circuit for a load of 47 kW. How does 'Infinite bus' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the kA sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Infinite bus' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-13",
  "topicId": "short-circuit",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Impedance method' is a mandatory safety consideration in short circuit.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Impedance method' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-14",
  "topicId": "short-circuit",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of short circuit systems, what is the significance of 'Peak current'?",
  "options": [
    "It is a primary kA requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Peak current' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-short-circuit-15",
  "topicId": "short-circuit",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'System stability' is a mandatory safety consideration in short circuit.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'System stability' is essential for professional short circuit works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-00",
  "topicId": "relay-coordination",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating relay coordination for a load of 361 kW. How does 'Time dial' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Coord sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Time dial' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-01",
  "topicId": "relay-coordination",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Pickup current' is a mandatory safety consideration in relay coordination.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Pickup current' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-02",
  "topicId": "relay-coordination",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of relay coordination systems, what is the significance of 'Overcurrent'?",
  "options": [
    "It is a primary Coord requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Overcurrent' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-03",
  "topicId": "relay-coordination",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Differential' is a mandatory safety consideration in relay coordination.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Differential' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-04",
  "topicId": "relay-coordination",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Time dial' is a mandatory safety consideration in relay coordination.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Time dial' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-05",
  "topicId": "relay-coordination",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of relay coordination systems, what is the significance of 'Pickup current'?",
  "options": [
    "It is a primary Coord requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pickup current' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-06",
  "topicId": "relay-coordination",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating relay coordination for a load of 476 kW. How does 'Overcurrent' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Coord sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Overcurrent' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-07",
  "topicId": "relay-coordination",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Differential' is a mandatory safety consideration in relay coordination.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Differential' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-08",
  "topicId": "relay-coordination",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of relay coordination systems, what is the significance of 'Time dial'?",
  "options": [
    "It is a primary Coord requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Time dial' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-09",
  "topicId": "relay-coordination",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating relay coordination for a load of 128 kW. How does 'Pickup current' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Coord sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pickup current' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-10",
  "topicId": "relay-coordination",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of relay coordination systems, what is the significance of 'Overcurrent'?",
  "options": [
    "It is a primary Coord requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Overcurrent' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-11",
  "topicId": "relay-coordination",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of relay coordination systems, what is the significance of 'Differential'?",
  "options": [
    "It is a primary Coord requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Differential' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-12",
  "topicId": "relay-coordination",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating relay coordination for a load of 174 kW. How does 'Time dial' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Coord sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Time dial' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-13",
  "topicId": "relay-coordination",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of relay coordination systems, what is the significance of 'Pickup current'?",
  "options": [
    "It is a primary Coord requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pickup current' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-14",
  "topicId": "relay-coordination",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating relay coordination for a load of 260 kW. How does 'Overcurrent' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Coord sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Overcurrent' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-relay-coordination-15",
  "topicId": "relay-coordination",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Differential' is a mandatory safety consideration in relay coordination.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Differential' is essential for professional relay coordination works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-00",
  "topicId": "coordination-study",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'TCC curves' is a mandatory safety consideration in coordination study.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'TCC curves' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-01",
  "topicId": "coordination-study",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of coordination study systems, what is the significance of 'Discrimination'?",
  "options": [
    "It is a primary Study requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Discrimination' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-02",
  "topicId": "coordination-study",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Pre-arcing' is a mandatory safety consideration in coordination study.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Pre-arcing' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-03",
  "topicId": "coordination-study",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating coordination study for a load of 355 kW. How does 'Selectivity' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Study sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Selectivity' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-04",
  "topicId": "coordination-study",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating coordination study for a load of 162 kW. How does 'TCC curves' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Study sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'TCC curves' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-05",
  "topicId": "coordination-study",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Discrimination' is a mandatory safety consideration in coordination study.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Discrimination' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-06",
  "topicId": "coordination-study",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of coordination study systems, what is the significance of 'Pre-arcing'?",
  "options": [
    "It is a primary Study requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pre-arcing' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-07",
  "topicId": "coordination-study",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of coordination study systems, what is the significance of 'Selectivity'?",
  "options": [
    "It is a primary Study requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Selectivity' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-08",
  "topicId": "coordination-study",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating coordination study for a load of 264 kW. How does 'TCC curves' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Study sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'TCC curves' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-09",
  "topicId": "coordination-study",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Discrimination' is a mandatory safety consideration in coordination study.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Discrimination' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-10",
  "topicId": "coordination-study",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of coordination study systems, what is the significance of 'Pre-arcing'?",
  "options": [
    "It is a primary Study requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pre-arcing' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-11",
  "topicId": "coordination-study",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of coordination study systems, what is the significance of 'Selectivity'?",
  "options": [
    "It is a primary Study requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Selectivity' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-12",
  "topicId": "coordination-study",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating coordination study for a load of 232 kW. How does 'TCC curves' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Study sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'TCC curves' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-13",
  "topicId": "coordination-study",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Discrimination' is a mandatory safety consideration in coordination study.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Discrimination' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-14",
  "topicId": "coordination-study",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating coordination study for a load of 38 kW. How does 'Pre-arcing' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Study sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Pre-arcing' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-coordination-study-15",
  "topicId": "coordination-study",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of coordination study systems, what is the significance of 'Selectivity'?",
  "options": [
    "It is a primary Study requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Selectivity' is essential for professional coordination study works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-00",
  "topicId": "hazardous-area",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Zone 0/1/2' is a mandatory safety consideration in hazardous area.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Zone 0/1/2' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-01",
  "topicId": "hazardous-area",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hazardous area for a load of 309 kW. How does 'Group IIA/B/C' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Zones sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Group IIA/B/C' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-02",
  "topicId": "hazardous-area",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of hazardous area systems, what is the significance of 'Ex-d/ia'?",
  "options": [
    "It is a primary Zones requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ex-d/ia' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-03",
  "topicId": "hazardous-area",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hazardous area for a load of 491 kW. How does 'Surface temp' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Zones sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Surface temp' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-04",
  "topicId": "hazardous-area",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of hazardous area systems, what is the significance of 'Zone 0/1/2'?",
  "options": [
    "It is a primary Zones requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Zone 0/1/2' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-05",
  "topicId": "hazardous-area",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hazardous area for a load of 63 kW. How does 'Group IIA/B/C' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Zones sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Group IIA/B/C' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-06",
  "topicId": "hazardous-area",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hazardous area for a load of 214 kW. How does 'Ex-d/ia' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Zones sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ex-d/ia' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-07",
  "topicId": "hazardous-area",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hazardous area for a load of 239 kW. How does 'Surface temp' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Zones sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Surface temp' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-08",
  "topicId": "hazardous-area",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Zone 0/1/2' is a mandatory safety consideration in hazardous area.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Zone 0/1/2' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-09",
  "topicId": "hazardous-area",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hazardous area for a load of 330 kW. How does 'Group IIA/B/C' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Zones sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Group IIA/B/C' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-10",
  "topicId": "hazardous-area",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of hazardous area systems, what is the significance of 'Ex-d/ia'?",
  "options": [
    "It is a primary Zones requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ex-d/ia' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-11",
  "topicId": "hazardous-area",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of hazardous area systems, what is the significance of 'Surface temp'?",
  "options": [
    "It is a primary Zones requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Surface temp' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-12",
  "topicId": "hazardous-area",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Zone 0/1/2' is a mandatory safety consideration in hazardous area.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Zone 0/1/2' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-13",
  "topicId": "hazardous-area",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Group IIA/B/C' is a mandatory safety consideration in hazardous area.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Group IIA/B/C' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-14",
  "topicId": "hazardous-area",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hazardous area for a load of 75 kW. How does 'Ex-d/ia' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Zones sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Ex-d/ia' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-hazardous-area-15",
  "topicId": "hazardous-area",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating hazardous area for a load of 354 kW. How does 'Surface temp' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Zones sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Surface temp' is essential for professional hazardous area works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-00",
  "topicId": "dc-redundancy",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dc redundancy for a load of 442 kW. How does 'Tier 1/2/3/4' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Data Centre sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Tier 1/2/3/4' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-01",
  "topicId": "dc-redundancy",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'N+1 vs 2N' is a mandatory safety consideration in dc redundancy.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'N+1 vs 2N' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-02",
  "topicId": "dc-redundancy",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dc redundancy systems, what is the significance of 'PUE'?",
  "options": [
    "It is a primary Data Centre requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'PUE' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-03",
  "topicId": "dc-redundancy",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dc redundancy systems, what is the significance of 'Concurrent maintainability'?",
  "options": [
    "It is a primary Data Centre requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Concurrent maintainability' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-04",
  "topicId": "dc-redundancy",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dc redundancy systems, what is the significance of 'Tier 1/2/3/4'?",
  "options": [
    "It is a primary Data Centre requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Tier 1/2/3/4' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-05",
  "topicId": "dc-redundancy",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dc redundancy systems, what is the significance of 'N+1 vs 2N'?",
  "options": [
    "It is a primary Data Centre requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'N+1 vs 2N' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-06",
  "topicId": "dc-redundancy",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'PUE' is a mandatory safety consideration in dc redundancy.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'PUE' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-07",
  "topicId": "dc-redundancy",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dc redundancy for a load of 277 kW. How does 'Concurrent maintainability' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Data Centre sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Concurrent maintainability' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-08",
  "topicId": "dc-redundancy",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dc redundancy systems, what is the significance of 'Tier 1/2/3/4'?",
  "options": [
    "It is a primary Data Centre requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Tier 1/2/3/4' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-09",
  "topicId": "dc-redundancy",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'N+1 vs 2N' is a mandatory safety consideration in dc redundancy.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'N+1 vs 2N' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-10",
  "topicId": "dc-redundancy",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dc redundancy systems, what is the significance of 'PUE'?",
  "options": [
    "It is a primary Data Centre requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'PUE' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-11",
  "topicId": "dc-redundancy",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of dc redundancy systems, what is the significance of 'Concurrent maintainability'?",
  "options": [
    "It is a primary Data Centre requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Concurrent maintainability' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-12",
  "topicId": "dc-redundancy",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Tier 1/2/3/4' is a mandatory safety consideration in dc redundancy.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Tier 1/2/3/4' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-13",
  "topicId": "dc-redundancy",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'N+1 vs 2N' is a mandatory safety consideration in dc redundancy.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'N+1 vs 2N' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-14",
  "topicId": "dc-redundancy",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating dc redundancy for a load of 413 kW. How does 'PUE' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the Data Centre sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'PUE' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-dc-redundancy-15",
  "topicId": "dc-redundancy",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Concurrent maintainability' is a mandatory safety consideration in dc redundancy.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Concurrent maintainability' is essential for professional dc redundancy works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-00",
  "topicId": "solar-pv",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of solar pv systems, what is the significance of 'MPPT'?",
  "options": [
    "It is a primary PV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'MPPT' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-01",
  "topicId": "solar-pv",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'String inverter' is a mandatory safety consideration in solar pv.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'String inverter' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-02",
  "topicId": "solar-pv",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Irradiance' is a mandatory safety consideration in solar pv.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Irradiance' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-03",
  "topicId": "solar-pv",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Performance ratio' is a mandatory safety consideration in solar pv.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Performance ratio' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-04",
  "topicId": "solar-pv",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of solar pv systems, what is the significance of 'MPPT'?",
  "options": [
    "It is a primary PV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'MPPT' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-05",
  "topicId": "solar-pv",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating solar pv for a load of 407 kW. How does 'String inverter' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PV sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'String inverter' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-06",
  "topicId": "solar-pv",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of solar pv systems, what is the significance of 'Irradiance'?",
  "options": [
    "It is a primary PV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Irradiance' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-07",
  "topicId": "solar-pv",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating solar pv for a load of 417 kW. How does 'Performance ratio' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PV sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Performance ratio' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-08",
  "topicId": "solar-pv",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of solar pv systems, what is the significance of 'MPPT'?",
  "options": [
    "It is a primary PV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'MPPT' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-09",
  "topicId": "solar-pv",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating solar pv for a load of 32 kW. How does 'String inverter' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PV sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'String inverter' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-10",
  "topicId": "solar-pv",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating solar pv for a load of 39 kW. How does 'Irradiance' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PV sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Irradiance' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-11",
  "topicId": "solar-pv",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of solar pv systems, what is the significance of 'Performance ratio'?",
  "options": [
    "It is a primary PV requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Performance ratio' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-12",
  "topicId": "solar-pv",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating solar pv for a load of 292 kW. How does 'MPPT' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PV sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'MPPT' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-13",
  "topicId": "solar-pv",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating solar pv for a load of 22 kW. How does 'String inverter' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the PV sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'String inverter' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-14",
  "topicId": "solar-pv",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Irradiance' is a mandatory safety consideration in solar pv.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Irradiance' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-solar-pv-15",
  "topicId": "solar-pv",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Performance ratio' is a mandatory safety consideration in solar pv.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Performance ratio' is essential for professional solar pv works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-00",
  "topicId": "lightning-protect",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lightning protect for a load of 361 kW. How does 'Rolling sphere' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the LPS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Rolling sphere' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-01",
  "topicId": "lightning-protect",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lightning protect systems, what is the significance of 'Faraday cage'?",
  "options": [
    "It is a primary LPS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Faraday cage' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-02",
  "topicId": "lightning-protect",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lightning protect for a load of 35 kW. How does 'Surge SPD' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the LPS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Surge SPD' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-03",
  "topicId": "lightning-protect",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lightning protect systems, what is the significance of 'Down conductor'?",
  "options": [
    "It is a primary LPS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Down conductor' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-04",
  "topicId": "lightning-protect",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lightning protect for a load of 54 kW. How does 'Rolling sphere' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the LPS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Rolling sphere' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-05",
  "topicId": "lightning-protect",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lightning protect systems, what is the significance of 'Faraday cage'?",
  "options": [
    "It is a primary LPS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Faraday cage' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-06",
  "topicId": "lightning-protect",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lightning protect for a load of 266 kW. How does 'Surge SPD' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the LPS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Surge SPD' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-07",
  "topicId": "lightning-protect",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lightning protect systems, what is the significance of 'Down conductor'?",
  "options": [
    "It is a primary LPS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Down conductor' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-08",
  "topicId": "lightning-protect",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lightning protect systems, what is the significance of 'Rolling sphere'?",
  "options": [
    "It is a primary LPS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Rolling sphere' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-09",
  "topicId": "lightning-protect",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lightning protect for a load of 354 kW. How does 'Faraday cage' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the LPS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Faraday cage' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-10",
  "topicId": "lightning-protect",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lightning protect systems, what is the significance of 'Surge SPD'?",
  "options": [
    "It is a primary LPS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Surge SPD' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-11",
  "topicId": "lightning-protect",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lightning protect for a load of 259 kW. How does 'Down conductor' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the LPS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Down conductor' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-12",
  "topicId": "lightning-protect",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lightning protect systems, what is the significance of 'Rolling sphere'?",
  "options": [
    "It is a primary LPS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Rolling sphere' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-13",
  "topicId": "lightning-protect",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lightning protect for a load of 469 kW. How does 'Faraday cage' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the LPS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Faraday cage' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-14",
  "topicId": "lightning-protect",
  "level": 1,
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating lightning protect for a load of 475 kW. How does 'Surge SPD' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the LPS sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Surge SPD' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-lightning-protect-15",
  "topicId": "lightning-protect",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of lightning protect systems, what is the significance of 'Down conductor'?",
  "options": [
    "It is a primary LPS requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Down conductor' is essential for professional lightning protect works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-00",
  "topicId": "arc-flash",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of arc flash systems, what is the significance of 'Incident energy'?",
  "options": [
    "It is a primary cal/cm2 requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Incident energy' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-01",
  "topicId": "arc-flash",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Boundary' is a mandatory safety consideration in arc flash.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Boundary' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-02",
  "topicId": "arc-flash",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Labeling' is a mandatory safety consideration in arc flash.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Labeling' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-03",
  "topicId": "arc-flash",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of arc flash systems, what is the significance of 'IncidentReduction'?",
  "options": [
    "It is a primary cal/cm2 requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'IncidentReduction' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-04",
  "topicId": "arc-flash",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of arc flash systems, what is the significance of 'Incident energy'?",
  "options": [
    "It is a primary cal/cm2 requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Incident energy' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-05",
  "topicId": "arc-flash",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Boundary' is a mandatory safety consideration in arc flash.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Boundary' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-06",
  "topicId": "arc-flash",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of arc flash systems, what is the significance of 'Labeling'?",
  "options": [
    "It is a primary cal/cm2 requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Labeling' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-07",
  "topicId": "arc-flash",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating arc flash for a load of 177 kW. How does 'IncidentReduction' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the cal/cm2 sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'IncidentReduction' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-08",
  "topicId": "arc-flash",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating arc flash for a load of 341 kW. How does 'Incident energy' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the cal/cm2 sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Incident energy' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-09",
  "topicId": "arc-flash",
  "level": "beginner",
  "type": "scenario",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating arc flash for a load of 477 kW. How does 'Boundary' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the cal/cm2 sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Boundary' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-10",
  "topicId": "arc-flash",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Labeling' is a mandatory safety consideration in arc flash.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Labeling' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-11",
  "topicId": "arc-flash",
  "level": 1,
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of arc flash systems, what is the significance of 'IncidentReduction'?",
  "options": [
    "It is a primary cal/cm2 requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'IncidentReduction' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-12",
  "topicId": "arc-flash",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Incident energy' is a mandatory safety consideration in arc flash.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Incident energy' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-13",
  "topicId": "arc-flash",
  "level": 2,
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'Boundary' is a mandatory safety consideration in arc flash.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'Boundary' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-14",
  "topicId": "arc-flash",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating arc flash for a load of 490 kW. How does 'Labeling' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the cal/cm2 sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Labeling' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-arc-flash-15",
  "topicId": "arc-flash",
  "level": 1,
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'IncidentReduction' is a mandatory safety consideration in arc flash.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'IncidentReduction' is essential for professional arc flash works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-00",
  "topicId": "pq-harmonics",
  "level": "advanced",
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pq harmonics for a load of 12 kW. How does 'VFD harmonics' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the THD sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'VFD harmonics' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-01",
  "topicId": "pq-harmonics",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pq harmonics systems, what is the significance of 'Neutral heating'?",
  "options": [
    "It is a primary THD requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Neutral heating' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-02",
  "topicId": "pq-harmonics",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pq harmonics for a load of 327 kW. How does 'Filter passive/active' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the THD sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Filter passive/active' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-03",
  "topicId": "pq-harmonics",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'THD %' is a mandatory safety consideration in pq harmonics.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'THD %' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-04",
  "topicId": "pq-harmonics",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pq harmonics systems, what is the significance of 'VFD harmonics'?",
  "options": [
    "It is a primary THD requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'VFD harmonics' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-05",
  "topicId": "pq-harmonics",
  "level": 2,
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pq harmonics systems, what is the significance of 'Neutral heating'?",
  "options": [
    "It is a primary THD requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Neutral heating' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-06",
  "topicId": "pq-harmonics",
  "level": "advanced",
  "type": "mcq",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pq harmonics systems, what is the significance of 'Filter passive/active'?",
  "options": [
    "It is a primary THD requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Filter passive/active' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-07",
  "topicId": "pq-harmonics",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pq harmonics for a load of 481 kW. How does 'THD %' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the THD sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'THD %' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-08",
  "topicId": "pq-harmonics",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pq harmonics for a load of 99 kW. How does 'VFD harmonics' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the THD sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'VFD harmonics' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-09",
  "topicId": "pq-harmonics",
  "level": 2,
  "type": "scenario",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "An engineer is calculating pq harmonics for a load of 67 kW. How does 'Neutral heating' affect the selection of equipment?",
  "options": [
    "It sets the base baseline for the THD sizing.",
    "It is ignored for loads under 1000 kW.",
    "It dictates the color coding of the insulation.",
    "It reduces the required short-circuit rating."
  ],
  "answer": 0,
  "explanation": "Understanding 'Neutral heating' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-10",
  "topicId": "pq-harmonics",
  "level": "beginner",
  "type": "mcq",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "In the design of pq harmonics systems, what is the significance of 'Filter passive/active'?",
  "options": [
    "It is a primary THD requirement for compliance.",
    "It is an optional aesthetic consideration.",
    "It only applies to small residential projects.",
    "It has been deprecated by latest IEC standards."
  ],
  "answer": 0,
  "explanation": "Understanding 'Filter passive/active' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption.",
    "2": "Incorrect assumption.",
    "3": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-11",
  "topicId": "pq-harmonics",
  "level": "beginner",
  "type": "tf",
  "difficulty": "beg",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'THD %' is a mandatory safety consideration in pq harmonics.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'THD %' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
},
{
  "id": "q-bulk-pq-harmonics-12",
  "topicId": "pq-harmonics",
  "level": "advanced",
  "type": "tf",
  "difficulty": "adv",
  "sectors": [
    "res",
    "com",
    "ind"
  ],
  "std": [
    "IS",
    "NEC",
    "IEC"
  ],
  "question": "True or False: The principle of 'VFD harmonics' is a mandatory safety consideration in pq harmonics.",
  "options": [
    "True",
    "False"
  ],
  "answer": 0,
  "explanation": "Understanding 'VFD harmonics' is essential for professional pq harmonics works.",
  "whyWrong": {
    "1": "Incorrect assumption."
  }
}
];

window.QUIZ_BANK = QUIZ_BANK;
