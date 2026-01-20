import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/quality", label: "Quality" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Beam House Operations",
    "Chrome & Vegetable Tanning",
    "Wet Blue & Crust Leather",
    "Finishing & Dyeing",
    "Bulk Export",
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
              <img src={logo} alt="Shafi Tannery" className="h-10 w-auto rounded-sm brightness-110" />
              <div>
                 <span className="text-2xl font-serif font-bold tracking-[0.2em] uppercase text-white leading-none">Shafi</span>
                <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Your Leather Specialist</p>
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
                  className="w-10 h-10 rounded-none border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-gold">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm font-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-gold">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400 font-light">
              <p>Shafi House, 35-A/3, Lalazar,<br />Opp. Beach Luxury Hotel, P.O. Box 4524,<br />Karachi-74000, Pakistan.</p>
              <p>Factory: D-196-A, Haroonabad<br />S.I.T.E area Sindh 75700</p>
              <p>Coordinates: 24.89123491481986, 66.99899929149421</p>
              <p className="hover:text-white transition-colors cursor-pointer">Phone: (92-21) 35610696-8-9</p>
              <div className="space-y-1">
                <p className="hover:text-gold transition-colors cursor-pointer">headoffice@shafi.com</p>
                <p className="hover:text-gold transition-colors cursor-pointer text-gold decoration-gold/30">sales.mst@shafi.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs uppercase tracking-wider">
            © {currentYear} Shafi Tannery. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-600 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
