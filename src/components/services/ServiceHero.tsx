import React from "react";
import type { DetailedServiceData } from "../../types/serviceDetail";
import { Sparkles, ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  service: DetailedServiceData;
  onOpenRegister: () => void;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ service, onOpenRegister }) => {
  return (
    <section className="relative w-full bg-linear-to-b from-[#edf6f0] via-[#f0f8f3] to-[#edf5ef] pt-20 sm:pt-26 md:pt-30 pb-10 sm:pb-14 md:pb-16 border-b border-[#07382c]/10 overflow-hidden">
      {/* Background Static Grid Lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(7,56,44,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(7,56,44,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-3.5 sm:px-6 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-[#dbeee1] border border-[#10b981]/40 text-[#07382c] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-3 shadow-xs">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10b981]" />
          <span>{service.kicker}</span>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="text-[clamp(24px,5.2vw,48px)] font-sans font-black text-[#07382c] leading-[1.1] tracking-tight max-w-4xl mx-auto uppercase">
          <span className="block">{service.heroHeadline}</span>
          <span className="text-[#10b981] block mt-0.5 sm:mt-1">{service.heroHighlightWord}</span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="mt-2.5 sm:mt-4 text-[#2f4a40] text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          {service.tagline}
        </p>

        {/* Primary Action Button (Direct to Register Form) */}
        <div className="mt-5 sm:mt-8 flex items-center justify-center max-w-sm sm:max-w-none mx-auto">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-[#07382c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Register for {service.shortTitle || service.title}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

        {/* 4 Metric Stats Bar */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto">
          {service.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-[#07382c]/12 shadow-xs hover:border-[#10b981] transition-all text-center flex flex-col justify-center"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#07382c] tracking-tight font-sans">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-[#465f56] mt-0.5 sm:mt-1 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
