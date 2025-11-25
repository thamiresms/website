"use client";

import * as React from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function TaylorVoiceDemo() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const animationRef = React.useRef<number>();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [animatedHeights, setAnimatedHeights] = React.useState<number[]>([]);

  // Generate waveform pattern similar to Sierra's - dots and bars mixed
  const waveformData = React.useMemo(() => {
    const count = 50;
    return Array.from({ length: count }, (_, i) => {
      const position = i / count;
      // Create natural waveform with speech-like patterns
      const speechPattern = Math.sin(position * Math.PI * 6) * 0.3;
      const variation = Math.sin(position * Math.PI * 12) * 0.15;
      const base = 0.2 + Math.random() * 0.5;
      return Math.min(1, Math.max(0.08, base + speechPattern + variation));
    });
  }, []);

  // Animate the waveform when playing
  React.useEffect(() => {
    if (isPlaying) {
      let lastTime = 0;
      const animate = (time: number) => {
        if (time - lastTime > 60) {
          lastTime = time;
          setAnimatedHeights(
            waveformData.map((h, i) => {
              const t = time / 1000;
              // Organic pulsing animation
              const wave1 = Math.sin(t * 5 + i * 0.25) * 0.15;
              const wave2 = Math.sin(t * 8 + i * 0.4) * 0.1;
              return Math.min(1, Math.max(0.08, h + wave1 + wave2));
            })
          );
        }
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setAnimatedHeights(waveformData);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, waveformData]);

  // Audio event handlers
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress(audio.currentTime / audio.duration);
      }
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (e) {
      console.error("Audio playback failed:", e);
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const heights = animatedHeights.length > 0 ? animatedHeights : waveformData;

  return (
    <div className="relative">
      <audio ref={audioRef} src="/audio/taylor_demo.mp3" preload="auto" />

      {/* Main container - clean Sierra style */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200/60">
        {/* Waveform visualization area */}
        <div className="h-[400px] flex items-center justify-center px-12 py-8">
          <div className="flex items-center justify-center gap-[3px] h-32 w-full">
            {heights.map((height, i) => {
              const barProgress = i / heights.length;
              const isBeforePlayhead = barProgress <= progress;
              const isSmall = height < 0.2;
              
              return (
                <div
                  key={i}
                  className="rounded-full transition-colors duration-200"
                  style={{
                    width: isSmall ? '4px' : '4px',
                    height: isSmall ? '4px' : `${Math.max(8, height * 100)}%`,
                    backgroundColor: isBeforePlayhead ? '#93c5fd' : '#e5e7eb',
                    opacity: isBeforePlayhead ? 1 : 0.7,
                    transform: isPlaying && Math.abs(barProgress - progress) < 0.05 
                      ? 'scaleY(1.1)' 
                      : 'scaleY(1)',
                    transition: 'transform 0.1s ease-out',
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Controls bar */}
        <div className="px-8 py-6 flex items-center gap-4 border-t border-neutral-100">
          <button
            onClick={togglePlay}
            className="h-12 w-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-all duration-200 active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-neutral-600" />
            ) : (
              <Play className="h-5 w-5 text-neutral-600 ml-0.5" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="h-12 w-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-all duration-200 active:scale-95"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-neutral-600" />
            ) : (
              <Volume2 className="h-5 w-5 text-neutral-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
