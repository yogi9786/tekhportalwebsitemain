import React from "react";

interface ServiceTechStackProps {
  techStack: {
    name: string;
    category: string;
  }[];
  serviceTitle: string;
}

export const ServiceTechStack: React.FC<ServiceTechStackProps> = ({ techStack }) => {
  return (
    <section className="w-full bg-[#edf5ef] py-10 sm:py-14 border-b border-[#07382c]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#07382c] block mb-3">
          Industry-Standard Tooling &amp; Infrastructure
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto">
          {techStack.map((tool, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#07382c]/10 text-xs text-[#07382c] font-semibold shadow-2xs hover:border-[#10b981] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span className="font-bold">{tool.name}</span>
              <span className="text-[10px] text-[#526f64] font-normal">({tool.category})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTechStack;
