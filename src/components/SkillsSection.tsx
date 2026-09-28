import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Server, Wrench, Zap, Smartphone, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categoryIcons = [
    <Code2 className="w-4 h-4 text-emerald-400" />,
    <Server className="w-4 h-4 text-sky-400" />,
    <Wrench className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <section id="skills" className="py-12 md:py-16 border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Skills & Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Modern tools and technologies used to build scalable web products.
          </p>
        </div>

        {/* 3 Columns for Frontend, Backend, Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-slate-800">
                    {categoryIcons[idx]}
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-slate-500 font-mono text-[11px]">{skill.experienceYears}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                        <div
                          className="bg-emerald-400 h-full rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Quick Value Pillars (Responsive & Fast) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-white block">Speed & Core Web Vitals</span>
              <span className="text-slate-400 leading-relaxed">
                Sub-1.2s page loads, minimal bundle overhead, and 90+ Lighthouse scores.
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
            <Smartphone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-white block">Mobile-First Responsiveness</span>
              <span className="text-slate-400 leading-relaxed">
                Pixel-perfect UX that adapts seamlessly across phones, tablets, and desktops.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
