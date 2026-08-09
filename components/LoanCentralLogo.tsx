import React from "react";

interface LogoProps {
  className?: string;
  lightMode?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function LoanCentralLogo({
  className = "",
  lightMode = false,
  size = "md",
}: LogoProps) {
  const heightMap = {
    sm: "h-9 sm:h-10",
    md: "h-12 sm:h-14",
    lg: "h-16 sm:h-20",
  };

  const logoSrc = lightMode ? "/logo-white.png" : "/logo.png";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="LoanCentral - Loans For Bharat"
        className={`${heightMap[size]} w-auto object-contain transition-all`}
      />
    </div>
  );
}
