import React from "react";
import type { ServiceDeliverable } from "../../types/serviceDetail";
import {
  Zap,
  CheckCircle2,
  Search,
  Target,
  FileText,
  MapPin,
  Layout,
  Gauge,
  ShoppingBag,
  BookOpen,
  Feather,
  Award,
  Download,
  Film,
  Video,
  PlayCircle,
  Mail,
  ShieldCheck,
  Users,
  Filter,
  MessageSquare,
  Database,
  PhoneCall,
  Compass,
  Palette,
  Share2,
  TrendingUp,
  Smartphone,
  Layers,
  Code,
  Camera,
  Sparkles
} from "lucide-react";

interface ServiceDeliverablesGridProps {
  deliverables: ServiceDeliverable[];
  serviceTitle: string;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Search,
  Target,
  FileText,
  MapPin,
  Layout,
  Gauge,
  ShoppingBag,
  BookOpen,
  Feather,
  Award,
  Download,
  Film,
  Video,
  PlayCircle,
  Zap,
  Mail,
  ShieldCheck,
  Users,
  Filter,
  MessageSquare,
  Database,
  PhoneCall,
  Compass,
  Palette,
  Share2,
  TrendingUp,
  Smartphone,
  Layers,
  Code,
  Camera,
  Sparkles
};

export const ServiceDeliverablesGrid: React.FC<ServiceDeliverablesGridProps> = ({
  deliverables,
  serviceTitle
}) => {
  return (
    <section className="w-full bg-[#edf5ef] py-10 sm:py-14 md:py-18 border-b border-[#07382c]/10">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#07382c] bg-[#dbeee1] border border-[#10b981]/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2 sm:mb-2.5">
            <Zap className="w-3.5 h-3.5 text-[#10b981]" />
            Complete Scope &amp; Architecture
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-black text-[#07382c] tracking-tight uppercase">
            WHAT WE DELIVER IN {serviceTitle}<span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#465f56] mt-1.5 sm:mt-2 max-w-xl mx-auto">
            Everything included in our full-spectrum, conversion-engineered {serviceTitle} engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {deliverables.map((deliv, idx) => {
            const IconComp = ICON_MAP[deliv.iconName] || Zap;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 border border-[#07382c]/12 shadow-xs hover:border-[#10b981] transition-all"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#dbeee1] text-[#07382c] flex items-center justify-center mb-3 sm:mb-4 shadow-2xs">
                  <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-[#07382c]" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#07382c] mb-1.5 sm:mb-2 leading-snug">
                  {deliv.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#465f56] leading-relaxed mb-3 sm:mb-4">
                  {deliv.description}
                </p>

                <ul className="space-y-1.5 sm:space-y-2 text-xs text-[#2c443c]">
                  {deliv.checkpoints.map((check, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                      <span className="font-medium leading-tight">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceDeliverablesGrid;
