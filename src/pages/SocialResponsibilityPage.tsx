import { HandHeart, GraduationCap, Building2, HeartPulse,  Users, School } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    description: "A large educational complex comprising of a Technical School and Polytechnic Institute for both boys and girls. Equipped with state-of-the-art workshops and laboratories. Currently serving over 1,200 students with expected growth to 3,000.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Aisha Memorial School",
    location: "Mohallah Raja-Wali, Chiniot",
    description: "In operation for over a decade, providing quality education to about 600 boys and girls. The school achieves excellent results and provides modern educational facilities, including computer labs. Currently in the process of expansion.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2662&auto=format&fit=crop"
  }
];

const donatedProjects = [
  {
    title: "Mian Siddiq Shafi Govt. Degree College for Women",
    location: "Chiniot",
    description: "Responding to the appeal from the college, Muhammad Shafi Trust constructed an impressive building for over 1,000 girl students who previously lacked their own building. Inaugurated on March 26, 2005.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2586&auto=format&fit=crop"
  },
  {
    title: "Medical Centre at Goth Haji Nabi Bakhsh",
    location: "Dist Umer Kot, Sindh",
    description: "Providing vital healthcare facilities to the under-privileged and poor people of this remote area.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2800&auto=format&fit=crop"
  }
];

const SocialResponsibilityPage = () => {
  return (
    <div className="min-h-screen bg-background">
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
        <section className="py-24 bg-cream texture-grain">
             <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Projects Under Our Supervision</h2>
                    <div className="w-20 h-1 bg-gold mx-auto" />
                </div>

                <div className="space-y-20">
                    {ownProjects.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                            <div className="w-full lg:w-1/2">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">{project.title}</h3>
                                    <p className="text-gold font-medium tracking-wide flex items-center gap-2">
                                        <Building2 className="w-4 h-4" />
                                        {project.location}
                                    </p>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Donated Projects */}
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Major Contributions</h2>
                    <p className="text-muted-foreground">Projects established with generous funding from Muhammad Shafi Trust</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {donatedProjects.map((project, index) => (
                        <div key={index} className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="aspect-[16/9] overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-8 space-y-4">
                                <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gold font-medium flex items-center gap-2">
                                    <HeartPulse className="w-4 h-4" />
                                    {project.location}
                                </p>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
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
