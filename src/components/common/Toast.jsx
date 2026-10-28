import React from 'react';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />,
    error: <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-600 shrink-0" />,
  };

  const bgStyles = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-950',
    warning: 'bg-amber-50 border-amber-200 text-amber-950',
    error: 'bg-rose-50 border-rose-200 text-rose-950',
    info: 'bg-blue-50 border-blue-200 text-blue-950',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in slide-in-from-bottom-4 duration-200">
      <div className={`p-4 rounded-xl border shadow-lg flex items-start gap-3 ${bgStyles[toast.type] || bgStyles.info}`}>
        {icons[toast.type] || icons.info}
        <div className="flex-1 min-w-0">
          {toast.title && (
            <h4 className="text-sm font-semibold leading-snug">{toast.title}</h4>
          )}
          <p className="text-xs mt-0.5 leading-relaxed text-slate-700">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
