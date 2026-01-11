import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, createContext, useContext, ReactNode, useCallback, useEffect } from "react";

type LightboxContextType = {
  openLightbox: (src: string, alt?: string, gallery?: string[]) => void;
};

const LightboxContext = createContext<LightboxContextType | null>(null);

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
};

export const LightboxProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gallery, setGallery] = useState<string[]>([]);
  const [imageAlt, setImageAlt] = useState("");

  const openLightbox = useCallback((src: string, alt?: string, galleryImages?: string[]) => {
    const images = galleryImages || [src];
    const index = images.indexOf(src);
    setGallery(images);
    setCurrentIndex(index >= 0 ? index : 0);
    setImageAlt(alt || "Photo");
    setIsOpen(true);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  }, [gallery.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  }, [gallery.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goToPrevious, goToNext]);

  const currentImage = gallery[currentIndex] || "";
  const hasMultipleImages = gallery.length > 1;

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none overflow-hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Previous Button */}
          {hasMultipleImages && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
          )}
          
          {/* Next Button */}
          {hasMultipleImages && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          )}

          <div className="flex items-center justify-center w-full h-full min-h-[50vh]">
            <img
              src={currentImage}
              alt={imageAlt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
          
          {/* Image Counter */}
          {hasMultipleImages && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} / {gallery.length}
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </LightboxContext.Provider>
  );
};

type ClickableImageProps = {
  src: string;
  alt: string;
  className?: string;
  gallery?: string[];
};

export const ClickableImage = ({ src, alt, className = "", gallery }: ClickableImageProps) => {
  const { openLightbox } = useLightbox();

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} cursor-pointer hover:opacity-90 transition-opacity`}
      onClick={() => openLightbox(src, alt, gallery)}
    />
  );
};
