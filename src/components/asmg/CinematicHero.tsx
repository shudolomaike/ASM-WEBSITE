import React from 'react';
import { Play, ArrowRight, ShieldCheck, Award, Sparkles, Film } from 'lucide-react';
import { PARENT_BRAND } from '../../config/brand';

interface CinematicHeroProps {
  onExploreClick: () => void;
  onOpenShowreel: () => void;
  onPlanProject: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  onExploreClick,
  onOpenShowreel,
  onPlanProject,
}) => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center bg-[#07080b] overflow-hidden border-b border-slate-800/80">
      {/* Background Poster Image & Subtle Film Grain */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
          alt="Cinematic Camera Production in Zimbabwe"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          fetchPriority="high"
        />
        {/* Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-transparent to-[#07080b]/90" />
        <div className="absolute inset-0 bg-film-grain opacity-30 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center sm:text-left flex flex-col justify-center">
        {/* Top Eyebrow with Laurel emblem cues */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>ALL SCHOOLS MEDIA GROUP • ZIMBABWE</span>
          </div>

          {/* Official Broadcast / Proven Quality Laurels */}
          <div className="hidden md:flex items-center gap-6 text-[11px] font-mono text-slate-400 tracking-wider">
            <div className="flex items-center gap-1.5 border border-slate-800/80 px-3 py-1 rounded bg-black/40">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>50+ INSTITUTIONAL CEREMONIES</span>
            </div>
            <div className="flex items-center gap-1.5 border border-slate-800/80 px-3 py-1 rounded bg-black/40">
              <Film className="w-3.5 h-3.5 text-blue-400" />
              <span>OUTSIDE BROADCAST (OB) UNIT</span>
            </div>
          </div>
        </div>

        {/* Master H1 - Section 8 Requirement */}
        <div className="max-w-4xl">
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.08] text-balance drop-shadow-lg">
            {PARENT_BRAND.heroHeadline}
          </h1>
        </div>

        {/* Supporting Copy */}
        <p className="mt-6 max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light text-balance">
          Zimbabwe’s unified five-division media ecosystem. From stadium-scale live sports broadcasting and prestigious school speech days to luxury wedding cinema, executive studio portraiture, and commercial digital growth engines.
        </p>

        {/* The 3 CTAs - Section 8 Requirement */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">
          {/* CTA 1: Plan a Project */}
          <button
            onClick={onPlanProject}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-950/50 flex items-center justify-center gap-2 group"
          >
            <span>Plan a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* CTA 2: Watch Our Work (Showreel) */}
          <button
            onClick={onOpenShowreel}
            className="px-6 py-4 rounded-xl bg-[#12151e]/90 hover:bg-[#191d2a] border border-slate-700/80 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-3 group backdrop-blur-md"
          >
            <span className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </span>
            <span>Watch Our Work [{PARENT_BRAND.flagshipShowreelDuration}]</span>
          </button>

          {/* CTA 3: Explore ASMG */}
          <button
            onClick={onExploreClick}
            className="px-5 py-4 rounded-xl text-slate-300 hover:text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1 hover:underline underline-offset-4"
          >
            <span>Explore 5 Divisions</span>
            <span className="text-amber-400">↓</span>
          </button>
        </div>

        {/* Verified Proof Strip below hero */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl text-left">
          <div>
            <div className="font-cinzel text-xl sm:text-2xl font-bold text-amber-400">05</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
              Dedicated Divisions
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Distinct Buying Specialisms</div>
          </div>
          <div>
            <div className="font-cinzel text-xl sm:text-2xl font-bold text-white">14,000+</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
              Live Stream Viewers
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Zimbabwe & Global Diaspora</div>
          </div>
          <div>
            <div className="font-cinzel text-xl sm:text-2xl font-bold text-white">4K UHD</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
              Cinema & OB Fleet
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Sony Cinema & Blackmagic</div>
          </div>
          <div>
            <div className="font-cinzel text-xl sm:text-2xl font-bold text-emerald-400">100%</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
              Signal Redundancy
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Bonded Cellular + Satellite</div>
          </div>
        </div>
      </div>
    </section>
  );
};
