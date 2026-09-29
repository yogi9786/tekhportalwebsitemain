import React, { useState } from "react";
import { Mark } from "./Mark";
import { X, Check, ArrowRight, ShieldCheck, Sparkles, Building2, Layers, CheckSquare, Square } from "lucide-react";
import { TEKHPORTAL_SERVICES } from "../data/tekhportalData";

interface RegisterBrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

const ALL_SERVICE_TITLES = TEKHPORTAL_SERVICES.map((s) => s.title);

interface ContentProps {
  onClose: () => void;
  defaultPackage: string;
}

const RegisterBrandModalContent: React.FC<ContentProps> = ({
  onClose,
  defaultPackage
}) => {
  const [formData, setFormData] = useState(() => ({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    selectedPackage: defaultPackage,
    selectedServices:
      defaultPackage === "Starter"
        ? [
            "Branding & Strategic Identity",
            "Graphic Design & Creatives",
            "Website Design & Development",
            "Content Marketing",
            "Search Engine Optimization (SEO)"
          ]
        : ALL_SERVICE_TITLES,
    notes: ""
  }));

  const [submitted, setSubmitted] = useState(false);

  const isAllSelected = formData.selectedServices.length === ALL_SERVICE_TITLES.length;

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setFormData((prev) => ({ ...prev, selectedServices: [] }));
    } else {
      setFormData((prev) => ({ ...prev, selectedServices: [...ALL_SERVICE_TITLES] }));
    }
  };

  const handleToggleService = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceTitle);
      const updated = exists
        ? prev.selectedServices.filter((s) => s !== serviceTitle)
        : [...prev.selectedServices, serviceTitle];
      return { ...prev, selectedServices: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] bg-[#0c0e14] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl text-white flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12151e]">
          <div className="flex items-center gap-3">
            <Mark light size={24} />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbb753] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#fbb753]" /> Partner Onboarding & Registration
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">
                Register Your Brand With Tekhportal
              </h3>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center my-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#fbb753]/20 text-[#fbb753] border border-[#fbb753]/40 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold tracking-tight text-white">
              Registration Successful!
            </h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you for registering{" "}
              <span className="text-[#fbb753] font-bold">
                {formData.organizationName || "your brand"}
              </span>
              . Our growth directors in Bengaluru will curate your customized 360° growth strategy and contact{" "}
              <span className="text-white font-semibold">{formData.contactPerson || "you"}</span> within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs space-y-1 text-zinc-300">
              <p>
                <strong className="text-white">Selected Package:</strong>{" "}
                <span className="text-[#fbb753]">{formData.selectedPackage}</span>
              </p>
              <p>
                <strong className="text-white">Services Included:</strong>{" "}
                <span className="text-zinc-200">
                  {formData.selectedServices.length} of {ALL_SERVICE_TITLES.length} services selected
                </span>
              </p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-6 px-7 py-2.5 rounded-full bg-[#fbb753] hover:bg-[#faaf3a] text-[#1b227c] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg shadow-amber-500/20"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 sm:p-7 space-y-6">
            <p className="text-xs text-zinc-300 leading-relaxed bg-[#141824] p-3.5 rounded-xl border border-white/10">
              Join leading Bengaluru and global brands scaling with Tekhportal. Register your organization below to receive tailored growth proposals, dedicated account managers, and complete full-service packages.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Organization & Contact Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#fbb753] flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" /> 1. Organization & Contact Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                      Name of Organization / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SiriSamruddhi, Gembikes, Varahi..."
                      value={formData.organizationName}
                      onChange={(e) =>
                        setFormData({ ...formData, organizationName: e.target.value })
                      }
                      className="modal-input-gold"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                      Contact Person / Founder *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandeep Kumar"
                      value={formData.contactPerson}
                      onChange={(e) =>
                        setFormData({ ...formData, contactPerson: e.target.value })
                      }
                      className="modal-input-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="founder@brand.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="modal-input-gold"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="modal-input-gold"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                      Website / Social URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="modal-input-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Package Selection */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <label className="text-xs font-bold uppercase tracking-wider text-[#fbb753] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#fbb753]" /> 2. Preferred Growth Tier / Package
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "Starter", label: "Starter", price: "₹25,000/mo" },
                    { id: "Turbo", label: "Turbo", price: "₹55,000/mo" },
                    { id: "Supersonic", label: "Supersonic", price: "Custom Solution" },
                    { id: "Complete 360° Growth Package", label: "Complete 360°", price: "All Services" }
                  ].map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, selectedPackage: pkg.id })
                      }
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        formData.selectedPackage === pkg.id
                          ? "bg-[#1b227c]/60 border-[#fbb753] text-white shadow-md shadow-blue-900/20"
                          : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight flex items-center justify-between">
                        <span>{pkg.label}</span>
                        {formData.selectedPackage === pkg.id && (
                          <Check className="w-3 h-3 text-[#fbb753]" />
                        )}
                      </div>
                      <span className="text-[10px] text-zinc-400 block mt-0.5">{pkg.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* All Services Complete Package Section */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#fbb753] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> 3. All Services & Complete Package Customization
                    </h4>
                    <span className="text-[11px] text-zinc-400">
                      Select required services or opt for the complete all-inclusive package
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleToggleSelectAll}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fbb753]/15 hover:bg-[#fbb753]/25 border border-[#fbb753]/40 text-[#fbb753] text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    {isAllSelected ? (
                      <>
                        <CheckSquare className="w-3.5 h-3.5 text-[#fbb753]" />
                        <span>All 12 Services Selected</span>
                      </>
                    ) : (
                      <>
                        <Square className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Select Complete Package (All 12)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Grid of All 12 Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#12151f] p-3.5 rounded-xl border border-white/10">
                  {TEKHPORTAL_SERVICES.map((service) => {
                    const isChecked = formData.selectedServices.includes(service.title);
                    return (
                      <label
                        key={service.id}
                        className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                          isChecked ? "bg-[#1b227c]/40 text-white" : "text-zinc-400 hover:bg-white/5"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleService(service.title)}
                          className="mt-0.5 rounded border-white/20 text-[#fbb753] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#fbb753]"
                        />
                        <div className="text-xs leading-snug">
                          <span className={`font-semibold ${isChecked ? "text-[#fbb753]" : "text-zinc-300"}`}>
                            {service.title}
                          </span>
                          <span className="block text-[10px] text-zinc-400 line-clamp-1">
                            {service.kicker} · {service.subServices[0]}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Organization Goals / Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your brand goals, target revenue, or specific timeline..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="modal-input-gold"
                />
              </div>

              {/* Submit CTA Bar */}
              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-[#fbb753] shrink-0" />
                  <span>Confidential NDA Guaranteed · Free Growth Roadmap</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full bg-[#fbb753] hover:bg-[#faaf3a] text-[#1b227c] font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <span>Submit Organization Registration</span>
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

export const RegisterBrandModal: React.FC<RegisterBrandModalProps> = ({
  isOpen,
  onClose,
  defaultPackage = "Complete 360° Growth Package"
}) => {
  if (!isOpen) return null;

  return (
    <RegisterBrandModalContent
      key={defaultPackage}
      onClose={onClose}
      defaultPackage={defaultPackage}
    />
  );
};
