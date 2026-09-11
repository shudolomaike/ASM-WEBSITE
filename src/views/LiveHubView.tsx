import React, { useState } from 'react';
import { LIVE_STREAMS } from '../data/liveStreams';
import { getActiveBroadcast, setEditorialStreamState } from '../integrations/youtube/live';
import { LiveState } from '../types';
import { Radio, Play, Calendar, Users, ExternalLink, ShieldCheck, Tv, Signal, Cpu } from 'lucide-react';
import { openWhatsAppEnquiry } from '../lib/whatsapp';

export const LiveHubView: React.FC = () => {
  const [broadcastData, setBroadcastData] = useState(getActiveBroadcast());
  const { primary, state, upcoming, replays } = broadcastData;

  const handleSimulateState = (newState: LiveState) => {
    if (primary) {
      setEditorialStreamState(primary.id, newState);
      setBroadcastData(getActiveBroadcast());
    }
  };

  const handleBookBroadcast = () => {
    openWhatsAppEnquiry({
      division: 'sports-express',
      product: 'Outside Broadcast (OB) Live Streaming',
      sourcePage: '/live',
      customMessage: 'Hello Mr Gid, I would like to enquire about booking an ASMG Outside Broadcast (OB) livestreaming unit.',
    });
  };

  return (
    <div className="bg-[#07080b] min-h-screen text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hub Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800/80 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold">
                Live Outside Broadcast (OB) Network
              </span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              ASMG Live Media Hub
            </h1>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Real-time multi-camera transmission for Zimbabwean school sports derbies, institutional speech days, and national athletics championships.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleBookBroadcast}
              className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-red-950/50 flex items-center gap-2"
            >
              <Radio className="w-4 h-4" />
              <span>Book OB Van</span>
            </button>
          </div>
        </div>

        {/* Transmission Specs Banner */}
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#0e1118] border border-slate-800 flex items-center gap-3">
            <Signal className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Bonded SIM Aggregation</div>
              <div className="text-[11px] text-slate-400">Multi-telco 4G/5G failover array</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#0e1118] border border-slate-800 flex items-center gap-3">
            <Tv className="w-6 h-6 text-blue-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">1080p60 Broadcast Frame Rate</div>
              <div className="text-[11px] text-slate-400">Low-latency high-speed sports motion</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#0e1118] border border-slate-800 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Live On-Screen Graphics & Replay</div>
              <div className="text-[11px] text-slate-400">Score bugs, lower-thirds & instant replay</div>
            </div>
          </div>
        </div>

        {/* Primary Screen Showcase */}
        {primary && (
          <div className="mb-16 bg-[#0e1118] border border-slate-800 rounded-2xl overflow-hidden p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {state === 'LIVE' ? (
                  <span className="px-3 py-1 rounded bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    LIVE ON AIR
                  </span>
                ) : state === 'UPCOMING' ? (
                  <span className="px-3 py-1 rounded bg-amber-600 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider">
                    UPCOMING TRANSMISSION
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider">
                    LATEST BROADCAST REPLAY
                  </span>
                )}
                <span className="text-xs font-mono text-slate-400">
                  {primary.division.toUpperCase()} • HARARE
                </span>
              </div>

              {/* Mode Test switcher */}
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono">
                <span className="text-slate-500 text-[10px]">Test Feed State:</span>
                <button
                  onClick={() => handleSimulateState('LIVE')}
                  className={`px-2 py-0.5 rounded text-[11px] ${
                    state === 'LIVE' ? 'bg-red-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  LIVE
                </button>
                <button
                  onClick={() => handleSimulateState('UPCOMING')}
                  className={`px-2 py-0.5 rounded text-[11px] ${
                    state === 'UPCOMING' ? 'bg-amber-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  UPCOMING
                </button>
                <button
                  onClick={() => handleSimulateState('REPLAY')}
                  className={`px-2 py-0.5 rounded text-[11px] ${
                    state === 'REPLAY' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  REPLAY
                </button>
              </div>
            </div>

            {/* Video player box */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-slate-800">
              <img
                src={primary.thumbnail}
                alt={primary.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <a
                href={primary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl">
                  <Play className="w-9 h-9 fill-current ml-1" />
                </div>
              </a>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="bg-black/80 px-3 py-1 rounded">
                  {primary.tournamentOrEvent || 'ASMG Live Broadcast Feed'}
                </span>
                <span className="bg-black/80 px-3 py-1 rounded text-amber-400">
                  {primary.viewCount || '14,200 Viewers Peak'}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  {primary.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {primary.subtitle}
                </p>
              </div>
              <a
                href={primary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-md shadow-red-950"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Upcoming Fixtures & Schedule */}
        <div className="mb-16">
          <h2 className="font-cinzel text-2xl font-bold text-white mb-6">
            Upcoming Broadcast Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcoming.map((stream) => (
              <div
                key={stream.id}
                className="p-6 rounded-xl bg-[#0e1118] border border-slate-800 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-1">
                    <span>{stream.scheduledStart}</span>
                    <span className="text-slate-500">{stream.division.toUpperCase()}</span>
                  </div>
                  <h4 className="font-bold text-white text-base">{stream.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{stream.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Broadcast Replay Catalog */}
        <div>
          <h2 className="font-cinzel text-2xl font-bold text-white mb-6">
            Past Broadcast Replays & Archives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {replays.map((stream) => (
              <div
                key={stream.id}
                className="rounded-xl border border-slate-800 bg-[#0e1118] overflow-hidden group flex flex-col justify-between"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-transparent to-transparent opacity-80" />
                  <a
                    href={stream.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </a>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-slate-500 block mb-1">
                      {stream.division.toUpperCase()}
                    </span>
                    <h4 className="font-bold text-white text-sm line-clamp-1">{stream.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{stream.subtitle}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-400">{stream.viewCount}</span>
                    <a
                      href={stream.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white flex items-center gap-1"
                    >
                      <span>Watch Replay</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
