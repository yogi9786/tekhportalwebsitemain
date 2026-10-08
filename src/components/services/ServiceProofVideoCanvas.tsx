import React, { useState } from "react";
import type { ServiceVideoProof } from "../../types/serviceDetail";
import { Film, Play, Layers, X } from "lucide-react";

interface ServiceProofVideoCanvasProps {
  videoProof: ServiceVideoProof;
  primaryStatValue: string;
  onOpenAudit: () => void;
}

export const ServiceProofVideoCanvas: React.FC<ServiceProofVideoCanvasProps> = ({
  videoProof,
  primaryStatValue,
  onOpenAudit
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section className="w-full bg-[#07382c] text-white py-12 sm:py-16 md:py-20 border-t border-b border-[#0c4e3e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#a7f3d0] bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2.5">
            <Film className="w-3.5 h-3.5 text-[#10b981]" />
            Video Walkthrough &amp; Proof of Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-white tracking-tight uppercase">
            SEE HOW WE DELIVER <span className="text-[#10b981]">{primaryStatValue}</span> RESULTS<span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-xl mx-auto">
            {videoProof.caption}
          </p>
        </div>

        {/* Video Canvas Box */}
        <div className="relative max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c1310] border-2 border-[#10b981]/30 shadow-2xl group">
          
          {/* Top Video Toolbar */}
          <div className="px-4 sm:px-6 py-3 bg-[#0a1b15] border-b border-white/10 flex items-center justify-between text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-bold text-white text-[11px] sm:text-xs uppercase tracking-wider">
                {videoProof.videoType}
              </span>
              <span className="text-zinc-500 hidden sm:inline">|</span>
              <span className="text-zinc-400 hidden sm:inline truncate max-w-xs">{videoProof.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                {videoProof.duration}
              </span>
              <span className="text-[10px] font-bold bg-[#fbb753] text-[#07382c] px-2 py-0.5 rounded uppercase">
                4K Verified
              </span>
            </div>
          </div>

          {/* Video Player Canvas */}
          <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
            <img
              src={videoProof.thumbnailUrl}
              alt={videoProof.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-102 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30" />

            {/* Play Button Trigger */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="absolute z-20 flex flex-col items-center justify-center gap-2 p-5 sm:p-6 rounded-full bg-[#10b981] text-[#07382c] hover:bg-[#fbb753] hover:scale-110 transition-all duration-300 shadow-2xl shadow-emerald-500/50 cursor-pointer"
              aria-label="Play Proof Video Breakdown"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
            </button>

            {/* Video Slot Canvas Tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold border border-white/15 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Video Demo Canvas Slot</span>
              </span>
            </div>

            {/* Timeline Chapters */}
            <div className="absolute bottom-3 left-4 right-4 z-10 bg-black/80 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/10">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-300 mb-1.5">
                <span className="font-bold text-[#10b981]">Chapters / Timestamps:</span>
                <span className="text-zinc-400">Click to jump</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {videoProof.highlights.map((chapter, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveChapter(idx);
                      setIsVideoModalOpen(true);
                    }}
                    className={`text-left p-1.5 rounded-lg text-[10px] font-medium transition-all truncate cursor-pointer ${
                      activeChapter === idx
                        ? "bg-[#10b981] text-[#07382c] font-bold"
                        : "bg-white/10 hover:bg-white/20 text-zinc-200"
                    }`}
                  >
                    <span className="opacity-75 mr-1 font-mono">{chapter.time}</span>
                    <span>{chapter.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="p-3.5 sm:p-4 bg-[#0a1b15] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
            <p className="text-[11px] sm:text-xs">
              💡 <strong className="text-zinc-200">Video Canvas Slot:</strong> {videoProof.placeholderNote}
            </p>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="text-[11px] font-bold text-[#10b981] hover:text-[#fbb753] underline cursor-pointer shrink-0"
            >
              Expand Video View →
            </button>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#0c0d12] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="px-5 py-3.5 bg-[#12141c] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span>{videoProof.title}</span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <img
                src={videoProof.thumbnailUrl}
                alt={videoProof.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/60">
                <div className="w-16 h-16 rounded-full bg-[#10b981] text-[#07382c] flex items-center justify-center mb-3 shadow-xl">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {videoProof.title}
                </h4>
                <p className="text-xs text-zinc-300 max-w-md mb-4">
                  {videoProof.caption}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold border border-white/20">
                  <span>Chapter Active: {videoProof.highlights[activeChapter]?.label}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#0a1410] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
              <span>{videoProof.placeholderNote}</span>
              <button
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onOpenAudit();
                }}
                className="px-4 py-1.5 rounded-full bg-[#10b981] text-[#07382c] font-bold uppercase tracking-wider text-[11px] hover:bg-[#fbb753] cursor-pointer"
              >
                Request Custom Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceProofVideoCanvas;
