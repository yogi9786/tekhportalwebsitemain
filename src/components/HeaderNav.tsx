import React, { useState } from "react";
import { DigitalDartsLogo } from "./DigitalDartsLogo";
import { Menu, X } from "lucide-react";

interface HeaderNavProps {
  onOpenAudit: () => void;
  onOpenServices?: () => void;
  onNavigateToService?: (serviceSlug: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenAudit
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-2 sm:pt-2.5 pb-1 px-3 sm:px-6 pointer-events-none bg-transparent transition-all">
      {/* Boxed Floating Pill with Green Translucent Blur */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-12.5 sm:min-h-14 py-1 sm:py-1.5 flex items-center justify-between bg-[#07382c]/95 backdrop-blur-md border border-[#10b981]/25 rounded-full shadow-lg shadow-[#07382c]/20 relative z-10 transition-all pointer-events-auto">

        {/* Brand Logo in Light Mode (White Text) */}
        <div className="relative z-10 py-0.5">
          <DigitalDartsLogo light />
        </div>

        {/* Center Desktop Navigation Links in White (>= 1280px) */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs lg:text-[13px] font-semibold text-white">
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

        {/* Right CTA Button & Mobile/Tablet Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center justify-center px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#edf5ef] hover:bg-[#07382c] text-[#07382c] hover:text-[#edf5ef] border border-[#edf5ef]/40 hover:border-[#10b981] text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer shrink-0"
          >
            Register
          </button>

          {/* Mobile/Tablet Menu Toggle Button (< 1280px) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer with Matching Green Translucent Blur (< 1280px) */}
      {isMobileMenuOpen && (
        <div className="xl:hidden max-w-6xl mx-auto mt-2 bg-[#07382c]/95 backdrop-blur-xl border border-[#10b981]/20 rounded-2xl p-4 sm:p-5 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl pointer-events-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-left">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-xl text-sm font-semibold text-white hover:text-[#10b981] hover:bg-white/5 transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-xl text-sm font-semibold text-white hover:text-[#10b981] hover:bg-white/5 transition-colors"
            >
              Packages
            </a>
            <a
              href="#brochure"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-1.5 py-2 px-3 rounded-xl text-sm font-semibold text-white hover:text-[#10b981] hover:bg-white/5 transition-colors"
            >
              <span>Brochure</span>
              <span className="text-[9px] font-bold bg-[#fbb753] text-[#07382c] px-1.5 py-0.5 rounded-full uppercase">PDF</span>
            </a>
            <a
              href="#how-we-work"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-xl text-sm font-semibold text-white hover:text-[#10b981] hover:bg-white/5 transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-xl text-sm font-semibold text-white hover:text-[#10b981] hover:bg-white/5 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#socials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-xl text-sm font-semibold text-white hover:text-[#10b981] hover:bg-white/5 transition-colors"
            >
              Socials
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-xl text-sm font-semibold text-white hover:text-[#10b981] hover:bg-white/5 transition-colors"
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
              className="w-full py-2.5 rounded-full bg-[#edf5ef] hover:bg-[#07382c] text-[#07382c] hover:text-[#edf5ef] border border-[#edf5ef]/40 hover:border-[#10b981] text-center text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
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
