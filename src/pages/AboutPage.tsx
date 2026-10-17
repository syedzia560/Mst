import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Drum, Globe, CheckCircle, ArrowRight, Calendar, Leaf, Building2, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";

const timeline = [
  { 
    year: "1930s", 
    era: "The Founding Vision",
    title: "Roots in Leather Trading", 
    description: "The elders of the present directors began trading leathers and exporting raw hides and skins from South Asia, establishing the family's foundational expertise in raw material commerce and international trade.",
    accent: "Karachi"
  },
  { 
    year: "1959", 
    era: "Industrial Establishment",
    title: "Muhammad Shafi Tanneries Founded", 
    description: "MST was formally established in Karachi as a full-spectrum industrial tannery — the flag-bearer of Shafi Group — committing to international-caliber production of light leather including goatskins, sheep skins, cow calfskins, and lamb nappa.",
    accent: "S.I.T.E., Karachi"
  },
  { 
    year: "1980s–2000s", 
    era: "Vertical Expansion & Technology",
    title: "Modernization & Global Scale", 
    description: "Investment in European-engineered drum systems, automated dyeing lines, and Italy-aligned finishing processes. MST expanded its customer base to over 50 countries and introduced its in-house chemical compliance testing laboratory.",
    accent: "25M sq ft Production"
  },
  { 
    year: "Present", 
    era: "Certified Sustainability Leadership",
    title: "LWG Gold Rated & Global Recognition", 
    description: "Audited as an LWG Gold Rated tannery. 'SHAFI' is now synonymous with quality and reliability in Pakistan's leather export industry. Over 1,000 employees, dual facilities in S.I.T.E. and Lalazar, and active presence at Lineapelle Milan and APLF Hong Kong.",
    accent: "120+ Countries"
  },
];

const values = [
  { icon: Award, title: "Quality Without Compromise", description: "Batch-to-batch consistency from raw hide selection through final surface finishing, audited against ISO 9001 and LWG Gold requirements." },
  { icon: Users, title: "Long-Term Client Partnerships", description: "Relationships built on trust, technical support, and consistent delivery across footwear, fashion, automotive, and leather goods industries." },
  { icon: Drum, title: "Industrial Craft Excellence", description: "Mastery of chrome tanning, vegetable re-tanning, drum dyeing, and precision finishing developed over six decades of continuous practice." },
  { icon: Leaf, title: "Environmental Stewardship", description: "On-site biological wastewater treatment, closed-loop chrome recovery, and LWG-benchmarked eco-practices built into every production phase." },
];

const certifications = [
  { 
    name: "ISO 9001:2015", 
    category: "Quality Management System", 
    description: "Certified quality management ensuring rigorous process control from raw material reception to finished leather dispatch." 
  },
  { 
    name: "ISO 14001:2015", 
    category: "Environmental Management System", 
    description: "Third-party environmental certification demonstrating measurable reduction in waste, chemical hazards, and energy consumption." 
  },
  { 
    name: "LWG Gold Rated", 
    category: "Leather Working Group Benchmark", 
    description: "The world's most stringent sustainability and traceability standard for tanneries, verified through independent environmental audit." 
  },
  { 
    name: "REACH Compliant", 
    category: "EU Chemical Safety Regulation", 
    description: "Verified absence of restricted substances including Hexavalent Chromium (Cr VI), Azo dyes, PCP, and other harmful compounds." 
  },
];

const facilities = [
  {
    name: "S.I.T.E. Tannery Facility",
    address: "Site Industrial Area, Karachi, Sindh",
    purpose: "Primary Production Tannery",
    highlights: ["Full beamhouse operations", "Rotary drum tanning lines", "Dyeing & finishing factory", "Biological wastewater plant"],
    mapsUrl: "https://maps.google.com/?q=24.891235,66.998999",
  },
  {
    name: "Lalazar Head Office",
    address: "Lalazar, M.T. Khan Road, Karachi",
    purpose: "Corporate & Export Administration",
    highlights: ["International trade desk", "Quality standards library", "Executive management offices", "Export documentation centre"],
    mapsUrl: "https://maps.google.com/?q=24.854680,67.014490",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Muhammad Shafi Tanneries | 65+ Years of Leather Heritage"
        description="Muhammad Shafi Tanneries (Pvt.) Ltd (MST) — flag-bearer of Shafi Group since 1959. LWG Gold Rated tannery. 25M+ sq ft annual production. 120+ countries served."
        canonicalPath="/about"
        keywords="about MST leather, Muhammad Shafi Tanneries history, Shafi Group profile, leather manufacturing heritage Karachi, LWG gold tannery history, Pakistan leather export"
      />
      <Header />
      <main>

        {/* ── HERO ──────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 min-h-[65vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/tannery/factory_exterior_1.jpg"
              alt="Muhammad Shafi Tanneries Facility"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-[0.22em] font-medium">
                <Calendar className="w-3.5 h-3.5" />
                Est. 1959 · Shafi Group
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Six Decades of<br/>
                <span className="text-gold italic font-normal">Industrial Leather Mastery</span>
              </h1>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl">
                Muhammad Shafi Tanneries (Pvt.) Ltd — Pakistan's premier LWG Gold Rated export tannery, producing over 25 million square feet of precision leather annually for the world's most demanding brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.16em] text-xs px-8 py-6 rounded-sm" asChild>
                  <Link to="/contact">Trade Inquiry</Link>
                </Button>
                <Button variant="outline" size="lg" className="border border-white/30 text-white hover:bg-white/10 rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-8 py-6" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* ── CORPORATE OVERVIEW ────────────────────────── */}
        <section className="py-20 md:py-28 bg-background border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
                <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold" />
                  Company Profile
                </p>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                  The Story of MST
                </h2>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-card/60 border border-white/10 rounded-xl p-5 text-center">
                    <p className="text-3xl font-serif font-bold text-gold">25M+</p>
                    <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Sq. Ft. Annually</p>
                  </div>
                  <div className="bg-card/60 border border-white/10 rounded-xl p-5 text-center">
                    <p className="text-3xl font-serif font-bold text-gold">120+</p>
                    <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Countries Served</p>
                  </div>
                  <div className="bg-card/60 border border-white/10 rounded-xl p-5 text-center">
                    <p className="text-3xl font-serif font-bold text-gold">1,000+</p>
                    <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Employees</p>
                  </div>
                  <div className="bg-card/60 border border-white/10 rounded-xl p-5 text-center">
                    <p className="text-3xl font-serif font-bold text-gold">65+</p>
                    <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Years Heritage</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-gray-300 text-base leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Muhammad Shafi Tanneries (Private) Limited</span>, established in 1959 and popularly known as MST, is the flag-bearer company of <span className="text-gold font-medium">Shafi Group</span> — one of Pakistan's most respected industrial conglomerates in the leather sector.
                </p>
                <p>
                  MST is one of the leading companies in the country in terms of export performance in the leather sector. The development of this level of excellence is the story of successful vertical expansion, managed by the members of the Shafi Family who are pioneers in the production and export of light leather products in Pakistan. The elders of the present directors had been involved in the trading of leathers as well as the export of raw hides and skins since the 1930s.
                </p>
                <p>
                  MST employs about <span className="text-white font-medium">1,000 people</span> and produces about <span className="text-white font-medium">25 million square feet</span> of leather annually. Its factory in Karachi is a modern, well-planned and one of the biggest light leather tanneries in the world. It is capable of not only following the fashion trends but also making innovations of its own in kid, goatskin, sheep and cow calf leathers for shoes and handbags.
                </p>
                
                <div className="p-8 border-l-2 border-gold bg-card/40 rounded-r-xl my-4">
                  <p className="text-lg md:text-xl font-serif italic text-white/90 leading-relaxed">
                    "It is a long way to go, but with the blessings of Allah and with combined and concerted efforts of the management, staff and workers, we intend to fulfill our ambition of handling the leather from raw skins to finished products."
                  </p>
                  <p className="text-gold text-xs uppercase tracking-widest font-medium mt-4">— Shafi Group Management</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <h3 className="text-white font-serif font-bold text-lg">Our Vision</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      To remain Pakistan's foremost tannery by consistently setting global benchmarks in leather quality, innovation, and sustainable manufacturing while preserving the legacy of craftsmanship for future generations.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-serif font-bold text-lg">Our Mission</h3>
                    <ul className="space-y-1.5 text-sm text-gray-300">
                      <li className="flex gap-2 items-start"><CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />Produce premium quality leather meeting international standards</li>
                      <li className="flex gap-2 items-start"><CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />Innovate continuously in texture, color, and finish</li>
                      <li className="flex gap-2 items-start"><CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />Operate with commitment to environmental sustainability</li>
                      <li className="flex gap-2 items-start"><CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />Ensure customer satisfaction through reliability and excellence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── HERITAGE TIMELINE ─────────────────────────── */}
        <section className="py-20 md:py-28 bg-card/20 border-b border-white/10 relative overflow-hidden">
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs">
                Heritage Milestones
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                Our Journey Through Time
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                From leather trading pioneers to a globally certified industrial tannery — a legacy built across generations.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="max-w-4xl mx-auto relative">
              {/* Center vertical line */}
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/50 via-gold/20 to-transparent sm:-translate-x-1/2" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-8 md:gap-12 items-start relative ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Content Side */}
                    <div className={`flex-1 pl-12 sm:pl-0 ${index % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"}`}>
                      <div className="bg-card/70 border border-white/10 rounded-xl p-6 md:p-8 hover:border-gold/40 transition-colors shadow-lg">
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "sm:flex-row-reverse" : "flex-row"}`}>
                          <span className="text-2xl md:text-3xl font-serif font-bold text-gold">{item.year}</span>
                          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium bg-white/5 px-2 py-1 rounded">{item.era}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                        <div className={`mt-4 pt-3 border-t border-white/5 text-[11px] text-gold font-medium flex items-center gap-1.5 ${index % 2 === 0 ? "sm:justify-end" : ""}`}>
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          {item.accent}
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot (for sm and up, absolutely centered; for mobile, left-6) */}
                    <div className="absolute left-6 sm:static w-4 h-4 bg-gold rounded-full border-4 border-background shadow-md sm:translate-x-0 flex-shrink-0 mt-5 z-10" />

                    {/* Spacer */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ── CORE VALUES ───────────────────────────────── */}
        <section className="py-20 md:py-24 bg-background border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs">Our Principles</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Core Values</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="group bg-card/60 border border-white/10 rounded-xl p-8 hover:border-gold/40 transition-all duration-300 shadow-md flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-base font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">{value.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ── CERTIFICATIONS ────────────────────────────── */}
        <section className="py-20 md:py-24 bg-card/20 border-b border-white/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-5">
                <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs">Verified Compliance</p>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                  Certifications & Standards
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  MST's quality management, environmental stewardship, and chemical compliance are independently audited and certified against globally recognised international standards.
                </p>

                <ul className="space-y-4 pt-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white text-sm font-semibold">{cert.name}</span>
                        <span className="text-gray-400 text-xs"> — {cert.category}</span>
                        <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{cert.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-2">
                  <Button variant="outline" asChild className="border-gold text-gold hover:bg-gold hover:text-black rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5">
                    <Link to="/quality">Quality Systems</Link>
                  </Button>
                  <Button variant="outline" asChild className="border-white/20 text-white hover:border-gold hover:text-gold rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5">
                    <Link to="/environment">Environment</Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-card border border-gold/30 rounded-xl p-6 text-center hover:border-gold/60 transition-colors shadow-lg">
                    <p className="text-4xl font-serif font-bold text-gold tracking-wide">LWG</p>
                    <p className="text-xs uppercase tracking-wider text-gray-300 mt-2 font-medium">Gold Rated Tannery</p>
                    <p className="text-[11px] text-gray-400 mt-1">Leather Working Group</p>
                  </div>
                  <div className="bg-card border border-white/15 rounded-xl p-6 text-center hover:border-gold/30 transition-colors shadow-lg">
                    <p className="text-4xl font-serif font-bold text-white tracking-wide">ISO</p>
                    <p className="text-xs uppercase tracking-wider text-gray-300 mt-2 font-medium">9001 · 14001</p>
                    <p className="text-[11px] text-gray-400 mt-1">Quality & Environment</p>
                  </div>
                  <div className="bg-card border border-white/15 rounded-xl p-6 text-center hover:border-gold/30 transition-colors shadow-lg">
                    <p className="text-4xl font-serif font-bold text-white tracking-wide">REACH</p>
                    <p className="text-xs uppercase tracking-wider text-gray-300 mt-2 font-medium">EU Compliance</p>
                    <p className="text-[11px] text-gray-400 mt-1">Chemical Safety Verified</p>
                  </div>
                  <div className="bg-card border border-white/15 rounded-xl p-6 text-center hover:border-gold/30 transition-colors shadow-lg">
                    <p className="text-4xl font-serif font-bold text-white tracking-wide">ZDHC</p>
                    <p className="text-xs uppercase tracking-wider text-gray-300 mt-2 font-medium">Zero Discharge</p>
                    <p className="text-[11px] text-gray-400 mt-1">Hazardous Chemicals</p>
                  </div>
                </div>

                {/* ISO Cert Images */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-center">
                    <img 
                      src="/images/iso_9001_cert.png" 
                      alt="ISO 9001:2015 Quality Management Certificate" 
                      className="max-h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-center">
                    <img 
                      src="/images/iso_14001_cert.png" 
                      alt="ISO 14001:2015 Environmental Management Certificate" 
                      className="max-h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── DUAL FACILITIES ───────────────────────────── */}
        <section className="py-20 md:py-24 bg-background border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs">Physical Presence</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Our Facilities in Karachi</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {facilities.map((fac, idx) => (
                <div key={idx} className="bg-card/60 border border-white/10 rounded-xl p-8 hover:border-gold/40 transition-all duration-300 shadow-xl group space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Building2 className="w-6 h-6 text-gold" />
                    </div>
                    <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-gold/10 border border-gold/30 text-gold rounded-full font-medium">
                      {fac.purpose}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors">{fac.name}</h3>
                    <p className="text-xs text-gold mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      {fac.address}
                    </p>
                  </div>

                  <ul className="space-y-1.5">
                    {fac.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-gold/80 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={fac.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:text-white transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    View on Google Maps
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── CTA ────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Want to Tour Our Tannery?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              We welcome prospective international partners, procurement teams, and brand representatives to visit our facilities and see our tanning operations firsthand.
            </p>
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.16em] text-xs px-10 py-6 rounded-sm shadow-xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <span>Arrange a Visit</span>
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

export default AboutPage;
