import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Drum, Paintbrush, Scissors, Beaker, Shield, Truck, Cog } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const tanningServices = [
  {
    icon: Droplets,
    title: "Beam House Operations",
    description: "Complete pre-tanning processes for hide preparation",
    features: [
      "Soaking to restore moisture content",
      "Liming and unhairing treatment",
      "Fleshing and trimming operations",
      "Splitting to desired thickness",
      "Deliming, bating, and pickling",
    ],
  },
  {
    icon: Drum,
    title: "Tanning Process",
    description: "Chrome and vegetable tanning for different leather types",
    features: [
      "Chrome tanning for soft, durable leather",
      "Vegetable tanning using natural tannins",
      "Combination tanning methods",
      "Wet blue production",
      "Sammying and setting out",
    ],
  },
  {
    icon: Beaker,
    title: "Re-tanning & Wet Finishing",
    description: "Enhancing leather properties and characteristics",
    features: [
      "Re-tanning for specific properties",
      "Dyeing with penetrating colors",
      "Fatliquoring for softness",
      "pH adjustment and fixing",
      "Crust leather production",
    ],
  },
  {
    icon: Cog,
    title: "Mechanical Operations",
    description: "Physical treatment for texture and quality",
    features: [
      "Shaving to uniform thickness",
      "Staking for softness",
      "Buffing and sanding",
      "Milling for pebble grain",
      "Vacuum and toggle drying",
    ],
  },
  {
    icon: Paintbrush,
    title: "Finishing & Coating",
    description: "Final surface treatment and aesthetics",
    features: [
      "Aniline and semi-aniline finish",
      "Pigmented coating for durability",
      "Embossing patterns and textures",
      "Glazing and polishing",
      "Protective topcoat application",
    ],
  },
  {
    icon: Shield,
    title: "Quality Testing",
    description: "Rigorous testing to ensure standards",
    features: [
      "Tensile strength testing",
      "Color fastness analysis",
      "Thickness uniformity check",
      "Chemical compliance testing",
      "Grain and surface inspection",
    ],
  },
];

const leatherProducts = [
  {
    name: "Wet Blue Leather",
    description: "Chrome-tanned hides ready for further processing by tanneries worldwide",
    applications: "For tanneries, crust leather production",
    image: "/images/tannery/raw_material.jpg",
  },
  {
    name: "Crust Leather",
    description: "Tanned and dried leather ready for finishing operations",
    applications: "For finishing tanneries, manufacturers",
    image: "/images/tannery/crust_leather.jpg",
  },
  {
    name: "Finished Leather",
    description: "Fully processed leather ready for product manufacturing",
    applications: "Footwear, garments, upholstery, accessories",
    image: "/images/tannery/finished_leather.jpg",
  },
  {
    name: "Specialty Leather",
    description: "Custom-finished leather with unique properties",
    applications: "Premium goods, designer products",
    image: "/images/bespoke/product6.jpg",
  },
];

const rawMaterials = [
  "Cow Hides (local and imported)",
  "Buffalo Hides",
  "Goat Skins",
  "Sheep Skins",
  "Calf Skins",
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">
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
                Tannery Services
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Complete Leather Tanning & Processing
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                From raw hides to finished leather—our tannery offers end-to-end 
                processing with beam house, tanning, and finishing capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Tanning Process Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
                Our Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Full-Service Tannery Operations
              </h2>
              <p className="text-gray-400">
                Every stage of leather production under expert control
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tanningServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-white mb-3 uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Raw Materials */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Raw Material Processing
                </h2>
                <p className="text-gray-400 mb-6">
                  We process a variety of hides and skins, sourcing quality raw materials 
                  locally and from international suppliers.
                </p>
                <ul className="space-y-3">
                  {rawMaterials.map((material, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-sm">
                <Truck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-sans font-bold text-white uppercase tracking-wider mb-3">Bulk Supply & Export</h3>
                <p className="text-gray-400 text-sm mb-4">
                  We supply wet blue, crust, and finished leather in bulk quantities to tanneries, 
                  manufacturers, and brands in 50+ countries.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Consistent quality in large volumes</li>
                  <li>• International shipping with documentation</li>
                  <li>• Custom specifications available</li>
                  <li>• Just-in-time delivery options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leather Products */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
                What We Produce
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Leather at Every Stage
              </h2>
              <p className="text-gray-400">
                From semi-processed to fully finished—choose the leather that suits your needs
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leatherProducts.map((product, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="text-lg font-sans font-bold mb-1 uppercase tracking-wider">{product.name}</h3>
                    <p className="text-sm opacity-90 mb-2">{product.description}</p>
                    <p className="text-xs opacity-70">{product.applications}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tannery Process Flow */}
        <section id="tanning-process" className="py-24 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Our Tanning Process
              </h2>
              <p className="text-gray-400">
                A proven process ensuring consistent quality from raw hide to finished leather
              </p>
            </div>

            <div className="grid md:grid-cols-6 gap-4">
              {[
                { step: "01", title: "Beam House", desc: "Soaking, liming, fleshing" },
                { step: "02", title: "Tanning", desc: "Chrome or vegetable" },
                { step: "03", title: "Wet Finish", desc: "Re-tan, dye, fatliquor" },
                { step: "04", title: "Drying", desc: "Sammying, setting, drying" },
                { step: "05", title: "Dry Finish", desc: "Staking, coating" },
                { step: "06", title: "Delivery", desc: "QC & shipping" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-lg font-serif font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-sans font-bold text-white text-sm mb-1 uppercase tracking-wider">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                  {index < 5 && (
                    <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-leather-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Need Custom Tanning Solutions?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Tell us your specifications—leather type, thickness, finish, and quantity. 
              Our tannery can deliver exactly what you need.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Get a Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
