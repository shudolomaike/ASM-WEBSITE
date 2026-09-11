import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, Sparkles, Building, Trophy, Heart } from 'lucide-react';
import { DivisionKey } from '../../types';

interface IntegratedSolutionProps {
  onOpenBooking: (division?: DivisionKey | 'integrated') => void;
}

const INTEGRATED_MODELS = [
  {
    id: 'school-derby-suite',
    title: 'The Collegiate Sports & Academic Showcase',
    leadDivision: 'All Schools Media (Lead)',
    supportingDivisions: ['Sports Express (Broadcast OB)', 'ASM Digital (Social Clips)'],
    scenario: 'Premier School Centenary Derby & Speech Night',
    deliverables: [
      'Multi-cam 1080p60 Live Rugby & Soccer match broadcasts',
      'Formal academic prize-giving stage recording and 48hr Pixieset gallery',
      '15 vertical short-form highlight reels for school TikTok & Instagram',
      'One synchronized invoice and unified production lead (Mr Gid)',
    ],
    tag: 'Institutional Package',
  },
  {
    id: 'wedding-story-suite',
    title: 'The Heritage Wedding & Archival Milestone',
    leadDivision: 'WildFive Pictures (Lead)',
    supportingDivisions: ['The 5th Floor Studio (Pre-shoot)', 'ASM Digital (Live Diaspora Feed)'],
    scenario: 'Multi-Day Traditional Roora & Chapel Wedding Celebration',
    deliverables: [
      'Pre-wedding couture studio portraits at The 5th Floor Harare',
      'Two-day cinema film documentary of traditional ceremony & reception',
      'Dedicated private livestream for diaspora family members',
      'Curated heirloom Pixieset gallery with 800+ retouched photographs',
    ],
    tag: 'Life Event Cinema',
  },
  {
    id: 'brand-launch-suite',
    title: 'The Commercial Brand & Product Engine',
    leadDivision: 'ASM Digital Marketing (Lead)',
    supportingDivisions: ['The 5th Floor Studio (Content Sets)', 'WildFive Pictures (Brand Documentary)'],
    scenario: 'Corporate Product Launch & Regional Market Expansion',
    deliverables: [
      'Studio commercial product photography and executive headshots',
      'Brand origin documentary video directed by senior cinematographers',
      'Lead generation funnel with integrated WhatsApp routing & local SEO',
      'Quarterly ongoing social content distribution engine',
    ],
    tag: 'Commercial Growth',
  },
];

export const IntegratedSolution: React.FC<IntegratedSolutionProps> = ({ onOpenBooking }) => {
  const [activeModel, setActiveModel] = useState(0);
  const current = INTEGRATED_MODELS[activeModel];

  return (
    <section className="py-20 bg-[#090b10] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-500 font-semibold tracking-widest uppercase mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Section 07 • Group Synergy Model</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl text-white font-bold tracking-tight">
              ASMG Integrated Solutions
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              When complex events require broadcast, photography, and social amplification together, our divisions collaborate under one unified master proposal.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            One Commercial Proposal • Unified Production Lead
          </div>
        </div>

        {/* Model Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {INTEGRATED_MODELS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveModel(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeModel === idx
                  ? 'bg-[#131724] border-amber-500/80 shadow-lg shadow-amber-950/20'
                  : 'bg-[#0e1118] border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="text-amber-500 font-bold">{item.tag}</span>
                <span className="text-slate-500">Model 0{idx + 1}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                {item.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Model Deep Dive Box */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0e1118] border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
                Target Scenario: {current.scenario}
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-3">
                {current.title}
              </h3>
            </div>

            {/* Lead & Supporting Architecture */}
            <div className="p-4 rounded-xl bg-[#131722] border border-slate-800 text-xs grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="text-slate-500 font-mono text-[10px] uppercase block">Lead Division</span>
                <span className="font-bold text-white text-sm">{current.leadDivision}</span>
              </div>
              <div>
                <span className="text-slate-500 font-mono text-[10px] uppercase block">Supporting Divisions</span>
                <span className="text-slate-300 font-mono text-[11px]">
                  {current.supportingDivisions.join(' • ')}
                </span>
              </div>
            </div>

            {/* Deliverables List */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Unified Deliverables:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {current.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Action & Proposal Guarantee */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-[#131722] border border-slate-800 text-xs space-y-4">
            <h4 className="font-bold text-white text-sm">Cross-Division Protocol</h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Divisions never compete internally. When you book an Integrated Solution, ASMG appoints a single Senior Production Director who coordinates all camera plots, frequencies, crew schedules, and client communications.
            </p>

            <div className="pt-3 border-t border-slate-800/80 space-y-2 font-mono text-[11px] text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">Commercial Proposal:</span>
                <span className="text-amber-400 font-bold">1 Master Contract</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Billing:</span>
                <span>Consolidated Invoicing</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Delivery Gateway:</span>
                <span>Unified Pixieset & Master Drive</span>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking('integrated')}
              className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-950/40"
            >
              Request Integrated Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
