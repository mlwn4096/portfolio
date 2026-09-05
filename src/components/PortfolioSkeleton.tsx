import React from 'react';

export const PortfolioSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black font-body flex flex-col animate-pulse select-none">
      {/* 1. Top Ticker Skeleton */}
      <div className="h-10 border-b-4 border-black bg-neo-secondary/70 flex items-center px-4 overflow-hidden">
        <div className="flex gap-8 w-full">
          <div className="h-4 w-32 bg-black/30 border-2 border-black" />
          <div className="h-4 w-28 bg-black/30 border-2 border-black" />
          <div className="h-4 w-44 bg-black/30 border-2 border-black" />
          <div className="h-4 w-36 bg-black/30 border-2 border-black" />
          <div className="h-4 w-40 bg-black/30 border-2 border-black hidden sm:block" />
        </div>
      </div>

      {/* 2. Navbar Skeleton */}
      <nav className="h-20 border-b-4 border-black bg-[#FFFDF5] px-4 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 border-4 border-black bg-neo-secondary shadow-neo-sm" />
          <div className="space-y-1.5 hidden sm:block">
            <div className="h-4 w-28 bg-black/30 border-2 border-black" />
            <div className="h-2.5 w-36 bg-black/20" />
          </div>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="h-4 w-16 bg-black/25" />
          <div className="h-4 w-16 bg-black/25" />
          <div className="h-4 w-16 bg-black/25" />
          <div className="h-4 w-16 bg-black/25" />
          <div className="h-4 w-16 bg-black/25" />
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <div className="w-32 h-11 border-4 border-black bg-neo-accent/60 shadow-neo-sm" />
        </div>
      </nav>

      {/* 3. Hero Section Skeleton */}
      <section className="py-14 sm:py-20 border-b-4 border-black px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="w-48 h-8 border-4 border-black bg-neo-muted/80 shadow-neo-sm -rotate-1" />

            {/* Huge Headline Blocks */}
            <div className="space-y-3">
              <div className="w-4/5 h-16 sm:h-20 border-4 border-black bg-black/25 shadow-neo" />
              <div className="w-full h-16 sm:h-20 border-4 border-black bg-neo-secondary/60 shadow-neo" />
            </div>

            {/* Pitch / Summary Card */}
            <div className="border-4 border-black bg-white p-6 shadow-neo-lg space-y-3">
              <div className="h-4 w-full bg-black/25" />
              <div className="h-4 w-11/12 bg-black/20" />
              <div className="h-4 w-4/5 bg-black/20" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="w-40 h-13 border-4 border-black bg-black/35 shadow-neo-sm" />
              <div className="w-44 h-13 border-4 border-black bg-white shadow-neo-sm" />
            </div>
          </div>

          {/* Right Column: Profile Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm border-4 border-black bg-white p-4 shadow-neo-xl space-y-4">
              <div className="w-full aspect-[4/5] border-4 border-black bg-neo-secondary/30 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-black bg-neo-secondary shadow-neo flex items-center justify-center">
                  <div className="w-8 h-8 bg-black/40" />
                </div>
              </div>
              <div className="h-6 w-3/4 border-2 border-black bg-black/20 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Content Cards Grid Skeleton */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="flex items-center justify-between border-b-4 border-black pb-4">
          <div className="h-8 w-48 border-4 border-black bg-black/20" />
          <div className="h-6 w-24 border-2 border-black bg-neo-accent/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-4 border-black bg-white p-6 shadow-neo space-y-4">
            <div className="h-5 w-2/3 border-2 border-black bg-neo-secondary/70" />
            <div className="h-4 w-full bg-black/15" />
            <div className="h-4 w-5/6 bg-black/15" />
            <div className="h-16 w-full border-2 border-black bg-[#FFFDF5]" />
          </div>

          <div className="border-4 border-black bg-white p-6 shadow-neo space-y-4">
            <div className="h-5 w-2/3 border-2 border-black bg-neo-accent/50" />
            <div className="h-4 w-full bg-black/15" />
            <div className="h-4 w-5/6 bg-black/15" />
            <div className="h-16 w-full border-2 border-black bg-[#FFFDF5]" />
          </div>

          <div className="border-4 border-black bg-white p-6 shadow-neo space-y-4">
            <div className="h-5 w-2/3 border-2 border-black bg-neo-muted/70" />
            <div className="h-4 w-full bg-black/15" />
            <div className="h-4 w-5/6 bg-black/15" />
            <div className="h-16 w-full border-2 border-black bg-[#FFFDF5]" />
          </div>
        </div>
      </section>

      {/* 5. Footer Strip Skeleton */}
      <footer className="mt-auto h-20 border-t-4 border-black bg-black/90 px-4 sm:px-8 flex items-center justify-between">
        <div className="h-4 w-44 bg-white/30 border border-white" />
        <div className="h-4 w-32 bg-white/20" />
      </footer>
    </div>
  );
};

export default PortfolioSkeleton;
