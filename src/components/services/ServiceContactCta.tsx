import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface ServiceContactCtaProps {
  serviceTitle: string;
  onOpenRegister: () => void;
}

export const ServiceContactCta: React.FC<ServiceContactCtaProps> = ({
  serviceTitle,
  onOpenRegister
}) => {
  return (
    <section className="w-full bg-linear-to-b from-[#edf5ef] via-white to-[#edf5ef] text-[#07382c] py-14 sm:py-20 border-t border-[#07382c]/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        
        {/* Luxury Conversion Container Box (Clean White / Slate card, not green) */}
        <div className="bg-white rounded-3xl p-7 sm:p-12 md:p-14 border border-[#07382c]/12 shadow-xl relative overflow-hidden text-center">
          
          {/* Subtle Accent Glow */}
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none"
          />

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#dbeee1] text-[#07382c] border border-[#10b981]/35 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs relative z-10">
            <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Ready for Measurable Growth?</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black text-[#07382c] uppercase tracking-tight relative z-10">
            GET STARTED WITH <span className="text-[#10b981]">{serviceTitle}</span> TODAY<span className="text-[#10b981]">.</span>
          </h2>

          {/* Description */}
          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-sm md:text-base text-[#465f56] max-w-xl mx-auto font-normal leading-relaxed relative z-10">
            Complete the quick brand registration form to schedule your strategic onboarding session and get a customized growth plan.
          </p>

          {/* CTA Action Button */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center max-w-sm sm:max-w-none mx-auto relative z-10">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-[#07382c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Register for {serviceTitle}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceContactCta;
