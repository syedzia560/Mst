import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Leaf, Award, ArrowRight, FlaskConical, Eye, FileCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const qualityFeatures = [
  {
    icon: FlaskConical,
    title: "Laboratory Testing",
    description: "In-house testing lab with advanced equipment for physical, chemical, and mechanical testing of leather samples.",
  },
  {
    icon: Eye,
    title: "Visual Inspection",
    description: "Trained inspectors examine every batch for defects, color consistency, and grain quality.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Complete traceability with test certificates and compliance documentation for every shipment.",
  },
  {
    icon: Shield,
    title: "Standards Compliance",
    description: "All products meet international standards including REACH, OEKO-TEX, and LWG requirements.",
  },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    category: "Quality Management",
    description: "International standard for quality management systems ensuring consistent product quality.",
  },
  {
    name: "ISO 14001:2015",
    category: "Environmental",
    description: "Environmental management certification demonstrating our commitment to sustainability.",
  },
  {
    name: "Leather Working Group",
    category: "Industry Standard",
    description: "LWG certification for environmental compliance and best practices in leather manufacturing.",
  },
  {
    name: "REACH Compliant",
    category: "Chemical Safety",
    description: "Full compliance with EU REACH regulations for chemical safety in manufacturing.",
  },
  {
    name: "OEKO-TEX Standard 100",
    category: "Product Safety",
    description: "Certification that our leather is free from harmful substances and safe for human contact.",
  },
  {
    name: "SA8000",
    category: "Social Accountability",
    description: "Social accountability standard ensuring ethical treatment of workers and fair practices.",
  },
];

const sustainability = [
  "Water recycling systems reducing consumption by 60%",
  "Solar power for 40% of factory energy needs",
  "Zero-discharge effluent treatment plant",
  "Biodegradable and eco-friendly tanning agents",
  "Waste leather recycling programs",
  "Sustainable sourcing from certified suppliers",
];

const QualityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="MST Facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
                Quality Assurance
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Tannery Quality Standards
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Quality is controlled at every stage of tanning—from raw hide selection 
                to finished leather. Our in-house lab ensures every batch meets specifications.
              </p>
            </div>
          </div>
        </section>

        {/* Quality Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Our Quality Control Process
              </h2>
              <p className="text-gray-400">
                Multi-stage quality assurance ensuring every product meets our exacting standards
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white uppercase tracking-wider mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
                Certifications
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Internationally Certified
              </h2>
              <p className="text-muted-foreground">
                Our certifications demonstrate our commitment to quality, safety, and sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-gold font-medium uppercase tracking-[0.2em] font-sans">
                        {cert.category}
                      </span>
                      <h3 className="font-sans font-bold text-white uppercase tracking-wider mt-1">{cert.name}</h3>
                      <p className="text-sm text-gray-400 mt-2">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-24 bg-leather-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-6 h-6 text-gold" />
                  <p className="text-gold font-medium tracking-widest uppercase text-sm">
                    Sustainability
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Committed to Environmental Responsibility
                </h2>
                <p className="text-primary-foreground/80 mb-8">
                  We believe in sustainable manufacturing that protects our planet 
                  while delivering exceptional quality. Our eco-friendly practices 
                  set the standard in the leather industry.
                </p>
                <ul className="space-y-4">
                  {sustainability.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 p-8 rounded-xl text-center">
                  <p className="text-5xl font-serif font-bold text-gold">60%</p>
                  <p className="text-sm mt-2 text-primary-foreground/80">Water Recycled</p>
                </div>
                <div className="bg-primary-foreground/10 p-8 rounded-xl text-center">
                  <p className="text-5xl font-serif font-bold text-gold">40%</p>
                  <p className="text-sm mt-2 text-primary-foreground/80">Solar Powered</p>
                </div>
                <div className="bg-primary-foreground/10 p-8 rounded-xl text-center">
                  <p className="text-5xl font-serif font-bold text-gold">Zero</p>
                  <p className="text-sm mt-2 text-primary-foreground/80">Discharge Waste</p>
                </div>
                <div className="bg-primary-foreground/10 p-8 rounded-xl text-center">
                  <p className="text-5xl font-serif font-bold text-gold">100%</p>
                  <p className="text-sm mt-2 text-primary-foreground/80">Traceable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Partner with a manufacturer that prioritizes quality at every step. 
              Request samples to experience our leather firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="xl" asChild>
                <Link to="/contact">
                  Request Samples
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QualityPage;
