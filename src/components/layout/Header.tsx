import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navGroups = {
    company: [
      { href: "/about", label: "Group Profile" },
      { href: "/quality", label: "Quality" },
      { href: "/environment", label: "Environment" },
      { href: "/social-responsibility", label: "Social Responsibility" },
      { href: "/careers", label: "Careers" },

      
    ],
    showcase: [
      { href: "/fashion", label: "Fashion" },
      { href: "/innovation", label: "Innovation" },
      { href: "/gallery", label: "Gallery" },
      { href: "/exhibition", label: "Exhibitions" },
    ],
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-white/10 py-2 shadow-2xl" 
          : "bg-gradient-to-b from-background/90 via-background/50 to-transparent py-4 border-b border-white/5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center p-2 rounded-lg bg-gradient-to-b from-white via-white to-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.45)] ring-1 ring-gold/40 transition-all duration-300 group-hover:ring-gold group-hover:shadow-[0_4px_25px_rgba(197,160,89,0.3)] flex-shrink-0">
              <img 
                src={logo} 
                alt="Muhammad Shafi Tanneries" 
                loading="eager" 
                className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-xl lg:text-2xl font-serif font-bold text-white tracking-[0.16em] uppercase group-hover:text-gold transition-colors duration-300">
                Shafi
              </span>
              <p className="text-[10px] text-gray-400 font-sans tracking-[0.24em] uppercase font-medium">
                Your Leather Specialist
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/"
                      className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-transparent text-white/90 hover:bg-white/5 hover:text-gold uppercase tracking-[0.14em] text-[13px] font-medium transition-colors px-3 py-2", 
                        location.pathname === "/" && "text-gold font-semibold"
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/services"
                      className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-transparent text-white/90 hover:bg-white/5 hover:text-gold uppercase tracking-[0.14em] text-[13px] font-medium transition-colors px-3 py-2", 
                        location.pathname === "/services" && "text-gold font-semibold"
                      )}
                    >
                      Services
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-white/5 hover:text-gold uppercase tracking-[0.14em] text-[13px] font-medium transition-colors px-3 py-2">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2 bg-card/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-lg">
                      {navGroups.company.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className={cn(
                              "block select-none rounded-md px-3.5 py-2.5 text-xs tracking-wider uppercase font-medium leading-none no-underline outline-none transition-all hover:bg-gold/10 hover:text-gold",
                              location.pathname === link.href ? "text-gold bg-gold/5" : "text-gray-300"
                            )}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-white/5 hover:text-gold uppercase tracking-[0.14em] text-[13px] font-medium transition-colors px-3 py-2">
                    Showcase
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2 bg-card/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-lg">
                      {navGroups.showcase.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className={cn(
                              "block select-none rounded-md px-3.5 py-2.5 text-xs tracking-wider uppercase font-medium leading-none no-underline outline-none transition-all hover:bg-gold/10 hover:text-gold",
                              location.pathname === link.href ? "text-gold bg-gold/5" : "text-gray-300"
                            )}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/agents"
                      className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-transparent text-white/90 hover:bg-white/5 hover:text-gold uppercase tracking-[0.14em] text-[13px] font-medium transition-colors px-3 py-2",
                        location.pathname === "/agents" && "text-gold font-semibold"
                      )}
                    >
                      Agents
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="border border-gold/70 bg-gold/5 text-gold hover:bg-gold hover:text-black rounded-sm uppercase text-xs tracking-[0.2em] font-semibold px-6 py-5 ml-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]"
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="xl:hidden py-6 bg-background border-t border-white/10 animate-fade-in absolute top-full left-0 right-0 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="px-4 space-y-4">
              <Link
                to="/"
                className={cn(
                  "block text-sm font-bold tracking-widest uppercase py-2 text-white/80 hover:text-gold border-b border-white/5",
                  location.pathname === "/" && "text-gold"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/services"
                className={cn(
                  "block text-sm font-bold tracking-widest uppercase py-2 text-white/80 hover:text-gold border-b border-white/5",
                  location.pathname === "/services" && "text-gold"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="company" className="border-b border-white/5">
                  <AccordionTrigger className="text-sm font-bold tracking-widest uppercase text-white/80 hover:text-gold hover:no-underline py-2">
                    Company
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 pl-4 pb-2">
                      {navGroups.company.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className={cn(
                            "text-sm font-medium transition-colors hover:text-gold py-1",
                            location.pathname === link.href ? "text-gold" : "text-muted-foreground"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="showcase" className="border-b border-white/5">
                  <AccordionTrigger className="text-sm font-bold tracking-widest uppercase text-white/80 hover:text-gold hover:no-underline py-2">
                    Showcase
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 pl-4 pb-2">
                      {navGroups.showcase.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className={cn(
                            "text-sm font-medium transition-colors hover:text-gold py-1",
                            location.pathname === link.href ? "text-gold" : "text-muted-foreground"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                to="/agents"
                className="block text-sm font-bold tracking-widest uppercase py-2 text-white/80 hover:text-gold border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Agents
              </Link>

              <Button variant="default" className="w-full mt-4 bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.16em] text-xs py-5 rounded-sm shadow-md" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
