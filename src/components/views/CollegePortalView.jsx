import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle, 
  Eye, 
  RefreshCw, 
  Upload, 
  Lock, 
  MapPin, 
  Check
} from 'lucide-react';

export default function CollegePortalView({ 
  currentCollege, 
  documents, 
  onViewDocument, 
  onOpenExplanation,
  onUploadDocument,
  onSubmitDossier
}) {
  const [legalChecked, setLegalChecked] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredDocs = documents.filter((doc) => {
    if (activeTab === 'attention') return doc.status === 'needs_check' || doc.status === 'expired';
    if (activeTab === 'verified') return doc.status === 'verified';
    return true;
  });

  const handleSimulatedFileUpload = (docId) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        onUploadDocument(docId, file.name);
      }
    };
    input.click();
  };

  const handleFormSubmit = () => {
    if (!legalChecked) {
      alert("Please confirm the institutional declaration before submitting your dossier.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitDossier();
    }, 500);
  };

  const attentionCount = documents.filter(d => d.status === 'needs_check' || d.status === 'expired').length;
  const verifiedCount = documents.filter(d => d.status === 'verified').length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 pt-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Institutional Summary Header */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className="font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  PID: {currentCollege.id}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                  AISHE: {currentCollege.aisheCode}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                  Cycle {currentCollege.academicCycle}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {currentCollege.name}
              </h1>
              <p className="text-xs text-slate-500">
                {currentCollege.approvalType} • Registered Trust: {currentCollege.trustName}
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Active Submission Session</span>
              </span>
            </div>
          </div>

          {/* Minimalist Progress Strip */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Dossier Verification Progress</span>
              <span className="font-mono text-slate-600 font-bold">
                {currentCollege.progress.uploaded} of {currentCollege.progress.total} Uploaded ({currentCollege.progress.percent}%)
              </span>
            </div>

            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-emerald-500 transition-all duration-500" 
                style={{ width: `${(currentCollege.progress.validated / currentCollege.progress.total) * 100}%` }}
              ></div>
              <div 
                className="h-full bg-amber-400 transition-all duration-500" 
                style={{ width: `${(currentCollege.progress.actionNeeded / currentCollege.progress.total) * 100}%` }}
              ></div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-600 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{currentCollege.progress.validated} Verified</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>{currentCollege.progress.actionNeeded} Clarifications Needed</span>
              </span>
            </div>
          </div>
        </div>

        {/* Filter Tabs for Documents */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-600" />
            <h2 className="text-sm font-bold text-slate-900">Mandatory Regulatory Certificates</h2>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded-md font-semibold transition-all ${
                activeTab === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({documents.length})
            </button>
            <button
              onClick={() => setActiveTab('attention')}
              className={`px-3 py-1 rounded-md font-semibold transition-all ${
                activeTab === 'attention' ? 'bg-white text-rose-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Needs Action ({attentionCount})
            </button>
            <button
              onClick={() => setActiveTab('verified')}
              className={`px-3 py-1 rounded-md font-semibold transition-all ${
                activeTab === 'verified' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Verified ({verifiedCount})
            </button>
          </div>
        </div>

        {/* Document Cards List */}
        <div className="space-y-3">
          {filteredDocs.map((doc, _idx) => (
            <div 
              key={doc.id}
              className={`bg-white rounded-xl border p-5 shadow-xs transition-all space-y-3.5 ${
                doc.status === 'needs_check' ? 'border-amber-300' :
                doc.status === 'expired' ? 'border-rose-300' :
                'border-slate-200'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5 min-w-0">
                  <div className="text-[11px] font-mono text-slate-600 font-medium">
                    {doc.id} • {doc.category}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    {doc.subTitle}
                  </p>
                </div>

                {/* Status Badge */}
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 flex items-center gap-1 ${
                  doc.statusColor === 'emerald' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                  doc.statusColor === 'amber' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                  'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  {doc.statusColor === 'emerald' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  {doc.statusColor === 'amber' && <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />}
                  {doc.statusColor === 'crimson' && <AlertCircle className="w-3.5 h-3.5 text-rose-600" />}
                  <span>{doc.statusLabel}</span>
                </span>
              </div>

              {/* Clean Discrepancy Comparison Box */}
              {(doc.status === 'needs_check' || doc.status === 'expired') && (
                <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 text-amber-950 space-y-2 text-xs">
                  <div className="font-semibold flex items-center gap-1.5 text-amber-900">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                    <span>Discrepancy Details</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {doc.details}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                    <div className="bg-white p-2 rounded border border-amber-200">
                      <span className="text-slate-700 font-medium block">Uploaded Document:</span>
                      <span className="font-semibold text-slate-900">{doc.comparison.written}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-amber-200">
                      <span className="text-slate-700 font-medium block">Government Registry Record:</span>
                      <span className="font-semibold text-slate-900">{doc.comparison.official}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Attached File Strip */}
              {doc.status !== 'expired' ? (
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-semibold text-slate-900 block truncate">{doc.fileName}</span>
                      <span className="text-[11px] text-slate-500">{doc.fileSize} • Uploaded {doc.uploadedDate}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onViewDocument(doc)}
                    className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold transition-colors shrink-0 flex items-center gap-1.5 text-xs shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>View PDF</span>
                  </button>
                </div>
              ) : (
                /* Clean Upload Dropzone */
                <div 
                  onClick={() => handleSimulatedFileUpload(doc.id)}
                  className="cursor-pointer border border-dashed border-rose-300 hover:border-blue-500 bg-rose-50/30 hover:bg-blue-50/20 rounded-lg p-5 text-center transition-all flex flex-col items-center justify-center space-y-1.5"
                >
                  <Upload className="w-6 h-6 text-rose-500" />
                  <div className="text-xs font-bold text-slate-900">
                    Upload Updated Safety Certificate (PDF)
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Accepted formats: Scanned PDF • Valid through academic cycle
                  </p>
                  <button
                    type="button"
                    className="mt-1 px-3 py-1 rounded bg-white border border-slate-300 text-slate-800 text-xs font-semibold shadow-2xs hover:bg-slate-50"
                  >
                    Select File
                  </button>
                </div>
              )}

              {/* Action Buttons Footer */}
              <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-100">
                <button
                  onClick={() => handleSimulatedFileUpload(doc.id)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Replace Certificate</span>
                </button>

                {doc.hasAction && (
                  <button
                    onClick={() => onOpenExplanation(doc)}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Provide Clarification</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Campus Infrastructure Proofs */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-sm font-bold text-slate-900">
                Institutional Infrastructure Verification
              </h3>
              <p className="text-xs text-slate-500">
                Geo-tagged proofs of academic facilities and laboratories
              </p>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-600" />
              <span>Verified Location</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
              <div className="h-32 bg-slate-200 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
                  alt="Main Campus Building"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  Admin Block
                </span>
              </div>
              <div className="p-2.5 text-xs">
                <div className="font-semibold text-slate-800">Main Campus Wing</div>
                <div className="text-[11px] text-slate-500 font-mono">18.5204° N, 73.8567° E</div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
              <div className="h-32 bg-slate-200 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80"
                  alt="Computing Center"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  Computing Center
                </span>
              </div>
              <div className="p-2.5 text-xs">
                <div className="font-semibold text-slate-800">Computing & CAD Laboratory</div>
                <div className="text-[11px] text-slate-500 font-mono">18.5209° N, 73.8571° E • 120 Workstations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Declaration Card */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-start gap-3">
            <input
              id="legal-dec"
              type="checkbox"
              checked={legalChecked}
              onChange={(e) => setLegalChecked(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
            />
            <label htmlFor="legal-dec" className="text-xs text-slate-700 cursor-pointer select-none space-y-0.5">
              <span className="font-bold text-slate-900 block">Institutional Verification Declaration</span>
              <span className="text-slate-600 block leading-relaxed">
                I hereby declare that all uploaded certificates, records, and student intake claims are authentic, legally valid, and duly approved by the governing body of the institution.
              </span>
            </label>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-1.5">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Authorized Signatory: <strong>Dr. R. K. Deshmukh (Principal)</strong></span>
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              Session Verified • IP: 103.21.58.12
            </span>
          </div>
        </div>

        {/* Final Submission Button */}
        <div className="pt-1">
          <button
            onClick={handleFormSubmit}
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Check className="w-4 h-4" />
            <span>{isSubmitting ? 'Submitting Dossier...' : 'Submit Dossier for Scrutiny'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
