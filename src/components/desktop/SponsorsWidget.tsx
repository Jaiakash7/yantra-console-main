import { motion } from "framer-motion";
import { Award } from "lucide-react";
import poorvikaLogo from "@/assets/poorvika-logo.png";

const SponsorsWidget = () => (
  <motion.div
    className="w-56 mechanical-border rounded-lg p-3 bg-card/80 backdrop-blur-sm"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 }}
  >
    <div className="flex items-center gap-2 mb-3">
      <Award className="w-3 h-3 text-primary" />
      <span className="text-[8px] font-display tracking-[0.2em] text-primary/80">TITLE SPONSOR</span>
    </div>
    <div className="flex items-center gap-3">
      <img src={poorvikaLogo} alt="Poorvika" className="w-10 h-10 object-contain rounded" />
      <span className="text-[10px] font-mono text-secondary-foreground/90">POORVIKA</span>
    </div>
  </motion.div>
);

export default SponsorsWidget;