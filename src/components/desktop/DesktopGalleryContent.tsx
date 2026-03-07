import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, X } from "lucide-react";
import { galleryImages } from "@/data/galleryImages";

const DesktopGalleryContent = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const selected = selectedImage !== null ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <div className="p-10 overflow-y-auto scrollbar-hide h-full relative">
      <h2 className="font-display text-sm tracking-[0.3em] text-primary mb-8">GALLERY</h2>

      <div className="grid grid-cols-3 gap-6">
        {galleryImages.map((item, i) => (
          <motion.div
            key={item.id}
            className="relative aspect-[4/3] rounded-lg border border-border/50 overflow-hidden cursor-pointer bg-card/30 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.5)" }}
            onClick={() => setSelectedImage(item.id)}
            style={{ willChange: "transform" }}
          >
            {failedImages.has(item.id) ? (
              <div className="w-full h-full flex items-center justify-center">
                <ImageIcon className="w-14 h-14 text-muted-foreground/30" />
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                onError={() => setFailedImages(prev => new Set(prev).add(item.id))}
              />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-display tracking-widest text-foreground/90">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center bg-card/50 hover:border-primary/50 transition-colors"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-primary" />
            </motion.button>
            <motion.img
              src={selected.src}
              alt={selected.alt}
              className="max-w-[80%] max-h-[80vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-sm font-display tracking-[0.3em] text-muted-foreground">
              {selected.label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesktopGalleryContent;
