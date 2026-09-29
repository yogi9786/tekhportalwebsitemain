import React from "react";
import tpLogo from "../assets/tplogo.webp";

export interface DigitalDartsLogoProps {
  light?: boolean;
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export const DigitalDartsLogo: React.FC<DigitalDartsLogoProps> = ({
  light = false,
  className = "",
  showTagline = true,
  size = "md"
}) => {
  const sizeClasses = {
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-lg md:text-[19px]",
    lg: "text-xl sm:text-2xl"
  };

  const containerSizes = {
    sm: "w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg",
    md: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl",
    lg: "w-11 h-11 sm:w-12 sm:h-12 rounded-xl"
  };

  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:opacity-95 select-none ${className}`}
      aria-label="Tekhportal Digital Marketing Agency Home"
    >
      {/* Official Tekhportal Brand Logo - Compact Rounded White Badge */}
      <div
        className={`relative flex items-center justify-center shrink-0 bg-white p-1 shadow-sm overflow-hidden border border-white/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ${containerSizes[size]}`}
      >
        <img
          src={tpLogo}
          alt="Tekhportal Logo"
          className="w-full h-full object-contain scale-[1.18] transition-transform duration-300 group-hover:scale-[1.24]"
        />
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center">
          <span
            className={`font-bold tracking-tight font-sans ${sizeClasses[size]} ${
              light ? "text-white" : "text-[#07382c]"
            }`}
          >
            Tekhportal
          </span>
          <span className="text-[#10b981] font-black text-lg sm:text-xl leading-none ml-0.5 animate-pulse">
            .
          </span>
        </div>

        {showTagline && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] font-semibold tracking-wider uppercase -mt-0.5 transition-colors ${
              light ? "text-[#a7f3d0] group-hover:text-white" : "text-[#0f5443] group-hover:text-[#07382c]"
            }`}
          >
            Bengaluru · Digital Marketing Agency
          </span>
        )}
      </div>
    </a>
  );
};

export default DigitalDartsLogo;
