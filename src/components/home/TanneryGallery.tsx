import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    image: "/images/tannery/factory_exterior_1.jpg",
    title: "Main Facility",
    subtitle: "Shafi Group Tannery",
    link: "/about"
  },
  {
    id: 2,
    image: "/images/tannery/factory_arch.jpg",
    title: "Entrance Arch",
    subtitle: "Modern Infrastructure",
    link: "/about"
  },
  {
    id: 3,
    image: "/images/tannery/factory_pathway.jpg",
    title: "Green Premises",
    subtitle: "Environmental Care",
    link: "/about"
  },
  {
    id: 4,
    image: "/images/tannery/effluent_treatment_plant.jpg",
    title: "Sustainability",
    subtitle: "Modern Treatment Plant",
    link: "/social-responsibility"
  },
  {
    id: 5,
    image: "/images/tannery/tanning_drums.png",
    title: "Tanning Process",
    subtitle: "Industrial Capacity",
    link: "/services"
  },
  {
    id: 6,
    image: "/images/tannery/dyeing.jpg",
    title: "Dyeing Process",
    subtitle: "Precision Coloring",
    link: "/services"
  },
  {
    id: 7,
    image: "/images/tannery/quality_control.jpg",
    title: "Quality Control",
    subtitle: "Rigorous Inspection",
    link: "/services"
  },
  {
    id: 8,
    image: "/images/tannery/raw_material.jpg",
    title: "Raw Material",
    subtitle: "Premium Wet Blue",
    link: "/services"
  },
  {
    id: 9,
    image: "/images/tannery/crust_leather.jpg",
    title: "Crust Leather",
    subtitle: "Vibrant Selection",
    link: "/services"
  },
  {
    id: 10,
    image: "/images/tannery/finished_leather.jpg",
    title: "Finished Leather",
    subtitle: "Exquisite Quality",
    link: "/services"
  }
];

const TanneryGallery = () => {
  return (
    <section className="bg-background py-20 lg:py-32 border-b border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
             <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gold" />
                Infrastructure
              </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white uppercase leading-none">
              The <span className="text-gold">Tannery</span>
            </h2>
          </div>
          <div className="max-w-md pb-2">
             <p className="text-gray-400 font-light leading-relaxed">
               A visual tour of our modern facilities, where raw potential is transformed into the world's finest leather through precision and passion.
             </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {galleryItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.link}
              className="group relative overflow-hidden block w-full h-full"
            >
              <div className="absolute inset-0 bg-gray-900/20" /> {/* Background overlay */}
              
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-gold h-[2px] w-0 group-hover:w-16 transition-all duration-500 mb-4" />
                
                <h3 className="text-2xl font-sans font-bold text-white uppercase tracking-wide mb-1">
                  {item.title}
                </h3>
                
                <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.subtitle}
                </p>
                
                <div className="absolute top-6 right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                   <div className="p-3 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm">
                     <ArrowRight className="w-5 h-5 text-white" />
                   </div>
                </div>
              </div>
              
              {/* Border Hover Effect */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-gold/30 transition-colors duration-500" />
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <Button variant="link" className="text-white hover:text-gold uppercase tracking-widest text-sm font-bold group" asChild>
                <Link to="/services#tanning-process" className="flex items-center gap-2">
                    Discover Our Process 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default TanneryGallery;
