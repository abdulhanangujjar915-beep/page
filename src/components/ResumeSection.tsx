import React, { useState } from 'react';
import { Printer, Download, Copy, Check, FileText } from 'lucide-react';
import { contactData, experienceData, educationData, certificationsData } from '../data/portfolioData';

interface ResumeSectionProps {
  onShowToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onShowToast }) => {
  const [copiedResume, setCopiedResume] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const generateMarkdownResume = () => {
    return `# ${contactData.name} - ${contactData.title}
Phone: ${contactData.phone} | Email: ${contactData.email} | Location: ${contactData.location}
WhatsApp: ${contactData.whatsappUrl} | GitHub: ${contactData.githubUrl}

## PROFESSIONAL SUMMARY
${contactData.bio}

## CORE SKILLS
- Frontend: React, TypeScript, Next.js, Tailwind CSS, JavaScript ES6+, HTML5/CSS3
- Backend & APIs: Node.js, Express.js, RESTful APIs, PostgreSQL, MongoDB, Firebase
- Tools & DevOps: Git, GitHub, Vite, Postman, Web Performance Tuning

## EXPERIENCE
${experienceData.map(exp => `
### ${exp.role} — ${exp.company} (${exp.period})
${exp.description}
Technologies: ${exp.techStack.join(', ')}
`).join('\n')}

## EDUCATION
${educationData.map(edu => `
### ${edu.degree} — ${edu.institution} (${edu.period})
`).join('\n')}

## CERTIFICATIONS
${certificationsData.map(cert => `- ${cert.name} — ${cert.issuer} (${cert.year})`).join('\n')}
`;
  };

  const handleCopyPlainText = () => {
    const text = generateMarkdownResume();
    navigator.clipboard.writeText(text);
    setCopiedResume(true);
    onShowToast('Resume copied to clipboard!', 'success');
    setTimeout(() => setCopiedResume(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const text = generateMarkdownResume();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Abdul_Hanan_Web_Developer_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onShowToast('Resume downloaded!', 'success');
  };

  return (
    <section id="resume" className="py-12 md:py-16 border-b border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header & Action Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Curriculum Vitae
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-0.5">
              Resume
            </h2>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm font-semibold"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            >
              {copiedResume ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedResume ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Printable & Interactive CV Document Paper Container */}
        <div className="printable-resume bg-slate-900/90 text-slate-100 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white font-display">
                {contactData.name}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-emerald-400">
                {contactData.title}
              </p>
            </div>

            <div className="text-xs text-slate-400 space-x-3 font-mono">
              <a href={`tel:${contactData.phone}`} className="hover:text-emerald-400">
                {contactData.formattedPhone}
              </a>
              <span>·</span>
              <a href={`mailto:${contactData.email}`} className="hover:text-emerald-400">
                {contactData.email}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {contactData.bio} Experienced in building full-stack web applications with React, TypeScript, and Node.js, focusing on sub-1.2s page loads and clean architecture.
            </p>
          </div>

          {/* Quick Experience Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              Experience Snapshot
            </h3>
            <div className="space-y-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-white">{exp.role} · {exp.company}</span>
                    <span className="text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-slate-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="pt-3 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 font-medium block">Education</span>
              <span className="text-white font-bold">{educationData[0].degree}</span>
              <span className="text-slate-400 block text-[11px]">{educationData[0].institution} · {educationData[0].period}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Key Skills</span>
              <span className="text-slate-300 leading-normal">
                React, TypeScript, Next.js, Node.js, Express, Tailwind CSS, PostgreSQL, REST APIs.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
