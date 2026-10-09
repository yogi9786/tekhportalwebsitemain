import React, { useEffect, useRef, useCallback } from "react";
import type { DetailedServiceData } from "../../types/serviceDetail";
import { Sparkles, ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  service: DetailedServiceData;
  onOpenRegister: () => void;
}

// ─── tunables for highlighted box grid ───────────────────────────────────────
const CELL_SIZE = 34;   // px — size of each square cell
const GAP = 3;          // px — gap between cells
const STEP = CELL_SIZE + GAP;
const RADIUS = 150;     // px — spotlight radius
const BASE_ALPHA = 0.045;// soft, lighter resting cell opacity
const PEAK_ALPHA = 0.38; // balanced, luminous cell opacity at cursor centre
const CORNER_R = 4;     // border-radius of each cell (canvas)
const LERP_SPEED = 0.35;// snappy cursor interpolation

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

export const ServiceHero: React.FC<ServiceHeroProps> = ({ service, onOpenRegister }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cursorRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const lerpRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const insideRef = useRef<boolean>(false);
  const rafRef = useRef<number>(0);

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
      className="relative w-full bg-linear-to-b from-[#edf6f0] via-[#f0f8f3] to-[#edf5ef] pt-20 sm:pt-26 md:pt-30 pb-10 sm:pb-14 md:pb-16 border-b border-[#07382c]/10 overflow-hidden transition-colors"
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
          backgroundSize: `${STEP}px ${STEP}px`
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-3.5 sm:px-6 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-[#dbeee1] border border-[#10b981]/40 text-[#07382c] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-3 shadow-xs">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10b981]" />
          <span>{service.kicker}</span>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="text-[clamp(24px,5.2vw,48px)] font-sans font-black text-[#07382c] leading-[1.1] tracking-tight max-w-4xl mx-auto uppercase">
          <span className="block">{service.heroHeadline}</span>
          <span className="text-[#10b981] block mt-0.5 sm:mt-1">{service.heroHighlightWord}</span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="mt-2.5 sm:mt-4 text-[#2f4a40] text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          {service.tagline}
        </p>

        {/* Primary Action Button (Direct to Register Form) */}
        <div className="mt-5 sm:mt-8 flex items-center justify-center max-w-sm sm:max-w-none mx-auto">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-[#07382c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Register for {service.shortTitle || service.title}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

        {/* 4 Metric Stats Bar */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto">
          {service.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-[#07382c]/12 shadow-xs hover:border-[#10b981] transition-all text-center flex flex-col justify-center"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#07382c] tracking-tight font-sans">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-[#465f56] mt-0.5 sm:mt-1 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;


