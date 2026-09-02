import React, { useState, useEffect } from 'react';
import { CloseIcon } from './Icons';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'terms' | 'privacy';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terms'
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-grayscale"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl border-4 border-black bg-[#FFFDF5] shadow-neo-xl max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b-4 border-black bg-neo-secondary p-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-neo-accent border-2 border-black inline-block" />
            <span className="w-3 h-3 bg-black inline-block" />
            <h2 id="legal-modal-title" className="font-display font-black text-lg uppercase tracking-tight text-black">
              LEGAL & POLICIES
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border-2 border-black bg-white shadow-neo-sm hover:bg-neo-accent hover:text-white transition-colors neo-press"
            aria-label="Close legal modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex border-b-4 border-black bg-white">
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-3 font-display font-black text-xs sm:text-sm uppercase tracking-wider border-r-2 border-black transition-colors ${
              activeTab === 'terms' ? 'bg-[#FFFDF5] text-black border-b-0' : 'bg-black/5 text-black/60 hover:bg-black/10'
            }`}
          >
            TERMS OF SERVICE
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-3 font-display font-black text-xs sm:text-sm uppercase tracking-wider transition-colors ${
              activeTab === 'privacy' ? 'bg-[#FFFDF5] text-black border-b-0' : 'bg-black/5 text-black/60 hover:bg-black/10'
            }`}
          >
            PRIVACY POLICY
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-body text-sm font-bold text-black/85">
          {activeTab === 'terms' ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-extrabold text-base uppercase text-black mb-1">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By accessing and browsing this portfolio website (mlwn.runs-on.dev), you acknowledge and agree to comply with these terms. This site represents the personal academic portfolio and experimental project showcase of Melwin Santhosh, an Integrated MCA student at St Joseph's College of Engineering and Technology (SJCET), Palai.
                </p>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-base uppercase text-black mb-1">
                  2. Intellectual Property & Code Showcase
                </h3>
                <p>
                  All project code, repositories, and technical descriptions featured on this website are authored for educational, research, and experimental exploration. Open-source repositories linked (such as NeuroBots and proj0) remain subject to their respective open-source licenses as published on GitHub.
                </p>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-base uppercase text-black mb-1">
                  3. Accuracy of Student Information
                </h3>
                <p>
                  All details concerning academic status, hackathon participations (INCEPTA 2026, HashItUp 2025), workshops (ICSET watsonx Orchestrate), college events (INSENDIUM 10.0, PRAYANA 2025), and leadership as Head of PRAX represent authentic, verified student records. No claims of senior industry employment or commercial vendor status are made.
                </p>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-base uppercase text-black mb-1">
                  4. External Links
                </h3>
                <p>
                  This site includes external links to GitHub, LinkedIn, and event organizers. Melwin Santhosh is not responsible for the content, privacy practices, or uptime of third-party platforms.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-extrabold text-base uppercase text-black mb-1">
                  1. Information Collection
                </h3>
                <p>
                  This portfolio website is a static site hosted at mlwn.runs-on.dev. It does not use intrusive tracking cookies, behavioral ad pixels, third-party analytics trackers, or commercial profiling scripts.
                </p>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-base uppercase text-black mb-1">
                  2. Communications & Direct Inquiries
                </h3>
                <p>
                  If you choose to contact Melwin via the provided email address (melwinsanthosh@outlook.com), your email address and message contents are utilized solely to respond to your technical, academic, or collaborative inquiry. Your information is never sold, leased, or shared with third parties.
                </p>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-base uppercase text-black mb-1">
                  3. Hosting & Infrastructure
                </h3>
                <p>
                  Web requests may be processed by hosting infrastructure providers strictly to serve static HTML, CSS, JavaScript, and font assets securely. Standard server logs (such as IP address and user agent) may be temporarily processed for security, DDoS prevention, and protocol compliance.
                </p>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-base uppercase text-black mb-1">
                  4. Updates to This Policy
                </h3>
                <p>
                  Any updates to this privacy policy will be posted directly to this section with an updated revision date. Effective date: September 2026.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t-4 border-black bg-white p-4 flex justify-between items-center">
          <span className="text-xs font-mono font-bold text-black/60">
            mlwn.runs-on.dev • Palai, Kerala
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 border-3 border-black bg-neo-accent text-white font-display font-black text-xs uppercase shadow-neo-sm hover:bg-black transition-all neo-press"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};
