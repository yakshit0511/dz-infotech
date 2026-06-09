import React from 'react';
import dzLogo from '../assets/dz_logo.png';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-12', iconOnly = false, light = false }) => {
  // For simplicity, we render the same PNG regardless of props.
  return (
    <div className={`flex items-center ${className}`}>
      <img src={dzLogo} alt="DZ Infotech" className="h-full w-auto" />
    </div>
  );
};
