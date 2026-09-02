import React, { useState } from 'react';
import { StarGeometricIcon, MapPinIcon } from './Icons';

export const ProfilePhoto: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  // Checks for locally available image in public directory
  const imageSources = [
    '/mlwn.jpg',
    '/profile.jpg',
    '/melwin.jpg',
    '/avatar.png'
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto group">
      {/* Outer black shadow offset layer */}
      <div className="absolute inset-0 bg-black translate-x-3 translate-y-3" />

      {/* Main card container */}
      <div className="relative border-4 border-black bg-white p-4 neo-press">
        {/* Top badge bar */}
        <div className="flex items-center justify-between border-b-4 border-black pb-2 mb-3 bg-neo-secondary -mx-4 -mt-4 p-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-neo-accent border-2 border-black inline-block" />
            <span className="w-3 h-3 bg-black inline-block" />
            <span className="font-display font-extrabold text-xs uppercase tracking-widest">
              IDENTITY CARD
            </span>
          </div>
          <span className="bg-black text-white text-[10px] font-extrabold px-1.5 py-0.5 tracking-wider">
            MCA-2530
          </span>
        </div>

        {/* Picture Frame */}
        <div className="relative border-4 border-black bg-[#FFFDF5] overflow-hidden aspect-[4/5] flex items-center justify-center">
          {!imageError ? (
            <img
              src={imageSources[0]}
              alt="Melwin Santhosh"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Neo-brutalist graphic fallback avatar */
            <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-graph-grid bg-neo-bg text-center">
              <div className="w-full flex justify-end">
                <span className="border-2 border-black bg-neo-accent px-2 py-0.5 text-xs font-black uppercase text-white shadow-neo-sm">
                  VERIFIED
                </span>
              </div>
              <div className="my-auto">
                <div className="w-24 h-24 mx-auto border-4 border-black bg-neo-secondary flex items-center justify-center shadow-neo-sm rotate-2 hover:rotate-0 transition-transform">
                  <span className="font-display font-extrabold text-4xl text-black">
                    MS
                  </span>
                </div>
                <h3 className="mt-4 font-display font-extrabold text-xl uppercase tracking-tight">
                  Melwin Santhosh
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-black/70 mt-1">
                  Integrated MCA • SJCET Palai
                </p>
              </div>
              <div className="w-full border-2 border-black bg-white py-1.5 px-2 text-[11px] font-bold uppercase tracking-wide">
                AI × MULTIMEDIA
              </div>
            </div>
          )}

          {/* Floating Sticker inside photo frame */}
          <div className="absolute bottom-3 left-3 bg-neo-secondary border-2 border-black px-2 py-1 shadow-neo-sm -rotate-2">
            <p className="font-display font-black text-xs uppercase text-black">
              2nd Year / Sem 3
            </p>
          </div>
        </div>

        {/* Card info footer */}
        <div className="mt-3 pt-2 border-t-2 border-black/20 flex items-center justify-between text-xs font-bold">
          <div className="flex items-center gap-1.5">
            <MapPinIcon className="w-4 h-4 text-neo-accent" />
            <span className="uppercase">SJCET, Palai</span>
          </div>
          <span className="bg-neo-muted border-2 border-black px-2 py-0.5 uppercase text-[10px] font-black">
            PRAX HEAD
          </span>
        </div>
      </div>

      {/* Decorative corner stickers */}
      <div className="absolute -top-4 -right-4 bg-neo-accent text-white border-2 border-black font-display font-black text-xs uppercase px-2.5 py-1 rotate-6 shadow-neo-sm pointer-events-none">
        <div className="flex items-center gap-1">
          <StarGeometricIcon className="w-3.5 h-3.5 fill-white" />
          <span>BUILDER</span>
        </div>
      </div>
    </div>
  );
};
