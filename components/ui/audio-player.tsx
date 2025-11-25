"use client";

import * as React from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  src: string;
  className?: string;
}

export function AudioPlayer({ src, className }: AudioPlayerProps) {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  // Generate random bar heights for the waveform visualization
  const bars = React.useMemo(() => {
    return Array.from({ length: 40 }, () => Math.random() * 0.7 + 0.3);
  }, []);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div className={cn("relative", className)}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Main container */}
      <div className="bg-neutral-100 rounded-2xl p-8 aspect-[4/3] flex flex-col">
        {/* Waveform area */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-[3px] h-24">
            {bars.map((height, i) => {
              const barProgress = i / bars.length;
              const isActive = barProgress <= progress;
              const isNearPlayhead = Math.abs(barProgress - progress) < 0.05;
              
              return (
                <div
                  key={i}
                  className={cn(
                    "w-[6px] rounded-full transition-all duration-150",
                    isActive ? "bg-blue-400" : "bg-neutral-300",
                    isNearPlayhead && isPlaying && "scale-110"
                  )}
                  style={{
                    height: `${height * 100}%`,
                    opacity: isActive ? 1 : 0.5,
                    transform: isPlaying && isNearPlayhead 
                      ? `scaleY(${1 + Math.sin(Date.now() / 100) * 0.2})` 
                      : undefined,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={togglePlay}
            className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-neutral-700" />
            ) : (
              <Play className="h-4 w-4 text-neutral-700 ml-0.5" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-neutral-700" />
            ) : (
              <Volume2 className="h-4 w-4 text-neutral-700" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Animated waveform that pulses when playing
export function AnimatedWaveform({ isPlaying }: { isPlaying: boolean }) {
  const bars = React.useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      height: Math.random() * 0.6 + 0.4,
      delay: i * 0.05,
    }));
  }, []);

  return (
    <div className="flex items-center justify-center gap-[4px] h-20">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={cn(
            "w-[5px] rounded-full bg-blue-400 transition-all",
            isPlaying ? "animate-pulse" : ""
          )}
          style={{
            height: `${bar.height * 100}%`,
            animationDelay: `${bar.delay}s`,
            opacity: 0.4 + bar.height * 0.6,
          }}
        />
      ))}
    </div>
  );
}

