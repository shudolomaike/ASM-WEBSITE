import React from 'react';
import { BRAND_FLAGS } from '../../config/brand';
import { AlertCircle, CheckCircle2, Clock, ShieldAlert, X } from 'lucide-react';

interface BrandFlagsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandFlagsDrawer: React.FC<BrandFlagsDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl h-full bg-[#0d0f15] border-l border-slate-800 text-slate-200 overflow-y-auto p-6 sm:p-8 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-amber-500">
              Governance & Quality Gate
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Brand Flags"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="my-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-500" />
            Critical Brand Flags Checklist
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Section 3 Launch-Blocking Architecture verification for All Schools Media Group management and autonomous agents.
          </p>
        </div>

        {/* Flag Items */}
        <div className="space-y-4 flex-1">
          {BRAND_FLAGS.map((flag) => {
            const isResolved = flag.currentStatus === 'RESOLVED_BY_SPEC' || flag.currentStatus === 'ENFORCED_IN_CODE';
            return (
              <div
                key={flag.id}
                className="p-4 rounded-lg bg-[#12151e] border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-400 mb-1">
                      {flag.code}
                    </span>
                    <h3 className="text-sm font-semibold text-white">{flag.title}</h3>
                  </div>
                  {isResolved ? (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Enforced
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-amber-400 bg-amber-950/40 border border-amber-800/50 px-2 py-0.5 rounded">
                      <Clock className="w-3.5 h-3.5" /> Review Req
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {flag.description}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-800/60 text-xs">
                  <div className="text-slate-300 font-medium">Working Rule:</div>
                  <div className="text-slate-400 mt-0.5 font-mono text-[11px] bg-black/40 p-2 rounded border border-slate-900">
                    {flag.workingRule}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="pt-4 border-t border-slate-800 mt-6 text-xs text-slate-500">
          Source of truth: ASMG Notion Operations & AGENTS.md Build Specification.
        </div>
      </div>
    </div>
  );
};
