import React from 'react';
import SlideShell from './SlideShell';
import { 
  FileText, 
  Database, 
  ShieldAlert, 
  Radio, 
  CheckCircle2, 
  Layout, 
  Server, 
  ShieldCheck, 
  ChevronRight, 
  Users, 
  Lock, 
  SlidersHorizontal,
  Search,
  Scan,
  Cpu,
  Zap,
  MapPin,
  Activity,
  GitCompare,
  Binary,
  Layers,
  Shield,
  FileSearch
} from 'lucide-react';

export default function Slide3TechnicalApproach() {
  const backendFlowSteps = [
    {
      num: '01',
      tag: 'FILE INTAKE',
      role: 'Step 1',
      title: 'Read Documents',
      icon: FileText,
      color: '#0284c7',
      bg: '#e0f2fe',
      bullets: [
        'Reads PDFs, Scans & Photos',
        'Checks Required File List'
      ],
      infographic: {
        spec: 'PaddleOCR Reader',
        throughput: '50+ pgs/min Throughput',
        icon: Zap
      }
    },
    {
      num: '02',
      tag: 'PAST RECORDS',
      role: 'Step 2',
      title: 'Check History',
      icon: Database,
      color: '#0d9488',
      bg: '#ccfbf1',
      bullets: [
        'Checks Past Approvals',
        'Flags Duplicate Teachers'
      ],
      infographic: {
        spec: 'Cross-College Database',
        throughput: '< 25ms Fast Search',
        icon: Database
      }
    },
    {
      num: '03',
      tag: 'TAMPER CHECK',
      role: 'Step 3',
      title: 'Find Alterations',
      icon: ShieldAlert,
      color: '#ea580c',
      bg: '#fff7ed',
      bullets: [
        'Spots Changed Dates & Text',
        'Catches Copied Seals'
      ],
      infographic: {
        spec: 'Tamper Engine',
        throughput: '99.4% Detection Rate',
        icon: ShieldAlert
      }
    },
    {
      num: '04',
      tag: 'GOVT CONNECT',
      role: 'Step 4',
      title: 'Govt Portal Check',
      icon: Radio,
      color: '#16a34a',
      bg: '#f0fdf4',
      bullets: [
        'Checks DigiLocker Degrees',
        'Direct State Land Check'
      ],
      infographic: {
        spec: 'DigiLocker & Land APIs',
        throughput: 'Safe & Encrypted Link',
        icon: Radio
      }
    },
    {
      num: '05',
      tag: 'OFFICER REPORT',
      role: 'Step 5',
      title: 'Decision Summary',
      icon: CheckCircle2,
      color: '#7c3aed',
      bg: '#f5f3ff',
      bullets: [
        'Clear Deficiency Score',
        'Full Summary for Review'
      ],
      infographic: {
        spec: 'Decision Dossier Pack',
        throughput: '100% Permanent History',
        icon: CheckCircle2
      }
    }
  ];

  const techStackCols = [
    {
      title: 'USER WEB PORTAL',
      subtitle: 'For Colleges & Scrutiny Officers',
      icon: Layout,
      color: '#1d4ed8',
      bg: '#eff6ff',
      pills: [
        { label: 'React Portal', icon: Zap },
        { label: 'Campus Maps', icon: MapPin },
        { label: 'Live Updates', icon: Activity },
        { label: 'File Diff View', icon: GitCompare }
      ],
      bullets: [
        'Simple file upload for colleges',
        'Clean review screen for officers'
      ]
    },
    {
      title: 'SECURE BACKEND',
      subtitle: 'Fast Cloud Processing Pipeline',
      icon: Server,
      color: '#0d9488',
      bg: '#ccfbf1',
      pills: [
        { label: 'FastAPI Engine', icon: Server },
        { label: 'Cloud Database', icon: Database },
        { label: 'Fast Search', icon: Binary },
        { label: 'Task Queues', icon: Layers }
      ],
      bullets: [
        'Processes files in seconds',
        'Handles 10,000+ colleges smoothly'
      ]
    },
    {
      title: 'SATYA-SETU SECURITY',
      subtitle: 'Tamper Checking & Data Protection',
      icon: ShieldCheck,
      color: '#ea580c',
      bg: '#fff7ed',
      pills: [
        { label: 'Tamper Check', icon: Scan },
        { label: 'Room Analyzer', icon: FileSearch },
        { label: 'Bank Encryption', icon: Shield },
        { label: 'Audit Ledger', icon: Lock }
      ],
      bullets: [
        'Catches edited text & fake dates',
        'Keeps college data private & safe'
      ]
    }
  ];

  return (
    <SlideShell 
      id="slide-3" 
      slideNumber={3} 
      title="TECHNICAL APPROACH & SYSTEM ARCHITECTURE"
      subtitle="Step-by-Step Document Flow, Smart Verification Engine & Web Technology"
    >
      <div className="slide3-fixed-layout">
        {/* TOP METHODOLOGY BANNER */}
        <div className="slide3-methodology-banner">
          <div className="slide3-methodology-badge">HOW IT WORKS</div>
          <p className="slide3-methodology-text">
            The system reads college files, compares them with past records, flags fake or edited pages, verifies details with government databases, and gives officers a simple, clear decision report.
          </p>
        </div>

        {/* TOP SECTION: BACKEND PROCESSING & DISTRIBUTED PIPELINE FLOW */}
        <div className="slide3-backend-section">
          <div className="slide3-section-title-row">
            <div className="slide2-header-badge blue">SIMPLE 5-STEP FLOW</div>
            <h3 className="slide3-section-heading">How College Documents Move Through the System</h3>
          </div>

          <div className="slide3-flow-pipeline">
            {backendFlowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.num}>
                  <div className="slide3-flow-card">
                    <div className="slide3-flow-card-top">
                      <span className="slide3-flow-num">{step.num}</span>
                      <span className="slide3-flow-tag">{step.tag}</span>
                    </div>

                    <div className="slide3-flow-icon-wrap" style={{ background: step.bg, color: step.color }}>
                      <Icon size={20} />
                    </div>

                    <h4 className="slide3-flow-card-title">{step.title}</h4>

                    <div className="slide3-flow-role-badge">
                      <Users size={10} />
                      <span>{step.role}</span>
                    </div>

                    <ul className="slide3-flow-bullets">
                      {step.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="slide3-flow-bullet-item">
                          <CheckCircle2 size={11} color={step.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {step.infographic && (
                      <div className="slide3-flow-infographic-card" style={{ borderColor: `${step.color}35`, background: step.bg }}>
                        <div className="flow-infographic-row" style={{ color: step.color }}>
                          {React.createElement(step.infographic.icon, { size: 12, style: { flexShrink: 0 } })}
                          <span>{step.infographic.spec}</span>
                        </div>
                        <div className="flow-infographic-sub">
                          <span>{step.infographic.throughput}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {idx < backendFlowSteps.length - 1 && (
                    <div className="slide3-flow-connector" aria-hidden="true">
                      <ChevronRight size={16} className="pipeline-arrow" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* OPERATIONAL GOVERNANCE & SAFEGUARD RIBBON */}
          <div className="slide3-guardrail-ribbon">
            <div className="guardrail-left">
              <ShieldCheck size={18} color="#15803d" />
              <strong>Human in Control:</strong>
              <span>SATYA-SETU suggestions are only advisory flags. All final approval decisions remain strictly with AICTE officers.</span>
            </div>
            <div className="guardrail-right">
              <span className="guardrail-badge">OFFICER IN CONTROL</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: PRODUCTION TECH STACK */}
        <div className="slide3-techstack-section">
          <div className="slide3-section-title-row">
            <div className="slide2-header-badge green">SYSTEM SETUP</div>
            <h3 className="slide3-section-heading">How the System is Built for Everyday Use</h3>
          </div>

          <div className="slide3-techstack-grid">
            {techStackCols.map((col, idx) => {
              const Icon = col.icon;
              return (
                <div key={idx} className="slide3-techstack-card">
                  <div className="slide3-techstack-card-header">
                    <div className="slide3-techstack-icon" style={{ background: col.bg, color: col.color }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="slide3-techstack-card-title">{col.title}</h4>
                      <div className="slide3-techstack-card-sub">{col.subtitle}</div>
                    </div>
                  </div>

                  <div className="techstack-infographic-pills">
                    {col.pills.map((pill, pIdx) => (
                      <div key={pIdx} className="techstack-pill-item">
                        {React.createElement(pill.icon, { size: 12, color: col.color, style: { flexShrink: 0 } })}
                        <span>{pill.label}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="slide3-techstack-bullets">
                    {col.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="slide3-techstack-bullet-item">
                        <CheckCircle2 size={12} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
