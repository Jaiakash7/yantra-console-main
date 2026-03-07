import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const scheduleData = [
  { time: "09:00 AM", title: "INAUGURATION CEREMONY", venue: "MAIN AUDITORIUM", type: "ceremony" },
  { time: "09:30 AM", title: "PAPER PRESENTATION", venue: "CAD LAB: CONFERENCE HALL", type: "tech" },
  { time: "09:30 AM", title: "COMPONENT MESHING", venue: "MECH BLOCK 2ND FLOOR (S1)", type: "tech" },
  { time: "09:30 AM", title: "RAPID RUMBLE", venue: "MECH BLOCK 2ND FLOOR (S4)", type: "nontech" },
  { time: "10:00 AM", title: "FRAME FLUX", venue: "MECH BLOCK 2ND FLOOR (S2)", type: "nontech" },
  { time: "11:00 AM", title: "DYANAMICAD", venue: "CAD LAB", type: "tech" },
  { time: "01:00 PM", title: "LUNCH BREAK", venue: "CANTEEN", type: "break" },
  { time: "02:00 PM", title: "BRAIN SPARKS", venue: "MECH BLOCK 2ND FLOOR (S1)", type: "tech" },
  { time: "02:00 PM", title: "CRICKET ARENA", venue: "MECH BLOCK (S4)", type: "nontech" },
  { time: "02:00 PM", title: "RETRO RACERS", venue: "MECH BLOCK 2ND FLOOR (S5)", type: "tech" },
  { time: "02:00 PM", title: "OTAKU CLASH", venue: "CAD LAB", type: "nontech" },
  { time: "04:00 PM", title: "PRIZE DISTRIBUTION & VALEDICTORY", venue: "MAIN AUDITORIUM", type: "ceremony" },
];

const DesktopScheduleContent = () => (
  <div className="h-full flex flex-col bg-background relative">
    {/* Header */}
    <div className="flex items-center gap-2 p-4 border-b border-border/50 bg-muted/10 sticky top-0 z-10">
      <Clock className="w-4 h-4 text-primary animate-pulse" />
      <span className="font-display text-sm tracking-widest text-primary">EVENT TIMELINE</span>
    </div>

    <div className="p-8 overflow-y-auto scrollbar-hide flex-1">
      <div className="space-y-4 max-w-4xl mx-auto">
        {scheduleData.map((item, i) => (
          <motion.div 
            key={i} 
            className="flex gap-6 items-center p-5 rounded-lg border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all cursor-default group"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: i * 0.04 }}
          >
            <span className="font-mono text-xl text-primary font-bold w-24 tracking-tight group-hover:scale-105 transition-transform origin-left whitespace-nowrap">{item.time}</span>
            <div className={`w-3 h-3 rounded-full border-2 shrink-0 ${item.type === 'break' ? 'border-muted-foreground bg-muted' : 'border-primary bg-primary/20 group-hover:shadow-[0_0_12px_rgba(var(--primary),0.6)] transition-shadow'}`} />
            
            <div className="flex-1 min-w-0">
              <span className="font-display text-lg tracking-wider text-foreground group-hover:text-primary transition-colors truncate block">{item.title}</span>
              <div className="flex items-center gap-2 mt-1.5">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-sm font-mono text-muted-foreground uppercase truncate">{item.venue}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end shrink-0">
              <span className="text-[10px] font-display tracking-widest text-muted-foreground uppercase border border-border/50 px-2 py-1 rounded bg-background/50">{item.type}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default DesktopScheduleContent;