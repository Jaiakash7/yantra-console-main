import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Users, Trophy } from "lucide-react";
import MobileShell from "@/components/MobileShell";

const eventData: Record<string, { title: string; category: string; duration: string; venue: string; type: string; description: string; prizes: { gold: string; silver: string; bronze: string }; rules: string[] }> = {
  "cad-modeling": {
    title: "CAD MODELING WITH AUTODESK FUSION 360",
    category: "TECHNICAL // FLAGSHIP",
    duration: "2 HRS",
    venue: "CAD LAB-1",
    type: "INDIVIDUAL",
    description: "Flagship event — precision CAD modeling competition using Autodesk Fusion 360 under timed pressure. Demonstrate your mastery of parametric design, assemblies, and rendering.",
    prizes: { gold: "₹1,500", silver: "₹1,000", bronze: "₹750" },
    rules: [
      "Participants must bring their own laptops with Fusion 360 pre-installed.",
      "Internet access will NOT be provided during the event.",
      "Time limit is strictly 2 hours.",
      "Judging based on accuracy, complexity, and presentation.",
    ],
  },
};

const fallback = {
  title: "EVENT DETAILS",
  category: "TECHNICAL",
  duration: "1.5 HRS",
  venue: "SEMINAR HALL",
  type: "TEAM (2-3)",
  description: "Details for this event will be updated soon. Stay tuned for more information.",
  prizes: { gold: "₹1,500", silver: "₹1,000", bronze: "₹750" },
  rules: ["Follow all event guidelines.", "Be punctual.", "Decisions by judges are final."],
};

const EventDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventData[id || ""] || { ...fallback, title: (id || "").replace(/-/g, " ").toUpperCase() };

  const medals = [
    { label: "GOLD", emoji: "🥇", amount: event.prizes.gold },
    { label: "SILVER", emoji: "🥈", amount: event.prizes.silver },
    { label: "BRONZE", emoji: "🥉", amount: event.prizes.bronze },
  ];

  return (
    <MobileShell>
      <div className="px-4 pt-2">
        <button onClick={() => navigate("/events")} className="flex items-center gap-2 text-muted-foreground text-xs mb-4">
          <ArrowLeft size={16} /> <span className="tracking-wider">BACK TO HUB</span>
        </button>

        <div className="card-tech mb-4">
          <h1 className="font-display text-sm font-bold tracking-wider mb-2">{event.title}</h1>
          <span className="text-[9px] font-display bg-primary/20 border border-primary/50 text-primary px-2 py-1 rounded tracking-wider">
            {event.category}
          </span>
          <div className="flex items-center gap-4 mt-4 text-[10px] text-muted-foreground tracking-wider">
            <span className="flex items-center gap-1"><Clock size={12} /> {event.duration}</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> {event.venue}</span>
            <span className="flex items-center gap-1"><Users size={12} /> {event.type}</span>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-4">
          <h2 className="font-display text-[10px] tracking-[0.2em] text-muted-foreground mb-2">OVERVIEW</h2>
          <p className="text-xs text-secondary-foreground leading-relaxed">{event.description}</p>
        </div>

        {/* Prize Podium */}
        <div className="mb-4">
          <h2 className="font-display text-[10px] tracking-[0.2em] text-muted-foreground mb-3">PRIZE PODIUM</h2>
          <div className="grid grid-cols-3 gap-2">
            {medals.map(({ label, emoji, amount }) => (
              <div key={label} className="card-tech flex flex-col items-center py-4">
                <span className="text-2xl mb-1">{emoji}</span>
                <span className="font-display text-[9px] tracking-wider text-muted-foreground">{label}</span>
                <span className="font-display text-sm text-primary font-bold mt-1">{amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="pb-4">
          <h2 className="font-display text-[10px] tracking-[0.2em] text-muted-foreground mb-3">OPERATIONAL GUIDELINES</h2>
          <div className="space-y-2">
            {event.rules.map((rule, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="font-display text-xs text-primary font-bold">{String(i + 1).padStart(2, "0")}.</span>
                <p className="text-xs text-secondary-foreground leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileShell>
  );
};

export default EventDetailPage;
