import React from 'react';
import SlideShell from './SlideShell';
import { 
  Clock, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Building2, 
  Users, 
  Zap, 
  TrendingUp, 
  IndianRupee, 
  CheckCircle2, 
  GraduationCap, 
  FileCheck2, 
  Scale, 
  Wallet
} from 'lucide-react';

export default function Slide5Impact() {
  const topMetrics = [
    {
      stat: '< 7 DAYS',
      title: 'Fast Approval Time',
      desc: 'Approval time cut down from 66 days to under 7 days.',
      icon: Clock,
      color: '#0284c7',
      bg: '#e0f2fe'
    },
    {
      stat: '99.4%',
      title: 'High Accuracy',
      desc: 'Catches edited dates, fake seals, and duplicate teacher records.',
      icon: ShieldCheck,
      color: '#ea580c',
      bg: '#fff7ed'
    },
    {
      stat: '100%',
      title: 'Full Transparency',
      desc: 'Permanent history of every check and officer decision.',
      icon: FileCheck2,
      color: '#15803d',
      bg: '#f0fdf4'
    },
    {
      stat: '₹120+ Cr',
      title: 'Public Money Saved',
      desc: 'Saves travel, paper printing, and postal costs nationwide.',
      icon: IndianRupee,
      color: '#7c3aed',
      bg: '#f5f3ff'
    }
  ];

  const stakeholders = [
    {
      id: 'institutions',
      category: 'COLLEGES',
      categoryColor: '#0284c7',
      categoryBg: '#e0f2fe',
      title: 'Engineering Colleges',
      subtitle: 'Technical & Diploma Institutes',
      img: '/assets/aicte_stakeholder_colleges.jpg',
      alt: 'Technical Colleges Emblem',
      profitHeadline: 'Save ₹3–5 Lakh / Year',
      profitSub: 'Fix mistakes before submitting to avoid fines or delays',
      bullets: [
        'Checks files instantly so colleges can fix errors early',
        'No repeated submission fees or last-minute panic',
        'Admissions start on time without calendar delays'
      ]
    },
    {
      id: 'officers',
      category: 'OFFICERS',
      categoryColor: '#b91c1c',
      categoryBg: '#fee2e2',
      title: 'AICTE Officers',
      subtitle: 'Regional Scrutiny Committees',
      img: '/assets/aicte_stakeholder_officers.jpg',
      alt: 'Scrutiny Officers Emblem',
      profitHeadline: '80% Less Reading Time',
      profitSub: 'AI highlights errors so officers focus on important checks',
      bullets: [
        'Instant alerts show edited text or suspicious stamps',
        'No need to manually re-read hundreds of old pages',
        'Officers make final approval decisions faster and easier'
      ]
    },
    {
      id: 'authorities',
      category: 'GOVT OFFICES',
      categoryColor: '#15803d',
      categoryBg: '#dcfce7',
      title: 'Universities & Land',
      subtitle: 'Land Registries & Fire Offices',
      img: '/assets/aicte_stakeholder_issuing.jpg',
      alt: 'Issuing Authorities Emblem',
      profitHeadline: 'Zero Postal Waiting',
      profitSub: 'Direct online links replace slow paper inquiry letters',
      bullets: [
        'Checks land records and degrees online in seconds',
        'Eliminates stacks of outgoing and incoming inquiry letters',
        'Guarantees official government verification without fraud'
      ]
    },
    {
      id: 'students',
      category: 'CITIZENS',
      categoryColor: '#ea580c',
      categoryBg: '#fff7ed',
      title: 'Students & Parents',
      subtitle: 'Youth & Families',
      img: '/assets/aicte_stakeholder_students.jpg',
      alt: 'Students & Parents Emblem',
      profitHeadline: '100% Real Colleges',
      profitSub: 'Protects students from fake degrees and ghost institutions',
      bullets: [
        'Ensures every approved college actually has genuine labs',
        'Protects families from paying fees to unapproved colleges',
        'Public list of approved colleges builds total trust'
      ]
    },
    {
      id: 'governance',
      category: 'GOVERNMENT',
      categoryColor: '#7c3aed',
      categoryBg: '#f5f3ff',
      title: 'Ministry of Education',
      subtitle: 'National Education Standard',
      img: '/assets/aicte_stakeholder_moe.jpg',
      alt: 'Ministry of Education Emblem',
      profitHeadline: 'Clean Higher Education',
      profitSub: 'Supports National Education Policy (NEP 2020) goals',
      bullets: [
        'Live national dashboard of technical colleges across India',
        'Fair, transparent, and honest rules applied to all colleges',
        'Builds global trust in Indian engineering degrees'
      ]
    }
  ];

  return (
    <SlideShell 
      id="slide-5" 
      slideNumber={5} 
      title="IMPACT AND BENEFITS FOR EVERYONE"
      subtitle="How This System Helps Colleges, Government Officers, Students, and the Nation"
    >
      <div className="slide5-fixed-layout">
        {/* TOP SECTION: 4 MACRO IMPACT METRICS */}
        <div className="slide5-metrics-row">
          {topMetrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="slide5-metric-card">
                <div className="slide5-metric-header">
                  <span className="slide5-metric-stat" style={{ color: m.color }}>{m.stat}</span>
                  <div className="slide5-metric-icon" style={{ background: m.bg, color: m.color }}>
                    <Icon size={20} />
                  </div>
                </div>
                <h4 className="slide5-metric-title">{m.title}</h4>
                <p className="slide5-metric-desc">{m.desc}</p>
              </div>
            );
          })}
        </div>

        {/* MAIN SECTION: 5-STAKEHOLDER VALUE & PROFIT MATRIX */}
        <div className="slide5-stakeholders-section">
          <div className="slide5-section-title-row">
            <div className="slide2-header-badge green">VALUE FOR EVERYONE</div>
            <h3 className="slide5-section-heading">Clear Benefits for Each Group</h3>
          </div>

          <div className="slide5-stakeholders-grid">
            {stakeholders.map((s) => (
              <div key={s.id} className="slide5-stakeholder-card">
                {/* CARD TOP BADGE & CREST */}
                <div className="stakeholder-card-top">
                  <span 
                    className="stakeholder-cat-badge" 
                    style={{ background: s.categoryBg, color: s.categoryColor, borderColor: s.categoryColor + '40' }}
                  >
                    {s.category}
                  </span>
                </div>

                <div className="stakeholder-crest-wrap">
                  <img src={s.img} alt={s.alt} className="stakeholder-crest-img" />
                </div>

                <div className="stakeholder-headings">
                  <h4 className="stakeholder-title">{s.title}</h4>
                  <div className="stakeholder-sub">{s.subtitle}</div>
                </div>

                {/* DIRECT FINANCIAL PROFIT / VALUE CALLOUT */}
                <div className="stakeholder-profit-box">
                  <div className="profit-headline" style={{ color: s.categoryColor }}>
                    <Wallet size={12} style={{ flexShrink: 0 }} />
                    <span>{s.profitHeadline}</span>
                  </div>
                  <p className="profit-sub">{s.profitSub}</p>
                </div>

                {/* BULLETS */}
                <ul className="stakeholder-bullets">
                  {s.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="stakeholder-bullet-item">
                      <CheckCircle2 size={11} color={s.categoryColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM MULTI-STAKEHOLDER STATUS RIBBON */}
        <div className="slide5-status-ribbon">
          <div className="slide5-ribbon-content">
            <span className="ribbon-pillar"><span className="ribbon-dot blue"></span> <strong>Colleges:</strong> ₹5L Saved / Fast Approval</span>
            <span className="ribbon-sep">•</span>
            <span className="ribbon-pillar"><span className="ribbon-dot red"></span> <strong>AICTE Officers:</strong> 80% Scrutiny Time Saved</span>
            <span className="ribbon-sep">•</span>
            <span className="ribbon-pillar"><span className="ribbon-dot green"></span> <strong>Govt Sources:</strong> Zero Paperwork Backlog</span>
            <span className="ribbon-sep">•</span>
            <span className="ribbon-pillar"><span className="ribbon-dot orange"></span> <strong>Students:</strong> 100% Genuine Colleges</span>
            <span className="ribbon-sep">•</span>
            <span className="ribbon-pillar"><span className="ribbon-dot purple"></span> <strong>MoE:</strong> Honest Education System</span>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
