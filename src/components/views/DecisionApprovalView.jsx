import React, { useState } from 'react';
import { 
  Gavel, 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  Key, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Printer, 
  Send,
  AlertCircle
} from 'lucide-react';
import { STATUTORY_DECISIONS } from '../../data/mockData';

export default function DecisionApprovalView({ 
  currentCollege, 
  officer, 
  onSignAndSubmitDecision,
  onBackToInspection
}) {
  const [selectedDecisionId, setSelectedDecisionId] = useState('deficiency');
  const selectedDecision = STATUTORY_DECISIONS.find((d) => d.id === selectedDecisionId) || STATUTORY_DECISIONS[0];
  const [letterDraft, setLetterDraft] = useState(selectedDecision.defaultLetter);
  const [legalDeclarationChecked, setLegalDeclarationChecked] = useState(true);
  const [dscPin, setDscPin] = useState('9942');
  const [isSigning, setIsSigning] = useState(false);

  const handleDecisionChange = (decisionId) => {
    setSelectedDecisionId(decisionId);
    const dec = STATUTORY_DECISIONS.find((d) => d.id === decisionId);
    if (dec) {
      setLetterDraft(dec.defaultLetter);
    }
  };

  const handleApplySignature = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!legalDeclarationChecked) {
      setLegalDeclarationChecked(true);
    }

    setIsSigning(true);
    setTimeout(() => {
      setIsSigning(false);
      onSignAndSubmitDecision({
        decision: selectedDecision,
        letterText: letterDraft,
        date: '28 October 2026',
        refNumber: selectedDecisionId === 'deficiency' ? 'AICTE/WRO/SCRUTINY/2026/4821-DEF' :
                   selectedDecisionId === 'reduced_seats' ? 'AICTE/WRO/APPROVAL/2026/4821-COND' :
                   selectedDecisionId === 'physical_inspection' ? 'AICTE/WRO/EVC/2026/4821-ORD' :
                   'AICTE/WRO/REJECT/2026/4821-REJ',
        collegeName: currentCollege.name,
        collegeId: currentCollege.id,
        officerName: officer.name,
        dscId: officer.dscId,
      });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-28 pt-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Stage 4 Masthead */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold font-mono border border-blue-200">
              <Gavel className="w-3.5 h-3.5 text-blue-600" />
              STAGE 4: STATUTORY SIGN-OFF
            </span>
            <span className="text-xs font-mono font-bold text-slate-500">
              Application Dossier #4821
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Final Scrutiny Decision & Statutory Order
            </h1>
            <p className="text-sm font-semibold text-slate-700">
              {currentCollege.name}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span>AICTE ID: {currentCollege.id}</span>
              <span>•</span>
              <span>Region: Western (WRO-MH)</span>
              <span>•</span>
              <span>AISHE: {currentCollege.aisheCode}</span>
            </div>
          </div>

          {/* Open Discrepancies Callout */}
          <div className="p-4 bg-rose-50/90 border border-rose-200 rounded-xl space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-900">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>2 Open Discrepancies Requiring Statutory Action:</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-800">
              <div className="p-2.5 bg-white rounded-lg border border-rose-200 flex items-start gap-2">
                <span className="font-mono font-bold text-rose-700">01</span>
                <span>
                  <strong>Land Deed Expiry Mismatch:</strong> Lease deed cites 31-Dec-2038; Maharashtra IGR registry shows encumbrance expiring 14-Aug-2026.
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-rose-200 flex items-start gap-2">
                <span className="font-mono font-bold text-rose-700">02</span>
                <span>
                  <strong>Sanctioned Intake Overclaim:</strong> College requested 180 seats; SPPU University Affiliation endorses maximum 120 seats (60 excess seats).
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1: Select Statutory Scrutiny Order */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Select Statutory Scrutiny Order (Step 1 of 2)
            </h2>
            <span className="text-xs text-slate-500">Choose regulatory outcome</span>
          </div>

          <div className="space-y-3">
            {STATUTORY_DECISIONS.map((decision) => {
              const isSelected = selectedDecisionId === decision.id;
              return (
                <label
                  key={decision.id}
                  onClick={() => handleDecisionChange(decision.id)}
                  className={`block relative rounded-2xl border p-5 shadow-sm cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-50/40 border-blue-600 ring-2 ring-blue-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <input
                      type="radio"
                      name="statutory_decision"
                      checked={isSelected}
                      onChange={() => handleDecisionChange(decision.id)}
                      className="mt-1 w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-600"
                    />

                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-sm font-bold text-slate-900">
                          {decision.label}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                          decision.badgeColor === 'blue' ? 'bg-blue-100 text-blue-800' :
                          decision.badgeColor === 'amber' ? 'bg-amber-100 text-amber-800' :
                          decision.badgeColor === 'crimson' ? 'bg-rose-100 text-rose-800' :
                          'bg-slate-200 text-slate-800'
                        }`}>
                          {decision.badge}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {decision.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs font-medium pt-1">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-blue-900 font-mono text-[11px]">{decision.portalAction}</span>
                      </div>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Step 2: Live Statutory Communication Dispatch Editor */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <label htmlFor="letter-draft" className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Statutory Communication Dispatch to Institution (AICTE Letterhead)
              </label>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Official WRO Mumbai Format
            </span>
          </div>

          <p className="text-xs text-slate-500 leading-normal">
            The text below will be formally dispatched on AICTE Western Regional Office letterhead to the registered Principal and Trust emails. You may refine the wording before applying your Digital Signature Certificate (DSC).
          </p>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">
              Dispatch Ref: {selectedDecisionId === 'deficiency' ? 'AICTE/WRO/SCRUTINY/2026/4821-DEF' :
                             selectedDecisionId === 'reduced_seats' ? 'AICTE/WRO/APPROVAL/2026/4821-COND' :
                             selectedDecisionId === 'physical_inspection' ? 'AICTE/WRO/EVC/2026/4821-ORD' :
                             'AICTE/WRO/REJECT/2026/4821-REJ'}
            </div>
            <textarea
              id="letter-draft"
              rows={9}
              value={letterDraft}
              onChange={(e) => setLetterDraft(e.target.value)}
              className="w-full text-xs font-mono p-3.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 leading-relaxed resize-y"
            />
            <div className="flex justify-between items-center text-[11px] text-slate-500 px-1 pt-1">
              <span>Automatically harmonized from evidence diffs</span>
              <span className="font-mono">{letterDraft.length} characters</span>
            </div>
          </div>
        </div>

        {/* Step 3: Officer Digital Signature Certificate (DSC) Sign-off */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          
          {/* Officer Identity Card */}
          <div className="flex items-center gap-3.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-11 h-11 rounded-full bg-[#0F2942] text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              {officer.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-slate-900">{officer.name}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs text-slate-500">{officer.designation}</p>
              <p className="text-[11px] text-slate-600 font-mono mt-0.5">
                Government DSC Token ID: <strong className="text-slate-900">{officer.dscId}</strong>
              </p>
            </div>
          </div>

          {/* Legal Compliance Declaration Checkbox */}
          <label className="flex items-start gap-3 p-3.5 bg-blue-50/60 border border-blue-200 rounded-xl cursor-pointer">
            <input
              type="checkbox"
              checked={legalDeclarationChecked}
              onChange={(e) => setLegalDeclarationChecked(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-600 border-slate-300 cursor-pointer"
            />
            <span className="text-xs text-slate-800 leading-relaxed select-none">
              I have personally reviewed the uploaded papers against official state land registries and university sanction databases. I declare this statutory scrutiny decision under AICTE Approval Process Regulations and provisions of Section 10(k) of the AICTE Act 1987.
            </span>
          </label>

          {/* Token Security PIN */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-slate-500" />
              <label htmlFor="dsc-pin" className="text-xs font-semibold text-slate-700">
                Hardware DSC Token PIN:
              </label>
              <input
                id="dsc-pin"
                type="password"
                maxLength={6}
                value={dscPin}
                onChange={(e) => setDscPin(e.target.value)}
                className="w-24 px-2.5 py-1 text-xs font-mono text-center rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              Cryptographic Token: USB Dongle / e-Sign Ready
            </span>
          </div>

          {/* Big Confirm & Apply Digital Signature Button */}
          <div className="pt-2">
            <button
              onClick={handleApplySignature}
              disabled={isSigning}
              className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-40"
            >
              <Key className="w-4 h-4" />
              <span>
                {isSigning 
                  ? 'Applying Cryptographic DSC Signature & Dispatching Notice...' 
                  : 'Confirm & Apply Digital Signature (DSC)'}
              </span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

        {/* Back navigation */}
        <div className="flex justify-between items-center text-xs text-slate-500 px-2">
          <button
            onClick={onBackToInspection}
            className="text-blue-600 hover:underline flex items-center gap-1 font-semibold"
          >
            ← Back to Split-Screen Document Inspection
          </button>
          <span>All actions logged in immutable national audit trail</span>
        </div>

      </div>
    </div>
  );
}
