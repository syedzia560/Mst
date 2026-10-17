import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Compass, Eye, ShieldCheck, ArrowRight } from "lucide-react";

const collections = [
  {
    season: "Spring - Summer",
    title: "Vibrant Lightweights & Natural Millings",
    palette: "Pastels, Soft Earths, Chalk Whites, Sunlit Tans",
    description: "Designed for unlined footwear, luxury handbags, and lightweight summer garments. Characterized by silky touch, breathable natural grain, and supple draping.",
    articles: ["Soft Nappa Calf", "Glazed Kidskin", "Air-Milled Goat", "Perforated Glove Leather"],
    image: "/images/bespoke/product1.jpg",
  },
  {
    season: "Autumn - Winter",
    title: "Rich Patinas, Pull-Ups & Burnished Finishes",
    palette: "Deep Mahogany, Dark Olive, Cognac, Obsidian Black",
    description: "Substantial, water-resistant, and burnishable leathers engineered for boots, structured luggage, and rugged outdoor luxury.",
    articles: ["Oil Pull-Up Cow", "Vegetable-Retanned Crust", "Waxed Nubuck", "Vintage Heritage Finish"],
    image: "/images/bespoke/product2.jpg",
  },
];

const bespokeShowcase = [
  {
    image: "/images/bespoke/product3.jpg",
    title: "Full-Grain Saddle Tan",
    category: "Footwear & Leathergoods",
    finish: "Aniline Wax Finish",
  },
  {
    image: "/images/bespoke/product4.jpg",
    title: "Italian Milling Pebble Grain",
    category: "Luxury Handbags",
    finish: "Drum-Dyed Semi-Aniline",
  },
  {
    image: "/images/bespoke/product5.jpg",
    title: "Burnished Vintage Cognac",
    category: "Heritage Footwear",
    finish: "Hand-Sponged Glaze",
  },
  {
    image: "/images/bespoke/product6.jpg",
    title: "Smooth Glove Nappa",
    category: "Apparel & Small Goods",
    finish: "Ultra-Soft Milling",
  },
  {
    image: "/images/bespoke/product7.jpg",
    title: "Nubuck & Velour Texture",
    category: "Sneakers & Casuals",
    finish: "Fine Buffed Nap",
  },
  {
    image: "/images/bespoke/product8.jpg",
    title: "Matte Black Crust",
    category: "Designer Outerwear",
    finish: "Breathable Protective Topcoat",
  },
];

const LeatherFashionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Leather Fashion Collections & Trend Forecasts"
        description="Discover MST's seasonal leather collections developed in partnership with fashion consultants in Italy, UK, and France for Spring-Summer and Autumn-Winter."
        canonicalPath="/fashion"
        keywords="leather fashion trends, seasonal leather collections, Italian leather finishes, Spring Summer leather, Autumn Winter leather, luxury leather swatches"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 min-h-[55vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="MST Leather Fashion Showcase" 
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="container px-4 relative z-10 max-w-4xl">
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">Haute Craftsmanship</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">Leather Fashion & Trends</h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Where Italian finishing artistry meets precision Pakistani light-leather production. Setting benchmarks for the world's most demanding fashion houses.
            </p>
          </div>
        </section>

        {/* Narrative & Affiliations */}
        <section className="py-16 md:py-20 lg:py-24 bg-background border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white/[0.02] p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden text-center space-y-6">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Compass className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white uppercase">
                European Design Alliances
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                MST collaborates with master technicians and fashion consultants across <span className="text-white font-medium">the UK, Italy & France</span>, keeping Shafi aligned with international trend forecasts. Our senior technicians travel regularly to Italy to review emerging finishing chemistries and seasonal color palettes.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                This continuous exchange ensures our collections for <span className="text-gold font-medium">Spring-Summer and Autumn-Winter</span> offer the tactile suppleness, tensile durability, and elegant drape demanded by luxury brands.
              </p>
            </div>
          </div>
        </section>

        {/* Seasonal Collections Grid */}
        <section className="py-16 md:py-20 lg:py-24 bg-secondary/10 border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14 space-y-3">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Biannual Forecasts</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
                Seasonal Collections
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
              {collections.map((col, index) => (
                <div 
                  key={index}
                  className="bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm group flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-black/60 relative">
                    <img 
                      src={col.image} 
                      alt={`MST Leather Collection - ${col.title} (${col.season})`} 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 border border-gold/40 text-gold text-xs uppercase tracking-widest font-bold">
                      {col.season}
                    </div>
                  </div>

                  <div className="p-8 md:p-10 space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors mb-2">
                        {col.title}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-gold font-medium">
                        Palette: {col.palette}
                      </p>
                    </div>

                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                      {col.description}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-xs uppercase tracking-widest text-white/80 font-bold mb-3">Key Articles:</p>
                      <div className="flex flex-wrap gap-2">
                        {col.articles.map((art, aIdx) => (
                          <Link 
                            key={aIdx} 
                            to={`/contact?inquiryType=article&article=${encodeURIComponent(art)}`}
                            className="text-xs bg-white/5 border border-white/10 px-3 py-1 text-gray-300 hover:text-gold hover:border-gold/50 transition-colors"
                            title={`Inquire about ${art}`}
                          >
                            {art} →
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curated Swatch Gallery */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Bespoke Articles</p>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
                  Signature Leather Articles
                </h2>
                <p className="text-gray-400 font-light text-sm md:text-base">
                  A glimpse into our diverse library of full-grain, corrected-grain, and specialty crust developments.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bespokeShowcase.map((art, idx) => (
                  <Link 
                    key={idx}
                    to={`/contact?inquiryType=article&article=${encodeURIComponent(art.title)}`}
                    className="bg-white/[0.02] border border-white/10 overflow-hidden group hover:border-gold/50 transition-all duration-300 block"
                    title={`Request swatches for ${art.title}`}
                  >
                    <div className="aspect-square overflow-hidden bg-black/60 relative">
                      <img 
                        src={art.image} 
                        alt={`MST Signature Leather Article - ${art.title} (${art.category}, ${art.finish})`} 
                        loading="lazy" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-xs text-gold uppercase tracking-widest font-bold">
                          {art.finish}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-1">
                        {art.category}
                      </p>
                      <h4 className="font-serif font-bold text-lg text-white group-hover:text-gold transition-colors flex items-center justify-between">
                        {art.title}
                        <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Sample Request CTA */}
              <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 rounded-sm text-center space-y-6">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-white">
                  Request Physical Swatch Hangers
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base">
                  We supply fashion houses, footwear designers, and tanneries worldwide with certified swatch books and shade cards.
                </p>
                <div>
                  <Button 
                    variant="outline" 
                    className="border border-gold text-gold hover:bg-gold hover:text-black rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-4 sm:px-8 py-4 sm:py-6 max-w-full text-center whitespace-normal sm:whitespace-nowrap inline-flex items-center justify-center"
                    asChild
                  >
                    <Link to="/contact?inquiryType=fashion&article=Seasonal+Swatch+Pack">
                      Order Seasonal Swatch Pack
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

export default LeatherFashionPage;
