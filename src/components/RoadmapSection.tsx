import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquareQuote,
  Compass,
  Layers,
  Users,
  TrendingUp,
  Trophy,
  Sparkles,
} from "lucide-react";
import { IsometricRoadmapCanvas } from "./IsometricRoadmapCanvas";

gsap.registerPlugin(ScrollTrigger);

export interface RoadmapStepData {
  id: number;
  stepNumber: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isSpecialContract?: boolean;
}

const ROADMAP_STEPS: RoadmapStepData[] = [
  {
    id: 1,
    stepNumber: "01",
    tag: "DISCOVERY",
    title: "Discovery & Discussion",
    description: "Understand business goals, target audience, and key requirements.",
    icon: <MessageSquareQuote className="w-3.5 h-3.5" />,
  },
  {
    id: 2,
    stepNumber: "02",
    tag: "STRATEGY",
    title: "Strategy & Planning",
    description: "Tailored growth strategy, KPIs, timelines, and execution blueprint.",
    icon: <Compass className="w-3.5 h-3.5" />,
  },
  {
    id: 3,
    stepNumber: "03",
    tag: "EXECUTION",
    title: "Execution & Build",
    description: "Full-stack deployment across SEO, paid ads, creative, and web dev.",
    icon: <Layers className="w-3.5 h-3.5" />,
  },
  {
    id: 4,
    stepNumber: "04",
    tag: "CADENCE",
    title: "Weekly Sync & Updates",
    description: "Transparent weekly performance reports, analytics, and next steps.",
    icon: <Users className="w-3.5 h-3.5" />,
  },
  {
    id: 5,
    stepNumber: "05",
    tag: "OPTIMIZE",
    title: "Optimize & Scale",
    description: "Continuous campaign optimization to maximize conversions and ROI.",
    icon: <TrendingUp className="w-3.5 h-3.5" />,
  },
  {
    id: 6,
    stepNumber: "06",
    tag: "REVENUE SCALE",
    title: "Business Growth",
    description: "Sustainable revenue acceleration and compounding market leadership.",
    icon: <Trophy className="w-3.5 h-3.5 text-[#F2A202]" />,
    isSpecialContract: true,
  },
];

// Desktop Positions for Stage Blocks positioned along the Isometric Diagonal Beacons
const DESKTOP_STAGE_POSITIONS: { [key: number]: React.CSSProperties } = {
  1: { left: "0.5%", top: "50%", width: "180px" },
  2: { left: "16.5%", top: "38%", width: "180px" },
  3: { left: "32.5%", top: "26%", width: "180px" },
  4: { left: "48.5%", top: "14%", width: "180px" },
  5: { left: "64.5%", top: "2%", width: "180px" },
  6: { right: "0.5%", top: "-10%", width: "188px" },
};

interface RoadmapSectionProps {
  onOpenAudit?: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenAudit: _onOpenAudit }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const trackCanvasRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Stage Text Blocks Sequential Reveal on Scroll
      const validStages = stagesRef.current.filter(Boolean);
      if (validStages.length > 0) {
        gsap.fromTo(
          validStages,
          {
            opacity: 0,
            y: 25,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: trackCanvasRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Mobile Cards Sequential Reveal
      const validMobileCards = mobileCardsRef.current.filter(Boolean);
      if (validMobileCards.length > 0) {
        gsap.fromTo(
          validMobileCards,
          {
            opacity: 0,
            y: 20,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Ambient Parallax Floating Particles
      gsap.to(".iso-ambient-float", {
        y: -15,
        rotation: 6,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="relative w-full bg-linear-to-br from-[#F5F9F3] via-[#F1F8F0] to-[#EAF5EC] py-12 sm:py-16 md:py-20 border-b border-[#063F32]/10 overflow-hidden scroll-mt-20"
    >
      {/* Soft Ambient Background Elements */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-136 w-136 rounded-full bg-[#DDEED8]/70 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-112 w-md rounded-full bg-[#0B6B52]/6 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-128 w-lg rounded-full bg-[#F7F5E8]/80 blur-3xl" />

      {/* Floating Ambient Parallax Elements */}
      <div className="iso-ambient-float pointer-events-none absolute top-20 left-10 h-7 w-7 rounded-lg border-2 border-[#0B6B52]/20 rotate-12" />
      <div className="iso-ambient-float pointer-events-none absolute top-1/3 right-12 h-6 w-6 rounded-full border-2 border-[#F2A202]/30" />
      <div className="iso-ambient-float pointer-events-none absolute bottom-24 left-1/4 h-8 w-8 border border-[#063F32]/15 rotate-45" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================== */}
        {/* DESKTOP VIEW (>= 1024px): Embedded Hero Title & Track     */}
        {/* ======================================================== */}
        <div
          ref={trackCanvasRef}
          className="hidden lg:block relative mt-6 mb-4 h-135 xl:h-140 w-full"
        >
          {/* Embedded Top-Left Hero Title Block */}
          <div className="absolute top-0 left-0 max-w-md pointer-events-none z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#063F32]/8 border border-[#063F32]/15 text-[#063F32] text-[10px] font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-3 h-3 text-[#F2A202]" />
              <span>How We Work</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#063F32] tracking-tight uppercase leading-[1.1]">
              From First Discussion <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0B6B52] via-[#10b981] to-[#F2A202]">
                To Continuous Growth
              </span>
            </h2>

            <div className="h-1 w-14 rounded-full bg-linear-to-r from-[#063F32] to-[#10b981]" />
          </div>

          {/* Isometric SVG Diagonal Conveyor Track Layer */}
          <IsometricRoadmapCanvas
            activeStep={activeStep}
            hoveredStep={hoveredStep}
            onStepHover={setHoveredStep}
            onStepClick={setActiveStep}
          />

          {/* 6 Stage Compact Info Cards Aligned Directly Above the Beacons */}
          {ROADMAP_STEPS.map((step, index) => {
            const isTarget = activeStep === step.id || hoveredStep === step.id;
            const isSpecial = step.isSpecialContract;

            return (
              <div
                key={step.id}
                ref={(el) => {
                  stagesRef.current[index] = el;
                }}
                className="absolute transition-transform duration-300 z-20 cursor-pointer"
                style={DESKTOP_STAGE_POSITIONS[step.id]}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Stage Text Card Box */}
                <div
                  className={`rounded-xl p-3 transition-all duration-300 backdrop-blur-md border ${
                    isSpecial
                      ? isTarget
                        ? "bg-linear-to-br from-[#FFFDF5] to-[#FDF4DF] border-[#F2A202]/70 shadow-lg shadow-[#F2A202]/15 scale-105"
                        : "bg-[#FFFDF5]/90 border-[#F2A202]/40 shadow-xs"
                      : isTarget
                      ? "bg-white/95 border-[#10b981]/50 shadow-lg shadow-[#063F32]/10 scale-105"
                      : "bg-white/80 hover:bg-white/95 border-[#063F32]/10 shadow-xs"
                  }`}
                >
                  {/* Step Pill Header */}
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
                        isSpecial
                          ? "bg-[#F2A202] text-[#063F32]"
                          : isTarget
                          ? "bg-[#063F32] text-white"
                          : "bg-[#063F32]/8 text-[#063F32]"
                      }`}
                    >
                      {step.stepNumber} · {step.tag}
                    </span>

                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center ${
                        isSpecial
                          ? "text-[#F2A202]"
                          : isTarget
                          ? "text-[#10b981]"
                          : "text-[#063F32]/70"
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-black text-xs uppercase tracking-tight text-[#063F32] leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 text-[10.5px] text-slate-600 leading-snug font-normal">
                    {step.description}
                  </p>

                  {/* Special SLA highlight */}
                  {isSpecial && (
                    <div className="mt-1.5 pt-1 border-t border-[#F2A202]/30 flex items-center justify-between text-[9px] font-bold text-[#B45309]">
                      <span>Compounding Scale</span>
                      <span className="bg-[#F2A202]/20 px-1 py-0.2 rounded text-[8.5px] uppercase">
                        Core SLA
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET VIEW (< 1024px)                          */}
        {/* ======================================================== */}
        <div className="block lg:hidden mt-4">
          
          {/* Mobile Title Block */}
          <div className="space-y-2 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#063F32]/8 border border-[#063F32]/15 text-[#063F32] text-[10px] font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-3 h-3 text-[#F2A202]" />
              <span>How We Work</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#063F32] tracking-tight uppercase leading-snug">
              From First Discussion <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0B6B52] via-[#10b981] to-[#F2A202]">
                To Continuous Growth
              </span>
            </h2>
          </div>

          <div className="relative pl-7 space-y-4">
            {/* Glowing Vertical Neon Spine */}
            <div className="absolute left-2.5 top-3 bottom-3 w-1 rounded-full bg-linear-to-b from-[#063F32] via-[#10b981] to-[#F2A202]" />

            {ROADMAP_STEPS.map((step, index) => {
              const isSelected = activeStep === step.id;
              const isHovered = hoveredStep === step.id;
              const isTarget = isSelected || isHovered;
              const isSpecial = step.isSpecialContract;

              return (
                <div
                  key={`mobile-${step.id}`}
                  ref={(el) => {
                    mobileCardsRef.current[index] = el;
                  }}
                  className="relative"
                >
                  {/* Glowing Spine Milestone Node */}
                  <div
                    onClick={() => setActiveStep(step.id)}
                    className={`absolute -left-6.25 top-4 z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white transition-transform duration-200 cursor-pointer ${
                      isSpecial
                        ? "border-[#F2A202] text-[#063F32] bg-[#F2A202] shadow-sm scale-110"
                        : isTarget
                        ? "border-[#0B6B52] bg-[#063F32] text-white shadow-sm scale-110"
                        : "border-[#0B6B52]/40 text-[#063F32]"
                    }`}
                  >
                    <span className="text-[9px] font-black">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Stage Card */}
                  <div
                    onClick={() => setActiveStep(step.id)}
                    className={`rounded-xl p-4 backdrop-blur-md border transition-all duration-300 cursor-pointer ${
                      isSpecial
                        ? "bg-[#FFFDF5] border-[#F2A202]/50 shadow-sm"
                        : isTarget
                        ? "bg-white border-[#10b981]/50 shadow-sm"
                        : "bg-white/85 border-[#063F32]/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#063F32]/8 text-[#063F32]">
                        Phase {step.stepNumber} · {step.tag}
                      </span>
                      <div className="w-6 h-6 rounded bg-[#063F32]/5 flex items-center justify-center text-[#063F32]">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="font-black text-xs text-[#063F32] uppercase leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-[11px] text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>

                    {isSpecial && (
                      <div className="mt-2 pt-1.5 border-t border-[#F2A202]/30 flex items-center justify-between text-[10px] font-bold text-[#B45309]">
                        <span>Compounding Scale</span>
                        <span className="bg-[#F2A202]/20 px-1.5 py-0.5 rounded text-[9px] uppercase">
                          Core SLA
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoadmapSection;
