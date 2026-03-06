import { useState } from "react";
import { motion } from "framer-motion";
import { icons } from "lucide-react";
import { Wrench, Gamepad2, ArrowLeft, Clock, MapPin, Users, Phone } from "lucide-react";
import { techEvents, nonTechEvents, contacts, prizeMap, type EventData } from "@/data/eventsData";

const DesktopEventsContent = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  if (selectedEvent) {
    const LucideIcon = icons[selectedEvent.icon as keyof typeof icons];
    const prizes = selectedEvent.type === "technical" && selectedEvent.category !== "none"
      ? prizeMap[selectedEvent.category]
      : null;

    return (
      <motion.div
        className="p-8 h-full overflow-y-auto scrollbar-hide"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={() => setSelectedEvent(null)}
          className="flex items-center gap-2 mb-6 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO HUB
        </button>

        <div className="flex gap-5 mb-6">
          <div className="w-16 h-16 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center">
            {LucideIcon && <LucideIcon className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" strokeWidth={1.5} />}
          </div>
          <div>
            <h2 className="font-display text-lg tracking-wider text-primary font-bold">{selectedEvent.title}</h2>
            <div className="flex gap-4 mt-2 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary/60" />{selectedEvent.duration}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary/60" />{selectedEvent.venue}</span>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-primary/60" />{selectedEvent.teamSize}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-foreground/70 mb-6 leading-relaxed">{selectedEvent.description}</p>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="text-xs font-display tracking-[0.3em] text-muted-foreground block mb-3">GUIDELINES</span>
            <div className="space-y-2">
              {selectedEvent.guidelines.map((g, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-xs font-mono text-primary/60 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-foreground/60 leading-relaxed">{g}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {prizes && (
              <div>
                <span className="text-xs font-display tracking-[0.3em] text-muted-foreground block mb-3">PRIZES</span>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "🥇", sub: "GOLD", amount: prizes.first, cls: "border-yellow-500/40" },
                    { label: "🥈", sub: "SILVER", amount: prizes.second, cls: "border-zinc-400/40" },
                    { label: "🥉", sub: "BRONZE", amount: prizes.third, cls: "border-orange-600/40" },
                  ].map((p) => (
                    <div key={p.sub} className={`rounded-lg border p-3 text-center ${p.cls}`}>
                      <span className="text-xl block">{p.label}</span>
                      <span className="text-[8px] font-display tracking-wider text-muted-foreground block">{p.sub}</span>
                      <span className="text-base font-mono text-primary font-bold">{p.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div>
              <span className="text-xs font-display tracking-[0.3em] text-muted-foreground block mb-3">CONTACTS</span>
              {contacts.map((c) => (
                <div key={c.phone} className="flex items-center justify-between bg-zinc-900/40 border border-zinc-800 rounded-lg px-3 py-2 mb-2">
                  <span className="text-sm font-mono text-foreground/80">{c.name}</span>
                  <a href={`tel:${c.phone}`} className="w-7 h-7 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5 text-green-400" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="p-8 h-full flex flex-col justify-center space-y-8">
      {/* Technical */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Wrench className="w-5 h-5 text-primary" />
          <span className="font-display text-sm tracking-[0.3em] text-primary">TECHNICAL EVENTS</span>
          <span className="text-xs font-mono text-muted-foreground ml-auto">5 MODULES</span>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {techEvents.map((e) => (
            <DesktopIconCard key={e.id} event={e} onClick={() => setSelectedEvent(e)} />
          ))}
        </div>
      </div>

      {/* Non-Technical */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Gamepad2 className="w-5 h-5 text-orange-400" />
          <span className="font-display text-sm tracking-[0.3em] text-orange-400">NON-TECHNICAL</span>
          <span className="text-xs font-mono text-muted-foreground ml-auto">4 MODULES</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {nonTechEvents.map((e) => (
            <DesktopIconCard key={e.id} event={e} onClick={() => setSelectedEvent(e)} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopIconCard = ({ event, onClick }: { event: EventData; onClick: () => void }) => {
  const LucideIcon = icons[event.icon as keyof typeof icons];
  const accentColor = event.type === "technical"
    ? "text-primary drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]"
    : "text-orange-400 drop-shadow-[0_0_12px_rgba(255,87,34,0.5)]";

  return (
    <motion.button
      onClick={onClick}
      className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2 p-5 hover:border-primary/40 transition-colors"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {LucideIcon && <LucideIcon className={`w-10 h-10 ${accentColor}`} strokeWidth={1.5} />}
      <span className="font-mono text-[11px] tracking-wider text-foreground/80 text-center leading-tight">{event.title}</span>
      <button
        className="text-[9px] font-mono bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded-md mt-1 hover:bg-primary/20 transition-colors"
        onClick={(e) => { e.stopPropagation(); onClick(); }}
      >
        REGISTER
      </button>
    </motion.button>
  );
};

export default DesktopEventsContent;
