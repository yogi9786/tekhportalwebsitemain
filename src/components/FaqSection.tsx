import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What digital marketing services does Tekhportal offer?",
    answer:
      "We offer full-service digital marketing including SEO, Google & Meta Paid Advertising, Custom Website Design & Development, Graphic Design, Video & Reels Production, and Social Media Marketing.",
    category: "Services"
  },
  {
    question: "How quickly can we launch campaigns and see results?",
    answer:
      "Paid advertising campaigns (Google & Meta PPC) can go live within 3 to 7 days, while Search Engine Optimization (SEO) builds compounding organic traffic and authority over 60 to 90 days.",
    category: "Performance"
  },
  {
    question: "Can we choose individual services or full monthly packages?",
    answer:
      "Yes! You can choose individual services (like SEO or Paid Ads) or select a complete monthly digital marketing package tailored to your goals.",
    category: "Pricing"
  },
  {
    question: "How do we get started with Tekhportal?",
    answer:
      "Simply register your brand with us or connect directly on WhatsApp at +91 9066234321. We will discuss your goals and create a custom digital marketing plan for your business.",
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
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07382c]/10 border border-[#07382c]/15 text-[#07382c] text-[11px] font-bold uppercase tracking-wider mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#07382c] tracking-tight uppercase">
            Frequently Asked <span className="text-[#10b981]">Questions</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Quick answers about partnering with Tekhportal for your digital marketing growth.
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
                Talk directly with our Bengaluru digital marketing team.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-center">
            {onOpenAudit && (
              <button
                onClick={onOpenAudit}
                className="px-4 py-2.5 rounded-xl bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                Register Brand
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
