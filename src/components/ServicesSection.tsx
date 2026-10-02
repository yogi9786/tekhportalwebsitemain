import React from "react";
import { TEKHPORTAL_SERVICES } from "../data/tekhportalData";

interface ServicesSectionProps {
  onSelectServiceForAudit?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section id="services" className="w-full bg-[#f4f9f5] py-8 sm:py-10 md:py-12 border-b border-[#07382c]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Simple Clean Section Header in Green */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-[#07382c] tracking-tight uppercase">
            OUR SERVICES<span className="text-[#10b981]">.</span>
          </h2>
          <div className="w-12 h-1 bg-[#10b981] mx-auto mt-2 rounded-full" />
        </div>

        {/* 2-Column Grid on Mobile, 3-Col on Tablet, 4-Col on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3.5">
          {TEKHPORTAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl p-3.5 sm:p-4 border border-[#07382c]/10 shadow-xs hover:shadow-md hover:border-[#10b981] transition-all duration-200 flex flex-col justify-start"
            >
              <h3 className="text-xs sm:text-[15px] font-bold text-[#07382c] group-hover:text-[#10b981] transition-colors leading-snug mb-1.5">
                {service.shortTitle || service.title}
              </h3>

              <p className="text-[10px] sm:text-[11px] text-[#465f56] leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



