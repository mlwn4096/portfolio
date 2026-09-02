import React from 'react';

interface MarqueeProps {
  items: string[];
  bg?: string;
  textColor?: string;
  borderB?: boolean;
}

export const MarqueeBanner: React.FC<MarqueeProps> = ({
  items,
  bg = "bg-neo-secondary",
  textColor = "text-black",
  borderB = true
}) => {
  // Duplicate array so marquee seamlessly scrolls infinitely
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap border-y-4 border-black py-2.5 ${bg} ${textColor} select-none ${borderB ? 'border-b-4' : ''}`}>
      <div className="inline-flex animate-marquee gap-8 items-center">
        {repeated.map((text, idx) => (
          <div key={idx} className="inline-flex items-center gap-6 font-display font-extrabold text-sm uppercase tracking-wider">
            <span>{text}</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};
