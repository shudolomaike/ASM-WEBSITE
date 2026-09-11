import React, { useState } from 'react';
import { DIVISIONS, BRAND_FLAGS } from '../config/brand';
import { PRODUCTS } from '../data/products';
import { PROJECTS } from '../data/projects';
import { getContactForDivision } from '../config/contacts';
import { DivisionKey } from '../types';
import { openWhatsAppEnquiry } from '../lib/whatsapp';
import {
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
  Calendar,
  Layers,
  MapPin,
  Play,
  ShieldAlert,
} from 'lucide-react';

interface DivisionViewProps {
  divisionKey: DivisionKey;
  onNavigate: (path: string) => void;
  onOpenBooking: (division: DivisionKey, product?: string) => void;
  onSelectProject: (slug: string) => void;
  onOpenBrandFlags: () => void;
}

export const DivisionView: React.FC<DivisionViewProps> = ({
  divisionKey,
  onNavigate,
  onOpenBooking,
  onSelectProject,
  onOpenBrandFlags,
}) => {
  const meta = DIVISIONS[divisionKey];
  const contact = getContactForDivision(divisionKey);
  const divisionProducts = PRODUCTS.filter((p) => p.division === divisionKey);
  const divisionProjects = PROJECTS.filter((p) => p.division === divisionKey);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = Array.from(
    new Set(divisionProducts.map((p) => p.productFamily))
  );

  const filteredProducts =
    selectedCategory === 'all'
      ? divisionProducts
      : divisionProducts.filter((p) => p.productFamily === selectedCategory);

  const handleWhatsAppChat = (productName?: string) => {
    openWhatsAppEnquiry({
      division: divisionKey,
      product: productName || meta.name,
      sourcePage: `/${divisionKey}`,
      customMessage: `Hello ${contact.contactName}, I would like to enquire about ${meta.name} services.`,
    });
  };

  return (
    <div className="bg-[#07080b] min-h-screen text-slate-200">
      {/* 01. Division Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center border-b border-slate-800 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={meta.heroImage}
            alt={meta.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/70 to-transparent" />
          <div className="absolute inset-0 bg-film-grain opacity-20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
              DIVISION {meta.number}
            </span>
            <span className="text-xs font-mono text-slate-400">
              ALL SCHOOLS MEDIA GROUP
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-amber-300">
              {meta.emotionalTerritory}
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight max-w-4xl">
            {meta.name}
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            {meta.description}
          </p>

          {/* Quick contact and Lead info strip */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenBooking(divisionKey)}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-950/40"
            >
              Request Division Quote
            </button>

            <button
              onClick={() => handleWhatsAppChat()}
              className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Director ({contact.contactName})</span>
            </button>
          </div>

          {/* Flag A notice if 5th Floor Studio */}
          {divisionKey === '5th-floor-studio' && (
            <div className="mt-8 p-3 rounded-lg bg-amber-950/20 border border-amber-800/40 text-amber-300 text-xs flex items-center justify-between max-w-2xl">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>
                  <strong>Brand Governance (Flag A):</strong> {meta.endorsementLine}
                </span>
              </div>
              <button
                onClick={onOpenBrandFlags}
                className="text-[11px] underline font-mono text-amber-400 hover:text-white"
              >
                Inspect Flag
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 02. Division Detail & Territory Specifications */}
      <section className="py-12 bg-[#090b10] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-[#0e1118] border border-slate-800">
            <span className="font-mono text-[10px] uppercase text-slate-500 block mb-1">
              Primary Buyer & Segment
            </span>
            <div className="text-sm font-semibold text-white">{meta.leadBuyer}</div>
            <p className="text-xs text-slate-400 mt-1">
              Engineered specifically for institutional leaders, sports convenors, and event directors.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0e1118] border border-slate-800">
            <span className="font-mono text-[10px] uppercase text-slate-500 block mb-1">
              Division Lead Director
            </span>
            <div className="text-sm font-semibold text-amber-400">
              {contact.contactName} {contact.notes ? `(${contact.notes})` : ''}
            </div>
            <div className="text-xs font-mono text-slate-300 mt-1">
              Direct Phone: {contact.displayPhone}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#0e1118] border border-slate-800">
            <span className="font-mono text-[10px] uppercase text-slate-500 block mb-1">
              Commercial Delivery SLA
            </span>
            <div className="text-sm font-semibold text-emerald-400">
              Guaranteed Response & Pixieset SLAs
            </div>
            <p className="text-xs text-slate-400 mt-1">
              4-hour quote response SLA. 48-hour event gallery publishing windows.
            </p>
          </div>
        </div>
      </section>

      {/* 03. Division Product & Service Catalogue */}
      <section className="py-16 bg-[#07080b] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-1 block">
                Standard Packages & Services
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                {meta.shortName} Scope & Packages
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Select a package to initiate a formal proposal. Standard pricing follows the ASMG verified scope protocol.
              </p>
            </div>

            {categories.length > 1 && (
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0e1118] border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-amber-500 text-black font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All Packages
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      selectedCategory === cat
                        ? 'bg-amber-500 text-black font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="p-6 rounded-2xl bg-[#0e1118] border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-amber-500 font-semibold">{prod.productFamily}</span>
                    <span className="text-slate-500 text-[11px] truncate max-w-[150px]">{prod.buyingSituation}</span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {prod.oneSentenceDefinition}
                  </p>

                  <div className="space-y-1.5 border-t border-slate-800/80 pt-4 mb-4">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      Scope Deliverables:
                    </span>
                    {(prod.coreDeliverables || []).slice(0, 4).map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Booking Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      Commercial Rate
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {prod.priceNote || 'REQUEST A QUOTE'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleWhatsAppChat(prod.name)}
                      className="p-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800/60 text-emerald-400 transition-colors"
                      title="Quick WhatsApp Enquiry"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onOpenBooking(divisionKey, prod.name)}
                      className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Book Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Division Selected Work */}
      {divisionProjects.length > 0 && (
        <section className="py-16 bg-[#090b10] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-1 block">
                  Field Evidence
                </span>
                <h2 className="font-cinzel text-2xl font-bold text-white">
                  Recent {meta.shortName} Projects
                </h2>
              </div>
              <button
                onClick={() => onNavigate('/work')}
                className="text-xs font-mono text-amber-400 hover:underline"
              >
                View Full ASMG Archive →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {divisionProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onSelectProject(proj.slug)}
                  className="rounded-xl border border-slate-800 bg-[#0e1118] overflow-hidden group cursor-pointer hover:border-slate-700 transition-all"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={proj.heroMedia}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-amber-400 text-xs font-mono">
                        {proj.projectType}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {proj.summary}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>{proj.location}</span>
                      <span className="text-amber-400">View Details →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05. Direct Division Conversion Desk */}
      <section className="py-16 bg-[#07080b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
            Direct Line to Leadership
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
            Discuss Your Next Project with {contact.contactName}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Directly accountable for all {meta.name} equipment manifests, crew logistics, and delivery guarantees.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking(divisionKey)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest transition-colors shadow-lg shadow-amber-950/40"
            >
              Submit Detailed Scope
            </button>
            <button
              onClick={() => handleWhatsAppChat()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp: {contact.displayPhone}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
