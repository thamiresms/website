"use client";

import * as React from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VoiceDemoProps {
  audioSrc: string;
  className?: string;
}

export function VoiceDemo({ audioSrc, className }: VoiceDemoProps) {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const animationRef = React.useRef<number>();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [barHeights, setBarHeights] = React.useState<number[]>([]);

  // Generate initial bar heights
  const baseHeights = React.useMemo(() => {
    return Array.from({ length: 35 }, () => Math.random() * 0.5 + 0.2);
  }, []);

  // Animate bars when playing
  React.useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setBarHeights(
          baseHeights.map((h, i) => {
            const time = Date.now() / 1000;
            const wave = Math.sin(time * 3 + i * 0.3) * 0.15;
            const pulse = Math.sin(time * 8 + i * 0.5) * 0.1;
            return Math.min(1, Math.max(0.1, h + wave + pulse));
          })
        );
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();
    } else {
      setBarHeights(baseHeights);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, baseHeights]);

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
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const heights = barHeights.length > 0 ? barHeights : baseHeights;

  return (
    <div className={cn("relative", className)}>
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Main container - Sierra style */}
      <div className="bg-neutral-100 rounded-2xl overflow-hidden">
        {/* Waveform visualization area */}
        <div className="aspect-[4/3] flex items-center justify-center p-8">
          <div className="flex items-end justify-center gap-[5px] h-28 w-full max-w-md">
            {heights.map((height, i) => {
              const barProgress = i / heights.length;
              const isBeforePlayhead = barProgress <= progress;
              
              return (
                <motion.div
                  key={i}
                  className="w-[6px] rounded-full"
                  initial={false}
                  animate={{
                    height: `${height * 100}%`,
                    backgroundColor: isBeforePlayhead ? "#60a5fa" : "#d1d5db",
                    opacity: isBeforePlayhead ? 1 : 0.6,
                  }}
                  transition={{
                    height: { duration: 0.1, ease: "easeOut" },
                    backgroundColor: { duration: 0.2 },
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Controls bar */}
        <div className="px-6 pb-6 flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="h-11 w-11 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-neutral-700" />
            ) : (
              <Play className="h-5 w-5 text-neutral-700 ml-0.5" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="h-11 w-11 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-neutral-700" />
            ) : (
              <Volume2 className="h-5 w-5 text-neutral-700" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Static waveform placeholder when no audio is loaded
export function WaveformPlaceholder({ className }: { className?: string }) {
  const bars = React.useMemo(() => {
    return Array.from({ length: 35 }, () => Math.random() * 0.5 + 0.2);
  }, []);

  return (
    <div className={cn("bg-neutral-100 rounded-2xl overflow-hidden", className)}>
      <div className="aspect-[4/3] flex items-center justify-center p-8">
        <div className="flex items-end justify-center gap-[5px] h-28 w-full max-w-md">
          {bars.map((height, i) => (
            <div
              key={i}
              className="w-[6px] rounded-full bg-neutral-300"
              style={{ height: `${height * 100}%`, opacity: 0.5 }}
            />
          ))}
        </div>
      </div>
      <div className="px-6 pb-6 flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-neutral-200 flex items-center justify-center">
          <Play className="h-5 w-5 text-neutral-400 ml-0.5" />
        </div>
        <div className="h-11 w-11 rounded-full bg-neutral-200 flex items-center justify-center">
          <Volume2 className="h-5 w-5 text-neutral-400" />
        </div>
      </div>
    </div>
  );
}

