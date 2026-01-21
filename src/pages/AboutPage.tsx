import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Drum, Globe, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const timeline = [
  { year: "1930", title: "Roots in Trading", description: "Elders of the present directors began trading leathers and exporting raw hides and skins." },
  { year: "1959", title: "MST Established", description: "Muhammad Shafi Tanneries (Private) Limited established in Karachi, becoming the flag-bearer of Shafi Group." },
  { year: "Present", title: "Global Recognition", description: "The name 'SHAFI' becomes synonymous with quality and reliability in business from Pakistan." },
];

const values = [
  { icon: Award, title: "Quality First", description: "Uncompromising standards from raw hide selection to finished leather" },
  { icon: Users, title: "Client Partnership", description: "Long-term relationships with tanneries, manufacturers, and brands" },
  { icon: Drum, title: "Tannery Excellence", description: "Continuous improvement in tanning processes and technology" },
  { icon: Globe, title: "Sustainability", description: "Eco-friendly tanning and responsible effluent management" },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "Leather Working Group (LWG) Gold Rated",
  "REACH Compliant",
  "OEKO-TEX Standard 100",
];

const facilities = [
  { name: "Beam House", description: "Soaking, liming, unhairing, fleshing, and splitting operations" },
  { name: "Tanning Drums", description: "Chrome and vegetable tanning with 20+ rotating drums" },
  { name: "Wet Finishing", description: "Re-tanning, dyeing, and fatliquoring facilities" },
  { name: "Dry Finishing", description: "Staking, buffing, embossing, and coating lines" },
  { name: "Testing Lab", description: "In-house quality testing for physical and chemical properties" },
  { name: "Effluent Plant", description: "Zero liquid discharge treatment system" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
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
            <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for readability */}
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
                Since 1959
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Shafi Group Profile
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Muhammad Shafi Tanneries (Private) Limited, Karachi, Pakistan, established in 1959 (popularly known as MST) is the flag-bearer company of Shafi Group.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                  Corporate Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Muhammad Shafi Tanneries (Private) Limited, Karachi, Pakistan, established in 1959 (popularly known as MST) is the flag-bearer company of Shafi Group. It is one of the leading companies in the country in terms of export performance in leather sector. The development of this level of excellence is the story of successful vertical expansion, managed by the members of Shafi Family who are pioneers in the production and export of light leather products in Pakistan. The elders of the present directors had been involved in trading of leathers as well as export of raw hides and skins since 1930.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  MST employs about 1000 people and produces about 25 million square feet of leather annually. Its factory in Karachi is a modern, well-planned and one of the biggest light leather tanneries in the world. It is capable of not only following the fashion trends but also making innovations of its own in kid, goatskin, sheep and cow calf leathers for shoes and handbags.
                </p>
              </div>
              
              {/* Vision & Mission Cards */}
              <div className="space-y-8">
                <div className="bg-card p-8 rounded-xl border-l-4 border-primary shadow-sm">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To remain the world’s leading tannery by consistently setting global benchmarks in leather quality, innovation, and sustainable manufacturing, while preserving the legacy of craftsmanship for future generations.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-xl border-l-4 border-secondary shadow-sm">
                   <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      To produce premium quality leather that meets international standards.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                       To innovate continuously in texture, color, and finish to lead fashion trends.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      To operate with total commitment to environmental sustainability and social responsibility.
                    </li>
                     <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      To ensure customer satisfaction through reliability, integrity, and excellence.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 max-w-4xl mx-auto text-center">
               <p className="text-gray-300 leading-relaxed text-xl font-serif italic">
                "It is a long way to go, but with the blessings of Allah and with combined and concerted efforts of the management, staff and workers, we intend to fulfill our ambition of handling the leather from raw skins to finished products. SHAFI GROUP as a whole and each company of the group has maintained growth from year to year. It is for this reason that the name 'SHAFI' has now become synonymous with the best in quality and reliability in business from Pakistan."
              </p>
            </div>

          </div>
        </section>

        {/* Tannery Facilities */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Tannery Facilities
              </h2>
              <p className="text-muted-foreground">
                Complete infrastructure for hide processing and leather production
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm">
                  <h3 className="font-serif font-bold text-foreground mb-2">{facility.name}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground">
                Milestones that shaped our growth and excellence
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-20 md:pl-0`}>
                      <div className="bg-card p-6 rounded-xl shadow-sm">
                        <span className="text-primary font-serif font-bold text-xl">{item.year}</span>
                        <h3 className="font-sans font-bold text-white uppercase tracking-wider mt-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-8 md:static w-4 h-4 bg-primary rounded-full border-4 border-background shadow md:-translate-x-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-premium-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Certifications & Compliance
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  We maintain the highest standards of quality and environmental 
                  responsibility, certified by leading international bodies.
                </p>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 border border-primary/10 p-8 rounded-xl text-center hover:bg-card transition-colors duration-300">
                  <p className="text-4xl font-serif font-bold text-gold">LWG</p>
                  <p className="text-sm text-muted-foreground mt-2">Gold Rated</p>
                </div>
                <div className="bg-card/50 border border-primary/10 p-8 rounded-xl text-center hover:bg-card transition-colors duration-300">
                  <p className="text-4xl font-serif font-bold text-gold">ISO</p>
                  <p className="text-sm text-muted-foreground mt-2">9001 & 14001</p>
                </div>
                <div className="bg-card/50 border border-primary/10 p-8 rounded-xl text-center hover:bg-card transition-colors duration-300">
                  <p className="text-4xl font-serif font-bold text-gold">REACH</p>
                  <p className="text-sm text-muted-foreground mt-2">Compliant</p>
                </div>
                <div className="bg-card/50 border border-primary/10 p-8 rounded-xl text-center hover:bg-card transition-colors duration-300">
                  <p className="text-4xl font-serif font-bold text-gold">ZLD</p>
                  <p className="text-sm text-muted-foreground mt-2">Zero Discharge</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Want to Visit Our Tannery?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We welcome potential partners to tour our facilities and see our tanning operations firsthand.
            </p>
            <Button variant="default" size="xl" asChild>
              <Link to="/contact">
                Contact Us
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

export default AboutPage;
