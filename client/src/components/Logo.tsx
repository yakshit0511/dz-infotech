import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", iconOnly = false, light = false }) => {
  const viewBox = iconOnly ? "0 0 320 170" : "0 0 320 235";
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        className="h-full w-auto"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Original Orange Gradient for D loop and curve */}
          <linearGradient id="orangeGrad" x1="40" y1="30" x2="220" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F1912A" />
            <stop offset="50%" stopColor="#E8622A" />
            <stop offset="100%" stopColor="#C83B00" />
          </linearGradient>
          {/* Original Blue/Navy Gradient for D stem and Z */}
          <linearGradient id="blueGrad" x1="20" y1="20" x2="280" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0D1B2A" />
          </linearGradient>
        </defs>

        {/* Slanted Monogram group */}
        <g transform="skewX(-10) translate(20, 5)">
          {/* Letter D Left Stem */}
          <path
            d="M 40 30 L 85 30 L 85 150 L 40 150 Z"
            fill={light ? '#FFFFFF' : 'url(#blueGrad)'}
          />
          {/* Letter D Curved Right Part */}
          <path
            d="M 85 30 C 135 30 170 70 170 90 C 170 110 135 150 85 150 Z M 85 55 L 85 125 C 112 125 130 110 130 90 C 130 70 112 55 85 55 Z"
            fill="url(#orangeGrad)"
          />

          {/* Letter Z */}
          <path
            d="M 125 30 L 265 30 L 265 52 L 175 128 L 265 128 L 265 150 L 125 150 L 125 128 L 215 52 L 125 52 Z"
            fill={light ? '#FFFFFF' : 'url(#blueGrad)'}
          />

          {/* Swooping curved sheen */}
          <path
            d="M 130 130 C 190 95 235 68 275 55 C 265 65 230 90 190 118 C 155 136 140 136 130 130 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
        </g>

        {!iconOnly && (
          <>
            {/* Centered Brand Text "INFOTECH" below monogram */}
            <text
              x="160"
              y="195"
              textAnchor="middle"
              fontFamily="Poppins, Inter, sans-serif"
              fontWeight="900"
              fontSize="28"
              letterSpacing="0.2em"
              fill={light ? '#FFFFFF' : 'url(#blueGrad)'}
            >
              INFOTECH
            </text>
            
            {/* Underline curve under the text */}
            <path
              d="M 60 215 Q 160 225 260 215"
              stroke="url(#orangeGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}
      </svg>
    </div>
  );
};
