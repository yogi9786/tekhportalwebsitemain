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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("https://formspree.io/f/moevzjdk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          organizationName: formData.organizationName,
          contactPerson: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          selectedPackage: formData.selectedPackage,
          selectedServices: formData.selectedServices.join(", "),
          notes: formData.notes,
          formType: "Full Organization / Package Registration"
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || "Submission failed. Please try again or reach us on WhatsApp.");
      }
    } catch {
      setErrorMsg("Network error. Please check your internet connection or reach us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] bg-[#faf8f5] border border-[#07382c]/15 rounded-2xl sm:rounded-3xl shadow-2xl text-[#07382c] flex flex-col overflow-hidden">
        
        {/* Subtle Dot Pattern Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-35 z-0"
          style={{
            backgroundImage: "radial-gradient(rgba(7, 56, 44, 0.15) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        />

        {/* Modal Header */}
        <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-[#07382c]/10 bg-[#f4efe6]">
          <div className="flex items-center gap-3">
            <Mark size={24} />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#07382c] bg-[#dbeee1] border border-[#10b981]/30 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#10b981]" /> Partner Onboarding & Registration
              </span>
              <h3 className="text-lg sm:text-xl font-sans font-black text-[#07382c] tracking-tight uppercase mt-0.5">
                Register Your Brand With Tekhportal<span className="text-[#10b981]">.</span>
              </h3>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-[#07382c]/5 hover:bg-[#07382c]/10 text-[#465f56] hover:text-[#07382c] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="relative z-10 p-8 sm:p-12 text-center my-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#dbeee1] text-[#07382c] border border-[#10b981]/30 flex items-center justify-center shadow-md">
              <Check className="w-8 h-8 text-[#10b981]" />
            </div>
            <h3 className="text-2xl font-sans font-black tracking-tight text-[#07382c] uppercase">
              Registration Successful!
            </h3>
            <p className="text-xs sm:text-sm text-[#465f56] max-w-md mx-auto leading-relaxed">
              Thank you for registering{" "}
              <span className="text-[#07382c] font-bold">
                {formData.organizationName || "your brand"}
              </span>
              . Our growth directors in Bengaluru will curate your customized 360° growth strategy and contact{" "}
              <span className="text-[#07382c] font-semibold">{formData.contactPerson || "you"}</span> within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-[#f4efe6] border border-[#07382c]/10 max-w-sm mx-auto text-left text-xs space-y-1 text-[#465f56]">
              <p>
                <strong className="text-[#07382c]">Selected Package:</strong>{" "}
                <span className="text-[#07382c] font-semibold">{formData.selectedPackage}</span>
              </p>
              <p>
                <strong className="text-[#07382c]">Services Included:</strong>{" "}
                <span className="text-[#465f56]">
                  {formData.selectedServices.length} of {ALL_SERVICE_TITLES.length} services selected
                </span>
              </p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-6 px-8 py-3 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-[#07382c] text-white font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="relative z-10 flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
            <p className="text-xs text-[#465f56] leading-relaxed bg-[#f2ede4] p-3.5 rounded-xl border border-[#07382c]/10">
              Join leading Bengaluru and global brands scaling with Tekhportal. Register your organization below to receive tailored growth proposals, dedicated account managers, and complete full-service packages.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Organization & Contact Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#07382c] flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#10b981]" /> 1. Organization & Contact Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
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
                      className="modal-input-cream"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
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
                      className="modal-input-cream"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
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
                      className="modal-input-cream"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
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
                      className="modal-input-cream"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
                      Website / Social URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="modal-input-cream"
                    />
                  </div>
                </div>
              </div>

              {/* Package Selection */}
              <div className="space-y-2 pt-2 border-t border-[#07382c]/10">
                <label className="text-xs font-black uppercase tracking-wider text-[#07382c] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#10b981]" /> 2. Preferred Growth Tier / Package
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
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        formData.selectedPackage === pkg.id
                          ? "bg-[#07382c] border-[#07382c] text-white shadow-md"
                          : "bg-white border-[#07382c]/12 text-[#07382c] hover:border-[#10b981] hover:bg-[#f6fbf7]"
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight flex items-center justify-between">
                        <span>{pkg.label}</span>
                        {formData.selectedPackage === pkg.id && (
                          <Check className="w-3.5 h-3.5 text-[#10b981]" />
                        )}
                      </div>
                      <span className={`text-[10px] block mt-1 ${
                        formData.selectedPackage === pkg.id ? "text-emerald-200" : "text-[#5a7369]"
                      }`}>
                        {pkg.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* All Services Complete Package Section */}
              <div className="space-y-3 pt-2 border-t border-[#07382c]/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#07382c] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#10b981]" /> 3. All Services & Complete Package Customization
                    </h4>
                    <span className="text-[11px] text-[#5a7369]">
                      Select required services or opt for the complete all-inclusive package
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleToggleSelectAll}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#dbeee1] hover:bg-[#c9e6d1] border border-[#10b981]/30 text-[#07382c] text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    {isAllSelected ? (
                      <>
                        <CheckSquare className="w-3.5 h-3.5 text-[#10b981]" />
                        <span>All 12 Services Selected</span>
                      </>
                    ) : (
                      <>
                        <Square className="w-3.5 h-3.5 text-[#465f56]" />
                        <span>Select Complete Package (All 12)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Grid of All 12 Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#f4efe6] p-3.5 rounded-xl border border-[#07382c]/10">
                  {TEKHPORTAL_SERVICES.map((service) => {
                    const isChecked = formData.selectedServices.includes(service.title);
                    return (
                      <label
                        key={service.id}
                        className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                          isChecked ? "bg-[#dbeee1] text-[#07382c] font-semibold border border-[#10b981]/30" : "text-[#465f56] hover:bg-white/60"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleService(service.title)}
                          className="mt-0.5 rounded border-[#07382c]/20 text-[#07382c] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#10b981]"
                        />
                        <div className="text-xs leading-snug">
                          <span className={`font-semibold ${isChecked ? "text-[#07382c]" : "text-[#2b443b]"}`}>
                            {service.title}
                          </span>
                          <span className="block text-[10px] text-[#556e64] line-clamp-1">
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
                <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
                  Organization Goals / Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your brand goals, target revenue, or specific timeline..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="modal-input-cream"
                />
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Submit CTA Bar */}
              <div className="pt-3 border-t border-[#07382c]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-[#5a7369]">
                  <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Confidential NDA Guaranteed · Free Growth Roadmap</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-[#07382c] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>Submit Organization Registration</span>
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
