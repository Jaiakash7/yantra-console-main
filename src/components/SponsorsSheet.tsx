import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from "lucide-react";
import poorvikaLogo from "@/assets/poorvika-logo.png";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SponsorsSheet = ({ open, onClose }: Props) => (
  <AnimatePresence>
    {open && (
      <>
        <motion.div
          className="absolute inset-0 bg-background/60 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-50 bg-card border-t border-border rounded-t-2xl p-5 max-h-[70%] overflow-y-auto scrollbar-hide"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="y"
          dragConstraints={{ top: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => { if (info.offset.y > 100) onClose(); }}
        >
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30 mx-auto mb-4" />
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-display text-xs tracking-[0.2em] text-primary font-bold">TITLE SPONSOR</span>
            </div>
            <button onClick={onClose}><X className="w-4 h-4 text-muted-foreground" /></button>
          </div>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="mechanical-border rounded-xl p-4 bg-background/50">
              <img src={poorvikaLogo} alt="Poorvika" className="w-32 h-32 object-contain rounded-lg" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-display text-sm tracking-[0.15em] text-foreground font-bold">POORVIKA</h3>
              <span className="text-[9px] font-display tracking-[0.2em] text-primary/80">TITLE SPONSOR</span>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default SponsorsSheet;