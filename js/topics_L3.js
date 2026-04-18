/* ═══════════════════════════════════════════
   ElecPro — topics_L3.js
   Level 3: Equipment Sizing — 15 topics COMPLETE
   ═══════════════════════════════════════════ */

const TOPICS_L3 = [

  /* ── 1. TRANSFORMER SIZING ── */
  {
    id:'transformer-sizing', level:3, icon:'🔌', title:'Transformer Sizing',
    desc:'kVA selection, impedance, losses, loading limits, and protection for distribution transformers.',
    tags:['Transformer Sizing', 'Transformer Calculation', 'kVA Selection'],
    sectors:['com','ind','dc'], green:false, calculator:null,
    beginner:{
      intro:"The transformer is the heart of every LV distribution system. Size it too small and it overloads. Size it too large and it runs at light load with poor efficiency. The goal is the right kVA with headroom to grow.",
      whyMatters:[
        {icon:'🔥', text:'Overloaded transformers run hot — every 8°C above rating halves insulation life'},
        {icon:'⚡', text:'Transformer impedance determines fault current — critical for switchboard selection'},
        {icon:'💰', text:'A correctly sized transformer runs at 60–80% load — its peak efficiency point'}
      ],
      theory:"SIZING STEPS:\n1. Calculate Maximum Demand (kVA) from load calculation\n2. Apply growth factor (15–25%)\n3. Apply loading factor (load at 70–80% of rated kVA)\n4. Select nearest standard kVA size\n5. Verify impedance and fault current for switchboard rating\n\nSTANDARD kVA SIZES (IS/IEC): 100, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500 kVA\n\nTRANSFORMER IMPEDANCE (Z%):\n≤630 kVA: 4–4.5%\n800–2500 kVA: 5–6%\nHigher Z% → lower fault current → smaller switchboard rating\nLower Z% → better voltage regulation\n\nLOADING GUIDELINE: continuous loading ≤ 80% rated kVA",
      formula:{
        IS:'T(kVA) = MD(kVA) × GF / LF\nGF = 1.15–1.25 (growth), LF = 0.75–0.80 (loading)\nIsc = FLC / (Z%/100)\nFLC = kVA / (√3 × kV)\nIS 2026: transformer standard',
        NEC:'T(kVA) = MD(kVA) × 1.25\nNEC Art.450: transformer installation\nPrimary protection ≤ 125% FLC (NEC 450.3)\nIsc per IEEE 141',
        IEC:'T(kVA) = Σ(Pi × ki) / PF\nIEC 60076-1: transformer rating\nZ% per IEC 60076 Annex A\nLoading guide: IEC 60076-7'
      },
      example:{
        sector:'com',
        given:'Commercial building MD = 420 kVA. Growth factor 1.20, loading factor 0.78, Z%=5.0.',
        steps:[
          'Required kVA = 420 × 1.20 / 0.78 = 646 kVA',
          'Nearest standard: 630 kVA (undersized) → select 800 kVA',
          'Loading check: 420/800 = 52.5% — room for 52% growth',
          'FLC (800 kVA, 415V): 800,000/(√3×415) = 1113A',
          'Isc at LV bus: 1113/0.05 = 22,260A = 22.3 kA',
          'LV switchboard fault rating required: ≥25 kA (next standard above 22.3)'
        ],
        result:'Select 800 kVA, Dyn11, ONAN, Z%=5.0. LV switchboard: 25 kA fault rating (IS 13947).'
      },
      rot:[
        "To easily estimate Full Load Current (FLC), multiply the transformer's kVA by 1.39 (for 415V systems). For example, a 1000 kVA transformer delivers approximately 1390A.",
        "The optimal loading 'sweet spot' for maximum efficiency and longevity is between 60% and 75% of the rated kVA. For critical facilities like data centres, aim for 50% to maintain N+1 redundancy."
      ],
      mistakes:[
        "Sizing a transformer exactly equal to the Maximum Demand (MD) leaves zero headroom for future growth and risks instant overloading on high temperature days.",
        "Ignoring the specified impedance (Z%) when procuring the downstream main switchboard. A 4.5% impedance allows 33% higher fault current through than a 6% equivalent, which can blow up an under-rated switchboard.",
        "Specifying basic ONAN (Oil Natural Air Natural) cooling when future load growth is planned but there is no physical space to install a second transformer later."
      ],
      interviewQs:["Why does transformer efficiency peak at 60–75% load rather than 100%?","How does transformer impedance affect LV fault current?","What is the difference between ONAN and ONAF cooling?"],
      siteTips:["Always measure oil and winding temperatures on energised transformers. If the oil runs hotter than 85°C on a normal mild day, it indicates sustained overloading or poor ventilation — investigate load growth immediately before insulation fails."],
      selection:[
        "Calculate the final Maximum Demand (MD) in kVA, incorporating diversity factors for all connected loads.",
        "Apply a deliberate growth allowance (typically 15% to 25%) to ensure the transformer isn't instantly maxed out on day one.",
        "Apply a loading factor so the transformer naturally operates in its peak efficiency curve (target 70-80% loaded).",
        "Choose between Dry-type (epoxy cast, mandatory for indoors and data centres) or Liquid-type (oil filled, typical for outdoors and large utilities).",
        "Select the nearest standard commercial size upwards (e.g. 630, 800, 1000 kVA) rather than a custom rating."
      ],
      table:{
        all:{
          title:"Standard Distribution Transformer Ratings",
          desc:"Typical kVA sizes and approximate full load currents (FLC) at standard low voltages.",
          columns:["Rating (kVA)", "FLC at 400V/415V", "FLC at 480V", "Typical Impedance (Z%)"],
          data:[
            ["500 kVA", "721 A", "601 A", "4.0%"],
            ["630 kVA", "909 A", "758 A", "4.5%"],
            ["1000 kVA", "1443 A", "1203 A", "5.0%"],
            ["1600 kVA", "2309 A", "1924 A", "6.25%"],
            ["2000 kVA", "2886 A", "2405 A", "6.25%"]
          ]
        }
      },
      diagram:{type:'sld', svgId:'transformer-sld'}
    },
    advanced:{
      theory:"TRANSFORMER LOSSES:\nNo-load loss (core loss): constant, present whenever energised.\nFull-load loss (copper loss): I²R in windings. Proportional to load².\nTotal: P_loss = P_noload + (load/rated)² × P_fullload\n\nPeak efficiency: load = √(P_noload/P_fullload) × rated kVA\n\nVECTOR GROUP (Dyn11):\nDelta primary blocks zero sequence, no primary neutral.\nStar secondary with neutral supplies single-phase loads.\n30° phase shift — important for parallel operation and relay settings.\n\nPARALLEL OPERATION:\nRequirements: same voltage ratio, same vector group, similar impedance (within ±10%), same frequency.\nDon't parallel Dyn11 with Dyn1 — 60° phase difference causes massive circulating current.\n\nK-FACTOR RATING:\nFor harmonic-rich loads (data centres, VFDs): K = Σ(Ih²×h²)/Σ(Ih²)\nK13 transformers for data centres, K20 for telecoms.",
      formula:{
        IS:'η% = Output/(Output + P_noload + P_copper) × 100\nOptimal load: √(P_noload/P_fullload) × rated kVA\nParallel: same vector group AND kVA within 2:1 ratio\nK-factor: K = Σ(Ih/I1)² × h²',
        NEC:'NEC 450.3: transformer protection\nK-factor: ANSI C57.110\nParallel: ANSI C57.12',
        IEC:'IEC 60076-1: power transformers\nIEC 60076-7: loading guide\nIEC 60076-11: dry-type\nVector groups: IEC 60076-1 Cl.3'
      },
      example:{
        sector:'dc',
        given:'Data centre: 1200 kW IT, PF=0.97, THD=35%, K-factor=8. Select transformer.',
        steps:[
          'MD = 1200/0.97 + 40% cooling = 1732 kVA',
          'Growth 100%: 1732 × 2 = 3464 kVA → 2 × 2000 kVA (N+1)',
          'Each transformer at design: 1732/2 = 866 kVA (43% loading — good for N+1)',
          'K-factor=8 exceeds standard K=1 → specify K13 dry-type',
          'Isc per transformer: FLC=2782A, Isc=2782/0.055 = 50,578A',
          'LV switchboard: ≥50 kA rating needed'
        ],
        result:'2 × 2000 kVA K13 dry-type, Dyn11, Z=5.5%. LV switchboard: 50 kA fault rating.'
      },
      rot:["K-factor: if >30% of load is VFDs, UPS, or rectifiers → K13 minimum. Data centre or telecom → K20."],
      mistakes:["Paralleling transformers without checking vector group","Specifying standard transformers for harmonic-heavy loads — insulation fails early"],
      interviewQs:["What is K-factor and when do you need a K-rated transformer?","How do you determine optimal transformer loading for minimum losses?","Why must parallel transformers have the same vector group?"],
      siteTips:["If a transformer hums loudly after installation, measure THD on the primary. Harmonics cause magnetostriction noise — filter or specify K-rated unit."],
      diagram:{type:'sld', svgId:'transformer-adv-sld'}
    },
    sectorNotes:{res:'Utility-owned, pole-mounted 100–400 kVA. Building designer specifies LV wiring only.',com:'315–2000 kVA, Dyn11. Loading factor 0.75. IS 2026 specification.',dc:'1000–5000 kVA, K-rated dry-type. N+1. Low-loss amorphous core. 50–65 kA switchboard.',ind:'Multiple step-down. Motor starting drives impedance selection.',og:'',hc:''},
    standards:{
      IS:[{clause:'IS 2026',title:'Power Transformers',note:'Rating, losses, impedance, vector groups'},{clause:'IS 13947-2',title:'LV Switchgear fault ratings',note:'Switchboard fault rating from transformer Isc'}],
      NEC:[{clause:'NEC Art.450',title:'Transformers and vaults',note:'Installation and protection'},{clause:'ANSI C57.110',title:'Transformer loading — harmonics',note:'K-factor guidance'}],
      IEC:[{clause:'IEC 60076-1',title:'Power transformers',note:'Rating, losses, impedance, vector group'},{clause:'IEC 60076-7',title:'Loading guide',note:'Overloading limits and temperature'}]
    },
    quiz:[]
  },

  /* ── 2. DG SIZING ── */
  {
    id:'dg-sizing', level:3, icon:'🔋', title:'DG Set Sizing',
    desc:'Diesel generator kVA selection, altitude derating, AMF panel, essential load sequencing.',
    tags:['DG Sizing', 'Diesel Generator', 'Generator Sizing', 'Standby Power'],
    sectors:['com','ind','dc','hc'], green:false, calculator:null,
    beginner:{
      intro:"A diesel generator is your insurance against grid failure. Size it too small and critical loads drop. Size it too large and it wet stacks — causing premature engine damage from unburnt fuel.",
      whyMatters:[
        {icon:'🏥', text:'Hospitals and data centres cannot afford outages — DG is life safety equipment'},
        {icon:'⚡', text:'Undersized DG causes voltage dip and frequency instability — loads trip off'},
        {icon:'🔧', text:'DG running below 30% rated load wet stacks — unburnt fuel damages the engine'}
      ],
      theory:"SIZING STEPS:\n1. List essential loads (cannot be shed on grid failure)\n2. Calculate essential load MD (kW and kVA)\n3. Add transient kVA for largest motor start\n4. Apply altitude and temperature derating\n5. Add 15–25% spare capacity\n6. Select nearest standard kVA size\n\nDERATING FACTORS:\nAltitude: 1% capacity loss per 100m above 1000m\nTemperature: 1% loss per 5.5°C above 40°C ambient\n\nMOTOR STARTING IMPACT:\nDOL transient kVA = 3 × motor kW / PF\nStar-delta transient kVA = 1 × motor kW / PF (lower demand)\nSoft starter / VFD: minimal transient demand\n\nWET STACKING PREVENTION:\nMinimum continuous loading ≥ 30% of rated kW\nIf essential loads are light: add dummy load bank, or split across smaller DGs\n\n[IS]\nAMF (Automatic Mains Failure) PANEL:\nDetects mains failure → starts DG → changeover → on mains return, transfers back.\nIS 10000 Class 10: reaches full load within 10 seconds.\n\n[NEC]\nATS (Automatic Transfer Switch) & GENERATOR:\nDetects grid failure → starts generator → transfers load.\nEmergency Systems (Life Safety): Must restore power within 10 seconds (NEC 700.12).\nLegally Required Standby: Must restore within 60 seconds (NEC 701.12).\n\n[IEC]\nATS / AMF PANEL:\nDetects grid failure → starts DG → changeover → transfers back on grid return.\nISO 8528 / IEC 60364-5-56: Critical life safety loads typically require power restoration within 0.5 to 10 seconds depending on the asset.",
      formula:{
        IS:'G(kVA) = [MD(kW)/PF + Motor_start_kVA] / (alt_df × temp_df) × SF\nAlt derating: 1 − (altitude−1000)/100 × 0.01 for alt > 1000m\nTemp derating: 1 − (T−40)/5.5 × 0.01 for T > 40°C\nIS 10000: Class 10, 30, 60 classification',
        NEC:'NFPA 110: emergency and standby power\nClass 10: full load within 10 seconds\nG(kW) = essential load kW × 1.25 minimum',
        IEC:'IEC 60034: rotating machines\nIEC 60947-6: transfer switching equipment\nG(kVA) = Σ(essential) / (PF × derating) × 1.20'
      },
      example:{
        sector:'hc',
        given:'Hospital: essential loads 280 kW at PF 0.85. Largest motor: 22 kW DOL. Altitude: 1500m. Ambient: 45°C.',
        steps:[
          'Essential kVA = 280/0.85 = 329.4 kVA',
          'Motor start transient (DOL, 22 kW): 3 × 22/0.85 = 77.6 kVA',
          'Design kVA (before derating): 329.4 + 77.6 = 407 kVA',
          'Altitude derating (1500m): 1 − 0.05 = 0.95',
          'Temperature derating (45°C): 1 − 0.009 = 0.991',
          'Combined derating: 0.95 × 0.991 = 0.941',
          'Required (derated): 407/0.941 = 432.5 kVA',
          'Spare 20%: 432.5 × 1.20 = 519 kVA → select 625 kVA'
        ],
        result:'625 kVA DG set. Verify minimum loading: 30% × 625 × 0.85 = 159 kW essential minimum. Consider star-delta on 22 kW motor to reduce transient.'
      },
      rot:["Quick rule: essential kW ÷ 0.8 PF ÷ 0.85 derating × 1.2 = design kVA. 200 kW essentials → 200/0.8/0.85×1.2 = 353 kVA → select 400 kVA.","Wet stacking: DG running <30% load for >4 hours needs a 75% load bank exercise for 2 hours."],
      mistakes:["Including all building loads as essential — only life-safety loads. Oversizing causes wet stacking.","Not accounting for starting kVA of largest motor — DG bogs down on start","Forgetting derating for high altitude/temperature sites"],
      interviewQs:["What is wet stacking and how do you prevent it?","How does altitude affect DG capacity?","What is Class 10 emergency power classification?"],
      siteTips:["Run monthly load tests at ≥75% rated load for 30 minutes. Record: kW, voltage, frequency, fuel consumption. Trends reveal problems before failure."],
      table:{
        all:{
          title:"Emergency System Categorization",
          desc:"Classification of emergency power systems per NEC and IS standards.",
          columns:["Category", "Standard Ref.", "Transfer Time", "Typical Loads"],
          data:[
            ["Life Safety (Emergency)", "NEC 700 / IS 10000 Cl.10", "≤ 10 seconds", "Egress lighting, fire pumps, alarms"],
            ["Legally Required Standby", "NEC 701", "≤ 60 seconds", "Smoke control, select elevators"],
            ["Optional Standby", "NEC 702", "No strict limit", "Servers, commercial operations"],
            ["Class 30 / 60", "IS 10000", "30s / 60s", "Industrial standby processes"]
          ]
        }
      },
      diagram:{type:'sld', svgId:'dg-sld'}
    },
    advanced:{
      theory:"PARALLEL OPERATION:\nMultiple DGs can share load. Requirements: same voltage, frequency, phase sequence, phase angle <5°.\nSynchronisation check relay (ANSI 25) prevents out-of-phase paralleling.\n\nISLAND MODE:\nDG alone — AVR controls voltage, governor controls frequency.\nHarmonic loads cause overheating — specify 12-pulse UPS rectifiers for DG.\n\nFUEL SYSTEM:\nDay tank: 8–24 hours at full load\nBulk storage: 72–96 hours for critical facilities (NFPA 110)\nFuel polishing: essential for long-stored diesel (bacteria, sludge)\n\nFUEL CONSUMPTION:\n≈ 0.28 litres/kWh at full load. 1000 kW DG × 72h = 20,160 litres.",
      formula:{
        IS:'Voltage dip: ΔV% ≈ kVA_load × Xd″ / kVA_gen × 100\nFuel: L = kW × 0.28 × hours\nDay tank: hours = volume/(kW × 0.28)\nParallel: must synchronise per ANSI 25',
        NEC:'NFPA 110 fuel: 96h for Level 1 (life safety)\nTransfer: Class 10 = 10s\nGenerator Xd″ typically 15–25%',
        IEC:'IEC 60034-22: synchronous generators\nIEC 60947-6-1: ATS\nParallel: IEC 60909 fault contribution'
      },
      example:{
        sector:'dc',
        given:'Data centre: 2 × 1000 kVA DGs in parallel. 72-hour fuel requirement. Full load 850 kW each.',
        steps:[
          'Fuel rate: 2 × 850 × 0.28 = 476 L/hr at full load',
          '72-hour bulk tank: 476 × 72 = 34,272 L minimum',
          'Day tank (8h): 476 × 8 = 3808 L',
          'Voltage dip on 500 kW step load: ΔV ≈ (500/0.85) × 0.20/(2×1000) × 100 = 5.9%',
          '5.9% < 10% acceptance limit ✓'
        ],
        result:'34,272 L bulk fuel tank. 3808 L day tank. Voltage dip 5.9% on step load — acceptable. Specify synchronisation relay for parallel operation.'
      },
      rot:["Diesel consumption: 0.28 L/kWh at full load. Scale linearly — 50% load uses ≈ 0.18 L/kWh (better specific consumption)."],
      mistakes:["Paralleling DGs without synchronisation relay — out-of-phase connection destroys both generators","Undersizing fuel tanks — running out of fuel during a long outage is the most embarrassing failure mode"],
      interviewQs:["What causes wet stacking in diesel generators?","How does subtransient reactance Xd″ affect voltage dip on load application?","What is the purpose of a synchronisation check relay?"],
      siteTips:["Test fuel quality every 6 months — diesel stored >6 months can develop bacterial contamination. Fuel polishing removes contamination in-situ."],
      diagram:{type:'sld', svgId:'dg-adv-sld'}
    },
    sectorNotes:{res:'5–25 kVA for apartment complexes — lifts, common lighting, water pumps.',com:'100–1000 kVA. AMF mandatory. IS 10000 Class 10. Essential loads only.',dc:'N+1 minimum. 96-hour fuel. 12-pulse UPS rectifiers. Generator harmonics critical.',ind:'Multiple DGs for process continuity. Motor starting coordination. Export possible.',og:'Prime power (no grid). Multiple DGs always. Island operation. Load shedding essential.',hc:'Within 10 seconds per NFPA 99/IS 1646. Life safety circuits on separate feeder.'},
    standards:{
      IS:[{clause:'IS 10000',title:'DG set performance classification',note:'Class 10, 30, 60 — time to reach full load'},{clause:'NBC 2016 Part 8',title:'Standby power requirements',note:'Generator sizing guidance by building type'}],
      NEC:[{clause:'NFPA 110',title:'Emergency and Standby Power',note:'Fuel, transfer time, testing requirements'},{clause:'NEC Art.700',title:'Emergency systems',note:'Life safety emergency power requirements'}],
      IEC:[{clause:'IEC 60034-22',title:'AC generators for diesel engines',note:'Generator ratings and performance'},{clause:'IEC 60947-6-1',title:'Automatic Transfer Switches',note:'AMF/ATS design and performance'}]
    },
    quiz:[]
  },

  /* ── 3. UPS SIZING ── */
  {
    id:'ups-sizing', level:3, icon:'🔆', title:'UPS & Battery Sizing',
    desc:'kVA selection, battery Ah calculation, backup time, VRLA vs Li-ion, redundancy topology.',
    tags:['UPS Sizing', 'Battery Sizing', 'UPS Calculation', 'Back-up Power'],
    sectors:['dc','hc','com'], green:false, calculator:null,
    beginner:{
      intro:"A UPS bridges the gap between mains failure and generator start. It must supply clean power for critical loads during the transition — and potentially longer if the generator fails to start.",
      whyMatters:[
        {icon:'💻', text:'Uncontrolled power loss corrupts databases and destroys unsaved work'},
        {icon:'🏥', text:'Life support needs millisecond continuity — only double-conversion UPS delivers'},
        {icon:'🔋', text:'Wrong battery sizing = backup fails. 15-minute design becomes 3 minutes in reality'}
      ],
      theory:"UPS TYPES:\nOffline (Standby): load on mains, switches on failure. Transfer: 4–20ms. Cheapest.\nLine-interactive: voltage regulation, switches on failure. Transfer: 2–4ms.\nDouble-conversion (Online): load always on inverter. Transfer: 0ms. Mandatory for servers and medical.\n\nSIZING:\n1. Critical load kW and kVA\n2. UPS kVA = critical kVA / UPS efficiency (0.95)\n3. Load UPS at 70–80% of rating\n4. Battery Ah for required backup time\n\nBATTERY SIZING:\nAh = (P_kW × 1000 × T_h) / (V_bus × η × DoD)\n\nBATTERY TYPES:\nVRLA (sealed lead-acid): 7–10 year life, cheap, DoD ≤ 80%\nLithium-ion: 10–15 year life, lighter, DoD ≤ 90%, no hydrogen\n\nREDUNDANCY:\nN+1: one extra module. 2N: full second system (Tier III/IV).",
      formula:{
        IS:'UPS kVA = Load kVA / η_UPS\nAh = (P_kW × T_h × 1000) / (V_bus × η_bat × DoD)\nV_bus: 48V (small), 192V (medium), 480V (large)\nIS 1650: UPS rating standard',
        NEC:'NFPA 111: stored electrical energy systems\nIEEE 485: lead-acid battery sizing\nUPS kVA: load kVA × 1.25 minimum',
        IEC:'IEC 62040-1: UPS safety\nIEC 62040-3: performance (types 1, 2, 3)\nBattery sizing: IEC 896 (VRLA), IEC 62619 (Li-ion)'
      },
      example:{
        sector:'dc',
        given:'Server room: 150 kW critical load, PF=0.95, 15-minute backup. 192V DC bus, VRLA (DoD=0.8, η=0.85).',
        steps:[
          'Critical kVA = 150/0.95 = 157.9 kVA',
          'UPS rating = 157.9/0.95 = 166.2 kVA → select 200 kVA',
          'Loading: 157.9/200 = 79% ✓ (within 70–80%)',
          'Ah = (150 × 0.25 × 1000) / (192 × 0.85 × 0.8)',
          '   = 37,500 / 130.6 = 287 Ah → select 300 Ah',
          'Battery string: 16 × 12V in series = 192V. 300 Ah each cell.'
        ],
        result:'200 kVA double-conversion UPS. 300 Ah VRLA at 192V. Verify backup with load test at commissioning.'
      },
      rot:["UPS loading: never exceed 80% steady state — leave 20% for peaks and N+1 module failure.","Battery ages: 3–4% capacity loss per year. After 5 years, 300 Ah → 240 Ah. Recalculate backup time annually."],
      mistakes:["Sizing for current load only — design for 3–5 year growth. UPS modules are expensive to swap.","Specifying VRLA without hydrogen ventilation in sealed room — explosion risk"],
      interviewQs:["What is the difference between offline and double-conversion UPS?","Why is DoD limited to 80% for VRLA batteries?","How do you verify battery backup time after installation?"],
      siteTips:["Do an annual discharge test — run UPS on battery to 80% DoD and record time. Compare with initial commissioning. <80% of original capacity = replace batteries."],
      diagram:{type:'sld', svgId:'ups-sld'}
    },
    advanced:{
      theory:"BATTERY FLOAT vs BOOST CHARGING:\nFloat charge: maintains battery at 100% (2.25V/cell VRLA). Continuous.\nBoost charge: rapid recharge after discharge (2.35–2.40V/cell). Time-limited.\nOvercharging destroys batteries — use temperature-compensated chargers.\n\nTHERMAL RUNAWAY (VRLA):\nHot cell → increased charge current → hotter → explosion risk.\nPrevention: temperature monitoring, current-limited chargers, battery room ≤ 25°C.\nEvery 10°C above 25°C halves VRLA battery life.\n\nLI-ION BMS:\nBattery Management System monitors cell voltage, temperature, SoC, SoH.\nProtects: overcharge, over-discharge, overcurrent, overtemperature.\nNo hydrogen gas — no ventilation requirement.\n\nUPS PARALLEL REDUNDANCY:\nN+1 modular: any single module failure → remaining N modules redistribute load.\nEach module must supply 100/N% of total at N+1 configuration.",
      formula:{
        IS:'Float voltage: 2.25 × n_cells (VRLA)\n192V bus: 192/2 = 96 cells = 8 × 12V modules\nLife derating: every 10°C above 25°C → 50% life reduction',
        NEC:'IEEE 484: VRLA installation\nNFPA 111: maintenance\nH2 ventilation: 1 CFM per 120 Ah',
        IEC:'IEC 60896-21: VRLA batteries\nIEC 62619: Li-ion safety\nIEC 60364-7-713: UPS room design'
      },
      example:{
        sector:'hc',
        given:'Hospital critical care: 80 kW, 4-hour backup. Li-ion UPS, 192V, DoD=0.9, η=0.92.',
        steps:[
          'UPS kVA = 80/0.90/0.95 = 93.6 kVA → select 100 kVA',
          'Ah = (80 × 4 × 1000)/(192 × 0.92 × 0.9) = 320,000/159.1 = 2011 Ah',
          'Select 2000 Ah Li-ion at 192V',
          'Li-ion: no hydrogen — ventilation for temperature only',
          'VRLA equivalent would need: H2 ventilation ≈ 2000/120 = 16.7 CFM'
        ],
        result:'100 kVA UPS, 2000 Ah Li-ion (no H2, lighter, longer life). If VRLA: add 17 CFM ventilation to battery room.'
      },
      rot:["4-hour backup needs 4× the battery of 1-hour. Recharge time also increases — ensure charger can recharge in <10 hours."],
      mistakes:["VRLA in sealed room without hydrogen ventilation — explosion risk","Not derating for high temperature — 35°C room halves VRLA life from 10 to 5 years"],
      interviewQs:["What causes thermal runaway in VRLA batteries?","How does a Li-ion BMS protect the battery?","Why does ambient temperature affect both capacity and life?"],
      siteTips:["Infrared scan battery strings quarterly — hot cells indicate failure before voltage tests reveal it. Replace hot cells before they take the whole string offline."],
      diagram:{type:'sld', svgId:'ups-adv-sld'}
    },
    sectorNotes:{res:'1–3 kVA offline for home office. No engineering sizing required.',com:'10–200 kVA double-conversion. Server rooms mandatory. Backup: 15–30 min to generator.',dc:'Double-conversion only. N+1 or 2N. Li-ion growing. Modular scalable preferred.',ind:'10–500 kVA for process control, SCADA, ESD. 30–60 min typical.',og:'Safety instrumented systems 1–4 hours. VRLA or Li-ion. Ex-proof where required.',hc:'90 min minimum per NFPA 99. Critical care 4+ hours. Double-conversion mandatory.'},
    standards:{
      IS:[{clause:'IS 1650',title:'Rating of UPS systems',note:'UPS performance classification'},{clause:'IS 1646',title:'Fire safety — emergency power',note:'Backup duration requirements for healthcare'}],
      NEC:[{clause:'NFPA 111',title:'Stored Electrical Energy Emergency Systems',note:'UPS system requirements'},{clause:'IEEE 485',title:'Battery sizing — lead-acid',note:'Standard sizing methodology'}],
      IEC:[{clause:'IEC 62040-1',title:'UPS safety',note:'Safety standard for all UPS types'},{clause:'IEC 62040-3',title:'UPS performance specification',note:'Types 1 (double conv.), 2 (line-int.), 3 (offline)'}]
    },
    quiz:[]
  },

  /* ── 4. LIGHTING DESIGN ── */
  {
    id:'lighting-design', level:3, icon:'💡', title:'Lighting Design',
    desc:'Lumen method, Room Index, utilisation and maintenance factors, LPD compliance.',
    tags:['Lighting Design', 'Lux Calculation', 'Lumen Method', 'Illumination'],
    sectors:['res','com','hc'], green:false, calculator:'calcLighting',
    beginner:{
      intro:"Good lighting is about the right light in the right place. The lumen method gives you exactly the number of fixtures needed to achieve the target illuminance across the working surface.",
      whyMatters:[
        {icon:'👁️', text:'Insufficient lighting causes eye strain, errors, and accidents in healthcare'},
        {icon:'💚', text:'LPD compliance is mandatory for green building certificates (LEED, IGBC, ECBC)'},
        {icon:'💡', text:'Wrong fixture layout creates glare hotspots and dark corners — both fail the design'}
      ],
      theory:"THE LUMEN METHOD:\nN = (E × A) / (F × UF × MF)\nN = number of fixtures\nE = required illuminance\nA = room area\nF = luminous flux per fixture (lumens)\nUF = utilisation factor\nMF = maintenance factor (accounts for lumen depreciation)\n\nROOM INDEX:\nk = (L × W) / [Hm × (L + W)]\nHm = mounting height above working plane\nTypical UF: 0.45–0.80 (from manufacturer's polar curve tables)\n\nMAINTENANCE FACTOR (MF):\nTypical LED: 0.70–0.85\nAccounts for: lamp lumen depreciation, dirt on fixture, room surface dirt\n\n[IS]\nLUX LEVELS (NBC 2016):\nCorridor: 100 lux\nOffice: 300–500 lux\nCAD/Drawing: 750 lux\nHospital ward: 300 lux\nOperating theatre: 1000 lux ambient\n\nLPD LIMITS (NBC 2016):\nOffice: 10 W/m². Retail: 15 W/m². Hospital: 12 W/m²\n\n[NEC]\nILLUMINANCE LEVELS (IESNA):\nCorridor: 10-20 fc\nOffice: 30-50 fc\nCAD/Drawing: 75 fc\nHospital ward: 30 fc\nOperating theatre: 100 fc ambient\n\nLPD LIMITS (ASHRAE 90.1):\nOffice: 0.82 W/sq ft. Retail: 1.06 W/sq ft. Hospital: 1.05 W/sq ft\n\n[IEC]\nLUX LEVELS (EN 12464-1):\nCorridor: 100 lux\nOffice: 300–500 lux\nCAD/Drawing: 750 lux\nHospital ward: 300 lux\nOperating theatre: 1000 lux ambient\n\nLPD LIMITS (EN 15193):\nOffice: 10 W/m². Retail: 15 W/m². Hospital: 12 W/m²",
      formula:{
        IS:'N = (E × A) / (F × UF × MF)\nk = (L × W) / [Hm × (L + W)]\nLPD = (N × W_fixture) / A\nNBC 2016: LPD limits by space type',
        NEC:'N = (FC × A) / (LL × CU × LLF)\nFC = footcandles (1 fc = 10.764 lux)\nCU = coefficient of utilisation\nASHRAE 90.1: LPD limits in W/sq ft',
        IEC:'N = (Em × A) / (Φ × ηu × fm)\nEN 12464-1: lux levels by task\nIEC 62386: DALI digital lighting\nEN 15193: lighting energy performance'
      },
      example:{
        sector:'com',
        given:'Office: 10m × 8m, ceiling 3m, working plane 0.8m. Required 500 lux. LED fixture 4000 lm, 36W. MF=0.80.',
        steps:[
          'Hm = 3.0 − 0.8 = 2.2m',
          'Room Index: k = (10×8)/[2.2×(10+8)] = 80/39.6 = 2.02',
          'UF (k=2.0, medium reflectances): ≈ 0.67',
          'N = (500 × 80) / (4000 × 0.67 × 0.80) = 40,000/2144 = 18.7 → 19 fixtures',
          'LPD = (19 × 36)/80 = 8.55 W/m² < 10 W/m² ✓',
          'Achieved lux: (19×4000×0.67×0.80)/80 = 506 lux ✓'
        ],
        result:'19 LED fixtures of 4000lm/36W. LPD = 8.55 W/m² — compliant. Arrange in 4 rows of 4–5 fixtures checking uniformity.'
      },
      rot:["Quick estimate: LED office at 500 lux ≈ 1 fixture per 4–6 m². 80m² office → 80/5 = 16 fixtures (use calculation for final design).","LPD rule: LED at 500 lux ≈ 8–10 W/m². Fluorescent same illuminance: 12–18 W/m². LED always wins."],
      mistakes:["Selecting UF without calculating Room Index first","Using initial lumens instead of maintained lumens — LED loses 10–20% over life","Placing fixtures only in room centre — check uniformity ratio ≥ 0.60"],
      interviewQs:["What is Room Index and how does it affect UF?","Why is MF always less than 1.0?","What is LPD and which standard limits it for Indian offices?"],
      siteTips:["Measure illuminance at 25 grid points during commissioning. Average must meet target. Variation >20% between min and max = poor uniformity — adjust fixture positions."],
      table:{
        all:{
          title:"Lamp Types & Luminaire Guide",
          desc:"Comparison of common lighting technologies and their applications.",
          columns:["Lamp / Luminaire Type", "Efficacy (lm/W)", "Life (Hrs)", "Typical Application"],
          data:[
            ["LED", "100–150+", "50,000+", "Standard for all new installations (high efficiency, long life)"],
            ["Fluorescent (T8/T5)", "70–100", "20,000", "Legacy general lighting, being phased out"],
            ["Metal Halide (HID)", "70–115", "15,000", "Legacy high-bay / sports lighting"],
            ["Recessed Troffer", "N/A", "N/A", "Office grids for low glare (UGR<19)"],
            ["High-Bay Luminaire", "N/A", "N/A", "Factories and warehouses (height > 6m)"]
          ]
        }
      },
      diagram:{type:'schematic', svgId:'lighting-diagram'}
    },
    advanced:{
      theory:"UNIFORMITY:\nUniformity ratio = Emin/Eavg ≥ 0.60\nMax spacing: S_max = 1.5 × Hm for most LED panels\n\nGLARE (UGR):\nUGR < 19 for offices. UGR < 22 for industrial.\nLow-glare: diffused optics, louvres, recessed.\n\nDALI CONTROL:\nDigital Addressable Lighting Interface: dims each fixture independently.\nOccupancy + daylight sensors: save 20–40% energy.\n\n[IS]\nSTANDARDS & EMERGENCY:\nEmergency: Maintained ≥ 1 lux at floor level on escape routes (IS 1646).\nDuration: ≥ 3 hours. Self-contained or central battery system.\nUniformity: Office Emin/Eavg ≥ 0.60 (NBC 2016).\n\n[NEC]\nSTANDARDS & EMERGENCY:\nEmergency: Average 1.0 fc, minimum 0.1 fc along escape routes (NFPA 101).\nDuration: Minimum 90 minutes (NEC 700.12).\nEnergy: Lighting power calculation methodology (ASHRAE 90.1).\n\n[IEC]\nSTANDARDS & EMERGENCY:\nUniformity: Office Emin/Eavg ≥ 0.60 (EN 12464-1).\nEnergy: LENI (Lighting Energy Numeric Indicator) calculation methodology (EN 15193).\nEmergency: Maintained ≥ 1 lux at floor level on escape routes (BS 5266 / IEC 60598-2-22).",
      formula:{
        IS:'UGR = 8 log(0.25/Eb × ΣLω/p²)\nUniformity: Emin/Eavg ≥ 0.60\nEmergency: ≥ 1 lux floor level\nDALI per IEC 62386',
        NEC:'ASHRAE 90.1: LPD limits by occupancy\nNEC Art.700: emergency lighting\nNFPA 101: ≥ 1 fc on escape route floor',
        IEC:'EN 12464-1: illuminance, UGR, Ra by task\nEN 15193: energy — LENI indicator\nIEC 62386: DALI control'
      },
      example:{
        sector:'hc',
        given:'Hospital OR: 8m × 6m, 1000 lux required, Ra ≥ 90, UGR < 19. LED 6000 lm/75W Ra90.',
        steps:[
          'k = (8×6)/[2.5×(8+6)] = 48/35 = 1.37',
          'UF (k=1.37, bright OR surfaces): ≈ 0.58',
          'MF = 0.75 (hospital: monthly cleaning)',
          'N = (1000×48)/(6000×0.58×0.75) = 48,000/2610 = 18.4 → 19 fixtures',
          'LPD = (19×75)/48 = 29.7 W/m² (OR exception — higher LPD permitted for surgical environments)',
          'Surgical luminaire (10,000+ lux on table): separate specialist unit'
        ],
        result:'19 × 6000lm Ra90 LED fixtures for ambient OR lighting. Supplement with dedicated shadowless surgical luminaire on ceiling track.'
      },
      rot:["OT exception: 1000 lux is ambient orientation lighting. Surgical luminaire provides 10,000–100,000 lux on the operating field."],
      mistakes:["Designing lighting without emergency — every occupied building requires emergency exit and escape route lighting","Using NEC footcandles without converting: 1 fc = 10.764 lux"],
      interviewQs:["What is UGR and what does it measure?","How does DALI improve energy efficiency?","What is the minimum emergency lighting level on an escape route?"],
      siteTips:["Run DIALux or Relux simulation for complex spaces before finalising fixture positions — 2 hours of design saves days of rework on site."],
      diagram:{type:'schematic', svgId:'lighting-adv-diagram'}
    },
    sectorNotes:{res:'150–300 lux living, 300–500 lux kitchen. LED only (incandescent banned India). LPD 10 W/m².',com:'300–500 lux office, 750 lux CAD. NBC 2016 LPD: office 10, retail 15 W/m². ECBC: controls mandatory.',dc:'500 lux at floor level. LED with UPS emergency mandatory.',ind:'200–750 lux by task. IP65 in dusty/wet areas. Ex rated in hazardous zones.',og:'Ex rated fixtures mandatory. 300 lux minimum. Emergency on UPS.',hc:'Ward 300, examination 1000, OT 1000 lux ambient. Ra ≥ 90. Emergency 3 hours.'},
    standards:{
      IS:[{clause:'NBC 2016 Part 8 Cl.10',title:'Lighting LPD limits',note:'W/m² by occupancy for energy compliance'},{clause:'IS 1646',title:'Emergency lighting duration',note:'3-hour minimum, 1 lux on escape routes'}],
      NEC:[{clause:'ASHRAE 90.1 Section 9',title:'LPD limits',note:'W/sq ft by occupancy'},{clause:'NFPA 101 Ch.7',title:'Means of egress illumination',note:'1 footcandle minimum on escape route floor'}],
      IEC:[{clause:'EN 12464-1',title:'Lighting of indoor workplaces',note:'Lux, UGR, CRI by task type'},{clause:'EN 15193',title:'Lighting energy performance',note:'LENI calculation with controls'}]
    },
    quiz:[]
  },

  /* ── 5. MOTOR STARTING ── */
  {
    id:'motor-starting', level:3, icon:'⚙️', title:'Motor Starting & Protection',
    desc:'DOL, star-delta, soft starter, and VFD — selection logic, FLC calculation, and protection settings.',
    tags:['Motor Starting', 'Motor Protection', 'DOL', 'Star-Delta', 'VFD'],
    sectors:['ind','og'], green:false, calculator:'calcMotor',
    beginner:{
      intro:"Induction motors draw 5–8× running current at start. This surge can cause voltage dips, trip protection devices, and damage connected machinery. Choosing the right starting method prevents all of this.",
      whyMatters:[
        {icon:'⚡', text:'DOL starting causes 5–8× current spike — trips breakers and dims lights'},
        {icon:'⚙️', text:'Wrong starter causes mechanical shock to pumps, fans, and connected machinery'},
        {icon:'🛡️', text:'Wrong OLR setting causes premature tripping or motor burnout'}
      ],
      theory:"FULL LOAD CURRENT:\nFLC = P / (√3 × V × PF × η)\n\nSTARTING METHODS:\n\nDOL: Direct-On-Line. Simple. Istart = 5–8× FLC. Torque 100–200%. Use for motors ≤ 7.5 kW or where high starting torque required.\n\nSTAR-DELTA: Starts star (reduced V), switches to delta after 5–8s. Istart = FLC_DOL/3. Torque = 33% of DOL. Requires 6-terminal motor. Use for centrifugal pumps and fans.\n\nSOFT STARTER: Electronic voltage ramp, limits Istart = 1.5–3× FLC. Adjustable ramp 3–30s. Use for high-inertia loads, frequent starts.\n\nVFD (Variable Frequency Drive): Controls V and f. Istart ≤ 1.5× FLC. Speed control throughout running. Best for energy saving on fans/pumps.\n\nMOTOR PROTECTION:\nOLR (overload relay, ANSI 49): set at 100–115% FLC\nShort circuit: MCCB or fuse\nPhase failure: ANSI 46\nEarth fault: ANSI 50N",
      formula:{
        IS:'FLC = P / (√3 × V × PF × η)\nDOL Istart ≈ 6 × FLC\nStar-delta Istart = FLC_DOL / 3\nOLR setting: 100–115% × FLC\nIS 325: motor rating, IS 13947-4: starters',
        NEC:'FLC from NEC Table 430.250\nMax OCPD: NEC 430.52 (250% FLC fuse, 175% CB)\nOLR: NEC 430.32 (115–125% nameplate FLC)',
        IEC:'FLC = P / (√3 × V × cosφ × η)\nIEC 60034: motor standard\nIEC 60947-4: starters and controllers'
      },
      example:{
        sector:'ind',
        given:'37 kW, 415V, 3-phase motor. PF=0.86, η=0.93. DOL vs star-delta.',
        steps:[
          'FLC = 37,000/(1.732×415×0.86×0.93) = 37,000/573 = 64.6A',
          'DOL Istart: 6.5 × 64.6 = 420A for 5–8 seconds',
          'Star-delta Istart: 420/3 = 140A — significantly less',
          'Star-delta torque: 33% of rated — check pump can start with reduced torque',
          'OLR setting: 64.6 × 1.05 = 67.8A → set at 67A',
          'MCCB magnetic trip: must clear above 140A (star-delta) or 420A (DOL) → set 10×In'
        ],
        result:'Use star-delta for 37 kW. FLC=64.6A. OLR: 67A. MCCB: 63A frame, adjustable magnetic. Verify pump starts with 33% starting torque.'
      },
      rot:["Centrifugal pumps/fans: always works with star-delta (low starting torque load). Compressors, loaded conveyors: need soft starter or VFD (require high starting torque).","Star-delta switching time: set 5–8 seconds. Too short = motor hasn't reached speed. Too long = unnecessary star connection time."],
      mistakes:["Setting OLR at nameplate current, not actual FLC — motor drawing less than nameplate trips on normal load","Using star-delta for high starting torque loads — 33% torque insufficient to start"],
      interviewQs:["Why does star-delta reduce starting current to 1/3 of DOL?","What starting method for a positive displacement compressor?","How does a VFD limit starting current vs DOL?"],
      siteTips:["If star-delta causes mechanical shock at star-to-delta transition, the motor hasn't reached speed. Increase star time or switch to soft starter."],
      table:{
        all:{
          title:"Motor Starter Comparison",
          desc:"Comparison of starting methods for 3-phase induction motors.",
          columns:["Starting Method", "Starting Current", "Starting Torque", "Applications"],
          data:[
            ["Direct-On-Line (DOL)", "5–8 × FLC", "100–200%", "Small motors (≤7.5 kW), fire pumps"],
            ["Star-Delta", "1.5–2.5 × FLC", "33%", "Centrifugal pumps, fans (low torque needed)"],
            ["Soft Starter", "2–3 × FLC", "Adjustable", "High inertia loads, compressors"],
            ["VFD / Inverter", "1–1.5 × FLC", "Up to 100%", "Speed control, HVAC fans/pumps"]
          ]
        }
      },
      diagram:{type:'schematic', svgId:'motor-starting-diagram'}
    },
    advanced:{
      theory:"VFD ENERGY SAVINGS (AFFINITY LAWS):\nPower ∝ speed³ for centrifugal loads.\nReducing speed to 80%: P = 0.8³ = 0.512 → 49% energy saving.\nThis is why VFDs are mandatory on all HVAC fans and pumps in energy-efficient buildings.\n\nVFD HARMONICS:\n6-pulse VFD: 5th and 7th harmonics, THD 25–35%\n12-pulse: THD 5–12%\nLine reactor reduces THD by ~50%\n\nBEARING CURRENTS:\nVFD common-mode voltage causes bearing currents → bearing failure.\nMitigation: insulated bearing (non-drive end), shaft grounding ring, screened cable.\n\nINVERTER-DUTY MOTORS:\nFor cables >50m with VFD: dV/dt spikes can double voltage at motor terminals.\nSpecify inverter-duty motor or add dV/dt filter.",
      formula:{
        IS:'Affinity law: P₂/P₁ = (n₂/n₁)³\nTHD (6-pulse): ≈30%. With line reactor: ≈15%\nDV/dt limit: ≤1000 V/μs at motor terminals',
        NEC:'NEC 430.122: VFD motor circuit conductors\nIEEE 519: harmonic limits at PCC\nNEMA MG1 Part 31: inverter-duty motor',
        IEC:'IEC 60034-17: cage motors with converter\nIEC 61800-3: VFD EMC requirements\nIEC 60034-25: motor requirements for VSD'
      },
      example:{
        sector:'ind',
        given:'HVAC fan: 45 kW, 415V. Currently DOL at 100% speed. VFD installed, runs at 80% speed most of the time. Calculate energy saving.',
        steps:[
          'Power at 100%: 45 kW',
          'Power at 80%: 45 × (0.80)³ = 45 × 0.512 = 23.0 kW',
          'Power saving: 22 kW',
          'Hours: 8760/year (24/7 operation)',
          'Energy saved: 22 × 8760 = 192,720 kWh/year',
          'Cost: 192,720 × ₹8 = ₹15.4 lakhs/year',
          'VFD cost: ₹3–4 lakhs. Payback: ~3 months'
        ],
        result:'VFD saves ₹15.4 lakhs/year. Payback ~3 months. Specify line reactor to reduce THD from 30% to 15%.'
      },
      rot:["Every 10% speed reduction saves ~27% power (cube law). 20% reduction saves 49%. Install VFDs on every HVAC fan and pump — payback almost always under 2 years."],
      mistakes:["Standard motor with VFD on cable >50m — inverter-duty motor required for dV/dt spikes","No line reactor when multiple VFDs share a bus — harmonic resonance between drives"],
      interviewQs:["State the affinity law for centrifugal pumps and explain energy significance.","What causes bearing currents in VFD-driven motors?","Why is a 12-pulse VFD preferred over 6-pulse in harmonic-sensitive installations?"],
      siteTips:["Measure motor current before and after VFD installation. If VFD output current at 100% speed exceeds DOL current, VFD motor data entry is wrong — check nameplate entry."],
      diagram:{type:'schematic', svgId:'motor-adv-diagram'}
    },
    sectorNotes:{res:'Small motors handled internally by AC equipment. No engineer sizing required.',com:'HVAC: VFD mandatory on fans/pumps >5.5 kW (ECBC). Chillers have integrated VFDs.',dc:'All cooling pumps and fans VFD controlled. Energy optimisation critical for PUE.',ind:'DOL ≤7.5 kW, star-delta 7.5–55 kW, soft starter/VFD >55 kW. MCC groups motor control.',og:'Ex-rated motors mandatory in hazardous zones. Soft starters in Ex areas preferred.',hc:'Fire pumps: DOL only (NFPA 20). HVAC: VFD for energy saving.'},
    standards:{
      IS:[{clause:'IS 325',title:'Three-phase induction motors',note:'Rating, classification, performance'},{clause:'IS 13947-4-1',title:'Motor starters',note:'DOL, star-delta ratings and test requirements'}],
      NEC:[{clause:'NEC Art.430',title:'Motors and motor circuits',note:'Complete motor installation and protection'},{clause:'NEC 430.52',title:'Motor short circuit protection',note:'Maximum OCPD sizing for motor circuits'}],
      IEC:[{clause:'IEC 60034-1',title:'Motor rating and performance',note:'Efficiency classes IE1–IE4'},{clause:'IEC 60947-4-1',title:'Contactors and motor starters',note:'AC-3, AC-4 utilisation categories'}]
    },
    quiz:[]
  },

  /* ── 6. HVAC ELECTRICAL ── */
  {
    id:'hvac-electrical', level:3, icon:'❄️', title:'HVAC Electrical Load',
    desc:'Chiller, AHU, FCU, and cooling tower electrical loads — calculation and VFD integration.',
    tags:['HVAC Electrical', 'Chiller Load', 'AHU', 'HVAC Design'],
    sectors:['com','dc','hc'], green:false, calculator:null,
    beginner:{
      intro:"HVAC is typically 40–60% of commercial building electrical load. Calculating chiller, AHU, and pump loads accurately is critical — get it wrong and the transformer is wrong.",
      whyMatters:[
        {icon:'❄️', text:'HVAC load is 40–60% of commercial building total — the dominant load category'},
        {icon:'⚡', text:'Chiller DOL starting causes voltage dip — must coordinate with other building loads'},
        {icon:'💚', text:'VFDs on all HVAC motors are mandatory for ECBC green building compliance'}
      ],
      theory:"EQUIPMENT AND LOADS:\n\nCHILLER:\nElectrical input = Cooling capacity (TR) / COP\n1 TR = 3.517 kW cooling\nModern chiller COP: 4–6 → 1 TR ≈ 0.7–0.9 kW electrical\nStarting: soft starter or VFD mandatory for >200 kW\n\nAHU (Air Handling Unit):\nFan power: P = ΔP × Q / (η_fan × η_motor)\nVFD mandatory for AHU fans >5.5 kW (ECBC)\n\nFCU (Fan Coil Unit): 50–250W each\n\nCOOLING TOWER FAN: typically 2–5% of chiller kW\n\nCHILLED WATER PUMP: ≈ 0.020 kW/TR\nCONDENSER WATER PUMP: ≈ 0.025 kW/TR\n\nTOTAL HVAC: Chiller + AHU + FCU + CT fan + CWP + CDWP",
      formula:{
        IS:'Chiller kW = TR × 3.517 / COP\nFan kW = ΔP(Pa) × Q(m³/s) / (η_fan × η_motor)\nRule of thumb: 0.85–1.0 kW/TR total HVAC\nECBC: VFD mandatory on fans/pumps > 5.5 kW',
        NEC:'Chiller ≈ 0.85 kW/TR (rule of thumb)\nASHRAE 90.1: minimum COP by chiller size\nVFD: ASHRAE 90.1 Section 6',
        IEC:'EER = cooling output(W)/electrical input(W)\nISO 5151: AC performance testing\nEN 14511: chiller efficiency'
      },
      example:{
        sector:'com',
        given:'Commercial building: 300 TR cooling. Chiller COP=5.5. Pumps, AHU fans, cooling tower.',
        steps:[
          'Chiller: 300 × 3.517/5.5 = 191.8 kW',
          'Chilled water pumps: 300 × 0.020 = 6.0 kW',
          'Condenser water pumps: 300 × 0.025 = 7.5 kW',
          'Cooling tower fans: 300 × 0.015 = 4.5 kW',
          'AHU fans: 300 × 0.08 = 24.0 kW',
          'FCU fans: 300 × 0.010 = 3.0 kW',
          'Total HVAC: 191.8+6+7.5+4.5+24+3 = 236.8 kW',
          'HVAC % of building (if total=420 kW): 56.4%'
        ],
        result:'Total HVAC: 237 kW = 0.79 kW/TR. HVAC = 56% of building load. Chiller incomer: 237/0.85/√3/415 = 388A → 400A MCCB.'
      },
      rot:["HVAC planning: 0.85–1.0 kW per TR all-inclusive. 100 TR building: 85–100 kW HVAC electrical.","Chiller starting: for >200 kW — always soft starter or VFD. DOL 200 kW = 1200A+ surge — unacceptable for most installations."],
      mistakes:["Including full chiller kVA in non-coincident load — chiller may not run during peak lighting/power period","Sizing chiller cable without adding pump and CT loads on same feeder"],
      interviewQs:["What is COP and how does it affect electrical load calculation?","Why are VFDs mandatory on AHU fans in ECBC-compliant buildings?","What percentage of a commercial building load is typically HVAC?"],
      siteTips:["Measure actual chiller kW input at full and part load. Compare with manufacturer rated COP. Actual COP significantly lower than rated = chiller needs servicing (refrigerant, condenser cleaning)."],
      diagram:{type:'schematic', svgId:'hvac-diagram'}
    },
    advanced:{
      theory:"PART LOAD EFFICIENCY (IPLV):\nChillers spend most time at 50–75% load.\nIPLV = 0.01A + 0.42B + 0.45C + 0.12D (A=100%, B=75%, C=50%, D=25%)\nVFD-driven compressors achieve highest IPLV.\n\nFREE COOLING:\nWhen ambient wet-bulb < 13°C, cooling tower supplies chilled water via heat exchanger without chiller.\nSaves 70–90% of cooling energy during free cooling hours.\n\nDATA CENTRE PUE:\nPUE = Total facility power / IT power\nTarget PUE ≤ 1.4 for efficient data centre\nHVAC optimisation directly reduces PUE.",
      formula:{
        IS:'IPLV = 0.01A + 0.42B + 0.45C + 0.12D\nPUE = total facility kW / IT kW\nFree cooling saving: E = chiller kW × FC hours',
        NEC:'ASHRAE 90.1 Table 6.8: min IPLV by chiller size\nARI 550/590: IPLV testing standard',
        IEC:'EN 14825: part load SCOP/SEER\nEN 14511: full load efficiency'
      },
      example:{
        sector:'dc',
        given:'Data centre 1 MW IT. PUE target 1.3. Chiller COP=5, IPLV COP=7. Free cooling 2000 h/year.',
        steps:[
          'Total facility: 1000 × 1.3 = 1300 kW',
          'HVAC budget: 1300 − 1000 (IT) − 50 (misc) = 250 kW',
          'Chiller capacity: 250 kW electrical × COP5 = 1250 kW cooling',
          'At IPLV (50% load, COP7): 625/7 = 89 kW input',
          'Free cooling saving: 250 × 2000/8760 = 57 MWh/year',
          'Value: 57,143 kWh × ₹8 = ₹4.57 lakhs/year',
          'PUE with free cooling: slightly below 1.3 target ✓'
        ],
        result:'Specify chiller IPLV COP ≥ 7.0. Water-side economiser for free cooling. Free cooling saves ₹4.57 lakhs/year.'
      },
      rot:["Every 0.1 PUE improvement on 1 MW data centre: 876 MWh/year = ₹70 lakhs/year at ₹8/kWh. HVAC efficiency directly translates to cost."],
      mistakes:["Sizing DC cooling for IT load only — include lighting, UPS losses, future growth","Air-cooled chillers for large data centres — water-cooled is 20–30% more efficient"],
      interviewQs:["What is IPLV and why more important than full-load COP?","How does free cooling work and when is it economical?","How is PUE calculated?"],
      siteTips:["Trend chiller kW and TR from BMS. Calculate actual COP weekly. Declining COP = refrigerant leak, fouled condenser, or compressor wear."],
      diagram:{type:'schematic', svgId:'hvac-adv-diagram'}
    },
    sectorNotes:{res:'Residential AC: split units, inverter type. 1–3 kW each. No separate electrical design required.',com:'100–2000 TR chiller plants. ECBC mandatory. VFDs on all. Sub-metering on HVAC circuits.',dc:'HVAC ≈ 40% of total power (PUE 1.4). Precision cooling. Free cooling. N+1 redundancy.',ind:'Process cooling — industrial chillers. Ammonia/CO2 refrigerants in large plants.',og:'Offshore HVAC: Ex-rated compressors in pressurised modules.',hc:'N+1 for OR, ICU. Humidity control 25–60% RH critical. Pharmacy cooling critical.'},
    standards:{
      IS:[{clause:'NBC 2016 Part 8',title:'HVAC electrical load allowances',note:'Load density and energy compliance'},{clause:'ECBC 2017',title:'Energy Conservation Building Code',note:'VFD mandates, minimum COP'}],
      NEC:[{clause:'ASHRAE 90.1 Section 6',title:'HVAC efficiency requirements',note:'Minimum COP and VFD mandates'},{clause:'NEC Art.440',title:'Air conditioning equipment',note:'Motor protection and wiring for HVAC'}],
      IEC:[{clause:'EN 14511',title:'Chiller performance testing',note:'COP testing methodology'},{clause:'ISO 50001',title:'Energy management systems',note:'HVAC energy monitoring framework'}]
    },
    quiz:[]
  },

  /* ── 7. SWITCHGEAR & PANELS ── */
  {
    id:'switchgear-panels', level:3, icon:'🗄️', title:'Switchgear & Panel Design',
    desc:'MDB, SMDB, and DB design — bus rating, fault level, metering, and protection hierarchy.',
    tags:['Switchgear', 'Panel Design', 'MDB', 'Distribution Board'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,
    beginner:{
      intro:"Switchgear and panels are the distribution backbone of every installation. Getting bus rating, fault level, protection hierarchy, and physical arrangement right is the mark of a competent electrical engineer.",
      whyMatters:[
        {icon:'⚡', text:'Undersized busbar or wrong fault rating = catastrophic failure and fire'},
        {icon:'📋', text:'Poor panel design makes maintenance dangerous and future modifications impossible'},
        {icon:'🛡️', text:'Correct protection hierarchy — only the faulted circuit disconnects'}
      ],
      theory:"PANEL HIERARCHY:\nHV Switchgear → Transformer → LV MDB → SMDB → Floor DB → Final circuits\n\nMDB COMPONENTS:\nMain incomer: ACB (Air Circuit Breaker) or MCCB with electronic trip unit\nBusbars: copper or aluminium, rated for continuous + fault current\nFeeders: MCCBs per load group\nMeasurement: energy meter, power analyser\nProtection: overcurrent (51), earth fault (51N), under/overvoltage (27/59)\n\nFAULT LEVEL:\nMDB fault level = Isc from transformer (= FLC/Z%)\nAll switchgear in MDB must have fault rating ≥ Isc\nFault current decreases downstream as cable impedance adds\n\nBUSBAR SIZING:\nCurrent density J = 1.2–1.6 A/mm² for copper (depends on cooling)\nBusbar rating must exceed MD current\nFault rating: thermal and electromagnetic withstand",
      formula:{
        IS:'Incomer: I = MD(kVA)/(√3 × 0.415)\nBusbar: A = I/J (J=1.4 A/mm² enclosed copper)\nFault: Isc = FLC/Z%\nAll switchgear: Ics ≥ Isc\nIS 13947: switchgear, IS 8084: busbars',
        NEC:'NEC Art.408: panelboard construction\nNEC 110.9: interrupting rating ≥ fault current\nBusway: NEC Art.366',
        IEC:'IEC 61439: LV switchgear assemblies\nIEC 60947-2: circuit breakers\nTemp rise: ≤70°C above ambient (IEC 61439)'
      },
      example:{
        sector:'com',
        given:'Commercial MDB: MD = 850 kVA, 415V. Transformer 1000 kVA, Z=5%.',
        steps:[
          'Incomer current: 850,000/(√3×415) = 1182A → select 1250A ACB',
          'Transformer FLC: 1,000,000/(√3×415) = 1391A',
          'Isc at MDB: 1391/0.05 = 27,820A = 27.8 kA',
          'All equipment fault rating: ≥36 kA (next standard above 27.8)',
          'Peak Isc: 2.0 × 27.8 = 55.6 kA peak — busbar electromagnetic withstand',
          'Busbar: 1250A/1.4 = 893 mm² → use 4×(60×5mm) = 1200 mm² per phase'
        ],
        result:'1250A ACB, 36 kA Ics. Copper busbar 4×(60×5mm) per phase. All MCCBs: ≥36 kA.'
      },
      rot:["Fault rating: always go to next standard above calculated Isc. System can expand — fault levels can increase.","Busbar temperature: closed cubicle copper ≤70°C above ambient. Use 1.2 A/mm² if ventilation is poor."],
      mistakes:["MCCBs with 10 kA rating in MDB with 25 kA fault — explosive failure during fault","No cable entry space at panel bottom — retrofitting requires complete rewiring"],
      interviewQs:["How do you determine fault rating for switchgear in an MDB?","What is the difference between ACB and MCCB?","Why does fault current decrease downstream from the transformer?"],
      siteTips:["During factory acceptance test (FAT): verify fault ratings, busbar torque settings, instrument calibration, and all interlock function tests. Defects at FAT are cheaper to fix than on site."],
      diagram:{type:'sld', svgId:'mdb-sld'}
    },
    advanced:{
      theory:"ACB ELECTRONIC TRIP UNIT SETTINGS:\nLong time (LT): continuous current, set 0.4–1.0×In\nShort time (ST): delayed trip for discrimination, 2–10×In with 0.1–0.4s delay\nInstantaneous (Inst): high fault, 10–15×In, no delay\nGround fault (GF): earth fault, 0.1–0.4×In\n\nDUAL BUS SYSTEMS:\nTwo independent buses each from separate transformer.\nBus Tie Switch (BTS) normally open.\nOn transformer failure: BTS closes, Bus loads transfer.\nRequirement: each transformer rated for 100% total load.\n\nBUSDUCT:\nFactory-assembled up to 6300A.\nTap-off boxes at intervals for load connection.\nMore compact than cables, easier future taps.\nEconomical above ~2000A or where multiple tap-offs needed.",
      formula:{
        IS:'ACB: LT=0.85–1.0×In, ST=4–8×In/0.2s delay, Inst=12–15×In\nDual bus: each bus designed for 100% total load\nBusduct: manufacturer ampacity data\nIS 13947-2: ACB specifications',
        NEC:'NEC 408.36: panelboard protection\nBusway: NEC Art.368\nIEEE 1015: switchgear protection coordination',
        IEC:'IEC 61439: complete assembly verification\nIEC 60947-2: ACB characteristics\nIEC 61557-12: power monitoring equipment'
      },
      example:{
        sector:'dc',
        given:'Data centre dual-bus Tier III: 2 × 1000 kVA transformers, Bus A and Bus B, BTS. Design coordination.',
        steps:[
          'Bus A: Transformer 1 → ACB 1 (1391A, 36kA) → Bus A feeders',
          'Bus B: Transformer 2 → ACB 2 (1391A, 36kA) → Bus B feeders',
          'BTS: 1391A, 36kA, normally open',
          'Fault on T1: ACB 1 trips → BTS closes (50ms delay) → Bus A transfers to T2',
          'T2 must carry 100% load during transfer — generator must start within 10s',
          'Selectivity: BTS closes 50ms after ACB 1 trip confirmed'
        ],
        result:'Dual-bus with BTS provides Tier III concurrent maintainability. Each transformer rated 100% load. BTS: 50ms delay coordination.'
      },
      rot:["Dual bus rule: each bus sized for 100% total load — not 50%. When one transformer fails, the other must supply everything."],
      mistakes:["All critical loads on one bus — defeats the purpose of dual bus","Not testing BTS during commissioning — transfer time must be verified"],
      interviewQs:["Explain Bus Tie Switch purpose in a dual bus system.","How do you set ACB trip units for selectivity with downstream MCCBs?","What is sub-metering and why is it required for ECBC compliance?"],
      siteTips:["Test complete protection coordination under simulated fault during commissioning. Never commission data centre without protection coordination verification."],
      diagram:{type:'sld', svgId:'mdb-adv-sld'}
    },
    sectorNotes:{res:'MCB consumer units (DB), 6–16 way. IS 8828 MCBs. Single MCB or RCCB incomer.',com:'MDB with ACB incomer, MCCB feeders. AMR metering. IS 13947. Energy monitoring for ECBC.',dc:'Dual-bus standard Tier III+. 36–65 kA fault rating. ZSI for arc flash. DCIM integration.',ind:'MCC: motor starters and feeders. Withdrawable breakers for live maintenance. Bus-coupler.',og:'Ex-rated panels. Purged/pressurised (Ex p). Intrinsic safety barriers for instruments.',hc:'Essential and normal panels separated. Essential on generator+UPS. Life safety labeled.'},
    standards:{
      IS:[{clause:'IS 13947-1',title:'LV switchgear general requirements',note:'Harmonised with IEC 60947'},{clause:'IS 8084',title:'Busbars for switchgear',note:'Copper/aluminium busbar current ratings'}],
      NEC:[{clause:'NEC Art.408',title:'Panelboards and switchgear',note:'Construction, ratings, and installation'},{clause:'NEC Art.230',title:'Services',note:'Service entrance switchgear and metering'}],
      IEC:[{clause:'IEC 61439-1',title:'LV switchgear assemblies',note:'Complete testing and verification'},{clause:'IEC 60947-2',title:'Circuit breakers',note:'ACB and MCCB ratings and testing'}]
    },
    quiz:[]
  },

  /* ── 8. BUSBAR SIZING ── */
  {
    id:'busbar-sizing', level:3, icon:'🔩', title:'Busbar Sizing',
    desc:'Current density, temperature rise, short circuit thermal and electromagnetic force withstand.',
    tags:['Busbar Sizing', 'Busbar Calculation', 'Current Density'],
    sectors:['ind','dc','com'], green:false, calculator:'calcBusbar',
    beginner:{
      intro:"Busbars carry the full panel load. Too small and they overheat. Wrong shape and they can't withstand the electromagnetic force of a short circuit. Busbar sizing combines thermal, electrical, and mechanical engineering.",
      whyMatters:[
        {icon:'🔥', text:'Overheated busbar melts insulation, causes arcing and fires in the switchroom'},
        {icon:'💥', text:'Short circuit forces physically bend busbars — they must withstand peak current force'},
        {icon:'⚡', text:'Wrong busbar size limits entire building capacity — expensive to replace'}
      ],
      theory:"MATERIALS:\nCopper: higher conductivity, higher cost. Standard for panels.\nAluminium: 60% conductivity, lighter, cheaper. Used for large busbars and busduct.\n\nCURRENT DENSITY (J):\nCopper in enclosure: J = 1.0–1.4 A/mm²\nCopper in free air: J = 1.6–2.0 A/mm²\nAluminium: J = 0.8–1.2 A/mm²\n\nTEMPERATURE:\nAmbient + rise ≤ max temperature\nEnclosed insulated copper: max 70°C rise (IEC 61439)\n\nSHORT CIRCUIT WITHSTAND:\nThermal: S ≥ Isc × √t / k (k=135 Cu-PVC, k=143 Cu-XLPE equivalent)\nElectromagnetic force: F = 2×10⁻⁷ × I_peak² × L/d (N/m)\nI_peak = √2 × κ × Isc (κ = peak factor ≈ 2.0 for LV systems)",
      formula:{
        IS:'I = J × A (mm²)\nSC thermal: S ≥ Isc × √t / k\nSC force: F = 2×10⁻⁷ × I_peak² × L/d (N/m)\nForce per support: F_support = F × L_span\nIS 8084: busbar current ratings',
        NEC:'NEC Art.366: busway ratings\nShort circuit: IEEE 605 (bus conductor design)\nCopper ampacity: 1000A/sq in approximate',
        IEC:'IEC 61439 Annex B: busbar temperature rise\nIEC 60865: short circuit mechanical effects\nF_m = (μ₀/2π) × (√2 × Isc)² × L/d'
      },
      example:{
        sector:'ind',
        given:'Industrial MDB busbar: 1000A continuous. Fault 25 kA, clearing 0.3s. Copper, enclosed.',
        steps:[
          'Current density: J = 1.3 A/mm² (enclosed)',
          'Area: 1000/1.3 = 769 mm² → select 100×8mm = 800 mm²',
          'SC thermal: S ≥ 25,000×√0.3/135 = 25,000×0.548/135 = 101.5 mm²',
          '800 mm² >> 101.5 mm² ✓ (continuous rating governs)',
          'I_peak = √2 × 2.0 × 25,000 = 70,711A',
          'F (L=0.5m, d=0.05m): 2×10⁻⁷×70,711²×0.5/0.05 = 1000 N/m',
          'Force per support: 1000×0.5 = 500N = 51 kgf — verify bracket rating'
        ],
        result:'100×8mm Cu busbar (800 mm²). SC thermal: ✓. SC force: 500N/support — verify support bracket ratings. Clamp supports at 500mm spacing.'
      },
      rot:["Busbar check order: (1) continuous current by density, (2) SC thermal withstand, (3) SC electromagnetic force. Continuous rating usually governs."],
      mistakes:["Using free-air current density for enclosed busbars — use 1.2–1.4 A/mm², not 1.6+","Ignoring peak SC force — busbars that pass thermal check can be mechanically destroyed by electromagnetic forces"],
      interviewQs:["Difference between thermal and electromagnetic SC withstand?","Why does current density decrease in an enclosure?","How does support spacing affect electromagnetic force on brackets?"],
      siteTips:["Verify busbar bolt torque during commissioning — under-torqued joints cause high resistance, hot spots, and arc flash. Use calibrated torque wrench per manufacturer specification."],
      diagram:{type:'schematic', svgId:'busbar-diagram'}
    },
    advanced:{
      theory:"SKIN EFFECT:\nFor busbars >18mm wide at 50Hz: AC current concentrates near surface.\nSkin depth (Cu): δ = 9.3mm at 50Hz.\nMitigation: use multiple thinner bars in parallel (e.g. 4×25mm instead of 1×100mm).\n\nBUSDUCT (BUSWAY):\nFactory assembled, up to 6300A.\nLP type: for enclosed switchroom use. HP type: IP54+ for open areas.\nJoints: resistance ≤ 10% of equivalent cable resistance.\nEconomical above ~2000A or where multiple tap-offs needed.",
      formula:{
        IS:'Skin depth: δ = √(ρ/πfμ₀) = 9.3mm (Cu, 50Hz)\nMultiple bars: each carries I/n with individual derating\nBusduct: manufacturer ampacity at rated temperature rise',
        NEC:'IEEE 605: skin effect correction factors\nBusway: NEC Art.368 with manufacturer data',
        IEC:'IEC 60865-1: electromagnetic forces on busbars\nIEC 61439 Annex B: temperature rise\nBusduct: IEC 61439-6 (busbar trunking systems)'
      },
      example:{
        sector:'dc',
        given:'Data centre: 3000A busduct, 25m run. Compare cable vs busduct.',
        steps:[
          'Cable: need 3×(3×300mm² Cu) per phase = 27 cables per phase',
          'Cable weight: 27 × 2.7 kg/m × 25m = 1823 kg',
          'Busduct weight: ~15 kg/m × 25m = 375 kg',
          'Cable VD: 25×3000×0.060/1000 = 4.5V = 1.08%',
          'Busduct VD: 3000×0.05mΩ/m×25 = 3.75V = 0.90%',
          'Busduct: 80% weight reduction, easier future tap-offs, factory tested',
          'Cost: busduct ~3× cable cost — justified by installation savings and flexibility'
        ],
        result:'Busduct recommended for 3000A, 25m. Weight: 375 vs 1823 kg. Future taps without cabling. Justify cost with installation savings.'
      },
      rot:["Busduct breakeven: typically more economical above 2000A or when multiple tap-offs are needed. Below 2000A with no taps: cable is cheaper."],
      mistakes:["Tap-off box positions not aligned with actual load locations — relocation is expensive","IP30 busduct in wet or dusty area — failure guaranteed"],
      interviewQs:["What is skin effect and how does it affect busbar capacity?","When is busduct preferred over cables?","How do eddy currents in steel panels affect busbar temperature?"],
      siteTips:["After commissioning, IR scan all busbar joints under full load. Hot spots >10°C above surrounding joints = high resistance — re-torque or replace joint before arc fault."],
      diagram:{type:'schematic', svgId:'busbar-adv-diagram'}
    },
    sectorNotes:{res:'Not applicable.',com:'MDB: 630–2000A copper busbars. Busduct from substation to MDB in large buildings.',dc:'Busduct standard for main distribution 2000–4000A. Overhead busduct with tap-offs to UPS and PDUs.',ind:'Large busbars in HV substations. MCC main bus 1000–4000A. Multiple parallel bars.',og:'Compact busduct preferred (space). Aluminium for weight. IP66 for marine environment.',hc:'Essential and normal bus physically separated. Labels mandatory on both.'},
    standards:{
      IS:[{clause:'IS 8084',title:'Busbars for switchgear assemblies',note:'Cu and Al current ratings'},{clause:'IS 13947-1',title:'LV switchgear',note:'Temperature rise limits'}],
      NEC:[{clause:'NEC Art.366',title:'Busways',note:'Ratings and tap-off requirements'},{clause:'IEEE 605',title:'Substation buswork design guide',note:'Skin effect and SC force calculation'}],
      IEC:[{clause:'IEC 60865-1',title:'Short circuit — mechanical effects',note:'Electromagnetic force on busbars'},{clause:'IEC 61439-6',title:'Busbar trunking systems',note:'Busduct design and type testing'}]
    },
    quiz:[]
  },

  /* ── 9. CABLE TRAY SIZING ── */
  {
    id:'cable-tray-sizing', level:3, icon:'📦', title:'Cable Tray Sizing',
    desc:'Fill ratio, tray width selection, weight loading, installation method derating.',
    tags:['Cable Tray Sizing', 'Tray Fill', 'Cable Management'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,
    beginner:{
      intro:"Cable trays carry all cables in a building. Size them too small and cables overheat. Size them too large and you waste space and money. The key parameters are fill ratio and weight rating.",
      whyMatters:[
        {icon:'🔥', text:'Overcrowded cable trays trap heat — cables derate and fail prematurely'},
        {icon:'⚖️', text:'Overloaded cable trays collapse — catastrophic failure in cable shafts'},
        {icon:'📋', text:'Tray fill is a code requirement — inspectors check it on commissioning'}
      ],
      theory:"TRAY TYPES:\nLadder: rungs across side rails. Best ventilation. Standard for power cables.\nPerforated: solid base with holes. Good for mixed use.\nSolid bottom: no holes. Best for data/signal. Most heat retention.\nWire basket: lightweight mesh. IT environments.\n\nFILL LIMITS:\nLadder (power): single layer, fill depth ≤ [[50mm|2 in.]] or 1 cable diameter from tray top\nSolid bottom (signal): fill ≤ 50% cross-section area\nPerforated (mixed): fill ≤ 40% cross-section area\n\nWIDTH SELECTION:\nArrange cables side by side (single layer for ladder).\nSum of cable ODs = minimum tray width required.\nSelect next standard: [[50, 75, 100, 150, 200, 300, 450, 600mm|2\", 3\", 4\", 6\", 9\", 12\", 18\", 24\"]]\n\nSUPPORT SPACING:\nSteel: [[1.5m max|5 ft max]]. Aluminium: [[1.2m|4 ft]]. Wire basket: [[0.9m|3 ft]].\nAt bends: support within [[300mm|12\"]] of start and end.",
      formula:{
        IS:'Fill% = Σ(π×OD²/4) / tray cross-section × 100\nSingle layer: Σ(OD) ≤ tray width\nWeight: Σ(cable kg/m) × span = load per support\nIEC 61537 (adopted): fill and load capacity',
        NEC:'NEC 392.22: single layer fill for ladder tray\nNEC 392.22(A): cable count limits\nNEC 310.15(B)(3): adjustment factors for cable trays',
        IEC:'IEC 61537: cable tray systems\nFill factor: total cable area / tray area\nWeight rating per span: IEC 61537 Annex B'
      },
      example:{
        sector:'ind',
        given:'30 cables: [[10×35mm² (OD=28mm), 15×16mm² (OD=22mm), 5×10mm² (OD=17mm)|10× #2 AWG (OD=1.1"), 15× #6 AWG (OD=0.87"), 5× #8 AWG (OD=0.67")]]. Ladder tray.',
        steps:[
          'Single layer — arrange side by side:',
          '[[10×28 = 280mm + 15×22 = 330mm + 5×17 = 85mm = 695mm total width|10×1.1\" = 11\" + 15×0.87\" = 13.05\" + 5×0.67\" = 3.35\" = 27.4\" total width]]',
          '[[Select 750mm wide tray (next standard above 695mm)|Select 30\" wide tray (next standard above 27.4\")]]',
          '[[Depth check: largest cable OD=28mm < 75mm tray depth ✓|Depth check: largest cable OD=1.1\" < 3\" tray depth ✓]]',
          '[[Weight per metre: (10×2.8 + 15×1.8 + 5×1.2) kg/m = 61 kg/m|Weight per foot: (10×1.9 + 15×1.2 + 5×0.8) lb/ft = 41 lb/ft]]',
          '[[Weight per 1.5m span: 61 × 1.5 = 91.5 kg|Weight per 5ft span: 41 × 5 = 205 lb]]',
          '[[Verify tray load rating ≥ 91.5 kg at 1.5m span|Verify tray load rating ≥ 205 lb at 5ft span]]'
        ],
        result:'[[750mm wide × 75mm deep ladder tray|30\" wide × 3\" deep ladder tray]]. Single layer. [[Verify tray load rating ≥ 91.5 kg at 1.5m span.|Verify tray load rating ≥ 205 lb at 5ft span.]]'
      },
      rot:["Always leave 25% spare tray space at design. A [[750mm tray designed to 550mm|30\" tray designed to 22\"]] effective width leaves room without replacing the tray when new cables are added.","Ladder tray = single layer always. Never stack cables. That is what solid-bottom or perforated tray is for."],
      mistakes:["Multiple cable layers in ladder tray — bottom cables overheat. Ladder tray = single layer only.","Not checking weight capacity — 30 large cables on 1.5m span easily exceeds tray load rating"],
      interviewQs:["Why does solid-bottom tray have lower fill percentage than ladder?","How do you determine maximum support spacing?","Why is grouping derating more severe for many cables in one tray?"],
      siteTips:["Walk all tray routes before cable pulling: check no obstructions at junctions, bends have correct radius, supports at correct spacing, earthing clips fitted. Fixing these after cables are pulled is very difficult."],
      diagram:{type:'schematic', svgId:'cable-tray-diagram'}
    },
    advanced:{
      theory:"GROUPING DERATING:\nCables in trays: grouping derating factor applies.\n>9 cables single layer: factor 0.70. Multiple layers: 0.55.\nFor IT/server rooms: 50 cables in one tray → factor 0.50.\n\nFIRE PERFORMANCE:\nEscape routes: LSZH cables mandatory (IS 7098).\nFire barriers at compartment walls — intumescent seals.\nFire survival cables (FP/MICC): maintain circuit at 950°C for 3 hours.\nAlways keep emergency tray routes separate from power.\n\nOFFSHORE TRAY:\nGRP (glass-reinforced plastic): 60% lighter than steel, non-corrosive.\nGRP non-conductive: additional earthing continuity required.\nOffshore: cables individually cleated, not resting loose in tray.",
      formula:{
        IS:'Grouping: Cf from IS 3961 Table 34\nDerated Iz = base Iz × Cf_temp × Cf_group\n>9 cables: Cf = 0.70 (single layer)',
        NEC:'NEC 310.15(B)(3): 4–6 conductors 0.80, 7–9 0.70, 10–20 0.50',
        IEC:'IEC 60364-5-52 Table B.52.3: reduction factors\nNeutral: full size for harmonic loads'
      },
      example:{
        sector:'dc',
        given:'Data centre overhead tray: 50 × 10mm² cables together. Calculate derating.',
        steps:[
          '50 cables → grouping factor 0.50',
          '10mm² Cu XLPE base Iz (free air): 65A',
          'Derated: 65 × 0.50 = 32.5A',
          'Server circuit: typical 16A → 32.5A > 16A (marginal for future 20A circuits)',
          'Better: split into 5 trays of 10 cables → factor 0.70 → Iz = 45.5A',
          'Splitting also aids cable management and future additions'
        ],
        result:'Single tray: Iz=32.5A (marginal). 5 smaller trays of 10 cables: Iz=45.5A (better margin and management).'
      },
      rot:["Data centre: never fill trays >60% at design. Future servers arrive faster than expected. Full tray on day 1 = cable chaos within 2 years."],
      mistakes:["Ignoring grouping derating — packed data centre tray has 50–60% of free-air rating","Mixing power, data, fire alarm in one tray — EMI problems and compromised fire integrity"],
      interviewQs:["How does grouping factor change from 3 cables to 20 cables in tray?","Why must fire alarm cables be in separate trays from power?","GRP tray advantage over steel offshore?"],
      siteTips:["Label trays with maximum fill capacity (kg/m and mm² cable) — prevents future maintenance teams from overloading when adding cables."],
      diagram:{type:'schematic', svgId:'cable-tray-adv-diagram'}
    },
    sectorNotes:{res:'No formal cable trays — conduit or surface wiring.',com:'Galvanised steel ladder tray in ceiling voids. 100–300mm wide. Separate routes: power, IT, fire.',dc:'Structured overhead or underfloor busway for power, separate tray for data. Every cable tagged in DCIM.',ind:'Heavy steel tray. Chequer-plate covers where mechanical protection needed. Cleats every 300mm.',og:'GRP tray. All cables individually cleated. Transit frames at fire/blast walls. Cable schedule mandatory.',hc:'Separate routes: essential vs non-essential. Fire survival cables in protected trays.'},
    standards:{
      IS:[{clause:'IEC 61537 (IS equivalent)',title:'Cable tray systems',note:'Fill, load capacity, classification'},{clause:'IS 694',title:'Cable dimensions',note:'OD data for fill calculation'}],
      NEC:[{clause:'NEC Art.392',title:'Cable trays',note:'Fill and support requirements'},{clause:'NEC 310.15(B)(3)',title:'Adjustment factors',note:'Grouping derating in cable tray'}],
      IEC:[{clause:'IEC 61537',title:'Cable tray and ladder systems',note:'Complete design and installation standard'},{clause:'IEC 60364-5-52',title:'Wiring system installation',note:'Derating including cable tray methods'}]
    },
    quiz:[]
  },

  /* ── 10. BREAKER SELECTION ── */
  {
    id:'breaker-selection', level:3, icon:'🔘', title:'Breaker Selection Logic',
    desc:'Frame size, trip unit type, breaking capacity, and selectivity for MCBs, MCCBs, and ACBs.',
    tags:['Breaker Selection', 'MCB', 'MCCB', 'ACB', 'Protection'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,
    beginner:{
      intro:"Selecting the wrong circuit breaker — wrong frame, wrong trip curve, wrong breaking capacity — is a code violation and a safety hazard. This topic gives you a 5-step systematic selection logic.",
      whyMatters:[
        {icon:'💥', text:'Breaking capacity below fault current = catastrophic explosion during fault'},
        {icon:'⚡', text:'Wrong trip curve = nuisance tripping on motor start or failure to trip on overload'},
        {icon:'🛡️', text:'Correct coordination — only the right breaker trips, not the one upstream'}
      ],
      theory:"5-STEP SELECTION LOGIC:\n\nStep 1 — RATED CURRENT:\nIn ≥ design current, In ≤ cable ampacity\n\nStep 2 — TRIP CHARACTERISTIC:\nType B (3–5×In): residential, lighting\nType C (5–10×In): commercial, light motors\nType D (10–20×In): heavy inductive, welding, large motors\nMCCB adjustable magnetic: set above max inrush of load\n\nStep 3 — BREAKING CAPACITY:\nIcs ≥ prospective fault current at installation point\nStandard: 6, 10, 16, 25, 36, 50, 65, 80, 100 kA\nAlways select ≥ calculated Isc\n\nStep 4 — POLES:\n1P: single phase (line only)\n2P: single phase (line + neutral switched)\n3P: 3-phase\n4P: 3-phase + neutral — use at TN-C-S neutral separation point\n\nStep 5 — SELECTIVITY:\nUpstream breaker must not trip before downstream at any fault current\nIf not selective: upgrade upstream to electronic trip with ST delay, or use ZSI",
      formula:{
        IS:'In: max load current ≤ In ≤ cable Iz\nInstantaneous trip: > 1.2 × Istart (max inrush)\nBreaking: Ics ≥ Isc at board\nIS 13947-2: MCCBs, IS 8828: MCBs',
        NEC:'Motor OCPD: ≤250% FLC fuse, 175% CB (NEC 430.52)\nSIC ≥ available fault current (NEC 110.9)\nNEC Art.240: overcurrent protection',
        IEC:'In ≤ cable Iz, ≥ design current\nTrip: B (3–5×), C (5–10×), D (10–20×) per IEC 60898\nIcs ≥ fault at board'
      },
      example:{
        sector:'com',
        given:'MCCB for 185A 3-phase feeder cable. Source fault 22 kA. Board fault after 50m cable: 8 kA.',
        steps:[
          'Step 1: In ≥ 185A → select 200A frame MCCB',
          'Step 2: feeder to sub-board — adjustable, set thermal at 185A, magnetic at 8×200=1600A',
          'Step 3: fault at MDB = 22 kA → select Ics ≥ 25 kA (next standard)',
          'Downstream MCCBs (8 kA fault): Ics ≥ 10 kA',
          'Step 4: 3P (TN-S, neutral unswitched at sub-board)',
          'Step 5: MDB ACB (1000A, 0.1s ST delay) vs this MCCB (200A)',
          'At 8 kA fault: MCCB trips instantaneously (<20ms). ACB ST delay 0.1s — stays closed ✓'
        ],
        result:'200A 3P MCCB, 25 kA Ics. Electronic trip: thermal 185A, magnetic 1600A. Selectivity with 1000A ACB at 0.1s ST delay confirmed.'
      },
      rot:["Fault rating: never select Ics below available fault current. Even once. Breaker failure during fault = explosion.","Always go to next standard above calculated Isc — systems expand, fault levels increase."],
      mistakes:["6 kA MCB in MDB with 25 kA fault — guaranteed explosive failure","Type B MCBs on motor circuits — nuisance trip on motor inrush","Not adjusting MCCB trip settings after installation — default ≠ optimised"],
      interviewQs:["Difference between Icu and Ics for a circuit breaker?","How do you ensure selectivity between 200A MCCB and 63A MCB?","Why is 4-pole breaker needed at TN-C-S neutral separation point?"],
      siteTips:["Label each adjustable MCCB: 'Set: 185A thermal, 1600A magnetic' on inside of cubicle door. Prevents future engineers from mis-setting."],
      diagram:{type:'schematic', svgId:'breaker-selection-diagram'}
    },
    advanced:{
      theory:"ELECTRONIC TRIP UNITS (ETU):\nModern ACBs: precise, adjustable protection.\nLT: thermal overload (0.4–1.0×In)\nST: delayed short circuit (2–10×In, 0.1–0.4s delay)\nInst: high fault (10–15×In, no delay)\nGF: earth fault (0.1–0.4×In)\n\nCURRENT-LIMITING BREAKERS:\nHigh-speed MCCBs or fuse-link: limit let-through to <50% of prospective fault.\nAllow downstream MCBs with lower Ics to work.\nMust be tested, listed combination — same manufacturer.\n\nFUSE vs CB COORDINATION:\nFuse clears faster at high fault currents — used as back-up.\nCB for low-level faults (adjustable, resettable).\nFuse + CB: fuse for high-level (fast), CB for low-level (resettable).",
      formula:{
        IS:'Total selectivity: I_trip_upstream > I_peak_downstream\nZSI: upstream delay reduced to 50ms when downstream sees fault\nLet-through: I²t ≤ k²S²\nIS 13947-2 Annex F: selectivity tables',
        NEC:'NEC 240.86: series ratings (listed combos only)\nIEEE 1015: industrial selectivity\nCurrent limiting class: CB 1, 2, 3',
        IEC:'IEC 60947-2 Annex A: back-up protection tables\nSelectivity: P, T, S, G categories\nICw: short time withstand (ACBs only)'
      },
      example:{
        sector:'ind',
        given:'MCC: 1000A ACB (ST=0.3s), 200A MCCB, 32A Type C MCB. Fault at MCB: 5 kA.',
        steps:[
          'MCB (Type C, 32A): magnetic = 5–10×32 = 160–320A. 5 kA >> → trips instantaneously (<20ms)',
          'MCCB (200A, magnetic 1600A): 5 kA > 1600A → also would trip instantaneously = NO selectivity',
          'Fix: set MCCB Inst = 8000A (above 5 kA). Set ST = 0.2s delay.',
          'Now: at 5 kA — MCB trips <20ms, MCCB fault current drops to zero, MCCB does NOT trip ✓',
          'ACB ST=0.3s > MCCB ST=0.2s → ACB stays closed ✓',
          'Full discrimination achieved through time grading'
        ],
        result:'Full selectivity: MCB <20ms, MCCB ST 0.2s, ACB ST 0.3s. Verify 5 kA < MCCB Ics (need ≥10 kA at MCB location).'
      },
      rot:["Time grading minimum: 0.1–0.2s between each level. 3 levels: MCB <20ms, MCCB 0.1s, ACB 0.3s."],
      mistakes:["MCCB Inst trip below max sub-board fault — MCCB and ACB both trip simultaneously","Series rating with unverified/mixed-manufacturer combinations — may fail catastrophically"],
      interviewQs:["What is total selectivity and how achieved?","Difference between Icu and Icw for ACB?","When beneficial to use current-limiting circuit breaker?"],
      siteTips:["Keep protection coordination study in substation. Every person who changes a trip setting must update the document. Undocumented changes cause cascade tripping."],
      diagram:{type:'schematic', svgId:'breaker-coord-diagram'}
    },
    sectorNotes:{res:'MCB Type B/C, 6kA standard. RCBOs combine MCB and RCD. IS 8828.',com:'MCCB for feeders (10–36kA). ACB for main (36–65kA). Electronic trip preferred. Selectivity study required.',dc:'High fault levels: 36–65kA at MDB. ZSI standard. Current-limiting MCCBs reduce arc energy.',ind:'MCB Type D for motors. MCCB adjustable for feeders. ACB for main. Coordination study mandatory.',og:'SIL-rated for safety instrumented circuits. Ex-rated for hazardous areas. Settings locked.',hc:'Essential breakers: labeled, settings locked, tested monthly. Fire pump: supervised and isolated.'},
    standards:{
      IS:[{clause:'IS 8828',title:'MCBs for household installations',note:'Types B, C, D and ratings'},{clause:'IS 13947-2',title:'Circuit breakers for industrial use',note:'MCCB and ACB — breaking capacity and selectivity'}],
      NEC:[{clause:'NEC Art.240',title:'Overcurrent protection',note:'Complete NEC requirements'},{clause:'NEC 110.9',title:'Interrupting rating',note:'Must equal available fault current'}],
      IEC:[{clause:'IEC 60898',title:'MCBs for household',note:'Type B, C, D characteristics'},{clause:'IEC 60947-2',title:'Circuit breakers for industrial',note:'MCCB and ACB — current limiting and selectivity'}]
    },
    quiz:[]
  },

  /* ── 11. EV CHARGING ── */
  {
    id:'ev-charging', level:3, icon:'🚗', title:'EV Charging Infrastructure',
    desc:'Level 1/2/DC Fast charger sizing, simultaneous demand, supply design, and smart load management.',
    tags:['EV Charging', 'Electric Vehicles', 'EV Charger', 'Smart Charging'],
    sectors:['res','com'], green:true, calculator:'calcEV',
    beginner:{
      intro:"Electric vehicles are growing rapidly. Getting electrical infrastructure right from the start is far cheaper than retrofitting it later. EV charging is now a mandatory consideration in new building design.",
      whyMatters:[
        {icon:'🚗', text:'EV adoption is accelerating — undersized infrastructure needs expensive retrofit in 3–5 years'},
        {icon:'⚡', text:'Multiple DC fast chargers simultaneously can overload a supply if not managed'},
        {icon:'💚', text:'EV charging is a key sustainability metric for LEED, IGBC, and green building certification'}
      ],
      theory:"CHARGER TYPES:\n\nLevel 1 (AC slow): 3.3–3.7 kW, single-phase. [[Standard 16A socket|Standard 15A/20A socket (NEMA 5-15/5-20)]]. 8–12 hours for 50 kWh.\n\nLevel 2 (AC fast): 7.4–22 kW, single or 3-phase. Dedicated EVSE. 2–4 hours for 50 kWh.\n\nDC Fast Charger (DCFC): 50–350 kW DC output. 20–60 minutes for 50 kWh.\n\nSIMULTANEOUS DEMAND:\nNot all chargers run at full power simultaneously.\nResidential: diversity factor 0.3–0.5 (residents charge at different times)\nCommercial parking: 0.4–0.6 (staggered parking durations)\nHigh-power DCFC: 0.7–0.9 (designed for simultaneous use)\n\nSUPPLY REQUIREMENTS:\nDedicated circuit per charger\nDCFC: typically 3-phase [[415V, 63A–400A|480V, 100A–400A]] per charger\nLevel 2: single-phase [[230V 32A|208V/240V 32A–80A]] or 3-phase [[415V 16–32A|208V 16–32A]]\n\n[[IS 17017 / IEC 61851: EV supply equipment standard|NEC Art.625: Electric vehicle charging system]]",
      formula:{
        IS:'MD (kW) = Σ(charger rating × DF)\nMD (kVA) = MD(kW) / PF\nIS 17017: conductive charging for EVs\nICEV (India): BESCOM/state utility EV charging guidelines',
        NEC:'NEC 625.14: EV circuit sizing = 125% of max output\nNEC 625.42: EV supply circuit — 2-pole or 3-pole\nTotal load: each EVSE rated as continuous load',
        IEC:'IEC 61851-1: EV conductive charging\nIEC 62196: plugs and sockets for EV charging\nIEC 62933: V2G (vehicle to grid)'
      },
      example:{
        sector:'com',
        given:'Commercial parking: 20 Level 2 chargers (7.4 kW each) + 4 DCFC (50 kW each). DF: L2=0.4, DCFC=0.8.',
        steps:[
          'Level 2 MD: 20 × 7.4 × 0.4 = 59.2 kW',
          'DCFC MD: 4 × 50 × 0.8 = 160 kW',
          'Total EV MD: 59.2 + 160 = 219.2 kW',
          'PF (L2 chargers): 0.98, PF (DCFC): 0.95',
          'Weighted PF ≈ 0.96',
          'MD (kVA) = 219.2/0.96 = 228.3 kVA',
          'Supply cable: 228.3 kVA/(√3×415) = 317A → 400A incomer MCCB',
          'Future proofing: add conduit for 10 more L2 and 2 more DCFC'
        ],
        result:'EV supply: 400A incomer MCCB. Total 228 kVA. Consider smart charging controller to manage DCFC demand peaks and reduce transformer size.'
      },
      rot:["Smart charging rule: a smart load management controller can reduce EV infrastructure cost by 30–50% by staggering charging and avoiding simultaneous peak demand.","Future proofing: install conduit and cabling capacity for 2× current charger count. Adding charger points later is 5–10× more expensive than infrastructure at construction."],
      mistakes:["Designing EV supply without diversity factor — all DCFC at full power = massive transformer overload","Not specifying dedicated EV circuit — sharing EV on general power circuits causes circuit overloading","Forgetting that DCFC at 50 kW is a continuous load — size circuit at 125% per NEC 625.14"],
      interviewQs:["What is the difference between Level 2 and DC Fast Charging?","How does diversity factor reduce EV infrastructure costs?","What is smart EV load management?"],
      siteTips:["Install sub-metering on EV supply from day one. EV energy consumption data shows utilisation rate — helps justify future expansion and allows energy cost recovery from EV users."],
      diagram:{type:'schematic', svgId:'ev-diagram'}
    },
    advanced:{
      theory:"SMART LOAD MANAGEMENT:\nDynamic power allocation: central controller limits total EV load to available capacity.\nWhen building load is low, more power available for EVs. At peak, EV power is reduced.\nReduces transformer and supply size by 30–50%.\n\nV2G (VEHICLE TO GRID):\nEV battery discharges back to building or grid during peak demand.\nRequires bidirectional charger (V2G EVSE).\nEV acts as distributed storage — reduces peak demand charge.\n\nTARIFF OPTIMISATION:\nSmart charging: schedule charging during off-peak tariff (night rate)\nDemand response: pause charging during grid peak events\nSolar integration: prioritise EV charging when solar generation is high\n\nINFRASTRUCTURE FUTURE-PROOFING:\nConduit only: cheapest option. Run conduit + trunking during construction, add cables later.\nReady-made: install full infrastructure for planned capacity.\nStaged: install infrastructure + 25% spare cables now, remaining later.",
      formula:{
        IS:'Smart charging: MD_EV = rated_kW × min(available_grid, demand)\nV2G: P_discharge = min(EV_capacity, grid_need)\nTariff saving: ΔE = peak_kWh × (peak_rate - off_peak_rate)\nIS 17017 Part 2: smart charging (OCPP)',
        NEC:'NEC 625.14: continuous load = 125% of max output current\nSmart charging per IEEE 2030.1.1 (SAE J1772)\nV2G per IEC 62933 and IEEE 1547',
        IEC:'IEC 61851-1: EV conductive charging system\nIEC 62196: plugs — Type 1 (SAE J1772), Type 2 (Mennekes)\nOCPP (Open Charge Point Protocol): smart charging communication'
      },
      example:{
        sector:'com',
        given:'Reanalyse: 20 Level 2 + 4 DCFC with smart charging. Available building headroom: 150 kW at peak. Without smart charging: 219.2 kW demand.',
        steps:[
          'Without smart charging: 219.2 kW EV demand > 150 kW headroom → overload',
          'With smart charging controller: limit total EV to 150 kW',
          'DCFC priority: 4×50×0.8 = 160 kW (capped to 120 kW — 30 kW/DCFC)',
          'L2 gets remaining 150-120 = 30 kW → 30/20×DF = reduces each L2 from 7.4 to 1.5 kW per charger',
          'Or: EV controller gives DCFC full power, pauses some L2 chargers',
          'Result: no supply upgrade needed. Controller cost: ₹3–5 lakhs vs transformer upgrade ₹15–25 lakhs'
        ],
        result:'Smart charging saves ₹10–20 lakhs in infrastructure. Transformer unchanged. DCFC gets priority. L2 managed dynamically. Install OCPP-compatible controller.'
      },
      rot:["V2G economics: a 40 kWh EV battery can supply 32 kWh (80% DoD) during peak demand. At ₹8 peak and ₹3 off-peak: saving = 32 × (8-3) = ₹160 per cycle. Daily V2G = ₹5000/month per vehicle."],
      mistakes:["Designing for current EV count only — EV adoption doubles every 2–3 years. Design for 3× current count minimum","Installing AC-only infrastructure when DCFC demand is growing — AC chargers cannot be upgraded to DC without full replacement"],
      interviewQs:["How does smart EV load management reduce infrastructure cost?","What is V2G and what does it require?","What is OCPP and why is it important for smart charging?"],
      siteTips:["Specify OCPP 1.6 or 2.0 compliance on all chargers from day one. Non-OCPP chargers cannot be integrated into smart charging systems — locked into single-manufacturer ecosystem."],
      diagram:{type:'schematic', svgId:'ev-adv-diagram'}
    },
    sectorNotes:{res:'Home charging: 7.4 kW Level 2, dedicated circuit per flat. Apartment complexes: shared smart charger infrastructure with per-user metering.',com:'Commercial parking: mix of Level 2 and DCFC. Smart charging mandatory for >10 chargers. IS 17017 compliance. EV mandatory for LEED/IGBC certification.',dc:'Data centre staff parking: Level 2. Not a significant load relative to IT load.',ind:'Factory: Level 2 for fleet vehicles. DCFC for delivery trucks. Integration with solar and energy management system.',og:'Onshore: fleet electrification. Offshore: no EV charging.',hc:'Hospital parking: Level 2 for staff and visitors. DCFC for patient-facing parking areas. Sub-metering for energy recovery.'},
    standards:{
      IS:[{clause:'IS 17017',title:'EV Supply Equipment (EVSE) — Indian standard',note:'Conductive charging for EVs — covers Level 1, 2, DC fast'},{clause:'CEA EV Regulations',title:'EV charging infrastructure guidelines',note:'Grid connection and metering requirements for EV charging'}],
      NEC:[{clause:'NEC Art.625',title:'Electric vehicle charging systems',note:'Circuit sizing (125% continuous), disconnects, GFCI'},{clause:'NEC 625.42',title:'Overcurrent protection',note:'EV supply circuit protection requirements'}],
      IEC:[{clause:'IEC 61851-1',title:'Electric vehicle conductive charging system',note:'Modes 1–4 charging, communication requirements'},{clause:'IEC 62196',title:'Plugs and sockets for EV charging',note:'Type 2 (Mennekes) connector standard'}]
    },
    quiz:[]
  },

  /* ── 12. CT/PT SUBSTATION ── */
  {
    id:'ct-pt-substation', level:3, icon:'⚡', title:'CT/PT & Substation Layout',
    desc:'Current and potential transformer selection, accuracy class, burden, and substation design.',
    tags:['CT/PT Basics', 'Substation Layout', 'Current Transformer', 'Potential Transformer'],
    sectors:['ind','hc'], green:false, calculator:null,
    beginner:{
      intro:"Current Transformers (CTs) and Potential Transformers (PTs) are the eyes and ears of every protection and metering system. Size them wrong and the meters read incorrectly and protection relays fail to operate.",
      whyMatters:[
        {icon:'📊', text:'Wrong CT accuracy class causes metering errors — billing disputes and energy losses go undetected'},
        {icon:'🛡️', text:'Protection CT saturation during fault causes relay failure — fault not cleared'},
        {icon:'⚡', text:'Undersized CT burden causes measurement errors — all downstream protection is unreliable'}
      ],
      theory:"CURRENT TRANSFORMER (CT):\nRatio: primary current / secondary current (e.g. 500/5A)\nSecondary always 5A or 1A (for instruments and relays)\nAccuracy class:\n— Metering: Cl.0.5, Cl.1, Cl.3 (limits energy meter error)\n— Protection: Cl.5P10, Cl.5P20 (5% error at 10× or 20× rated current)\nBurden (VA): sum of relay, meter, and lead resistance burden must not exceed CT VA rating\n\nPOTENTIAL TRANSFORMER (PT/VT):\nRatio: primary voltage / secondary voltage (e.g. 11000/110V)\nSecondary always 110V or √3-110V (63.5V phase)\nAccuracy class: Cl.0.5, Cl.1, Cl.3 (metering), 3P, 6P (protection)\n\nSUBSTATION COMPONENTS:\nMV switchgear (11kV or 33kV): ring main unit (RMU) or draw-out panels\nPower transformer: step-down to 415V\nLV switchgear: MDB with ACB incomer\nMeasurement: HV and LV metering\nProtection: overcurrent, earth fault, differential, Buchholz, winding temperature",
      formula:{
        IS:'CT ratio: selected above max load current\nCT burden: VA_total = Σ(relay VA + meter VA + lead R×I²)\nKnee point: Vk ≥ (K × VA × (RCT + RL)) for protection CTs\nIS 2705: current transformers standard',
        NEC:'IEEE C57.13: CT and VT requirements\nCT accuracy class: 0.3, 0.6, 1.2 (metering)\nProtection CT: C100, C200, C400, C800 (NEC/ANSI system)',
        IEC:'IEC 61869-2: CTs — performance and testing\nIEC 61869-3: PTs — performance\nAccuracy: Cl.0.5S, Cl.0.2S for smart metering\nProtection: 5P, 10P accuracy class'
      },
      example:{
        sector:'ind',
        given:'11kV industrial substation: max load 800A (HV side), connected to energy meter and 2 protection relays. Select CT.',
        steps:[
          'CT ratio: max load 800A → select 1000/5A (CT primary ≥ load current)',
          'Accuracy: energy meter needs Cl.0.5; protection relays need Cl.5P20',
          'Use separate CTs: metering CT (1000/5A, Cl.0.5, 15VA) and protection CT (1000/5A, Cl.5P20, 15VA)',
          'Protection CT burden: relay 2VA × 2 + leads 3VA = 7VA < 15VA ✓',
          'Metering CT burden: energy meter 5VA + leads 2VA = 7VA < 15VA ✓',
          'Knee point check for protection: Vk ≥ Isn × (Rct + Rl + Rr)',
          'Vk ≥ 5 × (1.2 + 0.6 + 0.4) = 5 × 2.2 = 11V → specify Vk ≥ 50V (with margin)'
        ],
        result:'Two separate CTs per phase: Cl.0.5/15VA for metering, Cl.5P20/15VA for protection. Knee point ≥ 50V for protection CT.'
      },
      rot:["Never share a metering CT with protection relays — metering CTs saturate during fault (by design to protect meters). Protection CTs must not saturate. Separate is mandatory for proper protection.","CT burden: the lead resistance is often the largest contributor. For long CT to relay runs, use 2.5mm² leads to reduce burden."],
      mistakes:["Using metering class CT for protection — CT saturates at fault current, relay doesn't see full fault current, protection fails to operate","Connecting too many relays and meters to one CT — total burden exceeds VA rating, accuracy degrades"],
      interviewQs:["What is the difference between Cl.0.5 and Cl.5P20 CT accuracy class?","Why must protection CTs have a high knee-point voltage?","What happens if CT burden exceeds its rated VA?"],
      siteTips:["Measure CT secondary burden with a burden tester at commissioning — include actual lead resistance. Calculated burden is often 20–30% different from measured. Adjust if total exceeds CT rating."],
      table:{
        all:{
          title:"Substation Clearances",
          desc:"Standard clearances for MV substations based on IS / IE Rules.",
          columns:["Voltage Level", "Phase to Earth", "Phase to Phase", "Working Clearance"],
          data:[
            ["LV (up to 415V)", "15–25 mm", "25 mm", "1.0m (in front of panel)"],
            ["MV (11 kV)", "140 mm", "140 mm", "2.6m (bare conductor to ground)"],
            ["MV (33 kV)", "320 mm", "320 mm", "2.8m (bare conductor to ground)"],
            ["HV (66 kV)", "630 mm", "630 mm", "3.0m (bare conductor to ground)"]
          ]
        }
      },
      diagram:{type:'schematic', svgId:'ct-pt-diagram'}
    },
    advanced:{
      theory:"SUBSTATION LAYOUT DESIGN:\nOutdoor: cost-effective, more space. Clearances per IS 5613.\nIndoor: compact, better security, higher cost. SF6 GIS (Gas Insulated Switchgear) for very compact.\nRMU (Ring Main Unit): two incoming + one outgoing. Common in commercial distribution rings.\n\nBUCHHOLZ RELAY:\nOil-immersed transformer: Buchholz relay detects gas accumulation from internal fault.\nStage 1 (gas accumulation): alarm\nStage 2 (surge): trip\n\nPROTECTION ZONES:\nTransformer differential (87T): trips transformer HV and LV breakers\nFeeder protection (51/51N): overcurrent and earth fault\nBus protection (87B): trips all sources to the bus\n\nEARTH GRID:\nSubstation: buried copper earth grid (IEEE 80)\nTouch and step potential within safe limits during earth fault\nMesh and rod electrode design",
      formula:{
        IS:'CT knee point: Vk ≥ Isn × (RCT + 2RL + Rrelay)\nBuchholz: IS 3639 (accessories for transformers)\nEarth grid: IS 3043 + IEEE 80 for MV substations\nTouch potential limit: 50V (IS 3043)',
        NEC:'IEEE 80: substation grounding\nIEEE C37.90: relay input from CTs\nIEEE C57.13: CT and VT standards',
        IEC:'IEC 61869-2: CTs\nIEC 61869-3: PTs\nIEC 61936-1: power installations > 1kV (substation layout)\nIEC 62271: HV switchgear'
      },
      example:{
        sector:'ind',
        given:'11/0.415kV substation, 1000 kVA transformer. Design protection: transformer differential + overcurrent + earth fault.',
        steps:[
          'HV side: 11kV, FLC = 1000/(√3×11) = 52.5A → CT: 75/5A, Cl.5P20, 30VA',
          'LV side: 415V, FLC = 1391A → CT: 1500/5A, Cl.5P20, 30VA',
          'Differential relay (87T): Merz-Price using both CT sets. Slope 20%, bias 15%.',
          'Overcurrent relay (51): set at 1.2× FLC = 63A HV (= 52.5A+20%). Curve: standard inverse.',
          'Earth fault relay (51N): set at 0.2× FLC = 10.5A. Instantaneous 50% Isc.',
          'Buchholz relay: stage 1 alarm at gas accumulation, stage 2 trip on surge.',
          'Winding temp relay: alarm at 95°C, trip at 105°C oil, 115°C winding.'
        ],
        result:'87T differential + 51/51N overcurrent/earth fault + Buchholz + winding temp = complete transformer protection. CT ratios must match and be specified together with relay.'
      },
      rot:["CT ratio correction in 87T relay: primary and secondary CTs have different ratios (75/5A vs 1500/5A at 11kV:415V). The relay must compensate for this — either by different CT tap settings or numerical relay software correction."],
      mistakes:["Differential relay slope set too low — spill current from CT mismatch causes false trip on energisation","Not specifying CT polarity on drawing — wrong polarity reverses differential relay current direction, causing incorrect operation"],
      interviewQs:["What is a Buchholz relay and when does it alarm vs trip?","How does a transformer differential relay detect an internal fault?","What is knee-point voltage and why is it critical for protection CTs?"],
      siteTips:["During commissioning of differential protection: inject secondary test current into both HV and LV CT circuits and verify relay shows correct differential and restraint currents. A CT polarity error shows up as 2× the expected differential current."],
      diagram:{type:'schematic', svgId:'ct-pt-adv-diagram'}
    },
    sectorNotes:{res:'Not applicable at residential level.',com:'HV metering CT (Cl.0.5) for energy billing. Revenue-grade meters require Cl.0.5S for smart metering.',dc:'HV substation with transformer differential protection. LV power monitoring uses Cl.0.5 CTs for all PDU sub-metering.',ind:'Full protection suite: 87T, 51, 51N, Buchholz, winding temp. Separate metering and protection CTs mandatory.',og:'Ex-rated CT/PT enclosures in hazardous areas. Intrinsically safe CT circuits where required.',hc:'HV metering for billing. Transformer protection as per industrial. Essential transformer protection mandatory.'},
    standards:{
      IS:[{clause:'IS 2705',title:'Current transformers',note:'Accuracy class, burden, and testing requirements'},{clause:'IS 3156',title:'Potential (voltage) transformers',note:'Accuracy class and performance'}],
      NEC:[{clause:'IEEE C57.13',title:'Requirements for instrument transformers',note:'CT and PT standards for North American practice'},{clause:'IEEE C37.90',title:'Relays for power system protection',note:'CT requirements for protective relaying'}],
      IEC:[{clause:'IEC 61869-2',title:'Current transformers',note:'Performance, accuracy class, burden'},{clause:'IEC 61869-3',title:'Voltage transformers',note:'Performance and accuracy class'}]
    },
    quiz:[]
  },

  /* ── 13. BATTERY STORAGE ── */
  {
    id:'battery-storage', level:3, icon:'🔋', title:'Battery Storage Systems',
    desc:'Li-ion BESS sizing, SoC, BMS, grid-tie configuration, DoD, and cycle life.',
    tags:['Battery Storage', 'BESS', 'Li-ion Storage', 'Energy Storage'],
    sectors:['res','com','ind'], green:true, calculator:null,
    beginner:{
      intro:"Battery Energy Storage Systems (BESS) are transforming how buildings interact with the grid. From peak shaving to solar self-consumption to backup power, BESS is becoming a standard part of the electrical design toolkit.",
      whyMatters:[
        {icon:'💰', text:'Peak demand shaving can eliminate demand charges — BESS pays back in 3–7 years'},
        {icon:'☀️', text:'Solar + BESS enables self-consumption — store daytime solar for evening use'},
        {icon:'🔋', text:'Grid backup function replaces or supplements UPS/DG for non-critical loads'}
      ],
      theory:"BESS COMPONENTS:\nBattery cells → Module → Rack → Container/Room\nBMS (Battery Management System): monitors cells, balances charge, protects\nPCS (Power Conversion System): DC/AC inverter + charger (bidirectional)\nEMS (Energy Management System): scheduling, grid integration logic\n\nKEY PARAMETERS:\nEnergy: kWh (how much energy stored)\nPower: kW (how fast energy can be delivered)\nC-rate: power/capacity (1C = full discharge in 1 hour, 0.5C = 2 hours)\nDoD (Depth of Discharge): usable fraction of capacity (Li-ion: 80–90%)\nSoC (State of Charge): current charge level as % of full\nCycle life: number of charge/discharge cycles before capacity degrades to 80%\nRound-trip efficiency: energy out / energy in (Li-ion: 92–96%)\n\nSIZING:\nEnergy: E_usable = peak_demand × time_hours\nCapacity: E_nominal = E_usable / DoD\nPower: P = E_nominal / discharge_hours",
      formula:{
        IS:'E (kWh) = P_peak (kW) × t (h) — energy for peak shaving duration\nNominal capacity: E_nom = E_usable / DoD\nPower rating: P_BESS ≥ peak demand to shave\nIS 16653: battery storage systems (emerging standard)',
        NEC:'NEC Art.706: energy storage systems\nNEC 706.20: disconnection requirements\nIEEE 2030.2: interconnection of energy storage',
        IEC:'IEC 62933-1: BESS general\nIEC 62619: Li-ion safety requirements\nIEC 62477-1: power electronics for BESS\nIEC 61000-3-2: PCS harmonic emission'
      },
      example:{
        sector:'com',
        given:'Commercial building: MD = 500 kW. Peak demand charge applies for demand >400 kW for 15-min intervals. BESS to limit demand to 400 kW for 1 hour daily.',
        steps:[
          'Peak to shave: 500 − 400 = 100 kW',
          'Duration: 1 hour',
          'Usable energy: 100 kW × 1h = 100 kWh',
          'Nominal capacity (DoD=0.85): 100/0.85 = 117.6 kWh → select 120 kWh',
          'Power rating: 100 kW at 0.83C (120kWh/100kW = 1.2h discharge)',
          'Monthly demand saving: 100 kVA × ₹400/kVA = ₹40,000/month',
          'Annual saving: ₹4.8 lakhs',
          'BESS cost estimate: ₹120 kWh × ₹25,000/kWh = ₹30 lakhs',
          'Payback: 30/4.8 = 6.25 years'
        ],
        result:'120 kWh / 100 kW BESS. Payback 6.25 years from demand charge saving alone. Add solar self-consumption value to improve economics.'
      },
      rot:["BESS cost rule: Li-ion commercial BESS ≈ ₹20,000–30,000/kWh installed (2024). Prices falling 10–15%/year. Economics improve each year — assess annually.","Cycle life: Li-ion BESS rated for 3000–6000 cycles at 80% DoD. Daily cycling = 3000 days = 8 years before capacity falls below 80%."],
      mistakes:["Sizing BESS for energy only without checking power rating — 100 kWh battery at 0.5C can only deliver 50 kW, not 100 kW","Not accounting for round-trip efficiency — 100 kWh in gives only 93 kWh out (7% loss). Factor this into solar self-consumption calculations"],
      interviewQs:["What is C-rate and how does it affect BESS selection?","How does a BMS protect a Li-ion battery pack?","When is BESS economically viable for commercial peak shaving?"],
      siteTips:["Monitor BESS SoH (State of Health) monthly via the BMS dashboard. When SoH drops below 80% of original capacity, begin planning replacement. SoH trend predicts end-of-life 12–18 months ahead."],
      diagram:{type:'schematic', svgId:'bess-diagram'}
    },
    advanced:{
      theory:"GRID-TIE BESS CONFIGURATIONS:\nAC-coupled: BESS connected to AC bus via bidirectional inverter. Simple, works with any solar inverter.\nDC-coupled: BESS connected to solar DC bus. Higher efficiency, no additional inverter stage.\n\nGRID SERVICES:\nFrequency regulation: BESS responds in <1 second to grid frequency deviations. Fast response (FFR).\nVoltage support: BESS injects reactive power to support voltage during sag.\nBlack start: BESS can start the building without grid — energise other equipment sequentially.\nDemand response: BESS discharges on utility request during grid stress.\n\nFIRE SAFETY:\nLi-ion thermal runaway: defective cell → rapid heating → venting → fire → propagation\nPrevention: cell-level fusing, BMS temperature monitoring, automatic disconnection\nFire suppression: inert gas (CO2, FM-200) or water mist in BESS room\nIEC 62619: Li-ion safety requirements — most important standard\n\nDEGRADATION:\nCalendar aging: capacity loss even when not cycling (~2%/year at 25°C)\nCycle aging: each deep cycle removes small amount of capacity\nTemperature: every 10°C increase doubles degradation rate",
      formula:{
        IS:'SoH = C_measured/C_rated × 100%\nDegradation: ΔC ≈ 0.02% per full cycle (typical Li-NMC)\nRound-trip η: E_out/E_in × 100% (typically 92–96%)\nFFR response: ΔP ≥ (0.1 Hz × system sensitivity) in <2s',
        NEC:'NEC Art.706: energy storage systems\nNEC 706.20: disconnection\nIEEE 2030.2.1: BESS interconnection\nFire: NFPA 855: installation of stationary BESS',
        IEC:'IEC 62933-1: BESS general\nIEC 62619: Li-ion safety\nIEC 62477-1: power electronics\nNFPA 855 (adopted by IEC jurisdictions for fire safety)'
      },
      example:{
        sector:'ind',
        given:'Factory: 500 kW solar PV on roof. Grid export limited to 0 kW. Evening production peak 18:00–22:00 when solar is zero. Size BESS for maximum self-consumption.',
        steps:[
          'Solar generation 08:00–17:00: typical daily 2500 kWh',
          'Building daytime consumption: 1800 kWh (absorbs most solar)',
          'Surplus solar (potential storage): 2500 − 1800 = 700 kWh',
          'Evening peak load 18:00–22:00: 400 kW × 4h = 1600 kWh',
          'BESS can supply: stored 700 kWh → covers 700/1600 = 44% of evening peak',
          'BESS sizing: 700 kWh usable → nominal 700/0.90 = 778 kWh ≈ 800 kWh',
          'Power: 400 kW (must match evening peak demand)',
          'C-rate: 400/800 = 0.5C — good for Li-ion life',
          'Annual self-consumption increase: 700 kWh/day × 250 days = 175,000 kWh × ₹8 = ₹14 lakhs/year',
          'BESS cost: 800 × ₹25,000 = ₹2 crore. Payback: 14 years (without solar benefit, only arbitrage)'
        ],
        result:'800 kWh / 400 kW BESS for maximum solar self-consumption. 14-year payback from arbitrage only — combine with demand charge reduction to improve to 8–10 years.'
      },
      rot:["Solar + BESS payback improves when: (a) high peak demand charges, (b) large day/night tariff spread, (c) export prohibition. Without at least 2 of these 3, BESS may not be economic."],
      mistakes:["Ignoring thermal runaway risk — Li-ion BESS requires proper fire suppression, ventilation, and emergency response plan","DC-coupling BESS with AC solar inverters — requires additional DC-DC converter, negating the efficiency advantage"],
      interviewQs:["What is the difference between AC-coupled and DC-coupled BESS?","What is thermal runaway and how is it prevented?","How do you calculate round-trip efficiency of a BESS system?"],
      siteTips:["During BESS commissioning: perform full charge-discharge cycle and compare measured capacity with rated. If measured capacity <95% of rated at commissioning, reject the system — the cells may be degraded from storage."],
      diagram:{type:'schematic', svgId:'bess-adv-diagram'}
    },
    sectorNotes:{res:'Residential: 5–15 kWh home BESS with solar. AC-coupled with solar inverter. Manual mode for backup power.',com:'Commercial: 50–500 kWh for demand management + solar self-consumption. ROI 6–10 years with incentives.',dc:'Data centre BESS: backup function. Replaces UPS for some loads. Large capacity 500 kWh–10 MWh.',ind:'Industrial: 200–5000 kWh. Peak shaving (demand charges high). Solar integration.',og:'Offshore: emerging. BESS replaces small DGs during low-demand periods — fuel saving.',hc:'Hospital BESS: not primary backup (UPS+DG covers that). May supplement for non-critical loads.'},
    standards:{
      IS:[{clause:'IS 16653',title:'Battery energy storage systems',note:'Emerging Indian standard — consult latest BIS revision'},{clause:'CEA 2019',title:'CEA Regulations — BESS grid connection',note:'Grid interconnection requirements for BESS in India'}],
      NEC:[{clause:'NEC Art.706',title:'Energy storage systems',note:'Installation, disconnection, and labeling'},{clause:'NFPA 855',title:'Stationary energy storage systems',note:'Fire safety requirements for BESS facilities'}],
      IEC:[{clause:'IEC 62619',title:'Li-ion safety requirements',note:'Most critical standard for Li-ion BESS — safety and testing'},{clause:'IEC 62933-1',title:'BESS general requirements',note:'Terminology, performance, and test methods'}]
    },
    quiz:[]
  },

  /* ── 14. ENERGY MONITORING ── */
  {
    id:'energy-monitoring', level:3, icon:'📊', title:'Energy Monitoring',
    desc:'Smart meters, AMI, IoT sensors, energy dashboards, and key performance indicators.',
    tags:['Energy Monitoring', 'Smart Meters', 'Energy Audit'],
    sectors:['res','com','ind','dc','hc'], green:true, calculator:null,
    beginner:{
      intro:"You cannot manage what you don't measure. Energy monitoring turns raw consumption data into actionable insights — revealing waste, enabling efficiency, and proving green building performance.",
      whyMatters:[
        {icon:'📊', text:'Energy monitoring reveals 15–25% wastage invisible without sub-metering'},
        {icon:'💚', text:'LEED, IGBC, ECBC, and IS0 50001 all require energy metering and data reporting'},
        {icon:'💰', text:'Sub-metering enables cost allocation per tenant, floor, or department'}
      ],
      theory:"METERING HIERARCHY:\nMain meter (utility billing): revenue-grade, sealed, utility-managed\nSub-meters (tenant/floor/system): energy monitoring, cost allocation\nPlant meters (chiller, AHU, lighting): granular equipment-level data\n\nMETER TYPES:\nElectromechanical: spinning disc, no data output. Legacy, being replaced.\nElectronic (static): no moving parts, RS485/Modbus output, CT-operated\nSmart meter: two-way communication, TOU metering, remote disconnect\nAMI (Advanced Metering Infrastructure): network of smart meters, central data collection\n\nKEY ENERGY KPIS:\nBuilding: [[kWh/m²/year|kBTU/ft²/year]] (Energy Use Intensity — EUI)\nData centre: PUE (Power Usage Effectiveness) = total kW / IT kW\nHVAC: kW/TR (efficiency), COP\nLighting: [[W/m²|W/ft²]] (LPD — Lighting Power Density)\nMotors: [[kW/m³|kW/GPM]] (pumps), kW/cfm (fans)\n\nDATA COMMUNICATION:\nModbus RTU/TCP: most common for energy meters\nBACnet: building automation\nMQTT: IoT/cloud platforms\nOCPP: EV chargers\nDNP3: utility-grade communication",
      formula:{
        IS:'EUI = annual energy (kWh) / floor area (m²)\nPUE = total facility kW / IT kW (data centres)\nBaseline: NBC 2016 or ECBC defines target EUI by occupancy\nIS 13779: energy performance in buildings',
        NEC:'ASHRAE 90.1: EUI targets by climate zone\nENERGY STAR score: 1–100 relative to peer buildings\nMeasurement: IPMVP (International Performance Measurement)',
        IEC:'ISO 50001: energy management system\nISO 50006: energy baselines\nIEC 61968-9: AMI data exchange\nEN 15378: building energy performance'
      },
      example:{
        sector:'com',
        given:'5-storey office building, 5000 [[m²|ft²]]. Monthly energy bill: 80,000 kWh. HVAC: 50,000, Lighting: 15,000, IT: 10,000, Misc: 5,000 kWh. Target EUI: 150 [[kWh/m²/year|kBTU/ft²/year]].',
        steps:[
          'Current annual energy: 80,000 × 12 = 960,000 kWh/year',
          'Current EUI: 960,000/5000 = 192 [[kWh/m²/year|kBTU/ft²/year]]',
          'Target EUI: 150 [[kWh/m²/year|kBTU/ft²/year]] → reduction needed: (192−150)/192 = 21.9%',
          'HVAC is 62.5% of total — largest opportunity',
          'LED retrofit (lighting): 15,000 → 8,000 kWh/month = 7000 kWh saving',
          'VFD on AHU fans (30% energy saving): 50,000 × 0.30 = 15,000 kWh saving',
          'Total monthly saving: 22,000 kWh → annual: 264,000 kWh',
          'New EUI: (960,000−264,000)/5000 = 139.2 [[kWh/m²/year|kBTU/ft²/year]] < 150 target ✓'
        ],
        result:'Current EUI=192, target=150. Priority: AHU VFDs (save 15,000 kWh/month) + LED retrofit (save 7000 kWh/month). Sub-meter HVAC and lighting separately to track progress.'
      },
      rot:[
        "Energy monitoring payback rule: A sub-metering system that reveals just 10% hidden waste in a building with a large electricity bill will typically pay for itself in under 12 months.",
        "For office buildings, the typical EUI benchmark is 180–250 [[kWh/m²/year|kBTU/ft²/year]]. A green building should target <120, and best-in-class facilities achieve <80."
      ],
      table:{
        all:{
          title:"Typical Energy KPIs (Commercial Building)",
          desc:"Benchmark targets for common building systems to track performance.",
          columns:["System / End-Use", "KPI Metric", "Good Target", "Poor Performance"],
          data:[
            ["Whole Building (EUI)", "[[kWh/m²/year|kBTU/ft²/year]]", "< 120", "> 200"],
            ["Data Centre (PUE)", "Total kW / IT kW", "1.2 - 1.5", "> 2.0"],
            ["Chiller Plant", "kW/TR", "0.55 - 0.65", "> 0.90"],
            ["Office Lighting (LPD)", "[[W/m²|W/ft²]]", "< [[8.0|0.75]]", "> [[12.0|1.1]]"],
            ["Pumps", "[[kW / m³/hr | kW / GPM]]", "Varies", "No VFDs installed"]
          ]
        }
      },
      mistakes:["Installing only a main utility meter and no sub-meters — can't identify where energy is wasted","Using CT-operated sub-meters with wrong CT ratio — all readings are wrong by a factor","Not calibrating meters after installation — an uncalibrated meter gives false confidence"],
      interviewQs:["What is EUI and what is a typical target for a green office building?","What is the difference between AMI and a simple sub-meter?","How does Modbus RS485 work for energy meter data collection?"],
      siteTips:["Commission sub-metering system by cross-checking readings: sum of all sub-meters should equal main meter reading (within ±2%). Significant discrepancy = metering error or unmetered load. Find and fix before the system goes live."],
      diagram:{type:'schematic', svgId:'energy-monitoring-diagram'}
    },
    advanced:{
      theory:"ISO 50001 ENERGY MANAGEMENT:\nPlan-Do-Check-Act cycle for energy.\nEnergy baseline: 12-month reference period energy consumption.\nEnergy performance indicators (EnPI): metrics that show performance vs baseline.\nEnergy review: identifies SEUs (Significant Energy Users) and opportunities.\n\nFAULT DETECTION AND DIAGNOSTICS (FDD):\nML algorithms monitor building energy patterns.\nAnomalies (higher than expected consumption) trigger alerts.\nExample: chiller running at night with no occupancy = control fault.\n\nAUTOMATED DEMAND RESPONSE (ADR):\nOpenADR protocol: utility sends DR signal → BMS automatically sheds load.\nTypical shed: raise chiller setpoint by 2°C, dim lighting to 75%, pause EV charging.\nIncremental load reduction: 5–15% of peak demand.\n\nBLOCKCHAIN FOR ENERGY:\nP2P energy trading: solar producer sells directly to neighbouring building.\nImmutable metering records for renewable energy certificates (RECs).\nTransparency and verification without utility intermediary.",
      formula:{
        IS:'EnPI = current period energy / baseline energy (normalised)\nM&V: IPMVP Option A, B, C, D protocols\nISO 50006: energy baselines and EnPIs\nFDD: Z-score = (actual − expected)/σ (> 2σ = anomaly)',
        NEC:'ASHRAE Guideline 14: M&V for energy savings\nSavings = (baseline − post_retrofit) energy (weather-normalised)\nOpenADR 2.0: demand response protocol',
        IEC:'ISO 50001:2018: energy management systems\nISO 50006: establishing energy baselines\nIEC 61968-9: advanced metering infrastructure'
      },
      example:{
        sector:'dc',
        given:'Data centre: 1 MW IT load. Monthly energy 2,160,000 kWh. PUE target 1.2. Current PUE=1.44.',
        steps:[
          'Current total energy: 2,160,000 kWh/month',
          'IT energy: 1000 kW × 24h × 30d = 720,000 kWh/month',
          'Overhead energy: 2,160,000 − 720,000 = 1,440,000 kWh/month',
          'Current PUE: 2,160,000/720,000 = 3.0 — wait, that seems too high',
          'Recheck: PUE = 1.44 → total = IT × 1.44 = 720,000 × 1.44 = 1,036,800 kWh/month',
          'Target PUE 1.2: total = 720,000 × 1.2 = 864,000 kWh/month',
          'Energy saving: 1,036,800 − 864,000 = 172,800 kWh/month',
          'Annual saving: 172,800 × 12 = 2,073,600 kWh × ₹8 = ₹1.66 crore/year'
        ],
        result:'Reducing PUE from 1.44 to 1.2 saves ₹1.66 crore/year on 1 MW IT load. Primary actions: upgrade chillers to higher IPLV, add free cooling, replace old UPS with high-efficiency models.'
      },
      rot:["PUE rule: every 0.1 PUE reduction on 1 MW data centre = 876,000 kWh/year = ₹70 lakhs/year at ₹8/unit. Best ROI from reducing PUE: upgrade oldest/least efficient equipment first."],
      mistakes:["Measuring PUE only at peak summer — should be annual average including free cooling periods","Not normalising energy baseline for occupancy and weather changes — apparent savings may just be a mild year"],
      interviewQs:["What is ISO 50001 and what does it require of a building?","How does Fault Detection and Diagnostics (FDD) work?","What is normalised EUI and why is normalisation important?"],
      siteTips:["Set automated alerts for any sub-meter reading >20% above the same day last week. This catches equipment faults, stuck dampers, and control failures within 24 hours rather than discovering them on the monthly energy bill."],
      diagram:{type:'schematic', svgId:'energy-monitoring-adv-diagram'}
    },
    sectorNotes:{res:'Smart meters at main incomer. Home energy monitors show circuit-level data. EV and solar sub-metering.',com:'Sub-metering per floor, HVAC, lighting. BMS integration. LEED/IGBC: metering mandatory. AMR system.',dc:'PUE measured continuously. IT power via PDU sub-metering. DCIM system integrates all energy data.',ind:'ISO 50001 for large energy consumers (legal requirement in India >500 kWh/day). Plant-level metering.',og:'Fuel consumption metering. Generator efficiency. Process energy intensity (kWh per unit of product).',hc:'Energy per bed, per OT procedure. Utility sub-metering per department for cost allocation.'},
    standards:{
      IS:[{clause:'IS 13779',title:'Energy efficiency in buildings',note:'EUI targets and metering requirements'},{clause:'Bureau of Energy Efficiency (BEE)',title:'Perform Achieve Trade (PAT) scheme',note:'Large energy consumer (Designated Consumer) obligations'}],
      NEC:[{clause:'ASHRAE 90.1',title:'Energy standard — metering requirements',note:'Sub-metering requirements for energy code compliance'},{clause:'ASHRAE Guideline 14',title:'Measurement and verification',note:'M&V protocol for demonstrating energy savings'}],
      IEC:[{clause:'ISO 50001:2018',title:'Energy management systems',note:'Plan-Do-Check-Act framework for energy performance'},{clause:'IEC 61968-9',title:'Advanced metering infrastructure',note:'Smart meter data exchange standards'}]
    },
    quiz:[]
  },

  /* ── 15. TROUBLESHOOTING ── */
  {
    id:'troubleshooting', level:3, icon:'🔧', title:'Electrical Troubleshooting',
    desc:'Systematic fault diagnosis for common electrical failures — the methodology that saves hours on site.',
    tags:['Troubleshooting', 'Fault Diagnosis', 'Electrical Maintenance'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,
    beginner:{
      intro:"Electrical troubleshooting is applied Ohm's Law — every fault has a cause and a diagnostic path. A systematic approach finds the fault in minutes. An unsystematic approach wastes hours and sometimes makes things worse.",
      whyMatters:[
        {icon:'🔧', text:'Systematic diagnosis finds faults in minutes — unsystematic wastes hours and risks safety'},
        {icon:'💰', text:'Faster troubleshooting = shorter downtime = less production loss'},
        {icon:'🛡️', text:'Safe troubleshooting: LOTO first, test, then work — never the other way'}
      ],
      theory:"SYSTEMATIC TROUBLESHOOTING METHOD:\n1. GATHER INFORMATION: What happened? When did it start? Any recent changes?\n2. IDENTIFY SYMPTOMS: Breaker tripped? No power? Motor won't start? Lights flicker?\n3. ISOLATE: Is the fault in the supply, the distribution, or the load?\n4. TEST SAFELY: Voltage check, continuity, insulation resistance\n5. IDENTIFY ROOT CAUSE: Component failure? Wrong setting? Overload? External damage?\n6. REPAIR AND TEST: Fix cause, not just symptom. Verify normal operation.\n7. DOCUMENT: Record fault, cause, and fix for future reference.\n\nCOMMON FAULTS AND SYMPTOMS:\n\nNo power to circuit:\n— Check: supply voltage at source → fuse/MCB status → voltage at load terminals\n\nBreaker tripping:\n— Immediate trip (fast): short circuit. Delayed trip: overload. Random: loose connection\n\nMotor won't start:\n— Check: supply voltage (all 3 phases) → control circuit (fuse, contactor, OLR) → motor insulation\n\nLights flickering:\n— Check: neutral connection → supply voltage fluctuation → loose terminal\n\nHigh cable temperature:\n— Check: actual load current vs rated → grouping derating → ambient temperature → loose termination",
      formula:{
        IS:'Insulation resistance test: IR = V_test / I_leakage (MΩ)\nMinimum IR: 1 MΩ/kV (rule of thumb)\nVoltage test: multimeter (true-RMS for non-sinusoidal loads)\nLoop impedance test: Zs = Uo/Ia (fault current to trip in 0.4s)',
        NEC:'NFPA 70E: LOTO requirements before any testing\nInsulation test: IEEE 43 for motors and generators\nLoop impedance: NEC 110.12 — working space and access',
        IEC:'IEC 60364-6: verification (commissioning and periodic testing)\nInsulation resistance: IEC 60364-6 Cl.612.3\nRCD test: IEC 60364-6 Cl.612.8\nLoop impedance: IEC 60364-4-41 Cl.411.4'
      },
      example:{
        sector:'ind',
        given:'Factory: 22 kW pump motor trips its OLR within 30 seconds of starting. No mechanical issue found. Diagnose.',
        steps:[
          'Gather info: tripping started 2 days ago. No changes made. Motor previously ran fine.',
          'Symptom: OLR trips fast → overload condition (thermal trip, not short circuit)',
          'Step 1: Measure all 3 phase currents with clamp meter during running',
          'Reading: R=38A, Y=41A, B=52A. Rated FLC=44A. B-phase overloaded.',
          'Step 2: Check supply voltages. R=415V, Y=417V, B=398V — B-phase low voltage',
          'Low voltage on B-phase → motor draws more current on that phase',
          'Step 3: Check main incomer. Main MCB on B-phase shows high temperature.',
          'Root cause: loose connection on B-phase terminal at incoming panel → voltage drop → low voltage → high current on motor B-phase winding',
          'Fix: clean and retorque B-phase terminal. Measure voltage: all phases 415V ± 2V.',
          'Verify: motor FLC now 43A balanced across all phases. OLR does not trip.'
        ],
        result:'Root cause: loose B-phase terminal causing voltage drop. Fix: retorque terminal. This is why measuring phase voltages at the motor terminal (not just at the switchboard) is critical.'
      },
      rot:["Troubleshooting golden rule: always measure first, assume nothing. A breaker that trips is doing its job — find out why, don't just reset it.","Phase imbalance rule: if phase currents differ by >5%, look for: (a) supply voltage imbalance, (b) single-phasing on HV side, (c) unbalanced load distribution."],
      mistakes:["Replacing a motor that keeps tripping without finding the root cause — next motor will also trip. Fix the system, not the symptom.","Working on live equipment without LOTO because 'it'll only take a minute' — this kills people every year","Resetting an MCB that tripped immediately and not investigating — the fault that caused the trip is still present"],
      interviewQs:["What is the first step in systematic electrical troubleshooting?","How do you determine if a motor trip is caused by short circuit vs overload?","What test do you perform to check insulation integrity of a cable?"],
      siteTips:["Keep a fault log for every DB and MCC. Each fault entry: date, circuit, symptom, root cause, fix, and who repaired it. After 6 months, recurring faults on the same circuit indicate a systemic problem — investigate before it causes a major failure."],
      diagram:{type:'schematic', svgId:'troubleshooting-diagram'}
    },
    advanced:{
      theory:"POWER QUALITY TROUBLESHOOTING:\nVOLTAGE SAGS (brief undervoltage): caused by motor starting, fault clearing on grid\nVOLTAGE SWELLS: load rejection, capacitor switching\nHARMONICS: non-linear loads (VFDs, rectifiers) → measure THD with power analyser\nFLICKER: arc furnaces, welding → measure Pst (short-term flicker)\nEARTH LEAKAGE: insulation degradation → measure with clamp meter on all conductors\n\nINSULATION RESISTANCE TESTING:\nTest voltage: 500V for LV cables (<1kV), 1000V for motors and HV cables\nMinimum IR (rule of thumb): 1 MΩ/kV rated voltage, minimum 1 MΩ\nPolarization Index (PI): IR at 10 min / IR at 1 min. PI > 2.0 = healthy insulation\nDielectric Absorption Ratio (DAR): IR at 60s / IR at 30s. DAR > 1.25 = acceptable\n\nTHERMAL IMAGING:\nInfrared camera shows hot spots in cables, connections, switchgear\nHot joint: >10°C above ambient = investigate, >40°C = urgent\nFaulty capacitor: shows hot cell vs cool cells\nOverloaded busbar: uniform high temperature (load issue, not connection issue)\n\nEARTH FAULT LOCATION:\nMegger test: IR < 1 MΩ → cable or equipment insulation fault\nTime domain reflectometry (TDR): pulses down cable, measures reflection time → calculates fault distance\nBridge test (Murray loop): measures ratio to calculate fault distance on long runs",
      formula:{
        IS:'PI = IR (10 min) / IR (1 min) — healthy if > 2.0\nDAR = IR (60s) / IR (30s) — healthy if > 1.25\nTDR distance: d = v × t/2 (v = propagation velocity, t = round-trip time)\nMurray loop: d = 2L × Rx/(Rx + Ry)',
        NEC:'IEEE 43: insulation testing for rotating machines\nIEEE Std 62: guide for insulation maintenance testing of cables\nNFPA 70B: recommended practice for electrical equipment maintenance',
        IEC:'IEC 60364-6: periodic verification requirements\nIEEE 43 used internationally for motor insulation\nIEC 60287: cable resistance and insulation calculations\nIEC 61000-4-7: harmonic measurement'
      },
      example:{
        sector:'dc',
        given:'Data centre: intermittent UPS bypass alarm. Alarms occur 3× per day, lasts 5–15 seconds. No load change observed.',
        steps:[
          'Gather: alarms started 1 week ago. No new IT equipment. Power was stable before.',
          'Symptom: UPS going to bypass briefly → input voltage issue or UPS internal fault',
          'Step 1: connect power analyser to UPS input. Log voltage, frequency, THD for 24 hours.',
          'Result: voltage dips to 195V for 0.5–2 seconds, 3× daily, always 09:00–10:00',
          '09:00–10:00: building HVAC starts (chiller startup sequence)',
          'Step 2: measure voltage at MDB during chiller start. 415V drops to 390V for 2 seconds.',
          '390V/√3 = 225V per phase — UPS input undervoltage triggers bypass.',
          'Root cause: chiller DOL starting causes voltage dip → UPS input undervoltage trip → bypass',
          'Fix: replace chiller DOL with soft starter. OR: increase UPS input undervoltage threshold from 200V to 180V (if UPS can handle it safely).'
        ],
        result:'Root cause: chiller DOL start causing voltage dip triggering UPS bypass. Fix: install soft starter on chiller or adjust UPS input voltage window.'
      },
      rot:["Power quality rule: if equipment problems are intermittent and time-correlated, suspect power quality — not equipment failure. Install a power logger and let it run for a week before drawing conclusions."],
      mistakes:["Replacing a UPS that goes to bypass without investigating the supply voltage quality — the UPS is protecting the load, not failing","Performing insulation tests on live cables — always isolate, lock out, and verify dead before megger testing"],
      interviewQs:["What is Polarization Index and what does it indicate about insulation?","How does TDR locate a cable fault?","What is the first thing to do when equipment shows intermittent failures?"],
      siteTips:["Every data centre should have a permanent power quality monitor on the main incomer. A ₹2 lakh power analyser installed permanently has prevented ₹50 lakh server losses from voltage events in many facilities. The ROI is immediate."],
      diagram:{type:'schematic', svgId:'troubleshooting-adv-diagram'}
    },
    sectorNotes:{res:'Common faults: tripped MCB (overload or SC), RCD trip (earth fault, appliance failure), neutral loose (lights flicker). Test: multimeter for voltage, clamp meter for current.',com:'Systematic fault log essential. Thermal imaging quarterly. Power quality monitoring at main incomer. Fault response procedure documented.',dc:'99.999% uptime target — every fault must be analysed for root cause. DCIM alerts on any anomaly. Preventive maintenance schedule mandatory.',ind:'Motor faults most common. OLR trips: check current, voltage, insulation. MCC preventive maintenance annually. Thermal imaging on LV switchgear quarterly.',og:'Any fault in hazardous area: follow permit-to-work procedure. Never reset without investigation. Ex equipment: specialised inspection before re-energisation.',hc:'Essential circuit fault: immediate escalation procedure. Life safety circuits: protected maintenance bypass. Fault response times: critical <15 minutes, essential <30 minutes.'},
    standards:{
      IS:[{clause:'IS 732 Cl.9',title:'Inspection and testing — periodic verification',note:'Required tests and intervals for electrical installations'},{clause:'IS 5216',title:'Safety code for electrical works',note:'LOTO procedures and safe working practices'}],
      NEC:[{clause:'NFPA 70B',title:'Recommended practice for electrical equipment maintenance',note:'Maintenance procedures and test intervals'},{clause:'NFPA 70E',title:'Electrical safety in the workplace',note:'LOTO, PPE, and safe work practices'}],
      IEC:[{clause:'IEC 60364-6',title:'Low voltage installations — verification',note:'Initial and periodic testing requirements'},{clause:'IEEE 43',title:'Testing insulation resistance of rotating machines',note:'Insulation resistance test procedures for motors'}]
    },
    quiz:[]
  },

  /* ── SPD SELECTION ── */
  {
    id:'spd-selection', level:3, icon:'🛡️', title:'SPD Selection & Coordination',
    desc:'Type 1, 2, 3 surge protection device selection, coordination, and installation per IS/IEC/NEC.',
    tags:['SPD','Surge Protection','Lightning','Type 1','Type 2','Type 3','Transient Voltage'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,
    beginner:{
      intro:"Surge Protection Devices (SPDs) divert transient overvoltages (lightning, switching surges) to earth, protecting equipment. Selecting the right Type and coordinating them in cascade is critical for effective protection.",
      whyMatters:[
        {icon:'🛡️', text:'A single lightning strike can generate 100kA — without SPDs, all connected equipment is at risk'},
        {icon:'💰', text:'SPD costs ₹5,000-50,000 per panel vs. equipment replacement costs of ₹5-50 lakhs'},
        {icon:'⚡', text:'SPD must be coordinated (Type 1→2→3) — installing only Type 3 at equipment gives zero protection from direct strikes'}
      ],
      theory:"SPD CLASSIFICATION:\nType 1 (Class I / Category C): At service entrance or where lightning conductor exists. Handles direct lightning current (10/350μs waveform). Iimp: 12.5-25 kA per pole.\n\nType 2 (Class II / Category B): At main distribution board. Handles induced surges and switching transients (8/20μs waveform). In: 5-20 kA, Imax: 40-80 kA per pole.\n\nType 3 (Class III / Category A): At sub-distribution or socket outlet. Fine protection for sensitive equipment. Handles residual surges after Type 2 clamping. Up ≤1.5 kV.\n\nCASCADE COORDINATION:\nType 1 → Type 2 → Type 3 installed in sequence from source to load.\nMinimum cable distance between stages: 10m (or use coordinated SPD sets).\nIf distance <10m, use combined Type 1+2 devices.\n\nKEY PARAMETERS:\nUc: Maximum continuous operating voltage (≥1.1×Uo for 230V systems = 253V)\nUp: Voltage protection level (clamping voltage during surge)\nIn: Nominal discharge current (8/20μs)\nIimp: Impulse current (10/350μs, Type 1 only)\nImax: Maximum discharge current\nIsccr: Short-circuit current rating (must exceed prospective fault current at installation point)",
      formula:{
        IS:'IS/IEC 61643-11: SPD classification and testing\nUc ≥ 1.1 × Uo (for 230/400V: Uc ≥ 253V L-N, ≥440V L-L)\nType 1: Iimp ≥ 12.5kA per pole (IS 16313)\nType 2: In ≥ 5kA, Imax ≥ 40kA\nBackup fuse: per manufacturer — typically 125-315A gG',
        NEC:'NEC Art. 285: Surge-Protective Devices (SPDs)\nType 1: at service entrance (NEC 285.24)\nType 2: at branch panel (NEC 285.24)\nType 4: component-level (UL 1449 4th Ed.)\nSPD must be listed (UL 1449)\nVPR (Voltage Protection Rating) replaces old SVR',
        IEC:'IEC 61643-11: SPD for low-voltage systems\nIEC 62305-4: protection of structures — SPD selection\nCoordination: IEC 61643-12\nUp selection per IEC 60364-4-44 Table 44.B\nCategory IV: 6kV, Cat III: 4kV, Cat II: 2.5kV, Cat I: 1.5kV'
      },
      example:{
        sector:'com',
        given:'3-storey office building with external lightning protection. 1000 kVA transformer. Main bus fault level 35kA. Select SPD scheme.',
        steps:[
          'Lightning protection exists → Type 1 SPD mandatory at main LV panel',
          'Type 1: Iimp ≥ 12.5kA/pole × 4 poles (3P+N) = 50kA total',
          'Select Type 1+2 combined unit (distance main to sub-DB <10m)',
          'Combined: Iimp 12.5kA + In 20kA, Up ≤ 2.5kV (Cat III)',
          'Type 3 at each floor sub-DB: In 5kA, Up ≤ 1.5kV (Cat II)',
          'Uc for all SPDs: ≥ 275V (L-N), ≥ 440V (L-L)',
          'Backup fuse for Type 1+2: 250A gG (per manufacturer)',
          'Backup fuse for Type 3: 63A gG',
          'Verify Isccr > 35kA at main bus ✓',
          'Green indicator LED on SPD front — replace when indicator shows fault'
        ],
        result:'Type 1+2 combined SPD at main panel (Iimp 12.5kA, In 20kA). Type 3 at each floor DB. Total scheme cost ~₹1.5 lakh. Protected equipment value >₹2 crore.'
      },
      rot:["Type 1 = lightning current handler (if LPS exists, Type 1 is mandatory). Type 2 = standard for every main DB. Type 3 = sensitive equipment protection. When in doubt, install Type 2 at minimum.","SPD without backup fuse = fire risk. SPD backup fuse is NOT the same as the circuit breaker — it's a separate device sized per manufacturer's instructions."],
      mistakes:["Installing Type 3 SPD only at equipment without Type 2 at the panel — residual energy after Type 3 is too high","Using SPD with Uc < system voltage — SPD will overheat and fail during normal operation","Forgetting to replace SPD after it has operated (indicator shows red/fault) — a spent SPD provides zero protection"],
      interviewQs:["What is the difference between Type 1 and Type 2 SPD?","Why is 10m minimum distance needed between Type 1 and Type 2?","What does Uc rating mean and how do you select it?"],
      siteTips:["After any lightning event, physically check all SPD status indicators. A spent Type 2 SPD with a red indicator is invisible protection loss — the system looks normal but the next surge will damage equipment directly."],
      table:{
        all:{
          title:"Surge Protection Device (SPD) Types",
          desc:"Classification and installation locations for SPDs.",
          columns:["SPD Type", "Test Waveform", "Key Rating", "Installation Location"],
          data:[
            ["Type 1 (Class I)", "10/350 μs (High Energy)", "Iimp: 12.5–25 kA", "Main Distribution Board (MDB)"],
            ["Type 2 (Class II)", "8/20 μs (Fast Transient)", "In: 5–20 kA", "Sub-Distribution Boards (SMDB)"],
            ["Type 3 (Class III)", "1.2/50 μs (Voltage drop)", "Uoc: 1.5–6 kV", "Near sensitive final electronic equipment"],
            ["Type 1+2 Combined", "Combines Both", "Iimp + In", "MDB when distance to sub-panel <10m"]
          ]
        }
      },
      diagram:{type:'schematic',svgId:'spd-diagram'}
    },
    advanced:{
      theory:"SPD ENERGY COORDINATION:\nType 1 absorbs the bulk energy (10/350μs impulse — high energy, slow rise).\nType 2 clamps the residual overvoltage (8/20μs — moderate energy).\nType 3 fine-tunes to equipment withstand level (1.2/50μs — low energy).\n\nDecoupling impedance between stages is critical:\n- 10m of cable provides ~1μH inductance per metre → ~10μH total\n- This impedance forces Type 1 to activate before Type 2\n- Without decoupling: both SPDs share current → possible Type 2 failure\n\nMOV vs GDT vs COMBINED:\nMOV (Metal Oxide Varistor): fast response (<25ns), voltage clamping, degrades over time.\nGDT (Gas Discharge Tube): high surge capacity, slow response (~100ns), follow-on current risk.\nCombined (GDT + MOV): best of both — GDT handles high energy, MOV provides fast clamping.\nType 1: usually GDT or spark gap.\nType 2: usually MOV.\nType 3: MOV or combined.\n\nSPD STATUS MONITORING:\nModern SPDs include: status indicator (green/red), potential-free contact for BMS alarm, thermal disconnect (internal fuse).\nSPD failure modes: short circuit (thermal runaway) or open circuit (protection lost).\nThermal disconnect prevents fire if MOV degrades.\n\nISCCR VERIFICATION:\nSPD rated short-circuit current (Isccr) must equal or exceed prospective fault current at installation point.\nIf Isccr < fault level → SPD and backup protection may not safely interrupt fault during SPD failure.\nThis is the most commonly overlooked parameter.",
      formula:{
        IS:'Energy coordination: W1 > W2 > W3 (per stage)\nLet-through energy: ½ × C × Up² (simplified)\nIS/IEC 61643-12: coordination between SPDs\nThermal stability: SPD must withstand Uc continuously without degradation\nTOV (Temporary Overvoltage): SPD must withstand L-N voltage rise during N fault (up to 440V for 5s)',
        NEC:'UL 1449 4th Edition: VPR testing at In\nNEC 285.6: listing and labeling requirements\nNEC 285.11: SPD connection — minimum 14 AWG, maximum lead length 12 inches\nNEC 285.23: Type 1 at service, not requiring disconnect\nNEC 285.24: Type 2 at branch panel, with disconnect',
        IEC:'IEC 61643-11 Ed.2: test procedures and classification\nIEC 62305-4 Cl.6: SPD selection for lightning protection zones\nLPZ 0A→1: Type 1 required\nLPZ 1→2: Type 2 required\nLPZ 2→3: Type 3 recommended\nIEC 60364-5-53 Cl.534: installation rules for SPDs'
      },
      example:{
        sector:'dc',
        given:'Tier III data centre, 2×2000kVA transformers, external LPS. IT equipment worth ₹50 crore. Design comprehensive SPD scheme.',
        steps:[
          'LPS exists → Type 1 mandatory at both main LV panels',
          'Type 1: spark gap, Iimp 25kA/pole, 4-pole (3P+N)',
          'Decoupling: main panel to UPS input >10m cable run ✓',
          'Type 2 at UPS input panel: In 20kA, Imax 80kA, Up ≤ 2.5kV',
          'Type 2 also at UPS output panel (protects against internal switching)',
          'Type 3 at each PDU/rack-level DB: In 5kA, Up ≤ 1.5kV',
          'All SPDs: Uc ≥ 275V (L-N), Isccr ≥ 50kA (main bus fault level)',
          'SPD monitoring: potential-free contacts wired to DCIM/BMS',
          'Auto-alarm on SPD failure — spare SPD modules kept in store',
          'Redundant path: both A+B feeds have identical SPD cascade'
        ],
        result:'3-stage SPD cascade on each redundant path. Type 1 (25kA) → Type 2 (20kA) → Type 3 (5kA). BMS monitoring. Total cost ₹8 lakh vs. ₹50 crore equipment protection.'
      },
      rot:["In data centres, SPD monitoring contact to BMS is non-negotiable. A failed SPD that nobody notices is worse than no SPD — it gives false confidence."],
      mistakes:["Installing SPD with long lead lengths (>50cm) — lead inductance reduces effectiveness dramatically. Keep connections as short as physically possible","Not considering TOV (temporary overvoltage) — during neutral fault in TT system, L-N voltage rises to 400V. SPD Uc of 275V will fail thermally"],
      interviewQs:["What is the difference between MOV and GDT surge protection?","Why is decoupling impedance needed between Type 1 and Type 2?","What is Isccr and why is it critical?"],
      siteTips:["The single most effective SPD installation practice: keep lead lengths under 30cm. Every extra metre of SPD connection cable adds ~1μH impedance which increases the effective clamping voltage by ~1kV during high di/dt surges. Route SPD connections directly — no detours."],
      diagram:{type:'schematic',svgId:'spd-adv-diagram'}
    },
    sectorNotes:{res:'Residential: Type 2 at consumer unit minimum. Type 3 at home office equipment. Cost: ₹5,000 for basic protection. Mandatory if PV inverter installed (protects inverter DC and AC sides).',com:'Type 2 at every main and sub-DB. Type 3 for server rooms, BMS, CCTV, fire alarm panels. SPD on telecom/data lines (CAT5/6) also recommended.',dc:'Full Type 1+2+3 cascade on both A and B power paths. SPD on DC bus of UPS. Monitoring to DCIM. Spare modules in stock.',ind:'Type 1 at transformer LV terminals. Type 2 at MCC and PLC panels. Type 3 at VFD inputs, PLC I/O, SCADA. Industrial SPDs rated for higher fault currents.',og:'Offshore: SPD rated for marine environment (salt spray, vibration). Ex-rated SPDs in hazardous areas. Redundant protection on safety-critical systems.',hc:'SPD mandatory for medical IT systems, imaging equipment (MRI, CT), life support. Type 3 at each medical equipment outlet. Monitoring to nurse station BMS.'},
    standards:{
      IS:[{clause:'IS/IEC 61643-11',title:'SPDs connected to low-voltage power systems',note:'Testing, classification, and selection of SPDs'},{clause:'IS 16313',title:'SPD selection and application principles',note:'Indian guide for SPD application in LV systems'}],
      NEC:[{clause:'NEC Art. 285',title:'Surge-Protective Devices (SPDs)',note:'Installation, types, and connection requirements'},{clause:'UL 1449 4th Ed.',title:'Standard for SPDs',note:'Listing and VPR testing requirements'}],
      IEC:[{clause:'IEC 61643-11',title:'SPDs for low-voltage systems',note:'Complete SPD standard — classification, testing, marking'},{clause:'IEC 62305-4',title:'Electrical and electronic systems within structures',note:'SPD selection per lightning protection zone concept'}]
    },
    quiz:[]
  },

  /* ── FIRE ALARM ELECTRICAL DESIGN ── */
  {
    id:'fire-alarm', level:3, icon:'🔥', title:'Fire Alarm System Electrical Design',
    desc:'Fire detection and alarm system — circuit design, cable types, battery sizing, and zoning per IS 2189 / NFPA 72 / IEC 60839.',
    tags:['Fire Alarm','Smoke Detector','Fire Detection','NFPA 72','IS 2189','FAS'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,
    beginner:{
      intro:"Fire alarm systems are life safety systems — their electrical design requires dedicated circuits, fire-rated cables, and battery backup. The electrical engineer is responsible for power supply, cable routing, and integration with other building systems.",
      whyMatters:[{icon:'🔥',text:'Fire alarm failure = lives lost. Electrical design must ensure 100% reliability — no single point of failure'},{icon:'🔋',text:'Battery backup must sustain the system for 24-72 hours standby + 30 minutes alarm — undersized batteries are a code violation'},{icon:'📐',text:'Cable type, routing, and voltage drop are critical — wrong cable type loses fire rating, excessive VD causes false alarms'}],
      theory:"SYSTEM TYPES:\nConventional: zones with multiple detectors on shared circuits. Panel identifies zone, not individual detector.\nAddressable: each detector has unique address. Panel identifies exact device. Preferred for commercial/industrial.\nAnalog-addressable: provides sensitivity levels, pre-alarm warnings, drift compensation.\n\nCIRCUIT TYPES:\nSLC (Signaling Line Circuit): data loop connecting addressable detectors. Class A (monitored, redundant path) or Class B (single path).\nNAC (Notification Appliance Circuit): powers sounders, beacons, strobes.\nIDC (Initiating Device Circuit): connects conventional detectors and manual call points.\n\n[IS]\nCABLE REQUIREMENTS:\nFire-rated cable: must survive fire for rated duration.\nIS 694 / IS 1554: FR-LSH (Fire Resistant, Low Smoke Halogen-free) or equivalent standard cables.\n\nPOWER SUPPLY:\n24V DC from FACP (Fire Alarm Control Panel).\nDual mains supply (essential circuit) + battery backup.\nBattery: typically 48h standby + 30min alarm per NBC/IS requirements.\n\n[NEC]\nCABLE REQUIREMENTS:\nFire-rated cable: must survive fire for rated duration.\nNEC Art.760: FPL (General purpose), FPLR (Riser), or FPLP (Plenum) cables based on routing.\n\nPOWER SUPPLY:\n24V DC from FACP.\nDual mains supply (essential circuit) + battery backup.\nBattery: 24h standby + 5min alarm (general) or 15min alarm (voice evac) per NFPA 72.\n\n[IEC]\nCABLE REQUIREMENTS:\nFire-rated cable: must survive fire for rated duration.\nIEC 60331 / BS 5839: PH30, PH60, PH120 ratings depending on required survivability time.\n\nPOWER SUPPLY:\n24V DC from FACP.\nDual mains supply + battery backup.\nBattery: 72h standby + 30min alarm, or 24h+30min if generator backup present (BS 5839/EN 54).\n\nVOLTAGE DROP:\nEnd-of-line VD must not cause device dropout. Typical limit: 10% of 24V = 2.4V max.\nFor NAC circuits: calculate current draw of all sounders/strobes on circuit.",
      formula:{IS:'IS 2189 Cl.7: power supply requirements\nBattery Ah = (standby current × 24h) + (alarm current × 0.5h)\nVD = I × 2L × R/1000 (2-wire loop)\nIS 2189 Cl.5: zone area ≤ 2000m² per zone\nFire-rated cable: IS 694 / IS 1554 FR rating',NEC:'NFPA 72 Ch.10: power supply requirements\nBattery: 24h standby + 5min alarm (NFPA 72) or 60h standby per building code\nNEC Art. 760: fire alarm circuit classifications\nClass 1 (power-limited), Class 2/3 (signaling)\nWire: minimum 18 AWG for IDC, 14 AWG for NAC',IEC:'IEC 60839-5-1: fire alarm system design\nEN 54-4: power supply equipment\nBattery: 72h standby + 30min alarm (EN 54-4)\nIEC 60331: cable fire resistance test (PH30/60/120)\nIEC 60332-3: cable flame propagation test'},
      example:{sector:'com',given:'10-storey commercial building, 50,000 sq ft per floor. Design fire alarm power supply and battery backup.',steps:['Total detectors: ~1200 addressable smoke/heat','SLC loops: 6 loops × 200 devices each','Standby current per loop: 0.15A × 6 = 0.9A','FACP standby (panel, display): 0.5A','Total standby: 0.9 + 0.5 = 1.4A','Alarm current: all NACs active = 4.0A + panel = 0.5A = 4.5A','Battery Ah = (1.4 × 24) + (4.5 × 0.5) = 33.6 + 2.25 = 35.85 Ah','Select 2 × 18Ah batteries in series (36V system) or 2 × 38Ah at 24V','Add 20% safety factor: 38Ah × 1.2 = 45.6Ah → select 2 × 24Ah (48Ah)','Dual mains supply from essential power DB via dedicated MCB'],result:'Addressable FAS with 6 SLC loops, Class A wiring. Battery: 2×24Ah (24V). Dedicated dual-fed mains supply. FR-LSH cable throughout. Total 1200 devices across 10 floors.'},
      rot:["Fire alarm battery rule of thumb: 24h standby + 30min alarm minimum. For hospitals and critical facilities, use 72h standby. Always add 20% margin for battery aging.","Every fire alarm circuit must be on a dedicated MCB labeled 'FIRE ALARM — DO NOT SWITCH OFF'. Use a red MCB or lockable MCB."],
      mistakes:["Running fire alarm cables in the same tray as power cables — fire alarm cables must be segregated or in fire-rated conduit","Using non-fire-rated cable for fire alarm loops — during fire, the cable fails before alarm sounds","Undersizing battery backup — battery must be tested annually under load, not just voltage check"],
      interviewQs:["What is the difference between Class A and Class B SLC wiring?","How do you calculate fire alarm battery capacity?","Why must fire alarm cables be fire-rated?"],
      siteTips:["On every project, test the fire alarm battery under load before handover. Connect a resistor bank to simulate alarm current and time how long the battery sustains. Paper calculations mean nothing if the battery is defective."],
      diagram:{type:'schematic',svgId:'fire-alarm-diagram'}
    },
    advanced:{
      theory:"CLASS A vs CLASS B WIRING:\nClass B (Style 4/Style Y): single pair from panel to end-of-line. Single break = partial loss.\nClass A (Style 6/Style Z): redundant return path. Single break = system continues via alternate path.\nClass A is mandatory for high-rise (>15m), hospitals, and assembly occupancies per most codes.\n\nNAC CIRCUIT DESIGN:\nCalculate total current: sum of all notification appliances on circuit.\nCheck panel NAC output current rating (typically 1.5-3.0A per circuit).\nCheck VD: I × 2L × R/1000 ≤ 10% of 24V.\nFor large buildings: use NAC booster panels at intermediate floors.\n\nINTEGRATION:\nFire alarm interfaces with: BMS (alarm relay), elevator recall, door holders (magnetic), HVAC shutdown, stairwell pressurization, PA/VA system, access control.\nEach interface: potential-free contact from FACP. Supervise interface wiring.\n\nADDRESSABLE LOOP CALCULATION:\nDevice count per loop: varies by protocol (e.g., 126 for Apollo, 159 for Notifier).\nLoop current budget: sum quiescent current of all devices. Add alarm current for worst-case devices.\nLoop resistance: total wire resistance must be within panel specification.",
      formula:{IS:'IS 2189 Part 9: system design and planning\nLoop resistance: R = ρ×2L/A (2-wire loop)\nNAC VD: VD = I_total × 2L × R_cable / 1000\nVD limit: ≤ 2.4V (10% of 24V nominal)\nDevice spacing: IS 2189 Cl.5 — smoke det: 7.5m centre-to-centre',NEC:'NFPA 72 Ch.12: circuits and pathways\nClass A pathway survivability: NFPA 72 Ch.12.4\nNAC design: NFPA 72 Ch.18 — audibility 75dBA or 15dBA above ambient\nVisual notification: NFPA 72 Ch.18.5 — candela requirements per room size\nWire sizing: NEC 760.49 — power-limited fire alarm cables',IEC:'EN 54-2: control and indicating equipment\nEN 54-4: power supply requirements (battery test criteria)\nEN 54-13: compatibility assessment of system components\nBS 5839-1: fire detection and alarm systems for buildings (detailed design guide)\nIEC 60364-5-56: safety services — fire alarm circuit requirements'},
      example:{sector:'hc',given:'400-bed hospital including 8 OTs, ICU, NICU. Design Class A addressable fire alarm system.',steps:['Total coverage: ~1800 detectors + 200 manual call points + 400 sounders/strobes','Addressable: 16 SLC loops, ~125 devices per loop','Class A wiring throughout (hospital = critical occupancy)','Loop cable: 1.5mm² FR-LSH, 2-core screened','NAC circuits: 20 circuits × ~20 devices each','NAC current per circuit: 20 × 0.06A = 1.2A (within 1.5A panel limit)','Battery: standby = 3.5A × 72h = 252Ah, alarm = 6.0A × 0.5h = 3Ah','Total: 255Ah + 20% = 306Ah → 2 × 155Ah batteries (24V)','Integration: elevator recall, OT door holders, HVAC shutdown, nurse call','Cause-and-effect matrix documented for every output point'],result:'16-loop Class A addressable FAS. 2000+ devices. Battery: 2×155Ah. Full integration with BMS, elevators, HVAC. Cause-and-effect matrix for 200+ output points.'},
      rot:["Hospital fire alarm: always Class A, always 72h standby battery, always cause-and-effect matrix documented before commissioning. No shortcuts on life safety."],
      mistakes:["Not creating a cause-and-effect matrix — fire alarm triggers HVAC shutdown, elevator recall, door release, PA announcement. Without documentation, commissioning is guesswork","Running Class A return path in the same tray as the outgoing path — defeats the purpose of redundancy if a single fire damages both"],
      interviewQs:["What is a cause-and-effect matrix in fire alarm design?","How do you calculate NAC circuit voltage drop?","What is the difference between IS 2189 and NFPA 72 battery backup requirements?"],
      siteTips:["During hospital fire alarm commissioning, always test elevator recall, HVAC shutdown, and door holder release simultaneously. In one project, the HVAC shutdown relay was connected backward — fire alarm activated but HVAC fans stayed ON, spreading smoke through the building."],
      diagram:{type:'schematic',svgId:'fire-alarm-adv-diagram'}
    },
    sectorNotes:{res:'Residential: standalone smoke detectors with integral battery (10-year lithium). No FACP needed for single dwelling. Multi-storey apartments: addressable system per NBC.',com:'Addressable system standard. Integration with BMS for monitoring. Typical: 1 FACP per building, networked for campus.',dc:'VESDA (Very Early Smoke Detection Apparatus) mandatory for server rooms. Integration with gas suppression (FM200/Novec). Pre-action alarm before suppression activation.',ind:'Factory: heat detectors in dusty/dirty areas (smoke detectors false alarm). Flame detectors for flammable liquid areas. Beam detectors for warehouses with high ceilings.',og:'Hazardous area: Ex-rated detectors and call points. Flame detectors (UV/IR) for outdoor areas. Gas detection integrated with fire alarm. Safety Integrity Level (SIL) rated systems.',hc:'IS 2189 supplemented by NBC Part 4 for hospitals. Class A mandatory. 72h battery. VESDA for server rooms and records storage. Integration with nurse call and bed management.'},
    standards:{IS:[{clause:'IS 2189',title:'Fire alarm systems — code of practice',note:'Indian standard for fire detection and alarm system design'},{clause:'NBC 2016 Part 4',title:'Fire and life safety',note:'National Building Code fire protection requirements'}],NEC:[{clause:'NFPA 72',title:'National Fire Alarm and Signaling Code',note:'Comprehensive US fire alarm design standard'},{clause:'NEC Art. 760',title:'Fire alarm systems — wiring methods',note:'Cable types, circuit classifications, installation'}],IEC:[{clause:'EN 54 series',title:'Fire detection and alarm systems',note:'European standard series covering all FAS components'},{clause:'BS 5839-1',title:'Fire detection and alarm systems for buildings',note:'Comprehensive British/international design guide'}]},
    quiz:[]
  },

  /* ── REVENUE METERING CT SELECTION ── */
  {
    id:'metering-ct', level:3, icon:'📊', title:'Revenue Metering CT Selection',
    desc:'Current transformer selection for energy metering — accuracy class, burden, ratio, and smart metering per IS/IEC/NEC.',
    tags:['CT','Current Transformer','Metering','Revenue Metering','Smart Meter','Accuracy Class'],
    sectors:['com','ind','dc','og','hc'], green:true, calculator:null,
    beginner:{
      intro:"Revenue metering CTs measure energy consumption for billing. Unlike protection CTs, metering CTs must be highly accurate at normal operating currents, not at fault currents. Wrong CT selection means incorrect energy bills — potentially costing lakhs per year.",
      whyMatters:[{icon:'📊',text:'A CT with wrong ratio reads 20% low → utility loses revenue → customer gets audited and back-billed'},{icon:'💰',text:'Metering CT accuracy at 5-120% of rated current determines billing accuracy across entire load range'},{icon:'⚡',text:'Smart metering requires Cl.0.2S CTs — standard Cl.1 CTs will not meet AMI (Advanced Metering Infrastructure) requirements'}],
      theory:"ACCURACY CLASSES:\nCl.0.2S: highest accuracy for revenue metering and smart meters (±0.2% error at 5-120% Ipn)\nCl.0.5S: standard revenue metering (±0.5% at 5-120% Ipn)\nCl.0.5: general metering (±0.5% at 25-100% Ipn — poor at low loads)\nCl.1: check metering, sub-metering (±1% at 25-100% Ipn)\n\nThe 'S' suffix: 'S' means extended range — accurate from 5% to 120% of rated current.\nWithout 'S': only accurate from 25% to 100%. At light loads (nights, weekends), large errors.\n\nCT RATIO SELECTION:\nPrimary current = 1.1 to 1.5 × maximum demand current.\nStandard ratios: 50/5, 100/5, 150/5, 200/5, 300/5, 400/5, 600/5, 800/5, 1000/5, 1200/5, 1500/5, 2000/5.\nSecondary: 5A (IS/IEC traditional) or 1A (long cable runs, reduces burden).\n\nBURDEN:\nBurden = total impedance of secondary circuit (meter + cables + connections).\nMust not exceed CT rated burden (e.g., 5VA, 10VA, 15VA, 30VA).\nExceeding burden → accuracy degrades → wrong billing.",
      formula:{IS:'IS 16227 / IS 2705: CT for metering\nBurden (VA) = I²secondary × Z_total\nCable burden: VA = I² × 2L × ρ / A\nAccuracy class: Cl.0.2S or 0.5S per CERC metering regulations\nCT ratio: primary = 1.1-1.5 × MD current',NEC:'NEC Art. 480 / IEEE C57.13: instrument transformers\nRevenue metering: per utility tariff requirements\nAccuracy: ANSI C12.11 — Cl.0.3 (ANSI equivalent of IEC 0.2S)\nBurden: designated B-0.1, B-0.2, B-0.5, B-1.0 (IEEE rating)\nCT window type for retrofit, split-core for existing installations',IEC:'IEC 61869-2: current transformers (replaced IEC 60044-1)\nAccuracy class: 0.2S, 0.5S for revenue metering\nBurden: rated in VA at rated current\nIEC 62053-22: energy meters — Cl.0.2S metering accuracy\nIEC 62052-11: general requirements for electricity metering'},
      example:{sector:'com',given:'Commercial building, 1000kVA transformer, PF = 0.85. Select metering CTs for revenue metering at main incomer.',steps:['Transformer FLC = 1000 / (√3 × 0.415) = 1391A','Maximum demand current (with DF): ~1100A','CT primary = 1.2 × 1100 = 1320A → select 1500/5A','Accuracy class: Cl.0.5S (revenue metering per CERC)','Meter: ABB/Secure/L&T trivector meter (Cl.0.2S meter)','CT burden: meter = 2.5VA, cable (10m, 2.5mm²) = 1.4VA, total = 3.9VA','Select CT: 1500/5A, Cl.0.5S, 10VA burden, window type','Verify: 3.9VA < 10VA rated burden ✓','Install CTs on all 3 phases + neutral CT for unbalanced load measurement','Seal CTs and meter — utility requirement for revenue metering'],result:'3× 1500/5A Cl.0.5S window-type CTs + 1× neutral CT. Trivector meter Cl.0.2S. Total burden 3.9VA within 10VA rating. Utility sealed.'},
      rot:["CT ratio: pick the standard ratio where primary ≈ 1.2× your maximum demand current. Too high a ratio = CT operates at low percentage = inaccurate. Too low = saturates.","Revenue metering ALWAYS uses Cl.0.5S or better. Never Cl.1 — the 'S' in the accuracy class is non-negotiable for billing accuracy at light loads."],
      mistakes:["Selecting CT ratio based on transformer FLC instead of actual maximum demand — oversized CT operates at 20-30% load where even Cl.0.5 is inaccurate","Not calculating cable burden — long secondary cable runs can exceed CT rated burden, destroying accuracy","Using protection-class CT (5P20, 10P10) for metering — protection CTs are designed for fault current accuracy, NOT billing accuracy"],
      interviewQs:["What does the 'S' suffix mean in CT accuracy class 0.5S?","How do you calculate CT burden including cable resistance?","Why should CT ratio match actual load rather than transformer rating?"],
      siteTips:["When commissioning metering CTs, always verify polarity (P1/P2, S1/S2) with a polarity tester. Reversed polarity on one CT phase causes the meter to read ~57% of actual energy — this billing error goes undetected for years."],
      diagram:{type:'schematic',svgId:'metering-ct-diagram'}
    },
    advanced:{
      theory:"CT SATURATION IN METERING:\nMetering CTs must NOT saturate at rated current (saturated CT = zero accuracy).\nInstrument Security Factor (ISF/FS): limits secondary current during faults.\nFS5 means: secondary current capped at 5× rated during faults → protects connected meter.\nProtection CTs: opposite — must NOT saturate during faults (ALF 20 = accurate up to 20× Ipn).\n\nSMART METERING (AMI) CT REQUIREMENTS:\nAdvanced Metering Infrastructure requires: Cl.0.2S CT + Cl.0.2S meter.\nCommunication: RS-485/Modbus, DLMS/COSEM protocol.\nData granularity: 15-minute interval data, event logs, tamper detection.\nBi-directional metering: for solar net metering, CT must handle reverse power flow.\nLow-power CTs: Rogowski coil or LPCT (Low Power Current Transformer) per IEC 61869-10.\n\nDUAL-RATIO CTs:\nFor installations where load will grow, dual-ratio CTs allow re-ratio without replacement.\nExample: 400-800/5A — connect primary terminals for 400/5 now, re-tap to 800/5 later.\n\nCOMBINED CT/VT METERING UNITS:\nFor HT metering: combined CT+VT unit in single enclosure.\n11kV/33kV metering: outdoor oil-filled or resin-cast CT/VT units.\nAccuracy: Cl.0.2 CT + Cl.0.2 VT for revenue billing on HT feeders.",
      formula:{IS:'IS 16227: electronic meters for AC energy\nIS 2705 Part 1: CT general requirements\nBurden calculation: VA_cable = I²sec × 2 × L × ρ / (A × 1000)\nFor 5A secondary, 2.5mm² Cu, 10m: VA = 25 × 20 × 0.0178/2.5 = 3.56VA\nDual ratio: specify both ratios on nameplate',NEC:'IEEE C57.13: instrument transformer requirements\nANSI C12.1: code for electricity metering\nBurden designations: B-0.1 to B-1.8 (0.1Ω to 1.8Ω at 5A)\nRevenue metering accuracy: per ANSI C12.11\nWindow CT: NEC 480 — mounting requirements',IEC:'IEC 61869-2: current transformers (supercedes IEC 60044-1)\nIEC 61869-10: low-power passive current sensors\nIEC 62053-22: Cl.0.2S and Cl.0.5S energy meter requirements\nIEC 62052-11: general metering requirements\nBurden standardized: 2.5VA, 5VA, 10VA, 15VA, 30VA'},
      example:{sector:'ind',given:'Industrial plant: 33kV/415V, 5MVA transformer. Install HT revenue metering for utility billing + LV check metering.',steps:['HT metering: 33kV side per CERC regulation','HT CT: 100/5A, Cl.0.2, ISF ≤ 5 (for meter safety)','HT VT: 33kV/√3 / 110/√3, Cl.0.2, 50VA','Trivector meter: Cl.0.2S, DLMS/COSEM, 15-min interval','Communication: RS-485 to utility server + local display','LV check metering: 8000/5A Cl.0.5S at LV incomer','LV burden: meter (2.5VA) + cable 15m 4mm² (2.5VA) = 5VA','Select 10VA rated CT → sufficient margin','Compare HT and LV readings monthly — difference should be transformer losses only (1.5-2.5%)','Both meters: tamper-proof sealing by utility'],result:'HT: 100/5A Cl.0.2 CT + 33/0.11kV VT. LV check: 8000/5A Cl.0.5S. Both connected to DLMS meters. Energy balance verification monthly.'},
      rot:["In industrial metering: always install both HT (revenue) and LV (check) meters. Monthly comparison reveals CT degradation, meter drift, or pilferage. Difference beyond 3% needs investigation."],
      mistakes:["Installing metering CTs after a bus-coupler or changeover switch — some operating configurations bypass the CT. Revenue metering must capture ALL energy paths","Using split-core CTs for revenue metering — split-core CTs are convenient for retrofit but typically only achieve Cl.1 accuracy. Full-ring CTs are required for revenue."],
      interviewQs:["What is Instrument Security Factor (ISF) and why is it important for metering CTs?","How are HT metering CT/VT accuracy classes different from LV?","What is DLMS/COSEM protocol in smart metering?"],
      siteTips:["When you commission metering, run the meter for 24 hours and compare calculated energy (kWh = V × I × PF × hours) with metered energy. If they differ by more than 2%, investigate CT polarity, ratio, or meter programming before signing off."],
      diagram:{type:'schematic',svgId:'metering-ct-adv-diagram'}
    },
    sectorNotes:{com:'Commercial: LT metering standard. Cl.0.5S minimum per utility regulations. ABN Amro / Secure / L&T tri-vector meters common.',dc:'Data centre: sub-metering per rack/row for PUE calculation. Cl.1 acceptable for sub-metering. Modbus/BACnet integration with DCIM.',ind:'Industrial: HT + LT metering mandatory per CERC/SERC. TOD (Time of Day) metering for industrial tariff optimization. Power quality monitoring integrated.',og:'Offshore: metering for platform power allocation. Fiscal metering for gas turbine efficiency. High-accuracy Cl.0.2 for regulatory compliance.',hc:'Hospital: sub-metering per department for energy allocation. Essential vs non-essential power metering. Integration with BMS for energy management.'},
    standards:{IS:[{clause:'IS 2705',title:'Current transformers — specifications',note:'CT accuracy, burden, and testing requirements'},{clause:'IS 16227',title:'Electronic energy meters',note:'Requirements for electronic meters used in India'}],NEC:[{clause:'IEEE C57.13',title:'Instrument transformers',note:'US standard for CT/VT specifications'},{clause:'ANSI C12.1',title:'Code for electricity metering',note:'Metering accuracy and installation requirements'}],IEC:[{clause:'IEC 61869-2',title:'Current transformers',note:'Replaces IEC 60044-1 — modern CT standard'},{clause:'IEC 62053-22',title:'Static energy meters — Cl.0.2S and 0.5S',note:'Accuracy requirements for revenue-grade energy meters'}]},
    quiz:[]
  },

  /* ── CABLE PULL TENSION ── */
  {
    id:'cable-pull-tension', level:3, icon:'🔧', title:'Cable Drum & Pull Tension',
    desc:'Cable installation design — pull tension calculation, sidewall bearing pressure, bend radius, and drum selection.',
    tags:['Cable Pulling','Pull Tension','Sidewall Pressure','Bend Radius','Cable Drum','Installation'],
    sectors:['com','ind','dc','og'], green:false, calculator:null,
    beginner:{
      intro:"Cables must be installed without exceeding their maximum pull tension or sidewall bearing pressure, otherwise insulation damage or conductor stretch occurs — causing premature cable failure. This topic covers the calculations needed before any cable pull.",
      whyMatters:[{icon:'🔧',text:'A single overstressed cable pull can damage insulation invisibly — the cable passes megger test initially but fails in service within months'},{icon:'📏',text:'Pull tension increases with cable weight, length, friction, and bends — long pulls through multiple bends can easily exceed limits'},{icon:'💰',text:'Cable replacement in occupied buildings costs 5-10× the original installation — getting it right first time is essential'}],
      theory:"PULL TENSION BASICS:\nTension = cable weight per metre × length × coefficient of friction (straight pull).\nT = W × L × μ (straight horizontal pull)\nW = cable weight (kg/m)\nL = pull length (m)\nμ = friction coefficient (0.5 for PVC, 0.35 for lubricated)\n\nBEND MULTIPLIER:\nEach bend adds a multiplier to the tension.\n90° bend multiplier: e^(μ×π/2) ≈ 1.6 to 2.0\nMultiple bends compound: total multiplier = product of individual multipliers.\n\nSIDEWALL BEARING PRESSURE (SWP):\nSWP = T / R (tension at bend / bend radius)\nLimit: 200 kg/m for single cable, 100 kg/m for multiple cables.\nExceeding SWP crushes the cable at the bend.\n\nMINIMUM BEND RADIUS:\nPower cables: 6× OD (single core) to 12× OD (multi-core armoured).\nIS 1554: minimum 12× OD for armoured, 8× OD for unarmoured.\nNEC: per NEC 300.34 — depends on cable type and voltage.\n\nDRUM SELECTION:\nMinimum drum diameter = cable minimum bend radius × 2.\nCable length on drum: verify total weight is within crane/lifting capacity.\nDrum flanges: extend 50mm beyond outermost cable layer.",
      formula:{IS:'IS 1255: code of practice for installation of cables\nPull tension (straight): T = W × L × μ\nPull tension (with bend): T_out = T_in × e^(μ×θ)\nSWP = T / R (kg/m, where R in metres)\nSWP limit: 200 kg/m (single cable)\nMin bend radius: IS 1554 — 12× OD (armoured)',NEC:'NEC 300.34: conductor bending radius\nJamming ratio check: D/d between 2.8-3.2 → jamming risk\nPull tension limit: per NEC/AEIC tables\nMax tension: 0.008 × cmil (copper), 0.006 × cmil (aluminium)\nSWP limit: 300 lbs/ft for single cable',IEC:'IEC 60364-5-52 Cl.522: cable installation methods\nIEC 60502: power cables — mechanical properties\nPull tension: manufacturer maximum (typically printed on drum)\nBend radius: IEC 60502 — 15× OD for armoured XLPE ≤6kV\n20× OD for HV cables'},
      example:{sector:'ind',given:'Pull 3×1C 300mm² XLPE aluminium cables through 200m underground duct with two 90° bends. Calculate pull tension.',steps:['Cable weight: 300mm² Al 1C XLPE ≈ 1.8 kg/m per cable','3 cables in trefoil: total weight = 5.4 kg/m','Friction coefficient (lubricated): μ = 0.35','Straight section before first bend (120m): T₁ = 5.4 × 120 × 0.35 = 226.8 kg','First 90° bend: multiplier = e^(0.35 × π/2) = e^0.55 = 1.733','T₂ = 226.8 × 1.733 = 393 kg','Straight section after first bend (50m): T₃ = 393 + (5.4 × 50 × 0.35) = 393 + 94.5 = 487.5 kg','Second 90° bend: T₄ = 487.5 × 1.733 = 845 kg','Remaining straight (30m): T₅ = 845 + (5.4 × 30 × 0.35) = 845 + 56.7 = 902 kg','Max allowable tension (Al 300mm²): ~1200 kg ✓','SWP at second bend (radius 1m): 845/1 = 845 kg/m ⚠️ EXCEEDS 200 limit','Solution: increase bend radius to 5m: SWP = 845/5 = 169 kg/m ✓'],result:'Total pull tension: 902 kg (within 1200 kg limit). SWP critical at second bend — increase radius from 1m to 5m. Use cable lubricant throughout. Pull from transformer end (reduces tension at bends).'},
      rot:["Always pull from the end that results in the lowest tension at bends. Route planning matters — pulling through bends first (before long straight run) keeps bend tensions lower.","Maximum horizontal straight pull without intermediate assistance: ~150m for standard power cables. Beyond that, use intermediate pull points or figure-8 the cable."],
      mistakes:["Not lubricating cable duct before pulling — friction coefficient doubles from 0.35 to 0.7, more than doubling required tension","Pulling cable around tight bends (small radius) — SWP can crush cable even if total tension is within limits","Storing cable drums flat (on their side) — cable slides and kinks. Always store upright on flanges."],
      interviewQs:["How does a 90° bend affect cable pull tension?","What is sidewall bearing pressure and how is it calculated?","Why do you pull cable from the far end rather than pushing from the drum end?"],
      siteTips:["Before any major cable pull, do a trial run with a pull rope and dynamometer. If the rope tension exceeds 60% of the cable's rated maximum, add intermediate pull points or increase duct size. The cheapest fix is always before the cable is in the duct."],
      diagram:{type:'schematic',svgId:'cable-pull-diagram'}
    },
    advanced:{
      theory:"COMPLEX PULL CALCULATIONS:\nFor vertical pulls: add/subtract gravity component.\nUpward: T = W × L × (μ cosθ + sinθ)\nDownward: T = W × L × (μ cosθ − sinθ)\nFor inclined pulls at angle θ from horizontal.\n\nJAMMING RATIO (3 CABLES IN CONDUIT):\nJamming ratio = conduit ID / cable OD.\nRisk zone: 2.8 ≤ D/d ≤ 3.2 → cables jam in wedge formation.\nAvoid this ratio by selecting appropriate conduit size.\nSafe zone: D/d > 3.2 (cables pass freely) or D/d < 2.8 (cables in cradled formation).\n\nCATENARY CALCULATIONS (OVERHEAD):\nFor cable tray and overhead installations:\nSag: f = W × L² / (8T)\nHorizontal tension: T_h = W × L²/ (8f)\nSupport spacing: L_max based on maximum acceptable sag.\n\nTHERMAL EXPANSION:\nCable expansion = α × L × ΔT\nFor XLPE cable: α ≈ 23 × 10⁻⁶ per °C\nFor 100m cable, 60°C rise: expansion = 23e-6 × 100 × 60 = 0.138m = 138mm\nSnake cable in tray to accommodate expansion, or use expansion loops at risers.",
      formula:{IS:'IS 1255 Part 1: power cable installation\nVertical pull: T = W × H + friction at bends\nSnaking in tray: 350mm offset per 10m straight length\nClamping: IS 1255 Cl.8 — cleating requirements for single-core cables\nArmoured cable: support at 750mm intervals (vertical), 600mm (horizontal)',NEC:'NEC 300.34: conductor bending radius by voltage class\n≤2kV: 8× OD (unshielded), 12× OD (shielded)\n>2kV ≤15kV: 12× OD (unshielded), 15× OD (shielded)\nJamming: NEC Ch.9 Note 8 — clearance check\nPulling compound: per NEC 300.40',IEC:'IEC 60502-1: power cables ≤1kV — mechanical requirements\nIEC 60502-2: power cables 1-30kV\nBend radius: Table in IEC 60502 — function of cable construction\nIEC 60287: current rating (thermal design — see cable sizing topic)\nIEC 60228: conductor construction and resistance'},
      example:{sector:'og',given:'Offshore platform: pull 3×1C 630mm² Cu XLPE 11kV cable through 250m cable tray route with 30m vertical riser and three 90° bends.',steps:['Cable weight: 630mm² Cu 11kV single-core ≈ 8.5 kg/m','3 cables: 25.5 kg/m total','Horizontal section 150m (lubricated tray, μ=0.3): T₁ = 25.5×150×0.3 = 1147.5 kg','First 90° bend: T₂ = 1147.5 × e^(0.3×π/2) = 1147.5 × 1.60 = 1836 kg','Horizontal 50m: T₃ = 1836 + 25.5×50×0.3 = 1836 + 382.5 = 2218.5 kg','Second 90° bend (into riser): T₄ = 2218.5 × 1.60 = 3550 kg','Vertical riser 30m (up): T₅ = 3550 + 25.5×30×1.0 = 3550 + 765 = 4315 kg','Third 90° bend at top: T₆ = 4315 × 1.60 = 6904 kg','Max allowable (Cu 630mm²): ~8000 kg → 6904/8000 = 86% ⚠️ near limit','SWP at top bend (R=1.5m): 4315/1.5 = 2877 kg/m ⚠️ EXCEEDS 200 limit','Solution: use powered rollers at top bend, increase radius to 15m'],result:'Total tension: 6904 kg (86% of limit — acceptable with powered winch). Critical SWP at riser bend — requires large-radius bend guide (15m) and roller support. Winch speed ≤5 m/min.'},
      rot:["For offshore cable pulls: always have a spare cable drum on standby. If a pull fails (cable stuck, SWP exceeded), the cable is scrapped — you cannot re-use a stretched cable. The cost of a spare drum is insurance against project delay."],
      mistakes:["Not accounting for vertical rise in riser pulls — gravity adds directly to tension (no friction coefficient, just W×H)","Exceeding pull speed — fast pulls cause heat buildup at conduit bends, softening PVC insulation. Maximum 5 m/min for power cables"],
      interviewQs:["How do you calculate cable pull tension through a vertical riser with bends?","What is the jamming ratio and why is it dangerous?","How does thermal expansion affect cable installation in trays?"],
      siteTips:["For critical HV cable pulls (11kV+), always install a calibrated dynamometer on the pulling rope and assign one person to monitor tension continuously. Stop immediately if tension exceeds 80% of the cable manufacturer's maximum. Many offshore cable failures trace back to installation damage that wasn't caught."],
      diagram:{type:'schematic',svgId:'cable-pull-adv-diagram'}
    },
    sectorNotes:{com:'Commercial: mainly MV/LV cables in risers. Fireproofing of cable penetrations critical. Pull calculations for riser cables in high-rise buildings.',ind:'Industrial: long horizontal runs in cable tunnels. Power cable pulling equipment (winch, rollers, lubricant) required for 300mm²+ cables. Cleating for short-circuit forces.',dc:'Data centre: structured cabling with cable management. Power cables to UPS/PDU — typically short runs in raised floor or overhead basket tray. Pull tension rarely critical.',og:'Offshore: most critical sector for cable pulling. Marine environment, limited crane capacity, cable drum logistics. Contract specifies pull procedures, witnessed pulls, and documentation.'},
    standards:{IS:[{clause:'IS 1255',title:'Code of practice for installation of cables',note:'Cable installation methods, bend radii, and pulling requirements'},{clause:'IS 1554',title:'PVC insulated cables',note:'Mechanical properties and minimum bend radii'}],NEC:[{clause:'NEC 300.34',title:'Conductor bending radius',note:'Minimum bend radius by voltage class and cable type'},{clause:'NEC Ch.9',title:'Tables — conduit fill and cable data',note:'Conduit sizing and jamming ratio checks'}],IEC:[{clause:'IEC 60502',title:'Power cables — extruded insulation',note:'Mechanical properties, bend radius, and installation requirements'},{clause:'IEC 60287',title:'Current rating of cables',note:'Thermal design for installed cables (linked to installation method)'}]},
    quiz:[]
  }

];

window.TOPICS_L3 = TOPICS_L3;
