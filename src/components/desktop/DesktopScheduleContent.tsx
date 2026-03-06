import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const scheduleData = [
  { time: "09:00", title: "INAUGURATION CEREMONY", venue: "MAIN AUDITORIUM", type: "ceremony" },
  { time: "10:00", title: "TECHNICAL EVENTS BEGIN", venue: "LABS & HALLS", type: "tech" },
  { time: "11:30", title: "WORKSHOP SESSION I", venue: "LAB-C3", type: "workshop" },
  { time: "13:00", title: "LUNCH BREAK", venue: "CANTEEN", type: "break" },
  { time: "14:00", title: "NON-TECH EVENTS", venue: "OPEN GROUND", type: "nontech" },
  { time: "15:30", title: "WORKSHOP SESSION II", venue: "SMART-LAB", type: "workshop" },
  { time: "16:30", title: "PRIZE DISTRIBUTION", venue: "MAIN AUDITORIUM", type: "ceremony" },
  { time: "17:30", title: "VALEDICTORY & CLOSE", venue: "MAIN AUDITORIUM", type: "ceremony" },
];

const DesktopScheduleContent = () => (
  <div className="p-8 overflow-y-auto scrollbar-hide h-full">
    <div className="space-y-4">
      {scheduleData.map((item, i) => (
        <motion.div key={i} className="flex gap-6 items-center p-5 rounded-lg border border-border/50 bg-card/30 hover:border-primary/30 transition-colors"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
          <span className="font-mono text-lg text-primary font-bold w-20">{item.time}</span>
          <div className="w-2.5 h-2.5 rounded-full border-2 border-primary bg-primary/20" />
          <div className="flex-1">
            <span className="font-display text-base tracking-wider text-foreground">{item.title}</span>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground">{item.venue}</span>
            </div>
          </div>
          <span className="text-[9px] font-display tracking-widest text-muted-foreground uppercase">{item.type}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default DesktopScheduleContent;
