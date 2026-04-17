/* ═══════════════════════════════════════════
   ElecPro — topics_L2.js
   Level 2: Core Design — 12 topics COMPLETE
   ═══════════════════════════════════════════ */

const TOPICS_L2 = [

  {
    id:'load-calculation', level:2, icon:'📦', title:'Load Calculation',
    desc:'Connected load, demand factor, diversity — the foundation of every electrical design.',
    tags:['Load Calculation', 'Maximum Demand', 'Connected Load', 'Diversity Factor'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:'calcLoad',

    beginner:{
      intro:"Before sizing any transformer, cable, or generator, you must first know the load. Load calculation is Step 1 of every electrical design — without it, every downstream decision is a guess.",
      whyMatters:[
        { icon:'🔌', text:'Undersized supply causes voltage drop, tripping, and fire risk' },
        { icon:'💰', text:'Oversized equipment wastes capital cost — load calc finds the right size' },
        { icon:'📋', text:'Load schedule is a mandatory deliverable for every electrical permit' }
      ],
      theory:"TWO KEY LOADS:\n\nCONNECTED LOAD: Sum of all installed equipment nameplate ratings. The theoretical maximum if everything ran at full power simultaneously. Always higher than reality.\n\nMAXIMUM DEMAND (MD): The highest load actually expected at any one time. Found by applying demand factor and diversity factor to connected load.\n\nDEMAND FACTOR (DF): Ratio of maximum demand to connected load. Always ≤ 1.0. Accounts for the fact that not all loads run simultaneously at full rating.\n\nDIVERSITY FACTOR (DiF): Ratio of sum of individual maximum demands to the simultaneous maximum demand of the whole group. Always ≥ 1.0. Used when combining loads from multiple circuits or floors.\n\nDEMAND FACTOR TABLE (typical):\nLighting: 1.0 (assume all on)\nGeneral power sockets: 0.4–0.6\nAir conditioning: 0.7–0.9\nMotors: 0.6–0.8 (large group)\nComputers/IT: 0.7–0.9",
      formula:{
        IS:'MD (kW) = Σ(Connected Load × DF) / Diversity\nMD (kVA) = MD (kW) / Power Factor\nNBC 2016: planning allowance 50W/m² (office), 60W/m² (hospital)\nIE Rules: MD used for tariff and supply sizing',
        NEC:'MD = Connected Load × Demand Factor\nNEC 220.42: Lighting demand factors\nNEC 220.82: Dwelling units — 3VA/sq ft general lighting\nNEC 220.83: Existing dwelling — tiered demand factors',
        IEC:'MD (kVA) = Σ(Pi × DFi) / PF\nIEC 60364-1: Design current Ib ≤ cable rating\nDemand factors per space type from IEC 60364 Annex B'
      },
      example:{
        sector:'com',
        given:'Office floor 800m²: 40×1.5kW ACs (DF=0.75), 100×100W computers (DF=0.85), 400×20W LEDs (DF=1.0). PF=0.87.',
        steps:[
          'AC load: 40 × 1.5 × 0.75 = 45 kW',
          'Computer load: 100 × 0.1 × 0.85 = 8.5 kW',
          'LED load: 400 × 0.02 × 1.0 = 8 kW',
          'Total MD (kW) = 45 + 8.5 + 8 = 61.5 kW',
          'MD (kVA) = 61.5 / 0.87 = 70.7 kVA'
        ],
        result:'Maximum Demand = 70.7 kVA → Select 80 kVA sub-distribution transformer or 100A MDB rating.'
      },
      rot:["Quick estimate: office buildings typically run at 50–60 W/m² overall. For 800m² office: 800 × 55 = 44 kW → 50 kVA. Use for preliminary sizing only — always do detailed calc.","Rule: Connected load is never your design load. Always apply at least 0.7 demand factor for general power circuits."],
      mistakes:["Using connected load directly to size the transformer — adds 20–40% unnecessary cost","Applying demand factors to lighting — lighting demand factor is 1.0 unless evidence shows otherwise","Forgetting to convert kW to kVA — cables and transformers are rated in kVA, not kW"],
      interviewQs:["What is the difference between demand factor and diversity factor?","Why is the diversity factor always ≥ 1 while demand factor is always ≤ 1?","How do you calculate maximum demand for a multi-storey building?"],
      siteTips:["On site, use a clamp meter and power analyser to measure actual maximum demand over 24–48 hours. Real MD is often 15–30% lower than calculated — useful data for future project estimates.","If the installed transformer is running hot (oil temperature > 80°C), first measure actual kVA loading before ordering a replacement — often it's just poor ventilation, not overloading."],
      diagram:{type:'schematic',svgId:'load-calc-diagram'}
    },
    advanced:{
      theory:"LOAD PROFILE AND COINCIDENCE:\nReal loads vary through the day. Load profile graphs kW vs time. Peak demand occurs at a specific time — must be identified per building type:\n— Office: peak at 10–11am and 3–4pm\n— Hospital: relatively flat profile 24/7\n— Retail: peak Saturday afternoon\n— Data centre: essentially flat (design for full load always)\n\nMACRODIVERSITY: When combining multiple buildings or feeders, diversity between them reduces the simultaneous peak. A campus with 5 buildings will peak at different times than each building individually.\n\nAFTER DIVERSITY MAXIMUM DEMAND (ADMD):\nUsed by utilities for network planning. For residential: ADMD typically 1.5–3 kVA per dwelling at distribution transformer level.\n\nHARMONIC LOADS: Non-linear loads (VFDs, computers, LED drivers) draw non-sinusoidal current. Actual power = V × I × PF (true), not V × I × displacement PF. Must account for harmonic current in cable and neutral sizing.\n\nFUTURE GROWTH: Best practice adds 15–25% to calculated MD for future expansion. Critical for data centres (often plan for 100% growth).",
      formula:{
        IS:'ADMD = MD × simultaneity factor\nGrowth factor: design MD × 1.20 (20% headroom)\nHarmonic current in neutral (3-phase): IN = IL × √(1 + (THD/100)²)\nNBC 2016 spare capacity: transformers ≤ 80% loaded',
        NEC:'NEC 220.87: Existing loads — actual measured demand\nNEC 220.55: Ranges and cooking (special demand factors)\nIEEE 141 (Red Book): Maximum demand calculations for industrial',
        IEC:'IEC 60364-5-52: Design current Ib based on MD\nIEC 60364-1 Art.311: Assessment of general characteristics\nSimultaneity factor ks from IEC 60364 Annex B'
      },
      example:{
        sector:'dc',
        given:'Data centre 500 kW IT load. PF=0.97 (UPS). Cooling = 40% of IT. Lighting + misc = 5% of IT. Future growth 100%. Find design MD.',
        steps:[
          'IT load: 500 kW',
          'Cooling: 500 × 0.40 = 200 kW',
          'Lighting/misc: 500 × 0.05 = 25 kW',
          'Current MD: 500 + 200 + 25 = 725 kW',
          'Future growth (100%): 725 × 2.0 = 1450 kW',
          'MD (kVA) = 1450 / 0.97 = 1495 kVA',
          'PUE = 725/500 = 1.45 (current), target ≤ 1.4'
        ],
        result:'Design for 1500 kVA. Transformer: 2 × 1000 kVA (N+1). Generator: 2 × 1000 kW (N+1). PUE target 1.4.'
      },
      rot:["For data centres: always design for 100% future growth. A Tier III data centre that runs at 90% capacity has no room for N+1 redundancy when one UPS is on maintenance."],
      mistakes:["Not accounting for harmonic loads when calculating neutral current — 3rd harmonics add in neutral, not cancel","Using the same diversity factor for data centres as for offices — data centre loads are much flatter (diversity factor ≈ 1.0)"],
      interviewQs:["How does After Diversity Maximum Demand (ADMD) differ from individual building maximum demand?","Why must neutral conductors be upsized for computer/IT loads?","What is PUE and how does it relate to data centre load calculation?"],
      siteTips:["Install a power analyser at the main incomer for 7 days before finalising any major infrastructure upgrade. Actual peak demand data is more valuable than any calculation — and often surprisingly lower."],
      diagram:{type:'schematic',svgId:'load-profile-diagram'}
    },
    sectorNotes:{
      res:'Residential: 1.5–3 kVA per unit for utility ADMD planning. Detailed calc: sum all circuits (lighting 0.5kW, kitchen 4kW, AC 2kW, etc.) with diversity 0.4–0.6.',
      com:'Commercial: NBC 2016 allowances — office 50W/m², retail 60W/m², hotel 50W/m². Detailed calc essential for final design. Demand factor: AC 0.75, lighting 1.0, power 0.5.',
      dc:'Data centre: diversity factor ≈ 1.0 (all servers can run simultaneously). Design for 100% IT load plus cooling overhead. PUE tracks efficiency.',
      ind:'Industrial: motor loads dominate. Starting currents affect maximum demand. Staggered starting reduces peak demand — important for transformer sizing.',
      og:'Offshore: isolated power system — no grid backup. Design for highest load scenario with N+1 redundancy. Include all safety systems (ESD, F&G) as non-interruptible.',
      hc:'Healthcare: separate essential and non-essential load schedules. Essential (life safety) loads must be supplied within 10 seconds by UPS+generator (NFPA 99).'
    },
    standards:{
      IS:[{clause:'NBC 2016 Part 8',title:'Electrical load allowances by occupancy',note:'Planning allowances: office 50W/m², hospital 60W/m²'},{clause:'IE Rules 1956 Rule 26',title:'Maximum demand declaration',note:'Consumers must declare MD to utility for tariff'}],
      NEC:[{clause:'NEC Art. 220',title:'Branch circuit, feeder, and service calculations',note:'Complete load calculation methodology'},{clause:'NEC 220.42',title:'General lighting demand factors',note:'Demand factors for lighting by occupancy type'}],
      IEC:[{clause:'IEC 60364-1',title:'Assessment of general characteristics',note:'Determination of design current and maximum demand'},{clause:'IEC 60364-5-52 Annex B',title:'Simultaneity factors',note:'Demand factors for different circuit types'}]
    },
    quiz:[]
  },

  {
    id:'max-demand-tariff', level:2, icon:'💰', title:'Maximum Demand & Tariff',
    desc:'How utilities measure and bill maximum demand. Tariff structures and power factor obligations.',
    tags:['Max Demand & Tariff', 'Tariff', 'Demand Charges', 'MD Billing'],
    sectors:['com','ind','hc'], green:false, calculator:null,

    beginner:{
      intro:"Your electricity bill has two components — energy (kWh) and demand (kVA or kW). Maximum demand charges can be 30–50% of the total bill. Understanding tariff structures is essential for both design and cost management.",
      whyMatters:[
        { icon:'💸', text:'MD charges can exceed energy charges for large commercial consumers' },
        { icon:'📊', text:'Demand management saves money without reducing production' },
        { icon:'⚡', text:'PF penalties add 10–20% to bills — capacitor banks pay back in months' }
      ],
      theory:"HOW UTILITIES MEASURE MD:\nMaximum Demand is typically measured as the highest average load over any 15 or 30 minute interval in the billing period.\nMD meter integrates power over each interval and records the peak.\nOnce recorded, the MD remains billable for the month (some utilities: 2 months).\n\nINDIAN TARIFF STRUCTURE (typical — varies by state):\nFixed/Demand charges: ₹/kVA/month of recorded MD\nEnergy charges: ₹/kWh (often tiered)\nPower factor surcharge: additional % if PF < 0.90\nTOD (Time of Day) tariff: higher rates during peak hours (typically 6–10pm)\n\nUS TARIFF STRUCTURE (NEC jurisdiction):\nDemand charges: $/kW of peak 15-min demand\nEnergy: $/kWh\nRatchet clause: billed at % of annual peak even in low months\n\nDEMAND MANAGEMENT STRATEGIES:\n1. Load shedding: turn off non-essential loads during peak periods\n2. Load shifting: run heavy loads at night/off-peak\n3. Staggered starting: avoid motor starting surges\n4. On-site generation: reduce grid demand at peak",
      formula:{
        IS:'MD charge = Recorded MD (kVA) × Rate (₹/kVA)\nPF surcharge: extra % if PF < 0.90\nEnergy = Units × Rate (₹/kWh)\nTOD surcharge: peak hours premium (50–100%)',
        NEC:'Demand charge: Peak kW × $/kW/month\nRatchet: max(current month, % of annual peak)\nPower factor adjustment: varies by utility',
        IEC:'MD determination: highest average over measurement interval\nIEC 60051: Electricity meters\nIEC 62053: Electricity metering equipment'
      },
      example:{
        sector:'com',
        given:'Commercial building: MD = 250 kVA, PF = 0.78, energy = 50,000 kWh/month. Tariff: ₹350/kVA/month demand + ₹8/kWh energy + 10% PF surcharge if PF < 0.90.',
        steps:[
          'Demand charge: 250 × 350 = ₹87,500',
          'Energy charge: 50,000 × 8 = ₹4,00,000',
          'PF surcharge (PF=0.78 < 0.90): 10% × (87,500+4,00,000) = ₹48,750',
          'Total bill: 87,500 + 4,00,000 + 48,750 = ₹5,36,250/month',
          'With PF correction to 0.95: No surcharge. MD reduces from 250 to ~205 kVA',
          'Saving: 48,750 (surcharge) + (250-205)×350 (MD) = 48,750 + 15,750 = ₹64,500/month'
        ],
        result:'PF correction saves ₹64,500/month = ₹7.74 lakhs/year. Capacitor bank cost ≈ ₹3–5 lakhs. Payback < 6 months.'
      },
      rot:["TOD tariff rule: shift any flexible load (chillers, batch processes, water pumping) to 11pm–6am. Savings of 30–50% on those units.","Ratchet clause warning (US): if you spike demand in one month (e.g. commissioning new equipment), you may pay elevated demand charges for the next 11 months."],
      mistakes:["Ignoring the ratchet clause when planning equipment commissioning — timing a high-power test during summer peak can lock in high demand charges for months","Not installing a demand controller before commissioning — building management should monitor and shed loads to prevent unnecessary MD spikes"],
      interviewQs:["What is the difference between kW demand charges and kVA demand charges?","How does a ratchet clause work in a US electricity tariff?","Why is it cheaper to run chillers at night for pre-cooling than during the day?"],
      siteTips:["Install a sub-metering system with 15-minute interval data logging. Review the demand profile monthly — operational changes (shift scheduling, equipment startup sequencing) can reduce MD without any capital investment."],
      diagram:{type:'schematic',svgId:'tariff-diagram'}
    },
    advanced:{
      theory:"SMART DEMAND MANAGEMENT:\nBuilding Energy Management Systems (BEMS) monitor real-time kVA and shed non-critical loads when approaching the demand setpoint.\n\nPEAK DEMAND PREDICTION:\nML algorithms predict 15-minute demand and pre-emptively shed loads. Used in large commercial buildings and industrial facilities.\n\nDEMAND RESPONSE PROGRAMS:\nUtilities offer incentives for consumers who agree to reduce load on request during grid emergencies. Virtual Power Plants aggregate DR participants.\n\nBATTERY STORAGE FOR DEMAND MANAGEMENT:\nCharge batteries during off-peak hours, discharge during peak demand periods.\nEconomics: compare battery CAPEX + OPEX with annual demand charge savings.\nTypical payback: 3–7 years for commercial scale BESS (Battery Energy Storage System).\n\nNET METERING:\nSolar generation offsets kWh consumption but rarely offsets demand charges (sun may not be at its peak during building peak demand).\nImportant for realistic solar ROI calculations.",
      formula:{
        IS:'Demand charge saving = ΔMD (kVA) × Rate × 12 (months)\nBESS sizing: E (kWh) = P_peak (kW) × t_peak (h)\nBESS payback: CAPEX / annual saving\nPF correction saving: ΔkVA × ₹/kVA/month × 12',
        NEC:'BESS demand shifting: kWh = kW_peak × hours\nNominal BESS capacity derating: 80–90% usable\nDemand response value: $/kW/year (utility dependent)',
        IEC:'IEC 62933: Electrical energy storage systems\nGrid interaction per IEC 62116 and local utility rules'
      },
      example:{
        sector:'ind',
        given:'Factory: MD = 500 kVA, demand charge ₹400/kVA/month. BESS can shave 50 kVA peak for 2 hours/day. BESS cost ₹1.5 crore.',
        steps:[
          'Monthly demand saving: 50 kVA × ₹400 = ₹20,000/month',
          'Annual saving: ₹20,000 × 12 = ₹2,40,000/year',
          'BESS payback: ₹1,50,00,000 / ₹2,40,000 = 62.5 years',
          'Conclusion: BESS not economically justified for demand management alone',
          'Recalculate with PF correction (cheaper): PF 0.80 → 0.95 reduces MD by 63 kVA',
          'Saving: 63 × 400 × 12 = ₹3,02,400/year. Capacitor cost ₹4 lakhs. Payback: 1.3 years'
        ],
        result:'PF correction is far more cost-effective than BESS for demand management in this case. BESS justified only if combined with solar + time-of-day arbitrage.'
      },
      rot:["BESS for demand management works best when peak demand spikes are short (<30 min) and infrequent. If your factory has a sustained high demand all day, BESS cannot help."],
      mistakes:["Assuming solar PV will reduce demand charges — solar rarely coincides perfectly with building demand peak","Sizing BESS for energy only without considering demand management — often the demand charge saving is the primary economic driver"],
      interviewQs:["When is battery storage economically viable for demand management?","How does time-of-use tariff affect the design of an HVAC system?","What is demand response and how do buildings participate?"],
      siteTips:["Before investing in demand management hardware, spend 3 months analysing interval meter data. Often the peak demand is caused by one specific piece of equipment starting — rescheduling that start can eliminate the charge."],
      diagram:{type:'schematic',svgId:'demand-management-diagram'}
    },
    sectorNotes:{
      res:'Residential consumers are typically on simple energy tariffs (₹/kWh). No MD billing. However, LT metering with MD recording applies for residential complexes with combined demand > 25 kW.',
      com:'Commercial: HT or LT tariff with MD component. Mandatory APFC panels for buildings with MD > 100 kVA. TOD tariff applies in most states.',
      dc:'Data centres: typically on HT tariff with significant demand component. Constant load profile means MD equals average load — little opportunity for demand reduction without BESS.',
      ind:'Industrial: HT tariff with highest demand charges. MD spikes from motor starting particularly costly. Ratchet clauses in US tariffs especially impactful.',
      og:'Offshore: captive power (generators). No utility MD charges. Fuel cost is the equivalent metric — load optimisation reduces fuel consumption.',
      hc:'Healthcare: utility supply for non-critical loads on HT tariff. Critical loads on generator/UPS. MD billing applies to utility portion only.'
    },
    standards:{
      IS:[{clause:'IE Rules 1956 Rule 47A',title:'Power factor and MD obligations',note:'PF ≥ 0.90 and MD declaration requirements'},{clause:'CEA Metering Regulations 2006',title:'Metering standards for MD measurement',note:'15/30-minute interval MD metering requirements'}],
      NEC:[{clause:'IEEE 1366',title:'Electric Power Distribution Reliability Indices',note:'Framework for utility performance metrics'},{clause:'ASHRAE 90.1',title:'Energy standard for buildings',note:'Demand management and peak load reduction requirements'}],
      IEC:[{clause:'IEC 62053',title:'Electricity metering equipment',note:'Standards for MD meters and interval recording'},{clause:'IEC 62933',title:'Electrical energy storage systems',note:'BESS design and performance standards'}]
    },
    quiz:[]
  },

  {
    id:'cable-sizing', level:2, icon:'🔗', title:'Cable Sizing',
    desc:'Ampacity, voltage drop, adiabatic short-circuit withstand — the three checks every cable must pass.',
    tags:['Cable Sizing', 'Ampacity', 'Cable Capacity', 'Conductor Sizing'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:'calcCable',

    beginner:{
      intro:"Cable sizing is the most frequently performed calculation in electrical design. Every circuit needs a cable. Every cable must pass three checks: current rating, voltage drop, and short circuit withstand. Get any one wrong and the design fails.",
      whyMatters:[
        { icon:'🔥', text:'Undersized cable overheats — cable fires are the leading cause of electrical fires' },
        { icon:'⚡', text:'Voltage drop causes equipment malfunction, motor overheating, and tripping' },
        { icon:'🛡️', text:'Short circuit withstand ensures cable survives a fault without burning before the breaker trips' }
      ],
      theory:"THREE CHECKS — ALL MUST PASS:\n\nCHECK 1 — CURRENT RATING (AMPACITY):\nSelect cable so Iz_derated ≥ Ib (design current)\nIz = tabulated current rating × derating factors\nDerating factors: temperature (ambient), grouping (bunching), installation method\n\nCHECK 2 — VOLTAGE DROP:\nCalculate VD along the cable run.\nIS/IEC limit: ≤ 3% for lighting, ≤ 5% for power circuits\nNEC recommends: ≤ 3% branch, ≤ 5% total (feeder + branch)\n\nCHECK 3 — SHORT CIRCUIT WITHSTAND (Adiabatic):\nVerify cable cross-section can absorb fault energy before breaker clears.\nS ≥ I × √t / k\nwhere S = cross-section (mm²), I = fault current (A), t = clearing time (s)\nk = 115 for PVC/Cu, 143 for XLPE/Cu",
      formula:{
        IS:'Check 1: Iz × CF_temp × CF_group ≥ Ib\nCheck 2: VD = √3 × I × L × R/1000 (3-ph)\n         VD = 2 × I × L × R/1000 (1-ph)\nCheck 3: S ≥ I√t / 115 (PVC-Cu)\n         S ≥ I√t / 143 (XLPE-Cu)\nIS 3961 current ratings',
        NEC:'NEC Table 310.15(B)(16): Ampacity at 75°C\nVD check: NEC 210.19(A) informational note ≤ 3%\nShort circuit: NEC 110.9 and IEEE 242\nAWG sizes: 14, 12, 10, 8, 6, 4, 2, 1/0, 2/0...',
        IEC:'IEC 60364-5-52: Cable ampacity tables\nIEC 60364-5-52 Cl.523: derating factors\nVD per IEC 60364-5-52: ≤ 4% total from origin\nAdiabatic: S = I√t / k (IEC 60364-4-43)'
      },
      example:{
        sector:'com',
        given:'3-phase 415V circuit: Ib=68A, length=75m, ambient=40°C, 2 cables in tray (grouped). Use 10mm² Cu XLPE cable.',
        steps:[
          'Tabulated Iz (10mm² XLPE, in tray): 87A',
          'Temp derating at 40°C (XLPE): × 0.91 → 87 × 0.91 = 79.2A',
          'Grouping factor (2 cables): × 0.90 → 79.2 × 0.90 = 71.3A',
          'Check 1: 71.3A ≥ 68A ✓ (just passes — consider 16mm² for headroom)',
          'VD: √3 × 68 × 75 × 1.15/1000 = 10.2V → VD% = 10.2/415 × 100 = 2.46% ✓',
          'Isc at source = 15kA, breaker clears at 0.1s: S_min = 15000 × √0.1 / 143 = 33.1mm²',
          'Check 3: 10mm² < 33.1mm² ✗ FAIL — upgrade to 35mm² or verify actual Isc at cable end'
        ],
        result:'10mm² passes current rating and VD but FAILS short circuit check for 15 kA source. Either: (a) use 35mm² cable, or (b) verify Isc at cable end is below limit for 10mm².'
      },
      rot:["Quick mental check: at 415V 3-phase, 1mm² Cu XLPE carries roughly 1.5A in free air after derating. 10mm² ≈ 50A derated, 25mm² ≈ 90A, 50mm² ≈ 130A, 95mm² ≈ 200A.","VD rule: 10mm² Cu at 100m, 50A load ≈ 2V drop (3-phase). Scale proportionally."],
      mistakes:["Using underated cable ampacity (from free air table) without applying grouping and temperature derating","Checking VD as a percentage of phase voltage (240V) instead of line voltage (415V) for 3-phase — gives result 1.73× too high","Skipping the adiabatic check — common for short cables near the source where fault current is highest"],
      interviewQs:["What is the adiabatic equation and what does each term represent?","Why does grouping cables in a tray reduce their current rating?","How does the installation method affect cable current rating?"],
      siteTips:["On site, if you measure higher-than-expected cable temperature on a loaded circuit, first check: (1) actual load current vs rated, (2) are cables bunched or covered, (3) is ambient temperature higher than design. Don't assume the cable is wrong before checking operating conditions."],
      diagram:{type:'schematic',svgId:'cable-sizing-diagram'}
    },
    advanced:{
      theory:"SKIN EFFECT AND PROXIMITY EFFECT:\nFor cables larger than 95mm², AC resistance exceeds DC resistance due to skin effect. The current concentrates near the conductor surface, reducing effective cross-section.\nAC resistance: Rac = Rdc × (1 + ys + yp)\nys = skin effect factor, yp = proximity effect factor\nCable data sheets provide Rac directly — use these for large cables.\n\nPARALLEL CABLES:\nFor very high currents, multiple smaller cables in parallel are used instead of one very large cable.\nEach cable carries equal current only if: same length, same cross-section, same routing.\nUnequal parallel cables cause unequal current sharing — dangerous.\nCurrent rating: N × individual cable rating × derating for grouping.\n\nHV CABLE SIZING (11kV, 33kV):\nDielectric losses become significant — cable generates heat due to charging current.\nSheath losses add to conductor losses.\nCapacitive charging current must be added to load current.\nScreen/sheath sizing: must carry full earth fault current for fault clearance time.\n\nCORROSION AND MECHANICAL PROTECTION:\nArmour (SWA): steel wire armour provides mechanical protection and earth return path.\nSheath: LSZH (Low Smoke Zero Halogen) for occupied buildings per IS 7098 / IEC 60332.\nIP rating of terminations must match cable environment.",
      formula:{
        IS:'Rac = Rdc × (1 + ys + yp) — IS 3961 provides Rac\nParallel: I_total = N × Iz_single × grouping\nHV charging current: Ic = ω × C × V per km\nAdiabatic for HV: S ≥ (Isc × √t) / k',
        NEC:'Skin effect correction: NEC Chapter 9 Table 9 (AC resistance)\nParallel conductors: NEC 310.10(H)\nHV: NEC Article 310 and IEEE 635',
        IEC:'IEC 60287: Electric cables — calculation of current ratings\nIEC 60364-5-52: Low voltage cable ratings\nIEC 60228: Conductor cross-sections\nIEC 60502: Power cables — design'
      },
      example:{
        sector:'ind',
        given:'HV 11kV cable: 1000A load current, 500m run. 300mm² Cu XLPE. Earth fault level 12kA, relay clears in 1 second.',
        steps:[
          'Screen/sheath must withstand fault: S_screen ≥ 12000 × √1 / 143 = 83.9mm²',
          'Standard screen: 95mm² Cu — adequate',
          'Charging current (XLPE, 11kV): Ic ≈ 2.5A/km → 0.5km = 1.25A — negligible',
          'Skin effect: use Rac from cable data = 0.0754 Ω/km (300mm² Cu XLPE, 90°C)',
          'VD: √3 × 1000 × 0.5 × 0.0754/1000 = 65.3V → VD% = 65.3/11000 × 100 = 0.59% ✓'
        ],
        result:'300mm² Cu XLPE with 95mm² Cu screen adequate for 11kV, 1000A, 500m. Screen can withstand 12kA for 1 second.'
      },
      rot:["For HV cables, always check: (1) conductor size for load, (2) screen size for earth fault, (3) insulation voltage rating matches system voltage (include transient overvoltage factor)."],
      mistakes:["Using DC resistance for large cable VD calculations — skin effect makes AC resistance 3–10% higher for large conductors","Sizing HV cable screen for load current instead of earth fault current — screen only carries fault current, not load current"],
      interviewQs:["Why does skin effect matter for cable sizing?","How do you size the screen of an 11kV cable?","What is LSZH cable and when is it required?"],
      siteTips:["When terminating large cables, measure actual cross-section with a vernier caliper — cable marked '300mm²' from some manufacturers may be undersized. Weight per metre is a more reliable check than visual inspection."],
      diagram:{type:'schematic',svgId:'cable-adv-diagram'}
    },
    sectorNotes:{
      res:'Residential: 1.5mm² lights (5–6A), 2.5mm² power (13–16A), 4mm² split AC (20A), 6mm² main AC (25A). All PVC. VD limit 3% per IS 732.',
      com:'Commercial: 10–150mm² XLPE SWA PVC typical. LSZH sheath for escape routes and public areas (IS 7098). Cable tray grouping derating critical.',
      dc:'Data centre: redundant cable paths (A+B feeds). All cables LSZH. Short runs typical — VD rarely an issue. Short circuit check critical near LV switchboard.',
      ind:'Industrial: full range 4–300mm². SWA mandatory in industrial areas for mechanical protection. XLPE for higher temperature rating. Hazardous area: check ATEX cable requirements.',
      og:'Offshore: all cables LSZH, oil-resistant sheath. Screen earthed at one end for signal cables. Tray fill limits strictly observed — offshore space is premium.',
      hc:'Healthcare: essential circuit cables must be fire resistant (FP/MICC) per NFPA 99 / IEC 60364-7-710. Segregated from non-essential cables.'
    },
    standards:{
      IS:[{clause:'IS 3961',title:'Recommended current ratings for cables',note:'Current rating tables for Cu and Al conductors'},{clause:'IS 694',title:'PVC insulated cables',note:'Construction and testing of LV PVC cables'}],
      NEC:[{clause:'NEC Art. 310',title:'Conductors for general wiring',note:'Ampacity tables and conductor applications'},{clause:'NEC Table 310.15(B)(16)',title:'Allowable ampacity',note:'Primary ampacity table for conductors ≤ 2000V'}],
      IEC:[{clause:'IEC 60364-5-52',title:'Selection and erection — wiring systems',note:'Current carrying capacity and derating factors'},{clause:'IEC 60287',title:'Calculation of current rating',note:'Comprehensive cable rating methodology'}]
    },
    quiz:[]
  },

  {
    id:'voltage-drop', level:2, icon:'📉', title:'Voltage Drop Calculation',
    desc:'Calculating and limiting voltage drop to ensure equipment operates correctly at the end of every circuit.',
    tags:['Voltage Drop', 'Voltage Drop Calculation', 'VD Calc'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:'calcVD',

    beginner:{
      intro:"Voltage drop is invisible on a drawing but very visible on site — motors running slowly, lights flickering, equipment tripping on undervoltage. Every cable run has a voltage drop and every standard sets a limit.",
      whyMatters:[
        { icon:'⚙️', text:'Motors running at 5% undervoltage draw 10% more current — overheating and failure' },
        { icon:'💡', text:'LED drivers brown out at <198V (230V-14%); lamps flicker or fail to start' },
        { icon:'⚡', text:'VD at end of long cable run reduces available voltage for fault clearance — protection may fail to operate' }
      ],
      theory:"VOLTAGE DROP FORMULAE:\n\nSINGLE-PHASE:\nVD = 2 × I × L × (R cosφ + X sinφ) / 1000\nSimplified (if X negligible): VD = 2 × I × L × R / 1000\n\nTHREE-PHASE:\nVD = √3 × I × L × (R cosφ + X sinφ) / 1000\nSimplified: VD = √3 × I × L × R / 1000\n\nwhere: I = current (A), L = length (m), R = resistance (Ω/km), X = reactance (Ω/km)\n\nVD LIMITS:\nIS / IEC: ≤ 3% for lighting circuits, ≤ 5% for power circuits (from origin of installation)\nNEC: recommends ≤ 3% branch circuit, ≤ 5% total (informational note only)\n\nTOTAL VD = VD in feeder + VD in branch. Both together must stay within limit.\n\nREACTANCE: For LV cables up to 16mm², X is negligible. For 25mm² and above, include X from cable data tables.",
      formula:{
        IS:'3-ph: VD(V) = √3 × I × L × R/1000\n1-ph: VD(V) = 2 × I × L × R/1000\nVD% = VD(V)/V × 100\nLimit: 3% lighting, 5% power\nR from IS 3961 tables (Ω/km)',
        NEC:'VD(V) = 2 × R × I × L / 1000 (1-ph, L=one-way)\n= K × I × L / Cmils (using NEC K factor)\nK = 12.9 (Cu, 75°C), 21.2 (Al, 75°C)\nRecommended limit: 3% branch, 5% total',
        IEC:'3-ph: ΔU = √3 × I × L × (r cosφ + x sinφ)/1000\nIEC 60364-5-52: ΔU ≤ 4% from origin\nFor low PF loads, include reactance term\nr and x from IEC cable tables'
      },
      example:{
        sector:'res',
        given:'Single-phase 230V, 20A socket circuit, length=35m, 2.5mm² Cu PVC, R=7.41 Ω/km.',
        steps:[
          'VD = 2 × 20 × 35 × 7.41/1000',
          'VD = 2 × 20 × 35 × 0.00741',
          'VD = 10.374V',
          'VD% = 10.374/230 × 100 = 4.51%',
          'Limit for power: 5% → PASS (just)',
          'If this were a lighting circuit: limit 3% → FAIL',
          'For lighting: recalculate with 1.5mm² at 12.1Ω/km → VD = 16.9V = 7.3% → also fails',
          'Solution: shorten circuit, add sub-distribution board, or use 4mm² for long lighting runs'
        ],
        result:'2.5mm² passes for power circuit (4.51% < 5%). Lighting circuits need 4mm² or shorter run (<20m for 2.5mm²).'
      },
      rot:["Quick check: 1mm² Cu per 100m at 1A = 1.21V drop (1-phase). Scale: 2.5mm² = 0.485V/A/100m. For 20A at 35m: 0.485 × 20 × 0.35 = 3.4V (check: actual = 5.2V — always calculate properly)","VD is proportional to current AND length. Double the length → double the VD. Double the cross-section → halve the VD."],
      mistakes:["Calculating VD in % of phase voltage (230V) instead of system voltage for 3-phase. Correct: use line voltage (415V) for 3-phase VD%.","Forgetting to add feeder VD to branch VD when checking total VD from supply origin","Using resistance values from cable data at 20°C — at operating temperature (70°C for PVC), resistance is ~23% higher"],
      interviewQs:["Why is the voltage drop limit different for lighting versus power circuits?","How does cable temperature affect voltage drop?","Why do you use 2× length for single-phase but √3 for three-phase in the VD formula?"],
      siteTips:["On a long lighting circuit where lights at the far end are dimmer, don't just replace bulbs — measure voltage at the end of the circuit. If it's below 220V on a 230V system, you have excessive VD. Add a sub-distribution point or upsize the cable feeding that section."],
      diagram:{type:'schematic',svgId:'voltage-drop-diagram'}
    },
    advanced:{
      theory:"REACTIVE COMPONENT OF VOLTAGE DROP:\nFor cables above 25mm² and circuits with low PF loads, the reactive component becomes significant:\n\nVD = √3 × I × L × (R cosφ + X sinφ) / 1000\n\nAt PF 0.8: VD with X ≈ 10–15% higher than ignoring X for 70mm² cable.\n\nVOLTAGE PROFILE ALONG A FEEDER:\nFor a feeder serving multiple distributed loads:\nVD at any point = sum of VD in sections between supply and that point.\nDesign so end-of-line voltage > minimum equipment voltage.\n\nMINIMUM STARTING VOLTAGE FOR MOTORS:\nDuring motor starting, current surges to 5–8× FLC.\nVD during starting = √3 × Istart × L × Z/1000\nMust ensure: V at motor terminals > 85% of rated during starting (IS 325, NEC 430).\n\nTOTAL VOLTAGE REGULATION:\nVR = (V_noload - V_fullload) / V_noload × 100%\nAffected by: cable VD + transformer impedance drop + supply voltage variation.\n\nPOWER LOSS IN CABLE:\nP_loss = 3 × I² × R × L / 1000 (3-phase)\nEnergy cost of VD: P_loss × operating hours × tariff\nFor long feeders, compare cost of cable upsize vs energy savings over project life.",
      formula:{
        IS:'VD with X: √3 × I × L × (R cosφ + X sinφ)/1000\nMotor starting VD: √3 × Istart × L × Z/1000\nCable loss: P = 3I²R (3-ph), 2I²R (1-ph)\nEnergy lost: E = P × hours (kWh/year)',
        NEC:'IEEE 1100 (Emerald Book): power quality for sensitive loads\nVD during motor start: must maintain 85% V at terminals\nNEC 430.32: Motor overload protection related to voltage',
        IEC:'IEC 60364-5-52: ΔU calculation including X\nIEC 60034-1: Motor terminal voltage ≥ 95% nominal (running)\nIEC 60034-1: Starting voltage ≥ stated minimum (typically 85%)'
      },
      example:{
        sector:'ind',
        given:'37kW motor, 415V, FLC=69.5A, Istart=486A (DOL). Cable: 16mm² Cu XLPE, 60m. R=1.15Ω/km, X=0.08Ω/km. PF_run=0.85, PF_start=0.30.',
        steps:[
          'Running VD: √3 × 69.5 × 60 × (1.15×0.85 + 0.08×0.527)/1000',
          '= 1.732 × 69.5 × 0.06 × (0.9775 + 0.0422)',
          '= 7.23 × 1.02 = 7.4V → VD% = 1.78% ✓',
          'Starting VD: √3 × 486 × 0.06 × (1.15×0.30 + 0.08×0.954)/1000',
          '= 50.5 × (0.345 + 0.0763) = 50.5 × 0.421 = 21.3V',
          'Terminal voltage during start: 415 - 21.3 = 393.7V → 394/415 = 94.9% of rated',
          '94.9% > 85% minimum ✓ — motor can start'
        ],
        result:'16mm² cable: running VD 1.78% ✓, starting voltage 94.9% ✓. Motor can start without stalling. DOL starting permissible for this cable/motor combination.'
      },
      rot:["Motor starting VD rule: if DOL starting causes >10% VD at the MDB, switch to star-delta or soft starter. Repeated high-VD starts damage other connected equipment."],
      mistakes:["Checking running VD only and ignoring motor starting VD — starting may cause voltage dip that trips other equipment on the same feeder","Not accounting for total VD (source impedance + transformer + feeder cable + branch cable) when checking equipment minimum voltage"],
      interviewQs:["Why is motor starting VD more critical than running VD?","How does cable resistance change between cold (installation) and hot (operating) conditions?","When is it worth upsizing a cable purely for energy cost savings?"],
      siteTips:["If motors trip on undervoltage during startup, measure voltage at the motor terminal during starting. If it drops below 85% rated, the cable is undersized or the supply impedance is too high. Don't increase the motor overload relay setting — fix the root cause."],
      diagram:{type:'schematic',svgId:'vd-adv-diagram'}
    },
    sectorNotes:{
      res:'Residential: 3% lighting (IS 732). Power circuits 5%. Long house circuits (>25m from DB): check VD carefully. Upsize to 4mm² for circuits >20m.',
      com:'Commercial: long feeder runs from main switchroom to floor DBs often consume 2–3% VD. Leaves only 2% for branch circuits. Plan VD budget from design start.',
      dc:'Data centre: short cable runs typical (< 30m in most cases). VD rarely limiting factor. Power quality (harmonics, PF) more critical than VD.',
      ind:'Industrial: motor starting VD is the critical check. Multiple motor starts simultaneously can cause severe voltage dips. Staged starting or soft starters essential.',
      og:'Offshore: long cable runs from switchroom to wellhead. VD can be significant. 5% limit applies but instrument power supplies may have tighter requirements (±2%).',
      hc:'Healthcare: emergency lighting circuits must maintain voltage at end of circuit. Essential circuits often require VD < 3% regardless of circuit type.'
    },
    standards:{
      IS:[{clause:'IS 732 Cl.6',title:'Voltage drop limits',note:'3% lighting, 5% power from origin of installation'},{clause:'IS 3961 Tables',title:'Cable resistance data',note:'DC and AC resistance per km at 20°C and 90°C'}],
      NEC:[{clause:'NEC 210.19(A) Inf.Note 4',title:'Branch circuit conductor sizing',note:'Recommends ≤ 3% VD on branch circuit'},{clause:'NEC 215.2(A)(4)',title:'Feeder conductor sizing',note:'Recommends ≤ 5% total VD from service to last outlet'}],
      IEC:[{clause:'IEC 60364-5-52 Cl.525',title:'Voltage drop',note:'ΔU ≤ 4% from origin of installation'},{clause:'IEC 60038',title:'Standard voltages',note:'Supply voltage tolerance ±10% at consumer terminals'}]
    },
    quiz:[]
  },

  {
    id:'earthing', level:2, icon:'🌍', title:'Earthing & Grounding Systems',
    desc:'TN-S, TT, and IT earthing systems — design, electrode sizing, and protection coordination.',
    tags:['Earthing', 'Grounding', 'Soil Resistivity', 'Earthing & Grounding Systems'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:'calcEarthing',

    beginner:{
      intro:"Earthing is the foundation of electrical safety. A properly designed earthing system ensures that in a fault condition, protective devices operate quickly enough to prevent electric shock. Get it wrong and the system looks safe while being lethal.",
      whyMatters:[
        { icon:'🛡️', text:'Earthing enables fault current to flow — without it, overcurrent protection cannot operate' },
        { icon:'⚡', text:'Improper earthing causes nuisance tripping, equipment failure, and EMC problems' },
        { icon:'🔥', text:'High earth fault resistance causes slow or failed protection — arcing fires result' }
      ],
      theory:"EARTHING SYSTEM TYPES (IEC 60364):\n\nTN-S: Separate neutral (N) and protective earth (PE) conductors throughout. Most common for new installations. Clean separation prevents noise on PE. Recommended.\n\nTN-C: Combined PEN conductor (neutral and earth in one). Old systems. Mechanical damage to PEN is catastrophic — all metalwork goes live. Prohibited in new work per IS 732.\n\nTN-C-S: PEN from source to main distribution board, then split into separate N and PE. Common in India (distributor supplies TN-C, building uses TN-C-S). Equipotential bonding critical at split point.\n\nTT: Separate earth electrode at installation, independent of supply neutral. Common where utility earth quality is unknown. Requires RCD as primary protection (cannot rely on MCB/fuse alone — earth fault current may be too low).\n\nIT: No direct earth connection. First fault causes very low fault current (capacitive only). Second fault is dangerous. Insulation monitoring mandatory. Used in hospitals (IEC 60364-7-710) and hazardous areas.\n\nEARTHING ELECTRODES:\nPipe electrodes: 25mm dia × 3m galvanised steel or copper bonded\nPlate electrodes: 600×600mm copper or galvanised\nStrip electrodes: horizontal buried copper strip\nFoundation earth: rebar in concrete footings",
      formula:{
        IS:'Earth resistance R = ρ/(2πL) × [ln(4L/d) - 1]\nwhere ρ=soil resistivity (Ω·m), L=length (m), d=dia (m)\nIS 3043: general installations ≤ 5Ω\nIS 3043: substations ≤ 1Ω\nLoop impedance: Zs = Ze + R1 + R2',
        NEC:'NEC 250.52: Types of electrodes\nNEC 250.56: Electrode resistance ≤ 25Ω or use 2 electrodes\nNEC 250.66: Grounding electrode conductor sizing\nNEC 250.122: Equipment grounding conductor sizing',
        IEC:'IEC 60364-5-54: Earthing arrangements\nTouch voltage limit: 50V AC (dry), 25V (wet)\nDisconnection time: 0.4s (TN), 1s (TT with RCD)\nLoop impedance test: Zs ≤ Uo/(Ia × 1.5)'
      },
      example:{
        sector:'ind',
        given:'Industrial building: soil ρ = 80 Ω·m. IS 3043 requires ≤ 5Ω. Pipe electrode: L=3m, d=25mm.',
        steps:[
          'R_single = 80/(2π×3) × [ln(4×3/0.025) - 1]',
          '= 80/18.85 × [ln(480) - 1]',
          '= 4.244 × [6.17 - 1]',
          '= 4.244 × 5.17 = 21.9 Ω (single electrode)',
          'Electrodes in parallel (with 0.7 coupling): n × R_parallel = R_single/(n × 0.7)',
          'Need n: R_single/(n × 0.7) ≤ 5 → n ≥ 21.9/(5 × 0.7) = 6.26 → 7 electrodes',
          'Check: 21.9/(7 × 0.7) = 4.47 Ω ≤ 5 Ω ✓'
        ],
        result:'7 pipe electrodes in parallel → ~4.5 Ω. Connect with copper strip and test with earth tester before commissioning.'
      },
      rot:["Rule of thumb: each 3m pipe electrode in normal soil (100 Ω·m) gives ~20–30 Ω. Need ≤ 5Ω? Plan for 5–8 electrodes in parallel minimum.","For soil resistivity > 500 Ω·m (rocky/sandy): chemical treatment of soil around electrodes OR deep-driven electrodes OR foundation earth required."],
      mistakes:["Using only one earth electrode and assuming it meets IS 3043 — single electrode in normal soil is typically 20–30 Ω, far above the 5Ω limit","Not testing earth resistance after installation — calculation is only an estimate; actual soil conditions vary. Always measure with earth tester.","Connecting the neutral and earth together at a remote sub-distribution board in a TN-S system — destroys the TN-S and creates dangerous circulating currents"],
      interviewQs:["What is the difference between TN-S and TT earthing systems?","Why is TN-C prohibited in new installations?","When would you specify an IT earthing system?"],
      siteTips:["Test earth resistance with a 3-point method (fall-of-potential method) using proper earth test equipment — not a multimeter. Stake the test probes at least 10 times the electrode depth apart. Test during dry season for worst-case (highest resistance) reading."],
      diagram:{type:'comparison',svgId:'earthing-systems-diagram'}
    },
    advanced:{
      theory:"TOUCH AND STEP POTENTIAL CALCULATIONS:\nIn substations and during earth faults, dangerous voltage gradients exist in soil.\nTouch potential: V_touch = ρ × Ia × (Cs × ρs + 1/(2π×d) - 1/(2π×D))\nStep potential: V_step = ρ × Ia / (2π) × (1/d1 - 1/d2)\n\nEARTH GRID DESIGN (IEEE 80):\nFor substations >1000kVA, a buried conductor earth grid is installed.\nGrid conductors: horizontal copper strip buried 0.5–1m deep.\nSpacing: typically 3–5m × 3–5m grid.\nCorner rods: driven copper rods at grid corners.\nDesign ensures touch and step potential < safe threshold during earth fault.\n\nSOIL RESISTIVITY MEASUREMENT:\nWenner 4-probe method: ρ = 2π × a × R\nwhere a = probe spacing, R = measured resistance\nMeasure at multiple spacings and depths — soil is not uniform.\nSeasonal variation: dry soil resistivity 3–5× wet season.\n\nINSULATION MONITORING FOR IT SYSTEMS:\nIT earthing: insulation resistance monitored continuously.\nFirst fault: monitor alarm — find and fix before second fault occurs.\nInsulation monitor setpoint: typically 50kΩ alarm, 10kΩ trip.\nPer IEC 60364-7-710 (medical): ≤ 5mA touch current in medical locations.",
      formula:{
        IS:'Touch voltage limit: 50V AC per IS 3043\nEarth grid resistance: R = ρ/4r + ρ/L (circular grid approximation)\nWenner: ρ = 2πaR\nIEEE 80 used for Indian HV substation earth grids',
        NEC:'IEEE 80: Guide for safety in AC substation grounding\nStep voltage limit: Estep = (1000 + 6Cs×ρs) × 0.116/√t\nTouch voltage limit: Etouch = (1000 + 1.5Cs×ρs) × 0.116/√t\nNEMA: step/touch for US substation design',
        IEC:'IEC 61936-1: Power installations > 1kV (touch/step)\nIEC 60364-5-54: LV earthing\nIEC 60364-7-710: Medical locations (IT system)\nInsulation monitor per IEC 61557-8'
      },
      example:{
        sector:'hc',
        given:'Hospital ICU: IT earthing system. Patient area. What earth fault current is permitted? What insulation monitoring level?',
        steps:[
          'IEC 60364-7-710: medical location Group 2 (ICU, OT)',
          'IT system mandatory in Group 2 medical locations',
          'First fault: fault current limited to capacitive current only ≈ 1–5 mA (very low)',
          'Insulation monitor alarm: ≤ 50 kΩ (insulation resistance fallen from MΩ level)',
          'Total touch current from all equipment: ≤ 0.5 mA per IEC 60601-1',
          'Patient applied part leakage: ≤ 0.01 mA (10 μA) for cardiac direct contact equipment',
          'Neutral overcurrent protection: set above capacitive charging current, below 2nd fault level'
        ],
        result:'IT system with insulation monitor required. First fault alarm. Second fault protection. Equipment leakage current < 10 μA for cardiac applications. RCD prohibited in Group 2 medical circuits.'
      },
      rot:["In IT systems, RCDs are NOT used in Group 2 medical locations — they would disconnect on the first fault. The whole point of IT is to maintain supply on first fault."],
      mistakes:["Using a TN-S system in an ICU or operating theatre where IT is mandatory","Setting insulation monitor too sensitive — nuisance alarms cause staff to ignore genuine fault alarms","Connecting generator neutral to earth in an IT system, converting it to TN — destroys IT protection"],
      interviewQs:["Why is an IT earthing system used in hospital operating theatres?","What is touch voltage and how does an earthing system limit it?","Explain the Wenner 4-probe method for measuring soil resistivity."],
      siteTips:["When an insulation monitor alarms in a hospital IT system, use an insulation resistance tester systematically — test each circuit breaker off one at a time until the fault clears. The circuit whose CB trip restores insulation resistance is the faulty circuit. This avoids unnecessary shutdown."],
      diagram:{type:'schematic',svgId:'earthing-adv-diagram'}
    },
    sectorNotes:{
      res:'TN-C-S (PME) common in India (utility supply). Building: separate PE from MDB. All socket circuits require RCD (30mA) per IS 732. Earth electrode at consumer side for TT backup.',
      com:'TN-S throughout. Earth electrode at MDB and at each building if campus. RCD on socket circuits and outdoor circuits. Earth continuity testing on commissioning.',
      dc:'TN-S mandatory. Separate clean earth for IT equipment (signal earth) bonded to safety earth at one point. Earth grid for outdoor plant. UPS bypass: confirm earth continuity.',
      ind:'Earth grid for HV substations (IEEE 80). Multiple electrodes for main earth busbar. Motor frames earthed with separate PE. Equipotential bonding of all metalwork.',
      og:'IT earthing common on offshore platforms — first fault alarm without trip maintains safety system availability. Insulation monitoring mandatory throughout. Bonding of all metalwork for cathodic protection coordination.',
      hc:'Group 2 medical locations: IT mandatory (IEC 60364-7-710). Insulation monitors on every isolated supply circuit. Patient earth (PE) at bedhead panel. Total leakage < 0.5mA.'
    },
    standards:{
      IS:[{clause:'IS 3043',title:'Code of Practice for Earthing',note:'Earth electrode design, system types, resistance limits'},{clause:'IS 732 Cl.8',title:'Earthing requirements for wiring',note:'PE conductor sizing and system requirements'}],
      NEC:[{clause:'NEC Art. 250',title:'Grounding and bonding',note:'Complete US grounding system requirements'},{clause:'NEC 250.56',title:'Resistance of electrode',note:'Electrode resistance ≤ 25Ω or add second electrode'}],
      IEC:[{clause:'IEC 60364-5-54',title:'Earthing arrangements and protective conductors',note:'PE sizing, earthing systems, earthing electrodes'},{clause:'IEC 60364-7-710',title:'Medical locations',note:'IT system requirements for Group 1 and 2 medical areas'}]
    },
    quiz:[]
  },

  {
    id:'circuit-protection', level:2, icon:'🔒', title:'Circuit Protection',
    desc:'MCB, MCCB, fuse selection and coordination — the hierarchy that keeps faults from becoming disasters.',
    tags:['Circuit Protection', 'MCB Selection', 'MCCB', 'Fuse Selection', 'Overcurrent Protection'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,

    beginner:{
      intro:"Protection devices are the immune system of an electrical installation. They must operate for every fault — but only for the fault they're protecting. Too sensitive and equipment trips unnecessarily. Too slow and cables burn.",
      whyMatters:[
        { icon:'🔥', text:'Wrong protection allows cable fires — most electrical fires start with a protection failure' },
        { icon:'⚡', text:'Correct coordination ensures only the faulted circuit is disconnected — not the whole building' },
        { icon:'🛡️', text:'Rated breaking capacity must exceed fault current — otherwise the breaker fails explosively' }
      ],
      theory:"TYPES OF PROTECTION DEVICES:\n\nMCB (Miniature Circuit Breaker): 6A–125A, LV. Two mechanisms:\n— Thermal (bimetallic): slow, protects against overload (sustained overcurrent)\n— Magnetic (solenoid): fast, protects against short circuits\n\nMCB TRIP CHARACTERISTICS (most important):\nType B: trips at 3–5× In. Residential lighting, general sockets.\nType C: trips at 5–10× In. Commercial, motor circuits with moderate inrush.\nType D: trips at 10–20× In. Heavy motor inrush, transformers, welding.\n\nMCCB (Moulded Case CB): 16A–1600A. Higher breaking capacity. Adjustable trip units. MDB feeders, motor starters, sub-main protection.\n\nFUSE: Simpler, cheaper, faster. Requires replacement after operation. Still used for motor protection (back-up) and LV distribution (rewireable fuses now prohibited).\n\nRCD (Residual Current Device): Detects earth fault current imbalance. 10mA, 30mA (personal protection), 100mA, 300mA (fire protection). Must be combined with overcurrent device (RCBO) or MCB.\n\nBREAKING CAPACITY: Maximum fault current the device can safely interrupt. Must exceed prospective fault current at the installation point. Common ratings: 6kA, 10kA, 16kA, 25kA, 36kA.",
      formula:{
        IS:'MCB: I_trip_magnetic = 3–20× In (per type)\nBreaking capacity: Ics ≥ Isc at installation point\nIS 13947: Switchgear and controlgear standards\nCoordination: I_operate_upstream > I_trip_downstream at max fault current',
        NEC:'NEC Art. 240: Overcurrent protection\nAmpere rating: ≤ 125% of conductor ampacity (NEC 240.4)\nMotor: ≤ 250% of FLC (fuse) or 175% (inverse time CB) per NEC 430.52\nSIC rating: must equal or exceed available fault current',
        IEC:'IEC 60898: MCBs for household\nIEC 60947-2: MCCBs and ACBs for industrial\nTrip characteristics: B, C, D per IEC 60898\nCoordination: back-up or series rating per IEC 60947-2 Annex A'
      },
      example:{
        sector:'com',
        given:'Determine MCB type for: (a) office lighting 20A, (b) 5.5kW motor at 415V (FLC=12.2A), (c) 30kW motor (FLC=60.5A).',
        steps:[
          '(a) Lighting: resistive load, no inrush → MCB Type B, 20A. Trips at 3–5×In = 60–100A for faults.',
          '(b) 5.5kW motor FLC=12.2A. Inrush ≈ 7×12.2 = 85A. MCB 16A Type C (trips at 5–10×In = 80–160A). Inrush 85A is within Type C range — motor starts without tripping.',
          '(c) 30kW motor FLC=60.5A. Inrush ≈ 7×60.5 = 424A. Use MCCB with motor protection function or DOL starter with thermal relay + MCCB Type D. MCB Type C at 63A would trip (5×63=315A < 424A inrush).',
          'Breaking capacity check: prospective Isc at panel = 10kA. All devices must have Ics ≥ 10kA.'
        ],
        result:'(a) MCB B/20A, (b) MCB C/16A, (c) MCCB with adjustable magnetic 630A-frame. All must have ≥ 10kA breaking capacity.'
      },
      rot:["Type B = domestic/office (low inrush). Type C = commercial/light motor (moderate inrush). Type D = heavy motors/transformers (high inrush). When in doubt between B and C, use C — it won't nuisance trip on inrush.","Breaking capacity rule: buy the breaker with breaking capacity equal to or above the maximum fault current. Never 'match' breaking capacity to fault current — use the next standard size up."],
      mistakes:["Using Type B MCBs on motor circuits — motor inrush trips the MCB on every start","Installing MCBs with breaking capacity lower than the prospective fault current — catastrophic failure possible during fault","Setting adjustable MCCB trip units without considering coordination with upstream and downstream devices — cascade tripping"],
      interviewQs:["What is the difference between thermal and magnetic trip mechanisms in an MCB?","Why would you choose a Type D MCB over a Type C?","What is breaking capacity and why is it critical?"],
      siteTips:["When an MCB keeps tripping on motor start, first check: is it Type B? If so, replace with Type C. If already Type C and still tripping, measure actual starting current — the motor or its circuit may have a fault, not just high inrush.","Never use a rewireable fuse replacement to bypass a persistent trip — find the fault. Replacing a blown fuse with a higher rating wire is the leading cause of cable fires."],
      diagram:{type:'schematic',svgId:'protection-types-diagram'}
    },
    advanced:{
      theory:"SELECTIVITY (DISCRIMINATION):\nThe ability of upstream protection to remain closed while downstream protection operates.\n\nCURRENT DISCRIMINATION: Set upstream magnetic trip > downstream maximum fault current. Not always achievable at low fault levels.\n\nTIME DISCRIMINATION: Upstream operates at longer time delay than downstream. IDMT (Inverse Definite Minimum Time) relay curves used. Risk: more energy released during delay.\n\nZONE SELECTIVE INTERLOCKING (ZSI): Communicating breakers — if downstream sees fault, it signals upstream to stay closed. Upstream only trips if it alone sees the fault. Reduces arc flash energy.\n\nFUSE-BREAKER COORDINATION:\nFuses clear faster than breakers at high fault currents — used as back-up to MCBs.\nAt low fault currents, the MCB operates before the fuse.\nZone of selectivity defined by time-current curves (TCC).\n\nSERIES RATING (LISTED COMBINATIONS):\nNEC and IEC allow a lower-rated breaker downstream of a higher-rated one if tested as a series-rated combination. Not recommended for general use.\n\nGROUND FAULT PROTECTION (EQUIPMENT LEVEL):\nNEC 230.95: Services ≥ 1000A at 150V to ground or 600V phase-to-phase require ground fault protection at the service level.",
      formula:{
        IS:'Discrimination ratio: I_trip_upstream / I_trip_downstream ≥ 1.6 (current discrim.)\nTime grading: Δt ≥ 0.25–0.4s between TCC curves\nIDMT relay: t = TMS × k / (I/Iset)^α - 1 (per IEC 60255)',
        NEC:'NEC 240.86: Series rating (listed combinations only)\nNEC 230.95: Ground fault protection for solidly grounded systems\nIEEE 242 (Buff Book): Protection coordination for industrial\nTCC grading: minimum 0.2s between relay characteristics',
        IEC:'IEC 60947-2 Annex A: Back-up protection (selectivity tables)\nIEC 60255: Protection relay characteristics\nIDMT standard inverse: t = 0.14 × TMS / ((I/Iset)^0.02 - 1)\nExtremely inverse: t = 80 × TMS / ((I/Iset)^2 - 1)'
      },
      example:{
        sector:'ind',
        given:'Industrial MCC: Source Isc = 25kA. Main MCCB (1000A, Ics=50kA). Feeder MCCB (250A, Ics=36kA). Motor MCB (25A, Ics=10kA). Check coordination.',
        steps:[
          'Breaking capacity: 25kA Isc at all points → All devices ≥ 25kA. Motor MCB Ics=10kA < 25kA ✗',
          'Fix: Either upgrade MCB to 25kA, or add current-limiting fuse upstream to limit let-through current.',
          'Selectivity check at 3kA fault: Main MCCB thermal trip at 1000A → time delay. Feeder MCCB at 250A → trips first. Motor MCB at 25A → trips first of all. ✓ selectivity with current discrimination.',
          'At 25kA fault: all devices in instantaneous zone — selectivity lost (expected — back-up protection acceptable at extreme fault levels).'
        ],
        result:'Upgrade motor MCB to 25kA rating. Current selectivity achieved at moderate fault levels. At 25kA, back-up protection acceptable. Add ZSI to maintain selectivity at high fault currents if required.'
      },
      rot:["Selectivity rule: work from smallest to largest. Each upstream device should have a magnetic trip setting at least 1.5× the full fault current that the device below it can see."],
      mistakes:["Specifying MCBs with insufficient breaking capacity and assuming the upstream MCCB will 'help' — series rating requires specific tested combinations, not guesswork","Ignoring selectivity during design and only discovering cascade tripping during commissioning — fix it on paper, not on site"],
      interviewQs:["What is the difference between current selectivity and time selectivity?","How does Zone Selective Interlocking improve protection?","What is a TCC (Time-Current Curve) and how is it used in protection coordination?"],
      siteTips:["After any major fault clearance on site, inspect the MCB or MCCB that operated. If it shows visible burn marks or the contacts are welded, the breaking capacity was inadequate for the fault current. Replace and investigate why the fault level exceeded the device rating."],
      diagram:{type:'schematic',svgId:'protection-coord-diagram'}
    },
    sectorNotes:{
      res:'MCB Type B standard for all residential circuits. Breaking capacity 6kA typical (IS 8828). RCD 30mA on all socket circuits. RCBO combines both.',
      com:'MCCB for MDB feeders (10–36kA). MCB Type C for general power and Type B for lighting. Breaking capacity 10kA minimum. RCCB 300mA for fire protection at main level.',
      dc:'High fault levels require 36–65kA rated devices at LV switchboard. ZSI standard for data centre switchgear. Electronic trip units with adjustable settings preferred.',
      ind:'Full coordination study required. MCCB with motor protection (thermal + magnetic adjustable). Motor starting: Type D or adjustable magnetic. Industrial MCBs: Ics up to 36kA.',
      og:'SIL-rated protection in safety instrumented systems. Intrinsically safe circuits: special protection per IEC 60079-11 (ia/ib). Breaking capacity in ATEX zones: ensure no sparking.',
      hc:'Essential circuits: selective coordination ensures only faulted circuit trips. Life safety systems must not be disconnected by any single fault. Time-selective coordination mandatory.'
    },
    standards:{
      IS:[{clause:'IS 13947-2',title:'Circuit breakers — MCCB',note:'IS equivalent of IEC 60947-2 for industrial CBs'},{clause:'IS 8828',title:'MCBs for household',note:'IS equivalent of IEC 60898 for domestic MCBs'}],
      NEC:[{clause:'NEC Art. 240',title:'Overcurrent protection',note:'Complete NEC requirements for protection devices'},{clause:'NEC 430.52',title:'Motor branch circuit protection',note:'Motor short circuit protection sizing rules'}],
      IEC:[{clause:'IEC 60898',title:'MCBs for household and similar installations',note:'Type B, C, D characteristics'},{clause:'IEC 60947-2',title:'Circuit breakers for industrial use',note:'MCCBs, ACBs — breaking capacity and coordination'}]
    },
    quiz:[]
  },

  {
    id:'pf-correction', level:2, icon:'📈', title:'Power Factor Correction',
    desc:'Capacitor bank sizing, detuned reactors for harmonics, and APFC panels for automatic correction.',
    tags:['PF Correction', 'Power Factor Correction', 'Capacitor Bank', 'APFC'],
    sectors:['com','ind'], green:false, calculator:'calcPFCorrection',

    beginner:{
      intro:"Power factor correction is one of the highest-return investments in electrical engineering. A capacitor bank costing ₹3–5 lakhs can save ₹6–8 lakhs per year in electricity bills by reducing reactive power charges and improving system efficiency.",
      whyMatters:[
        { icon:'💸', text:'PF penalty charges add 10–25% to the electricity bill — avoidable with correction' },
        { icon:'🔌', text:'Higher PF reduces current — smaller cables, transformers, switchgear for same kW output' },
        { icon:'📊', text:'IE Rules India: PF < 0.90 = financial penalty, PF > 0.97 = incentive payment' }
      ],
      theory:"HOW CAPACITOR BANKS WORK:\nInductive loads (motors, transformers) draw lagging reactive current (kVAr).\nCapacitors supply leading reactive current (kVAr) locally.\nThe supply only sees the net reactive current (lagging - leading).\nResult: lower total kVA, improved power factor, lower supply current.\n\nSIZING CAPACITOR BANK:\nRequired kVAr = P × (tan φ₁ - tan φ₂)\nwhere φ₁ = existing PF angle, φ₂ = target PF angle\n\nFIXED vs AUTOMATIC (APFC):\nFixed: one capacitor bank, always connected. Suitable only if load PF is constant.\nAPFC: multiple steps (e.g. 8 × 50 kVAr), switched automatically based on measured PF.\nSuitable for varying loads. Prevents leading PF during light load.\n\nCAPACITOR BANK CONSTRUCTION:\nLV capacitors: dry type, self-healing metallised polypropylene.\nContactor-switched steps in APFC panels.\nProtected by fuses and MCBs.\nDischarge resistors mandatory — bleed charge when disconnected.",
      formula:{
        IS:'Qc (kVAr) = P (kW) × (tan φ₁ - tan φ₂)\ntan φ = √(1-PF²)/PF\nNew kVA = P / PF_target\nOld kVA = P / PF_old\nkVA saving = Old kVA - New kVA\nIS 13585: Shunt capacitors',
        NEC:'Q_c = P × (tan θ₁ - tan θ₂)\nAlternatively from kVAr tables\nIEEE 18: Shunt power capacitors\nNEC 460: Capacitors installation requirements',
        IEC:'Q_c = P × (tan φ₁ - tan φ₂)\nIEC 60831: Shunt power capacitors LV\nReactive power compensation per IEC 60364-8-1\nCapacitor discharge: ≤ 75V in ≤ 3 minutes (IEC 60831)'
      },
      example:{
        sector:'ind',
        given:'Factory: 600 kW, existing PF = 0.72, target PF = 0.95. IE Rules penalty if PF < 0.90. Calculate required capacitor bank.',
        steps:[
          'tan φ₁ (PF=0.72): φ₁ = arccos(0.72) = 43.95° → tan(43.95°) = 0.9638',
          'tan φ₂ (PF=0.95): φ₂ = arccos(0.95) = 18.19° → tan(18.19°) = 0.3287',
          'Qc = 600 × (0.9638 - 0.3287) = 600 × 0.6351 = 381 kVAr',
          'Select: 400 kVAr APFC panel (8 steps × 50 kVAr)',
          'kVA before: 600/0.72 = 833 kVA → kVA after: 600/0.95 = 632 kVA',
          'MD saving: 201 kVA × ₹350/kVA/month = ₹70,350/month',
          'PF penalty eliminated: assume 10% of bill ≈ ₹50,000/month saving'
        ],
        result:'400 kVAr APFC panel. Monthly saving ≈ ₹1.2 lakhs. Annual saving ≈ ₹14.4 lakhs. Equipment cost ≈ ₹6 lakhs. Payback: ~5 months.'
      },
      rot:["Approximate kVAr needed: multiply kW by 0.5 to go from PF 0.75 to 0.95, or by 0.3 to go from PF 0.85 to 0.95. Then round up to nearest standard APFC step.","Never connect a fixed capacitor bank and walk away — if the load is removed (night shift off), the capacitor causes leading PF and overvoltage. Always use APFC for variable loads."],
      mistakes:["Installing fixed capacitor banks on variable loads — causes leading PF at light load, triggering generator/transformer instability","Not installing fuses on each capacitor step — a failed capacitor without protection causes an arc that damages the whole panel","Ignoring harmonics when specifying capacitors — plain capacitors on harmonic-rich systems resonate and fail quickly"],
      interviewQs:["What is the difference between a fixed capacitor bank and an APFC panel?","Why might over-correcting power factor (leading PF) be harmful?","How does a capacitor supply reactive power to a motor?"],
      siteTips:["Before commissioning a new APFC panel, verify the discharge resistors are in place. Disconnecting a capacitor step without discharge leaves 325V DC on the capacitor terminals — lethal to the next person who touches the contactor.","Measure actual power factor at the main incomer during different times of day — morning, lunch, evening, night. APFC controller settings should match the load variation pattern."],
      diagram:{type:'schematic',svgId:'pf-correction-diagram'}
    },
    advanced:{
      theory:"DETUNED CAPACITOR BANKS:\nPlain capacitors on systems with harmonic-producing loads (VFDs, rectifiers) can cause resonance.\nResonant frequency: fr = f × √(Ssc/Qc)\nwhere Ssc = short circuit power at bus, Qc = capacitor kVAr\n\nIf resonant frequency coincides with a harmonic frequency (5th=250Hz, 7th=350Hz): current amplification → capacitor failure.\n\nDetuning factor p: p = (fr/f₁)² = XC/(XC-XL)\nCommon detuning: 14% (p=0.86, fr≈134Hz — below 5th harmonic 250Hz)\n7% (p=0.93, fr≈190Hz — also below 5th harmonic but less series impedance)\n\nSERIES REACTOR: Connected in series with each capacitor step.\nXL = p × XC\nReactor absorbs harmonic energy instead of capacitor → capacitor protected.\n\nACTIVE POWER FILTERS (APF):\nInject equal and opposite harmonic currents to cancel harmonics.\nCompensate reactive power simultaneously.\nMore expensive but handles any harmonic level.\nPreferable where THD > 30% or for sensitive loads.",
      formula:{
        IS:'Detuning: fr = f₁ / √(1-p)\n7% detuning (p=0.07): fr = 50/√0.93 = 51.9Hz... wait:\nActual: p = (XL/XC) → fr = f₁ × √(p) where p=XL/XC\n7% reactor: XL = 0.07XC → fr = f₁/√(1-0.07) = 50/√0.93 ≈ 188Hz',
        NEC:'IEEE 519: Harmonic limits at PCC\nTHD_I ≤ 5% for small consumers\nResonant frequency: fr = f1 × √(MVASC/MVARcap)\nC-type filter design per IEEE 1531',
        IEC:'IEC 61000-3-2: Equipment harmonic emission\nIEC 61000-4-7: Harmonic measurement\nDetuning reactor per IEC 60289\nAPF per IEC 62310'
      },
      example:{
        sector:'ind',
        given:'Factory: 500 kW load, 35% VFDs (high harmonics). Short circuit level at bus = 20 MVA. Planned capacitor: 300 kVAr. Check resonance risk.',
        steps:[
          'Resonant frequency: fr = 50 × √(20,000 kVA / 300 kVAr) = 50 × √66.7 = 50 × 8.16 = 408 Hz',
          '408 Hz is between 7th harmonic (350 Hz) and 9th harmonic (450 Hz)',
          'No exact resonance with main harmonics (5th=250, 7th=350, 11th=550 Hz)',
          'However, with 35% VFDs, significant 5th and 7th harmonic currents present',
          '7th harmonic at 350 Hz — fr at 408 Hz → amplification factor ≈ 1/(1 - (350/408)²) = 1/(1-0.735) = 3.77×',
          '3.77× amplification of 7th harmonic current through capacitor → risk of capacitor failure',
          'Specify 7% detuned capacitors: fr = 188 Hz — safely below 5th harmonic (250 Hz) ✓'
        ],
        result:'Plain capacitors will experience ~3.8× amplified 7th harmonic current → failure risk. Specify 7% detuned capacitor bank (series reactor). Alternative: 14% detuning for extra margin.'
      },
      rot:["If the system has any VFDs, welders, or rectifiers: always specify detuned capacitors. The cost difference is modest (~15–20%) and the protection is essential."],
      mistakes:["Calculating resonant frequency and assuming it's 'between harmonics' so safe — amplification begins well before resonant frequency, not just exactly at it","Specifying active power filters when simple detuned capacitors would suffice — APF costs 3–4× more and adds maintenance complexity"],
      interviewQs:["What is a detuning reactor and how does it prevent resonance?","Calculate the resonant frequency of a 500 kVAr capacitor bank on a 50 MVA short circuit bus.","When would you specify an active power filter instead of a passive filter?"],
      siteTips:["If your capacitor bank keeps blowing fuses or tripping its internal MCBs, measure harmonic current at the capacitor terminals before ordering a replacement. If 5th or 7th harmonic current is greater than 20% of fundamental, you need detuned capacitors."],
      diagram:{type:'schematic',svgId:'pf-detuned-diagram'}
    },
    sectorNotes:{
      res:'Not applicable for individual residences. Residential complexes with large HVAC may need PF correction at LV MDB.',
      com:'Essential. IE Rules: PF ≥ 0.90 mandatory for demand > 100 kVA. APFC panels 100–1000 kVAr typical. Install at or near main LV incomer.',
      dc:'PF correction mostly handled by UPS (unity PF input on modern UPS). Some capacitor correction on chiller and cooling tower circuits. Harmonics from UPS rectifiers need detuning.',
      ind:'Most critical sector. APFC 200–2000 kVAr. VFDs everywhere → detuned capacitors mandatory. MCC-level correction preferred to avoid leading PF at light loads.',
      og:'Offshore: generator reactive power capability (typically 0.8 PF). Capacitors used to reduce generator loading. Detuned mandatory due to VFDs on pumps/compressors.',
      hc:'PF correction at LT main board. Medical imaging equipment (MRI: 1 MVA demand spikes) needs dedicated reactive compensation. Cannot allow PF penalty to affect utility supply reliability.'
    },
    standards:{
      IS:[{clause:'IS 13585',title:'Shunt capacitors for power systems',note:'LV capacitor bank design and selection'},{clause:'IE Rules Rule 47A',title:'Power factor obligation',note:'PF ≥ 0.90 legal requirement in India'}],
      NEC:[{clause:'NEC Art. 460',title:'Capacitors',note:'Installation and discharge requirements for capacitors'},{clause:'IEEE 18',title:'Standard for shunt power capacitors',note:'Design, testing, and application of power capacitors'}],
      IEC:[{clause:'IEC 60831',title:'Shunt power capacitors — Part 1',note:'General and performance — LV capacitor requirements'},{clause:'IEC 61000-3-2',title:'Harmonic current emission limits',note:'Limits to prevent harmonic resonance with capacitors'}]
    },
    quiz:[]
  },

  {
    id:'panel-schedule', level:2, icon:'🗂️', title:'Panel Schedule & Load Distribution',
    desc:'How to prepare a distribution board schedule, balance phases, and document every circuit.',
    tags:['Panel Schedule', 'Distribution Board', 'Phase Balancing', 'DB Schedule'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,

    beginner:{
      intro:"A panel schedule is the complete documentation of what every breaker in a distribution board protects. Without it, maintenance is guesswork and modifications are dangerous. Good panel schedules prevent electrical accidents.",
      whyMatters:[
        { icon:'📋', text:'Panel schedules are mandatory documents for permits, inspections, and handover' },
        { icon:'⚖️', text:'Phase imbalance >10% causes neutral overloading and transformer losses' },
        { icon:'🔧', text:'Future modifications without a panel schedule risk overloading circuits unknowingly' }
      ],
      theory:"WHAT A PANEL SCHEDULE CONTAINS:\nFor each circuit in the DB:\n— Circuit number\n— Description (what it feeds)\n— Phase (R, Y, B for 3-phase DB)\n— Breaker rating and type (MCB B/C/D, MCCB)\n— Pole count (1P, 2P, 3P)\n— Load (kW, kVA, or amps)\n— Cable size (mm²)\n— Cable length (m)\n— Voltage drop (%)\n— Remarks (future, spare, interlock, etc.)\n\nPHASE BALANCING:\nIn a 3-phase DB, single-phase circuits are distributed across R, Y, B phases.\nTarget: phase currents within 10% of each other.\nNeutral carries unbalanced current.\nCommon pattern: lighting on Phase R, power on Phase Y, AC on Phase B.\n\nSPARE CAPACITY:\nBest practice: leave 20–25% of breaker ways spare for future circuits.\nAlso: breaker rating × 0.8 = maximum connected load (loading factor).\n\nDB TOTAL LOAD:\nSum all circuit loads, apply demand factor, convert to kVA.\nMDB circuit breaker for this DB = calculated kVA / (√3 × 0.415) = Amps.",
      formula:{
        IS:'Phase current: IR = Σ(single-phase loads on R) / 230 + Σ(3-phase loads)/√3\nImbalance% = (Imax - Imin)/Iavg × 100 (target < 10%)\nNeutral current IN = phasor sum of IR + IY + IB\nDB MCB: I ≥ Σ(circuit loads × DF) / (√3 × 415)',
        NEC:'NEC 408.3: Panelboard load calculations\nNEC 220.82: Dwelling unit load per sq ft\nPhase balance: NEC 408.3(F) balance within 10%\nPanelboard marking: NEC 408.4 — every circuit labeled',
        IEC:'Load schedule per IEC 60364-1\nPhase balance recommended < 10% imbalance\nDB sizing: IEC 60439 (now IEC 61439)\nSub-distribution boards: each circuit documented'
      },
      example:{
        sector:'com',
        given:'Office DB: 20 circuits. Phase R loads: 8kW. Phase Y: 6.5kW. Phase B: 9kW. Total connected = 23.5kW. DF = 0.75. PF = 0.85.',
        steps:[
          'Phase currents: IR = 8000/230 = 34.8A, IY = 6500/230 = 28.3A, IB = 9000/230 = 39.1A',
          'Average: (34.8+28.3+39.1)/3 = 34.1A',
          'Imbalance: (39.1-28.3)/34.1 = 31.7% → EXCEEDS 10% limit',
          'Rebalance: shift 1.25kW circuit from Phase B to Phase Y',
          'New: IR=8kW(34.8A), IY=7.75kW(33.7A), IB=7.75kW(33.7A) → Imbalance: 3.3% ✓',
          'MD (kW) = 23.5 × 0.75 = 17.6 kW → MD (kVA) = 17.6/0.85 = 20.7 kVA',
          'DB incomer MCB = 20.7×1000/(√3×415) = 28.8A → Select 32A MCB'
        ],
        result:'Rebalance loads to achieve <10% phase imbalance. DB incomer: 32A 3-pole MCB. Label every circuit on panel schedule before handover.'
      },
      rot:["Phase balance rule: when adding a circuit, put it on the least-loaded phase. Check the running total after every addition — imbalance creeps up if you always add to the same phase.","Always label circuits with their actual location/function on the breaker, not just 'Circuit 1, 2, 3'. A label like 'Level 3 East Wing Lighting' saves hours of fault finding."],
      mistakes:["Connecting all AC units to one phase — creates massive phase imbalance and overloads neutral","Leaving the panel schedule unfilled during construction and planning to 'fill it in later' — it rarely gets completed and creates a safety gap","Sizing the DB incomer based on connected load without applying demand factor — DB incomer ends up massively oversized"],
      interviewQs:["How do you balance loads across three phases in a distribution board?","What information must appear on every circuit in a panel schedule?","How do you determine the rating of the main MCB feeding a distribution board?"],
      siteTips:["During commissioning, measure and record the actual current on each phase of every DB with a clamp meter. Compare with the panel schedule. Discrepancies reveal undocumented loads or connection errors — both are safety hazards."],
      diagram:{type:'schematic',svgId:'panel-schedule-diagram'}
    },
    advanced:{
      theory:"HARMONIC LOADING AND NEUTRAL OVERCURRENT:\nIn offices with computers, servers, and LED drivers, the 3rd harmonic (150 Hz) content is high.\n3rd harmonics are zero sequence — they add in the neutral rather than cancelling.\nNeutral current can equal or exceed phase current.\n\nFor high harmonic environments:\n— Use 4-core cables where neutral = 100% of phase conductor (not reduced neutral).\n— DB neutral busbar must carry full neutral current.\n— MCBs or switches on neutral must be 4-pole (switching neutral simultaneously with phase).\n\nMULTI-TIER DISTRIBUTION:\nHV Substation → LV MDB → SMDB → Floor DB → Circuit\nAt each level: panel schedule + load schedule required.\n\nALT: TAP-OFF UNITS ON BUSDUCT:\nInstead of cables from MDB to SMDB, a busduct with tap-off units is used in large buildings.\nTap-off rating = SMDB incomer MCB rating.\nBusduct ampacity must exceed sum of all tap-off loads × diversity.\n\nENERGY METERING AT DB LEVEL:\nSub-metering at each DB allows energy consumption per floor/department.\nRequired for LEED/ECBC green building certification.\nAMR (Automatic Meter Reading) systems read sub-meters remotely.",
      formula:{
        IS:'Neutral IN = √(IR² + IY² + IB² - IR×IY - IY×IB - IR×IB) (balanced)\nFor high harmonic loads: IN may equal or exceed max phase current\nHarmonic neutral current: IN_3rd = 3 × I3rd (all 3 add in neutral)',
        NEC:'NEC 210.11(C): Balanced loads on multi-wire branch circuits\nNEC 310.4: 4-wire systems — neutral conductor\nNEC 220.61: Feeder neutral load calculation (reduced neutral rules)',
        IEC:'IEC 60364-5-52: Neutral conductor sizing — may need full size for harmonic loads\nIEC 61439: Low-voltage switchgear and controlgear assemblies\nFour-pole devices when neutral switching required'
      },
      example:{
        sector:'dc',
        given:'Server room DB: 60A per phase of 415V 3-phase. All server loads. Expected 3rd harmonic = 40% of fundamental. Size neutral conductor.',
        steps:[
          'Phase current: 60A per phase (balanced)',
          '3rd harmonic current per phase: 40% × 60 = 24A',
          'Neutral current from 3rd harmonics: 3 × 24 = 72A (adds, not cancels)',
          'Neutral also carries unbalanced fundamental current — assume 5A unbalanced',
          'Total neutral ≈ 72 + 5 = 77A (conservative addition)',
          'Phase cables: 25mm² Cu XLPE (Iz≈87A derated)',
          'Neutral must be: ≥ 77A → also 25mm² Cu XLPE (same as phase, not reduced)'
        ],
        result:'Neutral conductor must be same size as phase conductors (25mm²) — not reduced. Use 4-core cable or add dedicated neutral cable. 4-pole MCB for switching.'
      },
      rot:["For IT/server rooms: always specify full-size neutral conductors, not the reduced neutral (50%) that general installation practice allows. Standard reduced neutral is dangerous with harmonic loads."],
      mistakes:["Using 3-core cables (no neutral) for what appears to be 3-phase-only loads in server rooms — servers often internally use single-phase with common neutral","Applying 50% reduced neutral sizing rule from general wiring standards to data centre or computer-heavy office circuits"],
      interviewQs:["Why does a circuit with high 3rd harmonic content require a full-size neutral conductor?","What is busduct and when is it preferred over cables from MDB to SMDB?","How does sub-metering support green building certification?"],
      siteTips:["If neutral cables in a server room or office DB feel warm to touch, measure neutral current with a clamp meter. Neutral temperature should be similar to phase cables. Hot neutral = harmonic overloading. Upsize neutral or add detuned capacitors to reduce harmonics."],
      diagram:{type:'schematic',svgId:'panel-harmonic-diagram'}
    },
    sectorNotes:{
      res:'Residential DB: typically 6–16 ways, single-phase or 3-phase MDB. Mandatory labelling per IS 732. RCBOs for wet area circuits.',
      com:'Commercial: 3-phase DBs with 24–64 ways. Phase balancing critical. Sub-meters at each DB for energy management. Panel schedule mandatory for handover.',
      dc:'Data centre PDU (Power Distribution Unit) is the equivalent of a DB. Each PDU documented with circuit list. Outlet numbering and IT equipment assignment logged in DCIM system.',
      ind:'Industrial MCC (Motor Control Centre) panel schedule includes: motor details, starter type, cable sizes, overload relay settings. Essential for maintenance.',
      og:'Hazardous area panel schedules include Ex rating of all components. Zone classification on each circuit. Sealed entry glands specified per IS/IEC.',
      hc:'Hospital DB schedules: essential vs non-essential clearly marked. Life safety circuits highlighted. Testing frequency and test records maintained.'
    },
    standards:{
      IS:[{clause:'IS 732 Cl.7',title:'Distribution boards',note:'DB construction, labelling, and documentation requirements'},{clause:'NBC 2016 Part 8',title:'Load scheduling',note:'Panel schedule requirements for building permits'}],
      NEC:[{clause:'NEC 408.3',title:'Panelboard construction',note:'Balance requirement and circuit identification'},{clause:'NEC 408.4',title:'Circuit directory',note:'Mandatory circuit identification for every panelboard'}],
      IEC:[{clause:'IEC 61439-3',title:'Distribution boards for use by ordinary persons',note:'Design requirements for distribution boards'},{clause:'IEC 60364-1',title:'Assessment of general characteristics',note:'Load schedule as part of design documentation'}]
    },
    quiz:[]
  },

  {
    id:'demand-factor-tables', level:2, icon:'📈', title:'Demand Factor Tables',
    desc:'Real demand factor data by space type — the reference tables every designer needs at hand.',
    tags:['Demand Factor Tables', 'Demand Factor', 'Load Density'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,

    beginner:{
      intro:"Demand factors are not guesses — they come from years of measured data across building types. Using the right demand factor for each space type makes the difference between an oversized system wasting money and an undersized one causing problems.",
      whyMatters:[
        { icon:'📊', text:'Wrong demand factor = wrongly sized transformer, generator, and cables' },
        { icon:'💰', text:'Overly conservative demand factors waste 15–30% of equipment capital cost' },
        { icon:'📋', text:'Standard demand factors provide defensible, auditable design basis' }
      ],
      theory:"DEMAND FACTORS BY LOAD TYPE (IS/NBC 2016 reference):\n\nLIGHTING:\nAll circuit types: DF = 1.0 (assume all lights may be on simultaneously)\nException: warehouse lighting where only part of warehouse is lit: DF = 0.7\n\nGENERAL POWER SOCKETS:\nOffice power sockets: DF = 0.4–0.5\nRetail power points: DF = 0.6\nKitchen equipment (commercial): DF = 0.65\nHospital general power: DF = 0.5\n\nAIR CONDITIONING:\nSplit units in residential: DF = 0.5–0.6 (not all rooms simultaneously)\nCentral HVAC chiller: DF = 0.85 (accounts for part-load operation)\nVRV/VRF systems: DF = 0.75\n\nMOTORS (group of >5):\nPumps, fans (HVAC service): DF = 0.75\nIndustrial production motors: DF = 0.7–0.8\nSingle large motor: DF = 1.0 (must be capable of running alone)\n\nDATA/IT EQUIPMENT:\nServer loads in data centre: DF = 0.9–1.0\nOffice computers: DF = 0.7–0.8\nTelecoms equipment: DF = 0.8–0.9",
      formula:{
        IS:'MD = Σ(P_i × DF_i) for each load type\nNBC 2016 Part 8: Space-type load densities\nTable: W/m² planning allowances by occupancy\nIE Rules: MD = highest demand recorded in billing period',
        NEC:'NEC Table 220.44: Receptacle loads in offices\nNEC 220.42: Lighting demand factors by occupancy\nNEC 230.79: Service disconnecting means sizing',
        IEC:'IEC 60364-1 Annex B: Simultaneity factors\nks = simultaneity factor (equivalent to DF)\nks for distribution boards: 0.5–0.9 depending on type'
      },
      example:{
        sector:'com',
        given:'5-storey commercial office building, 1000m² per floor. Calculate MD using standard demand factors.',
        steps:[
          'Lighting: 1000 × 12 W/m² × 5 floors = 60 kW → DF=1.0 → 60 kW',
          'Power sockets: 1000 × 25 W/m² × 5 = 125 kW → DF=0.45 → 56.3 kW',
          'AC: 1000 × 120 W/m² × 5 = 600 kW → DF=0.75 → 450 kW',
          'Lifts: 4 × 15 kW = 60 kW → DF=0.5 (not all run simultaneously) → 30 kW',
          'Total MD (kW): 60 + 56.3 + 450 + 30 = 596.3 kW',
          'MD (kVA) at PF 0.87: 596.3/0.87 = 685.4 kVA',
          'Transformer: 685 kVA → select 2 × 500 kVA (N+1 or parallel)'
        ],
        result:'MD = 685 kVA. Select 2 × 500 kVA transformers for N+1 redundancy or 1 × 800 kVA if no redundancy required.'
      },
      rot:["For quick transformer sizing of commercial offices: allow 60–70 VA/m² for early-stage budgeting. For 5000m² office: 5000 × 65 = 325 kVA → select 400 kVA transformer.","Data centre rule: assume DF = 1.0 always. Every server may run simultaneously. Design for the nameplate sum of all IT loads plus 40–50% for cooling overhead."],
      mistakes:["Using residential demand factors for commercial buildings — commercial occupancy has much higher diversity of loads running simultaneously","Applying NEC demand factors to IS/Indian designs without adjustment — tariff structures and usage patterns differ"],
      interviewQs:["Why is the demand factor for lighting usually 1.0 but for power sockets only 0.4–0.5?","How would you determine the demand factor for a new type of building with no historical data?","What is the difference between demand factor and simultaneity factor?"],
      siteTips:["For a building extension or fitout to an existing building, install a temporary clamp meter on the incomer for 2 weeks and record 15-minute interval data. The peak reading divided by the installed connected load is the actual demand factor — far more accurate than any table."],
      diagram:{type:'schematic',svgId:'demand-factor-diagram'}
    },
    advanced:{
      theory:"LOAD RESEARCH AND MEASUREMENT:\nFor new building types, demand factors must be determined by measurement studies.\nProcess:\n1. Survey all installed equipment (connected load)\n2. Monitor actual power consumption at 15-minute intervals\n3. Identify peak demand period\n4. DF = peak MD / total connected load\n\nILLUMINATION LOAD MEASUREMENT:\nActual lighting power density (W/m²) measured on occupied vs unoccupied floors.\nOccupancy sensors reduce effective lighting demand factor to 0.6–0.8.\n\nHARMONIC DEMAND FACTORS:\nFor harmonic-producing loads, the kVA demand may be higher than kW demand suggests.\nTrue apparent power includes harmonic content:\nS_total = √(P² + Q² + D²) where D = distortion power\nApparent power demand factor ≥ kW demand factor when harmonics present.\n\nBUILDING SIMULATION:\nEnergy simulation software (EnergyPlus, eQUEST, IES VE) models hourly load profiles.\nOutputs maximum demand hour by hour.\nMore accurate than factor-based methods for complex buildings.",
      formula:{
        IS:'Actual DF = Peak MD (measured kW) / Connected load (kW)\nS_total = √(P² + Q² + D²)\nTHD contribution: D = P × THD (approximation)\nEnergy consumption = MD × operating hours × load factor',
        NEC:'IEEE 1100: Power quality factors for sensitive loads\nBuilding simulation: DOE-2, EnergyPlus accepted by ASHRAE\nActual demand: NEC 220.87 existing installations',
        IEC:'IEC 62040-3: UPS testing including demand measurement\nISO 52000: Energy performance of buildings\nMeasured demands per IEC 61557-12'
      },
      example:{
        sector:'dc',
        given:'Colocation data centre: 1000 racks, average 6 kW/rack. Some racks empty, some at 10 kW. DF for IT load.',
        steps:[
          'Connected IT load: 1000 × 6 kW (average nameplate) = 6000 kW',
          'Reality: 300 racks empty (0), 600 at 6 kW, 100 at 9 kW',
          'Actual IT power: (600×6) + (100×9) = 3600 + 900 = 4500 kW',
          'Current DF: 4500/6000 = 0.75',
          'Future: all racks filled to 10 kW → 10,000 kW — design for this',
          'Design DF = 10,000/6000 = 1.67 → connected load is NOT the design basis',
          'Design basis: design kW load, not connected kW × DF'
        ],
        result:'For data centres: design for future IT load (kW/rack × racks), not nameplate × DF. Future IT load = 10,000 kW. Infrastructure sized for this regardless of current occupancy.'
      },
      rot:["For phased data centres: design infrastructure for the ultimate load, but procure equipment in phases. A 10 MW data centre designed and built in 2 MW phases avoids stranded capital."],
      mistakes:["Using current occupancy as the basis for data centre infrastructure — racks fill faster than expected and the infrastructure becomes the constraint","Applying building-type demand factors to a specific building without checking actual usage pattern — a 24-hour call centre has higher DF than a 9-to-5 office in the same building type"],
      interviewQs:["How would you determine the appropriate demand factor for a new building type with no published data?","Why is the demand factor for a data centre effectively 1.0 for planning purposes?","What is load factor and how does it differ from demand factor?"],
      siteTips:["Always include a 'load schedule update' as part of the project handover documents — list all installed equipment with kW ratings. This allows the next engineer to recalculate demand factors accurately rather than estimating."],
      diagram:{type:'schematic',svgId:'demand-factor-table-diagram'}
    },
    sectorNotes:{
      res:'Standard residential DFs: lighting 1.0, sockets 0.4, AC 0.5–0.6, water heater 1.0 (thermostat cycles), EV charger 1.0 (when charging).',
      com:'NBC 2016 Part 8 provides space-type allowances. Use for planning. Always do detailed calculation for design. HVAC dominates — get accurate tonnage from MEP engineer.',
      dc:'DF ≈ 1.0 for all IT equipment. Plan for full rack load. Cooling and power overhead: PUE target 1.3–1.4. Design for 100% future growth.',
      ind:'Motor-dominated. Large motors: DF=1.0. Groups of small motors: DF=0.7. Production line: analyse actual production schedule for accurate DF.',
      og:'Safety-critical loads: DF=1.0 (always). Process loads vary by production rate. Utilities (HVAC, water): DF=0.85. Instrumentation: DF=1.0.',
      hc:'Essential loads: DF=1.0 (life safety — always available). Non-essential loads follow NBC/ASHRAE demand factors. Medical imaging: peak demand during diagnostic procedures.'
    },
    standards:{
      IS:[{clause:'NBC 2016 Part 8 Annex A',title:'Load density tables by occupancy',note:'W/m² planning allowances for different building types'},{clause:'IS 732 Table 1',title:'Current demand factors',note:'Demand factors for different circuit types'}],
      NEC:[{clause:'NEC Art. 220',title:'Load calculations with demand factors',note:'Tabulated demand factors for various occupancies'},{clause:'NEC Table 220.44',title:'Receptacle loads in offices',note:'VA per receptacle and demand factors for offices'}],
      IEC:[{clause:'IEC 60364-1 Annex B',title:'Simultaneity factors',note:'Guidance on demand/simultaneity factors for LV systems'},{clause:'ISO 52000-1',title:'Energy performance of buildings',note:'Building energy demand calculation framework'}]
    },
    quiz:[]
  },

  {
    id:'diversity-load-profile', level:2, icon:'📉', title:'Diversity vs Load Profile',
    desc:'How load actually varies in real buildings — diversity factors and load profiles explained visually.',
    tags:['Diversity & Load Profile', 'Load Profile', 'Diversity Factor'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,

    beginner:{
      intro:"Real buildings don't run at maximum load all day. The pattern of how load changes through the day — the load profile — is what separates a well-designed system from an oversized one. Understanding diversity is understanding reality.",
      whyMatters:[
        { icon:'📊', text:'Load profiles reveal the true peak — often 30–40% lower than the sum of individual peaks' },
        { icon:'💰', text:'Diversity between floors and zones allows smaller transformers and feeders' },
        { icon:'⏰', text:'Time-of-day diversity is why a single transformer can serve multiple buildings economically' }
      ],
      theory:"LOAD PROFILE: A graph of power (kW or kVA) vs time of day. Typically recorded at 15 or 30-minute intervals over 24 hours.\n\nTYPICAL COMMERCIAL BUILDING PROFILE:\n06:00 – 08:00: Ramp up (early arrivals, HVAC pre-cooling)\n09:00 – 11:00: Morning peak (full occupancy, all equipment on)\n12:00 – 13:00: Lunch dip (some areas empty)\n14:00 – 16:00: Afternoon peak (similar to morning)\n17:00 – 19:00: Ramp down (occupants leaving, HVAC reducing)\n22:00 – 06:00: Base load (security, servers, HVAC standby)\n\nDIVERSITY FACTOR vs DEMAND FACTOR:\nDemand factor applies to a single load or load category.\nDiversity factor applies when combining multiple maximum demands:\nDiversity = Sum of individual MDs / Simultaneous MD\nAlways ≥ 1.0 (peaks don't all coincide)\n\nPOPULATION DIVERSITY:\nEach floor of a building peaks at slightly different times.\nA building with 10 floors has more diversity than 1 floor.\nUtility diversity: 1000 customers peak at different times than 10 customers.",
      formula:{
        IS:'Diversity factor = Σ(individual MD) / Simultaneous MD\nSimultaneous MD = Σ(individual MD) / Diversity factor\nLoad factor = Average load / Peak load (over a period)\nUtilisation factor = Maximum demand / Installed capacity',
        NEC:'NEC 220: Demand factors implicitly incorporate diversity\nIEEE 141 Ch.2: Load characteristics\nLoad factor = kWh / (Peak kW × 8760 hours)',
        IEC:'IEC 60364-1: Simultaneity factor ks (= 1/diversity factor)\nks × Σ(Pi) = design load\nTypical ks: 0.5–0.9 for building distribution'
      },
      example:{
        sector:'com',
        given:'Office campus: 3 buildings, each with peak MD of 500 kVA but peaks occur at different times (Building 1: 10am, Building 2: 2pm, Building 3: 4pm). What transformer rating is needed?',
        steps:[
          'Sum of individual peaks: 3 × 500 = 1500 kVA',
          'If simultaneous (no diversity): need 1500 kVA transformer',
          'Actual measured simultaneous peak: 800 kVA (peaks stagger across day)',
          'Diversity factor: 1500/800 = 1.875',
          'Required transformer: 800 kVA + 20% growth = 960 kVA → select 1000 kVA',
          'Without diversity analysis: would have specified 1600–2000 kVA → 60–100% oversized'
        ],
        result:'Diversity reduces transformer requirement from 1500 kVA to 1000 kVA — saving 500 kVA of transformer capacity. Requires measured or estimated load profiles per building.'
      },
      rot:["For a campus or multi-building site: typical diversity factor between buildings is 1.3–2.0. Get measured data or use conservative 1.3 for design without data.","Load factor rule: for billing, high load factor is good (you use energy efficiently relative to your peak). For equipment sizing, low load factor means equipment operates below capacity — potential for right-sizing."],
      mistakes:["Designing campus infrastructure without considering inter-building diversity — commonly results in transformers running at 40–50% of capacity","Using load profiles from office buildings for retail — retail has very different profiles (weekend peak, evening peak vs office weekday peak)"],
      interviewQs:["What is the difference between load factor and demand factor?","How does inter-building diversity affect campus transformer sizing?","Why does a data centre have a very flat load profile compared to an office building?"],
      siteTips:["For any project where you can obtain historical electricity bills with maximum demand data, extract the demand values for each month. The pattern reveals seasonal diversity (AC in summer, heating in winter) and allows validation of your design assumptions."],
      diagram:{type:'schematic',svgId:'load-profile-chart'}
    },
    advanced:{
      theory:"STATISTICAL DEMAND ANALYSIS:\nRather than worst-case sum, statistical methods give probability-based demand.\nFor N identical loads each with MD = P:\nProbability that k loads are at peak simultaneously follows binomial distribution.\nDesign for 95th or 99th percentile simultaneous demand rather than sum.\nUsed in utility distribution planning — not typically in building design.\n\nLOAD FORECASTING:\nTime-series models (ARIMA) forecast future load based on historical patterns.\nWeather correlation: AC load correlates with ambient temperature.\nOccupancy models: BMS occupancy data predicts HVAC demand.\nUsed by utilities for capacity planning.\n\nDEMAND-SIDE MANAGEMENT:\nShaping the load profile to reduce peak and improve load factor.\nStrategies:\n1. Pre-cooling: run HVAC intensively before peak tariff period\n2. Thermal storage: freeze ice at night, use for cooling during day\n3. Shifting non-critical loads (dishwashers, laundry) to off-peak\n4. Battery BESS: discharge during peak, charge off-peak\n\nCOINCIDENT DEMAND:\nIn utility planning: maximum demand that occurs simultaneously across all customers.\nNon-coincident demand: sum of individual maximums.\nCoincident demand = non-coincident × coincidence factor (1/diversity factor).",
      formula:{
        IS:'Statistical: P_simultaneous = P_max × √N (for independent equal loads)\nCoincidence factor = Simultaneous MD / Σ(individual MDs)\nPre-cooling: ΔT × mass × Cp = energy for thermal mass\nBESS: E_required = (P_peak - P_baseload) × duration',
        NEC:'IEEE 1366: Reliability indices related to load profiles\nNERC: Load forecasting standards for bulk power systems\nDemand response: FERC Order 745',
        IEC:'IEC 61968: Application integration at electric utilities\nSmart metering data for load profile analysis\nIEC 62746: Consumer interface to smart grid'
      },
      example:{
        sector:'res',
        given:'Residential estate: 200 apartments, each with 3kW AC. Utility must size the distribution transformer. What coincident demand?',
        steps:[
          'Non-coincident (worst case): 200 × 3 = 600 kW',
          'Statistical approach: not all ACs run simultaneously',
          'After diversity ADMD: assume 1.5 kVA per unit (ADMD data from utility)',
          '200 × 1.5 = 300 kVA',
          'With EV charging: add 200 × 0.3 kW (10% EV penetration, smart charging): +60 kW',
          'Total design: 300 + 60 = 360 kVA',
          'Select: 400 kVA transformer (with 10% margin)'
        ],
        result:'400 kVA transformer for 200 flats — versus 660 kVA without diversity. Diversity factor = 1.65. EV charging adds 10% to future demand planning.'
      },
      rot:["ADMD for residential India: 1.5–2.5 kVA per dwelling at distribution transformer level. High-end apartments with multiple ACs and EV charging: 3–4 kVA. Plan future-ready."],
      mistakes:["Sizing residential distribution transformers for full connected load — always use ADMD and diversity. Otherwise transformers are 60% oversized at great capital cost.","Not accounting for EV charging in residential diversity calculations — EV adoption is growing rapidly and charging is often coincident (evenings)"],
      interviewQs:["What is After Diversity Maximum Demand (ADMD) and how is it used?","How does pre-cooling reduce peak electricity demand?","Why does adding smart charging controls allow more EVs to connect to the same distribution transformer?"],
      siteTips:["When a residential distribution transformer overloads in summer, check: (1) is it the connected load or actual load? (2) Are residents running multiple ACs simultaneously? (3) Are there EV chargers not originally accounted for? Address the actual problem — often smart load management software solves overloading without a transformer replacement."],
      diagram:{type:'schematic',svgId:'diversity-diagram'}
    },
    sectorNotes:{
      res:'Residential load profile: morning peak (geysers, EV charging) and evening peak (cooking, AC, entertainment). Weekend different from weekday. EV charging increasingly important.',
      com:'Office profile: twin peaks (morning and afternoon), lunch dip, low night load. AC dominates summer peaks. Diversity between floors: 1.2–1.5.',
      dc:'Nearly flat profile — servers run 24/7. Slight variations with batch processing peaks. Load factor ≈ 0.85–0.95. No significant diversity between racks.',
      ind:'Shift-based profile: clear step changes at shift start/end. Startup surge at shift change is the peak. Weekends may be partial production or maintenance.',
      og:'Continuous operations — load profile nearly flat. Planned shutdowns for maintenance create step changes. Seasonal variation small.',
      hc:'Hospital: relatively flat 24/7. Operating theatre peaks during scheduled procedures. Emergency department unpredictable. Essential loads constant.'
    },
    standards:{
      IS:[{clause:'NBC 2016 Part 8',title:'Load density and diversity guidance',note:'Planning allowances by occupancy type'},{clause:'CEA Metering Regulations 2006',title:'15-minute interval metering',note:'Basis for load profile recording for utilities'}],
      NEC:[{clause:'IEEE 141 Ch.2',title:'Load characteristics',note:'Load factor, demand factor, diversity for industrial power'},{clause:'ASHRAE 90.1',title:'Energy standard — load schedules',note:'Building load profiles for energy compliance calculations'}],
      IEC:[{clause:'IEC 60364-1 Annex B',title:'Simultaneity and demand factors',note:'Table of simultaneity factors for LV installation design'},{clause:'IEC 61968-9',title:'Smart metering interface',note:'Load profile data exchange standards'}]
    },
    quiz:[]
  },

  {
    id:'how-to-read-codes-l2', level:2, icon:'🧾', title:'How to Read Electrical Codes (Deep Dive)',
    desc:'Reading mandatory rules vs informational notes vs exceptions. Navigating NEC chapters, IS parts.',
    tags:['How to Read Codes', 'Standards', 'Codes', 'Regulations', 'NEC', 'IS Standards'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,

    beginner:{
      intro:"In Level 1 you learned the structure. Now we go deeper — how to actually find the right clause, interpret mandatory language, use exceptions, and handle conflicts between standards.",
      whyMatters:[
        { icon:'📖', text:'Engineers who can navigate codes quickly are 3× more efficient than those who guess' },
        { icon:'⚖️', text:'Incorrect code interpretation leads to failed inspections, redesign costs, and liability' },
        { icon:'🔍', text:'Many code clauses have exceptions that make a design easier — find them' }
      ],
      theory:"NEC LANGUAGE HIERARCHY:\n1. 'SHALL' = Mandatory requirement. No choice.\n2. 'SHALL NOT' = Absolute prohibition.\n3. 'SHOULD' = Recommendation (not code-enforceable, but good practice).\n4. 'MAY' = Permission (allowed but not required).\n5. Informational Note = Explanation only. NOT enforceable.\n6. Exception = Modifies the base requirement for specific conditions.\n\nFINDING THE RIGHT CLAUSE:\nStep 1: Identify the subject (cable? breaker? earthing?)\nStep 2: Identify the Chapter (general wiring → Ch.2, equipment → Ch.4)\nStep 3: Find the Article number\nStep 4: Read the base rule\nStep 5: Check for Exceptions\nStep 6: Check if Chapter 5, 6, or 7 modifies this Article\nStep 7: Check Annex tables if referenced\n\nIS STANDARD CROSS-REFERENCES:\nIS standards often reference each other:\n— IS 732 references IS 3043 for earthing\n— IS 3961 is referenced by IS 732 for cable ratings\n— NBC 2016 references multiple IS standards\nAlways follow the reference chain completely.\n\nCONFLICT RESOLUTION:\nWhen IS and IEC conflict: IS takes precedence in India.\nWhen IS and client specification conflict: more stringent requirement applies.\nWhen two clauses conflict within one standard: specific clause overrides general.",
      formula:{IS:'IS standard reference format: IS [number]:[year] Cl.[clause number]\nExample: IS 3043:2018 Cl.8.1 — earth electrode design\nNBC 2016 Part 8 Cl.13.3 — earthing requirements',NEC:'NEC reference: NEC [year] Art.[XXX].[YY](Z)(a)\nExample: NEC 2023 Art.250.66(A)\nCross-reference: NEC Art.90.3 — applicability of chapters',IEC:'IEC reference: IEC [number]-[part]:[year] Cl.[number]\nExample: IEC 60364-5-52:2009 Cl.523.3\nHarmonised: IEC standard number = IS number (if IDT)'},
      example:{
        sector:'com',
        given:'An engineer needs to find the maximum earth electrode resistance for a commercial building in India. Walk through the code navigation process.',
        steps:[
          'Subject: earth electrode resistance → IS 3043 (earthing standard)',
          'Navigate: IS 3043:2018, Section 8 (Earth Electrodes)',
          'Find: Cl.8.5 — Earth resistance values',
          'Read: "The resistance of earth electrodes shall not exceed the following values..."',
          '"For general electrical installations: 5 Ω"',
          '"For systems where high voltage earth fault can occur: 1 Ω"',
          'Check: any exceptions? Cl.8.5 Exception: "Where soil resistivity makes it impossible to achieve 5 Ω, use multiple electrodes with documented evidence."',
          'Cross-reference: NBC 2016 Part 8 Cl.13 also references IS 3043'
        ],
        result:'IS 3043:2018 Cl.8.5: general installation ≤ 5Ω, HV systems ≤ 1Ω. Exception documented for high-resistivity soil. No conflict with NBC — NBC defers to IS 3043.'
      },
      rot:["NEC navigation trick: when the subject involves safety for people (not equipment), go to Article 100 definitions first, then to the relevant chapter. Safety rules are always broader than equipment rules.","IS standard tip: if the IS standard you found is dated more than 5 years ago, check the BIS catalogue for a newer edition or amendment. Using superseded clauses is a liability risk."],
      mistakes:["Reading an Informational Note and treating it as mandatory — 'Informational Note: Conductors of 12 AWG or smaller...' is explanatory, not enforceable","Stopping at the base requirement without reading the exceptions — many 'difficult' requirements have practical exceptions","Using one edition of the NEC when the project authority requires another edition — always confirm required edition with the AHJ (Authority Having Jurisdiction)"],
      interviewQs:["What is the difference between 'shall' and 'should' in a code clause?","If a client specification is less stringent than IS 732, which applies?","How do you resolve a conflict between NEC Chapter 2 and Chapter 5 for a hospital installation?"],
      siteTips:["Keep a personal reference sheet of the 10 most frequently used clauses for your project type. For commercial projects in India: IS 732 Cl.6 (VD), IS 3043 Cl.8 (earthing), NBC 2016 Part 8 Table 3 (load allowances). This speeds up design review significantly."],
      diagram:{type:'schematic',svgId:'code-navigation-diagram'}
    },
    advanced:{
      theory:"ENGINEERING JUDGEMENT AND CODE:\nCodes set minimum requirements. Good engineering often exceeds the code minimum.\nAreas where engineering judgement supplements code:\n— Fire survival cable routing (code silent on many scenarios)\n— Derating cables in unusual environments\n— Protection relay coordination (many codes give principles, not methods)\n\nTECHNICAL DESIGN MEMORANDA (TDMs):\nFor non-standard situations, write a TDM:\n1. State the clause being applied/modified\n2. Explain why standard approach doesn't apply\n3. Describe the alternative\n4. Show it achieves equivalent safety\n5. Reference supporting standards or calculation\nTDMs are accepted by most AHJs and provide legal protection.\n\nCODE CHANGE PROCESS:\nNEC: Updated every 3 years. Public comment periods. NFPA 70 Handbook provides commentary.\nIS: BIS Technical Committee proposals. Public review. Amendment sheets issued between editions.\nIEC: TC proposals through national bodies. Harmonisation lag of 1–3 years for IS adoption.\n\nINTERPRETATION REQUESTS:\nNEC: can submit formal interpretation to NFPA. Written response provides official guidance.\nIS: technical queries to BIS. Formal errata/amendment process.\nLocal AHJ: most common route — written interpretation request for project-specific issues.",
      formula:{IS:'TDM format per IS 7300 (engineering documentation)\nProject-specific clause variance: documented + approved\nEquivalent protection principle: alternate means meeting safety intent',NEC:'NEC 90.4: Formal interpretations available from NFPA\nAHJ discretion per NEC 90.4: final authority on interpretation\nEquivalent protection: permitted if AHJ approves',IEC:'IEC Directives: code development process\nNational body (BIS) harmonisation lag\nCEN/CENELEC EN harmonised standards (Europe)'},
      example:{
        sector:'dc',
        given:'A data centre uses 6mm² mineral insulated cable for a fire alarm circuit through a hazardous area. IS 7098 (LSZH) and IS 694 (PVC) don\'t cover MI cable. How do you justify the specification?',
        steps:[
          'Identify: MI cable is not explicitly covered by IS 694 or IS 7098',
          'Find applicable standard: IS 1554 Part 2 — Heavy duty PVC cables (not MI)',
          'Refer to: IEC 60702-1 — Mineral insulated cables (no direct Indian IS)',
          'Write TDM: "The project specifies MI cable per IEC 60702-1. This cable provides superior fire survival (>2 hours per BS 6387) compared to any PVC/XLPE cable. The absence of an IS standard for MI cable does not prohibit its use — IS 732 Cl.5.1 permits the use of cables complying with international standards where IS equivalents do not exist."',
          'Engineering basis: MI cable exceeds the fire performance requirements of IS 694/7098 in all respects.',
          'Submit TDM to AHJ (state electrical inspector) for approval before installation'
        ],
        result:'TDM prepared referencing IS 732, IEC 60702-1, and project fire safety requirements. AHJ approval obtained. MI cable specified with written justification on record.'
      },
      rot:["When code is silent, apply the principle: 'equivalent or better safety than the code minimum intent.' Document your reasoning. This is the engineering judgement that separates a designer from a technician."],
      mistakes:["Designing to the code minimum in all cases without considering the actual safety intent — a code-compliant design may still have unacceptable risk in specific contexts","Not documenting code interpretations — verbal agreements with inspectors are worthless. Get it in writing."],
      interviewQs:["What is a Technical Design Memorandum and when would you write one?","How do you handle a situation where IS 732 is silent on a specific installation scenario?","If the local electricity board's rules conflict with IS 732, which takes precedence?"],
      siteTips:["Build a code library folder for every project: save the relevant clauses you're applying, with highlighting and date stamp. If a dispute arises 5 years later during refurbishment, you can show exactly what standard was applied and why."],
      diagram:{type:'schematic',svgId:'code-hierarchy-diagram'}
    },
    sectorNotes:{
      res:'Key clauses: IS 732 Cl.4 (wiring methods), Cl.6 (VD), Cl.8 (earthing), NEC Art.210 (branch circuits), NEC 250 (grounding). Annual updates: NEC 2020/2023; IS 732:2019.',
      com:'Multiple applicable standards: IS 732 (wiring), IS 3043 (earthing), NBC 2016 (building), IS 13947 (switchgear), IS 1646 (fire safety). Hierarchy: NBC > IS > IEC.',
      dc:'TIA-942 (data centre), ASHRAE TC 9.9, Uptime Tier Standard supplement IS/NEC. No single Indian standard — TDMs needed for non-standard data centre practices.',
      ind:'CEA Regulations take precedence for HV systems. IS 13947 for industrial switchgear. IEEE 1584 for arc flash (no Indian equivalent). IEC 60947 harmonised as IS 13947.',
      og:'IEC 60079 series (hazardous areas) is the definitive reference. IS 5572 (Indian hazardous area classification) is IS equivalent. ATEX (EU) and IECEx certificates both accepted in India with TDM.',
      hc:'NFPA 99 (US) widely referenced in Indian hospital projects alongside IS 1646. Conflicts resolved by applying more stringent requirement. IEC 60364-7-710 mandatory for Group 2 medical locations.'
    },
    standards:{
      IS:[{clause:'IS 732:2019 Cl.5',title:'Wiring methods — general requirements',note:'Start of all IS wiring design requirements'},{clause:'IS 3043:2018 Cl.8',title:'Earth electrodes — resistance requirements',note:'Specific clause for earth resistance limits'}],
      NEC:[{clause:'NEC 2023 Art.90.3',title:'Applicability of chapters',note:'Explains how chapters 1–4, 5–7, and 8 relate to each other'},{clause:'NEC 2023 Art.90.4',title:'Enforcement and interpretation',note:'Role of AHJ and how to seek formal interpretation'}],
      IEC:[{clause:'IEC 60364-1 Cl.131',title:'Fundamental principles — protection for safety',note:'Base safety principles underlying all IEC 60364 requirements'},{clause:'IEC Directives Part 2',title:'IEC Supplement — code development process',note:'How IEC standards are developed and harmonised'}]
    },
    quiz:[]
  },

  {
    id:'conduit-fill', level:2, icon:'🔧', title:'Conduit & Cable Tray Fill',
    desc:'Calculating conduit fill percentage and cable tray fill ratio per NEC Chapter 9, IS 1554, and IEC 61386.',
    tags:['Conduit Fill', 'Cable Tray Fill', 'Raceway Sizing'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:'calcConduitFill',

    beginner:{
      intro:"Every cable needs a pathway — conduit or cable tray. Both have fill limits that protect cables from damage and heat accumulation. Exceeding fill limits is a code violation and a safety issue.",
      whyMatters:[
        { icon:'🔥', text:'Overcrowded conduits trap heat — cables run hotter, derate faster, fail sooner' },
        { icon:'🔧', text:'Overloaded cable trays collapse under weight — catastrophic failure in cable shafts' },
        { icon:'📋', text:'Fill calculation is a code requirement — inspectors check it on every installation' }
      ],
      theory:"CONDUIT FILL (NEC / IS):\nThe percentage of conduit cross-sectional area occupied by cables.\n\nFILL LIMITS per NEC Chapter 9 Table 1:\n— 1 conductor: 53% of conduit area\n— 2 conductors: 31% of conduit area\n— 3 or more conductors: 40% of conduit area\n\nIS / IEC approach: similar principle but expressed as number of cables per conduit size.\n\nCABLE TRAY FILL:\nFor ladder-type tray: cables fill to maximum depth = 1.5× cable diameter.\nFor solid-bottom tray: maximum fill ratio 50% of tray cross-section area.\nCable tray fill also subject to weight per unit length limit.\n\nCONDUIT SIZES (metric, IS):\n16mm, 20mm, 25mm, 32mm, 40mm, 50mm, 63mm internal diameter\n\nCABLE TRAY WIDTHS (standard):\n50, 75, 100, 150, 200, 300, 450, 600mm width\nDepth: 25, 50, 75, 100mm",
      formula:{
        IS:'% fill = Σ(cable OD² × π/4) / (conduit ID² × π/4) × 100\nFor ≥3 cables: ≤ 40% fill\nConduit ID from IS 9537 tables\nCable OD from IS 1554 / IS 694 tables',
        NEC:'% fill = Σ(cable areas) / conduit area × 100\nNEC Ch.9 Table 1: max 40% for ≥3 wires\nNEC Ch.9 Tables 4–8: conduit and cable areas\nCable area from NEC Ch.9 Table 5 (THHN) or manufacturer data',
        IEC:'IEC 61386: Conduit systems\nFill factor per manufacturer conduit data\nIEC 60228: Cable dimensions\nCable tray fill: IEC 61537 — Cable tray systems'
      },
      example:{
        sector:'com',
        given:'Conduit contains: 3× 16mm² XLPE (OD=18mm each) + 2× 10mm² XLPE (OD=15mm each). Select minimum conduit size.',
        steps:[
          'Cable areas: 3× (π×18²/4) = 3×254.5 = 763.4mm²',
          '            2× (π×15²/4) = 2×176.7 = 353.4mm²',
          'Total cable area: 763.4 + 353.4 = 1116.8mm²',
          '≥3 cables → max 40% fill → conduit area needed = 1116.8/0.40 = 2792mm²',
          'Conduit ID needed: d = √(2792×4/π) = 59.6mm',
          'Next standard size: 63mm ID conduit',
          'Verify: 1116.8/(π×63²/4) = 1116.8/3117.2 = 35.8% < 40% ✓'
        ],
        result:'63mm ID conduit required. Actual fill = 35.8%. Compliant with IS/NEC 40% limit.'
      },
      rot:["When in doubt, upsize the conduit. Going from 50mm to 63mm conduit adds very little cost but provides valuable space for cable pulling and future additional circuits.","Cable tray quick rule: a 200mm wide × 75mm deep ladder tray can carry about 20–30 medium cables (16–25mm²). Always verify with actual calculation."],
      mistakes:["Measuring conduit fill as % of total conduit length, not cross-sectional area — incorrect method","Ignoring future cables when designing conduit fill — always leave 25–40% spare capacity for additions","Mixing power cables with data/signal cables in the same conduit — not prohibited by most electrical codes but creates EMI problems"],
      interviewQs:["Why is the fill limit different for 1 cable versus 3 or more cables in a conduit?","What is the fill limit for cable ladder tray?","Why should you not fill a conduit to exactly 40% during design?"],
      siteTips:["During cable pulling, if the cable feels extremely tight in the conduit, stop and count cables. Do not force cables into an already full conduit — damage to insulation causes insulation failures that are difficult to locate and repair."],
      diagram:{type:'schematic',svgId:'conduit-fill-diagram'}
    },
    advanced:{
      theory:"CABLE PULLING TENSION:\nEven within fill limits, cables can be damaged during installation if pulling tension is excessive.\nMaximum pulling tension: T ≤ 0.008 × conductor area (mm²) × number of conductors (NEC approach)\nOr: T ≤ Manufacturer's limit (typically stated in N or lb)\n\nSIDEWALL PRESSURE:\nAt bends in conduits, cables press against the outer wall.\nSidewall pressure = T / R_bend (N/m)\nMaximum sidewall pressure: typically 500 N/m for XLPE cables\nAffects bend radius and number of bends between pull points.\n\nCABLE TRAY SELECTION:\nLadder tray: best ventilation, best for power cables, most used.\nPerforated tray: medium ventilation, mixed signal/power.\nSolid bottom: data/signal cables, cable protection.\nWire basket: data centres, light cables.\n\nWEIGHT LOADING:\nCable tray must withstand cable weight + dynamic loading (people walking on tray).\nTypical cable weight: 1–3 kg/m per cable.\n100 cables on 1m span = 100–300 kg/m — check tray manufacturer load tables.\nSupport spacing: typically 1200–1500mm for steel tray, 900mm for aluminium.\n\nFIRE STOPS:\nWhere conduits or trays pass through fire walls, fire stopping is mandatory.\nIntumescent seals, fire-resistant pillows, or pour-in compounds.\nFire stop rating must match the wall fire rating (60 min, 120 min).",
      formula:{
        IS:'Pulling tension: T = f × W × L (horizontal)\n  f = coefficient of friction (0.35 conduit, 0.5 tray)\n  W = cable weight (N/m), L = run length (m)\nSidewall pressure: SW = T/R (N/m)\nIS 5216: Installation practices\nTray load capacity from manufacturer data',
        NEC:'NEC 300.17: Number of conductors in raceway\nNEC Ch.9 Table 1: Fill percentages\nConduit bend radius: NEC 358.24 (EMT), 344.24 (RMC)\nTray load: NEC 392.22 — tray load limits',
        IEC:'IEC 61537: Cable tray systems\nTray load tables per IEC 61537 Annex B\nFire stopping: IEC 60331 cable requirements\nIEC 60364-5-52: Cable installation methods'
      },
      example:{
        sector:'dc',
        given:'Data centre: 200mm wide ladder tray, 100m run, carrying 40× 25mm² Cu cables (OD=22mm, weight=2.0 kg/m each). Check fill and weight.',
        steps:[
          'Fill: 40× π×22²/4 = 40×380.1 = 15,203mm²',
          'Tray area (200mm wide, 75mm deep): 200×75 = 15,000mm² → cable fill = 15,203/15,000 = 101%',
          'EXCEEDS fill limit — tray is too small',
          'Solution: 300mm wide tray (area 22,500mm²) → fill = 15,203/22,500 = 67.6%',
          'Still exceeds 50% solid-bottom limit. Use ladder tray (fill limit = 1 cable diameter depth)',
          'Cable depth: 1 layer of 22mm cables in 75mm tray → 1 layer = 22mm < 75mm × 1.5 = 112.5mm ✓ (ok for 1 layer)',
          'Weight: 40 × 2.0 = 80 kg/m. Over 1.2m span: 80×1.2 = 96 kg',
          'Check tray rated load (from manufacturer): 200kg/m for 300mm tray at 1.2m span ✓'
        ],
        result:'Upsize to 300mm wide ladder tray. Weight: 80 kg/m < 200 kg/m limit ✓. Cable depth: single layer 22mm < depth limit ✓.'
      },
      rot:["For data centres: plan cable tray routes before finalising server rack layout. Retrofit tray routes are expensive and disruptive. 600mm wide trays on main routes allow future additions without replacement."],
      mistakes:["Calculating conduit fill for design cables only, forgetting that pulling a new cable requires spare capacity in the conduit","Designing cable trays without considering the ceiling grid — trays that clash with structural beams or HVAC ducts are expensive to reroute after installation"],
      interviewQs:["What is sidewall pressure in conduit installation and why does it matter?","How does cable tray fill differ for ladder tray versus solid-bottom tray?","What information do you need from the cable manufacturer to verify conduit fill?"],
      siteTips:["Before pulling cables through a long conduit run with multiple bends, calculate the expected pulling tension. If it exceeds the cable's maximum pulling tension, you need an intermediate pull point (junction box) or cable lubricant. Forcing cables causes insulation tears that become future faults."],
      diagram:{type:'schematic',svgId:'conduit-tray-diagram'}
    },
    sectorNotes:{
      res:'Residential: 20–25mm PVC conduit for branch circuits. Surface-mounted or concealed in walls. NEC: EMT (electrical metallic tubing) in US residential. IS: PVC rigid conduit.',
      com:'Commercial: extensive cable tray in ceiling voids and risers. 100–300mm wide ladder tray. Separate tray routes for power, data, and fire alarm per IS 7678/NFPA 72.',
      dc:'Data centre: structured cable management critical. Overhead or underfloor tray systems. Power and data completely separated. Cable management documentation in DCIM system.',
      ind:'Industrial: heavy steel conduit (GI/rigid) for mechanical protection. Cable tray in cable tunnels and plant rooms. IP-rated conduit fittings in wet areas.',
      og:'Offshore: Ex-rated conduit fittings in hazardous areas. Stainless steel or aluminium tray (corrosion resistance). Minimum IP55 throughout. Cable transit frames for fire compartment sealing.',
      hc:'Hospital: separate tray routes for essential and non-essential. Fire-resistant cables in dedicated conduit/tray. All tray and conduit must be accessible for maintenance.'
    },
    standards:{
      IS:[{clause:'IS 9537',title:'Rigid steel conduits for electrical installations',note:'Conduit sizes and specifications for Indian installations'},{clause:'IS 1554 Part 1',title:'PVC insulated cables — OD dimensions',note:'Cable outer dimensions needed for fill calculations'}],
      NEC:[{clause:'NEC Ch.9 Table 1',title:'Percent of cross section of conduit for conductors',note:'Fill percentages: 53% (1 wire), 31% (2 wires), 40% (3+ wires)'},{clause:'NEC Art. 392',title:'Cable trays',note:'Cable tray installation and fill requirements'}],
      IEC:[{clause:'IEC 61386',title:'Conduit systems for cable management',note:'Complete IEC conduit system standard'},{clause:'IEC 61537',title:'Cable tray systems',note:'Cable tray design, selection, and fill requirements'}]
    },
    quiz:[]
  },

  /* ── 11. GROUNDING SYSTEM TYPES ── */
  {
    id:'grounding-systems', level:2, icon:'🔌', title:'Grounding System Types',
    desc:'TN-S, TN-C-S, TT, and IT earthing system configurations — how neutral and earth interact.',
    tags:['Grounding Systems', 'TN-S', 'TN-C-S', 'TT System', 'IT System', 'Earthing Configuration'],
    sectors:['res','com','ind','dc','og','hc'], green:false, calculator:null,
    beginner:{
      intro:"Every electrical installation must connect to earth — but HOW it connects determines how faults are detected, how fast they are cleared, and what protection devices are needed. The earthing system type is the foundation of the entire protection strategy.",
      whyMatters:[
        {icon:'🔌', text:'The earthing system type determines whether MCBs, RCDs, or both are needed for shock protection'},
        {icon:'⚡', text:'Wrong earthing system selection means protection devices may not operate during a fault — lethal'},
        {icon:'🏥', text:'Healthcare IT systems deliberately allow first faults to persist — understanding system types is critical'}
      ],
      theory:"EARTHING SYSTEM CLASSIFICATION (IEC 60364-1):\nFirst letter — Source earthing:\n  T = direct connection of one point (usually neutral) to earth\n  I = isolated from earth (or connected through high impedance)\n\nSecond letter — Installation earthing:\n  T = exposed conductive parts connected to earth independently of source\n  N = exposed conductive parts connected to neutral (source earth)\n\nThird letter (where applicable):\n  S = separate neutral and protective conductors throughout\n  C = neutral and protective conductor combined (PEN)\n  C-S = combined in part, separate in part\n\nTN-S SYSTEM:\nNeutral (N) and Protective Earth (PE) are separate conductors from source to installation.\nMost common in new commercial and industrial installations.\nFault current returns via PE conductor → high fault current → fast MCB/MCCB trip.\nNo RCD mandatory for basic protection (but recommended for socket outlets).\n\nTN-C-S SYSTEM (PME — Protective Multiple Earthing):\nCombined PEN conductor from source, split to separate N and PE at service entrance.\nCommon in UK and many distribution networks.\nRisk: if PEN conductor breaks, all metalwork rises to line voltage.\nRequires main earth bonding at point of separation.\n\nTT SYSTEM:\nUtility provides live and neutral only. Customer installs own earth electrode.\nEarth fault current returns through earth (soil) → low fault current → MCB may not trip fast enough.\nRCD is MANDATORY for all circuits (30mA for socket outlets).\nCommon in India (rural), France, Japan.\n\nIT SYSTEM:\nSource is isolated from earth (or connected through high impedance >1kΩ).\nFirst earth fault: no significant current flows → system continues operating.\nInsulation monitoring device (IMD) gives alarm on first fault.\nSecond fault on different phase: dangerous → protection must trip.\nUsed in: hospitals (operating theatres), mines, offshore, critical processes.",
      formula:{
        IS:'TN-S: Zs = Ze + (R1+R2), verify Zs × Ia ≤ Uo (IS 732 Cl.6)\nTT: Ra × IΔn ≤ 50V (touch voltage limit)\nRa = resistance of earth electrode + PE conductor\nIΔn = RCD rated residual current (30mA or 100mA)\nIS 3043 Cl.3: defines TN, TT, IT systems for Indian installations',
        NEC:'TN equivalent: solidly grounded system (NEC 250.4(A))\nNEC 250.20: systems required to be grounded\nNEC 250.21: systems permitted to be ungrounded (IT equivalent)\nTT equivalent: separately derived system with local ground rod\nGround fault current: If = Vln / Zground_loop',
        IEC:'IEC 60364-4-41: protection by automatic disconnection\nTN: disconnection time ≤ 0.4s for ≤32A circuits (Uo ≤ 230V)\nTT: RCD mandatory, Ra × IΔn ≤ 50V\nIT: IMD alarm at Rf < threshold. Second fault: treat as TN or TT.\nIEC 60364-1 Cl.312.2: earthing system classification'
      },
      example:{
        sector:'com',
        given:'New 5-storey commercial building, 1000 kVA transformer. Utility supplies 11kV, customer owns transformer. Select earthing system.',
        steps:[
          'Customer owns transformer → can choose earthing system (not dictated by utility)',
          'Options: TN-S, TN-C-S, TT, IT',
          'Commercial building: no special continuity requirements → IT not needed',
          'New build: can run 5-core cable (L1, L2, L3, N, PE) → TN-S feasible',
          'TN-S advantages: high fault current → fast MCB trip, no mandatory RCD on all circuits',
          'TN-S: typical Zs = 0.35Ω for closest DB, fault current If = 230/0.35 = 657A',
          '657A > 5× MCB rating → trips in <0.1s ✓',
          'Decision: TN-S with RCD on all socket outlets (additional protection per IS 732)',
          'Main earth bar at LV switchboard, separate N and PE bars, earth electrode as backup'
        ],
        result:'TN-S earthing system selected. Separate N and PE throughout. High fault current ensures fast disconnection. RCDs on sockets for additional protection. Earth electrode resistance <5Ω.'
      },
      rot:["TN-S = separate everything, highest safety, highest cost (5-core cable). TT = cheapest (no PE from source) but RCD mandatory everywhere. IT = highest availability (first fault = alarm only, no trip).","When utility supplies LV directly (no customer transformer), the earthing system is usually dictated by the utility — you cannot choose. Check before design."],
      mistakes:["Designing a TT system without RCD protection on every circuit — the earth fault current through soil is too low to trip MCBs reliably","Using TN-C (combined PEN) inside a building — PEN conductor break puts all metalwork to line voltage. TN-C-S must split to TN-S at the service entrance","Connecting IT system earth electrode to the same electrode as other systems — defeats the isolation purpose"],
      interviewQs:["What is the difference between TN-S and TN-C-S earthing systems?","Why is RCD mandatory in TT systems but not in TN systems?","In which applications is IT system used and why?"],
      siteTips:["Before designing protection, confirm the earthing system type with the utility or project specification. The entire protection coordination strategy changes between TN and TT. Getting this wrong at the start means redesigning every circuit's protection later."],
      diagram:{type:'comparison',svgId:'grounding-types-diagram'}
    },
    advanced:{
      theory:"TN-S FAULT LOOP ANALYSIS:\nFault current path: Phase → fault → PE conductor → neutral star point → back to phase.\nAll metallic — low impedance — high fault current.\nZs = Ze (external) + R1 (phase conductor) + R2 (PE conductor)\nFault current: If = Uo / Zs (where Uo = phase voltage 230V)\nDisconnection: MCB or fuse must trip within 0.4s for ≤32A final circuits.\n\nTT SYSTEM — EARTH FAULT ANALYSIS:\nFault current path: Phase → fault → PE → earth electrode → soil → utility earth → neutral → source.\nSoil resistance is high (tens to hundreds of ohms) → fault current is LOW (typically 0.5-5A).\nMCBs need hundreds of amps → cannot trip on TT earth fault.\nSolution: RCD detects even 30mA imbalance → trips in <40ms.\nTouch voltage limit: Ra × IΔn ≤ 50V (dry conditions) or ≤25V (wet conditions).\n\nIT SYSTEM — INSULATION MONITORING:\nIMD (Insulation Monitoring Device) continuously measures insulation resistance to earth.\nHealthy: Riso > 50kΩ (varies by system).\nFirst fault: Riso drops → IMD alarms. Current through fault is negligible (mA range).\nOperator investigates and repairs while system continues running.\nSecond fault (on different phase): full fault current flows → protection must trip.\nSecond fault protection: same as TN or TT depending on whether exposed parts are interconnected.\n\nPME (PROTECTIVE MULTIPLE EARTHING) — TN-C-S DETAILED:\nUtility distributes with combined PEN conductor (cost saving on distribution network).\nAt service entrance: PEN splits into separate N and PE.\nPEN must be earthed at multiple points along distribution (hence 'multiple earthing').\nRisk scenario: if PEN breaks between last earth point and customer, customer's earth reference is lost.\nAll exposed metalwork in building rises to approximately line voltage.\nMitigation: main bonding to gas, water, structural steel at service entrance.\nSome countries (Australia) prohibit PME for swimming pools and caravan parks.",
      formula:{
        IS:'TN-S loop impedance: Zs = Ze + (R1+R2)\nFault current: If = Uo/Zs\nDisconnection condition: If × t ≤ k²S² (adiabatic equation for PE)\nTT: Ra × IΔn ≤ 50V (IS 732 Cl.6.3)\nIT first fault: Id = Uo / (Riso + Rf) — negligible\nIT second fault: treat as TN or TT',
        NEC:'Solidly grounded (TN): NEC 250.4(A) — effective ground fault current path\nGFCI ≡ RCD: required per NEC 210.8 for wet locations\nUngrounded (IT): NEC 250.21 — permitted for specific applications\nImpedance grounded: NEC 250.36 — high-impedance grounding for industrial\nGround fault current (solidly grounded): If = Vln / Zloop',
        IEC:'TN: IEC 60364-4-41 Cl.411.4 — disconnection times\n≤32A: 0.4s, >32A: 5s (distribution circuits)\nTT: IEC 60364-4-41 Cl.411.5 — Ra × IΔn ≤ 50V\nIT: IEC 60364-4-41 Cl.411.6 — IMD + second fault protection\nIEC 61557-8: IMD requirements for IT systems'
      },
      example:{
        sector:'hc',
        given:'Hospital operating theatre suite: 3 OTs, critical medical equipment. Design earthing system for maximum continuity during surgery.',
        steps:[
          'Requirement: first earth fault must NOT trip supply — patient safety during procedure',
          'Solution: IT system (unearthed/isolated supply) for each OT',
          'Medical IT transformer: 1-phase, 10 kVA, isolation transformer per OT',
          'IMD installed on each IT system: alarm at Riso < 50kΩ',
          'First fault: IMD alarms (audible + visual in OT corridor) — surgery continues safely',
          'Staff investigate and plan repair after procedure completes',
          'Second fault protection: RCD on IT system output (backup)',
          'Equipotential bonding: all metalwork within OT bonded together (supplementary bonding)',
          'Touch voltage within OT: < 25V (medical requirement, not 50V)',
          'Main hospital distribution: TN-S for general areas, IT only for Group 2 medical locations'
        ],
        result:'IT system with IMD for each operating theatre. TN-S for general hospital. First fault: alarm only. Supplementary equipotential bonding in all Group 2 locations. Touch voltage limit 25V.'
      },
      rot:["Rule of thumb for earthing system selection: TN-S for new commercial/industrial (best protection). TT where utility dictates (add RCDs everywhere). IT only where continuity is critical (hospitals, mining, offshore). Never use TN-C inside buildings."],
      mistakes:["Failing to install IMD on IT systems — without monitoring, a first fault goes undetected and the system operates with reduced safety indefinitely","Not splitting PEN to separate N and PE at the correct point in TN-C-S — splitting too late means combined PEN inside the building","Using standard 50V touch voltage limit in medical locations — medical standard is 25V (wet conditions, patient contact)"],
      interviewQs:["How does an Insulation Monitoring Device work in an IT system?","What happens if the PEN conductor breaks in a TN-C-S (PME) system?","Why is IT system selected for hospital operating theatres?"],
      siteTips:["When commissioning a TN-S system, measure loop impedance (Zs) at every final circuit and verify that the prospective fault current exceeds the MCB's magnetic trip threshold. A single high-impedance joint can make a circuit fail to disconnect in 0.4s — and you won't know until there's a fault."],
      diagram:{type:'comparison',svgId:'grounding-types-adv-diagram'}
    },
    sectorNotes:{res:'Residential: usually TT (rural India) or TN-C-S (urban/utility PME). RCD mandatory for TT. Main bonding to water and gas pipes at meter position.',com:'Commercial: TN-S preferred (customer transformer). Separate N and PE bars at main switchboard. Earth electrode as backup reference.',dc:'Data centre: TN-S mandatory. Isolated ground (IG) bus for sensitive IT equipment. Clean earth and dirty earth separation. No IT system for data halls (continuity provided by UPS, not earthing).',ind:'Industrial: TN-S for general. High-resistance grounding (HRG) for 480V/690V systems to limit arc flash energy. IT for critical continuous processes.',og:'Offshore: IT system common (isolated neutral generators). First fault detection via IMD. Onshore: TN-S with high-resistance neutral grounding for medium voltage.',hc:'Hospital: TN-S for general. IT system mandatory for Group 2 medical locations (OTs, ICUs). IMD per IEC 61557-8. Supplementary equipotential bonding in all patient areas. Touch voltage limit 25V.'},
    standards:{
      IS:[{clause:'IS 732 Cl.3',title:'Earthing arrangements — TN, TT, IT definitions',note:'Indian standard classification of earthing systems'},{clause:'IS 3043 Cl.3',title:'Code of practice for earthing — system types',note:'Detailed earthing system design including electrode requirements per type'}],
      NEC:[{clause:'NEC 250.4',title:'General requirements for grounding and bonding',note:'Solidly grounded (TN) and ungrounded (IT) system requirements'},{clause:'NEC 250.36',title:'High-impedance grounded neutral systems',note:'Industrial IT-equivalent with neutral grounding resistor'}],
      IEC:[{clause:'IEC 60364-1 Cl.312.2',title:'System earthing — TN, TT, IT classification',note:'Definitive international classification of earthing systems'},{clause:'IEC 60364-4-41',title:'Protection against electric shock',note:'Disconnection times and protection requirements per earthing system type'}]
    },
    quiz:[]
  }
];

window.TOPICS_L2 = TOPICS_L2;
