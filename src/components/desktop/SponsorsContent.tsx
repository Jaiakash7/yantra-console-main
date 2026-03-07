import { Award } from "lucide-react";
import poorvikaLogo from "@/assets/poorvika-logo.png";

const SponsorsContent = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="flex items-center gap-2 mb-6">
      <Award className="w-4 h-4 text-primary" />
      <span className="font-display text-xs tracking-[0.2em] text-primary font-bold">POWERED BY</span>
    </div>
    <div className="mechanical-border rounded-2xl p-8 bg-background/40 flex flex-col items-center gap-5 max-w-xs w-full">
      <div className="mechanical-border rounded-xl p-3 bg-card/60">
        <img src={poorvikaLogo} alt="Poorvika" className="w-40 h-40 object-contain rounded-lg" />
      </div>
      <div className="text-center space-y-1.5">
        <h3 className="font-display text-base tracking-[0.15em] text-foreground font-bold">POORVIKA</h3>
        <span className="inline-block px-3 py-1 rounded-full text-[9px] font-display tracking-[0.2em] text-primary bg-primary/10 border border-primary/20">
          TITLE SPONSOR
        </span>
      </div>
    </div>
  </div>
);

export default SponsorsContent;