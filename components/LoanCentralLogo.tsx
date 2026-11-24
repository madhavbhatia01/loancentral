"use client";

import React from "react";

interface LogoProps {
  className?: string;
  lightMode?: boolean;
  size?: "sm" | "md" | "lg" | "header";
}

export default function LoanCentralLogo({
  className = "",
  lightMode = false,
  size = "header",
}: LogoProps) {
  // Tightly cropped 3.2:1 aspect ratio: zero empty margins, big and bold
  const heightClasses = {
    sm: "h-10 sm:h-11",
    md: "h-12 sm:h-14",
    header: "h-14 sm:h-16 md:h-[68px] max-h-[68px]",
    lg: "h-16 sm:h-18 md:h-20",
  };

  const logoSrc = lightMode ? "/logo-white.png" : "/logo.png";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="LoanCentral - Loans For Bharat"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 active:scale-95 drop-shadow-xs`}
        loading="eager"
      />
    </div>
  );
}
