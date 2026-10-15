import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const bespokeItems = [
  {
    id: 1,
    image: "/images/bespoke/product1.jpg",
    title: "Vibrant Aniline",
    subtitle: "Nappa Lambskin",
    tag: "High Fashion",
    tannage: "Pure Aniline Drum Dyeing",
    temper: "Soft & Supple (0.7 - 0.9 mm)",
    application: "Luxury Garments & Handbags",
    description: "Uncoated full-grain finish highlighting natural pore architecture and depth. Formulated for international fashion houses requiring saturated color absorption and butter-soft hand feel.",
    link: "/fashion"
  },
  {
    id: 2,
    image: "/images/bespoke/product2.jpg",
    title: "Mill-Grained",
    subtitle: "Full Grain Leather",
    tag: "Heritage",
    tannage: "Drum Tumbled Wet-Milled",
    temper: "Medium-Soft Pebble (1.2 - 1.4 mm)",
    application: "Executive Footwear & Travel Goods",
    description: "Naturally tumbled in dry wooden milling drums to break the grain structure into authentic pebbled textures with high tensile resistance.",
    link: "/fashion"
  },
  {
    id: 3,
    image: "/images/bespoke/product3.jpg",
    title: "Drum-Dyed Crust",
    subtitle: "Rich Tonal Depth",
    tag: "Core Tanning",
    tannage: "Full Penetration Re-tanned",
    temper: "Firm to Medium (1.1 - 1.3 mm)",
    application: "Artisanal Footwear & Hand-burnished Goods",
    description: "Carefully neutralized and re-tanned crust engineered for customer-specific surface burnishing, antique finishing, or specialized patina application.",
    link: "/fashion"
  },
  {
    id: 4,
    image: "/images/bespoke/product4.jpg",
    title: "Soft Nappa Glove",
    subtitle: "Garment & Glove Leather",
    tag: "Sensory Luxury",
    tannage: "Ultra-Light Fatliquored",
    temper: "Ultra-Soft Silk Temper (0.5 - 0.7 mm)",
    application: "Technical Driving Gloves & Couture Outerwear",
    description: "Engineered with proprietary fatliquor emulsions to achieve extreme drape, featherweight elasticity, and high tensile endurance.",
    link: "/fashion"
  },
  {
    id: 5,
    image: "/images/bespoke/product5.jpg",
    title: "Metallic Foil",
    subtitle: "Contemporary Lustre",
    tag: "Specialty Finish",
    tannage: "Precision Heat-Transferred Film",
    temper: "Supple Structured (0.8 - 1.0 mm)",
    application: "Evening Footwear & Statement Accessories",
    description: "Bonded with micro-thin metallic foils under calibrated thermal pressure, ensuring flex-crack resistance and mirror-like iridescence.",
    link: "/fashion"
  },
  {
    id: 6,
    image: "/images/bespoke/product6.jpg",
    title: "Glazed Patent",
    subtitle: "High-Gloss Calfskin",
    tag: "Black-Tie Footwear",
    tannage: "Polyurethane Enamel Lacquer",
    temper: "Structured Resilient (1.0 - 1.2 mm)",
    application: "Formal Footwear & Structured Miniaudières",
    description: "Multi-coat lacquer application yielding optical clarity and high abrasion resilience in classic black and seasonal colorways.",
    link: "/fashion"
  },
  {
    id: 7,
    image: "/images/bespoke/product7.jpg",
    title: "Precision Embossed",
    subtitle: "Geometric Micro-Grain",
    tag: "Engineered Grain",
    tannage: "Hydraulic Plate Embossing",
    temper: "Controlled Uniform (1.2 - 1.4 mm)",
    application: "Luxury Briefcases & Hard Leather Goods",
    description: "Hot-press stamped with precision micro-patterns to provide scratch-resistant durability while maintaining core hide flexibility.",
    link: "/fashion"
  },
  {
    id: 8,
    image: "/images/bespoke/product8.jpg",
    title: "Classic Smooth Nappa",
    subtitle: "Shoe Upper & Leather Goods",
    tag: "Volume Essential",
    tannage: "Fine Pigmented Protective Coat",
    temper: "Standard Shoe Temper (1.1 - 1.3 mm)",
    application: "Designer Sneakers & Contemporary Footwear",
    description: "The gold standard of commercial luxury: uniform grain coverage, exceptional Bally flex endurance, and rigorous wet/dry crock fastness.",
    link: "/fashion"
  }
];

const BespokeGallery = () => {
  const [activeItem, setActiveItem] = useState(bespokeItems[0]);

  return (
    <section className="bg-background py-16 md:py-20 lg:py-24 border-b border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold" />
              Curated Material Archive
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              Signature <span className="text-gold italic font-normal">Leather Collections</span>
            </h2>
            <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
              Precision tanning, custom shade formulation, and specialized finishing engineered for global luxury brands, footwear houses, and leather goods manufacturers.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              asChild
              className="border-gold/60 text-gold hover:bg-gold hover:text-black rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5 transition-all"
            >
              <Link to="/fashion" className="flex items-center gap-2">
                <span>View Full Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Editorial Feature Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Spotlight Hero Leather Frame */}
          <div className="lg:col-span-7 bg-card/40 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between group">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src={activeItem.image}
                alt={`MST Signature Leather - ${activeItem.title}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                key={activeItem.id}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              
              {/* Badges on Hero Image */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-gold/40 text-gold text-[11px] font-semibold uppercase tracking-wider rounded-sm">
                  {activeItem.tag}
                </span>
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-medium tracking-wider rounded-sm">
                  Article #{activeItem.id.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Title Overlay on Mobile/Tablet */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-1">
                  {activeItem.subtitle}
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            {/* Technical Specifications Panel */}
            <div className="p-6 md:p-8 space-y-6 bg-card/60">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {activeItem.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">Tannage Method</span>
                  <span className="text-xs font-semibold text-white block">{activeItem.tannage}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">Caliper / Temper</span>
                  <span className="text-xs font-semibold text-white block">{activeItem.temper}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">Recommended Use</span>
                  <span className="text-xs font-semibold text-white block">{activeItem.application}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gold">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Custom Strike-Offs & Swatches Available Upon Request</span>
                </div>
                <Button 
                  size="sm" 
                  asChild
                  className="bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.14em] text-xs px-5 py-2.5 rounded-sm"
                >
                  <Link to={`/contact?subject=Sample+Request:+${encodeURIComponent(activeItem.title)}`}>
                    Request Swatch
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Interactive Material Selector Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-2 mb-4">
              <span className="text-xs uppercase tracking-widest text-gold font-medium flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                Select Material To Inspect
              </span>
              <p className="text-xs text-gray-400">Click any hide article below to review technical tannage and caliper specs.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 flex-grow">
              {bespokeItems.map((item) => {
                const isSelected = item.id === activeItem.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className={`text-left p-3 rounded-lg border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                      isSelected 
                        ? "bg-card border-gold shadow-[0_0_15px_rgba(197,160,89,0.2)] ring-1 ring-gold" 
                        : "bg-card/40 border-white/10 hover:border-gold/40 hover:bg-card/70"
                    }`}
                  >
                    <div className="aspect-[4/3] w-full rounded overflow-hidden mb-2 relative bg-black/50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gold shadow-sm" />
                      )}
                    </div>
                    <div>
                      <h4 className={`text-xs font-semibold uppercase tracking-wider truncate ${isSelected ? "text-gold" : "text-white group-hover:text-gold"}`}>
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeGallery;
