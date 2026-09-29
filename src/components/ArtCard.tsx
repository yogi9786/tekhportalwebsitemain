import React from "react";
import { Mark } from "./Mark";

interface ArtCardProps {
  className?: string;
  src: string;
  category?: string;
  metric?: string;
  title?: string;
  lightLogo?: boolean;
}

export const ArtCard: React.FC<ArtCardProps> = ({
  className = "",
  src,
  category = "Performance",
  metric,
  title,
  lightLogo = false
}) => {
  return (
    <div
      className={`art-card absolute overflow-hidden rounded-[clamp(8px,0.8vw,14px)] shadow-[0_20px_50px_rgba(0,0,0,0.18)] will-change-transform ${className}`}
    >
      <img
        src={src}
        alt={title || "Tekhportal Marketing Case"}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        loading="lazy"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Top Tag */}
      {category && (
        <div className="absolute top-[8%] left-[7%] px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider uppercase text-white/90">
          {category}
        </div>
      )}

      {/* Bottom info & Signature */}
      <div className="absolute inset-x-0 bottom-0 p-[6%] flex items-end justify-between pointer-events-none">
        {metric ? (
          <div>
            <span className="text-[10px] font-medium text-zinc-300 block uppercase tracking-wider">
              Growth Milestone
            </span>
            <strong className="text-white text-[clamp(12px,0.9vw,15px)] font-bold tracking-tight">
              {metric}
            </strong>
          </div>
        ) : <div />}

        <div
          className={`flex items-center gap-1.5 text-[clamp(9px,0.6vw,12px)] font-bold backdrop-blur-sm px-2 py-0.5 rounded-full ${
            lightLogo ? "text-white bg-black/30" : "text-black bg-white/80"
          }`}
        >
          <Mark light={lightLogo} size={13} />
          <span>tekhportal.com</span>
        </div>
      </div>
    </div>
  );
};
