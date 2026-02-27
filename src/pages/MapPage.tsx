import { motion } from "framer-motion";
import BottomDock from "@/components/BottomDock";

const MapPage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
        <h1 className="font-display text-xs tracking-[0.2em] text-primary font-bold mb-1">
          FACILITY MAP
        </h1>
        <span className="text-[8px] font-mono text-muted-foreground block mb-4">
          MSEC CAMPUS // CAD LAYOUT v2.1
        </span>

        {/* Blueprint-style map */}
        <motion.div
          className="rounded-lg border border-blueprint-line/30 p-4 relative overflow-hidden"
          style={{ backgroundColor: "hsl(210 100% 12%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(hsl(210 60% 50% / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(210 60% 50% / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />

          <svg viewBox="0 0 300 400" className="w-full relative z-10">
            {/* Main Building */}
            <rect x="40" y="30" width="120" height="80" fill="none" stroke="hsl(210 60% 60%)" strokeWidth="1.5" />
            <text x="100" y="75" textAnchor="middle" fill="hsl(210 60% 70%)" fontSize="7" fontFamily="monospace">MAIN BLOCK</text>

            {/* Workshop */}
            <rect x="180" y="50" width="80" height="50" fill="none" stroke="hsl(210 60% 60%)" strokeWidth="1.5" />
            <text x="220" y="80" textAnchor="middle" fill="hsl(210 60% 70%)" fontSize="6" fontFamily="monospace">WORKSHOP</text>

            {/* Lab Block */}
            <rect x="40" y="140" width="100" height="60" fill="none" stroke="hsl(210 60% 60%)" strokeWidth="1.5" />
            <text x="90" y="175" textAnchor="middle" fill="hsl(210 60% 70%)" fontSize="6" fontFamily="monospace">CAD LAB</text>

            {/* Seminar Hall */}
            <rect x="160" y="130" width="100" height="50" fill="none" stroke="hsl(43 100% 50%)" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="210" y="158" textAnchor="middle" fill="hsl(43 100% 60%)" fontSize="6" fontFamily="monospace">SEMINAR HALL</text>
            <circle cx="210" cy="168" r="2" fill="hsl(43 100% 50%)" />

            {/* Arena */}
            <rect x="60" y="230" width="80" height="60" fill="none" stroke="hsl(210 60% 60%)" strokeWidth="1.5" />
            <text x="100" y="265" textAnchor="middle" fill="hsl(210 60% 70%)" fontSize="6" fontFamily="monospace">ARENA</text>

            {/* Auditorium */}
            <rect x="170" y="220" width="90" height="70" fill="none" stroke="hsl(210 60% 60%)" strokeWidth="1.5" rx="5" />
            <text x="215" y="260" textAnchor="middle" fill="hsl(210 60% 70%)" fontSize="6" fontFamily="monospace">AUDITORIUM</text>

            {/* Open Ground */}
            <rect x="80" y="320" width="140" height="50" fill="none" stroke="hsl(210 60% 60%)" strokeWidth="1" strokeDasharray="3,3" />
            <text x="150" y="350" textAnchor="middle" fill="hsl(210 60% 70%)" fontSize="7" fontFamily="monospace">OPEN GROUND</text>

            {/* Paths */}
            <line x1="100" y1="110" x2="100" y2="140" stroke="hsl(210 60% 40%)" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="160" y1="75" x2="180" y2="75" stroke="hsl(210 60% 40%)" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="140" y1="170" x2="160" y2="155" stroke="hsl(210 60% 40%)" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="100" y1="200" x2="100" y2="230" stroke="hsl(210 60% 40%)" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="140" y1="260" x2="170" y2="260" stroke="hsl(210 60% 40%)" strokeWidth="1" strokeDasharray="2,2" />

            {/* North arrow */}
            <text x="20" y="20" fill="hsl(210 60% 70%)" fontSize="8" fontFamily="monospace">N↑</text>
          </svg>

          <div className="flex items-center gap-4 mt-3 text-[7px] font-mono text-blueprint-line/70">
            <div className="flex items-center gap-1">
              <div className="w-3 h-px bg-blueprint-line/70" />
              <span>BUILDING</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-px bg-blueprint-line/40 border-t border-dashed" />
              <span>PATH</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>EVENT VENUE</span>
            </div>
          </div>
        </motion.div>
      </div>
      <BottomDock />
    </div>
  );
};

export default MapPage;
