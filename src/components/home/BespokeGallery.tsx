import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const bespokeItems = [
  {
    id: 1,
    image: "/images/bespoke/product1.jpg",
    title: "Vibrant Aniline",
    subtitle: "Nappa Lambskin",
    link: "/services"
  },
  {
    id: 2,
    image: "/images/bespoke/product2.jpg",
    title: "Mill-Grained",
    subtitle: "Full Grain Leather",
    link: "/services"
  },
  {
    id: 3,
    image: "/images/bespoke/product3.jpg",
    title: "Drum-Dyed Crust",
    subtitle: "Rich Tonal Depth",
    link: "/services"
  },
  {
    id: 4,
    image: "/images/bespoke/product4.jpg",
    title: "Soft Nappa Glove",
    subtitle: "Garment & Glove Leather",
    link: "/services"
  },
   {
    id: 5,
    image: "/images/bespoke/product5.jpg",
    title: "Metallic Foil",
    subtitle: "Contemporary Lustre",
    link: "/services"
  },
  {
    id: 6,
    image: "/images/bespoke/product6.jpg",
    title: "Glazed Patent",
    subtitle: "High-Gloss Calfskin",
    link: "/services"
  },
  {
    id: 7,
    image: "/images/bespoke/product7.jpg",
    title: "Precision Embossed",
    subtitle: "Geometric Micro-Grain",
    link: "/services"
  },
  {
    id: 8,
    image: "/images/bespoke/product8.jpg",
    title: "Classic Smooth Nappa",
    subtitle: "Shoe Upper & Leather Goods",
    link: "/services"
  }
];

const BespokeGallery = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24 border-b border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 space-y-4">
          <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center justify-center gap-3">
             <span className="w-8 h-[1px] bg-gold" />
             Exclusive Collection
             <span className="w-8 h-[1px] bg-gold" />
           </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white uppercase leading-none">
            Signature <span className="text-gold">Leather Collections</span>
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
             A showcase of MST's versatility in custom tanning, precision drum-dyeing, and specialized finishes. From subtle metallics to smooth shoe-upper nappa, we engineer unmatched softness and tensile strength into every hide.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bespokeItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.link}
              className="group relative aspect-square overflow-hidden block w-full bg-secondary/20"
            >
              <div className="absolute inset-0 bg-gray-900/10" /> {/* Background overlay */}
              
              <img 
                src={item.image} 
                alt={`MST Signature Leather - ${item.title} (${item.subtitle})`}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-lg font-sans font-bold text-white uppercase tracking-wide mb-1">
                  {item.title}
                </h3>
                <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em]">
                  {item.subtitle}
                </p>
              </div>
              
              {/* Border Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors duration-500" />
            </Link>
          ))}
        </div>
        
        {/* Bottom Action */}
        <div className="mt-12 md:mt-16 text-center">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black rounded-none uppercase tracking-widest px-10 py-6 text-sm font-bold transition-all duration-300" asChild>
                <Link to="/fashion">
                    Explore Full Fashion Catalog
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default BespokeGallery;
