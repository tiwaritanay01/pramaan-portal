import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight, 
  Gavel, 
  Check, 
  Eye, 
  Clock, 
  Building2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function InspectionConsoleView({ 
  currentCollege, 
  discrepancies, 
  documents,
  onProceedToDecision,
  onResolveDiscrepancy
}) {
  const [selectedDocId, setSelectedDocId] = useState('DOC-01');
  const [zoomLevel, setZoomLevel] = useState(100);
  const [highlightDifferences, setHighlightDifferences] = useState(true);
  const [officerNote, setOfficerNote] = useState('');
  const [activePage, setActivePage] = useState(1);

  const selectedDoc = documents.find((d) => d.id === selectedDocId) || documents[0];

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 70), 160));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Application Scrutiny Dossier Header */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  Dossier #4821
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  Academic Cycle 2026–27
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200">
                  Stage 3: Split-Screen Evidence Review
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {currentCollege.name}
              </h1>
              <p className="text-xs text-slate-500 font-mono">
                College ID: <strong className="text-slate-800">{currentCollege.id}</strong> • Location: Pune, Maharashtra
              </p>
            </div>

            {/* Direct Link to Decision Stage */}
            <button
              onClick={onProceedToDecision}
              className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 self-start sm:self-auto shrink-0"
            >
              <Gavel className="w-4 h-4" />
              <span>Proceed to Statutory Decision</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Clean 3-Stat Verification Strip */}
          <div className="grid grid-cols-3 divide-x divide-slate-200 bg-slate-50 rounded-xl border border-slate-200/70 p-3 text-center">
            <div>
              <div className="text-xl font-extrabold text-emerald-700 font-mono">15</div>
              <div className="text-[11px] font-semibold text-slate-600">Passed Verification</div>
            </div>
            <div>
              <div className="text-xl font-extrabold text-amber-600 font-mono">2</div>
              <div className="text-[11px] font-semibold text-slate-600">Needs Officer Review</div>
            </div>
            <div>
              <div className="text-xl font-extrabold text-slate-500 font-mono">1</div>
              <div className="text-[11px] font-semibold text-slate-600">Waiting for Reply</div>
            </div>
          </div>
        </div>

        {/* SPLIT-SCREEN WORKSPACE: Left = Document Viewer (7 cols), Right = Discrepancy Diff Ledger (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Pane: Interactive Document Inspection Viewer (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            
            {/* Document Switcher Ribbon */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {documents.slice(0, 4).map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedDocId === doc.id
                      ? 'bg-[#0F2942] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{doc.name.split('(')[0].trim()}</span>
                  {(doc.status === 'needs_check' || doc.status === 'expired') && (
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Document Controls Bar */}
            <div className="bg-white rounded-xl border border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-slate-600 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-slate-800">{selectedDoc.fileName}</span>
                <span className="text-slate-400">•</span>
                <span className="text-[11px] text-slate-500">Page {activePage} of 4</span>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold text-blue-800">
                  <input
                    type="checkbox"
                    checked={highlightDifferences}
                    onChange={(e) => setHighlightDifferences(e.target.checked)}
                    className="rounded border-slate-300 text-blue-600 focus:ring-0"
                  />
                  <span>Highlight Discrepancies</span>
                </label>

                <div className="flex items-center border-l pl-3 gap-1">
                  <button
                    onClick={() => handleZoom(-10)}
                    className="p-1 rounded hover:bg-slate-100 text-slate-600"
                    title="Zoom out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-[11px] w-10 text-center">{zoomLevel}%</span>
                  <button
                    onClick={() => handleZoom(10)}
                    className="p-1 rounded hover:bg-slate-100 text-slate-600"
                    title="Zoom in"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setZoomLevel(100)}
                    className="p-1 rounded hover:bg-slate-100 text-slate-600"
                    title="Reset zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Simulated Document Canvas Container */}
            <div className="bg-slate-200/90 rounded-2xl border border-slate-300 p-6 min-h-[580px] flex items-center justify-center overflow-auto shadow-inner relative">
              
              <div 
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                className="w-full max-w-xl bg-white border border-slate-400 shadow-xl rounded-lg p-8 sm:p-10 font-serif text-slate-900 transition-transform duration-150 select-text"
              >
                {/* Government Stamp / Certificate Masthead */}
                <div className="text-center border-b-2 border-slate-900 pb-4 mb-4">
                  <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-500">
                    Government of Maharashtra • Registration & Stamps Directorate
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1 uppercase font-serif">
                    {selectedDoc.id === 'DOC-01' ? 'Perpetual Registered Lease Deed Certificate' :
                     selectedDoc.id === 'DOC-02' ? 'Savitribai Phule Pune University Affiliation Sanction' :
                     selectedDoc.id === 'DOC-03' ? 'Fire & Life Safety NOC Certificate' :
                     'Mandatory Faculty Roster (Format-A)'}
                  </h3>
                  <div className="text-xs text-slate-600 font-sans mt-0.5">
                    Sub-Registrar Haveli No. 3 • Registered Doc #{selectedDoc.id}
                  </div>
                </div>

                {/* Simulated Certificate Clauses */}
                <div className="space-y-4 text-xs font-sans leading-relaxed text-slate-700">
                  <p>
                    <strong>Name of Educational Institute:</strong> Pune Institute of Technology & Research
                  </p>
                  <p>
                    <strong>Trust Name:</strong> Shri Shivaji Educational & Technological Trust
                  </p>
                  <p>
                    <strong>Campus Address:</strong> Survey No. 42/1, Hinjawadi Phase-II, Pune, Maharashtra 411057
                  </p>

                  {/* Highlighted Discrepancy Text Area */}
                  {selectedDoc.id === 'DOC-01' && (
                    <div className={`p-4 rounded-lg border transition-all ${
                      highlightDifferences 
                        ? 'bg-rose-50 border-rose-300 ring-2 ring-rose-200' 
                        : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="text-xs font-bold text-rose-900 flex items-center justify-between mb-1">
                        <span>Clause 4(a): Lease Period & Term of Possession</span>
                        {highlightDifferences && (
                          <span className="text-[10px] bg-rose-200 text-rose-900 font-mono px-1.5 py-0.5 rounded font-bold">
                            FLAGGED DATE
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-800 font-mono leading-relaxed bg-white p-2.5 rounded border border-slate-200">
                        "The Lessor hereby conveys and leases the said demised plot of 5.2 Acres to the Lessee for institutional use for a term commencing 15 August 1996 and expiring on 
                        <span className={highlightDifferences ? 'bg-rose-200 text-rose-900 font-extrabold px-1 rounded ml-1' : ''}>
                          31st December 2038
                        </span>."
                      </p>
                      <div className="text-[11px] text-slate-600 mt-2 font-sans">
                        • Verified against Maharashtra IGR registration volume: The original stamped lease terminated in 2026. The date '2038' shows signs of handwritten interpolation.
                      </div>
                    </div>
                  )}

                  {selectedDoc.id === 'DOC-02' && (
                    <div className={`p-4 rounded-lg border transition-all ${
                      highlightDifferences 
                        ? 'bg-amber-50 border-amber-300 ring-2 ring-amber-200' 
                        : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="text-xs font-bold text-amber-900 mb-1">
                        Schedule of Approved Sanctioned Capacity:
                      </div>
                      <div className="bg-white p-2.5 rounded border border-slate-200 font-mono text-xs space-y-1">
                        <div>Course 1: B.Tech Computer Engineering - <strong className="text-blue-700">60 Seats</strong></div>
                        <div>Course 2: B.Tech AI & Data Science - <strong className="text-blue-700">60 Seats</strong></div>
                        <div className="pt-1 border-t text-amber-900 font-bold">
                          Total Sanctioned Capacity by SPPU: 120 Seats Only
                        </div>
                      </div>
                      <p className="text-[11px] text-amber-800 mt-2">
                        College application dossier requested 180 seats. The additional 60 seats lack valid university executive council sanction.
                      </p>
                    </div>
                  )}

                  {selectedDoc.id === 'DOC-03' && (
                    <div className="p-4 bg-rose-50 border border-rose-300 rounded-lg text-xs space-y-1">
                      <div className="font-bold text-rose-900">Certificate Validity:</div>
                      <p className="text-rose-800">
                        Date of Inspection: 15-Aug-2024. Expiry Date: <strong>14-Aug-2025</strong>. 
                        Validity period has lapsed. Renewal inspection report is mandatory.
                      </p>
                    </div>
                  )}

                  {selectedDoc.id === 'DOC-04' && (
                    <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-lg text-xs space-y-1">
                      <div className="font-bold text-emerald-900">Faculty Cadre Ratio:</div>
                      <p className="text-emerald-800">
                        38 Full-time Teachers listed. AICTE 1:15 ratio requirement is satisfied.
                        Aadhaar verification: 38/38 complete.
                      </p>
                    </div>
                  )}

                  <p className="text-[11px] text-slate-500 pt-4 border-t border-slate-200">
                    Extracted via OCR verification engine • Reference SHA-256: 7f8a3c2...b912 • Stamped by Registrar
                  </p>
                </div>

                {/* Stamped Seal & Signature Footer */}
                <div className="mt-8 pt-4 border-t border-slate-300 flex items-center justify-between text-[10px] font-sans text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full border-2 border-slate-800 flex items-center justify-center font-bold text-[8px] uppercase">
                      SEAL
                    </div>
                    <div>
                      <div>Government of Maharashtra</div>
                      <div className="font-mono">Registration Dept</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-700 font-bold">Digital Signature Certified</div>
                    <div>Token: IN-CCA-MAH-4921</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Document Page Navigator */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-2">
              <span>Viewing Scanned Institutional Dossier</span>
              <div className="flex items-center gap-2">
                <button
                  disabled={activePage === 1}
                  onClick={() => setActivePage((p) => Math.max(p - 1, 1))}
                  className="p-1 rounded hover:bg-slate-200 disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono">Page {activePage} of 4</span>
                <button
                  disabled={activePage === 4}
                  onClick={() => setActivePage((p) => Math.min(p + 1, 4))}
                  className="p-1 rounded hover:bg-slate-200 disabled:opacity-40"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Pane: Discrepancy Diff Ledger & Officer Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Things to Check & Discrepancy Ledger (2)
              </h2>
              <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                Statutory Attention
              </span>
            </div>

            {/* Discrepancy Item 1: Land Lease Deed */}
            <div className="bg-white rounded-2xl border border-rose-200 p-5 shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                    Date Does Not Match
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1">Land Lease Agreement</h3>
                  <p className="text-xs text-slate-500 font-mono">Paper #REG-10492 • Sub-Registrar Haveli No. 3</p>
                </div>
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
              </div>

              {/* Side-by-Side Comparison Box */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-700">
                  <span className="text-slate-500">Date written on paper:</span>
                  <span className="font-mono font-bold text-rose-700">31 Dec 2038 (Changed)</span>
                </div>
                <div className="h-px bg-slate-200"></div>
                <div className="flex justify-between items-center text-slate-700">
                  <span className="text-slate-500">Government office record:</span>
                  <span className="font-mono font-bold text-slate-900">14 Aug 2026 (Expired earlier)</span>
                </div>
                <p className="text-[11px] text-slate-600 pt-1 leading-relaxed">
                  The end date on the uploaded paper does not match the official government land record at the Sub-Registrar office.
                </p>
              </div>

              {/* Officer Decision Triggers for this Discrepancy */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => onResolveDiscrepancy('DISC-01', 'request_clarification')}
                  className="flex-1 py-2 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs transition-colors"
                >
                  Request Fresh Deed
                </button>
                <button
                  onClick={() => onResolveDiscrepancy('DISC-01', 'flag_violation')}
                  className="py-2 px-3 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs transition-colors"
                >
                  Flag as Violation
                </button>
              </div>
            </div>

            {/* Discrepancy Item 2: Student Seat Permission */}
            <div className="bg-white rounded-2xl border border-amber-200 p-5 shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    Seat Count Mismatch
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1">Student Seat Permission</h3>
                  <p className="text-xs text-slate-500 font-mono">University: SPPU Pune</p>
                </div>
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
              </div>

              {/* Clear Side-by-Side Comparison Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                  <span className="text-[11px] text-slate-500 block mb-0.5">College asked for:</span>
                  <div className="text-xl font-bold text-slate-900 font-mono">180</div>
                  <span className="text-[10px] text-slate-500">Total requested seats</span>
                </div>

                <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
                  <span className="text-[11px] text-blue-700 font-medium block mb-0.5">University allows:</span>
                  <div className="text-xl font-bold text-blue-800 font-mono">120</div>
                  <span className="text-[10px] text-blue-600">Sanctioned seats max</span>
                </div>
              </div>

              <div className="p-2.5 bg-amber-50/70 rounded-lg text-xs text-amber-900 leading-relaxed">
                Difference: <strong>60 unapproved seats</strong> claimed by the college without revised university sanction letter.
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => onResolveDiscrepancy('DISC-02', 'cap_seats')}
                  className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-sm"
                >
                  Cap to 120 Seats Only
                </button>
                <button
                  onClick={() => onResolveDiscrepancy('DISC-02', 'request_sanction')}
                  className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  Ask for University Letter
                </button>
              </div>
            </div>

            {/* Officer Observation Notes Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
              <label className="block text-xs font-bold text-slate-900">
                Officer Scrutiny Observations (Internal Cadre Record):
              </label>
              <textarea
                rows={3}
                value={officerNote}
                onChange={(e) => setOfficerNote(e.target.value)}
                placeholder="Enter confidential scrutiny notes regarding land deed stamp or university intake..."
                className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 leading-relaxed resize-none"
              />
              <span className="text-[11px] text-slate-400 block text-right">
                Encrypted & attached to statutory dossier log
              </span>
            </div>

            {/* Sticky Bottom Action to Proceed to Final Decision */}
            <div className="bg-[#0F2942] rounded-2xl p-5 text-white space-y-3 shadow-md">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Next Regulatory Step:</span>
                <span className="text-amber-400 font-bold font-mono">Stage 4: Sign-off</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Review complete. Issue statutory order (7-day deficiency notice, reduced seats approval, or physical inspection).
              </p>
              <button
                onClick={onProceedToDecision}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Gavel className="w-4 h-4" />
                <span>Issue Official Scrutiny Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
