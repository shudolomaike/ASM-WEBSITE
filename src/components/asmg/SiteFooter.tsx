import React from 'react';
import { DIVISIONS, PARENT_BRAND } from '../../config/brand';
import { APPROVED_CONTACTS } from '../../config/contacts';
import { CONNECTED_ACCOUNTS } from '../../config/social-accounts';
import { MapPin, Phone, Mail, ExternalLink, Shield, Youtube, Instagram, Facebook } from 'lucide-react';

interface SiteFooterProps {
  onNavigate: (path: string) => void;
  onOpenBrandFlags: () => void;
  onOpenBooking: () => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  onNavigate,
  onOpenBrandFlags,
  onOpenBooking,
}) => {
  const publicAccounts = CONNECTED_ACCOUNTS.filter((acc) => acc.public && acc.enabled);

  return (
    <footer className="bg-[#050608] border-t border-slate-800/80 text-slate-400 text-xs">
      {/* Top Banner: Master Promise */}
      <div className="border-b border-slate-800/60 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold">
            All Schools Media Group • Master Promise
          </span>
          <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl text-white font-bold tracking-tight mt-1">
            "{PARENT_BRAND.masterPromise}"
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            A cohesive production, broadcasting, documentary cinema and digital marketing ecosystem engineered in Harare, Zimbabwe.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-950/40"
          >
            Request a Quote
          </button>
          <button
            onClick={onOpenBrandFlags}
            className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-mono text-xs transition-colors"
          >
            Brand Flags
          </button>
        </div>
      </div>

      {/* Main Directory: 5 Autonomous Divisions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Division 01 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono font-bold text-blue-500 text-xs">01</span>
            <h3 className="font-bold text-slate-200 text-sm">All Schools Media</h3>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
            School institutional media, speech days, prize ceremonies, sports festivals, and historical student archiving.
          </p>
          <div className="space-y-1 text-[11px] font-mono">
            <div className="text-slate-300">Lead: {APPROVED_CONTACTS['all-schools-media'].contactName}</div>
            <div className="text-amber-400">{APPROVED_CONTACTS['all-schools-media'].displayPhone}</div>
          </div>
          <button
            onClick={() => onNavigate('/all-schools-media')}
            className="mt-3 inline-block text-[11px] text-blue-400 hover:text-blue-300 underline font-mono"
          >
            Explore Division →
          </button>
        </div>

        {/* Division 02 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono font-bold text-orange-500 text-xs">02</span>
            <h3 className="font-bold text-slate-200 text-sm">Sports Express</h3>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
            Outside broadcast (OB) units, multi-cam live streaming, on-screen tournament graphics, instant replays & commentary.
          </p>
          <div className="space-y-1 text-[11px] font-mono">
            <div className="text-slate-300">Lead: {APPROVED_CONTACTS['sports-express'].contactName}</div>
            <div className="text-amber-400">{APPROVED_CONTACTS['sports-express'].displayPhone}</div>
          </div>
          <button
            onClick={() => onNavigate('/sports-express')}
            className="mt-3 inline-block text-[11px] text-orange-400 hover:text-orange-300 underline font-mono"
          >
            Explore Division →
          </button>
        </div>

        {/* Division 03 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono font-bold text-amber-500 text-xs">03</span>
            <h3 className="font-bold text-slate-200 text-sm">WildFive Pictures</h3>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
            Weddings, traditional Roora ceremonies, memorials, family milestones, and cinematic life documentaries.
          </p>
          <div className="space-y-1 text-[11px] font-mono">
            <div className="text-slate-300">Lead: {APPROVED_CONTACTS['wildfive-pictures'].contactName}</div>
            <div className="text-amber-400">{APPROVED_CONTACTS['wildfive-pictures'].displayPhone}</div>
            <div className="text-slate-500 text-[10px] truncate">{APPROVED_CONTACTS['wildfive-pictures'].email}</div>
          </div>
          <button
            onClick={() => onNavigate('/wildfive-pictures')}
            className="mt-3 inline-block text-[11px] text-amber-400 hover:text-amber-300 underline font-mono"
          >
            Explore Division →
          </button>
        </div>

        {/* Division 04 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono font-bold text-slate-300 text-xs">04</span>
            <h3 className="font-bold text-slate-200 text-sm">The 5th Floor Studio</h3>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
            Harare light studio, graduation portraiture, executive headshots, product photography & creator soundstages.
          </p>
          <div className="space-y-1 text-[11px] font-mono">
            <div className="text-slate-300">Lead: {APPROVED_CONTACTS['5th-floor-studio'].contactName}</div>
            <div className="text-amber-400">{APPROVED_CONTACTS['5th-floor-studio'].displayPhone}</div>
          </div>
          <button
            onClick={() => onNavigate('/5th-floor-studio')}
            className="mt-3 inline-block text-[11px] text-slate-300 hover:text-white underline font-mono"
          >
            Explore Division →
          </button>
        </div>

        {/* Division 05 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono font-bold text-cyan-400 text-xs">05</span>
            <h3 className="font-bold text-slate-200 text-sm">ASM Digital Marketing</h3>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
            Commercial content strategy, social distribution, admissions lead generation, Google local SEO & web platforms.
          </p>
          <div className="space-y-1 text-[11px] font-mono">
            <div className="text-slate-300">Lead: {APPROVED_CONTACTS['digital-marketing'].contactName}</div>
            <div className="text-amber-400">{APPROVED_CONTACTS['digital-marketing'].displayPhone}</div>
          </div>
          <button
            onClick={() => onNavigate('/digital-marketing')}
            className="mt-3 inline-block text-[11px] text-cyan-400 hover:text-cyan-300 underline font-mono"
          >
            Explore Division →
          </button>
        </div>
      </div>

      {/* Equipment Rental Strip */}
      <div className="border-t border-slate-800/80 bg-[#08090d] py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs text-slate-300 font-medium">
            Production Fleet & Camera Gear Hire Desk:
          </span>
          <span className="text-xs font-mono text-amber-400">
            {APPROVED_CONTACTS['equipment'].contactName} ({APPROVED_CONTACTS['equipment'].displayPhone})
          </span>
        </div>
        <button
          onClick={() => onNavigate('/equipment')}
          className="text-xs text-amber-500 hover:text-amber-400 underline font-mono"
        >
          View Equipment Manifest →
        </button>
      </div>

      {/* Social & Verified Pixieset Gateways */}
      <div className="border-t border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-slate-500 mb-2">
              Verified Public Channels & Pixieset Gateways
            </div>
            <div className="flex flex-wrap gap-2">
              {publicAccounts.map((acc) => (
                <a
                  key={acc.id}
                  href={acc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#11141e] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-[11px] transition-colors"
                >
                  <span>{acc.label}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-right text-xs space-y-1">
            <div className="font-mono text-slate-400">Harare, Zimbabwe Operations Hub</div>
            <div className="text-[11px] text-slate-500">
              Strict Single Approved Contact Registry Enforced
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-slate-900 bg-black py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} All Schools Media Group (ASMG). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/privacy')} className="hover:text-slate-300">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/terms')} className="hover:text-slate-300">
              Terms of Production
            </button>
            <span>•</span>
            <button onClick={onOpenBrandFlags} className="hover:text-amber-400 font-mono">
              Brand Governance Register
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
