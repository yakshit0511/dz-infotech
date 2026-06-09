import React from "react";
import dzLogo from "../assets/dz_logo.png";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  // light prop kept for compatibility but not used to alter color
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-12",
  iconOnly = false,
  light = false,
}) => {
  // Ensure light is referenced to avoid TS unused warnings
  void light;

  // No color alteration based on light prop; color stays as defined in the image.
  if (iconOnly) {
    return (
      <div className={`flex items-center ${className}`}>
        <img src={dzLogo} alt="DZ Infotech" className="h-full w-auto" style={{ width: "40px" }} />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img src={dzLogo} alt="DZ Infotech" className="h-full w-auto" />
    </div>
  );
};
