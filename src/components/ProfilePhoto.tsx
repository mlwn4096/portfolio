import React, { useState } from 'react';
import { MapPinIcon } from './Icons';

export const ProfilePhoto: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [sourceIdx, setSourceIdx] = useState(0);

  const imageSources = [
    '/mlwn.jpg',
    '/profile.jpg',
    '/melwin.jpg',
    '/avatar.png'
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto group">
      {/* Overlapping sticker badge */}
      <div className="absolute -top-3 -right-3 z-20 border-4 border-black bg-neo-accent text-white px-3.5 py-1 text-xs font-black uppercase tracking-widest rotate-6 shadow-neo-sm group-hover:rotate-12 transition-transform">
        BUILDER ID
      </div>

      {/* Main card with hard shadow and mechanical hover lift */}
      <div className="relative border-4 border-black bg-white p-4 shadow-neo-xl transition-all duration-200 group-hover:-translate-y-2 group-hover:shadow-neo-massive">
        {/* Photo viewport */}
        <div className="relative border-4 border-black bg-[#FFFDF5] overflow-hidden aspect-[4/5] flex items-center justify-center">
          {!imageError ? (
            <img
              src={imageSources[sourceIdx]}
              alt="Melwin Santhosh"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              onError={() => {
                if (sourceIdx < imageSources.length - 1) {
                  setSourceIdx(sourceIdx + 1);
                } else {
                  setImageError(true);
                }
              }}
            />
          ) : (
            /* Fallback avatar card */
            <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-[#FFFDF5] bg-grid-pattern text-center">
              <div className="w-full flex justify-end">
                <span className="border-3 border-black bg-neo-secondary px-2 py-0.5 text-[11px] font-black uppercase text-black shadow-neo-sm">
                  MCA 2025-2030
                </span>
              </div>
              
              <div className="my-auto">
                <div className="w-20 h-20 mx-auto border-4 border-black bg-neo-secondary flex items-center justify-center shadow-neo">
                  <span className="font-black text-3xl text-black">
                    MS
                  </span>
                </div>
                <h3 className="mt-4 font-black text-xl uppercase tracking-tight text-black">
                  Melwin Santhosh
                </h3>
                <p className="text-xs font-black text-black/80 uppercase tracking-wider mt-1">
                  Integrated MCA • SJCET
                </p>
              </div>

              <div className="w-full border-3 border-black bg-white py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-neo-sm">
                AI × MULTIMEDIA
              </div>
            </div>
          )}
        </div>

        {/* Card info footer */}
        <div className="mt-3 pt-3 border-t-3 border-black flex items-center justify-between text-xs font-black">
          <div className="flex items-center gap-1.5 text-black">
            <MapPinIcon className="w-4 h-4 text-neo-accent" />
            <span>SJCET, Palai</span>
          </div>
          <span className="border-2 border-black bg-neo-secondary px-2 py-0.5 uppercase text-[11px] font-black text-black shadow-neo-sm">
            2nd Year • Sem 3
          </span>
        </div>
      </div>
    </div>
  );
};
