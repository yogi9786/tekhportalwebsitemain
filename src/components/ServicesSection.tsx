import React from "react";
import { TEKHPORTAL_SERVICES } from "../data/tekhportalData";
import { ArrowRight, Sparkles, Award } from "lucide-react";

interface ServicesSectionProps {
  onSelectServiceForAudit?: (serviceName: string) => void;
  onNavigateToService?: (serviceSlug: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigateToService
}) => {
  const handleServiceClick = (serviceId: string, e: React.MouseEvent) => {
    if (onNavigateToService) {
      e.preventDefault();
      onNavigateToService(serviceId);
    }
  };

  const handleViewAllClick = (e: React.MouseEvent) => {
    if (onNavigateToService) {
      e.preventDefault();
      onNavigateToService("all");
    }
  };

  return (
    <section id="services" className="w-full bg-[#f4f9f5] py-10 sm:py-16 md:py-20 border-b border-[#07382c]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#dbeee1] text-[#07382c] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10b981]" />
              <span>Full-Spectrum Digital Marketing Matrix</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-sans font-black text-[#07382c] tracking-tight uppercase">
              OUR SERVICES<span className="text-[#10b981]">.</span>
            </h2>
            <div className="w-10 sm:w-12 h-1 bg-[#10b981] mt-1.5 sm:mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-[#465f56] mt-2 leading-relaxed">
              Explore our 12 dedicated service pages featuring live client evidence, video proof walkthroughs, and custom growth roadmaps.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#/services"
              onClick={handleViewAllClick}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-[#07382c] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 12 Services Grid - 2 columns on mobile, 3 on md, 4 on xl */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
          {TEKHPORTAL_SERVICES.map((service) => {
            return (
              <a
                key={service.id}
                href={`#/services/${service.id}`}
                onClick={(e) => handleServiceClick(service.id, e)}
                className="group bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-[#07382c]/10 shadow-2xs hover:shadow-lg hover:border-[#10b981] transition-all duration-200 flex flex-col justify-between cursor-pointer hover:-translate-y-1 no-underline text-left"
              >
                <div>
                  {/* Top Header: Title & Arrow Icon */}
                  <div className="flex items-start justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <h3 className="text-xs sm:text-base font-bold text-[#07382c] group-hover:text-[#10b981] transition-colors leading-snug line-clamp-2">
                      {service.shortTitle || service.title}
                    </h3>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#edf5ef] group-hover:bg-[#10b981] group-hover:text-[#07382c] flex items-center justify-center shrink-0 text-[#07382c] transition-colors duration-200 mt-0.5">
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-[#465f56] leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Banner linking to full directory */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#07382c] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-3.5 text-left w-full sm:w-auto">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-[#10b981]/30">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-base font-bold text-white">
                Looking for a tailored multi-service growth bundle?
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-300 mt-0.5">
                Browse our complete service directory or get a custom 36-point brand audit.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="#/services"
              onClick={handleViewAllClick}
              className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer whitespace-nowrap"
            >
              Open Services Directory
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

