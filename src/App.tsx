import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PraxSection } from './components/PraxSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { PortfolioSkeleton } from './components/PortfolioSkeleton';
import { NotFound } from './components/NotFound';

export function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'terms' | 'privacy'>('terms');
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    // Check if the current pathname is a 404 route
    const path = window.location.pathname;
    if (path !== '/' && path !== '' && path !== '/index.html') {
      setIsNotFound(true);
      setIsLoading(false);
      return;
    }

    // Skeleton loader timer for smooth initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenLegal = (tab: 'terms' | 'privacy') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const tickerItems = [
    'AI × MULTIMEDIA',
    'SJCET PALAI',
    'PRAX PLATFORM CONTRIBUTOR',
    'NEUROBOTS ZERO TRUST',
    'INTEGRATED MCA 2025-2030',
    'LINUX & SHELL SYSTEMS',
  ];

  if (isNotFound) {
    return <NotFound />;
  }

  if (isLoading) {
    return <PortfolioSkeleton />;
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black font-body flex flex-col selection:bg-neo-secondary selection:text-black">
      {/* Top Banner Ticker */}
      <MarqueeBanner items={tickerItems} bg="bg-neo-secondary" textColor="text-black" borderB={true} />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <PraxSection />
        <MarqueeBanner
          items={['HACKATHONS', 'IBM WATSONX', 'GNOSIS AI', 'HASHITUP 24H', 'INSENDIUM BEST TEAM', 'PRAYANA SUMMIT']}
          bg="bg-neo-accent"
          textColor="text-white"
          borderB={true}
        />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Terms of Service & Privacy Policy Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalTab}
      />
    </div>
  );
}

export default App;
