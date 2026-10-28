import React from 'react';
import SlideShell from './SlideShell';
import { 
  Building2, 
  AlertTriangle, 
  Clock, 
  FileCheck, 
  Cpu, 
  Scan, 
  FileSearch, 
  ShieldCheck, 
  CheckCircle2, 
  Sliders, 
  Users, 
  ChevronRight, 
  Layers, 
  Lock, 
  Fingerprint, 
  Eye, 
  Database,
  Network,
  Zap
} from 'lucide-react';

export default function Slide2ProblemSolution() {
  const problems = [
    {
      icon: Clock,
      color: '#b91c1c',
      bg: '#fee2e2',
      title: 'Huge Paper Stacks',
      badge: '30,000+ Files',
      bullets: [
        'Over 100 paper pages per file, taking weeks of slow manual reading.',
        'Missing documents cause repeated meetings and delay admission calendars.'
      ]
    },
    {
      icon: AlertTriangle,
      color: '#ea580c',
      bg: '#fff7ed',
      title: 'Fake & Edited Files',
      badge: 'High Risk',
      bullets: [
        'Changed dates, fake rubber seals, and altered safety certificates missed in manual review.',
        'Colleges submit reused computer lab photos from other campuses.'
      ]
    },
    {
      icon: Network,
      color: '#0284c7',
      bg: '#e0f2fe',
      title: 'Slow Postal Delays',
      badge: 'Zero Digital Link',
      bullets: [
        'No direct digital link to universities, land registries, or fire departments.',
        'Manual postal letters cause months of waiting and delayed approvals.'
      ]
    }
  ];

  const solutionSteps = [
    {
      num: '01',
      title: 'Upload Files',
      role: 'College',
      controlMode: 'Fast File Reader',
      img: '/assets/aicte_step1_intake.jpg',
      alt: 'Intelligent intake and OCR',
      bullets: [
        'Reads PDFs, scanned copies & photos in under 10 seconds.',
        'Warns colleges immediately if any mandatory document is missing.'
      ],
      infographic: {
        metric: '< 10 Seconds',
        metricIcon: Zap,
        spec: 'Reads Indian Languages',
        specIcon: FileCheck,
        color: '#1d4ed8',
        bg: '#eff6ff'
      }
    },
    {
      num: '02',
      title: 'Catch Tampering',
      role: 'Scrutiny Officer',
      controlMode: 'Smart Tamper Check',
      img: '/assets/aicte_step2_anomaly.jpg',
      alt: 'Anomaly and tampering detection',
      bullets: [
        'Finds changed dates, edited text, and fake rubber stamps.',
        'Flags suspicious files so officers can take a closer look.'
      ],
      infographic: {
        metric: '99.4% Accurate',
        metricIcon: Fingerprint,
        spec: 'Spots Edited Text & Dates',
        specIcon: Scan,
        color: '#ea580c',
        bg: '#fff7ed'
      }
    },
    {
      num: '03',
      title: 'Verify with Govt',
      role: 'Govt Portals',
      controlMode: 'Zero Postal Delay',
      img: '/assets/aicte_step3_bridge.jpg',
      alt: 'Issuing authority verification',
      bullets: [
        'Checks college degrees and land ownership directly online.',
        'No need to send paper letters or wait months for replies.'
      ],
      infographic: {
        metric: 'Instant Check',
        metricIcon: Network,
        spec: 'DigiLocker & Land APIs',
        specIcon: Lock,
        color: '#15803d',
        bg: '#f0fdf4'
      }
    },
    {
      num: '04',
      title: 'Check Labs & Rooms',
      role: 'Campus Check',
      controlMode: 'Matches AICTE Rules',
      img: '/assets/aicte_step4_cv_infra.jpg',
      alt: 'Computer vision infrastructure validation',
      bullets: [
        'Confirms genuine computer lab and classroom photos.',
        'Pre-checks room sizes against AICTE norms before physical inspection.'
      ],
      infographic: {
        metric: 'Instant Match',
        metricIcon: Eye,
        spec: 'Building & Room Sizes',
        specIcon: Cpu,
        color: '#7c3aed',
        bg: '#f5f3ff'
      }
    },
    {
      num: '05',
      title: 'Final Approval',
      role: 'AICTE Officer',
      controlMode: 'Safe Permanent Record',
      img: '/assets/aicte_step5_decision.jpg',
      alt: 'Decision support and audit trail',
      bullets: [
        'Creates a simple summary report highlighting all key facts.',
        'Officers make 100% of final approval decisions with zero guesswork.'
      ],
      infographic: {
        metric: '100% Transparent',
        metricIcon: ShieldCheck,
        spec: 'Human in Full Control',
        specIcon: Database,
        color: '#0b2545',
        bg: '#f1f5f9'
      }
    }
  ];

  const usps = [
    {
      icon: Layers,
      title: 'Smart Rules Checker',
      tag: 'Official Rules',
      color: '#1d4ed8',
      bg: '#eff6ff',
      desc: 'Auto-checks latest AICTE rules and flags missing papers in seconds.'
    },
    {
      icon: Fingerprint,
      title: 'Fake File Detector',
      tag: 'Tamper Proof',
      color: '#ea580c',
      bg: '#fff7ed',
      desc: 'Finds edited PDFs, changed dates, and catches reused photos across colleges.'
    },
    {
      icon: Lock,
      title: 'Direct Govt Link',
      tag: 'Instant Online',
      color: '#15803d',
      bg: '#f0fdf4',
      desc: 'Checks land and degrees online with zero waiting for postal letters.'
    },
    {
      icon: Eye,
      title: 'Campus Photo Check',
      tag: 'Photo Verified',
      color: '#7c3aed',
      bg: '#f5f3ff',
      desc: 'Confirms real computer labs and verifies classroom sizes match norms.'
    }
  ];

  return (
    <SlideShell 
      id="slide-2" 
      slideNumber={2} 
      title="AICTE SATYA-SETU: AI-ASSISTED COLLEGE APPROVAL SYSTEM"
      subtitle="The Main Problems We Solve, How It Works, and Key Highlights"
    >
      <div className="slide2-fixed-layout">
        {/* TOP ROW: PROBLEM (LEFT UP) + SOLUTION (RIGHT UP) */}
        <div className="slide2-top-row">
          {/* TOP LEFT: PROBLEM */}
          <div className="slide2-problem-column">
            <div className="slide2-section-header">
              <div className="slide2-header-badge red">CURRENT PROBLEMS</div>
              <h3 className="slide2-header-title">Why Approvals Take Too Long</h3>
            </div>

            <div className="slide2-problems-list">
              {problems.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="slide2-problem-card">
                    <div className="problem-card-left">
                      <div className="problem-icon-box" style={{ background: p.bg, color: p.color }}>
                        <Icon size={18} />
                      </div>
                    </div>
                    <div className="problem-card-content">
                      <div className="problem-card-title-row">
                        <span className="problem-title">{p.title}</span>
                        <span className="problem-metric-tag">{p.badge}</span>
                      </div>
                      <ul className="problem-bullets">
                        {p.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="problem-bullet-item">
                            <span className="bullet-dot">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TOP RIGHT: SOLUTION (ORCHESTRATION PIPELINE) */}
          <div className="slide2-solution-column">
            <div className="slide2-section-header">
              <div className="slide2-header-badge blue">OUR SOLUTION</div>
              <h3 className="slide2-header-title">5 Simple Steps of SATYA-SETU</h3>
            </div>

            <div className="slide2-solution-pipeline">
              {solutionSteps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  <div className="slide2-pipeline-card">
                    <div className="pipeline-card-top">
                      <span className="pipeline-num">{step.num}</span>
                      <div className="pipeline-role-badge">
                        <Users size={12} />
                        <span>{step.role}</span>
                      </div>
                    </div>

                    <div className="pipeline-card-img-wrap">
                      <img src={step.img} alt={step.alt} className="pipeline-img" />
                    </div>

                    <div className="pipeline-card-body">
                      <div className="pipeline-title-row">
                        <h4 className="pipeline-title">{step.title}</h4>
                        <span className="pipeline-control-tag"><Sliders size={10} /> {step.controlMode}</span>
                      </div>

                      <ul className="pipeline-bullets">
                        {step.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="pipeline-bullet-item">
                            <CheckCircle2 size={13} color="#1d4ed8" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {step.infographic && (
                        <div 
                          className="pipeline-infographic-card"
                          style={{ 
                            background: step.infographic.bg, 
                            borderColor: `${step.infographic.color}40` 
                          }}
                        >
                          <div className="pipeline-infographic-metric" style={{ color: step.infographic.color }}>
                            {React.createElement(step.infographic.metricIcon, { size: 13, style: { flexShrink: 0 } })}
                            <span>{step.infographic.metric}</span>
                          </div>
                          <div className="pipeline-infographic-spec">
                            {React.createElement(step.infographic.specIcon, { size: 11, color: '#64748b', style: { flexShrink: 0 } })}
                            <span>{step.infographic.spec}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {idx < solutionSteps.length - 1 && (
                    <div className="pipeline-connector" aria-hidden="true">
                      <ChevronRight size={18} className="pipeline-arrow" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: USP (INNOVATION AND UNIQUENESS) */}
        <div className="slide2-bottom-usp-row">
          <div className="usp-section-header">
            <div className="slide2-header-badge green">KEY HIGHLIGHTS</div>
            <h3 className="slide2-header-title">Unique Selling Propositions (USPs)</h3>
          </div>

          <div className="usp-cards-grid-4">
            {usps.map((usp, idx) => {
              const Icon = usp.icon;
              return (
                <div key={idx} className="usp-card-item">
                  <div className="usp-card-top-row">
                    <div className="usp-icon-badge" style={{ background: usp.bg, color: usp.color }}>
                      <Icon size={16} />
                    </div>
                    <span className="usp-category-tag">{usp.tag}</span>
                  </div>
                  <h4 className="usp-card-heading">{usp.title}</h4>
                  <p className="usp-card-description">{usp.desc}</p>
                </div>
              );
            })}
          </div>

          {/* UNIFIED STATUS RIBBON */}
          <div className="slide2-railvault-ribbon">
            <div className="ribbon-item">
              <span className="ribbon-dot"></span>
              <strong>Fast Approvals:</strong> Approval time cut from 66 days to under 7 days
            </div>
            <div className="ribbon-sep">•</div>
            <div className="ribbon-item">
              <span className="ribbon-dot"></span>
              <strong>Zero Fake Papers:</strong> Catches edited text & fake rubber stamps
            </div>
            <div className="ribbon-sep">•</div>
            <div className="ribbon-item">
              <span className="ribbon-dot"></span>
              <strong>Human in Control:</strong> AICTE officers make 100% of final approval decisions
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
