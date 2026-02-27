import { Trophy } from "lucide-react";

const prizes = [
  { event: "CAD WARFARE", first: "₹10,000", second: "₹5,000" },
  { event: "ROBO CLASH", first: "₹15,000", second: "₹7,500" },
  { event: "BRIDGE BUILDER", first: "₹8,000", second: "₹4,000" },
  { event: "ANSYS SIM LAB", first: "₹12,000", second: "₹6,000" },
];

const PrizesContent = () => (
  <div>
    <div className="flex items-center gap-2 mb-4">
      <Trophy className="w-4 h-4 text-primary" />
      <span className="font-display text-xs tracking-[0.2em] text-primary font-bold">PRIZE POOL MANIFEST</span>
    </div>
    <div className="space-y-3">
      {prizes.map((p) => (
        <div key={p.event} className="mechanical-border rounded-lg p-3">
          <span className="text-[11px] font-display tracking-wider text-primary block mb-2">{p.event}</span>
          <div className="flex gap-6 text-[10px] font-mono">
            <span className="text-primary">1ST: {p.first}</span>
            <span className="text-secondary-foreground/70">2ND: {p.second}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 text-center">
      <span className="text-[9px] font-mono text-muted-foreground">TOTAL PRIZE POOL: ₹67,500+</span>
    </div>
  </div>
);

export default PrizesContent;
