import React, { useEffect, useRef, useCallback, useState } from "react";
import { Sparkles, ArrowRight, Search, ChevronRight } from "lucide-react";
import { BorderBeam } from "border-beam";
import { TEKHPORTAL_SERVICES } from "../data/tekhportalData";

interface HeroSectionProps {
  onOpenAudit: (serviceTitle?: string) => void;
  onOpenServices: () => void;
  onSelectService?: (serviceTitle: string) => void;
  onNavigateToService?: (serviceSlug: string) => void;
  headerSlot?: React.ReactNode;
}

// ─── tunables for highlighted box grid ───────────────────────────────────────
const CELL_SIZE = 34;   // px — size of each square cell
const GAP = 3;    // px — gap between cells
const STEP = CELL_SIZE + GAP;
const RADIUS = 150;  // px — spotlight radius
const BASE_ALPHA = 0.045;// soft, lighter resting cell opacity
const PEAK_ALPHA = 0.38; // balanced, luminous cell opacity at cursor centre
const CORNER_R = 4;    // border-radius of each cell (canvas)
const LERP_SPEED = 0.35; // snappy cursor interpolation

// Vibrant emerald & mint tones for crisp, highlighted illumination
const BRAND_COLORS = [
  [220, 252, 231], // emerald-100
  [187, 247, 208], // emerald-200
  [134, 239, 172], // emerald-300
  [74, 222, 128],  // emerald-400
  [16, 185, 129],  // emerald-500
];

function pickColor(dist: number, radius: number): [number, number, number] {
  const t = Math.max(0, 1 - dist / radius);
  const idx = Math.min(
    Math.floor(t * (BRAND_COLORS.length - 1)),
    BRAND_COLORS.length - 1
  );
  return BRAND_COLORS[idx] as [number, number, number];
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

const MetaIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.964 5.952c-2.457 0-4.321 1.488-5.01 2.682-.689-1.194-2.553-2.682-5.01-2.682-3.864 0-6.944 3.125-6.944 6.98 0 3.855 3.08 6.98 6.944 6.98 2.457 0 4.321-1.488 5.01-2.682.689 1.194 2.553 2.682 5.01 2.682 3.864 0 6.944-3.125 6.944-6.98 0-3.855-3.08-6.98-6.944-6.98zm-10.02 11.568c-2.54 0-4.59-2.054-4.59-4.588 0-2.534 2.05-4.588 4.59-4.588 2.057 0 3.725 1.417 4.34 3.328-.158.4-.24.823-.24 1.26 0 .437.082.86.24 1.26-.615 1.911-2.283 3.328-4.34 3.328zm10.02 0c-2.057 0-3.725-1.417-4.34-3.328.158-.4.24-.823.24-1.26 0-.437-.082-.86-.24-1.26.615-1.911 2.283-3.328 4.34-3.328 2.54 0 4.59 2.054 4.59 4.588 0 2.534-2.05 4.588-4.59 4.588z" />
  </svg>
);

const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.64 1.65 1.65 0 0 0 1.66 1.65 1.64 1.64 0 0 0 1.65-1.65c0-.9-.74-1.64-1.65-1.64" />
  </svg>
);

const WhatsappIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.34C16.32 14.21 15.1 13.61 14.88 13.53C14.65 13.45 14.48 13.41 14.32 13.66C14.15 13.91 13.66 14.48 13.51 14.65C13.36 14.82 13.22 14.84 12.97 14.71C12.72 14.59 11.92 14.32 10.97 13.48C10.23 12.82 9.73 12.01 9.58 11.76C9.43 11.51 9.56 11.38 9.69 11.25C9.8 11.14 9.94 10.96 10.07 10.81C10.2 10.66 10.24 10.56 10.32 10.39C10.4 10.22 10.36 10.08 10.3 9.95C10.24 9.82 9.74 8.6 9.54 8.09C9.34 7.6 9.13 7.67 8.97 7.66C8.83 7.65 8.66 7.65 8.49 7.65C8.32 7.65 8.05 7.71 7.82 7.96C7.59 8.21 6.94 8.82 6.94 10.06C6.94 11.3 7.84 12.5 7.97 12.67C8.1 12.84 9.77 15.41 12.33 16.51C12.94 16.77 13.41 16.93 13.78 17.05C14.4 17.25 14.96 17.22 15.4 17.15C15.9 17.07 16.92 16.53 17.13 15.93C17.34 15.34 17.34 14.84 17.28 14.71C17.22 14.59 17.06 14.51 16.57 14.34Z" />
  </svg>
);

const MARKETING_PLATFORMS = [
  {
    name: "Meta Ads (Facebook & Instagram)",
    label: "Meta",
    icon: MetaIcon,
    color: "#0668E1",
    bgHover: "hover:border-[#0668E1]/50 hover:bg-[#0668E1]/10"
  },
  {
    name: "Google & YouTube Ads",
    label: "Google",
    icon: GoogleIcon,
    color: "#4285F4",
    bgHover: "hover:border-[#4285F4]/50 hover:bg-[#4285F4]/10"
  },
  {
    name: "Instagram Growth & Reels",
    label: "Instagram",
    icon: InstagramIcon,
    color: "#E1306C",
    bgHover: "hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10"
  },
  {
    name: "YouTube Video Marketing",
    label: "YouTube",
    icon: YoutubeIcon,
    color: "#FF0000",
    bgHover: "hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10"
  },
  {
    name: "LinkedIn B2B Advertising",
    label: "LinkedIn",
    icon: LinkedinIcon,
    color: "#0A66C2",
    bgHover: "hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10"
  },
  {
    name: "WhatsApp Marketing & Funnels",
    label: "WhatsApp",
    icon: WhatsappIcon,
    color: "#25D366",
    bgHover: "hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
  }
];

// ─── component ───────────────────────────────────────────────────────────────
export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAudit,
  onOpenServices,
  onSelectService,
  onNavigateToService,
  headerSlot,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  const cursorRef = useRef({ x: -9999, y: -9999 });
  const lerpRef = useRef({ x: -9999, y: -9999 });
  const insideRef = useRef(false);
  const rafRef = useRef<number>(0);

  // Filter services dynamically based on search query
  const filteredServices = TEKHPORTAL_SERVICES.filter((svc) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      svc.title.toLowerCase().includes(q) ||
      svc.shortTitle.toLowerCase().includes(q) ||
      svc.kicker.toLowerCase().includes(q) ||
      svc.subServices.some((sub) => sub.toLowerCase().includes(q))
    );
  }).slice(0, 5);

  const handleSelectService = (serviceIdOrTitle: string) => {
    const foundService = TEKHPORTAL_SERVICES.find(
      (s) => s.id.toLowerCase() === serviceIdOrTitle.toLowerCase() || s.title.toLowerCase() === serviceIdOrTitle.toLowerCase()
    );
    
    setSearchQuery(foundService ? foundService.title : serviceIdOrTitle);
    setIsDropdownOpen(false);
    
    if (foundService && onNavigateToService) {
      onNavigateToService(foundService.id);
      return;
    }

    if (onSelectService) {
      onSelectService(serviceIdOrTitle);
    } else {
      onOpenAudit(serviceIdOrTitle);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    if (filteredServices.length > 0) {
      handleSelectService(filteredServices[0]!.id);
    } else {
      onOpenServices();
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const { width, height } = section.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
  }, []);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    handleResize();
    const ro = new ResizeObserver(handleResize);
    if (sectionRef.current) ro.observe(sectionRef.current);

    const onWindowMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        insideRef.current = true;
        cursorRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      } else {
        insideRef.current = false;
        cursorRef.current = { x: -9999, y: -9999 };
      }
    };

    const onWindowMouseLeave = () => {
      insideRef.current = false;
      cursorRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onWindowMouseMove, { passive: true });
    document.addEventListener("mouseleave", onWindowMouseLeave);

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const W = canvas.width;
      const H = canvas.height;

      const lx = lerpRef.current.x;
      const ly = lerpRef.current.y;
      const cx = cursorRef.current.x;
      const cy = cursorRef.current.y;
      lerpRef.current.x = lx + (cx - lx) * LERP_SPEED;
      lerpRef.current.y = ly + (cy - ly) * LERP_SPEED;

      ctx.clearRect(0, 0, W, H);

      const cols = Math.ceil(W / STEP) + 1;
      const rows = Math.ceil(H / STEP) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cellX = c * STEP;
          const cellY = r * STEP;
          const cellCX = cellX + CELL_SIZE / 2;
          const cellCY = cellY + CELL_SIZE / 2;

          const dx = cellCX - lerpRef.current.x;
          const dy = cellCY - lerpRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let alpha = BASE_ALPHA;
          let color: [number, number, number] = [220, 252, 231];

          if (insideRef.current && dist < RADIUS) {
            const t = Math.cos((dist / RADIUS) * (Math.PI / 2));
            alpha = BASE_ALPHA + (PEAK_ALPHA - BASE_ALPHA) * t * t;
            color = pickColor(dist, RADIUS);
          }

          const [red, green, blue] = color;
          ctx.fillStyle = `rgba(${red},${green},${blue},${alpha.toFixed(3)})`;
          roundRect(ctx, cellX, cellY, CELL_SIZE, CELL_SIZE, CORNER_R);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      window.removeEventListener("mousemove", onWindowMouseMove);
      document.removeEventListener("mouseleave", onWindowMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleResize]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-linear-to-b from-[#edf6f0] via-[#f0f8f3] to-[#edf5ef] pt-20 sm:pt-22 md:pt-24 pb-8 sm:pb-10 md:pb-12 overflow-hidden border-b border-[#07382c]/10 flex flex-col justify-center transition-colors"
    >
      {/* ── Highlighted Interactive grid canvas (full hero, pointer-events: none) ── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* ── Soft & light visible static grid lines ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(7,56,44,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(7,56,44,0.06) 1px, transparent 1px)
          `,
          backgroundSize: `${STEP}px ${STEP}px`,
        }}
      />

      {/* Optional Header Slot if passed */}
      {headerSlot}

      {/* ── Compact & Premium Hero Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center mt-1 sm:mt-2">

        {/* Eyebrow badge in Green */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#dbeee1] border border-[#10b981]/40 text-[#07382c] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
          <span>Digital Marketing Agency</span>
        </div>

        {/* Headline with font-sans font-black matching OUR SERVICES heading */}
        <h1 className="text-[clamp(28px,4.5vw,52px)] font-sans font-black text-[#07382c] leading-[1.08] tracking-tight max-w-2xl mx-auto text-center uppercase">
          <span className="block">Make Your Brand</span>
          <span className="inline-flex items-center justify-center flex-wrap tracking-tight text-[#10b981]">
            <span className="font-black">UN</span>
            <span>STOPPABLE.</span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-2.5 sm:mt-3 text-[#2f4a40] text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto font-normal">
          We don't just run ads and post content — we engineer strategies that
          build real market authority, capture high-intent SEO search, and scale
          profitable revenue through Google &amp; Meta Ads.
        </p>

        {/* Dedicated Services Search Bar with High-Visibility Animated BorderBeam & Responsive Layout */}
        <div ref={searchContainerRef} className="mt-5 sm:mt-7 max-w-xl mx-auto w-full relative">
          <BorderBeam
            size="md"
            colorVariant="colorful"
            strength={1}
            brightness={1.8}
            saturation={1.6}
            theme="light"
            borderRadius={9999}
            className="w-full"
          >
            <form
              onSubmit={handleSearchSubmit}
              className="hero-search-form"
            >
              <div className="flex items-center gap-2 flex-1 min-w-0 pl-3 sm:pl-4">
                <Search className="w-4 h-4 text-[#07382c] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onFocus={() => setIsDropdownOpen(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  placeholder="Search 12 services (e.g. SEO, Paid Ads, Web Dev)..."
                  className="hero-search-input truncate"
                />
              </div>

              <button
                type="submit"
                className="shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Search</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </BorderBeam>

          {/* Dynamic Services Auto-Suggestions Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#07382c]/15 p-2.5 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150 max-h-72 overflow-y-auto">
              <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#465f56] flex items-center justify-between border-b border-zinc-100 mb-1.5">
                <span>Matching Growth Services</span>
                <span className="text-emerald-700 font-semibold">{filteredServices.length} Results</span>
              </div>

              {filteredServices.length > 0 ? (
                filteredServices.map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => handleSelectService(svc.title)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#edf5ef] transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#07382c] group-hover:text-[#10b981] transition-colors">
                          {svc.title}
                        </span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                          {svc.badge || "Verified"}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#465f56] line-clamp-1 mt-0.5">
                        {svc.kicker} · {svc.subServices.slice(0, 3).join(", ")}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#07382c] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))
              ) : (
                <div className="p-3 text-center">
                  <p className="text-xs text-[#465f56]">
                    No exact service match for "{searchQuery}".
                  </p>
                  <button
                    type="button"
                    onClick={onOpenServices}
                    className="mt-2 text-xs font-bold text-[#07382c] hover:text-[#10b981] underline cursor-pointer"
                  >
                    View All 12 Growth Services →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Platforms We Market & Scale Across - Small, Responsive & Actual Brand Colors */}
          <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#465f56]">
              We Market On:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {MARKETING_PLATFORMS.map((plat) => {
                const Icon = plat.icon;
                return (
                  <div
                    key={plat.name}
                    style={{ color: plat.color }}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#07382c]/12 shadow-2xs hover:shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-default select-none ${plat.bgHover}`}
                    title={plat.name}
                    aria-label={plat.name}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

