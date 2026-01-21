import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Drum, Award, Globe, Beaker, Leaf } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TanneryGallery from "@/components/home/TanneryGallery";
import BespokeGallery from "@/components/home/BespokeGallery";
import WhoWeAreSlider from "@/components/home/WhoWeAreSlider";

import Counter from "@/components/ui/Counter";

const stats = [
  { value: 120, suffix: "+", label: "Countries" },
  { value: 15, suffix: " Million", label: "Sq. Feet Annual Production" },
  { value: 25584, suffix: "", label: "Sq. Meter Production Area" },
];

const services = [
  {
    icon: Droplets,
    title: "Beam House Operations",
    description: "Complete pre-tanning processes including soaking, liming, fleshing, and bating for optimal hide preparation.",
  },
  {
    icon: Drum,
    title: "Tanning & Crusting",
    description: "Chrome, vegetable, and combination tanning with expert crusting for superior leather quality.",
  },
  {
    icon: Beaker,
    title: "Wet Finishing",
    description: "Re-tanning, dyeing, and fatliquoring to achieve your desired softness, color, and character.",
  },
  {
    icon: Globe,
    title: "Global Export",
    description: "Reliable export of wet blue, crust, and finished leather to manufacturers worldwide.",
  },
];

const tanningMethods = [
  {
    icon: Leaf,
    title: "Vegetable Tanning",
    description: "Traditional, eco-friendly tanning using natural tannins from tree bark. Ideal for belts, saddles, and premium goods.",
  },
  {
    icon: Beaker,
    title: "Chrome Tanning",
    description: "Modern tanning for soft, supple leather with excellent durability. Preferred for footwear and garments.",
  },
  {
    icon: Award,
    title: "Combination Tanning",
    description: "Best of both worlds—combining chrome and vegetable methods for specialized applications.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video with Overlay */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              poster="/factory-hero.jpg"
            >
              <source src="/video/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Darker, cinematic overlay */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
            
            {/* Subtle animated particles/glows - kept minimal */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse opacity-20" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
             <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-in-up">
                <div className="space-y-4">
                  <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center justify-center gap-4 opacity-80">
                    <span className="w-12 h-[1px] bg-gold" />
                    Est. 1959
                    <span className="w-12 h-[1px] bg-gold" />
                  </p>
                  <h1 className="font-serif font-bold text-white leading-none tracking-tight">
                    <span className="block text-4xl md:text-6xl lg:text-7xl mb-2 text-white/90 uppercase">
                       We Are Innovators
                    </span>
                    <span className="block text-5xl md:text-7xl lg:text-9xl text-gold uppercase drop-shadow-2xl">
                       We Are Shafi
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide mt-6">
                    Pakistan's Premier <span className="text-gold font-medium">LWG Gold Rated</span> Tannery
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black rounded-none uppercase tracking-widest px-8 py-6 text-sm font-bold transition-all duration-300" asChild>
                    <Link to="/about">
                      About Us
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest px-8 py-6 text-sm font-bold transition-all duration-300" asChild>
                    <Link to="/services">Our Work</Link>
                  </Button>
                </div>
              </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary border-b border-white/5 relative overflow-hidden">
             <div className="container mx-auto px-4 lg:px-8 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                     {stats.map((stat, index) => (
                         <div key={index} className="flex flex-col items-center justify-center p-4 group">
                             <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-2 group-hover:scale-105 transition-transform duration-300">
                                 <Counter end={stat.value} suffix={stat.suffix} />
                             </h3>
                             <p className="text-white/80 uppercase tracking-widest text-sm md:text-base font-light">
                                 {stat.label}
                             </p>
                         </div>
                     ))}
                 </div>
             </div>
        </section>

        {/* Director's Message Section */}
        <section className="py-32 bg-background relative overflow-hidden">
             {/* Decorative background elements */}
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(184,134,11,0.05),transparent_50%)]" />
             
             <div className="container mx-auto px-4 lg:px-8 relative z-10">
                 <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                     {/* Video Player Side */}
                     <div className="w-full lg:w-1/2 group">
                         <div className="relative rounded-none overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black">
                            <video 
                                controls
                                preload="metadata"
                                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                poster="/factory-hero.jpg"
                            >
                                <source src="/video/director-message.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* Premium frame effect */}
                            <div className="absolute inset-0 border-[1px] border-white/5 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                         </div>
                     </div>
                     
                     {/* Text Side - Glassmorphic Container */}
                     <div className="w-full lg:w-1/2">
                         <div className="relative p-8 md:p-12 bg-white/[0.02] backdrop-blur-sm border border-white/5 shadow-2xl">
                             <div className="space-y-8">
                                 <div className="space-y-4">
                                     <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center gap-3 font-sans">
                                        <span className="w-12 h-[1px] bg-gold" />
                                        Legacy
                                     </p>
                                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                                        Visionary Leadership
                                     </h2>
                                 </div>
                                 
                                 <div className="relative">
                                     <span className="absolute -top-6 -left-4 text-7xl text-gold/10 font-serif leading-none">"</span>
                                     <blockquote className="text-2xl md:text-3xl text-gray-200 font-serif italic leading-relaxed relative z-10">
                                        At Shafi, we don't just make leather; we create art that lasts a lifetime. Our legacy is built on the perfect balance of traditional craftsmanship and modern innovation.
                                     </blockquote>
                                 </div>
                                 
                                 <div className="pt-8 flex items-center gap-6">
                                    <div className="w-12 h-[1px] bg-gold/50" />
                                    <div>
                                        <h4 className="text-xl font-sans font-bold text-white uppercase tracking-widest">Amjad Hafeez</h4>
                                        <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mt-2 font-medium">Director MST</p>
                                    </div>
                                 </div>
                             </div>
                             
                             {/* Decorative accent */}
                             <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-3xl" />
                         </div>
                     </div>
                 </div>
             </div>
        </section>



        {/* Tannery Gallery Section */}
        <TanneryGallery />
        
        {/* Bespoke Concepts Gallery */}
        <BespokeGallery />

        {/* About / More Info Section */}
        <section className="py-24 bg-background border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
               <div className="w-full md:w-1/2">
                   <WhoWeAreSlider />
               </div>
               <div className="w-full md:w-1/2 space-y-8">
                <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gold" />
                  Who We Are
                </p>
                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-none uppercase">
                    More Than Just<br />A Tannery
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                    <p>
                        Established over six decades ago, <span className="text-white font-medium">Muhammad Shafi Tanneries</span> has evolved into a global powerhouse. We engineer leather that meets the exacting standards of the world's most prestigious fashion houses.
                    </p>
                    <p>
                        Our facility combines the artistry of traditional tanning with cutting-edge technology, ensuring every square foot is a testament to quality, sustainability, and innovation.
                    </p>
                </div>
                <div className="pt-4">
                     <Button variant="link" className="text-gold p-0 h-auto text-lg uppercase tracking-widest hover:text-white transition-colors" asChild>
                         <Link to="/about">Read Our Full Story &rarr;</Link>
                     </Button>
                </div>
               </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        {/* Executive Director Section */}
        <section className="py-32 bg-secondary/5 relative overflow-hidden">
             {/* Decorative background elements */}
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(184,134,11,0.05),transparent_50%)]" />
             
             <div className="container mx-auto px-4 lg:px-8 relative z-10">
                 <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                     {/* Video Player Side */}
                     <div className="w-full lg:w-1/2 group">
                         <div className="relative rounded-none overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black">
                            <video 
                                controls
                                preload="metadata"
                                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                poster="/factory-hero.jpg"
                            >
                                <source src="/video/executive%20director.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* Premium frame effect */}
                            <div className="absolute inset-0 border-[1px] border-white/5 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                         </div>
                     </div>
                     
                     {/* Text Side - Glassmorphic Container */}
                     <div className="w-full lg:w-1/2">
                         <div className="relative p-8 md:p-12 bg-white/[0.02] backdrop-blur-sm border border-white/5 shadow-2xl">
                             <div className="space-y-8">
                                 <div className="space-y-4">
                                     <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center gap-3 font-sans">
                                        <span className="w-12 h-[1px] bg-gold" />
                                        Leadership
                                     </p>
                                     <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                                        Driving Innovation
                                     </h2>
                                 </div>
                                 
                                 <div className="relative">
                                     <span className="absolute -top-6 -left-4 text-7xl text-gold/10 font-serif leading-none">"</span>
                                     <blockquote className="text-2xl md:text-3xl text-gray-200 font-serif italic leading-relaxed relative z-10">
                                        Embracing modern technology while honoring our heritage defines our path forward. We are committed to sustainable excellence in every piece of leather we craft.
                                     </blockquote>
                                 </div>
                                 
                                 <div className="pt-8 flex items-center gap-6">
                                    <div className="w-12 h-[1px] bg-gold/50" />
                                    <div>
                                        <h4 className="text-xl font-sans font-bold text-white uppercase tracking-widest">Haris Hafeez</h4>
                                        <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mt-2 font-medium">Executive Director</p>
                                    </div>
                                 </div>
                             </div>
                             
                             {/* Decorative accent */}
                             <div className="absolute top-0 left-0 w-24 h-24 bg-gold/5 rounded-full blur-3xl" />
                         </div>
                     </div>
                 </div>
             </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 bg-secondary border-b border-white/5">
             <div className="container mx-auto px-4 lg:px-8">
                 <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                     {/* Vision Card */}
                     <div className="bg-background/50 p-10 lg:p-12 border-l-2 border-gold hover:bg-background transition-colors duration-300 group">
                         <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6 rounded-none">
                             <Globe className="w-6 h-6 text-gold" />
                         </div>
                         <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase tracking-wide">Our Vision</h3>
                         <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                             "To be recognized globally as the undisputed leader in sustainable leather manufacturing, setting the benchmark for quality, ethical practices, and environmental stewardship."
                         </p>
                     </div>

                     {/* Mission Card */}
                     <div className="bg-background/50 p-10 lg:p-12 border-l-2 border-white hover:bg-background transition-colors duration-300 group">
                         <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 rounded-none">
                             <Award className="w-6 h-6 text-white" />
                         </div>
                         <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase tracking-wide">Our Mission</h3>
                         <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                             "To produce world-class leather through continuous innovation and sustainable processes, delivering value to our customers while empowering our workforce."
                         </p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Tannery Services Preview */}
        <section className="py-32 bg-background relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-gold" />
                Tannery Operations
                <span className="w-8 h-[1px] bg-gold" />
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase">
                Hide-to-Leather Processing
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-background p-10 hover:bg-secondary/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-transparent flex items-center justify-start mb-6">
                    <service.icon className="w-8 h-8 text-white group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-3 uppercase tracking-wide group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest text-xs font-bold px-10 py-6" asChild>
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Tanning Methods */}
        <section className="py-32 bg-secondary relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-gold" />
                Expertise
                <span className="w-8 h-[1px] bg-gold" />
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase">
                Tanning Methods
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {tanningMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-transparent border border-white/10 p-10 hover:border-gold/50 transition-colors duration-300 group text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:shadow-gold transition-all duration-500">
                    <method.icon className="w-10 h-10 text-white group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase tracking-wide group-hover:text-gold transition-colors">{method.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* CTA Section */}
        <section className="py-32 bg-background relative overflow-hidden border-t border-white/5">
          {/* Premium background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
          
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6">Partner With Us</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-none uppercase text-white">
                Ready to Create<br />Exceptional Leather?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 font-light">
                Whether you need wet blue, crust leather, or fully finished leather, 
                our tannery delivers consistent quality for your production needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="outline" size="xl" className="border-gold text-gold hover:bg-gold hover:text-black rounded-none uppercase tracking-widest text-sm font-bold px-12 py-8" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white/20 text-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest text-sm font-bold px-12 py-8"
                  asChild
                >
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
