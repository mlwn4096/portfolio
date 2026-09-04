import React, { useState } from 'react';
import { MenuIcon, CloseIcon, ArrowUpRightIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PRAX', href: '#prax' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF5] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo as physical neo-brutalist badge */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Melwin Santhosh Homepage"
          >
            <div className="border-4 border-black bg-neo-secondary px-3 py-1.5 shadow-neo-sm group-hover:-translate-y-0.5 group-hover:shadow-neo transition-all neo-press">
              <span className="font-display font-extrabold text-2xl tracking-tighter text-black">
                MLWN
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="block font-display font-extrabold text-xs uppercase tracking-widest text-black">
                Melwin Santhosh
              </span>
              <span className="block text-[10px] font-bold text-black/60 uppercase tracking-wide">
                Integrated MCA • SJCET
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 font-bold text-xs uppercase tracking-wider text-black border-2 border-transparent hover:border-black hover:bg-neo-secondary hover:shadow-neo-sm transition-all focus:outline-none focus:border-black focus:bg-neo-secondary active:translate-x-0.5 active:translate-y-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="/Melwin_Santhosh_CV.pdf"
              download="Melwin_Santhosh_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border-4 border-black bg-white text-black font-black text-xs uppercase tracking-wider shadow-neo-sm hover:-translate-y-0.5 hover:shadow-neo transition-all neo-press focus:outline-none"
            >
              <span>CV [PDF]</span>
            </a>

            <a
              href="mailto:melwinsanthoah4096@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 border-4 border-black bg-neo-accent text-white font-black text-xs uppercase tracking-wider shadow-neo-sm hover:-translate-y-0.5 hover:shadow-neo transition-all neo-press focus:outline-none"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRightIcon className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-4 border-black bg-neo-secondary shadow-neo-sm focus:outline-none active:translate-x-0.5 active:translate-y-0.5"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-black bg-[#FFFDF5] p-6 space-y-3 shadow-neo-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-3 px-4 border-4 border-black bg-white font-black text-sm uppercase tracking-wider text-black shadow-neo-sm hover:bg-neo-secondary active:translate-x-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Melwin_Santhosh_CV.pdf"
            download="Melwin_Santhosh_CV.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 px-4 border-4 border-black bg-white text-black font-black text-sm uppercase tracking-wider shadow-neo-sm active:translate-x-1"
          >
            DOWNLOAD CV [PDF]
          </a>
          <a
            href="mailto:melwinsanthoah4096@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 px-4 border-4 border-black bg-neo-accent text-white font-black text-sm uppercase tracking-wider shadow-neo-sm active:translate-x-1"
          >
            GET IN TOUCH
          </a>
        </div>
      )}
    </header>
  );
};
