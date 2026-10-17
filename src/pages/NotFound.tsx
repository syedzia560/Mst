import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/common/SEO";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <SEO
        title="404 - Page Not Found"
        description="The requested page could not be located on Muhammad Shafi Tanneries."
        canonicalPath="/404"
      />
      <Header />
      <main className="flex-grow flex items-center justify-center py-32 px-4">
        <div className="max-w-md w-full text-center space-y-8 bg-white/[0.02] p-10 md:p-14 border border-white/10 shadow-2xl backdrop-blur-sm">
          <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Error 404</p>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tight">404</h1>
          <div className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-white uppercase">Page Not Found</h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              The page you are looking for may have been moved, renamed, or is temporarily unavailable.
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border border-gold text-gold hover:bg-gold hover:text-black rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5"
              asChild
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" /> Return Home
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border border-white/20 text-white hover:border-gold hover:text-gold rounded-sm uppercase tracking-[0.16em] text-xs font-semibold px-6 py-5"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
