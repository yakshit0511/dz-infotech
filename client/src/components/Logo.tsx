import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", iconOnly = false, light = false }) => {
  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none ${className}`}>
      {/* SVG Icon */}
      <svg
        className="h-full w-auto"
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Orange Gradient for D and curve */}
          <linearGradient id="orangeGrad" x1="40" y1="40" x2="220" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF8C00" />
            <stop offset="50%" stopColor="#E8622A" />
            <stop offset="100%" stopColor="#C83B00" />
          </linearGradient>
          {/* Blue Gradient for D and Z */}
          <linearGradient id="blueGrad" x1="20" y1="20" x2="280" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#0D1B2A" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
        </defs>

        {/* Dynamic DZ Monogram Shape */}
        {/* Letter D Left Stem - Navy Blue */}
        <path
          d="M 40 40 L 90 40 L 90 160 L 40 160 Z"
          fill="url(#blueGrad)"
        />
        {/* Letter D Curved Right Part - Orange Gradient */}
        <path
          d="M 90 40 C 145 40 180 80 180 100 C 180 120 145 160 90 160 Z M 90 65 L 90 135 C 120 135 140 115 140 100 C 140 85 120 65 90 65 Z"
          fill="url(#orangeGrad)"
        />

        {/* Letter Z Intersecting - Dark Navy */}
        <path
          d="M 120 40 L 280 40 L 280 65 L 175 135 L 280 135 L 280 160 L 120 160 L 120 135 L 225 65 L 120 65 Z"
          fill="url(#blueGrad)"
        />

        {/* Swooping curved cutting line on Z, simulating the reflection/sheen */}
        <path
          d="M 115 140 C 190 100 240 70 290 55 C 280 65 240 95 190 125 C 150 145 130 145 115 140 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />
        
        {/* Subtle orange accent underline curve */}
        <path
          d="M 50 185 Q 160 170 270 185"
          stroke="url(#orangeGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Brand Text */}
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`font-poppins font-extrabold text-2xl tracking-wide uppercase ${light ? 'text-white' : 'text-primary'}`}>
            DZ <span className="text-accent font-black">INFOTECH</span>
          </span>
          <span className={`text-[9px] font-sans font-bold tracking-[0.25em] uppercase mt-0.5 ${light ? 'text-gray-400' : 'text-muted-gray'}`}>
            Digital Solutions
          </span>
        </div>
      )}
    </div>
  );
};
