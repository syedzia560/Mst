import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Droplets, 
  Award, 
  Globe, 
  Leaf, 
  ShieldCheck, 
  FlaskConical, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  Phone,
  Mail
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BespokeGallery from "@/components/home/BespokeGallery";
import SEO from "@/components/common/SEO";
import Counter from "@/components/ui/Counter";

const stats = [
  { value: 120, suffix: "+", label: "Countries Served Globally" },
  { value: 25, suffix: "+ Million", label: "Sq. Ft. Annual Leather Capacity" },
  { value: 25584, suffix: "", label: "Sq. Meter Production Area" },
];

const manufacturingStages = [
  {
    step: "01",
    title: "Raw Hide Selection & Beamhouse",
    description: "Rigorous sorting of raw hides and skins by weight, origin, and substance. Precision soaking, liming, fleshing, and bating prepare the fiber network for uniform tanning.",
    image: "/images/tannery/raw_material.jpg",
    metric: "100% Caliper Verification"
  },
  {
    step: "02",
    title: "Computerized Rotary Drum Tanning",
    description: "Automated stainless steel and heavy wooden milling drums regulate liquor circulation, pH equilibrium, and thermal parameters to yield optimum chrome, wet blue, and vegetable tannages.",
    image: "/images/tannery/tanning_drums.png",
    metric: "Automated Recipe Control"
  },
  {
    step: "03",
    title: "Custom Dyeing & Shade Formulation",
    description: "High-penetration drum dyeing calibrated against digital spectrophotometers. Deep color absorption with outstanding wet and dry crock fastness for luxury seasonal palettes.",
    image: "/images/tannery/dyeing.jpg",
    metric: "Digital Color Tolerance"
  },
  {
    step: "04",
    title: "Conditioning, Milling & Finishing",
    description: "Controlled conditioning, dry drum tumbling for natural grain pebble, and advanced automated finishing lines applying micro-protective pigments, oils, and embossed grains.",
    image: "/images/tannery/finished_leather.jpg",
    metric: "Precision Surface Finishing"
  }
];

const qualityHighlights = [
  {
    icon: FlaskConical,
    title: "In-House Physical Testing Lab",
    description: "Comprehensive testing including Bally flexometer endurance, Martindale abrasion resistance, tear strength, and tensile elongation."
  },
  {
    icon: ShieldCheck,
    title: "Chemical Compliance & MRSL",
    description: "Strict adherence to international consumer safety regulations including REACH, Hexavalent Chromium (Cr VI) elimination, and ZDHC guidelines."
  },
  {
    icon: Award,
    title: "LWG Gold Rated Quality Standards",
    description: "Audited against the world's most rigorous leather manufacturing benchmark, ensuring batch-to-batch consistency and technical traceability."
  },
  {
    icon: Layers,
    title: "100% Benchtop Grain Inspection",
    description: "Every square foot is visually graded and caliper-gauged by veteran hide inspectors prior to export packaging and shipment."
  }
];

const leadershipData = [
  {
    id: "director",
    name: "Amjad Hafeez",
    title: "Director MST",
    badge: "Legacy & Tannery Operations",
    quote: "At Shafi, we don't just make leather; we create art that lasts a lifetime. Our legacy is built on the perfect balance of traditional craftsmanship and modern innovation.",
    video: "/video/director-message.mp4",
    poster: "/factory-hero.jpg"
  },
  {
    id: "executive-director",
    name: "Haris Hafeez",
    title: "Executive Director",
    badge: "Strategic Vision & Global Growth",
    quote: "Embracing modern technology while honoring our heritage defines our path forward. We are committed to sustainable excellence in every piece of leather we craft.",
    video: "/video/executive%20director.mp4",
    poster: "/factory-hero.jpg"
  }
];

const HomePage = () => {
  const [activeLeader, setActiveLeader] = useState(leadershipData[0]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <SEO
        title="LWG Gold Rated Leather Tannery & Exporter | Muhammad Shafi Tanneries"
        description="Muhammad Shafi Tanneries (Pvt.) Ltd is Pakistan's premier LWG Gold Rated export tannery. Producing over 25M sq. ft of wet blue, crust, and finished leather annually for global luxury brands."
        canonicalPath="/"
        keywords="leather tannery Pakistan, LWG Gold tannery, wet blue leather, crust leather, finished leather, Karachi leather manufacturer, Shafi Group, MST leather, leather exporter Pakistan"
      />
      <Header />
      
      <main>
        {/* =========================================================================
            1. CINEMATIC BRAND HERO SECTION
            ========================================================================= */}
        <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
          {/* Background Video with Cinematic Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="metadata"
              className="w-full h-full object-cover motion-reduce:hidden"
              poster="/factory-hero.jpg"
            >
              <source src="/video/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img 
              src="/factory-hero.jpg" 
              alt="Muhammad Shafi Tanneries Production Facility" 
              className="hidden motion-reduce:block w-full h-full object-cover"
              loading="eager"
            />
            {/* Cinematic dark gradients for maximum legibility */}
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/75" />
            
            {/* Subtle luxury ambient gold glow */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none opacity-40" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <div className="max-w-4xl mx-auto space-y-6 animate-slide-in-up">
              {/* Heritage Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-gold/40 text-gold text-xs uppercase tracking-[0.22em] font-medium backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Pakistan's Premier LWG Gold Rated Tannery • Est. 1959
              </div>

              {/* High-Impact Value Proposition Headline */}
              <h1 className="font-serif font-bold text-white tracking-tight leading-[1.08]">
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Precision Leather.
                </span>
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gold italic font-normal mt-1">
                  Crafted for Global Excellence.
                </span>
              </h1>

              {/* Subheadline targeted to International B2B Buyers */}
              <p className="text-base sm:text-lg md:text-xl text-gray-200/90 max-w-2xl mx-auto leading-relaxed font-sans font-light">
                Discover MST's expertise in producing premium wet blue, crust, and fully finished leather for international fashion, footwear, and leather goods industries.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.16em] text-xs px-8 py-6 rounded-sm shadow-lg hover:shadow-[0_0_25px_rgba(197,160,89,0.4)] transition-all"
                >
                  <Link to="/fashion">Explore Our Leather</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border border-white/30 text-white hover:bg-white/10 hover:border-white rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-8 py-6 transition-all"
                >
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 text-[10px] tracking-[0.25em] uppercase font-medium pointer-events-none">
            <span>Scroll</span>
            <div className="w-[1px] h-6 bg-gradient-to-b from-gold to-transparent animate-pulse" />
          </div>
        </section>


        {/* =========================================================================
            2. COMPACT COMPANY HERITAGE AND CREDIBILITY
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-card/40 border-y border-white/10 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Key Verified Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10 pb-12 mb-12 border-b border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 group">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-2 group-hover:scale-105 transition-transform duration-300">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-gray-300 uppercase tracking-[0.18em] text-xs md:text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Authoritative Heritage Statement */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-2">
                <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-gold" />
                  Over Six Decades
                </p>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight">
                  A Pioneer in Industrial Leather Craftsmanship
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  Founded in 1959, <span className="text-white font-medium">Muhammad Shafi Tanneries (Pvt.) Ltd</span> has spent more than 65 years perfecting the chemistry, mechanical consistency, and environmental stewardship of high-performance leather.
                </p>
                <p>
                  As Pakistan's flagship <span className="text-gold font-medium">LWG Gold Rated</span> export tannery, MST combines master European tanning methods with state-of-the-art computerized drum automation, supplying Tier-1 global footwear brands, luxury fashion houses, and technical leather goods manufacturers worldwide.
                </p>
                <div className="pt-2">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:text-white transition-colors"
                  >
                    <span>Read Full Company Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            3. SIGNATURE LEATHER COLLECTIONS (Editorial Material Archive)
            ========================================================================= */}
        <BespokeGallery />


        {/* =========================================================================
            4. MANUFACTURING EXPERTISE (Industrial Split-Screen Stages)
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
              <div className="space-y-3 max-w-2xl">
                <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold" />
                  Technical Competence
                </p>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
                  Tannery <span className="text-gold italic font-normal">Processing Architecture</span>
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Every hide progresses through rigorously controlled chemical and mechanical phases, engineered to deliver consistent caliper, grain break, and surface performance.
                </p>
              </div>
              <div>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-white/20 text-white hover:border-gold hover:text-gold rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5"
                >
                  <Link to="/services" className="flex items-center gap-2">
                    <span>View All Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* 4 Process Stages Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {manufacturingStages.map((stage, idx) => (
                <div 
                  key={idx}
                  className="group bg-card/60 border border-white/10 rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <img 
                      src={stage.image} 
                      alt={stage.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-black/30 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-gold border border-gold/30">
                      STAGE {stage.step}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans">
                        {stage.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                      <span className="text-gold font-medium">{stage.metric}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================================
            5. QUALITY AND TECHNICAL EXCELLENCE
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-card/30 border-b border-white/10 relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Narrative & Credibility */}
              <div className="lg:col-span-5 space-y-6">
                <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold" />
                  Testing & Standards
                </p>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                  Stringent Quality Benchmarks for <span className="text-gold italic font-normal">Global Compliance</span>
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  International brands depend on Muhammad Shafi Tanneries because our quality protocols are executed in-house, audited against European consumer product directives, and verified through standardized physical and chemical laboratories.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="outline" 
                    asChild
                    className="border-gold/70 text-gold hover:bg-gold hover:text-black rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5"
                  >
                    <Link to="/quality">Inspect Quality Systems</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: 4 Technical Pillars */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                {qualityHighlights.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-6 rounded-xl bg-card/70 border border-white/10 hover:border-gold/40 transition-all duration-300 space-y-3 group shadow-md"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-white group-hover:text-gold transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            6. ENVIRONMENTAL RESPONSIBILITY
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-background border-b border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-card/50 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                {/* Left: Plant Photo */}
                <div className="lg:col-span-5 rounded-xl overflow-hidden border border-white/10 shadow-xl aspect-video lg:aspect-[4/3] bg-black">
                  <img 
                    src="/images/tannery/effluent_treatment_plant.jpg" 
                    alt="Advanced Biological Wastewater Clarification Plant at MST" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Right: Verified Sustainability Architecture */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-wider font-semibold">
                    <Leaf className="w-3.5 h-3.5" />
                    Environmental Responsibility
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                    Advanced Biological Wastewater Clarification & Circularity
                  </h2>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    MST operates an on-site, European-engineered biological wastewater clarification plant that treats and neutralizes industrial effluent prior to discharge. Our closed-loop chrome recovery unit reclaims tanning liquors, reducing heavy metal environmental impact while preserving vital natural resources.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>Closed-loop biological effluent clarification meeting strict NEQS and LWG limits</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>Automated trivalent chrome liquor recovery and closed filtration circuits</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Button 
                      variant="outline" 
                      asChild
                      className="border-gold text-gold hover:bg-gold hover:text-black rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5 transition-all"
                    >
                      <Link to="/environment">Review Environmental Policy</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            7. GLOBAL BUSINESS AND REPRESENTATION
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-card/20 border-b border-white/10 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold" />
                  International Trade Readiness
                </p>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  Worldwide Representation & Exhibition Schedule
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Supplying leather across 120+ countries, MST maintains an active international presence at premier leather fairs including <span className="text-white font-medium">Lineapelle Milan</span> and <span className="text-white font-medium">APLF Hong Kong</span>, alongside dedicated agents in Italy, Portugal, Vietnam, China, and North America.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
                <Button 
                  variant="outline" 
                  asChild
                  className="border-white/20 text-white hover:border-gold hover:text-gold rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5"
                >
                  <Link to="/exhibition" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Exhibition Calendar</span>
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-gold/60 text-gold hover:bg-gold hover:text-black rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5 transition-all"
                >
                  <Link to="/agents" className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>Find Your Regional Agent</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            8. ONE CURATED LEADERSHIP SECTION (Consolidated Executive Feature)
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-gold" />
                Executive Leadership
                <span className="w-8 h-[1px] bg-gold" />
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
                Stewards of Heritage & Innovation
              </h2>
              
              {/* Executive Selector Switcher */}
              <div className="inline-flex p-1 rounded-lg bg-card/80 border border-white/10 mt-4">
                {leadershipData.map((leader) => (
                  <button
                    key={leader.id}
                    onClick={() => setActiveLeader(leader)}
                    className={`px-5 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      activeLeader.id === leader.id
                        ? "bg-gold text-black shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {leader.name} — {leader.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Curated Single Executive Showcase Frame */}
            <div className="max-w-5xl mx-auto bg-card/60 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-8 items-center p-6 md:p-10">
                {/* Executive Video Player Side */}
                <div className="lg:col-span-6 bg-black rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
                  <video 
                    controls
                    preload="metadata"
                    key={activeLeader.video}
                    className="w-full aspect-video object-cover"
                    poster={activeLeader.poster}
                  >
                    <source src={activeLeader.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Statement & Attributions */}
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium text-gold">
                    {activeLeader.badge}
                  </span>

                  <blockquote className="text-xl md:text-2xl font-serif italic text-white/95 leading-relaxed">
                    "{activeLeader.quote}"
                  </blockquote>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                    <div className="w-10 h-[2px] bg-gold" />
                    <div>
                      <h4 className="text-base font-sans font-bold text-white uppercase tracking-wider">
                        {activeLeader.name}
                      </h4>
                      <p className="text-xs text-gold font-medium tracking-wide">
                        {activeLeader.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            9. PREMIUM INTERNATIONAL BUYER INQUIRY CTA
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-card/40 to-background relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-gold font-semibold tracking-[0.25em] uppercase text-xs">
                International Trade & Sourcing
              </p>
              
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                Partner With Pakistan's Leading Export Tannery
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Request custom strike-off swatches, inquire about volume wet blue, crust, or finished specifications, or arrange a technical consultation with our master tanners.
              </p>

              {/* Direct Inquiry CTAs connecting to verified contact architecture */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.16em] text-xs px-10 py-6 rounded-sm shadow-xl hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all"
                >
                  <Link to="/contact?subject=Trade+Inquiry">
                    Initiate Trade Inquiry
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="border border-white/20 text-white hover:border-gold hover:text-gold rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-8 py-6 transition-all"
                >
                  <Link to="/services">
                    Technical Specifications
                  </Link>
                </Button>
              </div>

              {/* Verified Direct Contact Credentials */}
              <div className="pt-10 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-400 border-t border-white/5 mt-8">
                <a 
                  href="tel:+922132561120" 
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>+92 (21) 3256 1120</span>
                </a>
                <a 
                  href="mailto:info@shafi.com" 
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  <span>info@shafi.com</span>
                </a>
                <span className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>S.I.T.E. Tannery & Lalazar Head Office, Karachi</span>
                </span>
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
