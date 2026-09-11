import React from 'react';
import { ShieldCheck, Award, Film, Radio, Users, CheckCircle, ExternalLink } from 'lucide-react';
import { BRAND_FLAGS } from '../../config/brand';

interface ProofAndStandardsProps {
  onOpenBrandFlags: () => void;
}

export const ProofAndStandards: React.FC<ProofAndStandardsProps> = ({ onOpenBrandFlags }) => {
  return (
    <section className="py-20 bg-[#090b10] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
              Section 06 • Credibility & Standards
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl text-white font-bold tracking-tight">
              Verified Production Standards
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              Per ASMG source-of-truth rules: zero fabricated awards or simulated stats. Every claim reflects verified technical capabilities deployed on Zimbabwean soil.
            </p>
          </div>
          <button
            onClick={onOpenBrandFlags}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#12151e] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Review Source Governance</span>
          </button>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#0e1118] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-white mb-2">
                Broadcast Signal Redundancy
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bonded SIM aggregation combined with satellite failovers. We maintain transmission even in high-congestion stadium environments.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>VERIFIED STANDARD</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1118] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-white mb-2">
                48-Hour Pixieset SLA
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                School prize day portraits and private wedding previews delivered to secure digital galleries within guaranteed turnaround windows.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>VERIFIED STANDARD</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1118] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-white mb-2">
                Cinema-Grade Glass
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full-frame Sony cinema line sensors paired with G-Master fast aperture telephotos and master audio isolation preamps.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>PRODUCTION FLEET</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1118] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-white mb-2">
                Approved Staff Directory
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct phone and WhatsApp routing to designated division directors (Mr Gid, Mr Ruze, Mr CJ, Mr Chinehasha) with zero intermediary friction.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>APPROVED REGISTRY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
