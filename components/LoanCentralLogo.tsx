import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  lightMode?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function LoanCentralLogo({
  className = "",
  showTagline = true,
  lightMode = false,
  size = "md",
}: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const taglineSizes = {
    sm: "text-[9px] tracking-[0.2em]",
    md: "text-[11px] tracking-[0.25em]",
    lg: "text-[13px] tracking-[0.3em]",
  };

  const textColor = lightMode ? "text-white" : "text-[#0B192C]";
  const taglineTextColor = lightMode ? "text-gray-300" : "text-[#0B192C]";

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* 4-Pointed Sparkle Star Icon matching attached logo */}
        <div className={`relative ${iconSizes[size]} flex-shrink-0`}>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-sm"
          >
            {/* Top quadrant petal */}
            <path
              d="M50 5 C50 30, 25 50, 5 50 C25 50, 50 70, 50 95 C50 70, 75 50, 95 50 C75 50, 50 30, 50 5 Z"
              fill="none"
            />
            {/* Top-Left Curve */}
            <path
              d="M50 8 C48 30, 30 48, 8 50 C28 44, 44 28, 50 8 Z"
              fill="#0B192C"
            />
            {/* Top-Right Curve */}
            <path
              d="M50 8 C52 30, 70 48, 92 50 C72 44, 56 28, 50 8 Z"
              fill="#00B4D8"
            />
            {/* Bottom-Left Curve */}
            <path
              d="M8 50 C30 52, 48 70, 50 92 C44 72, 28 56, 8 50 Z"
              fill="#475569"
            />
            {/* Bottom-Right Curve */}
            <path
              d="M92 50 C70 52, 52 70, 50 92 C56 72, 72 56, 92 50 Z"
              fill="#00C9A7"
            />
            {/* Center Core Sparkle Accent */}
            <circle cx="50" cy="50" r="4" fill="#00B4D8" />
          </svg>
        </div>

        {/* Brand Text */}
        <div className="flex items-baseline font-bold tracking-tight">
          <span className={`${textSizes[size]} font-extrabold ${textColor}`}>
            Loan
          </span>
          <span className={`${textSizes[size]} font-semibold text-[#00C9A7]`}>
            Central
          </span>
        </div>
      </div>

      {/* Slogan / Subtitle matching exact logo design */}
      {showTagline && (
        <div className="w-full flex flex-col items-center mt-1">
          <div className={`font-semibold uppercase flex items-center gap-1.5 ${taglineTextColor} ${taglineSizes[size]}`}>
            <span>LOANS FOR</span>
            <span className="text-[#00C9A7] font-bold">भारत</span>
          </div>
          <div className="w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[#00C9A7]/40 to-transparent mt-0.5" />
        </div>
      )}
    </div>
  );
}
