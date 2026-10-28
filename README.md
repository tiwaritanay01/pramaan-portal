# Galacticos | SIH 2026 Presentation & Widescreen Slide Engine

AI-Powered Multi-Agency Emergency Response Orchestration presentation built for **Smart India Hackathon 2026** (Problem Statement: Open Innovation).

This repository features both the live 16:9 interactive web presentation and the automated headless slide-to-PowerPoint export engine.

---

## 🚀 Reusable Antigravity Skill: `presentation-builder`

This project is packaged as a reusable Antigravity skill located at:
**[`.agents/skills/presentation-builder/`](.agents/skills/presentation-builder/)**

### Capabilities
- **Universal 16:9 Slide Canvas**: Implements strict 1920 × 1080 fixed height budgeting (~920px interior content) with zero vertical scrollbars or cutoffs.
- **Publication-Grade Typography**: Times New Roman layout with rigorous typographic hierarchy.
- **6 Core Slide Archetypes**:
  1. *Title & Hero*: Team metadata, problem ID, topic, and 3D domain asset.
  2. *Problem, Solution & USPs*: 3 Problem Cards + 5-Stage Orchestration Pipeline with Role Badges, Control Tags, and 118px visuals + 4 USPs & Unified Status Ribbon.
  3. *Technical Approach*: Methodology banner + 5-stage backend pipeline + operational guardrails + 3-column tech stack.
  4. *Feasibility & Viability*: 4-phase deployment plan + Zero Capex badge + empirical benchmark bar chart + 4 viability pillars.
  5. *Impact & Multi-Stakeholder Benefits*: 4 macro KPI cards + 5-stakeholder value matrix + financial profit callouts + status dot ribbon.
  6. *Research & References*: Academic citations table + system comparison matrix + bottlenecks table + pitch video QR code card.
- **Automated PPTX Generation**: Headless Chrome Puppeteer script captures slides at 1920×1080 and compiles them with `pptxgenjs` into a native `.pptx` presentation deployed to your Desktop & Downloads.

---

## 🛠️ Development & Export Commands

```bash
# Start local dev server
npm run dev

# Build production React bundle
npm run build

# Capture high-res 1920x1080 slide screenshots
node .agents/skills/presentation-builder/scripts/capture_slides.js

# Compile and auto-deploy PowerPoint presentation (.pptx)
node .agents/skills/presentation-builder/scripts/generate_pptx.js
```

---

## 📁 Skill Structure
```text
.agents/skills/presentation-builder/
├── SKILL.md                 # Primary Antigravity skill instructions
├── references/              # Detailed guides
│   ├── slide_archetypes.md  # Detailed schemas for the 6 core slides
│   ├── layout_and_styling.md# Height budgeting, CSS tokens & typography
│   └── export_pipeline.md   # Puppeteer & PPTX export architecture
├── scripts/                 # Executable automation tools
│   ├── capture_slides.js    # 1920x1080 headless screenshot engine
│   └── generate_pptx.js     # Native PPTX compiler & multi-destination deployer
└── templates/               # Boilerplate components & tokens
    ├── SlideShell.jsx       # Base 16:9 slide frame component
    ├── presentation_tokens.css # Design system tokens & CSS rules
    └── Slide1Title.jsx ... Slide6Research.jsx # Slide archetypes
```
