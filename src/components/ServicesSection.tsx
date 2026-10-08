import React from "react";
import { TEKHPORTAL_SERVICES } from "../data/tekhportalData";
import { DETAILED_SERVICES } from "../data/servicesDetailedData";
import { ArrowRight, ChevronRight, Sparkles, Layers, Award } from "lucide-react";

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
    <section id="services" className="w-full bg-[#f4f9f5] py-12 sm:py-16 md:py-20 border-b border-[#07382c]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbeee1] text-[#07382c] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Full-Spectrum Digital Marketing Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-[#07382c] tracking-tight uppercase">
              OUR SERVICES<span className="text-[#10b981]">.</span>
            </h2>
            <div className="w-12 h-1 bg-[#10b981] mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-[#465f56] mt-2.5 leading-relaxed">
              Explore our 12 dedicated service pages featuring live client evidence, video proof walkthroughs, and custom growth roadmaps.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#/services"
              onClick={handleViewAllClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-[#07382c] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4.5">
          {TEKHPORTAL_SERVICES.map((service) => {
            const detailed = DETAILED_SERVICES[service.id];
            const primaryMetric = detailed?.primaryStat?.value || service.metrics;

            return (
              <a
                key={service.id}
                href={`#/services/${service.id}`}
                onClick={(e) => handleServiceClick(service.id, e)}
                className="group bg-white rounded-2xl p-4 sm:p-5 border border-[#07382c]/10 shadow-xs hover:shadow-xl hover:border-[#10b981] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 no-underline text-left"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-1.5 mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#dbeee1] text-[#07382c] border border-[#10b981]/20">
                      {service.kicker}
                    </span>
                    {primaryMetric && (
                      <span className="text-[9.5px] font-black px-2 py-0.5 rounded-full bg-[#10b981] text-[#07382c] shadow-2xs">
                        {primaryMetric}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#07382c] group-hover:text-[#10b981] transition-colors leading-snug mb-2">
                    {service.shortTitle || service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-[#465f56] leading-relaxed line-clamp-3 mb-3.5">
                    {service.description}
                  </p>

                  {/* Proof Canvases Included Tag */}
                  <div className="p-2 rounded-xl bg-[#edf5ef] mb-3 flex items-center justify-between text-[10px] text-[#07382c] font-semibold">
                    <span className="flex items-center gap-1 text-[#07382c]">
                      <Layers className="w-3 h-3 text-[#10b981]" />
                      <span>Video &amp; Image Proofs</span>
                    </span>
                    <span className="text-[9px] font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded border border-[#10b981]/20">
                      Dedicated Page
                    </span>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-bold text-[#07382c]">
                  <span className="group-hover:text-[#10b981] transition-colors flex items-center gap-1.5">
                    <span>Explore Full Page</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-[#10b981]" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Banner linking to full directory */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-7 rounded-3xl bg-[#07382c] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-[#10b981]/30">
              <Award className="w-5 h-5 text-[#10b981]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Looking for a tailored multi-service growth bundle?
              </h4>
              <p className="text-xs text-zinc-300 mt-0.5">
                Browse our complete service directory or get a custom 36-point brand audit.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="#/services"
              onClick={handleViewAllClick}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer whitespace-nowrap"
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
