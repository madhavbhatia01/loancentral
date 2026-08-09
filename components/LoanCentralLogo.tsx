import React from "react";
import Image from "next/image";

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
    sm: "h-8 sm:h-9",
    md: "h-11 sm:h-12",
    lg: "h-14 sm:h-16",
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="LoanCentral - Loans For Bharat"
        className={`${heightMap[size]} w-auto object-contain ${
          lightMode ? "brightness-0 invert drop-shadow-sm" : ""
        }`}
      />
    </div>
  );
}
