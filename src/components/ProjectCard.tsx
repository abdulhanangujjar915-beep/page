import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article 
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
    >
      {/* Image Preview Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            target.src = '/src/assets/images/project_modern_saas_1790600374138.jpg';
          }}
        />
        {/* Subtle scrim on hover */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-900 bg-white rounded-md shadow-lg">
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Metadata: unboxed clean text with typographic separator (Zero-Pill discipline) */}
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
            <span className="uppercase tracking-wider font-semibold">{project.category}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">{project.metrics[0]}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-display">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack: unboxed text with subtle dot separators */}
        <div className="pt-2 border-t border-slate-800/80">
          <div className="text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
            {project.techStack.map((tech, idx) => (
              <React.Fragment key={idx}>
                <span className="font-mono text-slate-300">{tech}</span>
                {idx < project.techStack.length - 1 && (
                  <span aria-hidden="true" className="text-slate-600">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Footers */}
        <div className="pt-1 flex items-center justify-between text-xs">
          <button 
            type="button"
            className="text-emerald-400 font-medium group-hover:underline inline-flex items-center gap-1"
          >
            Case Study Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 text-slate-400" onClick={(e) => e.stopPropagation()}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Source on GitHub"
                className="p-1 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="p-1 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
