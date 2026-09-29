import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What services are included in Tekhportal's growth solutions?",
    answer:
      "Tekhportal provides end-to-end digital growth across 12 specialized services including Technical SEO, Google & Meta Paid Advertising, High-Speed Web Development, Video Marketing & Reels, Lead Generation Funnels, Brand Strategy, and E-Commerce Scaling.",
    category: "Services"
  },
  {
    question: "How does the Complimentary Growth Roadmap work?",
    answer:
      "Our senior strategists analyze your digital presence across 4 core vectors: SEO ranking keywords, technical website speed & Core Web Vitals, paid ad spend efficiency, and lead conversion bottlenecks. You receive a bespoke, 360° action plan within 24 hours at zero cost or obligation.",
    category: "Audit & Roadmap"
  },
  {
    question: "How quickly will we see measurable results?",
    answer:
      "Performance advertising (Google, Meta, YouTube PPC) and lead funnels typically produce qualified customer inquiries within 7 to 14 days of launch. Search Engine Optimization (SEO) and brand authority build compounding organic pipeline momentum within 60 to 90 days.",
    category: "Performance"
  },
  {
    question: "Can we customize our package or choose individual services?",
    answer:
      "Yes! In addition to our transparent monthly tiers (Starter at ₹25,000/mo and Turbo at ₹55,000/mo), our Supersonic tier offers completely bespoke retainers tailored specifically to your industry, target audience, and business goals.",
    category: "Pricing"
  },
  {
    question: "Will I have a dedicated account manager and regular reporting?",
    answer:
      "Yes. Every client is assigned a dedicated Growth Account Manager at our Bengaluru HQ. You receive continuous campaign optimization, bi-weekly/monthly strategy review calls, and transparent reporting with real-time performance analytics.",
    category: "Support"
  },
  {
    question: "How do we get started with Tekhportal?",
    answer:
      "You can claim your free growth roadmap, book a 15-minute discovery consultation, or connect directly on WhatsApp at +91 9066234321. We will audit your current setup and deliver your tailored strategy within 24 hours.",
    category: "Getting Started"
  }
];

interface FaqSectionProps {
  onOpenAudit?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAudit }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#f4f9f5] py-8 sm:py-12 border-b border-[#07382c]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07382c]/10 border border-[#07382c]/15 text-[#07382c] text-[11px] font-bold uppercase tracking-wider mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#07382c] tracking-tight uppercase">
            Frequently Asked <span className="text-[#10b981]">Questions</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Everything you need to know about partnering with Tekhportal to accelerate your brand's digital pipeline.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#10b981]/40 shadow-md shadow-[#07382c]/5"
                    : "bg-white/80 hover:bg-white border-[#07382c]/10 hover:border-[#07382c]/20 shadow-xs"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                        isOpen
                          ? "bg-[#07382c] text-white"
                          : "bg-[#07382c]/5 text-[#07382c]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#07382c]">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#10b981]/20 text-[#07382c]" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-slate-100/80">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Quick Action Strip */}
        <div className="mt-8 rounded-2xl bg-[#07382c] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-[#10b981]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">
                Have a specific question not covered here?
              </h4>
              <p className="text-[11px] text-emerald-100/80">
                Talk directly with our Bengaluru growth strategists.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-center">
            {onOpenAudit && (
              <button
                onClick={onOpenAudit}
                className="px-4 py-2.5 rounded-xl bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                Claim Free Roadmap
              </button>
            )}
            <a
              href="https://wa.me/919066234321"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold transition-all inline-flex items-center gap-1.5"
            >
              <span>WhatsApp Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
