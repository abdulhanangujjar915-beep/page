import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Camera, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  MessageSquare, 
  MapPin
} from 'lucide-react';
import { contactData, heroStats } from '../data/portfolioData';

interface HeroProps {
  photo: string;
  onOpenPhotoModal: () => void;
  onShowToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  photo,
  onOpenPhotoModal,
  onShowToast,
  onDownloadResume,
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactData.phone);
    setCopiedPhone(true);
    onShowToast(`Phone copied: ${contactData.phone}`, 'success');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    onShowToast(`Email copied: ${contactData.email}`, 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-8 pb-12 md:pt-14 md:pb-16 overflow-hidden border-b border-slate-800/60">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline & Details */}
          <div className="md:col-span-8 space-y-4">
            
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for freelance & full-time roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
                Abdul Hanan
              </h1>
              <p className="text-base sm:text-lg font-medium text-emerald-400">
                Web Developer & Frontend Engineer
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              Building responsive, high-performance web applications with React, TypeScript, Node.js, and modern CSS. Fast turnarounds and clean code.
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${contactData.phone}`} className="hover:text-white font-mono">
                  {contactData.formattedPhone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  title="Copy number"
                  className="p-0.5 text-slate-500 hover:text-emerald-400 transition-colors ml-1"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${contactData.email}`} className="hover:text-white truncate max-w-[200px] sm:max-w-none">
                  {contactData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email"
                  className="p-0.5 text-slate-500 hover:text-emerald-400 transition-colors ml-1"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-md shadow-emerald-500/10"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                onClick={onDownloadResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume</span>
              </a>

              <a
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Developer Photo Card (Compact) */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative w-44 sm:w-52">
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-2 group shadow-xl">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={photo}
                    alt="Abdul Hanan - Web Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/src/assets/images/abdul_hanan_portrait_1790600353459.jpg';
                    }}
                  />

                  {/* Change photo button */}
                  <button
                    onClick={onOpenPhotoModal}
                    className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/80 hover:bg-black text-white text-[11px] font-medium border border-white/20 transition-all shadow-md"
                    title="Change picture"
                  >
                    <Camera className="w-3 h-3 text-emerald-400" />
                    <span>Change</span>
                  </button>
                </div>

                <div className="mt-2 px-1 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>Lahore, Pakistan</span>
                  </div>
                  <span className="text-emerald-400 font-medium">Web Dev</span>
                </div>
              </div>

              <button
                onClick={onOpenPhotoModal}
                className="mt-2 text-[11px] text-slate-400 hover:text-emerald-400 transition-colors w-full text-center inline-flex items-center justify-center gap-1"
              >
                <Camera className="w-3 h-3" />
                <span>Apni picture lagayein</span>
              </button>

            </div>
          </div>

        </div>

        {/* Compact Stats Row */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
          {heroStats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
