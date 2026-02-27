import { useState, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { BookOpen, Info, ImageIcon, Trophy, Rocket, Building2, Clock, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CountdownCard from "@/components/CountdownCard";
import DynamicIsland from "@/components/DynamicIsland";
import BottomDock from "@/components/BottomDock";

const gridButtons = [
  { icon: BookOpen, label: "INSTRUCTION", path: "/instruction" },
  { icon: Info, label: "ABOUT", path: "/about" },
  { icon: ImageIcon, label: "GALLERY", path: "/gallery" },
  { icon: Trophy, label: "PRIZE", path: "/prize" },
];

const announcements = [
  { time: "14:32", msg: "Workshop registrations closing in 2 hours" },
  { time: "13:15", msg: "CAD Warfare venue changed to LAB-C4" },
  { time: "11:00", msg: "Inauguration ceremony completed successfully" },
  { time: "09:45", msg: "All systems operational — event day initialized" },
];

const HomePage = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold && page === 0) setPage(1);
    else if (info.offset.x > threshold && page === 1) setPage(0);
  };

  return (
    <div className="flex flex-col h-full relative">
      <div className="px-4 pt-2">
        <DynamicIsland />
      </div>

      {/* Page indicators */}
      <div className="flex justify-center gap-1.5 py-2">
        {[0, 1].map((i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${
            page === i ? "bg-primary w-4" : "bg-muted-foreground/30"
          }`} />
        ))}
      </div>

      {/* Swipeable area */}
      <div className="flex-1 overflow-hidden relative" ref={containerRef}>
        <motion.div
          className="flex h-full"
          animate={{ x: page === 0 ? "0%" : "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {/* PAGE 1 — Main Home */}
          <div className="w-full flex-shrink-0 px-4 pb-2 space-y-4 overflow-y-auto scrollbar-hide">
            <CountdownCard />

            {/* 2x2 Mechanical Switch Grid */}
            <div className="grid grid-cols-2 gap-3">
              {gridButtons.map(({ icon: Icon, label, path }) => (
                <motion.button
                  key={label}
                  onClick={() => navigate(path)}
                  className="aspect-square rounded-xl border-2 border-border bg-card/50 flex flex-col items-center justify-center gap-2 relative overflow-hidden group"
                  whileHover={{ scale: 1.03, borderColor: "hsl(var(--primary))" }}
                  whileTap={{ scale: 0.95 }}
                  style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(255,255,255,0.05)" }}
                >
                  <div className="w-10 h-10 rounded-lg border border-border/50 bg-muted/30 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-[8px] font-display tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                    {label}
                  </span>
                  {/* Corner rivet */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
                </motion.button>
              ))}
            </div>

            {/* Explore Events ignition button */}
            <motion.button
              onClick={() => navigate("/events")}
              className="w-full py-4 rounded-xl border-2 border-primary/50 bg-primary/5 flex items-center justify-center gap-3 relative overflow-hidden"
              whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <Rocket className="w-5 h-5 text-primary" />
              <span className="font-display text-xs tracking-[0.3em] text-primary font-bold">
                EXPLORE EVENTS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
            </motion.button>
          </div>

          {/* PAGE 2 — Widgets */}
          <div className="w-full flex-shrink-0 px-4 pb-2 space-y-4 overflow-y-auto scrollbar-hide">
            {/* Schedule Widget */}
            <motion.button
              onClick={() => navigate("/schedule")}
              className="w-full p-4 rounded-xl border border-border/50 bg-card/50 text-left"
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-display text-[10px] tracking-widest text-primary">SCHEDULE</span>
              </div>
              <div className="space-y-2">
                {["09:00 — INAUGURATION", "10:00 — TECH EVENTS", "14:00 — NON-TECH"].map((t, i) => (
                  <div key={i} className="text-[9px] font-mono text-muted-foreground">{t}</div>
                ))}
              </div>
              <span className="text-[7px] font-display tracking-widest text-primary/60 mt-2 block">TAP TO VIEW FULL →</span>
            </motion.button>

            {/* Sponsors Widget */}
            <div className="p-4 rounded-xl border border-border/50 bg-card/50">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="font-display text-[10px] tracking-widest text-primary">SPONSORS</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["TATA STEEL", "BOSCH", "SKF", "SIEMENS", "ABB", "L&T"].map((s, i) => (
                  <div key={i} className="py-2 rounded-lg border border-border/30 bg-muted/20 flex items-center justify-center">
                    <span className="text-[7px] font-mono text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live System Announcements */}
            <div className="p-4 rounded-xl border border-border/50 bg-card/50">
              <div className="flex items-center gap-2 mb-3">
                <Megaphone className="w-4 h-4 text-orange-400" />
                <span className="font-display text-[10px] tracking-widest text-orange-400">LIVE SYSTEM LOG</span>
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse ml-auto" />
              </div>
              <div className="space-y-2">
                {announcements.map((a, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-[8px] font-mono text-muted-foreground/60 w-10 flex-shrink-0">{a.time}</span>
                    <span className="text-[9px] font-body text-muted-foreground">{a.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomDock />
    </div>
  );
};

export default HomePage;
