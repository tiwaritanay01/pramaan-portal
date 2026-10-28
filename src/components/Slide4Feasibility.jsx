import React from 'react';
import SlideShell from './SlideShell';
import { 
  CheckCircle2, 
  Clock,
  ShieldCheck,
  Zap,
  DollarSign
} from 'lucide-react';

export default function Slide4Feasibility() {
  const deploymentPhases = [
    {
      num: '01',
      title: 'Rules Setup',
      bullets: [
        'Load AICTE 2024–27 Rules',
        'Set Document Checklists'
      ]
    },
    {
      num: '02',
      title: 'Safe Testing',
      bullets: [
        'Test Sample College Files',
        'DigiLocker Test Sandbox'
      ]
    },
    {
      num: '03',
      title: 'Regional Pilot',
      bullets: [
        'Pilot in 1 Regional Office',
        'Train Officers on Real Files'
      ]
    },
    {
      num: '04',
      title: 'All-India Scale',
      bullets: [
        'Deploy across 10,000+ Colleges',
        'Continuous Support & Updates'
      ]
    }
  ];

  const pillars = [
    {
      title: 'EASY TO ADOPT',
      icon: Zap,
      content: '• Works inside current AICTE portal\n• Simple screens for officers & colleges\n• Zero disruption to ongoing work'
    },
    {
      title: 'FAST & ACCURATE',
      icon: Clock,
      content: '• Reads complex files in seconds\n• Spots edited dates & fake stamps\n• Clear explanations for every flag'
    },
    {
      title: 'SAVES MONEY',
      icon: DollarSign,
      content: '• Zero new hardware cost\n• Saves ₹120+ Cr in travel & paper\n• Affordable to run year after year'
    },
    {
      title: '100% LEGAL & SAFE',
      icon: ShieldCheck,
      content: '• Follows AICTE Act & NEP 2020\n• Protects private data by law\n• AICTE officers keep full final control'
    }
  ];

  return (
    <SlideShell 
      id="slide-4" 
      slideNumber={4} 
      title="FEASIBILITY AND VIABILITY"
      subtitle="Why This System is Practical to Roll Out (Feasible) and Highly Valuable to Run (Viable)"
    >
      <div className="feasibility-top-grid">
        {/* PHASE-WISE DEPLOYMENT ROADMAP */}
        <div className="deployment-roadmap-box">
          <div className="section-subhead-banner" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ background: '#0284c7', color: '#fff', padding: '0.15rem 0.6rem', borderRadius: '4px', fontSize: '0.78rem' }}>HOW WE ROLL IT OUT</span>
            <span>Feasible 4-Step Rollout Plan</span>
          </div>

          <div className="roadmap-steps-flow">
            {deploymentPhases.map((phase) => (
              <div key={phase.num} className="roadmap-step">
                <div className="roadmap-step-badge">{phase.num}</div>
                <div className="roadmap-step-title">{phase.title}</div>
                <ul className="roadmap-step-bullets">
                  {phase.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '0.65rem',
            padding: '0.55rem 0.95rem',
            background: '#eff6ff',
            borderRadius: 'var(--radius-sm)',
            border: '1.5px solid #bfdbfe',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}>
            <CheckCircle2 size={18} color="#1d4ed8" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.92rem', color: '#1e3a8a', lineHeight: 1.4, fontWeight: 500, margin: 0, textAlign: 'justify' }}>
              <strong>Zero Extra Hardware (Feasible):</strong> Runs 100% as a software update on top of the existing AICTE website. No colleges or offices need to buy new servers, computers, or expensive equipment.
            </p>
          </div>
        </div>

        {/* REDESIGNED INTUITIVE FEASIBILITY & VIABILITY COMPARISON */}
        <div className="chart-box-card">
          <div className="chart-header-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0b2545' }}>Approval Time: Old Manual Way vs SATYA-SETU</span>
            <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '0.75rem', fontWeight: 800, padding: '0.18rem 0.75rem', borderRadius: '999px', border: '1px solid #86efac' }}>Measurable Viability</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
            {/* Old Way Box */}
            <div style={{ background: '#fef2f2', border: '1.5px solid #fca5a5', borderRadius: '8px', padding: '0.65rem' }}>
              <div style={{ background: '#e11d48', color: '#ffffff', textAlign: 'center', padding: '0.3rem', borderRadius: '5px', fontWeight: 800, fontSize: '0.92rem' }}>
                66 DAYS (Old Way)
              </div>
              <ul style={{ margin: '0.45rem 0 0 0', paddingLeft: '1.1rem', fontSize: '0.84rem', color: '#7f1d1d', lineHeight: 1.5 }}>
                <li><strong>24.5d:</strong> Postal reply delays</li>
                <li><strong>12.0d:</strong> Missing paper fixes</li>
                <li><strong>14.0d:</strong> Physical audit travel</li>
              </ul>
            </div>

            {/* AI Way Box */}
            <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '8px', padding: '0.65rem' }}>
              <div style={{ background: '#15803d', color: '#ffffff', textAlign: 'center', padding: '0.3rem', borderRadius: '5px', fontWeight: 800, fontSize: '0.92rem' }}>
                &lt; 7 DAYS (SATYA-SETU)
              </div>
              <ul style={{ margin: '0.45rem 0 0 0', paddingLeft: '1.1rem', fontSize: '0.84rem', color: '#14532d', lineHeight: 1.5 }}>
                <li><strong>&lt; 10s:</strong> Instant file reading</li>
                <li><strong>0 wait:</strong> Direct DigiLocker link</li>
                <li><strong>89% delay eliminated!</strong></li>
              </ul>
            </div>
          </div>

          {/* Proof Badges */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.65rem' }}>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px', padding: '0.5rem' }}>
              <div style={{ color: '#1d4ed8', fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase' }}>FEASIBILITY: ₹0 HARDWARE</div>
              <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.78rem', color: '#1e3a8a', lineHeight: 1.35 }}>
                Runs 100% on existing AICTE web servers. Zero new computers or equipment required.
              </p>
            </div>
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '6px', padding: '0.5rem' }}>
              <div style={{ color: '#92400e', fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase' }}>VIABILITY: ₹120+ CR SAVED</div>
              <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.78rem', color: '#78350f', lineHeight: 1.35 }}>
                Slashes travel allowances, paper printing, and postal courier costs across 10,000+ colleges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 VIABILITY PILLARS (BOTTOM ROW) */}
      <div className="viability-pillars-grid">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="viability-card">
              <div className="viability-icon-circle">
                <Icon size={22} />
              </div>
              <h4 className="viability-card-title">{p.title}</h4>
              <p className="viability-card-content" style={{ whiteSpace: 'pre-line' }}>
                {p.content}
              </p>
            </div>
          );
        })}
      </div>
    </SlideShell>
  );
}
