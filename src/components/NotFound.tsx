import React from 'react';
import { ArrowUpRightIcon, ArrowRightIcon } from './Icons';

export const NotFound: React.FC = () => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/404';

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black font-body flex flex-col selection:bg-neo-secondary selection:text-black">
      {/* Top Banner Ticker */}
      <div className="h-10 border-b-4 border-black bg-neo-accent text-white font-black text-xs uppercase tracking-widest flex items-center justify-between px-4 overflow-hidden">
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
          <span>⚠️ 404 ERROR DETECTED</span>
          <span>•</span>
          <span>SIGNAL LOST IN THE VOID</span>
          <span>•</span>
          <span>MAINFRAME EXCEPTION</span>
          <span>•</span>
          <span>ROUTE OUT OF BOUNDS</span>
          <span>•</span>
          <span>SJCET PALAI MAINFRAME</span>
        </div>
      </div>

      {/* Mini Nav Header */}
      <header className="border-b-4 border-black bg-[#FFFDF5] px-4 sm:px-8 py-4 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 border-4 border-black bg-neo-secondary flex items-center justify-center font-black text-base shadow-neo-sm group-hover:bg-black group-hover:text-white transition-all neo-press">
            MS
          </div>
          <div>
            <span className="font-black text-sm uppercase tracking-tight block">Melwin Santhosh</span>
            <span className="text-[10px] font-bold text-black/60 uppercase tracking-widest block">404 Navigation Gate</span>
          </div>
        </a>

        <button
          onClick={handleGoHome}
          className="border-3 border-black bg-white px-3 py-1.5 font-black text-xs uppercase tracking-wider shadow-neo-sm hover:bg-black hover:text-white transition-all neo-press flex items-center gap-1.5"
        >
          <span>Return Home</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </button>
      </header>

      {/* Main 404 Container */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col justify-center items-center text-center">
        {/* Overlapping Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <span className="border-4 border-black bg-neo-accent text-white px-3.5 py-1 text-xs sm:text-sm font-black uppercase tracking-widest shadow-neo-sm -rotate-2">
            TERMINAL ERROR 404
          </span>
          <span className="border-4 border-black bg-neo-secondary text-black px-3.5 py-1 text-xs sm:text-sm font-black uppercase tracking-widest shadow-neo-sm rotate-2">
            TRANSMISSION DROPPED
          </span>
        </div>

        {/* Massive 404 Headline */}
        <h1 className="font-black text-8xl sm:text-9xl md:text-[12rem] uppercase tracking-tighter text-black leading-none select-none relative">
          <span className="text-stroke-black-4 text-neo-secondary drop-shadow-[8px_8px_0px_#000]">
            404
          </span>
        </h1>

        <h2 className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-black max-w-2xl">
          THE SPECIFIED COORDINATE DOES NOT EXIST.
        </h2>

        <p className="mt-3 text-base sm:text-lg font-bold text-black/80 max-w-xl leading-relaxed">
          You navigated past the frontier of Melwin Santhosh's developer mainframe. The resource requested at this path has either moved, vanished, or never existed in this timeline.
        </p>

        {/* Telemetry Box */}
        <div className="mt-8 border-4 border-black bg-black text-white p-5 sm:p-6 shadow-neo-lg text-left w-full max-w-lg font-mono text-xs sm:text-sm space-y-2">
          <div className="flex items-center justify-between border-b-2 border-white/30 pb-2 mb-3">
            <span className="text-neo-secondary font-black tracking-widest uppercase text-[11px]">
              DIAGNOSTIC TELEMETRY
            </span>
            <span className="w-2.5 h-2.5 bg-neo-accent inline-block border border-white" />
          </div>
          <div><span className="text-white/60">TARGET_PATH:</span> <span className="text-neo-secondary font-bold break-all">{currentPath}</span></div>
          <div><span className="text-white/60">STATUS:</span> <span className="text-neo-accent font-bold">404 NOT FOUND</span></div>
          <div><span className="text-white/60">HOST:</span> <span className="text-white">Melwin Santhosh Portfolio Mainframe</span></div>
          <div><span className="text-white/60">RESOLVED:</span> <span className="text-white/80">False (Zero matches found)</span></div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={handleGoHome}
            className="flex-1 py-4 px-6 border-4 border-black bg-neo-secondary font-black text-sm uppercase tracking-wider text-black shadow-neo hover:bg-black hover:text-white transition-all neo-press flex items-center justify-center gap-2"
          >
            <span>← RETURN HOME</span>
          </button>
          
          <a
            href="/#contact"
            className="py-4 px-6 border-4 border-black bg-white font-black text-sm uppercase tracking-wider text-black shadow-neo hover:bg-neo-accent hover:text-white transition-all neo-press flex items-center justify-center gap-1.5"
          >
            <span>DISPATCH CONTACT</span>
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>
      </main>

      {/* Simple Neo Footer */}
      <footer className="border-t-4 border-black bg-black text-white py-6 px-4 sm:px-8 text-center text-xs font-black uppercase tracking-wider">
        <p>© 2026 Melwin Santhosh • St. Joseph’s College of Engineering and Technology (SJCET), Palai</p>
      </footer>
    </div>
  );
};

export default NotFound;
