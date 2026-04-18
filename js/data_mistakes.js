window.MISTAKE_DB = [
  {
    id: "m1",
    title: "Undersizing the Neutral in High Harmonic Loads",
    category: "Cable Sizing",
    severity: "High",
    pitfall: "Assuming the neutral carries zero current in a balanced 3-phase system, leading to the selection of a half-sized neutral conductor. In modern commercial spaces heavily populated with SMPS, LEDs, and VFDs, triplen harmonics add up algebraically in the neutral.",
    remedy: `
      <p>The neutral must be <strong>fully rated</strong> (100% of phase conductor), or even oversized (150%-200%) if total harmonic distortion (THDi) exceeds 33%.</p>
      <div class="std-box">
        <p class="show-is"><strong>Standard Reference:</strong> IS 732 Clause 4.3 & IS 3043</p>
        <p class="show-nec"><strong>Standard Reference:</strong> NEC 310.15(E)(3)</p>
        <p class="show-iec"><strong>Standard Reference:</strong> IEC 60364-5-52</p>
      </div>
    `
  },
  {
    id: "m2",
    title: "Incorrect MCCB Settings on Transformer Secondaries",
    category: "Protection Design",
    severity: "Critical",
    pitfall: "Setting the LT (Low Tension) main incoming breaker's long-time pick-up precisely at the transformer's full-load current (FLC). This causes severe nuisance tripping during transformer magnetizing inrush or temporary safe overload conditions.",
    remedy: `
      <p>Set the Long Time Delay (Ir) to 1.1x to 1.25x of the secondary FLC depending on regulations. The instantaneous trip (Isd/Ii) should be carefully coordinated above the peak inrush current (typically 10-12x FLC).</p>
      <div class="std-box">
        <p class="show-nec"><strong>Standard Reference:</strong> NEC 450.3</p>
        <p class="show-is"><strong>Standard Reference:</strong> IS 1180 Guidelines</p>
      </div>
    `
  },
  {
    id: "m3",
    title: "Ignoring Voltage Drop during Motor Starting",
    category: "Motor Sizing",
    severity: "Medium",
    pitfall: "Sizing the cable purely on the motor's full-load current (FLC) and steady-state voltage drop limits, completely neglecting the massive 6x-8x Direct-On-Line (DOL) starting current. This causes a severe momentary voltage dip, potentially failing the contactor coil to hold.",
    remedy: `
      <p>Perform two strict voltage drop calculations: one for steady-state running (max 5%) and one for motor starting (max 15%). Ensure the terminal voltage during starting remains above 85% to guarantee contactor stability.</p>
      <br>
      <button class="action-btn" onclick="navigateTo('calc')">Launch Motor Calculator</button>
    `
  },
  {
    id: "m4",
    title: "Daisy-Chaining Protective Earth (PE)",
    category: "Earthing",
    severity: "Critical",
    pitfall: "Looping the equipment grounding conductor (PE) from one receptacle or equipment chassis to the next in a series daisy-chain. If the connection fails at device #2, all devices downstream completely lose their earth path.",
    remedy: `
      <p>Always use a radial or 'star' earthing topology. Connect each device directly to the grounding busbar, or use a proper grounding pigtail so the continuity of the circuit is not dependent on the device itself.</p>
      <div class="std-box">
        <p class="show-is"><strong>Standard Reference:</strong> IS 3043</p>
        <p class="show-nec"><strong>Standard Reference:</strong> NEC 250</p>
      </div>
    `
  }
];
