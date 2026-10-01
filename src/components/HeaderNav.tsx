import React, { useState, useEffect, useRef, useCallback } from "react";
import { DigitalDartsLogo } from "./DigitalDartsLogo";
import { Menu, X } from "lucide-react";

interface HeaderNavProps {
  onOpenAudit: () => void;
  onOpenServices?: () => void;
}

// ─── tunables for highlighted box grid (matching hero section) ───────────────
const CELL_SIZE   = 34;   // px — size of each square cell
const GAP         = 3;    // px — gap between cells
const STEP        = CELL_SIZE + GAP;
const RADIUS      = 150;  // px — spotlight radius
const BASE_ALPHA  = 0.045;// soft resting cell opacity
const PEAK_ALPHA  = 0.38; // luminous cell opacity at cursor centre
const CORNER_R    = 4;    // border-radius of each cell (canvas)
const LERP_SPEED  = 0.35; // snappy cursor interpolation

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

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenAudit
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const cursorRef  = useRef({ x: -9999, y: -9999 });
  const lerpRef    = useRef({ x: -9999, y: -9999 });
  const insideRef  = useRef(false);
  const rafRef     = useRef<number>(0);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const header = headerRef.current;
    if (!canvas || !header) return;
    canvas.width  = header.offsetWidth;
    canvas.height = header.offsetHeight;
  }, []);

  useEffect(() => {
    handleResize();
    const ro = new ResizeObserver(handleResize);
    if (headerRef.current) ro.observe(headerRef.current);

    const onWindowMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top - 50 &&
        e.clientY <= rect.bottom + 150
      ) {
        insideRef.current = true;
        cursorRef.current = { x, y };
        if (lerpRef.current.x === -9999) {
          lerpRef.current = { x, y };
        }
      } else {
        insideRef.current = false;
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
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-[#edf5ef]/95 backdrop-blur-md border-b border-[#07382c]/10 py-2 sm:py-2.5 px-3 sm:px-6 transition-all duration-300 overflow-hidden"
    >
      {/* Interactive spotlight canvas for header bg */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Hero grid box background pattern */}
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

      {/* Boxed Floating Pill with Green Translucent Blur */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-15 sm:min-h-17 py-1.5 sm:py-2 flex items-center justify-between bg-[#07382c] border border-[#10b981]/25 rounded-full shadow-lg shadow-[#07382c]/20 relative z-10 transition-all">
        
        {/* Brand Logo in Light Mode (White Text) */}
        <div className="relative z-10 py-0.5">
          <DigitalDartsLogo light />
        </div>

        {/* Center Desktop Navigation Links in White */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-[13px] font-semibold text-white">
          <a
            href="#services"
            className="hover:text-[#10b981] transition-colors"
          >
            Services
          </a>

          <a
            href="#pricing"
            className="hover:text-[#10b981] transition-colors"
          >
            Packages
          </a>

          <a
            href="#brochure"
            className="hover:text-[#10b981] transition-colors flex items-center gap-1.5"
          >
            <span>Brochure</span>
            <span className="text-[9px] font-bold bg-[#fbb753] text-[#07382c] px-1.5 py-0.5 rounded-full uppercase">PDF</span>
          </a>

          <a
            href="#how-we-work"
            className="hover:text-[#10b981] transition-colors"
          >
            Roadmap
          </a>

          <a
            href="#faq"
            className="hover:text-[#10b981] transition-colors"
          >
            FAQ
          </a>

          <a
            href="#socials"
            className="hover:text-[#10b981] transition-colors"
          >
            Socials
          </a>

          <a
            href="#contact"
            className="hover:text-[#10b981] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 text-white rounded-full hover:bg-white/10 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer with Matching Green Translucent Blur */}
      {isMobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 bg-[#07382c]/95 backdrop-blur-xl border border-[#10b981]/20 rounded-2xl p-5 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl pointer-events-auto">
          <div className="space-y-2">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Packages
            </a>
            <a
              href="#brochure"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Brochure (PDF)
            </a>
            <a
              href="#how-we-work"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              FAQ
            </a>
            <a
              href="#socials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Socials
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Contact
            </a>
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 rounded-full bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] text-center text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Register Brand
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
