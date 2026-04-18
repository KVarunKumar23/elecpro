/* ═══════════════════════════════════════════
   ElecPro — topics_L1.js
   Level 1: Fundamentals — 12 topics COMPLETE
   ═══════════════════════════════════════════ */

const TOPICS_L1 = [
  {
    id:'ohms-law', level:1, icon:'⚡', title:"Ohm's Law & Basic Circuit Theory",
    desc:"Voltage, current, resistance and the fundamental relationships that govern all electrical circuits.",
    tags:['Ohm\'s Law', 'Circuit Theory', 'V=IR', 'Resistance', 'Voltage', 'Current'],
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"Ohm's Law is the single most important equation in electrical engineering. Every calculation — from sizing a cable to selecting a circuit breaker — traces back to the relationship between voltage, current, and resistance.",
      whyMatters:[
        { icon:'🔥', text:'Undersizing cables causes overheating and fire — Ohm\'s Law prevents this' },
        { icon:'💡', text:'Every equipment selection starts with calculating current draw' },
        { icon:'🛡️', text:'Correct fuse and breaker selection depends on knowing fault current' }
      ],
      theory:"Ohm's Law states that the current through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance.\n\nV = I × R — Voltage equals Current times Resistance\nI = V / R — Current equals Voltage divided by Resistance\nR = V / I — Resistance equals Voltage divided by Current\n\nPower relates to voltage and current:\nP = V × I (watts)\nP = I² × R (useful for cable heat loss calculations)\nP = V² / R\n\nIn a SERIES circuit: total resistance = R1 + R2 + R3. Current is the same through all components. Voltage divides.\n\nIn a PARALLEL circuit: 1/Rtotal = 1/R1 + 1/R2 + 1/R3. Voltage is the same across all components. Current divides.",
      formula:{
        IS:'V = I × R\nI = V / R\nR = V / I\nP = V × I = I²R = V²/R',
        NEC:'V = I × R\nI = V / R\nR = V / I\nP = V × I = I²R = V²/R',
        IEC:'U = I × R\nI = U / R\nR = U / I\nP = U × I = I²R = U²/R\n(IEC uses U for voltage, IS/NEC use V)'
      },
      example:{
        sector:'res',
        given:'A [[230V|120V]] single-phase circuit feeds a [[2.3kW|1.2kW]] water heater. Find current and resistance.',
        steps:[
          'Current: I = P / V = 2300 / 230 = 10A',
          'Resistance: R = V / I = 230 / 10 = 23Ω',
          'Verify: P = I² × R = 100 × 23 = 2300W ✓'
        ],
        result:'The water heater draws 10A. Cable must be rated for at least 10A (use 2.5mm² Cu minimum).'
      },
      rot:["Rule of thumb: For [[230V|120V]] single-phase loads, divide watts by [[230|120]] to get amps. A 1kW load ≈ [[4.35A|8.3A]], a 2kW load ≈ [[8.7A|16.6A]], a 3kW load ≈ [[13A|25A]]."],
      mistakes:["Confusing kW and kVA — Ohm's Law uses real power (W) not apparent power (VA) for resistance calculations","Forgetting to account for power factor in AC circuits — P = V × I × PF for AC, not just V × I","Using the same formula for 3-phase without the √3 factor"],
      interviewQs:["What is the difference between V = IR and P = VI?","Why does resistance in parallel always result in a value lower than the smallest resistor?","How does Ohm's Law apply to AC circuits differently from DC?"],
      siteTips:["On site, a clamp meter measuring higher-than-expected current on a circuit often means the resistance has dropped — check for a partial short circuit or undersized cable","When a breaker keeps tripping, calculate the actual load current before assuming the breaker is faulty — the load may genuinely be drawing too much current"],
      diagram:{type:'schematic',svgId:'ohms-law-beg'}
    },

    advanced:{
      theory:"In AC circuits, impedance (Z) replaces resistance. Impedance has two components:\nZ = R + jX\nwhere R = resistance, X = reactance (XL for inductance, XC for capacitance)\n\n|Z| = √(R² + X²) (impedance magnitude)\nφ = arctan(X/R) (impedance angle)\n\nInductive reactance: XL = 2πfL (increases with frequency)\nCapacitive reactance: XC = 1/(2πfC) (decreases with frequency)\n\nFor cables in AC systems, the impedance determines voltage drop:\nVD = I × Z = I × √(R² + XL²)\n\nFor short circuit calculations, the source impedance determines fault current:\nIsc = V / Ztotal",
      formula:{
        IS:'Z = √(R² + X²)\nXL = 2πfL (f = 50Hz in India)\nXC = 1/(2πfC)\nIsc = V / Z',
        NEC:'Z = √(R² + X²)\nXL = 2πfL (f = 60Hz in USA)\nXC = 1/(2πfC)',
        IEC:'Z = √(R² + X²)\nXL = 2πfL\nIsc = cU / (√3 × Z) [IEC 60909 method]'
      },
      example:{
        sector:'ind',
        given:'A 415V 3-phase motor feeder cable: R=0.183Ω, XL=0.08Ω total. Load current=45A.',
        steps:[
          'Cable impedance: |Z| = √(0.183² + 0.08²) = √(0.0335 + 0.0064) = √0.0399 = 0.2Ω',
          'Voltage drop: VD = √3 × I × Z = 1.732 × 45 × 0.2 = 15.6V',
          'VD% = 15.6 / 415 × 100 = 3.76% — within 5% limit ✓',
          'For fault calculation: Isc = 415 / (√3 × 0.2) = 1198A at cable end'
        ],
        result:'Cable passes VD check. Fault current at cable end = 1.2 kA — verify breaker can clear this.'
      },
      rot:["For MV cables, reactance (XL) can be as significant as resistance. Never ignore XL for cables longer than 100m at 11kV+"],
      mistakes:["Ignoring cable reactance for long LV runs and HV cables — XL contribution to voltage drop becomes significant","Using DC resistance values for AC calculations — AC resistance is slightly higher due to skin effect"],
      interviewQs:["What is the difference between resistance and impedance?","How does cable reactance affect voltage drop calculations?","Why is the skin effect important for large cables at high frequency?"],
      siteTips:["When measuring insulation resistance with a megger, DC is used — the reactance is zero, so the reading is pure resistance. A low megger reading means insulation breakdown.","On HV cables, capacitive charging current can be significant — this must be added to load current for cable sizing."],
      diagram:{type:'schematic',svgId:'ohms-law-adv'}
    },

    calculator:null,
    sectorNotes:{
      res:'In residential wiring, Ohm\'s Law is applied to size DB circuits. Each 20A breaker at [[230V|120V]] can supply a maximum of [[4.6kW (20 × 230)|2.4kW (20 × 120)]]. Typical loop impedance limit: Zs ≤ 1.09Ω for 32A Type B MCB.',
      com:'Commercial buildings apply Ohm\'s Law across MV and LV systems. Loop impedance testing confirms protection operates within disconnection time limits.',
      dc:'Data centres use Ohm\'s Law extensively for DC bus calculations — battery internal resistance, busbar voltage drop, and PDU circuit sizing.',
      ind:'Industrial applications: Ohm\'s Law underpins motor starting calculations, VFD cable sizing, and MCC busbar design.',
      og:'In hazardous areas, Ohm\'s Law is applied to intrinsic safety (Ex ia) energy limitation — keeping energy below ignition threshold by controlling V and I.',
      hc:'Healthcare IT earthing systems use Ohm\'s Law to verify loop impedance limits for RCCB coordination in medical locations.'
    },
    standards:{
      IS:[{clause:'IS 732',title:'Code of Practice for Electrical Wiring',note:'Applies Ohm\'s Law principles to cable selection'},{clause:'IS 3043 Cl.4',title:'Earthing — loop impedance',note:'Maximum earth loop impedance for protection'}],
      NEC:[{clause:'NEC Art. 100',title:'Definitions — Voltage, Current, Resistance',note:'Fundamental definitions'},{clause:'NEC Art. 210',title:'Branch circuits',note:'Current rating application'}],
      IEC:[{clause:'IEC 60364-1',title:'Fundamental Principles',note:'Ohm\'s Law basis for all LV design'},{clause:'IEC 60909',title:'Short circuit — impedance method',note:'Isc = cU/(√3 × Z)'}]
    },
    quiz:[]
  },

  {
    id:'ac-dc', level:1, icon:'🔄', title:'AC vs DC — Differences & Applications',
    desc:'Understanding alternating and direct current — their generation, characteristics, and where each is used.',
    tags:['AC vs DC', 'Alternating Current', 'Direct Current', 'Frequency', 'RMS'],
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"Almost everything in a building runs on AC (Alternating Current). But batteries, solar panels, and computer internals all use DC (Direct Current). Understanding the difference tells you where energy conversion happens and why.",
      whyMatters:[
        { icon:'🔌', text:'AC vs DC determines how equipment is wired and protected' },
        { icon:'🔋', text:'Every UPS, solar system, and EV charger converts between AC and DC' },
        { icon:'⚡', text:'Wrong voltage type damages equipment — AC into DC input = instant failure' }
      ],
      theory:"DIRECT CURRENT (DC): Current flows in one direction only. Voltage is constant (steady). Sources: batteries, solar PV cells, rectifiers. Applications: electronics, UPS battery bus, DC drives, EV charging.\n\nALTERNATING CURRENT (AC): Current reverses direction periodically. Voltage follows a sinusoidal waveform. Frequency: 50 Hz in India/IEC, 60 Hz in USA (NEC). Sources: generators, utility grid. Applications: motors, lighting, heating — virtually all building power distribution.\n\nKEY AC QUANTITIES:\nPeak voltage: Vpeak = Vrms × √2 = 230 × 1.414 = 325V\nRMS voltage: Vrms = Vpeak / √2 (what your voltmeter reads)\nFrequency: f = 50 Hz (India) = 60 Hz (USA)\nPeriod: T = 1/f = 0.02s (20ms) at 50Hz\n\nWHY AC WON: Transformers can step AC voltage up (for long-distance transmission — lower current, lower losses) and down (for safe use). DC cannot be transformed this way — making long-distance DC transmission uneconomical until modern HVDC technology.",
      formula:{
        IS:'Vpeak = Vrms × √2 = 230 × √2 = 325V\nVrms = Vpeak / √2\nf = 50Hz (India)\nT = 1/f = 20ms',
        NEC:'Vpeak = Vrms × √2 = 120 × √2 = 170V (1-ph)\nf = 60Hz (USA)\nT = 1/f = 16.7ms',
        IEC:'Vpeak = Urms × √2\nf = 50Hz (IEC standard)\nUrms = 230V (phase), 400V (line)'
      },
      example:{
        sector:'dc',
        given:'A data centre UPS has a 192V DC battery bus. What is the peak voltage on the AC output (230V rms)?',
        steps:[
          'AC output peak: Vpeak = 230 × √2 = 230 × 1.414 = 325V',
          'DC bus: 192V (steady, no peaks)',
          'The inverter converts 192V DC → 230V AC rms (325V peak)',
          'Cable insulation must handle peak voltage — 325V peak, not 230V'
        ],
        result:'AC output peaks at 325V. DC bus is steady at 192V. Insulation rating must exceed peak AC voltage.'
      },
      rot:["Rule of thumb: Vrms ≈ 0.707 × Vpeak. A 325V peak = 230V rms. Always use rms values for power calculations.","For 50Hz systems: 1 cycle = 20ms. A breaker taking 100ms to trip means 5 AC cycles have passed."],
      mistakes:["Using peak voltage (325V) instead of rms (230V) in power calculations — gives 41% error","Confusing frequency — 50Hz vs 60Hz affects motor speed (rpm = 120f/poles) and transformer design","Connecting AC equipment to DC supply — motors, transformers, and most relays will fail"],
      interviewQs:["Why is RMS voltage used instead of peak voltage for most calculations?","What happens if you connect a 50Hz motor to a 60Hz supply?","Why did AC win the War of Currents over DC?"],
      siteTips:["When measuring voltage with a multimeter on AC circuits, the display shows rms. On DC circuits it shows the actual voltage. Never assume — check your meter's AC/DC setting.","If a transformer hums loudly, it may be on the wrong frequency — a 60Hz transformer on 50Hz will saturate and overheat."],
      diagram:{type:'comparison',svgId:'ac-dc-comparison'}
    },

    advanced:{
      theory:"POWER IN AC CIRCUITS:\nInstantaneous power: p(t) = v(t) × i(t)\nAverage (real) power: P = Vrms × Irms × cosφ (kW)\nReactive power: Q = Vrms × Irms × sinφ (kVAr)\nApparent power: S = Vrms × Irms (kVA)\n\nTHREE-PHASE AC:\n415V line (India) = 230V phase × √3\nPower = √3 × VL × IL × PF\n\nHARMONICS: Non-linear loads (VFDs, rectifiers, LED drivers) draw non-sinusoidal current. This distorts the voltage waveform. Total Harmonic Distortion (THD) measures this:\nTHD = √(ΣIn²) / I1 × 100%\nIEEE 519 limits THD at point of common coupling.\n\nHVDC: Modern long-distance transmission uses High-Voltage DC (HVDC) — converts AC to DC for transmission, then back to AC. Reduces losses over very long distances (>600km) and allows asynchronous grid interconnection.",
      formula:{
        IS:'P = V × I × cosφ\nQ = V × I × sinφ\nS = √(P² + Q²)\nTHD = √(I2²+I3²+...)/I1 × 100',
        NEC:'P = V × I × PF\nS = V × I\nQ = V × I × sin(arccos PF)',
        IEC:'P = U × I × cosφ\nS = U × I\nQ = U × I × sinφ\nTHD per IEC 61000'
      },
      example:{
        sector:'ind',
        given:'A VFD-driven motor draws 50A at 415V with PF 0.85 and THD = 35%. What is the true power?',
        steps:[
          'Apparent power: S = √3 × 415 × 50 = 35.9 kVA',
          'True power: P = S × PF = 35.9 × 0.85 = 30.5 kW',
          'Reactive power: Q = √(S² - P²) = √(35.9² - 30.5²) = 18.9 kVAr',
          'THD = 35% means harmonic current = 0.35 × 50 = 17.5A — size neutral conductor accordingly'
        ],
        result:'True power = 30.5 kW. High THD means neutral must carry harmonic current — upsize neutral by 1.73× or more.'
      },
      rot:["For systems with high THD (>20%), size the neutral conductor same as phase conductors — 3rd harmonics add in the neutral, not cancel."],
      mistakes:["Ignoring harmonics when sizing neutral conductors — can cause neutral overheating and fire","Using PF for kW→kVA but forgetting displacement PF ≠ true PF when harmonics are present"],
      interviewQs:["What is the difference between displacement power factor and true power factor?","Why do 3rd harmonics add in the neutral of a 3-phase system?","What is the purpose of an isolation transformer in a harmonic environment?"],
      siteTips:["If a neutral cable is overheating on a 3-phase system with computers/LEDs, suspect 3rd harmonic current adding in the neutral. Measure neutral current — it should be less than the phase current on a balanced system; if it's equal or greater, you have harmonic problems."],
      diagram:{type:'schematic',svgId:'ac-dc-waveform'}
    },

    calculator:null,
    sectorNotes:{
      res:'Residential supply: [[230V AC|120/240V AC split-phase]] single-phase (phase to neutral). Heavy loads (EV chargers, HVAC) may use 3-phase [[415V|208V]]. All battery systems (UPS, solar storage) involve AC↔DC conversion.',
      com:'Commercial buildings: 3-phase 415V AC distribution. UPS systems for IT loads convert AC→DC→AC. Power quality (harmonics) is a growing concern with LED lighting and VFDs.',
      dc:'Data centres are the most AC/DC intensive environment. Power path: Utility AC → Transformer → UPS (AC→DC→AC) → PDU → Server PSU (AC→DC internally).',
      ind:'Industrial: 3-phase 415V for motors and machinery. VFDs, rectifiers, and welding equipment all generate harmonics. Harmonic filters may be required.',
      og:'Offshore platforms may use 50Hz or 60Hz depending on origin country. Critical systems (ESD, fire & gas) use DC UPS.',
      hc:'Hospital IT systems use isolation transformers (AC→AC) and monitor earth leakage. Battery systems for emergency lighting are DC.'
    },
    standards:{
      IS:[{clause:'IS 12360',title:'Voltage bands for electrical installations',note:'230V/415V standard in India'},{clause:'IEC 61000-3-2',title:'Harmonic current limits',note:'Equipment harmonic emission limits'}],
      NEC:[{clause:'NEC Art. 100',title:'AC and DC definitions',note:'Definitions of alternating and direct current'},{clause:'NEC Art. 647',title:'Sensitive Electronic Equipment',note:'Clean power requirements'}],
      IEC:[{clause:'IEC 60038',title:'Standard voltages',note:'230/400V (phase/line) IEC standard'},{clause:'IEC 61000-4-7',title:'Harmonic measurement',note:'THD measurement methodology'}]
    },
    quiz:[]
  },

  {
    id:'three-phase', level:1, icon:'🔺', title:'Three-Phase Power — Star, Delta, Line vs Phase',
    desc:'How three-phase systems work, why they are used, and the key relationships between line and phase quantities.',
    tags:['Three-Phase', 'Star Delta', 'Line vs Phase', 'Phase Sequence'],
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"Three-phase power is the backbone of every commercial and industrial electrical system. Understanding the star and delta configurations — and the √3 relationships — is non-negotiable for any electrical engineer.",
      whyMatters:[
        { icon:'⚡', text:'3-phase is more efficient than single-phase — same power with less copper' },
        { icon:'⚙️', text:'All large motors, transformers, and generators are 3-phase equipment' },
        { icon:'🔺', text:'Star vs delta configuration determines voltage, current, and earthing behaviour' }
      ],
      theory:"THREE-PHASE BASICS:\nThree sinusoidal voltages, each 120° apart in phase. They are called Phase R (Red), Phase Y (Yellow), Phase B (Blue) in India, or Phase A, B, C in NEC/IEC.\n\nSTAR (Y) CONNECTION:\n— Neutral point exists\n— Line voltage VL = √3 × Phase voltage VP\n— Line current IL = Phase current IP\n— Neutral carries unbalanced current\n— Standard: [[415V line / 240V phase (India), 400V/230V (IEC)|480V line / 277V phase or 208V/120V (NEC)]]\n\nDELTA (Δ) CONNECTION:\n— No neutral point\n— Line voltage VL = Phase voltage VP\n— Line current IL = √3 × Phase current IP\n— Used for motors and some transformer windings\n\nTHREE-PHASE POWER:\nP = √3 × VL × IL × cosφ (using line quantities)\nP = 3 × VP × IP × cosφ (using phase quantities)\nBoth give the same result.",
      formula:{
        IS:'Star: VL = √3 × VP = 1.732 × 240 = 415V\nDelta: VL = VP\nP = √3 × VL × IL × cosφ\nIn India: VL = 415V, VP = 240V, f = 50Hz',
        NEC:'Star: VL = √3 × VP\n208V system: VP = 120V → VL = 208V\n480V system: VP = 277V → VL = 480V\nP = √3 × VL × IL × PF',
        IEC:'Star: UL = √3 × UP = √3 × 230 = 400V\nDelta: UL = UP\nP = √3 × UL × IL × cosφ'
      },
      example:{
        sector:'ind',
        given:'A 3-phase, 415V motor draws 86A at PF 0.85. Calculate: (a) kVA, (b) kW.',
        steps:[
          '(a) Apparent power: S = √3 × VL × IL = 1.732 × 415 × 86 = 61.8 kVA',
          '(b) Real power: P = S × PF = 61.8 × 0.85 = 52.5 kW',
          'Reactive power: Q = √(61.8² - 52.5²) = 32.7 kVAr',
          'Note: Motor nameplate says 50kW — difference is efficiency loss inside motor'
        ],
        result:'Motor draws 61.8 kVA, 52.5 kW. Cable sized for 86A (line current). Transformer sized for kVA.'
      },
      rot:["Quick check: For a balanced 3-phase load at 415V: kVA = IL × 0.718. So 100A = 71.8 kVA, 200A = 143.6 kVA.","Rule: In star, the neutral carries zero current for balanced loads. If neutral is carrying significant current, the load is unbalanced."],
      mistakes:["Using single-phase formula (P = V × I) for 3-phase loads — gives answer that is √3 = 1.73× too low","Confusing line current and phase current in delta loads — phase current = IL / √3","Forgetting that 415V is line-to-line; 240V is line-to-neutral (phase) in India"],
      interviewQs:["[[Why is the line voltage 415V in India but only 230V appears on a socket outlet?|Why is the line voltage 208V in commercial buildings but only 120V appears on a socket outlet?]]","In a delta connection, if one fuse blows in one phase, what happens to the other two phases?","Why do motors sometimes have 6 terminals marked U1,U2,V1,V2,W1,W2?"],
      siteTips:["When taking measurements on a 3-phase panel, measure L1-L2, L2-L3, L1-L3 (line-to-line) — should all be approximately 415V. Then measure L1-N, L2-N, L3-N (line-to-neutral) — should all be approximately 240V. If they aren't equal, the supply is unbalanced.","Phase imbalance >2% causes motors to run hot. Always check phase balance before blaming the motor."],
      diagram:{type:'comparison',svgId:'3ph-star-delta'}
    },

    advanced:{
      theory:"PHASOR ANALYSIS:\nIn a balanced 3-phase system, the three phasors are 120° apart:\nVR = VP∠0°, VY = VP∠-120°, VB = VP∠-240°\n\nVR + VY + VB = 0 (sum is zero for balanced system)\n\nUNBALANCED SYSTEMS:\nWhen loads are unbalanced, neutral current flows:\nIN = IR + IY + IB (phasor sum)\nFor heavily unbalanced systems, neutral conductor must carry this current.\n\nPHASE SEQUENCE:\nPositive sequence (RYB or ABC): normal operating condition. Motors rotate forward.\nNegative sequence (RBY or ACB): causes motors to rotate backward. Generated by asymmetrical faults.\n\nPOWER IN UNBALANCED SYSTEMS:\nMeasure with three wattmeters (one per phase).\nOr use two-wattmeter method (valid for balanced or unbalanced 3-wire systems).\n\nTRANSFORMER CONNECTIONS:\nDelta-Star (Dyn11): most common for distribution. Delta primary blocks zero sequence. Star secondary with neutral for single-phase loads.\nStar-Delta: used for motor starters (reduces starting current to 1/3).",
      formula:{
        IS:'IN = IR + IY + IB (phasor)\nVL = VP × √3\nPhase shift: Dyn11 = 30° lag\nStar-delta starter: Istart = IL_DOL / 3',
        NEC:'IN = IA + IB + IC (phasor sum)\nWye-Delta transformer standard in USA\n2-wattmeter method: P = W1 + W2',
        IEC:'IN = sum of phase currents (complex)\nIEC 60076-1 transformer vector groups\nYyn0, Dyn11 common configurations'
      },
      example:{
        sector:'com',
        given:'A 3-phase MDB has: Phase R = 80A, Phase Y = 95A, Phase B = 70A at unity PF. Find neutral current.',
        steps:[
          'With unity PF and 120° displacement:',
          'IR = 80∠0°, IY = 95∠-120°, IB = 70∠-240°',
          'IN = IR + IY + IB (phasor addition)',
          'Real: 80 + 95×cos(-120°) + 70×cos(-240°) = 80 - 47.5 - 35 = -2.5A',
          'Imaginary: 0 + 95×sin(-120°) + 70×sin(-240°) = -82.3 + 60.6 = -21.7A',
          '|IN| = √(2.5² + 21.7²) = √(6.25 + 470.9) = 21.8A'
        ],
        result:'Neutral carries 21.8A due to phase imbalance. Neutral cable must be rated accordingly. Phase balance should be improved.'
      },
      rot:["For mostly balanced 3-phase loads with some single-phase circuits, neutral current is typically 10–20% of maximum phase current under normal conditions."],
      mistakes:["Treating neutral current as zero for unbalanced loads — it carries the vector sum of phase currents","Using scalar addition for phasors — must use complex (vector) addition"],
      interviewQs:["What is the Dyn11 designation on a transformer nameplate?","Why does a star-delta starter reduce starting torque to 1/3 as well as current?","When would you use a delta-delta transformer instead of delta-star?"],
      siteTips:["Measure all three phase currents and neutral current when commissioning a distribution board. If neutral current exceeds 20% of the largest phase current on a 'balanced' system, investigate the load distribution."],
      diagram:{type:'schematic',svgId:'3ph-phasor'}
    },

    calculator:null,
    sectorNotes:{
      res:'Single-phase (240V) for most outlets and lighting. Three-phase (415V) only for large split ACs, lifts, or EV chargers. The MDB receives 3-phase; circuits distribute to single-phase.',
      com:'All commercial buildings have 3-phase MDB. Load balancing across three phases is important — aim for <10% imbalance. Lighting on one phase, power on another, HVAC on third.',
      dc:'Data centre PDUs typically have 3-phase input (415V or 208V in USA). Balance servers across phases to prevent neutral overloading. Phase imbalance monitoring is standard.',
      ind:'Industrial power is almost entirely 3-phase. Motors require 3-phase. Phase failure protection (ANSI 46) is essential — single phasing damages motors severely.',
      og:'Offshore platforms often have isolated 3-phase IT systems for safety. All hazardous area motors are 3-phase with Ex certification.',
      hc:'Hospital essential power is 3-phase at MDB level, distributed as single-phase to ward circuits. Critical care requires phase isolation monitoring (IT system per IEC 60364-7-710).'
    },
    standards:{
      IS:[{clause:'IS 732 Cl.5',title:'Three-phase systems',note:'415V / 240V standard'},{clause:'IS 2026',title:'Transformer vector groups',note:'Dyn11 standard for distribution'}],
      NEC:[{clause:'NEC Art. 220',title:'Branch circuit calculation',note:'208V, 240V, 480V 3-phase systems'},{clause:'NEC Art. 430',title:'Motors — 3-phase requirements',note:'Phase protection requirements'}],
      IEC:[{clause:'IEC 60038',title:'Standard voltages — 400V/230V',note:'IEC standard 3-phase system voltages'},{clause:'IEC 60076-1',title:'Transformer vector groups',note:'Dyn11, Yyn0 designations'}]
    },
    quiz:[]
  },

  {
    id:'power-factor', level:1, icon:'📐', title:'Power Factor — Real, Reactive, Apparent Power',
    desc:'Understanding the power triangle: kW, kVAr, kVA, and why power factor matters to every electrical designer.',
    tags:['Power Factor', 'Real Power', 'Reactive Power', 'Apparent Power', 'kW', 'kVA'],
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"Power factor is one of the most misunderstood concepts in electrical engineering — and one of the most expensive when ignored. Low power factor means you are paying for electricity you cannot use.",
      whyMatters:[
        { icon:'💸', text:'Low PF causes utility surcharges and increases your electricity bill' },
        { icon:'🔌', text:'Cables and transformers must be sized for kVA, not just kW — PF makes the difference' },
        { icon:'⚡', text:'IE Rules India: PF < 0.90 results in financial penalties for commercial consumers' }
      ],
      theory:"THE POWER TRIANGLE:\nElectrical loads have three types of power:\n\nREAL POWER (P) — kW: The power that actually does useful work (heat, light, motion). What you pay for.\n\nREACTIVE POWER (Q) — kVAr: Power that alternates between source and load (stored in magnetic/electric fields). Does no useful work but still flows through cables, increasing current.\n\nAPPARENT POWER (S) — kVA: The total power the supply must provide. S = √(P² + Q²). This determines cable, transformer, and generator sizing.\n\nPOWER FACTOR: PF = P/S = cosφ\nPF = 1.0 (unity): all power is real, no reactive component — ideal\nPF = 0.8: only 80% of apparent power does useful work\nPF = 0.7 lagging: typical for motors without PF correction\n\nLAGGING vs LEADING:\nInductive loads (motors, transformers): current lags voltage → lagging PF\nCapacitive loads (capacitor banks, some cables): current leads voltage → leading PF",
      formula:{
        IS:'PF = P(kW) / S(kVA) = cosφ\nS = √(P² + Q²)\nQ = P × tanφ = P × tan(arccos PF)\nPF correction: Qc = P(tanφ1 - tanφ2)',
        NEC:'PF = kW / kVA = cosθ\nkVA = kW / PF\nkVAr = kVA × sinθ\nCap bank: kVAr = P(tan φ1 - tan φ2)',
        IEC:'PF = P/S = cosφ\nS = P + jQ (complex power)\n|S| = √(P² + Q²)\nQ > 0: inductive (lagging)\nQ < 0: capacitive (leading)'
      },
      example:{
        sector:'com',
        given:'A commercial building has a 500 kW load at PF 0.75. What transformer kVA is needed? If PF corrected to 0.95, what kVA is needed?',
        steps:[
          'Before correction: kVA = 500 / 0.75 = 666.7 kVA → Select 750 kVA transformer',
          'After correction to 0.95: kVA = 500 / 0.95 = 526.3 kVA → Select 630 kVA transformer',
          'Saving: 750 - 630 = 120 kVA → smaller, cheaper transformer',
          'kVAr required: Q = P(tanφ1 - tanφ2) = 500(tan41.4° - tan18.2°) = 500(0.882 - 0.329) = 276.5 kVAr'
        ],
        result:'PF correction saves one transformer size (750→630 kVA). Install 300 kVAr capacitor bank. Payback typically < 2 years.'
      },
      rot:["Quick sizing: kVAr needed ≈ P × (old PF correction factor - new). From PF 0.75 to 0.95 on 500 kW ≈ 500 × 0.553 = 276 kVAr. Use PF correction tables.","For motors: typical uncorrected PF is 0.7–0.85. With local capacitor at motor terminal, PF improves to 0.92–0.98."],
      mistakes:["Sizing cables for kW instead of kVA — the cable carries current for both kW and kVAr","Forgetting that PF correction must be applied at or near the inductive load — you cannot put all capacitors only at the main switchboard if loads are distributed","Over-correcting PF to leading — leading PF causes overvoltage and generator instability"],
      interviewQs:["What is the difference between lagging and leading power factor?","Why does a motor have a lagging power factor?","Can power factor be greater than 1?"],
      siteTips:["Measure power factor with a power quality analyser, not just a voltmeter and ammeter. A clamp meter reading of 100A at 415V gives S = 71.8 kVA, but without PF you cannot determine kW. Always use a true power analyser for accurate readings.","If a capacitor bank trips its protection on energisation, check for harmonic resonance — the system may need detuned reactors."],
      diagram:{type:'schematic',svgId:'power-triangle'}
    },

    advanced:{
      theory:"DISPLACEMENT PF vs TRUE PF:\nDisplacement PF = cosφ (fundamental frequency only)\nTrue PF = P / S = P / (Vrms × Irms) — includes all harmonics\n\nWhen harmonics are present: True PF < Displacement PF\nDistortion PF = 1 / √(1 + THD²)\n\nPF CORRECTION WITH HARMONICS:\nSimple capacitor banks can create resonance with harmonic-producing loads.\nResonant frequency: fr = f × √(SCR/kVAr)\nUse detuned reactors (7% or 14%) to shift resonance below 5th harmonic.\n\nREACTIVE POWER COMPENSATION METHODS:\n1. Fixed capacitor banks: economical, simple\n2. Automatic PF correction (APFC): switches capacitor stages based on measured PF\n3. Active power filters: compensate harmonics AND reactive power\n4. STATCOM: fast-switching reactive power compensation for sensitive loads\n\nGENERATOR PF CONSIDERATIONS:\nDiesel generators are typically rated at PF 0.8 lagging.\nIf actual load PF is higher (0.9), the generator can supply more kW.\nLeading PF can cause generator instability — avoid overcorrecting.",
      formula:{
        IS:'True PF = P / (Vrms × Irms)\nDistortion PF = 1/√(1+THD²)\nDetuning factor: p = (fr/f)² = 0.93 for 7% reactor\nResonant freq: fr = f1 × √(Q_system/Q_cap)',
        NEC:'True PF = W / VA\nIEEE 519: THD_I limit at PCC\nAPFC: target PF ≥ 0.95 lagging',
        IEC:'PF = P/S (true power factor)\nIEC 61000-3-2 limits harmonics\nEN 61000-4-30 power quality measurement'
      },
      example:{
        sector:'ind',
        given:'Factory: 800 kW, displacement PF 0.80, THD_I = 40%. Find true PF and capacitor requirement.',
        steps:[
          'Distortion factor: 1/√(1+0.4²) = 1/√1.16 = 0.929',
          'True PF = displacement PF × distortion factor = 0.80 × 0.929 = 0.743',
          'S (true) = 800/0.743 = 1077 kVA',
          'For displacement PF correction to 0.95:',
          'Qc = 800 × (tan(arccos0.80) - tan(arccos0.95)) = 800 × (0.75 - 0.329) = 337 kVAr',
          'With 40% THD, use 7% detuned reactors with capacitors to avoid resonance'
        ],
        result:'Install 350 kVAr with 7% detuned reactors. True PF improves. Verify resonant frequency is below 5th harmonic (250Hz).'
      },
      rot:["With VFDs or significant non-linear loads (>20% of total), always specify detuned capacitor banks — plain capacitors will resonate with harmonics."],
      mistakes:["Installing plain capacitors on a system with VFDs or rectifiers — causes harmonic resonance and capacitor failure","Measuring displacement PF and reporting it as true PF when harmonics are present — misleads on actual system efficiency"],
      interviewQs:["What is distortion power factor and how does it differ from displacement power factor?","Why do plain capacitor banks fail quickly in industrial environments with VFDs?","What is the purpose of a 7% detuning reactor on a capacitor bank?"],
      siteTips:["If capacitor banks keep failing (blown fuses, swollen capacitors), measure THD before replacing. If THD > 15%, you need detuned reactors. Replacing capacitors without fixing the root cause is expensive."],
      diagram:{type:'schematic',svgId:'pf-phasor'}
    },

    calculator:null,
    sectorNotes:{
      res:'Residential PF is typically 0.95–1.0 (mostly resistive loads). Not a major concern unless EV chargers or large HVAC without PF correction are installed.',
      com:'Critical issue. IE Rules India: PF ≥ 0.90. APFC panels mandatory for commercial buildings with demand > 100 kVA. ASHRAE 90.1 (NEC) also requires good PF for efficiency compliance.',
      dc:'Data centres target PF > 0.95 at UPS input. Modern UPS units have unity PF correction on input. PDU-level PF monitoring tracks phase imbalance.',
      ind:'Highest impact sector. Motor-dominated loads have PF 0.7–0.85. APFC panels are standard. Harmonic issues common due to VFDs — detuned capacitors required.',
      og:'Offshore platforms use isolated power systems. PF correction must be carefully designed — reactive power affects generator voltage regulation critically.',
      hc:'Hospital power has mixed loads. Medical imaging equipment (MRI, CT) can cause significant reactive power demand. PF correction with harmonic filtering often required.'
    },
    standards:{
      IS:[{clause:'IE Rules 1956 Rule 47A',title:'Power factor obligation',note:'PF ≥ 0.90 for consumers > 100 kVA in India'},{clause:'IS 13585',title:'Shunt capacitors for power systems',note:'Capacitor bank design standard'}],
      NEC:[{clause:'IEEE 519',title:'Harmonic control — PF implications',note:'THD limits at point of common coupling'},{clause:'IEEE 18',title:'Shunt power capacitors',note:'Capacitor application standard'}],
      IEC:[{clause:'IEC 61000-3-2',title:'Harmonic current emissions',note:'Equipment harmonic limits'},{clause:'IEC 60831',title:'Shunt power capacitors',note:'Capacitor unit standard'}]
    },
    quiz:[]
  },

  {
    id:'units-measurement', level:1, icon:'📏', title:'Units & Measurement Systems',
    desc:'SI units, imperial conversions, and the standard prefixes every electrical engineer must know.',
    tags:['Units', 'Measurement', 'SI Units', 'Prefixes', 'Conversions'],
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"Getting units wrong is one of the most common — and most dangerous — errors in engineering. A factor of 1000 error (kW vs W, mΩ vs Ω) can turn a correct formula into a completely wrong answer.",
      whyMatters:[
        { icon:'⚠️', text:'Unit errors cause calculation mistakes that lead to undersized equipment' },
        { icon:'🌍', text:'IS uses SI units; NEC mixes imperial and SI — you must convert fluently' },
        { icon:'🔍', text:'Identifying units instantly tells you if a formula answer is physically reasonable' }
      ],
      theory:"SI BASE UNITS for electrical engineering:\nVoltage: Volt (V)\nCurrent: Ampere (A)\nResistance: Ohm (Ω)\nPower: Watt (W)\nEnergy: Joule (J) or Watt-hour (Wh)\nFrequency: Hertz (Hz)\nTime: Second (s)\nLength: Metre (m)\nTemperature: Kelvin (K) or Celsius (°C)\n\nSI PREFIXES (critical to memorise):\nMega (M) = 10⁶ = 1,000,000\nkilo (k) = 10³ = 1,000\nBase = 1\nmilli (m) = 10⁻³ = 0.001\nmicro (μ) = 10⁻⁶ = 0.000001\nnano (n) = 10⁻⁹\n\nCOMMON CONVERSIONS:\n1 kW = 1000 W = 1000 J/s\n1 kWh = 3,600,000 J = 3600 kJ\n1 kVA = 1000 VA\n1 MVA = 1000 kVA = 1,000,000 VA\n1 mΩ = 0.001 Ω\n1 kΩ = 1000 Ω\n\nIMPERIAL (used in NEC/USA):\n1 foot = 0.3048 m\n1 inch = 25.4 mm\n1 kcmil (kilo circular mil) = cable area unit used in NEC\n1 kcmil ≈ 0.5067 mm²\nAWG (American Wire Gauge) — larger AWG number = smaller wire",
      formula:{
        IS:'SI units throughout\n1 mm² = standard cable sizing\nPower: W, kW, MW\nEnergy: kWh (unit on electricity bill)',
        NEC:'Mix of SI and imperial\nWire sizes in AWG and kcmil\n#12 AWG ≈ 3.3 mm²\n#10 AWG ≈ 5.3 mm²\n500 kcmil ≈ 253 mm²',
        IEC:'SI units throughout\nSame as IS — mm², A, V, W, Hz\nIEC 80000-6: electrical quantities'
      },
      example:{
        sector:'all',
        given:'A cable data sheet shows R = 1.83 mΩ/m. For an 80m cable run carrying 45A, find voltage drop.',
        steps:[
          'Convert: 1.83 mΩ/m = 0.00183 Ω/m',
          'Total R (single conductor) = 0.00183 × 80 = 0.1464 Ω',
          'For 3-phase: VD = √3 × I × R = 1.732 × 45 × 0.1464 = 11.4V',
          'VD% = 11.4 / 415 × 100 = 2.75% ✓ (< 5% limit)'
        ],
        result:'Voltage drop = 11.4V = 2.75%. Staying in milliohms throughout would give: VD = 1.732 × 45 × 146.4 mΩ = 11,418 mV = 11.4V — same answer, just extra conversion step.'
      },
      rot:["Memory trick for prefixes: My King Henry Died By Drinking Cold Milk = Mega, kilo, Hecto, Deca, Base, Deci, Centi, Milli","Energy bill unit: 1 kWh = 1 'unit' of electricity in India. A 1kW appliance running 1 hour = 1 unit. At ₹8/unit, that's ₹8."],
      mistakes:["Using Ω/km from cable tables but forgetting to divide by 1000 to get Ω/m","Mixing kW and kVA in the same equation without PF conversion","Not converting kcmil to mm² when applying NEC cable tables to IS design checks"],
      interviewQs:["How many mm² is a 500 kcmil cable?","What is the difference between kWh and kW?","Why does a 100W light bulb running for 10 hours use 1 kWh of energy?"],
      siteTips:["When a cable data sheet is from a US manufacturer, check whether resistance is given in Ω/kft (ohms per 1000 feet) — this must be converted to Ω/km or Ω/m before use. 1 Ω/kft = 3.281 Ω/km."],
      diagram:{type:'comparison',svgId:'units-table'}
    },

    advanced:{
      theory:"DERIVED UNITS AND DIMENSIONAL ANALYSIS:\nDimensional analysis verifies formula correctness:\nV = I × R → V = A × Ω → check: 1V = 1A × 1Ω ✓\nP = V × I → W = V × A → check: 1W = 1V × 1A ✓\nEnergy = P × t → J = W × s ✓\n\nIEEE vs IEC QUANTITY SYMBOLS:\nIEC/IS: U for voltage, I for current\nNEC/IEEE: V or E for voltage, I for current\nBoth: R for resistance, P for power\n\nSPECIALISED ELECTRICAL UNITS:\nElectric charge: Coulomb (C) = 1 A·s\nCapacitance: Farad (F) = C/V (usually μF or nF)\nInductance: Henry (H) = V·s/A (usually mH)\nMagnetic flux: Weber (Wb) = V·s\nMagnetic flux density: Tesla (T) = Wb/m²\nElectric field: V/m\nResistivity: Ω·m (not Ω — material property, not component)\n\nCABLE CONDUCTOR SIZING SYSTEMS:\nIS/IEC: cross-section area in mm²\nNEC: AWG (American Wire Gauge) for small conductors, kcmil for large\nAWG scale is inverse: AWG 14 (2.08 mm²) > AWG 22 (0.33 mm²)\n#4/0 AWG (0000) = 107 mm² approx.\n\nSOIL/EARTH RESISTIVITY: ρ (rho) in Ω·m\nSand: 200–1000 Ω·m\nClay: 20–100 Ω·m\nRock: 1000–10,000 Ω·m\nThis determines number of earth electrodes needed.",
      formula:{
        IS:'Resistivity: ρ (Ω·m)\nConductor resistance: R = ρ × L / A\nCable area: A in mm² = ρ × L / R × 10⁶\nSkin depth: δ = √(ρ/πfμ) metres',
        NEC:'NEC uses circular mils (CM)\n1 CM = (π/4) × 10⁻⁶ in²\n1 kcmil = 1000 CM\nAWG: d = 0.005 × 92^((36-AWG)/39) inches',
        IEC:'IEC 80000-6 defines all electrical quantities\nSame SI system as IS\nCable sizes: 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300 mm²'
      },
      example:{
        sector:'ind',
        given:'Compare NEC #2/0 AWG with IS equivalent. #2/0 AWG has a cross-section of 67.4 mm².',
        steps:[
          '#2/0 AWG area = 133,100 CM (kcmil) = 67.4 mm²',
          'IS equivalent: nearest standard size = 70 mm²',
          'IS 70mm² current rating (XLPE, in tray) ≈ 213A',
          'NEC #2/0 AWG current rating (THHN, 90°C, conduit) ≈ 195A',
          'Different installation methods and temperature ratings explain the difference'
        ],
        result:'#2/0 AWG ≈ IS 70mm². Current ratings differ due to different installation methods in NEC vs IS standards.'
      },
      rot:["Approximate AWG to mm² conversion: mm² ≈ 10^((36-AWG)/19.93 - 1). Or use lookup table — memorise key values: #12 AWG = 3.3mm², #10 = 5.3mm², #8 = 8.4mm², #6 = 13.3mm²"],
      mistakes:["Applying NEC current ratings to IS-sized cables directly — different derating methods give different results","Using soil resistivity for one location when designing earthing for a project at a different site — always measure or obtain local data"],
      interviewQs:["Why is AWG scale inverse (larger number = smaller wire)?","What is the difference between resistivity (Ω·m) and resistance (Ω)?","How many mm² is an AWG #1/0 conductor?"],
      siteTips:["When reviewing a US-sourced cable schedule for an Indian project, the cable sizes will be in AWG — convert to mm² using a conversion table before applying IS 3961 current ratings."],
      diagram:{type:'schematic',svgId:'units-conversions'}
    },

    calculator:null,
    sectorNotes:{
      res:'Residential cable sizes: 1.5mm² (lights/5A), 2.5mm² (power/15A), 4mm² (AC units), 6mm² (25A circuits). Simple and standardised in IS 732.',
      com:'Commercial: 10–240mm² cable sizes common. NEC projects use AWG — always convert before applying IS tables.',
      dc:'Data centre power is often specified in kW/rack and kVA at PDU level. UPS in kVA. Energy consumption in kWh. PUE is dimensionless (ratio).',
      ind:'Industrial uses full range of cable sizes 4–300mm². Motor ratings in kW (IS/IEC) or hp (NEC/old Indian practice). 1 hp = 0.746 kW.',
      og:'Offshore: often mix of metric (ISO/IEC) and imperial (API standards). Cable specifications may be in AWG for US-designed equipment.',
      hc:'Healthcare: precise current limits for medical locations (IEC 60364-7-710). Earth leakage limits in mA (milliamps). Insulation monitoring in kΩ (kilohms).'
    },
    standards:{
      IS:[{clause:'IS 1318',title:'Preferred numbers',note:'Standard cable sizes'},{clause:'IEC 80000-6',title:'Quantities and units',note:'SI electrical quantities definition'}],
      NEC:[{clause:'NEC Ch.9 Table 8',title:'Conductor properties',note:'AWG to mm², resistance tables'},{clause:'NEC Ch.9 Table 9',title:'AC resistance and reactance',note:'Cable impedance data for NEC'}],
      IEC:[{clause:'IEC 60228',title:'Conductors of insulated cables',note:'Standard conductor cross-sections: 1.5, 2.5, 4, 6... mm²'},{clause:'IEC 80000-6',title:'Electrical units',note:'SI system for electrical engineering'}]
    },
    quiz:[]
  },

  {
    id:'electrical-symbols', level:1, icon:'🔣', title:'Basic Electrical Symbols',
    desc:'The standard IEC 60617 and ANSI/IEEE symbols used in electrical drawings, schematics, and SLDs.',
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"You cannot read electrical drawings without knowing the symbols. Every circuit breaker, transformer, motor, and cable on a drawing is represented by a standardised symbol. India follows IEC 60617; the USA follows ANSI/IEEE 315.",
      whyMatters:[
        { icon:'📋', text:'Cannot read SLDs or equipment drawings without knowing symbols' },
        { icon:'🌍', text:'Symbol standards differ between IS/IEC and NEC — know both for international work' },
        { icon:'🔧', text:'Wrong symbol interpretation on site can cause dangerous misidentification of equipment' }
      ],
      theory:"IEC 60617 SYMBOLS (used in India and most of the world):\n\nPOWER EQUIPMENT:\n— Transformer: two circles side by side (single-line: rectangle with lines)\n— Circuit breaker: square with diagonal line\n— Isolator (disconnector): single line with gap\n— Fuse: rectangle on line\n— Contactor: switch symbol with 'K'\n\nMEASURING INSTRUMENTS:\n— Ammeter: circle with 'A'\n— Voltmeter: circle with 'V'\n— Wattmeter: circle with 'W'\n— kWh meter: circle with 'kWh'\n— CT (Current Transformer): circle with 'CT' on line\n— PT/VT: shown like transformer symbol but smaller\n\nPROTECTION DEVICES:\n— MCB (Miniature Circuit Breaker): box with trip symbol\n— MCCB: similar, larger box\n— RCD/RCCB: MCB symbol with earth connection\n— Fuse: rectangle or 'tube' on line\n— Surge protector: diode-like symbol to earth\n\nONE-LINE DIAGRAM conventions:\n— Single line = 3-phase circuit (all three conductors)\n— Phase count: slash marks (///=3-phase, //=2-phase, /=single-phase)\n— Earthing: triangle pointing down or three horizontal lines",
      formula:{IS:'IEC 60617 symbols (same as IS 696)\nRefer to IS 696:2010 for complete Indian symbol set',NEC:'ANSI/IEEE 315-1975 symbols\nKey differences from IEC noted below',IEC:'IEC 60617 — graphical symbols for diagrams\nIEC 60617-2 through 60617-12: full symbol library'},
      example:{
        sector:'com',
        given:'Identify the components in a typical commercial SLD description: Source → CT → Isolator → CB → Bus → Feeder to DB.',
        steps:[
          'Source: utility grid symbol (3 phases from top)',
          'CT: circle on each phase conductor for metering',
          'Isolator: open switch symbol (manual, no arc protection)',
          'CB (Circuit Breaker): box with cross — can interrupt fault current',
          'Busbar: horizontal line (bold) connecting all feeders',
          'DB feeder: branch lines going down with MCCB at each'
        ],
        result:'Understanding symbol sequence tells you the power flow and protection hierarchy before reading a single word on the drawing.'
      },
      rot:["Remember: A circle = measuring instrument. A box/square = protection device (breaker, fuse). Lines with gaps = isolators (no fault interruption rating).","IEC: transformer = two circles. ANSI: transformer = two coils. Know both — you will encounter both."],
      mistakes:["Confusing an isolator (switch) with a circuit breaker — isolators cannot interrupt fault current and must never be opened under load","Reading ANSI symbols as IEC — the transformer symbol looks completely different between standards"],
      interviewQs:["What is the difference between an isolator and a circuit breaker on a drawing?","Why does a single-line diagram use one line to represent three phases?","How do you indicate a 3-phase, 4-wire circuit on a single-line diagram?"],
      siteTips:["On site drawings, check the legend/title block for which symbol standard is used before reading the drawing — mixing IEC and ANSI interpretation is a common error.","If a drawing shows a symbol you don't recognise, look for a legend — all professional drawings include a symbol legend."],
      diagram:{type:'schematic',svgId:'symbols-iec'}
    },

    advanced:{
      theory:"PROTECTION RELAY SYMBOLS (ANSI device numbers — used in both IS and NEC systems):\n21: Distance relay\n25: Synchronism check\n27: Undervoltage relay\n32: Directional power relay\n49: Thermal overload relay\n50: Instantaneous overcurrent\n50N/50G: Earth fault overcurrent\n51: Time overcurrent relay\n51N: Time earth fault relay\n52: AC circuit breaker\n59: Overvoltage relay\n67: Directional overcurrent\n79: Auto-recloser\n81: Frequency relay\n86: Lockout relay\n87: Differential relay (87T = transformer, 87M = motor, 87B = busbar)\n\nHAZARDOUS AREA SYMBOLS (IEC 60079):\nEx d: Flameproof enclosure (d in circle)\nEx e: Increased safety (e in circle)\nEx ia: Intrinsic safety, category ia (ia in diamond)\nEx p: Pressurised (p in circle)\nTemperature class: T1-T6 shown\nGas group: IIA, IIB, IIC shown\n\nEARTHING SYMBOLS:\nFunctional earth (equipment earth): triangle\nProtective earth (safety): triangle in circle\nNeutral: single horizontal line\n\nBUS DIFFERENTIAL ZONES:\nShown by dotted rectangles around protected equipment sets",
      formula:{IS:'ANSI device numbers used in IS relay settings\nIEC 60617 for main drawing symbols\nIS 5578 for hazardous area marking',NEC:'ANSI/IEEE C37 relay numbering system\nANSI/IEEE 315 graphic symbols\nNFPA 79 industrial machinery electrical diagrams',IEC:'IEC 60617 graphical symbols\nIEC 60079-0 to -7: hazardous area Ex markings\nIEC 61850: digital protection communication symbols'},
      example:{
        sector:'ind',
        given:'A relay panel schematic shows devices: 87T, 51N, 49, 27. What protection does this transformer have?',
        steps:[
          '87T: Transformer differential protection — detects internal faults',
          '51N: Time-delayed earth fault overcurrent — detects earth faults on the system',
          '49: Thermal overload — protects against sustained overloading',
          '27: Undervoltage relay — trips if supply voltage drops too low',
          'Together: complete protection for a medium-to-large power transformer'
        ],
        result:'This transformer has comprehensive protection: differential (internal faults), earth fault (external faults), thermal (overload), undervoltage (system disturbance). Standard for transformers > 2 MVA.'
      },
      rot:["ANSI device numbers worth memorising immediately: 49 (thermal), 50/51 (overcurrent), 50N/51N (earth fault), 87 (differential), 27 (undervoltage), 59 (overvoltage)."],
      mistakes:["Using protection relay numbers from memory without looking up the specific relay's ANSI number — there are 100 device numbers and mixing them up causes dangerous misconnection","Not knowing Ex marking conventions when specifying equipment for hazardous areas — wrong Ex type is a legal and safety violation"],
      interviewQs:["What does ANSI device number 87T protect against?","What is the difference between ANSI 50 and ANSI 51 protection?","How does Ex d differ from Ex e in hazardous area protection?"],
      siteTips:["When reviewing a protection relay panel drawing, look for the ANSI device numbers first — they immediately tell you what function each relay performs, even before reading any text.","On Ex-certified equipment, the marking plate must show: Ex [group] [protection type] [gas group] [temperature class]. If any element is missing or wrong for the zone classification, the equipment cannot be used."],
      diagram:{type:'comparison',svgId:'symbols-iec-vs-ansi'}
    },

    calculator:null,
    sectorNotes:{
      res:'Residential drawings use simplified symbols: MCB, RCD, socket outlet, light switch. IS 732 provides standard layout symbols.',
      com:'Commercial SLDs show: utility, transformer, main CB, busbars, sub-distribution. IEC 60617 symbols throughout for IS projects.',
      dc:'Data centre drawings have specialised symbols: UPS, PDU, CRAC unit, raised floor distribution. Tier certification drawings use specific layout symbols.',
      ind:'Industrial drawings are the most complex — full protection relay ANSI numbers, motor control schematics, bus-duct symbols, MCC cubicle layouts.',
      og:'Hazardous area drawings add Ex marking symbols. Zone boundary lines shown. Area classification drawings use IEC 60079-10 symbols.',
      hc:'Healthcare drawings show IT earthing system (IEC 60364-7-710), isolation monitors, medical grade socket symbols.'
    },
    standards:{
      IS:[{clause:'IS 696',title:'Code of practice — electrical installation symbols',note:'Based on IEC 60617 — Indian standard symbol set'},{clause:'IS 5578',title:'Marking of hazardous area equipment',note:'Ex marking symbols for India'}],
      NEC:[{clause:'ANSI/IEEE 315',title:'Graphic Symbols for Electrical Diagrams',note:'American symbol standard used with NEC'},{clause:'ANSI C37.2',title:'Electrical power system device function numbers',note:'ANSI device numbers 1–99'}],
      IEC:[{clause:'IEC 60617',title:'Graphical symbols for diagrams',note:'Complete IEC symbol library — Parts 2–12'},{clause:'IEC 60079',title:'Hazardous area equipment marking',note:'Ex symbols for explosive atmospheres'}]
    },
    quiz:[]
  },

  {
    id:'intro-drawings', level:1, icon:'📋', title:'Introduction to Electrical Drawings',
    desc:'How to read and produce SLDs, schematic diagrams, wiring diagrams, and drawing title blocks.',
    tags:['Electrical Drawings', 'SLD', 'Schematics', 'Wiring Diagram'],
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"Electrical drawings are the language of engineering. A design that cannot be drawn cannot be built — and a drawing you cannot read is dangerous. This topic teaches you to read and interpret professional electrical drawings.",
      whyMatters:[
        { icon:'📋', text:'SLDs are mandatory deliverables for every electrical installation permit' },
        { icon:'⚡', text:'Misreading a drawing on site can cause wrong equipment installation and accidents' },
        { icon:'✅', text:'Engineers are legally responsible for drawings they sign — you must understand what you sign' }
      ],
      theory:"PROJECT DESIGN WORKFLOW (Handbook of Electrical Design Details):\n\n1. CONCEPT DESIGN (Concept stage): High-level feasibility. Initial load estimation (VA/sq.ft), spatial requirements for plant rooms, and block diagrams aiming at preliminary budgeting.\n\n2. SCHEMATIC DESIGN (Tender Stage): Detailed SLDs, calculated equipment sizing, proposed routing plans, and BOQ (Bill of Quantities). These are issued to contractors for bidding.\n\n3. DETAILED DESIGN (GFC - Good For Construction): Fully coordinated layouts resolving clashes with HVAC/Plumbing. Includes precise cable routing and finalized panel schedules. 'GFC' is the standard term in India for drawings ready for execution.\n\n4. AS-BUILT DRAWINGS (Handover): Prepared post-installation by the contractor, capturing every site deviation. Legally essential for maintenance.\n\nTYPES OF ELECTRICAL DRAWINGS:\n\n1. SINGLE-LINE DIAGRAM (SLD): Shows the complete power system in simplified form. One line = one circuit (regardless of phase count). Shows: sources, transformers, switchgear, protection, metering, distribution boards. Most important drawing type.\n\n2. SCHEMATIC DIAGRAM: Shows how circuits work electrically. Every wire shown. Used for control circuits, relay logic, PLC wiring. Does not show physical layout.\n\n3. WIRING DIAGRAM: Shows physical wiring connections. Used by installers. Shows terminal numbers, cable numbers, physical routes.\n\n4. LAYOUT DRAWING: Shows physical positions of equipment on floor plans. Used for cable routing, equipment placement.\n\n5. PANEL SCHEDULE: Tabular listing of all circuits in a distribution board — circuit number, description, breaker rating, load.\n\nTITLE BLOCK (mandatory on all drawings):\n— Drawing number and revision (e.g. REV 0, REV A, REV 1)\n— Project name and number\n— Client name\n— Drawing title\n— Scale\n— Sheet number (e.g. 1 of 5)\n— Drawn by / Checked by / Approved by\n— Date\n— Engineer's signature (for stamped drawings)\n\nREVISION CONTROL:\nRevision block tracks all changes. Every change = new revision. Old revisions archived. Always work from latest revision.",
      formula:{IS:'IS 696 drawing conventions\nIS 11353 drawing sheet sizes\nA4=210×297, A3=297×420, A1=594×841 mm',NEC:'NFPA 70 requires SLD for services and feeder circuits\nAnsi/IEEE 315 drawing conventions\nNFPA 79 for industrial machinery',IEC:'IEC 61082: preparation of documents used in electrotechnology\nA-series paper sizes per ISO 216'},
      example:{
        sector:'com',
        given:'Read a commercial building SLD description: "415V/240V, 3-phase, 4-wire supply from 11kV/415V, 630kVA Dyn11 transformer → 1600A main MCCB → 400A busbar → 3 × 200A sub-distribution MCCBs → DBs."',
        steps:[
          'Source: 11kV utility → 630kVA transformer (Dyn11 means delta primary, star secondary with neutral)',
          'LV side: 415V line / 240V phase, 3-phase + neutral (4-wire)',
          'Protection: 1600A MCCB at transformer secondary (main protection)',
          'Distribution: 400A rating busbar (note: 630kVA ÷ (1.732×415) = 875A FLC — check busbar rating)',
          'Sub-distribution: 3 × 200A MCCBs feeding floor distribution boards'
        ],
        result:'This SLD represents a typical commercial building distribution system. Potential issue: 630kVA transformer FLC = 875A, yet busbar is only 400A — either there is a downstream restriction or this is for a section of the building only.'
      },
      rot:["Check these three things on every SLD you receive: (1) Is the transformer kVA consistent with the downstream bus/cable ratings? (2) Is the protection device rating appropriate for the equipment below it? (3) Does the earthing system type (TN-S, TT, IT) match the protection device types?"],
      mistakes:["Reading REV 0 drawings when REV 3 is the current issue — always check the title block for latest revision","Confusing schematic and wiring diagrams — schematics show function, wiring diagrams show physical connections; they are not interchangeable"],
      interviewQs:["What is the difference between a schematic diagram and a wiring diagram?","What does the revision block on a drawing tell you?","Why is the Dyn11 vector group shown on a transformer SLD symbol?"],
      siteTips:["Before starting any electrical work on site, always verify you have the latest revision of all relevant drawings. Check title block revision number against the drawing register. Working from superseded drawings is a common cause of errors.","If a drawing shows equipment that doesn't match what's installed on site, raise an RFI (Request for Information) before proceeding — do not assume."],
      diagram:{type:'sld',svgId:'sld-basic'}
    },

    advanced:{
      theory:"PROTECTION COORDINATION DRAWINGS:\nTime-current characteristic (TCC) curves plotted on log-log paper.\nShows: fuse, MCCB, relay characteristic curves.\nProper coordination: downstream device clears fault before upstream operates.\nMinimum discrimination margin: 0.2–0.4s between relay curves at any fault current.\n\nCABLE SCHEDULE FORMAT:\n— Cable tag number (C-001, C-002...)\n— From location → To location\n— Voltage rating\n— Number of cores × cross-section (3×95mm², 4×35mm²)\n— Insulation type (XLPE, PVC)\n— Length\n— Current rating (derated)\n— Voltage drop\n\nEQUIPMENT DATA SHEETS:\nTransformer: kVA, voltage ratio, vector group, impedance%, cooling type (ONAN, ONAF)\nCircuit breaker: voltage, current, breaking capacity (kA), trip unit type\nMotor: kW, voltage, FLA, RPM, IP rating, efficiency class (IE2, IE3)\n\nAS-BUILT DRAWINGS:\nAs-built (or as-installed) drawings show the actual installed condition.\nCritical for: maintenance, future modifications, fault finding.\nContractor obligation: submit as-built drawings before final payment.\n\nCABLE ROUTING DRAWINGS:\nShown on floor plans with cable tray routes highlighted.\nCable tags match cable schedule.\nCrossings and conflicts identified during design stage.",
      formula:{IS:'IS 11353 drawing standards\nSingle-line diagram conventions per IS 5820\nCable schedule format per IS/IEC project practice',NEC:'NFPA 70 Art. 230: SLD for service entrance\nNEC 215: Feeder drawings required for permit\nNFPA 70E: Electrical safety drawings for arc flash',IEC:'IEC 61082-1: Preparation of documents\nIEC 61346: Reference designation system\nISO 5457: Drawing sheet sizes'},
      example:{
        sector:'ind',
        given:'A cable schedule entry reads: C-047, 3×70mm² + 1×35mm² Cu XLPE SWA PVC, 415V, 85m, FROM: MCC-A Feeder F7, TO: Motor M-14 (37kW). Verify this cable selection.',
        steps:[
          'Motor M-14: 37kW, 415V, 3-phase → FLA = 37000/(1.732×415×0.85×0.92) = 69.5A',
          '70mm² Cu XLPE in SWA: current rating ≈ 213A (free air) → derated for grouping',
          'Even with 0.7 derating: 213×0.7 = 149A >> 69.5A — cable is significantly oversized',
          'Voltage drop: √3 × 85 × 69.5 × 0.268/1000 = √3 × 1.583 = 2.74V → 2.74/415 = 0.66% ✓',
          'Why 70mm²? Short circuit withstand check: Isc at MCC = 15kA, tripping time 0.1s\nS = I√t/k = 15000×√0.1/143 = 33.2mm² → 70mm² more than adequate'
        ],
        result:'Cable is oversized for steady state but justified by short circuit withstand if fault level is high, or by future capacity reservation. Engineer should document the reason.'
      },
      rot:["Cable schedule review checklist: (1) Current rating derated ≥ design current. (2) Voltage drop ≤ limit. (3) Short circuit withstand ≥ fault energy. (4) Cable length consistent with routing drawing. (5) Correct armour type for installation method."],
      mistakes:["Submitting drawings without proper title block information — drawings without revision and approval status cannot be used for construction","Generating as-built drawings by simply changing the title block to 'As-Built' without actually recording field changes — this is dangerous falsification"],
      interviewQs:["What information must be on a cable schedule?","What is the difference between 'for construction' and 'as-built' drawings?","How do you identify the latest revision of a drawing?"],
      siteTips:["On large projects, maintain a drawing register — a spreadsheet listing every drawing number, title, current revision, and issue date. Every time you receive revised drawings, update the register. This prevents anyone working from superseded drawings."],
      diagram:{type:'sld',svgId:'sld-advanced'}
    },

    calculator:null,
    sectorNotes:{
      res:'Residential drawings: site plan (socket/switch layout), DB schedule, earth electrode drawing. Simpler but legally required for permit applications.',
      com:'Commercial: full SLD mandatory. Typically: SLD (1 sheet), DB schedules (1 per DB), cable schedule, equipment layout, earthing layout.',
      dc:'Data centres have the most complex drawings: SLD, one-line of UPS/generator system, cooling power layout, rack power distribution, cable management.',
      ind:'Industrial: SLD, motor control schematic, PLC I/O drawings, cable schedule, hazardous area classification drawings (if applicable), earthing grid design.',
      og:'Offshore: hazardous area zone drawings mandatory. Cause and effect matrix for safety systems. Instrument loop diagrams. Ex equipment schedule.',
      hc:'Healthcare: IT earthing system drawings. Essential circuit SLD. Emergency lighting circuit drawings. Detailed schedules for medical grade outlets.'
    },
    standards:{
      IS:[{clause:'IS 696',title:'Drawing conventions',note:'Indian standard for electrical drawing preparation'},{clause:'IS 11353',title:'Drawing sheet sizes',note:'A0 to A4 sheet formats'}],
      NEC:[{clause:'NEC Art. 230.2',title:'SLD for service entrance',note:'NEC requires SLD for electrical service'},{clause:'NEC Art. 215',title:'Feeder diagram requirements',note:'Documentation requirements for feeders'}],
      IEC:[{clause:'IEC 61082-1',title:'Preparation of documents',note:'IEC standard for electrical document preparation'},{clause:'IEC 61346',title:'Reference designation system',note:'Equipment tag numbering system'}]
    },
    quiz:[]
  },

  {
    id:'how-to-read-codes-l1', level:1, icon:'📖', title:'How to Read Electrical Codes (Introduction)',
    desc:'The structure of IS, NEC, and IEC standards — chapters, parts, mandatory rules vs informational notes.',
    tags:['Electrical Codes', 'IS Standards', 'NEC', 'IEC Standards'],
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"Most engineers know the formulas but struggle to find the relevant clause in IS, NEC, or IEC when they need it. This topic teaches you to navigate the codebook efficiently — so you can find the rule, understand it, and apply it correctly.",
      whyMatters:[
        { icon:'📖', text:'Knowing where to look prevents you designing to the wrong clause' },
        { icon:'⚖️', text:'Engineers are legally responsible for code compliance — "I didn\'t know" is not a defence' },
        { icon:'🔍', text:'Standards are updated regularly — know how to check the current edition' }
      ],
      theory:"[NEC]\nTHE NEC (National Electrical Code — NFPA 70):\nOrganised as Articles (like chapters). Key structure:\nArticle 90: Introduction (purpose, scope — read this first)\nChapter 1 (Art. 90–110): General rules\nChapter 2 (Art. 200–285): Wiring and protection\nChapter 3 (Art. 300–398): Wiring methods and materials\nChapter 4 (Art. 400–490): Equipment for general use\nChapter 5 (Art. 500–590): Special occupancies (hospitals, hazardous areas)\nChapter 6 (Art. 600–695): Special equipment (EV, solar, signs)\nChapter 7 (Art. 700–770): Special conditions (emergency power)\nChapter 8 (Art. 800–820): Communications\nChapter 9 + Annexes: Tables and calculations\n\n[IS]\nIS (Indian Standards — BIS):\nOrganised by IS number (e.g. IS 732, IS 3043, IS 3961).\nEach IS has: Scope → References → Definitions → Requirements → Annexes\nNBC 2016 (National Building Code) Part 8 covers electrical installations.\nCEA regulations govern grid connection.\n\n[IEC]\nIEC 60364 SERIES (Low Voltage Installations):\nIEC 60364-1: Fundamental principles\nIEC 60364-4: Protection for safety (faults, overcurrent)\nIEC 60364-5: Selection and erection of equipment\nIEC 60364-6: Verification\nIEC 60364-7-XXX: Special locations (709=marinas, 710=hospitals, 740=amusements)\n\nMANDATORY vs INFORMATIONAL:\n\n[NEC]\nNEC MANDATORY TEXT:\nUses 'shall'. Exceptions: 'shall not apply where...'. Informational Notes: explanatory only, NOT mandatory.\n\n[IS]\nIS MANDATORY TEXT:\nUses 'shall'. Notes and Annexures: informational unless specifically called mandatory.\n\n[IEC]\nIEC MANDATORY TEXT:\nUses 'shall'. Notes: informational.",
      formula:{IS:'IS 732: Main residential/commercial wiring code\nIS 3043: Earthing\nIS 3961: Cable current ratings\nNBC 2016 Part 8: Building electrical installations',NEC:'NEC 2020/2023 edition\nArticle numbers: 1xx General, 2xx Wiring, 3xx Methods\n4xx Equipment, 5xx Special, 6xx Special Equip\n7xx Emergency',IEC:'IEC 60364 series: core LV installation standard\nIEC 60909: Short circuits\nIEC 60076: Transformers\nIEC 60617: Symbols'},
      example:{
        sector:'res',
        given:'A designer needs to find the minimum conductor size for a 20A residential circuit in NEC. Where do they look?',
        steps:[
          'Go to NEC Chapter 2 (Wiring and Protection) — circuit conductors are covered here',
          'Article 210: Branch circuits. Section 210.19: Conductors.',
          '210.19(A)(1): Branch circuit conductors shall have an ampacity of not less than the maximum load to be served.',
          'Cross-reference to Chapter 3, Article 310: Conductors for general wiring.',
          'Table 310.15(B)(16): 20A circuit → #12 AWG copper (THHN, 75°C, 3 conductors in conduit)',
          'Check Informational Note below table: ambient correction factors may apply'
        ],
        result:'NEC 210.19 + Table 310.15(B)(16) together answer this question. Note leads to derating. This is how you use cross-references in the NEC.'
      },
      rot:["NEC navigation: Article 90.3 tells you that Chapters 1–4 apply to all installations; Chapters 5–7 modify or supplement; Chapter 8 is independent. Always start with Ch.1–4 then check if a Special chapter modifies it.","IS navigation: The scope clause tells you exactly which installations the standard covers. Read it first — a standard that doesn't cover your installation type cannot be applied."],
      mistakes:["Reading an Informational Note as if it were a mandatory requirement — notes are explanatory only","Using an outdated edition of a standard — NEC updates every 3 years (2017, 2020, 2023). Always verify the edition your project requires.","Applying IS 732 to industrial installations where IS 1554 (PVC cables) or IS 6272 (HV) is the applicable standard"],
      interviewQs:["What does 'shall' mean in a standard vs 'should' or 'may'?","Which NEC chapter covers emergency and standby power systems?","Can an Informational Note in the NEC override a mandatory requirement?"],
      siteTips:["When an inspector questions a design decision, cite the specific clause: 'Per IS 3043 Clause 8.2...' or 'Per NEC 250.66(A)...'. Vague answers ('it's standard practice') are not acceptable. Always know your clause reference."],
      diagram:{type:'schematic',svgId:'nec-structure'}
    },

    advanced:{
      theory:"EXCEPTION CLAUSES AND MODIFICATIONS:\nExceptions in NEC (and IS) modify the base requirement for specific conditions.\nExample: NEC 210.8 requires GFCI protection in bathrooms. Exception: Receptacles not readily accessible...\n\nCODE ENFORCEMENT HIERARCHY:\n[NEC]\nUSA HIERARCHY:\nLocal building codes → State codes → National Electrical Code (NEC)\nLocal amendments to NEC are common — always check local requirements.\n\n[IS]\nINDIA HIERARCHY:\nLocal building codes → State Electricity Board rules → CEA Regulations → IS Standards\nState Electricity Board rules may add to CEA/IS requirements.\n\n[IEC]\nIEC HIERARCHY:\nLocal regulations → National laws → IEC Standards\nIEC is often adopted partially or fully depending on the country.\n\nCODE vs STANDARD vs SPECIFICATION:\nCode (NEC, NBC): legally adopted, compliance mandatory.\nStandard (IEC, IEEE): technical specification, may not be legally mandated unless referenced by code.\nSpecification: project-specific requirements, may be more stringent than code.\n\n[IEC]\nIEC CLASSIFICATION SYSTEM:\nIEC standards are classified by TC (Technical Committee):\nTC 64: Low voltage electrical installations (IEC 60364)\nTC 17: Switchgear (IEC 60947)\nTC 14: Transformers (IEC 60076)\nTC 2: Rotating machinery (IEC 60034)\n\n[IS]\nHARMONIZED STANDARDS:\nIS standards are increasingly harmonised with IEC (e.g. IS 13947 = IEC 60947).\nThis simplifies international projects — the IS and IEC requirements are aligned.\nCheck: IS standard preface usually states if it is identical (IDT) or modified (MOD) from IEC.",
      formula:{IS:'CEA Regulations 2010 (grid connection)\nIS 732:2019 (general wiring)\nIS 3043:2018 (earthing)\nIS 3961 (cable ratings)\nNBC 2016 Part 8',NEC:'NEC 2023 (latest edition as of 2024)\nNFPA 70E:2021 (electrical safety)\nIEEE standards (referenced by NEC)\nLocal amendments per jurisdiction',IEC:'IEC 60364 series (60364-1 to 60364-7)\nIEC 60909 (fault currents)\nIEC 62305 (lightning)\nIEC 60079 (hazardous areas)'},
      example:{
        sector:'ind',
        given:'An engineer in India needs to design earthing for a new substation. Which standards apply and in what hierarchy?',
        steps:[
          '1. CEA (Central Electricity Authority) Regulations — legally mandated in India. Start here.',
          '2. IS 3043:2018 (Code of Practice for Earthing) — referenced by CEA. Mandatory.',
          '3. IS 732 — general electrical installations (wiring code). Applicable to LV.',
          '4. IEEE 80 — Guide for Safety in AC Substation Grounding. Referenced as good engineering practice.',
          '5. IEC 60364-5-54 — earthing arrangements. IEC equivalent for comparison.',
          'Hierarchy: CEA Regulations > IS 3043 > NBC 2016 > IEC (as guidance)'
        ],
        result:'CEA + IS 3043 are mandatory. IEEE 80 and IEC 60364-5-54 provide additional technical guidance. Always identify the legally mandatory standards first, then use others for supplementary guidance.'
      },
      rot:["When starting a new project, create a 'standards applicable' list in the first week. List: jurisdiction, legally adopted code, referenced standards, project specification requirements. Resolve conflicts before designing."],
      mistakes:["Treating all referenced standards as equally mandatory — some are informative references only","Not checking local amendments when using the NEC — many states and cities have additional requirements beyond the base NEC"],
      interviewQs:["What is the difference between a code and a standard?","How do you handle a conflict between an IS standard and an IEC standard on an Indian project?","What is a harmonised standard?"],
      siteTips:["Download the BIS (Bureau of Indian Standards) app — you can search IS standard titles and numbers to identify which standard covers your topic. Actual standard text requires purchase or BIS library access."],
      diagram:{type:'comparison',svgId:'code-comparison-is-nec-iec'}
    },

    calculator:null,
    sectorNotes:{
      res:'Key codes: IS 732 (wiring), IS 3043 (earthing), NBC 2016 Part 8 (building), CEA Regulations. NEC Art. 210–225 for US residential.',
      com:'IS 732 + NBC 2016 + IE Rules. NEC Chapter 2 + local municipal electrical codes. IEC 60364 for international projects.',
      dc:'TIA-942 (data centre standard), ASHRAE TC 9.9, Uptime Institute Tier Standard — these supplement IS/NEC/IEC for data centre-specific requirements.',
      ind:'IS 732, IS 3961, IS 13947, IS 325, CEA Regulations. NEC Chapters 4 and 5 for industrial equipment. IEC 60947, IEC 60034 for switchgear and motors.',
      og:'IEC 60079 series (hazardous areas), IP 15 (area classification), IS 5572 (Indian hazardous area classification), NFPA 70 Art. 500-516.',
      hc:'IS 1646 (fire protection), NFPA 99 (healthcare facilities), IEC 60364-7-710 (medical locations), HTM 06-01 (UK health technical memorandum — widely referenced).'
    },
    standards:{
      IS:[{clause:'IS 732:2019',title:'Code of Practice for Electrical Wiring',note:'Main Indian wiring standard — residential and commercial'},{clause:'NBC 2016 Part 8',title:'Electrical and Allied Installations',note:'National Building Code electrical requirements'}],
      NEC:[{clause:'NEC Art. 90',title:'Introduction to the NEC',note:'Scope, purpose, enforcement — read before using NEC'},{clause:'NEC Art. 100',title:'Definitions',note:'Mandatory definitions used throughout NEC'}],
      IEC:[{clause:'IEC 60364-1',title:'Fundamental Principles',note:'Scope and purpose of IEC 60364 series'},{clause:'IEC 60364-5-54',title:'Earthing arrangements',note:'IEC earthing system requirements (TN, TT, IT)'}]
    },
    quiz:[]
  },

  {
    id:'per-unit-system', level:1, icon:'📊', title:'Per Unit System',
    desc:'Normalising electrical quantities to base values — essential for fault analysis and power system studies.',
    tags:['Per Unit', 'PU System', 'Base Values', 'Zpu'],
    sectors:['com','ind','dc'], green:false,

    beginner:{
      intro:"The per unit system is the language of power system analysis. Without it, comparing equipment across different voltage levels is unwieldy. With it, a 11kV transformer and a 33kV transformer can be analysed on the same calculation sheet.",
      whyMatters:[
        { icon:'📐', text:'Makes short circuit calculations across voltage levels straightforward' },
        { icon:'🔌', text:'Transformer nameplate impedance (e.g. 4.5%) IS a per unit value — you use it every day' },
        { icon:'⚙️', text:'Required for ETAP, power system studies, and relay coordination' }
      ],
      theory:"THE CONCEPT:\nPer unit (pu) = Actual value / Base value\n\nIf the base voltage is 415V and actual voltage is 400V:\nVpu = 400 / 415 = 0.964 pu\n\nAll quantities — voltage, current, impedance, power — can be expressed in per unit.\n\nCHOOSING BASE VALUES:\nChoose: Sbase (kVA or MVA) and Vbase (kV or V)\nThen calculate: Ibase = Sbase / (√3 × Vbase) for 3-phase\nAnd: Zbase = Vbase² / Sbase\n\nTransformers change Vbase but Sbase stays the same:\nPrimary Vbase = 11kV → Secondary Vbase = 0.415kV (for 11/0.415kV transformer)\nImpedance values automatically transform to new base.\n\nTRANSFORMER IMPEDANCE IN PU:\nA transformer with nameplate impedance 4.5%:\nZpu = 0.045 (on transformer's own base)\nThis means: at full load, the per unit voltage drop across the transformer = 0.045 pu\n\nFAULT CURRENT FROM PU:\nIsc_pu = 1/Ztotal_pu (for source voltage = 1.0 pu)\nIsc = Isc_pu × Ibase",
      formula:{
        IS:'Vpu = V/Vbase\nIpu = I/Ibase\nZpu = Z/Zbase\nIbase = Sbase/(√3 × Vbase)\nZbase = Vbase²/Sbase\nIsc_pu = 1/Z_total_pu',
        NEC:'Same mathematical system\nOften expressed as %Z rather than pu Z\n%Z = Zpu × 100\nIsc = Ibase/Zpu',
        IEC:'Same system — IEC 60909 uses pu impedance\nc = voltage factor (1.0 for min, 1.05 for max)\nIsc = c × 1/Z_total × Ibase'
      },
      example:{
        sector:'ind',
        given:'11/0.415kV transformer: 630 kVA, Z% = 4.5%. Calculate fault current at 415V bus.',
        steps:[
          'Sbase = 630 kVA, Vbase (LV) = 0.415 kV',
          'Ibase = 630 / (√3 × 0.415) = 630 / 0.719 = 876 A',
          'Zpu (transformer) = 0.045 pu (given as 4.5%)',
          'Assuming infinite bus (Zsource = 0): Ztotal = 0.045 pu',
          'Isc_pu = 1 / 0.045 = 22.2 pu',
          'Isc = 22.2 × 876 = 19,447 A ≈ 19.4 kA'
        ],
        result:'Prospective fault current at 415V LV bus = 19.4 kA. LV switchboard must be rated for at least this fault level.'
      },
      rot:["Quick fault current: Isc = FLC / (Z%/100). For 630kVA, FLC=876A, Z=4.5%: Isc = 876/0.045 = 19,467A = 19.5 kA.","Transformer impedance in pu is always relative to its OWN kVA base. When combining equipment, convert to a common base first."],
      mistakes:["Forgetting to change Vbase when crossing transformer — impedances don't convert automatically if base isn't changed","Using %Z from nameplate without adjusting to system base kVA — a 100kVA transformer at 4% and a 1000kVA transformer at 4% have very different actual impedances"],
      interviewQs:["Why is per unit impedance of a transformer the same on both primary and secondary sides?","How do you change base for a per unit impedance?","What is the per unit current if fault current equals FLC × (1/0.045)?"],
      siteTips:["When commissioning a new transformer, record: kVA, voltage ratio, and %Z impedance. These three values are all you need to calculate the prospective fault current — essential for verifying switchboard fault rating before energisation."],
      diagram:{type:'schematic',svgId:'per-unit-diagram'}
    },

    advanced:{
      theory:"CHANGING BASE VALUES:\nWhen combining equipment (transformer + cable + source), all must be on same base.\n\nConversion formula:\nZpu_new = Zpu_old × (Sbase_new/Sbase_old) × (Vbase_old/Vbase_new)²\n\nFor cables: Ractual and Xactual calculated from physical data:\nRpu = Ractual / Zbase = Ractual × Sbase / Vbase²\n\nSYSTEM FAULT CALCULATION USING PU:\n1. Choose system base (e.g. Sbase = 10 MVA, Vbase = 415V)\n2. Convert all impedances to pu on this base\n3. Add series impedances, combine parallel sources\n4. Isc = 1/Ztotal × Ibase\n\nSOURCE (GRID) IMPEDANCE:\nGrid provides: fault level at point of supply (e.g. 500 MVA fault level at 11kV)\nZpu_source = Sbase / Sfault = 10/500 = 0.02 pu\n\nCABLE IMPEDANCE IN PU:\nZbase = Vbase²/Sbase = (0.415)²/10×10³ = 17.2 mΩ (for Sbase=10MVA, Vbase=415V)\nFor 100m of 70mm² Cu cable: R=0.268Ω/km → R(100m) = 0.0268Ω\nRpu = 0.0268 / 0.0172 = 1.56 pu → this shows the cable is dominant impedance",
      formula:{
        IS:'Zpu_new = Zpu_old × (Sb_new/Sb_old) × (Vb_old/Vb_new)²\nZbase = Vbase² / Sbase\nFor 3-phase: Ibase = Sbase / (√3 × Vbase)',
        NEC:'Same system. IEEE 141 (Red Book) is primary reference.\nSIC = (kVA_base/kVA_fault) / %Z_total\nWhere %Z_total = sum of series %Z values',
        IEC:'IEC 60909: Zk = c × Un / (√3 × Ik)\nVoltage factor c: 1.0 (LV, min), 1.05 (LV, max)\n1.0 or 1.1 for MV/HV'
      },
      example:{
        sector:'ind',
        given:'System: Grid fault level 250 MVA at 11kV. Transformer: 1 MVA, 11/0.415kV, 5%Z. Cable: 150m × 70mm², R=0.268Ω/km, X=0.08Ω/km. Find Isc at cable end.',
        steps:[
          'Sbase = 1 MVA, Vbase(HV)=11kV, Vbase(LV)=0.415kV',
          'Ibase(LV) = 1000/(√3×0.415) = 1391 A',
          'Zbase(LV) = 0.415²/1 = 0.172 Ω',
          'Grid: Zpu = 1/250 = 0.004 pu (referred to 1MVA base)',
          'Transformer: Zpu = 0.05 pu (on own base = system base)',
          'Cable R: 0.268×0.15 = 0.0402Ω → Rpu = 0.0402/0.172 = 0.234 pu',
          'Cable X: 0.08×0.15 = 0.012Ω → Xpu = 0.012/0.172 = 0.070 pu',
          'Ztotal = 0.004 + 0.05 + 0.234 + j0.070 = 0.288 + j0.070 → |Z| = 0.296 pu',
          'Isc = 1/0.296 × 1391 = 4699 A ≈ 4.7 kA at cable end'
        ],
        result:'Fault current at cable end = 4.7 kA. Motor protection relay and cable MCC feeder must be set/rated for minimum Isc = 4.7 kA, maximum Isc = 19.4 kA (at transformer secondary).'
      },
      rot:["The dominant impedance in LV systems is usually the transformer (5%) followed by cables. Source impedance is usually negligible for LV fault calculations unless grid is weak."],
      mistakes:["Not re-checking Vbase when crossing a transformer — the most common per unit error","Adding impedances that are on different bases — always convert to common base first"],
      interviewQs:["What happens to Zbase when you cross a transformer in a per unit calculation?","Why does a higher system fault level at the primary mean higher fault current at the LV terminals?","How does adding a current limiting reactor affect the per unit fault current?"],
      siteTips:["When you get a 'fault level' from the utility (e.g. '250 MVA at 11kV'), this directly gives you the source impedance: Zs = kV²/MVA = 121/250 = 0.484Ω at 11kV. Use this in your per unit calculation."],
      diagram:{type:'schematic',svgId:'per-unit-system-adv'}
    },

    calculator:null,
    sectorNotes:{
      res:'Per unit system rarely used in residential design — direct Ohm\'s Law calculations are sufficient.',
      com:'Used for transformer fault level calculations and switchboard rating verification. 630kVA, 4.5% → 19.4 kA at LV terminals — this must be checked against switchboard fault rating.',
      dc:'Critical for data centre bus fault calculations. Multiple UPS units in parallel have combined fault contribution — per unit system simplifies this.',
      ind:'Essential for industrial power system studies: fault calculation, relay coordination, motor starting voltage dip analysis.',
      og:'Used in offshore power system studies. Island grids (generator-fed) require careful per unit analysis — source impedance is not negligible.',
      hc:'Used for essential power system fault calculations. IT earthing systems require earth leakage analysis that uses per unit concepts.'
    },
    standards:{
      IS:[{clause:'IS 13234',title:'Short circuit current calculations',note:'Per unit method as per IEC 60909 adopted'},{clause:'IS 3231',title:'Protective relays',note:'Relay settings expressed in per unit and secondary quantities'}],
      NEC:[{clause:'IEEE 141 (Red Book)',title:'Power System Analysis',note:'Per unit system for industrial power'},{clause:'IEEE 1584',title:'Arc flash',note:'Uses per unit fault current for incident energy calculation'}],
      IEC:[{clause:'IEC 60909',title:'Short circuit currents in three-phase systems',note:'Voltage factor c and per unit impedance method'},{clause:'IEC 60076-5',title:'Transformer short circuit withstand',note:'Per unit impedance and thermal limits'}]
    },
    quiz:[]
  },

  {
    id:'symmetrical-components', level:1, icon:'🔁', title:'Symmetrical Components',
    desc:'Positive, negative, and zero sequence components — the mathematical foundation for unsymmetrical fault analysis.',
    tags:['Symmetrical Components', 'Sequence Components', 'Positive Sequence', 'Zero Sequence'],
    sectors:['ind','og'], green:false,

    beginner:{
      intro:"When a fault is unsymmetrical (single line to earth, line to line), the three phases are no longer balanced. Symmetrical components let you analyse these unbalanced conditions using three sets of balanced phasors.",
      whyMatters:[
        { icon:'🛡️', text:'Earth fault protection relay settings require zero sequence analysis' },
        { icon:'⚙️', text:'Single-phase faults are the most common type — you must understand them' },
        { icon:'⚡', text:'Negative sequence current damages motors — its detection triggers protection' }
      ],
      theory:"THE THREE SEQUENCE COMPONENTS:\nAny unbalanced 3-phase system can be resolved into three balanced components:\n\nPOSITIVE SEQUENCE (+): Three equal phasors, 120° apart, in normal (RYB) rotation. Represents normal balanced operation. Generated by generators.\n\nNEGATIVE SEQUENCE (−): Three equal phasors, 120° apart, in reverse (RBY) rotation. Represents reverse-rotating component. Caused by unsymmetrical faults and load imbalance. Causes reverse rotation torque in motors → overheating.\n\nZERO SEQUENCE (0): Three equal phasors, all in phase (0° between them). Represents the in-phase component. Can only circulate if earth return path exists. Blocked by delta windings.\n\nFORTESCUE'S THEOREM:\nAny set of three unbalanced phasors can be expressed as the sum of positive, negative, and zero sequence components:\nVR = V1 + V2 + V0\nVY = a²V1 + aV2 + V0\nVB = aV1 + a²V2 + V0\nwhere a = 1∠120° = operator for 120° phase shift",
      formula:{
        IS:'V1 = (1/3)(VR + aVY + a²VB)  [positive seq]\nV2 = (1/3)(VR + a²VY + aVB)  [negative seq]\nV0 = (1/3)(VR + VY + VB)      [zero sequence]\na = 1∠120°, a² = 1∠240°',
        NEC:'Same mathematical framework\nIEEE C37.113 uses symmetrical components\nPositive (A1), Negative (A2), Zero (A0) sequence',
        IEC:'Same system — IEC 60909 uses symmetrical components\nZ1, Z2, Z0: positive, negative, zero sequence impedances\nFor most equipment: Z1 = Z2 ≠ Z0'
      },
      example:{
        sector:'ind',
        given:'A single line to earth fault (Phase R to earth) occurs. The fault current IF = 5kA. Decompose into sequence currents.',
        steps:[
          'For a single phase to earth fault on Phase R:',
          'IR = IF = 5kA, IY = IB = 0 (unfaulted phases)',
          'I1 = I2 = I0 = IF/3 = 5000/3 = 1667A',
          'All three sequence currents are equal for SLG fault',
          'Earth fault relay sees: I0 = IF/3 in neutral/earth path',
          'Relay setting must be sensitive enough to detect I0 = 1667A'
        ],
        result:'Earth fault relay in neutral must detect 1667A (= Fault/3). This sets the minimum sensitivity of the 51N relay. If CT ratio is 1000/1A, relay sees 1.667A — set pickup below this.'
      },
      rot:["For a single phase to earth (SLG) fault: I1 = I2 = I0 = IF/3. This relationship is always true for a bolted SLG fault.","For a 3-phase balanced fault: I1 = IF, I2 = I0 = 0. Only positive sequence. This is why 3-phase fault gives maximum fault current."],
      mistakes:["Thinking zero sequence = ground current — zero sequence current is the sequence component, not directly equal to ground current (though related)","Expecting zero sequence to flow in delta windings — delta blocks zero sequence. This is why Dyn transformers block zero sequence from HV to LV."],
      interviewQs:["Why does a delta winding block zero sequence current?","Which fault type produces negative sequence current?","What is the significance of negative sequence current for induction motors?"],
      siteTips:["Negative sequence protection (ANSI 46) on motors trips when imbalance exceeds typically 5–8%. If a motor trips on neg-sequence protection, first check the supply phase voltages before blaming the motor — a blown fuse on one phase creates massive negative sequence."],
      diagram:{type:'schematic',svgId:'symm-components'}
    },

    advanced:{
      theory:"SEQUENCE IMPEDANCES:\nDifferent sequence currents see different impedances:\nZ1: Positive sequence impedance (normal machine impedance)\nZ2: Negative sequence impedance (≈ Z1 for cables and transformers, different for generators and motors)\nZ0: Zero sequence impedance (depends on transformer winding and earthing)\n\nFOR TRANSFORMERS:\nZ0 depends on winding configuration:\n— Star with solidly earthed neutral: Z0 = Z1 (zero sequence can circulate)\n— Delta winding: Z0 = ∞ (blocks zero sequence)\n— Floating star (unearthed): Z0 = ∞\n— Resistance/reactance earthed star: Z0 = Z1 + 3Zn\n\nFAULT CURRENT EQUATIONS:\nSingle phase to earth (SLG): IF = 3V / (Z1 + Z2 + Z0)\n3-phase symmetrical: IF = V / Z1\nLine to line (LL): IF = √3V / (Z1 + Z2)\nDouble line to earth (DLG): more complex — series/parallel combination\n\nEARTHING EFFECTS ON FAULT CURRENT:\nSolid earth: maximum earth fault current\nResistance earthed (RE): reduces earth fault current = 3V/3R = V/R\nPetersen coil (resonant earthing): nearly eliminates earth fault current\nIsolated neutral: small capacitive earth fault current only",
      formula:{
        IS:'SLG fault: IF = 3 × Vphase / (Z1 + Z2 + Z0)\n3-ph: IF = Vphase / Z1\nLL fault: IF = √3 × Vphase / (Z1 + Z2)\nZ0(cable) ≈ 3Z1 (approx for 3-core cable)',
        NEC:'Same equations (IEEE 141 / IEEE C37.010)\nGenerator: Z2 ≈ 0.15-0.25 pu\nGenerator: Z0 = 0.05-0.15 pu (varies)',
        IEC:'IEC 60909 defines sequence impedances\nGenerators: Z1 = Xd\", Z2 ≈ Xd\"\nCables: Z0 ≈ 3Z1 (armour earth return)'
      },
      example:{
        sector:'og',
        given:'An 11kV system has: Z1=Z2=0.5+j1.5Ω, Z0=1.5+j4.5Ω. Phase voltage=6350V. Find SLG fault current.',
        steps:[
          '|Z1| = |Z2| = √(0.5²+1.5²) = √(0.25+2.25) = √2.5 = 1.58Ω',
          '|Z0| = √(1.5²+4.5²) = √(2.25+20.25) = √22.5 = 4.74Ω',
          'Z1+Z2+Z0 = (0.5+0.5+1.5) + j(1.5+1.5+4.5) = 2.5+j7.5Ω',
          '|Z1+Z2+Z0| = √(2.5²+7.5²) = √(6.25+56.25) = √62.5 = 7.906Ω',
          'IF = 3 × 6350 / 7.906 = 2409 A ≈ 2.41 kA earth fault current',
          'Compare: 3-phase fault: IF = 6350/1.58 = 4019A = 4.02 kA',
          'Note: SLG fault current (2.41 kA) < 3-phase fault (4.02 kA) — typical for solidly earthed systems'
        ],
        result:'Earth fault current = 2.41 kA. This is the current that flows in the faulted cable and in the earth/neutral. Earth fault relay must be set to detect this.'
      },
      rot:["On solidly earthed systems, SLG fault current is typically 60–90% of 3-phase fault current. On impedance earthed systems, SLG current can be much lower — as low as a few amps for Petersen coil systems."],
      mistakes:["Assuming Z2 = Z1 for all equipment — generators have different Z1 and Z2 values","Forgetting that zero sequence current flows through earth — this means the earth cable must be sized for zero sequence fault current"],
      interviewQs:["Why is the earth fault current on a resistance-earthed system much lower than a solidly-earthed system?","How does Petersen coil earthing achieve near-zero earth fault current?","What is the effect of high Z0 (zero sequence impedance) on earth fault current?"],
      siteTips:["When relay coordination for earth faults fails in the field (trips too fast or too slow), check the earth fault current calculation — was the actual Z0 of the transformer winding configuration (Dyn11 vs Yyn0) correctly accounted for?"],
      diagram:{type:'schematic',svgId:'symm-comp-fault'}
    },

    calculator:null,
    sectorNotes:{
      res:'Not applicable in residential design.',
      com:'Used for transformer neutral earthing decisions. High-rise buildings with multiple transformers use symmetrical components to set earth fault relay coordination.',
      dc:'Data centre generators require negative sequence protection (ANSI 46). Parallel generator systems need zero sequence current sharing analysis.',
      ind:'Most important sector. Motor protection (ANSI 46), transformer protection (87T using sequence quantities), earth fault relay (51N) all use symmetrical components.',
      og:'Critical for protection on isolated/resistance-earthed 11kV systems common offshore. SLG faults on offshore platforms produce different fault currents than solidly earthed onshore systems.',
      hc:'IT earthing systems (IEC 60364-7-710) operate with near-zero earth fault current for first fault. Symmetrical components explain why the insulation monitor detects the first fault without tripping.'
    },
    standards:{
      IS:[{clause:'IS 13234',title:'Short circuit calculations — asymmetrical faults',note:'Uses symmetrical component method per IEC 60909'},{clause:'IS 3231',title:'Protective relays',note:'Sequence current inputs to protection relays'}],
      NEC:[{clause:'IEEE 141',title:'Industrial power system analysis',note:'Symmetrical components method for industrial systems'},{clause:'IEEE C37.010',title:'Application guide for fault calculations',note:'Sequence component fault current calculation'}],
      IEC:[{clause:'IEC 60909',title:'Short circuit currents — unsymmetrical faults',note:'IEC method using positive, negative, zero sequence'},{clause:'IEC 60034-1',title:'Rotating machines — sequence impedances',note:'Motor positive and negative sequence impedances'}]
    },
    quiz:[]
  },

  {
    id:'electrical-safety', level:1, icon:'🦺', title:'Electrical Safety — Arc Flash, Touch Voltage, PPE',
    desc:'The hazards of electricity: touch voltage, step potential, arc flash energy, and correct PPE selection.',
    tags:['Electrical Safety', 'Arc Flash', 'Touch Voltage', 'PPE', 'Safety'],
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"Electricity kills silently and instantly. Understanding the hazards — and how protection systems limit them — is the most important non-technical knowledge an electrical engineer can have.",
      whyMatters:[
        { icon:'⚡', text:'100 mA through the heart causes ventricular fibrillation — less than a 25W bulb draws' },
        { icon:'🔥', text:'Arc flash can produce 35,000°C and cause fatal burns from several metres away' },
        { icon:'🦺', text:'Wrong PPE or inadequate protection kills engineers — correct selection is mandatory' }
      ],
      theory:"EFFECTS OF CURRENT ON THE BODY (IEC 60479-1):\n1 mA: Perception threshold (tingle)\n10 mA: Let-go threshold — muscles cannot release\n30 mA: Respiratory paralysis risk\n100 mA: Ventricular fibrillation threshold (1 second)\n1000 mA (1A): Severe burns, immediate cardiac arrest\n\nThis is why RCDs/RCCBs trip at 30 mA — well below the dangerous threshold.\n\nTOUCH VOLTAGE HAZARD:\nWhen a fault occurs, the earthed metalwork rises to a voltage above true earth.\nTouch voltage = voltage between the hand touching metal and the feet on ground.\nLimit: typically 50V AC (safe contact voltage per IEC 60479-1 for dry conditions).\nProtection: fast disconnection by RCD or fuse/MCB within the required time.\n\nSTEP POTENTIAL:\nNear an earth fault, voltage gradient exists in the soil.\nA person's two feet, separated by ~1m, are at different voltages → current flows.\nDangerous near earth electrode during fault. Shuffle (feet together) rather than stride when approaching suspicious earthing areas.\n\nARCFLASH:\nAn arc flash is an explosive release of energy from an electrical fault.\nTemperature: up to 35,000°C (4× the surface of the sun).\nPressure wave, intense light, molten metal droplets.\nIncident energy measured in cal/cm² — 1.2 cal/cm² causes onset of 2nd degree burn.\nDistance is critical — doubles the distance, reduces energy to 1/4.",
      formula:{
        IS:'Touch voltage: Vt = Ia × (Zf + Zs/2)\nRCD trip: 30mA × 0.04s = 1.2 mAs (safe body energy)\nStep potential: Vs = Ia × ρ / (2π) × (1/r1 - 1/r2)',
        NEC:'NFPA 70E: Incident energy E = 4.184 × Cf × En × (t/0.2)\nArc flash boundary: DBD = [4.184 × Cf × En × (t/0.2) / Eb]^(1/2)\nEb = 1.2 cal/cm² (2nd degree burn onset)',
        IEC:'IEC 60479-1: Body current limits\nTouch voltage limit: 50V AC (dry), 25V (wet) per IEC 60364-4-41\nArc flash: per IEC 61641 (enclosed switchgear)'
      },
      example:{
        sector:'ind',
        given:'A 415V industrial panel has a fault level of 25 kA. An engineer is working on it. NFPA 70E calculation gives incident energy of 8 cal/cm² at 450mm working distance. What PPE category is required?',
        steps:[
          'Incident energy = 8 cal/cm² at 450mm',
          'NFPA 70E PPE Categories (2021):',
          'Category 1: 4 cal/cm² — Arc rated shirt + trousers',
          'Category 2: 8 cal/cm² — Arc rated coverall',
          'Category 3: 25 cal/cm² — Arc flash suit',
          'Category 4: 40 cal/cm² — Heavy arc flash suit',
          '8 cal/cm² = Category 2 boundary',
          'Required: Category 2 PPE — arc rated face shield, arc rated coverall, leather gloves'
        ],
        result:'PPE Category 2 required. Arc flash label must be affixed to the panel door showing: incident energy = 8 cal/cm², working distance = 450mm, PPE category = 2.'
      },
      rot:["Safe rule: if you're unsure what PPE is required, de-energise the equipment first — this is always safer than estimating PPE level.","The RCD protects you from shock. Nothing protects you from arc flash except PPE and de-energisation — keep this clear."],
      mistakes:["Thinking rubber gloves protect against arc flash — rubber gloves protect against shock only. Arc flash requires arc-rated PPE (arc flash suit, face shield)","Trusting that a circuit is de-energised without locking out and verifying with a voltage tester — always: isolate, lock out, test before touch","Working in restricted/limited approach boundary without appropriate PPE"],
      interviewQs:["Why does an RCD not protect against all electrical shock scenarios?","What is the difference between touch voltage and step potential?","How does distance affect arc flash incident energy?"],
      siteTips:["Before opening any electrical panel on site: (1) Check arc flash label for incident energy and PPE requirements. (2) Wear appropriate PPE. (3) Stand to the side when opening — not directly in front of the panel. (4) Use one hand where possible — this prevents current path across chest.","'Rubber sole shoes protect me' — FALSE. Voltage in an arc flash event far exceeds any shoe insulation. Proper arc-rated clothing and face shield are the only protection."],
      diagram:{type:'schematic',svgId:'touch-step-voltage'}
    },

    advanced:{
      theory:"ARC FLASH ANALYSIS (IEEE 1584:2018):\nThe IEEE 1584-2018 model calculates incident energy based on:\n— System voltage (V)\n— Bolted fault current (kA)\n— Working distance (mm)\n— Arcing current (kA) — calculated from fault current\n— Arc duration (depends on protection relay timing)\n— Electrode configuration and gap\n— Equipment type (open air, enclosure)\n\nREDUCING ARC FLASH HAZARD:\n1. Zone-selective interlocking (ZSI): upstream and downstream breakers communicate → upstream stays closed, downstream trips faster → reduces arc duration\n2. Maintenance mode setting: temporarily reduces relay pickup during maintenance → faster trip\n3. Bus differential protection (87B): very fast trip (1–2 cycles) → minimal energy release\n4. High-resistance grounding: limits fault current → reduces incident energy\n5. Remote racking: rack in/out breakers remotely → person not present during fault\n\nLOCKOUT/TAGOUT (LOTO):\nProcedure to prevent equipment from being accidentally energised during maintenance:\n1. Notify affected employees\n2. Identify energy sources\n3. Shut down equipment\n4. Isolate energy source\n5. Apply lockout device\n6. Release stored energy (discharge capacitors, springs)\n7. Verify de-energisation (test with live voltage detector)\n\nIPAF 60529: Ingress Protection Degrees:\nFirst digit: solid particle protection (0–6)\nSecond digit: liquid protection (0–9K)\nIP65: dust tight, jet proof — for outdoor panels\nIP54: dust protected, splash proof — typical indoor switchgear",
      formula:{
        IS:'IEEE 1584-2018 model adopted by IS practice\nIP rating per IEC 60529 = IS 13947-1\nLOTO per IS 5216 (Safety Code for Electrical Works)',
        NEC:'NFPA 70E:2021 — primary US arc flash standard\nIncident energy: E = 4.184 × Cf × En × (t/0.2) × (610x/D)x\nD = working distance (mm)\nEn = normalised energy at 610mm',
        IEC:'IEC 61641: guidance for testing under arc fault conditions\nIEC 60529: IP code\nIEC 60364-4-41: protection against electric shock\nIEC 61439: switchgear assemblies'
      },
      example:{
        sector:'dc',
        given:'A data centre is installing 415V switchgear. The arc flash study shows 42 cal/cm² at the bus. How can this be reduced below 8 cal/cm² (Category 2)?',
        steps:[
          'Current: 42 cal/cm² >> 8 cal/cm² target. Primary issue = high fault current + slow clearing',
          'Strategy 1: Install bus differential protection (87B) → clears in 1–2 cycles (20–40ms at 50Hz)',
          'Expected energy with 87B: E ∝ t → 42 × (40/400ms) ≈ 4.2 cal/cm² (assuming original trip time 400ms)',
          'Strategy 2: Zone-selective interlocking → faster downstream clearing',
          'Strategy 3: Reduce bolted fault current — add series impedance (current limiting reactor)',
          'Best practice for data centre: 87B protection on main bus → incident energy < 5 cal/cm²'
        ],
        result:'87B bus differential protection is the most effective strategy. Reduces arc flash energy by 90% by cutting clearing time from ~400ms to ~40ms. Arc flash label updated to Category 2 or lower.'
      },
      rot:["Energy ∝ time. Halving the clearing time halves the incident energy. The fastest protection (differential relay, 2-cycle clearing) gives the lowest arc flash energy."],
      mistakes:["Performing arc flash analysis only at commissioning and not after any system modification — adding a generator, changing a relay, or replacing a breaker can significantly change incident energy","Applying PPE categories from NFPA 70E tables without running an actual incident energy analysis — table method is conservative and may over-specify PPE, but actual analysis is always preferred"],
      interviewQs:["How does bus differential protection reduce arc flash hazard?","What is the purpose of LOTO (lockout/tagout)?","Why does increasing working distance reduce arc flash incident energy?"],
      siteTips:["After any protection relay change (settings, relay replacement, added generator), update the arc flash labels. A change to clearing time changes the incident energy — old labels become invalid.","If you measure voltage unexpectedly on an 'isolated' circuit, stop immediately — do not proceed without full LOTO. Backfeed from a parallel source is a common cause of unexpected voltage."],
      diagram:{type:'schematic',svgId:'arc-flash-zones'}
    },

    calculator:null,
    sectorNotes:{
      res:'30mA RCD mandatory for all socket circuits (IS 732, NEC 210.8). Touch voltage limit 50V. Main risk: domestic shock from faulty appliances or damaged wiring.',
      com:'Arc flash labelling on MDB and major distribution panels. LOTO procedures for building maintenance. RCD at all socket circuits. Testing by qualified person periodically.',
      dc:'Highest arc flash risk due to large fault levels and dense equipment. Bus differential protection (87B) standard. Remote racking for breakers. Comprehensive LOTO procedures mandatory.',
      ind:'Most dangerous environment for arc flash. IEEE 1584 arc flash analysis mandatory before live work. Four PPE categories. NFPA 70E or equivalent mandatory. Zone-selective interlocking common.',
      og:'Explosion risk added to electrical shock risk. Hot-work permits required. ATEX PPE in addition to electrical PPE. LOTO must account for gas and pressure isolation as well.',
      hc:'IT earthing system (IEC 60364-7-710) limits earth fault current to <30mA for first fault in medical locations. Patient earth leakage limit: 10μA (micro-amps) for equipment in direct patient contact.'
    },
    standards:{
      IS:[{clause:'IS 3043',title:'Code of Practice for Earthing',note:'Touch and step potential limits, earthing for safety'},{clause:'IS 5216',title:'Safety code for electrical works',note:'LOTO procedures and electrical safety rules'}],
      NEC:[{clause:'NFPA 70E:2021',title:'Electrical Safety in the Workplace',note:'Arc flash PPE categories, approach boundaries, LOTO'},{clause:'NFPA 70E Art. 130',title:'Work involving electrical hazards',note:'PPE requirements and work practices'}],
      IEC:[{clause:'IEC 60479-1',title:'Effects of current on the human body',note:'Body current thresholds and safe limits'},{clause:'IEC 60364-4-41',title:'Protection against electric shock',note:'Touch voltage limits and disconnection times'}]
    },
    quiz:[]
  },

  {
    id:'guided-path', level:1, icon:'🎯', title:'Guided Learning Path Selection',
    desc:'Choose your role and get a personalised study sequence tailored to your background and goals.',
    tags:['Guided Path', 'Learning Path', 'Career Path'],
    sectors:['res','com','ind','dc','og','hc'], green:false,

    beginner:{
      intro:"Not everyone should study electrical engineering the same way. A fresh graduate needs foundations first. A site engineer needs practical tools quickly. A design consultant needs sizing tools and advanced analysis. Choose your path — and follow it.",
      whyMatters:[
        { icon:'🎯', text:'A personalised path gets you productive faster — no wasted time on what you already know' },
        { icon:'📈', text:'Studying in the right sequence prevents gaps — each topic builds on the previous' },
        { icon:'🏆', text:'Completing a structured path gives you a comprehensive, balanced skill set' }
      ],
      theory:"THREE PATHS — CHOOSE BASED ON YOUR CURRENT ROLE:\n\nPATH 1 — STUDENT / FRESH GRADUATE:\nStart from Level 1. Build every foundation properly. Even if you studied these in college, the portal presents them with real engineering context, standard references, and worked examples that textbooks rarely show.\nSequence: All Level 1 → All Level 2 → All Level 3 → All Level 4\nEstimated time: 6–8 months (1–2 hours/day)\n\nPATH 2 — SITE / FIELD ENGINEER:\nYou know how things work physically. You need to understand the calculations and standards behind what you're installing and maintaining.\nStart at Level 2. Return to Level 1 topics as needed.\nSequence: Load Calc → Cable Sizing → VD → Circuit Protection → Earthing → Troubleshooting → Motor Starting → Switchgear\nEstimated time: 2–3 months\n\nPATH 3 — DESIGN / CONSULTING ENGINEER:\nYou understand basics but need sizing tools, standards compliance, and advanced analysis.\nStart at Level 3. Reference Level 2 and Level 1 for formula context.\nSequence: Transformer → DG → UPS → Short Circuit → Relay Coordination → Arc Flash → Energy Efficiency\nEstimated time: 2–4 months",
      formula:{IS:'All three paths lead to the same destination — comprehensive IS/NBC/IEC compliance knowledge.',NEC:'Same paths work for NEC — just focus on NEC references when the standard toggle is set to NEC.',IEC:'IEC path emphasises IEC 60364 series, IEC 60909, IEC 60076, IEC 60034 references.'},
      example:{
        sector:'all',
        given:'A site electrician with 5 years experience wants to move into electrical design. Which path and first topics?',
        steps:[
          'Role: transitioning from site to design → Site Engineer path initially',
          'First verify: can they calculate voltage drop? size a cable? size a transformer?',
          'Recommended start: Level 2 — Load Calculation (foundation of all design)',
          'Then: Cable Sizing, Circuit Protection, Earthing (deepen site knowledge with theory)',
          'Then: Level 3 — Transformer Sizing, DG Sizing (new skills for design role)',
          'After 2 months on L2+L3, add L4: Short Circuit, relay coordination'
        ],
        result:'Start on Site Engineer path (Level 2). After 2 months, progress to Design Engineer additions (Level 3–4). Estimated time to design-ready competence: 4–5 months of focused study.'
      },
      rot:["Tip: After each topic, try the quiz immediately. If you score < 70%, re-read the Advanced page before moving on. If you score > 90%, move to the next topic — don't over-study."],
      mistakes:["Starting at Level 4 without Level 1–3 foundation — advanced topics become incomprehensible without context","Studying all topics at beginner level only and skipping advanced — you'll know the concepts but not be able to apply them professionally","Skipping the quiz — the quiz reveals gaps that the content didn't reveal"],
      interviewQs:["What is the difference between a designed load and a connected load?","Which IS standard governs cable current ratings in India?","What is the first thing you should calculate before sizing any electrical equipment?"],
      siteTips:["Print the Level relevant to your path and put it on your desk. Every time you encounter an unfamiliar term or calculation on a real project, look it up in the portal that day — real projects are the best motivation for learning."],
      diagram:{type:'schematic',svgId:'learning-paths'}
    },

    advanced:{
      intro:"Professional success in electrical engineering isn't just about technical knowledge; it's about the targeted application of that knowledge within a competency framework. This section maps the transition from a 'Junior Designer' to a 'Technical Director' using the concepts of depth, breadth, and domain authority.",
      keyConcepts:[
        { title:'Technical Depth', text:'Mastery of first principles — ability to derive standard formulas from physics rather than just using them blindly.' },
        { title:'System Breadth', text:'Understanding how electrical systems interface with HVAC, Fire Protection, Architecture, and Civil works.' },
        { title:'Domain Authority', text:'The transition from being a "user" of standards (IS/NEC) to an "interpreter" who understands the logic and safety margins behind code clauses.' }
      ],
      theory:"MODERN ENGINEERING COMPETENCY MATRIX (1–10 Year Journey):\n\nPHASE 1 (JUNIOR — YEARS 0–2):\nFocus: Computational accuracy, tool mastery (Excel, AutoCad, basic Dialux), and code orientation.\nMilestone: Taking a connected load schedule and producing a basic SLD under supervision.\n\nPHASE 2 (ENGINEER — YEARS 3–5):\nFocus: System integration, equipment selection (UPS, DG, Transformer), and vendor management.\nMilestone: Independently designing a complete fit-out or small industrial branch.\n\nPHASE 3 (SENIOR — YEARS 6–8):\nFocus: Advanced analysis (Short Circuit, Coordination, Arc Flash), reliability studies, and cost optimisation.\nMilestone: Managing the electrical design of a large-scale project (Data Center, Factory) from concept to commissioning.\n\nPHASE 4 (LEAD / PRINCIPAL — YEARS 9+):\nFocus: Strategy, technical risk assessment, and standard-setting.\nMilestone: Reviewing complex designs for non-obvious failure modes and commercial viability.",
      technicalDetails:"THE LEARNER PATH TOPOLOGY:\n\n1. FOUNDATION (L1): The 'Atomic' level. If you skip this, your design foundation will always be shaky.\n2. APPLICATION (L2): The 'Component' level. Sizing individual pieces of the puzzle.\n3. INTEGRATION (L3): The 'System' level. How the pieces talk to each other and operate as a facility.\n4. OPTIMISATION (L4): The 'Expert' level. Safety, stability, and future-proofing (Solar, AI, Advanced Analysis).",
      implementation:[
        "Audit: Weekly — Identify one project challenge and read the corresponding topic.",
        "Practice: Monthly — Take one quiz from each level to maintain breadth of knowledge.",
        "Refinement: Quarterly — Move up one Level (e.g., L2 to L3) in your core area of work."
      ],
      diagram:{type:'schematic',svgId:'learning-paths-adv'},
      summary:"A guided path isn't a rigid track; it's a compass. High-performers move vertically through levels faster by relating every theory page to a recent site observation or project calculation."
    },
    calculator:null,
    sectorNotes:{},
    standards:{IS:[],NEC:[],IEC:[]},
    quiz:[]
  }
];

window.TOPICS_L1 = TOPICS_L1;
