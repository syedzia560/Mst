import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const InnovationPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Innovation</h1>
            <p className="text-xl text-gray-200">Pioneering new technologies in leather tanning.</p>
          </div>
        </section>
         <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-white mb-8 uppercase tracking-wider">Innovation</h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                        At Shafi, we envision and translate future trends and innovations into tangible looks onto our leathers, focusing on <span className="text-white font-medium">Colour, Texture and hand feel</span> effects. We believe that accurate colour information is vital to our business and can be the difference between a best seller or an item that will never sell. For this reason we liaise closely with fashion & trend consultants, so that our forecasts can give new inspiration and direction whilst offering assurance and confidence to our clients.
                    </p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InnovationPage;
