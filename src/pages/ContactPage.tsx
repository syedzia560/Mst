import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  Factory,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RotateCcw,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";
import { trackEvent } from "@/lib/analytics";

interface LocationDetails {
  id: "head-office" | "factory";
  title: "Corporate Head Office" | "Tannery & Manufacturing Facility";
  icon: typeof Building2;
  addressLines: string[];
  directionsUrl: string;
  embedUrl: string;
  note?: string;
}

const locations: LocationDetails[] = [
  {
    id: "head-office",
    title: "Corporate Head Office",
    icon: Building2,
    addressLines: [
      "Shafi House, 35-A/3, Lalazar,",
      "Opp. Beach Luxury Hotel, P.O. Box 4524,",
      "Karachi-74000, Pakistan.",
    ],
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Shafi+House+35-A%2F3+Lalazar+Karachi",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6796348630325!2d67.01833737596005!3d24.8404283460599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33de3b3f20f11%3A0xc3b9991206f02241!2sShafi%20House!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s",
  },
  {
    id: "factory",
    title: "Tannery & Manufacturing Facility",
    icon: Factory,
    addressLines: [
      "D-196-A, Haroonabad,",
      "S.I.T.E. Industrial Area,",
      "Karachi, Sindh 75700, Pakistan.",
    ],
    note: "Reported Coordinates: 24.891235, 66.998999 (Pending official survey approval)",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=24.89123491481986,66.99899929149421",
    embedUrl:
      "https://maps.google.com/maps?q=24.89123491481986,66.99899929149421&hl=en&z=15&output=embed",
  },
];

const contactCards = [
  {
    icon: Phone,
    title: "Telephone Exchange",
    lines: ["(92-21) 35610696-8-9"],
    action: { label: "Call Now", href: "tel:+922135610696" },
  },
  {
    icon: Mail,
    title: "Export & General Inquiries",
    lines: ["sales.mst@shafi.com", "headoffice@shafi.com"],
    action: { label: "Email Sales Desk", href: "mailto:sales.mst@shafi.com" },
  },
  {
    icon: Clock,
    title: "Operating Hours",
    lines: ["Mon – Sat: 09:00 AM – 06:00 PM (PKT)", "Sunday: Closed (Export desk via email)"],
  },
];

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [activeLocation, setActiveLocation] = useState<"head-office" | "factory">("head-office");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    leatherType: "",
    message: "",
  });

  // Anti-spam states
  const [botTrap, setBotTrap] = useState("");
  const [formRenderTime, setFormRenderTime] = useState<number>(Date.now());

  // Submission state machine
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryReference, setInquiryReference] = useState("");

  useEffect(() => {
    setFormRenderTime(Date.now());

    // Pre-fill fields from query params if incoming from exhibition or service page
    const eventParam = searchParams.get("event");
    const serviceParam = searchParams.get("service");
    const articleParam = searchParams.get("article");
    const inquiryType = searchParams.get("inquiryType");

    if (eventParam) {
      setFormData((prev) => ({
        ...prev,
        leatherType: prev.leatherType || "Exhibition Delegation Meeting",
        message: prev.message || `Meeting request regarding: ${eventParam}. We would like to schedule a booth discussion.`,
      }));
    } else if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        leatherType: prev.leatherType || serviceParam,
        message: prev.message || `Inquiry regarding ${serviceParam} capabilities and commercial sampling terms.`,
      }));
    } else if (articleParam) {
      setFormData((prev) => ({
        ...prev,
        leatherType: prev.leatherType || articleParam,
        message: prev.message || `Requesting technical specification sheet, color swatches, and FOB Karachi quote for ${articleParam}.`,
      }));
    } else if (inquiryType === "lwg") {
      setFormData((prev) => ({
        ...prev,
        leatherType: "LWG Compliance Dossier",
        message: "Requesting certified copy of MST Leather Working Group audit documentation and URN.",
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Spam detection: honeypot check
    if (botTrap.trim() !== "") {
      // Silently discard bot submission
      setStatus("success");
      return;
    }

    // 2. Velocity check: human cannot submit filled form under 1.5 seconds
    const timeSpent = (Date.now() - formRenderTime) / 1000;
    if (timeSpent < 1.5) {
      setStatus("error");
      setErrorMessage("Submission rejected due to excessive velocity. Please try again.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const refId = `MST-${Date.now().toString().slice(-6)}`;
    const endpoint =
      import.meta.env.VITE_CONTACT_FORM_ENDPOINT ||
      "https://formsubmit.co/ajax/sales.mst@shafi.com";

    const payload = {
      _subject: `MST Export Inquiry [${refId}] from ${formData.company} (${formData.country})`,
      reference_id: refId,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone || "Not provided",
      country: formData.country,
      leather_interest: formData.leatherType || "Unspecified",
      message: formData.message,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setInquiryReference(refId);
        setStatus("success");
        trackEvent("b2b_inquiry_submitted", {
          reference_id: refId,
          country: formData.country,
          leather_type: formData.leatherType,
        });
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(
          data?.message ||
            "The email delivery service could not accept this request. Please contact sales.mst@shafi.com directly."
        );
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Network connectivity error occurred while sending your inquiry.";
      setStatus("error");
      setErrorMessage(msg);
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      leatherType: "",
      message: "",
    });
    setFormRenderTime(Date.now());
  };

  const currentLoc = locations.find((l) => l.id === activeLocation) || locations[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Export Sales & Request Leather Quotation"
        description="Get in touch with Muhammad Shafi Tanneries (MST). Inquire about bulk orders, wet blue, crust, finished leather pricing, and custom specifications."
        canonicalPath="/contact"
        keywords="contact MST leather, leather quote Pakistan, buy wet blue leather, crust leather exporter Karachi, Shafi tannery sales"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pb-20 min-h-[45vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg.jpg"
              alt="MST Industrial Facility"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gold" /> Global Sourcing Desk
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                Connect with Our <span className="text-gold">Export Team</span>
              </h1>
              <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                Whether you require custom article formulation, bulk wet blue container pricing, or
                an exhibition meeting, our international leather specialists respond within 24
                business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-secondary/30 border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.02] border border-white/10 p-6 rounded-sm backdrop-blur-sm space-y-3 hover:border-gold/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-gold/10 ring-1 ring-gold/30 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-white font-serif font-bold text-lg">{card.title}</h3>
                  <div className="space-y-1 text-sm text-gray-400 font-light">
                    {card.lines.map((l, i) => (
                      <p key={i}>{l}</p>
                    ))}
                  </div>
                  {card.action && (
                    <a
                      href={card.action.href}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold hover:text-white font-bold pt-2 transition-colors"
                    >
                      {card.action.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Section: Interactive Form + Dual Maps */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 p-8 md:p-10 shadow-2xl relative">
                <div className="mb-8 space-y-2">
                  <p className="text-gold font-bold tracking-[0.25em] uppercase text-xs">
                    Direct Sourcing Channel
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Request Leather Quotation & Technical Data
                  </h2>
                  <p className="text-sm text-gray-400 font-light">
                    Primary recipient:{" "}
                    <span className="text-gold font-medium">sales.mst@shafi.com</span>. All fields
                    marked with * are required for export processing.
                  </p>
                </div>

                {/* State: Success */}
                {status === "success" && (
                  <div className="p-8 bg-gold/10 border border-gold/40 text-center space-y-6 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto text-gold">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-white">
                        Inquiry Successfully Logged
                      </h3>
                      {inquiryReference && (
                        <p className="text-xs uppercase tracking-widest text-gold font-mono">
                          Reference ID: {inquiryReference}
                        </p>
                      )}
                      <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to Muhammad Shafi Tanneries. Your requirement has
                        been forwarded to our international commercial sales desk. An export
                        manager will review your specifications and reply within 24 business hours.
                      </p>
                    </div>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="border border-gold text-gold hover:bg-gold hover:text-black rounded-sm uppercase text-xs tracking-[0.16em] font-semibold px-6 py-4"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" /> Submit Another Inquiry
                    </Button>
                  </div>
                )}

                {/* State: Error */}
                {status === "error" && (
                  <div className="p-6 mb-6 bg-red-950/40 border border-red-500/50 rounded-sm space-y-4 text-left animate-fade-in">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-bold text-sm">Inquiry Transmission Error</h4>
                        <p className="text-xs text-red-200 mt-1 leading-relaxed">
                          {errorMessage ||
                            "We encountered an issue connecting to the submission service."}
                        </p>
                      </div>
                    </div>
                    <div className="pt-2 flex flex-wrap gap-3">
                      <Button
                        type="button"
                        onClick={() => setStatus("idle")}
                        size="sm"
                        variant="outline"
                        className="border-red-400 text-red-300 hover:bg-red-900/50 rounded-sm text-xs"
                      >
                        Try Again
                      </Button>
                      <a
                        href={`mailto:sales.mst@shafi.com?subject=Export Inquiry from ${encodeURIComponent(formData.company || formData.name)}&body=${encodeURIComponent(
                          `Name: ${formData.name}\nCompany: ${formData.company}\nCountry: ${formData.country}\nRequirement: ${formData.leatherType}\n\nDetails:\n${formData.message}`
                        )}`}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold text-black hover:bg-gold/90 text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-colors"
                      >
                        Email Directly via Mail Client <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Form Inputs (displayed when not in confirmed success state) */}
                {status !== "success" && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - invisible to genuine users */}
                    <input
                      type="text"
                      name="company_tax_id_bypass"
                      value={botTrap}
                      onChange={(e) => setBotTrap(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                          Your Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Marco Rossi"
                          className="bg-black/40 border-white/10 focus-visible:border-gold rounded-none text-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                          Company / Brand Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Continental Footwear S.p.A."
                          className="bg-black/40 border-white/10 focus-visible:border-gold rounded-none text-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                          Corporate Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@brand.com"
                          className="bg-black/40 border-white/10 focus-visible:border-gold rounded-none text-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                          Phone / WhatsApp (Optional)
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+39 02 1234 5678"
                          className="bg-black/40 border-white/10 focus-visible:border-gold rounded-none text-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                          Destination Country / Port *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="e.g. Italy / Port of Genoa"
                          className="bg-black/40 border-white/10 focus-visible:border-gold rounded-none text-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                          Leather Article / Sourcing Interest
                        </label>
                        <Input
                          type="text"
                          value={formData.leatherType}
                          onChange={(e) =>
                            setFormData({ ...formData, leatherType: e.target.value })
                          }
                          placeholder="e.g. Cow Nappa, Wet Blue, Drum-Dyed Crust"
                          className="bg-black/40 border-white/10 focus-visible:border-gold rounded-none text-white text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                        Specification Details / Target Volume *
                      </label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please include thickness (mm), selection grade, finish requirement, estimated square footage, and target delivery window..."
                        className="bg-black/40 border-white/10 focus-visible:border-gold rounded-none text-white text-sm resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-gold text-black hover:bg-gold/90 rounded-sm uppercase tracking-[0.16em] text-xs font-semibold py-6 transition-all duration-300 shadow-lg"
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" /> Transmitting to Export Desk...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Submit Export Inquiry <Send className="w-4 h-4 ml-1" />
                        </span>
                      )}
                    </Button>

                    <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                      All commercial specifications are protected under client non-disclosure. We
                      never share buyer contact data with third parties.
                    </p>
                  </form>
                )}
              </div>

              {/* Dual Location Map & Coordinates Column (TASK 4) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white/[0.02] border border-white/10 p-6 md:p-8 space-y-6">
                  <div>
                    <p className="text-gold font-bold tracking-[0.25em] uppercase text-xs mb-2">
                      Official MST Facilities
                    </p>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                      Physical Locations & Factory Map
                    </h3>
                  </div>

                  {/* Location Selector Tabs */}
                  <div className="grid grid-cols-2 gap-2 bg-black/40 p-1 border border-white/10">
                    {locations.map((loc) => {
                      const isActive = activeLocation === loc.id;
                      return (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => setActiveLocation(loc.id)}
                          className={`flex items-center justify-center gap-2 py-3 px-3 text-xs uppercase tracking-wider font-bold transition-all ${
                            isActive
                              ? "bg-gold text-black shadow-md"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <loc.icon className="w-3.5 h-3.5" />
                          <span className="truncate">
                            {loc.id === "head-office" ? "Head Office" : "Tannery Plant"}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Location Info Card */}
                  <div className="space-y-3 p-4 bg-black/30 border border-white/5">
                    <h4 className="text-white font-serif font-bold text-base flex items-center gap-2">
                      <currentLoc.icon className="w-4 h-4 text-gold" />
                      {currentLoc.title}
                    </h4>
                    <div className="text-xs text-gray-300 font-light space-y-0.5 leading-relaxed">
                      {currentLoc.addressLines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>

                    {currentLoc.note && (
                      <p className="text-[11px] text-amber-300/80 italic pt-1 border-t border-white/5">
                        * {currentLoc.note}
                      </p>
                    )}

                    <div className="pt-2">
                      <a
                        href={currentLoc.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-gold hover:text-black border border-white/10 hover:border-gold text-xs uppercase tracking-wider text-gold font-bold transition-all"
                      >
                        <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </div>

                  {/* Interactive Map Embed */}
                  <div className="aspect-[4/3] w-full border border-white/10 overflow-hidden bg-black/60 relative">
                    <iframe
                      src={currentLoc.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${currentLoc.title} Map Location`}
                      className="w-full h-full filter contrast-[1.05]"
                    />
                  </div>
                </div>

                {/* Direct Hotline Banner */}
                <div className="p-6 bg-gradient-to-r from-gold/10 via-transparent to-transparent border border-gold/30 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold font-bold">
                      Direct Export Hotline
                    </p>
                    <p className="text-white font-serif font-bold text-lg mt-0.5">
                      +92 (21) 35610696
                    </p>
                  </div>
                  <a
                    href="tel:+922135610696"
                    className="px-4 py-2 bg-gold text-black hover:bg-white text-xs uppercase font-bold tracking-wider transition-colors"
                  >
                    Call Export Desk
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

export default ContactPage;
