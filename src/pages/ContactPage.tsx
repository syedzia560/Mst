import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office Address",
    details: ["Shafi House, 35-A/3, Lalazar,", "Opp. Beach Luxury Hotel, P.O. Box 4524,", "Karachi-74000, Pakistan"],
  },
  {
    icon: MapPin,
    title: "Factory Address (SITE Area)",
    details: [
      "D-196-A, Haroonabad S.I.T.E area Sindh 75700",
      "Google Coordinates:", 
      "24.89123491481986, 66.99899929149421"
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["Tel: (92-21) 35610696-8-9"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["headoffice@shafi.com", "sales.mst@shafi.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    requirements: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "Our team will review your requirements and get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      requirements: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="MST Facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-4">Get In Touch</p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Contact Us</h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Have questions about our leather products or tanning services? 
                Our team is here to assist you with your global sourcing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    We respond to all inquiries within 24 business hours. 
                    For urgent matters, please call us directly.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-card rounded-xl shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-white uppercase tracking-wider mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6796348630325!2d67.01833737596005!3d24.8404283460599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33de3b3f20f11%3A0xc3b9991206f02241!2sShafi%20House!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shafi House Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    Request a Quote
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and our export team will get back to you.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="Your Company Ltd."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+1 234 567 890"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Country *
                        </label>
                        <Input
                          type="text"
                          placeholder="United States"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Leather Type Required
                        </label>
                        <Input
                          type="text"
                          placeholder="e.g., Full Grain, Nubuck"
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Requirements *
                      </label>
                      <Textarea
                        placeholder="Please describe your leather requirements, quantities, specifications, and any other details..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button type="submit" variant="default" size="xl" className="w-full">
                      Submit Inquiry
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Response */}
        <section className="py-16 bg-leather-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Need Urgent Assistance?</h3>
                <p className="text-primary-foreground/80">
                  Call our export team directly for immediate support
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Call Us</p>
                  <p className="text-xl font-semibold">(92-21) 35610696-8-9</p>
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

export default ContactPage;
