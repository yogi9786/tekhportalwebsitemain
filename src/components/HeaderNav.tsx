import React, { useState } from "react";
import { DigitalDartsLogo } from "./DigitalDartsLogo";
import { Menu, X } from "lucide-react";

interface HeaderNavProps {
  onOpenAudit: () => void;
  onOpenServices?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenAudit
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full pt-2.5 sm:pt-3.5 pb-1 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
      {/* Boxed Floating Pill with Green Translucent Blur */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-15 sm:min-h-17 py-1.5 sm:py-2 flex items-center justify-between bg-[#07382c]/85 backdrop-blur-xl border border-[#10b981]/25 rounded-full shadow-lg shadow-[#07382c]/20 relative z-10 transition-all pointer-events-auto">
        
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
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            Free Growth Audit
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
              Services (12 Solutions)
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Packages &amp; Pricing
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
              How We Work (Client Roadmap)
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Frequently Asked Questions (FAQ)
            </a>
            <a
              href="#socials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Official Social Channels
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-white hover:text-[#10b981]"
            >
              Contact &amp; Bengaluru Office
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
              Claim Free Growth Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
