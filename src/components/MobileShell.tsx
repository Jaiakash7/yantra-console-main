import StatusBar from "./StatusBar";
import BottomNav from "./BottomNav";

const MobileShell = ({ children, showNav = true }: { children: React.ReactNode; showNav?: boolean }) => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-full max-w-[430px] min-h-screen relative bg-background bg-pattern border-x border-border/30">
      <StatusBar />
      <div className={`${showNav ? "pb-24" : ""}`}>
        {children}
      </div>
      {showNav && <BottomNav />}
    </div>
  </div>
);

export default MobileShell;
