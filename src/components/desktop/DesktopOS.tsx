import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Info, ImageIcon, Trophy, Building2 } from "lucide-react";
import DesktopShelf, { type DesktopApp } from "./DesktopShelf";
import AppWindow from "./AppWindow";
import PrizePoolWidget from "./PrizePoolWidget";
import CommsWidget from "./CommsWidget";

import yantraLogo from "@/assets/yantra.mp4";

import DesktopHomeContent from "./DesktopHomeContent";
import DesktopEventsContent from "./DesktopEventsContent";
import DesktopMapContent from "./DesktopMapContent";
import DesktopScheduleContent from "./DesktopScheduleContent";
import DesktopInstructionContent from "./DesktopInstructionContent";
import DesktopAboutContent from "./DesktopAboutContent";
import DesktopGalleryContent from "./DesktopGalleryContent";
import DesktopPrizeContent from "./DesktopPrizeContent";
import SponsorsContent from "./SponsorsContent";

// === Golden Sparks Particle System ===
const GoldenSparks = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-yellow-200 shadow-[0_0_10px_2px_rgba(234,179,8,0.8)]"
        initial={{
          x: `${Math.random() * 100}vw`,
          y: "110vh",
          opacity: 0,
          scale: Math.random() * 1.5 + 0.5,
        }}
        animate={{
          y: "-10vh",
          x: `${Math.random() * 100}vw`,
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 4,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const appMeta: Record<DesktopApp, { title: string; pos: { x: number; y: number }; width?: number; height?: number }> = {
  home: { title: "YANTRA CONSOLE // HOME", pos: { x: 300, y: 80 }, width: 520, height: 560 },
  events: { title: "EVENT MODULES // INDEX", pos: { x: 150, y: 60 }, width: 800, height: 520 },
  map: { title: "FACILITY MAP // RADAR", pos: { x: 200, y: 70 }, width: 800, height: 600 },
  schedule: { title: "SYSTEM SCHEDULE // TIMELINE", pos: { x: 250, y: 90 }, width: 600, height: 480 },
  instruction: { title: "INSTRUCTIONS // PROTOCOL", pos: { x: 350, y: 100 }, width: 500, height: 460 },
  about: { title: "ABOUT // MANIFEST", pos: { x: 320, y: 80 }, width: 500, height: 520 },
  gallery: { title: "GALLERY // ARCHIVE", pos: { x: 180, y: 80 }, width: 700, height: 480 },
  prize: { title: "PRIZE POOL // MANIFEST", pos: { x: 280, y: 70 }, width: 500, height: 520 },
  sponsors: { title: "SPONSORS // REGISTRY", pos: { x: 340, y: 90 }, width: 500, height: 400 },
};

const desktopShortcuts: { id: DesktopApp; icon: typeof BookOpen; label: string }[] = [
  { id: "instruction", icon: BookOpen, label: "Instruction" },
  { id: "about", icon: Info, label: "About" },
  { id: "gallery", icon: ImageIcon, label: "Gallery" },
  { id: "prize", icon: Trophy, label: "Prizes" },
  { id: "sponsors", icon: Building2, label: "Sponsors" },
];

const DesktopOS = () => {
  const [openApps, setOpenApps] = useState<DesktopApp[]>(["home"]);
  const [focusOrder, setFocusOrder] = useState<DesktopApp[]>(["home"]);

  const handleOpen = useCallback((app: DesktopApp) => {
    setOpenApps((prev) => {
      if (prev.includes(app)) return prev;
      const newApps = [...prev, app];
      if (newApps.length > 3) return newApps.slice(newApps.length - 3);
      return newApps;
    });
    setFocusOrder((prev) => {
      const newFocus = [...prev.filter((a) => a !== app), app];
      if (newFocus.length > 3) return newFocus.slice(newFocus.length - 3);
      return newFocus;
    });
  }, []);

  const handleClose = useCallback((app: DesktopApp) => {
    setOpenApps((prev) => prev.filter((a) => a !== app));
    setFocusOrder((prev) => prev.filter((a) => a !== app));
  }, []);

  const handleFocus = useCallback((app: DesktopApp) => {
    setFocusOrder((prev) => [...prev.filter((a) => a !== app), app]);
  }, []);

  const getZIndex = (app: DesktopApp) => 100 + focusOrder.indexOf(app);

  const renderContent = (app: DesktopApp) => {
    switch (app) {
      case "home": return <DesktopHomeContent onOpenEvents={() => handleOpen("events")} onOpenApp={handleOpen} />;
      case "events": return <DesktopEventsContent />;
      case "map": return <DesktopMapContent />;
      case "schedule": return <DesktopScheduleContent />;
      case "instruction": return <DesktopInstructionContent />;
      case "about": return <DesktopAboutContent />;
      case "gallery": return <DesktopGalleryContent />;
      case "prize": return <DesktopPrizeContent />;
      case "sponsors": return <SponsorsContent />;
    }
  };

  return (
    <div className="fixed inset-0 bg-zinc-950 overflow-hidden">
  {/* === VIDEO BACKGROUND & SPARKS SYSTEM === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        
        {/* Centered Video, max 500px wide, slightly faded to act as a watermark */}
        <motion.video 
          autoPlay 
          loop 
          muted 
          playsInline
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.4, scale: 1 }} // You can adjust 0.4 to make it brighter/darker
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-[280vw] max-w-[800px] object-contain mix-blend-screen rounded-xl"
        >
          <source src={yantraLogo} type="video/mp4" />
        </motion.video>
        
        {/* Floating Sparks Effect */}
        <GoldenSparks />

        {/* Radial dark vignette to smoothly fade the edges into the background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.95)_100%)]" />
      </div>

      {/* Desktop shortcuts */}
      <div className="absolute top-6 left-6 flex flex-col gap-4 z-30">
        {desktopShortcuts.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            onClick={() => handleOpen(id)}
            className="flex flex-col items-center gap-1.5 w-16 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 rounded-xl border border-zinc-800/50 bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              <Icon className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[8px] font-display tracking-wider text-zinc-500 group-hover:text-primary transition-colors text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Desktop widgets */}
      <div className="absolute top-6 right-6 space-y-4 z-30 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
        <PrizePoolWidget />
        <CommsWidget />
      </div>

      {/* App windows */}
      <AnimatePresence>
        {openApps.map((app) => (
          <AppWindow
            key={app}
            title={appMeta[app].title}
            zIndex={getZIndex(app)}
            defaultPosition={appMeta[app].pos}
            onClose={() => handleClose(app)}
            onFocus={() => handleFocus(app)}
            width={appMeta[app].width}
            height={appMeta[app].height}
          >
            {renderContent(app)}
          </AppWindow>
        ))}
      </AnimatePresence>

      <DesktopShelf openApps={openApps} onOpen={handleOpen} />

      {/* FOOTER */}
      <div className="fixed bottom-0 left-4 pb-2 z-50 pointer-events-none">
        <p className="text-xs text-primary/60 font-mono tracking-widest uppercase font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          PROPERTY OF MEENAKSHI SUNDARARAJAN ENGG COLLEGE // DEPT. OF MECH.
        </p>
      </div>
    </div>
  );
};

export default DesktopOS;