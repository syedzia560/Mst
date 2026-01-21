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
          ? "bg-background/95 backdrop-blur-md border-b border-white/10 py-2" 
          : "bg-transparent py-4 border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img src={logo} alt="Shafi Tannery" loading="eager" className="h-16 w-auto" />
            <div className="hidden sm:block">
               <span className="text-3xl font-serif font-bold text-white tracking-widest uppercase group-hover:text-gold transition-colors">Shafi</span>
              <p className="text-xs text-gray-400 tracking-[0.3em] uppercase">Your Leather Specialist</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10 hover:text-gold uppercase tracking-wider text-sm font-bold")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-gold uppercase tracking-wider text-sm font-bold">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-background border border-white/10">
                      {navGroups.company.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gold/10 hover:text-gold text-sm font-medium",
                              location.pathname === link.href ? "text-gold" : "text-muted-foreground"
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
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-gold uppercase tracking-wider text-sm font-bold">
                    Showcase
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-background border border-white/10">
                      {navGroups.showcase.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gold/10 hover:text-gold text-sm font-medium",
                              location.pathname === link.href ? "text-gold" : "text-muted-foreground"
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
                  <Link to="/agents">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10 hover:text-gold uppercase tracking-wider text-sm font-bold")}>
                      Agents
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="border-gold text-gold hover:bg-gold hover:text-black rounded-none uppercase text-sm tracking-widest font-bold px-8 py-6 ml-6"
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
                className="block text-sm font-bold tracking-widest uppercase py-2 text-white/80 hover:text-gold border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
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

              <Button variant="default" className="w-full mt-4 bg-gold text-black hover:bg-white" asChild>
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
