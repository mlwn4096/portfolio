import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

interface FooterProps {
  onOpenLegal: (tab: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-4 sm:border-t-8 border-black bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="border-3 border-white bg-neo-secondary px-3 py-1 font-black text-base text-black tracking-tighter">
              MLWN
            </div>
            <div>
              <span className="font-black text-sm uppercase tracking-wider block text-white">
                Melwin Santhosh
              </span>
              <span className="text-[11px] font-mono text-white/60 block">
                Integrated MCA • SJCET Palai (2025–2030)
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mlwn4096"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 border-3 border-white bg-black text-white hover:bg-neo-secondary hover:text-black transition-colors"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/melwin-santhosh-784550378"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 border-3 border-white bg-black text-white hover:bg-neo-secondary hover:text-black transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:melwinsanthoah4096@gmail.com"
              aria-label="Email"
              className="p-2.5 border-3 border-white bg-black text-white hover:bg-neo-secondary hover:text-black transition-colors"
            >
              <MailIcon className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 px-3.5 py-2 border-3 border-white bg-neo-accent text-white font-black text-xs uppercase tracking-wider hover:bg-neo-secondary hover:text-black transition-colors"
            >
              TOP ↑
            </button>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/70">
            <span>&copy; {new Date().getFullYear()} Melwin Santhosh</span>
            <span className="text-white/30">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="underline hover:text-neo-secondary transition-colors"
            >
              Terms
            </button>
            <span className="text-white/30">•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="underline hover:text-neo-secondary transition-colors"
            >
              Privacy
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
