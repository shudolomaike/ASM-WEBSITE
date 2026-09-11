import React from 'react';
import { GROUP_CAPABILITIES } from '../../config/brand';
import { Camera, Film, Radio, Layers, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface CapabilitiesMatrixProps {
  onOpenBooking: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Camera,
  Film,
  Radio,
  Layers,
  TrendingUp,
  Sparkles,
};

export const CapabilitiesMatrix: React.FC<CapabilitiesMatrixProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#07080b] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
            Section 05 • Full Spectrum Infrastructure
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl text-white font-bold tracking-tight">
            Six Core Capability Families
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
            Our technical fleet and creative disciplines operate seamlessly as independent modules or as a combined full-scale media network.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUP_CAPABILITIES.map((cap, idx) => {
            const IconComponent = ICON_MAP[cap.iconName] || Film;
            return (
              <div
                key={cap.id}
                className="p-7 rounded-2xl bg-[#0d0f16] border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] font-bold text-slate-500 group-hover:text-amber-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest uppercase text-amber-500 font-semibold block mb-1">
                    {cap.tag}
                  </span>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    {cap.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0e1118] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-white">Need a customized multi-capability deployment?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Combine outside broadcasting, high-res photography, and social clips under a single ASMG master contract.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md shadow-amber-950/40"
          >
            Configure Scope
          </button>
        </div>
      </div>
    </section>
  );
};
