import React, { useState } from "react";
import type { ServiceImageProof } from "../../types/serviceDetail";
import { Camera, Maximize2, CheckCircle2, X } from "lucide-react";

interface ServiceProofVisualGalleryProps {
  imageProofs: ServiceImageProof[];
  serviceTitle: string;
}

export const ServiceProofVisualGallery: React.FC<ServiceProofVisualGalleryProps> = ({
  imageProofs
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#f4f9f5] py-12 sm:py-16 md:py-20 border-b border-[#07382c]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#07382c] bg-[#dbeee1] border border-[#10b981]/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2.5">
            <Camera className="w-3.5 h-3.5 text-[#10b981]" />
            Visual Evidence &amp; Performance Telemetry
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-[#07382c] tracking-tight uppercase">
            LIVE PROOF &amp; DELIVERABLE DASHBOARDS<span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#465f56] mt-2 max-w-xl mx-auto">
            Verifiable analytics telemetry, design system mockups, Core Web Vitals audits, and output specifications.
          </p>
        </div>

        {/* 4 Proof Slots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {imageProofs.map((proof) => (
            <div
              key={proof.id}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-[#07382c]/12 shadow-xs hover:shadow-xl hover:border-[#10b981] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Proof Image Container */}
              <div
                className="relative aspect-16/10 w-full bg-zinc-900 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(proof.imageUrl)}
              >
                <img
                  src={proof.imageUrl}
                  alt={proof.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

                {/* Slot Type Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/15">
                    {proof.slotType}
                  </span>
                </div>

                {/* Metric Badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-[#10b981] text-[#07382c] shadow-md uppercase tracking-wide">
                    {proof.metricBadge}
                  </span>
                </div>

                {/* Enlarge Hover Overlay */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-white/90 text-[#07382c] px-2.5 py-1 rounded-full shadow-md">
                    <Maximize2 className="w-3 h-3" />
                    <span>Inspect Canvas</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1.5">
                    {proof.category}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#07382c] group-hover:text-[#10b981] transition-colors leading-snug mb-2">
                    {proof.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#465f56] leading-relaxed">
                    {proof.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-semibold text-[#07382c]">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                    Verified Technical Specification
                  </span>
                  <button
                    onClick={() => setSelectedImage(proof.imageUrl)}
                    className="text-[#10b981] hover:underline cursor-pointer"
                  >
                    View Full Size →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-[#0a1410] flex items-center justify-between border-b border-white/10">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Verifiable Performance Proof &amp; Output Canvas
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-auto max-h-[80vh] flex items-center justify-center bg-zinc-950 p-2">
              <img
                src={selectedImage}
                alt="Enlarged Visual Proof"
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceProofVisualGallery;
