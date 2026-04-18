/* ═══════════════════════════════════════════
   ElecPro — topics_L4.js
   Level 4: Advanced Systems — 12 topics COMPLETE
   ═══════════════════════════════════════════ */

const TOPICS_L4 = [

  /* ── 1. SHORT CIRCUIT ANALYSIS ── */
  {
    id:'short-circuit', level:4, icon:'⚠️', title:'Short Circuit Analysis',
    desc:'Isc calculation per IEC 60909. Maximum and minimum fault current. Equipment thermal and mechanical rating.',
    tags:['Short Circuit', 'Fault Current', 'Isc', 'System Study'],
    sectors:['com','ind','dc'], green:false, calculator:'calcShortCircuit',
    beginner:{
      intro:"Short circuit analysis answers the most critical safety question in electrical design: how much fault current can flow, and can all the equipment survive it? Every piece of switchgear, every cable, every busbar must be rated above this value.",
      whyMatters:[
        {icon:'💥', text:'Equipment with insufficient fault rating fails explosively — fires, injuries, shutdowns'},
        {icon:'🛡️', text:'Protection relays need accurate fault current to set sensitivity and discrimination'},
        {icon:'📋', text:'Fault level study is a mandatory deliverable for HV connection approval'}
      ],
      theory:"TYPES OF SHORT CIRCUIT FAULTS:\n3-phase symmetrical fault: highest fault current. Worst case for equipment rating.\nSingle line to earth (SLG): most common. Uses zero sequence impedance.\nLine to line (LL): intermediate level.\nDouble line to earth (DLG): complex, uses sequence networks.\n\nIEC 60909 METHOD (voltage factor c):\nIsc_max = c × Un / (√3 × Ztotal)   [maximum fault, c=1.05 LV / 1.1 HV]\nIsc_min = c × Un / (√3 × Ztotal)   [minimum fault, c=0.95]\n\nImpedance sources:\n— Grid (utility): Zs = Un² / Scc (where Scc = utility fault level in MVA)\n— Transformer: ZT = Z% × Un² / Sn\n— Cable: Zc = (r + jx) × L\n— Generator: Zg = Xd''\n\nPEAK SHORT CIRCUIT CURRENT:\nIp = κ × √2 × Isc_rms\nκ = peak factor, depends on R/X ratio at fault point\nFor LV: κ ≈ 1.8–2.0. For HV: κ depends on system X/R ratio.",
      formula:{
        IS:'Isc = c × Un / (√3 × |Ztotal|)\nZT = (Z%/100) × Un² / Sn\nZs = Un² / (√3 × Icc) from utility data\nIS 13234: short circuit calculations per IEC 60909\nPeak: ip = κ × √2 × Isc',
        NEC:'Isc = V / Z (per IEEE 141 / IEEE 1584)\nSIC (Short Circuit Interrupting Capacity) ≥ Isc at every device\nIEEE 141 (Red Book): industrial power systems\nPeak: ip = 2.0 × Isc (conservative for LV)',
        IEC:'Isc = c × Un / (√3 × Ztotal)  [IEC 60909-0]\nc = 1.05 (LV max), 0.95 (LV min)\nc = 1.10 (HV max), 0.95 (HV min)\nip = κ × √2 × Isc (κ from R/X ratio curve)'
      },
      example:{
        sector:'ind',
        given:'11kV system: Grid fault level 500 MVA. Transformer 2000 kVA, Z=5.5%, Dyn11. Cable: 50m, 185mm² Cu (R=0.099Ω/km, X=0.08Ω/km). Find Isc at LV MDB.',
        steps:[
          'Choose Sbase=2 MVA, Vbase(LV)=0.415kV',
          'Ibase = 2000/(√3×0.415) = 2782A',
          'Zbase = 0.415²/2 = 0.0861Ω',
          'Grid Zpu = Sbase/Scc = 2/500 = 0.004 pu',
          'Transformer Zpu = Z% = 0.055 pu',
          'Cable: R = 0.099×0.05 = 0.00495Ω → Rpu = 0.00495/0.0861 = 0.0575 pu',
          '        X = 0.08×0.05  = 0.004Ω  → Xpu = 0.004/0.0861  = 0.0465 pu',
          'Ztotal = 0.004 + 0.055 + 0.0575 + j0.0465 = 0.1165 + j0.0465',
          '|Ztotal| = √(0.1165² + 0.0465²) = √(0.01357 + 0.00216) = 0.1253 pu',
          'Isc_pu = 1.05/0.1253 = 8.38 pu',
          'Isc = 8.38 × 2782 = 23,320A = 23.3 kA'
        ],
        result:'Isc at LV MDB = 23.3 kA. LV switchboard must be rated ≥25 kA (next standard). Peak ip = 2.0 × 23.3 = 46.6 kA — busbar electromagnetic withstand must exceed this.'
      },
      rot:["Quick LV fault current: Isc ≈ transformer FLC / Z%. 2000 kVA at Z=5.5%: FLC=2782A, Isc=2782/0.055=50,582A. Cable adds impedance — fault at end of feeder is lower.","Equipment rating rule: select fault rating above maximum Isc at every point in the system. Never match ratings exactly — fault levels can increase with system expansion."],
      mistakes:["Using only transformer impedance and ignoring grid source impedance — overestimates fault current at LV terminals","Calculating maximum fault current only — minimum fault current is equally important for protection sensitivity settings","Not accounting for motor contribution — running motors feed back fault current to a bus fault"],
      interviewQs:["What is the voltage factor c in IEC 60909 and why does it differ for maximum and minimum fault?","How does motor contribution affect bus fault current?","Why must minimum fault current be calculated as well as maximum?"],
      siteTips:["When you receive utility fault level data, record: voltage level, fault MVA, X/R ratio, and date. Utility fault levels change as grid expands — update your calculations periodically, especially before equipment replacement or system extension."],
      diagram:{type:'sld', svgId:'short-circuit-sld'}
    },
    advanced:{
      theory:"MOTOR CONTRIBUTION TO FAULT CURRENT:\nRunning motors act as generators during a fault — they feed current back into the fault.\nMotor subtransient reactance Xd'' ≈ 0.17–0.25 pu\nFor groups of motors: equivalent Xd'' = 0.20 pu (simplified)\nMotor contribution Isc_motor = kVA_motors / (√3 × Un × Xd'')\nAdd to system fault current vectorially\n\nADVANCED IEC 60909 CORRECTIONS:\nFor motors: Isc_total = Isc_system + Isc_motors × correction factor\nFor generators: use sub-transient reactance Xd'', transient Xd', synchronous Xd\nFault current decays: subtransient (first few cycles) → transient → steady state\n\nFAULT LEVEL AT DIFFERENT BUSBAR VOLTAGES:\nFault levels stated in MVA are voltage-independent — useful for system planning.\nFault current increases as voltage decreases: Isc = MVA/(√3 × kV)\nSame 500 MVA fault level: at 33kV = 8.75 kA, at 11kV = 26.2 kA, at 0.415kV = 695 kA (would require enormous cable impedance to reduce to practical levels)\n\nSHORT CIRCUIT CURRENT WITHSTAND:\nThermal: equipment must not heat above damage threshold during fault duration\nS_min = Isc × √(t/k) [cable adiabatic — minimum cable area]\nACB: rated Icw (short time withstand current) for 1 or 3 seconds\nBusbar: electromagnetic force withstand",
      formula:{
        IS:'Motor contrib: Im = Σ(motor kVA) / (√3 × Un × Xd″)\nGenerator: Ig = En / (Xd″ + Zsystem) [subtransient period]\nEquipment Icw: must withstand Isc for protection clearing time\nIS 13234 Annex: motor and generator contributions',
        NEC:'IEEE 141 Ch.4: fault current including motor contribution\nIEEE 1584: arc flash uses bolted fault current\nUL 489: ACB short circuit ratings\nIcw for ACB: typically 1s or 3s at rated Icw',
        IEC:'IEC 60909-0: complete method including motor contribution\nEquivalent motor: Im = μ × Iq (IEC 60909 factors)\nIcw: IEC 60947-2 (ACBs and MCCBs)\nThermal: I²t ≤ k²S² [cable/busbar]'
      },
      example:{
        sector:'ind',
        given:'Industrial MCC bus: system Isc=18 kA. Connected motors: 2000 kW total, 415V. Add motor contribution.',
        steps:[
          'Motor FLC: 2000/(√3×0.415×0.87×0.93) = 3434A total',
          'Motor subtransient reactance: Xd″ = 0.20 pu (typical)',
          'Motor fault contribution: Im = FLC / Xd″ = 3434/0.20 = 17,170A = 17.2 kA',
          'Motor contribution factor (decaying): use κm = 3.0 for first peak (IEC 60909)',
          'Initial symmetrical contribution: Im_sym = Im × (1/κm) = 5.7 kA',
          'Total Isc at MCC bus: 18.0 + 5.7 = 23.7 kA',
          'MCC switchgear must be rated: ≥25 kA',
          'Without motor contribution: would have specified 20 kA — insufficient!'
        ],
        result:'Total Isc = 23.7 kA including motor contribution. Specify 25 kA rated MCC. Motor contribution adds 32% — cannot be ignored in motor-heavy industrial systems.'
      },
      rot:["Motor contribution rule of thumb: add 3–5× motor FLC to the bus fault current for initial peak. For a 2000 kW motor group at 415V, FLC ≈ 3400A, contribution ≈ 10–17 kA — significant."],
      mistakes:["Ignoring motor contribution in industrial fault studies — can cause 20–40% underestimate of fault current at MCC bus","Using steady-state fault current for equipment rating — subtransient current (first few cycles) is much higher and determines equipment withstand requirement"],
      interviewQs:["Why do running motors contribute to fault current?","What is the difference between subtransient, transient, and steady-state fault current?","How does fault current MVA allow comparison across different voltage levels?"],
      siteTips:["Request updated fault level data from the utility every 5 years or after any major grid upgrade in the area. Grid expansion often increases fault levels — your equipment may become under-rated without any changes on your own system."],
      diagram:{type:'sld', svgId:'short-circuit-adv-sld'}
    },
    sectorNotes:{res:'Not required for residential. Utility manages LV fault levels.',com:'LV fault study: transformer + cable impedances. MDB rating verified. 16–36 kA typical LV commercial.',dc:'Critical: 36–65 kA at LV MDB (large transformers, low impedance). Multiple sources (transformers, generators) — sum contributions.',ind:'Full study including motor contribution. MCC fault level often highest in plant. HV fault study for substations above 1kV.',og:'HV and LV fault study. Offshore: generator contribution significant — no infinite grid source.',hc:'LV fault study for essential and normal switchboards. IEC 60909 method. Verify protective device ratings against results.'},
    standards:{
      IS:[{clause:'IS 13234',title:'Short circuit current calculation in three-phase systems',note:'Indian adoption of IEC 60909 method'},{clause:'IS 13947-2',title:'LV circuit breakers — fault ratings',note:'Ics and Icu ratings for MCCBs and MCBs'}],
      NEC:[{clause:'IEEE 141',title:'Recommended practice for electrical power distribution',note:'Short circuit calculation methodology for industrial systems'},{clause:'UL 489',title:'Molded-case circuit breakers',note:'Short circuit ratings and testing for NEC applications'}],
      IEC:[{clause:'IEC 60909-0',title:'Short circuit currents in three-phase AC systems',note:'Complete IEC method including voltage factor and correction factors'},{clause:'IEC 60865-1',title:'Short circuit currents — calculation of effects',note:'Thermal and electromagnetic effects on busbars and cables'}]
    },
    quiz:[]
  },

  /* ── 2. RELAY COORDINATION ── */
  {
    id:'relay-coordination', level:4, icon:'🛡️', title:'Protection Relay Coordination',
    desc:'Overcurrent, earth fault, and differential relay settings with time-current curve grading.',
    tags:['Relay Coordination', 'Protection Study', 'Selectivity', 'TCC Curves'],
    sectors:['ind','og'], green:false, calculator:null,
    beginner:{
      intro:"Protection relays are the sentinels of an electrical system. Correctly coordinated relays ensure that only the faulted zone is isolated — everything else keeps running. Mis-coordination causes cascade tripping of healthy circuits.",
      whyMatters:[
        {icon:'🛡️', text:'Properly coordinated protection isolates only the fault — not the whole system'},
        {icon:'⚡', text:'Overcurrent relays must be fast enough to protect cables but slow enough not to nuisance trip'},
        {icon:'🏭', text:'Industrial relay coordination can prevent a single motor fault from shutting down a factory'}
      ],
      theory:"PROTECTION RELAY TYPES (ANSI device numbers):\n50: Instantaneous overcurrent — trips without time delay above setpoint\n51: Inverse definite minimum time (IDMT) — trip time decreases as current increases\n50N/51N: Earth fault versions (neutral current)\n27: Undervoltage relay\n59: Overvoltage relay\n87T: Transformer differential\n49: Thermal overload\n\n[IS]\nIDMT CHARACTERISTICS (IEC 60255 / IS 3231):\nStandard Inverse (SI):   t = 0.14 × TMS / ((I/Is)^0.02 − 1)\nVery Inverse (VI):       t = 13.5 × TMS / ((I/Is) − 1)\nExtremely Inverse (EI):  t = 80 × TMS / ((I/Is)² − 1)\n\n[IEC]\nIDMT CHARACTERISTICS (IEC 60255):\nStandard Inverse (SI):   t = 0.14 × TMS / ((I/Is)^0.02 − 1)\nVery Inverse (VI):       t = 13.5 × TMS / ((I/Is) − 1)\nExtremely Inverse (EI):  t = 80 × TMS / ((I/Is)² − 1)\nNOTE: Select curve based on equipment thermal damage curve and upstream coordination.\n\n[NEC]\nIDMT CHARACTERISTICS (IEEE C37.112):\nIn North America, IEEE curves are standard alongside protective device TCCs:\nModerately Inverse:  t = Time Dial × [0.0515 / ((I/Is)^0.02 − 1) + 0.114]\nVery Inverse:        t = Time Dial × [19.61 / ((I/Is)² − 1) + 0.491]\nExtremely Inverse:   t = Time Dial × [28.2 / ((I/Is)² − 1) + 0.1217]\nNOTE: Curve selection depends on use case (e.g. extremely inverse to coordinate with fuses).\n\nGRADING MARGIN:\nMinimum time difference between relay curves at maximum fault current: 0.25–0.4s\nAllows for: relay overshoot, CB operating time, CT error, safety margin\n\nCOORDINATION PROCESS:\nStart at the load end (lowest level relay)\nWork upstream, adding grading margin at each level\nPlot time-current curves (TCC) on log-log paper\nVerify no curve overlap at any fault current level",
      formula:{
        IS:'SI: t = 0.14 × TMS / ((I/Is)^0.02 − 1)\nVI: t = 13.5 × TMS / ((I/Is) − 1)\nEI: t = 80 × TMS / ((I/Is)² − 1)\nGrading margin: Δt ≥ 0.25s (minimum)\nPickup setting: Is = 1.0–1.2 × FLC',
        NEC:'IEEE 242 (Buff Book): protection coordination\nNEMA relay curves: CO-8 (SI), CO-11 (EI)\nGrading: ≥ 0.2s between TCC curves at max fault',
        IEC:'IEC 60255: measuring relays and protection equipment\nIDMT curves per IEC 60255-151\nTMS (Time Multiplier Setting): adjusts curve position\nIs (Current Setpoint): pickup current in multiples of CT secondary'
      },
      example:{
        sector:'ind',
        given:'3-level industrial system: Source → 11kV CB (Relay A) → Transformer → LV MCCB (Relay B) → Motor circuit (Relay C). Isc at 11kV bus = 8kA, at LV bus = 25kA, at motor = 5kA. Coordinate.',
        steps:[
          'Relay C (motor protection, 51): FLC=65A, Is=65A. EI curve, TMS=0.1',
          'At 5kA fault: t_C = 80×0.1/((5000/65)²−1) = 8/(5900) = 0.014s',
          'Relay B (LV MCCB, 51): pickup Is=200A. At 5kA: must trip AFTER C + grading 0.25s',
          't_B at 5kA ≥ 0.014 + 0.25 = 0.264s',
          'Select TMS_B=0.25 with VI curve: t = 13.5×0.25/((5000/200)−1) = 3.375/24 = 0.14s — too fast',
          'Increase TMS_B=0.5: t = 13.5×0.5/24 = 0.28s > 0.264s ✓',
          'Relay A (11kV, 51): at 8kA HV fault, must wait ≥ 0.28s + 0.3s = 0.58s',
          'Set Relay A TMS for t > 0.58s at 8kA fault level'
        ],
        result:'Relay C: EI, TMS=0.1. Relay B: VI, TMS=0.5, Is=200A. Relay A: SI, TMS to achieve t>0.58s at 8kA. Verify by plotting TCC curves — curves must not cross.'
      },
      rot:["Coordination golden rule: start at load end, work upstream. Each relay must be slower than the one below it by at least 0.25s at maximum fault current. Check this at the bottom, middle, and top of the fault current range.","Curve selection: EI (extremely inverse) gives best discrimination between overload and fault. VI (very inverse) good for transformer feeders. SI (standard inverse) for general use."],
      mistakes:["Setting pickup (Is) too high — relay won't operate for minimum fault current at end of cable","Grading at only one fault current — must check at multiple points along the TCC curve","Not accounting for CT ratio when converting primary fault current to relay operating current"],
      interviewQs:["What is IDMT and why does trip time decrease as current increases?","Explain the grading margin and what factors contribute to it.","When would you use Extremely Inverse (EI) curve over Standard Inverse (SI)?"],
      siteTips:["After any system modification (new transformer, cable, added generator), rerun the relay coordination study. Settings correct for the old system may fail to coordinate after the modification — fault levels and system impedances change."],
      diagram:{type:'schematic', svgId:'relay-coord-diagram'}
    },
    advanced:{
      theory:"DIFFERENTIAL PROTECTION (87T, 87M, 87B):\nCompares current on both sides of protected equipment.\nTrips if difference (differential current) exceeds threshold.\nNo time delay — fastest protection available.\nIdeal for transformers (87T), motors (87M), busbars (87B).\n\n87T CHARACTERISTICS:\nBias (restraint): differential must exceed a % of through current to trip.\nPrevents false trip on CT mismatch and magnetising inrush.\nInrush detection: 2nd harmonic restraint blocks trip during energisation.\nSlope: 20–40% typical. High slope = less sensitive but more stable.\n\nDISTANCE PROTECTION (21):\nMeasures Z = V/I at relay location.\nFault within zone 1 (80% of line): instant trip.\nZone 2 (120% of line): time-delayed trip.\nZone 3 (backup): longer delay.\nUsed on HV overhead lines — not typically used in industrial LV systems.\n\nNUMERICAL RELAYS:\nMicroprocessor-based — replace electromechanical. \nMultiple protection functions in one unit (51, 51N, 27, 59, 49, 87).\nEvent recording, oscillography, SCADA communication (IEC 61850).\nSetting group switching: different settings for day/night or different network configurations.",
      formula:{
        IS:'87T: Id > k × IR + I_threshold\nId = |I1 − I2| (differential)\nIR = (|I1| + |I2|)/2 (restraint)\nSlope k = 20–40%\n2nd harmonic: if I_2nd/I_fund > 15–20% → restrain (inrush)',
        NEC:'IEEE C37.91: guide for protective relay applications to transformers\nIEEE C37.97: transformer differential relay applications\nSlope: 15–30% for most power transformers',
        IEC:'IEC 60255-111: transformer differential relay\nIEC 61850: substation automation and relay communication\nBias: typical 15–25% low set, 40–60% high set'
      },
      example:{
        sector:'ind',
        given:'2000 kVA transformer 11/0.415kV Dyn11. HV CT: 150/5A. LV CT: 3000/5A. Set differential relay.',
        steps:[
          'HV FLC: 2000/(√3×11) = 104.9A → CT ratio 150/5, secondary: 104.9/30 = 3.50A',
          'LV FLC: 2000/(√3×0.415) = 2782A → CT ratio 3000/5, secondary: 2782/600 = 4.64A',
          'CT mismatch: 4.64/3.50 = 1.32 = 32% mismatch → must be corrected by relay internally',
          'Modern numerical relay: enter transformer ratio and vector group (Dyn11) → relay auto-corrects',
          'Slope setting: 25% (accounts for CT mismatch, on-load tap changer range)',
          'Minimum operating current: 20% of relay nominal (prevents operation on CT errors)',
          '2nd harmonic restraint: 15% (blocks trip during transformer energisation)',
          'High set instantaneous: 8× In (for internal bushing fault with CT saturation)'
        ],
        result:'Differential relay settings: slope 25%, minimum pickup 20% In, 2nd harmonic 15%, highset 8×. Enter transformer ratio and Dyn11 vector group for automatic CT correction.'
      },
      rot:["87T rule: always set 2nd harmonic restraint. Without it, transformer energisation inrush current (which is rich in 2nd harmonic) will trip the differential relay every time the transformer is energised."],
      mistakes:["Forgetting Dyn11 vector group correction in differential relay — relay sees 30° phase error and operates for normal load current","Setting differential slope too low — CT mismatch causes restraint current, spurious trips under load"],
      interviewQs:["What is bias (slope) in a transformer differential relay?","Why does transformer inrush current cause problems for differential protection?","Explain Zone 1, Zone 2, Zone 3 in distance protection."],
      siteTips:["After commissioning 87T protection: perform primary injection test — inject current into HV CT primary and verify relay measures correct differential. A simple injection with relay manufacturer's test kit takes 2 hours and proves the complete protection chain."],
      diagram:{type:'schematic', svgId:'relay-adv-diagram'}
    },
    sectorNotes:{res:'Not applicable.',com:'Simple overcurrent coordination. 51N earth fault on transformer feeders. 87T for large transformers.',dc:'Bus differential (87B) mandatory for arc flash reduction. 51/51N at each switchboard level. Numerical relays with IEC 61850.',ind:'Full coordination study mandatory. 87T, 51, 51N, 49, 27, 59. Motor protection (49, 46, 51). ETAP or similar software.',og:'SIL-assessed protection for safety instrumented systems. Hazardous area relays: Ex-rated enclosures. Offshore: generator protection (40, 51V, 32).',hc:'Essential circuit protection: supervised, tested monthly. 87T on supply transformer. Selective coordination to prevent loss of essential supply.'},
    standards:{
      IS:[{clause:'IS 3231',title:'Protective relays',note:'IS standard for relay ratings and performance'},{clause:'IS 13234',title:'Short circuit — basis for relay settings',note:'Fault current calculations underpin relay settings'}],
      NEC:[{clause:'IEEE 242',title:'Recommended practice for protection and coordination',note:'Complete coordination methodology — the Buff Book'},{clause:'IEEE C37.91',title:'Relay applications to power transformers',note:'Differential relay settings for transformers'}],
      IEC:[{clause:'IEC 60255',title:'Measuring relays and protection equipment',note:'IDMT curves, differential relay, and protection standards'},{clause:'IEC 61850',title:'Communication networks in substations',note:'Digital protection and SCADA communication standard'}]
    },
    quiz:[]
  },

  /* ── 3. COORDINATION STUDY ── */
  {
    id:'coordination-study', level:4, icon:'📈', title:'Coordination Study (TCC Curves)',
    desc:'Time-current curve plotting, selectivity verification, and arc flash boundary reduction strategies.',
    tags:['Coordination Study', 'TCC Curves', 'Selectivity'],
    sectors:['ind','com'], green:false, calculator:null,
    beginner:{
      intro:"A coordination study translates relay settings into visual time-current curves (TCCs). On log-log paper, each protection device has a curve — the curves must never cross. Crossing means two devices trip simultaneously: selectivity is lost.",
      whyMatters:[
        {icon:'📈', text:'TCC plots reveal discrimination gaps invisible in a table of settings'},
        {icon:'⚡', text:'Un-coordinated protection causes cascade tripping — factory shutdown on a minor fault'},
        {icon:'📋', text:'Coordination study is a contractual deliverable for industrial and data centre projects'}
      ],
      theory:"TCC PLOT AXES:\nX-axis: current in amperes (or multiples of rated current)\nY-axis: time in seconds\nBoth axes: logarithmic scale\n\nEACH DEVICE DRAWS ONE CURVE:\nFuse: single melting curve (minimum + total clearing time band)\nMCB: thermal (overload) + magnetic (instantaneous) portions\nIDMT relay: curve defined by type (SI/VI/EI) and TMS setting\nElectronic trip (ACB): three-section curve (LT/ST/Inst)\n\nSELECTIVITY VERIFICATION:\nAt any fault current level: downstream device curve is BELOW and to the LEFT of upstream\n= downstream trips FASTER than upstream\nCurves must not cross at any point from minimum to maximum fault current\n\nCURRENT SCALE:\nAll devices plotted on same current axis (usually secondary amps or primary amps)\nIf CT ratios differ: refer all to primary by multiplying secondary amps × CT ratio\n\nFAULT CURRENT RANGE:\nMinimum Isc: end of furthest cable (use for protection sensitivity check)\nMaximum Isc: at each bus (use for selectivity and breaking capacity check)",
      formula:{
        IS:'IDMT curves: t = K × TMS / ((I/Is)^α − 1)\nSI: K=0.14, α=0.02\nVI: K=13.5, α=1.0\nEI: K=80, α=2.0\nPlot for I from 1.0×Is to maximum Isc',
        NEC:'IEEE 242: TCC plotting methodology\nGrading margin: 0.2s min at max fault\nFuse curves from manufacturer data (TCB 1–10, Type K, etc.)',
        IEC:'IEC 60255-151: IDMT characteristic equations\nPlot from Is to Isc_max for each relay\nGrading margin: 0.25–0.4s depending on relay type'
      },
      example:{
        sector:'com',
        given:'Commercial building: Utility → 1000A ACB (LT=800A, ST=4000A/0.3s) → 200A MCCB (thermal=185A, mag=1600A) → 32A MCB Type C. Describe TCC check.',
        steps:[
          'MCB Type C 32A: thermal knee ~1.2×32=38A, magnetic trip 5–10×32=160–320A (band)',
          'MCCB 200A: thermal trips 185A (slow), magnetic trips at 1600A instant',
          'ACB 1000A: LT trips at 800A (slow), ST trips at 4000A with 0.3s delay, Inst above 12000A',
          'Check at 1600A (MCCB magnetic setpoint): MCCB trips instantly. ACB still in LT zone (1600A < 4000A ST). ✓ selective',
          'Check at 4000A (ACB ST setpoint): ACB would trip after 0.3s. MCCB magnetic at 1600A already tripped at <<0.3s. ✓ selective',
          'Check at 10kA (max fault at MDB): all devices in instantaneous zone — selectivity lost (acceptable at extreme fault)',
          'MCB at 10kA: trips. MCCB at 10kA: trips. ACB at 10kA: also trips (above Inst setting 12kA? No — 10kA < 12kA, ACB in ST zone 0.3s). MCB clears first. ✓'
        ],
        result:'Selectivity verified at all practical fault levels. Only at 10kA+ extreme faults does coordination break down — acceptable for back-up protection. No curve crossings in range 160A–10kA.'
      },
      rot:["TCC grading rule: when plotting curves, if you can see daylight between two curves at every fault current level, they are selective. If curves touch or cross, add time delay to upstream or increase instantaneous pickup of downstream."],
      mistakes:["Plotting all devices on the same secondary current scale when CTs have different ratios — must refer to primary OR adjust for each CT ratio","Not extending TCC curves to maximum fault current — selectivity may break down at high fault levels that the log-log scale compresses"],
      interviewQs:["Why are TCC plots drawn on log-log paper rather than linear scale?","What does it mean when two TCC curves cross?","How do you determine the grading margin needed between two IDMT relay curves?"],
      siteTips:["Use ETAP, SKM PowerTools, or EasyPower to generate TCC plots — manual plotting is error-prone and time-consuming. The software also checks that protection settings are within relay capability limits and generates the coordination report automatically."],
      diagram:{type:'schematic', svgId:'tcc-diagram'}
    },
    advanced:{
      theory:"ARC FLASH AND COORDINATION:\nReducing fault clearing time reduces arc flash incident energy.\nE ∝ I × t → faster clearing = less energy.\n\nSTRATEGIES TO REDUCE CLEARING TIME AND ENERGY:\n1. Bus differential (87B): 1–2 cycle clearing → minimal energy\n2. Zone selective interlocking (ZSI): downstream signals upstream to delay; upstream trips fast only if it alone sees fault\n3. Maintenance mode: temporarily lower magnetic trip setting during live work → faster clearing\n4. High-resistance grounding: limits fault current → reduces energy\n\nSELECTIVITY vs ARC FLASH CONFLICT:\nTo discriminate: upstream relay must be SLOWER than downstream\nFor arc flash: ALL relays should be FAST\nConflict: resolved by ZSI, bus diff, or accepting partial selectivity\n\nGROUND FAULT COORDINATION:\nGround fault (51N/50N) must be coordinated with overcurrent (51/50)\n51N pickup typically set lower than phase relay\nFor solidly earthed systems: earth fault current can equal 3-phase fault\nFor resistance earthed: earth fault current is limited — 51N must be very sensitive",
      formula:{
        IS:'E = 4.184 × Cf × En × (t/0.2) × (610x/D)x [IEEE 1584]\nFor t: use relay operating time + breaker time (typically 50–100ms)\nZSI: reduces upstream clearing from full delay to ~50ms\nE_reduction: E_ZSI/E_normal = 50ms/300ms = 1/6 (83% reduction in energy)',
        NEC:'IEEE 1584:2018: incident energy calculation\nE = f(Ibf, gaps, configuration, t, D)\nNFPA 70E: PPE categories based on incident energy\nPPE: ≥1.2 cal/cm² = Cat 1, ≥8 = Cat 2, ≥25 = Cat 3, ≥40 = Cat 4',
        IEC:'IEC 61641: enclosed switchgear arc fault testing\nIEC 61850 GOOSE: high-speed relay communication for ZSI\nBus diff per IEC 60255 → 1–2 cycle clearing time'
      },
      example:{
        sector:'dc',
        given:'Data centre MDB: calculated incident energy at bus = 42 cal/cm² (Cat 4 — extreme PPE). Reduce to Cat 2 (≤8 cal/cm²).',
        steps:[
          'Current clearing time: ACB ST delay = 0.3s = 300ms. Bus fault duration = 300ms.',
          'Target: ≤8 cal/cm². Energy ratio: 8/42 = 0.19 → need 81% reduction.',
          'E ∝ t → need t_new = 0.19 × 300ms = 57ms',
          'Strategy 1: Bus differential (87B) — clears in 30–50ms. E = 42 × 50/300 = 7 cal/cm² ✓',
          'Strategy 2: ZSI — upstream trips in 50ms when downstream breaker does NOT see fault',
          'Strategy 3: Lower ACB ST delay from 0.3s to 0.05s. Loss of selectivity vs downstream MCCBs — may not be acceptable.',
          'Recommended: 87B bus differential. Incident energy: ≤7 cal/cm² = Category 2.'
        ],
        result:'Install 87B bus differential protection. Incident energy drops from 42 to 7 cal/cm² (Cat 4 → Cat 2). Engineers can work safely with Cat 2 PPE. Update arc flash labels after implementing.'
      },
      rot:["Arc flash reduction priority order: (1) de-energise (no arc flash risk), (2) bus differential (lowest energy, best), (3) ZSI (good reduction), (4) maintenance mode (temporary reduction only)."],
      mistakes:["Completing arc flash study but not updating arc flash labels on equipment — the labels are the daily safety tool for maintenance staff. Labels are useless if they show the wrong category.","Reducing upstream clearing time without ZSI — destroys selectivity, causes cascade tripping on any fault"],
      interviewQs:["How does Zone Selective Interlocking reduce arc flash energy?","What is the relationship between fault clearing time and incident energy?","Why does reducing upstream ACB delay time create a selectivity problem?"],
      siteTips:["Arc flash labels must be updated every time protection settings change, equipment is replaced, or fault levels change. Set a calendar reminder to audit arc flash labels annually — they are life safety information."],
      diagram:{type:'schematic', svgId:'arc-flash-tcc-diagram'}
    },
    sectorNotes:{res:'Not required.',com:'Basic coordination study: utility fuse → main CB → MCCBs → MCBs. Plot TCC. Update when new equipment added.',dc:'Full coordination + arc flash study. 87B mandatory. ZSI on MDB and SMDB. NFPA 70E compliance. Labels on all switchgear.',ind:'Full study including motors. 3-level minimum: MCC → feeder MCCB → motor CB. ETAP or equivalent software.',og:'SIL-rated protection — coordination study is part of SIL assessment. Offshore: generator protection coordination critical.',hc:'Coordination of essential and normal supply. Life safety circuits must not lose supply on any single fault. Selective coordination to load end.'},
    standards:{
      IS:[{clause:'IS 3231',title:'Protective relays',note:'Relay types and setting ranges'},{clause:'IS 13234 + IEC 60909',title:'Fault current basis for coordination',note:'Fault currents used for TCC plotting'}],
      NEC:[{clause:'IEEE 242',title:'Protection and coordination — Buff Book',note:'Industry standard coordination methodology'},{clause:'NFPA 70E',title:'Arc flash — PPE and work practices',note:'Arc flash study drives clearing time requirements'}],
      IEC:[{clause:'IEC 60255',title:'Measuring relays and protection equipment',note:'IDMT curves used in TCC plots'},{clause:'IEC 61641',title:'Enclosed LV switchgear arc fault testing',note:'Arc fault performance of switchgear assemblies'}]
    },
    quiz:[]
  },

  /* ── 4. HAZARDOUS AREA ── */
  {
    id:'hazardous-area', level:4, icon:'🔥', title:'Hazardous Area Classification',
    desc:'Zone 0/1/2 classification. Ex d, Ex e, Ex ia, Ex p protection types. ATEX/IECEx selection.',
    tags:['Hazardous Area', 'Ex Equipment', 'ATEX', 'IECEx', 'Zone 0', 'Zone 1', 'Zone 2'],
    sectors:['og','ind'], green:false, calculator:null,
    beginner:{
      intro:"A single electrical spark in the wrong place can ignite a flammable atmosphere — causing an explosion that kills people and destroys plant. Hazardous area classification and equipment selection is the discipline that prevents this.",
      whyMatters:[
        {icon:'💥', text:'Electrical ignition of flammable gas or dust causes explosions — hazardous area rules prevent this'},
        {icon:'⚖️', text:'Wrong Ex equipment type in a hazardous zone is a legal violation and a safety crime'},
        {icon:'📋', text:'Area classification drawing and Ex equipment schedule are mandatory regulatory documents'}
      ],
      theory:"[IS]\nZONE CLASSIFICATION (IS 5572 / IEC 60079):\nZone 0: explosive atmosphere present continuously or for long periods (inside tanks, pipes)\nZone 1: explosive atmosphere likely to occur in normal operation (pump seals, valve glands)\nZone 2: explosive atmosphere not likely in normal operation, but may occur briefly (bund areas, drainage)\n\nGAS GROUPS & TEMPERATURE CLASS:\nGroup IIA: propane. Group IIB: ethylene. Group IIC: hydrogen (most sensitive).\nT1: ≤450°C. T3: ≤200°C (common for petroleum). T6: ≤85°C.\n\nPROTECTION TYPES:\nEx d (Flameproof): enclosure contains explosion. Zone 1/2.\nEx e (Increased safety): extra precautions against arcing. Zone 1/2.\nEx ia/ib (Intrinsic safety): limits energy below ignition. Zone 0/1/2.\n\n[IEC]\nZONE CLASSIFICATION (IEC 60079-10-1):\nZone 0: explosive atmosphere present continuously or for long periods (inside tanks, pipes)\nZone 1: explosive atmosphere likely to occur in normal operation (pump seals, valve glands)\nZone 2: explosive atmosphere not likely in normal operation, but may occur briefly (bund areas, drainage)\n\nGAS GROUPS & TEMPERATURE CLASS:\nGroup IIA: propane. Group IIB: ethylene. Group IIC: hydrogen (most sensitive).\nT1: ≤450°C. T3: ≤200°C (common for petroleum). T6: ≤85°C.\n\nPROTECTION TYPES:\nEx d (Flameproof): enclosure contains explosion. Zone 1/2.\nEx e (Increased safety): extra precautions against arcing. Zone 1/2.\nEx ia/ib (Intrinsic safety): limits energy below ignition. Zone 0/1/2.\n\n[NEC]\nCLASS & DIVISION SYSTEM (NEC Art. 500):\nInstead of Zones, NEC predominantly uses Classes and Divisions (though Art. 505 allows Zones).\n\nCLASSES (Material Type):\nClass I: Flammable Gases, Vapors, or Liquids (e.g. refineries, spray booths)\nClass II: Combustible Dusts (e.g. grain elevators, coal plants)\nClass III: Ignitible Fibers/Flyings (e.g. textile mills)\n\nDIVISIONS (Probability):\nDivision 1: Hazard exists under NORMAL operating conditions.\nDivision 2: Hazard exists only under ABNORMAL conditions (e.g. accidental rupture/leak).\n\nGAS GROUPS:\nGroup A: Acetylene. Group B: Hydrogen.\nGroup C: Ethylene. Group D: Propane (most common).\n\nPROTECTION METHODS:\nExplosionproof: Enclosure contains explosion (required for Class I Div 1).\nIntrinsically Safe (IS): Energy limited below ignition threshold (allowed everywhere).\nPurged/Pressurized: Prevents gas ingress.",
      formula:{
        IS:'Zone selection: based on frequency and duration of hazardous atmosphere\nEquipment selection: Ex type must suit zone:\nZone 0: Ex ia, Ex ma only\nZone 1: Ex d, Ex e, Ex ia/ib, Ex p, Ex q\nZone 2: Ex n, Ex ec, + all Zone 1 types\nIS 5572: area classification for petroleum\nIS 6381: Ex equipment selection',
        NEC:'NEC Class I, Division 1 ≈ Zone 0+1\nNEC Class I, Division 2 ≈ Zone 2\nNEC 500–516: hazardous locations\nAtmosphere groups: A (acetylene), B (hydrogen), C (ethylene), D (propane)',
        IEC:'IEC 60079-0: general requirements for Ex equipment\nIEC 60079-10-1: area classification for gas\nIEC 60079-10-2: area classification for dust\nIECEx: international certification scheme'
      },
      example:{
        sector:'og',
        given:'Offshore pump room: Zone 1, Gas Group IIB, Temp Class T3 (200°C). Select motor and junction box.',
        steps:[
          'Zone 1: can use Ex d, Ex e, Ex ia, Ex ib, or Ex p',
          'Gas Group IIB: equipment must be rated for IIB (or IIC which covers IIB)',
          'Temp Class T3: max surface temp ≤ 200°C',
          'Motor selection: Ex d IIB T3 or Ex e IIB T3',
          'Ex d motor: flameproof — more robust, common for pumps in Zone 1',
          'Certification: ATEX (EU) or IECEx certificate. In India: BIS certification or CMRI/PESO approval',
          'Junction box: Ex e IIB T3 (increased safety — no arcing inside)',
          'Cable glands: must be Ex-certified, correct IP rating, correct cable type',
          'Wiring: armoured cable with Ex-certified glands. No unarmoured cable.'
        ],
        result:'Motor: Ex d IIB T3 (flameproof). Junction box: Ex e IIB T3 (increased safety). Cable: SWA armoured with Ex-certified glands. Certificate: ATEX/IECEx/BIS CMRI.'
      },
      rot:["Ex marking reading: Ex d IIC T4 = Explosive protection type d (flameproof), Gas group IIC (hydrogen), Temperature class T4 (max 135°C surface temperature). All three parts must match the hazardous zone requirements.","Zone 0 rule: virtually nothing except intrinsic safety (Ex ia) or encapsulation (Ex ma) is permitted in Zone 0. This includes inside storage tanks and pipework — no conventional wiring."],
      mistakes:["Using Zone 2 rated equipment (Ex n) in Zone 1 — Ex n is NOT permitted in Zone 1","Ignoring temperature class — T3 gas (autoignition 200°C) in contact with T1 rated equipment (surface can reach 450°C) = ignition risk","Fitting standard (non-Ex) cable glands on Ex enclosures — the gland is the weak point of the Ex protection"],
      interviewQs:["What is the difference between Zone 0, Zone 1, and Zone 2?","Explain Ex d (flameproof) protection and how it prevents ignition.","Why is intrinsic safety (Ex ia) the only method suitable for Zone 0?"],
      siteTips:["When specifying Ex equipment for a project, create an Ex equipment register: tag number, zone, gas group, temp class, protection type, certificate number, and date of last inspection. This document is required by regulatory authorities and insurers."],
      diagram:{type:'schematic', svgId:'hazardous-area-diagram'}
    },
    advanced:{
      theory:"DUST HAZARDOUS AREAS (IEC 60079-10-2):\nZone 20: explosive dust cloud present continuously\nZone 21: explosive dust cloud likely in normal operation\nZone 22: explosive dust cloud not likely, but may occur briefly\nGroup IIIA: combustible flyings (cotton, wood shavings)\nGroup IIIB: non-conductive dust (grain, flour, coal)\nGroup IIIC: conductive dust (aluminium, magnesium — most sensitive)\nProtection: Ex tD (dust-protected enclosure), Ex iD (intrinsic safety for dust)\n\nINTRINSIC SAFETY DESIGN:\nIS concept: limit energy in the hazardous area to below ignition energy.\nTwo elements: IS barrier (safety barrier) in safe area + IS device in hazardous area.\nZener barrier: passive, limits voltage and current.\nGalvanic isolator: active, provides isolation + protection.\nCertification: must certify barrier + device as a system (entity concept).\n\nEX p (PRESSURISED ENCLOSURE):\nPurge: clean air or inert gas purges flammable gas from enclosure before energising.\nPressurisation: maintains positive pressure to prevent flammable gas ingress.\nTypes: Ex px (Zone 1 equip for Zone 1), Ex py, Ex pz\n\nEX i CIRCUIT DESIGN RULES:\nNever exceed Voc and Isc of barrier in the hazardous area.\nCable capacitance and inductance limited.\nNo more than Ci (intrinsic capacitance) and Li (intrinsic inductance) in field device.",
      formula:{
        IS:'Dust: Zone 20/21/22 → Ex tD protection types\nEx ia: Uo ≤ Voc_barrier, Io ≤ Isc_barrier\nEnergy: L × I² / 2 < ignition energy, C × V² / 2 < ignition energy\nGas ignition: ~0.2 mJ (methane), 0.017 mJ (hydrogen)\nBIS/PESO/CMRI: Indian certification bodies',
        NEC:'NEC 500–516: Class I/II/III Divisions\nNEC 505: Class I Zone concept (IEC-aligned)\nClass II (dust): Groups E, F, G\nClass III: ignitable fibres',
        IEC:'IEC 60079-0: general Ex requirements\nIEC 60079-11: intrinsic safety\nIEC 60079-2: pressurised equipment\nIEC 60079-14: installation in hazardous areas\nIEC 60079-17: inspection and maintenance of Ex installations'
      },
      example:{
        sector:'ind',
        given:'Grain processing: Zone 21 dust hazard (IIB dust, T3). Select motor and design IS circuit for level sensor.',
        steps:[
          'Zone 21: use Ex tD (dust-tight enclosure) or Ex ia/ib D (intrinsic safety for dust)',
          'Motor: Ex td IIIB T200°C (dust-tight, Group IIIB, max surface 200°C)',
          'Level sensor (low energy, in Zone 21): Ex ia IIIB T200°C sensor with IS barrier in safe area',
          'IS barrier selection: Voc=28V, Isc=93mA (typical for 4–20mA loops)',
          'Cable: <200 nF capacitance, <1 mH inductance for IIB gas equivalent',
          'Verify entity parameters: Voc_barrier ≤ Ui_sensor AND Isc_barrier ≤ Ii_sensor',
          'Ground barrier at safe area only — IS circuit must be ungrounded in hazardous area',
          'Certification: both sensor and barrier certified for dust IIB category'
        ],
        result:'Motor: Ex tD IIIB T200°C. Level sensor: Ex ia IIIB T200°C. IS barrier at safe area. Verify entity parameters. Ground at safe area only.'
      },
      rot:["IS barrier grounding rule: in a Zener IS barrier circuit, the barrier ground MUST be connected to a low-resistance earth (< 1Ω). Without this ground, the safety function fails — the voltage limiting relies on the Zener conducting to earth."],
      mistakes:["Treating dust zones same as gas zones — dust has different groups, different protection types (Ex tD not Ex d)","Grounding both ends of an IS circuit — creates a loop, introduces noise, and can compromise IS safety function","Mixing IS and non-IS circuits in the same conduit or junction box — non-IS cable can induce sufficient energy to cause ignition"],
      interviewQs:["What is intrinsic safety and how does it prevent ignition?","Explain the entity concept for IS circuits.","Why must IS circuit barriers be grounded at the safe area only?"],
      siteTips:["Photograph every Ex installation at commissioning — showing certificate number visible, all glands correctly fitted, and no damage to Ex enclosure seals. If a regulator inspects years later, the photos prove original compliant installation even if things have been altered."],
      diagram:{type:'schematic', svgId:'hazardous-adv-diagram'}
    },
    sectorNotes:{res:'Not applicable.',com:'Petrol stations: Zone 1/2 around fuel dispensers. Parking garages: Zone 2 possible (electric vehicle charging off-gassing). ATEX/IECEx equipment required.',dc:'Not typically applicable. Battery rooms: potentially Zone 2 if VRLA (hydrogen evolution). Li-ion: no zone classification required.',ind:'Paint shops (Zone 1/2), chemical process (Zone 0/1/2), grain mills (Zone 20/21/22), coal handling (Zone 21).',og:'Dominant sector. All offshore areas classified. Zone 0 inside pipework and vessels. Zone 1 around flanges, seals, vents. Zone 2 wider bund/module area.',hc:'Anaesthetic gas stores: Zone 0/1 around cylinders, Zone 2 in storage rooms. Operating theatres: historically Zone 1 — now Zone 2 in many codes.'},
    standards:{
      IS:[{clause:'IS 5572',title:'Code of practice for hazardous area classification for petroleum',note:'Zone classification methodology for Indian oil and gas'},{clause:'IS 6381',title:'Classification of max surface temperature',note:'Temperature class selection for Ex equipment in India'}],
      NEC:[{clause:'NEC Art.500',title:'Hazardous locations — general',note:'US Class/Division system with group classification'},{clause:'NEC Art.505',title:'Class I, Zone concept',note:'IEC-aligned Zone 0/1/2 system for NEC jurisdiction'}],
      IEC:[{clause:'IEC 60079-10-1',title:'Explosive atmospheres — area classification',note:'Zone 0, 1, 2 classification methodology for gases'},{clause:'IEC 60079-14',title:'Electrical installations in hazardous areas',note:'Installation requirements including cabling and earthing'}]
    },
    quiz:[]
  },

  /* ── 5. DATA CENTRE REDUNDANCY ── */
  {
    id:'dc-redundancy', level:4, icon:'🖥️', title:'Data Centre Redundancy',
    desc:'Tier I–IV classification, 2N and N+1 topologies, concurrent maintainability design.',
    tags:['Data Centre Redundancy', 'Tier I-IV', 'Tier I', 'Tier II', 'Tier III', 'Tier IV', 'N+1', '2N'],
    sectors:['dc'], green:false, calculator:null,
    beginner:{
      intro:"Data centre uptime is measured in '9s': 99.9% = 8.76 hours downtime/year. 99.999% = 5.3 minutes. The Uptime Institute Tier system defines what infrastructure is needed to achieve each level.",
      whyMatters:[
        {icon:'🖥️', text:'A Tier III data centre cannot tolerate a single component failure — design must prevent it'},
        {icon:'💰', text:'1 hour of downtime costs a major bank ₹5–50 crores — redundancy is business insurance'},
        {icon:'📋', text:'Tier certification is required by major cloud customers and financial regulators'}
      ],
      theory:"UPTIME INSTITUTE TIER CLASSIFICATION:\nTier I: Basic. Single path, no redundancy. 28.8h/year downtime maximum.\nTier II: Redundant components. N+1 for major systems. 22.0h/year downtime.\nTier III: Concurrently maintainable. Dual paths. Any component can be maintained without downtime. 1.6h/year.\nTier IV: Fault tolerant. Any single fault does not impact operation. 0.4h/year.\n\nKEY PRINCIPLE — CONCURRENT MAINTAINABILITY (TIER III):\nEvery path can be taken offline for maintenance while the other path continues.\nRequires: dual utility feeds (or utility + on-site generation), N+1 UPS, N+1 cooling, separate paths from distribution to IT equipment.\n\nPOWER TOPOLOGIES:\nN+1: one extra of each component. One failure = no impact, but now at N capacity.\n2N: complete duplicate system. One system maintains while the other runs. Most resilient.\n2(N+1): two systems each with N+1. Maximum resilience.\n\nA+B FEED TO SERVERS:\nEach server rack has two power paths: A-feed and B-feed from independent sources.\nPDU A (from UPS-A/Bus-A) and PDU B (from UPS-B/Bus-B).\nIf one PDU or UPS fails, server continues on the other feed.",
      formula:{
        IS:'Tier III: availability = 1 − (MTTR / MTBF) for each component\nRedundancy: N+1 means each component rated for N×100% load (not N+1 load)\nDual bus: each bus rated for 100% total load (not 50%)\nPUE target: Tier III ≤ 1.5, Tier IV ≤ 1.4',
        NEC:'TIA-942-B: data centre standards\nUptime Institute Tier Standard\nNEC Art.700/702: emergency and optional standby',
        IEC:'IEC 62040: UPS\nIEC 62305: lightning (critical for data centres)\nEN 50600: data centre infrastructure standard (EU)\nANSI/TIA-942-B: data centre telecommunications'
      },
      example:{
        sector:'dc',
        given:'Design 2 MW IT load Tier III data centre power infrastructure.',
        steps:[
          'Utility: dual HV feeds from independent substations (concurrent maintainability)',
          'Transformers: 2 × 1600 kVA (N=1, N+1=2). Each carries 50% normal load (666 kVA of 1600).',
          'UPS: 2 × 1200 kVA online UPS (N+1 modular in each). Total IT: 2000/0.97=2062 kVA per path in 2N.',
          '2N means each UPS system: 1200 kVA. IT split 50/50: each UPS carries 1031 kVA = 86% of rated. ✓',
          'Generators: 2 × 1500 kVA (N+1). Each carries 100% when one is down for maintenance.',
          'Distribution: Bus A (from UPS-A) and Bus B (from UPS-B). Physically separate routes.',
          'Rack PDU: 2 PDUs per rack (A-feed and B-feed). Each PDU 16A × 230V = 3.68 kW per feed.',
          'Servers: 2 PSUs per server. Server continues if either A or B fails.'
        ],
        result:'Tier III 2 MW design: 2 HV feeds, 2 × 1600kVA transformers, 2 × 1200kVA UPS (modular), 2 × 1500kVA generators, dual bus A+B, dual PDU per rack.'
      },
      rot:["Tier III sizing rule: each infrastructure component sized for 100% of total load. In N+1, the +1 carries nothing during normal operation. In 2N, each system carries 50% normally but must support 100% when the other is down for maintenance."],
      mistakes:["Designing each transformer/UPS for 50% of total load in N+1 — correct for normal operation but if one fails, the other is immediately at 100% with no headroom","Single-path infrastructure claiming Tier III — Tier III specifically requires dual, independent paths from utility to server rack"],
      interviewQs:["What is the key difference between Tier II and Tier III?","In a 2N UPS system, what happens if one complete UPS system fails?","What is concurrent maintainability?"],
      siteTips:["During commissioning, perform a switchover test: de-energise one complete path (simulate maintenance) and verify all IT loads continue on the other path without interruption. This is the only way to prove Tier III compliance."],
      diagram:{type:'sld', svgId:'dc-redundancy-sld'}
    },
    advanced:{
      theory:"FAULT TOLERANCE (TIER IV):\nAny single failure — including fire, flooding, or human error in one zone — does not affect the other zone.\nRequires: physically separate fire zones, independent cooling zones.\nSystems are 2(N+1): two complete N+1 systems.\nMost expensive tier — justified only for financial systems, mission-critical government, or major cloud.\n\nPOWER MONITORING AND DCIM:\nDCIM (Data Centre Infrastructure Management) software:\n— Monitors: power, cooling, space, assets\n— Tracks PUE in real time\n— Capacity planning: how much spare power/cooling/space\n— Asset management: where is each server, connected to which PDU circuit\n\nTHERMAL MANAGEMENT:\nHot aisle / cold aisle: cold air into server fronts, hot air exhausted from backs.\nHot aisle containment: most effective — contains hot exhaust, cold air floods the rest.\nRear-door heat exchanger: removes heat at rack level.\nLiquid cooling: direct water cooling of CPUs for high-density racks (>20kW/rack).\n\nCAPACITY MANAGEMENT:\nPower: kW/rack × rack count + PUE overhead\nCooling: matches power + heat from lights, people\nSpace: rack space (U = 1.75 inches), floor weight loading\nCABLING: structured cabling capacity, patch panel capacity",
      formula:{
        IS:'Availability: A = MTBF / (MTBF + MTTR)\nTier IV: A ≥ 99.9995% = MTBF/(MTBF+MTTR)\nPUE = total kW / IT kW. Target ≤ 1.3 (Tier IV)\nCooling: 1 ton of cooling ≈ 1 kW IT load × PUE overhead factor',
        NEC:'TIA-942-B: telecommunications infrastructure\nASHRAE TC 9.9: server thermal guidelines\nData centre: ASHRAE A1–A4 classes for IT equipment',
        IEC:'EN 50600-2: power distribution for data centres\nISO/IEC 22237: data centre facilities and infrastructure\nUptimeInstitute.com: authoritative Tier definitions'
      },
      example:{
        sector:'dc',
        given:'Colocation data centre: 200 racks, 8 kW average per rack. PUE 1.35. Calculate total power and cooling required.',
        steps:[
          'IT load: 200 × 8 = 1600 kW',
          'Total facility power: 1600 × 1.35 = 2160 kW',
          'Overhead (cooling + power distribution): 2160 − 1600 = 560 kW',
          'Cooling required (approximate): 1600 kW IT + 200 kW lighting/misc = 1800 kW thermal',
          '1800 kW = 512 TR (tons of refrigeration)',
          'Generator sizing (N+1): 2 × 1500 kW (covers 2160 kW + 30% spare)',
          'UPS per path (2N): IT = 1600 kW, path A = 800 kW = 800/0.97 = 824 kVA → 1000 kVA UPS per path',
          'Transformer per path: 1000 kVA UPS + 280 kW other/path = ~1100 kVA → 1250 kVA transformer'
        ],
        result:'200 racks at 8 kW: 1600 kW IT, 2160 kW total, 512 TR cooling. Per path (2N): 1000 kVA UPS, 1250 kVA transformer. N+1 generators: 2 × 1500 kW.'
      },
      rot:["DCIM payback: a DCIM system revealing 5% underutilised capacity in a 10 MW data centre represents 500 kW of reclaimable capacity — equivalent to ₹20–50 crores of deferred infrastructure spend."],
      mistakes:["Designing cooling for IT load only — must include PUE overhead for cooling, lighting, and power distribution losses","Not separating A and B power paths physically — a fire or flooding in one area can take both paths offline if they share the same route"],
      interviewQs:["What is the difference between N+1 and 2N redundancy?","How does DCIM improve data centre efficiency?","What is hot aisle containment and why is it preferred?"],
      siteTips:["Track PUE weekly from DCIM data. A sudden PUE increase (e.g. 1.35 → 1.50) indicates a cooling problem — chiller fault, AHU failure, or hot aisle containment breach. Catch it early before it causes IT equipment thermal shutdown."],
      diagram:{type:'sld', svgId:'dc-redundancy-adv-sld'}
    },
    sectorNotes:{res:'Not applicable.',com:'Small server rooms: N+1 UPS, single generator. Not formally Tier rated. Aim for Tier I or II practices.',dc:'Primary application. Tier I–IV drives all design decisions. Most enterprise data centres target Tier III.',ind:'Control room and process control systems: similar redundancy concepts but not Tier-branded.',og:'Offshore control systems: 2N power for safety instrumented systems. No Uptime Tier labeling but equivalent philosophy.',hc:'Hospital critical data systems: equivalent to Tier III for electronic medical records and life support monitoring systems.'},
    standards:{
      IS:[{clause:'TIA-942-B (referenced in India)',title:'Telecommunications infrastructure for data centres',note:'Power, cooling, space, cabling requirements by Tier'},{clause:'IS 16046',title:'Data centre general requirements',note:'Indian standard for data centre design (emerging)'}],
      NEC:[{clause:'TIA-942-B',title:'ANSI/TIA data centre standard',note:'Tier classification and infrastructure requirements'},{clause:'NEC Art.708',title:'Critical operations power systems',note:'COPS: highest reliability power for critical facilities'}],
      IEC:[{clause:'EN 50600',title:'Data centre facilities and infrastructure',note:'European data centre standard — power, cooling, security'},{clause:'ISO/IEC 22237',title:'Data centre facilities',note:'International standard aligning with Uptime Institute Tiers'}]
    },
    quiz:[]
  },

  /* ── 6. SOLAR PV ── */
  {
    id:'solar-pv', level:4, icon:'☀️', title:'Solar PV System Design',
    desc:'String sizing, inverter selection, net metering, yield calculation, and grid interconnection.',
    tags:['Solar Optimization', 'Solar PV', 'Renewable Energy', 'Solar Design'],
    sectors:['res','com','ind'], green:true, calculator:'calcSolar',
    beginner:{
      intro:"Solar PV is now the cheapest source of electricity ever deployed. Understanding how to size a PV system — from panel to grid connection — is an essential skill for any electrical engineer working on new construction or retrofits.",
      whyMatters:[
        {icon:'☀️', text:'Solar is now cheaper than grid power in most of India — the economics are compelling'},
        {icon:'💚', text:'Every green building certification (LEED, IGBC) awards points for on-site solar generation'},
        {icon:'⚡', text:'Incorrectly designed string configuration causes inverter damage or sub-optimal yield'}
      ],
      theory:"PV SYSTEM COMPONENTS:\nPV modules → String combiner box → DC cable → Inverter (converts DC to AC) → AC cable → Grid/loads\n\nMODULE PARAMETERS (at STC: 25°C, 1000 W/m²):\nPmax (Wp): peak power\nVoc: open circuit voltage\nIsc: short circuit current\nVmpp: voltage at maximum power point\nImpp: current at maximum power point\nTemp coefficient: Voc decreases ~0.3%/°C rise above 25°C\n\nSTRING SIZING:\nModules in series: determines string voltage\nStrings in parallel: determines string current\nConstraints: Voc_string < inverter max DC input voltage\nVmpp_string must be within inverter MPPT window\n\nYIELD CALCULATION:\nAnnual yield = Parray (kWp) × PR × H (PSH hours/year)\nPR = Performance Ratio (0.75–0.85 typical)\nH = Peak Sun Hours (PSH) — location dependent (e.g. Rajasthan: 5.5 PSH/day, Bangalore: 5.2)\n\nINVERTER TYPES:\nString inverter: one per string. Simple, cheaper. Single point of failure.\nMicro-inverter: one per module. Best performance with shading. Most expensive.\nCentral inverter: one for whole array. Utility-scale. Efficient at large scale.",
      formula:{
        IS:'Modules in series: n = Vinverter_max / Voc_module (at min temp)\nStrings in parallel: m = I_inverter_max / Impp_module\nYield: E = Parray × PR × H × 365 kWh/year\nCEA Regulations 2019: grid connection for solar in India',
        NEC:'String Vmax at low temp: Voc × (1 + γ_Voc × (−°C))\nNEC 690: solar PV systems\nNEC 690.7: maximum system voltage ≤ 600V or 1000V\nInverter: UL 1741 for grid-tied inverters',
        IEC:'IEC 61730: PV module safety\nIEC 62548: PV array design requirements\nIEC 62116: anti-islanding (inverter grid protection)\nYield: per IEC TR 63202 — energy assessment'
      },
      example:{
        sector:'com',
        given:'100 kWp rooftop solar, Hyderabad (PSH=5.3/day, PR=0.80). Module: 400 Wp, Voc=49V, Vmpp=41V, Isc=10.2A. Inverter: DC Vmax=900V, MPPT 300–800V, Imax=250A.',
        steps:[
          'Modules per string: Vmpp_string ≤ 800V (MPPT max) and Voc ≤ 900V',
          'Vmpp string: 41V × n ≤ 800V → n ≤ 19.5 → use 19 modules per string',
          'Voc check: 49 × 19 = 931V > 900V — reduce to 18 modules',
          'Vmpp: 41 × 18 = 738V ✓ (within 300–800V MPPT window)',
          'Total modules: 100,000/400 = 250 modules',
          'Strings: 250/18 = 13.9 → 14 strings (252 modules, 100.8 kWp)',
          'String current: 14 × 10.2 = 142.8A < 250A ✓',
          'Annual yield: 100 kWp × 0.80 × 5.3 × 365 = 154,760 kWh/year',
          'Value: 154,760 × ₹8 = ₹12.38 lakhs/year'
        ],
        result:'14 strings × 18 modules = 252 modules, 100.8 kWp. Annual yield: 154,760 kWh. Value: ₹12.38 lakhs/year. Simple payback: capital cost / ₹12.38 lakhs.'
      },
      rot:["Solar payback: ₹4–6 crores installed for 1 MWp rooftop (2024). At ₹8/unit: 1 MWp yields ~1.5 million kWh/year = ₹120 lakhs/year. Payback: 3–5 years.","Never mix module brands or different Wp ratings in the same string — mismatch causes the string to operate at the weakest module's output."],
      mistakes:["Not checking Voc at minimum winter temperature — cold temperatures raise Voc above the STC value. Voc_max = Voc_STC × (1 + |γ| × (Tmin − 25))","Designing strings for individual module Voc without derating for temperature extremes — inverter damage on cold mornings"],
      interviewQs:["Why does PV module Voc increase in cold weather and what problem does this cause?","What is the performance ratio of a solar PV system?","How do you determine the number of modules per string?"],
      siteTips:["Commission solar systems with an I-V curve tracer — compare each string's I-V curve against the expected. A string with low Isc has a shaded, damaged, or mismatched module. Catch this at commissioning rather than discovering it via yield shortfall."],
      diagram:{type:'schematic', svgId:'solar-pv-diagram'}
    },
    advanced:{
      theory:"[IS]\nNET METERING AND GRID INTERCONNECTION:\nNet metering: exported solar energy credited at import tariff rate.\nGross metering: all solar sold at solar tariff, all consumption bought at grid tariff.\nCEA Regulations 2019 (India): net metering typically mandated for <1 MW systems.\nAnti-islanding: inverter must detect grid loss and disconnect within 2 seconds (IEC 62116).\n\n[NEC]\nGRIDE-TIE INTERCONNECTION (IEEE 1547 / NEC 705):\nNet Energy Metering (NEM): exported solar energy credited at utility rates (rules vary by state).\nRapid Shutdown (NEC 690.12): Must reduce voltage to <30V within 10 seconds inside the array boundary to protect firefighters.\nAnti-islanding: inverter must disconnect on grid loss (UL 1741).\n\n[IEC]\nGRID INTERCONNECTION:\nNet metering/Feed-in tariffs depend heavily on regional EU/national policies.\nAnti-islanding: inverter must detect grid loss and disconnect within 2 seconds (IEC 62116).\nGrid-support functions: Requirements for low-voltage ride-through and reactive power control.\n\nTILT AND ORIENTATION:\nOptimum tilt ≈ latitude of location.\nSouth-facing maximises annual yield in Northern hemisphere.\nBifacial modules: gain 5–20% from reflected light on rear surface.\n\nSHADING ANALYSIS:\nShading reduces yield significantly — even partial shading can reduce entire string output.\nSolar path analysis: software (PVsyst, Helioscope) models shadows at every hour of year.\nMPPT per string or per module (micro-inverter) minimises shading loss.\n\nBESSS + SOLAR:\nSelf-consumption maximised when BESS stores excess solar for evening use.\nOptimal BESS size: typically 1–2 hours of peak solar generation.\nCapital return: BESS improves ROI only when self-consumption value > grid export rate.",
      formula:{
        IS:'Net export: kWh_net = kWh_generated − kWh_consumed\nTariff credit: credit = net_export × import_tariff\nCEA 2019: max net metered capacity = sanctioned load\nPayback: N = capital cost / (yield × tariff)',
        NEC:'NEC 690.60: point of connection to grid\nIEEE 1547: interconnection of distributed energy resources\nAnti-islanding: ≤ 2s after utility loss (IEEE 1547)',
        IEC:'IEC 62116: anti-islanding test protocol\nIEC 61724: PV system performance monitoring\nIEC 61853: PV module performance testing at different irradiance/temp'
      },
      example:{
        sector:'ind',
        given:'Industrial factory: 1 MW solar, CEA net metering, grid export allowed. Factory load 800 kW during day, 400 kW at night. Analyse economics.',
        steps:[
          'Solar generation: 1000 kW peak, ~4.5M kWh/year (PR=0.82, PSH=5.0)',
          'Daytime (8h): solar 1000 kW, load 800 kW → export 200 kW',
          'Night (16h): solar 0, load 400 kW → import from grid',
          'Annual self-consumption: 800×8×250days = 1,600,000 kWh (at ₹8/unit saving)',
          'Annual export: 200×8×250 = 400,000 kWh (at ₹3/unit net metering rate, typically lower)',
          'Annual import avoided saving: 1,600,000 × ₹8 = ₹1.28 crores',
          'Export revenue: 400,000 × ₹3 = ₹12 lakhs',
          'Annual solar revenue: ₹1.28 + 0.12 = ₹1.40 crores',
          'Capital cost: 1 MW × ₹4.5 crores/MW = ₹4.5 crores',
          'Payback: 4.5/1.40 = 3.2 years'
        ],
        result:'3.2-year payback. Self-consumption gives ₹8/unit value vs ₹3/unit export — maximise self-consumption. BESS could improve by shifting more export to night self-consumption.'
      },
      rot:["Solar ROI rule: maximise self-consumption over export. Every kWh consumed on-site from solar is worth grid import rate (₹8+). Every kWh exported gets only net metering rate (₹2–4). Design system size to match daytime consumption, not exceed it."],
      mistakes:["Sizing 1 MW solar for a factory that only uses 300 kW during the day — most solar is exported at low tariff, poor ROI","Not specifying anti-islanding protection — non-compliant inverters are rejected by DISCOM and the solar connection is refused"],
      interviewQs:["What is anti-islanding protection and why is it mandatory for grid-tied solar?","How does module temperature affect solar yield?","When is BESS + solar economically justified?"],
      siteTips:["Use PVsyst or Helioscope for solar yield simulation — these tools account for shading, temperature, soiling, and inverter clipping far more accurately than simple kWp × PSH calculations. The difference can be 10–15% of yield."],
      diagram:{type:'schematic', svgId:'solar-adv-diagram'}
    },
    sectorNotes:{res:'Residential: 1–10 kWp. Net metering. Payback 3–5 years. IS 16169 for PV modules. Battery optional.',com:'Rooftop: 50–500 kWp. Net metering or open access >1 MW. LEED/IGBC solar mandatory for highest ratings.',dc:'On-site solar (if roof area available) reduces grid dependency. Carbon neutral targets drive large solar. Often combined with PPA (Power Purchase Agreement).',ind:'1 MW+ rooftop or ground-mounted. Open access for >1 MW. Industrial: highest ROI due to high import tariff and daytime production alignment.',og:'Offshore: not applicable. Onshore oil facilities: solar for non-process loads and utilities. Isolated locations: solar + diesel hybrid.',hc:'Hospital: solar for non-essential loads. Net metering for government hospitals mandated by some states.'},
    standards:{
      IS:[{clause:'CEA Regulations 2019',title:'Connectivity of rooftop solar systems',note:'Net metering, grid connection, anti-islanding for India'},{clause:'IS 16169',title:'Solar PV module requirements',note:'Performance and safety for modules in India'}],
      NEC:[{clause:'NEC Art.690',title:'Solar photovoltaic systems',note:'Complete NEC requirements for PV systems'},{clause:'IEEE 1547',title:'Interconnection of distributed energy resources',note:'Anti-islanding, voltage regulation, power quality'}],
      IEC:[{clause:'IEC 61730',title:'PV module safety qualification',note:'Safety and performance testing for PV modules'},{clause:'IEC 62116',title:'Anti-islanding protection',note:'Test procedure for inverter anti-islanding function'}]
    },
    quiz:[]
  },

  /* ── 7. LIGHTNING PROTECTION ── */
  {
    id:'lightning-protect', level:4, icon:'⛈️', title:'Lightning Protection',
    desc:'LPL classification, rolling sphere method, air termination, earthing, and SPD selection.',
    tags:['Lightning Protection', 'LPS', 'Rolling Sphere', 'Surge Protection'],
    sectors:['com','ind','og'], green:false, calculator:null,
    beginner:{
      intro:"Lightning delivers up to 1 billion volts and 30,000 amperes in microseconds. A properly designed lightning protection system (LPS) safely channels this energy to earth — protecting the building, equipment, and people inside.",
      whyMatters:[
        {icon:'⛈️', text:'Direct lightning strike to unprotected building causes fire, structural damage, equipment destruction'},
        {icon:'⚡', text:'Induced surges from nearby strikes destroy electronic equipment even without direct hit'},
        {icon:'📋', text:'LPS is mandatory for tall buildings, storage tanks, and explosive risk areas in India'}
      ],
      theory:"LIGHTNING PROTECTION LEVELS (LPL) — IEC 62305:\nLPL I: Highest protection. Rolling sphere radius 20m. For explosive/chemical plants, hospitals.\nLPL II: Rolling sphere 30m. For tall buildings, power plants.\nLPL III: Rolling sphere 45m. For commercial buildings.\nLPL IV: Rolling sphere 60m. For standard structures (minimum protection).\n\nROLLING SPHERE METHOD:\nA sphere of radius R rolls over the structure.\nAny point the sphere touches is a potential strike point.\nAir terminals (rods) must protect all these points — sphere must not touch roof without touching a rod first.\nMesh method: air termination grid covers flat roofs (spacing depends on LPL).\n\nCOMPONENTS OF LPS:\n1. Air termination: lightning rods, conductors on roof edges, mesh\n2. Down conductors: connect air termination to earth — maximum spacing depends on LPL\n3. Earth termination: earth electrodes, earth ring conductor\n4. Equipotential bonding: all metalwork connected at earth level to prevent step/touch hazard\n5. SPD (Surge Protective Device): protects internal equipment from induced surges\n\nSPD CATEGORIES:\nType 1 (Class B): at main LV panel. Limits voltage to ~4kV. Used when LPS installed.\nType 2 (Class C): at sub-distribution panels. Limits to ~2.5kV.\nType 3 (Class D): at equipment. Limits to ~1.5kV. Last line of defence.",
      formula:{
        IS:'Rolling sphere radius: LPL I=20m, II=30m, III=45m, IV=60m\nDown conductor spacing: LPL I=10m, II=15m, III=20m, IV=25m\nEarth resistance: ≤10Ω (IEC 62305), ≤5Ω (IS 3043 general)\nIS 2309: protection of buildings against lightning\nIS/IEC 62305: lightning protection standard',
        NEC:'NFPA 780: standard for installation of lightning protection systems\nNFPA 780 Ch.4: rolling sphere radius (150ft = 45m for Class I standard)',
        IEC:'IEC 62305-1: general principles\nIEC 62305-3: physical damage to structures\nIEC 62305-4: electrical and electronic systems within structures\nSPD: IEC 61643-11 (LV systems)'
      },
      example:{
        sector:'com',
        given:'8-storey office building, 30m tall. LPL II specified. Design air termination.',
        steps:[
          'LPL II: rolling sphere radius = 30m',
          'Roll the 30m sphere over the building roof',
          'Flat roof: sphere touches anywhere on the flat surface → need mesh air termination',
          'Mesh size for LPL II: 10m × 10m grid (IEC 62305-3 Table 4)',
          'Rod terminals at corners and every 10m along roof perimeter',
          'Down conductors: every 15m around building perimeter (LPL II spacing)',
          '8-storey building perimeter ~50m → 4 down conductors minimum',
          'Earth ring: around building perimeter at 1m depth, connect all down conductors',
          'Earth resistance: measure and verify ≤ 10Ω'
        ],
        result:'LPL II: 10×10m mesh on roof, 4 down conductors, earth ring at perimeter. Type 1 SPD at MDB + Type 2 at each floor distribution board.'
      },
      rot:["Rolling sphere shortcut: for a 30m radius sphere (LPL II), any flat roof area larger than 30m×30m will be touched by the sphere — mesh is required. For tall slender structures: rods protect the tip and sphere analysis confirms.","SPD installation reminder: SPDs must be installed at EVERY level from Type 1 at main panel to Type 3 at sensitive equipment. A Type 1 alone at the main panel does not protect equipment from surges propagating through internal wiring."],
      mistakes:["Protecting only the roof with air termination without installing SPDs — lightning induction on power cables still destroys equipment inside","Connecting down conductors to the building structural steel as an earth path — structural steel is not an adequate earth electrode on its own","Using LPL IV (minimum) for chemical storage, explosive areas, or hospitals — these require LPL I or II"],
      interviewQs:["Explain the rolling sphere method for positioning lightning air terminals.","What is the difference between a Type 1 and Type 2 SPD?","Why is equipotential bonding required for all metalwork in a protected structure?"],
      siteTips:["After each significant thunderstorm season, visually inspect all air terminals for corrosion or physical damage. Test earth resistance annually — soil conditions change and resistance may increase above the 10Ω limit. Document all tests."],
      diagram:{type:'schematic', svgId:'lightning-diagram'}
    },
    advanced:{
      theory:"SEPARATION DISTANCE:\nDown conductors carry lightning current — nearby metalwork can have dangerous potential difference.\nSeparation distance s = ki × kc × l / km (IEC 62305 formula)\nIf separation not possible: bond down conductor to nearby metalwork.\n\nFOUNDATION EARTH:\nSteel reinforcement in concrete foundations is an excellent natural earth electrode.\nFoundation earth typically achieves <1Ω resistance.\nConnect with copper bonding conductors at multiple points.\nNot available for retrofit — planned at design stage.\n\nTHREAT ASSESSMENT (IEC 62305-2):\nRisk calculation: R1 (loss of human life), R2 (loss of service), R3 (loss of economic value)\nCompare with tolerable risk RT (typically 10⁻⁵ for human life per year)\nIf R > RT: LPS required. If R < RT: LPS may not be needed (rare).\n\nSHIELDED CABLES:\nFor sensitive electronic systems: screened cables reduce induced surge.\nScreen earthed at both ends: shields against magnetic induction.\nOptical fibre: immune to lightning induction — preferred for communications between buildings.",
      formula:{
        IS:'Separation distance: s = ki × kc × l / km\nki = 0.04 (LPL I), 0.06 (LPL II), 0.08 (LPL III/IV)\nkc = factor for current in down conductor\nkm = material factor (0.5 concrete, 1.0 air)',
        NEC:'NFPA 780 Ch.8: separation from communications\nIEEE C62.41: surge environment in LV AC power circuits\nIEEE C62.45: testing SPDs',
        IEC:'IEC 62305-1 to 4: complete lightning protection\nIEC 62305-2: risk management\nIEC 61643-11: SPD for LV systems\nIEC 62561: components of LPS (conductors, clamps, earth electrodes)'
      },
      example:{
        sector:'og',
        given:'Petroleum storage tank farm: LPL I required. Tanks are 20m tall, 30m diameter. Design LPS.',
        steps:[
          'LPL I: rolling sphere radius 20m',
          'Floating roof tanks: self-protected by metallic roof — bond roof to shell with flexible copper strips',
          'Fixed cone roof tanks: rolling sphere applied. Sphere radius 20m touches cone top → fit Franklin rod at tank top',
          'Franklin rod height h: sphere must not touch the 30m diameter tank rim without first touching rod.',
          'Rolling sphere on cone: touches apex first if rod is fitted there ✓',
          'Down conductor: tank shell IS the down conductor (bonds all around perimeter)',
          'Earth: buried copper ring electrode around each tank perimeter. Target <1Ω per IS 3043.',
          'Bonding: all flanges, instrument connections, piping — bonded to prevent spark across joints',
          'Cathodic protection: coordinate LPS earthing with existing CP system to avoid interference'
        ],
        result:'LPL I LPS: Franklin rod on fixed roof tank apex. Floating roof: flexible bonding strips. Earth ring <1Ω. Bond ALL metallic connections. Coordinate with cathodic protection engineer.'
      },
      rot:["Tank farm rule: floating roof tanks protect themselves (metallic roof). Fixed roof tanks need air terminals. ALL tanks need low resistance earth bonds — static electricity from petroleum flow requires the same earth path."],
      mistakes:["Not coordinating lightning earth with cathodic protection system — they can conflict. CP system impresses DC current that corrodes the lightning earth. Requires specialist isolation and bonding design.","No SPDs on instrumentation cables entering control room from field — lightning on instrument cables destroys PLCs and controllers. Fit Type 2 SPD at panel entry for every field cable."],
      interviewQs:["What is the separation distance requirement and how do you calculate it?","Why is foundation earth preferred over rod electrodes?","How does cathodic protection affect lightning protection earthing design?"],
      siteTips:["Request a lightning risk assessment report before designing LPS for any project. IEC 62305-2 risk calculation quantifies the actual risk — sometimes a client requests LPL I when the risk calculation shows LPL III is sufficient. The risk report supports a cost-optimised design."],
      diagram:{type:'schematic', svgId:'lightning-adv-diagram'}
    },
    sectorNotes:{res:'Residential: lightning protection optional for low buildings. Mandatory for tall residential (>20m) per NBC 2016.',com:'Office buildings >15m: LPS mandatory in India (IS 2309). SPDs at every distribution board. Earthing for LPS separate from power earth.',dc:'Critical: LPS I or II. All data cables enter via SPDs. Screened cables for communications. Foundation earth mandatory.',ind:'Chemical, explosive, petroleum: LPS I mandatory. All tanks earthed. Bonding of all pipework and equipment.',og:'LPS I for all structures. All tanks earthed and bonded. Coordination with cathodic protection critical.',hc:'LPS I or II for hospitals. Life safety equipment must be protected. SPDs on all power and data feeds.'},
    standards:{
      IS:[{clause:'IS 2309',title:'Protection of buildings and allied structures against lightning',note:'Indian lightning protection standard'},{clause:'IEC 62305 (adopted as IS/IEC)',title:'Complete lightning protection standard',note:'IEC 62305-1 to 4 adopted for Indian practice'}],
      NEC:[{clause:'NFPA 780',title:'Standard for installation of lightning protection systems',note:'US lightning protection standard — Class I, II buildings'},{clause:'NEC Art.285',title:'Surge protective devices (SPDs)',note:'SPD installation requirements for LV AC systems'}],
      IEC:[{clause:'IEC 62305-3',title:'Physical damage to structures and life hazard',note:'Air termination design, down conductors, earth termination'},{clause:'IEC 61643-11',title:'Surge protective devices in LV AC systems',note:'SPD Types 1, 2, 3 — selection and installation'}]
    },
    quiz:[]
  },

  /* ── 8. ARC FLASH ── */
  {
    id:'arc-flash', level:4, icon:'⚡', title:'Arc Flash Analysis',
    desc:'IEEE 1584:2018 incident energy calculation, PPE categories, arc flash boundary, and mitigation.',
    tags:['Arc Flash', 'Incident Energy', 'PPE Category', 'IEEE 1584'],
    sectors:['ind','og','dc'], green:false, calculator:null,
    beginner:{
      intro:"An arc flash is an explosive release of electrical energy — temperatures reach 35,000°C (4× the surface of the sun). Even at several metres away, the incident energy can cause fatal burns. Arc flash analysis calculates this energy and determines what PPE is needed for safe work.",
      whyMatters:[
        {icon:'🔥', text:'Arc flash kills and severely injures electrical workers — correct PPE analysis is life safety'},
        {icon:'📋', text:'Arc flash labelling on all switchgear is legally required under NFPA 70E / OHSAS 18001'},
        {icon:'⚡', text:'Understanding arc flash energy enables design choices that make equipment safer to maintain'}
      ],
      theory:"IEEE 1584:2018 METHOD:\nArc flash incident energy E is calculated from:\n— System voltage (V)\n— Bolted fault current (kA) at the equipment\n— Arcing current (kA) — slightly less than bolted fault\n— Working distance (mm) — distance from arc to worker\n— Arc duration (s) — time until protection clears the fault\n— Equipment type and electrode gap\n— Enclosure type (open air, box)\n\nINCIDENT ENERGY CATEGORIES (NFPA 70E):\nCat 1: ≥ 1.2, < 4 cal/cm² — minimum arc rated PPE\nCat 2: ≥ 4, < 8 cal/cm² — arc rated face shield, jacket\nCat 3: ≥ 8, < 25 cal/cm² — arc flash suit (class 2)\nCat 4: ≥ 25, < 40 cal/cm² — heavy arc flash suit (class 4)\nAbove 40 cal/cm²: DANGER — do not work on energised. De-energise first.\n\nARC FLASH BOUNDARY (AFB):\nDistance at which incident energy = 1.2 cal/cm² (onset of 2nd degree burn).\nAnyone inside AFB must wear appropriate arc rated PPE.\nSeparate from approach boundaries (shock hazard zones).",
      formula:{
        IS:'E = f(Ibf, system V, gap, t, D, enclosure) [IEEE 1584:2018 empirical model]\nAFB: D = [4.184 × Cf × En × t / Eb]^(1/x) [simplified — use software]\nIb (arcing): from IEEE 1584 equations based on bolted fault current\nIndian practice: IEEE 1584:2018 adopted as standard method',
        NEC:'NFPA 70E:2021 Table 130.5(G): estimated incident energy by task\nIEEE 1584:2018: authoritative calculation method\nPPE categories: 1 (4 cal), 2 (8 cal), 3 (25 cal), 4 (40 cal)',
        IEC:'IEC 61641: enclosed LV switchgear arc fault testing\nIEC 60479: effects of current on human body\nArc flash: IEEE 1584:2018 used internationally\nPPE: IEC 61482 arc flash protective clothing'
      },
      example:{
        sector:'ind',
        given:'415V industrial MCC: bolted fault current 20 kA, working distance 600mm. Protection: MCCB trips in 0.1s. Find incident energy.',
        steps:[
          'Ibf = 20,000A at 415V, enclosed switchgear (LV MCB, VCB type)',
          'Calculate arcing current: Ia ≈ 0.85 × Ibf = 17,000A (simplified; use software for exact)',
          'Arc duration: MCCB clears in 0.1s → t = 0.1s',
          'Enclosure: LV switchgear (switchboard enclosed, max 0.6m)',
          'Using IEEE 1584:2018 (requires software for full calculation):',
          'Approximate: E ≈ 4.184 × 1.0 × En × (0.1/0.2) — simplified form',
          'At 20kA, 415V, 600mm, 0.1s: typically E ≈ 4–8 cal/cm² (Category 2 range)',
          'Arc flash boundary: where E = 1.2 cal/cm² — typically 1.5–2.5m at this level',
          'Label: Cat 2, E = 6 cal/cm² (example), AFB = 1.8m, working distance 600mm'
        ],
        result:'Approximately Cat 2 (4–8 cal/cm²). Use ETAP or SKM for precise calculation. Label MCC: Incident Energy, PPE Category, AFB. Update labels if protection settings change.'
      },
      rot:["Arc flash energy shortcut: E ∝ I × t. To reduce energy by half: halve clearing time OR halve fault current. Fastest route: install bus differential protection (30ms clearing vs 300ms = 90% energy reduction).","Arc flash label rule: every piece of switchgear that may be worked on energised must have an arc flash label. No exceptions. The label is generated from the arc flash study — not a guess."],
      mistakes:["Using NFPA 70E table estimates instead of IEEE 1584:2018 calculations — tables are conservative but can still be wrong. Calculation is always preferred.","Not updating arc flash labels after protection relay changes — a 50% reduction in clearing time changes the PPE category. Old labels create false security."],
      interviewQs:["What is incident energy and how is it measured?","Why does clearing time have such a large effect on arc flash energy?","What is the arc flash boundary and who must wear PPE inside it?"],
      siteTips:["After completing the arc flash study: print labels, physically attach them to every switchboard door (inside face and outside), and brief all maintenance staff. Conduct arc flash awareness training annually. Untrained staff ignore labels they don't understand."],
      diagram:{type:'schematic', svgId:'arc-flash-diagram'}
    },
    advanced:{
      theory:"IEEE 1584:2018 MODEL DETAILS:\nThe 2018 revision significantly improved accuracy over the 2002 model.\nNew variables: electrode configuration (VCB, VCBB, HCB, VOA, HOA), enclosure dimensions.\nVariation across configurations can be 2–5× — electrode orientation matters.\n\nARC FLASH MITIGATION STRATEGIES:\n1. De-energise before work: 100% effective — requires LOTO\n2. Bus differential protection (87B): 1–2 cycle clearing → Cat 1 or lower\n3. Zone selective interlocking: upstream clears in 50ms → Cat 2 or lower\n4. Maintenance mode setting: temporarily lower magnetic pickup during live work → faster clearing\n5. High-resistance grounding: limits fault current → lower incident energy\n6. Remote racking: rack breakers in/out remotely — personnel not in front of panel\n7. Remote switching: operate switchgear from outside the AFB\n\nPROCESSED BASED PPE METHOD (NFPA 70E Art.130):\nAlternative to incident energy method.\nSelects PPE from standardised task tables.\nConservative — may require higher PPE than incident energy method.\nUsed when arc flash study is not available.",
      formula:{
        IS:'E_ZSI/E_normal = t_ZSI/t_normal (energy proportional to time)\nE_87B/E_normal ≈ 30ms/300ms = 0.1 → 90% reduction\nHigh resistance grounding: Ig = V/(√3 × R_ng) limited to 1–5A\nWith HRG: E ∝ I²×R×t — very low energy',
        NEC:'NFPA 70E:2021 Table 130.5(G): task-based PPE for unqualified persons\nIEEE 1584:2018: calculated incident energy method\nRemote racking: NFPA 70E 130.7(D) note\nRemote switching: NFPA 70E 130.2',
        IEC:'IEC 61482: arc flash protective clothing testing\nArc thermal performance value (ATPV): cal/cm² rating of PPE\nEBT (energy break-open threshold): failure mode of PPE material'
      },
      example:{
        sector:'dc',
        given:'Data centre MDB: arc flash study shows 42 cal/cm². Cannot accept Cat 4+ PPE requirement. Design mitigation to achieve Cat 2 (≤8 cal/cm²).',
        steps:[
          'Current clearing time: ACB at 300ms (ST delay) → 42 cal/cm²',
          'Target: ≤8 cal/cm². Energy ratio: 8/42 = 0.19 → need 81% time reduction',
          'Required clearing time: 0.19 × 300ms = 57ms',
          'Option 1: Bus differential (87B). Clearing: 30–50ms. Energy: 42 × 50/300 = 7 cal/cm² → Cat 2 ✓',
          'Option 2: ZSI + reduced ST delay from 300ms to 50ms. Energy: 42 × 50/300 = 7 cal/cm² ✓',
          'Option 3: Maintenance mode — reduce ACB Inst from 12kA to 10kA during live work. Clearing ~20ms. Energy ~3 cal/cm² → Cat 1 ✓. BUT: loss of selectivity with downstream MCCBs during maintenance.',
          'Recommendation: Install 87B (permanent fix). Also program maintenance mode for additional protection.',
          'Update all MDB arc flash labels after 87B installation.'
        ],
        result:'Install 87B bus differential. Arc flash energy: 42 → 7 cal/cm² (Cat 4 → Cat 2). Program maintenance mode as additional protection during live work. Update labels. Train maintenance staff.'
      },
      rot:["Design for arc flash from the start: specifying 87B protection during design costs ₹5–10 lakhs. Retrofitting 87B after the building is operational can cost ₹25–50 lakhs due to downtime and cabling."],
      mistakes:["Specifying arc flash PPE without updating labels on the equipment — PPE specification in a design report is useless if the label on the door says Cat 4 and the engineer now calculates Cat 2","Treating arc flash analysis as a one-time exercise — it must be repeated after any protection or equipment changes"],
      interviewQs:["Why did IEEE 1584:2018 differ significantly from the 2002 model?","How does electrode configuration affect arc flash energy?","What is the difference between the incident energy method and the task-based PPE method?"],
      siteTips:["When a maintenance contractor asks to work on live MV or LV switchgear, request the current arc flash study results and verify the PPE they will use matches the calculated PPE category. If they don't have an arc flash study, insist on de-energising. This is not optional."],
      diagram:{type:'schematic', svgId:'arc-flash-adv-diagram'}
    },
    sectorNotes:{res:'Not required for residential.',com:'Arc flash study for MDB and SMDB. Labels on all switchgear. Maintenance contractors must use appropriate PPE.',dc:'Critical: arc flash study mandatory. 87B protection to reduce energy. Remote racking standard. All maintenance staff trained.',ind:'Full arc flash study including MCC and HV switchgear. NFPA 70E implementation. Permit-to-work includes PPE category from label.',og:'Arc flash + explosion risk combined. ATEX PPE and arc flash PPE must be compatible (some materials conflict). Work permit mandatory.',hc:'Arc flash study for essential switchgear. Training for maintenance engineers. Labels updated after any protection changes.'},
    standards:{
      IS:[{clause:'IEEE 1584:2018 (adopted in India)',title:'Guide for performing arc flash calculations',note:'Industry standard for incident energy calculation'},{clause:'OHSAS 18001 / ISO 45001',title:'Occupational health and safety',note:'Arc flash study required for electrical safety management'}],
      NEC:[{clause:'NFPA 70E:2021',title:'Electrical safety in the workplace',note:'PPE categories, approach boundaries, arc flash study requirements'},{clause:'OSHA 29 CFR 1910.269',title:'Electrical power generation and distribution',note:'US regulatory requirement for arc flash protection'}],
      IEC:[{clause:'IEC 61482',title:'Live working — protective clothing for arc flash',note:'Testing and rating of arc flash protective clothing (ATPV)'},{clause:'IEC 61641',title:'Enclosed LV switchgear arc fault testing',note:'Factory testing of switchgear assemblies for arc fault performance'}]
    },
    quiz:[]
  },

  /* ── 9. POWER QUALITY & HARMONICS ── */
  {
    id:'pq-harmonics', level:4, icon:'📡', title:'Power Quality & Harmonics',
    desc:'THD measurement, IEEE 519 limits, passive and active harmonic filter selection.',
    tags:['Power Quality', 'Harmonics', 'THD', 'PF & Harmonics'],
    sectors:['com','ind'], green:false, calculator:null,
    beginner:{
      intro:"Modern electrical loads — VFDs, UPS systems, LED drivers, computers — draw non-sinusoidal current. This harmonic current distorts the voltage waveform and causes problems for other equipment sharing the same supply. Understanding and controlling harmonics is essential in any modern building or industrial installation.",
      whyMatters:[
        {icon:'🌊', text:'Harmonics overheat transformers, neutral conductors, and motors causing premature failure'},
        {icon:'⚡', text:'Voltage distortion from harmonics causes sensitive equipment to malfunction'},
        {icon:'📊', text:'IEEE 519 / IS limits apply at utility connection — non-compliance causes utility surcharges'}
      ],
      theory:"HARMONICS FUNDAMENTALS:\nFundamental frequency: 50Hz (India) or 60Hz (USA)\nHarmonics: integer multiples of fundamental: 2nd=100Hz, 3rd=150Hz, 5th=250Hz, 7th=350Hz...\nNon-linear loads draw current with harmonic content.\nOdd harmonics (3rd, 5th, 7th...) dominant in most systems.\n\nHARMONIC ORDER AND SEQUENCE:\n1st (fundamental), 4th, 7th...: positive sequence → rotates same as fundamental\n2nd, 5th, 8th...: negative sequence → reverse rotation (heats motors)\n3rd, 6th, 9th...: zero sequence → adds in neutral (overloads neutral)\n\nTOTAL HARMONIC DISTORTION (THD):\nTHD_I = √(I₂²+I₃²+I₅²+...) / I₁ × 100%\nTHD_V = √(V₂²+V₃²+V₅²+...) / V₁ × 100%\nTypical equipment:\n6-pulse VFD: THD_I = 25–35%\nComputer SMPS: THD_I = 100–150%\nLED driver: THD_I = 15–30%\n\nIEEE 519 LIMITS (at PCC — Point of Common Coupling with utility):\nTDD (Total Demand Distortion) for current: 5–15% depending on Isc/IL ratio\nTHD_V: ≤5% for systems ≤69kV",
      formula:{
        IS:'THD_I = √(Σ Ih²) / I1 × 100% (h=2,3,4...)\nTDD = √(Σ Ih²) / IL × 100% (IL = max demand current)\nTelephone Interference Factor (TIF): Σ(Ih × Wh) / IL\nIS equivalent: IEEE 519 referenced for harmonic limits',
        NEC:'IEEE 519:2014: harmonic limits at PCC\nTDD limits: 5% (Isc/IL<20) to 15% (Isc/IL>1000)\nVoltage THD: <5% for 69kV and below',
        IEC:'IEC 61000-3-2: equipment harmonic current emission limits\nIEC 61000-3-6: assessment of emission limits for disturbing loads\nIEC 61000-4-7: measurement of harmonics\nTHD_V per IEC: ≤8% LV'
      },
      example:{
        sector:'ind',
        given:'Industrial plant: 6 × 75 kW VFDs at 415V. PCC short circuit level: 15 MVA. Assess harmonic compliance.',
        steps:[
          'Total VFD load: 6 × 75 = 450 kW',
          'At PF=0.85: IL = 450/(√3 × 0.415 × 0.85) = 736A',
          'PCC Isc: 15,000/(√3 × 0.415) = 20,872A',
          'Isc/IL ratio: 20,872/736 = 28.4 → IEEE 519 limit TDD = 8%',
          '6-pulse VFDs: typical THD_I = 30%. Each VFD draws 5th and 7th harmonics.',
          'Approximate TDD at PCC: not all harmonics from VFDs add in phase → TDD ≈ 15–20%',
          'TDD > 8% limit → NON-COMPLIANT',
          'Mitigation options:',
          '(a) 5% line reactors on each VFD: THD_I → ~18%, TDD → ~12% (still over)',
          '(b) 12-pulse VFDs: THD_I → ~8%, TDD → ~5% ✓',
          '(c) Active harmonic filter at PCC: reduce TDD to < 5% ✓'
        ],
        result:'Non-compliant. Install 12-pulse VFDs or active harmonic filter. Line reactors alone insufficient for 6 large VFDs.'
      },
      rot:["Line reactor rule: a 5% line reactor on a 6-pulse VFD reduces THD from 35% to 18%. Cheap and simple but not enough for IEEE 519 compliance when multiple large VFDs share a bus.","Neutral overloading rule: if computers, servers, or LED lighting are >30% of load on a 3-phase circuit, size neutral as equal to phase conductors (not reduced). 3rd harmonics triple in the neutral."],
      mistakes:["Measuring THD at the VFD input and confusing it with PCC (grid connection) THD — VFD input may be 30% THD but after other loads diversify with different harmonic phases, PCC THD may be lower","Installing passive filters without checking for resonance — a filter sized for 5th harmonic can amplify 7th if not correctly designed"],
      interviewQs:["Why do 3rd harmonics add in the neutral conductor rather than cancel?","What is the difference between THD and TDD in IEEE 519?","What is the advantage of a 12-pulse rectifier over a 6-pulse rectifier for harmonic reduction?"],
      siteTips:["Use a power quality analyser with harmonic spectrum display at the main incomer when commissioning a new installation with significant VFD or IT load. Record baseline THD, TDD, and individual harmonic magnitudes. This baseline data proves compliance at commissioning and gives a reference for future comparison."],
      diagram:{type:'schematic', svgId:'harmonics-diagram'}
    },
    advanced:{
      theory:"PASSIVE HARMONIC FILTERS:\nSeries resonant filter: LC circuit tuned to specific harmonic frequency.\nDetuned capacitor + reactor: prevents resonance, provides partial filtering.\nDesign for each harmonic order separately: 5th, 7th, 11th, 13th.\nCost-effective for predictable, steady harmonic loads.\nRisk: resonance if system impedance changes.\n\nACTIVE HARMONIC FILTERS (AHF):\nMeasures harmonic current in real time.\nInjects equal and opposite harmonic current → cancellation.\nHandles any harmonic mix, adapts to changing loads.\nMore expensive but no resonance risk, more flexible.\nSize: rated for sum of harmonic currents to be cancelled (not full load current).\n\nUPS AND HARMONIC INTERACTION:\n6-pulse UPS rectifier: highest harmonics (25–35% THD).\n12-pulse: much better (<8% THD).\nPWM (IGBT) rectifier: near unity PF, <5% THD. Best option.\nChoose UPS with active PFC (power factor correction) input for harmonic-sensitive sites.\n\nK-FACTOR FOR TRANSFORMERS:\nK-factor quantifies harmonic loading on transformer.\nK = Σ(Ih/I1)² × h²\nK1 = no harmonics. K13 = data centre typical. K20 = extreme harmonic environment.\nK-rated transformers: designed windings to handle eddy current losses from harmonics.",
      formula:{
        IS:'K-factor: K = Σ (Ih²/I1²) × h²\nPassive filter Q = 1/(2πfL) = 2πfC\nTuning: fn = 1/(2π√LC)\nAHF size: Iahf ≥ √(I3²+I5²+I7²...) — harmonic current to cancel',
        NEC:'IEEE 519:2014 harmonic limits\nIEEE 1531: application guide for harmonic filters\nK-factor: ANSI C57.110 derating method\nUPS: IEEE 1100 (Emerald Book) for power quality',
        IEC:'IEC 61000-3-6: emission limits for disturbing loads\nIEC 61000-4-7: harmonic measurement\nK-factor: no direct IEC equivalent — use derating from IEC 60076-1'
      },
      example:{
        sector:'dc',
        given:'Data centre: 500 kW IT load, 6-pulse UPS rectifiers, THD_I = 28% at main incomer. Target: THD < 5%. Select mitigation.',
        steps:[
          'Load: 500 kW, THD = 28%, IL = 500/(√3×0.415×0.97) = 716A',
          'Harmonic current: THD × IL = 0.28 × 716 = 201A rms harmonic content',
          'Dominant harmonics: 5th (250Hz) and 7th (350Hz) from 6-pulse rectifier',
          'Option 1: Replace 6-pulse UPS with IGBT PWM rectifier UPS (THD < 5%) → cost: premium on UPS',
          'Option 2: 12-pulse UPS: THD → 8% → still above 5% target',
          'Option 3: Active harmonic filter (AHF) 200A rating at existing UPS',
          'AHF injects harmonic cancellation current 201A → residual THD ≈ 2–3% ✓',
          'Cost comparison: AHF ≈ ₹30–40 lakhs vs UPS premium ≈ ₹20–30 lakhs',
          'Best long-term: specify IGBT rectifier on next UPS replacement'
        ],
        result:'Short term: 200A AHF. Long term: replace with IGBT/PWM UPS rectifier. Target THD <5% achieved. Update transformer specification to K13 to handle remaining harmonics.'
      },
      rot:["Active harmonic filter sizing: measure or calculate individual harmonic currents, not just THD. AHF must be rated for the rms sum of all harmonic currents it will cancel — not the full load current."],
      mistakes:["Specifying a passive filter tuned to 5th harmonic and expecting it to solve all harmonic problems — 7th, 11th, and 13th harmonics still present","Connecting an AHF at the wrong point in the system — AHF must be at the bus where harmonics are generated, not just anywhere on the system"],
      interviewQs:["How does an active harmonic filter work?","What is K-factor and when must a K-rated transformer be specified?","Why do 6-pulse rectifiers generate primarily 5th and 7th harmonics?"],
      siteTips:["After installing harmonic mitigation, measure THD with a power analyser and verify the improvement. Without verification, you cannot be sure the filter is working correctly or that the harmonic source hasn't changed. Document the before and after measurements."],
      diagram:{type:'schematic', svgId:'harmonics-adv-diagram'}
    },
    sectorNotes:{res:'Not critical — residential loads generally well-behaved. LED dimmers and EV chargers introduce some harmonics.',com:'VFDs on HVAC, LED lighting, computers generate harmonics. AHF or 12-pulse VFDs for large installations. IEEE 519 compliance at HT connection.',dc:'Highest harmonic environment. IGBT UPS rectifiers mandatory for new builds. Active filters for existing 6-pulse systems.',ind:'Most impactful sector. Large VFDs generate significant harmonics. Detuned capacitors mandatory. Active filters for high-harmonic plants.',og:'VFDs on offshore — harmonic filters mandatory in isolated power systems (generator more sensitive than grid).',hc:'MRI machines and medical imaging equipment generate significant harmonics. Isolation transformers help. Active filters for large hospitals.'},
    standards:{
      IS:[{clause:'IEEE 519:2014 (adopted in India)',title:'Recommended practice for harmonic control',note:'TDD limits at PCC — widely referenced in Indian practice'},{clause:'IEC 61000-3-2',title:'Harmonic current emission from equipment',note:'Per-equipment harmonic limits'}],
      NEC:[{clause:'IEEE 519:2014',title:'Harmonic control in electric power systems',note:'TDD and voltage THD limits at point of common coupling'},{clause:'ANSI C57.110',title:'Transformer loading with non-sinusoidal currents',note:'K-factor derating methodology'}],
      IEC:[{clause:'IEC 61000-3-6',title:'Assessment of emission limits for disturbing loads',note:'Harmonic emission limits above 16A'},{clause:'IEC 61000-4-7',title:'Harmonic measurement',note:'Methodology for measuring harmonic distortion'}]
    },
    quiz:[]
  },

  /* ── 10. ENERGY EFFICIENCY & GREEN BUILDINGS ── */
  {
    id:'energy-efficiency', level:4, icon:'🌱', title:'Energy Efficiency & Green Buildings',
    desc:'PUE, LPD, ECBC compliance, LEED/IGBC credits, ASHRAE 90.1 — designing efficient buildings.',
    tags:['Energy Efficiency', 'Green Buildings', 'Energy Efficiency & Green Buildings', 'LEED', 'IGBC', 'ECBC'],
    sectors:['res','com','ind','dc','hc'], green:true, calculator:null,
    beginner:{
      intro:"Green building standards are transforming electrical design from compliance-minimum to efficiency-optimum. Understanding ECBC, LEED, and IGBC requirements makes you a more valuable engineer — and helps buildings consume 30–50% less energy.",
      whyMatters:[
        {icon:'🌱', text:'ECBC compliance is now mandatory for commercial buildings >100m² in India'},
        {icon:'💚', text:'LEED and IGBC certifications command 10–15% rent premium and attract ESG investors'},
        {icon:'💰', text:'Energy-efficient buildings reduce operating cost by ₹20–50 lakhs/year per 10,000 m²'}
      ],
      theory:"[IS]\nKEY STANDARDS IN INDIA:\nECBC 2017 (Energy Conservation Building Code): mandatory for new commercial buildings.\nStar Rating (BEE): voluntary energy performance rating 1–5 stars for existing buildings.\nGreen Rating for Integrated Habitat Assessment (GRIHA): Indian green building rating.\nIGBC (Indian Green Building Council): LEED-equivalent Indian rating system.\n\nELECTRICAL REQUIREMENTS IN ECBC:\nLPD (Lighting Power Density): maximum W/m² per space type.\nOffice: 10 W/m². Retail: 15 W/m². Hospital: 12 W/m².\nLighting controls: occupancy sensors mandatory for offices, conference rooms.\nDaylight sensors: automatic dimming near windows mandatory.\nVFDs: mandatory on all fans and pumps > 5.5 kW.\nPower factor: APFC mandatory for demand > 100 kVA.\nSub-metering: energy meters required per floor and per major system.\n\nLEED INDIA / IGBC:\nEnergy credits require exceeding the ECBC or ASHRAE 90.1 baseline.\nMEP contribution: typically 30–40% of LEED credits come from electrical design.\n\n[NEC]\nKEY STANDARDS IN USA:\nASHRAE 90.1: Energy Standard for Buildings Except Low-Rise Residential Buildings (forms basis of most state energy codes).\nTitle 24 (California): The most stringent state energy code in the US.\nLEED (USGBC): Leadership in Energy and Environmental Design — voluntary rating system.\n\nELECTRICAL REQUIREMENTS in ASHRAE 90.1:\nLPD (Lighting Power Density): maximum Watts/sq ft per space type.\nLighting controls: vacancy sensors (manual on, auto off) widely required.\nDaylight responsive controls: required in daylight zones.\nEnergy Monitoring: Sub-metering required for high-load tenant spaces.\n\nLEED RATING SYSTEM:\nEnergy credits: EAp2 (minimum energy performance), EAc2 (optimize energy performance).\nBasecase: ASHRAE 90.1.\nCredit: exceed baseline by a set percentage (e.g., 5% to 50%) for escalating points.\nMEP contribution: electrical design heavily impacts the 'Energy & Atmosphere' category.\n\n[IEC]\nKEY INTERNATIONALLY RECOGNIZED STANDARDS:\nEPBD (Energy Performance of Buildings Directive): EU mandatory framework.\nBREEAM (BRE Environmental Assessment Method): UK-led, globally recognized rating system.\nLEED International: Global adaptation of the US-based LEED system.\n\nENERGY DIRECTIVE REQUIREMENTS:\nLPD (Lighting Power Density): strictly governed via LENI (EN 15193).\nSmart Readiness Indicator (SRI): evaluates building capability for smart operation.\nSub-metering: MID-approved energy meters required for energy profiling.",
      formula:{
        IS:'LPD = installed wattage / floor area (W/m²)\nEUI = annual energy consumption / floor area (kWh/m²/year)\nBaseline EUI (ECBC office): ~150 kWh/m²/year\nECBC compliance: proposed EUI ≤ baseline EUI\nEnergy saving: (baseline - proposed) / baseline × 100%',
        NEC:'ASHRAE 90.1: energy standard for buildings (US)\nLPD limits: office 0.82 W/sq ft = 8.8 W/m²\nMandatory controls: auto-off within 30 min of no occupancy',
        IEC:'EN 15978: sustainability of construction works\nISO 50001: energy management systems\nISO 52000: energy performance of buildings'
      },
      example:{
        sector:'com',
        given:'10,000 m² office building design. Compare ECBC baseline vs efficient design. Show energy saving.',
        steps:[
          'LIGHTING: Baseline 15 W/m². Efficient LED: 8 W/m² with occupancy + daylight sensors.',
          'Lighting saving: (15-8) × 10,000 = 70,000 W = 70 kW installed. Annual: 70kW × 8h × 250days = 140,000 kWh',
          'HVAC: Baseline chiller COP 4.0. Efficient chiller COP 5.5. Load = 300 TR.',
          'HVAC saving: 300 × 3.517 × (1/4.0 - 1/5.5) = 300 × 3.517 × 0.0682 = 71.9 kW. Annual: 450,000 kWh',
          'VFD on AHU fans: 30% energy saving on 100 kW fans. Annual: 100×0.3×8×250 = 60,000 kWh',
          'Solar: 200 kWp rooftop. Annual: 200×0.82×5.0×365 = 298,900 kWh',
          'Total saving: 140,000 + 450,000 + 60,000 + 298,900 = 948,900 kWh/year',
          'Annual cost saving: 948,900 × ₹8 = ₹75.9 lakhs/year'
        ],
        result:'Annual energy saving: 948,900 kWh = ₹75.9 lakhs. EUI improvement: ~42%. Likely qualifies for 3–4 LEED EA credits. ECBC compliance achieved (>20% better than baseline).'
      },
      rot:["ECBC compliance quick check: LPD ≤ 10 W/m² (office), VFDs on all fans/pumps > 5.5 kW, APFC if demand > 100 kVA, occupancy sensors in offices. These 4 measures together typically achieve 25–35% energy saving.","Green building ROI: LPD LED + VFDs + APFC typically saves ₹500–800/m²/year in energy costs. On 10,000 m² building: ₹50–80 lakhs/year. Incremental cost of green design: ₹200–500/m². Payback: 3–12 months."],
      mistakes:["Designing to minimum ECBC compliance without optimising — meeting minimum standard still leaves 15–30% additional savings on the table","Specifying green design features without sub-metering to verify performance — a green building without monitoring cannot prove its performance"],
      interviewQs:["What is the Energy Conservation Building Code (ECBC) and to which buildings does it apply?","How does LPD compliance affect lighting fixture selection?","What is EUI and what is a typical target for an ECBC-compliant office?"],
      siteTips:["Engage with the ECBC compliance software (eQUEST or EnergyPlus) during schematic design, not at the end. Early-stage energy modelling costs ₹1–2 lakhs but enables design optimisation worth ₹50+ lakhs in annual energy savings."],
      diagram:{type:'schematic', svgId:'green-building-diagram'}
    },
    advanced:{
      theory:"ASHRAE 90.1 COMPLIANCE PATH:\nPrescriptive: meet each individual requirement (LPD, equipment efficiency, controls)\nPerformance: energy model shows proposed design ≤ baseline (more flexible)\nTrade-offs: better lighting allows slightly worse HVAC — total energy budget approach\n\nLEED EA CREDIT CALCULATION:\nBEF (Building Energy Factor) = proposed EUI / baseline EUI\nPercentage improvement = (1 - BEF) × 100%\nLEED credits: 12% improvement = 1 credit, up to 50% = maximum credits\n\nNET ZERO ENERGY BUILDINGS:\nNZEB: annual energy consumption ≤ annual on-site renewable generation\nElectrical designer must: minimise loads (ECBC compliance), maximise solar (rooftop + façade PV)\nNet zero operations: zero net energy annually. Net zero carbon: zero operational carbon.\n\nBUILDING INTEGRATED PHOTOVOLTAICS (BIPV):\nSolar integrated into building elements: façade, skylights, roofing.\nAdditional area for generation beyond rooftop.\nDouble function: building envelope + energy generation.\n\nSMARTER ENERGY MANAGEMENT:\nBMS (Building Management System) integrates: HVAC, lighting, access control.\nDemand response: BMS automatically reduces load during grid events.\nDigital twin: real-time model of building energy for predictive optimisation.",
      formula:{
        IS:'EUI_proposed ≤ EUI_baseline (ECBC/ASHRAE 90.1)\nLEED % improvement = (EUI_base - EUI_prop)/EUI_base × 100\nNZEB: annual kWh_generation ≥ annual kWh_consumption\nSolar: kWh = Parray × PR × H × 365',
        NEC:'ASHRAE 90.1: full compliance path options (Prescriptive, Appendix G Performance)\nNECB (National Energy Code for Buildings, Canada)\nIECC (International Energy Conservation Code, USA)',
        IEC:'ISO 52000: energy performance of buildings in kWh/m²/year\nEN 15978: carbon assessment\nEU EPBD: Energy Performance of Buildings Directive\nNZEB definition per local legislation'
      },
      example:{
        sector:'dc',
        given:'1 MW data centre targeting PUE 1.2 and net zero carbon. What measures and what solar capacity?',
        steps:[
          'Total facility: 1000 × 1.2 = 1200 kW',
          'Annual consumption: 1200 × 8760 = 10,512,000 kWh/year = 10.5 GWh',
          'For net zero carbon: need 10.5 GWh renewable generation (or RECs)',
          'On-site solar (rooftop limited): assume 500 kWp → 500×0.82×5.0×365 = 747,500 kWh/year',
          'Gap: 10,512,000 - 747,500 = 9,764,500 kWh/year needs green power purchase (PPA) or offsite solar',
          'Offsite solar PPA: 10 MWp plant → 10,000×0.82×5.0×365 = 14.98 GWh → adequate',
          'PUE 1.2 measures: economizer cooling, high-efficiency UPS (98%), 55°C server inlet (ASHRAE A4)',
          'Carbon: grid factor India ~0.7 kgCO2/kWh → offset by renewable PPA'
        ],
        result:'Net zero carbon via: 500 kWp on-site solar + 10 MWp offsite PPA. PUE 1.2 from high-efficiency cooling and UPS. Certify carbon offsets. Remaining operational carbon = 0 net.'
      },
      rot:["Net zero data centre: on-site solar alone rarely suffices — a 1 MW data centre needs ~10 MWp solar. Offsite PPA (Power Purchase Agreement) is the practical route for net zero carbon data centres."],
      mistakes:["Counting RECs (Renewable Energy Certificates) as equivalent to net zero — RECs are an accounting tool, not the same as on-site renewable generation. Some certifications (e.g. LEED Zero) require actual metered matching.","Designing a green building without commissioning (Cx) verification — 20–30% of energy savings are lost due to commissioning deficiencies in equipment settings, controls calibration, and system integration"],
      interviewQs:["What is the difference between net zero energy and net zero carbon?","How does the performance compliance path in ASHRAE 90.1 differ from the prescriptive path?","What are RECs and why are they controversial in net zero claims?"],
      siteTips:["After commissioning, conduct a Post-Occupancy Evaluation (POE) at 6 and 12 months. Compare measured EUI with modelled EUI. Discrepancy >10% indicates a commissioning or occupancy problem. Most buildings use 15–25% more energy than the model predicted due to occupancy changes and controls misconfiguration."],
      diagram:{type:'schematic', svgId:'green-adv-diagram'}
    },
    sectorNotes:{res:'ECBC not mandatory for residential. BEE star rating for ACs, geysers, refrigerators. Green building: IGBC residential rating.',com:'ECBC mandatory for new commercial >100m². LPD, VFDs, controls, APFC, sub-metering all required.',dc:'PUE is the key metric. Uptime Institute Green Grid (TGG) provides PUE benchmarking. LEED for data centres.',ind:'BEE Perform Achieve Trade (PAT): large energy consumers must reduce specific energy consumption annually.',og:'Offshore: fuel consumption per ton of product is the equivalent metric. Electrification (replacing diesel with grid/solar) is a major decarbonisation lever.',hc:'GRIHA/IGBC for hospitals. Minimum 15% energy saving mandatory for government hospitals. Sub-metering required.'},
    standards:{
      IS:[{clause:'ECBC 2017',title:'Energy Conservation Building Code',note:'Mandatory for new commercial buildings — LPD, VFDs, controls, PF'},{clause:'BEE Star Rating',title:'Bureau of Energy Efficiency star ratings',note:'Appliance and building energy performance standards'}],
      NEC:[{clause:'ASHRAE 90.1',title:'Energy standard for buildings',note:'LPD, equipment efficiency, and controls requirements for the USA'},{clause:'IECC',title:'International Energy Conservation Code',note:'Adopted by many US states — compliance required for permits'}],
      IEC:[{clause:'ISO 50001:2018',title:'Energy management systems',note:'PDCA framework for continuous energy improvement'},{clause:'ISO 52000-1',title:'Energy performance of buildings',note:'Methodology for calculating and rating building energy performance'}]
    },
    quiz:[]
  },

  /* ── 11. ETAP / SIMULATION ── */
  {
    id:'etap-intro', level:4, icon:'💻', title:'ETAP / Simulation Introduction',
    desc:'Power system simulation workflow — load flow, short circuit, relay coordination, and arc flash in ETAP.',
    sectors:['ind','com','dc'], green:false, calculator:null,
    beginner:{
      intro:"ETAP (Electrical Transient Analysis Program) and similar tools (SKM, PowerWorld, DIgSILENT) allow engineers to simulate entire power systems on a computer — calculating load flow, fault current, relay settings, and arc flash automatically. Manual calculations for large systems would take weeks; simulation takes hours.",
      whyMatters:[
        {icon:'💻', text:'Large industrial projects require simulation — manual calculation of 50+ protection relays is not feasible'},
        {icon:'🛡️', text:'ETAP validates relay coordination and arc flash study — errors in software are caught before they occur on site'},
        {icon:'📋', text:'Simulation reports are contractual deliverables for HV utility connections and industrial substations'}
      ],
      theory:"ETAP STUDY WORKFLOW:\n1. ONE-LINE DIAGRAM: Draw system in ETAP (import from CAD or build in software)\n2. EQUIPMENT DATA: Enter transformer ratings, cable sizes, motor data, relay types\n3. LOAD FLOW: Solve for normal operating voltages, currents, and power flows\n4. SHORT CIRCUIT: Calculate 3-phase and single-phase fault currents at every bus\n5. PROTECTION COORDINATION: Plot TCC curves, verify grading, set relay parameters\n6. ARC FLASH: Calculate incident energy at every bus, generate arc flash labels\n7. MOTOR STARTING: Simulate voltage dip during motor starting\n8. HARMONIC ANALYSIS: Calculate THD at every bus\n9. REPORT: Generate coordination study, arc flash study, relay setting sheets\n\nKEY ETAP MODULES:\nLoad Flow (LF): Newton-Raphson method, solves bus voltages and branch currents\nShort Circuit (SC): IEC 60909 or ANSI method\nProtection Coordination (SA): plots TCC curves, checks selectivity automatically\nArc Flash (AF): IEEE 1584:2018 calculation\nMotor Acceleration (MA): transient simulation of motor starting\nTransient Stability (TS): dynamic simulation of generators",
      formula:{
        IS:'Load flow: P + jQ = V × I* (complex power at each bus)\nNewton-Raphson: solve [J][Δδ, ΔV] = [ΔP, ΔQ] iteratively\nShort circuit: IEC 60909 method in ETAP\nAll formulas automated — input data, verify results',
        NEC:'ANSI/IEEE load flow method: Gauss-Seidel or Newton-Raphson\nSKM PowerTools: common NEC jurisdiction software\nETAP also supports ANSI methods',
        IEC:'IEC 60909: implemented in ETAP\nIEC 60255 relay curves: built-in library\nIEEE 1584:2018 arc flash: automatic calculation'
      },
      example:{
        sector:'ind',
        given:'Industrial plant: 11kV grid infeed, 3 × 1000 kVA transformers, 15 MCCs, 80 motors. Describe ETAP workflow.',
        steps:[
          '1. Build one-line: import substation SLD from AutoCAD. Add each MCC as a bus.',
          '2. Equipment data: enter each transformer (kVA, Z%, vector group), cable (length, size), motor (kW, PF, Xd")',
          '3. Load flow: run. Check all bus voltages ≥ 95% nominal. Check cable loading ≤ rated ampacity.',
          '4. Short circuit: run IEC 60909. Record Isc at each bus. Verify all switchgear rated above Isc.',
          '5. Protection: add relay model to each CB. Set pickup and TCC curves. Run coordination check.',
          '6. Arc flash: run IEEE 1584. ETAP generates incident energy at each bus and prints labels.',
          '7. Motor starting: simulate largest motor (e.g. 500 kW). Verify voltage ≥ 85% during start.',
          '8. Report: export relay settings sheets, arc flash report, coordination study. Submit to client.'
        ],
        result:'ETAP reduces 15 manual coordination studies (1 week each) to 3 hours of software work and 2 hours of review. Error rate drops from ~15% manual to <2% automated. Reports auto-generated for submission.'
      },
      rot:["ETAP efficiency: if a project has more than 10 protection relays, ETAP or equivalent software is more efficient than manual TCC plotting. The break-even is about 10 relays — below that, spreadsheet + hand plotting is acceptable."],
      mistakes:["Entering incorrect cable length or cross-section — small data entry errors cause wrong impedance, wrong fault current, wrong relay settings. Always cross-check software input against cable schedule.","Accepting software results without engineering review — ETAP gives answers, not engineering judgement. A 5 kA fault at a bus with a 10 kA breaker is an error, and software will happily show it without flagging the problem."],
      interviewQs:["What is the Newton-Raphson load flow method?","What data is needed to build an ETAP model of an industrial substation?","How does ETAP generate arc flash labels?"],
      siteTips:["When you receive a software-generated coordination study or arc flash report, spot-check 3–5 relay settings and 3–5 arc flash values manually (using the formulas). If your manual checks agree within 5%, the model is likely correct. If not, find the discrepancy before approving the report."],
      diagram:{type:'schematic', svgId:'etap-diagram'}
    },
    advanced:{
      theory:"DYNAMIC SIMULATION:\nTransient stability: studies how generators respond to faults and switching.\nSimulates first few seconds after a fault — do generators stay synchronised?\nEssential for: generator-dominated systems (offshore, island grids), large industrial plants.\n\nARCFLASH AUTOMATION IN ETAP:\nEach bus automatically receives: Ibf, Ia, t (from protection settings), E calculation.\nSensitivity analysis: what if relay settings change by ±10%? How does E change?\nAuto-label generation: creates arc flash labels in correct NFPA 70E format.\n\nHARMONIC ANALYSIS IN ETAP:\nFrequency scan: plots system impedance vs frequency — identifies resonant frequencies.\nHarmonic load flow: non-linear load models inject harmonic currents, software propagates through system.\nTHD at every bus automatically calculated.\nFilter design: ETAP can size passive filters to meet IEEE 519 limits.\n\nETAP REAL-TIME (iETAP):\nConnects to SCADA/DCS for real-time power system monitoring.\nLive model: updates as system configuration changes (CB open/close, load changes).\nRe-runs load flow in real time — operators see voltage and loading live.\nUsed in large industrial plants and utilities.",
      formula:{
        IS:'Transient stability: swing equation d²δ/dt² = π f₀/H × (Pm − Pe)\nH = inertia constant (MW·s/MVA)\nFrequency scan: Z(f) = R + j2πfL − j/(2πfC)\nResonant frequency: f_r = 1/(2π√LC)',
        NEC:'IEEE 399 (Brown Book): industrial power system analysis\nIEEE 1110: guide for synchronous generator modelling\nETAP/SKM: most common NEC jurisdiction tools',
        IEC:'IEC 60909: automated in ETAP\nIEEE 1584:2018: automated arc flash in ETAP\nIEC 61000-3-6: harmonic simulation'
      },
      example:{
        sector:'og',
        given:'Offshore platform: 3 × 5 MVA generators (island system). Largest motor: 3 MW. Simulate motor starting.',
        steps:[
          '1. ETAP Motor Acceleration study: generator model with Xd, Xd", Xq, AVR and governor data',
          '2. Motor model: 3 MW, Xd"=0.20 pu, starting curve from motor manufacturer',
          '3. Pre-start: 2 generators online, 1 on standby. Bus loading: 7 MW.',
          '4. Run simulation: DOL start of 3 MW motor at t=0',
          '5. Results: Bus voltage dips from 11kV to 8.9kV (81%) for 4.2 seconds',
          '6. Target: ≥ 85% voltage during start',
          '7. 81% < 85% → FAIL. Solution: start with 3rd generator online (total 15 MVA available)',
          '8. With 3 generators: voltage dip to 9.7kV (88%) ✓'
        ],
        result:'Motor starting with 2 generators: voltage dips to 81% — below 85% limit. Solution: start 3rd generator before motor start. Update operating procedure: 3 generators online before large motor start.'
      },
      rot:["ETAP validation: always verify software results at one or two buses manually using per-unit method. If the manual check agrees within 5%, trust the software. If not, find the error — it's usually a data entry problem."],
      mistakes:["Using default ETAP equipment library data without entering actual nameplate values — default transformer impedance may be 5% when actual is 4.5%, giving significantly different fault currents","Neglecting AVR (Automatic Voltage Regulator) model in generator studies — AVR significantly affects voltage recovery after fault"],
      interviewQs:["What is transient stability and when must it be studied?","What does a frequency scan in ETAP reveal?","How does iETAP differ from standard ETAP?"],
      siteTips:["ETAP licence is expensive — many firms use it only for large projects. For smaller projects (< 20 buses, < 15 relays), a well-structured Excel spreadsheet with per-unit calculations and TCC plotting in published software is acceptable. Know both approaches."],
      diagram:{type:'schematic', svgId:'etap-adv-diagram'}
    },
    sectorNotes:{res:'Not required.',com:'Used for HV connected commercial buildings (>1 MVA). Short circuit, arc flash, relay coordination study outputs required for utility connection approval.',dc:'Essential: fault level, arc flash, relay coordination, battery simulation. ETAP or DIgSILENT for large data centres.',ind:'Standard tool for industrial electrical engineering. All major studies conducted in ETAP. SKM also common in USA.',og:'Mandatory for offshore. Transient stability critical (island system). Generator parallel/sequencing studies.',hc:'Short circuit + arc flash study for hospital HV supply. ETAP used for major healthcare infrastructure projects.'},
    standards:{
      IS:[{clause:'IEEE 141, 242, 399 (referenced in India)',title:'IEEE colour books for power system studies',note:'Load flow, protection, analysis methodology'},{clause:'IS 13234',title:'Short circuit — basis for ETAP input',note:'Fault current calculation underlying ETAP SC module'}],
      NEC:[{clause:'IEEE 141 (Red Book)',title:'Recommended practice for electric power distribution',note:'Industrial load flow and fault analysis'},{clause:'IEEE 399 (Brown Book)',title:'Recommended practice for industrial analysis',note:'Complete industrial power system analysis methodology'}],
      IEC:[{clause:'IEC 60909',title:'Short circuit — basis for ETAP IEC module',note:'IEC method implemented in ETAP'},{clause:'IEC 61850',title:'Substation automation',note:'ETAP connects to SCADA via IEC 61850 in iETAP'}]
    },
    quiz:[]
  },

  /* ── 12. SMART LOAD MANAGEMENT ── */
  {
    id:'smart-load-mgmt', level:4, icon:'🧠', title:'Smart Load Management',
    desc:'Demand response, load shedding schemes, smart scheduling, IoT integration, and building automation.',
    sectors:['res','com','ind','dc'], green:true, calculator:null,
    beginner:{
      intro:"Smart load management uses real-time data and automation to optimise electrical consumption — reducing peak demand, shifting loads to off-peak periods, integrating renewable generation, and responding to grid signals. It transforms a building from a passive energy consumer into an active grid participant.",
      whyMatters:[
        {icon:'🧠', text:'Smart management can reduce peak demand by 15–30% without affecting operations or comfort'},
        {icon:'💰', text:'Peak demand charges are 30–50% of commercial electricity bills — managing them saves significant money'},
        {icon:'🌱', text:'Smart buildings can participate in demand response — earning revenue from grid services'}
      ],
      theory:"LOAD MANAGEMENT HIERARCHY:\nLevel 1 — Manual: operators respond to high demand manually (slow, unreliable)\nLevel 2 — Time-scheduled: loads shed at specific times (simple, inflexible)\nLevel 3 — Demand-controlled: BMS monitors kW and sheds loads when approaching setpoint (effective)\nLevel 4 — Predictive: ML models predict demand 15–60 min ahead and pre-emptively act (most efficient)\nLevel 5 — Grid-responsive: building responds to utility signals (ADR) and earns revenue\n\nLOAD SHEDDING PRIORITY:\n1. First shed: non-essential lighting in unoccupied areas\n2. Then: pre-cool HVAC setpoint raise +2°C\n3. Then: pause EV chargers (if smart chargers)\n4. Then: dim office lighting to 70%\n5. Last resort: defer non-critical process loads\nNEVER shed: life safety, critical IT, fire protection\n\nDEMAND RESPONSE PROGRAMS (India):\nCEA Demand Response Programme: utilities incentivise load reduction during peak hours.\nTOD (Time of Day) tariff: higher rates during peak → incentivise shift to off-peak.\nRES (Renewable Energy Scheduling): respond to solar/wind availability.\nPayment: ₹ per kW reduced during DR event (varies by utility).",
      formula:{
        IS:'Peak demand setpoint: set 5–10% below contracted MD to avoid MD spike charges\nLoad shedding order: priority list × available shed capacity\nDR revenue: DR payment (₹/kW) × hours × kW shed\nOpenADR 2.0: standard protocol for demand response communication',
        NEC:'ASHRAE 90.1: automatic shut-off controls mandatory\nOpenADR 2.0: DR protocol\nIEEE 2030.5: smart energy profile for grid interaction\nDR revenue: utility-specific',
        IEC:'IEC 61968: utility IT systems\nIEC 62746: consumer interface to smart grid\nIEC 61850: substation automation (for DR via HV connection)\nIEEE 2030.5: smart energy profile'
      },
      example:{
        sector:'com',
        given:'Commercial office 5000 m², current peak MD = 450 kW. Contracted MD = 400 kW. Excess MD charge: ₹400/kVA/month. Design demand management.',
        steps:[
          'Current problem: MD exceeds 400 kW contract → extra charges on 50 kW excess',
          'MD charge saving: 50 kVA × ₹400 = ₹20,000/month = ₹2.4 lakhs/year',
          'Implement demand management:',
          '1. Install demand controller: setpoint at 380 kW (5% below 400 kW contract)',
          '2. Priority 1 shed: 8 × 1.5 kW unoccupied zone lighting = 12 kW',
          '3. Priority 2 shed: chiller setpoint +2°C (thermal mass absorbs) = 15 kW',
          '4. Priority 3 shed: pause 4 × 7.4 kW EV chargers = 29.6 kW',
          'Total available shed: 56.6 kW > 50 kW required. ✓',
          'Investment: demand controller + smart charger interface = ₹3–5 lakhs',
          'Payback: ₹5 lakhs / ₹2.4 lakhs/year = 2.1 years'
        ],
        result:'Demand controller with 3-tier load shedding. Shed capacity: 56.6 kW > 50 kW required. MD held below 400 kW. Saving ₹2.4 lakhs/year. Payback 2.1 years.'
      },
      rot:["Demand management payback: typically 1–3 years. Fastest payback is always in buildings where MD is chronically 5–15% above the contracted level. First, identify what is causing the peak — then control it."],
      mistakes:["Setting demand management shed priority to include critical processes — a shed sequence that turns off a manufacturing line to save demand charges causes more loss than the saving","Not testing demand management before relying on it — a controller that has never been tested in real conditions will fail when needed most"],
      interviewQs:["What is OpenADR and how does it enable demand response?","How does a demand controller reduce peak demand?","What loads should never be included in an automatic load shedding scheme?"],
      siteTips:["Simulate demand management response annually: manually trigger each shed step and verify the load reduction is as expected. Systems change — a shed step that previously removed 15 kW may now only remove 5 kW because the circuit has changed. Keep the shed table current."],
      diagram:{type:'schematic', svgId:'smart-load-diagram'}
    },
    advanced:{
      theory:"BUILDING ENERGY MANAGEMENT SYSTEM (BEMS):\nCentral brain of smart load management.\nIntegrates: HVAC BMS + lighting control + power monitoring + access control.\nCommunication protocols: BACnet (HVAC), Modbus (energy meters), DALI (lighting), LonWorks (legacy).\nCloud-based BEMS: remote monitoring, benchmarking, AI-driven optimisation.\n\nARTIFICIAL INTELLIGENCE IN ENERGY MANAGEMENT:\nMachine learning: trains on historical data (weather, occupancy, tariff) to predict optimal settings.\nReinforcement learning: continuously optimises decisions based on real-world feedback.\nApplications: predictive pre-cooling, optimal battery charge/discharge scheduling, fault prediction.\nSavings: 10–20% additional vs rule-based control.\n\nMICROGRID CONTROL:\nA microgrid is a local energy system that can operate independently of the grid.\nComponents: solar PV, battery storage, generators, controllable loads.\nEnergy Management System (EMS): optimises dispatch of each source.\nGrid-connected mode: maximise self-consumption, minimise import.\nIsland mode: generators + BESS supply all loads. Load shedding if capacity exceeded.\n\nBLOCKCHAIN FOR ENERGY:\nP2P energy trading: solar generator sells excess directly to neighbour.\nRECs (Renewable Energy Certificates): blockchain-verified, tamper-proof tracking.\nGreen tariff verification: proof that specific kWh came from renewable source.",
      formula:{
        IS:'Pre-cooling benefit: ΔT × m × Cp = energy stored in thermal mass\nBattery optimisation: min(E_cost) subject to SoC constraints\nML prediction: load(t) = f(weather(t), occupancy(t), time(t), historical)\nDR revenue: Σ(kW_shed × ₹/kW × hours)',
        NEC:'ASHRAE Guideline 36: HVAC control sequences for energy efficiency\nOpenADR 2.0b: demand response automation server protocol\nSEP 2.0 (Smart Energy Profile): EV and BESS integration',
        IEC:'IEC 61850: power system communication (substation)\nIEC 62746: system interface between customer energy management and grid\nISO 50001: energy management system framework\nIEC 61968: application integration for utilities'
      },
      example:{
        sector:'dc',
        given:'Data centre 2 MW: solar 500 kWp, BESS 800 kWh, smart UPS, grid connection. Describe microgrid EMS strategy.',
        steps:[
          'EMS monitors: IT load (kW), solar generation (kW), grid price (TOD), BESS SoC',
          'Morning peak tariff (06:00–10:00): discharge BESS to reduce grid import',
          'Midday solar surplus (10:00–16:00): charge BESS with excess solar (above IT load)',
          'Evening peak (17:00–21:00): discharge BESS again, maximise solar self-consumption',
          'Night off-peak (22:00–06:00): let BESS partially charge from cheap grid power',
          'Monthly cycle: BESS fully cycles 1× per day = 30 cycles/month = 360/year',
          'Annual grid savings (arbitrage + demand): estimated ₹60–80 lakhs/year for this configuration',
          'DR participation: when utility sends OpenADR signal, EMS reduces cooling setpoint by 2°C',
          'DR capacity: 200 kW available for 2 hours = DR contract value ≈ ₹15–20 lakhs/year'
        ],
        result:'Microgrid EMS strategy: solar self-consumption priority → BESS TOD arbitrage → DR participation. Annual value: ₹75–100 lakhs. Total data centre energy cost reduction: 15–20%.'
      },
      rot:["Microgrid EMS value stack: rank your value streams. Typically: (1) self-consumption (highest ₹/kWh), (2) demand charge reduction, (3) TOD arbitrage, (4) DR revenue. Optimise in this order."],
      mistakes:["Configuring BESS only for peak shaving when solar self-consumption would give 2× the value","Treating AI-based energy management as a set-and-forget system — models drift over time as building usage patterns change. Retrain models quarterly."],
      interviewQs:["What is a microgrid and how does it differ from a standard building electrical system?","How does machine learning improve energy management compared to rule-based control?","What is the role of OpenADR in demand response automation?"],
      siteTips:["When implementing smart load management with AI, start with simple rule-based control and collect 6–12 months of data before enabling ML optimisation. The ML model needs sufficient historical data to learn reliable patterns — starting with ML on day 1 without history gives poor results."],
      diagram:{type:'schematic', svgId:'smart-load-adv-diagram'}
    },
    sectorNotes:{res:'Smart meters + EV smart charging + solar self-consumption = residential smart energy. Home energy management systems (HEMS) emerging.',com:'BMS with demand management. OpenADR for DR participation. TOD tariff optimisation. ECBC requires controls.',dc:'Advanced EMS mandatory for PUE optimisation. ML-based predictive control. DR revenue stream significant.',ind:'Factory energy management (ISO 50001). Production scheduling linked to tariff. VFD speed optimisation. DR for large consumers.',og:'Offshore: generator load optimisation (reduce running hours). Onshore: grid DR participation possible.',hc:'Conservative approach — patient safety always first. Shedding must never affect clinical operations. Smart management for non-clinical areas only.'},
    standards:{
      IS:[{clause:'CEA Demand Response Guidelines',title:'Demand response programme framework',note:'Indian DR programme structure and payment mechanisms'},{clause:'IS 16653 + smart charging',title:'BESS + EV smart management',note:'Battery storage and EV charging coordination standards'}],
      NEC:[{clause:'OpenADR 2.0',title:'Open automated demand response',note:'Protocol for utility-to-building demand response automation'},{clause:'ASHRAE Guideline 36',title:'High performance sequences of operation',note:'Advanced HVAC control for energy optimisation'}],
      IEC:[{clause:'IEC 62746-10-3',title:'System interface for customer energy management',note:'Smart grid to building communication interface'},{clause:'ISO 50001:2018',title:'Energy management systems',note:'Framework for systematic energy optimisation'}]
    },
    quiz:[]
  },

  /* ── HV NEUTRAL EARTHING ── */
  {
    id:'hv-neutral-earthing', level:4, icon:'⚡', title:'HV Neutral Earthing Methods',
    desc:'Solid, resistance, reactance, and Petersen coil neutral earthing — fault current limiting and system protection.',
    tags:['Neutral Earthing','NGR','NER','Petersen Coil','Solid Earthing','Resistance Earthing'],
    sectors:['ind','og','dc'], green:false, calculator:null,
    beginner:{
      intro:"How the generator or transformer neutral is connected to earth fundamentally determines fault behaviour — how much current flows, whether arcing faults self-extinguish, and what protection settings are needed. This is a system-level design decision that affects every downstream device.",
      whyMatters:[{icon:'⚡',text:'Solid earthing drives 10-40 kA through a single-line-to-ground fault — enormous arc flash energy. Resistance earthing limits this to 5-400A.'},{icon:'🔧',text:'Wrong neutral earthing method can cause transient overvoltages (2.7× line voltage) that destroy insulation'},{icon:'💰',text:'High-resistance grounding allows 4-8 hours of continued operation after first fault — prevents unplanned shutdowns'}],
      theory:"NEUTRAL EARTHING METHODS:\n\n1. SOLIDLY EARTHED:\nNeutral connected directly to earth. No limiting impedance.\nFault current = very high (10-40 kA). Fast relay operation.\nAdvantage: low transient overvoltages (healthy phases stay at phase voltage).\nDisadvantage: severe arc flash hazard, high fault damage.\nUsed: LV systems (≤1kV) universally, HV only where fast disconnection is acceptable.\n\n2. RESISTANCE EARTHED:\na) Low-resistance earthing (LRG): 100-1000A fault current.\n   Limits fault current while allowing fast relay detection.\n   Used: industrial 6.6kV, 11kV systems.\nb) High-resistance earthing (HRG): 1-10A fault current.\n   First fault: alarm only, system continues. No arc flash.\n   IMD detects and alarms. Maintenance planned.\n   Used: continuous-process plants, offshore, data centres.\n\n3. REACTANCE EARTHED:\nNeutral connected through reactor (inductor).\nTypically limits fault current to full-load current level.\nUsed: large generators to limit stator fault current.\n\n4. PETERSEN COIL (RESONANT EARTHING):\nReactor tuned to system capacitance. At fault, reactive current cancels capacitive current.\nFault current → nearly zero. Arc self-extinguishes.\nUsed: distribution networks (22kV, 33kV rural lines). Very common in Europe.\n\n5. UNEARTHED (ISOLATED):\nNo connection to earth. First fault: no current flows.\nHealthy phase voltages rise to line voltage (√3 × phase) → insulation stress.\nSecond fault: full L-L fault current with no return path control.\nUsed: IT systems (with IMD), some legacy industrial.",
      formula:{IS:'IS 3043 Cl.4: system neutral earthing\nSolid: Zn = 0 → If = Vln / Zloop\nLRG: NGR Ω = Vln / Idesired\nFor 11kV, 400A: R = 6350 / 400 = 15.88Ω\nHRG: R = Vln / Ic (Ic = system capacitive charging current)\nPetersen: XL = 1 / (3ωC₀) where C₀ = phase-to-ground capacitance',NEC:'NEC 250.36: high-impedance grounded neutral systems\nNEC 250.186: grounding of separately derived systems >1kV\nIEEE 142 (Green Book): grounding of industrial power systems\nIEEE C62.92: neutral grounding in utility systems\nResistance: ANSI/IEEE 32 — neutral grounding resistor standard',IEC:'IEC 60364-4-44 Cl.442: protection against overvoltages\nIEC 60076-3: transformer neutral bushings\nIEC 61936-1: power installations >1kV\nIEC TR 60071-4: insulation coordination for HV systems\nPetersen coil: IEC 60076-6 (reactor standards)'},
      example:{sector:'ind',given:'New industrial plant with 11kV/415V distribution. Two 11kV feeders from utility. Select neutral earthing method for 11kV bus.',steps:['System: 11kV, 3 feeders, total cable length ~5km','System capacitive current (Ic): Ic = 3ωC₀V = ~12A (estimated from cable capacitance)','Options: solid, LRG, or HRG','Plant has continuous process — shutdown cost = ₹50 lakh/hour','HRG selected: fault current limited to ≤10A','NGR resistance: R = Vln / Ifault = 6350 / 10 = 635Ω','NGR power rating: P = Ifault² × R = 100 × 635 = 63.5 kW','NGR duty: 10 seconds (intermittent, not continuous)','Ground fault detection: core-balance CT on each feeder + dedicated relay','First fault: alarm only → locate and isolate during planned shutdown','Protection setting: stage 1 alarm at 5A, stage 2 trip at 20A (backup for second fault)'],result:'High-resistance grounding: 635Ω NGR, 10A ground fault limit. First fault = alarm + continued operation. Estimated annual savings from avoided shutdowns: ₹2 crore.'},
      rot:["Below 1kV: always solidly earthed. 3.3-11kV industrial: resistance earthing (LRG for general, HRG for continuous process). 33kV+ distribution: Petersen coil (Europe) or solid (India/US). Generators: reactance or HRG."],
      mistakes:["Using HRG without installing insulation monitoring and ground fault relays — HRG only works safely if faults are detected and located promptly","Sizing NGR for continuous duty when it only needs 10-second duty — expensive overdesign. Check the ground fault relay trip time.","Forgetting that HRG raises healthy phase voltages to line voltage during fault — all cable insulation must be rated for line voltage, not phase voltage"],
      interviewQs:["What is the difference between low-resistance and high-resistance grounding?","Why does HRG require cable insulation rated for line voltage?","How does a Petersen coil extinguish ground faults?"],
      siteTips:["When commissioning an HRG system, perform a staged ground fault test: intentionally fault one phase through a test resistor and verify the IMD alarms, the CB does NOT trip, and the healthy phase voltages rise to √3× phase voltage. Many HRG systems are installed but never tested — they discover the first real fault."],
      diagram:{type:'schematic',svgId:'hv-earthing-diagram'}
    },
    advanced:{
      theory:"NGR SIZING DETAILED:\nFor HRG: R = Vln / Ic → this makes resistive current = capacitive current → limits transient overvoltages to 2.5× (without NGR, can reach 5×).\nIf R < Vln/Ic: system is LRG (higher fault current, faster detection).\nIf R > Vln/Ic: transient overvoltages increase → insulation stress.\n\nPETERSEN COIL TUNING:\nResonance: XL = 1/(3ωC₀)\nAt resonance: fault current = 0 (theoretically). Arc extinguishes.\nPractically: ~5-10% detuning to avoid hunting.\nAutomatic tuning: modern coils use plunger core with servo control.\nFault detection difficulty: current is near zero → requires special watt-metric relays.\n\nGENERATOR NEUTRAL EARTHING:\nLarge generators (>50MW): HRG through distribution transformer.\nPrimary: 11kV/240V or 6.6kV/240V transformer.\nSecondary: resistor connected across secondary (cheaper, lower voltage).\nEquivalent resistance referred to primary: R_eq = R_sec × (Vpri/Vsec)²\nThis limits generator stator fault current to 5-15A → minimal core damage.\n\nARC FLASH IMPACT:\nSolid earthing (11kV): ground fault arc energy = enormous. Full PPE required.\nLRG (400A): arc energy reduced proportionally. Cat 3-4 PPE.\nHRG (10A): arc cannot sustain. Arc flash hazard essentially eliminated for ground faults.\nNote: HRG does NOT reduce phase-to-phase arc flash — only ground faults.",
      formula:{IS:'NGR impedance: Z = Vln / Iground\nNGR kVA: S = Ifault² × Z\nNGR time rating: 10s or 60s per IS 3043\nGenerator neutral: R_eq = R_secondary × (N₁/N₂)²\nInsulation requirement: all cables rated for Vll (not Vln)',NEC:'IEEE 142 Cl.1.4: ground fault current calculations\nIEEE C62.92.3: neutral grounding of MV systems\nAnti-resonance check: Xc ≠ 3XL (avoid ferroresonance)\nNGR continuous rating (IEEE 32): 10s, 60s, or extended time\nGenerator grounding: IEEE C62.92.2',IEC:'IEC 61936-1 Cl.9: earthing of installations >1kV\nIEC 60076-6: reactors including Petersen coils\nPetersen tuning: v = (XL - Xc) / Xc (detuning factor, typically 5-10%)\nFault location during compensated operation: IEC 60255 watt-metric relay\nNeutral voltage displacement relay: IEC 60255-121'},
      example:{sector:'og',given:'Offshore platform: 3 × 5MW gas turbine generators, 11kV bus. Design neutral earthing scheme.',steps:['Generators: 11kV, 5MW, PF 0.85, FLC = 308A each','Cable system capacitive current: Ic ≈ 15A (short cable runs offshore)','Decision: HRG — continuous operation essential (no utility backup)','Each generator: NGR through neutral grounding transformer','Transformer: 11kV/240V, 20kVA, single-phase','Secondary resistor: R = 240² / (6350 × 10) = 0.907Ω → select 1Ω','Equivalent primary resistance: 1 × (11000/240)² / 3 = ~700Ω','Ground fault current: Vln / 700 = 6350/700 = 9.1A ✓','Ground fault detection: core-balance CT on each feeder, 59N relay on neutral','Alarm at 5A (first fault), trip at 15A (second fault or backup)','All 11kV cables: rated for 11kV L-L (not 6.35kV L-N)'],result:'HRG through grounding transformer for each generator. Ground fault limited to 9.1A. First fault = alarm + continued generation. All cables rated for full line voltage.'},
      rot:["Offshore rule: HRG is non-negotiable for generator neutral. You cannot shut down power generation on a platform for a single ground fault when the alternative is flaring gas and evacuating personnel."],
      mistakes:["Not checking for ferroresonance — if system capacitance and NGR/transformer impedance form a resonant circuit, dangerous overvoltages can occur. Always perform anti-resonance check","Applying HRG to systems with long overhead lines — high capacitive current can exceed NGR resistive current, defeating the purpose of HRG. Long-line systems need Petersen coil"],
      interviewQs:["How do you size a neutral grounding transformer and secondary resistor?","What is the relationship between NGR resistance and system capacitive current?","Why does HRG eliminate arc flash hazard for ground faults?"],
      siteTips:["Every 6 months, verify NGR resistance with an insulation tester (megger) and low-resistance ohmmeter. The most common failure mode is open-circuit NGR — the system becomes solidly earthed through the transformer winding, and the first ground fault drives full short-circuit current. Nobody knows until equipment explodes."],
      diagram:{type:'schematic',svgId:'hv-earthing-adv-diagram'}
    },
    sectorNotes:{ind:'Industrial: LRG (200-400A) for 6.6kV/11kV systems with <5km cable. HRG for continuous processes, semiconductor plants, chemical plants. Solid earthing at LV.',dc:'Data centre HV: HRG for 11kV bus (if applicable). LV: TN-S solidly earthed. Isolated ground bus for IT equipment.',og:'Offshore: HRG mandatory for generators. Subsea cables: may require solid earthing for protection coordination. Onshore terminals: LRG typical for 33kV bus.'},
    standards:{IS:[{clause:'IS 3043 Cl.4',title:'System neutral earthing methods',note:'Indian standard for HV neutral earthing — solid, resistance, reactance'},{clause:'IS 13234',title:'Short circuit current calculation',note:'Ground fault current depends on neutral earthing method'}],NEC:[{clause:'IEEE 142',title:'Grounding of industrial power systems (Green Book)',note:'Comprehensive US reference for all neutral earthing methods'},{clause:'IEEE C62.92',title:'Neutral grounding in utility systems',note:'Application guide for utility-scale neutral earthing'}],IEC:[{clause:'IEC 61936-1',title:'Power installations >1kV AC',note:'Earthing requirements for HV systems'},{clause:'IEC 60076-6',title:'Reactors — Petersen coils',note:'Requirements for resonant earthing reactors'}]},
    quiz:[]
  },

  /* ── CAPACITOR BANK DESIGN ── */
  {
    id:'capacitor-bank', level:4, icon:'⚡', title:'Capacitor Bank & APFC Design',
    desc:'Capacitor bank sizing, switched stages, harmonic filter design, and APFC panel engineering.',
    tags:['Capacitor Bank','APFC','Power Factor','Harmonic Filter','Detuned Reactor','kVAr'],
    sectors:['com','ind','og'], green:true, calculator:null,
    beginner:{
      intro:"Power factor correction reduces electricity bills, frees transformer capacity, and reduces cable losses. A capacitor bank supplies the reactive power (kVAr) locally instead of drawing it from the utility. APFC (Automatic Power Factor Correction) panels switch capacitor stages automatically based on real-time power factor.",
      whyMatters:[{icon:'💰',text:'Poor PF (0.7→0.95) reduces electricity bill by 15-25% through avoided PF penalties and reduced kVA demand'},{icon:'⚡',text:'PF correction from 0.8→0.95 releases ~30% of transformer kVA capacity — often avoiding the need for a larger transformer'},{icon:'🔧',text:'Incorrectly sized capacitor bank can cause harmonic amplification, capacitor failure, and voltage rise — harmful not helpful'}],
      theory:"BASIC SIZING:\nRequired kVAr = P × (tan φ₁ − tan φ₂)\nP = active load (kW)\nφ₁ = arccos(existing PF)\nφ₂ = arccos(target PF)\n\nSTAGE SIZING:\nAPFC panel switches capacitor stages in and out automatically.\nTypical stages: 6, 8, 10, or 12 steps.\nStep ratio: 1:1:1 (equal) or 1:2:2 (binary-weighted) or 1:1:2:2:2.\nSmallest step = required resolution × system kVAr.\nAPFC controller measures PF continuously and switches stages via contactors.\n\nHARMONIC CONSIDERATION:\nCapacitors + system inductance can form a resonant circuit.\nIf resonant frequency matches a harmonic (5th, 7th), current amplification occurs → capacitor failure.\nResonant frequency: fr = fsystem × √(kVAsc / kVArcap)\nIf fr falls near 5th (250Hz) or 7th (350Hz): add detuned reactor.\n\nDETUNED REACTORS:\nSeries reactor with each capacitor stage.\nTypical tuning: 7% (189Hz), 5.67% (210Hz), or 14% (134Hz).\n7% is most common — prevents resonance at 5th harmonic and above.\nDetuned capacitor banks are essentially harmonic-safe.",
      formula:{IS:'IS 13585: shunt capacitor banks for power systems\nQc (kVAr) = P × (tanφ₁ − tanφ₂)\nResonant frequency: fr = f × √(MVAsc / MVArcap)\nCapacitor current: Ic = Qc / (√3 × V)\nCapacitor fuse: 1.65 × Ic per IS 13585',NEC:'IEEE 18 / IEEE 1036: shunt power capacitors\nNEC Art. 460: capacitor installations\nCapacitor conductor: ≥ 135% of rated current (NEC 460.8)\nDischarge resistor: reduce voltage to 50V in 1 minute (NEC 460.6)\nCapacitor can duty: 135% current, 110% voltage, 135% kVAr',IEC:'IEC 60831: self-healing shunt capacitors\nIEC 60871: non-self-healing shunt capacitors (HV)\nIEC 61642: industrial AC networks — harmonic assessment\nCapacitor duty: 1.3× current, 1.1× voltage continuous\nDetuned reactor: IEC 60076-6'},
      example:{sector:'com',given:'500 kW commercial load, existing PF = 0.78, target PF = 0.95. 415V 3-phase system. Design APFC panel.',steps:['Required kVAr = 500 × (tan(arccos 0.78) − tan(arccos 0.95))','tan(arccos 0.78) = 0.802, tan(arccos 0.95) = 0.329','kVAr = 500 × (0.802 − 0.329) = 500 × 0.473 = 236.5 kVAr','Select: 250 kVAr APFC panel (next standard size)','Stage configuration: 10 steps of 25 kVAr each','Or: 1×12.5 + 1×25 + 2×25 + 2×50 + 1×50 = 237.5 kVAr (binary-weighted)','Capacitor current per 25 kVAr step: 25 / (√3 × 0.415) = 34.8A','Contactor: 40A capacitor-duty (LC1-D) per step','APFC controller: Epcos/L&T/Alstom, 8-step, CT input','CT for APFC: Cl.1, 800/5A (at main incomer)','Harmonic check: system Xsc = 10MVA, cap = 0.25MVA → fr = 50 × √(10/0.25) = 316Hz','316Hz is between 5th (250) and 7th (350) → safe without detuned reactor'],result:'250 kVAr APFC panel, 10 × 25 kVAr steps. APFC controller with CT input. No detuned reactors needed (resonant freq safe). Annual savings: ₹15 lakh in PF penalty + reduced demand charge.'},
      rot:["Size the capacitor bank for target PF of 0.95 — not 1.0. Leading PF is penalized equally in many tariffs, and oversized banks cause voltage rise at light load.","Always check harmonic resonance before installing capacitors. If fr falls between 4th and 7th harmonic: mandatory detuned reactors. This check takes 5 minutes and prevents expensive failures."],
      mistakes:["Installing capacitor bank without harmonic assessment — on a system with VFDs and UPS (non-linear loads), resonance at 5th harmonic destroys capacitors within months","Leaving capacitor bank energized at no-load (nights/weekends) — capacitors inject reactive power into grid, causing leading PF and overvoltage","Using general-purpose contactors for capacitor switching — capacitor inrush current is 50-100× steady-state. Must use capacitor-duty contactors with pre-charge resistors"],
      interviewQs:["How do you calculate the kVAr required for PF correction?","What is harmonic resonance and why is it dangerous for capacitor banks?","What is the difference between a detuned and a tuned harmonic filter?"],
      siteTips:["After commissioning an APFC panel, check PF at 3 load conditions: 25%, 50%, and 100%. The APFC controller should step capacitors correctly in all cases. Many panels work perfectly at full load but overshoot (leading PF) at light load because the smallest step is too large."],
      diagram:{type:'schematic',svgId:'capacitor-bank-diagram'}
    },
    advanced:{
      theory:"TUNED HARMONIC FILTERS:\nUnlike detuned reactors (which prevent resonance), tuned filters actively absorb harmonics.\nTuned to specific frequency: 5th (250Hz), 7th (350Hz), 11th (550Hz).\nFilter reactor + capacitor: C and L selected so resonant frequency = target harmonic.\nAt resonance: filter impedance → ~0 → harmonics flow into filter instead of supply.\nMultiple filter branches: C-type, single-tuned, double-tuned, high-pass.\n\nACTIVE HARMONIC FILTERS (AHF):\nElectronic device that injects anti-phase harmonic current.\nMeasures load current harmonics in real-time → generates equal-and-opposite.\nResult: supply sees clean sinusoidal current.\nAdvantage: adapts to changing loads. No resonance risk.\nDisadvantage: expensive (3-5× cost of passive filters).\n\nCAPACITOR BANK PROTECTION:\nOvercurrent: fuse per capacitor unit (HRC, 1.65× rated current).\nOvervoltage: capacitor rated for 1.1× continuous system voltage.\nUnbalance: detection relay for internal fuse failure (neutral current/voltage shift).\nInrush current limiting: pre-insertion resistors, or current-limiting reactor.\nDischarge: residual voltage discharged to <50V within 1 minute (resistor across terminals).\n\nSTEPPED vs THYRISTOR-SWITCHED:\nContactor-switched: 10-30 second switching time. Adequate for slowly varying loads.\nThyristor-switched (TSC): <20ms switching. For rapidly varying loads (welding, arc furnaces).\nHybrid: thyristor steps for fast response + contactor steps for bulk correction.",
      formula:{IS:'Harmonic filter: Xc = 1/(2πfC), XL = 2πfL\nAt tuned frequency: Xc = XL → resonance\nFilter kVAr at fundamental: Q = V²/(Xc − XL) at 50Hz\nCapacitor duty: IS 13585 — continuous kVAr rating\nInrush current: Iinrush = V × √(2C_total / L_system)',NEC:'IEEE 519-2014: harmonic limits at PCC\nTDD limits: 5-20% depending on Isc/Iload ratio\nVTHD limit: 5% at PCC, 8% at individual loads\nIEEE 18: shunt capacitor application guide\nCapacitor bank switching studies: IEEE C37.012',IEC:'IEC 61642: industrial network harmonic assessment\nIEC 60831-1/-2: self-healing capacitors, tests\nIEC 61000-3-6: harmonic emission limits\nIEC TR 60871-4: capacitor bank protection guide\nIEC 62271-100: switching tests for capacitor circuits'},
      example:{sector:'ind',given:'Steel plant: 5 MW, 33kV/11kV system. 40% of load is VFDs and arc furnaces. Existing PF = 0.72. THD = 22%. Design harmonic filter + PF correction.',steps:['Required kVAr: 5000 × (tan(arccos 0.72) − tan(arccos 0.95)) = 5000 × (0.964 − 0.329) = 3175 kVAr','Harmonic spectrum: 5th = 18%, 7th = 11%, 11th = 7%, 13th = 4%','Design: 3-stage passive harmonic filter bank','5th harmonic filter: tuned to 247Hz (slightly below 250Hz for detuning)','Qc5 = 1800 kVAr, L5 = 0.84 mH, C5 = 496 μF','7th harmonic filter: tuned to 343Hz','Qc7 = 900 kVAr, L7 = 0.30 mH, C7 = 248 μF','11th harmonic filter: tuned to 543Hz','Qc11 = 475 kVAr, L11 = 0.096 mH, C11 = 131 μF','Total filter kVAr at 50Hz: 3175 kVAr → PF raises to ~0.95 ✓','Expected THD reduction: 22% → 5% ✓ (IEEE 519 compliant)','Protection: HRC fuses, unbalance relay, discharge resistors, vacuum circuit breakers'],result:'3-stage passive harmonic filter: 5th (1800kVAr) + 7th (900kVAr) + 11th (475kVAr). Total 3175 kVAr. PF: 0.72→0.95. THD: 22%→5%. IEEE 519 compliant.'},
      rot:["Steel plants and arc furnaces: never install plain capacitor banks. Always tuned filters. The harmonic content is too high — plain capacitors will resonate and explode within weeks."],
      mistakes:["Designing a 5th harmonic filter tuned to exactly 250Hz — slight system parameter variations can cause the filter to amplify instead of absorb. Always detune slightly (247-248Hz)","Not performing switching transient analysis for large capacitor banks — switching 3000 kVAr onto a bus generates massive inrush current that can damage contactors and cause voltage transients"],
      interviewQs:["What is the difference between passive and active harmonic filters?","How do you calculate the resonant frequency of a tuned harmonic filter?","Why do you detune a filter slightly below the target harmonic frequency?"],
      siteTips:["After commissioning a tuned harmonic filter, measure the THD at the PCC with a power quality analyser for at least one week. Verify that harmonic levels remain below IEEE 519 limits across all operating conditions. Harmonic filters that work perfectly during day shift can amplify harmonics during night shift when the load profile changes."],
      diagram:{type:'schematic',svgId:'capacitor-bank-adv-diagram'}
    },
    sectorNotes:{com:'Commercial: standard APFC panels with detuned reactors. Typical 100-500 kVAr. Thyristor-switched for buildings with elevators and UPS.',ind:'Industrial: large capacitor banks (500 kVAr - 10 MVAr). Tuned harmonic filters mandatory where VFDs and non-linear loads exceed 30% of total load. Vacuum CB switching for HV banks.',og:'Offshore: compact capacitor banks, rated for marine environment. Active harmonic filters preferred (space-efficient, no resonance risk). Capacitor banks on generator bus for PF correction at source.'},
    standards:{IS:[{clause:'IS 13585',title:'Shunt capacitor banks for power systems',note:'Indian standard for capacitor bank design, protection, and installation'},{clause:'IS 13340',title:'Capacitor duty contactors',note:'Requirements for contactors used in capacitor switching'}],NEC:[{clause:'NEC Art. 460',title:'Capacitor installations',note:'Conductor sizing, discharge requirements, overcurrent protection'},{clause:'IEEE 519-2014',title:'Harmonic limits',note:'Recommended practice for harmonic control in power systems'}],IEC:[{clause:'IEC 60831',title:'Self-healing shunt capacitors',note:'Testing and performance requirements for LV capacitor units'},{clause:'IEC 61642',title:'Industrial AC networks affected by harmonics',note:'Application guide for harmonic assessment and mitigation'}]},
    quiz:[]
  }

];

window.TOPICS_L4 = TOPICS_L4;
