import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import StatusBar from "@/components/StatusBar";

const playIgnitionSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    // Low rumble
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sawtooth";
    osc1.frequency.setValueAtTime(80, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.3);
    gain1.gain.setValueAtTime(0.3, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc1.connect(gain1).connect(ctx.destination);
    osc1.start();
    osc1.stop(ctx.currentTime + 0.5);
    // High whoosh
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(400, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.2);
    gain2.gain.setValueAtTime(0.15, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc2.connect(gain2).connect(ctx.destination);
    osc2.start();
    osc2.stop(ctx.currentTime + 0.3);
  } catch {}
};

const LockScreen = () => {
  const navigate = useNavigate();
  const [slideX, setSlideX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxSlide = 260;

  const handleStart = (clientX: number) => {
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left - 24, maxSlide));
    setSlideX(x);
    if (x >= maxSlide - 10) {
      playIgnitionSound();
      navigate("/home");
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    setSlideX(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-[430px] min-h-screen relative bg-background bg-pattern border-x border-border/30 flex flex-col">
        <StatusBar />
        
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          {/* Logo area */}
          <div className="relative w-56 h-56 rounded-full flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/20 to-transparent" />
            <div className="absolute inset-2 rounded-full bg-card border-2 border-primary/40" />
            <div className="relative z-10 text-center">
              <div className="font-display text-3xl font-bold text-glow text-primary">YANTRA</div>
              <div className="font-display text-5xl font-black text-glow text-primary mt-1">2K26</div>
            </div>
          </div>

          <p className="text-muted-foreground text-xs tracking-[0.3em] mb-16">
            YANTRA 2K26 // MECHANICAL OS v1.0
          </p>
        </div>

        {/* Slide to ignite */}
        <div className="px-8 pb-12">
          <div
            ref={trackRef}
            className="relative h-14 rounded-full bg-card border border-border overflow-hidden"
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-primary/60 text-sm tracking-[0.2em] font-display">SLIDE TO IGNITE</span>
            </div>
            <div
              className="absolute top-1 left-1 w-12 h-12 rounded-full bg-primary flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform"
              style={{ transform: `translateX(${slideX}px)` }}
              onMouseDown={(e) => handleStart(e.clientX)}
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            >
              <Settings size={20} className="text-primary-foreground" />
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground/40 text-[9px] tracking-widest pb-4 px-4">
          PROPERTY OF MEENAKSHI SUNDARAJAN ENGG COLLEGE // DEPT. OF MECH.
        </p>
      </div>
    </div>
  );
};

export default LockScreen;
