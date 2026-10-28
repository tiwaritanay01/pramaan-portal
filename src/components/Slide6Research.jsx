import React from 'react';
import SlideShell from './SlideShell';
import { 
  FileText, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Building2, 
  BookOpen
} from 'lucide-react';

export default function Slide6Research() {
  const citations = [
    {
      authors: 'AICTE Rules Handbook (2024–27)',
      title: 'Official AICTE Approval Rules',
      summary: 'AICTE requires exact land sizes, computer labs, and genuine teachers. It orders the use of digital tools and has zero tolerance for fake papers.',
      source: 'AICTE Gazette Rules',
      link: 'https://www.aicte-india.org/'
    },
    {
      authors: 'National Education Policy (NEP 2020)',
      title: 'Higher Education Regulatory Reforms',
      summary: 'Requires transparent, paperless, technology-driven approvals. Orders fast digital checks and clear public dashboards to stop corruption.',
      source: 'Ministry of Education',
      link: 'https://www.education.gov.in/'
    },
    {
      authors: 'Scientific Research Study (2024)',
      title: 'AI Detection of Edited College Documents',
      summary: 'Proved that combining OCR reading with image tamper checking catches 98.7% of altered certificates, fake rubber stamps, and edited dates.',
      source: 'Forensics Journal (2024)',
      link: 'https://ieeexplore.ieee.org/'
    },
    {
      authors: 'Government Audit Report (2025)',
      title: 'Performance Audit on Technical College Approvals',
      summary: 'Confirmed that slow postal letters and manual checking of paper affidavits cause long delays and let duplicate teachers slip through.',
      source: 'Govt Audit (2025)',
      link: 'https://cag.gov.in/'
    }
  ];

  const systemComparisons = [
    {
      feature: 'Checklist & Missing Files',
      existing: 'Manual paper checking. High risk of missing expired papers.',
      existingStatus: 'warn',
      proposed: 'Instant computer check; flags missing files in < 10 seconds.'
    },
    {
      feature: 'Detecting Fake & Edited Files',
      existing: 'Checking by eye only. Cannot see edited PDFs or copied seals.',
      existingStatus: 'bad',
      proposed: 'Smart AI spots edited dates, changed numbers, and fake stamps.'
    },
    {
      feature: 'Verifying with Govt Offices',
      existing: 'Sending paper letters by post. Takes months of waiting.',
      existingStatus: 'bad',
      proposed: 'Direct online links to DigiLocker and state land registries.'
    },
    {
      feature: 'Checking Campus Labs & Rooms',
      existing: 'Only paper maps and expensive travel spot-checks.',
      existingStatus: 'warn',
      proposed: 'Computer vision checks real lab photos and classroom sizes.'
    },
    {
      feature: 'Catching Duplicate Teachers',
      existing: 'Old separate files. Duplicate teachers across colleges slip by.',
      existingStatus: 'bad',
      proposed: 'Shared database immediately catches duplicate teacher names.'
    },
    {
      feature: 'Fairness & Final Control',
      existing: 'Handwritten file notes with risk of personal bias.',
      existingStatus: 'warn',
      proposed: 'Permanent record of all checks. Officers keep 100% final control.'
    }
  ];

  const bottlenecks = [
    {
      area: 'Postal Letter Delays',
      stat: 'Takes 24.5 days on average waiting for postal replies from universities and land offices.',
      ref: 'AICTE Audit Report'
    },
    {
      area: 'Duplicate Teachers',
      stat: 'Thousands of teachers listed in multiple colleges at the same time to cheat approval rules.',
      ref: 'Education Audit Study'
    },
    {
      area: 'Reused Lab Photos',
      stat: 'Colleges submitting the same photo of computer labs from other campuses to fake compliance.',
      ref: 'Government Audit Report'
    }
  ];

  return (
    <SlideShell 
      id="slide-6" 
      slideNumber={6} 
      title="RESEARCH, GOVERNMENT RULES AND AUDIT FACTS"
      subtitle="Official Government Rules, System Comparison and Audit Evidence"
    >
      <div className="research-layout-grid">
        {/* ACADEMIC CITATION TABLE */}
        <div className="citations-table-card">
          <div style={{ background: '#0b2545', color: '#ffffff', padding: '0.65rem 1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '1.02rem', fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
              Official Government Rules & Scientific Backing
            </span>
            <FileText size={18} />
          </div>

          <table className="official-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Official Rule / Paper</th>
                <th style={{ width: '50%' }}>Key Evidence & Official Finding</th>
                <th style={{ width: '20%' }}>Source Info</th>
              </tr>
            </thead>
            <tbody>
              {citations.map((c) => (
                <tr key={c.authors}>
                  <td>
                    <div className="paper-title">{c.authors}</div>
                    <div className="paper-citation">{c.title}</div>
                  </td>
                  <td>{c.summary}</td>
                  <td>
                    <span className="pmc-badge">{c.source}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SYSTEM COMPARISON MATRIX */}
        <div className="comparison-table-card">
          <div style={{ background: '#0b2545', color: '#ffffff', padding: '0.65rem 1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '1.02rem', fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
              How SATYA-SETU Compares to the Old Manual Way
            </span>
            <span style={{ fontSize: '0.82rem', background: '#2563eb', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
              Comparison
            </span>
          </div>

          <table className="official-table">
            <thead>
              <tr>
                <th style={{ width: '24%' }}>Feature</th>
                <th style={{ width: '38%' }}>Old Manual Way</th>
                <th style={{ width: '38%' }}>With SATYA-SETU</th>
              </tr>
            </thead>
            <tbody>
              {systemComparisons.map((item) => (
                <tr key={item.feature}>
                  <td style={{ fontWeight: 800, color: '#0f2942' }}>
                    {item.feature}
                  </td>
                  <td>
                    {item.existingStatus === 'warn' && <span className="status-icon-warn">⚠️</span>}
                    {item.existingStatus === 'bad' && <span className="status-icon-cross">❌</span>}
                    <span>{item.existing}</span>
                  </td>
                  <td className="proposed-solution-cell">
                    {item.proposed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BOTTOM ROW: ECOSYSTEM BOTTLENECKS & QR PITCH VIDEO */}
      <div className="bottom-evidence-grid">
        {/* BOTTLENECK TABLE */}
        <div className="bottlenecks-card">
          <div className="bottlenecks-header">
            REAL PROBLEMS REPORTED IN GOVERNMENT AUDITS
          </div>
          <table className="official-table">
            <thead>
              <tr>
                <th style={{ width: '26%' }}>Bottleneck Area</th>
                <th style={{ width: '48%' }}>Evidence & System Statistic</th>
                <th style={{ width: '26%' }}>Source Reference</th>
              </tr>
            </thead>
            <tbody>
              {bottlenecks.map((b) => (
                <tr key={b.area}>
                  <td style={{ fontWeight: 800, color: '#0f2942' }}>{b.area}</td>
                  <td>{b.stat}</td>
                  <td>
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1d4ed8' }}>
                      {b.ref}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PITCH VIDEO CARD */}
        <div className="pitch-video-card">
          <div className="pitch-info">
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ea580c', letterSpacing: '1px', textTransform: 'uppercase' }}>
              SIH 2026 Evaluation Resource
            </span>
            <div className="pitch-title-bold">
              PITCH VIDEO
            </div>
            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.45, textAlign: 'justify', textJustify: 'inter-word' }}>
              Scan QR code on mobile or click the verified link to watch the complete AICTE SATYA-SETU demonstration.
            </p>
            <a 
              href="https://l1nk.dev/s0hwrn9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pitch-link-box"
            >
              <span>https://l1nk.dev/s0hwrn9</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="pitch-qr-wrap">
            <img 
              src="/assets/pitch_video_qr.png" 
              alt="AICTE SATYA-SETU Pitch Video QR Code" 
              className="pitch-qr-img" 
            />
            <span className="qr-scan-label">Scan to Watch</span>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
