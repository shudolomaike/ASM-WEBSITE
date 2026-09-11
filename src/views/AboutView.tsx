import React from 'react';
import { PARENT_BRAND, DIVISIONS, BRAND_FLAGS } from '../config/brand';
import { APPROVED_CONTACTS } from '../config/contacts';
import { ShieldCheck, Award, Film, Radio, Users, Building, MapPin, Compass } from 'lucide-react';

interface AboutViewProps {
  onOpenBrandFlags: () => void;
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBrandFlags, onOpenBooking }) => {
  return (
    <div className="bg-[#07080b] min-h-screen text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
            The ASMG Institution
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Built for Zimbabwe’s Defining Moments.
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            All Schools Media Group (ASMG) was founded with a singular conviction: that Zimbabwe’s schools, athletics traditions, weddings, and generational milestones deserve the highest caliber of cinematic craftsmanship and broadcast technology.
          </p>
        </div>

        {/* Master Promise Statement Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0d1019] to-[#07090e] border border-slate-800 mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold block mb-2">
              Our Core Philosophical Anchor
            </span>
            <blockquote className="font-cinzel text-2xl sm:text-4xl text-white font-black leading-snug">
              "{PARENT_BRAND.masterPromise}"
            </blockquote>
            <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed">
              Every speech day trophy handed over, every 80-meter rugby try scored under winter sun, every ancestral Roora song sung in front of elders, and every executive stepping into leadership carries historic weight. We build the permanent archive.
            </p>
          </div>
        </div>

        {/* Brand Architecture Breakdown (The 5 Divisions) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold block mb-1">
                Five Autonomous Divisions
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                The Five Pillars of ASMG
              </h2>
            </div>
            <button
              onClick={onOpenBrandFlags}
              className="text-xs font-mono text-amber-400 flex items-center gap-1.5 hover:underline"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Inspect Brand Architecture Registry (Flags A–E)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(DIVISIONS).map((div) => (
              <div
                key={div.key}
                className="p-6 rounded-xl bg-[#0e1118] border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span className="text-amber-500 font-bold">{div.number}</span>
                    <span className="text-slate-500">{div.emotionalTerritory}</span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white mb-2">{div.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {div.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                  <span>Lead: {div.contactLead}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Approved Directory */}
        <div className="mb-16 p-8 rounded-2xl bg-[#0e1118] border border-slate-800">
          <h2 className="font-cinzel text-2xl font-bold text-white mb-6">
            Production Directorate & Single Source Registry
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-[#121520] border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                Schools & Sports Broadcast
              </span>
              <h4 className="font-bold text-white text-sm">Mr Gid</h4>
              <p className="text-xs text-slate-400 mt-0.5">Senior Broadcast Producer</p>
              <div className="mt-2 font-mono text-xs text-amber-400">
                {APPROVED_CONTACTS['all-schools-media'].displayPhone}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#121520] border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                WildFive & ASM Digital
              </span>
              <h4 className="font-bold text-white text-sm">Mr Ruze</h4>
              <p className="text-xs text-slate-400 mt-0.5">Cinematography Director</p>
              <div className="mt-2 font-mono text-xs text-amber-400">
                {APPROVED_CONTACTS['wildfive-pictures'].displayPhone}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#121520] border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                The 5th Floor Studio
              </span>
              <h4 className="font-bold text-white text-sm">Mr CJ</h4>
              <p className="text-xs text-slate-400 mt-0.5">Studio Director & Lighting Lead</p>
              <div className="mt-2 font-mono text-xs text-amber-400">
                {APPROVED_CONTACTS['5th-floor-studio'].displayPhone}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#121520] border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                Hardware Fleet & Hire
              </span>
              <h4 className="font-bold text-white text-sm">Mr Chinehasha</h4>
              <p className="text-xs text-slate-400 mt-0.5">Equipment Desk Manager</p>
              <div className="mt-2 font-mono text-xs text-amber-400">
                {APPROVED_CONTACTS['equipment'].displayPhone}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-10">
          <h3 className="font-cinzel text-2xl font-bold text-white mb-3">
            Ready to Plan Your Next Milestone?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mb-6">
            Get in touch with our operations team or request a comprehensive multi-division proposal.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest transition-colors shadow-lg shadow-amber-950/40"
          >
            Request a Commercial Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
