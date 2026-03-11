import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Users, Award, Building, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomDock from "@/components/BottomDock";
import yantraLogo from "@/assets/yantra-logo.jpeg";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto scrollbar-hide p-4 pb-24">

        <div className="flex items-center gap-3 mb-4">
          <motion.button onClick={() => navigate("/home")} whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-primary" />
          </motion.button>
          <h1 className="font-display text-xs tracking-[0.2em] text-primary font-bold">ABOUT YANTRA</h1>
        </div>

        <div className="flex justify-center mb-4">
          <motion.img src={yantraLogo} alt="Yantra 2K26"
            className="w-24 h-24 rounded-full border-2 border-primary/30 object-cover"
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} />
        </div>

        <div className="space-y-3">
          <div className="p-3 rounded-lg border border-border/50 bg-card/50">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="font-display text-[10px] tracking-widest text-primary">THE SYMPOSIUM</span>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Yantra 2K26 is the flagship national-level technical symposium organized by the Department of Mechanical Engineering at Meenakshi Sundararajan Engineering College, Chennai.
            </p>
          </div>
          <div className="p-3 rounded-lg border border-border/50 bg-card/50">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="font-display text-[10px] tracking-widest text-primary">PARTICIPATION</span>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Open to all engineering students across India. Features 9 curated events spanning technical challenges, creative competitions, and non-technical activities.
            </p>
          </div>
          <div className="p-3 rounded-lg border border-border/50 bg-card/50">
            <div className="flex items-center gap-2 mb-2">
              <Building className="w-4 h-4 text-primary" />
              <span className="font-display text-[10px] tracking-widest text-primary">VENUE</span>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Meenakshi Sundararajan Engineering College, No.363, Arcot Road, Kodambakkam, Chennai - 600024.
            </p>
          </div>
          <div className="p-3 rounded-lg border border-border/50 bg-card/50">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-display text-[10px] tracking-widest text-primary">LEGACY</span>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              A tradition of engineering excellence since inception, bringing together the brightest minds to compete, innovate, and collaborate.
            </p>
          </div>
        </div>

        {/* Developer Credit Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
          className="mt-10 mb-2 flex flex-col items-center justify-center space-y-1.5"
        >
          <div className="flex items-center gap-2 text-primary/60">
            <Code className="w-3.5 h-3.5" />
            <span className="font-display text-[8px] tracking-[0.3em]">SYSTEM ARCHITECT</span>
          </div>
          <div className="px-4 py-2 rounded-full border border-border/40 bg-card/30">
            <p className="text-[10px] font-mono text-muted-foreground">
              Developer: <span className="text-primary font-bold tracking-wider">JAIAKASH.R</span>
            </p>
          </div>
        </motion.div>

      </div>
      <BottomDock />
    </div>
  );
};

export default AboutPage;