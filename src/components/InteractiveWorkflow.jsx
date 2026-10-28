import React, { useState } from 'react';
import { 
  GitCommit, 
  MapPin, 
  Stethoscope, 
  Truck, 
  Navigation, 
  Building2, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function InteractiveWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: 1,
      name: 'Intake & De-duplication',
      icon: MapPin,
      badge: 'Multi-Channel Intake',
      scenario: 'High-speed multiple collision reported on NH-48 near Lonavala ghat (3 vehicles involved, 4 trauma casualties).',
      mechanism: 'Galacticos unifies 2 simultaneous citizen calls to ERSS-112 and a highway patrol distress alert into a single verified incident record, preventing duplicate dispatch.',
      parameters: [
        { label: 'Incident Type', value: 'Highway Multi-Vehicle Trauma' },
        { label: 'GPS Location', value: 'NH-48, KM 84.2' },
        { label: 'Estimated Victims', value: '4 individuals' },
        { label: 'Report Status', value: 'Merged & Verified' }
      ]
    },
    {
      num: 2,
      name: 'Triage Scoring',
      icon: Stethoscope,
      badge: 'Acuity Evaluation',
      scenario: 'Evaluating trauma severity to determine dispatch urgency rank.',
      mechanism: 'Triage Agent calculates score using the verified mathematical priority formula: Priority = Severity × Victim Count × Vulnerability Factor × Elapsed Reporting Delay.',
      parameters: [
        { label: 'Clinical Acuity', value: 'Critical (GCS < 9, suspected blunt chest trauma)' },
        { label: 'Priority Rank', value: 'P1 - Immediate Intervention' },
        { label: 'Unit Requirement', value: 'Advanced Life Support (ALS) with ventilator' }
      ]
    },
    {
      num: 3,
      name: 'Resource Allocation',
      icon: Truck,
      badge: 'Capability & Safety',
      scenario: 'Selecting response units while preserving geographic safety coverage.',
      mechanism: 'Resource Agent identifies nearest ALS unit (11 mins away) rather than a closer BLS van (6 mins away, lacks ventilator). Concurrently validates that dispatching this unit leaves no adjacent rural sector without trauma coverage.',
      parameters: [
        { label: 'Dispatched Unit', value: 'ALS Ambulance #MH-14-EM-402' },
        { label: 'Equipment Match', value: 'Ventilator + Defibrillator + Paramedic' },
        { label: 'Secondary Zone Safety', value: 'Validated (>85% baseline protection maintained)' }
      ]
    },
    {
      num: 4,
      name: 'Corridor Routing',
      icon: Navigation,
      badge: 'Signal Coordination',
      scenario: 'Overcoming Maharashtra\'s 39.4-minute average scene-to-hospital transit bottleneck.',
      mechanism: 'Routing Agent integrates real-time traffic speeds with municipal signal systems, recommending an alternate bypass route that avoids a 22-minute gridlock at the expressway toll plaza.',
      parameters: [
        { label: 'Standard GPS ETA', value: '48 Minutes (Heavy toll congestion)' },
        { label: 'Optimized Route ETA', value: '27 Minutes (Via arterial corridor)' },
        { label: 'Signal Preemption', value: '3 Critical Intersections Coordinated' }
      ]
    },
    {
      num: 5,
      name: 'Hospital Integration',
      icon: Building2,
      badge: 'Zero-Handoff-Delay',
      scenario: 'Preventing the >10 minute hospital handover delay observed in 24 of 36 Maharashtra districts.',
      mechanism: 'Hospital Agent queries secondary and tertiary centers within the arrival radius. Matches patient acuity directly to a facility with confirmed ICU ventilator availability and on-call neurosurgery, alerting the trauma bay before vehicle arrival.',
      parameters: [
        { label: 'Target Hospital', value: 'District Sub-District Hospital Trauma Unit' },
        { label: 'Trauma Bay Readiness', value: 'Confirmed (ICU Bed #4 reserved)' },
        { label: 'Expected Handoff Time', value: '< 4 Minutes (Pre-notified triage)' }
      ]
    }
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <div style={{
      background: '#ffffff',
      border: '1.5px solid #cbd5e1',
      borderRadius: 'var(--radius-md)',
      padding: '1.75rem',
      marginTop: '2.5rem',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1.5px solid #e2e8f0', paddingBottom: '0.85rem' }}>
        <div>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Interactive Decision Architecture Walkthrough
          </span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0b2545', marginTop: '2px' }}>
            End-to-End Orchestration Pathway
          </h3>
        </div>
        <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
          Step {activeStep + 1} of {steps.length}
        </div>
      </div>

      {/* STEP SELECTOR BAR */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '0.65rem',
        marginBottom: '1.5rem'
      }}>
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={s.num}
              onClick={() => setActiveStep(idx)}
              style={{
                background: isActive ? '#0d284f' : '#f8fafc',
                color: isActive ? '#ffffff' : '#334155',
                border: isActive ? '2px solid #1d4ed8' : '1px solid #cbd5e1',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 0.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: isActive ? '#1d4ed8' : '#e2e8f0',
                color: isActive ? '#ffffff' : '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 800
              }}>
                {s.num}
              </div>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, lineHeight: 1.2 }}>
                {s.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE STEP CARD */}
      <div style={{
        background: '#f8fafc',
        border: '1.5px solid #bfdbfe',
        borderRadius: 'var(--radius-sm)',
        padding: '1.5rem',
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: '2rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
            <span style={{
              background: '#e0f2fe',
              color: '#0369a1',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase'
            }}>
              {current.badge}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>
              Phase {current.num}: {current.name}
            </span>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f2942', marginBottom: '0.35rem' }}>
              Scenario Context:
            </h4>
            <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.45 }}>
              {current.scenario}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#166534', marginBottom: '0.35rem' }}>
              Orchestrator Decision Mechanism:
            </h4>
            <p style={{ fontSize: '0.84rem', color: '#1e293b', lineHeight: 1.45, fontWeight: 500 }}>
              {current.mechanism}
            </p>
          </div>
        </div>

        {/* DECISION PARAMETERS */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 'var(--radius-sm)',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <h5 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f2942', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.4rem' }}>
            Deterministic Telemetry & Rules
          </h5>

          {current.parameters.map((p, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
                {p.label}
              </span>
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0f172a' }}>
                {p.value}
              </span>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.75rem' }}>
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              style={{
                padding: '0.4rem 0.8rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-sm)',
                background: '#f1f5f9',
                color: activeStep === 0 ? '#94a3b8' : '#334155',
                border: '1px solid #cbd5e1',
                cursor: activeStep === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              style={{
                padding: '0.4rem 0.85rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-sm)',
                background: '#1d4ed8',
                color: '#ffffff',
                border: 'none',
                cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>Next Phase</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
