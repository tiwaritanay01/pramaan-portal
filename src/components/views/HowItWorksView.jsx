import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  FileCheck, 
  Gavel, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Lock,
  FileText
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS, PROCESS_COMPARISON } from '../../data/mockData';

export default function HowItWorksView({ 
  onNavigateToView,
  isAuthenticated = false,
  activeRole = null
}) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      q: 'How does the system help colleges avoid mistakes before submitting?',
      a: 'When institutional staff upload documents (like lease deeds or affiliation letters), the system immediately checks formatting and extracts key dates and numbers. If there is a missing paper or a number mismatch with state records, a plain English notice appears right away, so the college can upload the right sanction order before the scrutiny deadline.'
    },
    {
      q: 'How are duplicate faculty members detected across different institutions?',
      a: 'Every teacher on the faculty roster is cross-referenced using verified Aadhaar and PAN numbers against the AICTE National Faculty Database. If an instructor is listed as full-time on the regular payroll of two colleges simultaneously, the system immediately flags the conflict for officer review.'
    },
    {
      q: 'What is the split-screen inspection console used by officers?',
      a: 'Instead of searching through 200-page paper binders, the scrutiny officer sees the original scanned certificate on the left side and the official government registry records on the right side. Any difference (such as an expired fire NOC or mismatched seat count) is highlighted in color with simple English explanations.'
    },
    {
      q: 'What happens when a college receives a 7-day deficiency notice?',
      a: 'The college principal and management receive an official letter on AICTE Regional Office letterhead via email and SMS. The college portal opens a dedicated response window where the institute can upload the sub-registrar stamped renewal or university approval letter within 7 statutory calendar days.'
    },
    {
      q: 'Is the Digital Signature Certificate (DSC) legally binding?',
      a: 'Yes. The decision is sealed using Class-3 government cryptographic tokens under Section 10(k) of the AICTE Act 1987 and the Information Technology Act 2000. It produces an official order with a tamper-evident QR code that anyone can scan to verify authenticity.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-28 pt-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Hero Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Plain English Operational Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto">
            How PRAMAAN Works: Fast, Transparent Institutional Approval
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every year, technical colleges across India apply for renewal and seat permissions. 
            PRAMAAN replaces slow paper binders with automated registry cross-checks and a split-screen 
            scrutiny console for government officers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {!isAuthenticated ? (
              <button
                onClick={() => onNavigateToView('sign-in')}
                className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Sign In to Access Portals</span>
              </button>
            ) : activeRole === 'college' ? (
              <button
                onClick={() => onNavigateToView('college-portal')}
                className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Return to College Portal</span>
              </button>
            ) : (
              <button
                onClick={() => onNavigateToView('officer-queue')}
                className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>Return to Officer Workqueue</span>
              </button>
            )}
          </div>
        </div>

        {/* 4-Step Interactive Workflow */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-lg font-bold text-slate-900">
              The 4-Step Regulatory Approval Lifecycle
            </h2>
            <p className="text-xs text-slate-500">
              Click any step below to see how institutional papers move through the system
            </p>
          </div>

          {/* Step Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {HOW_IT_WORKS_STEPS.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  activeStepIndex === idx
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-400/30'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className={activeStepIndex === idx ? 'text-blue-200' : 'text-slate-400'}>
                    STEP {s.step}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-sans ${
                    activeStepIndex === idx ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {s.role}
                  </span>
                </div>
                <div className="text-xs font-bold mt-2 leading-snug line-clamp-2">
                  {s.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                  Stage {HOW_IT_WORKS_STEPS[activeStepIndex].step} • {HOW_IT_WORKS_STEPS[activeStepIndex].role}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {HOW_IT_WORKS_STEPS[activeStepIndex].title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-200 self-start sm:self-auto">
                Simple English Workflow
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {HOW_IT_WORKS_STEPS[activeStepIndex].summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {HOW_IT_WORKS_STEPS[activeStepIndex].details.map((detail, dIdx) => (
                <div key={dIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold font-mono text-xs flex items-center justify-center">
                    {dIdx + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            {/* Quick Demo Navigation Trigger */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  if (activeStepIndex === 0) onNavigateToView('college-portal');
                  else if (activeStepIndex === 1) onNavigateToView('officer-queue');
                  else if (activeStepIndex === 2) onNavigateToView('inspection-console');
                  else onNavigateToView('decision-approval');
                }}
                className="py-2 px-4 rounded-xl bg-[#0F2942] hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Jump to Live {HOW_IT_WORKS_STEPS[activeStepIndex].role} Screen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Traditional Manual Process vs PRAMAAN Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">
              Why It Matters: Traditional Paper Audit vs. PRAMAAN Regulatory Console
            </h3>
            <p className="text-xs text-slate-500">
              Comparison across standard higher education accreditation checks
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <tr>
                  <th className="p-3.5 font-bold">Inspection Criterion</th>
                  <th className="p-3.5 font-bold text-slate-500">Old Manual System</th>
                  <th className="p-3.5 font-bold text-blue-700 bg-blue-50/50">PRAMAAN Modern Console</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PROCESS_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-3.5 text-slate-600 leading-normal">{row.oldWay}</td>
                    <td className="p-3.5 text-emerald-900 font-semibold bg-emerald-50/30 leading-normal">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{row.pramaanWay}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Plain English FAQ Accordion */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">
              Frequently Asked Questions (FAQ) in Plain English
            </h3>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="text-xs font-bold text-slate-900">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-white text-xs text-slate-700 leading-relaxed border-t border-slate-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#0F2942] rounded-3xl p-8 text-white text-center space-y-3 shadow-lg">
          <div className="text-xs uppercase font-mono font-bold tracking-wider text-amber-400">
            GovTech Security Architecture
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            Role-Based Access Control (RBAC) Enforced
          </h2>
          <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
            Strict regulatory separation ensures Institutional College users and Government Scrutiny Officers operate in secure, role-restricted portals.
          </p>
          <div className="pt-2">
            {!isAuthenticated ? (
              <button
                onClick={() => onNavigateToView('sign-in')}
                className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Sign In to Access Your Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : activeRole === 'college' ? (
              <button
                onClick={() => onNavigateToView('college-portal')}
                className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Return to Institutional Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => onNavigateToView('officer-queue')}
                className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Return to Scrutiny Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
