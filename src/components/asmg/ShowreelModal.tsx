import React from 'react';
import { X, Play, Volume2, Maximize2 } from 'lucide-react';
import { PARENT_BRAND } from '../../config/brand';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#090b10] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#0d0f15] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wider text-slate-300">
              ASMG MASTER SHOWREEL [{PARENT_BRAND.flagshipShowreelDuration}]
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Showreel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Simulated cinematic preview reel with sound and play indicator */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-cameraman-filming-with-a-professional-camera-40788-large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Film Grain & Letterbox */}
          <div className="absolute inset-0 bg-film-grain opacity-25 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-8 bg-black/80 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between px-6">
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-amber-400 font-semibold">4K CINEMA MASTER</span>
              <span>24.00 FPS</span>
              <span>10-BIT 4:2:2 PRORES</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
              <span>HARARE, ZIMBABWE</span>
            </div>
          </div>
        </div>

        {/* Caption below */}
        <div className="p-4 sm:p-6 bg-[#0d0f15] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-white">
              All Schools Media Group • Multi-Division Master Reel
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Highlighting All Schools Media, Sports Express, WildFive Pictures, The 5th Floor Studio & ASM Digital.
            </p>
          </div>
          <a
            href="https://youtube.com/@allschoolsmediasolutions8981?si=EAH0dNBsFQEIbf8p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors whitespace-nowrap"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Watch Full Reel on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};
