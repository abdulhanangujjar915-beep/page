import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { Toast, ToastMessage } from './components/Toast';

const DEFAULT_PHOTO = '/src/assets/images/abdul_hanan_portrait_1790600353459.jpg';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentPhoto, setCurrentPhoto] = useState<string>(DEFAULT_PHOTO);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Load saved custom photo and theme from localStorage on initial mount
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('ah_portfolio_photo');
      if (savedPhoto) {
        setCurrentPhoto(savedPhoto);
      }
      const savedTheme = localStorage.getItem('ah_portfolio_theme') as 'dark' | 'light' | null;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    } catch (e) {
      console.error('Storage access error', e);
    }
  }, []);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      localStorage.setItem('ah_portfolio_theme', nextTheme);
    } catch (e) {
      // ignore
    }
  };

  const handleSavePhoto = (newPhoto: string) => {
    setCurrentPhoto(newPhoto);
    try {
      localStorage.setItem('ah_portfolio_photo', newPhoto);
      showToast('Profile photo updated successfully!', 'success');
    } catch (e) {
      showToast('Photo updated for current session.', 'info');
    }
  };

  const handleResetPhoto = () => {
    setCurrentPhoto(DEFAULT_PHOTO);
    try {
      localStorage.removeItem('ah_portfolio_photo');
      showToast('Reset to default profile photo.', 'info');
    } catch (e) {
      // ignore
    }
  };

  const handleDownloadResume = () => {
    // Smooth scroll down to resume section
    const elem = document.getElementById('resume');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#090D16] text-slate-100' 
        : 'theme-light bg-slate-50 text-slate-900'
    }`}>
      {/* Top Bar Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenContact={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="w-full">
        {/* Hero Section with Abdul Hanan's details and custom photo option */}
        <Hero
          photo={currentPhoto}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
          onShowToast={showToast}
          onDownloadResume={handleDownloadResume}
        />

        {/* Projects Showcase with interactive filtering and detail modal */}
        <ProjectsSection />

        {/* Skills & Architecture Capabilities */}
        <SkillsSection />

        {/* Work Experience & Background Timeline */}
        <ExperienceSection />

        {/* Interactive & Printable Resume / CV Section */}
        <ResumeSection onShowToast={showToast} />

        {/* Direct Contact Information & Interactive Form */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Minimalist Professional Footer */}
      <Footer />

      {/* Interactive Photo Upload / Customize Modal */}
      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        currentPhoto={currentPhoto}
        defaultPhoto={DEFAULT_PHOTO}
        onClose={() => setIsPhotoModalOpen(false)}
        onSavePhoto={handleSavePhoto}
        onResetDefault={handleResetPhoto}
      />

      {/* Notifications Toast System */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
