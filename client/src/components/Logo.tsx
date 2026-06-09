import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-12",
  iconOnly = false,
  light = false,
}) => {
  const textColor = light ? "#fff" : "#0d6efd"; // adjust as needed
  if (iconOnly) {
    // Simple square icon as placeholder
    return (
      <div className={`flex items-center ${className}`}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(45deg, #0d6efd, #3ab0ff)",
            borderRadius: "4px",
          }}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          background: "linear-gradient(45deg, #0d6efd, #3ab0ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        DZ Infotech
      </span>
    </div>
  );
};
