import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { Project, DivisionKey } from '../types';
import { Search, Play, Clock, MapPin, CheckCircle, ArrowRight, X, ExternalLink } from 'lucide-react';

interface WorkViewProps {
  onOpenBooking: (division?: DivisionKey) => void;
  selectedProjectSlug?: string | null;
  onClearSelectedProject: () => void;
}

export const WorkView: React.FC<WorkViewProps> = ({
  onOpenBooking,
  selectedProjectSlug,
  onClearSelectedProject,
}) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    selectedProjectSlug ? PROJECTS.find((p) => p.slug === selectedProjectSlug) || null : null
  );

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesDiv = selectedDivision === 'all' || proj.division === selectedDivision;
    const matchesQuery =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDiv && matchesQuery;
  });

  return (
    <div className="bg-[#07080b] min-h-screen text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
            Selected Works & Productions
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Cinematic Portfolio
          </h1>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Direct creative and technical output across Zimbabwe. Explore school speech days, sports outside broadcasts, documentary life milestones, and studio portrait sessions.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0e1118] border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setSelectedDivision('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedDivision === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Divisions
            </button>
            <button
              onClick={() => setSelectedDivision('all-schools-media')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedDivision === 'all-schools-media'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Schools Media
            </button>
            <button
              onClick={() => setSelectedDivision('sports-express')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedDivision === 'sports-express'
                  ? 'bg-orange-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sports Express
            </button>
            <button
              onClick={() => setSelectedDivision('wildfive-pictures')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedDivision === 'wildfive-pictures'
                  ? 'bg-amber-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              WildFive
            </button>
            <button
              onClick={() => setSelectedDivision('5th-floor-studio')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedDivision === '5th-floor-studio'
                  ? 'bg-slate-200 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              5th Floor Studio
            </button>
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search projects, client, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#0e1118] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveModalProject(proj)}
              className="rounded-2xl border border-slate-800 bg-[#0e1118] overflow-hidden group cursor-pointer hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={proj.heroMedia}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-transparent to-transparent opacity-90" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-400 font-bold">
                    {proj.divisionTitle}
                  </span>
                </div>

                {proj.duration && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-slate-300 text-[10px] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{proj.duration}</span>
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-500 mb-1">
                    {proj.location} • Client: {proj.client}
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {proj.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-mono text-[10px]">
                    ✓ Verified Production
                  </span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                    Case Study →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#0d0f17] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#111520] border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  {activeModalProject.divisionTitle}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeModalProject.projectType}
                </span>
              </div>
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onClearSelectedProject();
                }}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                <img
                  src={activeModalProject.heroMedia}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-1">
                  <span>Client: {activeModalProject.client}</span>
                  <span>•</span>
                  <span>Location: {activeModalProject.location}</span>
                </div>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-black text-white">
                  {activeModalProject.title}
                </h2>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {activeModalProject.summary}
                </p>
              </div>

              {/* Verified Proof Box */}
              <div className="p-4 rounded-xl bg-[#121520] border border-slate-800 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider">
                    Verified Production Proof & Execution Metrics:
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {activeModalProject.verifiedProof}
                  </p>
                </div>
              </div>

              {/* Equipment Fleet Used */}
              {activeModalProject.equipmentUsed && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Production Equipment Deployed:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.equipmentUsed.map((eq, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded bg-[#151926] border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const divKey = activeModalProject.division;
                    setActiveModalProject(null);
                    onOpenBooking(divKey);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-950/40"
                >
                  Book Similar Scope
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
