import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  Gavel, 
  HelpCircle, 
  LogOut, 
  LogIn
} from 'lucide-react';

export default function Header({ 
  activeView, 
  setActiveView, 
  activeRole, 
  isAuthenticated,
  onSignOut,
  currentUser,
  currentCollege
}) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0F2942] text-white shadow-md">
      {/* National Tricolor Top Stripe */}
      <div className="h-1 w-full flex">
        <span className="flex-1 bg-[#FF9933]"></span>
        <span className="flex-1 bg-white"></span>
        <span className="flex-1 bg-[#138808]"></span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          
          {/* Left: Clean Brand Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button 
              onClick={() => {
                if (!isAuthenticated) {
                  setActiveView('sign-in');
                } else if (activeRole === 'officer') {
                  setActiveView('officer-queue');
                } else {
                  setActiveView('college-portal');
                }
              }}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500/30 transition-all">
                <ShieldCheck className="w-5 h-5 text-[#60a5fa]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[9px] tracking-wider font-semibold uppercase text-slate-300 leading-none">
                  <span className="text-[#FF9933]">भारत सरकार</span> • GOVT OF INDIA
                </div>
                <div className="text-lg sm:text-xl font-black tracking-wider text-white font-mono uppercase leading-tight mt-0.5">
                  PRAMAAN
                </div>
              </div>
            </button>
          </div>

          {/* Center: Clean Single-Line Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {!isAuthenticated && (
              <>
                <button
                  onClick={() => setActiveView('sign-in')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    activeView === 'sign-in'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Portal Login</span>
                </button>
                <button
                  onClick={() => setActiveView('how-it-works')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    activeView === 'how-it-works'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Guide</span>
                </button>
              </>
            )}

            {/* Authenticated as College */}
            {isAuthenticated && activeRole === 'college' && (
              <>
                <button
                  onClick={() => setActiveView('college-portal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    activeView === 'college-portal'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>College Portal</span>
                </button>

                <button
                  onClick={() => setActiveView('how-it-works')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    activeView === 'how-it-works'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Guidelines</span>
                </button>
              </>
            )}

            {/* Authenticated as Officer */}
            {isAuthenticated && activeRole === 'officer' && (
              <>
                <button
                  onClick={() => setActiveView('officer-queue')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    activeView === 'officer-queue'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Officer Desk</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-900 text-[10px] font-bold">
                    2
                  </span>
                </button>

                <button
                  onClick={() => setActiveView('inspection-console')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    activeView === 'inspection-console'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Inspection</span>
                </button>

                <button
                  onClick={() => setActiveView('decision-approval')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    activeView === 'decision-approval'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Gavel className="w-3.5 h-3.5" />
                  <span>Decisions</span>
                </button>

                <button
                  onClick={() => setActiveView('how-it-works')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    activeView === 'how-it-works'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Guide</span>
                </button>
              </>
            )}
          </nav>

          {/* Right: Clean Profile Status & Logout */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {!isAuthenticated ? (
              <button
                onClick={() => setActiveView('sign-in')}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all whitespace-nowrap"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* Role Pill */}
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border whitespace-nowrap ${
                  activeRole === 'officer'
                    ? 'bg-purple-500/20 text-purple-200 border-purple-400/30'
                    : 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30'
                }`}>
                  {activeRole === 'officer' ? 'Admin' : 'College'}
                </span>

                {/* Name & ID */}
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-semibold text-white leading-tight whitespace-nowrap">
                    {activeRole === 'officer' ? (currentUser?.name || 'Dr. R. Sharma') : (currentCollege?.principal || 'Principal')}
                  </div>
                  <div className="text-[10px] text-slate-300 font-mono whitespace-nowrap">
                    {activeRole === 'officer' ? 'RO-419 • WRO' : `PID: ${currentCollege?.id}`}
                  </div>
                </div>

                {/* Avatar Initials */}
                <div className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                  {activeRole === 'officer' ? 'RS' : 'RD'}
                </div>

                {/* Logout Button */}
                <button
                  onClick={onSignOut}
                  className="px-2.5 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/30 hover:border-rose-400 text-xs font-medium flex items-center gap-1.5 transition-all whitespace-nowrap"
                  title="Logout"
                >
                  <LogOut className="w-3.5 h-3.5 text-rose-300" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mobile RBAC Navigation Ribbon */}
      <div className="md:hidden flex items-center justify-between px-3 py-1.5 bg-[#0b2034] border-t border-white/10 text-xs overflow-x-auto gap-2 no-scrollbar">
        {!isAuthenticated ? (
          <>
            <button
              onClick={() => setActiveView('sign-in')}
              className={`px-2.5 py-1 rounded text-xs whitespace-nowrap ${
                activeView === 'sign-in' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveView('how-it-works')}
              className={`px-2.5 py-1 rounded text-xs whitespace-nowrap ${
                activeView === 'how-it-works' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300'
              }`}
            >
              Guide
            </button>
          </>
        ) : activeRole === 'college' ? (
          <>
            <button
              onClick={() => setActiveView('college-portal')}
              className={`px-2.5 py-1 rounded text-xs whitespace-nowrap ${
                activeView === 'college-portal' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300'
              }`}
            >
              College Desk
            </button>
            <button
              onClick={() => setActiveView('how-it-works')}
              className={`px-2.5 py-1 rounded text-xs whitespace-nowrap ${
                activeView === 'how-it-works' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300'
              }`}
            >
              Guidelines
            </button>
            <button
              onClick={onSignOut}
              className="ml-auto px-2 py-1 rounded text-xs text-rose-300 flex items-center gap-1 whitespace-nowrap"
            >
              <LogOut className="w-3 h-3" />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setActiveView('officer-queue')}
              className={`px-2.5 py-1 rounded text-xs whitespace-nowrap ${
                activeView === 'officer-queue' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300'
              }`}
            >
              Desk (2)
            </button>
            <button
              onClick={() => setActiveView('inspection-console')}
              className={`px-2.5 py-1 rounded text-xs whitespace-nowrap ${
                activeView === 'inspection-console' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300'
              }`}
            >
              Inspection
            </button>
            <button
              onClick={() => setActiveView('decision-approval')}
              className={`px-2.5 py-1 rounded text-xs whitespace-nowrap ${
                activeView === 'decision-approval' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300'
              }`}
            >
              Decisions
            </button>
            <button
              onClick={() => setActiveView('how-it-works')}
              className={`px-2.5 py-1 rounded text-xs whitespace-nowrap ${
                activeView === 'how-it-works' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300'
              }`}
            >
              Guide
            </button>
            <button
              onClick={onSignOut}
              className="ml-auto px-2 py-1 rounded text-xs text-rose-300 flex items-center gap-1 whitespace-nowrap"
            >
              <LogOut className="w-3 h-3" />
              <span>Logout</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
}
