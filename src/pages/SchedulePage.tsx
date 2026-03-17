import { motion } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomDock from "@/components/BottomDock";

const scheduleData = [
  { time: "09:00 AM", title: "INAUGURATION CEREMONY", venue: "MAIN AUDITORIUM", type: "ceremony" },
  { time: "09:30 AM", title: "PAPER PRESENTATION", venue: "CAD LAB: CONF. HALL", type: "tech" },
  { time: "09:30 AM", title: "COMPONENT MESHING", venue: "MECH BLOCK (S1)", type: "tech" },
  { time: "09:30 AM", title: "RAPID RUMBLE", venue: "MECH BLOCK (S4)", type: "nontech" },
  { time: "10:00 AM", title: "FRAME FLUX", venue: "MECH BLOCK (S2)", type: "nontech" },
  { time: "10:00 AM", title: "DYANAMICAD", venue: "CAD LAB", type: "tech" },
  { time: "01:00 PM", title: "LUNCH BREAK", venue: "CANTEEN", type: "break" },
  { time: "02:00 PM", title: "BRAIN SPARKS", venue: "MECH BLOCK (S1)", type: "tech" },
  { time: "02:00 PM", title: "CRICKET ARENA", venue: "MECH BLOCK (S4)", type: "nontech" },
  { time: "02:00 PM", title: "RETRO RACERS", venue: "MECH BLOCK (S5)", type: "tech" },
  { time: "02:00 PM", title: "OTAKU CLASH", venue: "CAD LAB", type: "nontech" },
  { time: "04:00 PM", title: "PRIZE DISTRIBUTION", venue: "MAIN AUDITORIUM", type: "ceremony" },
];

const SchedulePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background relative pb-[80px]">
      <div className="flex items-center gap-3 p-4 border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-20">
        <motion.button
          onClick={() => navigate("/home")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-card"
        >
          <ArrowLeft className="w-4 h-4 text-primary" />
        </motion.button>
        <div>
          <h1 className="font-display text-xs tracking-[0.2em] text-primary font-bold">
            SYSTEM SCHEDULE
          </h1>
          <span className="text-[8px] font-mono text-muted-foreground">// TIMELINE</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-border/60" />
          
          <div className="space-y-3 pb-8">
            {scheduleData.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-3 items-start relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex flex-col items-center z-10 pt-1.5">
                  <div className={`w-3 h-3 rounded-full border-2 ${
                    item.type === "break" ? "border-muted-foreground bg-muted" : "border-primary bg-primary/20 shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                  }`} />
                </div>
                <div className="flex-1 p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[11px] text-primary font-bold bg-primary/10 px-1.5 py-0.5 rounded whitespace-nowrap">{item.time}</span>
                    <span className="text-[8px] font-display tracking-widest text-muted-foreground uppercase">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xs tracking-wider text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[9px] font-mono text-muted-foreground uppercase">{item.venue}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <BottomDock />
    </div>
  );
};

export default SchedulePage;