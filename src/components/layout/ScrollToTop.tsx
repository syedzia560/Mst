import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] p-4 rounded-full bg-gold/90 text-background shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group border border-white/20",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
      
      {/* Ripple/Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20 -z-10 group-hover:opacity-40 transition-opacity" />
    </button>
  );
};

export default ScrollToTop;
