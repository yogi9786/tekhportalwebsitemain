import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  MessageSquare
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    service: "Search Engine Optimization (SEO)",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("https://formspree.io/f/xaenlrew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || "Submission error. Please try again or contact us via WhatsApp.");
      }
    } catch {
      setErrorMsg("Unable to send inquiry. Please check your connection or reach us on WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-14 sm:py-20 border-b border-[#07382c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          
          {/* Left Column: Direct Info & Bengaluru Office */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#07382c] bg-[#dbeee1] border border-[#10b981]/30 px-3 py-0.5 rounded-full inline-flex items-center gap-1.5 mb-2.5 shadow-xs">
                <MessageSquare className="w-3 h-3 text-[#10b981]" />
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-[#07382c] tracking-tight uppercase leading-tight">
                LET'S TALK GROWTH<span className="text-[#10b981]">.</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#465f56] leading-relaxed">
                Ready to accelerate your revenue and capture market authority? Speak directly with our Bengaluru growth strategists.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2">
              <a
                href="https://wa.me/919066234321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#edf5ef] hover:bg-[#dcf2e3] border border-[#07382c]/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#07382c] border border-[#07382c]/15 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:border-[#10b981]/40 group-hover:text-[#10b981] transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#465f56] block">
                    Phone & WhatsApp Direct
                  </span>
                  <span className="text-sm font-bold text-[#07382c] group-hover:text-[#10b981] transition-colors">
                    +91 90662 34321
                  </span>
                </div>
              </a>

              <a
                href="mailto:tekhportal@gmail.com"
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#edf5ef] hover:bg-[#dcf2e3] border border-[#07382c]/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#07382c] border border-[#07382c]/15 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:border-[#10b981]/40 group-hover:text-[#10b981] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#465f56] block">
                    Official Email
                  </span>
                  <span className="text-sm font-bold text-[#07382c] group-hover:text-[#10b981] transition-colors">
                    tekhportal@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#edf5ef] border border-[#07382c]/10">
                <div className="w-10 h-10 rounded-xl bg-white text-[#07382c] border border-[#07382c]/15 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#465f56] block">
                    Headquarters
                  </span>
                  <span className="text-xs font-semibold text-[#07382c] leading-relaxed block">
                    Yelahanka, Bengaluru, Karnataka 560064
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#edf5ef] p-6 sm:p-9 rounded-3xl border border-[#07382c]/15 shadow-lg">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#10b981]/20 text-[#07382c] border border-[#10b981]/40 flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#07382c]" />
                </div>
                <h3 className="text-2xl font-sans font-black tracking-tight text-[#07382c] uppercase">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-[#465f56] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-[#07382c]">{formData.fullName}</span>. Our growth team in Bengaluru has received your inquiry and will reach out to you within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      website: "",
                      service: "Search Engine Optimization (SEO)",
                      message: ""
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#07382c] hover:bg-[#10b981] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#07382c]/10 pb-3 mb-4">
                  <h3 className="text-lg font-sans font-black text-[#07382c] tracking-tight uppercase">
                    Request Strategy Consultation
                  </h3>
                  <span className="text-[11px] text-[#465f56]">
                    Fill in your details below for a customized growth assessment.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandeep Kumar"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="contact-form-input"
                    />
                  </div>

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
                      className="contact-form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                      className="contact-form-input"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
                      Website / Brand URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="contact-form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
                    Primary Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="contact-form-select"
                  >
                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                    <option value="Paid Ads (Google & Meta PPC)">Paid Ads (Google & Meta PPC)</option>
                    <option value="Social Media & Performance Marketing">Social Media & Performance Marketing</option>
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="Graphic Design & Video Editing">Graphic Design & Video Editing</option>
                    <option value="Lead Generation & Funnel Engineering">Lead Generation & Funnel Engineering</option>
                    <option value="Complete 360° Growth Package">Complete 360° Growth Package</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#07382c] uppercase tracking-wider block mb-1">
                    Message / Growth Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your brand targets, current acquisition costs, or project scope..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="contact-form-input"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#07382c] hover:bg-[#fbb753] hover:text-[#07382c] disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
