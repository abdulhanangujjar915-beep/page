import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink 
} from 'lucide-react';
import { contactData } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactData.phone);
    setCopiedPhone(true);
    onShowToast(`Phone copied: ${contactData.phone}`, 'success');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    onShowToast(`Email copied: ${contactData.email}`, 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please fill out all fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('Message sent to Abdul Hanan!', 'success');
      setFormData({ name: '', email: '', message: '' });
    }, 400);
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-8 space-y-1">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Contact Abdul Hanan
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Available for freelance projects, frontend contracts, and full-time positions.
          </p>
        </div>

        {/* Quick Contact Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Phone */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400">Phone / WhatsApp</p>
                <a href={`tel:${contactData.phone}`} className="text-sm font-bold text-white hover:text-emerald-400 font-mono">
                  {contactData.formattedPhone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <a
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors"
              >
                Chat
              </a>
              <button
                onClick={handleCopyPhone}
                className="p-1 text-slate-400 hover:text-white rounded"
                title="Copy phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Email */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-slate-400">Email</p>
                <a href={`mailto:${contactData.email}`} className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 truncate block">
                  {contactData.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1 text-slate-400 hover:text-white rounded shrink-0"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Compact Form */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          {submitted ? (
            <div className="text-center py-6 space-y-2">
              <Check className="w-8 h-8 text-emerald-400 mx-auto" />
              <p className="text-sm font-bold text-white">Message Sent!</p>
              <p className="text-xs text-slate-400">Abdul Hanan will respond shortly to your email.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs text-emerald-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <textarea
                required
                rows={3}
                placeholder="Your Message / Project Details *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 resize-none"
              />

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-500">
                  Replies usually within a few hours.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
