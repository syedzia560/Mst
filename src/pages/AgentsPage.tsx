import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AgentsPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Agents</h1>
            <p className="text-xl text-gray-200">Our global network of authorized representatives.</p>
          </div>
        </section>
         <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-primary text-center mb-16">Names & Addresses of our Agents</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Germany */}
                        <div className="bg-white/[0.02] p-6 rounded-none border border-white/10 shadow-xl backdrop-blur-sm hover:border-gold/30 transition-all group">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://flagcdn.com/w80/de.png" alt="Germany" loading="lazy" className="h-8 w-auto rounded shadow-sm" />
                                <h3 className="font-sans font-bold text-lg leading-tight text-white group-hover:text-gold transition-colors text-white uppercase tracking-wider">A. Loreth Gmbh</h3>
                            </div>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>Schuetzengarten Strasse 18, D-66955 Pirmasens, Germany</p>
                                <p className="font-medium text-foreground">Tel: +49 6331 42031</p>
                                <div className="pt-2 border-t border-border/50">
                                    <p>Mr. Mathian Heinze (m.heinze@loreth.de)</p>
                                    <p>Mr. Sebastian Seufert (s.seufert@loreth.de)</p>
                                </div>
                            </div>
                        </div>

                        {/* Spain */}
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://flagcdn.com/w80/es.png" alt="Spain" loading="lazy" className="h-8 w-auto rounded shadow-sm" />
                                <h3 className="font-bold text-lg leading-tight">J.F LEATHER MERCHANTS SL</h3>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Ter, 12 Bajos Depacho 4, Poligono Son Fuster, 07009 Palma De Maiorca SPAIN</p>
                                <p className="font-medium text-foreground">Tel: +34 971 706 222</p>
                                <p className="text-primary break-all">Email: pvallejo@jflm.com</p>
                            </div>
                        </div>

                        {/* UK */}
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://flagcdn.com/w80/gb.png" alt="UK" loading="lazy" className="h-8 w-auto rounded shadow-sm" />
                                <h3 className="font-bold text-lg leading-tight">SEAWARD MATERIAL SOLUTIONS LTD</h3>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>50, Brookfield Way, Street, Somerset, BA 16 0UE. UK</p>
                                <p className="font-medium text-foreground">Tel: +44 776 8467 989</p>
                                <p className="text-primary break-all">Email: andy@seawardmaterialsolutions.co.uk</p>
                            </div>
                        </div>

                        {/* China */}
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://flagcdn.com/w80/cn.png" alt="China" loading="lazy" className="h-8 w-auto rounded shadow-sm" />
                                <h3 className="font-bold text-lg leading-tight">SIHUI RUIDI TRADING CO., LTD</h3>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>No. 1 Shop, 1st Floor, No. 14, Taochong Sujiang Third Village, Dongcheng District, Shui City, Guangdong Province, China. Zip: 526200</p>
                                <p className="font-medium text-foreground">Tel: +86 139 2986 8402</p>
                                <p className="text-primary break-all">Email: cindy@shafichina.com</p>
                            </div>
                        </div>

                        {/* USA / Italy */}
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://flagcdn.com/w80/us.png" alt="USA" loading="lazy" className="h-8 w-auto rounded shadow-sm" />
                                <h3 className="font-bold text-lg leading-tight">FOR PELLI SRL.</h3>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Via dell'Arte, 20/A, 63821 - Porto Sant'Elpidio (FM) ITALIA</p>
                                <p className="font-medium text-foreground">Tel: +39 0734 901026</p>
                                <p>Mob: +39 3357 241135</p>
                                <p className="text-primary break-all">Email: export@forpelli.com</p>
                            </div>
                        </div>

                         {/* Portugal */}
                         <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://flagcdn.com/w80/pt.png" alt="Portugal" loading="lazy" className="h-8 w-auto rounded shadow-sm" />
                                <h3 className="font-bold text-lg leading-tight">NL - NEW LEATHER LDA.</h3>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Rua Antonio Ramalhao No. 138, 4460 - 240 Sra. Da hora - Matosinhos Portugal</p>
                                <p className="font-medium text-foreground">Tel: +351 917 092 939</p>
                                <p className="text-primary break-all">Email: mail@newleather.pt</p>
                            </div>
                        </div>

                        {/* Argentina */}
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://flagcdn.com/w80/ar.png" alt="Argentina" loading="lazy" className="h-8 w-auto rounded shadow-sm" />
                                <h3 className="font-bold text-lg leading-tight">LANCUER S.A.C.I.I.F</h3>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Chascomus 5940, (1440) Capital Federal, Buenos Aires Argentina.</p>
                                <p className="font-medium text-foreground">Tel: +54 11 4686 4941 / 6167</p>
                                <p className="text-primary break-all">Email: lancuer@lancuer.com.ar</p>
                            </div>
                        </div>

                         {/* France */}
                         <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://flagcdn.com/w80/fr.png" alt="France" loading="lazy" className="h-8 w-auto rounded shadow-sm" />
                                <h3 className="font-bold text-lg leading-tight">AXEL BENOIST</h3>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>1, Allee Des Templiers, B.P.1 5 - 44210 Pornic FRANCE</p>
                                <p className="font-medium text-foreground">Tel: +33 240 822 083</p>
                                <p className="text-primary break-all">Email: axel.benoist@bbox.fr</p>
                            </div>
                        </div>

                        {/* Turkey */}
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://flagcdn.com/w80/tr.png" alt="Turkey" loading="lazy" className="h-8 w-auto rounded shadow-sm" />
                                <h3 className="font-bold text-lg leading-tight">UMIT FAHRI GONENC</h3>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Istanbul, Turkey</p>
                                <p className="font-medium text-foreground">Tel: +90 532 1658 781</p>
                                <p className="text-primary break-all">Email: umitfahrig@gmail.com</p>
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

export default AgentsPage;
