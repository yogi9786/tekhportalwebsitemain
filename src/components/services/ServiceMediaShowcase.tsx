import React, { useState } from "react";
import type { ServiceVideoProof, ServiceImageProof } from "../../types/serviceDetail";
import { Play, Film, Layers, Maximize2, X, CheckCircle2 } from "lucide-react";

interface ServiceMediaShowcaseProps {
  videoProof: ServiceVideoProof;
  imageProofs: ServiceImageProof[];
  serviceTitle: string;
  onOpenRegister: () => void;
}

export const ServiceMediaShowcase: React.FC<ServiceMediaShowcaseProps> = ({
  videoProof,
  imageProofs,
  serviceTitle,
  onOpenRegister
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section className="w-full bg-[#07382c] text-white py-10 sm:py-14 md:py-18 border-b border-[#0c4e3e]">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#a7f3d0] bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2">
            <Film className="w-3.5 h-3.5 text-[#10b981]" />
            Proof of Work &amp; Visual Evidence
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-black text-white tracking-tight uppercase">
            SEE {serviceTitle} IN ACTION<span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 max-w-lg mx-auto">
            Live video breakdown and verifiable deliverable dashboards.
          </p>
        </div>

        {/* Structured Grid: 1 Featured Video Player Slot + 2 Visual Output Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Left / Featured: Video Player Canvas (7 cols on Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c1310] border border-[#10b981]/30 shadow-2xl group">
            {/* Top Toolbar */}
            <div className="px-4 py-2.5 bg-[#0a1b15] border-b border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-bold text-white text-[11px] uppercase tracking-wider">
                  {videoProof.videoType}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                  {videoProof.duration}
                </span>
                <span className="text-[10px] font-bold bg-[#fbb753] text-[#07382c] px-2 py-0.5 rounded uppercase">
                  4K
                </span>
              </div>
            </div>

            {/* Video Canvas Slot */}
            <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={videoProof.thumbnailUrl}
                alt={videoProof.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-102 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30" />

              {/* Play Trigger */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute z-20 p-4 sm:p-5 rounded-full bg-[#10b981] text-[#07382c] hover:bg-[#fbb753] hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer"
                aria-label="Play Proof Video"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
              </button>

              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-[10px] font-bold border border-white/15 flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#10b981]" />
                  <span>Video Demo Canvas</span>
                </span>
              </div>

              {/* Chapters Bar */}
              <div className="absolute bottom-2.5 left-3 right-3 z-10 bg-black/80 backdrop-blur-md rounded-xl p-2 border border-white/10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
                  {videoProof.highlights.slice(0, 4).map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveChapter(idx);
                        setIsVideoModalOpen(true);
                      }}
                      className={`text-left p-1 rounded text-[9px] font-medium transition-all truncate cursor-pointer ${
                        activeChapter === idx
                          ? "bg-[#10b981] text-[#07382c] font-bold"
                          : "bg-white/10 hover:bg-white/20 text-zinc-200"
                      }`}
                    >
                      <span className="opacity-75 mr-1 font-mono">{ch.time}</span>
                      <span>{ch.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="p-3 bg-[#0a1b15] border-t border-white/10 flex items-center justify-between text-xs text-zinc-300">
              <span className="text-[11px] truncate max-w-xs">{videoProof.title}</span>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="text-[10px] font-bold text-[#10b981] hover:text-[#fbb753] underline cursor-pointer shrink-0"
              >
                Watch Video →
              </button>
            </div>
          </div>

          {/* Right: 2 Visual Output Proof Cards (5 cols on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {imageProofs.slice(0, 2).map((proof) => (
              <div
                key={proof.id}
                className="bg-[#0b4839] rounded-2xl border border-white/10 hover:border-[#10b981] overflow-hidden transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg"
                onClick={() => setSelectedImage(proof.imageUrl)}
              >
                <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden">
                  <img
                    src={proof.imageUrl}
                    alt={proof.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
                  
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-black/70 text-white border border-white/15">
                      {proof.slotType}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#10b981] text-[#07382c]">
                      {proof.metricBadge}
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-white/90 text-[#07382c] px-2 py-0.5 rounded-full shadow-md">
                      <Maximize2 className="w-2.5 h-2.5" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>

                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#10b981] transition-colors leading-snug mb-1">
                      {proof.title}
                    </h4>
                    <p className="text-[11px] text-zinc-300 leading-snug line-clamp-2">
                      {proof.description}
                    </p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#a7f3d0]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                      Verified Output
                    </span>
                    <span className="text-[#10b981] group-hover:underline">Click to enlarge →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0c0d12] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="px-4 py-3 bg-[#12141c] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm truncate">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span className="truncate">{videoProof.title}</span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <img
                src={videoProof.thumbnailUrl}
                alt={videoProof.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/60">
                <div className="w-14 h-14 rounded-full bg-[#10b981] text-[#07382c] flex items-center justify-center mb-2 shadow-xl">
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                  {videoProof.title}
                </h4>
                <p className="text-xs text-zinc-300 max-w-md mb-3">
                  {videoProof.caption}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/20">
                  <span>Chapter: {videoProof.highlights[activeChapter]?.label}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#0a1410] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
              <span className="text-[11px] truncate">{videoProof.placeholderNote}</span>
              <button
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onOpenRegister();
                }}
                className="px-4 py-1.5 rounded-full bg-[#10b981] text-[#07382c] font-bold uppercase tracking-wider text-[10px] hover:bg-[#fbb753] cursor-pointer shrink-0"
              >
                Register for {serviceTitle}
              </button>
            </div>
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
            className="relative max-w-4xl max-h-[90vh] bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-[#0a1410] flex items-center justify-between border-b border-white/10">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Verifiable Performance Proof &amp; Deliverable Output
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
                alt="Enlarged Proof"
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceMediaShowcase;
