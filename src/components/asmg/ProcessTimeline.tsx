import React from 'react';
import { ASMG_PROCESS } from '../../config/brand';
import { GitCommit, ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-[#07080b] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
            Section 08 • Execution Architecture
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl text-white font-bold tracking-tight">
            How We Execute: The Five-Stage Process
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
            DISCOVER → PLAN → PRODUCE → DELIVER → AMPLIFY
          </p>
        </div>

        {/* 5-Step Horizontal Process Line */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {ASMG_PROCESS.map((stage, index) => (
            <div
              key={stage.step}
              className="relative p-6 rounded-2xl bg-[#0e1118] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-amber-400">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {stage.name}
                  </span>
                </div>

                <h3 className="font-cinzel text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stage.summary}
                </p>
              </div>

              {index < ASMG_PROCESS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
