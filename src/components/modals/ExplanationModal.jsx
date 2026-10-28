import React, { useState } from 'react';
import { X, Send, UploadCloud, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

export default function ExplanationModal({ document, onClose, onSubmitExplanation }) {
  if (!document) return null;

  const [explanationText, setExplanationText] = useState(
    document.id === 'DOC-01' 
      ? 'The sub-registrar lease deed was renewed on 12-Oct-2025. The updated registration volume receipt #SRH-88219 is attached herewith for officer verification.'
      : document.id === 'DOC-02'
      ? 'The affiliating University (SPPU) executive council meeting dated 20-Oct-2025 approved the additional 60 seats for B.Tech AI & Data Science. The revised provisional sanction letter is enclosed.'
      : 'The renewed Fire Safety inspection report has been received from PMRDA and is attached for review.'
  );

  const [attachedFileName, setAttachedFileName] = useState(
    document.id === 'DOC-01' ? 'Sub_Registrar_Deed_Renewal_Oct2025.pdf' :
    document.id === 'DOC-02' ? 'SPPU_Revised_Sanction_180Seats.pdf' :
    'PMRDA_Fire_NOC_Renewal_2026.pdf'
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitExplanation({
        docId: document.id,
        explanation: explanationText,
        fileName: attachedFileName,
      });
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#0F2942] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-blue-300" />
            <div>
              <h3 className="text-sm font-bold text-white">Submit Official Clarification</h3>
              <p className="text-xs text-slate-300">{document.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Flagged Issue Callout */}
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
            <div className="text-xs font-semibold text-amber-900 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Flagged Difference by Scrutiny Desk:</span>
            </div>
            <p className="text-xs text-amber-950 font-medium">
              {document.details}
            </p>
          </div>

          {/* Explanation Textarea */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-800">
              Institutional Explanation / Response to Officer:
            </label>
            <textarea
              rows={4}
              value={explanationText}
              onChange={(e) => setExplanationText(e.target.value)}
              required
              className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 leading-relaxed resize-none"
              placeholder="State your institutional clarification clearly in plain English..."
            />
            <span className="text-[11px] text-slate-400 block text-right">
              {explanationText.length} characters • Included in official audit trail
            </span>
          </div>

          {/* Attach Supplemental Document */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-800">
              Attach Supporting PDF / Rectified Certificate:
            </label>
            <div className="p-3 rounded-xl border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <UploadCloud className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-slate-900 block truncate max-w-xs">{attachedFileName}</span>
                  <span className="text-[11px] text-slate-500">PDF Document • 3.2 MB • Digitally Certified</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setAttachedFileName('Revised_Official_Evidence_' + Math.floor(Math.random() * 900 + 100) + '.pdf')}
                className="px-2.5 py-1 text-xs bg-white border border-slate-300 rounded font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Change File
              </button>
            </div>
          </div>

          {/* Declaration check */}
          <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <span>
              Submitted by <strong>Dr. R. K. Deshmukh (Principal)</strong> under AICTE institutional filing declarations.
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-sm flex items-center gap-1.5 disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Sending to Scrutiny Desk...' : 'Send Clarification to Officer'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
