import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import AnimatedPage from "@/components/AnimatedPage";
import MusicProvider from "@/components/MusicProvider";
import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import EventsHub from "./pages/EventsHub";
import EventDetails from "./pages/EventDetails";
import MapPage from "./pages/MapPage";
import SchedulePage from "./pages/SchedulePage";
import InstructionPage from "./pages/InstructionPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import PrizePage from "./pages/PrizePage";
import PrizesPage from "./pages/PrizesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Framed = ({ children }: { children: React.ReactNode }) => (
  <PhoneFrame>
    <AnimatedPage>{children}</AnimatedPage>
  </PhoneFrame>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Framed><HomePage /></Framed>} />
        <Route path="/events" element={<Framed><EventsHub /></Framed>} />
        <Route path="/events/:id" element={<Framed><EventDetails /></Framed>} />
        <Route path="/map" element={<Framed><MapPage /></Framed>} />
        <Route path="/schedule" element={<Framed><SchedulePage /></Framed>} />
        <Route path="/instruction" element={<Framed><InstructionPage /></Framed>} />
        <Route path="/about" element={<Framed><AboutPage /></Framed>} />
        <Route path="/gallery" element={<Framed><GalleryPage /></Framed>} />
        <Route path="/prize" element={<Framed><PrizePage /></Framed>} />
        <Route path="/prizes" element={<Framed><PrizesPage /></Framed>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MusicProvider>
          <AppRoutes />
        </MusicProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
