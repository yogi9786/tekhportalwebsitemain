import React, { useState } from "react";
import { Mark } from "./Mark";
import { X, Check, ArrowRight, ShieldCheck } from "lucide-react";

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
    budget: "₹50k - ₹1.5L / mo",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate submission finish
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0e1017] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Audit Request Received!
            </h3>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto">
              Our Bengaluru growth strategists are analyzing your domain (
              <span className="text-emerald-400 font-mono">
                {formData.website || "your website"}
              </span>
              ). We will send your custom audit report within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-emerald-500 text-black font-bold text-sm hover:bg-emerald-400 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Mark light size={24} />
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Tekhportal Growth Diagnostic
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Claim Free Digital Growth Audit
                </h3>
              </div>
            </div>

            <p className="text-xs text-zinc-400 mb-6">
              Get an in-depth audit of your SEO rankings, Google/Meta Ads efficiency, website speed, and conversion funnels from Bengaluru's leading agency.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
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
                  <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
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
                  <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
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
                  <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
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
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
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
                    Search Engine Optimization (SEO) & Audits
                  </option>
                  <option value="Paid Advertising (PPC)">
                    Paid Advertising (Google Ads, Meta & LinkedIn)
                  </option>
                  <option value="Website Design & Development">
                    Website Design & Development
                  </option>
                  <option value="Content Marketing">Content Marketing & Strategy</option>
                  <option value="Graphic Design & Creatives">
                    Graphic Design & Brand Identity
                  </option>
                  <option value="Video Marketing & Reels">
                    Video Marketing & Reels Production
                  </option>
                  <option value="Lead Generation & Funnels">
                    Lead Generation & Sales Funnels
                  </option>
                  <option value="Branding Services">Branding Services</option>
                  <option value="E-commerce Marketing">
                    E-commerce Marketing (Shopify/WooCommerce)
                  </option>
                  <option value="UX/UI Design">UX/UI Design & Prototyping</option>
                  <option value="Complete 360 Growth Package">
                    Complete 360° Growth Package
                  </option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Confidential · No Spam</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  <span>Request Free Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
