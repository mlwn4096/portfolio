import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

interface FooterProps {
  onOpenLegal: (tab: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="border-t-4 border-black bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-4 border-black/10">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="border-3 border-black bg-neo-secondary px-2.5 py-0.5 font-display font-black text-xl tracking-tighter">
                MLWN
              </span>
              <span className="font-display font-extrabold text-lg uppercase tracking-tight">
                MELWIN SANTHOSH
              </span>
            </div>
            <p className="text-xs font-bold text-black/70 uppercase tracking-wider">
              Integrated MCA Student • St Joseph's College of Engineering and Technology, Palai
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mlwn4096"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub mlwn4096"
              className="p-2.5 border-3 border-black bg-[#FFFDF5] shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all neo-press"
            >
              <GitHubIcon className="w-5 h-5 text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/melwin-santhosh-784550378"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Melwin Santhosh"
              className="p-2.5 border-3 border-black bg-[#FFFDF5] shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all neo-press"
            >
              <LinkedInIcon className="w-5 h-5 text-black" />
            </a>
            <a
              href="mailto:melwinsanthosh@outlook.com"
              aria-label="Email Melwin Santhosh"
              className="p-2.5 border-3 border-black bg-[#FFFDF5] shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all neo-press"
            >
              <MailIcon className="w-5 h-5 text-black" />
            </a>
          </div>

        </div>

        {/* Bottom Metadata & Legal Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-bold">
          
          <div className="space-y-1">
            <p className="text-black/80">
              © {new Date().getFullYear()} Melwin Santhosh. Built with Neo-brutalist principles.
            </p>
            <p className="font-mono text-[11px] text-black/60">
              Domain: mlwn.runs-on.dev • AI × Multimedia
            </p>
          </div>

          {/* Legal Modal Triggers */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('terms')}
              className="underline hover:text-neo-accent transition-colors"
            >
              Terms of Service
            </button>
            <span className="text-black/30">•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="underline hover:text-neo-accent transition-colors"
            >
              Privacy Policy
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
