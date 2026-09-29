import React from "react";
import tpLogo from "../assets/tplogo.webp";

interface BrandProps {
  light?: boolean;
  className?: string;
  locationTag?: boolean;
}

export const Brand: React.FC<BrandProps> = ({
  light = false,
  className = "",
  locationTag = true
}) => {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="Tekhportal Digital Marketing Agency Home"
    >
      <div className="w-9 h-9 sm:w-10 sm:h-10 p-1 bg-white rounded-xl shadow-sm overflow-hidden flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src={tpLogo}
          alt="Tekhportal Logo"
          className="w-full h-full object-contain scale-[1.18]"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`text-base sm:text-lg md:text-[19px] font-bold tracking-tight ${
            light ? "text-white" : "text-[#0b0c10]"
          }`}
        >
          Tekhportal<span className="text-[#10b981]">.</span>
        </span>
        {locationTag && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] font-semibold tracking-wider uppercase -mt-0.5 ${
              light ? "text-[#a7f3d0]" : "text-[#0f5443]"
            }`}
          >
            Bengaluru · Digital Marketing Agency
          </span>
        )}
      </div>
    </a>
  );
};

export default Brand;
