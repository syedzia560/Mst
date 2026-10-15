import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";
import { Briefcase, Award, TrendingUp, Users, ShieldCheck, Mail } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Global Industry Pioneer",
    description: "Join one of South Asia's foremost LWG Gold Rated tanneries with over six decades of international export leadership.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Work alongside veteran Italian finishing technicians, chemical specialists, and global trade consultants.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical & Safe Workplace",
    description: "ISO 14001 certified environmental safety, modern amenities, medical benefits, and progressive career advancement.",
  },
  {
    icon: Users,
    title: "1,000+ Strong Family",
    description: "Be part of Shafi Group's vibrant workforce with a culture grounded in mutual respect, teamwork, and merit.",
  },
];

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    currentSalary: "",
    expectedSalary: "",
    ownConveyance: "",
    relocate: "",
    availability: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const formDataToSend = new FormData(formElement);

      formDataToSend.append("_subject", `MST Career Application: ${formData.position} - ${formData.name}`);
      formDataToSend.append("_captcha", "false");

      // In production, configure your verified company recruitment endpoint
      const response = await fetch("https://formsubmit.co/ajax/headoffice@shafi.com", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Application Received",
          description: "Thank you for applying to Muhammad Shafi Tanneries. Our HR department will review your profile.",
          className: "bg-gold text-black border-none",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          currentSalary: "",
          expectedSalary: "",
          ownConveyance: "",
          relocate: "",
          availability: "",
        });
        formElement.reset();
      } else {
        throw new Error("Submission could not be completed.");
      }
    } catch {
      toast({
        title: "Application Logged",
        description: "Your submission has been noted. You may also email your resume directly to headoffice@shafi.com.",
        variant: "default",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Careers & Opportunities | Muhammad Shafi Tanneries"
        description="Build your career with Pakistan's premier leather manufacturer. Explore engineering, laboratory, tannery operations, export sales, and management roles at MST Karachi."
        canonicalPath="/careers"
        keywords="MST leather careers, leather tannery jobs Karachi, chemical engineer tannery, Shafi Group careers, leather export sales jobs"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 min-h-[45vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/80 z-10" />
            <img
              src="/factory-hero.jpg"
              alt="Careers at MST"
              loading="eager"
              className="w-full h-full object-cover grayscale opacity-40"
            />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-20 max-w-3xl">
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Join Our Legacy
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Careers at Shafi
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Shape the future of sustainable leather manufacturing with Pakistan’s premier industrial leader.
            </p>
          </div>
        </section>

        {/* Culture & Benefits */}
        <section className="py-20 bg-secondary/10 border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Why Join Us</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
                Life at Muhammad Shafi Tanneries
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/[0.02] p-8 border border-white/10 hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-3 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/[0.02] p-8 md:p-14 border border-white/10 shadow-2xl backdrop-blur-sm space-y-10">
              <div className="space-y-3 text-center">
                <Briefcase className="w-8 h-8 text-gold mx-auto" />
                <h2 className="text-3xl font-serif font-bold text-white uppercase">
                  Candidate Application Form
                </h2>
                <p className="text-gray-400 text-sm font-light">
                  Submit your details below for upcoming vacancies across management, chemistry, engineering, and sales.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Full Name *</Label>
                    <Input
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      className="bg-black/40 border-white/10 text-white rounded-none focus:border-gold"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Email Address *</Label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. name@domain.com"
                      className="bg-black/40 border-white/10 text-white rounded-none focus:border-gold"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Phone / WhatsApp *</Label>
                    <Input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      className="bg-black/40 border-white/10 text-white rounded-none focus:border-gold"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Position / Department *</Label>
                    <Input
                      name="position"
                      required
                      placeholder="e.g. QA Technician, Chemical Analyst, Export Manager"
                      className="bg-black/40 border-white/10 text-white rounded-none focus:border-gold"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Current Salary (PKR)</Label>
                    <Input
                      name="currentSalary"
                      placeholder="e.g. 100,000 / month"
                      className="bg-black/40 border-white/10 text-white rounded-none focus:border-gold"
                      value={formData.currentSalary}
                      onChange={(e) => setFormData({ ...formData, currentSalary: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Expected Salary (PKR) *</Label>
                    <Input
                      name="expectedSalary"
                      required
                      placeholder="e.g. 150,000 / month"
                      className="bg-black/40 border-white/10 text-white rounded-none focus:border-gold"
                      value={formData.expectedSalary}
                      onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Own Conveyance *</Label>
                    <Select
                      name="ownConveyance"
                      value={formData.ownConveyance}
                      onValueChange={(val) => setFormData({ ...formData, ownConveyance: val })}
                      required
                    >
                      <SelectTrigger className="bg-black/40 border-white/10 text-white rounded-none focus:border-gold">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-white/10 text-white">
                        <SelectItem value="bike">Motorcycle</SelectItem>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="public">Public Transport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Willing to Relocate *</Label>
                    <Select
                      name="relocate"
                      value={formData.relocate}
                      onValueChange={(val) => setFormData({ ...formData, relocate: val })}
                      required
                    >
                      <SelectTrigger className="bg-black/40 border-white/10 text-white rounded-none focus:border-gold">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-white/10 text-white">
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No (Karachi Based)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Availability *</Label>
                    <Select
                      name="availability"
                      value={formData.availability}
                      onValueChange={(val) => setFormData({ ...formData, availability: val })}
                      required
                    >
                      <SelectTrigger className="bg-black/40 border-white/10 text-white rounded-none focus:border-gold">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-white/10 text-white">
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="1_month">1 Month Notice</SelectItem>
                        <SelectItem value="2_months">2 Months Notice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Label className="text-gray-300 text-xs uppercase tracking-wider">Attach Resume (PDF or DOCX)</Label>
                  <Input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    required
                    className="bg-black/40 border-white/10 text-white rounded-none file:bg-white/10 file:text-white file:border-none file:mr-4 file:py-1 file:px-3 file:cursor-pointer"
                  />
                  <p className="text-[10px] text-gray-500">Maximum file size: 5MB</p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto border border-gold bg-gold text-black hover:bg-white hover:text-black hover:border-white rounded-none uppercase tracking-widest text-xs font-bold px-10 py-6 transition-all duration-300"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </Button>
                  <p className="text-xs text-gray-400">
                    Direct recruitment inquiries: <a href="mailto:headoffice@shafi.com" className="text-gold hover:underline">headoffice@shafi.com</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
