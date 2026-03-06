import { ImageIcon } from "lucide-react";

const galleryItems = [
  { label: "INAUGURATION 2K25" },
  { label: "ROBO CLASH ARENA" },
  { label: "CAD WARFARE LAB" },
  { label: "WORKSHOP SESSIONS" },
  { label: "PRIZE CEREMONY" },
  { label: "CAMPUS AERIAL" },
  { label: "TEAM PHOTOS" },
  { label: "BEHIND THE SCENES" },
];

const DesktopGalleryContent = () => (
  <div className="p-10 overflow-y-auto scrollbar-hide h-full">
    <div className="grid grid-cols-4 gap-6">
      {galleryItems.map((item, i) => (
        <div key={i} className="aspect-square rounded-lg border border-border/50 bg-card/30 hover:border-primary/30 transition-colors flex flex-col items-center justify-center gap-3 cursor-pointer">
          <ImageIcon className="w-14 h-14 text-muted-foreground/30" />
          <span className="text-xs font-display tracking-widest text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default DesktopGalleryContent;
