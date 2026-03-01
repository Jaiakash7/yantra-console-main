import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Info, ImageIcon, Trophy, Building2 } from "lucide-react";
import DesktopShelf, { type DesktopApp } from "./DesktopShelf";
import AppWindow from "./AppWindow";
import PrizePoolWidget from "./PrizePoolWidget";
import CommsWidget from "./CommsWidget";
import yantraLogo from "@/assets/yantra-logo.jpeg";

import DesktopHomeContent from "./DesktopHomeContent";
import DesktopEventsContent from "./DesktopEventsContent";
import DesktopMapContent from "./DesktopMapContent";
import DesktopScheduleContent from "./DesktopScheduleContent";
import DesktopInstructionContent from "./DesktopInstructionContent";
import DesktopAboutContent from "./DesktopAboutContent";
import DesktopGalleryContent from "./DesktopGalleryContent";
import DesktopPrizeContent from "./DesktopPrizeContent";
import SponsorsContent from "./SponsorsContent";

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
    setOpenApps((prev) => (prev.includes(app) ? prev : [...prev, app]));
    setFocusOrder((prev) => [...prev.filter((a) => a !== app), app]);
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
    <div className="fixed inset-0 bg-background overflow-hidden">
      {/* Blueprint wallpaper */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 60% 50% / 0.08) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 60% 50% / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={yantraLogo} alt="" className="w-64 h-64 object-cover rounded-full opacity-[0.04]" />
      </div>

      {/* Desktop shortcuts — left side */}
      <div className="absolute top-6 left-6 flex flex-col gap-4 z-30">
        {desktopShortcuts.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            onClick={() => handleOpen(id)}
            className="flex flex-col items-center gap-1.5 w-16 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 rounded-xl border border-border/50 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[8px] font-display tracking-wider text-muted-foreground group-hover:text-primary transition-colors text-center">
              {label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Desktop widgets */}
      <div className="absolute top-6 right-6 space-y-4 z-30">
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

      <div className="fixed bottom-0 left-4 text-[7px] font-mono text-muted-foreground/30 pb-1">
        PROPERTY OF MEENAKSHI SUNDARARAJAN ENGG COLLEGE // DEPT. OF MECH.
      </div>
    </div>
  );
};

export default DesktopOS;
