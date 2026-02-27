import { motion } from "framer-motion";
import { Home, Calendar, Map, Clock } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const dockItems = [
  { icon: Home, label: "HOME", path: "/home" },
  { icon: Calendar, label: "EVENTS", path: "/events" },
  { icon: Map, label: "MAP", path: "/map" },
  { icon: Clock, label: "SCHEDULE", path: "/schedule" },
];

const BottomDock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex items-center justify-around px-4 py-2 border-t border-border/50 bg-oil/80 backdrop-blur-sm">
      {dockItems.map(({ icon: Icon, label, path }) => {
        const active = location.pathname.startsWith(path);
        return (
          <motion.button
            key={path}
            onClick={() => navigate(path)}
            className="flex flex-col items-center gap-1 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                active
                  ? "border-primary bg-primary/10 gold-glow"
                  : "border-border/50 bg-muted/30"
              }`}
            >
              <Icon
                className={`w-4 h-4 transition-colors ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              />
            </div>
            <span
              className={`text-[7px] font-display tracking-widest ${
                active ? "text-primary" : "text-muted-foreground/60"
              }`}
            >
              {label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default BottomDock;
