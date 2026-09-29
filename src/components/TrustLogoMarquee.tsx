import React from "react";

interface TrustLogoMarqueeProps {
  onOpenRegisterModal?: () => void;
}

export const TrustLogoMarquee: React.FC<TrustLogoMarqueeProps> = ({
  onOpenRegisterModal
}) => {
  const brands = [
    "SiriSamruddhi Gold Palace",
    "Bharathvasi Properties",
    "Gembikes",
    "Incredebles",
    "Varahi",
    "Chithrasante",
    "Just Shop",
    "Telecom Housing Welfare Trust"
  ];

  return (
    <section className="w-full bg-[#07382c] text-white py-4 sm:py-5 overflow-hidden border-t border-b border-[#0c4e3e]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Clean Headline */}
        <p className="font-serif italic text-xs sm:text-sm text-[#a7f3d0] font-medium tracking-wide mb-3 sm:mb-4">
          Brands We've Worked With &amp; Scaled
        </p>

        {/* Infinite Marquee with all brands in identical Gembikes font-sans font-black style */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)"
          }}
        >
          <div className="animate-marquee items-center gap-12 sm:gap-16">
            {[0, 1].map((set) => (
              <div
                key={set}
                className="flex items-center gap-12 sm:gap-16 shrink-0"
                aria-hidden={set === 1}
              >
                {brands.map((brandName, idx) => (
                  <div
                    key={`${set}-${idx}`}
                    className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity whitespace-nowrap select-none"
                  >
                    <span className="font-sans font-black text-sm sm:text-base tracking-tight text-white hover:text-[#10b981] transition-colors">
                      {brandName}
                    </span>
                  </div>
                ))}

                {/* "? Your Brand Name" in the same Gembikes font style with logo gold highlight */}
                <button
                  type="button"
                  onClick={onOpenRegisterModal}
                  className="font-sans font-black text-sm sm:text-base tracking-tight text-[#fbb753] hover:text-white transition-colors cursor-pointer whitespace-nowrap select-none opacity-95 hover:opacity-100"
                >
                  ? Your Brand Name
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


