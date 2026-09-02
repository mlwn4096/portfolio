import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

interface FooterProps {
  onOpenLegal: (tab: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="border-t-2 border-black/10 bg-white text-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="border-2 border-black bg-neo-secondary px-2 py-0.5 font-display font-black text-sm tracking-tighter">
              MLWN
            </span>
            <span className="font-display font-bold text-sm uppercase tracking-tight">
              Melwin Santhosh
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mlwn4096"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-black/60 hover:text-black transition-colors"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/melwin-santhosh-784550378"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black/60 hover:text-black transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:melwinsanthosh@outlook.com"
              aria-label="Email"
              className="text-black/60 hover:text-black transition-colors"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright & Legal */}
          <div className="flex items-center gap-3 text-xs text-black/50 font-body">
            <span>&copy; {new Date().getFullYear()} Melwin Santhosh</span>
            <span className="text-black/20">|</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-black transition-colors"
            >
              Terms
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-black transition-colors"
            >
              Privacy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
