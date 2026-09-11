import React from 'react';
import { GALLERIES } from '../../data/galleries';
import { ExternalLink, Lock, Eye, Camera } from 'lucide-react';

interface LatestMediaRailProps {
  onOpenGalleries: () => void;
}

export const LatestMediaRail: React.FC<LatestMediaRailProps> = ({ onOpenGalleries }) => {
  return (
    <section className="py-20 bg-[#07080b] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
              Section 09 • Media Delivery Engine
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl text-white font-bold tracking-tight">
              Verified Pixieset Client Gateways
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              Clients access high-resolution digital galleries via our secure Pixieset gateways with direct high-speed download and print-lab fulfilment.
            </p>
          </div>
          <button
            onClick={onOpenGalleries}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#12151e] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
          >
            <Camera className="w-4 h-4 text-amber-500" />
            <span>View All Galleries Gateway</span>
          </button>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERIES.map((gal) => (
            <div
              key={gal.id}
              className="rounded-xl border border-slate-800 bg-[#0e1118] overflow-hidden group hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={gal.coverImage}
                  alt={gal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-transparent to-transparent opacity-80" />

                {/* Password / Protection pill */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded bg-black/80 backdrop-blur-md text-amber-400 text-[10px] font-mono flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Verified Client Gallery
                  </span>
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-slate-300">
                    {gal.photosCount || 350}+ High-Res Frames
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase text-amber-500 font-semibold mb-1">
                    {gal.division.toUpperCase()}
                  </div>
                  <h3 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors line-clamp-1">
                    {gal.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {gal.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">{gal.date}</span>
                  <a
                    href={gal.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Open Pixieset</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
