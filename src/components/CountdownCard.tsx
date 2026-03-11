import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SYMPOSIUM_DATE = new Date("2026-03-18T09:00:00");

const SegmentDigit = ({ value, label }: { value: string; label: string }) => (
  // flex-1 allows the boxes to automatically divide the available horizontal space equally
  <div className="flex flex-col items-center flex-1 min-w-0">
    <div className="bg-muted/60 border border-border rounded-md w-full py-[clamp(0.4rem,2.5cqw,1.5rem)] flex justify-center shadow-inner">
      <span className="segment-display text-[clamp(1.1rem,6.5cqw,4.5rem)] font-display font-bold text-primary leading-none">
        {value}
      </span>
    </div>
    <span className="text-[clamp(0.5rem,2.2cqw,1rem)] font-display tracking-widest text-muted-foreground mt-[clamp(0.2rem,1.5cqw,1rem)]">
      {label}
    </span>
  </div>
);

const CountdownCard = () => {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", mins: "00", secs: "00" });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = Math.max(0, SYMPOSIUM_DATE.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        mins: String(mins).padStart(2, "0"),
        secs: String(secs).padStart(2, "0"),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      // The style block below turns this div into a self-measuring container
      className="mechanical-border rounded-lg p-[clamp(0.75rem,4cqw,3rem)] w-full"
      style={{ containerType: "inline-size" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center gap-[clamp(0.5rem,2cqw,1rem)] mb-[clamp(0.75rem,4cqw,2rem)]">
        <div 
          className="rounded-full bg-primary animate-pulse" 
          style={{ width: 'clamp(6px, 1.5cqw, 16px)', height: 'clamp(6px, 1.5cqw, 16px)' }} 
        />
        <span className="font-display tracking-[0.3em] text-primary/70 text-[clamp(0.55rem,2.5cqw,1rem)]">
          T-MINUS COUNTDOWN
        </span>
      </div>
      
      <div className="flex justify-center items-start gap-[clamp(0.25rem,1.5cqw,2rem)] w-full">
        <SegmentDigit value={timeLeft.days} label="DAYS" />
        <span className="segment-display text-[clamp(1.1rem,6.5cqw,4.5rem)] text-primary/50 leading-none mt-[clamp(0.4rem,2.5cqw,1.5rem)]">:</span>
        <SegmentDigit value={timeLeft.hours} label="HRS" />
        <span className="segment-display text-[clamp(1.1rem,6.5cqw,4.5rem)] text-primary/50 leading-none mt-[clamp(0.4rem,2.5cqw,1.5rem)]">:</span>
        <SegmentDigit value={timeLeft.mins} label="MIN" />
        <span className="segment-display text-[clamp(1.1rem,6.5cqw,4.5rem)] text-primary/50 leading-none mt-[clamp(0.4rem,2.5cqw,1.5rem)]">:</span>
        <SegmentDigit value={timeLeft.secs} label="SEC" />
      </div>
    </motion.div>
  );
};

export default CountdownCard;