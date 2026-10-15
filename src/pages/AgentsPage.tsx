import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

interface Agent {
  country: string;
  flagCode: string;
  companyName: string;
  address: string;
  phone: string;
  email: string;
  contactPersons?: string[];
}

const agents: Agent[] = [
  {
    country: "Germany",
    flagCode: "de",
    companyName: "A. Loreth Gmbh",
    address: "Schuetzengarten Strasse 18, D-66955 Pirmasens, Germany",
    phone: "+49 6331 42031",
    email: "m.heinze@loreth.de",
    contactPersons: ["Mr. Mathian Heinze", "Mr. Sebastian Seufert"],
  },
  {
    country: "Spain",
    flagCode: "es",
    companyName: "J.F Leather Merchants SL",
    address: "Ter, 12 Bajos Depacho 4, Poligono Son Fuster, 07009 Palma De Mallorca, Spain",
    phone: "+34 971 706 222",
    email: "pvallejo@jflm.com",
  },
  {
    country: "United Kingdom",
    flagCode: "gb",
    companyName: "Seaward Material Solutions Ltd",
    address: "50, Brookfield Way, Street, Somerset, BA16 0UE, United Kingdom",
    phone: "+44 776 8467 989",
    email: "andy@seawardmaterialsolutions.co.uk",
  },
  {
    country: "China",
    flagCode: "cn",
    companyName: "Sihui Ruidi Trading Co., Ltd",
    address: "No. 1 Shop, 1st Floor, No. 14, Taochong Sujiang Third Village, Dongcheng District, Shui City, Guangdong Province, China (Zip: 526200)",
    phone: "+86 139 2986 8402",
    email: "cindy@shafichina.com",
  },
  {
    country: "USA & Italy",
    flagCode: "it",
    companyName: "For Pelli Srl",
    address: "Via dell'Arte, 20/A, 63821 - Porto Sant'Elpidio (FM), Italy",
    phone: "+39 0734 901026",
    email: "export@forpelli.com",
  },
  {
    country: "Portugal",
    flagCode: "pt",
    companyName: "NL - New Leather Lda",
    address: "Rua Antonio Ramalhao No. 138, 4460 - 240 Sra. Da hora - Matosinhos, Portugal",
    phone: "+351 917 092 939",
    email: "mail@newleather.pt",
  },
  {
    country: "Argentina",
    flagCode: "ar",
    companyName: "Lancuer S.A.C.I.I.F",
    address: "Chascomus 5940, (1440) Capital Federal, Buenos Aires, Argentina",
    phone: "+54 11 4686 4941",
    email: "lancuer@lancuer.com.ar",
  },
  {
    country: "France",
    flagCode: "fr",
    companyName: "Axel Benoist",
    address: "1, Allee Des Templiers, B.P.1 5 - 44210 Pornic, France",
    phone: "+33 240 822 083",
    email: "axel.benoist@bbox.fr",
  },
  {
    country: "Turkey",
    flagCode: "tr",
    companyName: "Umit Fahri Gonenc",
    address: "Istanbul, Turkey",
    phone: "+90 532 1658 781",
    email: "umitfahrig@gmail.com",
  },
];

const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Global Agents & International Representatives"
        description="Connect with authorized international sales agents and representatives for Muhammad Shafi Tanneries (MST) in Germany, Italy, UK, Spain, France, China, Portugal, and Turkey."
        canonicalPath="/agents"
        keywords="MST leather agents, Shafi tannery international representatives, leather suppliers Germany, leather agents Italy, leather distributor China"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="MST Worldwide Representative Network" 
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="container px-4 relative z-10">
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">International Presence</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Global Agents</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Local expertise, global reach. Reach our dedicated representatives across Europe, the Americas, and Asia.
            </p>
          </div>
        </section>

        {/* Agents Grid Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Direct Contact</p>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
                  Authorized Representatives
                </h2>
                <p className="text-gray-400 font-light">
                  Our network of seasoned leather industry professionals ensures rapid sample dispatch, local consultations, and seamless order fulfillment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {agents.map((agent, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.02] p-8 border border-white/10 shadow-xl backdrop-blur-sm hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Flag and Country Header */}
                      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                        <img 
                          src={`https://flagcdn.com/w80/${agent.flagCode}.png`} 
                          alt={`${agent.country} flag`} 
                          loading="lazy" 
                          className="h-6 w-auto rounded-none shadow" 
                        />
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gold font-bold">{agent.country}</p>
                          <h3 className="font-serif font-bold text-lg text-white group-hover:text-gold transition-colors">
                            {agent.companyName}
                          </h3>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-4 text-sm text-gray-400 font-light">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                          <p className="leading-relaxed">{agent.address}</p>
                        </div>

                        {agent.contactPersons && (
                          <div className="pt-2 text-xs text-gray-300 space-y-1">
                            {agent.contactPersons.map((person, pIndex) => (
                              <p key={pIndex} className="font-medium text-white/90">
                                • {person}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
                      <a 
                        href={`tel:${agent.phone.replace(/[^0-9+]/g, '')}`}
                        className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold transition-colors"
                      >
                        <Phone className="w-4 h-4 text-gold" />
                        <span>{agent.phone}</span>
                      </a>
                      <a 
                        href={`mailto:${agent.email}`}
                        className="flex items-center gap-3 text-sm text-gold hover:text-white transition-colors break-all"
                      >
                        <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>{agent.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Head Office Callout */}
              <div className="p-8 md:p-12 bg-white/[0.02] border border-gold/30 text-center space-y-4">
                <Globe className="w-8 h-8 text-gold mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-white">Don't See Your Region Listed?</h3>
                <p className="text-gray-400 max-w-2xl mx-auto font-light">
                  Our central export team in Karachi manages direct shipments to over 120 countries. Inquire directly with our global head office.
                </p>
                <div className="pt-4">
                  <a 
                    href="mailto:sales.mst@shafi.com"
                    className="inline-block border border-gold text-gold hover:bg-gold hover:text-black font-bold uppercase tracking-widest text-xs px-8 py-4 transition-all duration-300"
                  >
                    Contact Head Office (sales.mst@shafi.com)
                  </a>
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
