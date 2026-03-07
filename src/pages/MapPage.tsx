import { motion } from "framer-motion";
import { ArrowLeft, MapPin, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MapPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header with back arrow */}
      <div className="flex items-center gap-3 p-4 border-b border-border/50">
        <motion.button
          onClick={() => navigate("/home")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 text-primary" />
        </motion.button>
        <div>
          <h1 className="font-display text-xs tracking-[0.2em] text-primary font-bold">FACILITY MAP</h1>
          <span className="text-[8px] font-mono text-muted-foreground">MSEC CAMPUS // RADAR VIEW</span>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[7px] font-mono text-green-500/70">LIVE</span>
        </div>
      </div>

      {/* Location Details Block */}
      <div className="p-4 border-b border-border/20 bg-muted/5">
        <h2 className="font-display text-sm tracking-widest text-primary mb-1">MEENAKSHI SUNDARARAJAN ENGINEERING COLLEGE</h2>
        <p className="font-mono text-[9px] text-muted-foreground mb-3 leading-relaxed">
          363, Arcot Road, Kodambakkam<br />
          Chennai, Tamil Nadu 600024
        </p>
        <motion.a
          href="https://maps.google.com/?q=Meenakshi+Sundararajan+Engineering+College+Chennai"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded border border-primary/30 bg-primary/10 text-primary text-[10px] font-display tracking-widest"
        >
          <MapPin className="w-3 h-3" />
          GET DIRECTIONS
          <ExternalLink className="w-3 h-3 ml-1" />
        </motion.a>
      </div>

      {/* Google Maps iframe */}
      <div className="flex-1 relative p-4 pb-6">
        <div className="w-full h-full rounded-xl border-2 border-border/50 overflow-hidden relative shadow-inner">
          <iframe
            src="https://maps.google.com/maps?q=Meenakshi+Sundararajan+Engineering+College,+Chennai&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7)" }}
          />
          {/* Radar overlay */}
          <div className="absolute inset-0 pointer-events-none border border-primary/10">
            <div className="absolute top-2 left-2 text-[7px] font-mono text-primary/40 bg-background/50 px-1 rounded backdrop-blur-sm">LAT: 13.0526°N</div>
            <div className="absolute top-2 right-2 text-[7px] font-mono text-primary/40 bg-background/50 px-1 rounded backdrop-blur-sm">LON: 80.2212°E</div>
            <div className="absolute bottom-2 left-2 text-[7px] font-mono text-primary/40 bg-background/50 px-1 rounded backdrop-blur-sm">ZOOM: 17x</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;