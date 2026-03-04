import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import yantraLogo from "@/assets/yantra-logo.jpeg";
import desktopVideo1 from "@/assets/lg.mp4";
interface Props {
  onBoot: () => void;
}

const DesktopLockScreen = ({ onBoot }: Props) => {
  const [booting, setBooting] = useState(false);

  const handleBoot = () => {
    setBooting(true);
    setTimeout(onBoot, 1800);
  };

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      {/* Blueprint grid background */}
       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
     <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={desktopVideo1} type="video/mp4" />
        </video>
        </div>

      <AnimatePresence>
        {!booting ? (
          <motion.div
            className="flex flex-col items-center gap-8 relative z-10"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/40 gold-glow"
              animate={{ filter: ["drop-shadow(0 0 15px hsl(43 100% 50% / 0.3))", "drop-shadow(0 0 30px hsl(43 100% 50% / 0.6))", "drop-shadow(0 0 15px hsl(43 100% 50% / 0.3))"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img src={yantraLogo} alt="Yantra 2K26" className="w-full h-full object-cover" />
            </motion.div>

            <div className="text-center">
              <h1 className="font-display text-2xl tracking-[0.3em] gold-text font-bold">YANTRA 2K26</h1>
             
            </div>

            <motion.button
              onClick={handleBoot}
             className="px-8 py-3 rounded-lg border border-zinc-800 bg-black font-display text-xs tracking-[0.2em] text-white hover:bg-zinc-900 transition-colors black-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CLICK TO BOOT SYSTEM
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col items-center gap-6 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
            >
              <img src={yantraLogo} alt="Booting" className="w-full h-full object-cover" />
            </motion.div>
            <span className="font-display text-xs tracking-[0.3em] text-primary animate-pulse">
              BOOTING YANTRA OS...
            </span>
            <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesktopLockScreen;
