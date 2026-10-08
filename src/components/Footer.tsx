import React from "react";
import { DigitalDartsLogo } from "./DigitalDartsLogo";
import { MapPin, Phone, Mail, ArrowUp, ArrowUpRight } from "lucide-react";
import { TEKHPORTAL_SERVICES } from "../data/tekhportalData";

interface FooterProps {
  onOpenAudit?: () => void;
  onOpenServices?: () => void;
  onNavigateToService?: (serviceSlug: string) => void;
}

const FOOTER_SOCIAL_TEXT_LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/tekh_portal"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tekhportal/"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC4JtvFLyIrzne_TBK-iyHzg"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61552701975439"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/919066234321"
  }
];

export const Footer: React.FC<FooterProps> = ({
  onNavigateToService
}) => {
  return (
    <footer className="w-full bg-[#07382c] text-white pt-10 sm:pt-14 pb-8 sm:pb-10 border-t border-[#0c4e3e]">
      {/* Full-width container with balanced edge padding */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Main 4-Column Grid tailored for Single Landing Page & Service Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-[#0c4e3e]/80">
          
          {/* Column 1: Brand Info & Tagline (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <DigitalDartsLogo light />
            
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal max-w-sm">
              Tekhportal is Bengaluru's premier digital marketing agency. We engineer high-intent SEO search, profitable Google &amp; Meta Ads, and high-converting web experiences.
            </p>
          </div>

          {/* Column 2: Dedicated Growth Service Pages (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#a7f3d0]">
              Dedicated Service Pages
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {TEKHPORTAL_SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      if (onNavigateToService) {
                        onNavigateToService(s.id);
                      } else {
                        window.location.hash = `/services/${s.id}`;
                      }
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="hover:text-[#10b981] transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                  >
                    <span className="text-[#10b981] group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="group-hover:underline">{s.shortTitle || s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Channels & Quick Nav (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#a7f3d0]">
              Social Channels
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              {FOOTER_SOCIAL_TEXT_LINKS.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#10b981] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#10b981] group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="font-semibold text-white group-hover:text-[#10b981]">{soc.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#a7f3d0]">
              Connect With Us
            </h4>
            
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#10b981] shrink-0" />
                <a href="mailto:tekhportal@gmail.com" className="hover:text-[#10b981] transition-colors">
                  tekhportal@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#10b981] shrink-0" />
                <a href="https://wa.me/919066234321" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition-colors font-medium">
                  +91 90662 34321 (WhatsApp)
                </a>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://wa.me/919066234321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-500/30 text-[11px] font-bold transition-colors"
              >
                <span>Direct WhatsApp Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar spanning full width */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Tekhportal. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span>Bengaluru, India · Digital Marketing</span>
            <a href="#top" className="hover:text-[#10b981] transition-colors font-semibold flex items-center gap-1">
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
