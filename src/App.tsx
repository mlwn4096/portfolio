import { useState } from 'react';
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

export function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'terms' | 'privacy'>('terms');

  const handleOpenLegal = (tab: 'terms' | 'privacy') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const tickerItems = [
    'AI × MULTIMEDIA',
    'SJCET PALAI',
    'HEAD OF PRAX',
    'NEUROBOTS',
    'MCA 2025-2030',
  ];

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
