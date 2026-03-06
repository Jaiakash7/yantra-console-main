import { Home, Calendar, Map, Clock } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { icon: Home, label: "HOME", path: "/home" },
  { icon: Calendar, label: "EVENTS", path: "/events" },
  { icon: Map, label: "MAP", path: "/map" },
  { icon: Clock, label: "SCHEDULE", path: "/schedule" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-center justify-around py-2">
        {tabs.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-1 py-1 px-3"
            >
              <div className={`p-2 rounded-full transition-all ${active ? "bg-primary/20 border border-primary" : ""}`}>
                <Icon size={20} className={active ? "text-primary" : "text-muted-foreground"} />
              </div>
              <span className={`text-[10px] tracking-wider font-display ${active ? "text-primary" : "text-muted-foreground"}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
