import React, { useState } from 'react';
import { Radio, Menu, X, ChevronDown, Sparkles, ShieldCheck, Film, Phone } from 'lucide-react';
import { DIVISIONS, PARENT_BRAND } from '../../config/brand';
import { APPROVED_CONTACTS } from '../../config/contacts';
import { DivisionKey } from '../../types';

interface SiteHeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (division?: DivisionKey | 'integrated', product?: string) => void;
  onOpenBrandFlags: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenBooking,
  onOpenBrandFlags,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdownOpen, setDivisionsDropdownOpen] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setDivisionsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07080b]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Top micro-bar: Emergency Contact & Critical Brand Flags */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#0b0e14] border-b border-slate-900 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-4">
          <span className="text-amber-500 font-semibold tracking-wider">ASMG ZIMBABWE</span>
          <span className="text-slate-600">•</span>
          <span>Because Every Moment Is Worth Capturing</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBrandFlags}
            className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>Brand Flags & Governance (Flags A–E)</span>
          </button>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Phone className="w-3 h-3 text-slate-400" />
            <span>HQ Hotline: {APPROVED_CONTACTS['group-general'].displayPhone}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-700 via-blue-900 to-amber-600 p-[1.5px] shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090b10] rounded-[7px] flex items-center justify-center">
              <span className="font-cinzel text-amber-400 font-black text-sm tracking-tighter">
                ASMG
              </span>
            </div>
          </div>
          <div>
            <div className="font-cinzel text-xs sm:text-sm font-bold tracking-widest text-white uppercase group-hover:text-amber-400 transition-colors">
              All Schools Media Group
            </div>
            <div className="text-[10px] font-mono tracking-wider text-slate-400">
              Five-Division Media Ecosystem
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-medium">
          {/* Divisions Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDivisionsDropdownOpen(!divisionsDropdownOpen)}
              onMouseEnter={() => setDivisionsDropdownOpen(true)}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${
                currentPath.includes('schools') ||
                currentPath.includes('sports') ||
                currentPath.includes('wildfive') ||
                currentPath.includes('5th-floor') ||
                currentPath.includes('digital')
                  ? 'text-amber-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Divisions (05)</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {divisionsDropdownOpen && (
              <div
                onMouseLeave={() => setDivisionsDropdownOpen(false)}
                className="absolute left-0 mt-1 w-72 rounded-xl bg-[#0e1118] border border-slate-800 shadow-2xl p-2 z-50 animate-fade-in"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 border-b border-slate-800/80 mb-1">
                  Autonomous ASMG Divisions
                </div>
                {Object.values(DIVISIONS).map((div) => (
                  <button
                    key={div.key}
                    onClick={() => handleNav(`/${div.key}`)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800/70 transition-colors group flex items-start gap-2.5"
                  >
                    <span className="font-mono text-[11px] font-bold text-amber-500/80 mt-0.5">
                      {div.number}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-white">
                        {div.name}
                      </div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">
                        {div.tagline}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('/work')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPath === '/work' ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Portfolio
          </button>

          {/* Live Indicator */}
          <button
            onClick={() => handleNav('/live')}
            className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-2 ${
              currentPath === '/live'
                ? 'border-red-500 bg-red-950/40 text-red-300 font-semibold'
                : 'border-slate-800 hover:border-red-900/60 text-slate-300 hover:text-white'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider">Live Hub</span>
          </button>

          <button
            onClick={() => handleNav('/galleries')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPath === '/galleries' ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Pixieset
          </button>

          <button
            onClick={() => handleNav('/equipment')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPath === '/equipment' ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Gear Hire
          </button>

          <button
            onClick={() => handleNav('/about')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPath === '/about' ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNav('/contact')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPath === '/contact' ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* CTA & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-950/40"
          >
            <Film className="w-3.5 h-3.5" />
            <span>Plan a Project</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleNav('/live')}
            className="px-2.5 py-1 rounded-full border border-red-800/80 bg-red-950/30 text-red-300 text-[11px] font-mono flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Live</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c10] border-b border-slate-800 px-5 py-6 space-y-4 animate-fade-in">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
            Five Autonomous Divisions
          </div>
          <div className="grid grid-cols-1 gap-1">
            {Object.values(DIVISIONS).map((div) => (
              <button
                key={div.key}
                onClick={() => handleNav(`/${div.key}`)}
                className="w-full text-left px-3 py-2.5 rounded-lg bg-[#12151e] border border-slate-800/60 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-500">{div.number}</span>
                  <span className="font-medium text-white">{div.name}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Explore →</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleNav('/work')}
              className="p-2.5 rounded-lg bg-[#12151e] border border-slate-800 text-left text-slate-300"
            >
              Selected Portfolio
            </button>
            <button
              onClick={() => handleNav('/live')}
              className="p-2.5 rounded-lg bg-red-950/30 border border-red-900/60 text-left text-red-300 font-medium"
            >
              Live Broadcasts
            </button>
            <button
              onClick={() => handleNav('/galleries')}
              className="p-2.5 rounded-lg bg-[#12151e] border border-slate-800 text-left text-slate-300"
            >
              Pixieset Galleries
            </button>
            <button
              onClick={() => handleNav('/equipment')}
              className="p-2.5 rounded-lg bg-[#12151e] border border-slate-800 text-left text-slate-300"
            >
              Equipment Rental
            </button>
            <button
              onClick={() => handleNav('/about')}
              className="p-2.5 rounded-lg bg-[#12151e] border border-slate-800 text-left text-slate-300"
            >
              About ASMG
            </button>
            <button
              onClick={() => handleNav('/contact')}
              className="p-2.5 rounded-lg bg-[#12151e] border border-slate-800 text-left text-slate-300"
            >
              Contact Directory
            </button>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center transition-colors"
            >
              Plan a Project (Request Quote)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrandFlags();
              }}
              className="w-full py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Inspect Critical Brand Flags</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
