import { Radio, MapPin, ExternalLink } from "lucide-react";

const DesktopMapContent = () => (
  <div className="h-full flex flex-col bg-background relative">
    {/* Top Navigation / Status Bar */}
    <div className="flex items-center gap-2 p-4 border-b border-border/50 bg-muted/10">
      <Radio className="w-4 h-4 text-primary animate-pulse" />
      <span className="font-display text-sm tracking-widest text-primary">TRACKING TARGET</span>
      <span className="font-mono text-xs text-muted-foreground ml-auto">13.0526°N, 80.2212°E</span>
    </div>
    
    <div className="flex-1 relative flex">
      {/* Main Map Area */}
      <div className="flex-1 relative">
        <iframe
          src="https://maps.google.com/maps?q=Meenakshi+Sundararajan+Engineering+College,+Chennai&t=&z=17&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7)" }}
        />
        {/* HUD Overlay Lines */}
        <div className="absolute inset-0 pointer-events-none border-2 border-primary/10 rounded-sm">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40" />
        </div>
      </div>

      {/* Side Info Panel */}
      <div className="w-80 border-l border-border/50 bg-card/30 p-8 flex flex-col justify-center backdrop-blur-sm z-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="font-display text-xl tracking-widest text-primary">MSEC CAMPUS</h2>
          </div>
          <div className="font-mono text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 space-y-2">
            <p className="font-bold text-foreground">MEENAKSHI SUNDARARAJAN<br />ENGINEERING COLLEGE</p>
            <p>
              363, Arcot Road,<br />
              Kodambakkam,<br />
              Chennai, Tamil Nadu 600024
            </p>
          </div>
        </div>
        
        <a
          href="https://maps.google.com/?q=Meenakshi+Sundararajan+Engineering+College+Chennai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors group cursor-pointer"
        >
          <span className="font-display text-xs tracking-widest text-primary">INITIALIZE ROUTE</span>
          <ExternalLink className="w-4 h-4 text-primary group-hover:scale-110 group-hover:text-white transition-all" />
        </a>
      </div>
    </div>
  </div>
);

export default DesktopMapContent;