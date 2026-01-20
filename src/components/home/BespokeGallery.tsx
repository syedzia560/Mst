import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const bespokeItems = [
  {
    id: 1,
    image: "/images/bespoke/product1.jpg",
    title: "Vibrant Textures",
    subtitle: "Custom Finishes",
    link: "/services"
  },
  {
    id: 2,
    image: "/images/bespoke/product2.jpg",
    title: "Exotic Grains",
    subtitle: "Premium Selection",
    link: "/services"
  },
  {
    id: 3,
    image: "/images/bespoke/product3.jpg",
    title: "Rich Tones",
    subtitle: "Color Mastery",
    link: "/services"
  },
  {
    id: 4,
    image: "/images/bespoke/product4.jpg",
    title: "Soft Touch",
    subtitle: "Garment Leather",
    link: "/services"
  },
   {
    id: 5,
    image: "/images/bespoke/product5.jpg",
    title: "Metallic Series",
    subtitle: "Modern Aesthetics",
    link: "/services"
  },
  {
    id: 6,
    image: "/images/bespoke/product6.jpg",
    title: "Patent Leather",
    subtitle: "High Gloss",
    link: "/services"
  },
  {
    id: 7,
    image: "/images/bespoke/product7.jpg",
    title: "Embossed Designs",
    subtitle: "Geometric Patterns",
    link: "/services"
  },
  {
    id: 8,
    image: "/images/bespoke/product8.jpg",
    title: "Classic Nappa",
    subtitle: "Timeless Quality",
    link: "/services"
  }
];

const BespokeGallery = () => {
  return (
    <section className="bg-background py-20 lg:py-32 border-b border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center justify-center gap-3">
             <span className="w-8 h-[1px] bg-gold" />
             Exclusive Collection
             <span className="w-8 h-[1px] bg-gold" />
           </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white uppercase leading-none">
            Bespoke <span className="text-gold">Concepts</span>
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg max-w-2xl mx-auto">
             A showcase of our versatility in color, texture, and finish. From bold metallics to classic grains, we engineer softness and durability into every square foot.
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
                alt={item.title}
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
        <div className="mt-16 text-center">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black rounded-none uppercase tracking-widest px-10 py-6 text-sm font-bold transition-all duration-300" asChild>
                <Link to="/services">
                    Explore Full Catalog
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default BespokeGallery;
