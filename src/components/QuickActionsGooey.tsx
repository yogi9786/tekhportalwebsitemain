import React, { useState } from "react";
import { Liquid } from "liquid-gooey";
import { Sparkles, X, Zap, Building2, MessageCircle } from "lucide-react";

interface QuickActionsGooeyProps {
  onOpenAudit: () => void;
  onOpenRegister: () => void;
}

export const QuickActionsGooey: React.FC<QuickActionsGooeyProps> = ({
  onOpenAudit,
  onOpenRegister
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto select-none">
      <Liquid blur={6} contrast={18} fill="#07382c" shadow="0 10px 25px rgba(0,0,0,0.3)">
        {/* Sub-item 1: Free Audit */}
        <Liquid.Item
          x={isOpen ? 0 : 0}
          y={isOpen ? -130 : 0}
          transition="bouncy"
          className={isOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"}
        >
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenAudit();
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#07382c] text-[#a7f3d0] hover:text-white border border-[#10b981]/40 text-xs font-bold shadow-lg transition-colors cursor-pointer whitespace-nowrap"
            title="Claim Free Audit"
          >
            <Zap className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Free Growth Audit</span>
          </button>
        </Liquid.Item>

        {/* Sub-item 2: Register Brand */}
        <Liquid.Item
          x={isOpen ? 0 : 0}
          y={isOpen ? -75 : 0}
          transition="bouncy"
          delay={isOpen ? 40 : 0}
          className={isOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"}
        >
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenRegister();
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#07382c] text-white hover:text-[#a7f3d0] border border-[#10b981]/40 text-xs font-bold shadow-lg transition-colors cursor-pointer whitespace-nowrap"
            title="Register Organization / Brand"
          >
            <Building2 className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Register Brand</span>
          </button>
        </Liquid.Item>

        {/* Sub-item 3: WhatsApp Chat */}
        <Liquid.Item
          x={isOpen ? -145 : 0}
          y={isOpen ? 0 : 0}
          transition="bouncy"
          delay={isOpen ? 60 : 0}
          className={isOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"}
        >
          <a
            href="https://wa.me/919876543210?text=Hi%20Tekhportal%20team,%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20marketing%20services"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#07382c] text-emerald-300 hover:text-white border border-[#10b981]/40 text-xs font-bold shadow-lg transition-colors cursor-pointer whitespace-nowrap"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#10b981]" />
            <span>WhatsApp Us</span>
          </a>
        </Liquid.Item>

        {/* Main Trigger Button */}
        <Liquid.Item x={0} y={0} transition="bouncy">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 px-4 py-3 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer border ${
              isOpen
                ? "bg-[#07382c] border-[#10b981]"
                : "bg-[#07382c] hover:bg-[#0c4e3e] border-[#10b981]/50 hover:border-[#10b981]"
            }`}
            aria-label="Toggle Growth Actions"
          >
            {isOpen ? (
              <>
                <X className="w-4 h-4 text-[#10b981]" />
                <span className="text-[#a7f3d0]">Close</span>
              </>
            ) : (
              <>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#a7f3d0]" />
                <span>Growth Desk</span>
              </>
            )}
          </button>
        </Liquid.Item>
      </Liquid>
    </div>
  );
};
