import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Leaf, Award, ArrowRight, FlaskConical, Eye, FileCheck, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const qualityFeatures = [
  {
    icon: FlaskConical,
    title: "Laboratory Testing",
    description: "In-house testing lab with advanced equipment for physical, chemical, and mechanical testing of leather samples.",
    coverImage: "/images/laboratory/IMG_1391.JPG",
    gallery: [
      "/images/laboratory/IMG-20161129-00584.jpg",
      "/images/laboratory/IMG-20161129-00586.jpg",
      "/images/laboratory/IMG-20161129-00591.jpg",
      "/images/laboratory/IMG-20161129-00592.jpg",
      "/images/laboratory/IMG_1391.JPG",
      "/images/laboratory/IMG_1392.JPG",
    ]
  },
  {
    icon: Eye,
    title: "Visual Inspection",
    description: "Trained inspectors examine every batch for defects, color consistency, and grain quality.",
    coverImage: "/images/tannery/quality_control.jpg",
    gallery: [
      "/images/tannery/quality_control.jpg",
      "/images/tannery/finished_leather.jpg",
      "/images/tannery/crust_leather.jpg",
      "/images/tannery/raw_material.jpg",
    ]
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Complete traceability with test certificates and compliance documentation for every shipment.",
    coverImage: "/images/iso_9001_cert.png",
    gallery: [
      "/images/iso_9001_cert.png",
      "/images/iso_14001_cert.png",
    ]
  },
  {
    icon: Shield,
    title: "Standards Compliance",
    description: "All products meet international standards including REACH, OEKO-TEX, and LWG requirements.",
    coverImage: "/images/standards/IMG_1547.webp",
    gallery: [
      "/images/standards/IMG_1547.webp",
      "/images/standards/IMG_1553.webp",
      "/images/standards/IMG_1555.webp",
      "/images/standards/IMG_1556.webp",
      "/images/standards/IMG_1559.webp",
      "/images/standards/IMG_1562.webp",
      "/images/standards/IMG_1568.webp",
      "/images/standards/IMG_1572.webp",
    ]
  },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    category: "Quality Management",
    description: "International standard for quality management systems ensuring consistent product quality.",
  },
  {
    name: "ISO 14001:2015",
    category: "Environmental",
    description: "Environmental management certification demonstrating our commitment to sustainability.",
  },
  {
    name: "Leather Working Group",
    category: "Industry Standard",
    description: "LWG certification for environmental compliance and best practices in leather manufacturing.",
  },
  {
    name: "REACH Compliant",
    category: "Chemical Safety",
    description: "Full compliance with EU REACH regulations for chemical safety in manufacturing.",
  },
  {
    name: "OEKO-TEX Standard 100",
    category: "Product Safety",
    description: "Certification that our leather is free from harmful substances and safe for human contact.",
  },
  {
    name: "SA8000",
    category: "Social Accountability",
    description: "Social accountability standard ensuring ethical treatment of workers and fair practices.",
  },
];

const sustainability = [
  "Water recycling systems reducing consumption by 60%",
  "Solar power for 40% of factory energy needs",
  "Zero-discharge effluent treatment plant",
  "Biodegradable and eco-friendly tanning agents",
  "Waste leather recycling programs",
  "Sustainable sourcing from certified suppliers",
];

// Helper component for gallery items with loading state
const GalleryImage = ({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  return (
    <div 
      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 hover:border-gold/30 transition-all duration-500 cursor-pointer bg-white/[0.02]"
      onClick={onClick}
    >
      {/* Skeleton / Shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-white/[0.05] animate-shimmer" />
      )}
      
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${isLoaded ? 'block' : 'hidden'}`}>
        <div className="p-3 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <ArrowRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

const QualityPage = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openGridModal = (index: number) => setActiveFeatureIndex(index);
  const closeGridModal = () => {
    setActiveFeatureIndex(null);
    setActiveImageIndex(null);
  };
  
  const closeLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex(null);
  };

  const currentGallery = activeFeatureIndex !== null ? qualityFeatures[activeFeatureIndex].gallery : [];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % currentGallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Gallery Grid Modal Overlay */}
        {activeFeatureIndex !== null && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300"
            onClick={closeGridModal}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={closeGridModal}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Lightbox Stage */}
            {activeImageIndex !== null ? (
              <div className="fixed inset-0 z-[120] bg-black flex items-center justify-center p-4 animate-in zoom-in-95 duration-300">
                <button 
                    className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[130]"
                    onClick={closeLightbox}
                >
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                        <ChevronLeft className="w-4 h-4" /> Back to Grid
                    </div>
                </button>
                
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-white hover:bg-white/20 transition-all pointer-events-auto"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                
                <div className="max-w-5xl max-h-[85vh] relative group" onClick={(e) => e.stopPropagation()}>
                  <img 
                    src={currentGallery[activeImageIndex]} 
                    alt="Quality Detail" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain shadow-2xl rounded-lg"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white/80 text-sm">
                    {activeImageIndex + 1} / {currentGallery.length}
                  </div>
                </div>
                
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-white hover:bg-white/20 transition-all pointer-events-auto"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            ) : (
              /* Grid Stage */
              <div 
                className="max-w-6xl w-full max-h-[90vh] overflow-y-auto pr-2 animate-in slide-in-from-bottom-8 duration-500 will-change-transform"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-12 text-center">
                    <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-3">Facility Tour</p>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase">
                        {qualityFeatures[activeFeatureIndex].title} <span className="text-gold">Gallery</span>
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
                  {currentGallery.map((image, index) => (
                    <GalleryImage 
                        key={index}
                        src={image}
                        alt={`Gallery Item ${index + 1}`}
                        onClick={() => setActiveImageIndex(index)}
                    />
                  ))}
                </div>
                
                <div className="mt-12 text-center text-gray-500 text-sm italic">
                    Click any image to expand
                </div>
              </div>
            )}
          </div>
        )}

        {/* Hero */}
        <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center overflow-hidden">
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
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
                Quality Assurance
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Tannery Quality Standards
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Quality is controlled at every stage of tanning—from raw hide selection 
                to finished leather. Our in-house lab ensures every batch meets specifications.
              </p>
            </div>
          </div>
        </section>

        {/* Quality Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Our Quality Control Process
              </h2>
              <p className="text-gray-400">
                Multi-stage quality assurance ensuring every product meets our exacting standards
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => openGridModal(index)}
                  className={`relative group bg-card rounded-2xl overflow-hidden shadow-lg h-[400px] cursor-pointer transition-all duration-500 hover:shadow-gold/10 hover:shadow-2xl hover:-translate-y-2`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={feature.coverImage} 
                      alt={feature.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:via-black/40 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                    <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-sans font-bold text-white uppercase tracking-wider mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-gray-300 mb-6 line-clamp-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {feature.description}
                    </p>

                    <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs">
                        <span className="w-8 h-[1px] bg-gold" />
                        Explore Gallery
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
                Certifications
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Internationally Certified
              </h2>
              <p className="text-muted-foreground">
                Our certifications demonstrate our commitment to quality, safety, and sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-gold font-medium uppercase tracking-[0.2em] font-sans">
                        {cert.category}
                      </span>
                      <h3 className="font-sans font-bold text-white uppercase tracking-wider mt-1">{cert.name}</h3>
                      <p className="text-sm text-gray-400 mt-2">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-24 bg-premium-dark text-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-6 h-6 text-gold" />
                  <p className="text-gold font-medium tracking-widest uppercase text-sm">
                    Sustainability
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Committed to Environmental Responsibility
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  We believe in sustainable manufacturing that protects our planet 
                  while delivering exceptional quality. Our eco-friendly practices 
                  set the standard in the leather industry.
                </p>
                <ul className="space-y-4">
                  {sustainability.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/40 border border-primary/10 p-8 rounded-xl text-center group hover:bg-card/60 transition-all">
                  <p className="text-5xl font-serif font-bold text-gold group-hover:scale-105 transition-transform">60%</p>
                  <p className="text-sm mt-2 text-muted-foreground uppercase tracking-widest font-medium">Water Recycled</p>
                </div>
                <div className="bg-card/40 border border-primary/10 p-8 rounded-xl text-center group hover:bg-card/60 transition-all">
                  <p className="text-5xl font-serif font-bold text-gold group-hover:scale-105 transition-transform">40%</p>
                  <p className="text-sm mt-2 text-muted-foreground uppercase tracking-widest font-medium">Solar Powered</p>
                </div>
                <div className="bg-card/40 border border-primary/10 p-8 rounded-xl text-center group hover:bg-card/60 transition-all">
                  <p className="text-5xl font-serif font-bold text-gold group-hover:scale-105 transition-transform">Zero</p>
                  <p className="text-sm mt-2 text-muted-foreground uppercase tracking-widest font-medium">Discharge Waste</p>
                </div>
                <div className="bg-card/40 border border-primary/10 p-8 rounded-xl text-center group hover:bg-card/60 transition-all">
                  <p className="text-5xl font-serif font-bold text-gold group-hover:scale-105 transition-transform">100%</p>
                  <p className="text-sm mt-2 text-muted-foreground uppercase tracking-widest font-medium">Traceable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Partner with a manufacturer that prioritizes quality at every step. 
              Request samples to experience our leather firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="xl" asChild>
                <Link to="/contact">
                  Request Samples
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QualityPage;
