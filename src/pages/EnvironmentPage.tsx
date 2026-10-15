import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Droplets,
  Sun,
  Recycle,
  ShieldCheck,
  Award,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const sustainabilityMetrics = [
  {
    icon: Droplets,
    metric: "Biological ETP",
    label: "Process Water Treatment",
    description:
      "Multi-stage European biological wastewater clarification and aeration compliant with SEPA standards.",
  },
  {
    icon: Sun,
    metric: "Solar PV",
    label: "Clean Energy Transition",
    description:
      "Industrial rooftop solar photovoltaic array supplementing grid electricity for daylight operations.",
  },
  {
    icon: Recycle,
    metric: "Closed-Loop",
    label: "Chrome Precipitation",
    description:
      "In-house recovery loops reclaim and recycle chromium salts from spent tannery bath liquor.",
  },
  {
    icon: ShieldCheck,
    metric: "ZDHC Level 3",
    label: "MRSL Conformance",
    description:
      "Strict elimination of hazardous priority substances, banned Azo colorants, and hexavalent chromium.",
  },
];

const pillars = [
  {
    title: "Advanced Effluent Treatment Plant (ETP)",
    image: "/images/tannery/effluent_treatment_plant.jpg",
    description:
      "Equipped with primary clarification, biological aeration basins, and multi-media filtration to ensure discharged water comfortably meets Sindh Environmental Protection Agency (SEPA) and LWG environmental requirements.",
  },
  {
    title: "Closed-Loop Chrome Recovery Unit",
    image: "/images/tannery/tanning_drums.png",
    description:
      "Our dedicated chrome precipitation plant intercepts spent tanning baths, separating and recovering chromium salts for reuse in subsequent tannage batches, significantly diminishing chemical waste.",
  },
];

const EnvironmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Environmental Sustainability & LWG Gold Commitment"
        description="Muhammad Shafi Tanneries (MST) is an ISO 14001:2015 certified and LWG Gold Rated tannery. Committed to eco-friendly tanning, chrome recovery, and biological effluent treatment in Karachi, Pakistan."
        canonicalPath="/environment"
        keywords="LWG Gold tannery Pakistan, ISO 14001 leather, effluent treatment plant tannery, chrome recovery plant leather, sustainable leather manufacturing, eco friendly leather Karachi"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pb-20 min-h-[50vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg.jpg"
              alt="MST Environmental Management Facility"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="container px-4 relative z-10 max-w-4xl space-y-4">
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              LWG Gold Standard
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
              Environmental Stewardship
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
              Advancing responsible leather manufacturing in South Asia through closed-loop recycling,
              rooftop solar power, and verified wastewater management.
            </p>
          </div>
        </section>

        {/* Metrics Banner */}
        <section className="py-12 md:py-16 bg-secondary/20 border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {sustainabilityMetrics.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/[0.02] p-6 md:p-8 border border-white/10 text-center hover:border-gold/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-2">
                    {item.metric}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-white font-bold mb-2">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policy & Core Infrastructure */}
        <section className="py-16 md:py-20 lg:py-24 bg-background border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                  Eco-Conscious Infrastructure
                </p>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
                  Cleaner Production Technologies
                </h2>
                <p className="text-gray-400 font-light text-sm md:text-base">
                  MST operates one of the most sophisticated privately managed industrial environmental
                  systems in the Karachi industrial corridor.
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                {pillars.map((pillar, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm group"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-black/60 relative">
                      <img
                        src={pillar.image}
                        alt={`MST Tannery Environmental Infrastructure - ${pillar.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 md:p-10 space-y-4">
                      <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* LWG Gold Presentation (TASK 6) */}
              <div className="bg-white/[0.02] p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-sm space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest font-bold">
                      <Award className="w-4 h-4" /> Global Benchmark
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                      Leather Working Group (LWG) Audit Protocol
                    </h3>
                    <p className="text-sm text-gray-400 font-light max-w-2xl">
                      Muhammad Shafi Tanneries (Pvt.) Ltd is audited under the Leather Working Group
                      (LWG) environmental assessment protocol, reflecting global best practices in chemical
                      stewardship, resource management, and social compliance.
                    </p>
                  </div>
                  <div>
                    <a
                      href="https://www.leatherworkinggroup.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-gold hover:text-black border border-white/20 hover:border-gold text-xs uppercase font-bold tracking-widest text-gold transition-all duration-300"
                    >
                      Visit Official LWG Portal <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300 font-light">
                  <div className="space-y-2">
                    <h4 className="text-white font-serif font-bold text-base flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gold" /> Comprehensive Audit
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Evaluates water consumption, energy efficiency, waste minimization, air emissions,
                      and full environmental regulatory compliance.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-serif font-bold text-base flex items-center gap-2">
                      <Recycle className="w-4 h-4 text-gold" /> Supply Chain Integrity
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Rigorous raw material traceability tracking hides from licensed sources through
                      tannery processing and finished batch distribution.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-serif font-bold text-base flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-gold" /> Audit Documentation
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Official LWG certificate copy, audit date reference, and URN are furnished upon
                      verified corporate inquiry.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-amber-300/80 italic">
                    * Note: Certificate copies and verified URN references are provided directly to
                    authorized brand sourcing desks.
                  </p>
                  <Link
                    to="/contact?inquiryType=lwg"
                    className="text-xs uppercase tracking-widest text-gold hover:text-white font-bold transition-colors"
                  >
                    Request LWG Compliance Dossier →
                  </Link>
                </div>
              </div>

              {/* Solar Energy Technical Profile (TASK 8) */}
              <div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 ring-1 ring-gold/30 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                      Industrial Rooftop Solar PV Generation
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-gold font-medium">
                      Clean Energy Infrastructure
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  As part of MST's decarbonization roadmap under ISO 14001:2015, our manufacturing facility
                  in Karachi has integrated rooftop solar photovoltaic generation to supply clean renewable
                  power to core production operations during peak sunlight hours.
                </p>
                <div className="p-4 bg-black/40 border border-white/10 text-xs text-gray-400 space-y-2">
                  <p className="text-white font-semibold">Technical Documentation Notice:</p>
                  <p>
                    Specific peak power capacity (kWp), cumulative annual generation figures, and certified
                    aerial photography of the rooftop solar array are undergoing formal management review
                    for publication in the upcoming MST Corporate ESG Report.
                  </p>
                </div>
              </div>

              {/* Official EMS & ISO Certification Box */}
              <div className="bg-white/[0.02] p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-sm grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest font-bold">
                    <Award className="w-4 h-4" /> ISO 14001:2015 Certified
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Environmental Management System (EMS)
                  </h3>
                  <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                    Certified scope:{" "}
                    <span className="text-white font-medium">
                      "Manufacturing of Leather (From Raw to Finish)"
                    </span>
                    . Our compliance regime includes periodic external audits, waste minimisation, and
                    continuous monitoring of effluent parameters.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-gold flex-shrink-0" /> Full substitution with Azo-free
                      and PCP-free eco-chemicals
                    </li>
                    <li className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-gold flex-shrink-0" /> Leather Working Group (LWG)
                      environmental audit compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-gold flex-shrink-0" /> Continual staff environmental
                      safety and chemical handling training
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center items-center gap-6 p-4">
                  <div className="bg-white/5 p-4 border border-white/10 rounded text-center">
                    <img
                      src="/images/iso_14001_cert.png"
                      alt="ISO 14001:2015 Certificate"
                      loading="lazy"
                      className="max-h-48 w-auto object-contain mx-auto"
                    />
                    <p className="text-[10px] uppercase tracking-widest text-gold mt-2 font-bold">
                      ISO 14001:2015
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 border border-white/10 rounded text-center">
                    <img
                      src="/images/iso_9001_cert.png"
                      alt="ISO 9001:2015 Certificate"
                      loading="lazy"
                      className="max-h-48 w-auto object-contain mx-auto"
                    />
                    <p className="text-[10px] uppercase tracking-widest text-gold mt-2 font-bold">
                      ISO 9001:2015
                    </p>
                  </div>
                </div>
              </div>

              {/* Inquire CTA */}
              <div className="p-8 md:p-12 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 text-center space-y-6">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-white">
                  Need Full Sustainability & Compliance Dossiers?
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base">
                  We furnish international buyers with comprehensive REACH declaration statements, LWG
                  audit summaries, and chemical safety data sheets.
                </p>
                <div>
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-black rounded-none uppercase tracking-widest text-xs font-bold px-8 py-6"
                    asChild
                  >
                    <Link to="/contact?inquiryType=compliance">
                      Request Compliance Documentation <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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

export default EnvironmentPage;
