# ⚡ ElecPro v4 — Electrical Engineering Learning Portal

A comprehensive, offline-capable electrical design learning platform covering beginner-to-advanced concepts with interactive calculators, 3D diagrams, and multi-standard compliance across Indian (IS/NBC), American (NEC/IEEE), and International (IEC) codes.

![Platform](https://img.shields.io/badge/Platform-Static_HTML%2FJS-blue)
![Topics](https://img.shields.io/badge/Topics-58-green)
![Calculators](https://img.shields.io/badge/Calculators-14-orange)
![SVG_Diagrams](https://img.shields.io/badge/SVG_Diagrams-116-purple)
![Standards](https://img.shields.io/badge/Standards-IS%20%7C%20NEC%20%7C%20IEC-red)

---

## 📊 What's Inside

| Feature | Count | Details |
|---------|-------|---------|
| **Topics** | 58 | Across 4 learning levels (L1–L4) |
| **Calculators** | 14 | Formula-first UX, step-by-step solutions |
| **SVG Diagrams** | 116 | Technical schematics, SLDs, comparison charts |
| **Quiz Questions** | 1000+ | MCQ, True/False, Scenario, Calculation-based |
| **Standards** | 3 | IS/NBC/CEA · NEC/NFPA/IEEE · IEC |
| **Sector Tracks** | 7 | Residential · Commercial · Data Centre · Industrial · Oil & Gas · Healthcare · Green |
| **Search Intents** | 55 | Natural-language topic discovery |

---

## 🏗️ Topic Levels

### Level 1 — Fundamentals (12 topics)
Basic electrical theory, Ohm's law, AC/DC systems, power triangle, safety basics, electrical symbols & drawing reading.

### Level 2 — Core Design (13 topics)
Load calculation, cable sizing, voltage drop, earthing systems, protection devices, power factor correction, panel schedules, demand factors, load profiling, conduit & raceway, codes & standards, energy auditing, **grounding system types (TN-S, TN-C-S, TT, IT)**.

### Level 3 — Equipment & Systems (19 topics)
Transformer selection, DG set sizing, UPS design, lighting design, motor starting, HVAC electrical, switchgear & MDB, busbar design, cable tray engineering, breaker coordination, EV charging, CT/PT selection, BESS integration, energy monitoring, troubleshooting, **SPD selection & coordination**, **fire alarm electrical design**, **revenue metering CT**, **cable pull tension calculation**.

### Level 4 — Advanced & Specialist (14 topics)
Short circuit analysis, relay coordination, TCC/arc flash, hazardous area classification, DC redundancy, solar PV design, lightning protection, arc flash analysis, power quality & harmonics, green building compliance, ETAP simulation, smart load management, **HV neutral earthing methods**, **capacitor bank & APFC design**.

> **Bold** items are newly added topics with full depth: beginner + advanced theory, IS/NEC/IEC formulas, worked examples, sector notes, common mistakes, interview questions, and site tips.

---

## 🔧 Calculators

| Calculator | Standard Ref |
|-----------|-------------|
| Load Calculation — Maximum Demand | NBC 2016 Part 8 / NEC 220 / IEC 60364 |
| Cable Sizing (Current & VD) | IS 3961 / NEC 310 / IEC 60364-5-52 |
| Voltage Drop | IS 732 / NEC 210.19 / IEC 60364-5-52 |
| Short Circuit (kA) | IS 13234 / IEEE 141 / IEC 60909 |
| Earthing (Electrode Design) | IS 3043 / NEC 250 / IEC 60364-5-54 |
| Power Factor Correction (kVAr) | IS 13585 / NEC 460 / IEC 60831 |
| Transformer Sizing | IS 2026 / IEEE C57 / IEC 60076 |
| DG Set Sizing | IS 4722 / NFPA 110 / ISO 8528 |
| UPS Battery Sizing | IS 1651 / IEEE 1184 / IEC 62040 |
| Lighting (Lumen Method) | IS 3646 / IES HB-10 / EN 12464 |
| Motor Starting VD | IS 325 / NEC 430 / IEC 60034 |
| Conduit Fill | IS 9537 / NEC 344-362 / IEC 61386 |
| Demand Factor Lookup | NBC 2016 / NEC 220.42 / IEC 60364 |
| Diversity Factor | IS 732 / NEC 220.61 / IEC 60364 |

---

## 🚀 How to Use

### Offline (Zero Setup)
```
Open index.html in any modern browser.
No server, no build step, no internet required.
```

### Local Development Server
```bash
# Python
python -m http.server 8090

# Node.js
npx serve -l 8090
```

### GitHub Pages
1. Push this repository to GitHub
2. Go to **Settings → Pages → Source → main branch → / (root)**
3. Portal live at `https://yourusername.github.io/elecpro`

### Custom Domain
Add a `CNAME` file with your domain, then configure DNS A/CNAME records.

---

## 📁 File Structure

```
elecpro-v4/
├── index.html                 ← Single entry point (SPA shell)
├── README.md
├── css/
│   ├── style.css              ← Design system (dark + light theme, responsive)
│   └── effects.css            ← Glassmorphism, glow, animations
├── js/
│   ├── data_core.js           ← Standards config, sectors, INTENT_MAP (55 entries)
│   ├── topics_L1.js           ← 12 Level 1 — Fundamentals
│   ├── topics_L2.js           ← 13 Level 2 — Core Design
│   ├── topics_L3.js           ← 19 Level 3 — Equipment & Systems
│   ├── topics_L4.js           ← 14 Level 4 — Advanced & Specialist
│   ├── svgs.js                ← 116 inline SVG technical diagrams
│   ├── quiz_bank.js           ← 1000+ quiz questions per topic
│   ├── calculators.js         ← 14 engineering calculators
│   ├── app.js                 ← SPA router, renderer, search, theme engine
│   ├── effects.js             ← UI effects & particle system
│   ├── animations.js          ← Scroll & interaction animations
│   └── three-scenes.js        ← 3D interactive diagram engine (Three.js)
```

---

## 📐 Standards Coverage

| Standard Framework | Region | Key References |
|-------------------|--------|----------------|
| **IS / NBC / CEA** | India | IS 3043, IS 3961, IS 2026, IS 732, IS 13585, IS 13234, NBC 2016, CEA Regulations |
| **NEC / NFPA / IEEE** | USA | NEC Art. 220/250/310/430/460/690, NFPA 70E/72/110, IEEE 141/142/519/1584 |
| **IEC** | International | IEC 60364, IEC 60909, IEC 60076, IEC 61439, IEC 61643, IEC 60831, IEC 62305 |

---

## 🎨 Key Features

- **🌗 Dark / Light Theme** — OLED-friendly dark mode with smooth toggle
- **🔍 Smart Search** — 55 intent phrases map natural queries to topics
- **📱 Responsive** — Works on desktop, tablet, and mobile
- **🌍 Multi-Standard** — Switch IS ↔ NEC ↔ IEC globally; formulas & references update dynamically
- **🏭 Sector Tracks** — Filter content by industry (Residential → Oil & Gas)
- **📊 116 SVG Diagrams** — Inline, theme-aware technical illustrations
- **🎮 3D Diagrams** — Interactive Three.js visualisations for select topics
- **🧮 14 Calculators** — Formula shown first, then inputs, then step-by-step result
- **❌ Mistakes Database** — Real-world design errors with explanations
- **💡 Site Reality Tips** — Field experience notes from practising engineers
- **🎓 Interview Prep** — Common interview questions per topic

---

## 📋 Architecture

```
Single-Page Application (SPA)
├── No framework (vanilla JS)
├── No build step required
├── Hash-based routing (#home, #learn, #topic:cable-sizing, #calc)
├── Dynamic rendering from JS data objects
├── Global state: standard (IS/NEC/IEC), theme (dark/light), sector filter
└── Lazy-loaded Three.js for 3D diagrams (CDN)
```

---

## 🔄 Recent Updates (v4.2)

- ✅ Updated IEC 60439 → **IEC 61439** (current standard)
- ✅ Search intent map expanded from 12 → **55 entries**
- ✅ Added **7 new full-depth topics**: Grounding Types, SPD, Fire Alarm, Metering CT, Cable Pull, HV Earthing, Capacitor Bank
- ✅ Created **14 new SVG diagrams** (116 total, 0 missing references)
- ✅ All topics include IS, NEC, and IEC formulas with worked examples
- ✅ Sector-specific notes for Industrial, Oil & Gas, Data Centre, Healthcare, and Commercial

---

## 📜 License

This project is for educational purposes. Standards references are cited for learning — always refer to the latest official standard documents for professional design work.

---

> *Built for electrical design engineers who want to learn, calculate, and master — from first principles to field-ready expertise.*
