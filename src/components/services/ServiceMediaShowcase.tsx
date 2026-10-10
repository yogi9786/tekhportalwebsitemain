import React, { useState, useRef, useEffect } from "react";
import type { ServiceVideoProof, ServiceImageProof } from "../../types/serviceDetail";
import { Play, Film, X, Volume2, VolumeX, Maximize2 } from "lucide-react";
import seoReelVideo from "../../assets/tekhportal seo .mp4";

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeVideoUrl = videoProof.videoUrl || seoReelVideo;

  // Auto-play muted as soon as the page opens or when service changes
  useEffect(() => {
    setIsPlaying(true);
    setIsMuted(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Autoplay waiting for user gesture:", err);
          setIsPlaying(false);
        });
      }
    }
  }, [activeVideoUrl]);

  // Tap video to toggle play / pause
  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Tap sound button to toggle mute / unmute without pausing
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

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

        {/* Structured Grid: 1 Reel Video (9:16) + 2 Visual Output Images (Beside each other on Mobile & Desktop) */}
        <div className="grid grid-cols-12 gap-2.5 sm:gap-6 items-center justify-center">
          
          {/* Left: Reel Video Player (9:16 Aspect Ratio) */}
          <div className="col-span-5 md:col-span-5 flex justify-center w-full">
            <div 
              className="relative aspect-9/16 w-full max-w-full sm:max-w-77.5 rounded-xl sm:rounded-3xl overflow-hidden bg-black border-2 border-[#10b981]/40 shadow-xl sm:shadow-2xl group cursor-pointer select-none"
              onClick={handleTogglePlay}
            >
              <video
                ref={videoRef}
                src={activeVideoUrl}
                poster={videoProof.thumbnailUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Bottom-Right: Sound Toggle Button (Tap to Unmute / Mute) */}
              <div className="absolute bottom-2 right-2 sm:bottom-3.5 right-3.5 z-20">
                <button
                  type="button"
                  onClick={handleToggleMute}
                  className="px-1.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/75 hover:bg-black/95 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1 sm:gap-1.5 border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
                  aria-label={isMuted ? "Unmute reel audio" : "Mute reel audio"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10b981]" />
                      <span className="text-[10px] sm:text-[11px] font-medium tracking-wide hidden sm:inline">Tap to Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10b981] animate-pulse" />
                      <span className="text-[10px] sm:text-[11px] font-medium tracking-wide hidden sm:inline">Mute</span>
                    </>
                  )}
                </button>
              </div>

              {/* Top-Right: Fullscreen / Modal Expand Button */}
              <div className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 z-20">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsVideoModalOpen(true);
                  }}
                  className="p-1 sm:p-2 rounded-full bg-black/65 hover:bg-black/90 backdrop-blur-md text-white/90 hover:text-white border border-white/15 transition-all cursor-pointer shadow-lg active:scale-95"
                  aria-label="Expand Reel Video"
                  title="Expand Video"
                >
                  <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              </div>

              {/* Paused Overlay (ONLY visible when paused by user - no black matte overlay when playing) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all duration-200 pointer-events-none z-10">
                  <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-[#10b981] text-[#07382c] flex items-center justify-center shadow-xl sm:shadow-2xl shadow-emerald-500/40">
                    <Play className="w-4 h-4 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                  </div>
                  <span className="mt-1 sm:mt-2.5 text-[8px] sm:text-[11px] font-bold text-white bg-black/70 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider backdrop-blur-sm border border-white/10">
                    Resume
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: 2 Visual Output Images Beside the Reel */}
          <div className="col-span-7 md:col-span-7 flex flex-col gap-2 sm:gap-4.5 justify-center w-full">
            {imageProofs.slice(0, 2).map((proof) => (
              <div
                key={proof.id}
                className="relative aspect-video w-full rounded-lg sm:rounded-2xl border border-white/10 hover:border-[#10b981] overflow-hidden group cursor-pointer shadow-md sm:shadow-lg bg-black"
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

            {activeVideoUrl ? (
              <video
                src={activeVideoUrl}
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


