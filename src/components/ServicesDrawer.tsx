import React, { useState } from "react";
import { TEKHPORTAL_SERVICES } from "../data/tekhportalData";
import type { ServiceItem } from "../types";
import { Mark } from "./Mark";
import { X, ArrowRight, Search, CheckCircle2 } from "lucide-react";

interface ServicesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceForAudit?: (serviceTitle: string) => void;
  onNavigateToService?: (serviceSlug: string) => void;
}

export const ServicesDrawer: React.FC<ServicesDrawerProps> = ({
  isOpen,
  onClose,
  onSelectServiceForAudit,
  onNavigateToService
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  if (!isOpen) return null;

  const categories = ["all", "SEO", "PPC", "Web Dev", "Branding", "Creative", "Lead Gen"];

  const filteredServices = TEKHPORTAL_SERVICES.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.subServices.some((sub) =>
        sub.toLowerCase().includes(searchQuery.toLowerCase())
      );

    if (activeCategory === "all") return matchesSearch;
    if (activeCategory === "SEO") return matchesSearch && service.id.includes("seo");
    if (activeCategory === "PPC") return matchesSearch && (service.id.includes("ppc") || service.id.includes("ecommerce"));
    if (activeCategory === "Web Dev") return matchesSearch && (service.id.includes("web") || service.id.includes("ui-ux"));
    if (activeCategory === "Branding") return matchesSearch && (service.id.includes("brand") || service.id.includes("content"));
    if (activeCategory === "Creative") return matchesSearch && (service.id.includes("graphic") || service.id.includes("video") || service.id.includes("photo"));
    if (activeCategory === "Lead Gen") return matchesSearch && (service.id.includes("lead") || service.id.includes("email"));

    return matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0c0d12] text-white border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-white/10 bg-[#12141c]">
          <div className="flex items-center gap-3">
            <Mark light size={24} />
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 font-sans uppercase">
                OUR SERVICES<span className="text-[#10b981]">.</span>
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close services modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="px-6 py-4 border-b border-white/5 bg-[#0e1017] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search SEO, Google Ads, UI/UX, Reels, Shopify..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="modal-input-emerald pl-10 pr-4 py-2"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative bg-[#141722] hover:bg-[#181c2b] border border-white/5 hover:border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5">
                    {service.kicker}
                  </span>
                  {service.badge && (
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Sub-services pills */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 block">
                    Key Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.subServices.map((sub, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] text-zinc-300 bg-black/40 px-2 py-0.5 rounded-md border border-white/5"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => {
                    onClose();
                    if (onNavigateToService) {
                      onNavigateToService(service.id);
                    } else {
                      window.location.hash = `/services/${service.id}`;
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:underline cursor-pointer"
                >
                  <span>Explore Service Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {onSelectServiceForAudit && (
                  <button
                    onClick={() => {
                      onSelectServiceForAudit(service.title);
                      onClose();
                    }}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition-colors cursor-pointer"
                  >
                    Audit
                  </button>
                )}
              </div>
            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="col-span-full py-12 text-center text-zinc-400">
              <p className="text-base">No services matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-3 text-xs text-emerald-400 underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 bg-[#11131a] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-400 text-center sm:text-left">
            Ready to accelerate your brand in Bengaluru or globally?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onSelectServiceForAudit) onSelectServiceForAudit("All Services");
                onClose();
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <span>Get Custom Growth Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDrawer;
