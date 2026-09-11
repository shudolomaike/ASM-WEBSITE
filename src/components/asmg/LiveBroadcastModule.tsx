import React, { useState } from 'react';
import { getActiveBroadcast, setEditorialStreamState } from '../../integrations/youtube/live';
import { LiveState } from '../../types';
import { Radio, Play, Calendar, Users, ExternalLink, RefreshCw, Volume2, ShieldCheck } from 'lucide-react';

interface LiveBroadcastModuleProps {
  onGoToLiveHub: () => void;
}

export const LiveBroadcastModule: React.FC<LiveBroadcastModuleProps> = ({ onGoToLiveHub }) => {
  const [broadcastData, setBroadcastData] = useState(getActiveBroadcast());
  const { primary, state, upcoming, replays } = broadcastData;

  const handleSimulateState = (newState: LiveState) => {
    if (primary) {
      setEditorialStreamState(primary.id, newState);
      setBroadcastData(getActiveBroadcast());
    }
  };

  if (!primary && state === 'UNAVAILABLE') {
    return null; // Gracefully hidden as mandated
  }

  return (
    <section className="py-16 bg-[#090b10] border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with status toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider">Section 04 • Live Media Hub</span>
            </div>

            {state === 'LIVE' ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/80 text-red-400 text-xs font-mono font-bold animate-pulse">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>ON AIR NOW</span>
              </span>
            ) : state === 'UPCOMING' ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/80 text-amber-400 text-xs font-mono font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>UPCOMING TRANSMISSION</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/80 text-blue-400 text-xs font-mono font-bold">
                <Play className="w-3.5 h-3.5" />
                <span>RECENT BROADCAST REPLAY</span>
              </span>
            )}
          </div>

          {/* Test State Simulator for Management & Auditors */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="hidden md:inline text-[10px] text-slate-500">Live State Mode:</span>
            <button
              onClick={() => handleSimulateState('LIVE')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                state === 'LIVE'
                  ? 'bg-red-600 text-white font-bold'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400'
              }`}
            >
              LIVE
            </button>
            <button
              onClick={() => handleSimulateState('UPCOMING')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                state === 'UPCOMING'
                  ? 'bg-amber-600 text-white font-bold'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400'
              }`}
            >
              UPCOMING
            </button>
            <button
              onClick={() => handleSimulateState('REPLAY')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                state === 'REPLAY'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400'
              }`}
            >
              REPLAY
            </button>
          </div>
        </div>

        {/* Primary Broadcast Card */}
        {primary && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0e1118] border border-slate-800 rounded-2xl overflow-hidden p-6 sm:p-8 shadow-2xl">
            {/* Left Column: Video Preview / Player Embed */}
            <div className="lg:col-span-7 relative aspect-video rounded-xl overflow-hidden bg-black border border-slate-800/80 group">
              <img
                src={primary.thumbnail}
                alt={primary.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Status pill over media */}
              <div className="absolute top-4 left-4">
                {state === 'LIVE' && (
                  <span className="px-3 py-1 rounded bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    LIVE ON YOUTUBE
                  </span>
                )}
                {state === 'UPCOMING' && (
                  <span className="px-3 py-1 rounded bg-amber-600 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider">
                    STARTS: {primary.scheduledStart}
                  </span>
                )}
                {state === 'REPLAY' && (
                  <span className="px-3 py-1 rounded bg-blue-600 text-white font-mono font-bold text-xs uppercase tracking-wider">
                    FULL REPLAY ARCHIVE
                  </span>
                )}
              </div>

              {primary.viewCount && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-slate-300 font-mono text-xs flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{primary.viewCount}</span>
                </div>
              )}

              {/* Center Play / Watch CTA */}
              <a
                href={primary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Watch Broadcast on YouTube"
              >
                <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </a>

              {/* Bottom Ticker Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-black/90 px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="truncate">
                  {primary.tournamentOrEvent || 'ASMG Live Broadcast Relay'}
                </span>
                <span className="text-amber-400 shrink-0">1080p60 OB</span>
              </div>
            </div>

            {/* Right Column: Title, Details & Hub CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              <div>
                <span className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
                  {primary.division.toUpperCase()} • OUTSIDE BROADCAST UNIT
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1.5 leading-snug">
                  {primary.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {primary.subtitle || 'Multi-camera sports and institutional livestreaming powered by ASMG OB control vans and low-latency bonded cellular pipelines.'}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span>Broadcast Provider:</span>
                    <span className="text-slate-200">ASMG Sports Express / All Schools Media</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmission Status:</span>
                    <span className={state === 'LIVE' ? 'text-red-400 font-bold' : 'text-amber-400'}>
                      {state === 'LIVE' ? 'ACTIVE STREAM' : state === 'UPCOMING' ? 'SCHEDULED' : 'ARCHIVED'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Production Crew:</span>
                    <span className="text-slate-200">Director, 6 Cam Ops & Commentators</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={primary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-950"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{state === 'LIVE' ? 'Watch Stream Now' : 'Open in YouTube'}</span>
                </a>
                <button
                  onClick={onGoToLiveHub}
                  className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider transition-colors text-center"
                >
                  View All Broadcasts
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
