import { motion } from "framer-motion";
import { Clock, MapPin, Users, Wrench, Gamepad2 } from "lucide-react";

interface EventSpec {
  title: string;
  code: string;
  duration: string;
  venue: string;
  teamSize: string;
  description: string;
}

const techEvents: EventSpec[] = [
  { title: "CAD MODELLING", code: "TE-001", duration: "2 HRS", venue: "CAD LAB-1", teamSize: "INDIVIDUAL", description: "Flagship event — precision CAD modeling competition." },
  { title: "BRAIN SPARKS", code: "TE-002", duration: "1.5 HRS", venue: "SEMINAR HALL-B", teamSize: "TEAM OF 2", description: "Rapid-fire technical quiz across mech domains." },
  { title: "PAPER PRESENTATION", code: "TE-003", duration: "3 HRS", venue: "AUDITORIUM", teamSize: "TEAM OF 2", description: "Research paper presentation on emerging topics." },
  { title: "COMPONENT-MESHING", code: "TE-004", duration: "2 HRS", venue: "LAB-C3", teamSize: "TEAM OF 3", description: "Identify, assemble, and mesh components." },
  { title: "RETRO RACERS", code: "TE-005", duration: "2 HRS", venue: "OPEN GROUND", teamSize: "TEAM OF 4", description: "Design and race vintage mechanical vehicles." },
];

const nonTechEvents: EventSpec[] = [
  { title: "FACT FORGE", code: "NT-001", duration: "1 HR", venue: "SEMINAR HALL-A", teamSize: "INDIVIDUAL", description: "General knowledge and lateral thinking quiz." },
  { title: "FRAME FLUX", code: "NT-002", duration: "2 HRS", venue: "MEDIA LAB", teamSize: "TEAM OF 3", description: "Short film / reel making competition." },
  { title: "OTAKU STYLE", code: "NT-003", duration: "2 HRS", venue: "MAIN HALL", teamSize: "INDIVIDUAL", description: "Anime cosplay and trivia showcase." },
  { title: "RAPID RUMBLE", code: "NT-004", duration: "1.5 HRS", venue: "ARENA", teamSize: "TEAM OF 4", description: "Fast-paced multi-round mini-games." },
];

const EventCard = ({ event, index }: { event: EventSpec; index: number }) => (
  <motion.div
    className="p-4 rounded-lg border border-border/50 bg-card/30 hover:border-primary/30 transition-colors"
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -2 }}
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-display text-xs tracking-wider text-primary font-bold">{event.title}</h3>
      <span className="text-[7px] font-mono text-muted-foreground">{event.code}</span>
    </div>
    <p className="text-[10px] text-muted-foreground mb-3">{event.description}</p>
    <div className="flex gap-3 text-[8px] font-mono text-muted-foreground">
      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-primary/60" />{event.duration}</span>
      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-primary/60" />{event.venue}</span>
      <span className="flex items-center gap-1"><Users className="w-3 h-3 text-primary/60" />{event.teamSize}</span>
    </div>
  </motion.div>
);

const DesktopEventsContent = () => (
  <div className="p-6 grid grid-cols-2 gap-6 h-full overflow-y-auto scrollbar-hide">
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Wrench className="w-4 h-4 text-primary" />
        <span className="font-display text-[10px] tracking-[0.3em] text-primary">TECHNICAL EVENTS</span>
        <span className="text-[8px] font-mono text-muted-foreground ml-auto">5 MODULES</span>
      </div>
      <div className="space-y-3">
        {techEvents.map((e, i) => <EventCard key={e.code} event={e} index={i} />)}
      </div>
    </div>
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Gamepad2 className="w-4 h-4 text-orange-400" />
        <span className="font-display text-[10px] tracking-[0.3em] text-orange-400">NON-TECHNICAL</span>
        <span className="text-[8px] font-mono text-muted-foreground ml-auto">4 MODULES</span>
      </div>
      <div className="space-y-3">
        {nonTechEvents.map((e, i) => <EventCard key={e.code} event={e} index={i + 5} />)}
      </div>
    </div>
  </div>
);

export default DesktopEventsContent;
