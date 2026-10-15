import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";
import { Calendar, MapPin, ArrowRight, Building, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ExhibitionItem {
  id: string;
  name: string;
  city: string;
  country: string;
  venue: string;
  date: string;
  logo: string;
  description: string;
  category: "upcoming" | "past";
  boothNote?: string;
  ctaText: string;
}

const exhibitions: ExhibitionItem[] = [
  // Upcoming / Future Editions
  {
    id: "lineapelle-milan-future",
    name: "Lineapelle Milan",
    city: "Milan",
    country: "Italy",
    venue: "Fiera Milano Rho",
    date: "Upcoming Edition (Fall / Winter Cycle)",
    logo: "/images/exhibitions/lineapelle.png",
    description:
      "The premier global benchmark trade fair for luxury leather manufacturing, shoe upper development, and haute couture materials.",
    category: "upcoming",
    boothNote: "MST delegation schedule and booth hall confirmation announced 4 weeks prior to exhibition.",
    ctaText: "Schedule Delegation Meeting",
  },
  {
    id: "aplf-hk-future",
    name: "APLF (Asia Pacific Leather Fair)",
    city: "Hong Kong",
    country: "Hong Kong SAR",
    venue: "Hong Kong Convention and Exhibition Centre (HKCEC)",
    date: "Upcoming Edition (Spring / Summer Cycle)",
    logo: "/images/exhibitions/aplf.png",
    description:
      "The world's leading gathering connecting commercial tanneries, raw material suppliers, and international footwear sourcing managers.",
    category: "upcoming",
    boothNote: "Pre-registration open for private buyer consultations and trend swatch reviews.",
    ctaText: "Pre-Book Sourcing Meeting",
  },

  // Past / Recent Showcases
  {
    id: "aplf-2026",
    name: "APLF Hong Kong 2026",
    city: "Hong Kong",
    country: "Hong Kong SAR",
    venue: "HKCEC, 1 Expo Drive, Wanchai",
    date: "12th – 14th March 2026",
    logo: "/images/exhibitions/aplf.png",
    description:
      "International presentation of MST light-leather crust, soft glove nappa, and sustainable chrome-recovered tanning developments.",
    category: "past",
    boothNote: "Concluded showcase. Physical swatch hangers available on demand.",
    ctaText: "Request Exhibited Swatches",
  },
  {
    id: "lineapelle-milan-2026",
    name: "Lineapelle Milan 2026",
    city: "Milan",
    country: "Italy",
    venue: "Fiera Milano Rho, Strada Statale del Sempione",
    date: "11th – 13th February 2026",
    logo: "/images/exhibitions/lineapelle.png",
    description:
      "European exhibition of custom drum-dyed colors, glazed calfskin finishes, and audited LWG compliance dossiers.",
    category: "past",
    boothNote: "Concluded showcase. Color swatches and technical data available.",
    ctaText: "Request Milan Collection Data",
  },
  {
    id: "lineapelle-ny-2026",
    name: "Lineapelle New York 2026",
    city: "New York",
    country: "USA",
    venue: "Metropolitan Pavilion, 125 W 18th St, Manhattan",
    date: "28th – 29th January 2026",
    logo: "/images/exhibitions/lineapelle.png",
    description:
      "North American showcase for footwear designers and luxury accessories brands seeking high-tensile, lightweight leathers.",
    category: "past",
    boothNote: "Concluded showcase. Follow-up consultations active.",
    ctaText: "Request NYC Swatch Pack",
  },
  {
    id: "leathertech-2025",
    name: "LeatherTech Bangladesh 2025",
    city: "Dhaka",
    country: "Bangladesh",
    venue: "International Convention City Bashundhara (ICCB)",
    date: "4th – 6th December 2025",
    logo: "/images/exhibitions/leathertech.png",
    description:
      "South Asian regional trade expo connecting footwear manufacturers with certified wet blue, crust, and shoe-upper leathers.",
    category: "past",
    boothNote: "Concluded showcase. Regional export inquiries handled via Karachi sales desk.",
    ctaText: "Request Regional Quotation",
  },
];

const ExhibitionPage = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const filteredExhibitions = exhibitions.filter((e) => e.category === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Global Leather Exhibitions & Trade Fairs"
        description="Meet Muhammad Shafi Tanneries (MST) at premier international leather fairs including Lineapelle Milan, Lineapelle New York, APLF Hong Kong, and LeatherTech."
        canonicalPath="/exhibition"
        keywords="Lineapelle Milan MST, APLF Hong Kong leather, Lineapelle New York tannery, LeatherTech Bangladesh, leather trade fairs"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pb-20 min-h-[48vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg.jpg"
              alt="MST Leather Exhibition Showcase"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="container px-4 relative z-10 max-w-4xl space-y-4">
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              Global Trade Events
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
              International Exhibitions
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
              Connect directly with MST leadership and evaluate our newest seasonal leather
              articles at the world’s most prestigious leather forums.
            </p>
          </div>
        </section>

        {/* Exhibition Content */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
              {/* Header and Category Switcher */}
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <div className="space-y-2">
                  <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                    Verified Calendar
                  </p>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
                    Where to Meet Our Team
                  </h2>
                </div>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  MST participates in leading global leather fairs in Europe, North America, and Asia,
                  providing direct commercial consultations and bespoke shade matching.
                </p>

                {/* Filter Tabs */}
                <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-none">
                  <button
                    type="button"
                    onClick={() => setActiveTab("upcoming")}
                    className={`flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-bold transition-all ${
                      activeTab === "upcoming"
                        ? "bg-gold text-black shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" /> Upcoming & Future Fairs
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("past")}
                    className={`flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-bold transition-all ${
                      activeTab === "past"
                        ? "bg-gold text-black shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Concluded Showcases
                  </button>
                </div>
              </div>

              {/* Exhibition Grid */}
              <div className="grid gap-8 md:grid-cols-2">
                {filteredExhibitions.map((expo) => (
                  <div
                    key={expo.id}
                    className="bg-white/[0.02] p-8 border border-white/10 shadow-2xl backdrop-blur-sm hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Logo Box */}
                      <div className="h-28 mb-6 rounded-none bg-white/[0.04] border border-white/5 flex items-center justify-center p-6 group-hover:bg-white/[0.07] transition-colors">
                        <img
                          src={expo.logo}
                          alt={`${expo.name} official trade logo`}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain filter brightness-110"
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>
                            {expo.city}, {expo.country}
                          </span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors">
                          {expo.name}
                        </h3>
                        <div className="flex items-start gap-2 text-xs text-gray-400">
                          <Building className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span>{expo.venue}</span>
                        </div>
                        <p className="text-gray-400 text-sm font-light leading-relaxed pt-1">
                          {expo.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                      <div className="flex items-center gap-2 text-white text-sm font-medium">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span>{expo.date}</span>
                      </div>

                      {expo.boothNote && (
                        <p className="text-[11px] text-gray-500 italic">
                          * {expo.boothNote}
                        </p>
                      )}

                      <Link
                        to={`/contact?inquiryType=exhibition&event=${encodeURIComponent(
                          expo.name + " (" + expo.city + ")"
                        )}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-gold hover:text-black border border-white/10 hover:border-gold text-xs uppercase font-bold tracking-wider text-gold transition-all duration-300"
                      >
                        {expo.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Archival Photography & Sourcing Note */}
              <div className="p-6 md:p-8 bg-black/40 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-white font-serif font-bold text-base">
                    Exhibition Documentation & Photography Notice
                  </h4>
                  <p className="text-xs text-gray-400 max-w-2xl font-light leading-relaxed">
                    High-resolution photographs of past MST exhibition booths and delegation meetings
                    are being curated from historical company archives for presentation in the forthcoming
                    media gallery update.
                  </p>
                </div>
                <Link
                  to="/contact?inquiryType=exhibition"
                  className="px-5 py-2.5 bg-gold text-black hover:bg-white text-xs uppercase font-bold tracking-wider transition-colors flex-shrink-0"
                >
                  Contact Trade Desk
                </Link>
              </div>

              {/* Direct Booking CTA Banner */}
              <div className="p-8 md:p-12 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Planning to Attend Any Upcoming International Shows?
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base leading-relaxed">
                  We schedule dedicated 30-minute private consultation slots for qualified international
                  buyers to review physical swatch collections and discuss custom volume production.
                </p>
                <div>
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-black rounded-none uppercase tracking-widest text-xs font-bold px-8 py-6"
                    asChild
                  >
                    <Link to="/contact?inquiryType=exhibition">
                      Request Pre-Show Appointment <ArrowRight className="w-4 h-4 ml-2" />
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

export default ExhibitionPage;
