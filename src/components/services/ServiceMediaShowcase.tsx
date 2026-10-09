import React, { useState } from "react";
import type { ServiceVideoProof, ServiceImageProof } from "../../types/serviceDetail";
import { Play, Film, X } from "lucide-react";

interface ServiceMediaShowcaseProps {
  videoProof: ServiceVideoProof;
  imageProofs: ServiceImageProof[];
  serviceTitle: string;
  onOpenRegister: () => void;
}

export const ServiceMediaShowcase: React.FC<ServiceMediaShowcaseProps> = ({
  videoProof,
  imageProofs,
  serviceTitle
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#07382c] text-white py-10 sm:py-14 md:py-18 border-b border-[#0c4e3e]">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#a7f3d0] bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2">
            <Film className="w-3.5 h-3.5 text-[#10b981]" />
            Visual Evidence
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-black text-white tracking-tight uppercase">
            SEE {serviceTitle} IN ACTION<span className="text-[#10b981]">.</span>
          </h2>
        </div>

        {/* Structured Grid: 1 Reel Video (9:16) + 2 Visual Output Images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center justify-center">
          
          {/* Left: Reel Video Player (9:16 Aspect Ratio) */}
          <div className="md:col-span-5 flex justify-center">
            <div 
              className="relative aspect-9/16 w-full max-w-70 sm:max-w-77.5 rounded-2xl sm:rounded-3xl overflow-hidden bg-black border-2 border-[#10b981]/40 shadow-2xl group cursor-pointer"
              onClick={() => setIsVideoModalOpen(true)}
            >
              {videoProof.videoUrl ? (
                <video
                  src={videoProof.videoUrl}
                  poster={videoProof.thumbnailUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <img
                  src={videoProof.thumbnailUrl}
                  alt={videoProof.title || serviceTitle}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />

              {/* Centered Play Trigger */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsVideoModalOpen(true);
                  }}
                  className="p-4 sm:p-5 rounded-full bg-[#10b981] text-[#07382c] group-hover:bg-[#fbb753] group-hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer pointer-events-auto"
                  aria-label="Play Reel Video"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: 2 Visual Output Images */}
          <div className="md:col-span-7 flex flex-col gap-3.5 sm:gap-4.5 justify-center">
            {imageProofs.slice(0, 2).map((proof) => (
              <div
                key={proof.id}
                className="relative aspect-video w-full rounded-xl sm:rounded-2xl border border-white/10 hover:border-[#10b981] overflow-hidden group cursor-pointer shadow-lg bg-black"
                onClick={() => setSelectedImage(proof.imageUrl)}
              >
                <img
                  src={proof.imageUrl}
                  alt={proof.title || "Visual Evidence"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Reel Video Modal (9:16 Portrait) */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-85 sm:max-w-100 aspect-9/16 bg-black rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {videoProof.videoUrl ? (
              <video
                src={videoProof.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover rounded-3xl bg-black"
              />
            ) : (
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <img
                  src={videoProof.thumbnailUrl}
                  alt={videoProof.title || serviceTitle}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#10b981] text-[#07382c] flex items-center justify-center shadow-2xl">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="overflow-auto max-h-[85vh] flex items-center justify-center bg-zinc-950 p-2">
              <img
                src={selectedImage}
                alt="Enlarged Proof"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceMediaShowcase;


