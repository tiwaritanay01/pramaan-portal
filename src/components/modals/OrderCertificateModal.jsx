import React from 'react';
import { X, Printer, Download, CheckCircle2, ShieldCheck, QrCode, Copy, Share2 } from 'lucide-react';

export default function OrderCertificateModal({ orderDetails, onClose, onCopyNotice }) {
  if (!orderDetails) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-slate-300 shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Top Action Bar */}
        <div className="px-6 py-3.5 bg-[#0F2942] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              Official Signed Statutory Scrutiny Order • AICTE Govt of India
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
              title="Print Order"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Certificate / Order Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-100 flex justify-center">
          <div className="w-full max-w-2xl bg-white border-2 border-slate-300 shadow-md p-8 sm:p-10 rounded-xl relative flex flex-col font-serif text-slate-900">
            
            {/* National Tricolor Accent Header */}
            <div className="h-1 w-full flex mb-6">
              <span className="flex-1 bg-[#FF9933]"></span>
              <span className="flex-1 bg-white"></span>
              <span className="flex-1 bg-[#138808]"></span>
            </div>

            {/* AICTE Formal Header */}
            <div className="text-center pb-4 border-b-2 border-slate-800 space-y-1">
              <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-600">
                All India Council for Technical Education
              </div>
              <div className="text-[10px] font-sans text-slate-500 uppercase tracking-widest">
                (A Statutory Body under Ministry of Education, Govt. of India)
              </div>
              <div className="text-xs font-sans font-semibold text-slate-700">
                Western Regional Office, Industrial Assurance Building, Churchgate, Mumbai - 400020
              </div>
            </div>

            {/* Reference Numbers & Date */}
            <div className="flex items-center justify-between text-xs font-sans text-slate-600 py-3 border-b border-slate-200">
              <div>
                <strong>Dispatch Ref:</strong> <span className="font-mono text-slate-900 font-bold">{orderDetails.refNumber || 'AICTE/WRO/SCRUTINY/2026/4821-ORD'}</span>
              </div>
              <div>
                <strong>Date:</strong> <span>{orderDetails.date || '28 October 2026'}</span>
              </div>
            </div>

            {/* Order Content */}
            <div className="py-5 space-y-4 text-xs font-sans leading-relaxed text-slate-800 flex-1">
              <div>
                <p className="font-bold text-slate-900">To,</p>
                <p className="font-semibold text-slate-900">The Principal / Chairman,</p>
                <p>{orderDetails.collegeName || 'Pune Institute of Technology & Research'}</p>
                <p className="font-mono text-slate-600">AICTE Permanent Institute ID: {orderDetails.collegeId || '1-9028341'}</p>
              </div>

              <div>
                <p className="font-bold text-slate-900 uppercase">
                  Subject: {orderDetails.subject || 'Statutory Scrutiny Order regarding Extension of Approval (EoA) for Academic Year 2026–27.'}
                </p>
              </div>

              {/* Order Full Text Box */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg whitespace-pre-line text-xs font-mono text-slate-900 leading-relaxed">
                {orderDetails.letterText}
              </div>

              <div className="text-slate-600 text-[11px] leading-relaxed">
                This document is issued with the approval of the Competent Regulatory Authority and executed via cryptographic digital signature under the Information Technology Act 2000.
              </div>
            </div>

            {/* Digital Signature & QR Validation Stamp Box */}
            <div className="mt-6 pt-4 border-t-2 border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center font-sans">
              
              {/* Left: Cryptographic Stamp */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center text-emerald-700 shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="text-[11px]">
                  <div className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    DIGITALLY SIGNED & SEALED
                  </div>
                  <div className="font-semibold text-slate-900">{orderDetails.officerName || 'Dr. R. Sharma'}</div>
                  <div className="text-slate-500 font-mono text-[10px]">DSC ID: {orderDetails.dscId || 'IN-CCA-GOV-99420-A1'}</div>
                  <div className="text-slate-500 text-[10px]">Timestamp: 28-Oct-2026 14:48:12 IST</div>
                </div>
              </div>

              {/* Right: Security QR Code & Verify link */}
              <div className="flex items-center justify-end gap-3 p-2 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-right text-[10px] text-slate-500">
                  <span className="font-bold text-slate-800 block">Scan to Verify</span>
                  <span>National Portal Vault</span>
                  <div className="font-mono text-[9px] text-slate-400 mt-0.5">Hash: #8F92A1</div>
                </div>
                <div className="w-12 h-12 bg-white border border-slate-300 rounded flex items-center justify-center p-1 text-slate-900 shrink-0">
                  <QrCode className="w-10 h-10" />
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Bottom Action Controls */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Official statutory record automatically archived in central AICTE vault.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onCopyNotice}
              className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Dispatch Text</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Order</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
