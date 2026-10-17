import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Drum, Paintbrush, Scissors, Beaker, Shield, Truck, Cog, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";

const tanningServices = [
  {
    icon: Droplets,
    step: "01",
    title: "Beam House Operations",
    tagline: "Hide Preparation & Pre-Processing",
    description: "Complete pre-tanning processes that condition raw hides for optimal tanning receptivity — removing hair, fat, and inter-fibre materials.",
    features: [
      "Soaking to restore full moisture content",
      "Liming and unhairing with controlled alkalinity",
      "Precision fleshing and trimming operations",
      "Splitting to desired grain and flesh thickness",
      "Deliming, bating, and pickling for tanning readiness",
    ],
  },
  {
    icon: Drum,
    step: "02",
    title: "Tanning Process",
    tagline: "Chrome & Vegetable Conversion",
    description: "Controlled chromium salt or vegetable tannin conversion that stabilises hide protein and imparts lasting durability, softness, or firmness.",
    features: [
      "Chrome tanning for soft, supple light leather",
      "Vegetable tanning using natural quebracho and mimosa tannins",
      "Combination tanning for hybrid properties",
      "Wet blue production for global semi-processed export",
      "Sammying and setting out for uniformity",
    ],
  },
  {
    icon: Beaker,
    step: "03",
    title: "Re-tanning & Wet Finishing",
    tagline: "Property Enhancement & Deep Dyeing",
    description: "Syntan, acrylic, and vegetable re-tanning agents applied in rotary drums — combined with penetrating dyeing and fatliquoring for final handle.",
    features: [
      "Re-tanning for area yield, fullness, and temper",
      "Drum dyeing with EU-compliant penetrating colorants",
      "Fatliquoring for defined softness and break",
      "pH adjustment and fixing for colour fastness",
      "Crust leather production ready for finishing",
    ],
  },
  {
    icon: Cog,
    step: "04",
    title: "Mechanical Operations",
    tagline: "Physical Treatment & Conditioning",
    description: "European-engineered machinery for precise thickness control, grain expression, grain softening, and controlled drying.",
    features: [
      "Shaving to ±0.1mm uniform thickness",
      "Staking and milling for pebble grain and softness",
      "Buffing and sanding for nubuck or corrected grain",
      "Vacuum and toggle drying for dimension control",
      "Conditioning and humidification before finishing",
    ],
  },
  {
    icon: Paintbrush,
    step: "05",
    title: "Finishing & Coating",
    tagline: "Surface Chemistry & Aesthetics",
    description: "Multi-layer water-based coating systems applied by roller, pad, spray, or curtain coater — delivering aniline clarity, pigment depth, or protective durability.",
    features: [
      "Aniline and semi-aniline transparent finish",
      "Pigmented base and topcoat for durability",
      "Embossing, print, and texture plate application",
      "Glazing, ironing, and polishing to specification",
      "Protective polyurethane topcoat with defined gloss",
    ],
  },
  {
    icon: Shield,
    step: "06",
    title: "Quality Testing & Release",
    tagline: "LWG-Benchmarked QA Protocol",
    description: "Every production batch is tested in our in-house laboratory against international physical, chemical, and colour fastness standards before release.",
    features: [
      "Tensile strength and tear resistance testing",
      "Colour fastness: wet, dry, light, and perspiration",
      "Thickness uniformity measurement",
      "REACH chemical compliance analysis",
      "Grain and surface defect visual grading",
    ],
  },
];

const rawMaterials = [
  { name: "Cow Hides", note: "Local & imported full grain" },
  { name: "Buffalo Hides", note: "Heavy grain for upholstery" },
  { name: "Goat Skins", note: "Premium light leather export" },
  { name: "Sheep & Lamb Skins", note: "Nappa and garment leathers" },
  { name: "Calf Skins", note: "Fine grain for luxury goods" },
];

const leatherProducts = [
  {
    name: "Wet Blue",
    subtitle: "Chrome-Tanned Semi-Processed",
    description: "Chrome-stabilised hides in wet state ready for tanneries worldwide to re-tan, dye, and finish.",
    applications: "For tanneries, crust and finished leather production",
    image: "/images/tannery/raw_material.jpg",
  },
  {
    name: "Crust Leather",
    subtitle: "Tanned, Dried & Ready",
    description: "Tanned and dried leather at crust stage, ready for finishing operations in-house or at customer facilities.",
    applications: "Finishing tanneries, leather goods manufacturers",
    image: "/images/tannery/crust_leather.jpg",
  },
  {
    name: "Finished Leather",
    subtitle: "Fully Processed & Certified",
    description: "Fully finished leather meeting REACH, LWG, and buyer-specific specifications — ready for direct manufacturing.",
    applications: "Footwear, garments, handbags, upholstery, accessories",
    image: "/images/tannery/finished_leather.jpg",
  },
  {
    name: "Specialty Leather",
    subtitle: "Custom Bespoke Articles",
    description: "Custom-developed articles featuring proprietary finishing techniques, textures, and colour developments for premium brands.",
    applications: "Designer footwear, fashion houses, heritage goods",
    image: "/images/bespoke/product6.jpg",
  },
];

const processSteps = [
  { step: "01", title: "Beam House", desc: "Soaking · Liming · Fleshing · Pickling" },
  { step: "02", title: "Tanning", desc: "Chrome · Vegetable · Wet Blue" },
  { step: "03", title: "Wet Finish", desc: "Re-tan · Dye · Fatliquor" },
  { step: "04", title: "Drying", desc: "Sammying · Setting · Toggle / Vacuum" },
  { step: "05", title: "Dry Finish", desc: "Staking · Buffing · Coating" },
  { step: "06", title: "QC & Dispatch", desc: "Testing · Certification · Shipping" },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Tannery Services & Hide-to-Leather Processing"
        description="Comprehensive industrial leather tanning services: Beam house operations, chrome & vegetable tanning, re-tanning, wet blue & crust leather export, and mechanical finishing."
        canonicalPath="/services"
        keywords="leather tanning services, beam house operations, wet blue export, crust leather production, vegetable tanning Pakistan, leather finishing Karachi"
      />
      <Header />
      <main>

        {/* ── HERO ────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 min-h-[65vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/tannery/tanning_drums.png" 
              alt="MST Tannery Drum Operations" 
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-[0.22em] font-medium">
                <Drum className="w-3.5 h-3.5" />
                Industrial Tanning Services
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Raw Hide to<br/>
                <span className="text-gold italic font-normal">Finished Leather</span>
              </h1>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl">
                Six-stage end-to-end tanning capability: from beamhouse through chrome or vegetable conversion, re-tanning, mechanical conditioning, multi-layer finishing, and LWG-benchmarked QA.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.16em] text-xs px-8 py-6 rounded-sm" asChild>
                  <Link to="/contact">Request Custom Quote</Link>
                </Button>
                <Button variant="outline" size="lg" className="border border-white/30 text-white hover:bg-white/10 rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-8 py-6" asChild>
                  <Link to="/quality">Quality Standards</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* ── PROCESS FLOW STRIP ─────────────────────── */}
        <section className="py-12 bg-card/50 border-y border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <div key={index} className="flex items-center gap-0">
                  <div className="text-center flex-shrink-0 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mx-auto mb-2 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                      <span className="text-xs font-serif font-bold text-gold group-hover:text-black transition-colors">{item.step}</span>
                    </div>
                    <h3 className="font-sans font-bold text-white text-xs uppercase tracking-wider">{item.title}</h3>
                    <p className="text-[10px] text-gray-400 max-w-[80px] mx-auto leading-tight mt-0.5">{item.desc}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-gold/40 flex-shrink-0 mx-1 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── TANNING SERVICES — INTERACTIVE PANEL ───── */}
        <section className="py-20 md:py-28 bg-background border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs">Our Capabilities</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Full-Service Tannery Operations</h2>
              <p className="text-gray-300 text-sm md:text-base">Every stage of leather production under expert control from a single facility</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
              {/* Sidebar tabs */}
              <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {tanningServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`flex-shrink-0 flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 border ${
                        activeService === index
                          ? "bg-gold/10 border-gold/50 text-white"
                          : "bg-card/50 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeService === index ? "bg-gold text-black" : "bg-white/5 text-gray-400"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-sans font-semibold text-xs uppercase tracking-wider whitespace-nowrap">{service.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Detail panel */}
              <div className="lg:col-span-8">
                {tanningServices[activeService] && (
                  <div className="bg-card/60 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl min-h-[420px] flex flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl font-serif font-bold text-gold/30">{tanningServices[activeService].step}</span>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">{tanningServices[activeService].title}</h3>
                            <p className="text-gold text-xs uppercase tracking-widest font-medium">{tanningServices[activeService].tagline}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {tanningServices[activeService].description}
                    </p>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/70 font-bold mb-4">Process Operations</p>
                      <ul className="space-y-2.5">
                        {tanningServices[activeService].features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10">
                      <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black rounded-sm text-xs uppercase tracking-wider font-semibold" asChild>
                        <Link to="/contact?inquiryType=services">
                          Inquire About This Service
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>


        {/* ── RAW MATERIALS & BULK SUPPLY ───────────── */}
        <section className="py-20 md:py-24 bg-card/20 border-b border-white/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs">Raw Material Sourcing</p>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                    Hides & Skins We Process
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    We process a diverse range of hides and skins, sourcing quality raw materials both locally from Pakistani livestock and from international certified suppliers.
                  </p>
                </div>
                <ul className="space-y-3">
                  {rawMaterials.map((material, index) => (
                    <li key={index} className="flex items-center gap-4 p-4 bg-card/60 border border-white/10 rounded-xl hover:border-gold/40 transition-colors group">
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <div className="flex-1">
                        <span className="text-white font-semibold text-sm">{material.name}</span>
                        <span className="text-gray-400 text-xs ml-2">— {material.note}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                <div className="bg-card/70 border border-gold/30 rounded-2xl p-8 shadow-2xl">
                  <Truck className="w-10 h-10 text-gold mb-5" />
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Bulk Supply & Global Export</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    MST supplies wet blue, crust, and finished leather in commercial volumes to tanneries, manufacturers, and brands in over 120 countries. Consistent quality across large-volume orders with full trade documentation.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Batch-to-batch consistency in large volumes",
                      "International shipping with full trade documentation",
                      "Custom specifications: weight, temper, thickness, finish",
                      "Just-in-time delivery programme available",
                      "Dedicated export liaison for each market",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <Button className="bg-gold text-black hover:bg-gold/90 rounded-sm uppercase tracking-[0.16em] text-xs font-semibold w-full py-5" asChild>
                      <Link to="/contact">
                        Request Export Quotation
                        <ArrowRight className="w-3 h-3 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img 
                    src="/images/tannery/dyeing.jpg" 
                    alt="MST Drum Dyeing Operations"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs text-gold uppercase tracking-widest font-medium">MST Tannery Operations</p>
                    <p className="text-sm text-white font-medium">In-house drum dyeing facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── LEATHER PRODUCTS PORTFOLIO ────────────── */}
        <section className="py-20 md:py-24 bg-background border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs">Product Offering</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Leather at Every Stage</h2>
              <p className="text-gray-300 text-sm md:text-base">From semi-processed to fully finished — choose the leather form that suits your production process</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {leatherProducts.map((product, index) => (
                <Link
                  key={index}
                  to={`/contact?inquiryType=leather&article=${encodeURIComponent(product.name)}`}
                  className="group relative overflow-hidden rounded-2xl shadow-xl border border-white/10 hover:border-gold/50 transition-all duration-300 block"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-[10px] uppercase tracking-widest bg-black/60 border border-gold/40 text-gold font-medium rounded">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-[10px] text-gold uppercase tracking-widest font-medium mb-0.5">{product.subtitle}</p>
                    <h3 className="text-base font-serif font-bold mb-1">{product.name}</h3>
                    <p className="text-xs text-gray-300 opacity-90 leading-relaxed">{product.description}</p>
                    <div className="flex items-center gap-1 mt-3 text-gold text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* ── CTA ─────────────────────────────────────── */}
        <section className="py-20 bg-card/20 border-t border-white/5">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <p className="text-gold text-xs uppercase tracking-[0.25em] font-medium mb-4">Trade Inquiry</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Need Custom Tanning Solutions?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Tell us your specifications — leather type, weight, temper, finish, and quantity. Our experienced technical team will advise on the best process path and deliver exactly what you need.
            </p>
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.16em] text-xs px-10 py-6 rounded-sm shadow-xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <Scissors className="w-4 h-4" />
                Get a Custom Quote
                <ArrowRight className="w-4 h-4" />
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
