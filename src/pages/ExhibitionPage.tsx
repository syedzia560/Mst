import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ExhibitionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center text-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="MST Facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Exhibitions</h1>
            <p className="text-xl text-gray-200">Meet us at upcoming international fairs and expos.</p>
          </div>
        </section>
         <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Intro */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-wider">Exhibition</h2>
                        <p className="text-lg text-gray-400 leading-relaxed font-light">
                            MST regularly participates in major fairs and exhibitions and have its own stands. It exhibits variety of leather innovations and colour forecast. MST participates in following leather fairs:
                        </p>
                    </div>

                    {/* Exhibition List */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* LeatherTech */}
                        <div className="bg-white/[0.02] p-6 rounded-none border border-white/10 shadow-xl backdrop-blur-sm hover:border-gold/30 transition-all group">
                            <div className="h-32 mb-6 rounded bg-white/5 flex items-center justify-center p-4">
                               <img src="/images/exhibitions/leathertech.png" alt="LeatherTech" className="max-h-full max-w-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-gold transition-colors uppercase tracking-wider">LeatherTech</h3>
                            <p className="text-gray-400 font-medium font-sans uppercase tracking-[0.2em] text-xs">Bangladesh</p>
                            <div className="mt-4 pt-4 border-t border-border/50">
                                <p className="text-gold font-bold font-sans">4th - 6th Dec'2025</p>
                            </div>
                        </div>

                        {/* Lineapelle NY */}
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all group">
                             <div className="h-32 mb-6 rounded bg-white flex items-center justify-center p-4">
                               <img src="/images/exhibitions/lineapelle.png" alt="Lineapelle NY" className="max-h-full max-w-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Lineapelle</h3>
                            <p className="text-muted-foreground font-medium">New York</p>
                            <div className="mt-4 pt-4 border-t border-border/50">
                                <p className="text-primary font-bold">28th - 29th Jan'2026</p>
                            </div>
                        </div>

                        {/* Lineapelle Milan */}
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all group">
                            <div className="h-32 mb-6 rounded bg-white flex items-center justify-center p-4">
                               <img src="/images/exhibitions/lineapelle.png" alt="Lineapelle Milan" className="max-h-full max-w-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Lineapelle</h3>
                            <p className="text-muted-foreground font-medium">Milan</p>
                            <div className="mt-4 pt-4 border-t border-border/50">
                                <p className="text-primary font-bold">11th - 13th Feb'2026</p>
                            </div>
                        </div>

                        {/* APLF */}
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all group">
                            <div className="h-32 mb-6 rounded bg-white flex items-center justify-center p-4">
                               <img src="/images/exhibitions/aplf.png" alt="APLF" className="max-h-full max-w-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">APLF</h3>
                            <p className="text-muted-foreground font-medium">Hong Kong</p>
                            <div className="mt-4 pt-4 border-t border-border/50">
                                <p className="text-primary font-bold">12th - 14th Mar'2026</p>
                            </div>
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
