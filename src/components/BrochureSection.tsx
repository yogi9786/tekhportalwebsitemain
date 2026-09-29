import React, { useState } from "react";
import { Download, Share2, Check, X, ChevronLeft, ChevronRight } from "lucide-react";

import brochurePdf from "../assets/Tekhportal Brochure .pdf";
import tpLogo from "../assets/tplogo.webp";
import tpBrochureCover from "../assets/tpbrochurecover.png";

interface PageData {
  section: string;
  title: string;
  items: string[];
  quote?: string;
}

interface PageData {
  section: string;
  title: string;
  items: string[];
  quote?: string;
}

const PAGES: PageData[] = [
  {
    section: "Our Services",
    title: "Brand Strategy",
    items: [
      "Market Research & Insights",
      "Brand Positioning",
      "Unique Value Proposition",
      "Brand Messaging",
      "Brand Identity & Voice",
      "Brand Architecture",
    ],
  },
  {
    section: "Our Services",
    title: "Web Solutions",
    items: [
      "UI/UX Design",
      "Website Development",
      "E-Commerce Solutions",
      "Website Maintenance", 
      "Web Content Writing",
      "Custom Web Applications",
      "API & System Integrations",
    ],
  },
  
  {
    section: "Our Services",
    title: "Digital Marketing",
    items: [
      "Digital Growth Strategy",
      "Campaign Management",
      "Influencer Marketing",
      "Media Planning & Buying",
      "SEO (Search Engine Optimization)",
      "Paid Ads (Google & Meta)",
      "Lead Generation",
      "WhatsApp Marketing",
    ],
  },
  {
    section: "Our Services",
    title: "Creative Design",
    items: [
      "Logo Design & Branding",
      "Brochures & Flyers",
      "Posters & Marketing Collateral",
      "Business Stationery",
      "Branded Merchandise",
      "Content & Copywriting",
      "Event & Festive Designs",
    ],
  },
  {
    section: "Our Services",
    title: "Content & Communication",
    items: [
      "Content Strategy & Planning",
      "Social Media Management",
      "SEO Content Writing",
      "Marketing & Brand Content",
      "Content Editing & Proofreading",
    ],
  },
  {
    section: "This Is Us",
    title: "Tekhportal",
    items: [
      "Marketing So Good, Even Google Notices",
      "We don't just run ads — we build brands.",
      "Real growth, smart strategies, measurable results.",
      "From SEO to social media and paid campaigns.",
      "Transparent reporting & dedicated support.",
    ],
    quote: "More Than Just Marketing — Strategies That Build Lasting Brands.",
  },
  {
    section: "Why Choose Us",
    title: "Tekhportal",
    items: [
      "Result-driven digital solutions.",
      "Creativity, innovation & strategic thinking.",
      "End-to-end services under one roof.",
      "Customer-first approach.",
      "Measurable results that drive long-term growth.",
    ],
  },
  {
    section: "Design",
    title: "Designs That Speak Beyond Words",
    items: [
      "Visually compelling & strategically crafted designs.",
      "Blends creativity with purpose.",
      "Branding elements to marketing creatives.",
      "Consistency & attention to detail.",
      "Creates a lasting impression that drives growth.",
    ],
  },
  {
    section: "Branding",
    title: "Don't Just Compete. Dominate.",
    items: [
      "We make your brand stand out.",
      "Strategic positioning & bold creativity.",
      "Consistent storytelling.",
      "Attract attention, build trust, stay unforgettable.",
      "Craft identities that lead the market.",
    ],
    quote: "We Make Your Brand Go Viral",
  },
  {
    section: "Websites",
    title: "We Build Websites That Grow Your Business",
    items: [
      "High-performance websites.",
      "Modern design & clean coding.",
      "Focus on user experience.",
      "Looks great & drives real results.",
      "Strong digital presence for long-term growth.",
    ],
  },
  {
    section: "Marketing",
    title: "Turn Attention into Growth",
    items: [
      "Data-driven digital marketing strategies.",
      "Convert attention into real business results.",
      "SEO, paid advertising, social media & lead generation.",
      "Understand your audience & market trends.",
      "Focus on performance, conversions & ROI.",
    ],
    quote: "Marketing Nahi Toh... Business Ka Kya Future Hai Re Baba?",
  },
  {
    section: "Videos",
    title: "From Vision to Visual Masterpieces",
    items: [
      "Professional photography & cinematic video production.",
      "High-quality editing & creative visual generation.",
      "Content that stands out in today's digital world.",
      "Product shoots & promotional videos.",
      "Every frame designed to engage, inspire & convert.",
    ],
  },
  {
    section: "Pricing",
    title: "Starter — ₹25,000",
    items: [
      "Brand Identity Design",
      "Social Media Graphics",
      "Basic Website Design",
      "Content Strategy",
      "Basic SEO Setup",
      "Monthly Consultation",
    ],
  },
  {
    section: "Pricing",
    title: "Turbo (Most Popular) — ₹55,000",
    items: [
      "Complete Brand Suite",
      "Social Media Management",
      "Full Website Development",
      "Content Creation & Marketing",
      "SEO & Analytics",
      "Paid Ads Management",
      "Video Editing (Short-form)",
      "Bi-weekly Strategy Sessions",
      "Lead Generation Campaigns",
    ],
  },
  {
    section: "Pricing",
    title: "Supersonic (Premium) — Custom",
    items: [
      "Everything in Turbo",
      "Advanced SEO & Performance Marketing",
      "Video Production & Photography",
      "Creative Design & Ad Creatives",
      "Branding & Rebranding Strategy",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Quarterly Brand Audits",
      "Custom Marketing Automation",
    ],
  },
];

/* ---------- Decorative background matching the cover ---------- */
const CoverDecor: React.FC = () => (
  <>
    {/* Top-right quarter circle + blueprint lines */}
    <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/10" />
    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/5" />
    <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 rotate-45 border border-white/10" />
    {/* Bottom-left circle */}
    <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full border border-white/10" />
    <div className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full border border-white/5" />
    {/* Faint vertical divider */}
    <div className="pointer-events-none absolute left-1/3 top-0 h-full w-px bg-white/5" />
  </>
);

/* ---------- Final "Choose TekhPortal" page ---------- */
const ChoosePage: React.FC<{ pageNumber: number; total: number }> = ({
  pageNumber,
  total,
}) => (
  <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#0b3d2e] p-4 xs:p-5 sm:p-6 md:px-7 md:py-6">
    <CoverDecor />

    {/* Top accent */}
    <div className="absolute left-0 top-0 h-1.5 w-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-400" />

    <div className="relative flex flex-1 flex-col items-center justify-center text-center">
      <div className="mb-3 sm:mb-4 flex items-center justify-center rounded-xl bg-white p-2 shadow-sm">
        <img
          src={tpLogo}
          alt="Tekhportal"
          className="h-9 sm:h-11 md:h-12 w-auto object-contain"
        />
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-white">
        Choose <span className="text-amber-400">TekhPortal</span>
      </h3>

      <div className="my-2.5 sm:my-3.5 h-0.5 w-12 sm:w-16 rounded bg-amber-400" />

      <p className="max-w-65 sm:max-w-xs text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed text-emerald-100/85">
        Ready to grow? Let's build something impactful together. Your journey to
        better visibility, stronger branding, and real business growth starts
        right here.
      </p>

      <div className="mt-3.5 sm:mt-5 flex flex-col items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-emerald-100">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          +91 9066234321
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          tekhportal@gmail.com
        </span>
      </div>
    </div>

    {/* Footer */}
    <div className="relative flex items-center justify-between border-t border-white/10 pt-2 sm:pt-3">
      <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-100/60">
        Tekhportal
      </span>
      <span className="text-[9px] font-medium text-emerald-100/60">
        {pageNumber} / {total}
      </span>
    </div>
  </div>
);

/* ---------- Standard page (matches cover design) ---------- */
const BrochurePage: React.FC<{
  page: PageData;
  pageNumber: number;
  total: number;
}> = ({ page, pageNumber, total }) => (
  <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#0b3d2e] p-4 xs:p-5 sm:p-6 md:px-7 md:py-6">
    <CoverDecor />

    {/* Top accent (cream + amber, like cover) */}
    <div className="absolute left-0 top-0 h-1.5 w-full bg-linear-to-r from-emerald-300/80 via-amber-500 to-emerald-300/80" />

    <div className="relative flex flex-1 flex-col">
      {/* Section label */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
          {page.section}
        </span>
        <span className="h-px flex-1 bg-white/15" />
      </div>

      {/* Title */}
      <h3 className="mt-1.5 sm:mt-2.5 text-base sm:text-lg md:text-xl font-extrabold leading-tight text-white">
        {page.title}
      </h3>

      {/* Items */}
      <ul className="mt-2.5 sm:mt-3.5 space-y-1 sm:space-y-1.5 flex-1">
        {page.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed text-emerald-50/90"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Quote */}
      {page.quote && (
        <div className="mt-2.5 sm:mt-3 border-l-3 sm:border-l-4 border-amber-400 bg-white/5 px-2.5 py-1.5 sm:px-3.5 sm:py-2">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-semibold italic leading-relaxed text-amber-100">
            “{page.quote}”
          </p>
        </div>
      )}
    </div>

    {/* Footer */}
    <div className="relative mt-2 sm:mt-3 flex items-center justify-between border-t border-white/10 pt-2 sm:pt-3">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <img
          src={tpLogo}
          alt="Tekhportal"
          className="h-3 sm:h-3.5 w-auto object-contain rounded-sm"
        />
        <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-100/60">
          Tekhportal
        </span>
      </div>
      <span className="text-[9px] font-medium text-emerald-100/60">
        {pageNumber} / {total}
      </span>
    </div>
  </div>
);

export const BrochureSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [isFlipping, setIsFlipping] = useState(false);

  const totalPages = PAGES.length + 1;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + "/#brochure");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochurePdf;
    link.download = "Tekhportal-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToPage = (index: number) => {
    if (index < 0 || index >= totalPages || isFlipping) return;
    setFlipDirection(index > currentPage ? "next" : "prev");
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(index);
      setTimeout(() => setIsFlipping(false), 50);
    }, 350);
  };

  const isChoosePage = currentPage === PAGES.length;

  return (
    <section
      id="brochure"
      className="relative flex w-full items-center justify-center bg-[#f4f9f5] border-b border-[#07382c]/10 px-4 py-6 sm:py-8"
    >
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-6 lg:gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: text + actions */}
        <div className="max-w-md text-center lg:text-left">
          <span className="mb-2 inline-block rounded-full border border-[#0b3d2e]/20 bg-[#0b3d2e]/5 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0b3d2e]">
            Brochure
          </span>
          <h2 className="mb-2.5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#0b3d2e]">
            Explore Our Complete Service Deck
          </h2>
          <p className="mb-5 text-xs sm:text-sm leading-relaxed text-slate-600">
            A concise overview of our capabilities, frameworks, and delivery
            model — designed for quick reading.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b3d2e] px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#0b3d2e]/20 transition hover:bg-[#0f4a38] active:scale-95 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-xl border border-[#0b3d2e]/20 bg-white px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#0b3d2e] transition hover:border-[#0b3d2e]/40 hover:bg-[#f4f7f2] active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-amber-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  Share
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: book */}
        <div
          className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-md md:max-w-107.5"
          style={{ perspective: "2000px" }}
        >
          {/* Closed cover */}
          {!isOpen && (
            <div
              onClick={() => setIsOpen(true)}
              className="group relative mx-auto aspect-square w-full cursor-pointer select-none"
            >
              <div className="absolute inset-0 rounded-r-xl rounded-l-sm bg-[#0b3d2e] shadow-2xl" />

              <div className="absolute inset-0 z-10 flex origin-left flex-col justify-between overflow-hidden rounded-l-sm rounded-r-xl shadow-xl transition-transform duration-500 group-hover:rotateY(-8deg)">
                <img
                  src={tpBrochureCover}
                  alt="Tekhportal Brochure Cover"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm shadow-md">
                  Tap to open
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 h-4 w-48 -translate-x-1/2 rounded-full bg-black/20 blur-lg transition-all duration-500 group-hover:w-60" />
            </div>
          )}

          {/* Open book */}
          {isOpen && (
            <div className="relative mx-auto w-full">
              <div className="relative aspect-square w-full">
                <div
                  className={`relative h-full w-full overflow-hidden rounded-xl shadow-2xl transition-all duration-350 ease-out ${
                    isFlipping
                      ? flipDirection === "next"
                        ? "translate-x-2 scale-[0.98] opacity-0"
                        : "-translate-x-2 scale-[0.98] opacity-0"
                      : "translate-x-0 scale-100 opacity-100"
                  }`}
                >
                  {isChoosePage ? (
                    <ChoosePage
                      pageNumber={currentPage + 1}
                      total={totalPages}
                    />
                  ) : (
                    <BrochurePage
                      page={PAGES[currentPage]}
                      pageNumber={currentPage + 1}
                      total={totalPages}
                    />
                  )}
                </div>

                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 0}
                  className="absolute -left-3 sm:-left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-2 sm:p-2.5 text-slate-700 shadow-lg border border-slate-100 transition hover:text-[#0b3d2e] hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-30 cursor-pointer"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages - 1}
                  className="absolute -right-3 sm:-right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-2 sm:p-2.5 text-slate-700 shadow-lg border border-slate-100 transition hover:text-[#0b3d2e] hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-30 cursor-pointer"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -right-2.5 -top-2.5 z-40 rounded-full bg-white p-1.5 sm:p-2 text-slate-600 shadow-md border border-slate-100 transition hover:text-slate-900 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Close brochure"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentPage
                        ? "w-6 bg-[#0b3d2e]"
                        : "w-1.5 bg-[#0b3d2e]/20 hover:bg-[#0b3d2e]/40"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;