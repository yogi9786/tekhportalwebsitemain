import { useState } from "react";
import { ALL_DETAILED_SERVICES_LIST } from "../data/servicesDetailedData";
import { DigitalDartsLogo } from "../components/DigitalDartsLogo";
import { RegisterBrandModal } from "../components/RegisterBrandModal";
import { Footer } from "../components/Footer";
import {
  Sparkles,
  ArrowRight,
  Search,
  ArrowLeft,
  CheckCircle2,
  Layers
} from "lucide-react";

interface AllServicesPageProps {
  onNavigateHome: () => void;
  onNavigateService: (slug: string) => void;
  onOpenRegisterWithPackage?: (packageName: string) => void;
}

export const AllServicesPage: React.FC<AllServicesPageProps> = ({
  onNavigateHome,
  onNavigateService,
  onOpenRegisterWithPackage
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedRegisterPackage, setSelectedRegisterPackage] = useState("Complete 360° Growth Package");

  const categories = [
    { id: "all", label: "All 12 Services" },
    { id: "search", label: "Search & SEO" },
    { id: "ads", label: "Paid Ads & ROAS" },
    { id: "engineering", label: "Web & Engineering" },
    { id: "creative", label: "Creative & Design" },
    { id: "motion", label: "Video & Motion" },
    { id: "funnels", label: "Funnels & Retention" }
  ];

  const filteredServices = ALL_DETAILED_SERVICES_LIST.filter((service) => {
    const matchesQuery =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.deliverables.some((d) => d.title.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeCategory === "all") return matchesQuery;
    if (activeCategory === "search") return matchesQuery && service.id.includes("seo");
    if (activeCategory === "ads") return matchesQuery && (service.id.includes("ppc") || service.id.includes("ecommerce"));
    if (activeCategory === "engineering") return matchesQuery && (service.id.includes("web") || service.id.includes("ui-ux"));
    if (activeCategory === "creative") return matchesQuery && (service.id.includes("graphic") || service.id.includes("brand"));
    if (activeCategory === "motion") return matchesQuery && (service.id.includes("video") || service.id.includes("photo"));
    if (activeCategory === "funnels") return matchesQuery && (service.id.includes("lead") || service.id.includes("email"));

    return matchesQuery;
  });

  const handleOpenRegister = (packageName?: string) => {
    const name = packageName || "Complete 360° Growth Package";
    setSelectedRegisterPackage(name);
    if (onOpenRegisterWithPackage) {
      onOpenRegisterWithPackage(name);
    } else {
      setIsRegisterModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#edf5ef] text-[#131f1c] font-sans antialiased relative selection:bg-[#10b981] selection:text-[#07382c]">
      
      {/* ─────────────────────────────────────────────────────────────────────────
          1. STICKY TOP NAV
      ───────────────────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full pt-2 sm:pt-2.5 pb-1 px-3 sm:px-6 pointer-events-none transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-12.5 sm:min-h-14 py-1.5 flex items-center justify-between bg-[#07382c]/95 backdrop-blur-md border border-[#10b981]/25 rounded-full shadow-lg shadow-[#07382c]/20 relative z-10 pointer-events-auto">
          
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onNavigateHome}
              className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#a7f3d0] hover:text-white transition-all cursor-pointer flex items-center gap-1 text-[11px] font-semibold pr-2"
              title="Return to Home"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </button>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="cursor-pointer" onClick={onNavigateHome}>
              <DigitalDartsLogo light size="sm" showTagline={false} />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-white font-bold uppercase tracking-wider">
            <span className="text-[#10b981]">★</span>
            <span>All 12 Growth Services Directory</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleOpenRegister("All Services Registration")}
              className="px-4 py-1.5 rounded-full bg-[#edf5ef] hover:bg-[#07382c] text-[#07382c] hover:text-[#edf5ef] border border-[#edf5ef]/40 hover:border-[#10b981] text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer shrink-0"
            >
              Register Brand
            </button>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────────────────
          2. MASTER SERVICES HERO
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-linear-to-b from-[#edf6f0] via-[#f0f8f3] to-[#edf5ef] pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 border-b border-[#07382c]/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(7,56,44,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(7,56,44,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px"
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#dbeee1] border border-[#10b981]/40 text-[#07382c] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Complete 360° Growth Matrix</span>
          </div>

          <h1 className="text-[clamp(28px,4.5vw,48px)] font-sans font-black text-[#07382c] leading-[1.08] tracking-tight max-w-3xl mx-auto uppercase">
            EXPLORE OUR 12 DEDICATED <span className="text-[#10b981] block">GROWTH SERVICES.</span>
          </h1>

          <p className="mt-3.5 text-[#2f4a40] text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Every service features its own dedicated strategy, proven execution roadmap, and transparent deliverables checklist.
          </p>

          {/* Search & Filter Controls */}
          <div className="mt-7 max-w-2xl mx-auto space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search services (e.g. SEO, Paid Ads, Video Reels, Next.js, Branding)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-emerald-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm text-[#07382c] font-semibold shadow-sm"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-[#07382c] text-white shadow-md"
                      : "bg-white text-[#465f56] hover:bg-emerald-50 hover:text-[#07382c] border border-[#07382c]/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          3. ALL 12 DEDICATED SERVICE CARDS GRID
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#f4f9f5] py-12 sm:py-16 border-b border-[#07382c]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="group bg-white rounded-3xl p-6 border border-[#07382c]/12 shadow-xs hover:shadow-2xl hover:border-[#10b981] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Meta Tags */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#dbeee1] text-[#07382c] border border-[#10b981]/20">
                      {svc.kicker}
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#10b981] text-[#07382c]">
                      {svc.primaryStat.value}
                    </span>
                  </div>

                  <h3 className="text-lg font-sans font-black text-[#07382c] group-hover:text-[#10b981] transition-colors leading-snug mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-[#465f56] leading-relaxed mb-4 line-clamp-3">
                    {svc.description}
                  </p>

                  {/* Highlights Indicator */}
                  <div className="p-3 bg-[#edf5ef] rounded-xl mb-4 space-y-1 text-[11px] text-[#07382c]">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Layers className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>Dedicated Scope &amp; Deliverables:</span>
                    </div>
                    <p className="text-[10px] text-[#526f64] line-clamp-1">
                      Full 4-stage sprint roadmap &amp; measurable outputs
                    </p>
                  </div>

                  {/* Deliverables Checklist Snippet */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#526f64] block">
                      Core Deliverables:
                    </span>
                    {svc.deliverables.slice(0, 3).map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-xs text-[#2c443c]">
                        <CheckCircle2 className="w-3 h-3 text-[#10b981] shrink-0" />
                        <span className="truncate">{d.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action Links */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onNavigateService(svc.slug);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#07382c] group-hover:text-[#10b981] transition-colors cursor-pointer"
                  >
                    <span>View Service Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleOpenRegister(svc.title)}
                    className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-[#07382c] text-white transition-all cursor-pointer"
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}

            {filteredServices.length === 0 && (
              <div className="col-span-full py-16 text-center">
                <p className="text-base text-[#465f56]">No services match "{searchQuery}"</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-3 text-xs font-bold text-[#10b981] underline cursor-pointer"
                >
                  Reset all filters →
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenAudit={() => handleOpenRegister("General Inquiry")}
        onNavigateToService={onNavigateService}
      />

      <RegisterBrandModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        defaultPackage={selectedRegisterPackage}
      />
    </div>
  );
};

export default AllServicesPage;
