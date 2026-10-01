import React, { useState } from "react";
import { DigitalDartsLogo } from "./DigitalDartsLogo";
import { X, Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Search Engine Optimization (SEO)"
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: defaultService,
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("https://formspree.io/f/xzezqdrv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formData,
          formType: "Brand Service Registration (Modal)"
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || "Submission failed. Please try again or WhatsApp us directly.");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection or WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#07382c] border border-[#10b981]/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40 flex items-center justify-center shadow-lg">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-sans font-black tracking-tight text-white uppercase">
              Registration Received!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-white">{formData.name}</span>. Our digital marketing team in Bengaluru will review your brand details and reach out on WhatsApp / Email within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-7 py-2.5 rounded-full bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <DigitalDartsLogo light />
            </div>

            <div className="mb-5 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-[#a7f3d0] text-[10px] font-bold uppercase tracking-widest shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#10b981]" />
                <span>Register With Tekhportal</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight uppercase leading-tight">
                Register Your <span className="text-[#10b981]">Brand</span>
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Register your business to start scaling with our digital marketing services across SEO, Google &amp; Meta Ads, Web Design, and Social Media.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10.5px] font-bold text-emerald-200 uppercase tracking-wider block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="modal-input-emerald"
                  />
                </div>

                <div>
                  <label className="text-[10.5px] font-bold text-emerald-200 uppercase tracking-wider block mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="modal-input-emerald"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10.5px] font-bold text-emerald-200 uppercase tracking-wider block mb-1">
                    Website / Brand URL *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="https://yourbrand.com"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    className="modal-input-emerald"
                  />
                </div>

                <div>
                  <label className="text-[10.5px] font-bold text-emerald-200 uppercase tracking-wider block mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="modal-input-emerald"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10.5px] font-bold text-emerald-200 uppercase tracking-wider block mb-1">
                  Primary Focus Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="modal-select-emerald"
                >
                  <option value="Search Engine Optimization (SEO)">
                    Search Engine Optimization (SEO)
                  </option>
                  <option value="Paid Advertising (Google & Meta Ads)">
                    Paid Advertising (Google &amp; Meta Ads)
                  </option>
                  <option value="Website Design & Development">
                    Website Design &amp; Development
                  </option>
                  <option value="Graphic Design & Creatives">
                    Graphic Design &amp; Brand Identity
                  </option>
                  <option value="Video Marketing & Reels">
                    Video Marketing &amp; Reels Production
                  </option>
                  <option value="Social Media Management">
                    Social Media Management
                  </option>
                  <option value="Lead Generation & Funnels">
                    Lead Generation &amp; Sales Funnels
                  </option>
                  <option value="Complete 360° Growth Package">
                    Complete 360° Growth Package
                  </option>
                </select>
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-red-900/60 border border-red-500/40 text-red-200 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-200/80">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                  <span>100% Confidential</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>Register Brand</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditModal;
