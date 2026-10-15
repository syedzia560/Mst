import { HandHeart, GraduationCap, Building2, HeartPulse,  Users, School } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Education Scholarships",
    description: "Providing a large number of scholarships to students all over the country for their school, college, and university education."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Providing financial help to widows, orphans, and other needy persons in the community."
  },
  {
    icon: School,
    title: "School Support",
    description: "Supporting schools providing education to poor sections of society to meet their monthly deficits."
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    description: "Regular donations to Chiniot Anjuman Islamia for constructing hospitals and schools in Karachi."
  },
  {
    icon: GraduationCap,
    title: "Higher Education",
    description: "Donated funds to GIK Institute of Technology and Chiniot Islamia Boys College."
  },
  {
    icon: HandHeart,
    title: "LUMS Outreach",
    description: "Donors to Lahore University of Management Sciences (LUMS) for their National Outreach Program to help needy students."
  }
];

const ownProjects = [
  {
    title: "Muhammad Shafi Educational Complex",
    location: "Kachchi Abaadi, Shershah Colony, Karachi",
    focus: "Technical Education & Polytechnic Training",
    capacity: "1,200+ Students (Expanding to 3,000)",
    icon: School,
    description: "A flagship educational complex comprising a Technical School and Polytechnic Institute for both boys and girls. Equipped with modern workshops and laboratories to empower local youth with tangible industrial, mechanical, and technical vocations.",
  },
  {
    title: "Aisha Memorial School",
    location: "Mohallah Raja-Wali, Chiniot, Punjab",
    focus: "Primary & Secondary Comprehensive Schooling",
    capacity: "600+ Boys & Girls",
    icon: GraduationCap,
    description: "In continuous operation for over a decade, providing subsidized high-caliber education to about 600 students. Features modern computer labs, standardized science curriculum, and ongoing facility expansion.",
  }
];

const donatedProjects = [
  {
    title: "Mian Siddiq Shafi Govt. Degree College for Women",
    location: "Chiniot, Punjab",
    focus: "Higher Secondary & Undergraduate Women's Education",
    milestone: "Inaugurated March 26, 2005",
    capacity: "1,000+ Female Students",
    icon: Building2,
    description: "Responding to urgent local appeals for women's higher education, the Muhammad Shafi Trust funded and constructed a dedicated multi-wing campus for over 1,000 young women who previously had no accessible degree college.",
  },
  {
    title: "Medical Centre at Goth Haji Nabi Bakhsh",
    location: "Dist. Umer Kot, Southern Sindh",
    focus: "Rural Outpatient Healthcare & Community Medicine",
    milestone: "Trust Healthcare Endowment",
    capacity: "Daily Free Consultations & Medicines",
    icon: HeartPulse,
    description: "Providing vital diagnostic facilities, emergency triage, maternal healthcare, and essential medicine distributions to under-served families in remote rural desert communities.",
  }
];

const SocialResponsibilityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Corporate Social Responsibility (CSR) & Muhammad Shafi Trust"
        description="Established in 1991, Muhammad Shafi Trust funds educational complexes, women's degree colleges, healthcare clinics, and academic scholarships across Pakistan."
        canonicalPath="/social-responsibility"
        keywords="Muhammad Shafi Trust, CSR leather industry Pakistan, Shafi educational complex, philanthropy Karachi, Shafi Group social responsibility"
      />
      <Header />
      <main>
        {/* Hero Section */}
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
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm flex items-center justify-center gap-3">
                <span className="w-12 h-px bg-gold" />
                Philanthropy
                <span className="w-12 h-px bg-gold" />
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
                Social Responsibility
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-serif italic">
                "Only an educated and healthy society can ensure sustainable development and character-building of the nation."
              </p>
            </div>
          </div>
        </section>

        {/* Intro / Trust Info */}
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <p className="text-lg leading-relaxed text-gray-400">
                        Shafi Group always believes in a healthy and well-educated Pakistan. Keeping this in mind, the Directors of Shafi Group established the <strong className="text-white">"Muhammad Shafi Trust"</strong> in the year 1991. The Trust is named after Late Mian Muhammad Shafi, a well-known philanthropist and founder of the Group.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-400">
                        Most of the donations and funds (Zakaat and Khairaat) of Shafi Group of Companies are channelised through this Trust.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {initiatives.map((item, index) => (
                        <div key={index} className="bg-card p-8 rounded-xl shadow-sm hover:shadow-gold/20 hover:-translate-y-1 transition-all duration-300 border border-border/50">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-3 text-foreground">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Own Projects */}
        <section className="py-24 bg-card/20 border-y border-white/5">
             <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
                    <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs">Direct Trust Endowments</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Projects Under Trust Supervision</h2>
                    <div className="w-16 h-[2px] bg-gold mx-auto" />
                    <p className="text-muted-foreground text-base leading-relaxed">
                        Institutions established, funded, and managed under the direct stewardship of the Muhammad Shafi Trust (Est. 1991).
                    </p>
                </div>

                <div className="space-y-12">
                    {ownProjects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <div key={index} className="bg-card/70 border border-white/10 rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 shadow-xl">
                                <div className="grid lg:grid-cols-12 gap-8 items-center p-8 md:p-12">
                                    {/* Institutional Plaque Emblem */}
                                    <div className="lg:col-span-4 bg-background/90 border border-gold/25 p-8 rounded-lg text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
                                        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mb-4 shadow-sm">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold/90 mb-1">Muhammad Shafi Trust</span>
                                        <h4 className="text-base font-serif font-semibold text-white tracking-wide">{project.focus}</h4>
                                        <div className="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs text-gray-300">
                                            <Building2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                                            <span>{project.location}</span>
                                        </div>
                                    </div>

                                    {/* Narrative & Scope */}
                                    <div className="lg:col-span-8 space-y-5">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="px-3 py-1 bg-gold/15 border border-gold/30 text-gold text-xs uppercase tracking-wider rounded-full font-medium">
                                                {project.capacity}
                                            </span>
                                            <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs uppercase tracking-wider rounded-full">
                                                Supervised Operation
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{project.title}</h3>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
             </div>
        </section>

        {/* Donated Projects */}
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
                    <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs">Healthcare & Higher Education</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Major Philanthropic Contributions</h2>
                    <div className="w-16 h-[2px] bg-gold mx-auto" />
                    <p className="text-muted-foreground text-base leading-relaxed">
                        Flagship infrastructure built and gifted by Muhammad Shafi Trust to serve regional communities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {donatedProjects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <div key={index} className="bg-card/60 border border-white/10 rounded-xl p-8 md:p-10 hover:border-gold/40 transition-all duration-300 shadow-lg flex flex-col justify-between relative group">
                                <div className="space-y-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[11px] font-medium text-gold/90 uppercase tracking-widest block">{project.milestone}</span>
                                            <span className="text-xs text-muted-foreground">{project.capacity}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-gold transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-gold font-medium flex items-center gap-2">
                                            <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                                            {project.location}
                                        </p>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                                    <span className="uppercase tracking-wider text-[11px] text-gray-400">{project.focus}</span>
                                    <span className="text-gold font-medium">Muhammad Shafi Trust</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Environmental Sustainability */}
        <section className="py-24 bg-cream texture-grain border-t border-border/50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Sustainability</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Environmental Stewardship</h2>
                        <div className="w-20 h-1 bg-gold" />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            As a leading leather manufacturer, we recognize our responsibility to the environment. Our state-of-the-art **Effluent Treatment Plant (ETP)** ensures that all industrial waste water is processed and neutralized according to international environmental standards before being discharged.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Clean water discharge compliance",
                                "Modern biological treatment process",
                                "Zero-liquid discharge initiatives",
                                "Continuous monitoring and laboratory testing"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
                            <img 
                                src="/images/tannery/effluent_treatment_plant.jpg" 
                                alt="Modern Effluent Treatment Plant" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
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

export default SocialResponsibilityPage;
