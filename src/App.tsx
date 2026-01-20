import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollToHash from "./components/layout/ScrollToHash";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const QualityPage = lazy(() => import("./pages/QualityPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LeatherFashionPage = lazy(() => import("./pages/LeatherFashionPage"));
const InnovationPage = lazy(() => import("./pages/InnovationPage"));
const EnvironmentPage = lazy(() => import("./pages/EnvironmentPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ExhibitionPage = lazy(() => import("./pages/ExhibitionPage"));
const AgentsPage = lazy(() => import("./pages/AgentsPage"));
const SocialResponsibilityPage = lazy(() => import("./pages/SocialResponsibilityPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <BrowserRouter>
        <ScrollToHash />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* New Pages */}
            <Route path="/fashion" element={<LeatherFashionPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/environment" element={<EnvironmentPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/exhibition" element={<ExhibitionPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/social-responsibility" element={<SocialResponsibilityPage />} />
            <Route path="/careers" element={<CareersPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
