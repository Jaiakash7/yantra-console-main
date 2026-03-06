import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SYMPOSIUM_DATE = new Date("2026-03-18T09:00:00");

const SegmentDigit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-muted/60 border border-border rounded-md px-3 py-2 min-w-[52px] md:min-w-[90px] lg:min-w-[120px] md:px-6 md:py-4 lg:px-8 lg:py-6 flex justify-center">
      <span className="segment-display text-2xl md:text-6xl lg:text-7xl font-display font-bold text-primary">
        {value}
      </span>
    </div>
    <span className="text-[8px] md:text-sm lg:text-base font-display tracking-widest text-muted-foreground mt-1 md:mt-3 lg:mt-4">
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
      className="mechanical-border rounded-lg p-4 md:p-8 lg:p-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6 lg:mb-8">
        <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-primary animate-pulse" />
        <span className="text-[9px] md:text-sm lg:text-base font-display tracking-[0.3em] text-primary/70">
          T-MINUS COUNTDOWN
        </span>
      </div>
      <div className="flex justify-center gap-2 md:gap-6 lg:gap-8">
        <SegmentDigit value={timeLeft.days} label="DAYS" />
        <span className="segment-display text-2xl md:text-6xl lg:text-7xl text-primary/50 self-start mt-2 md:mt-4 lg:mt-6">:</span>
        <SegmentDigit value={timeLeft.hours} label="HRS" />
        <span className="segment-display text-2xl md:text-6xl lg:text-7xl text-primary/50 self-start mt-2 md:mt-4 lg:mt-6">:</span>
        <SegmentDigit value={timeLeft.mins} label="MIN" />
        <span className="segment-display text-2xl md:text-6xl lg:text-7xl text-primary/50 self-start mt-2 md:mt-4 lg:mt-6">:</span>
        <SegmentDigit value={timeLeft.secs} label="SEC" />
      </div>
    </motion.div>
  );
};

export default CountdownCard;