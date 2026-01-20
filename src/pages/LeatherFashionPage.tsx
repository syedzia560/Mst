import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const LeatherFashionPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Leather Fashion</h1>
            <p className="text-xl text-gray-200">Setting trends in global leather fashion.</p>
          </div>
        </section>
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white/[0.02] p-8 md:p-12 rounded-none border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-3xl" />
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-center font-light relative z-10">
                    MST is affiliated with both designers and fashion consultants in <span className="text-white font-medium">UK, Italy & France</span>, helping Shafi to always keep one step ahead. We believe in investing in our technicians, sending them frequently to Italy to work on the very latest finishes and cutting edge techniques, enabling them to develop fashionable leather collections twice a year for the seasons <span className="text-gold font-medium">Spring-Summer and Autumn-Winter</span> ensuring that MST have the ‘must have looks’.
                  </p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeatherFashionPage;
