import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ImageIcon, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomDock from "@/components/BottomDock";
import { galleryImages } from "@/data/galleryImages";

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const selected = selectedImage !== null ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto scrollbar-hide p-4 pb-24">

        <div className="flex items-center gap-3 mb-4">
          <motion.button onClick={() => navigate("/home")} whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-primary" />
          </motion.button>
          <h1 className="font-display text-xs tracking-[0.2em] text-primary font-bold">GALLERY</h1>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative aspect-square rounded-lg border border-border/50 overflow-hidden cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] bg-card/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(item.id)}
              style={{ willChange: "transform" }}
            >
              {failedImages.has(item.id) ? (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-muted-foreground/40" />
                </div>
              ) : (
                <img
                  src={item.src}
            
                  loading="lazy"
                  className="w-full h-full object-cover will-change-transform"
                  onError={() => setFailedImages(prev => new Set(prev).add(item.id))}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border/50 flex items-center justify-center bg-card/50"
              onClick={() => setSelectedImage(null)}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4 text-primary" />
            </motion.button>
            <motion.img
              src={selected.src}
              className="max-w-[90%] max-h-[80%] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <BottomDock />
    </div>
  );
};

export default GalleryPage;
