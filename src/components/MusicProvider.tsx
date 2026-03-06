import { createContext, useContext, useRef, useState, useEffect, ReactNode } from "react";
import { Volume2, VolumeX } from "lucide-react";
import bgMusic from "@/assets/bg.mpeg";

interface MusicContextType {
  playing: boolean;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextType>({ playing: false, toggle: () => {} });

export const useMusic = () => useContext(MusicContext);

const MusicProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <MusicContext.Provider value={{ playing, toggle }}>
      {children}
      <button
        onClick={toggle}
        className="fixed top-14 right-[60px] z-50 w-8 h-8 rounded-full bg-card/80 backdrop-blur-md border border-primary/30 flex md:hidden items-center justify-center shadow-lg transition-all active:scale-90"
        aria-label={playing ? "Mute music" : "Play music"}
      >
        {playing ? (
          <Volume2 size={16} className="text-primary" />
        ) : (
          <VolumeX size={16} className="text-muted-foreground/70" />
        )}
      </button>
    </MusicContext.Provider>
  );
};

export default MusicProvider;