import React from "react";

interface MarkProps {
  light?: boolean;
  size?: number;
  className?: string;
}

export const Mark: React.FC<MarkProps> = ({
  light = false,
  size = 22,
  className = ""
}) => {
  return (
    <span
      className={`relative inline-block shrink-0 transition-transform duration-300 hover:rotate-45 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <i
        className={`absolute top-1/2 left-0 w-full h-[2.2px] -translate-y-1/2 rounded-full ${
          light ? "bg-white" : "bg-[#0b0c10]"
        }`}
      />
      <i
        className={`absolute top-1/2 left-0 w-full h-[2.2px] -translate-y-1/2 rounded-full rotate-45 ${
          light ? "bg-white" : "bg-[#0b0c10]"
        }`}
      />
      <i
        className={`absolute top-1/2 left-0 w-full h-[2.2px] -translate-y-1/2 rounded-full rotate-90 ${
          light ? "bg-white" : "bg-[#0b0c10]"
        }`}
      />
      <i
        className={`absolute top-1/2 left-0 w-full h-[2.2px] -translate-y-1/2 rounded-full rotate-135 ${
          light ? "bg-white" : "bg-[#0b0c10]"
        }`}
      />
    </span>
  );
};
