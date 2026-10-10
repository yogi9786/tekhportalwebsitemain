import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Maximize2, X } from "lucide-react";

import bengaluruVideo from "../assets/Bengaluru is full of businesses. Make sure your business gets seen. 🚀From building your brand p.mp4";
import growthPartnerVideo from "../assets/🚀 We’re Not Just an Agency… We’re Your Complete Growth Partner!At TekhPortal, we don’t just del.mp4";
import uxUiVideo from "../assets/✨ Modern UX & UI Design ServicesWe create clean, responsive & user-friendly digital experiences .mp4";
import crmVideo from "../assets/Your Business Deserves a Smarter CRM.Managing leads, customers, follow-ups, and sales shouldn’t .mp4";

interface VideoItem {
  id: string;
  src: string;
}

const REEL_VIDEOS: VideoItem[] = [
  {
    id: "bengaluru",
    src: bengaluruVideo,
  },
  {
    id: "growth-partner",
    src: growthPartnerVideo,
  },
  {
    id: "ux-ui",
    src: uxUiVideo,
  },
  {
    id: "crm",
    src: crmVideo,
  },
];

export const HomeVideoReelsSection: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState<Record<string, boolean>>({});
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    bengaluru: true,
    "growth-partner": true,
    "ux-ui": true,
    crm: true,
  });
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Ensure middle frame is set as cover preview image when metadata is loaded
  const handleLoadedMetadata = (id: string, e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration && isFinite(video.duration) && video.duration > 0 && !hasStarted[id]) {
      video.currentTime = video.duration / 2;
    }
  };

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video && video.duration && isFinite(video.duration) && video.duration > 0 && !hasStarted[id]) {
        video.currentTime = video.duration / 2;
      }
    });
  }, [hasStarted]);

  const handleTogglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause any other video that might be playing
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }

      // If playing for the first time from the middle cover preview, start from beginning (0s)
      if (!hasStarted[id]) {
        video.currentTime = 0;
        setHasStarted((prev) => ({ ...prev, [id]: true }));
      }

      video.play().then(() => {
        setPlayingId(id);
      }).catch((err) => {
        console.error("Playback error:", err);
      });
    }
  };

  const handleToggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMutedStates((prev) => ({ ...prev, [id]: nextMuted }));
  };

  return (
    <section className="w-full bg-[#f4f9f5] py-12 sm:py-16 md:py-20 border-b border-[#07382c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#07382c] bg-[#dbeee1] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border border-[#07382c]/10 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
            Growth in Action
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-[#07382c] tracking-tight uppercase">
            SEE HOW WE SCALE BRANDS<span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#07382c]/75 mt-2.5 max-w-xl mx-auto font-medium">
            From viral brand visibility and modern design to full-funnel lead automation—watch our quick breakdowns.
          </p>
        </div>

        {/* 4 Clean Video Reels Grid (2 Columns on Mobile, 4 Columns on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 items-center justify-center max-w-6xl mx-auto">
          {REEL_VIDEOS.map((item) => {
            const isPlaying = playingId === item.id;
            const isMuted = mutedStates[item.id] ?? true;

            return (
              <div
                key={item.id}
                className="group relative aspect-9/16 w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-black border-2 border-[#07382c]/15 hover:border-[#10b981] transition-colors duration-200 shadow-lg cursor-pointer select-none"
                onClick={() => handleTogglePlay(item.id)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[item.id] = el;
                  }}
                  src={item.src}
                  loop
                  muted={isMuted}
                  playsInline
                  autoPlay={false}
                  preload="auto"
                  onLoadedMetadata={(e) => handleLoadedMetadata(item.id, e)}
                  onLoadedData={(e) => handleLoadedMetadata(item.id, e)}
                  onPlay={() => setPlayingId(item.id)}
                  onPause={() => {
                    if (playingId === item.id) setPlayingId(null);
                  }}
                  className="w-full h-full object-cover"
                />

                {/* Top-Right: Expand to Modal */}
                <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-20">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      videoRefs.current[item.id]?.pause();
                      setPlayingId(null);
                      setModalVideo(item);
                    }}
                    className="p-1 sm:p-1.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white/90 hover:text-white border border-white/15 transition-colors cursor-pointer shadow-md"
                    title="Expand Video"
                    aria-label="Expand Video"
                  >
                    <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>

                {/* Small Manual Play/Pause Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-15">
                  {!isPlaying ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTogglePlay(item.id);
                      }}
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#10b981] hover:bg-[#fbb753] text-[#07382c] flex items-center justify-center shadow-lg transition-colors cursor-pointer pointer-events-auto"
                      aria-label="Play video"
                    >
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-0.5" />
                    </button>
                  ) : (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTogglePlay(item.id);
                        }}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer pointer-events-auto border border-white/20"
                        aria-label="Pause video"
                      >
                        <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Bottom-Right: Small Sound Toggle Button */}
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 z-20">
                  <button
                    type="button"
                    onClick={(e) => handleToggleMute(item.id, e)}
                    className="p-1.5 sm:p-2 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer shadow-md active:scale-95"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10b981]" />
                    ) : (
                      <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10b981] animate-pulse" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Expanded Modal Player */}
      {modalVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
          onClick={() => setModalVideo(null)}
        >
          <div 
            className="relative w-full max-w-85 sm:max-w-100 aspect-9/16 bg-black rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalVideo(null)}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <video
              src={modalVideo.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover rounded-3xl bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeVideoReelsSection;
