import { useState, useRef, useEffect } from "react";
import { Plus, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GalleryGrid = () => {
    const images = [
        "/images/tannery/factory_exterior_1.jpg",
        "/images/tannery/factory_arch.jpg",
        "/images/tannery/factory_pathway.jpg",
        "/images/tannery/effluent_treatment_plant.jpg",
        "/images/tannery/tanning_drums.png",
        "/images/tannery/dyeing.jpg",
        "/images/tannery/quality_control.jpg",
        "/images/tannery/raw_material.jpg",
        "/images/tannery/crust_leather.jpg",
        "/images/tannery/finished_leather.jpg"
    ];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        // Prevent scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    return (
        <div className="w-full max-w-6xl mx-auto">
             <div className="mb-12 text-center">
                 <h2 className="text-3xl font-serif font-bold text-white mb-4 uppercase tracking-wider">Our Collections</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore our extensive range of high-quality leathers, from raw hides to finished products, showcasing our diverse capabilities and finishes.
                 </p>
            </div>

            {images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <div 
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <img 
                                src={img} 
                                alt={`Gallery Image ${index + 1}`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-8 h-8 drop-shadow-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Card className="border-dashed">
                    <CardContent className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                        <ImageIcon className="w-16 h-16 mb-4 opacity-20" />
                        <p>No images found in gallery.</p>
                    </CardContent>
                </Card>
            )}

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={closeLightbox}
                >
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-4 right-4 text-white hover:bg-white/10 z-50 rounded-full"
                        onClick={closeLightbox}
                    >
                        <X className="w-6 h-6" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50 rounded-full w-12 h-12 hidden md:flex"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </Button>

                    <div 
                        className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={images[currentIndex]} 
                            alt={`Full screen ${currentIndex + 1}`}
                            className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50 rounded-full w-12 h-12 hidden md:flex"
                        onClick={nextImage}
                    >
                        <ChevronRight className="w-8 h-8" />
                    </Button>
                </div>
            )}
        </div>
    );
};

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center text-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="MST Facility" 
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Photo Gallery</h1>
            <p className="text-xl text-gray-200">A visual journey through our processes and products.</p>
          </div>
        </section>
        <section className="py-20">
            <div className="container mx-auto px-4">
                <GalleryGrid />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
