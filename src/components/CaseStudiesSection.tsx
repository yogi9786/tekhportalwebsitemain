import React from "react";
import { CLIENT_PROOFS } from "../data/tekhportalData";
import { Award, Quote, ArrowRight } from "lucide-react";

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenAudit
}) => {
  const stats = [
    { value: "+380%", label: "Avg ROAS", sublabel: "Google & Meta Ads" },
    { value: "₹18.5 Cr+", label: "Client Revenue", sublabel: "Directly tracked" },
    { value: "150+", label: "Brands Scaled", sublabel: "Bengaluru & Global" },
    { value: "#1", label: "Page 1 Rankings", sublabel: "High-intent keywords" }
  ];

  return (
    <section id="case-studies" className="w-full bg-[#f4f9f5] py-16 sm:py-24 border-b border-[#07382c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#07382c] bg-[#dbeee1] border border-[#10b981]/30 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            <Award className="w-3.5 h-3.5 text-[#10b981]" />
            Measurable Results
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#07382c] tracking-tight">
            Client Growth & Case Proof
          </h2>
        </div>

        {/* 4 Clean Stats with Emerald Accents */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-[#07382c]/12 hover:border-[#10b981]/50 text-center shadow-xs transition-colors"
            >
              <span className="block text-3xl sm:text-4xl font-serif font-bold text-[#07382c] tracking-tight">
                {stat.value}
              </span>
              <strong className="block text-xs sm:text-sm font-bold text-[#14231e] mt-1">
                {stat.label}
              </strong>
              <span className="text-[11px] text-[#526f64] block">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>

        {/* 2 Focused Testimonials */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {CLIENT_PROOFS.slice(0, 2).map((proof) => (
            <div
              key={proof.id}
              className="bg-white rounded-xl p-6 border border-[#07382c]/15 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-500 text-xs">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {proof.metric} · {proof.metricLabel}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-[#10b981]/40 mb-2" />
                <p className="text-xs sm:text-sm text-[#2c443c] leading-relaxed italic mb-4">
                  “Tekhportal transformed our digital marketing. Our organic traffic surged 4x within 5 months, and their Google & Meta PPC management delivered our highest return on ad spend ever.”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-100">
                <img
                  src={proof.avatar}
                  alt={proof.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#10b981]/30"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#14231e]">
                    {proof.name}
                  </h4>
                  <p className="text-[11px] text-[#57756a]">
                    {proof.role} · {proof.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-[#07382c] hover:bg-[#10b981] hover:text-black text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer"
          >
            <span>» GET YOUR FREE GROWTH AUDIT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
