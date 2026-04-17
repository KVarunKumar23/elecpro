# ⚡ ElecPro — Electrical Engineering Learning Portal

A comprehensive, offline-capable electrical engineering learning portal.

## 📊 Contents
- **46 topics** across 4 levels (Fundamentals → Core Design → Equipment Sizing → Advanced)
- **15 calculators** with formula-first UX and Challenge Mode
- **250+ quiz questions** (MCQ, T/F, Scenario, Calculation-based)
- **3 standards**: IS/NBC/CEA (India), NEC/NFPA/IEEE (USA), IEC (International)
- **7 sector tracks**: Residential, Commercial, Data Centre, Industrial, Oil & Gas, Healthcare, Green Design
- **4 special modes**: Design Thinking, Practice Mode, Mistakes Database, Site Reality

## 🚀 How to Use

### Offline
Open `index.html` directly in any browser. No server, no build step, no internet needed (after first load caches Google Fonts).

### GitHub Pages
1. Push this repository to GitHub
2. Go to **Settings → Pages → Source → main branch → / (root)**
3. Your portal will be live at `https://yourusername.github.io/elecpro`

### Custom Domain
Add a `CNAME` file with your domain name, then configure DNS.

## 📁 File Structure
```
/
├── index.html              ← Single entry point
├── css/
│   └── style.css           ← Complete design system (dark + light theme)
├── js/
│   ├── data_core.js        ← Standards, sectors, search intent map
│   ├── topics_L1.js        ← 12 Level 1 Fundamentals topics
│   ├── topics_L2.js        ← 12 Level 2 Core Design topics
│   ├── topics_L3.js        ← 15 Level 3 Equipment Sizing topics
│   ├── topics_L4.js        ← 12 Level 4 Advanced topics
│   └── app.js              ← Router, render engine, search, theme
└── assets/
    └── icons/              ← Topic icons (SVG)
```

## 🔨 Build Phases
| Phase | Content | Status |
|-------|---------|--------|
| P1 | Shell, navigation, data architecture | ✅ Complete |
| P2 | Level 1 topics with full content | 🔜 Next |
| P3 | Level 2 topics + 6 calculators | 🔜 |
| P4 | Level 3 topics + Green track + Projects | 🔜 |
| P5 | Level 4 topics + Polish + Deploy | 🔜 |

## 📐 Standards
| Standard | Country | Key References |
|----------|---------|----------------|
| IS / NBC / CEA | India | IS 3961, IS 3043, IS 2026, NBC 2016 |
| NEC / NFPA / IEEE | USA | NEC Art. 220/310/430/690, NFPA 70E |
| IEC | International | IEC 60364, IEC 60909, IEC 60076 |
