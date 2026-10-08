import React, { useState } from "react";
import { DigitalDartsLogo } from "../DigitalDartsLogo";
import { ALL_DETAILED_SERVICES_LIST } from "../../data/servicesDetailedData";
import { ArrowLeft, ChevronDown, ChevronRight, X, Search } from "lucide-react";

interface ServiceHeaderNavProps {
  currentServiceId: string;
  currentServiceTitle: string;
  onNavigateHome: () => void;
  onNavigateService: (slug: string) => void;
  onOpenRegister: () => void;
}

export const ServiceHeaderNav: React.FC<ServiceHeaderNavProps> = ({
  currentServiceId,
  currentServiceTitle,
  onNavigateHome,
  onNavigateService,
  onOpenRegister
}) => {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [switcherSearch, setSwitcherSearch] = useState("");

  const otherServices = ALL_DETAILED_SERVICES_LIST.filter(
    (s) => s.id !== currentServiceId && s.title.toLowerCase().includes(switcherSearch.toLowerCase())
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-2 sm:pt-2.5 pb-1 px-2.5 sm:px-4 md:px-6 pointer-events-none transition-all">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 min-h-12 sm:min-h-14 py-1.5 flex items-center justify-between gap-2 bg-[#07382c]/95 backdrop-blur-md border border-[#10b981]/25 rounded-full shadow-lg shadow-[#07382c]/20 relative z-10 pointer-events-auto">
        
        {/* Left: Home & Logo */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onNavigateHome}
            className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#a7f3d0] hover:text-white transition-all cursor-pointer flex items-center gap-1 text-[11px] font-semibold pr-1.5 sm:pr-2"
            title="Return to Home"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Home</span>
          </button>
          <div className="h-4 w-px bg-white/20 hidden sm:block" />
          <div className="cursor-pointer shrink-0" onClick={onNavigateHome}>
            <DigitalDartsLogo light size="sm" showTagline={false} />
          </div>
        </div>

        {/* Center: Service Switcher Dropdown */}
        <div className="relative shrink min-w-0">
          <button
            onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-[11px] sm:text-xs md:text-sm font-bold border border-white/15 transition-all cursor-pointer max-w-full"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
            <span className="truncate max-w-22.5 xs:max-w-32.5 sm:max-w-45 md:max-w-60">
              {currentServiceTitle}
            </span>
            <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10b981] shrink-0" />
          </button>

          {/* Switcher Dropdown Modal */}
          {isSwitcherOpen && (
            <>
              {/* Mobile Backdrop */}
              <div
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs sm:hidden"
                onClick={() => setIsSwitcherOpen(false)}
              />
              <div className="fixed left-3 right-3 top-16 sm:absolute sm:top-full sm:left-1/2 sm:-translate-x-1/2 sm:right-auto mt-2 w-auto sm:w-80 bg-[#07382c] border border-[#10b981]/30 rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#a7f3d0]">
                    All 12 Growth Services
                  </span>
                  <button
                    onClick={() => setIsSwitcherOpen(false)}
                    className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="relative mb-2">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={switcherSearch}
                    onChange={(e) => setSwitcherSearch(e.target.value)}
                    className="modal-input-emerald pl-8 pr-3 py-1.5 text-xs"
                    autoFocus
                  />
                </div>

                <div className="max-h-56 sm:max-h-60 overflow-y-auto space-y-1 scrollbar-thin">
                  {otherServices.map((other) => (
                    <button
                      key={other.id}
                      onClick={() => {
                        setIsSwitcherOpen(false);
                        onNavigateService(other.slug);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-xs text-zinc-200 hover:text-white cursor-pointer group"
                    >
                      <span className="font-semibold group-hover:text-[#10b981] transition-colors truncate">
                        {other.title}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white shrink-0 ml-1" />
                    </button>
                  ))}
                  {otherServices.length === 0 && (
                    <p className="text-center text-xs text-zinc-400 py-3">No matching services found</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Action: Register Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={onOpenRegister}
            className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#edf5ef] hover:bg-[#07382c] text-[#07382c] hover:text-[#edf5ef] border border-[#edf5ef]/40 hover:border-[#10b981] text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
          >
            Register Brand
          </button>
        </div>
      </div>
    </header>
  );
};

export default ServiceHeaderNav;
