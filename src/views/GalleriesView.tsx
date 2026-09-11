import React, { useState } from 'react';
import { GALLERIES } from '../data/galleries';
import { CONNECTED_ACCOUNTS } from '../config/social-accounts';
import { Lock, Unlock, ExternalLink, Search, Camera, ShieldCheck, KeyRound } from 'lucide-react';

export const GalleriesView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDivision, setFilterDivision] = useState('all');

  const pixiesetAccounts = CONNECTED_ACCOUNTS.filter(
    (acc) => acc.platform === 'pixieset' && acc.enabled
  );

  const filteredGalleries = GALLERIES.filter((g) => {
    const matchesDiv = filterDivision === 'all' || g.division === filterDivision;
    const matchesQuery =
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (g.location && g.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (g.summary && g.summary.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDiv && matchesQuery;
  });

  return (
    <div className="bg-[#07080b] min-h-screen text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
            Digital Client Delivery Engine
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Pixieset Client Galleries
          </h1>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Access, view, download high-resolution event imagery, and order fine-art prints. School prize ceremonies, weddings, sporting derbies, and studio sessions.
          </p>
        </div>

        {/* Primary Official Pixieset Gateway Links */}
        <div className="mb-12 p-6 rounded-2xl bg-[#0e1118] border border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <Camera className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-white text-sm">
              Official ASMG Division Pixieset Portals
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {pixiesetAccounts.map((acc) => (
              <a
                key={acc.id}
                href={acc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#131722] border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
              >
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">
                    {acc.label}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">
                    {acc.handle}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0e1118] border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setFilterDivision('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterDivision === 'all'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Galleries
            </button>
            <button
              onClick={() => setFilterDivision('all-schools-media')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterDivision === 'all-schools-media'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Schools
            </button>
            <button
              onClick={() => setFilterDivision('sports-express')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterDivision === 'sports-express'
                  ? 'bg-orange-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sports
            </button>
            <button
              onClick={() => setFilterDivision('wildfive-pictures')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterDivision === 'wildfive-pictures'
                  ? 'bg-amber-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Weddings & Life
            </button>
            <button
              onClick={() => setFilterDivision('5th-floor-studio')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterDivision === '5th-floor-studio'
                  ? 'bg-slate-300 text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              5th Floor Studio
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search school, family, event..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#0e1118] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGalleries.map((gal) => (
            <div
              key={gal.id}
              className="rounded-xl border border-slate-800 bg-[#0e1118] overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={gal.coverImage}
                  alt={gal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-amber-400 text-xs font-mono flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Pixieset Secured
                  </span>
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-slate-300 font-mono text-xs">
                    {gal.photosCount || 300}+ High-Res Frames
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
                    <span className="text-amber-500 font-semibold">{gal.division.toUpperCase()}</span>
                    <span>{gal.date}</span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {gal.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {gal.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-500 truncate max-w-[150px]">
                    {gal.location || 'Harare, Zimbabwe'}
                  </div>
                  <a
                    href={gal.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-amber-950/40"
                  >
                    <span>Open Gallery</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security / PIN Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0e1118] border border-slate-800 flex items-start gap-4 text-xs text-slate-400">
          <KeyRound className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-white">Looking for your Private Client PIN?</h4>
            <p className="mt-1 leading-relaxed">
              Private wedding collections and confidential corporate archives require an 4-digit PIN issued directly to the booking client. If you have misplaced your gallery access PIN, please contact your designated project director or email WildFive/ASMG support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
