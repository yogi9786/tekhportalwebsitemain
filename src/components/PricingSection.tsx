import React from "react";
import { PRICING_PLANS } from "../data/tekhportalData";
import { Check, ArrowRight, Zap } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="w-full bg-[#07382c] text-white py-8 sm:py-10 border-t border-b border-[#0c4e3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Section Header: Just 'Pricing' */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-7">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-white tracking-tight uppercase">
            Pricing
          </h2>
        </div>

        {/* 3 Clean, Complete Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-[#0b4839] border-2 border-[#fbb753] shadow-2xl lg:-translate-y-1"
                    : "bg-[#07382c]/90 border border-white/15 hover:border-white/30 shadow-lg"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#fbb753] text-[#07382c] text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Price */}
                  <div className="pb-4 border-b border-white/10">
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-0.5 font-normal">
                      {plan.subtitle}
                    </p>

                    <div className="mt-3.5 flex items-baseline gap-1.5">
                      <span className={`text-3xl sm:text-4xl font-black tracking-tight ${isPopular ? "text-[#fbb753]" : "text-white"}`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-zinc-300 font-medium">
                        / {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Complete Feature List (All Items Displayed) */}
                  <ul className="py-4 space-y-2 text-xs text-zinc-200">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isPopular ? "text-[#fbb753]" : "text-[#10b981]"}`} />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clean CTA Button */}
                <div className="pt-4 border-t border-white/10 mt-2">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-2.5 sm:py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? "bg-[#fbb753] hover:bg-white text-[#07382c] font-black shadow-lg"
                        : "bg-white/10 hover:bg-[#10b981] hover:text-[#07382c] text-white border border-white/20"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
