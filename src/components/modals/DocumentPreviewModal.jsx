import React from 'react';
import { X, Download, Printer, ShieldCheck, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function DocumentPreviewModal({ document, onClose, onOpenExplanation }) {
  if (!document) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0F2942] text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-blue-300" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 block">
                Official Document Inspection • {document.category}
              </span>
              <h3 className="text-base font-bold text-white truncate">{document.name}</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
              title="Close Inspection"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split between Document Sheet and Verification Details */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50">
          
          {/* Left: Realistic Rendered Document Certificate (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-300 shadow-sm p-6 sm:p-8 relative flex flex-col font-serif text-slate-800">
            {/* Government / Institutional Watermark / Header */}
            <div className="text-center border-b-2 border-slate-800 pb-4 mb-4">
              <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500">
                Government of Maharashtra • Department of Registrations & Stamps
              </div>
              <h4 className="text-lg font-bold text-slate-900 mt-1 uppercase font-serif">
                {document.id === 'DOC-01' ? 'Perpetual Registered Lease Deed Certificate' :
                 document.id === 'DOC-02' ? 'Savitribai Phule Pune University Affiliation Order' :
                 document.id === 'DOC-03' ? 'Fire & Life Safety Clearance Certificate' :
                 document.id === 'DOC-04' ? 'AICTE Mandatory Faculty Roster & Aadhaar Declaration' :
                 'Government Treasury Payment Reconciled Receipt'}
              </h4>
              <p className="text-xs text-slate-600 font-sans mt-0.5">
                Reference No: <span className="font-mono font-bold text-slate-900">{document.subTitle}</span>
              </p>
            </div>

            {/* Document Body Text */}
            <div className="space-y-3 text-xs leading-relaxed font-sans text-slate-700 flex-1">
              <p>
                <strong>Institution Name:</strong> Pune Institute of Technology & Research (Permanent ID: 1-9028341)
              </p>
              <p>
                <strong>Registered Location:</strong> Survey No. 42/1, Hinjawadi Phase-II, Pune, Maharashtra 411057
              </p>

              {document.id === 'DOC-01' && (
                <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-lg space-y-1.5 font-sans">
                  <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    Highlighted Date Clause under Inspection:
                  </div>
                  <p className="text-xs text-amber-950 font-mono bg-white p-2 rounded border border-amber-200">
                    "Clause 4(a): The Lessor hereby leases the said land measuring 5.2 Acres to the Lessee for a term expiring on 
                    <span className="bg-rose-200 text-rose-900 font-bold px-1.5 py-0.5 rounded ml-1">
                      31st December 2038
                    </span>."
                  </p>
                  <p className="text-[11px] text-amber-800">
                    Note: Cross-check against Maharashtra IGR registration ledger shows encumbrance was certified only until 14-Aug-2026.
                  </p>
                </div>
              )}

              {document.id === 'DOC-02' && (
                <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-lg space-y-1.5 font-sans">
                  <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    Sanctioned Seat Schedule (Academic Year 2026–27):
                  </div>
                  <table className="w-full text-left text-xs border border-slate-200 font-sans mt-1">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="p-1.5 border">Degree Course</th>
                        <th className="p-1.5 border">College Claimed</th>
                        <th className="p-1.5 border">SPPU Sanctioned</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-1.5 border font-medium">B.Tech Computer Engineering</td>
                        <td className="p-1.5 border font-mono">90 Seats</td>
                        <td className="p-1.5 border font-mono font-bold text-blue-700">60 Seats</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 border font-medium">B.Tech AI & Data Science</td>
                        <td className="p-1.5 border font-mono">90 Seats</td>
                        <td className="p-1.5 border font-mono font-bold text-blue-700">60 Seats</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td className="p-1.5 border">Total Intake Strength</td>
                        <td className="p-1.5 border text-rose-600 font-mono">180 Seats</td>
                        <td className="p-1.5 border text-emerald-700 font-mono">120 Seats Max</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {document.id === 'DOC-03' && (
                <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-lg space-y-1 font-sans">
                  <div className="text-xs font-bold text-rose-900">Fire Safety Validity:</div>
                  <p className="text-xs text-rose-800">
                    Inspected on 15-Aug-2024. Expiration date: <strong>14-Aug-2025</strong>. 
                    Current status: <strong>EXPIRED</strong>. Council norms require safety certificate valid through June 2026.
                  </p>
                </div>
              )}

              {document.id === 'DOC-04' && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg space-y-1 font-sans">
                  <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    Faculty Cadre Compliance:
                  </div>
                  <p className="text-xs text-emerald-800">
                    Total Full-time Teachers: <strong>38</strong> | Cadre Ratio <strong>1:15</strong> satisfied. 
                    All teachers linked with verified Aadhaar and PAN records.
                  </p>
                </div>
              )}

              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                Uploaded file: <span className="font-mono">{document.fileName}</span> ({document.fileSize}) • 
                Upload timestamp: {document.uploadedDate}
              </p>
            </div>

            {/* Simulated Official Seal & Digital Signature */}
            <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between font-sans">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-2 border-blue-900 flex items-center justify-center text-blue-900 text-[9px] font-bold uppercase text-center leading-tight">
                  GOVT<br/>SEAL
                </div>
                <div className="text-[10px] text-slate-500">
                  <span>Cryptographic Hash (SHA-256):</span>
                  <div className="font-mono text-[9px] text-slate-700">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-emerald-700 font-bold flex items-center justify-end gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Digital Signatures Intact
                </div>
                <div className="text-[10px] text-slate-500">Sub-Registrar Digital Token Validated</div>
              </div>
            </div>
          </div>

          {/* Right: Inspection Ledger & Discrepancy Summary (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Status Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Verification Outcome</span>
              <div className="flex items-center justify-between mt-1">
                <h4 className="text-sm font-bold text-slate-900">{document.statusLabel}</h4>
                <span className={`px-2.5 py-1 rounded text-xs font-semibold ${
                  document.statusColor === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
                  document.statusColor === 'amber' ? 'bg-amber-100 text-amber-800' :
                  'bg-rose-100 text-rose-800'
                }`}>
                  {document.status === 'verified' ? 'Compliant' : 'Action Required'}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{document.details}</p>
            </div>

            {/* Comparison Details */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Side-by-Side Verification Check</span>
              
              <div className="space-y-1.5">
                <div className="text-[11px] text-slate-500 font-medium">Data Extracted from Scanned Paper:</div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-900">
                  {document.comparison.written}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="text-[11px] text-slate-500 font-medium">Record in Official Government Registry:</div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-900">
                  {document.comparison.official}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-950 leading-relaxed">
                <strong>Plain English Guidance:</strong> {document.comparison.note}
              </div>
            </div>

            {/* Action Buttons */}
            {document.hasAction && (
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Recommended Action</span>
                <p className="text-xs text-slate-600 leading-normal">
                  If you represent the college, submit an official clarification or revised letter directly to the scrutiny desk.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenExplanation) onOpenExplanation(document);
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Submit Clarification / Revised Paper</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="py-2 px-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs transition-colors"
            >
              Done Viewing
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
