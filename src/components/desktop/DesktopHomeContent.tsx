import { motion } from "framer-motion";
import { BookOpen, Info, ImageIcon, Trophy, Rocket } from "lucide-react";
import CountdownCard from "@/components/CountdownCard";
import { type DesktopApp } from "./DesktopShelf";

interface Props {
  onOpenEvents?: () => void;
  onOpenApp?: (app: DesktopApp) => void;
}

const gridButtons: { icon: typeof BookOpen; label: string; id: DesktopApp }[] = [
  { icon: BookOpen, label: "INSTRUCTION", id: "instruction" },
  { icon: Info, label: "ABOUT", id: "about" },
  { icon: ImageIcon, label: "GALLERY", id: "gallery" },
  { icon: Trophy, label: "PRIZE", id: "prize" },
];

const DesktopHomeContent = ({ onOpenEvents, onOpenApp }: Props) => (
  <div className="p-10 space-y-8 w-full">
    <CountdownCard />

    <div className="grid grid-cols-4 gap-6">
      {gridButtons.map(({ icon: Icon, label, id }) => (
        <motion.button
          key={label}
          onClick={() => onOpenApp?.(id)}
          className="rounded-xl border-2 border-border bg-card/50 flex flex-col items-center justify-center gap-4 py-8 relative overflow-hidden group"
          whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
          whileTap={{ scale: 0.95 }}
          style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,0.4)" }}
        >
          <div className="w-14 h-14 rounded-lg border border-border/50 bg-muted/30 flex items-center justify-center group-hover:border-primary/50 transition-colors">
            <Icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <span className="text-sm font-display tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
            {label}
          </span>
        </motion.button>
      ))}
    </div>

    <motion.button
      onClick={onOpenEvents}
      className="w-full py-6 rounded-xl border-2 border-primary/50 bg-primary/5 flex items-center justify-center gap-3"
      whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
      <Rocket className="w-6 h-6 text-primary" />
      <span className="font-display text-lg tracking-[0.3em] text-primary font-bold">EXPLORE EVENTS</span>
    </motion.button>
  </div>
);

export default DesktopHomeContent;
