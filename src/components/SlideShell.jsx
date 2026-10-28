import React from 'react';

export default function SlideShell({ 
  id, 
  slideNumber, 
  title, 
  subtitle, 
  children,
  showUnderline = true,
  customHeader = null
}) {
  return (
    <section id={id} className="sih-slide-frame" data-slide={slideNumber}>
      {customHeader ? (
        customHeader
      ) : (
        <header className="sih-slide-header">
          <div className="sih-team-badge">
            GALACTICOS
          </div>
          <div className="sih-slide-title-wrap">
            <h2 className={`sih-slide-title ${showUnderline ? 'underline-title' : ''}`}>
              {title}
            </h2>
            {subtitle && <p className="sih-slide-subtitle">{subtitle}</p>}
          </div>
          <div className="sih-official-logo-box">
            <img 
              src="/assets/sih_logo_clean.png" 
              alt="Smart India Hackathon 2026" 
              className="sih-official-logo-img" 
            />
          </div>
        </header>
      )}

      <div className="sih-slide-content">
        {children}
      </div>

      <footer className="sih-slide-footer">
        <div className="sih-footer-tag">
          <span>@SIH Idea submission- Template</span>
        </div>
        <div className="sih-footer-num">
          {slideNumber}
        </div>
      </footer>
    </section>
  );
}
