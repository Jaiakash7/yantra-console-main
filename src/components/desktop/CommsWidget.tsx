import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const contacts = [
  { name: "SYED NAYEM", number: "9042818580" },
  { name: "SENTHIL", number: "9080191348" },
  { name: "MR. CHIDAMBARAM", number: "9751894475" },
];

const CommsWidget = () => (
  <motion.div
    // Changed w-56 to w-64 to match the PrizePoolWidget
    className="w-64 mechanical-border rounded-lg p-3 bg-card/80 backdrop-blur-sm"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 }}
  >
    <div className="flex items-center gap-2 mb-3">
      {/* Icon sized up from w-3 to w-3.5 */}
      <Phone className="w-3.5 h-3.5 text-primary" />
      {/* Title sized up from text-[8px] to text-[10px] */}
      <span className="text-[10px] font-display tracking-[0.2em] text-primary/80">CONTACTS</span>
      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-auto" />
    </div>
    <div className="space-y-2">
      {contacts.map((c) => (
        <a
          key={c.number}
          href={`tel:${c.number}`}
          className="flex items-center justify-between hover:bg-muted/20 rounded px-1 py-0.5 transition-colors"
        >
          {/* Text sized up to text-xs */}
          <span className="text-xs font-mono text-secondary-foreground/70">{c.name}</span>
          <span className="text-xs font-mono text-primary/80">{c.number}</span>
        </a>
      ))}
    </div>
  </motion.div>
);

export default CommsWidget;