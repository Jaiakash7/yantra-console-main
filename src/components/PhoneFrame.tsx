import { ReactNode } from "react";
import StatusBar from "./StatusBar";

const PhoneFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[400px] h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col relative mx-auto bg-zinc-950">
      <div className="relative w-full h-full rounded-[2.5rem] border-2 border-border bg-background inner-screen-glow overflow-hidden carbon-bg flex flex-col">
        <StatusBar />
        <div className="flex-1 overflow-hidden relative">
          {children}
        </div>
        {/* MSEC Watermark */}
        <div className="px-3 py-2 text-center">
          <p className="text-[7px] text-muted-foreground/40 font-mono tracking-wider leading-tight">
            PROPERTY OF MEENAKSHI SUNDARARAJAN ENGG COLLEGE // DEPT. OF MECH.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
