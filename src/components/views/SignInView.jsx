import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  ShieldCheck, 
  Lock, 
  Mail, 
  KeyRound, 
  Volume2, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle
} from 'lucide-react';

export default function SignInView({ 
  onSignInSuccess, 
  activeRole
}) {
  const [role, setRole] = useState(activeRole || 'college');
  const [identifier, setIdentifier] = useState(role === 'college' ? '1-9028341' : 'RO-419');
  const [contact, setContact] = useState(role === 'college' ? 'principal@pitr-pune.edu.in' : 'r.sharma@aicte-india.org');
  const [credential, setCredential] = useState('••••••••••••');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('7 8 2 K');
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    if (newRole === 'college') {
      setIdentifier('1-9028341');
      setContact('principal@pitr-pune.edu.in');
    } else {
      setIdentifier('RO-419');
      setContact('r.sharma@aicte-india.org');
    }
  };

  const regenerateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length)) + ' ';
    }
    setCaptchaCode(code.trim());
  };

  const speakCaptcha = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(captchaCode.replace(/\s+/g, ' '));
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    setCredential('849102');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSignInSuccess(role);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-100 flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-6">
        
        {/* National Portal Identification Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 shadow-inner">
            <ShieldCheck className="w-9 h-9 text-blue-600" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-wider font-mono uppercase">
            PRAMAAN
          </h1>
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-1">
            Institutional Approval & Verification Portal
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
            Portal Access for Colleges and Scrutiny Officers
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="bg-slate-200/80 p-1 rounded-xl shadow-inner grid grid-cols-2 gap-1">
          <button
            type="button"
            onClick={() => handleRoleChange('college')}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold flex flex-col items-center justify-center transition-all ${
              role === 'college'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-1.5 font-bold">
              <Building2 className="w-4 h-4" />
              <span>College Login</span>
            </div>
            <span className="text-[10px] text-slate-400 font-normal mt-0.5">
              For Principals & Staff
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleRoleChange('officer')}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold flex flex-col items-center justify-center transition-all ${
              role === 'officer'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-1.5 font-bold">
              <UserCheck className="w-4 h-4" />
              <span>Officer Login</span>
            </div>
            <span className="text-[10px] text-slate-400 font-normal mt-0.5">
              For AICTE Evaluators
            </span>
          </button>
        </div>

        {/* Main Sign In Form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          
          {/* Plain English Role Banner */}
          <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs text-blue-950 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {role === 'college'
                ? 'Institutional access to upload original certificates, track regulatory scrutiny status, and respond to discrepancy notices.'
                : 'Government officer access to review assigned college renewal dossiers, examine discrepancies side-by-side, and issue statutory orders.'}
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            {/* Permanent Institute ID / Officer ID */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-800">
                {role === 'college' ? 'Permanent Institute ID (PID)' : 'Officer Cadre ID'}
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-slate-400 font-mono text-xs">#</span>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  placeholder={role === 'college' ? 'e.g. 1-9028341' : 'e.g. RO-419'}
                  className="w-full text-xs font-mono pl-8 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 focus:bg-white text-slate-900 transition-all"
                />
              </div>
              <p className="text-[11px] text-slate-400">
                {role === 'college' ? 'Enter the unique 8-digit Permanent ID allotted by AICTE.' : 'Cadre identification allotted by Member Secretary.'}
              </p>
            </div>

            {/* Email / Mobile */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-800">
                Registered Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  placeholder="name@domain.gov.in"
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 focus:bg-white text-slate-900 transition-all"
                />
              </div>
            </div>

            {/* Password / OTP */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-800">
                  Password or One-Time Passcode (OTP)
                </label>
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                >
                  <KeyRound className="w-3 h-3" />
                  <span>Send Login OTP</span>
                </button>
              </div>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                  className="w-full text-xs pl-9 pr-10 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 focus:bg-white text-slate-900 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-[11px] text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              {otpSent && (
                <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>6-digit OTP dispatched to registered mobile ending with 8412.</span>
                </div>
              )}
            </div>

            {/* Visual Security Captcha */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Security Verification Code
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={speakCaptcha}
                    className="p-1 rounded text-slate-500 hover:bg-slate-200"
                    title="Read captcha aloud"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={regenerateCaptcha}
                    className="p-1 rounded text-slate-500 hover:bg-slate-200"
                    title="Refresh code"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 items-center">
                <div className="h-9 bg-slate-200 rounded-lg flex items-center justify-center font-mono font-bold text-slate-800 tracking-widest text-sm select-none border border-slate-300">
                  {captchaCode}
                </div>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                  placeholder="Type 4 letters"
                  maxLength={6}
                  className="h-9 bg-white text-xs font-mono uppercase text-center rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-0" />
                <span>Keep me signed in on this workstation</span>
              </label>
              <a href="#help" onClick={(e) => { e.preventDefault(); alert("National Portal Helpdesk Toll-Free: 1800-11-2026 (09:30 to 17:30 IST)"); }} className="text-blue-600 hover:underline">
                Need help?
              </a>
            </div>

            {/* Primary Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#0F2942] hover:bg-[#153a5c] text-white font-semibold text-xs transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <span>{role === 'college' ? 'Sign In to College Portal' : 'Sign In to Government Scrutiny Desk'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>

          {/* Footer Assistance */}
          <div className="pt-2 text-center text-xs text-slate-500">
            For institutional registration inquiries, consult the AICTE Approval Process Handbook (APH) 2026–27.
          </div>

        </div>

      </div>
    </div>
  );
}
