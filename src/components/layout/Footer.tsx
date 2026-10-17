import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/quality", label: "Quality & Certifications" },
    { href: "/environment", label: "Sustainability & Environment" },
    { href: "/social-responsibility", label: "Social Responsibility" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  const showcaseLinks = [
    { href: "/services", label: "Tannery Services" },
    { href: "/fashion", label: "Leather & Fashion" },
    { href: "/innovation", label: "Innovation & R&D" },
    { href: "/gallery", label: "Media & Facility Gallery" },
    { href: "/exhibition", label: "Global Exhibitions" },
    { href: "/agents", label: "Worldwide Agents" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100083754020979", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/shafitanneriespk/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/muhammad-shafi-tanneries-private-limited/?viewAsMember=true", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-sm bg-white/[0.95] ring-1 ring-gold/40 flex items-center justify-center">
                <img src={logo} alt="Shafi Tannery" loading="lazy" className="h-9 w-auto object-contain" />
              </div>
              <div>
                 <span className="text-2xl font-serif font-bold tracking-[0.2em] uppercase text-white leading-none">Shafi</span>
                <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase">Your Leather Specialist</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Pakistan's leading leather tannery specializing in hide processing, 
              chrome & vegetable tanning, and premium leather finishing since 1959.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company & Governance */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6 text-gold">Company & Standards</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-gold hover:translate-x-1 focus-visible:text-gold focus-visible:outline-none transition-all duration-300 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sourcing & Showcase */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6 text-gold">Showcase & Trade</h3>
            <ul className="space-y-3">
              {showcaseLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-gold hover:translate-x-1 focus-visible:text-gold focus-visible:outline-none transition-all duration-300 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-gold">Contact</h3>
            <div className="space-y-4 text-sm text-gray-400 font-light">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Head Office</p>
                <a 
                  href="https://maps.google.com/?q=Shafi+House+35-A%2F3+Lalazar+Karachi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold focus-visible:text-gold focus-visible:outline-none transition-colors block leading-relaxed"
                  title="Open Head Office in Google Maps"
                >
                  Shafi House, 35-A/3, Lalazar,<br />Opp. Beach Luxury Hotel, P.O. Box 4524,<br />Karachi-74000, Pakistan.
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Manufacturing Facility</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=24.89123491481986,66.99899929149421" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold focus-visible:text-gold focus-visible:outline-none transition-colors block leading-relaxed"
                  title="Open Factory in Google Maps"
                >
                  Factory: D-196-A, Haroonabad<br />S.I.T.E Area, Karachi, Sindh 75700
                </a>
              </div>
              <p>
                Phone:{" "}
                <a 
                  href="tel:+922135610696" 
                  className="hover:text-gold focus-visible:text-gold focus-visible:outline-none transition-colors"
                >
                  (92-21) 35610696-8-9
                </a>
              </p>
              <div className="space-y-1 pt-1">
                <a 
                  href="mailto:headoffice@shafi.com" 
                  className="hover:text-gold focus-visible:text-gold focus-visible:outline-none transition-colors block"
                >
                  headoffice@shafi.com
                </a>
                <a 
                  href="mailto:sales.mst@shafi.com" 
                  className="text-gold hover:text-white focus-visible:text-white focus-visible:outline-none transition-colors block font-medium"
                >
                  sales.mst@shafi.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs uppercase tracking-wider">
            © {currentYear} Shafi Tannery. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400 uppercase tracking-wider">
            <Link to="/contact" className="hover:text-gold focus-visible:text-gold transition-colors duration-300">
              Inquiries
            </Link>
            <Link to="/quality" className="hover:text-gold focus-visible:text-gold transition-colors duration-300">
              Certifications
            </Link>
            <Link to="/environment" className="hover:text-gold focus-visible:text-gold transition-colors duration-300">
              Sustainability
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
