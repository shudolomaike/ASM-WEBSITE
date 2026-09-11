import React, { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { DivisionKey, Project } from '../../types';
import { Play, ArrowRight, CheckCircle, Clock, MapPin, Eye } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (slug: string) => void;
  onOpenBooking: (division?: DivisionKey) => void;
  onOpenShowreel: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProject,
  onOpenBooking,
  onOpenShowreel,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.division === filter);

  return (
    <section id="work" className="py-20 bg-[#07080b] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
              Section 03 • Cinematic Selected Works
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl text-white font-bold tracking-tight">
              Evidence of Creative & Technical Capability
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              Real projects captured by ASMG crews across schools, stadium derbies, weddings, and executive studios in Zimbabwe.
            </p>
          </div>

          {/* Division Filters */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0e1118] border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('all-schools-media')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filter === 'all-schools-media'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Schools
            </button>
            <button
              onClick={() => setFilter('sports-express')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filter === 'sports-express'
                  ? 'bg-orange-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sports Express
            </button>
            <button
              onClick={() => setFilter('wildfive-pictures')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filter === 'wildfive-pictures'
                  ? 'bg-amber-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              WildFive
            </button>
            <button
              onClick={() => setFilter('5th-floor-studio')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filter === '5th-floor-studio'
                  ? 'bg-slate-300 text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              5th Floor
            </button>
          </div>
        </div>

        {/* Large Project Cards Grid (Section 8 Mandate: Avoid tiny generic cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-[#0d0f16] overflow-hidden flex flex-col group hover:border-slate-700 transition-all duration-300 shadow-xl"
            >
              {/* Media Poster Container */}
              <div
                onClick={() => onSelectProject(project.slug)}
                className="relative aspect-video w-full overflow-hidden cursor-pointer bg-black"
              >
                <img
                  src={project.heroMedia}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f16] via-transparent to-transparent opacity-80" />

                {/* Badges Top Left & Right */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-slate-700/80 text-amber-400">
                    {project.divisionTitle}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900/80 text-slate-300 backdrop-blur-md">
                    {project.projectType}
                  </span>
                </div>

                {project.duration && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-slate-300">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{project.duration}</span>
                  </div>
                )}

                {/* Play Button Overlay for Video Projects */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/60 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all shadow-2xl backdrop-blur-sm">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Meta & Verified Proof */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span>Client: {project.client}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProject(project.slug)}
                    className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Section 8 Mandate: Verified Proof display */}
                  <div className="mt-4 p-3 rounded-lg bg-[#121520] border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">
                        Verified Proof:
                      </span>
                      <span className="text-[11px] text-slate-300">{project.verifiedProof}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Deliverables & CTA */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group/btn"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
