import React from 'react';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-16 border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Experience & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Work Experience (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Work Experience</span>
            </div>

            <div className="space-y-4">
              {experienceData.map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{item.role}</span>
                    <span className="font-mono text-emerald-400 text-[11px]">{item.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{item.company} · {item.location}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                  
                  <div className="text-[11px] font-mono text-slate-500 pt-1">
                    Tech: {item.techStack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            
            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>Education</span>
              </div>

              {educationData.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="font-mono text-slate-500 text-[11px]">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-400">{edu.institution}</p>
                  <p className="text-xs text-emerald-400 font-mono font-medium">{edu.grade}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Certifications</span>
              </div>

              <div className="space-y-2">
                {certificationsData.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                    <div>
                      <p className="font-medium text-white">{cert.name}</p>
                      <p className="text-slate-400 text-[11px]">{cert.issuer}</p>
                    </div>
                    <span className="font-mono text-slate-500 text-[11px]">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
