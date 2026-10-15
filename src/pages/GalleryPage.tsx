import { useState, useEffect, useCallback } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  src: string;
  title: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/tannery/factory_exterior_1.jpg",
    title: "Modern Tannery Facility Exterior",
    caption: "Sprawling production complex situated in Karachi's prime industrial estate.",
  },
  {
    src: "/images/tannery/factory_arch.jpg",
    title: "Architectural Entryway",
    caption: "Historic entry arch reflecting over 65 years of leather craftsmanship.",
  },
  {
    src: "/images/tannery/factory_pathway.jpg",
    title: "Facility Logistical Infrastructure",
    caption: "Organized internal transit corridors ensuring prompt raw-material handling.",
  },
  {
    src: "/images/tannery/effluent_treatment_plant.jpg",
    title: "Advanced Biological Wastewater Clarification Plant",
    caption: "European-engineered biological water treatment facility compliant with rigorous environmental standards and LWG parameters.",
  },
  {
    src: "/images/tannery/tanning_drums.png",
    title: "High-Capacity Rotary Tanning Drums",
    caption: "Precision computerized stainless steel and wooden drums for uniform penetration.",
  },
  {
    src: "/images/tannery/dyeing.jpg",
    title: "Custom Shade Dyeing Operations",
    caption: "Formulation of custom seasonal colors with high penetration and color-fastness.",
  },
  {
    src: "/images/tannery/quality_control.jpg",
    title: "Visual Quality Grading Bench",
    caption: "Experienced sorters inspecting grain consistency and hide surface integrity.",
  },
  {
    src: "/images/tannery/raw_material.jpg",
    title: "Sorted Raw Hides Inspection",
    caption: "Carefully selected raw hides and skins sorted by weight, origin, and thickness.",
  },
  {
    src: "/images/tannery/crust_leather.jpg",
    title: "Conditioned Crust Leather Stacks",
    caption: "Tanned, fatliquored, and dried crust ready for surface coating and embossing.",
  },
  {
    src: "/images/tannery/finished_leather.jpg",
    title: "Finished Luxury Leather Articles",
    caption: "Fully finished aniline, semi-aniline, and pull-up leather awaiting international export.",
  },
];

const GalleryGrid = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  }, []);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-14 text-center max-w-3xl mx-auto space-y-4">
        <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Factory Tour</p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
          Tannery Infrastructure & Operations
        </h2>
        <p className="text-gray-400 font-light leading-relaxed">
          From raw hide selection and mechanical beam house operations to biological wastewater management and finished leather grading.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square overflow-hidden bg-black/60 border border-white/10 cursor-pointer shadow-lg hover:border-gold/50 transition-all duration-300"
          >
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-gold text-xs uppercase tracking-widest font-bold">
                {item.title}
              </span>
              <p className="text-gray-300 text-[11px] line-clamp-2 mt-1">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-white hover:bg-white/10 z-50 rounded-none w-10 h-10 border border-white/20"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50 rounded-none w-12 h-12 border border-white/20 hidden md:flex"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[currentIndex].src}
              alt={galleryItems[currentIndex].title}
              className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center max-w-xl space-y-1">
              <h4 className="text-lg font-serif font-bold text-white">
                {galleryItems[currentIndex].title}
              </h4>
              <p className="text-sm text-gray-400 font-light">
                {galleryItems[currentIndex].caption}
              </p>
              <div className="text-gold text-xs tracking-widest uppercase pt-2">
                {currentIndex + 1} of {galleryItems.length}
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50 rounded-none w-12 h-12 border border-white/20 hidden md:flex"
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
      <SEO
        title="Tannery Facility Photo Gallery"
        description="Take a visual tour through Muhammad Shafi Tanneries (MST) in Karachi: rotary tanning drums, effluent treatment plant, chemical finishing, and grading halls."
        canonicalPath="/gallery"
        keywords="MST leather photo gallery, leather tannery photos, industrial tanning drum facility, leather manufacturing Karachi photos"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg.jpg"
              alt="MST Facility"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="container px-4 relative z-10 max-w-3xl">
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">Inside Our Tannery</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Facility Gallery</h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Explore the scale, technology, and environmental systems powering Pakistan’s premier light-leather tannery.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
