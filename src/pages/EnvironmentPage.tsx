import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const EnvironmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="MST Facility" 
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Environmental Commitment</h1>
              <p className="text-lg text-gray-200">
                LWG Gold Rated Tannery - Leading the way in sustainable leather manufacturing.
              </p>
            </div>
          </div>
        </section>
         <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Environment Overview */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">ENVIRONMENT</h2>
                        <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                            <p>
                                MST management always believes in promotion of safe and healthy environment. Becoming an <span className="text-white font-medium">“Eco Friendly”</span> tannery is an ultimate goal of MST’s management.
                            </p>
                            <p>
                                Few steps have already been taken in this respect. First step was installation of Chrome Recovery Plant which recovers all chrome from the effluent and recycled chrome is again used in the process. MST has also installed complete waste water treatment plant with modern European equipment to ensure high quality of water being discharged from the tannery.
                            </p>
                            <p>
                                MST takes pride in being <span className="text-white font-medium">ISO-14001</span> certified & member of Leather Working Group (LWG) which is a symbol of our commitment towards an “ECO Friendly” environment. Additionally, we also promote “Eco Friendly” articles which are free from Azo Dyes, PCP and Chrome 6.
                            </p>
                            <p>
                                MST is also a member of Leather Working Group which is a global recognized system of Environmental Management.
                            </p>
                        </div>
                    </div>

                    {/* Scope of EMS */}
                    <div className="bg-white/[0.02] p-8 rounded-none border border-white/10 shadow-xl backdrop-blur-sm">
                        <h3 className="text-xl font-sans font-bold text-white uppercase tracking-wider mb-4">Scope of EMS</h3>
                        <p className="text-muted-foreground mb-4">Muhammad Shafi Tanneries (Pvt.) Ltd is an ISO 14001:2015 certified Organization.</p>
                        <p className="font-medium text-foreground">Scope of Environmental Management System Certification</p>
                        <p className="text-primary font-bold mt-2">“Manufacturing of Leather (From Raw to Finish)”</p>
                    </div>

                    {/* Environmental Policy */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-6 underline decoration-primary/50 underline-offset-4">Environmental Policy:</h3>
                        <p className="text-lg text-muted-foreground mb-8">
                            Muhammad Shafi Tanneries (Pvt.) Ltd is engage in leather manufacturing business from Raw to Finish with the motto of consistent Quality and innovation.
                        </p>
                        
                        <div className="space-y-6">
                            <p className="text-xl text-gray-300 font-serif italic leading-relaxed">
                                For green production and better environment friendly performance MST is committed to properly assess and measure its environmental issues when key decision are taken and will strive to:
                            </p>
                            
                            <ul className="space-y-4 text-muted-foreground list-disc pl-6">
                                <li>Protect environment by minimizing air pollution, water & land contamination and excess noise.</li>
                                <li>Comply with legal, social, environmental and operational Laws & requirement pertinent to our industry and with the requirement of LWG, customer, community, employees, government and management and other initiative we inter into in accordance with our commitment to offer Quality Products and services along with better environment performance.</li>
                                <li>Improve the environmental performance through conservation of resources minimizing solid waste, air emissions and pollution load by adopting cleaner production options.</li>
                                <li>Ensure continual improvement we promote recovery, recycle and reuse of products where possible to reduce the pollution at the end of pipe treatment and for prevention of environmental degradation by using environmental friendly techniques throughout the production cycle.</li>
                                <li>Ensure the periodical reviews for continual improvement in environmental management system and to keep it functional we promote training and awareness session for all employees.</li>
                                <li>Management and employees are responsible for communication & implementation of environmental policy to interested parties internally & externally.</li>
                            </ul>
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
