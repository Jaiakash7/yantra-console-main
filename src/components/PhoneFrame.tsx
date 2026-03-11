import { ReactNode } from "react";
import StatusBar from "./StatusBar";

const PhoneFrame = ({ children }: { children: ReactNode }) => {
  return (
    // Outer Wrapper: Full screen on mobile, padded on desktop
    <div className="w-full h-full bg-black flex items-center justify-center sm:p-6 overflow-hidden">
      
      {/* Inner Phone Frame: Fills screen on mobile, constrained with borders on desktop */}
      <div className="w-full h-full sm:max-w-[400px] sm:max-h-[850px] relative sm:rounded-[2.5rem] sm:border-[6px] sm:border-zinc-800 bg-background inner-screen-glow overflow-hidden carbon-bg flex flex-col mx-auto sm:shadow-2xl">
        
        <StatusBar />
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden relative">
          {children}
        </div>
        
        {/* MSEC Watermark: Hidden on mobile, visible on desktop */}
        <div className="px-3 py-2 text-center pb-3 hidden sm:block">
          <p className="text-[7px] text-muted-foreground/40 font-mono tracking-wider leading-tight">
            PROPERTY OF MEENAKSHI SUNDARARAJAN ENGG COLLEGE // DEPT. OF MECH.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PhoneFrame;