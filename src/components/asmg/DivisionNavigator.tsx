import React, { useState } from 'react';
import { DIVISIONS } from '../../config/brand';
import { DivisionKey } from '../../types';
import { ArrowUpRight, Sparkles, Compass } from 'lucide-react';

interface DivisionNavigatorProps {
  onSelectDivision: (divisionKey: DivisionKey) => void;
}

export const DivisionNavigator: React.FC<DivisionNavigatorProps> = ({ onSelectDivision }) => {
  const [activeDivision, setActiveDivision] = useState<DivisionKey>('all-schools-media');
  const divisionsList = Object.values(DIVISIONS);
  const currentMeta = DIVISIONS[activeDivision];

  return (
    <section id="divisions" className="py-20 bg-[#0a0c10] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-500 font-semibold tracking-widest uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Section 02 • Brand Architecture</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl text-white font-bold tracking-tight">
              Five Autonomous Media Divisions
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              Each division owns a specialized buying situation with dedicated crew, specialized gear, and distinct emotional craft.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500">
            Click any division to enter its dedicated world
          </div>
        </div>

        {/* Desktop Interactive Layout (Two Columns: Division Switcher + Live Preview Card) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 5 Division Selector list with hover triggers */}
          <div className="col-span-5 flex flex-col justify-between gap-3">
            {divisionsList.map((div) => {
              const isSelected = activeDivision === div.key;
              return (
                <div
                  key={div.key}
                  onMouseEnter={() => setActiveDivision(div.key)}
                  onClick={() => onSelectDivision(div.key)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#121622] border-amber-500/80 shadow-lg shadow-amber-950/20'
                      : 'bg-[#0d0f15] border-slate-800/80 hover:border-slate-700 hover:bg-[#10131c]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-bold transition-colors ${
                        isSelected ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {div.number}
                    </span>
                    <div>
                      <h3
                        className={`text-sm font-semibold transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {div.name}
                      </h3>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {div.tagline}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-all ${
                      isSelected
                        ? 'text-amber-400 translate-x-0.5 -translate-y-0.5'
                        : 'text-slate-600 group-hover:text-slate-300'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Hero Preview for Currently Hovered/Selected Division */}
          <div className="col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-[#0d0f15] flex flex-col relative group">
            {/* Background image with cinematic treatment */}
            <div className="relative h-72 w-full overflow-hidden">
              <img
                src={currentMeta.heroImage}
                alt={currentMeta.name}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f15] via-[#0d0f15]/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-slate-700 text-amber-400">
                  DIVISION {currentMeta.number}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
                  Emotional Vector: {currentMeta.emotionalTerritory}
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                  {currentMeta.name}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {currentMeta.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block font-mono text-[10px] uppercase">
                      Primary Buyer
                    </span>
                    <span className="text-slate-300 font-medium">{currentMeta.leadBuyer}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-mono text-[10px] uppercase">
                      Direct Division Lead
                    </span>
                    <span className="text-amber-400 font-mono font-medium">
                      {currentMeta.contactLead}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {currentMeta.territory.split(',')[0]} & more
                </span>
                <button
                  onClick={() => onSelectDivision(currentMeta.key)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-amber-950/40"
                >
                  <span>Explore {currentMeta.shortName}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stacked Cards Layout (No Hover Dependency - Section 8 Requirement) */}
        <div className="lg:hidden space-y-4">
          {divisionsList.map((div) => (
            <div
              key={div.key}
              onClick={() => onSelectDivision(div.key)}
              className="rounded-xl border border-slate-800 bg-[#0e1118] overflow-hidden p-4 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-amber-500 bg-amber-950/40 border border-amber-800/50 px-2 py-0.5 rounded">
                    {div.number}
                  </span>
                  <h3 className="text-sm font-bold text-white">{div.name}</h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {div.description}
              </p>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">{div.tagline}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDivision(div.key);
                  }}
                  className="text-amber-400 font-semibold underline"
                >
                  View Services →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
