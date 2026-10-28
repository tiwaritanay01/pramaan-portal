import React, { useState, useEffect } from 'react';
import { ExternalLink, Play, Layers, Compass, ShieldAlert, Cpu, BarChart2, Award, BookOpen, Download, FileText } from 'lucide-react';
import { downloadPPTX } from '../utils/downloadHelper';

export default function Navbar() {
  const [activeSlide, setActiveSlide] = useState(1);

  const slides = [
    { num: 1, id: 'slide-1', label: '1. Title', icon: Compass },
    { num: 2, id: 'slide-2', label: '2. Solution & USP', icon: ShieldAlert },
    { num: 3, id: 'slide-3', label: '3. Technical Approach', icon: Cpu },
    { num: 4, id: 'slide-4', label: '4. Feasibility & Data', icon: BarChart2 },
    { num: 5, id: 'slide-5', label: '5. Impact & Benefits', icon: Award },
    { num: 6, id: 'slide-6', label: '6. Research & Citations', icon: BookOpen },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const slide of slides) {
        const el = document.getElementById(slide.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSlide(slide.num);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="presentation-nav">
      <a href="#slide-1" className="nav-brand" onClick={(e) => scrollToSection(e, 'slide-1')}>
        <img 
          src="/assets/sih_logo_clean.png" 
          alt="SIH 2026 Logo" 
          className="nav-brand-logo"
        />
        <div className="nav-brand-text">
          <span className="nav-brand-title">SMART INDIA HACKATHON 2026</span>
          <span className="nav-brand-sub">Team Galacticos • AICTE-MoE-2026 • Intelligent Regulatory Scrutiny</span>
        </div>
      </a>

      <div className="nav-slide-links">
        {slides.map((s) => {
          const Icon = s.icon;
          const isActive = activeSlide === s.num;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => scrollToSection(e, s.id)}
              className={`nav-slide-pill ${isActive ? 'active' : ''}`}
              title={`Jump to ${s.label}`}
            >
              <span className="pill-num">{s.num}</span>
              <span>{s.label.split('. ')[1]}</span>
            </a>
          );
        })}
      </div>

      <div className="nav-actions">
        <button 
          type="button"
          onClick={() => downloadPPTX('Galacticos_SIH2026_Edited_Presentation.pptx')} 
          className="btn-nav-ppt"
          title="Download Your Edited SIH Presentation (.pptx)"
          style={{ cursor: 'pointer', border: 'none' }}
        >
          <Download size={14} />
          <span>Download Edited PPT</span>
          <span className="badge-ppt-tag">.pptx</span>
        </button>

        <a 
          href="https://l1nk.dev/s0hwrn9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-nav-video"
          title="Watch Official SIH Pitch Video"
        >
          <Play size={14} fill="#ffffff" />
          <span>Pitch Video</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </nav>
  );
}
