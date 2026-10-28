import React from 'react';
import SlideShell from './SlideShell';
import { 
  Building2, 
  FileCheck2, 
  Sparkles, 
  Award, 
  Layers, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { downloadPPTX } from '../utils/downloadHelper';

export default function Slide1Title() {
  const metaItems = [
    {
      label: 'Problem Statement ID',
      value: 'AICTE-MoE-2026 (Intelligent Document Validation & Regulatory Compliance)',
      icon: FileCheck2
    },
    {
      label: 'Problem Statement Title',
      value: 'AI-Powered Platform for Institutional Document Validation, Anomaly Detection & Regulatory Compliance for AICTE Approvals',
      icon: Building2,
      highlight: true
    },
    {
      label: 'Theme',
      value: 'Smart Governance & Clean Education Approvals (RegTech)',
      icon: Layers
    },
    {
      label: 'PS Category',
      value: 'Software',
      icon: Cpu
    },
    {
      label: 'Team ID',
      value: 'SIH-9JX3S3',
      icon: Award
    },
    {
      label: 'Team Name',
      value: 'Galacticos',
      icon: Sparkles
    }
  ];

  const customHeader = (
    <header className="sih-slide-header">
      <div className="sih-team-badge">
        GALACTICOS
      </div>
      <div className="sih-slide-title-wrap">
        <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1e3a8a', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          Ministry of Education • Government of India • AICTE Approval Process
        </span>
      </div>
      <div className="sih-official-logo-box">
        <button 
          type="button"
          onClick={() => downloadPPTX('Galacticos_SIH2026_Improved.pptx')} 
          className="btn-slide1-download"
          title="Download Official 16:9 Presentation (.pptx)"
          style={{ cursor: 'pointer', border: 'none' }}
        >
          <Download size={13} />
          <span>Download PPTX</span>
        </button>
      </div>
    </header>
  );

  return (
    <SlideShell 
      id="slide-1" 
      slideNumber={1} 
      title="SMART INDIA HACKATHON 2026"
      customHeader={customHeader}
    >
      <div className="slide1-main-container">
        <div className="title-hero-grid">
          {/* LEFT COLUMN: TITLE & PROBLEM STATEMENT METADATA */}
          <div className="title-hero-left">
            <h1 className="sih-title-large">
              SMART INDIA HACKATHON <br />
              <span style={{ color: '#1d4ed8' }}>2026</span>
            </h1>

            <div className="title-meta-list">
              {metaItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="title-meta-item">
                    <span className="title-meta-label">
                      <Icon size={19} color="#1d4ed8" style={{ flexShrink: 0 }} />
                      {item.label} –
                    </span>
                    <span className={`title-meta-val ${item.highlight ? 'highlight' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: 3D HERO ISOMETRIC VISUAL */}
          <div className="title-hero-visual">
            <img 
              src="/assets/aicte_hero_regtech.jpg" 
              alt="AICTE Intelligent Regulatory Platform" 
              className="sih-brain-bulb-large"
              style={{ borderRadius: '16px', boxShadow: '0 12px 32px rgba(15, 41, 79, 0.15)', maxHeight: '420px', width: 'auto' }}
            />

            <div className="title-quick-download-box">
              <span className="quick-download-badge">Official Presentation Package</span>
              <button 
                type="button"
                onClick={() => downloadPPTX('Galacticos_SIH2026_Improved.pptx')} 
                className="btn-quick-pptx"
                style={{ cursor: 'pointer', border: 'none' }}
              >
                <Download size={16} />
                <span>Download Improved Presentation (.pptx)</span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM INNOVATION FOCUS BANNER */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          marginTop: '1.25rem',
          padding: '0.9rem 1.6rem',
          background: 'rgba(239, 246, 255, 0.95)',
          borderRadius: 'var(--radius-sm)',
          border: '1.5px solid #bfdbfe',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: '0 2px 8px rgba(29, 78, 216, 0.08)'
        }}>
          <ShieldCheck size={26} color="#1d4ed8" style={{ flexShrink: 0 }} />
          <p style={{ 
            fontSize: '1.12rem', 
            color: '#1e3a8a', 
            lineHeight: 1.55, 
            fontWeight: 600, 
            margin: 0, 
            textAlign: 'justify', 
            textJustify: 'inter-word' 
          }}>
            <strong>National Innovation Focus:</strong> Fast, clean and honest college approvals using AI. Instantly reads documents, flags fake or edited files, verifies land and degrees directly with government portals, and keeps AICTE officers in complete final control.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
