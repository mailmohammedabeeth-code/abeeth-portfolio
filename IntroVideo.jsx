import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, ChevronRight, Play } from 'lucide-react';

// In-memory module-level session variable.
// Resets on page reload/refresh, but stays true during client-side route navigation.
// Never uses localStorage or sessionStorage.
let introHasCompletedThisSession = false;

export function hasIntroPlayed() {
  return introHasCompletedThisSession;
}

export function markIntroAsPlayed() {
  introHasCompletedThisSession = true;
}

export default function IntroVideo({ onComplete }) {
  const videoRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [requiresUserInteraction, setRequiresUserInteraction] = useState(false);

  // Complete intro transition and notify parent
  const handleComplete = useCallback((immediate = false) => {
    markIntroAsPlayed();

    if (videoRef.current) {
      videoRef.current.pause();
    }

    if (immediate) {
      if (onComplete) onComplete();
      return;
    }

    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  }, [onComplete]);

  // Lock background scrolling during intro
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Initialize and attempt video autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Autoplay prevented by browser:', err);
        setRequiresUserInteraction(true);
      });
    }

    // Safety fallback: if video hasn't ended after 12s, reveal homepage
    const safetyTimer = setTimeout(() => {
      handleComplete(false);
    }, 12000);

    return () => clearTimeout(safetyTimer);
  }, [handleComplete]);

  // Update progress bar
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      setProgress(pct);
    }
  };

  // Video ended naturally
  const handleVideoEnded = () => {
    handleComplete(false);
  };

  // Graceful fallback if video fails to load
  const handleVideoError = (e) => {
    console.warn('Intro video error encountered, revealing portfolio homepage:', e);
    handleComplete(true);
  };

  // Skip Intro button clicked
  const handleSkipClick = () => {
    handleComplete(true);
  };

  // Sound toggle control
  const toggleSound = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const newMutedState = !isMuted;
    video.muted = newMutedState;
    setIsMuted(newMutedState);
    setHasInteracted(true);

    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  // Handle manual play if browser blocked autoplay
  const handleManualPlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setRequiresUserInteraction(false);
      }).catch(() => {});
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#000000] flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#000000' }}
    >
      {/* Cinematic Top-Left Branding */}
      <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-20 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D0D0D]/80 border border-[#292929] backdrop-blur-md text-xs font-mono shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-pulse" />
        <span className="text-white font-bold tracking-wider">MOHAMMED ABEETH</span>
        <span className="text-[#888888] hidden sm:inline">// PORTFOLIO INTRO</span>
      </div>

      {/* Top-Right: Minimal & Elegant SKIP INTRO Button */}
      <button
        onClick={handleSkipClick}
        className="absolute top-5 right-5 sm:top-7 sm:right-7 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0D0D]/80 hover:bg-[#171717] border border-[#292929] hover:border-[#FF453A] text-xs font-mono text-white font-bold transition-all duration-300 shadow-xl backdrop-blur-md group"
        title="Skip intro and open homepage"
        aria-label="Skip Intro"
      >
        <span>SKIP INTRO</span>
        <ChevronRight className="w-4 h-4 text-[#FF453A] group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Center Cinematic Video Container */}
      <div className="relative w-full h-full flex items-center justify-center px-2 py-4">
        <video
          ref={videoRef}
          src="/videos/portfolio-intro.mp4"
          className="w-full h-full max-w-full max-h-full object-contain pointer-events-auto"
          autoPlay
          muted={isMuted}
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          onError={handleVideoError}
        />

        {/* User Interaction Overlay (only if browser blocked autoplay) */}
        {requiresUserInteraction && (
          <div 
            onClick={handleManualPlay}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 cursor-pointer backdrop-blur-sm"
          >
            <div className="w-16 h-16 rounded-full bg-[#FF453A] text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,69,58,0.5)] transform hover:scale-110 transition-transform">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
            <span className="mt-4 text-xs font-mono uppercase tracking-widest text-white font-bold">
              Click to Start Intro
            </span>
          </div>
        )}
      </div>

      {/* Bottom-Left: Sound ON/OFF Control */}
      <button
        onClick={toggleSound}
        className="absolute bottom-6 left-6 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0D0D0D]/80 hover:bg-[#171717] border border-[#292929] hover:border-[#FF453A] text-xs font-mono text-white transition-all duration-300 shadow-xl backdrop-blur-md group"
        title={isMuted ? "Turn Sound ON" : "Turn Sound OFF"}
        aria-label={isMuted ? "Turn Sound ON" : "Turn Sound OFF"}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-[#FF453A]" />
            <span className="text-[#B3B3B3] group-hover:text-white transition-colors">SOUND: OFF</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-[#FF453A] animate-pulse" />
            <span className="text-white font-bold">SOUND: ON</span>
          </>
        )}
      </button>

      {/* Bottom Edge Cinematic Red Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#171717] z-20 overflow-hidden">
        <div
          className="h-full bg-[#FF453A] transition-[width] duration-150 ease-linear shadow-[0_0_8px_#FF453A]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

