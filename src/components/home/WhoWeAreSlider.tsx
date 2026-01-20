import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const WhoWeAreSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const slides = [
    {
      url: "/images/tannery/factory_exterior_1.jpg",
      alt: "Shafi Group Tannery - Main Facility",
    },
    {
      url: "/images/tannery/factory_exterior_2.jpg",
      alt: "Modern Manufacturing Facility",
    },
    {
      url: "/images/tannery/factory_arch.jpg",
      alt: "Factory Entrance Arch",
    },
    {
      url: "/images/tannery/factory_pathway.jpg",
      alt: "Green Factory Premises",
    },
  ];

  return (
    <div className="relative overflow-hidden group" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative">
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover aspect-[4/3] grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        ))}
      </div>
      
      {/* Visual Indicator/Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className="w-2 h-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/10"
          />
        ))}
      </div>
    </div>
  );
};

export default WhoWeAreSlider;
