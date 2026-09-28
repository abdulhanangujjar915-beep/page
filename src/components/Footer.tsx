import React from 'react';
import { ArrowUp } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 no-print text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Name & Title */}
        <div className="text-center sm:text-left">
          <p className="font-bold text-white">Abdul Hanan</p>
          <p className="text-slate-400 text-[11px]">Web Developer · Lahore, Pakistan</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 text-[11px]">
          <a href={`tel:${contactData.phone}`} className="hover:text-emerald-400">
            {contactData.formattedPhone}
          </a>
          <a href={`mailto:${contactData.email}`} className="hover:text-emerald-400">
            {contactData.email}
          </a>
          <a href={contactData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
            WhatsApp
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white ml-2"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
