import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const prizes = [
  { event: "DyanamiCAD", amount: "₹3,750" },
  { event: "PAPER PRESENTATION", amount: "₹3,250" },
  { event: "TECH EVENTS", amount: "₹2,250" },
];

const PrizePoolWidget = () => (
  <motion.div
    className="w-64 mechanical-border rounded-lg p-3 bg-card/80 backdrop-blur-sm"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.6 }}
  >
    <div className="flex items-center gap-2 mb-3">
      <Trophy className="w-3.5 h-3.5 text-primary" />
      <span className="text-[10px] font-display tracking-[0.2em] text-primary/80">PRIZE POOL</span>
    </div>
    <div className="space-y-2">
      {prizes.map((p) => (
        <div key={p.event} className="flex items-center justify-between">
          <span className="text-xs font-mono text-secondary-foreground/70">{p.event}</span>
          <span className="text-xs font-display text-primary">{p.amount}</span>
        </div>
      ))}
    </div>
    <div className="mt-2 pt-2 border-t border-border/30 text-center">
      <span className="text-[10px] font-mono text-muted-foreground">TOTAL: ₹14,000+</span>
    </div>
  </motion.div>
);

export default PrizePoolWidget;
