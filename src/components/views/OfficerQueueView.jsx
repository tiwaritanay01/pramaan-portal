import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Search, 
  ArrowRight, 
  UserCheck, 
  School, 
  FileCheck, 
  ExternalLink,
  Filter,
  Check
} from 'lucide-react';

export default function OfficerQueueView({ 
  officer, 
  applications, 
  onOpenInspection,
  onQuickApprove,
  onNavigateToDecision
}) {
  const [filter, setFilter] = useState('needs_check');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = applications.filter((app) => {
    // Filter by tab
    if (filter === 'needs_check' && app.status !== 'needs_check') return false;
    if (filter === 'ready_decision' && app.status !== 'ready_decision') return false;
    if (filter === 'waiting_reply' && app.status !== 'waiting_reply') return false;

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = app.collegeName.toLowerCase().includes(q);
      const matchId = app.collegeId.toLowerCase().includes(q);
      const matchLoc = app.location.toLowerCase().includes(q);
      const matchCourse = app.course.toLowerCase().includes(q);
      return matchName || matchId || matchLoc || matchCourse;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 pt-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Officer Welcome & Region Masthead */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-blue-700">
              <UserCheck className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider">Government Regulatory Scrutiny Desk</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-semibold">
              Western Region • {officer.office}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                {officer.avatar}
              </div>
              <div className="min-w-0">
                <div className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                  <span>{officer.name}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  {officer.designation} • ID: <strong className="text-slate-700">{officer.id}</strong>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Live Regulatory Session
              </span>
            </div>
          </div>
        </div>

        {/* Executive Summary Metrics Strip (3-Stat Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-1">
            <div className="text-3xl font-extrabold text-blue-700 font-mono">{officer.assignedCount}</div>
            <div className="text-xs font-bold text-slate-900">Total Applications Assigned</div>
            <p className="text-[11px] text-slate-500">Under active scrutiny for Academic Year 2026–27</p>
          </div>

          <div className="bg-rose-50/80 rounded-2xl border border-rose-200/90 p-5 shadow-sm space-y-1">
            <div className="text-3xl font-extrabold text-rose-600 font-mono">{officer.discrepanciesCount}</div>
            <div className="text-xs font-bold text-rose-950">Date or Seat Mismatches</div>
            <p className="text-[11px] text-rose-700">Identified discrepancies requiring officer review</p>
          </div>

          <div className="bg-emerald-50/80 rounded-2xl border border-emerald-200/90 p-5 shadow-sm space-y-1">
            <div className="text-3xl font-extrabold text-emerald-700 font-mono">{officer.approvedTodayCount}</div>
            <div className="text-xs font-bold text-emerald-950">Clean Applications Approved Today</div>
            <p className="text-[11px] text-emerald-700">Digital signatures sealed & certificates dispatched</p>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              <button
                onClick={() => setFilter('needs_check')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  filter === 'needs_check'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>Needs Immediate Check</span>
                <span className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center ${
                  filter === 'needs_check' ? 'bg-white/25 text-white' : 'bg-rose-100 text-rose-800'
                }`}>
                  {applications.filter(a => a.status === 'needs_check').length}
                </span>
              </button>

              <button
                onClick={() => setFilter('ready_decision')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  filter === 'ready_decision'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>Ready for Decision</span>
                <span className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center ${
                  filter === 'ready_decision' ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-800'
                }`}>
                  {applications.filter(a => a.status === 'ready_decision').length}
                </span>
              </button>

              <button
                onClick={() => setFilter('waiting_reply')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  filter === 'waiting_reply'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>Waiting for College Reply</span>
                <span className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center ${
                  filter === 'waiting_reply' ? 'bg-white/25 text-white' : 'bg-amber-100 text-amber-800'
                }`}>
                  {applications.filter(a => a.status === 'waiting_reply').length}
                </span>
              </button>

              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filter === 'all'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                All ({applications.length})
              </button>
            </div>

            {/* Quick Search Field */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search college, ID, city..."
                className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
              />
            </div>

          </div>
        </div>

        {/* Workqueue Cards List */}
        <div className="space-y-4">
          {filteredApps.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-xs">
              No applications match this filter or search criteria.
            </div>
          ) : (
            filteredApps.map((app) => (
              <div 
                key={app.id}
                className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-sm transition-all space-y-4 ${
                  app.status === 'needs_check' ? 'border-rose-300 ring-1 ring-rose-200 hover:border-rose-400' :
                  app.status === 'ready_decision' ? 'border-emerald-200 hover:border-emerald-300' :
                  'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded ${
                        app.status === 'needs_check' ? 'bg-rose-100 text-rose-800' :
                        app.status === 'ready_decision' ? 'bg-emerald-100 text-emerald-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {app.statusLabel}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">• Assigned {app.assignedAgo}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {app.collegeName}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      College ID: <strong className="text-slate-800">{app.collegeId}</strong> • {app.location}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-[11px] font-mono font-bold text-slate-600 block">
                      {app.id}
                    </span>
                  </div>
                </div>

                {/* Course discipline */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2 text-xs text-slate-700">
                  <School className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold text-slate-900">{app.course}</span>
                  <span className="text-slate-400">•</span>
                  <span>Intake: {app.intakeRequested} seats requested ({app.intakeApproved} approved by University)</span>
                </div>

                {/* Discrepancy or Passed Banner */}
                {app.problemsCount > 0 ? (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-rose-950">
                    <AlertTriangle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                    <div className="space-y-0.5 text-xs">
                      <div className="font-bold text-rose-900">
                        {app.problemsCount} {app.problemsCount === 1 ? 'Problem' : 'Problems'} Found by Automated Check
                      </div>
                      <p className="text-rose-800 leading-relaxed font-medium">
                        {app.problemSummary}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-emerald-950 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-emerald-900">
                      All 18 Papers Match Official Records • Ready to Approve
                    </span>
                  </div>
                )}

                {/* Completeness Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between items-center text-xs text-slate-600">
                    <span>Verification Completeness</span>
                    <span className="font-mono font-bold text-slate-900">
                      {app.uploadedDocs} of {app.totalDocs} Papers Verified ({app.progressPercent}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        app.progressPercent === 100 ? 'bg-emerald-600' : 'bg-blue-600'
                      }`} 
                      style={{ width: `${app.progressPercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 flex-wrap gap-2">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Western Region Inspection Cadre
                  </span>

                  <div className="flex items-center gap-2">
                    {app.canQuickApprove && (
                      <button
                        onClick={() => onQuickApprove(app)}
                        className="py-2 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <Check className="w-4 h-4" />
                        <span>Quick Approve</span>
                      </button>
                    )}

                    <button
                      onClick={() => onOpenInspection(app)}
                      className="py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
                    >
                      <span>Open Review Console</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
