window.PROJECT_WORKFLOWS = [
  {
    id: "p1",
    title: "500kVA Commercial Facility Design",
    description: "End-to-End electrical design workflow for a mid-sized commercial building, starting from broad load assumptions down to breaker sizing.",
    cover: "🏢",
    steps: [
      {
        stepNum: 1,
        title: "Load Calculation & Demand",
        desc: "Calculate total lighting, HVAC, and power receptacle loads using specific W/sq.m density factors. Apply diversity factors to find Maximum Demand.",
        actionBtn: "Review Load Density Table",
        actionFn: "navigateTo('topic', 't41')"
      },
      {
        stepNum: 2,
        title: "Transformer Sizing",
        desc: "Size the transformer so that the Maximum Demand does not exceed 80% of its rated capacity (to allow for future expansion and ideal efficiency).",
        actionBtn: "Launch Transformer Calculator",
        actionFn: "navigateTo('calc')"
      },
      {
        stepNum: 3,
        title: "Main Incomer Cable & Breaker",
        desc: "Calculate the secondary Full Load Current (FLC), size the Air Circuit Breaker (ACB), and select multiple runs of XLPE cables to handle the ampacity.",
        actionBtn: "View Cable Sizing Guide",
        actionFn: "navigateTo('topic', 't15')"
      },
      {
        stepNum: 4,
        title: "Short Circuit & Earthing",
        desc: "Calculate the prospective fault current at the Main LT panel and design the earth mat grid configuration.",
        actionBtn: "Launch Fault Calculator",
        actionFn: "navigateTo('calc')"
      }
    ]
  },
  {
    id: "p2",
    title: "Industrial Motor Control Center (MCC)",
    description: "Designing the power architecture for a heavy industrial plant using VFDs, Soft Starters, and DOLs.",
    cover: "🏭",
    steps: [
      {
        stepNum: 1,
        title: "Motor Load List",
        desc: "Aggregate all motors. Categorize by starting method (DOL, Star-Delta, VFD, Soft Starter) to determine starting profiles.",
        actionBtn: "Review Starting Methods",
        actionFn: "navigateTo('topic', 't28')"
      },
      {
        stepNum: 2,
        title: "Voltage Drop During Start",
        desc: "The largest motor starting DOL will cause a severe voltage dip. Ensure V-drop is < 15% at the motor terminals.",
        actionBtn: "Motor FLC Calculator",
        actionFn: "navigateTo('calc')"
      },
      {
        stepNum: 3,
        title: "Type 2 Coordination",
        desc: "Select the MPCB, Contactor, and Overload relay such that a short circuit does not damage the contactor (Type 2 Coordination).",
        actionBtn: "Switchgear Sizing",
        actionFn: "navigateTo('topic', 't24')"
      }
    ]
  }
];
