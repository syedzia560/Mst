import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Beaker, Palette, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

const innovationPillars = [
  {
    icon: Palette,
    title: "Precision Color Science",
    subtitle: "Spectrophotometric Accuracy",
    description: "We deploy advanced digital color-matching and spectrophotometry to ensure Delta-E tolerances within strict international luxury fashion house benchmarks. Our technicians forecast seasonal palettes twice a year in sync with Milan and Paris.",
  },
  {
    icon: Cpu,
    title: "Surface & Texture Engineering",
    subtitle: "Tactile Mastery",
    description: "From buttery-soft nappa and wax-pull-up to micro-perforated and bespoke pebble grains, we engineer customized touch and temper through specialized mechanical milling, vacuum drying, and roller-coating.",
  },
  {
    icon: Beaker,
    title: "Green Chemistry & Bio-Tanning",
    subtitle: "Eco-Conscious R&D",
    description: "Pioneering chrome-free (wet white) tanning, aldehyde-free formulas, and vegetable-extract tanning agents. Our laboratory actively formulates recipes compliant with ZDHC MRSL Level 3 standards.",
  },
  {
    icon: Sparkles,
    title: "Rapid Prototyping Lab",
    subtitle: "From Swatch to Scale",
    description: "Our dedicated pilot tannery develops pilot lots and custom finish swatches within 5 business days, allowing designers and product developers to evaluate physical samples without delaying seasonal launches.",
  },
];

const labShowcase = [
  {
    image: "/images/laboratory/IMG_1391.JPG",
    title: "Digital Colorimeter & Tensile Testing",
    description: "Computerized tensile, tear strength, and elongation measurement ensuring structural integrity across every batch.",
  },
  {
    image: "/images/laboratory/IMG_1392.JPG",
    title: "Chemical Compliance Station",
    description: "In-house wet chemistry screening for pH, chromium VI reduction, fat liquor absorption, and water repellency.",
  },
  {
    image: "/images/laboratory/IMG-20161129-00584.jpg",
    title: "Sample Dyeing & Pilot Drums",
    description: "Miniature stainless steel test drums replicating full industrial conditions for custom color trial formulations.",
  },
  {
    image: "/images/laboratory/IMG-20161129-00586.jpg",
    title: "Rub Fastness & Finish Durability",
    description: "Veslic testing for dry and wet crocking fastness, flexometer testing up to 100,000 cycles for luxury footwear.",
  },
];

const InnovationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Leather Innovation & Technical R&D"
        description="Explore MST's cutting-edge leather innovation: color science, texture engineering, eco-friendly tanning chemistry, and pilot laboratory facilities."
        canonicalPath="/innovation"
        keywords="leather innovation, leather R&D lab Karachi, color spectrophotometry leather, sustainable tanning chemistry, chrome-free leather, MST technology"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 min-h-[55vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="MST Leather Research & Innovation Center" 
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="container px-4 relative z-10 max-w-4xl">
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">Pioneering The Future</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">Innovation in Leather</h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              At Shafi, innovation is not merely about machinery—it is the harmonious fusion of generational artisanship, European design trends, and state-of-the-art chemical engineering.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 bg-background border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Our Philosophy</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
                Translating Future Trends into Tangible Touch
              </h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                At Shafi, we envision and translate global trends into tangible expressions onto our leathers, focusing on <span className="text-white font-medium">Colour, Texture, and Hand-Feel</span> effects. We believe that accurate color information is vital to our business and marks the decisive difference between a bestseller and an obsolete product.
              </p>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                We liaise closely with European fashion & trend consultants in Italy, the UK, and France. Our forecasts empower creative directors with new inspiration, certainty, and supreme technical confidence.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section className="py-24 bg-secondary/10 border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Technical Capabilities</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
                Core Innovation Pillars
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {innovationPillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="bg-white/[0.02] p-8 md:p-10 border border-white/10 shadow-xl backdrop-blur-sm hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                    <pillar.icon className="w-7 h-7 text-gold" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-gold/80 font-bold mb-2">{pillar.subtitle}</p>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory & Testing Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Validation & Rigor</p>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
                  In-House Testing Facility
                </h2>
                <p className="text-gray-400 font-light">
                  Every batch of leather undergoes multi-point testing before shipment release.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {labShowcase.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/[0.02] border border-white/10 overflow-hidden group flex flex-col justify-between"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-black/50">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        loading="lazy" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <h4 className="font-serif font-bold text-white text-base group-hover:text-gold transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Collaborative CTA */}
              <div className="p-6 sm:p-10 md:p-14 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 rounded-sm text-center space-y-6">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-white">
                  Have a Custom Finish or Article in Mind?
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto font-light">
                  Our laboratory team develops custom formulations tailored to your brand's strict technical, aesthetic, and environmental specifications.
                </p>
                <div>
                  <Button 
                    variant="outline" 
                    className="border border-gold text-gold hover:bg-gold hover:text-black rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-4 sm:px-8 py-4 sm:py-6 max-w-full text-center whitespace-normal sm:whitespace-nowrap inline-flex items-center justify-center"
                    asChild
                  >
                    <Link to="/contact">Request Custom Formulation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InnovationPage;
