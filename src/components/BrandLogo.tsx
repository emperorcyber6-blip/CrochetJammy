import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const dimensions = {
    sm: { box: 'w-10 h-10', text: 'text-sm' },
    md: { box: 'w-13 h-13', text: 'text-base' },
    lg: { box: 'w-18 h-18', text: 'text-xl' },
    xl: { box: 'w-24 h-24', text: 'text-2xl' }
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Circular Gold Foil Emblem */}
      <div className={`relative ${dimensions.box} shrink-0 rounded-full bg-[#0D0D0D] p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.25)] border border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-all`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer dotted gold track */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            strokeDasharray="2 3"
          />
          {/* Inner solid gold ring */}
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
          />
          {/* Delicate inner accent ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#D4AF37"
            strokeOpacity="0.4"
            strokeWidth="0.75"
          />

          {/* Central crochet motif: Stylized Crochet Hook intertwining through heart yarn loops */}
          <path
            d="M50 25 C42 20 33 28 35 37 C36 44 48 56 50 58 C52 56 64 44 65 37 C67 28 58 20 50 25 Z"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Elegant Crochet Hook diagonally through the heart */}
          <path
            d="M32 68 L64 30"
            stroke="url(#goldLight)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Hook tip */}
          <path
            d="M64 30 C66 27 69 28 67 31 C65 34 62 33 63 31"
            fill="none"
            stroke="url(#goldLight)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Hook handle base bulb */}
          <circle cx="32" cy="68" r="2.2" fill="url(#goldLight)" />

          {/* Tiny gold stitch sparkles */}
          <circle cx="37" cy="40" r="1" fill="#F3E5AB" />
          <circle cx="63" cy="40" r="1" fill="#F3E5AB" />
          <circle cx="50" cy="48" r="1.2" fill="#F3E5AB" />

          {/* Curved text arc path at top and bottom */}
          <path id="topCurve" d="M22,50 A28,28 0 0,1 78,50" fill="none" />
          <path id="bottomCurve" d="M78,50 A28,28 0 0,1 22,50" fill="none" />

          {/* Script Word "Jammy" inside */}
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fill="url(#goldGradient)"
            fontFamily="'Playfair Display', serif"
            fontSize="10"
            fontWeight="bold"
            fontStyle="italic"
            letterSpacing="0.05em"
          >
            Jammy
          </text>

          <text
            x="50"
            y="74"
            textAnchor="middle"
            fill="#D4AF37"
            fontFamily="'Cinzel', serif"
            fontSize="4"
            letterSpacing="0.25em"
          >
            HANDMADE
          </text>

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9F1D8" />
              <stop offset="40%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8E7015" />
            </linearGradient>
            <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9E6" />
              <stop offset="50%" stopColor="#F3E5AB" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-lg tracking-wider text-neutral-100 font-semibold group-hover:text-[#F3E5AB] transition-colors">
            JAMMY
          </span>
          <span className="font-serif italic text-base text-[#D4AF37] font-normal">
            Handmade
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.28em] text-[#C5A059] font-medium font-sans">
            Bespoke Crochet Couture · Kampala
          </span>
        )}
      </div>
    </div>
  );
};
