import { ReactNode } from "react";
import StatusBar from "./StatusBar";

const PhoneFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_hsl(0_0%_12%),_hsl(0_0%_2%),_hsl(0_0%_0%))] p-4">
      <div className="relative w-full max-w-[400px] h-[90vh] max-h-[900px] rounded-[2.5rem] border-2 border-border bg-background inner-screen-glow overflow-hidden carbon-bg flex flex-col">
        {/* Notch */}
        <div className="flex justify-center pt-2">
          <div className="w-28 h-6 bg-oil rounded-full border border-border/50" />
        </div>
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
