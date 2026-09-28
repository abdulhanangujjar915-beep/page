import React, { useState } from 'react';
import { Project } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 md:py-16 border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Featured Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-0.5">
              Selected Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Production web applications built with React, TypeScript, and modern backend APIs.
            </p>
          </div>
        </div>

        {/* 3-Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Detailed Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
